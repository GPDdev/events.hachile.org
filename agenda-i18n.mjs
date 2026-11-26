export const locales = { zh: "zh-CN", en: "en-GB", ja: "ja-JP", de: "de-DE" };
const index = { en: 0, ja: 1, de: 2 };

const labels = {
  "竞赛": ["Competition", "コンテスト", "Wettbewerb"],
  "奖学金": ["Scholarship", "奨学金", "Stipendium"],
  "校园活动": ["Campus event", "学内イベント", "Campusveranstaltung"],
  "校内报名": ["Campus registration", "学内申込", "Hochschulinterne Anmeldung"],
  "全国报名": ["National registration", "全国大会申込", "Landesweite Anmeldung"],
  "初赛": ["Preliminary round", "予選", "Vorrunde"],
  "作品截止": ["Entry deadline", "作品締切", "Einreichungsfrist"],
  "决赛": ["Final", "決勝", "Finale"],
  "全国决赛": ["National final", "全国決勝", "Landesfinale"],
  "竞速赛": ["Speed race", "スピード競技", "Geschwindigkeitswettbewerb"],
  "常规报名": ["Regular registration", "通常申込", "Reguläre Anmeldung"],
  "综合创意赛": ["Creative design event", "総合創作競技", "Kreativwettbewerb"],
  "报名": ["Registration", "参加申込", "Anmeldung"],
  "比赛": ["Competition", "競技", "Wettkampf"],
  "报名及交件截止": ["Registration and submission deadline", "申込・提出締切", "Anmelde- und Abgabefrist"],
  "电子材料截止": ["Online submission deadline", "電子書類提出締切", "Abgabefrist für digitale Unterlagen"],
  "申报截止": ["Application deadline", "申請締切", "Bewerbungsfrist"],
  "纸质材料截止": ["Hard-copy submission deadline", "紙の書類の提出締切", "Abgabefrist für Papierunterlagen"],
  "材料截止": ["Document deadline", "書類締切", "Frist für Unterlagen"],
  "线上投稿": ["Online submissions", "オンライン投稿", "Online-Einreichung"],
  "初赛报名": ["Preliminary registration", "予選申込", "Anmeldung zur Vorrunde"],
  "战队报名": ["Team registration", "チーム申込", "Teamanmeldung"],
  "区域赛": ["Regional contest", "地区大会", "Regionalwettbewerb"],
  "申请": ["Applications", "申請", "Bewerbung"],
  "终审决赛": ["Final judging", "最終審査・決勝", "Finale mit Juryentscheid"],
  "校内报名截止": ["Campus registration deadline", "学内申込締切", "Hochschulinterne Anmeldefrist"],
  "正式比赛": ["Main competition", "本大会", "Hauptwettbewerb"],
  "展览": ["Exhibition", "展示", "Ausstellung"],
  "第一阶段": ["First stage", "第1段階", "Erste Phase"],
  "讲座": ["Lecture", "講演", "Vortrag"],
  "报名截止": ["Registration deadline", "申込締切", "Anmeldeschluss"],
  "早鸟报名": ["Early registration", "早期申込", "Frühbucheranmeldung"],
  "第二阶段": ["Second stage", "第2段階", "Zweite Phase"],
  "正式赛": ["Main round", "本戦", "Hauptrunde"],
  "复赛报名": ["Second-round registration", "二次予選申込", "Anmeldung zur zweiten Runde"],
  "全国总决赛": ["National grand final", "全国最終決勝", "Nationales Gesamtfinale"],
  "正式赛（拟）": ["Main round (tentative)", "本戦（予定）", "Hauptrunde (vorläufig)"],
  "复赛": ["Second round", "二次予選", "Zweite Runde"],
  "赛站日程": ["Competition leg", "大会日程", "Turnieretappe"],
  "赛前培训": ["Pre-competition training", "大会前研修", "Vorbereitungstraining"],
  "提交截止": ["Submission deadline", "提出締切", "Abgabefrist"],
  "终审": ["Final review", "最終審査", "Abschlussbewertung"],
  "作品提交": ["Entry submission", "作品提出", "Einreichung der Beiträge"],
  "后期报名": ["Late registration", "後期申込", "Spätanmeldung"],
  "高校报名截止": ["University registration deadline", "大学による申込締切", "Anmeldeschluss für Hochschulen"],
  "国际赛": ["International round", "国際大会", "Internationaler Wettbewerb"],
  "大会": ["Conference", "大会", "Tagung"],
  "院系评奖与推荐": ["Department awards and recommendations", "学部の審査・推薦", "Auszeichnungen und Empfehlungen der Fachbereiche"],
  "校级竞赛目录": ["University competition directory", "大学の大会一覧", "Hochschulweites Wettbewerbsverzeichnis"],
  "院系赛事通知": ["Department competition notices", "学部の大会告知", "Wettbewerbsausschreibungen der Fachbereiche"],
  "全校": ["University-wide", "全学", "Hochschulweit"],
  "查看原文": ["View source", "原文を見る", "Zur Quelle"],
  "收藏": ["Save", "保存する", "Merken"],
  "已收藏": ["Saved", "保存済み", "Gemerkt"],
  "取消收藏": ["Remove from saved", "保存を解除", "Aus Merkliste entfernen"],
  "暂无已核实的赛程": ["No dates confirmed yet.", "確認済みの日程はまだありません。", "Noch keine bestätigten Termine."],
  "往期日程": ["Past events", "過去の日程", "Vergangene Termine"],
  "进行中与即将开始": ["Ongoing and upcoming", "開催中・今後の予定", "Aktuelle und kommende Termine"],
  "这个范围内暂无已核实的日程。可切换月份、查看往期日程，或浏览学院竞赛目录。": ["No confirmed dates match. Try another month, past events or the department directory.", "該当する日程はありません。他の月、過去の日程、または学部別の大会一覧をご覧ください。", "Keine bestätigten Termine für diese Auswahl. Versuchen Sie einen anderen Monat, vergangene Termine oder das Verzeichnis."],
  "没有匹配的目录记录，请修改关键词、学院或目录范围。": ["No entries match. Try another search term, department or directory category.", "該当する項目はありません。検索語、学部、または一覧の範囲を変更してください。", "Keine passenden Einträge. Ändern Sie Suchbegriff, Fachbereich oder Verzeichniskategorie."],
  "当前筛选下没有收藏。在日程或学院目录中点击「收藏」即可加入。": ["No saved items match. Select Save on an event or a directory entry.", "該当する保存項目はありません。日程や大会一覧で「保存する」を選んでください。", "Keine gemerkten Einträge für diese Auswahl. Wählen Sie bei einem Termin oder Eintrag „Merken“."]
};
export function label(value, lang) {
  return labels[value]?.[index[lang]] ?? value;
}

