// Original wording is the key so a revised notice cannot inherit a stale translation.
// The three columns are English, Japanese and German.
const translations = {
  title: new Map([
    ["2026 全国大学生英语竞赛（同济考点）", [
      "2026 National English Competition for College Students (Tongji test sites)",
      "2026年全国大学生英語コンテスト（同済大学会場）",
      "Nationaler Englischwettbewerb für Studierende 2026 (Prüfungsorte der Tongji-Universität)",
    ]],
    ["第二十届全国大学生化工设计竞赛", [
      "20th National Chemical Engineering Design Competition for University Students",
      "第20回全国大学生化学工学設計コンテスト",
      "20. Nationaler Wettbewerb für Studierende im Chemieingenieurwesen: Anlagenplanung",
    ]],
    ["第二十届 iCAN 大学生创新创业大赛", [
      "20th iCAN University Student Innovation and Entrepreneurship Competition",
      "第20回iCAN大学生イノベーション・起業コンテスト",
      "20. iCAN-Wettbewerb für studentische Innovation und Unternehmensgründung",
    ]],
    ["第十二届全国大学生统计建模大赛同济校赛", [
      "12th National Statistical Modeling Contest for University Students (Tongji qualifier)",
      "第12回全国大学生統計モデリングコンテスト（同済大学予選）",
      "12. Nationaler Wettbewerb für statistische Modellierung (Tongji-Vorentscheid)",
    ]],
    ["第二十一届全国大学生交通运输科技大赛", [
      "21st National Transport Science and Technology Competition for University Students",
      "第21回全国大学生交通運輸科学技術コンテスト",
      "21. Nationaler Wettbewerb für Studierende in Verkehrswissenschaft und -technik",
    ]],
    ["全国大学生智能汽车竞赛同济预选", [
      "National University Smart Car Competition (Tongji qualifier)",
      "全国大学生スマートカーコンテスト（同済大学予選）",
      "Nationaler Smart-Car-Wettbewerb für Studierende (Tongji-Vorentscheid)",
    ]],
    ["第22届国际医学生生理学竞赛（IMSPQ）", [
      "22nd Inter-Medical School Physiology Quiz (IMSPQ)",
      "第22回国際医学生生理学クイズ（IMSPQ）",
      "22. Internationales Physiologiequiz für Medizinstudierende (IMSPQ)",
    ]],
    ["同济大学智能计算创新设计赛（先导杯校赛）", [
      "Tongji Intelligent Computing Design Competition (Pioneer Cup qualifier)",
      "同済大学インテリジェント・コンピューティング設計コンテスト（先導杯学内予選）",
      "Tongji-Designwettbewerb für intelligentes Computing (Vorentscheid zum Pioneer Cup)",
    ]],
    ["全国大学生外语能力大赛英语组短视频校选", [
      "National Foreign Language Proficiency Competition: English short video (Tongji qualifier)",
      "全国大学生外国語能力コンテスト 英語・ショート動画部門（学内予選）",
      "Nationaler Fremdsprachenwettbewerb: englischer Kurzfilm (Tongji-Vorentscheid)",
    ]],
    ["全国大学生外语能力大赛英语组“四新”校选", [
      "National Foreign Language Proficiency Competition: English “Four New Disciplines” track (Tongji qualifier)",
      "全国大学生外国語能力コンテスト 英語「四新」部門（学内予選）",
      "Nationaler Fremdsprachenwettbewerb: Englisch, Kategorie „Vier neue Fachrichtungen“ (Tongji-Vorentscheid)",
    ]],
    ["2026 高教社杯全国大学生数学建模竞赛", [
      "2026 Higher Education Press Cup: China Undergraduate Mathematical Contest in Modeling",
      "2026年高等教育出版社杯 全国大学生数理モデリングコンテスト",
      "Higher Education Press Cup 2026: Chinesischer Wettbewerb für mathematische Modellierung",
    ]],
    ["法学院本科生奖学金第二课堂附加分", [
      "Law School undergraduate scholarships: extracurricular achievement points",
      "法学院 学部生奨学金の課外活動加点",
      "Bachelorstipendien der Juristischen Fakultät: Zusatzpunkte für außerfachliche Leistungen",
    ]],
    ["数学科学学院本科生奖学金", [
      "School of Mathematical Sciences undergraduate scholarships",
      "数理科学学院 学部生奨学金",
      "Bachelorstipendien der Fakultät für Mathematik",
    ]],
    ["设计创意学院本科生奖学金（第一批）", [
      "College of Design and Innovation undergraduate scholarships (first round)",
      "デザイン創意学院 学部生奨学金（第1期）",
      "Bachelorstipendien der Fakultät für Design und Innovation (erste Runde)",
    ]],
    ["第十八届全国大学生数学竞赛（上海赛区）", [
      "18th Chinese Mathematics Competitions for College Students (Shanghai region)",
      "第18回全国大学生数学コンテスト（上海地区）",
      "18. Chinesischer Mathematikwettbewerb für Studierende (Region Shanghai)",
    ]],
    ["化学科学与工程学院本科生奖学金", [
      "School of Chemical Science and Engineering undergraduate scholarships",
      "化学科学・工学学院 学部生奨学金",
      "Bachelorstipendien der Fakultät für Chemie und Chemieingenieurwesen",
    ]],
    ["建筑与城市规划学院本科生奖学金", [
      "College of Architecture and Urban Planning undergraduate scholarships",
      "建築・都市計画学院 学部生奨学金",
      "Bachelorstipendien der Fakultät für Architektur und Stadtplanung",
    ]],
    ["艺术与传媒学院本科生第二批奖学金综测", [
      "College of Arts and Media undergraduate scholarships: second-round assessment",
      "芸術・メディア学院 学部生奨学金の総合評価（第2期）",
      "Bachelorstipendien der Fakultät für Kunst und Medien: Gesamtbewertung der zweiten Runde",
    ]],
    ["2026 霍普杯国际大学生建筑设计竞赛", [
      "2026 UIA-HYP Cup International Student Competition in Architectural Design",
      "2026年ホープカップ 国際学生建築設計コンテスト",
      "Internationaler Architekturwettbewerb für Studierende 2026 (UIA-HYP Cup)",
    ]],
    ["第十一届米兰设计周：“数智融境，风物新语”文创创新实践设计大赛", [
      "11th Milan Design Week: cultural product design, “Digital Intelligence and New Expressions of Local Culture”",
      "第11回ミラノデザインウィーク 文化創造デザイン実践コンテスト「デジタル技術がつなぐ風土の新たな表現」",
      "11. Milan Design Week: Kulturproduktdesign zum Thema „Digitale Intelligenz und neue Ausdrucksformen lokaler Kultur“",
    ]],
    ["第二届同济大学大学生物理学术竞赛（TJPT）", [
      "2nd Tongji University Physicists’ Tournament (TJPT)",
      "第2回同済大学学生物理トーナメント（TJPT）",
      "2. Physikturnier der Tongji-Universität (TJPT)",
    ]],
    ["RoboMaster 2027 机甲大师超级对抗赛", [
      "RoboMaster 2027 University Championship",
      "RoboMaster 2027 大学生ロボット対抗戦",
      "RoboMaster University Championship 2027",
    ]],
    ["第十一届米兰设计周：第二届乡村新消费暨 OPC 创新实践大赛", [
      "11th Milan Design Week: 2nd Rural Consumer Innovation and OPC Practice Competition",
      "第11回ミラノデザインウィーク 第2回農村の新しい消費・OPCイノベーション実践コンテスト",
      "11. Milan Design Week: 2. Praxiswettbewerb für neue Konsumformen im ländlichen Raum und OPC-Innovationen",
    ]],
    ["第51届ICPC亚洲区域赛成都站", [
      "51st ICPC Asia Regional Contest in Chengdu",
      "第51回ICPCアジア地区大会 成都大会",
      "51. ICPC-Regionalwettbewerb Asien in Chengdu",
    ]],
    ["2027年度中国政府海洋奖学金（来华读研）", [
      "2027 Marine Scholarship of China (graduate study in China)",
      "2027年度中国政府海洋奨学金（中国の大学院への留学）",
      "Meeresstipendium der chinesischen Regierung 2027 (Master oder Promotion in China)",
    ]],
    ["第十五届“挑战杯”中国大学生创业计划竞赛", [
      "15th Challenge Cup Chinese Collegiate Business Plan Competition",
      "第15回「チャレンジカップ」中国大学生ビジネスプランコンテスト",
      "15. Challenge Cup: Chinesischer Businessplan-Wettbewerb für Studierende",
    ]],
    ["第二十届全国大学生节能减排社会实践与科技竞赛", [
      "20th National University Competition on Energy Conservation and Emissions Reduction: Community Projects and Technology",
      "第20回全国大学生省エネ・排出削減 社会実践・科学技術コンテスト",
      "20. Nationaler Hochschulwettbewerb für gesellschaftliche Projekte und Technik zur Energieeinsparung und Emissionsminderung",
    ]],
    ["第五届“德语之星”全国高校德语演讲比赛", [
      "5th German Star National University German Speech Contest",
      "第5回「ドイツ語の星」全国大学生ドイツ語スピーチコンテスト",
      "5. Nationaler Hochschul-Redewettbewerb „Deutsch-Star“",
    ]],
    ["第十二届中国大学生程序设计竞赛（女生专场）", [
      "12th China Collegiate Programming Contest (women’s contest)",
      "第12回中国大学生プログラミングコンテスト（女子の部）",
      "12. Chinesischer Programmierwettbewerb für Studierende (Frauenwettbewerb)",
    ]],
    ["2026 国际大学生物理竞赛", [
      "2026 University Physics Competition",
      "2026年国際大学生物理コンテスト",
      "Internationaler Physikwettbewerb für Studierende 2026 (UPC)",
    ]],
    ["普洱景迈山古茶林文化景观世界遗产主题展", [
      "World Heritage exhibition: the ancient tea forests of Jingmai Mountain in Pu’er",
      "世界遺産企画展「普洱・景邁山の古茶林の文化的景観」",
      "Welterbe-Ausstellung zur Kulturlandschaft der alten Teewälder auf dem Jingmai-Berg in Pu’er",
    ]],
    ["第十三届全国大学生能源经济学术创意大赛", [
      "13th National University Student Competition for Creative Research in Energy Economics",
      "第13回全国大学生エネルギー経済学術アイデアコンテスト",
      "13. Nationaler Hochschulwettbewerb für innovative Forschung in der Energieökonomie",
    ]],
    ["第十二届全国大学生物理实验竞赛（创新）", [
      "12th National University Physics Experiment Competition (innovation track)",
      "第12回全国大学生物理実験コンテスト（イノベーション部門）",
      "12. Nationaler Wettbewerb für physikalische Experimente (Kategorie Innovation)",
    ]],
    ["全国大学生外语能力大赛英语组笔译国赛", [
      "National Foreign Language Proficiency Competition: English written translation finals",
      "全国大学生外国語能力コンテスト 英語・筆訳部門全国大会",
      "Nationaler Fremdsprachenwettbewerb: nationales Finale im schriftlichen Übersetzen (Englisch)",
    ]],
    ["企业间联结的“双刃剑”效应", [
      "Connections between firms",
      "企業間のつながり",
      "Verflechtungen zwischen Unternehmen",
    ]],
    ["第十八届蓝桥杯：主视觉与赛事 IP 文创专项", [
      "18th Lanqiao Cup: key visual and event-branded cultural products",
      "第18回藍橋杯 メインビジュアル・大会IPグッズ部門",
      "18. Lanqiao Cup: Leitmotiv und Kulturprodukte zur Wettbewerbsmarke",
    ]],
    ["2027 红点设计概念奖", [
      "2027 Red Dot Award: Design Concept",
      "2027年レッド・ドット・デザイン賞 デザインコンセプト部門",
      "Red Dot Award 2027: Design Concept",
    ]],
    ["缺货驱动替代行为的仿真与近似", [
      "Simulation and approximation of stockout-driven substitution",
      "欠品時の代替購買行動のシミュレーションと近似",
      "Simulation und Approximation von Ersatzkäufen bei Lieferengpässen",
    ]],
    ["第51届 ICPC 亚洲区域赛上海站", [
      "51st ICPC Asia Regional Contest in Shanghai",
      "第51回ICPCアジア地区大会 上海大会",
      "51. ICPC-Regionalwettbewerb Asien in Shanghai",
    ]],
    ["从信息流到选票：社交媒体讨论与股东投票", [
      "From feeds to ballots: social media discussions and shareholder voting",
      "フィードから投票へ：ソーシャルメディア上の議論と株主の議決権行使",
      "Vom Feed zur Stimmabgabe: Diskussionen in sozialen Medien und das Abstimmungsverhalten von Aktionären",
    ]],
    ["第十八届蓝桥杯：软件、电子、人工智能及鸿蒙专项", [
      "18th Lanqiao Cup: software, electronics, AI and HarmonyOS tracks",
      "第18回藍橋杯 ソフトウェア・電子・AI・HarmonyOS部門",
      "18. Lanqiao Cup: Software, Elektronik, KI und HarmonyOS",
    ]],
    ["第十九届全国三维数字化创新设计大赛", [
      "19th National 3D Digital Innovation Design Competition",
      "第19回全国3Dデジタルイノベーション設計コンテスト",
      "19. Nationaler Wettbewerb für innovatives digitales 3D-Design",
    ]],
    ["第51届 ICPC 亚洲区域赛南昌站", [
      "51st ICPC Asia Regional Contest in Nanchang",
      "第51回ICPCアジア地区大会 南昌大会",
      "51. ICPC-Regionalwettbewerb Asien in Nanchang",
    ]],
    ["第51届 ICPC 亚洲区域赛香港站", [
      "51st ICPC Asia Regional Contest in Hong Kong",
      "第51回ICPCアジア地区大会 香港大会",
      "51. ICPC-Regionalwettbewerb Asien in Hongkong",
    ]],
    ["第十二届全国大学生生命科学竞赛（科学探究类）", [
      "12th National Life Sciences Competition for University Students (scientific inquiry)",
      "第12回全国大学生生命科学コンテスト（科学探究部門）",
      "12. Nationaler Hochschulwettbewerb in den Lebenswissenschaften (Kategorie Forschung)",
    ]],
    ["圣戈班建筑学生竞赛 2027 马德里站", [
      "Saint-Gobain Architecture Student Contest 2027, Madrid",
      "サンゴバン建築学生コンテスト2027 マドリード大会",
      "Saint-Gobain-Architekturwettbewerb für Studierende 2027 in Madrid",
    ]],
    ["2027 美国大学生数学建模竞赛 MCM/ICM", [
      "2027 Mathematical Contest in Modeling and Interdisciplinary Contest in Modeling (MCM/ICM)",
      "2027年米国大学生数理モデリングコンテスト（MCM/ICM）",
      "US-amerikanischer Modellierungswettbewerb 2027 für Studierende (MCM/ICM)",
    ]],
    ["2027 iF 设计奖", [
      "2027 iF Design Award",
      "2027年iFデザインアワード",
      "iF Design Award 2027",
    ]],
    ["第十六届全国大学生金相技能大赛", [
      "16th National Metallographic Skills Competition for University Students",
      "第16回全国大学生金属組織学技能コンテスト",
      "16. Nationaler Hochschulwettbewerb in praktischer Metallografie",
    ]],
    ["第十八届蓝桥杯：视觉艺术设计、数字科技创新", [
      "18th Lanqiao Cup: visual design and digital technology innovation",
      "第18回藍橋杯 ビジュアルアートデザイン・デジタル技術革新部門",
      "18. Lanqiao Cup: visuelle Gestaltung und digitale Innovation",
    ]],
    ["2027 iGEM Grand Jamboree", [
      "2027 iGEM Grand Jamboree",
      "2027年iGEMグランドジャンボリー",
      "iGEM Grand Jamboree 2027",
    ]],
  ]),
  note: new Map([
    ["本科生B、C类。年级、既往缺考及非英语专业资格限制见通知。", [
      "Undergraduate categories B and C. See the notice for restrictions by year, previous absences and eligibility for students who do not major in English.",
      "学部生のB・C区分が対象。学年、過去の欠席、英語専攻以外の学生に関する資格条件は通知を参照。",
      "Für Bachelorstudierende der Kategorien B und C. Die Ausschreibung nennt Einschränkungen nach Studienjahr, früherem Fernbleiben und für Studierende mit einem anderen Hauptfach als Englisch.",
    ]],
    ["参赛团队通过组委会网站在线填写报名表。", [
      "Teams complete the online registration form on the organizing committee’s website.",
      "チームごとに実行委員会のウェブサイトで登録フォームに記入する。",
      "Teams füllen das Anmeldeformular auf der Website des Organisationskomitees aus.",
    ]],
    ["全国大赛报名窗口；各赛区选拔日程另行通知。", [
      "National registration period. Each region will announce its own selection dates separately.",
      "全国大会の申込期間。各地区の選考日程は別途発表される。",
      "Anmeldefrist für den nationalen Wettbewerb. Die Regionen geben die Termine ihrer Vorentscheide gesondert bekannt.",
    ]],
    ["笔试，四平路、嘉定校区设考点。", [
      "Written test at the Siping Road and Jiading campuses.",
      "筆記試験。会場は四平路キャンパスと嘉定キャンパス。",
      "Schriftliche Prüfung an den Standorten Siping Road und Jiading.",
    ]],
    ["报名截止为 3 月 24 日 24:00。校赛由数学科学学院组织，全校全日制本科生与研究生分组参赛，每队 3 人。", [
      "Registration closes at the end of March 24 (24:00). Tongji’s School of Mathematical Sciences runs the qualifier for full-time students across the university. Undergraduate and graduate teams compete separately, with three students per team.",
      "申込は3月24日24:00まで。数理科学学院が主催する学内予選で、同済大学の全日制学部生と大学院生が対象。学部・大学院別に3人1組で参加する。",
      "Anmeldeschluss ist der 24. März um 24:00 Uhr. Die Fakultät für Mathematik organisiert den Vorentscheid für alle Vollzeitstudierenden der Universität. Bachelor- und Graduiertenteams treten getrennt an, jeweils zu dritt.",
    ]],
    ["此时段为笔试，口试另行安排。", [
      "This time slot is for the written test. The oral test will be scheduled separately.",
      "この時間帯は筆記試験。口頭試験は別途実施される。",
      "Dieser Termin gilt für die schriftliche Prüfung. Die mündliche Prüfung wird gesondert angesetzt.",
    ]],
    ["决赛在北京建筑大学举行。", [
      "The final takes place at Beijing University of Civil Engineering and Architecture.",
      "決勝会場は北京建築大学。",
      "Das Finale findet an der Beijing University of Civil Engineering and Architecture statt.",
    ]],
    ["在汽车学院和电信学院基地举行。", [
      "Held at the facilities of the automotive and electronic and information engineering schools.",
      "会場は自動車学院と電子・情報工学院の実習施設。",
      "Austragungsorte sind die Einrichtungen der Fakultäten für Fahrzeugtechnik sowie für Elektronik und Informationstechnik.",
    ]],
    ["马来亚大学接受各医学院团队报名，按队提交申请。此日期取自主办方常规报名表。", [
      "Universiti Malaya accepts one application per medical school team. These are the organizer’s regular registration dates.",
      "マラヤ大学が各医学部からチーム単位で申込を受け付ける。掲載日は主催者の通常登録期間に基づく。",
      "Die Universiti Malaya nimmt die Anmeldungen der medizinischen Fakultäten teamweise entgegen. Angegeben ist der reguläre Anmeldezeitraum des Veranstalters.",
    ]],
    ["在电信学院基地举行。", [
      "Held at the facilities of the electronic and information engineering school.",
      "会場は電子・情報工学院の実習施設。",
      "Austragungsort ist die Einrichtung der Fakultät für Elektronik und Informationstechnik.",
    ]],
    ["本校在读学生可跨专业组队，每队3至4人。", [
      "Currently enrolled Tongji students may form teams of three or four across different majors.",
      "同済大学の在学生が対象。専攻をまたいで3～4人のチームを組める。",
      "Eingeschriebene Tongji-Studierende können fachübergreifende Teams mit drei oder vier Mitgliedern bilden.",
    ]],
    ["嘉定校区线下开展金融大模型推理部署优化赛题。", [
      "On-site at the Jiading campus. The challenge is to optimize inference deployment for a large language model for finance.",
      "嘉定キャンパスで対面開催。金融分野の大規模言語モデルについて、推論時のデプロイを最適化する。",
      "Präsenzwettbewerb am Campus Jiading. Aufgabe ist es, den Inferenzbetrieb eines großen Sprachmodells für Finanzanwendungen zu optimieren.",
    ]],
    ["同济选手须完成官网报名并向校赛指定邮箱提交视频。", [
      "Tongji entrants must register on the official website and email their video to the address designated for the campus qualifier.",
      "同済大学の出場者は公式サイトで登録し、学内予選指定のメールアドレスに動画を送る。",
      "Teilnehmende der Tongji müssen sich auf der offiziellen Website anmelden und das Video an die für den Vorentscheid angegebene E-Mail-Adresse senden.",
    ]],
    ["通知原文为8月31日24:00。官网报名后同时提交英文研究报告。", [
      "The notice gives the deadline as August 31 at 24:00. Register on the official website and submit the research report in English by the same deadline.",
      "通知に記載された締切は8月31日24:00。公式サイトでの登録と英語の研究報告書の提出を済ませる。",
      "Laut Ausschreibung endet die Frist am 31. August um 24:00 Uhr. Bis dahin sind die Anmeldung auf der offiziellen Website und der Forschungsbericht auf Englisch einzureichen.",
    ]],
    ["比赛在马来西亚吉隆坡的马来亚大学医学院举行，来自不同国家的医学生组队参加。", [
      "Teams of medical students from different countries compete at the Faculty of Medicine, Universiti Malaya, in Kuala Lumpur, Malaysia.",
      "マレーシア・クアラルンプールのマラヤ大学医学部で開催。各国の医学生がチームで参加する。",
      "Teams von Medizinstudierenden aus verschiedenen Ländern treten an der Medizinischen Fakultät der Universiti Malaya in Kuala Lumpur, Malaysia, an.",
    ]],
    ["全国统一竞赛时段。", [
      "All regions compete during the same national contest period.",
      "全国共通の競技時間。",
      "Landesweit einheitlicher Wettbewerbszeitraum.",
    ]],
    ["2025—2026学年第一批评奖。在线提交已获奖项材料，证书落款须在2025年9月1日至2026年8月31日。另须按期递交一致的纸质版。", [
      "First scholarship round for 2025–26. Upload evidence of awards already received. Certificates must be dated September 1, 2025 through August 31, 2026. A matching paper copy is also due by its own deadline.",
      "2025–2026年度第1期。受賞の証明をオンラインで提出する。証書の日付は2025年9月1日～2026年8月31日。別途、同一内容の紙の資料を所定の期限までに提出する。",
      "Erste Vergaberunde 2025/26. Nachweise bereits erhaltener Auszeichnungen online einreichen. Die Urkunden müssen auf den Zeitraum vom 1. September 2025 bis zum 31. August 2026 datiert sein. Eine identische Papierfassung ist fristgerecht nachzureichen.",
    ]],
    ["2025—2026 学年奖学金申请问卷于当日 24:00 截止。申请人同步向班长报备，班级于 9 月 15 至 16 日评议。", [
      "The 2025–26 scholarship application questionnaire closes at 24:00 that day. Applicants must also notify their class representative. Classes review applications on September 15–16.",
      "2025–2026年度の申請フォームは当日24:00締切。申請者は同時にクラス代表に届け出る。クラスでの審査は9月15～16日。",
      "Der Onlinefragebogen für die Stipendien 2025/26 schließt an diesem Tag um 24:00 Uhr. Bewerbende informieren zugleich ihre Klassensprecher. Die Klassen beraten am 15. und 16. September.",
    ]],
    ["向衷和楼1301B学生工作办公室提交纸质材料，内容需与已提交的电子版一致。", [
      "Deliver the paper documents to the Student Affairs Office, room 1301B, Zhonghe Building. They must match the electronic version already submitted.",
      "衷和楼1301Bの学生工作弁公室に紙の書類を提出する。提出済みの電子版と同一の内容であること。",
      "Die Papierunterlagen im Büro für studentische Angelegenheiten, Zhonghe-Gebäude, Raum 1301B, abgeben. Sie müssen mit der bereits eingereichten elektronischen Fassung übereinstimmen.",
    ]],
    ["2025—2026 学年首批申请需提交表格及证明材料，并按通知填写线上汇总。", [
      "For the first 2025–26 round, submit the forms and supporting documents and complete the online summary specified in the notice.",
      "2025–2026年度第1期は、申請用紙と証明書類を提出し、案内に従ってオンラインの集計フォームにも入力する。",
      "Für die erste Runde 2025/26 sind Formulare und Nachweise einzureichen. Zusätzlich die in der Ausschreibung genannte Onlineübersicht ausfüllen.",
    ]],
    ["同济考生在教务系统报名，并按通知填写补充信息。", [
      "Tongji entrants register in the academic affairs system and provide the supplementary information listed in the notice.",
      "同済大学の受験者は教務システムで登録し、通知に従って必要な追加情報を記入する。",
      "Studierende der Tongji melden sich im Studienverwaltungssystem an und ergänzen die in der Ausschreibung geforderten Angaben.",
    ]],
    ["2025–2026学年，9月14日起受理；按本次通知提交综合评定材料。", [
      "Applications for 2025–26 open on September 14. Submit the documents for the comprehensive assessment as instructed in this notice.",
      "2025–2026年度分は9月14日から受付。今回の案内に従い、総合評価用の資料を提出する。",
      "Bewerbungen für das Studienjahr 2025/26 sind ab dem 14. September möglich. Die Unterlagen für die Gesamtbewertung wie in der Ausschreibung angegeben einreichen.",
    ]],
    ["提交 2025 年 9 月 1 日至 2026 年 8 月 31 日取得的竞赛等材料。附件 2 按省部级、国家级单项获奖及等级计算竞赛加分，累计上限 0.08。", [
      "Submit competition results and other achievements earned from September 1, 2025 through August 31, 2026. Appendix 2 assigns points by the level and rank of each provincial, ministerial or national award, up to 0.08 in total.",
      "2025年9月1日～2026年8月31日に得た競技実績等の資料を提出。付録2に従い、省・部級または全国級の各受賞実績の等級に応じて加点され、合計の上限は0.08。",
      "Wettbewerbsergebnisse und weitere Leistungen aus dem Zeitraum 1. September 2025 bis 31. August 2026 einreichen. Anlage 2 bewertet jede Auszeichnung nach Ebene (Provinz, Ministerium oder national) und Rang. Insgesamt sind höchstens 0,08 Zusatzpunkte möglich.",
    ]],
    ["提交综测数据包并在学院成果系统录入2025–2026学年成果。", [
      "Submit the assessment data package and enter achievements for 2025–26 in the college’s records system.",
      "総合評価のデータ一式を提出し、2025–2026年度の実績を学院の成果登録システムに入力する。",
      "Das Datenpaket für die Gesamtbewertung einreichen und die Leistungen des Studienjahres 2025/26 im Erfassungssystem der Fakultät eintragen.",
    ]],
    ["北京时间 10 月 10 日 24:00 前提交。面向符合组委会资格要求的建筑及相关专业学生，含个人和小组参赛。", [
      "Submit by 24:00 Beijing time on October 10. Architecture students and students in related fields who meet the committee’s eligibility requirements may enter individually or in teams.",
      "提出は北京時間10月10日24:00まで。建築・関連分野を専攻し、実行委員会の条件を満たす学生が個人またはチームで参加できる。",
      "Einreichung bis zum 10. Oktober um 24:00 Uhr Pekinger Zeit. Studierende der Architektur und verwandter Fächer können einzeln oder im Team teilnehmen, sofern sie die Zulassungsbedingungen erfüllen.",
    ]],
    ["本日期适用于该具体赛题；其他赛题以各自的征集安排为准。", [
      "This date applies to this brief only. Other briefs have their own calls and deadlines.",
      "掲載日はこの課題のもの。他の課題はそれぞれの募集要項の日程を確認。",
      "Dieser Termin gilt für die hier genannte Aufgabe. Für andere Aufgaben gelten die jeweiligen Ausschreibungen.",
    ]],
    ["本科生院、创新创业学院主办，物理科学与工程学院承办。面向全校 2025、2026 级理工科学生。 可个人参赛或组队，每队最多 5 人。", [
      "Organized by Tongji’s Undergraduate School and College of Innovation and Entrepreneurship and hosted by the School of Physics Science and Engineering. Open to Tongji science and engineering students who entered in 2025 or 2026. Enter individually or in teams of up to five.",
      "同済大学の本科生院とイノベーション・起業学院が主催し、物理科学・工学学院が運営する。全学の2025年・2026年入学の理工系学生が対象。個人または5人までのチームで参加できる。",
      "Veranstalter sind Tongjis Undergraduate School und die Fakultät für Innovation und Gründung. Die Fakultät für Physik und Physikingenieurwesen richtet das Turnier aus. Teilnahmeberechtigt sind Tongji-Studierende der Natur- und Ingenieurwissenschaften mit Studienbeginn 2025 oder 2026, einzeln oder in Teams bis zu fünf Personen.",
    ]],
    ["符合资格的高校战队通过组委会报名系统提交。", [
      "Eligible university teams submit their applications through the organizing committee’s registration system.",
      "参加資格を満たす大学チームが実行委員会の登録システムから申し込む。",
      "Teilnahmeberechtigte Hochschulteams reichen ihre Anmeldung über das System des Organisationskomitees ein.",
    ]],
    ["在电子科技大学举行，同济大学组队参加。", [
      "Hosted at the University of Electronic Science and Technology of China. Tongji University enters as a team.",
      "電子科技大学で開催。同済大学はチームで参加する。",
      "Austragungsort ist die University of Electronic Science and Technology of China. Die Tongji-Universität nimmt mit einem Team teil.",
    ]],
    ["面向公告所列南海、印度洋及太平洋周边和岛屿国家以及非洲发展中国家的非中国籍公民。申请涉海硕士或博士，须先取得同济拟接收导师同意，并完成两个平台报名及邮件报送。", [
      "Open to non-Chinese citizens from the coastal and island countries in the South China Sea, Indian Ocean and Pacific regions specified in the notice, and from the developing African countries it lists. Applicants for a marine-related master’s or doctorate must first obtain consent from a prospective Tongji supervisor, register on both platforms and send their materials by email.",
      "南シナ海・インド洋・太平洋の沿岸国・島嶼国およびアフリカの開発途上国のうち、募集要項が指定する国の公民で、中国籍を持たない人が対象。海洋関連の修士・博士課程への出願には、同済大学で受入予定の指導教員から先に承諾を得て、両方のシステムで登録し、書類をメールで提出する。",
      "Bewerben können sich Personen ohne chinesische Staatsangehörigkeit aus den in der Ausschreibung genannten Anrainer- und Inselstaaten des Südchinesischen Meeres, des Indischen Ozeans und des Pazifiks sowie aus den genannten afrikanischen Entwicklungsländern. Für einen fachlich einschlägigen Master oder eine Promotion sind zunächst die Zusage einer Betreuungsperson an der Tongji, dann die Registrierung auf beiden Plattformen und die Einreichung per E-Mail erforderlich.",
    ]],
    ["大连理工大学承办，包含主体赛及专项赛。", [
      "Hosted by Dalian University of Technology. The program includes the main competition and special tracks.",
      "大連理工大学が開催。メイン競技と特別部門がある。",
      "Ausrichterin ist die Technische Universität Dalian. Zum Programm gehören der Hauptwettbewerb und Sonderkategorien.",
    ]],
    ["同济大学校内报名表收取节点。校内选拔日期由后续通知确定。", [
      "Tongji’s internal deadline for collecting registration forms. The campus qualifier date will be announced separately.",
      "同済大学での申込用紙の回収期限。学内選考日は追って通知される。",
      "Interner Abgabetermin der Tongji für Anmeldeformulare. Der Termin des Vorentscheids wird gesondert bekannt gegeben.",
    ]],
    ["同济大学主办，地点为同济大学德文图书馆。", [
      "Organized by Tongji University at its German Library.",
      "同済大学主催。会場は同済大学ドイツ語図書館。",
      "Die Tongji-Universität veranstaltet den Wettbewerb in ihrer Deutschen Bibliothek.",
    ]],
    ["成都信息工程大学承办，比赛时长 5 小时。", [
      "Hosted by Chengdu University of Information Technology. The contest lasts five hours.",
      "成都信息工程大学が開催。競技時間は5時間。",
      "Die Chengdu University of Information Technology richtet den fünfstündigen Wettbewerb aus.",
    ]],
    ["原定北美山地标准时间 11 月 6 日 18:00 开赛，持续 48 小时，已换算为北京时间。", [
      "The published start was November 6 at 18:00 North American Mountain Standard Time. The contest lasts 48 hours. The calendar shows Beijing time.",
      "主催者の開始時刻は北米山岳部標準時11月6日18:00。競技時間は48時間で、日程には北京時間を表示している。",
      "Offizieller Beginn ist der 6. November um 18:00 Uhr nordamerikanischer Mountain Standard Time. Der Wettbewerb dauert 48 Stunden. Im Kalender steht die entsprechende Pekinger Zeit.",
    ]],
    ["同济大学建筑与城市规划学院钟庭展厅。与北京大学城市与环境学院共同策划，展示景迈山茶林与传统村落的保护及申遗历程。", [
      "Clock Court exhibition hall, Tongji College of Architecture and Urban Planning. Co-curated with Peking University’s College of Urban and Environmental Sciences, the exhibition traces the conservation of Jingmai Mountain’s tea forests and traditional villages and the process of obtaining World Heritage status.",
      "会場は同済大学建築・都市計画学院の鐘庭展示ホール。北京大学都市・環境学院と共同企画し、景邁山の茶林と伝統集落の保全、世界遺産登録までの歩みを紹介する。",
      "Ausstellungshalle im Uhrenhof der Fakultät für Architektur und Stadtplanung der Tongji. Gemeinsam mit der Fakultät für Stadt- und Umweltwissenschaften der Universität Peking zeigt sie den Schutz der Teewälder und traditionellen Dörfer des Jingmai-Bergs sowie den Weg zum Welterbestatus.",
    ]],
    ["上海赛区初赛同时作为上海市大学生数学竞赛。", [
      "The Shanghai regional preliminary round also serves as the Shanghai Municipal Mathematics Competition for university students.",
      "上海地区予選は上海市大学生数学コンテストを兼ねる。",
      "Die Vorrunde der Region Shanghai zählt zugleich als städtischer Mathematikwettbewerb für Studierende in Shanghai.",
    ]],
    ["由作品联系人在大赛系统办理报名，取得作品编号后可提交作品。", [
      "The designated project contact registers the entry in the competition system. The team may submit its work once it has received a project number.",
      "作品の連絡担当者が大会システムで登録する。作品番号を取得後に作品を提出できる。",
      "Die für den Beitrag benannte Kontaktperson meldet ihn im Wettbewerbssystem an. Nach Vergabe der Beitragsnummer kann das Team die Arbeit einreichen.",
    ]],
    ["本届决赛由哈尔滨工业大学承办。", [
      "Harbin Institute of Technology hosts this year’s final.",
      "今回の決勝はハルビン工業大学が開催する。",
      "Das Harbin Institute of Technology richtet das diesjährige Finale aus.",
    ]],
    ["晋级选手线上完成汉英、英汉译后编辑。", [
      "Qualifiers complete online post-editing tasks in both directions, Chinese to English and English to Chinese.",
      "通過者はオンラインで、中英・英中の両方向の翻訳ポストエディット課題に取り組む。",
      "Die Qualifizierten bearbeiten online Aufgaben zur Nachbearbeitung von Übersetzungen in beiden Richtungen, Chinesisch–Englisch und Englisch–Chinesisch.",
    ]],
    ["同济大厦 A 楼 2101。管理高等研究院公开学术报告第 169 期，讨论创投网络中创新与价值获取之间的关系。", [
      "Room 2101, Tongji Building A. The Institute for Advanced Study in Management’s 169th public lecture examines the relationship between innovation and value capture in venture capital networks.",
      "同済大厦A棟2101室。管理高等研究院の第169回公開学術講演で、ベンチャーキャピタルのネットワークにおけるイノベーションと価値獲得の関係を考察する。",
      "Tongji-Gebäude A, Raum 2101. Der 169. öffentliche Vortrag des Instituts für fortgeschrittene Managementforschung untersucht den Zusammenhang zwischen Innovation und Wertaneignung in Wagniskapitalnetzwerken.",
    ]],
    ["本科生院、创新创业学院主办，物理科学与工程学院承办。面向全校 2025、2026 级理工科学生。 已报名队伍线上提交研究报告和视频。", [
      "Organized by Tongji’s Undergraduate School and College of Innovation and Entrepreneurship and hosted by the School of Physics Science and Engineering. Open to science and engineering students across Tongji who entered in 2025 or 2026. Registered teams upload their research reports and videos.",
      "同済大学の本科生院とイノベーション・起業学院が主催し、物理科学・工学学院が運営。全学の2025年・2026年入学の理工系学生が対象。登録済みのチームは研究報告書と動画をオンラインで提出する。",
      "Veranstalter sind Tongjis Undergraduate School und die Fakultät für Innovation und Gründung, Ausrichterin ist die Fakultät für Physik und Physikingenieurwesen. Teilnehmen können Tongji-Studierende der Natur- und Ingenieurwissenschaften mit Studienbeginn 2025 oder 2026. Angemeldete Teams laden Forschungsbericht und Video hoch.",
    ]],
    ["全国系统截止时间；院校可设更早的校内截止。视觉与专项类别的认定请核对所属学院。", [
      "Deadline for the national system. Universities may set earlier internal deadlines. Check with your college about recognition of visual design and special tracks.",
      "全国システムの締切。大学独自の締切が早い場合がある。ビジュアルデザイン部門や特別部門の認定は所属学院に確認すること。",
      "Frist des nationalen Anmeldesystems. Hochschulen können frühere interne Fristen setzen. Die Anerkennung von Design- und Sonderkategorien bitte mit der eigenen Fakultät klären.",
    ]],
    ["设计概念组（Design Concept）各报名阶段分开计费。日期按组委会公布的日历，报名费用和资格见原文。", [
      "Entry fees for the Design Concept category vary by registration period. Dates follow the organizer’s calendar. See the original notice for fees and eligibility.",
      "デザインコンセプト部門は登録時期により料金が異なる。日付は主催者の日程表に基づく。料金と応募資格は原文を参照。",
      "Die Gebühren in der Kategorie Design Concept richten sich nach der Anmeldephase. Es gelten die Kalendertage des Veranstalters. Gebühren und Teilnahmebedingungen stehen in der Ausschreibung.",
    ]],
    ["北京线下进行，时间为12月4日上午，限第一阶段晋级的40名选手。", [
      "Held in person in Beijing on the morning of December 4. Only the 40 entrants who qualified in the first stage may participate.",
      "12月4日午前に北京で対面開催。第1段階を通過した40人のみ参加できる。",
      "Präsenztermin in Peking am Vormittag des 4. Dezember. Zugelassen sind ausschließlich die 40 Teilnehmenden, die sich in der ersten Phase qualifiziert haben.",
    ]],
    ["同济大厦 A 楼 510。管理高等研究院学术研讨，报告人 Jingwei Zhang。", [
      "Room 510, Tongji Building A. A research seminar at the Institute for Advanced Study in Management, presented by Jingwei Zhang.",
      "同済大厦A棟510室。管理高等研究院の研究セミナーで、Jingwei Zhang氏が講演する。",
      "Tongji-Gebäude A, Raum 510. Forschungsseminar des Instituts für fortgeschrittene Managementforschung mit Jingwei Zhang.",
    ]],
    ["上海大学宝山校区体育馆；前一日安排报到、开幕式和热身赛。", [
      "Gymnasium, Baoshan campus, Shanghai University. Check-in, the opening ceremony and the practice contest take place the previous day.",
      "会場は上海大学宝山キャンパスの体育館。前日に受付、開会式、練習競技がある。",
      "Sporthalle auf dem Campus Baoshan der Universität Shanghai. Anmeldung vor Ort, Eröffnung und Probewettbewerb finden am Vortag statt.",
    ]],
    ["同济大厦 A 楼 510。报告人王征，香港城市大学教授。", [
      "Room 510, Tongji Building A. The speaker is Professor Zheng Wang of City University of Hong Kong.",
      "同済大厦A棟510室。講演者は香港城市大学の王征教授。",
      "Tongji-Gebäude A, Raum 510. Es spricht Professor Zheng Wang von der City University of Hong Kong.",
    ]],
    ["本科生院、创新创业学院主办，物理科学与工程学院承办。面向全校 2025、2026 级理工科学生。 仅初赛优胜者可组队，每队 5 人。", [
      "Organized by Tongji’s Undergraduate School and College of Innovation and Entrepreneurship and hosted by the School of Physics Science and Engineering. Open to Tongji science and engineering students who entered in 2025 or 2026. Only preliminary-round winners may form teams, with five members per team.",
      "同済大学の本科生院とイノベーション・起業学院が主催し、物理科学・工学学院が運営。全学の2025年・2026年入学の理工系学生が対象。予選通過者のみが5人1組でチームを編成できる。",
      "Veranstalter sind Tongjis Undergraduate School und die Fakultät für Innovation und Gründung, Ausrichterin ist die Fakultät für Physik und Physikingenieurwesen. Zielgruppe sind Tongji-Studierende der Natur- und Ingenieurwissenschaften mit Studienbeginn 2025 oder 2026. Nur die Erfolgreichen der Vorrunde dürfen Teams mit jeweils fünf Mitgliedern bilden.",
    ]],
    ["数字化设计与制造赛项，地点为广州航海学院。", [
      "Digital design and manufacturing track, held at Guangzhou Maritime University.",
      "デジタル設計・製造部門。会場は広州航海学院。",
      "Kategorie Digitales Design und Fertigung, ausgetragen an der Guangzhou Maritime University.",
    ]],
    ["江西师范大学。邀请函日程标注为拟定，前一日安排报到、开幕式和热身赛。", [
      "Jiangxi Normal University. The invitation marks the schedule as provisional. Check-in, the opening ceremony and the practice contest are planned for the day before.",
      "会場は江西師範大学。招待状の日程は予定。前日に受付、開会式、練習競技が予定されている。",
      "Austragungsort ist die Jiangxi Normal University. Der Zeitplan in der Einladung ist vorläufig. Anmeldung vor Ort, Eröffnung und Probewettbewerb sind für den Vortag vorgesehen.",
    ]],
    ["本科生院、创新创业学院主办，物理科学与工程学院承办。面向全校 2025、2026 级理工科学生。 初赛晋级队伍参加线下对抗赛，包括小组赛和决赛。", [
      "Organized by Tongji’s Undergraduate School and College of Innovation and Entrepreneurship and hosted by the School of Physics Science and Engineering. Open to Tongji science and engineering students who entered in 2025 or 2026. Teams advancing from the preliminary round face off in person in a group stage followed by the final.",
      "同済大学の本科生院とイノベーション・起業学院が主催し、物理科学・工学学院が運営。全学の2025年・2026年入学の理工系学生が対象。予選通過チームが対面のグループ戦と決勝に進む。",
      "Veranstalter sind Tongjis Undergraduate School und die Fakultät für Innovation und Gründung, Ausrichterin ist die Fakultät für Physik und Physikingenieurwesen. Zielgruppe sind Tongji-Studierende der Natur- und Ingenieurwissenschaften mit Studienbeginn 2025 oder 2026. Die qualifizierten Teams treten vor Ort in der Gruppenphase und im Finale gegeneinander an.",
    ]],
    ["赛站由香港大学举办，参赛队伍按名额分配和注册名单确定。", [
      "The University of Hong Kong hosts this regional. The participating teams are determined by the allocation of places and the registration list.",
      "香港大学が開催する地区大会。出場チームは出場枠の配分と登録名簿によって決まる。",
      "Die Universität Hongkong richtet den Regionalwettbewerb aus. Startplätze und Anmeldeliste bestimmen das Teilnehmerfeld.",
    ]],
    ["科学探究类全国网络报名，截止当日 24:00。", [
      "Nationwide online registration for the scientific inquiry track closes at 24:00 on the date shown.",
      "科学探究部門の全国オンライン登録。掲載日の24:00締切。",
      "Die landesweite Onlineanmeldung für die Forschungskategorie endet am angegebenen Tag um 24:00 Uhr.",
    ]],
    ["组委会的第二场 One Click LCA 培训。官方时间为法国当地 14:00–16:00，此处已换算为北京时间。", [
      "The organizer’s second One Click LCA training session runs from 14:00 to 16:00 in France. The calendar shows the equivalent Beijing time.",
      "主催者による第2回One Click LCA研修。フランス現地時間14:00～16:00で、掲載時刻は北京時間に換算している。",
      "Die zweite One-Click-LCA-Schulung des Veranstalters findet von 14:00 bis 16:00 Uhr französischer Ortszeit statt. Im Kalender ist die entsprechende Pekinger Zeit angegeben.",
    ]],
    ["指导教师须在此时间前完成注册。已将美东标准时间1月28日15:00换算为北京时间。", [
      "Faculty advisors must complete registration by this deadline. The calendar converts January 28 at 15:00 US Eastern Standard Time to Beijing time.",
      "指導教員がこの期限までに登録する。米国東部標準時1月28日15:00を北京時間に換算して表示。",
      "Betreuende Lehrkräfte müssen die Anmeldung bis zu diesem Zeitpunkt abschließen. Der 28. Januar, 15:00 Uhr US-Ostküstenzeit (EST), ist im Kalender in Pekinger Zeit umgerechnet.",
    ]],
    ["对应美东标准时间1月28日17:00至2月1日20:00，参赛队须在比赛结束时停止工作。", [
      "The contest runs from January 28 at 17:00 to February 1 at 20:00 US Eastern Standard Time. Teams must stop working when the contest ends.",
      "米国東部標準時で1月28日17:00から2月1日20:00まで。終了時刻にチームは作業を止めること。",
      "Der Wettbewerb läuft vom 28. Januar um 17:00 Uhr bis zum 1. Februar um 20:00 Uhr US-Ostküstenzeit (EST). Mit Wettbewerbsende müssen die Teams die Arbeit einstellen.",
    ]],
    ["研究综述、实验设计上传，截止当日 24:00。", [
      "Upload the research review and experimental design by 24:00 on the date shown.",
      "掲載日の24:00までに研究レビューと実験計画をアップロードする。",
      "Forschungsübersicht und Versuchsplanung bis 24:00 Uhr am angegebenen Tag hochladen.",
    ]],
    ["最终论文提交期限比停止作答晚一小时。", [
      "Final papers are due one hour after teams must stop working.",
      "最終論文の提出期限は、競技の作業終了時刻の1時間後。",
      "Die endgültige Ausarbeitung muss spätestens eine Stunde nach dem verpflichtenden Arbeitsende eingereicht werden.",
    ]],
    ["汉堡终审，限预选入围作品；参赛报名已于 2026 年 11 月结束。日期按主办方当地日历。", [
      "Final judging in Hamburg, for shortlisted entries only. Registration closed in November 2026. The dates follow the organizer’s local calendar.",
      "ハンブルクでの最終審査。対象は予備審査通過作品のみ。参加登録は2026年11月に終了した。日付は主催者の現地暦に基づく。",
      "Endbewertung in Hamburg, ausschließlich für die Vorauswahl. Die Anmeldung endete im November 2026. Es gelten die örtlichen Kalendertage des Veranstalters.",
    ]],
    ["已取得作品编号的团队由联系人上传作品与相关材料。", [
      "For teams that have already received a project number, the designated contact uploads the entry and supporting materials.",
      "作品番号を取得したチームは、連絡担当者が作品と関連資料をアップロードする。",
      "Bei Teams mit bereits zugeteilter Beitragsnummer lädt die Kontaktperson den Beitrag und die zugehörigen Unterlagen hoch.",
    ]],
    ["三个赛道由高校统一报名。学生须另行查看校内选拔日期。", [
      "Universities register teams for all three tracks. Students should check their campus qualifier dates separately.",
      "3部門とも大学が一括して登録する。学生は所属大学の予選日程を別途確認すること。",
      "Für alle drei Kategorien melden die Hochschulen ihre Teams gesammelt an. Studierende müssen die Termine ihrer Hochschulauswahl gesondert prüfen.",
    ]],
    ["实验记录、论文和参赛承诺书上传，截止当日 24:00。", [
      "Upload the experiment records, paper and participation pledge by 24:00 on the date shown.",
      "掲載日の24:00までに実験記録、論文、参加誓約書をアップロードする。",
      "Versuchsprotokolle, Arbeit und Teilnahmeverpflichtung bis 24:00 Uhr am angegebenen Tag hochladen.",
    ]],
    ["马德里国际赛阶段，日期按主办方当地日历。各国选拔及报名窗口由当地赛区公布。", [
      "International stage in Madrid, shown using the organizer’s local calendar dates. The local organizers in each country announce national qualifiers and registration periods.",
      "マドリードでの国際大会。掲載日は主催者の現地暦に基づく。各国の予選と申込期間は各国の担当者が発表する。",
      "Internationale Runde in Madrid nach den örtlichen Kalendertagen des Veranstalters. Auswahltermine und Anmeldefristen der einzelnen Länder veröffentlichen die jeweiligen nationalen Ausrichter.",
    ]],
    ["实验技能赛道决赛，地点为西南交通大学犀浦校区。", [
      "Final of the experimental skills track at the Xipu campus of Southwest Jiaotong University.",
      "実験技能部門の決勝。会場は西南交通大学犀浦キャンパス。",
      "Finale der Kategorie Experimentelle Fertigkeiten auf dem Campus Xipu der Southwest Jiaotong University.",
    ]],
    ["巴黎会议中心，按主办方公布的当地日历日期展示。此项为大会日期。", [
      "Palais des Congrès de Paris. These are the conference dates in the organizer’s local calendar.",
      "パリ国際会議場で開催。掲載日は主催者の現地暦に基づく大会の開催日。",
      "Veranstaltungsort ist der Palais des Congrès de Paris. Angegeben sind die Kongresstage nach dem örtlichen Kalender des Veranstalters.",
    ]],
  ]),
  sourceLabel: new Map([
    ["同济大学外国语学院公共英语教学部", [
      "College English Department, Tongji University School of Foreign Languages",
      "同済大学外国語学院 大学英語教育部",
      "Abteilung für Hochschulenglisch der Fremdsprachenfakultät, Tongji",
    ]],
    ["全国大学生化工设计竞赛组委会通知（PDF）", [
      "National Chemical Engineering Design Competition committee notice (PDF)",
      "全国大学生化学工学設計コンテスト実行委員会の通知（PDF）",
      "Mitteilung des nationalen Organisationskomitees für den Chemieingenieur-Designwettbewerb (PDF)",
    ]],
    ["iCAN 大学生创新创业大赛组委会", [
      "iCAN University Student Innovation and Entrepreneurship Competition organizing committee",
      "iCAN大学生イノベーション・起業コンテスト実行委員会",
      "Organisationskomitee des iCAN-Wettbewerbs für Innovation und Gründung",
    ]],
    ["数学科学学院校赛通知", [
      "School of Mathematical Sciences: Tongji qualifier notice",
      "数理科学学院の学内予選案内",
      "Fakultät für Mathematik: Ausschreibung des Vorentscheids",
    ]],
    ["南京林业大学汽车与交通工程学院参赛报道", [
      "Team report from the College of Automobile and Traffic Engineering, Nanjing Forestry University",
      "南京林業大学自動車・交通工学学院の参加報告",
      "Teilnahmebericht der Fakultät für Fahrzeug- und Verkehrstechnik, Forstuniversität Nanjing",
    ]],
    ["同济大学电子与信息工程学院校赛报道", [
      "Tongji College of Electronics and Information Engineering: campus competition report",
      "同済大学電子・情報工学学院の学内大会報告",
      "Fakultät für Elektronik und Informationstechnik, Tongji: Bericht zum Vorentscheid",
    ]],
    ["马来亚大学报名与缴费说明", [
      "Universiti Malaya registration and payment instructions",
      "マラヤ大学の登録・支払い案内",
      "Universiti Malaya: Hinweise zu Anmeldung und Zahlung",
    ]],
    ["同济大学计算机科学与技术学院", [
      "Tongji University School of Computer Science and Technology",
      "同済大学計算機科学・技術学院",
      "Fakultät für Informatik der Tongji-Universität",
    ]],
    ["同济外国语学院校内选拔通知", [
      "Tongji School of Foreign Languages: campus selection notice",
      "同済大学外国語学院の学内選考案内",
      "Fremdsprachenfakultät der Tongji-Universität: Ausschreibung des Vorentscheids",
    ]],
    ["马来亚大学医学院赛程公告", [
      "Universiti Malaya Faculty of Medicine: competition schedule",
      "マラヤ大学医学部の大会日程案内",
      "Medizinische Fakultät der Universiti Malaya: Wettbewerbstermine",
    ]],
    ["全国组委会竞赛通知（高校刊载）", [
      "National organizing committee notice, republished by a university",
      "大学が掲載した全国実行委員会の大会通知",
      "Mitteilung des nationalen Organisationskomitees, veröffentlicht von einer Hochschule",
    ]],
    ["法学院2025—2026学年本科生奖学金通知", [
      "Law School undergraduate scholarship notice, 2025–26",
      "法学院の2025–2026年度学部生奨学金案内",
      "Juristische Fakultät: Ausschreibung der Bachelorstipendien 2025/26",
    ]],
    ["数学科学学院本科生评审通知", [
      "School of Mathematical Sciences: undergraduate scholarship review notice",
      "数理科学学院の学部生奨学金審査案内",
      "Fakultät für Mathematik: Hinweise zur Vergabe der Bachelorstipendien",
    ]],
    ["设计创意学院评审通知", [
      "College of Design and Innovation scholarship review notice",
      "デザイン創意学院の奨学金審査案内",
      "Fakultät für Design und Innovation: Hinweise zur Stipendienvergabe",
    ]],
    ["同济大学上海赛区报名通知", [
      "Tongji University: registration notice for the Shanghai region",
      "同済大学の上海地区大会申込案内",
      "Tongji-Universität: Anmeldung für die Region Shanghai",
    ]],
    ["化学科学与工程学院学年评审通知", [
      "School of Chemical Science and Engineering: annual scholarship review notice",
      "化学科学・工学学院の年度奨学金審査案内",
      "Fakultät für Chemie und Chemieingenieurwesen: jährliche Stipendienausschreibung",
    ]],
    ["建城学院本科生奖学金统计通知", [
      "College of Architecture and Urban Planning: call for undergraduate scholarship records",
      "建築・都市計画学院の学部生奨学金申告案内",
      "Fakultät für Architektur und Stadtplanung: Erfassung der Nachweise für Bachelorstipendien",
    ]],
    ["艺术与传媒学院第二批综测申报通知", [
      "College of Arts and Media: second-round assessment notice",
      "芸術・メディア学院の第2期総合評価申告案内",
      "Fakultät für Kunst und Medien: Aufruf zur zweiten Bewertungsrunde",
    ]],
    ["霍普杯组委会竞赛规则", [
      "UIA-HYP Cup organizing committee: competition rules",
      "UIA-HYP杯実行委員会の競技規則",
      "Wettbewerbsregeln des Organisationskomitees des UIA-HYP Cup",
    ]],
    ["米兰设计周高校设计作品展赛题页", [
      "Milan Design Week university design exhibition: competition brief",
      "ミラノデザインウィーク大学生デザイン作品展の課題ページ",
      "Mailänder Designwoche, Hochschulausstellung: Aufgabenstellung",
    ]],
    ["物理实验教学示范中心赛事通知", [
      "Physics Experiment Teaching Demonstration Center: competition notice",
      "物理実験教育モデルセンターの大会案内",
      "Lehrdemonstrationszentrum für physikalische Experimente: Ausschreibung",
    ]],
    ["RoboMaster 组委会", [
      "RoboMaster organizing committee",
      "RoboMaster実行委員会",
      "RoboMaster-Organisationskomitee",
    ]],
    ["同济大学计算机与信息技术国家级实验教学示范中心", [
      "Tongji National Demonstration Center for Experimental Computer and Information Technology Education",
      "同済大学計算機・情報技術国家級実験教育モデルセンター",
      "Nationales Lehrdemonstrationszentrum für praktische Informatik und Informationstechnik, Tongji",
    ]],
    ["海洋与地球科学学院2027年申请办法", [
      "School of Ocean and Earth Science: 2027 application instructions",
      "海洋・地球科学学院の2027年度募集要項",
      "Fakultät für Meeres- und Geowissenschaften: Bewerbungsrichtlinien 2027",
    ]],
    ["中国工程院赛事报道", [
      "Competition report from the Chinese Academy of Engineering",
      "中国工程院の大会報告",
      "Wettbewerbsbericht der Chinesischen Akademie der Ingenieurwissenschaften",
    ]],
    ["同济大学建筑与城市规划学院转载校赛通知", [
      "Campus notice republished by Tongji College of Architecture and Urban Planning",
      "同済大学建築・都市計画学院転載の学内大会案内",
      "Ausschreibung des Vorentscheids, veröffentlicht von Tongjis Fakultät für Architektur und Stadtplanung",
    ]],
    ["同济大学外国语学院德语系决赛通告", [
      "German Department, Tongji School of Foreign Languages: finals announcement",
      "同済大学外国語学院ドイツ語学科の決勝案内",
      "Abteilung für Germanistik, Fremdsprachenfakultät der Tongji-Universität: Ankündigung des Finales",
    ]],
    ["成都信息工程大学赛事报道", [
      "Competition report from Chengdu University of Information Technology",
      "成都信息工程大学の大会報告",
      "Wettbewerbsbericht der Chengdu University of Information Technology",
    ]],
    ["University Physics Competition 组委会", [
      "University Physics Competition organizing committee",
      "University Physics Competition実行委員会",
      "Organisationskomitee der University Physics Competition",
    ]],
    ["建城学院景观学系展览预告", [
      "Department of Landscape Architecture, College of Architecture and Urban Planning: exhibition preview",
      "建築・都市計画学院景観学科の展覧会案内",
      "Abteilung für Landschaftsarchitektur der Fakultät für Architektur und Stadtplanung: Ausstellungsvorschau",
    ]],
    ["全国大学生能源经济学术创意大赛第 1 号通知", [
      "National University Energy Economics Competition: notice no. 1",
      "全国大学生エネルギー経済学術アイデアコンテスト第1号通知",
      "Nationaler Hochschulwettbewerb für Energieökonomie: Mitteilung Nr. 1",
    ]],
    ["哈尔滨工业大学决赛报道", [
      "Harbin Institute of Technology: finals report",
      "ハルビン工業大学の決勝報告",
      "Harbin Institute of Technology: Bericht über das Finale",
    ]],
    ["外研社英语组笔译国赛通知", [
      "Foreign Language Teaching and Research Press: English written translation finals notice",
      "外語教学与研究出版社の英語筆訳部門全国大会案内",
      "Foreign Language Teaching and Research Press: Ausschreibung für das nationale Übersetzungsfinale (Englisch)",
    ]],
    ["经济与管理学院活动通知", [
      "School of Economics and Management: event announcement",
      "経済・経営学院の開催案内",
      "Fakultät für Wirtschaft und Management: Veranstaltungsankündigung",
    ]],
    ["蓝桥杯组委会第十八届举办通知", [
      "Lanqiao Cup organizing committee: 18th competition announcement",
      "藍橋杯実行委員会の第18回開催通知",
      "Organisationskomitee des Lanqiao Cup: Ausschreibung der 18. Ausgabe",
    ]],
    ["红点奖报名日程", [
      "Red Dot Award registration calendar",
      "レッド・ドット・デザイン賞の登録日程",
      "Anmeldekalender des Red Dot Award",
    ]],
    ["ICPC 上海站正式邀请函及赛程", [
      "ICPC Shanghai: official invitation and schedule",
      "ICPC上海大会の公式招待状・日程",
      "ICPC Shanghai: offizielle Einladung und Zeitplan",
    ]],
    ["全国三维数字化创新设计大赛组委会", [
      "National 3D Digital Innovation Design Competition organizing committee",
      "全国3Dデジタルイノベーション設計コンテスト実行委員会",
      "Organisationskomitee des nationalen Wettbewerbs für innovatives digitales 3D-Design",
    ]],
    ["ICPC 南昌站邀请函及参赛指南", [
      "ICPC Nanchang: invitation and contestants’ guide",
      "ICPC南昌大会の招待状・参加要項",
      "ICPC Nanchang: Einladung und Teilnahmeleitfaden",
    ]],
    ["香港大学 ICPC 赛站官网", [
      "University of Hong Kong: official ICPC regional site",
      "香港大学のICPC香港大会公式サイト",
      "Universität Hongkong: offizielle Website des ICPC-Regionalwettbewerbs",
    ]],
    ["全国大学生生命科学竞赛委员会通知（PDF）", [
      "National Life Sciences Competition committee notice (PDF)",
      "全国大学生生命科学コンテスト実行委員会の通知（PDF）",
      "Mitteilung des nationalen Organisationskomitees für den Wettbewerb in den Lebenswissenschaften (PDF)",
    ]],
    ["圣戈班赛事官网", [
      "Official Saint-Gobain competition website",
      "サンゴバン競技会公式サイト",
      "Offizielle Wettbewerbswebsite von Saint-Gobain",
    ]],
    ["COMAP 2027 竞赛规则", [
      "COMAP 2027 contest rules",
      "COMAP 2027年大会規則",
      "Wettbewerbsregeln von COMAP für 2027",
    ]],
    ["iF 设计奖年度日程", [
      "iF Design Award annual schedule",
      "iFデザインアワードの年間日程",
      "Jahreskalender des iF Design Award",
    ]],
    ["全国竞委会参赛指南", [
      "National competition committee: participation guide",
      "全国競技委員会の参加要項",
      "Teilnahmeleitfaden des nationalen Wettbewerbskomitees",
    ]],
    ["iGEM Foundation 大会官网", [
      "iGEM Foundation: official Grand Jamboree website",
      "iGEM財団の大会公式サイト",
      "iGEM Foundation: offizielle Website des Grand Jamboree",
    ]],
  ]),
};

const localeColumn = new Map([["en", 0], ["ja", 1], ["de", 2]]);

export function eventText(row, field, lang = "zh") {
  const original = row[field];
  const column = localeColumn.get(lang);
  if (column === undefined) return original;
  return translations[field]?.get(original)?.[column] ?? original;
}
