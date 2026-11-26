import facultyTitles from './catalog-titles-a.mjs';
import universityTitles from './catalog-titles-b.mjs';
import { unitNames, scopeNotes, references, moreReferences, scoringNotes } from './catalog-rules.mjs';

const titles = { ...facultyTitles, ...universityTitles };
const sources = { ...references, ...moreReferences };
const column = { en: 0, ja: 1, de: 2 };
const levels = {
  国际级: ['international', '国際', 'international'],
  国家级: ['national', '全国', 'national'],
  省部级: ['provincial/ministerial', '省・部', 'Provinz-/Ministeriumsebene'],
  校级: ['university', '学内', 'Hochschulebene'],
  参照国际级: ['assessed at international level', '国際大会に準じて評価', 'wie ein internationaler Wettbewerb bewertet'],
};
const disciplines = {
  建筑: ['architecture', '建築', 'Architektur'],
  规划: ['planning', '都市計画', 'Planung'],
  景观: ['landscape architecture', 'ランドスケープ', 'Landschaftsarchitektur'],
  暖通: ['HVAC', '暖房・換気・空調', 'Heizungs-, Lüftungs- und Klimatechnik'],
  第二课堂: ['co-curricular activities', '課外活動', 'außercurriculare Aktivitäten'],
};
const designCategories = {
  '学科竞赛、社会实践与文体竞赛': [
    'subject competitions, social practice, arts and sports',
    '学科競技・社会実践・文化スポーツ大会',
    'Fachwettbewerbe, gesellschaftliche Praxis, Kultur und Sport',
  ],
  设计竞赛: ['design competitions', 'デザインコンテスト', 'Designwettbewerbe'],
};

function lookup(table, text, lang) {
  return table[text]?.[column[lang]] ?? text;
}

function translatedDetail(text, lang) {
  const index = column[lang];
  if (scoringNotes[text]) return scoringNotes[text][index];

  let match = text.match(/^(\d+)校级目录第(\d+)项，赛事等级 ([ABC]\+?)，级别为([^。]+)。责任单位：([^。]+)。$/u);
  if (match) {
    const [, year, id, grade, level, owner] = match;
    const separator = lang === 'ja' ? '、' : ', ';
    const tiers = level.split('、').map(value => lookup(levels, value, lang)).join(separator);
    const units = owner.split('、').map(value => lookup(unitNames, value, lang)).join(separator);
    return [
      `University catalogue ${year}, entry ${id}. Grade ${grade}. Levels: ${tiers}. Responsible unit: ${units}.`,
      `${year}年大学目録の第${id}項。評価ランクは${grade}、開催水準は${tiers}。担当：${units}。`,
      `Universitätsverzeichnis ${year}, Eintrag ${id}. Kategorie ${grade}. Ebenen: ${tiers}. Zuständig: ${units}.`,
    ][index];
  }

  match = text.match(/^(\d+)年供稿附件2第(\d+)项，赛事系数 ([\d.]+)。$/u);
  if (match) {
    const [, year, id, coefficient] = match;
    return [
      `Entry ${id} in the supplied Appendix 2 (${year}). Competition coefficient: ${coefficient}.`,
      `${year}年提供資料・付録2の第${id}項。大会係数は${coefficient}です。`,
      `Eintrag ${id} im bereitgestellten Anhang 2 (${year}). Wettbewerbsfaktor: ${coefficient.replace('.', ',')}.`,
    ][index];
  }

  match = text.match(/^本科生奖学金评定实施细则，附件四参考列表第 (\d+) 项。$/u);
  if (match) {
    const id = match[1];
    return [
      `Undergraduate scholarship rules, Appendix 4, reference list entry ${id}.`,
      `学部生奨学金審査規程、付録4参考一覧の第${id}項。`,
      `Bachelor-Stipendienordnung, Anhang 4, Eintrag ${id} der Referenzliste.`,
    ][index];
  }

  match = text.match(/^本科生奖学金参考类目「([^」]+)」第 (\d+) 项。$/u);
  if (match) {
    const category = lookup(designCategories, match[1], lang);
    const id = match[2];
    return [
      `Undergraduate scholarship reference list, “${category}”, entry ${id}.`,
      `学部生奨学金の参考区分「${category}」の第${id}項。`,
      `Bachelor-Stipendienverzeichnis, Kategorie „${category}“, Eintrag ${id}.`,
    ][index];
  }

  if (text === '2026 年研究生奖学金竞赛目录：建筑 A11（国际赛段）、B7（国内赛段），不重复加分。') {
    return [
      '2026 graduate scholarship catalogue, architecture: A11 for the international stage and B7 for the domestic stage. Points cannot be counted twice.',
      '2026年大学院生奨学金目録・建築：国際段階はA11、国内段階はB7。重複加点は認められません。',
      'Graduiertenstipendienverzeichnis 2026, Architektur: A11 für die internationale und B7 für die nationale Phase. Keine doppelte Anrechnung.',
    ][index];
  }
  match = text.match(/^(\d+) 年研究生奖学金竞赛目录：([^ ]+) ([AB]\d+)，([^。]+)。$/u);
  if (match) {
    const [, year, subject, entry, tier] = match;
    const discipline = lookup(disciplines, subject, lang);
    const level = lookup(levels, tier, lang);
    return [
      `Graduate scholarship catalogue ${year}: ${discipline}, entry ${entry} (${level}).`,
      `${year}年大学院生奨学金目録：${discipline}、${entry}（${level}）。`,
      `Graduiertenstipendienverzeichnis ${year}: ${discipline}, Eintrag ${entry} (${level}).`,
    ][index];
  }
  return text;
}

export function collegeText(row, field, lang) {
  const text = row[field] ?? '';
  if (!Object.hasOwn(column, lang)) return text;
  if (field === 'name') return lookup(unitNames, text, lang);
  if (field === 'scope') return lookup(scopeNotes, text, lang);
  if (field === 'sourceLabel') return lookup(sources, text, lang);
  return text;
}

export function catalogText(row, field, lang) {
  const text = row[field] ?? '';
  if (!Object.hasOwn(column, lang)) return text;
  if (field === 'title') return lookup(titles, text, lang);
  if (field === 'detail') return translatedDetail(text, lang);
  if (field === 'sourceLabel') return lookup(sources, text, lang);
  return text;
}