export function counts(lang, type, a, b) {
  const entriesEn = n => n === 1 ? "1 entry" : n + " entries";
  const entriesDe = n => n === 1 ? "1 Eintrag" : n + " Einträge";
  const eventsEn = n => n === 1 ? "1 event" : n + " events";
  const eventsDe = n => n === 1 ? "1 Termin" : n + " Termine";
  switch (type) {
    case "day": return { zh: a ? a + " 个日程" : "无日程", en: eventsEn(a), ja: "日程" + a + "件", de: eventsDe(a) }[lang];
    case "group": return { zh: a + " 项", en: entriesEn(a), ja: a + " 件", de: entriesDe(a) }[lang];
    case "agenda": return { zh: a + " 个日程，时间均为北京时间。", en: eventsEn(a) + " (Beijing time).", ja: a + " 件の日程（北京時間）。", de: eventsDe(a) + " (Pekinger Zeit)." }[lang];
    case "catalog": return { zh: a + " 个学院或责任单位，" + b + " 条目录记录。", en: a + (a === 1 ? " department or unit, " : " departments and units, ") + entriesEn(b) + ".", ja: a + " 学部・担当部門、" + b + " 件の項目。", de: a + (a === 1 ? " Fachbereich bzw. Stelle, " : " Fachbereiche bzw. Stellen, ") + entriesDe(b) + "." }[lang];
    case "saved": return { zh: a + " 个日程，" + b + " 条竞赛目录记录。", en: eventsEn(a) + ", " + entriesEn(b) + " in the directory.", ja: "日程 " + a + " 件、大会一覧 " + b + " 件。", de: eventsDe(a) + ", " + entriesDe(b) + " im Verzeichnis." }[lang];
  }
}
