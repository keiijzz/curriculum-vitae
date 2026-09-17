/**
 * render.js — Render + interaksi CV (bilingual EN/ID)
 */

const ICONS = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7.5 8.5 6 8.5-6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.98h3.3V21H3.3V8.98Zm5.4 0h3.16v1.64h.05c.44-.8 1.5-1.64 3.1-1.64 3.32 0 3.93 2.12 3.93 4.87V21h-3.3v-5.86c0-1.4-.03-3.2-2-3.2-1.96 0-2.26 1.5-2.26 3.1V21H8.7V8.98Z"/></svg>',
  github: '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.6 7-11a7 7 0 1 0-14 0c0 4.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.5 13.5a4 4 0 0 0 5.66 0l2.6-2.6a4 4 0 1 0-5.66-5.66l-1.3 1.3"/><path d="M13.5 10.5a4 4 0 0 0-5.66 0l-2.6 2.6a4 4 0 1 0 5.66 5.66l1.3-1.3"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
  network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="19" r="2.4"/><circle cx="19" cy="19" r="2.4"/><path d="M12 7.5v3.5"/><path d="m12 11 -5.5 5.5"/><path d="m12 11 5.5 5.5"/></svg>',
  server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="4" width="17" height="7" rx="2"/><rect x="3.5" y="13" width="17" height="7" rx="2"/><path d="M7.5 7.5h.01M7.5 16.5h.01"/></svg>',
  activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12h4l2.4-6 5 12L17 12h4"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 18a4 4 0 0 1 .6-8A5.5 5.5 0 0 1 18 10.6 3.7 3.7 0 0 1 17.5 18H7Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></svg>',
};

const $ = (id) => document.getElementById(id);
const ic = (n) => ICONS[n] || '';

const LANG_LABELS = { en: 'EN', id: 'ID' };
const LANG_TAGS = { en: 'en', id: 'id' };
const DATE_LOCALES = { en: 'en-US', id: 'id-ID' };

let LANG = 'en';
let T = (typeof CV !== 'undefined' && CV.en) || null;
let typerToken = 0;

document.addEventListener('DOMContentLoaded', () => {
  LANG = resolveDefaultLang();
  T = CV[LANG];
  initTheme();
  initLang();
  initNav();
  initPrint();
  initToTop();
  renderAll();
  finalizeForPrint();
});

/* ── Bahasa ── */
function resolveDefaultLang() {
  try {
    const param = new URLSearchParams(location.search).get('lang');
    if (param && CV[param]) return param;
  } catch (e) {}
  try {
    const saved = localStorage.getItem('cv-lang');
    if (saved && CV[saved]) return saved;
  } catch (e) {}
  return CV.default && CV[CV.default] ? CV.default : 'en';
}

function initLang() {
  updateLangButton();
  const btn = $('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    setLang(LANG === 'en' ? 'id' : 'en');
  });
}

function updateLangButton() {
  const label = $('lang-label');
  if (label) label.textContent = LANG_LABELS[LANG] || LANG.toUpperCase();
  const btn = $('lang-toggle');
  if (btn) {
    const title = (T && T.ui && T.ui.langTitle) || 'Switch language';
    btn.setAttribute('title', title);
    btn.setAttribute('aria-label', title);
  }
}

function setLang(lang) {
  if (!CV[lang] || lang === LANG) return;
  LANG = lang;
  T = CV[lang];
  try { localStorage.setItem('cv-lang', lang); } catch (e) {}
  try {
    const url = new URL(location.href);
    if (lang === (CV.default || 'en')) url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  } catch (e) {}
  renderAll();
}

/* ── Render pipeline ── */
function renderAll() {
  document.documentElement.lang = LANG_TAGS[LANG] || LANG;
  applyI18n();
  renderBrand();
  renderHero();
  renderStats();
  renderAbout();
  renderExpertise();
  renderExperience();
  renderSkills();
  renderLanguages();
  renderProjects();
  renderCertifications();
  renderEducation();
  renderPublications();
  renderContact();
  renderFooter();
  updateLangButton();
  initReveal();
  initCountUp();
  initTypewriter();
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = T.ui[el.getAttribute('data-i18n')];
    if (typeof v === 'string') el.textContent = v;
  });
  document.title = `${T.identity.name} — ${T.ui.heroEyebrow}`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', T.identity.tagline);
}

/* ── Pastikan nilai final tampil saat di-print ── */
function finalizeForPrint() {
  window.addEventListener('beforeprint', () => {
    document.querySelectorAll('.stat-num').forEach(el => {
      el.textContent = (parseFloat(el.dataset.target) || 0) + (el.dataset.suffix || '');
    });
    const role = $('hero-role');
    if (role) role.textContent = (T.identity.role || '').split('|')[0].trim();
  });
}

/* ── Brand ── */
function renderBrand() {
  $('brand-name').textContent = T.identity.name;
  $('brand-role').textContent = T.ui.brandRole;
}

