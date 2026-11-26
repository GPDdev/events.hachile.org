const locales = ['zh-CN', 'en', 'ja', 'de'];
const languageCodes = ['zh', 'en', 'ja', 'de'];

// Each row follows the order of the four language buttons.
const phrases = {
  title: ['同济校园活动与竞赛日历', 'Tongji campus events and competitions', '同済大学の学内行事・コンテストカレンダー', 'Veranstaltungen und Wettbewerbe der Tongji-Universität'],
  description: [
    '查询同济校园活动与大学生竞赛时间，按学院浏览竞赛目录和奖学金评审依据。',
    'Find campus events and student competitions at Tongji University and check scholarship criteria by school.',
    '同済大学の学内行事と学生コンテストの日程、各学院のコンテスト一覧や奨学金の選考基準を確認できます。',
    'Termine für Campusveranstaltungen und studentische Wettbewerbe an der Tongji-Universität sowie Stipendienkriterien der einzelnen Fakultäten.',
  ],
  skip: ['跳到日历与竞赛目录', 'Skip to calendar and competitions', 'カレンダーとコンテスト一覧へ移動', 'Zum Kalender und Wettbewerbsverzeichnis springen'],
  home: ['Tongji Events 首页', 'Tongji Events home', 'Tongji Events ホーム', 'Tongji Events Startseite'],
  language: ['界面语言', 'Interface language', '表示言語', 'Anzeigesprache'],
  eyebrow: ['同济大学校园日历', 'TONGJI CAMPUS CALENDAR', '同済大学キャンパスカレンダー', 'CAMPUSKALENDER DER TONGJI-UNIVERSITÄT'],
  heading: ['校园活动与竞赛日历', 'Campus events and competitions', '学内行事とコンテストの日程', 'Campusveranstaltungen und Wettbewerbe'],
  intro: [
    '查找报名截止日、比赛时间和校园活动，按学院查看竞赛推荐与奖学金评审依据。',
    'Find registration deadlines, competition dates and campus events. Browse recommended competitions and scholarship criteria for your school.',
    '申込締切、コンテストの開催日、学内行事を調べられます。学院別の推奨コンテストや奨学金の選考基準も確認できます。',
    'Hier finden Sie Anmeldefristen, Wettbewerbstermine und Campusveranstaltungen. Wählen Sie Ihre Fakultät für Wettbewerbsempfehlungen und Stipendienkriterien.',
  ],
  shanghaiDate: ['上海今日日期', 'Today’s date in Shanghai', '上海の今日の日付', 'Heutiges Datum in Shanghai'],
  today: ['今日', 'Today', '今日', 'Heute'],
  browse: ['浏览内容', 'Browse calendar and directory', '表示する内容', 'Ansicht wählen'],
  calendar: ['活动日历', 'Calendar', 'カレンダー', 'Kalender'],
  catalog: ['学院竞赛目录', 'Competition directory', '学院別コンテスト一覧', 'Wettbewerbsverzeichnis'],
  saved: ['我的收藏', 'Saved', 'お気に入り', 'Merkliste'],
  query: ['搜索活动、竞赛或学院', 'Search events, competitions or schools', '行事・コンテスト・学院を検索', 'Veranstaltungen, Wettbewerbe oder Fakultäten suchen'],
  college: ['学院', 'School', '学院', 'Fakultät'],
  allColleges: ['全部学院', 'All schools', 'すべての学院', 'Alle Fakultäten'],
  kind: ['类别', 'Category', '種類', 'Kategorie'],
  allKinds: ['全部类别', 'All categories', 'すべての種類', 'Alle Kategorien'],
  stage: ['节点', 'Stage', '段階', 'Phase'],
  allStages: ['全部节点', 'All stages', 'すべての段階', 'Alle Phasen'],
  scope: ['目录范围', 'Directory scope', '掲載区分', 'Verzeichnisbereich'],
  allScopes: ['全部范围', 'All entries', 'すべての区分', 'Alle Einträge'],
  collegeRules: ['院系评奖与推荐', 'School criteria and recommendations', '学院の選考基準・推奨', 'Kriterien und Empfehlungen der Fakultäten'],
  universityList: ['校级竞赛目录', 'University competition list', '大学のコンテスト一覧', 'Wettbewerbsliste der Universität'],
  collegeNotices: ['院系赛事通知', 'School competition notices', '学院からのコンテスト案内', 'Wettbewerbsausschreibungen der Fakultäten'],
  includeGeneral: ['同时显示其他面向全校或公开报名的日程', 'Also include other events open to the whole university or the public', '全学対象または一般参加可能な他の日程も表示', 'Weitere hochschulweite und öffentlich zugängliche Termine einbeziehen'],
  loadError: ['日历数据暂时无法载入。', 'Calendar data could not be loaded.', '日程データを読み込めませんでした。', 'Die Kalenderdaten konnten nicht geladen werden.'],
  reload: ['重新加载', 'Reload', '再読み込み', 'Erneut laden'],
  month: ['月历', 'Monthly calendar', '月間カレンダー', 'Monatskalender'],
  prev: ['上个月', 'Previous month', '前の月', 'Vorheriger Monat'],
  next: ['下个月', 'Next month', '次の月', 'Nächster Monat'],
  chooseDay: ['选择日期', 'Choose a date', '日付を選択', 'Datum wählen'],
  hasEvents: ['有日程', 'Has events', '予定あり', 'Mit Terminen'],
  backToday: ['回到今天', 'Back to today', '今日に戻る', 'Zurück zu heute'],
  agenda: ['日程表', 'Agenda', '日程一覧', 'Terminübersicht'],
  subscribe: ['订阅全站日历', 'Subscribe to all events', '全日程を購読', 'Alle Termine abonnieren'],
  export: ['导出当前日程', 'Export shown events', '表示中の日程を書き出す', 'Angezeigte Termine exportieren'],
  period: ['日程时间范围', 'Agenda time range', '日程の表示期間', 'Zeitraum der Terminübersicht'],
  upcoming: ['进行中与即将开始', 'Ongoing and upcoming', '開催中・今後の予定', 'Laufend und anstehend'],
  shownMonth: ['当前月历', 'Selected month', '表示中の月', 'Gewählter Monat'],
  past: ['往期日程', 'Past events', '過去の日程', 'Vergangene Termine'],
  loading: ['正在载入日程…', 'Loading events…', '日程を読み込んでいます…', 'Termine werden geladen…'],
  catalogNote: [
    '院系条目列出适用年度、对象与文件依据。校级目录按赛事责任单位索引，奖学金认定请查阅本人所在学院的评审办法。',
    'School entries list the applicable year, eligible students and source documents. The university list groups competitions by the unit in charge. Check your own school’s rules to see which competitions count toward scholarships.',
    '学院の項目には対象年度、対象者、根拠となる文書を掲載しています。大学の一覧ではコンテストを担当部門別に分類しています。奨学金の選考に算入されるかは、所属学院の選考規定をご確認ください。',
    'Die Fakultätseinträge nennen das jeweilige Jahr, die Zielgruppe und die zugrunde liegenden Dokumente. Das Universitätsverzeichnis ordnet Wettbewerbe nach der zuständigen Stelle. Welche Leistungen bei Stipendien berücksichtigt werden, regelt Ihre Fakultät.',
  ],
  exportSaved: ['导出收藏日程', 'Export saved events', '保存した日程を書き出す', 'Gemerkte Termine exportieren'],
  savedNote: ['收藏保存在当前浏览器中。', 'Your saved items stay in this browser.', 'お気に入りはこのブラウザーに保存されます。', 'Ihre Merkliste wird in diesem Browser gespeichert.'],
  author: ['GPDdev 个人整理', 'Curated by GPDdev', '編集：GPDdev', 'Zusammengestellt von GPDdev'],
  feedback: ['提交活动或纠错', 'Suggest an event or correction', '行事の掲載・訂正を依頼', 'Termin oder Korrektur vorschlagen'],
  timezone: ['北京时间', 'Beijing time', '北京時間', 'Pekinger Zeit'],
  updated: ['资料更新', 'Data updated', 'データ更新日', 'Datenstand'],
};

const weekdays = [
  ['一', '二', '三', '四', '五', '六', '日'],
  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  ['月', '火', '水', '木', '金', '土', '日'],
  ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
];

export function applyStaticLanguage(lang = 'zh') {
  const index = Math.max(0, languageCodes.indexOf(lang));
  document.documentElement.lang = locales[index];
  document.title = phrases.title[index] + ' | Tongji Events';
  document.querySelector('meta[name="description"]').content = phrases.description[index];
  for (const element of document.querySelectorAll('[data-i18n]')) {
    element.textContent = phrases[element.dataset.i18n][index];
  }
  for (const element of document.querySelectorAll('[data-i18n-aria]')) {
    element.setAttribute('aria-label', phrases[element.dataset.i18nAria][index]);
  }
  for (const element of document.querySelectorAll('[data-i18n-placeholder]')) {
    element.placeholder = phrases[element.dataset.i18nPlaceholder][index];
  }
  document.querySelectorAll('.weekdays span').forEach((day, number) => {
    day.textContent = weekdays[index][number];
  });
  for (const button of document.querySelectorAll('button[data-lang]')) {
    button.setAttribute('aria-pressed', String(button.dataset.lang === languageCodes[index]));
  }
}
