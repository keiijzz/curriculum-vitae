/**
 * render.js — Render CV ala GitHub profile dari data.js
 */

const ICONS = {
  location: '<svg class="icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M8 0C4.583 0 2 2.55 2 6c0 3.1 2 6.578 3.687 8.546l1.007 1.177a.75.75 0 0 0 1.161 0l1.006-1.177C11 12.578 13 9.1 13 6c0-3.45-2.583-6-7-6Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"></path></svg>',
  link: '<svg class="icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25Zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0Z"></path></svg>',
  mail: '<svg class="icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path></svg>',
  github: '<svg class="icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>',
  linkedin: '<svg class="icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146Zm4.943 12.248V6.169H2.542v7.225h2.401Zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016Zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4Z"></path></svg>',
  star: '<svg class="icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.817 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>',
  fork: '<svg class="icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path></svg>',
  check: '<svg class="icon" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>',
};

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_SHOW = { 0: 'Sun', 2: 'Tue', 4: 'Thu' };
const MONTH_LETTERS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

document.addEventListener('DOMContentLoaded', () => {
  renderAvatar();
  renderProfileText();
  renderMeta();
  renderStatus();
  renderActions();
  renderStats();
  renderHeatmap();
  renderPinned();
  renderSkills();
  renderHighlights();
  renderOrgs();
  renderContacts();
  renderExperience();
  renderProjects();
  renderCertifications();
  renderEducation();
  renderFooter();
  initTabs();
});

function mulberry32(seed) {
  let a = ((seed >>> 0) * 1664525 + 1013904223) >>> 0;
  return () => {
    a += 0x6D2B79F5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

function drawIdenticon(seedStr, size) {
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const ctx = c.getContext('2d');
  const rng = mulberry32(hashSeed(seedStr));
  const palette = ['#4362ee', '#8c44e3', '#ee4242', '#3a7d44', '#4a9c8b', '#c58a1f', '#a33f9b', '#3b82a0'];
  const color = palette[Math.floor(rng() * palette.length)];
  ctx.fillStyle = '#eaeef2';
  ctx.fillRect(0, 0, size, size);
  const n = 5, cell = size / n;
  const ins = cell * 0.16;
  const draw = (x, y) => {
    ctx.fillStyle = color;
    if (ctx.roundRect) ctx.beginPath(), ctx.roundRect(x * cell + ins, y * cell + ins, cell - ins * 2, cell - ins * 2, 3), ctx.fill();
    else ctx.fillRect(x * cell + ins, y * cell + ins, cell - ins * 2, cell - ins * 2);
  };
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < Math.ceil(n / 2); x++) {
      if (rng() > 0.52) {
        draw(x, y);
        const mx = n - 1 - x;
        if (mx !== x) draw(mx, y);
      }
    }
  }
  return c.toDataURL();
}

function icon(name) { return ICONS[name] || ''; }

function renderAvatar() {
  const el = document.getElementById('gh-avatar');
  const src = CV.identity.avatar || drawIdenticon(CV.identity.name, 192);
  el.src = src;
}

function renderProfileText() {
  document.getElementById('gh-name').textContent = CV.identity.name;
  document.getElementById('gh-handle').textContent = CV.identity.handle ? '@' + CV.identity.handle.replace(/^@/, '') : '';
  document.getElementById('gh-about').textContent = CV.identity.role;
  document.getElementById('gh-about-text').textContent = CV.identity.about;
}

