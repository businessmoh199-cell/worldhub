// ===================== AI.JS =====================
// World AI assistant panel logic

const aiResponses = {
  'Find the best Flutter posts this week': 'Here are the top Flutter posts this week:\n1. "Offline-first with Hive" by Sara Rahman (284 likes)\n2. "Flutter + Riverpod architecture guide" (198 likes)\n3. "Building custom animations" (156 likes)',
  "Summarize today's discussions": 'Today in #general: The main topics were offline-first architecture, state management debates (Riverpod vs Bloc), and performance tips. Sara Rahman shared a new starter kit that got great reception.',
  'Who are the top contributors?': 'Top contributors this week:\n🥇 Sara Rahman — 12 posts, 920 likes\n🥈 Mokhtar K. — 8 posts, 605 likes\n🥉 Julia P. — 6 posts, 412 likes',
};

function askAI(preset) {
  const input = document.getElementById('aiInput');
  const question = preset || input.value.trim();
  if (!question) return;
  input.value = '';

  const msgs = document.getElementById('aiMessages');
  const userDiv = document.createElement('div');
  userDiv.className = 'ai-msg ai-msg-user';
  userDiv.innerHTML = `<div class="ai-bubble ai-bubble-user">${question}</div>`;
  msgs.appendChild(userDiv);

  const typingDiv = document.createElement('div');
  typingDiv.className = 'ai-msg';
  typingDiv.innerHTML = `<div class="ai-bubble ai-bubble-bot"><div class="typing"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
  msgs.appendChild(typingDiv);
  msgs.scrollTop = msgs.scrollHeight;

  setTimeout(() => {
    const reply = aiResponses[question] || `I found ${Math.floor(Math.random()*50)+5} relevant results for "${question}" in the Programming World. The most relevant posts are from the past 7 days. Would you like me to filter by topic or author?`;
    typingDiv.innerHTML = `<div class="ai-bubble ai-bubble-bot" style="white-space:pre-line">${reply}</div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 1200);
}