/* ── Hero ── */
function renderHero() {
  const id = T.identity;
  $('hero-eyebrow').innerHTML = `&lt;/&gt; ${T.ui.heroEyebrow}`;
  $('hero-name').textContent = id.name;
  $('hero-pitch').textContent = id.tagline || id.about;

  const cta = $('cta-primary');
  if (id.email) { cta.href = `mailto:${id.email}`; cta.innerHTML = `${ic('mail')} ${T.ui.ctaPrimary}`; }
  else cta.style.display = 'none';

  const social = [];
  if (id.github) social.push({ icon: 'github', href: `https://${id.github}`, label: 'GitHub' });
  if (id.linkedin) social.push({ icon: 'linkedin', href: `https://${id.linkedin}`, label: 'LinkedIn' });
  if (id.email) social.push({ icon: 'mail', href: `mailto:${id.email}`, label: 'Email' });
  if (id.website) social.push({ icon: 'link', href: `https://${id.website}`, label: 'Website' });
  $('hero-social').innerHTML = social.map(s =>
    `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}" title="${s.label}">${ic(s.icon)}</a>`
  ).join('');

  const initials = id.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  $('hero-avatar').innerHTML = id.avatar
    ? `<img src="${id.avatar}" alt="${id.name}" />`
    : `<span class="monogram">${initials}</span>`;
  $('hc-name').textContent = id.name;
  $('hc-role').textContent = id.shortRole || T.ui.brandRole;
  $('hc-meta').innerHTML = [
    id.location ? `<span class="hc-item">${ic('location')}${id.location}</span>` : '',
    id.email ? `<span class="hc-item">${ic('mail')}<a href="mailto:${id.email}">${id.email}</a></span>` : '',
    id.github ? `<span class="hc-item">${ic('github')}<a href="https://${id.github}" target="_blank" rel="noopener">${id.github}</a></span>` : '',
    id.linkedin ? `<span class="hc-item">${ic('linkedin')}<a href="https://${id.linkedin}" target="_blank" rel="noopener">LinkedIn</a></span>` : '',
  ].join('');
}

