// ===================== APP.JS =====================
// Tabs, modals, search overlay, language switcher

function switchTab(name) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(b => { if(b.getAttribute('onclick').includes("'" + name + "'")) b.classList.add('active'); });

  // keep the left-nav icon rail in sync with the active tab
  const navHome = document.getElementById('navHome');
  const navReels = document.getElementById('navReels');
  if (navHome && navReels) {
    navHome.classList.toggle('active', name !== 'reels');
    navReels.classList.toggle('active', name === 'reels');
  }
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

// ---- LEFT NAV: "More" popover ----
function toggleMoreMenu() {
  document.getElementById('moreMenu').classList.toggle('open');
  document.getElementById('notifDropdown').classList.remove('open');
}

// ---- LEFT NAV: Notifications popover ----
function toggleNotifPanel() {
  const panel = document.getElementById('notifDropdown');
  panel.classList.toggle('open');
  document.getElementById('moreMenu').classList.remove('open');
  if (panel.classList.contains('open')) clearNotifBadge();
}

// ---- LEFT NAV: badge helpers ----
function setNavBadge(id, count) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = count > 0 ? (count > 99 ? '99+' : String(count)) : '';
  el.setAttribute('data-count', String(count));
}
function clearNotifBadge() { setNavBadge('navNotifBadge', 0); }
function clearMessagesBadge() { setNavBadge('navMsgBadge', 0); }

// Close lang / more / notif dropdowns on outside click
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('langDropdown');
  const btn = document.getElementById('langBtn');
  if (!btn.contains(e.target) && !dropdown.contains(e.target)) dropdown.classList.remove('open');

  const moreMenu = document.getElementById('moreMenu');
  const moreBtn = document.getElementById('navMore');
  if (moreMenu && moreBtn && !moreBtn.contains(e.target)) moreMenu.classList.remove('open');

  const notifPanel = document.getElementById('notifDropdown');
  const notifBtn = document.getElementById('navNotif');
  if (notifPanel && notifBtn && !notifBtn.contains(e.target)) notifPanel.classList.remove('open');
});

// Global ESC key handler
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('searchOverlay').classList.remove('open');
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
    document.getElementById('langDropdown').classList.remove('open');
    const moreMenu = document.getElementById('moreMenu');
    if (moreMenu) moreMenu.classList.remove('open');
    const notifPanel = document.getElementById('notifDropdown');
    if (notifPanel) notifPanel.classList.remove('open');
  }
});
