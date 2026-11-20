/* ==========================================================================
   Structured Academic Data
   ========================================================================== */

const PUBLICATIONS = [
  {
    id: "prd-2026-pbh",
    kind: "published",
    year: "2026",
    badge: { en: "Phys. Rev. D 114, 103536", zh: "Phys. Rev. D 114, 103536" },
    title: "Impact of heavy modes on primordial black hole formation",
    authorsHtml: "<strong>Guo-He Li</strong>, Mian Zhu, and Chunshan Lin",
    citation: "Phys. Rev. D 114, no. 10, 103536 (2026) · arXiv:2609.29743",
    links: [
      { label: { en: "Journal / DOI ↗", zh: "期刊 / DOI ↗" }, url: "https://doi.org/10.1103/p2q5-4qny" },
      { label: { en: "arXiv ↗", zh: "arXiv ↗" }, url: "https://arxiv.org/abs/2609.29743" }
    ],
    bibtex: `@article{Li:2026wgr,
    author = "Li, Guo-He and Zhu, Mian and Lin, Chunshan",
    title = "{Impact of heavy modes on primordial black hole formation}",
    eprint = "2609.29743",
    archivePrefix = "arXiv",
    primaryClass = "hep-ph",
    doi = "10.1103/p2q5-4qny",
    journal = "Phys. Rev. D",
    volume = "114",
    number = "10",
    pages = "103536",
    year = "2026"
}`
  },
  {
    id: "aop-2026-wormhole",
    kind: "published",
    year: "2026",
    badge: { en: "Annals Phys. 492, 170573", zh: "Annals Phys. 492, 170573" },
    title: "Wormhole solutions and pre-inflationary epoch in F(R,T) gravity with axion fields",
    authorsHtml: "<strong>Guo-He Li</strong>, Yeqi Fang, Yuchi Wu, and Jun Tao",
    citation: "Annals Phys. 492, 170573 (2026) · arXiv:2506.09310",
    links: [
      { label: { en: "Journal / DOI ↗", zh: "期刊 / DOI ↗" }, url: "https://doi.org/10.1016/j.aop.2026.170573" },
      { label: { en: "arXiv ↗", zh: "arXiv ↗" }, url: "https://arxiv.org/abs/2506.09310" }
    ],
    bibtex: `@article{Li:2025rog,
    author = "Li, Guo-He and Fang, Yeqi and Wu, Yuchi and Tao, Jun",
    title = "{Wormhole solutions and pre-inflationary epoch in F(R,T) gravity with axion fields}",
    eprint = "2506.09310",
    archivePrefix = "arXiv",
    primaryClass = "gr-qc",
    doi = "10.1016/j.aop.2026.170573",
    journal = "Annals Phys.",
    volume = "492",
    pages = "170573",
    year = "2026"
}`
  },
  {
    id: "arxiv-2603-emri-dissipative",
    kind: "preprint",
    year: "2026",
    badge: { en: "Preprint · arXiv:2603.02414", zh: "预印本 · arXiv:2603.02414" },
    title: "Orbital Dynamics and Gravitational Wave Signatures of Extreme Mass Ratio Inspirals in Galactic Dark Matter Halos",
    authorsHtml: "<strong>Guo-He Li</strong>, Q. Chenkai, and J. Tao",
    citation: "arXiv:2603.02414 [gr-qc] (2026)",
    links: [
      { label: { en: "arXiv ↗", zh: "arXiv ↗" }, url: "https://arxiv.org/abs/2603.02414" }
    ],
    bibtex: `@article{Li:2026emri,
    author = "Li, Guo-He and Chenkai, Q. and Tao, J.",
    title = "{Orbital Dynamics and Gravitational Wave Signatures of Extreme Mass Ratio Inspirals in Galactic Dark Matter Halos}",
    eprint = "2603.02414",
    archivePrefix = "arXiv",
    primaryClass = "gr-qc",
    year = "2026"
}`
  },
  {
    id: "arxiv-2510-emri-periodic",
    kind: "preprint",
    year: "2025",
    badge: { en: "Preprint · arXiv:2510.24989", zh: "预印本 · arXiv:2510.24989" },
    title: "Periodic orbits and their gravitational waves in EMRIs: supermassive black hole affected by galactic dark matter halos",
    authorsHtml: "<strong>Guo-He Li</strong>, Q. Chenkai, and J. Tao",
    citation: "arXiv:2510.24989 [gr-qc] (2025)",
    links: [
      { label: { en: "arXiv ↗", zh: "arXiv ↗" }, url: "https://arxiv.org/abs/2510.24989" }
    ],
    bibtex: `@article{Li:2025periodic,
    author = "Li, Guo-He and Chenkai, Q. and Tao, J.",
    title = "{Periodic orbits and their gravitational waves in EMRIs: supermassive black hole affected by galactic dark matter halos}",
    eprint = "2510.24989",
    archivePrefix = "arXiv",
    primaryClass = "gr-qc",
    year = "2025"
}`
  }
];

