import { makeCalendar } from "./calendar.mjs";
import { locales, label, counts } from "./agenda-i18n.mjs";
import { applyStaticLanguage } from "./ui-i18n.mjs";
import { eventText } from "./event-i18n.mjs";
import { collegeText, catalogText } from "./catalog-i18n.mjs";

const byId = id => document.getElementById(id);
const zone = "Asia/Shanghai";
const languageKey = "tongji-events-language";
function initialLanguage() {
  let preference;
  try { preference = localStorage.getItem(languageKey); } catch { /* Storage is optional. */ }
  const requested = new URL(location.href).searchParams.get("lang");
  return [requested, preference, "zh"].find(value => Object.hasOwn(locales, value));
}
let lang = initialLanguage();
const t = value => label(value, lang);
const eventField = (row, field) => eventText(row, field, lang);
const catalogField = (row, field) => catalogText(row, field, lang);
const collegeField = (row, field) => collegeText(row, field, lang);
const dateStyles = {
  fullDate: { year: "numeric", month: "short", day: "numeric" },
  weekday: { weekday: "long" },
  month: { month: "short" },
  monthYear: { year: "numeric", month: "long" }
};
const dateFormatters = new Map();
function formatDate(date, style) {
  const key = lang + "/" + style;
  if (!dateFormatters.has(key)) {
    dateFormatters.set(key, new Intl.DateTimeFormat(locales[lang], { timeZone: zone, ...dateStyles[style] }));
  }
  return dateFormatters.get(key).format(date);
}
const dayFormat = new Intl.DateTimeFormat("en-CA", { timeZone: zone, year: "numeric", month: "2-digit", day: "2-digit" });
const timeFormat = new Intl.DateTimeFormat("zh-CN", { timeZone: zone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
const nowDay = () => dayFormat.format(new Date());
const allDay = value => value.length === 10;
const dayOf = value => allDay(value) ? value : dayFormat.format(new Date(value));
const isoDay = date => date.toISOString().slice(0, 10);
const md = value => lang === "zh" ? dayOf(value).replaceAll("-", "/") : formatDate(new Date(value), "fullDate");
const stamp = value => allDay(value) ? md(value) : md(value) + " " + timeFormat.format(new Date(value));
const until = event => event.end || event.start;
const hasEnded = event => allDay(until(event)) ? dayOf(until(event)) < nowDay() : Date.parse(until(event)) < Date.now();
const onDate = (event, day) => dayOf(event.start) <= day && day <= dayOf(until(event));
const family = item => item.category || "院系评奖与推荐";
// Keep the original key so a site rename never drops an existing bookmark.
const localKey = "hachile-events-bookmarks-v1";
let bookmarks;
try {
  const stored = JSON.parse(localStorage.getItem(localKey) || "[]");
  bookmarks = new Set(Array.isArray(stored) ? stored : []);
} catch { bookmarks = new Set(); }

let db;
let collegeById;
let catalogById;
let relatedEvents;
let eventById;
let view = "agenda";
let period = "upcoming";
let month = nowDay().slice(0, 7);
let pickedDay = "";
let visibleEvents = [];
let savedEvents = [];
const opened = new Set();

function el(tag, text, cls) {
  const node = document.createElement(tag);
  if (text !== null && text !== undefined) node.textContent = text;
  if (cls) node.className = cls;
  return node;
}
function sourceLink(url, title) {
  const a = el("a", title || t("查看原文"), "source");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}
function empty(text) { return el("p", text, "empty"); }
function updateToday() {
  const current = new Date();
  const date = nowDay();
  byId("paper-day").textContent = date.slice(8);
  byId("paper-week").textContent = formatDate(current, "weekday");
  byId("paper-month").textContent = date.slice(0, 7).replace("-", " / ");
}
function populateOptions(id, pairs) {
  const select = byId(id);
  const value = select.value;
  select.length = 1;
  for (const [value, name] of pairs) select.add(new Option(name, value));
  select.value = value;
}
const searchIndex = new WeakMap();
function queryMatches(row, buildTerms) {
  const query = byId("query").value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  if (!query.length) return true;
  let text = searchIndex.get(row);
  if (text === undefined) {
    text = Object.keys(locales).flatMap(buildTerms).filter(Boolean).join(" ").toLocaleLowerCase();
    searchIndex.set(row, text);
  }
  return query.every(term => text.includes(term));
}
function collegeNames(ids, language = lang) {
  const names = ids.map(id => collegeText(collegeById.get(id), "name", language));
  return names.join(language === "zh" || language === "ja" ? "、" : ", ");
}
function eventColleges(event) {
  return [...new Set([...event.colleges, ...(event.catalogIds || []).map(id => catalogById.get(id)?.college).filter(Boolean)])];
}
function eventMatches(event, filtered = true) {
  const colleges = eventColleges(event);
  const selected = byId("college").value;
  const includeGeneral = byId("include-general").checked && !event.colleges.length;
  return (!selected || colleges.includes(selected) || includeGeneral)
    && (!filtered || !byId("kind").value || byId("kind").value === event.kind)
    && (!filtered || !byId("stage").value || byId("stage").value === event.stage)
    && queryMatches(event, language => [
      eventText(event, "title", language), eventText(event, "note", language), eventText(event, "sourceLabel", language),
      label(event.kind, language), label(event.stage, language), dayOf(event.start), dayOf(until(event)),
      collegeNames(colleges, language), !event.colleges.length ? label("全校", language) : "",
      ...(event.catalogIds || []).map(id => catalogText(catalogById.get(id), "title", language))
    ]);
}
function catalogMatches(item, filterScope = true) {
  const college = collegeById.get(item.college);
  return (!byId("college").value || item.college === byId("college").value)
    && (!filterScope || !byId("scope").value || family(item) === byId("scope").value)
    && queryMatches(item, language => [
      catalogText(item, "title", language), catalogText(item, "detail", language),
      catalogText(item, "sourceLabel", language), collegeText(college, "name", language), label(family(item), language)
    ]);
}
function chron(a, b) {
  const millis = value => Date.parse(allDay(value) ? value + "T00:00:00+08:00" : value);
  return millis(a.start) - millis(b.start) || eventField(a, "title").localeCompare(eventField(b, "title"), locales[lang]);
}
function saveButton(key, name) {
  const isSaved = bookmarks.has(key);
  const button = el("button", t(isSaved ? "已收藏" : "收藏"), "save");
  button.type = "button";
  button.dataset.save = key;
  button.setAttribute("aria-label", t(isSaved ? "取消收藏" : "收藏") + " — " + name);
  button.setAttribute("aria-pressed", String(isSaved));
  return button;
}
function dateRange(event) {
  if (!event.end || event.start === event.end) return stamp(event.start);
  if (!allDay(event.end) && !allDay(event.start) && dayOf(event.start) === dayOf(event.end)) {
    return stamp(event.start) + " – " + timeFormat.format(new Date(event.end));
  }
  return stamp(event.start) + " – " + stamp(event.end);
}
function eventCard(event) {
  const row = el("article", null, "event-card");
  const day = dayOf(event.start);
  row.dataset.event = event.id;
  row.tabIndex = -1;
  const date = el("div", null, "date-stamp");
  date.setAttribute("aria-hidden", "true");
  date.append(el("small", formatDate(new Date(day), "month")), el("strong", day.slice(8)));
  const info = el("div");
  const tags = el("div", null, "tags");
  const kindClass = event.kind === "校园活动" ? " campus" : event.kind === "奖学金" ? " award" : "";
  tags.append(el("span", t(event.kind), "kind" + kindClass), el("span", t(event.stage), "stage"));
  const footer = el("div", null, "entry-foot");
  if (event.source) footer.append(sourceLink(event.source, eventField(event, "sourceLabel")));
  footer.append(saveButton("e:" + event.id, eventField(event, "title")));
  info.append(tags, el("h3", eventField(event, "title")), el("p", dateRange(event), "schedule"));
  if (event.note) info.append(el("p", eventField(event, "note"), "event-note"));
  if (event.colleges.length) info.append(el("p", collegeNames(event.colleges), "college-names"));
  info.append(footer);
  row.append(date, info);
  return row;
}
function catalogRow(item) {
  const college = collegeById.get(item.college);
  const row = el("article", null, "catalog-item");
  const head = el("div", null, "card-heading");
  head.append(el("h3", catalogField(item, "title")), saveButton("c:" + item.id, catalogField(item, "title")));
  row.append(head);
  if (item.detail) row.append(el("p", catalogField(item, "detail"), "catalog-detail"));
  const dates = relatedEvents.get(item.id) || [];
  if (dates.length) {
    const list = el("ul");
    for (const event of dates) {
      const li = el("li");
      const button = el("button", t(event.stage) + "  " + dateRange(event));
      button.type = "button";
      button.dataset.jump = event.id;
      li.append(button);
      list.append(li);
    }
    row.append(list);
  } else {
    row.append(el("p", t("暂无已核实的赛程"), "college-names"));
  }
  const url = item.source || college?.source;
  if (url) row.append(sourceLink(url, catalogField(item, "sourceLabel") || collegeField(college, "sourceLabel")));
  return row;
}
function calendar(events) {
  const [year, number] = month.split("-").map(Number);
  const first = new Date(Date.UTC(year, number - 1, 1));
  const total = new Date(Date.UTC(year, number, 0)).getUTCDate();
  byId("month-title").textContent = formatDate(first, "monthYear");
  const fragment = document.createDocumentFragment();
  for (let gap = 0; gap < (first.getUTCDay() + 6) % 7; gap++) fragment.append(el("span"));
  for (let d = 1; d <= total; d++) {
    const day = month + "-" + String(d).padStart(2, "0");
    const count = events.filter(event => onDate(event, day)).length;
    const button = el("button", d, "day");
    button.type = "button";
    button.dataset.date = day;
    button.classList.toggle("today", day === nowDay());
    button.classList.toggle("marked", count > 0);
    button.setAttribute("aria-label", md(day) + ", " + counts(lang, "day", count));
    button.setAttribute("aria-pressed", String(period === "day" && day === pickedDay));
    if (day === nowDay()) button.setAttribute("aria-current", "date");
    fragment.append(button);
  }
  byId("month-grid").replaceChildren(fragment);
}
function renderAgenda() {
  const matches = db.events.filter(event => eventMatches(event)).sort(chron);
  calendar(matches);
  visibleEvents = matches.filter(event => {
    if (period === "month") return dayOf(event.start).slice(0, 7) <= month && dayOf(until(event)).slice(0, 7) >= month;
    if (period === "day") return onDate(event, pickedDay);
    return period === "past" ? hasEnded(event) : !hasEnded(event);
  });
  if (period === "past") visibleEvents.reverse();
  document.querySelectorAll("[data-period]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.period === period)));
  const periodName = { month: byId("month-title").textContent, day: pickedDay ? md(pickedDay) : "", past: t("往期日程"), upcoming: t("进行中与即将开始") }[period];
  byId("agenda-status").textContent = periodName + (lang === "zh" ? "，共 " : " — ") + counts(lang, "agenda", visibleEvents.length);
  byId("export").disabled = !visibleEvents.length;
  byId("event-list").replaceChildren(...(visibleEvents.length ? visibleEvents.map(eventCard) :
    [empty(t("这个范围内暂无已核实的日程。可切换月份、查看往期日程，或浏览学院竞赛目录。"))]));
}
function catalogGroup(college, items) {
  const details = el("details", null, "catalog-group");
  const summary = el("summary", collegeField(college, "name"));
  summary.append(el("small", counts(lang, "group", items.length)));
  details.append(summary);
  function fill() {
    if (details.children.length > 1) return;
    const body = el("div", null, "catalog-body");
    if (college.scope) body.append(el("p", collegeField(college, "scope"), "scope"));
    if (college.source) body.append(sourceLink(college.source, collegeField(college, "sourceLabel")));
    for (const category of ["院系评奖与推荐", "校级竞赛目录", "院系赛事通知"]) {
      const entries = items.filter(item => family(item) === category);
      if (!entries.length) continue;
      body.append(el("h3", t(category), "catalog-subhead"), ...entries.map(catalogRow));
    }
    details.append(body);
  }
  details.open = byId("college").value === college.id || !!byId("query").value.trim() || opened.has(college.id);
  if (details.open) fill();
  details.addEventListener("toggle", () => {
    if (details.open) { opened.add(college.id); fill(); }
    else opened.delete(college.id);
  });
  return details;
}
function renderCatalog() {
  const matches = db.catalog.filter(item => catalogMatches(item));
  const groups = db.colleges.map(college => [college, matches.filter(item => item.college === college.id)])
    .filter(([, items]) => items.length);
  byId("catalog-status").textContent = counts(lang, "catalog", groups.length, matches.length);
  byId("catalog-list").replaceChildren(...(groups.length ? groups.map(([college, items]) => catalogGroup(college, items)) :
    [empty(t("没有匹配的目录记录，请修改关键词、学院或目录范围。"))]));
}
function renderSaved() {
  savedEvents = db.events.filter(event => bookmarks.has("e:" + event.id) && eventMatches(event, false)).sort(chron);
  const catalog = db.catalog.filter(item => bookmarks.has("c:" + item.id) && catalogMatches(item, false));
  byId("saved-status").textContent = counts(lang, "saved", savedEvents.length, catalog.length);
  byId("export-saved").disabled = !savedEvents.length;
  const nodes = savedEvents.map(eventCard);
  for (const item of catalog) {
    const box = el("div", null, "saved-item");
    box.append(el("p", collegeField(collegeById.get(item.college), "name") + " / " + t(family(item)), "college-names"), catalogRow(item));
    nodes.push(box);
  }
  byId("saved-list").replaceChildren(...(nodes.length ? nodes : [empty(t("当前筛选下没有收藏。在日程或学院目录中点击「收藏」即可加入。"))]));
}
function render() {
  if (!db) return;
  byId("saved-count").textContent = bookmarks.size;
  for (const mode of ["agenda", "catalog", "saved"]) byId(mode + "-view").hidden = mode !== view;
  document.querySelectorAll("[data-view]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.view === view)));
  document.querySelectorAll("[data-event-filter]").forEach(label => { label.hidden = view !== "agenda"; });
  byId("scope-filter").hidden = view !== "catalog";
  byId("general-filter").hidden = view === "catalog" || !byId("college").value;
  if (view === "agenda") renderAgenda();
  if (view === "catalog") renderCatalog();
  if (view === "saved") renderSaved();
}
function moveMonth(by) {
  const [year, number] = month.split("-").map(Number);
  month = isoDay(new Date(Date.UTC(year, number - 1 + by, 1))).slice(0, 7);
  period = "month";
  render();
}
function focusDate(date) { document.querySelector('[data-date="' + date + '"]')?.focus({ preventScroll: true }); }
function jumpToEvent(id) {
  const event = eventById.get(id);
  if (!event) return;
  for (const id of ["query", "college", "kind", "stage"]) byId(id).value = "";
  view = "agenda";
  pickedDay = dayOf(event.start);
  month = pickedDay.slice(0, 7);
  period = "day";
  render();
  byId("event-list").querySelector('[data-event="' + CSS.escape(event.id) + '"]')?.focus();
}
function onClick(e) {
  const button = e.target.closest("button");
  if (button?.dataset.lang && Object.hasOwn(locales, button.dataset.lang)) {
    lang = button.dataset.lang;
    try { localStorage.setItem(languageKey, lang); } catch { /* Keep this session's preference. */ }
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(history.state, "", url);
    refreshLanguage();
    return;
  }
  if (!button || !db) return;
  if (button.dataset.save) {
    const key = button.dataset.save;
    if (bookmarks.has(key)) bookmarks.delete(key); else bookmarks.add(key);
    try { localStorage.setItem(localKey, JSON.stringify([...bookmarks])); } catch { /* Keep this session's selections. */ }
    render();
    const panel = byId(view + "-view");
    (panel.querySelector('[data-save="' + CSS.escape(key) + '"]') || document.querySelector('[data-view="' + view + '"]')).focus({ preventScroll: true });
  } else if (button.dataset.jump) {
    jumpToEvent(button.dataset.jump);
  } else if (button.dataset.view) {
    view = button.dataset.view;
    render();
  } else if (button.dataset.period) {
    period = button.dataset.period;
    render();
  } else if (button.dataset.date) {
    period = "day";
    pickedDay = button.dataset.date;
    render();
    focusDate(pickedDay);
  }
}

function download(items) {
  if (!items.length) return;
  const blob = new Blob([makeCalendar(items, db.updated, lang)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = el("a");
  a.href = url;
  a.download = "tongji-events-" + lang + "-" + nowDay() + ".ics";
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function refreshLanguage() {
  applyStaticLanguage(lang);
  updateToday();
  const feed = lang === "zh" ? "calendar.ics" : "calendar-" + lang + ".ics";
  const subscription = document.querySelector(".calendar-actions a");
  const feedUrl = new URL(subscription.href);
  subscription.href = new URL(feed, feedUrl).href;
  if (!db) return;
  populateOptions("college", db.colleges.map(item => [item.id, collegeField(item, "name")]));
  for (const field of ["kind", "stage"]) populateOptions(field, [...new Set(db.events.map(e => e[field]))].map(value => [value, t(value)]));
  render();
}
async function start() {
  refreshLanguage();
  try {
    const response = await fetch("./data.json");
    if (!response.ok) throw new Error("Missing calendar data");
    db = await response.json();
    collegeById = new Map(db.colleges.map(item => [item.id, item]));
    catalogById = new Map(db.catalog.map(item => [item.id, item]));
    eventById = new Map(db.events.map(item => [item.id, item]));
    relatedEvents = new Map();
    for (const event of [...db.events].sort(chron)) {
      for (const id of event.catalogIds || []) {
        if (!relatedEvents.has(id)) relatedEvents.set(id, []);
        relatedEvents.get(id).push(event);
      }
    }
    for (const key of bookmarks) {
      if (typeof key !== "string" || !(key.startsWith("e:") && eventById.has(key.slice(2))) && !(key.startsWith("c:") && catalogById.has(key.slice(2)))) bookmarks.delete(key);
    }
    byId("updated").textContent = db.updated;
    byId("updated").dateTime = db.updated;
    refreshLanguage();
  } catch {
    byId("load-error").hidden = false;
    byId("agenda-view").hidden = true;
  }
}
byId("reload").addEventListener("click", () => location.reload());
byId("export").addEventListener("click", () => download(visibleEvents));
byId("export-saved").addEventListener("click", () => download(savedEvents));
byId("prev-month").addEventListener("click", () => moveMonth(-1));
byId("next-month").addEventListener("click", () => moveMonth(1));
byId("today").addEventListener("click", () => {
  period = "day";
  pickedDay = nowDay();
  month = pickedDay.slice(0, 7);
  render();
  focusDate(pickedDay);
});
byId("query").addEventListener("input", render);
for (const id of ["college", "kind", "stage", "scope", "include-general"]) byId(id).addEventListener("change", render);
document.addEventListener("click", onClick);
start();