function renderMeta() {
  const { location, email, phone, linkedin, github, website } = CV.identity;
  const items = [];
  if (location) items.push({ icon: 'location', txt: location, href: null });
  if (website) items.push({ icon: 'link', txt: website.replace(/^https?:\/\//, ''), href: `https://${website}` });
  if (email) items.push({ icon: 'mail', txt: email, href: `mailto:${email}` });
  if (phone) items.push({ icon: 'check', txt: phone, href: `tel:${phone.replace(/[\s-]/g, '')}` });
  if (linkedin) items.push({ icon: 'linkedin', txt: 'LinkedIn', href: `https://${linkedin}` });
  if (github) items.push({ icon: 'github', txt: 'GitHub', href: `https://${github}` });
  const html = items.map(it =>
    it.href
      ? `<span class="gh-meta-item">${icon(it.icon)}<a href="${it.href}" target="_blank" rel="noopener">${it.txt}</a></span>`
      : `<span class="gh-meta-item">${icon(it.icon)}<span>${it.txt}</span></span>`
  ).join('');
  document.getElementById('gh-meta').innerHTML = html;
}

function renderStatus() {
  const el = document.getElementById('gh-status');
  if (!CV.identity.status) { el.style.display = 'none'; return; }
  el.innerHTML = `<span class="dot"></span>${CV.identity.status}`;
}

function renderActions() {
  const github = CV.identity.github;
  const linkedin = CV.identity.linkedin;
  const btnG = document.getElementById('btn-github');
  const btnL = document.getElementById('btn-linkedin');
  const init = (btn, href) => { if (href) { btn.href = `https://${href}`; } else { btn.style.display = 'none'; } };
  init(btnG, github);
  init(btnL, linkedin);
}

function renderStats() {
  const html = CV.stats.map(s => `
    <div class="gh-stat">
      <div class="gh-stat-num">${s.num}</div>
      <div class="gh-stat-label">${s.label}</div>
    </div>
  `).join('');
  document.getElementById('gh-stats').innerHTML = html;
}

function renderHeatmap() {
  const root = document.getElementById('gh-heatmap');
  const title = document.getElementById('gh-heat-title');
  const legendEl = document.getElementById('gh-heat-legend');

  document.getElementById('gh-heat-legend').classList.add('gh-legend');
  legendEl.innerHTML = 'Kurang' +
    [0, 1, 2, 3, 4].map(l => `<i class="hm-l${l}"></i>`).join('') +
    'Lebih';

  if (CV.heatmap === 'hidden') { root.style.display = 'none'; title.textContent = ''; return; }

  const today = new Date();
  const days = 364;
  const start = new Date(today);
  start.setDate(start.getDate() - days);
  start.setHours(0, 0, 0, 0);

  const rng = mulberry32(hashSeed(CV.heatSeed || 'enggar'));
  const cells = [];
  for (let i = 0; i < days + 1; i++) {
    const r = rng();
    let lvl = 0;
    if (r > 0.78) lvl = 4;
    else if (r > 0.66) lvl = 3;
    else if (r > 0.5) lvl = 2;
    else if (r > 0.34) lvl = 1;
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    cells.push({ d, lvl });
  }

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  title.textContent = `${weeks.length} minggu terakhir — ${new Date().getFullYear()}`;

  const col = (n) => `grid-column:${n};`;
  const row = (n) => `grid-row:${n};`;
  let html = `<span class="hm-day" style="${col(1)}${row(1)}"></span>`;

  let lastMonth = -1;
  weeks.forEach((wk, wi) => {
    const startPos = 2 + wi;
    const m = wk[0].d.getMonth();
    if (m !== lastMonth) {
      html += `<span class="hm-month" style="${col(startPos)}${row(1)}">${MONTH_LETTERS[m]}</span>`;
      lastMonth = m;
    }
    wk.forEach((cell, di) => {
      if (di === 0 && wi === 0) {
        html += `<span class="hm-day" style="${col(1)}${row(2)}">${DAY_LABELS[0]}</span>`;
      }
      if (di === 2 && wi === 0) {
        html += `<span class="hm-day" style="${col(1)}${row(4)}">${DAY_LABELS[2]}</span>`;
      }
      if (di === 4 && wi === 0) {
        html += `<span class="hm-day" style="${col(1)}${row(6)}">${DAY_LABELS[4]}</span>`;
      }
      const lvlCls = cell.lvl === 0 ? '' : ` hm-l${cell.lvl}`;
      const tip = `${cell.d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })} — ${cell.lvl} heatmap`;
      html += `<span class="hm-cell${lvlCls}" style="${col(startPos)}${row(2 + di)}" title="${tip}"></span>`;
    });
  });

  root.innerHTML = html;
  root.style.gridTemplateColumns = `26px repeat(${weeks.length}, 10px)`;
}

function renderPinned() {
  const list = (CV.projects || []).slice(0, 4);
  const countEl = document.getElementById('gh-pinned-count');
  if (countEl) countEl.textContent = list.length;
  const html = list.map(p => `
    <a class="gh-pin" ${p.link ? `href="${p.link}" target="_blank" rel="noopener"` : ''}>
      <span class="gh-pin-name"><span class="pin-mark">📌</span>${p.title}</span>
      <span class="gh-pin-desc">${p.desc}</span>
      <span>
        ${p.stack.slice(0, 5).map(t => `<span class="gh-topic">${t}</span>`).join('')}
      </span>
      <span class="gh-pin-foot">
        <span><span class="lang-dot" style="background:${p.langColor || '#0969da'}"></span>${p.lang || 'Tech'}</span>
        <span class="${p.visibility === 'Public' ? 'gh-vis pub' : 'gh-vis'}">${p.visibility || 'Private'}</span>
      </span>
    </a>
  `).join('');
  document.getElementById('gh-pinned').innerHTML = html;
}

function renderSkills() {
  const countEl = document.getElementById('gh-skills-count');
  if (countEl) countEl.textContent = CV.skills.length;
  const html = CV.skills.map(g => `
    <div class="gh-skill">
      <div class="gh-skill-top">
        <span class="gh-skill-name">${g.category}</span>
        <span class="gh-skill-pct">${g.level}%</span>
      </div>
      <div class="gh-bar"><i style="width:${g.level}%"></i></div>
      <div class="gh-skill-chips">
        ${g.items.map(s => `<span class="gh-topic">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
  document.getElementById('gh-skills').innerHTML = html;
}

function renderHighlights() {
  const html = (CV.highlights || []).map(h => `<li>${h}</li>`).join('');
  document.getElementById('gh-highlights').innerHTML = html;
}

function renderOrgs() {
  const html = (CV.orgs || []).map(o => `
    <span class="gh-org-item">
      <span class="gh-org-logo" style="background:${o.color}">${o.short}</span>
      ${o.name}
    </span>
  `).join('');
  document.getElementById('gh-orgs').innerHTML = html;
}

function renderContacts() {
  const { email, linkedin, github, website } = CV.identity;
  const items = [];
  if (email) items.push({ icon: 'mail', txt: email, href: `mailto:${email}` });
  if (linkedin) items.push({ icon: 'linkedin', txt: linkedin, href: `https://${linkedin}` });
  if (github) items.push({ icon: 'github', txt: github, href: `https://${github}` });
  if (website) items.push({ icon: 'link', txt: website.replace(/^https?:\/\//, ''), href: `https://${website}` });
  const html = items.map(it =>
    `<a href="${it.href}" target="_blank" rel="noopener">${icon(it.icon)}<span class="gh-trunc">${it.txt}</span></a>`
  ).join('') || '<span class="gh-meta-item">—</span>';
  document.getElementById('gh-contacts').innerHTML = html;
}

function repoRow(item, opts) {
  const badge = item.period ? `<span class="gh-row-badge">${item.period}</span>` : '';
  const roleLabel = item.roleLabel ? `<span class="gh-role-label">${item.roleLabel}</span>` : '';
  const points = (item.points || []).map(p => `<li>${p}</li>`).join('');
  const stack = (item.stack || []).map(t => `<span class="gh-topic">${t}</span>`).join('');
  const lang = item.lang ? `<span><span class="lang-dot" style="background:${item.langColor || '#0969da'}"></span>${item.lang}</span>` : '';
  const meta = (lang || stack || '') && `<div class="gh-row-meta">${lang}${stack ? `<span class="gh-stack">${stack}</span>` : ''}</div>`;
  return `
    <div class="gh-row">
      <div class="gh-row-title">
        <span class="gh-row-name">${roleLabel}${item.role || item.title}</span>
        ${badge}
      </div>
      ${item.company ? `<div class="gh-row-sub">${item.company}${item.location ? ' · ' + item.location : ''}</div>` : ''}
      ${item.school ? `<div class="gh-row-sub">${item.school}${item.location ? ' · ' + item.location : ''}</div>` : ''}
      ${item.desc ? `<p class="gh-row-desc">${item.desc}</p>` : ''}
      ${points ? `<ul class="gh-row-points">${points}</ul>` : ''}
      ${meta || ''}
    </div>
  `;
}

function renderExperience() {
  const countEl = document.getElementById('gh-exp-count');
  if (countEl) countEl.textContent = CV.experience.length;
  const html = CV.experience.map(e => repoRow(e, { role: true })).join('');
  document.getElementById('gh-experience').innerHTML = html;
}

function renderProjects() {
  const countEl = document.getElementById('gh-projects-count');
  if (countEl) countEl.textContent = CV.projects.length;
  const html = CV.projects.map(p => repoRow(p)).join('');
  document.getElementById('gh-projects').innerHTML = html;
}

function renderCertifications() {
  const countEl = document.getElementById('gh-certs-count');
  if (countEl) countEl.textContent = CV.certifications.length;
  const badges = ['🏅', '🎓', '📡', '🔐', '🐍', '☁️', '🛡️'];
  const html = CV.certifications.map((c, i) => `
    <div class="gh-ach-item">
      <span class="gh-ach-icon">${c.badge || badges[i % badges.length]}</span>
      <div>
        <p class="gh-ach-name">${c.name}</p>
        <p class="gh-ach-meta">${c.issuer}${c.year ? ' · ' + c.year : ''}</p>
      </div>
    </div>
  `).join('');
  document.getElementById('gh-certifications').innerHTML = html;
}

function renderEducation() {
  const countEl = document.getElementById('gh-edu-count');
  if (countEl) countEl.textContent = CV.education.length;
  const html = CV.education.map(e => repoRow({
    title: e.degree,
    roleLabel: 'Degree',
    school: e.school,
    location: e.location,
    period: e.period,
    points: e.points || [],
    desc: e.desc || '',
  })).join('');
  document.getElementById('gh-education').innerHTML = html;
}

function renderFooter() {
  const f = document.getElementById('cv-footer');
  const now = new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
  f.innerHTML = `<span>${CV.identity.name} — CV</span><span>Updated ${now}</span>`;
}

function initTabs() {
  const tabs = document.querySelectorAll('.gh-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.gh-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(tab.dataset.panel);
      if (panel) panel.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}