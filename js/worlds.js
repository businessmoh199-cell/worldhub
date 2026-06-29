// ===================== WORLDS.JS =====================
// World data, openWorld, showLanding logic

const worlds = {
  dev:     { icon:'💻', title:'World of Programming',     members:'48.3K', online:'1.2K', posts:'2.8K' },
  ai:      { icon:'🤖', title:'World of AI & ML',          members:'32.1K', online:'987',  posts:'1.9K' },
  design:  { icon:'🎨', title:'World of Design',            members:'27.8K', online:'742',  posts:'1.4K' },
  biz:     { icon:'💼', title:'World of Entrepreneurship',  members:'41.2K', online:'1.1K', posts:'2.2K' },
  med:     { icon:'🩺', title:'World of Medicine',          members:'19.4K', online:'520',  posts:'980' },
  edu:     { icon:'🎓', title:'World of Education',         members:'35.7K', online:'890',  posts:'1.7K' },
  photo:   { icon:'📷', title:'World of Photography',       members:'22.3K', online:'610',  posts:'1.1K' },
  game:    { icon:'🎮', title:'World of Gaming',            members:'58.9K', online:'2.3K', posts:'3.4K' },
  finance: { icon:'📈', title:'World of Finance',           members:'29.6K', online:'740',  posts:'1.3K' },
};

let currentWorld = null;

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

  switchTab('home');
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('contentArea').scrollTop = 0;
}

function showLanding() {
  document.getElementById('landing').style.display = 'flex';
  document.getElementById('worldView').style.display = 'none';
  document.querySelectorAll('.world-item').forEach(el => el.classList.remove('active'));
  currentWorld = null;
}

function selectWorld(id) {
  openWorld(id);
}
