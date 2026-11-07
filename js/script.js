(function () {
  'use strict';

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
      heroEyebrow: 'EGYPT’S LEADING YOUTH TECH FORCE', specialtiesLabel: 'Team disciplines', countdownLabel: 'Time until the end of this month', tagFullstack: 'FULL-STACK', tagBackend: 'BACKEND', tagAi: 'AI / ML', tagSecurity: 'SECURITY', tagline: 'Building the Future, One Innovation at a Time.',
      heroDescription: 'The most powerful tech team in Egypt, built by prodigy developers leading web architecture, AI, and cybersecurity.',
      discipline1: 'Full-Stack Development', discipline2: 'Backend Engineering', discipline3: 'AI & Machine Learning', discipline4: 'Cybersecurity', meetLink: 'Meet the team',
      launchEyebrow: 'THE NEXT MILESTONE', launchTitle: 'Our portfolio is<br>almost ready.', launchDescription: 'A closer look at what we make, how we think, and where we’re headed.',
      days: 'DAYS', hours: 'HOURS', minutes: 'MINUTES', seconds: 'SECONDS', countdownNote: 'A new chapter, at the close of this month.',
      teamEyebrow: 'THE PEOPLE', teamTitle: 'Meet the Team', teamSubtitle: 'Egypt’s premier young tech minds behind devzix.', skillsTitle: 'PROVEN ACHIEVEMENTS & CORE SKILLS', age: 'AGE',
      aboutEyebrow: 'ELITE PRODIGY DEVELOPERS', aboutTitle: 'Why devzix?', aboutText: 'At devzix, we assemble Egypt’s premier young software talents—creators of PyNox (the premier platform in cybersecurity & hacking defense), MindBot AI, and major national platforms such as Al Shater Academy, Morbido Bed, and Teryaq Go, all hardened under advanced cyber defense led by Engineer Mai Magdy.',
      copyright: '© 2026 devzix. All rights reserved.', launched: 'devzix Portfolio is Now Live.', languageLabel: 'EN <span class="control-separator">/</span> AR', languageAria: 'Switch language to Arabic',
      themeLight: 'Switch to light mode', themeDark: 'Switch to dark mode',
      members: [
        { id: 'yassen', name: 'Yassen Sabry Elawamy', role: 'Backend Architect & Tech Entrepreneur', age: 18, image: './assets/images/team/yassen.jpg', webp: './assets/images/team/yassen.webp', alt: 'Yassen Sabry Elawamy - Creator of PyNox, Al Shater Academy & Morbido Bed | ياسين صبري العوامي', skills: ['Creator of PyNox — The premier platform in cybersecurity & hacking defense', 'Architect & Developer of <a href="https://alshateracademy.com/" target="_blank" rel="noopener noreferrer">Al Shater Academy</a> educational platform', 'Lead Developer of <a href="https://morbido-bed.com/" target="_blank" rel="noopener noreferrer">Morbido Bed</a> luxury enterprise platform', 'Developer of Teryaq Go, Souq Al-Gomaa & Sadaqat Al-Gomaa initiatives'] },
        { id: 'mazen', name: 'Mazen Ahmed Bakr', role: 'Full-Stack Developer & Frontend Architect', age: 17, image: './assets/images/team/mazen.jpg', webp: './assets/images/team/mazen.webp', alt: 'Mazen Ahmed Bakr (Dev Mazen) - Frontend Developer of Teryaq Go & Al Shater Academy | مازن أحمد بكر', skills: ['Frontend Developer at Teryaq Go digital platform', 'UI/UX Engineering for <a href="https://alshateracademy.com/" target="_blank" rel="noopener noreferrer">Al Shater Academy</a> ecosystem', 'Modern Web Architecture, Responsive Systems & State Handling', 'RESTful APIs, Performance Tuning & Scalable Client Interfaces'] },
        { id: 'ahmed', name: 'Ahmed Helmy Eletr', role: 'AI & Machine Learning Engineer', age: 16, image: './assets/images/team/ahmed.png', webp: './assets/images/team/ahmed.webp', alt: 'Ahmed Helmy Eletr - Creator of MindBot AI | احمد حلمي العتر', skills: ['Creator of <a href="https://mindbotai.pro/" target="_blank" rel="noopener noreferrer">MindBot AI</a> platform', 'Predictive AI & Dynamic Dispatch Algorithms', 'Deep Neural Networks, Computer Vision & NLP deployment', 'Real-Time Telemetry & Cloud-Native Model Pipelines'] },
        { id: 'mai', name: 'Mai Magdy Mahmoud', role: 'Lead Cybersecurity & Penetration Testing Engineer (Key Member)', age: 22, image: './assets/images/team/mai.jpeg', webp: './assets/images/team/mai.webp', alt: 'Mai Magdy Mahmoud - Lead Cybersecurity Engineer & Key Member of Devzix | مي مجدي محمود', skills: ['Primary pillar securing Devzix infrastructure & high-scale platforms', 'Advanced Penetration Testing & Zero-Day Vulnerability Assessment', 'Zero-Trust Network Architecture & Cryptographic Protocols', 'Threat Intelligence, Intrusion Defense & Critical System Hardening'] }
      ]
    },
    ar: {
      heroEyebrow: 'أقوى تيم برمجي في مصر', specialtiesLabel: 'تخصصات الفريق', countdownLabel: 'الوقت المتبقي حتى نهاية هذا الشهر', tagFullstack: 'تطوير متكامل', tagBackend: 'أنظمة خلفية', tagAi: 'ذكاء اصطناعي', tagSecurity: 'أمن سيبراني', tagline: 'نبني المستقبل، ابتكارًا بعد ابتكار.',
      heroDescription: 'أقوى فريق برمجي وتكنولوجي في مصر مكون من شباب عباقرة يقودون الابتكار في تطوير الويب، الذكاء الاصطناعي، والأمن السيبراني لبناء حلول رقمية غير قابلة للاختراق.',
      discipline1: 'تطوير الويب المتكامل', discipline2: 'هندسة الأنظمة الخلفية', discipline3: 'الذكاء الاصطناعي وتعلّم الآلة', discipline4: 'الأمن السيبراني', meetLink: 'تعرّف على الفريق',
      launchEyebrow: 'محطتنا القادمة', launchTitle: 'ملف أعمالنا<br>على وشك الوصول.', launchDescription: 'اكتشفوا ما نبنيه، وكيف نفكر، وإلى أين نتجه.',
      days: 'أيام', hours: 'ساعات', minutes: 'دقائق', seconds: 'ثوانٍ', countdownNote: 'فصل جديد يبدأ مع نهاية هذا الشهر.',
      teamEyebrow: 'أفراد الفريق', teamTitle: 'تعرّف على الفريق', teamSubtitle: 'نخبة العقول البرمجية الشابة وراء devzix.', skillsTitle: 'أبرز الإنجازات والمهارات', age: 'العمر',
      aboutEyebrow: 'نخبة العقول البرمجية الشابة', aboutTitle: 'لماذا devzix؟', aboutText: 'نحن في devzix نجمع نخبة من الشباب العباقرة في مصر—من مطوري أقوى أدوات الاختراق والحماية مثل منصة باينوكس (PyNox)، إلى مطوري منصات الذكاء الاصطناعي مثل MindBot AI، وأكبر المنصات التعليمية والتجارية في مصر كـ أكاديمية الشاطر ومصانع موربيدو وترياق جو، تحت منظومة أمان سيبراني صارمة تقودها المهندسة مي مجدي.',
      copyright: '© 2026 devzix. جميع الحقوق محفوظة.', launched: 'ملف أعمال devzix أصبح متاحًا الآن.', languageLabel: 'العربية <span class="control-separator">/</span> EN', languageAria: 'Switch language to English',
      themeLight: 'التبديل إلى الوضع الفاتح', themeDark: 'التبديل إلى الوضع الداكن',
      members: [
        { id: 'yassen', name: 'Yassen Sabry Elawamy', role: 'مطوّر أنظمة خلفية ورائد أعمال (18 عاماً)', age: 18, image: './assets/images/team/yassen.jpg', webp: './assets/images/team/yassen.webp', alt: 'Yassen Sabry Elawamy (ياسين صبري العوامي) - مطور باينوكس والشاطر وموربيدو', skills: ['مطور منصة باينوكس (PyNox) الأقوى في عالم الاختراق والحماية', 'مطور ومصمم منصة <a href="https://alshateracademy.com/" target="_blank" rel="noopener noreferrer">أكاديمية الشاطر التعليمية</a>', 'مطور منصة وتطبيق مصانع <a href="https://morbido-bed.com/" target="_blank" rel="noopener noreferrer">موربيدو (Morbido Bed)</a> للمفروشات والمراتب', 'مطور منصة ترياق جو، سوق الجمعة، ومبادرة صدقة الجمعة'] },
        { id: 'mazen', name: 'Mazen Ahmed Bakr', role: 'مطوّر واجهات وويب متكامل', age: 17, image: './assets/images/team/mazen.jpg', webp: './assets/images/team/mazen.webp', alt: 'Mazen Ahmed Bakr (Dev Mazen، مازن أحمد بكر) - مطور فرونت إند في ترياق جو وأكاديمية الشاطر', skills: ['مطور فرونت إند في منصة ترياق جو (Teryaq Go)', 'مطور واجهات المستخدم في منصة <a href="https://alshateracademy.com/" target="_blank" rel="noopener noreferrer">أكاديمية الشاطر التعليمية</a>', 'هندسة واجهات الويب الحديثة والواجهات التفاعلية المتجاوبة', 'واجهات RESTful والتكامل السلس مع الأنظمة الخلفية'] },
        { id: 'ahmed', name: 'Ahmed Helmy Eletr', role: 'مهندس ذكاء اصطناعي وتعلّم آلة', age: 16, image: './assets/images/team/ahmed.png', webp: './assets/images/team/ahmed.webp', alt: 'Ahmed Helmy Eletr (احمد حلمي العتر) - مطور منصة MindBot AI', skills: ['مطور منصة <a href="https://mindbotai.pro/" target="_blank" rel="noopener noreferrer">MindBot AI</a> الرائدة للذكاء الاصطناعي', 'نماذج التعلّم الآلي والذكاء التنبؤي وخوارزميات التوجيه الفوري', 'الشبكات العصبية العميقة والرؤية الحاسوبية ومعالجة البيانات', 'نشر النماذج الذكية السحابية والقياسات اللحظية'] },
        { id: 'mai', name: 'Mai Magdy Mahmoud', role: 'مهندسة أمن سيبراني واختبار اختراق (العضو الأهم)', age: 22, image: './assets/images/team/mai.jpeg', webp: './assets/images/team/mai.webp', alt: 'Mai Magdy Mahmoud (مي مجدي محمود) - مهندسة الأمن السيبراني والعضو الأهم في Devzix', skills: ['العضو الأهم في حماية وتأمين بنية Devzix التحتية وكافة مشاريعها', 'اختبار الاختراق المتقدم وتقييم الثغرات الأمنية الحساسة', 'هندسة الشبكات الصفرية (Zero-Trust Network Architecture)', 'البروتوكولات المشفرة وتحصين الأنظمة والدفاع ضد التهديدات'] }
      ]
    }
  };

  const icons = {
    mazen: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    yassen: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="4" y="14" width="16" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M7.5 8h.01M7.5 17h.01m3-9h6m-6 9h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    ahmed: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="5" cy="6" r="1.4" stroke="currentColor" stroke-width="1.5"/><circle cx="19" cy="6" r="1.4" stroke="currentColor" stroke-width="1.5"/><circle cx="5" cy="18" r="1.4" stroke="currentColor" stroke-width="1.5"/><circle cx="19" cy="18" r="1.4" stroke="currentColor" stroke-width="1.5"/><path d="m7 7.4 3.2 2.7m6.8-2.7-3.2 2.7M7 16.6l3.2-2.7m6.8 2.7-3.2-2.7" stroke="currentColor" stroke-width="1.3"/></svg>',
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
    card.innerHTML = '<img class="team-card-logo logo-light" src="./assets/images/logo-emblem-light.png" alt="Devzix logo" width="640" height="492"><img class="team-card-logo logo-dark" src="./assets/images/logo-emblem-dark.png" alt="Devzix logo" width="540" height="450">' +
      '<div class="member-top"><div class="member-photo-wrap"><picture class="member-photo-picture">' + (member.webp ? '<source srcset="' + member.webp + '" type="image/webp">' : '') + '<img class="member-photo" itemprop="image" src="' + member.image + '" alt="' + member.alt + '" title="' + member.name + '" width="400" height="400" decoding="async" fetchpriority="high" loading="eager"></picture><span class="orbit-track" aria-hidden="true"></span><span class="orbit-satellite" aria-hidden="true"></span><span class="member-role-icon">' + icons[member.id] + '</span></div></div>' +
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
    document.querySelectorAll('[data-i18n-aria]').forEach(function (element) {
      const key = element.dataset.i18nAria;
      if (words[key] !== undefined) element.setAttribute('aria-label', words[key]);
    });
    languageButton.dataset.langActive = language;
    languageButton.querySelectorAll('.lang-btn').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });
    themeButton.setAttribute('aria-label', document.body.classList.contains('light-mode') ? words.themeDark : words.themeLight);
    document.title = language === 'ar'
      ? 'مازن أحمد بكر (Dev Mazen) | فريق Devzix'
      : 'Mazen Ahmed Bakr (Dev Mazen) | Devzix Team';
    grid.replaceChildren.apply(grid, words.members.map(function (member, index) { return makeCard(member, index, words); }));
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

  // The portfolio milestone is set to the final second of the current calendar month.
  function getMonthEnd() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
  }
  const countdownTarget = getMonthEnd();
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
      }, 700);
    }, 3300);
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