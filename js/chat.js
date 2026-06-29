// ===================== CHAT.JS =====================
// Chat send, addPost logic

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg';
  div.innerHTML = `<div class="chat-msg-avatar" style="background:linear-gradient(135deg,var(--accent),#a855f7);color:#fff">YO</div><div class="chat-msg-bubble"><div class="chat-msg-header"><span class="chat-msg-name">You</span><span class="chat-msg-time">Now</span></div><div class="chat-msg-text">${msg}</div></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  input.value = '';
}

function addPost() {
  closeModal('postModal');
  const container = document.getElementById('postsContainer');
  const card = document.createElement('div');
  card.className = 'post-card';
  card.style.borderColor = 'var(--accentBorder)';
  card.innerHTML = `<div class="post-header"><div class="post-avatar" style="background:linear-gradient(135deg,var(--accent),#a855f7);color:#fff">YO</div><div class="post-meta"><div class="post-author">You</div><div class="post-time">Just now</div></div><div class="post-badge" style="background:var(--accentBg);color:var(--accent2);border-color:var(--accentBorder)">New</div></div><div class="post-title">My new post</div><div class="post-body">Post published successfully!</div><div class="post-footer"><div class="post-action"><i class="ti ti-heart" aria-hidden="true"></i> 0</div><div class="post-action"><i class="ti ti-message-2" aria-hidden="true"></i> 0</div></div>`;
  container.insertBefore(card, container.firstChild);
  switchTab('posts');
}
