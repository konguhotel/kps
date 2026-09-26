document.addEventListener('DOMContentLoaded', () => {
  const state = { category: 'all', meal: 'all', query: '' };
  const categoryNav = document.getElementById('category-nav-scroll'); const container = document.getElementById('menu-items-container'); const counter = document.getElementById('items-counter'); const search = document.getElementById('menu-search-input'); const clear = document.getElementById('search-clear-btn'); const menu = document.getElementById('menu'); const sizeToggle = document.getElementById('menu-size-toggle'); const collapseFab = document.getElementById('menu-collapse-fab'); const featuredMenuGrid = document.getElementById('featured-menu-grid');
  const mealCategories = { breakfast: ['south-indian', 'dosa-roast'], lunch: ['biriyani-meals', 'gravies', 'starters'], dinner: ['master-special', 'parotta-breads', 'dosa-roast', 'gravies', 'chinese-schezwan'] };
  const escapeHtml = value => String(value || '').replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#039;', '"':'&quot;' })[char]);
  function filteredItems() { const query = state.query.trim().toLowerCase(); return MENU_ITEMS.filter(item => (state.category === 'all' || item.category === state.category) && (state.meal === 'all' || mealCategories[state.meal].includes(item.category)) && (!query || `${item.name} ${item.subCategory}`.toLowerCase().includes(query))); }
  function renderCategories() { const usable = MENU_CATEGORIES.filter(category => category.id === 'all' || state.meal === 'all' || mealCategories[state.meal].includes(category.id)); if (!usable.some(category => category.id === state.category)) state.category = 'all'; categoryNav.innerHTML = usable.map(category => `<button class="category-button ${category.id === state.category ? 'active' : ''}" data-category="${category.id}" type="button">${escapeHtml(category.name)}</button>`).join(''); categoryNav.querySelectorAll('button').forEach(button => button.addEventListener('click', () => { state.category = button.dataset.category; renderCategories(); renderMenu(); })); }
  function renderMenu() { const items = filteredItems(); counter.textContent = `${items.length} dishes`; if (!items.length) { container.innerHTML = '<p class="empty-state">No dishes found. Try another search.</p>'; return; } const groups = items.reduce((all, item) => { const key = item.subCategory || 'Menu'; (all[key] ||= []).push(item); return all; }, {}); container.innerHTML = Object.entries(groups).map(([name, dishes]) => `<section class="menu-group"><h3>${escapeHtml(name)}</h3><div class="dish-list">${dishes.map(item => `<article class="dish"><span class="diet-dot ${item.type}" aria-label="${item.type}"></span><span>${escapeHtml(item.name)}</span></article>`).join('')}</div></section>`).join(''); }
  function renderFeaturedMenu() {
    const featuredItems = MENU_ITEMS.filter(item => item.isMasterSpecial).slice(0, 3);
    featuredMenuGrid.innerHTML = featuredItems.map(item => {
      const typeLabel = item.type === 'veg' ? 'Veg' : item.type === 'egg' ? 'Contains egg' : 'Non-veg';
      const spiceLabel = ['Mild', 'Mild', 'Medium', 'Spicy'][Math.min(item.spicyLevel || 0, 3)];
      const badge = item.tags && item.tags.length ? item.tags[0] : 'Kongu favourite';
      return `<article class="featured-menu-card">
        <div class="featured-menu-meta"><span class="dish-type-badge ${escapeHtml(item.type)}"><i aria-hidden="true"></i>${typeLabel}</span><span class="featured-menu-label">Master special</span></div>
        <h4>${escapeHtml(item.name)}</h4>
        <p>${escapeHtml(item.description)}</p>
        <div class="featured-menu-notes"><span>${escapeHtml(badge)}</span><span class="spice-note">${escapeHtml(spiceLabel)}</span></div>
        <button class="featured-menu-button" type="button" data-featured-menu-id="${escapeHtml(item.id)}">Explore this dish <span aria-hidden="true">&#8599;</span></button>
      </article>`;
    }).join('');
  }
  document.querySelectorAll('.meal-shortcut').forEach(button => button.addEventListener('click', () => { state.meal = button.dataset.meal; document.querySelectorAll('.meal-shortcut').forEach(item => item.classList.toggle('active', item === button)); renderCategories(); renderMenu(); }));
  search.addEventListener('input', event => { state.query = event.target.value; clear.classList.toggle('visible', Boolean(state.query)); renderMenu(); }); clear.addEventListener('click', () => { search.value = ''; state.query = ''; clear.classList.remove('visible'); search.focus(); renderMenu(); });
  function setMenuExpanded(expanded, scrollToMenu = false) { menu.classList.toggle('focus-mode', expanded); document.body.classList.toggle('menu-is-expanded', expanded); sizeToggle.innerHTML = expanded ? 'Minimize <span>↙</span>' : 'Full menu <span>↗</span>'; sizeToggle.setAttribute('aria-pressed', String(expanded)); if (scrollToMenu) menu.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  featuredMenuGrid.addEventListener('click', event => {
    const button = event.target.closest('[data-featured-menu-id]');
    if (!button) return;
    const item = MENU_ITEMS.find(dish => dish.id === button.dataset.featuredMenuId);
    if (!item) return;
    state.category = item.category;
    state.meal = 'all';
    state.query = '';
    search.value = '';
    clear.classList.remove('visible');
    document.querySelectorAll('.meal-shortcut').forEach(shortcut => shortcut.classList.toggle('active', shortcut.dataset.meal === 'all'));
    renderCategories();
    renderMenu();
    setMenuExpanded(true);
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  document.getElementById('view-menu').addEventListener('click', () => setMenuExpanded(true, true)); sizeToggle.addEventListener('click', () => setMenuExpanded(!menu.classList.contains('focus-mode'))); collapseFab.addEventListener('click', () => setMenuExpanded(false, true));
  const revealTargets = document.querySelectorAll('.hero-content > *, .menu-toolbar, .search-wrap, .meal-shortcuts, .reviews-section > *, .location-copy > *');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('scroll-reveal-ready');
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting)), { threshold: 0.12 });
    revealTargets.forEach(target => { target.classList.add('scroll-reveal'); revealObserver.observe(target); });
  }
  const progressBar = document.getElementById('scroll-progress-bar');
  let progressFrame = 0;
  function updateScrollProgress() {
    if (progressFrame) return;
    progressFrame = window.requestAnimationFrame(() => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
      progressBar.style.width = `${progress * 100}%`;
      progressFrame = 0;
    });
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress);
  updateScrollProgress();
  renderFeaturedMenu(); renderCategories(); renderMenu();
});