const TALKS = [
  {
    date: "2026.03",
    title: {
      en: "Orbital Evolution and Waveform Characteristics of EMRIs in Dark Matter Halos",
      zh: "Orbital Evolution and Waveform Characteristics of EMRIs in Dark Matter Halos（全英文报告）"
    },
    detail: {
      en: "Invited Talk · Particle Cosmology Group (Cospa @USTC), USTC, Hefei",
      zh: "受邀报告 · 中国科学技术大学 粒子宇宙学组 (Cospa @USTC)，合肥"
    }
  },
  {
    date: "2026.01",
    title: {
      en: "Dynamical Evolution and Waveform Characteristics of EMRIs in Dark Matter Halos",
      zh: "暗物质晕中 EMRIs 的动力学演化与波形特征"
    },
    detail: {
      en: "Tianwen Undergraduate Forum · Tsung-Dao Lee Institute (TDLI), Shanghai",
      zh: "天问本科生论坛 · 上海交通大学 李政道研究所，上海"
    }
  },
  {
    date: "2025.06",
    title: {
      en: "Wormhole Solutions and Pre-inflationary Conditions in Axion–F(R,T) Gravity",
      zh: "轴子场与 F(R,T) 引力中的虫洞解及暴胀初条件"
    },
    detail: {
      en: "Oral Presentation · Symposium on Frontiers of Theoretical Physics, Yibin",
      zh: "口头报告 · 理论物理前沿学术研讨会，四川宜宾"
    }
  },
  {
    date: "2025.01",
    title: {
      en: "Frank Wilczek Lecture Series",
      zh: "诺贝尔奖得主 Frank Wilczek 教授系列学术讲座"
    },
    detail: {
      en: "Invited Participant · Shanghai Jiao Tong University, Shanghai",
      zh: "受邀参与 · 上海交通大学，上海"
    }
  }
];

const HONORS = [
  {
    date: "2027",
    title: { en: "Outstanding Undergraduate Graduate of Sichuan University", zh: "四川大学 2027 届本科优秀毕业生" },
    badge: { en: "2027", zh: "2027届" },
    detail: { en: "Sichuan University", zh: "四川大学" }
  },
  {
    date: "2026",
    title: { en: "BYD Undergraduate Scholarship", zh: "比亚迪本科生奖学金" },
    badge: { en: "18 / Univ.", zh: "全校18位" },
    detail: { en: "Sichuan University (18 recipients university-wide)", zh: "四川大学（全校共 18 位）" }
  },
  {
    date: "2026",
    title: { en: "National Undergraduate Innovation Training Program", zh: "国家级大学生创新训练计划（项目主持人）" },
    badge: { en: "Project Leader", zh: "项目主持人" },
    detail: {
      en: "Cross-Scale Studies of Dark Matter Effects: From Cosmology to Multi-Messenger Observations",
      zh: "暗物质效应的跨尺度研究：从宇宙学到多信使观测"
    }
  },
  {
    date: "2025.12",
    title: { en: "Yan Jici Honors Scholarship", zh: "中国科学院物理研究所 严济慈班奖学金" },
    detail: { en: "Institute of Physics, Chinese Academy of Sciences", zh: "中国科学院物理研究所" }
  },
  {
    date: "2025.12",
    title: { en: "National Undergraduate Innovation Training Program", zh: "国家级大学生创新训练计划" },
    detail: { en: "Research on Gravitational Waves & Gravitational Lensing (Member)", zh: "引力波与引力透镜等现象的研究（项目成员）" }
  },
  {
    date: "2025.05",
    title: { en: "Grand Prize (Sichuan Province), 18th Challenge Cup", zh: "第十八届“挑战杯”四川省大学生课外学术科技作品竞赛特等奖" },
    badge: { en: "Project Leader", zh: "项目主持人" },
    detail: { en: "Sichuan Provincial Science & Technology Competition (Project Leader)", zh: "省级特等奖（项目主持人）" }
  },
  {
    date: "2025.11",
    title: { en: "Xinman Sensing Scholarship & SCU Second-Class Award", zh: "新漫传感社会奖学金 · 四川大学单项二等奖" },
    detail: { en: "Sichuan University", zh: "四川大学" }
  },
  {
    date: "2024.07",
    title: { en: "Second Prize (Sichuan Province), National Math Competition", zh: "第十六届全国大学生数学竞赛（非数学类）四川省二等奖" },
    detail: { en: "16th National College Mathematics Competition", zh: "省级二等奖" }
  },
  {
    date: "2023–2024",
    title: { en: "First-Class Comprehensive Scholarship & Outstanding Student", zh: "四川大学综合一等奖学金 · 优秀学生 · 物理学院五四单项奖" },
    detail: { en: "Sichuan University & College of Physics", zh: "四川大学" }
  }
];

