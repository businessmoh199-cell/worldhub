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

// ---- Fixed-position popovers (More menu / Notifications) ----
// Placed with position:fixed based on the trigger row's live coordinates,
// so opening them never reflows the page and they always sit right next
// to (or above, on mobile) the row that opened them.
function positionPopover(popover, anchor) {
  const r = anchor.getBoundingClientRect();
  const isBottomBar = window.innerWidth <= 640; // left-nav becomes a bottom tab bar on phones
  popover.style.visibility = 'hidden';
  popover.style.display = 'block';
  const pw = popover.offsetWidth;
  const ph = popover.offsetHeight;

  if (isBottomBar) {
    let left = r.left + r.width / 2 - pw / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
    popover.style.left = left + 'px';
    popover.style.top = 'auto';
    popover.style.bottom = (window.innerHeight - r.top + 10) + 'px';
  } else {
    let top = r.top;
    top = Math.min(top, window.innerHeight - ph - 12);
    popover.style.top = Math.max(12, top) + 'px';
    popover.style.bottom = 'auto';
    popover.style.left = (r.right + 10) + 'px';
  }
  popover.style.display = '';
  popover.style.visibility = '';
}

function closeAllPopovers(except) {
  ['moreMenu', 'notifDropdown', 'langDropdown'].forEach(id => {
    if (id === except) return;
    const el = document.getElementById(id);
    if (el) el.classList.remove('open');
  });
}

// ---- LEFT NAV: "More" popover ----
function toggleMoreMenu(e) {
  const menu = document.getElementById('moreMenu');
  const anchor = document.getElementById('navMore');
  const willOpen = !menu.classList.contains('open');
  closeAllPopovers();
  if (willOpen) {
    positionPopover(menu, anchor);
    menu.classList.add('open');
  }
  if (e) e.stopPropagation();
}

// ---- LEFT NAV: Notifications popover ----
function toggleNotifPanel(e) {
  const panel = document.getElementById('notifDropdown');
  const anchor = document.getElementById('navNotif');
  const willOpen = !panel.classList.contains('open');
  closeAllPopovers();
  if (willOpen) {
    positionPopover(panel, anchor);
    panel.classList.add('open');
    clearNotifBadge();
  }
  if (e) e.stopPropagation();
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

// Close lang / more / notif popovers on outside click
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('langDropdown');
  const langBtn = document.getElementById('langBtn');
  if (dropdown && langBtn && !langBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }

  const moreMenu = document.getElementById('moreMenu');
  const moreBtn = document.getElementById('navMore');
  if (moreMenu && moreBtn && !moreBtn.contains(e.target) && !moreMenu.contains(e.target)) {
    moreMenu.classList.remove('open');
  }

  const notifPanel = document.getElementById('notifDropdown');
  const notifBtn = document.getElementById('navNotif');
  if (notifPanel && notifBtn && !notifBtn.contains(e.target) && !notifPanel.contains(e.target)) {
    notifPanel.classList.remove('open');
  }
});

// Popovers are anchored to a live element position — if the nav list (or the
// page) scrolls or resizes while one is open, close it rather than let it
// drift away from its trigger.
const leftNavScroll = document.querySelector('.left-nav-scroll');
if (leftNavScroll) leftNavScroll.addEventListener('scroll', () => closeAllPopovers(), { passive: true });
window.addEventListener('resize', () => closeAllPopovers());

// Global ESC key handler
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('searchOverlay').classList.remove('open');
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
    closeAllPopovers();
  }
});
