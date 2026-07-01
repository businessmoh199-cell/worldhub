// ===================== WORLDS.JS =====================
// World data, dynamic sidebar rendering, openWorld, showLanding logic

const worlds = {
  dev:     { icon:'💻', title:'World of Programming',     members:'48.3K', online:'1.2K', posts:'2.8K', badge: 12, joined: true  },
  ai:      { icon:'🤖', title:'World of AI & ML',          members:'32.1K', online:'987',  posts:'1.9K', badge: 0,  joined: true  },
  design:  { icon:'🎨', title:'World of Design',            members:'27.8K', online:'742',  posts:'1.4K', badge: 3,  joined: true  },
  biz:     { icon:'💼', title:'World of Entrepreneurship',  members:'41.2K', online:'1.1K', posts:'2.2K', badge: 0,  joined: true  },
  med:     { icon:'🩺', title:'World of Medicine',          members:'19.4K', online:'520',  posts:'980',  badge: 0,  joined: false },
  edu:     { icon:'🎓', title:'World of Education',         members:'35.7K', online:'890',  posts:'1.7K', badge: 0,  joined: false },
  photo:   { icon:'📷', title:'World of Photography',       members:'22.3K', online:'610',  posts:'1.1K', badge: 0,  joined: false },
  game:    { icon:'🎮', title:'World of Gaming',            members:'58.9K', online:'2.3K', posts:'3.4K', badge: 0,  joined: false },
  finance: { icon:'📈', title:'World of Finance',           members:'29.6K', online:'740',  posts:'1.3K', badge: 0,  joined: false },
};

// i18n keys carried over from the original static markup, one per world id
const WORLD_I18N_KEY = {
  dev: 'w_programming', ai: 'w_ai', design: 'w_design', biz: 'w_biz',
  med: 'w_med', edu: 'w_edu', photo: 'w_photo', game: 'w_game', finance: 'w_finance'
};

let currentWorld = null;

function worldItemHTML(id) {
  const w = worlds[id];
  const badge = w.badge > 0 ? `<span class="world-badge">${w.badge}</span>` : '';
  return `
    <div class="world-item${id === 'dev' ? ' active' : ''}" onclick="openWorld('${id}')" id="nav-${id}">
      <span class="world-emoji">${w.icon}</span>
      <span class="world-name-col">
        <span class="world-name" data-i18n="${WORLD_I18N_KEY[id]}">${w.title.replace('World of ', '')}</span>
        <span class="world-sub">${w.members} members</span>
      </span>
      ${badge}
    </div>`;
}

function renderWorldsSidebar() {
  const myList = document.getElementById('myWorldsList');
  const discoverList = document.getElementById('discoverWorldsList');
  if (!myList || !discoverList) return;

  myList.innerHTML = Object.keys(worlds).filter(id => worlds[id].joined).map(worldItemHTML).join('');
  discoverList.innerHTML = Object.keys(worlds).filter(id => !worlds[id].joined).map(worldItemHTML).join('');
}

function openWorld(id) {
  currentWorld = id;
  const w = worlds[id];
  document.getElementById('landing').style.display = 'none';
  document.getElementById('worldView').style.display = 'block';
  document.getElementById('worldIcon').textContent = w.icon;
  document.getElementById('worldTitle').textContent = w.title;
  document.getElementById('worldMembers').textContent = w.members;
  document.getElementById('worldOnline').textContent = w.online;
  document.getElementById('worldPosts').textContent = w.posts;
  document.getElementById('s-members').textContent = w.members;
  document.getElementById('joinWorldName').textContent = w.title;

  document.querySelectorAll('.world-item').forEach(el => el.classList.remove('active'));
  const nav = document.getElementById('nav-' + id);
  if (nav) nav.classList.add('active');

  document.querySelectorAll('.nav-icon-item').forEach(el => el.classList.remove('active'));
  const navHome = document.getElementById('navHome');
  if (navHome) navHome.classList.add('active');

  switchTab('home');
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('contentArea').scrollTop = 0;
}

function showLanding() {
  document.getElementById('landing').style.display = 'flex';
  document.getElementById('worldView').style.display = 'none';
  document.querySelectorAll('.world-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-icon-item').forEach(el => el.classList.remove('active'));
  const navHome = document.getElementById('navHome');
  if (navHome) navHome.classList.add('active');
  currentWorld = null;
}

function selectWorld(id) {
  openWorld(id);
}

// Left-nav: Home takes the user back to the landing / current world feed
function goHome() {
  document.querySelectorAll('.nav-icon-item').forEach(el => el.classList.remove('active'));
  document.getElementById('navHome').classList.add('active');
  if (currentWorld) {
    switchTab('home');
    document.getElementById('contentArea').scrollTop = 0;
  } else {
    showLanding();
  }
}

// Left-nav: Reels jumps into the Reels tab of the currently open world,
// or opens the first joined world if the user is still on the landing page
function goReels() {
  document.querySelectorAll('.nav-icon-item').forEach(el => el.classList.remove('active'));
  document.getElementById('navReels').classList.add('active');
  if (!currentWorld) {
    const firstJoined = Object.keys(worlds).find(id => worlds[id].joined) || Object.keys(worlds)[0];
    openWorld(firstJoined);
  }
  switchTab('reels');
}

document.addEventListener('DOMContentLoaded', renderWorldsSidebar);
