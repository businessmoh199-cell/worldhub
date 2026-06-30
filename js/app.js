// ===================== APP.JS =====================
// Tabs, modals, search overlay, language switcher

function switchTab(name) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(b => { if(b.getAttribute('onclick').includes("'" + name + "'")) b.classList.add('active'); });
}

function showModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id, e) {
  if (!e || e.target === document.getElementById(id)) document.getElementById(id).classList.remove('open');
}

function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('liveSearch').focus(), 50);
}
function closeSearchOverlay(e) {
  if (e.target === document.getElementById('searchOverlay')) document.getElementById('searchOverlay').classList.remove('open');
}
function doSearch(val) {
  // simple visual update — extend as needed
}

function toggleLang() {
  document.getElementById('langDropdown').classList.toggle('open');
}
function setLang(code, name) {
  applyTranslations(code);
  document.getElementById('langDropdown').classList.remove('open');
}

// Close lang dropdown on outside click
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('langDropdown');
  const btn = document.getElementById('langBtn');
  if (!btn.contains(e.target) && !dropdown.contains(e.target)) dropdown.classList.remove('open');
});

// Global ESC key handler
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('searchOverlay').classList.remove('open');
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
    document.getElementById('langDropdown').classList.remove('open');
  }
});
