// ===================== CHAT.JS =====================
// Chat send, addPost logic

let chatMsgCounter = 0;

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  const msgs = document.getElementById('chatMessages');
  const id = 'cm_' + (chatMsgCounter++);
  const div = document.createElement('div');
  div.className = 'chat-msg';
  div.id = id;
  div.innerHTML = `<div class="chat-msg-avatar" style="background:linear-gradient(135deg,var(--accent),#a855f7);color:#fff">YO</div>
    <div class="chat-msg-bubble">
      <div class="chat-msg-header">
        <span class="chat-msg-name">You</span><span class="chat-msg-time">Now</span>
        <span class="chat-msg-actions" style="margin-left:auto;display:flex;gap:6px;opacity:0;transition:opacity .15s">
          <i class="ti ti-pencil" style="cursor:pointer;font-size:13px;color:var(--text3)" onclick="editChatMsg('${id}')" title="Edit"></i>
          <i class="ti ti-trash" style="cursor:pointer;font-size:13px;color:var(--text3)" onclick="deleteChatMsg('${id}')" title="Delete"></i>
        </span>
      </div>
      <div class="chat-msg-text" id="${id}-text">${escapeHtml(msg)}</div>
    </div>`;
  div.addEventListener('mouseenter', () => { div.querySelector('.chat-msg-actions').style.opacity = 1; });
  div.addEventListener('mouseleave', () => { div.querySelector('.chat-msg-actions').style.opacity = 0; });
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  input.value = '';
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function editChatMsg(id) {
  const textEl = document.getElementById(id + '-text');
  if (!textEl) return;
  const current = textEl.textContent;
  const newText = prompt('Edit message:', current);
  if (newText === null) return;
  const trimmed = newText.trim();
  if (!trimmed) return;
  textEl.textContent = trimmed;
  const header = textEl.previousElementSibling;
  if (header && !header.querySelector('.edited-tag')) {
    const tag = document.createElement('span');
    tag.className = 'edited-tag';
    tag.style.cssText = 'font-size:11px;color:var(--text3);margin-left:4px';
    tag.textContent = '(edited)';
    header.appendChild(tag);
  }
}

function deleteChatMsg(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (!confirm('Delete this message?')) return;
  el.remove();
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