/* ==========================================================================
   Bilingual Copy Dictionary (EN / 中文)
   ========================================================================== */

const I18N = {
  en: {
    brandName: "Guo-He Li",
    brandField: "Cosmology & Astronomy",
    navAbout: "§ 1 About",
    navResearch: "§ 2 Research",
    navPublications: "§ 3 Publications",
    navRecognition: "§ 4 Honors & Talks",
    photoAction: "Add Photo",
    heroTitle: "Guo-He Li",
    dossierRole: "Physics Undergraduate · Sichuan University / Incoming Ph.D. in Astronomy · USTC (2027)",
    metaFieldsK: "Fields",
    metaFieldsV: "Cosmology & Astronomy",
    metaBaseK: "Places",
    metaBaseV: "Chengdu → Hefei",
    copyBtn: "Copy",
    skyKicker: "SCU PHYSICS (2023–2027) · USTC ASTRONOMY PH.D. (2027–)",
    skyQuote: "“The eternal mystery of the world is its comprehensibility.”",
    skyCite: "— Albert Einstein, Physics and Reality (1936)",
    statPubs: "2 Published (PRD, Annals Phys.)",
    statPre: "2 arXiv Preprints",
    statProj: "2026 Nat. Innovation Leader",
    skyCta: "View Publications →",
    aboutTitle: "About Me",
    aboutLead:
      "Hi, I'm Guo-He Li (李国禾). I'm currently an undergraduate in the Physics Honors Program at Sichuan University (graduating in 2027), and will join the Department of Astronomy at the University of Science and Technology of China (USTC) as a Ph.D. student.",
    aboutBody1:
      "Curiosity about the universe is often both sweeping and romantic. Driven by that curiosity, and guided by mentors who helped turn wonder into inquiry, I chose to root myself in cosmology and astronomy. Through the generous mentorship of my advisors and collaborators, I took my first steps in early universe and extreme mass ratio inspiral (EMRI) research.",
    aboutBody2:
      "I know I am still at the very beginning of this journey. Right now, my focus is on building solid foundations in physics, reading widely, and reflecting honestly on which area of cosmology I want to devote my Ph.D. years to. Living in an era shaped by both multi-messenger astronomy and rapid advances in artificial intelligence, and supported by the warmth of my family and the guidance of my mentors, I hope to find my own path amid the uncertainty.",
    eduUstcDate: "2027 – Future",
    eduUstcSchool: "University of Science and Technology of China (USTC)",
    eduUstcRole: "Ph.D. Student · Department of Astronomy · Hefei",
    eduScuDate: "2023 – 2027",
    eduScuSchool: "Sichuan University",
    eduScuRole: "B.S. in Physics (Top-Notch Honors Program) · Chengdu",
    beyondTitle: "Away from the Desk",
    hobby1Title: "Road Cycling",
    hobby1Stat: "100 km · PB 3h 40min",
    hobby1Desc: "Looping the 100 km Chengdu Ring Greenway, with a personal best of 3h 40min.",
    hobby2Title: "Football",
    hobby2Stat: "Weekly Pitch",
    hobby2Desc: "Playing football with friends to clear my head and keep life balanced outside research.",
    researchTitle: "Research Interests",
    broadValue: "Overall Direction: Cosmology & Astronomy",
    res1Fig: "FIG. A · COSMIC INFLATION, CMB & PRIMORDIAL STRUCTURE",
    res1Stage: "Undergraduate Research & Training · Sichuan University",
    res1Title: "Early Universe",
    res1Lead:
      "During my undergraduate training, my early universe work focused on primordial black hole formation and pre-inflationary cosmology in modified gravity.",
    res1Pt1:
      "Primordial Black Hole (PBH) Formation: Studied the impact of heavy modes on primordial black hole formation (Phys. Rev. D 114, 103536, 2026).",
    res1Pt2:
      "Wormholes & Pre-Inflationary Epoch: Constructed axion-wormhole solutions in F(R, T) gravity, increasing the wormhole tunneling probability and addressing the insufficient inflation duration under the no-boundary proposal (Annals Phys. 492, 170573, 2026).",
    res1Tag1: "Primordial Black Holes",
    res1Tag2: "Heavy Modes",
    res1Tag3: "F(R,T) Gravity & Axion Wormholes",
    res2Fig: "FIG. B · PRECESSING EMRI ORBIT & STRAIN h(t)",
    sliderLabel: "Eccentricity",
    res2Stage: "Undergraduate Research & Training · Sichuan University",
    res2Title: "Extreme Mass Ratio Inspirals (EMRIs) & Gravitational Waves",
    res2Lead:
      "Modeling relativistic two-body dynamics around supermassive black holes embedded in realistic galactic dark matter environments to identify environmental imprints in gravitational waveforms.",
    res2Pt1:
      "Periodic & Precessing Orbits: Studied periodic orbits and general precessing orbits around supermassive black holes in NFW, Beta, and Moore galactic dark matter halos, benchmarking against the Schwarzschild black hole (arXiv:2510.24989).",
    res2Pt2:
      "Dissipative Effects & Cross-Scale Studies: Incorporated dissipative effects including dynamical friction, accretion, and gravitational radiation in EMRI orbital dynamics and waveforms (arXiv:2603.02414), and lead the 2026 National Undergraduate Innovation Program on cross-scale dark matter effects from cosmology to multi-messenger observations.",
    res2Tag1: "EMRI Dynamics",
    res2Tag2: "Dark Matter Halos (NFW · Beta · Moore)",
    res2Tag3: "GW Waveforms",
    res3Stage: "Upcoming Ph.D. · Department of Astronomy, USTC (2027–)",
    res3Title: "Next Chapter in Cosmology (Exploring)",
    res3Desc:
      "As I prepare to begin my Ph.D. in the Department of Astronomy at USTC, I am currently thinking carefully about which specific subfield of cosmology to focus on, staying curious and open across both theoretical cosmology and multi-messenger observations.",
    pubTitle: "Publications & Preprints",
    tabAll: "All (4)",
    tabPublished: "Published (2)",
    tabPreprints: "Preprints (2)",
    recTitle: "Talks, Projects & Honors",
    talksHeader: "Academic Talks & Seminars",
    honorsHeader: "Honors, Scholarships & Projects",
    footerNote: "Cosmology & Astronomy",
    backToTop: "Back to top ↑"
  },
  zh: {
    brandName: "李国禾 · Guo-He Li",
    brandField: "宇宙学 · 天文学",
    navAbout: "§ 1 关于我",
    navResearch: "§ 2 研究方向",
    navPublications: "§ 3 论文成果",
    navRecognition: "§ 4 报告与荣誉",
    photoAction: "添加照片",
    heroTitle: "李国禾 Guo-He Li",
    dossierRole: "四川大学物理学（拔尖计划）本科生 / 中国科学技术大学天文学系 Ph.D.（2027）",
    metaFieldsK: "研究方向",
    metaFieldsV: "宇宙学 · 天文学",
    metaBaseK: "学习轨迹",
    metaBaseV: "成都 → 合肥",
    copyBtn: "复制",
    skyKicker: "四川大学物理学院（2023–2027）· 中国科大天文系 PH.D.（2027–）",
    skyQuote: "“世界永恒的奥秘在于它的可理解性。”",
    skyCite: "— 阿尔伯特·爱因斯坦，《物理与实在》（1936）",
    statPubs: "2 篇期刊发表 (PRD, Annals Phys.)",
    statPre: "2 篇 arXiv 预印本",
    statProj: "2026 国家级大创主持人",
    skyCta: "查看论文列表 →",
    aboutTitle: "关于我",
    aboutLead:
      "你好，我是李国禾（Guo-He Li）。目前是四川大学物理学（拔尖计划）2023 级本科生（预计 2027 年毕业），之后将前往中国科学技术大学天文学系攻读博士（Ph.D.）学位。",
    aboutBody1:
      "人们对宇宙的好奇往往广泛而浪漫，而心底的这份好奇与师长们的引导，让我真正选择并试着扎根于此。在导师与合作者们的耐心指点和帮助下，我在本科阶段迈出了科研的第一步，开始接触早期宇宙以及极端质量比旋近（EMRIs）相关的研究。",
    aboutBody2:
      "我深知自己仍处于这段旅程的起点。现阶段对我来说最重要的是把物理基础打扎实、多读文献，同时认真思考博士几年究竟想在宇宙学的哪个具体方向上深耕。置身于多信使天文学与人工智能交汇的时代浪潮之中，有家人的温暖陪伴与支持，有师长的悉心指引，我希望能在这份充满未知与不确定性的探索里，一步步走出属于自己的方向。",
    eduUstcDate: "2027 年起",
    eduUstcSchool: "中国科学技术大学（USTC）",
    eduUstcRole: "天文学系 博士研究生（Ph.D.）· 合肥",
    eduScuDate: "2023 – 2027",
    eduScuSchool: "四川大学",
    eduScuRole: "物理学（拔尖计划）本科生 · 成都",
    beyondTitle: "科研之外",
    hobby1Title: "公路骑行",
    hobby1Stat: "百公里绿道 · 最快 3h40min",
    hobby1Desc: "喜欢沿着成都绕城百公里绿道骑行放空，绕城一圈个人最快纪录 3 小时 40 分钟。",
    hobby2Title: "踢足球",
    hobby2Stat: "绿茵日常",
    hobby2Desc: "平时喜欢和朋友一起踢球，在奔跑和配合中暂时脱离公式与代码，保持好状态。",
    researchTitle: "研究方向",
    broadValue: "总体方向：宇宙学 · 天文学",
    res1Fig: "图 A · 宇宙暴胀演化、微波背景涨落与原初结构",
    res1Stage: "本科科研探索与训练 · 四川大学",
    res1Title: "早期宇宙",
    res1Lead:
      "在本科科研训练期间，早期宇宙方面的研究主要围绕原初黑洞形成以及修正引力下的暴胀前时期问题展开。",
    res1Pt1:
      "重模式与原初黑洞形成：研究了重模式（heavy modes）对原初黑洞形成的影响（Phys. Rev. D 114, 103536, 2026）。",
    res1Pt2:
      "虫洞解与暴胀初条件：在耦合轴子场的 F(R, T) 修正引力框架下构建了“轴子-虫洞”模型，有效提高了虫洞的隧穿概率，并利用该方案缓解了无边界设想（No-boundary proposal）下暴胀持续时间不足的问题（Annals Phys. 492, 170573, 2026）。",
    res1Tag1: "原初黑洞 (PBHs)",
    res1Tag2: "重模式效应",
    res1Tag3: "F(R,T) 引力与轴子虫洞",
    res2Fig: "图 B · 暗物质晕中 EMRI 进动轨道与应变波形 h(t)",
    sliderLabel: "偏心率",
    res2Stage: "本科科研探索与训练 · 四川大学",
    res2Title: "极端质量比旋进系统（EMRIs）与引力波",
    res2Lead:
      "研究嵌入星系暗物质晕中的超大质量黑洞周围致密天体的相对论轨道动力学，探索天体物理环境在引力波波形中的特征。",
    res2Pt1:
      "暗物质晕中的周期轨道与一般进动轨道：在 NFW、Beta 与 Moore 暗物质晕模型下研究超大质量黑洞周围的周期性轨道与一般进动轨道，并以史瓦西黑洞为基准分析暗物质晕参数对轨道与引力波性质的影响（arXiv:2510.24989）。",
    res2Pt2:
      "耗散动力学与跨尺度暗物质研究：进一步考虑动力学摩擦、吸积效应与引力辐射等耗散效应演化旋近轨道与引力波波形（arXiv:2603.02414），并主持 2026 年国家级大学生创新训练计划《暗物质效应的跨尺度研究：从宇宙学到多信使观测》。",
    res2Tag1: "EMRI 轨道动力学",
    res2Tag2: "暗物质晕 (NFW · Beta · Moore)",
    res2Tag3: "引力波波形特征",
    res3Stage: "博士阶段 · 中国科学技术大学天文学系（2027 起）",
    res3Title: "宇宙学未来方向（思考中）",
    res3Desc:
      "面向即将在中国科学技术大学天文学系开启的博士（Ph.D.）阶段，具体聚焦宇宙学的哪一个细分研究方向目前仍在思考与沉淀中，希望能继续保持对早期宇宙理论与多信使观测的开放视野。",
    pubTitle: "论文与预印本",
    tabAll: "全部 (4)",
    tabPublished: "已发表 (2)",
    tabPreprints: "预印本 (2)",
    recTitle: "学术报告、项目与荣誉",
    talksHeader: "学术报告与交流",
    honorsHeader: "荣誉、奖学金与大创项目",
    footerNote: "宇宙学 · 天文学",
    backToTop: "返回顶部 ↑"
  }
};

