import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { makeCalendar } from "../calendar.mjs";

const root = new URL("../", import.meta.url);
const data = JSON.parse(await readFile(new URL("data.json", root), "utf8"));
const isoDate = /^\d{4}-\d{2}-\d{2}$/;
const localInstant = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+08:00$/;

function uniqueIds(rows) {
  const ids = new Set(rows.map(row => row.id));
  assert.equal(ids.size, rows.length, "发现重复 ID");
  for (const id of ids) assert.match(id, /^[a-z0-9-]+$/);
  return ids;
}
function checkSource(url) {
  if (url === "./guohao-2025.txt") return;
  assert.ok(["https:", "http:"].includes(new URL(url).protocol), url);
}
function checkDate(value) {
  assert.ok(isoDate.test(value) || localInstant.test(value), value);
  const day = new Date(value.slice(0, 10) + "T00:00:00Z").toISOString().slice(0, 10);
  assert.equal(day, value.slice(0, 10));
  assert.ok(Number.isFinite(Date.parse(value)), value);
}
checkDate(data.updated);
const colleges = uniqueIds(data.colleges);
const catalog = uniqueIds(data.catalog);
uniqueIds(data.events);
for (const row of data.colleges) {
  assert.ok(row.name && row.scope && row.sourceLabel, row.id);
  checkSource(row.source);
}
for (const row of data.catalog) {
  assert.ok(colleges.has(row.college) && row.title && row.detail, row.id);
  if (row.source) checkSource(row.source);
}
for (const row of data.events) {
  assert.ok(["竞赛", "奖学金", "校园活动"].includes(row.kind) && row.title && row.stage && row.note && row.sourceLabel, row.id);
  assert.ok(Array.isArray(row.colleges) && row.colleges.every(id => colleges.has(id)), row.id);
  assert.ok((row.catalogIds || []).every(id => catalog.has(id)), row.id);
  checkSource(row.source);
  checkDate(row.start);
  if (row.end) {
    checkDate(row.end);
    assert.equal(isoDate.test(row.start), isoDate.test(row.end), row.id);
    assert.ok(row.end >= row.start, row.id);
  }
}
for (const lang of ["zh", "en", "ja", "de"]) {
  const feed = new URL(lang === "zh" ? "calendar.ics" : "calendar-" + lang + ".ics", root);
  const result = makeCalendar(data.events, data.updated, lang);
  if (process.argv.includes("--check")) {
    assert.equal(await readFile(feed, "utf8"), result, feed.pathname + " 需要重新生成");
  } else {
    await writeFile(feed, result);
  }
}
console.log(`已检查 ${colleges.size} 个院系与单位、${catalog.size} 条目录记录、${data.events.length} 个日程节点。`);