/* ── Stats ── */
function renderStats() {
  $('stats').innerHTML = T.stats.map(s => `
    <div class="stat reveal">
      <div class="stat-num" data-target="${s.num}" data-suffix="${s.suffix || ''}">0</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

/* ── About + expertise ── */
function renderAbout() {
  $('about-text').textContent = T.identity.about;
}
function renderExpertise() {
  $('expertise').innerHTML = T.expertise.map(e => `
    <div class="exp-card reveal">
      <div class="exp-head">
        <span class="exp-ic">${ic(e.icon)}</span>
        <span class="exp-title">${e.title}</span>
      </div>
      <p class="exp-desc">${e.desc}</p>
      <div class="exp-tags">${e.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

/* ── Experience ── */
function renderExperience() {
  $('experience').innerHTML = T.experience.map(exp => `
    <div class="tl-item reveal${exp.current ? ' current' : ''}">
      <span class="tl-dot"></span>
      <div class="tl-card">
        <div class="tl-top">
          <div>
            <h3 class="tl-role">${exp.role}</h3>
            <p class="tl-company"><b>${exp.company}</b>${exp.location ? ' · ' + exp.location : ''}</p>
          </div>
          <span class="tl-period">${exp.period}</span>
        </div>
        <ul class="tl-points">${exp.points.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
    </div>
  `).join('');
}

/* ── Skills ── */
function renderSkills() {
  $('skills').innerHTML = T.skills.map(g => `
    <div class="skill-card reveal">
      <div class="skill-top">
        <span class="skill-name">${g.category}</span>
        <span class="skill-pct">${g.level}%</span>
      </div>
      <div class="bar"><i data-level="${g.level}" style="--pct:${g.level}%"></i></div>
      <div class="skill-chips">${g.items.map(s => `<span class="tag">${s}</span>`).join('')}</div>
    </div>
  `).join('');
}

/* ── Languages ── */
function renderLanguages() {
  const wrap = $('languages');
  if (!wrap) return;
  wrap.innerHTML = T.languages.map(l => `
    <div class="lang-card reveal">
      <div class="lang-top">
        <span class="lang-name">${l.name}</span>
        <span class="lang-level">${l.level}</span>
      </div>
      <div class="lang-bar"><i data-level="${l.pct}" style="--pct:${l.pct}%"></i></div>
    </div>
  `).join('');
}

/* ── Projects ── */
function renderProjects() {
  $('projects').innerHTML = T.projects.map(p => `
    <article class="project reveal">
      <div class="proj-top">
        <span class="proj-period">${p.period}</span>
        ${p.link ? `<a class="proj-link" href="${p.link}" target="_blank" rel="noopener" title="Buka">${ic('external')}</a>` : ''}
      </div>
      <h3 class="proj-title">${p.title}</h3>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-tags">${p.stack.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </article>
  `).join('');
}

/* ── Certifications ── */
function renderCertifications() {
  $('certifications').innerHTML = T.certifications.map(c => `
    <div class="cert reveal">
      <span class="cert-ic">${c.badge || '🏅'}</span>
      <div>
        <p class="cert-name">${c.name}</p>
        <p class="cert-issuer">${c.issuer}${c.year ? ' · ' + c.year : ''}</p>
      </div>
    </div>
  `).join('');
}

/* ── Education ── */
function renderEducation() {
  $('education').innerHTML = T.education.map(e => `
    <div class="edu-card reveal">
      <div>
        <p class="edu-degree">${e.degree}</p>
        <p class="edu-school">${e.school}${e.location ? ' · ' + e.location : ''}</p>
        ${e.points ? `<ul class="edu-points">${e.points.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
      </div>
      <span class="tl-period">${e.period}</span>
    </div>
  `).join('');
}

/* ── Publications ── */
function renderPublications() {
  const wrap = $('publications');
  if (!wrap) return;
  wrap.innerHTML = T.publications.map(p => `
    <div class="pub-card reveal">
      <span class="pub-ic">${ic('doc')}</span>
      <div>
        <p class="pub-title">${p.title}</p>
        <p class="pub-meta">${p.author}${p.meta ? ' · ' + p.meta : ''}</p>
      </div>
    </div>
  `).join('');
}

/* ── Contact ── */
function renderContact() {
  const id = T.identity;
  const actions = [];
  if (id.email) actions.push(`<a class="btn btn-primary" href="mailto:${id.email}">${ic('mail')} ${id.email}</a>`);
  if (id.phone) actions.push(`<a class="btn btn-ghost" href="tel:${id.phone.replace(/[^0-9+]/g, '')}">${id.phone}</a>`);
  if (id.linkedin) actions.push(`<a class="btn btn-ghost" href="https://${id.linkedin}" target="_blank" rel="noopener">${ic('linkedin')} LinkedIn</a>`);
  if (id.github) actions.push(`<a class="btn btn-ghost" href="https://${id.github}" target="_blank" rel="noopener">${ic('github')} GitHub</a>`);
  $('contact-actions').innerHTML = actions.join('');
}

/* ── Footer ── */
function renderFooter() {
  const now = new Date().toLocaleDateString(DATE_LOCALES[LANG] || 'en-US', { month: 'long', year: 'numeric' });
  $('footer').innerHTML = `
    <span>© ${new Date().getFullYear()} ${T.identity.name}</span>
    <span>${T.ui.footerBuilt}</span>
    <span>${T.ui.footerUpdated} ${now}</span>
  `;
}

/* ── Theme toggle ── */
function initTheme() {
  const root = document.documentElement;
  const btn = $('theme-toggle');
  const apply = (t) => {
    root.setAttribute('data-theme', t);
    btn.innerHTML = t === 'dark' ? ic('moon') : ic('sun');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#090d16' : '#f6f8fc');
  };
  apply(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('cv-theme', next); } catch (e) {}
  });
}

/* ── Nav: scroll state + scrollspy ── */
function initNav() {
  const nav = $('nav');
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    const pos = window.scrollY + 140;
    let active = sections[0];
    sections.forEach(s => { if (s.offsetTop <= pos) active = s; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + (active && active.id)));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Reveal on scroll ── */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) {
        en.target.style.transitionDelay = Math.min(i * 70, 280) + 'ms';
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  items.forEach(el => io.observe(el));

  const bars = document.querySelectorAll('.bar > i, .lang-bar > i');
  const bio = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.style.width = en.target.dataset.level + '%';
        bio.unobserve(en.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(b => bio.observe(b));
}

/* ── Count up ── */
function initCountUp() {
  const nums = document.querySelectorAll('.stat-num');
  const run = (el) => {
    const target = parseFloat(el.dataset.target) || 0;
    const suffix = el.dataset.suffix || '';
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)) { nums.forEach(run); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
  }, { threshold: 0.6 });
  nums.forEach(n => io.observe(n));
}

/* ── Typewriter role ── */
function initTypewriter() {
  const el = $('hero-role');
  const token = ++typerToken;
  const roles = (T.identity.role || '').split('|').map(s => s.trim()).filter(Boolean);
  if (!roles.length) { el.textContent = T.identity.shortRole || ''; return; }
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = roles[0];
    return;
  }
  let i = 0, j = 0, deleting = false;
  const step = () => {
    if (token !== typerToken) return;
    const word = roles[i];
    el.textContent = word.slice(0, j);
    if (!deleting && j < word.length) { j++; setTimeout(step, 55); }
    else if (!deleting && j === word.length) { deleting = true; setTimeout(step, 1600); }
    else if (deleting && j > 0) { j--; setTimeout(step, 28); }
    else { deleting = false; i = (i + 1) % roles.length; setTimeout(step, 320); }
  };
  step();
}

/* ── Print ── */
function initPrint() {
  const btn = $('btn-print');
  if (btn) btn.addEventListener('click', () => window.print());
}

/* ── To top ── */
function initToTop() {
  const btn = $('to-top');
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 600), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