/* ==========================================================================
   Theme, Language, Photo Preview, Publications & Canvases
   ========================================================================== */

const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const langToggle = document.getElementById("lang-toggle");
const langLabel = document.getElementById("lang-label");
const pubContainer = document.getElementById("pub-container");
const talksList = document.getElementById("talks-list");
const honorsList = document.getElementById("honors-list");
const filterPills = document.querySelectorAll(".filter-pill");
const readingBar = document.getElementById("reading-bar");

let currentLang = "en";
let activeFilter = "all";

try {
  const savedTheme = localStorage.getItem("gl-theme-v3");
  if (savedTheme === "light" || savedTheme === "dark") {
    root.dataset.theme = savedTheme;
  }
  const savedLang = localStorage.getItem("gl-lang");
  if (savedLang === "en" || savedLang === "zh") {
    currentLang = savedLang;
  }
} catch {}

function applyTheme(theme) {
  root.dataset.theme = theme;
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", theme === "dark" ? "#090e19" : "#f8f6f1");
  }
  try {
    localStorage.setItem("gl-theme-v3", theme);
  } catch {}
}

themeToggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

function copyText(text, btn, defaultLabel, doneLabel) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = doneLabel;
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = defaultLabel;
        btn.classList.remove("copied");
      }, 1800);
    }).catch(() => {});
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderPubItem(p, isFeatured) {
  const linksHtml = p.links
    .map(
      (l) =>
        `<a class="pub-btn" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label[currentLang]}</a>`
    )
    .join("");
  const copyBibLabel = currentLang === "zh" ? "复制 BibTeX" : "Copy BibTeX";
  const venueClass = p.kind === "preprint" ? "pub-venue is-preprint" : "pub-venue";
  const rowClass = isFeatured ? "pub-row-featured" : "pub-row";

  return `
    <article class="${rowClass}">
      <div class="pub-meta">
        <span class="${venueClass}">${p.badge[currentLang]}</span>
        <span class="pub-year">${p.year}</span>
      </div>
      <h3 class="pub-title">${p.title}</h3>
      <p class="pub-authors">${p.authorsHtml}</p>
      <p class="pub-ref">${p.citation}</p>
      <div class="pub-actions">
        ${linksHtml}
        <button class="pub-btn toggle-bib-btn" type="button" data-pub-id="${p.id}" aria-expanded="false">BibTeX ▾</button>
        <button class="pub-btn bibtex-btn" type="button" data-pub-id="${p.id}">${copyBibLabel}</button>
      </div>
      <pre class="bib-box" id="bib-${p.id}">${escapeHtml(p.bibtex)}</pre>
    </article>
  `;
}

