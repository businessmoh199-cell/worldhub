// ===================== THEME.JS =====================
// Dark / Light mode toggle, persisted in localStorage

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = theme === 'light' ? 'ti ti-sun' : 'ti ti-moon';
  localStorage.setItem('worldhub_theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

(function initTheme() {
  const saved = localStorage.getItem('worldhub_theme') || 'dark';
  applyTheme(saved);
})();
