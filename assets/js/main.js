/* ---- RENDER: EXPERIENCE ---- */
function renderExperience() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  container.innerHTML = EXPERIENCE.map(entry => `
    <div class="timeline-entry reveal">
      <div class="timeline-header">
        <span class="timeline-company">
          ${entry.companyUrl
            ? `<a href="${entry.companyUrl}" target="_blank" rel="noopener noreferrer">${entry.company}</a>`
            : entry.company}
        </span>
        <span class="timeline-date">${entry.dateRange}</span>
      </div>
      <div class="timeline-roles">
        ${entry.roles.map(role => `
          <div class="timeline-role">
            <div class="timeline-role-header">
              <span class="timeline-role-title">${role.title}</span>
              <span class="timeline-role-date">${role.dateRange}</span>
            </div>
            <ul class="timeline-bullets">
              ${role.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
            <div class="chips">
              ${role.stack.map(s => `<span class="chip">${s}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ---- RENDER: PROJECTS ---- */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = PROJECTS.map((p, i) => {
    const previewStack = p.stack.slice(0, 3);
    const links = [];
    if (p.github) links.push(`<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub ↗</a>`);
    if (p.live)   links.push(`<a href="${p.live}"   target="_blank" rel="noopener noreferrer" class="project-link">${p.liveLabel || 'Live'} ↗</a>`);
    if (p.extraLinks) p.extraLinks.forEach(l =>
      links.push(`<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="project-link">${l.label} ↗</a>`)
    );

    return `
      <div class="project-card reveal" data-index="${i}">
        <div class="project-card-compact">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-summary">${p.summary}</p>
          <div class="project-stack-preview chips">
            ${previewStack.map(s => `<span class="chip">${s}</span>`).join('')}
            ${p.stack.length > 3 ? `<span class="chip">+${p.stack.length - 3} more</span>` : ''}
          </div>
          <button class="project-toggle" aria-expanded="false">
            <span class="project-toggle-icon">↓</span>&nbsp;Expand
          </button>
        </div>
        <div class="project-expanded" aria-hidden="true">
          <div class="project-expanded-inner">
            <p class="project-description">${p.description}</p>
            <p class="project-expanded-label">Features</p>
            <ul class="project-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
            <p class="project-expanded-label">Stack</p>
            <div class="chips">${p.stack.map(s => `<span class="chip">${s}</span>`).join('')}</div>
            ${links.length ? `<div class="project-links">${links.join('')}</div>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.project-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const card     = btn.closest('.project-card');
      const expanded = card.classList.toggle('expanded');
      const icon     = btn.querySelector('.project-toggle-icon');
      btn.setAttribute('aria-expanded', expanded);
      card.querySelector('.project-expanded').setAttribute('aria-hidden', !expanded);
      icon.textContent = expanded ? '↑' : '↓';
      btn.lastChild.textContent = ' ' + (expanded ? 'Collapse' : 'Expand');
    });
  });
}

/* ---- RENDER: SKILLS ---- */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  container.innerHTML = Object.entries(SKILLS).map(([cat, items]) => `
    <div class="skill-row reveal">
      <span class="skill-label">${cat}</span>
      <div class="skill-chips chips">${items.map(s => `<span class="chip">${s}</span>`).join('')}</div>
    </div>
  `).join('');
}

/* ---- SCROLL REVEAL ---- */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ---- ACTIVE NAV ---- */
function initActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  const obs   = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
}

/* ---- STICKY NAV BLUR ---- */
function initNavBlur() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
}

/* ---- MOBILE NAV ---- */
function initMobileNav() {
  const btn    = document.querySelector('.nav-hamburger');
  const drawer = document.querySelector('.nav-drawer');
  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    drawer.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    drawer.setAttribute('aria-hidden', !open);
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    btn.classList.remove('open');
    drawer.classList.remove('open');
    btn.setAttribute('aria-expanded', false);
    drawer.setAttribute('aria-hidden', true);
  }));
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderExperience();
  renderProjects();
  renderSkills();
  initReveal();
  initActiveNav();
  initNavBlur();
  initMobileNav();
});