function renderPublications() {
  const published = PUBLICATIONS.filter((p) => p.kind === "published");
  const preprints = PUBLICATIONS.filter((p) => p.kind === "preprint");

  let html = "";

  if (activeFilter === "all" || activeFilter === "published") {
    const label = currentLang === "zh" ? "期刊发表" : "Published Journal Articles";
    html += `<p class="pub-sublabel">${label}</p>`;
    html += published.map((p) => renderPubItem(p, true)).join("");
  }

  if (activeFilter === "all" || activeFilter === "preprint") {
    const label = currentLang === "zh" ? "预印本" : "Preprints";
    html += `<p class="pub-sublabel">${label}</p>`;
    html += `<div class="pub-list">${preprints
      .map((p) => renderPubItem(p, false))
      .join("")}</div>`;
  }

  pubContainer.innerHTML = html;

  pubContainer.querySelectorAll(".bibtex-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pub = PUBLICATIONS.find((item) => item.id === btn.dataset.pubId);
      if (!pub) return;
      const defaultLabel = currentLang === "zh" ? "复制 BibTeX" : "Copy BibTeX";
      const doneLabel = currentLang === "zh" ? "已复制 ✓" : "Copied ✓";
      copyText(pub.bibtex, btn, defaultLabel, doneLabel);
    });
  });

  pubContainer.querySelectorAll(".toggle-bib-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const drawer = document.getElementById(`bib-${btn.dataset.pubId}`);
      if (!drawer) return;
      const isOpen = drawer.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.textContent = isOpen ? "BibTeX ▴" : "BibTeX ▾";
    });
  });
}

