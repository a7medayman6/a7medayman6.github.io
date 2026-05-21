function renderArticles() {
  const container = document.getElementById('articles-container');
  if (!container) return;
  container.innerHTML = ARTICLES.map((a, i) => `
    <a class="article-card reveal" href="https://a7medayman.hashnode.dev/${a.slug}" target="_blank" rel="noopener noreferrer" data-index="${i}">
      <div class="article-meta">
        <span class="article-date">${a.date}</span>
        <span class="article-sep">·</span>
        <span class="article-read">${a.readTime}</span>
      </div>
      <h2 class="article-title">${a.title}</h2>
      <p class="article-brief">${a.brief}</p>
      <span class="article-cta">Read on Hashnode ↗</span>
    </a>
  `).join('');
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function initNavBlur() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
}

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

document.addEventListener('DOMContentLoaded', () => {
  renderArticles();
  initReveal();
  initNavBlur();
  initMobileNav();
});
