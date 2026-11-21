(function () {
  'use strict';

  // Absolute image URLs so AI assistants (Gemini in Chrome, ChatGPT, ...) can display the photos.
  const SITE = /(^|\.)devzix\.com$/.test(location.hostname) ? location.origin : 'https://www.devzix.com';

  // Random order on every load/refresh. Mazen is placed first 30% of the time;
  // otherwise one of the other members leads. The remaining order is shuffled.
  const MAZEN_FIRST_CHANCE = 0.3;
  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function buildTeamOrder() {
    const others = ['yassen', 'ahmed', 'maya'];
    if (Math.random() < MAZEN_FIRST_CHANCE) return ['mazen'].concat(shuffle(others));
    const shuffled = shuffle(others);
    const first = shuffled.shift();
    return [first].concat(shuffle(shuffled.concat('mazen')));
  }
  const TEAM_ORDER = buildTeamOrder();

  const intro = document.getElementById('intro');
  const introThemeToggle = document.getElementById('intro-theme-toggle');
  function setIntroTheme(theme) {
    if (!intro) return;
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    intro.setAttribute('data-intro-theme', nextTheme);
    if (introThemeToggle) introThemeToggle.setAttribute('aria-label', nextTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  if (intro) {
    setIntroTheme(document.documentElement.getAttribute('data-intro-theme'));
    document.body.style.overflow = 'hidden';
    if (introThemeToggle) introThemeToggle.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      setIntroTheme(intro.getAttribute('data-intro-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  const translations = {
    en: {
      heroEyebrow: 'EGYPT’S LEADING YOUTH TECH FORCE', specialtiesLabel: 'Team disciplines', countdownLabel: 'Time until the start of the new year', tagFullstack: 'FULL-STACK', tagBackend: 'BACKEND', tagAi: 'AI / ML', tagSecurity: 'SECURITY', tagline: 'Building the Future, One Innovation at a Time.',
      heroDescription: 'The most powerful tech team in Egypt, built by prodigy developers leading web architecture, AI, and cybersecurity.',
      discipline1: 'Full-Stack Development', discipline2: 'Backend Engineering', discipline3: 'AI & Machine Learning', discipline4: 'Cybersecurity', meetLink: 'Meet the team',
      launchEyebrow: 'THE NEXT MILESTONE', launchTitle: 'Our portfolio is<br>almost ready.', launchDescription: 'A closer look at what we make, how we think, and where we’re headed.',
      days: 'DAYS', hours: 'HOURS', minutes: 'MINUTES', seconds: 'SECONDS', countdownNote: 'بدايه عام جديد مع devzix', apologyNotice: 'We apologize for postponing the website launch. The opening will be on the first day of the new year, after all projects are completed.',
      notifyEyebrow: 'STAY IN THE LOOP', notifyTitle: 'Be the first to know<br>when we launch.', notifyDesc: 'Leave your name, email or phone number if you want a reminder on WhatsApp or by email when the portfolio goes live. You can also add an encouraging message.',
      notifyNameLabel: 'Your name (optional)', notifyNamePh: 'Your name (optional)', notifyEmailLabel: 'Your email (optional)', notifyEmailPh: 'you@example.com', notifyPhoneLabel: 'Phone number (optional)', notifyPhonePh: '+20 1XXXXXXXXX', notifyMsgLabel: 'Encouraging message', notifyMsgPh: 'Write an encouraging message...', notifyBtn: 'Notify me',
      notifySending: 'Sending...', notifySuccess: 'Your message has been sent successfully.', notifyError: 'Could not send your message. Please try again.',
      teamEyebrow: 'THE PEOPLE', teamTitle: 'Meet the Team', teamSubtitle: 'Egypt’s premier young tech minds behind devzix.', skillsTitle: 'PROVEN ACHIEVEMENTS & CORE SKILLS', age: 'AGE',
      aboutEyebrow: 'ELITE PRODIGY DEVELOPERS', aboutTitle: 'Why devzix?', aboutText: 'At devzix, we assemble Egypt’s premier young software talents—creators of PyNox (the premier platform in cybersecurity & hacking defense), MindBot AI, and major national platforms such as Al Shater Academy, Morbido Bed, and Teryaq Go, all hardened under advanced cyber defense led by Engineer Maya Magdy Mahmoud.',
      metaDescription: 'Devzix (ديفيزكس) — A technology team featuring Mazen Ahmed Badr (frontend), Ahmed Helmy Eletr (AI), Yassen Sabry Elawamy (PyNox and backend engineering), and Maya Magdy Mahmoud (cybersecurity).',
      copyright: '© 2026 devzix. All rights reserved.', launched: 'devzix Portfolio is Now Live.', languageLabel: 'EN <span class="control-separator">/</span> AR', languageAria: 'Switch language to Arabic',
      themeLight: 'Switch to light mode', themeDark: 'Switch to dark mode',
      members: [
        { id: 'yassen', name: 'Yassen Sabry Elawamy', role: 'Backend Architect & Tech Entrepreneur (Age 18)', age: 18, image: SITE + '/assets/images/team/yassen.jpg', webp: SITE + '/assets/images/team/yassen.webp', alt: 'Yassen Sabry Elawamy - Creator of PyNox, Al Shater Academy & Morbido Bed | ياسين صبري العوامي', skills: ['Creator of PyNox — The premier platform in cybersecurity & hacking defense', 'Architect & Developer of <a href="https://alshateracademy.com/" target="_blank" rel="noopener noreferrer">Al Shater Academy</a> educational platform', 'Lead Developer of <a href="https://morbido-bed.com/" target="_blank" rel="noopener noreferrer">Morbido Bed</a> luxury enterprise platform', 'Developer of Teryaq Go, Souq Al-Gomaa & Sadaqat Al-Gomaa initiatives'] },
        { id: 'maya', name: 'Maya Magdy Mahmoud', role: 'Lead Cybersecurity & Penetration Testing Engineer (Key Member)', age: 22, image: SITE + '/assets/images/team/maya.jpeg', webp: SITE + '/assets/images/team/maya.webp', alt: 'Maya Magdy Mahmoud - Lead Cybersecurity Engineer & Key Member of Devzix | مايا مجدي محمود', skills: ['Primary pillar securing Devzix infrastructure & high-scale platforms', 'Advanced Penetration Testing & Zero-Day Vulnerability Assessment', 'Zero-Trust Network Architecture & Cryptographic Protocols', 'Threat Intelligence, Intrusion Defense & Critical System Hardening'] },
        { id: 'mazen', name: 'Mazen Ahmed Badr', role: 'Full-Stack Developer & Frontend Architect', age: 17, image: SITE + '/assets/images/team/mazen.jpg', webp: SITE + '/assets/images/team/mazen.webp', alt: 'Mazen Ahmed Badr - Frontend Developer of Teryaq Go & Al Shater Academy | مازن احمد بدر', skills: ['Frontend Developer at Teryaq Go digital platform', 'UI/UX Engineering for <a href="https://alshateracademy.com/" target="_blank" rel="noopener noreferrer">Al Shater Academy</a> ecosystem', 'Modern Web Architecture, Responsive Systems & State Handling', 'RESTful APIs, Performance Tuning & Scalable Client Interfaces'] },
        { id: 'ahmed', name: 'Ahmed Helmy Eletr', role: 'AI & Machine Learning Engineer', age: 17, image: SITE + '/assets/images/team/ahmed.png', webp: SITE + '/assets/images/team/ahmed.webp', alt: 'Ahmed Helmy Eletr - Creator of MindBot AI | احمد حلمي العتر', skills: ['Creator of <a href="https://mindbotai.pro/" target="_blank" rel="noopener noreferrer">MindBot AI</a> platform', 'Predictive AI & Dynamic Dispatch Algorithms', 'Deep Neural Networks, Computer Vision & NLP deployment', 'Real-Time Telemetry & Cloud-Native Model Pipelines'] }
      ]
    },
    ar: {
      heroEyebrow: 'أقوى تيم برمجي في مصر', specialtiesLabel: 'تخصصات الفريق', countdownLabel: 'الوقت المتبقي حتى بداية العام الجديد', tagFullstack: 'تطوير متكامل', tagBackend: 'أنظمة خلفية', tagAi: 'ذكاء اصطناعي', tagSecurity: 'أمن سيبراني', tagline: 'نبني المستقبل، ابتكارًا بعد ابتكار.',
      heroDescription: 'أقوى فريق برمجي وتكنولوجي في مصر يقوده شباب عباقرة رواد في تطوير كبرى المنصات الرقمية، الذكاء الاصطناعي، والأمن السيبراني.',
      discipline1: 'تطوير الويب المتكامل', discipline2: 'هندسة الأنظمة الخلفية', discipline3: 'الذكاء الاصطناعي وتعلّم الآلة', discipline4: 'الأمن السيبراني', meetLink: 'تعرّف على الفريق',
      launchEyebrow: 'محطتنا القادمة', launchTitle: 'ملف أعمالنا<br>على وشك الوصول.', launchDescription: 'اكتشفوا ما نبنيه، وكيف نفكر، وإلى أين نتجه.',
      days: 'أيام', hours: 'ساعات', minutes: 'دقائق', seconds: 'ثوانٍ', countdownNote: 'بدايه عام جديد مع devzix', apologyNotice: 'نعتذر عن تأجيل موعد عرض الموقع، وسنفتتحه أول العام الجديد بعد الانتهاء من جميع المشاريع.',
      notifyEyebrow: 'ابقَ على اطلاع', notifyTitle: 'كن أول من يعرف<br>عندما ننطلق.', notifyDesc: 'اترك اسمك وبريدك الإلكتروني أو رقم هاتفك إذا أردت تذكيرًا عبر واتساب أو البريد الإلكتروني عند إطلاق ملف أعمالنا. يمكنك أيضًا إضافة رسالة تشجيع ودعم.',
      notifyNameLabel: 'اسمك (اختياري)', notifyNamePh: 'اسمك (اختياري)', notifyEmailLabel: 'بريدك الإلكتروني (اختياري)', notifyEmailPh: 'you@example.com', notifyPhoneLabel: 'رقم الهاتف (اختياري)', notifyPhonePh: '+20 1XXXXXXXXX', notifyMsgLabel: 'رسالة تشجيع', notifyMsgPh: 'اكتب رسالة تشجيع ودعم...', notifyBtn: 'أعلمني',
      notifySending: 'جارٍ الإرسال...', notifySuccess: 'تم إرسال رسالتك بنجاح.', notifyError: 'تعذر إرسال رسالتك. حاول مرة أخرى.',
      teamEyebrow: 'أفراد الفريق', teamTitle: 'تعرّف على الفريق', teamSubtitle: 'نوابغ التكنولوجيا والبرمجة وراء devzix.', skillsTitle: 'الإنجازات والمهارات الأساسية', age: 'العمر',
      aboutEyebrow: 'نخبة نوابغ البرمجة', aboutTitle: 'لماذا ديفيزكس (devzix)؟', aboutText: 'في ديفيزكس، نجمع نخبة من نوابغ البرمجة والتكنولوجيا في مصر — مطوري منصة باينوكس (PyNox الأقوى في اختبار الاختراق والأمن السيبراني)، ومنصة MindBot AI للذكاء الاصطناعي، وكبرى المنصات الرقمية مثل أكاديمية الشاطر ومصانع موربيدو وترياق جو، تحت منظومة حماية وأمن سيبراني متقدمة تقودها المهندسة مايا مجدي محمود.',
      metaDescription: 'فريق ديفيزكس يضم مازن أحمد بدر (تطوير الواجهات)، أحمد حلمي العتر (الذكاء الاصطناعي)، ياسين صبري العوامي (PyNox والأنظمة الخلفية)، ومايا مجدي محمود (الأمن السيبراني).',
      copyright: '© 2026 devzix. جميع الحقوق محفوظة.', launched: 'ملف أعمال devzix أصبح متاحًا الآن.', languageLabel: 'العربية <span class="control-separator">/</span> EN', languageAria: 'Switch language to English',
      themeLight: 'التبديل إلى الوضع الفاتح', themeDark: 'التبديل إلى الوضع الداكن',
      members: [
        { id: 'yassen', name: 'ياسين صبري العوامي', role: 'مطور أنظمة خلفية ورائد أعمال (مطور باينوكس والشاطر وموربيدو)', age: 18, image: SITE + '/assets/images/team/yassen.jpg', webp: SITE + '/assets/images/team/yassen.webp', alt: 'ياسين صبري العوامي (Yassen Sabry Elawamy) - مطور باينوكس والشاطر وموربيدو', skills: ['مطور منصة باينوكس (PyNox) الأقوى في اختبار الاختراق والأمن السيبراني', 'مؤسس ومطور منصة وتطبيق <a href="https://alshateracademy.com/" target="_blank" rel="noopener noreferrer">أكاديمية الشاطر التعليمية</a>', 'المطور الرئيسي لمنصة وتطبيق مصانع <a href="https://morbido-bed.com/" target="_blank" rel="noopener noreferrer">موربيدو (Morbido Bed)</a> للمفروشات والمراتب', 'مطور منصة ترياق جو، سوق الجمعة، ومبادرة صدقة الجمعة'] },
        { id: 'maya', name: 'مايا مجدي محمود', role: 'مهندسة أمن سيبراني واختبار اختراق (العضو الأهم)', age: 22, image: SITE + '/assets/images/team/maya.jpeg', webp: SITE + '/assets/images/team/maya.webp', alt: 'مايا مجدي محمود (Maya Magdy Mahmoud) - مهندسة الأمن السيبراني والعضو الأهم في Devzix', skills: ['العضو الأهم في حماية وتأمين بنية Devzix التحتية وكافة مشاريعها', 'اختبار الاختراق المتقدم وتقييم الثغرات الأمنية الحساسة', 'هندسة الشبكات الصفرية (Zero-Trust Network Architecture)', 'البروتوكولات المشفرة وتحصين الأنظمة والدفاع ضد التهديدات'] },
        { id: 'mazen', name: 'مازن أحمد بدر', role: 'مطوّر واجهات وويب متكامل (ترياق جو وأكاديمية الشاطر)', age: 17, image: SITE + '/assets/images/team/mazen.jpg', webp: SITE + '/assets/images/team/mazen.webp', alt: 'مازن أحمد بدر (Mazen Ahmed Badr) - مطور فرونت إند في ترياق جو وأكاديمية الشاطر', skills: ['مطور فرونت إند في منصة ترياق جو (Teryaq Go)', 'مطور واجهات المستخدم في منصة <a href="https://alshateracademy.com/" target="_blank" rel="noopener noreferrer">أكاديمية الشاطر التعليمية</a>', 'هندسة واجهات الويب الحديثة والواجهات التفاعلية المتجاوبة', 'واجهات RESTful والتكامل السلس مع الأنظمة الخلفية'] },
        { id: 'ahmed', name: 'أحمد حلمي العتر', role: 'مهندس ذكاء اصطناعي وتعلّم آلة (مطور MindBot AI)', age: 17, image: SITE + '/assets/images/team/ahmed.png', webp: SITE + '/assets/images/team/ahmed.webp', alt: 'أحمد حلمي العتر (Ahmed Helmy Eletr) - مطور منصة MindBot AI', skills: ['مطور منصة <a href="https://mindbotai.pro/" target="_blank" rel="noopener noreferrer">MindBot AI</a> الرائدة للذكاء الاصطناعي', 'نماذج التعلّم الآلي والذكاء التنبؤي وخوارزميات التوجيه الفوري', 'الشبكات العصبية العميقة والرؤية الحاسوبية ومعالجة البيانات', 'نشر النماذج الذكية السحابية والقياسات اللحظية'] }
      ]
    }
  };

  const icons = {
    mazen: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    yassen: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="4" y="14" width="16" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M7.5 8h.01M7.5 17h.01m3-9h6m-6 9h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    ahmed: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="5" cy="6" r="1.4" stroke="currentColor" stroke-width="1.5"/><circle cx="19" cy="6" r="1.4" stroke="currentColor" stroke-width="1.5"/><circle cx="5" cy="18" r="1.4" stroke="currentColor" stroke-width="1.5"/><circle cx="19" cy="18" r="1.4" stroke="currentColor" stroke-width="1.5"/><path d="m7 7.4 3.2 2.7m6.8-2.7-3.2 2.7M7 16.6l3.2-2.7m6.8 2.7-3.2-2.7" stroke="currentColor" stroke-width="1.3"/></svg>',
    maya: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 19 6v5.3c0 4.7-3 7.8-7 9.7-4-1.9-7-5-7-9.7V6l7-3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    mai: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 19 6v5.3c0 4.7-3 7.8-7 9.7-4-1.9-7-5-7-9.7V6l7-3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  const ageIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="1.5"/><path d="M5.5 20c.4-3.4 2.6-5.2 6.5-5.2s6.1 1.8 6.5 5.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  const grid = document.getElementById('teamGrid');
  const languageButton = document.getElementById('languageToggle');
  const themeButton = document.getElementById('themeToggle');
  function readPreference(key) {
    try { return window.localStorage.getItem(key); } catch (error) { return null; }
  }
  function savePreference(key, value) {
    try { window.localStorage.setItem(key, value); } catch (error) { /* The page still works when storage is unavailable. */ }
  }
  let language = readPreference('devzix-language') === 'ar' ? 'ar' : 'en';

  function makeCard(member, index, words) {
    const card = document.createElement('article');
    card.className = 'team-card';
    card.id = member.id;
    card.dataset.member = member.id;
    card.setAttribute('aria-label', member.name + ', ' + member.role);
    card.setAttribute('itemscope', '');
    card.setAttribute('itemtype', 'https://schema.org/Person');
    card.innerHTML = '<span class="member-anchor" id="' + member.id + '-anchor"></span>' +
      (member.id === 'maya' ? '<span class="member-anchor" id="mai-anchor"></span>' : '') +
      '<img class="team-card-logo logo-light" src="' + SITE + '/assets/images/logo-emblem-light.png" alt="Devzix logo" width="640" height="492">' +
      '<img class="team-card-logo logo-dark" src="' + SITE + '/assets/images/logo-emblem-dark.png" alt="Devzix logo" width="540" height="450">' +
      '<div class="member-top"><div class="member-photo-wrap"><picture class="member-photo-picture">' + (member.webp ? '<source srcset="' + member.webp + '" type="image/webp">' : '') + '<img class="member-photo" itemprop="image" src="' + member.image + '" alt="' + member.alt + '" title="' + member.name + '" width="400" height="400" decoding="async" fetchpriority="high" loading="eager"></picture><span class="orbit-track" aria-hidden="true"></span><span class="orbit-satellite" aria-hidden="true"></span><span class="member-role-icon">' + (icons[member.id] || icons.maya) + '</span></div></div>' +
      '<div class="member-head"><h3 class="member-name" itemprop="name">' + member.name + '</h3><p class="member-title" itemprop="jobTitle">' + member.role + '</p><span class="age-badge">' + ageIcon + '<span>' + words.age + ' ' + member.age + '</span></span></div>' +
      '<div class="card-divider"></div><h4 class="skills-title">' + words.skillsTitle + '</h4><ul class="skills-list">' + member.skills.map(function (skill) { return '<li>' + skill + '</li>'; }).join('') + '</ul>';
    return card;
  }

  function applyLanguage(nextLanguage) {
    language = nextLanguage;
    const words = translations[language];
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      const key = element.dataset.i18n;
      if (words[key] !== undefined) element.innerHTML = words[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (element) {
      const key = element.dataset.i18nPlaceholder;
      if (words[key] !== undefined) element.setAttribute('placeholder', words[key]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (element) {
      const key = element.dataset.i18nAria;
      if (words[key] !== undefined) element.setAttribute('aria-label', words[key]);
    });
    languageButton.dataset.langActive = language;
    languageButton.querySelectorAll('.lang-btn').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });
    themeButton.setAttribute('aria-label', document.body.classList.contains('light-mode') ? words.themeDark : words.themeLight);
    document.title = language === 'ar' ? 'Devzix (ديفيزكس) | أقوى تيم برمجي في مصر — ياسين صبري العوامي وفريق العباقرة' : 'Devzix Leading Programming Team in Egypt';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', words.metaDescription);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', document.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', words.metaDescription);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', document.title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', words.metaDescription);
    const orderedMembers = words.members.slice().sort(function (a, b) { return TEAM_ORDER.indexOf(a.id) - TEAM_ORDER.indexOf(b.id); });
    grid.replaceChildren.apply(grid, orderedMembers.map(function (member, index) { return makeCard(member, index, words); }));
    observeReveals();
    savePreference('devzix-language', language);
  }

  function applyTheme(theme) {
    const isLight = theme === 'light';
    document.body.classList.toggle('light-mode', isLight);
    document.documentElement.setAttribute('data-intro-theme', isLight ? 'light' : 'dark');
    themeButton.setAttribute('aria-label', translations[language][isLight ? 'themeDark' : 'themeLight']);
    themeButton.title = translations[language][isLight ? 'themeDark' : 'themeLight'];
    document.querySelector('meta[name="theme-color"]').setAttribute('content', isLight ? '#f4f7fb' : '#080d17');
    savePreference('devzix-theme', isLight ? 'light' : 'dark');
  }

  languageButton.addEventListener('click', function (event) {
    const button = event.target.closest('.lang-btn');
    if (button && languageButton.contains(button)) applyLanguage(button.dataset.lang);
  });
  themeButton.addEventListener('click', function () { applyTheme(document.body.classList.contains('light-mode') ? 'dark' : 'light'); });

  // Countdown to 00:00:00 on the first day of the next year.
  function getNewYearStart() {
    const now = new Date();
    return new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
  }
  const countdownTarget = getNewYearStart();
  function updateCountdown() {
    const remaining = countdownTarget.getTime() - Date.now();
    if (remaining <= 0) {
      ['days', 'hours', 'minutes', 'seconds'].forEach(function (id) { document.getElementById(id).textContent = '00'; });
      document.getElementById('launchNote').textContent = translations[language].launched;
      return;
    }
    const secondsTotal = Math.floor(remaining / 1000);
    const values = {
      days: Math.floor(secondsTotal / 86400),
      hours: Math.floor((secondsTotal % 86400) / 3600),
      minutes: Math.floor((secondsTotal % 3600) / 60),
      seconds: secondsTotal % 60
    };
    Object.keys(values).forEach(function (id) {
      const element = document.getElementById(id);
      const value = String(values[id]).padStart(2, '0');
      if (element.textContent !== value) {
        element.textContent = value;
        element.classList.remove('tick');
        requestAnimationFrame(function () { element.classList.add('tick'); });
        window.setTimeout(function () { element.classList.remove('tick'); }, 210);
      }
    });
  }

  // Reveal content as it enters the viewport, with a graceful no-observer fallback.
  let revealObserver;
  function observeReveals() {
    const unseen = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      unseen.forEach(function (element) { element.classList.add('is-visible'); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    }
    unseen.forEach(function (element) { revealObserver.observe(element); });
  }

  const notifyForm = document.getElementById('notifyForm');
  if (notifyForm) {
    notifyForm.addEventListener('submit', async function (event) {
      event.preventDefault();
      const button = document.getElementById('notifyBtn');
      const status = document.getElementById('notifyStatus');
      const words = translations[language];

      button.disabled = true;
      status.className = 'notify-status';
      status.textContent = words.notifySending;

      try {
        const response = await fetch(notifyForm.action, {
          method: 'POST',
          body: new FormData(notifyForm),
          headers: { Accept: 'application/json' }
        });
        if (!response.ok) throw new Error('Form submission failed');
        notifyForm.reset();
        status.className = 'notify-status ok';
        status.textContent = words.notifySuccess;
      } catch (error) {
        status.className = 'notify-status err';
        status.textContent = words.notifyError;
      } finally {
        button.disabled = false;
      }
    });
  }

  const savedTheme = readPreference('devzix-theme');
  const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light';
  applyTheme(initialTheme);
  applyLanguage(language);
  observeReveals();
  updateCountdown();

  window.setInterval(updateCountdown, 1000);

  const dismissIntro = function () {
    window.setTimeout(function () {
      intro.classList.add('hide');
      window.setTimeout(function () {
        intro.remove();
        document.body.style.overflow = '';
      }, 300);
    }, 1800);
  };
  const startIntroAfterFonts = function () {
    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready.catch(function () {}) : Promise.resolve();
    let fontTimeout;
    const maxWait = new Promise(function (resolve) { fontTimeout = window.setTimeout(resolve, 1500); });
    Promise.race([fontsReady, maxWait]).then(function () {
      window.clearTimeout(fontTimeout);
      dismissIntro();
    });
  };
  if (intro) {
    if (document.readyState === 'complete') startIntroAfterFonts();
    else window.addEventListener('load', startIntroAfterFonts, { once: true });
  }
})();