function renderRecognition() {
  talksList.innerHTML = TALKS.map(
    (t) => `
      <div class="ledger-row">
        <span class="ledger-date">${t.date}</span>
        <div>
          <div class="ledger-title">${t.title[currentLang]}</div>
          <p class="ledger-sub">${t.detail[currentLang]}</p>
        </div>
      </div>
    `
  ).join("");

  honorsList.innerHTML = HONORS.map(
    (h) => `
      <div class="ledger-row">
        <span class="ledger-date">${h.date}</span>
        <div>
          <div class="ledger-title">
            ${h.title[currentLang]}${
              h.badge ? `<span class="honor-pill">${h.badge[currentLang]}</span>` : ""
            }
          </div>
          <p class="ledger-sub">${h.detail[currentLang]}</p>
        </div>
      </div>
    `
  ).join("");
}

function applyLanguage(lang) {
  currentLang = lang;
  root.lang = lang === "zh" ? "zh-CN" : "en";
  langLabel.textContent = lang === "zh" ? "EN" : "中文";
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  renderPublications();
  renderRecognition();
  try {
    localStorage.setItem("gl-lang", lang);
  } catch {}
}

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "zh" : "en");
});

filterPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    activeFilter = pill.dataset.filter;
    filterPills.forEach((t) => {
      const isSelected = t === pill;
      t.classList.toggle("active", isSelected);
      t.setAttribute("aria-selected", String(isSelected));
    });
    renderPublications();
  });
});

/* Local photo preview */
const photoInput = document.getElementById("photo-preview-input");
const portraitImg = document.getElementById("portrait-img");
const portraitFrame = document.getElementById("portrait-frame");
if (photoInput && portraitImg && portraitFrame) {
  photoInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      if (evt.target && typeof evt.target.result === "string") {
        portraitImg.src = evt.target.result;
        portraitFrame.classList.add("has-photo");
      }
    };
    reader.readAsDataURL(file);
  });
}

const copyEmailBtn = document.getElementById("copy-email-btn");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    const defaultLabel = currentLang === "zh" ? "复制" : "Copy";
    const doneLabel = currentLang === "zh" ? "已复制 ✓" : "Copied ✓";
    copyText(copyEmailBtn.dataset.email, copyEmailBtn, defaultLabel, doneLabel);
  });
}

window.addEventListener(
  "scroll",
  () => {
    if (!readingBar) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    readingBar.style.width = `${pct.toFixed(2)}%`;
  },
  { passive: true }
);

/* Scroll reveal + active nav tracking */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  revealEls.forEach((el) => observer.observe(el));

  const navLinks = document.querySelectorAll(".topbar-nav a[data-nav]");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.dataset.nav === id);
          });
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((sec) => {
    sectionObserver.observe(sec);
  });
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

/* ==========================================================================
   Canvases: (1) Top Starlight, (2) Early Universe Ripples, (3) EMRI Orbit
   ========================================================================== */

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

(function initTopStarlight() {
  const canvas = document.getElementById("starlight-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let w = 0, h = 0, dpr = 1, t = 0, stars = [];
  function build() {
    const count = Math.min(55, Math.max(24, Math.floor((w * h) / 14000)));
    stars = Array.from({ length: count }, (_, i) => {
      const s1 = Math.sin(i * 12.98 + 78.23) * 43758.54;
      const s2 = Math.sin(i * 93.98 + 19.13) * 24634.63;
      return {
        x: (s1 - Math.floor(s1)) * w,
        y: (s2 - Math.floor(s2)) * h * 0.78,
        r: 0.6 + (i % 3) * 0.45,
        a: 0.22 + (i % 5) * 0.08
      };
    });
  }
  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width; h = rect.height;
    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    build();
    draw(0);
  }
  function draw(dt) {
    t += dt;
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const alpha = s.a + Math.sin(t * 1.1 + s.x * 0.02) * 0.14;
      ctx.fillStyle = `rgba(248, 242, 230, ${Math.max(0.06, alpha)})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  let last = 0;
  function loop(ts) {
    if (!last) last = ts;
    const dt = Math.min(0.05, (ts - last) / 1000);
    last = ts;
    draw(dt);
    requestAnimationFrame(loop);
  }
  window.addEventListener("resize", resize);
  resize();
  if (!prefersReduced) requestAnimationFrame(loop);
})();

(function initEarlyCanvas() {
  const canvas = document.getElementById("early-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let w = 0, h = 0, dpr = 1, t = 0, stars = [];
  function build() {
    stars = Array.from({ length: 28 }, (_, i) => {
      const s1 = Math.sin(i * 17.3 + 41.2) * 43758.5;
      const s2 = Math.sin(i * 73.1 + 19.8) * 24634.6;
      return {
        x: (s1 - Math.floor(s1)) * w,
        y: (s2 - Math.floor(s2)) * h,
        r: 0.6 + (i % 3) * 0.4,
        a: 0.2 + (i % 4) * 0.1
      };
    });
  }
  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width; h = rect.height;
    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    build();
    draw(0);
  }
  function draw(dt) {
    t += dt;
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const alpha = s.a + Math.sin(t * 1.2 + s.x * 0.03) * 0.14;
      ctx.fillStyle = `rgba(248, 242, 230, ${Math.max(0.05, alpha)})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  let last = 0;
  function loop(ts) {
    if (!last) last = ts;
    const dt = Math.min(0.05, (ts - last) / 1000);
    last = ts;
    draw(dt);
    requestAnimationFrame(loop);
  }
  window.addEventListener("resize", resize);
  resize();
  if (!prefersReduced) requestAnimationFrame(loop);
})();

(function initEmriCanvas() {
  const canvas = document.getElementById("emri-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const slider = document.getElementById("emri-slider");
  const pauseBtn = document.getElementById("emri-pause");
  let isPaused = prefersReduced;
  let w = 0, h = 0, dpr = 1, time = 0;
  let param = slider ? Number(slider.value) / 100 : 0.46;

  if (slider) {
    slider.addEventListener("input", () => {
      param = Number(slider.value) / 100;
      if (isPaused) draw(0);
    });
  }
  if (pauseBtn) {
    const sync = () => {
      pauseBtn.textContent = isPaused ? "▶" : "❚❚";
      pauseBtn.setAttribute("aria-label", isPaused ? "Resume simulation" : "Pause simulation");
    };
    sync();
    pauseBtn.addEventListener("click", () => {
      isPaused = !isPaused;
      sync();
    });
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width; h = rect.height;
    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(0);
  }

  function draw(dt) {
    if (!isPaused) time += dt;
    ctx.clearRect(0, 0, w, h);

    const cx = w * 0.5;
    const cy = h * 0.5;
    const scale = Math.min(w, h) * 0.34;
    const ecc = 0.16 + param * 0.36;
    const precession = 0.25 + param * 0.2;

    ctx.save();
    const steps = 200;
    const maxAngle = time * 1.45;
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const theta = maxAngle - (steps - i) * 0.055;
      const r = (scale * (1 - ecc * ecc * 0.45)) / (1 + ecc * Math.cos(theta * (1 - precession)));
      const x = cx + r * Math.cos(theta);
      const y = cy + r * Math.sin(theta) * 0.68;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(235, 208, 162, 0.58)";
    ctx.lineWidth = 1.35;
    ctx.stroke();

    const curR = (scale * (1 - ecc * ecc * 0.45)) / (1 + ecc * Math.cos(maxAngle * (1 - precession)));
    const bx = cx + curR * Math.cos(maxAngle);
    const by = cy + curR * Math.sin(maxAngle) * 0.68;

    const glow = ctx.createRadialGradient(bx, by, 0, bx, by, 13);
    glow.addColorStop(0, "rgba(170, 214, 255, 0.95)");
    glow.addColorStop(1, "rgba(170, 214, 255, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(bx, by, 13, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(bx, by, 2.8, 0, Math.PI * 2);
    ctx.fill();

    // Subtle h(t) strain trace on lower left
    const x0 = 18;
    const x1 = Math.min(w * 0.48, 320);
    const wy = h - 28;
    ctx.beginPath();
    for (let px = x0; px <= x1; px += 2) {
      const u = (px - x0) / Math.max(1, x1 - x0);
      const amp = (7 + param * 11) * Math.sin(u * Math.PI);
      const phase = u * (12 + param * 12) - time * 3.0;
      const y = wy + Math.sin(phase) * amp;
      if (px === x0) ctx.moveTo(px, y);
      else ctx.lineTo(px, y);
    }
    ctx.strokeStyle = "rgba(235, 208, 162, 0.82)";
    ctx.lineWidth = 1.3;
    ctx.stroke();
    ctx.restore();
  }

  let last = 0;
  function loop(ts) {
    if (!last) last = ts;
    const dt = Math.min(0.05, (ts - last) / 1000);
    last = ts;
    draw(dt);
    requestAnimationFrame(loop);
  }
  window.addEventListener("resize", resize);
  resize();
  if (!prefersReduced) requestAnimationFrame(loop);
  else { time = 1.4; draw(0); }
})();

/* ==========================================================================
   Init
   ========================================================================== */

applyTheme(root.dataset.theme || "light");
applyLanguage(currentLang);
document.getElementById("year").textContent = String(new Date().getFullYear());
