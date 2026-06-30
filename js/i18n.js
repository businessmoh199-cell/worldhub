// ===================== I18N.JS =====================
// 4-language system: English / Arabic / French / Spanish
// Applies translations to every element with data-i18n / data-i18n-ph / data-i18n-html

const translations = {
  EN: {
    search_ph: "Search people, posts, code...",
    my_worlds: "My Worlds", discover_worlds: "Discover Worlds", quick_actions: "Quick Actions",
    create_world: "Create World", my_profile: "My Profile", settings: "Settings",
    w_programming: "Programming", w_ai: "AI & ML", w_design: "Design", w_biz: "Entrepreneurship",
    w_med: "Medicine", w_edu: "Education", w_photo: "Photography", w_game: "Gaming", w_finance: "Finance",
    join_members: "Join 2M+ professionals",
    landing_h1: 'Connect in your <span class="grd">World</span>',
    landing_sub: "Specialized communities built for your profession. Posts, marketplace, jobs, voice rooms — everything your field needs.",
    explore_worlds: "Explore Worlds",
    tab_home: "Home", tab_posts: "Posts", tab_reels: "Reels", tab_videos: "Videos", tab_chat: "Chat",
    tab_voice: "Voice Rooms", tab_files: "Files", tab_market: "Marketplace", tab_jobs: "Jobs",
    tab_events: "Events", tab_membership: "Membership",
    search: "Search", join_world: "Join World",
    rights: "All rights reserved.", about: "About", contact: "Contact",
    privacy: "Privacy Policy", terms: "Terms of Service",
  },
  AR: {
    search_ph: "ابحث عن أشخاص، منشورات، كود...",
    my_worlds: "عوالمي", discover_worlds: "اكتشف عوالم", quick_actions: "إجراءات سريعة",
    create_world: "إنشاء عالم", my_profile: "ملفي الشخصي", settings: "الإعدادات",
    w_programming: "البرمجة", w_ai: "الذكاء الاصطناعي", w_design: "التصميم", w_biz: "ريادة الأعمال",
    w_med: "الطب", w_edu: "التعليم", w_photo: "التصوير", w_game: "الألعاب", w_finance: "التمويل",
    join_members: "انضم إلى أكثر من 2 مليون محترف",
    landing_h1: 'تواصل في <span class="grd">عالمك</span>',
    landing_sub: "مجتمعات متخصصة بُنيت لمجالك المهني. منشورات، سوق إلكتروني، وظائف، غرف صوتية — كل ما يحتاجه مجالك.",
    explore_worlds: "استكشف العوالم",
    tab_home: "الرئيسية", tab_posts: "المنشورات", tab_reels: "ريلز", tab_videos: "فيديوهات", tab_chat: "الدردشة",
    tab_voice: "الغرف الصوتية", tab_files: "الملفات", tab_market: "السوق", tab_jobs: "الوظائف",
    tab_events: "الفعاليات", tab_membership: "العضوية",
    search: "بحث", join_world: "انضم إلى العالم",
    rights: "جميع الحقوق محفوظة.", about: "من نحن", contact: "اتصل بنا",
    privacy: "سياسة الخصوصية", terms: "شروط الاستخدام",
  },
  FR: {
    search_ph: "Rechercher des personnes, publications, code...",
    my_worlds: "Mes Mondes", discover_worlds: "Découvrir des Mondes", quick_actions: "Actions Rapides",
    create_world: "Créer un Monde", my_profile: "Mon Profil", settings: "Paramètres",
    w_programming: "Programmation", w_ai: "IA & ML", w_design: "Design", w_biz: "Entrepreneuriat",
    w_med: "Médecine", w_edu: "Éducation", w_photo: "Photographie", w_game: "Jeux", w_finance: "Finance",
    join_members: "Rejoignez plus de 2M de professionnels",
    landing_h1: 'Connectez-vous dans votre <span class="grd">Monde</span>',
    landing_sub: "Des communautés spécialisées conçues pour votre profession. Publications, marketplace, emplois, salons vocaux — tout ce dont votre domaine a besoin.",
    explore_worlds: "Explorer les Mondes",
    tab_home: "Accueil", tab_posts: "Publications", tab_reels: "Reels", tab_videos: "Vidéos", tab_chat: "Chat",
    tab_voice: "Salons Vocaux", tab_files: "Fichiers", tab_market: "Marketplace", tab_jobs: "Emplois",
    tab_events: "Événements", tab_membership: "Abonnement",
    search: "Rechercher", join_world: "Rejoindre le Monde",
    rights: "Tous droits réservés.", about: "À propos", contact: "Contact",
    privacy: "Politique de Confidentialité", terms: "Conditions d'Utilisation",
  },
  ES: {
    search_ph: "Buscar personas, publicaciones, código...",
    my_worlds: "Mis Mundos", discover_worlds: "Descubrir Mundos", quick_actions: "Acciones Rápidas",
    create_world: "Crear Mundo", my_profile: "Mi Perfil", settings: "Configuración",
    w_programming: "Programación", w_ai: "IA y ML", w_design: "Diseño", w_biz: "Emprendimiento",
    w_med: "Medicina", w_edu: "Educación", w_photo: "Fotografía", w_game: "Juegos", w_finance: "Finanzas",
    join_members: "Únete a más de 2M de profesionales",
    landing_h1: 'Conéctate en tu <span class="grd">Mundo</span>',
    landing_sub: "Comunidades especializadas creadas para tu profesión. Publicaciones, mercado, empleos, salas de voz — todo lo que tu campo necesita.",
    explore_worlds: "Explorar Mundos",
    tab_home: "Inicio", tab_posts: "Publicaciones", tab_reels: "Reels", tab_videos: "Videos", tab_chat: "Chat",
    tab_voice: "Salas de Voz", tab_files: "Archivos", tab_market: "Mercado", tab_jobs: "Empleos",
    tab_events: "Eventos", tab_membership: "Membresía",
    search: "Buscar", join_world: "Unirse al Mundo",
    rights: "Todos los derechos reservados.", about: "Acerca de", contact: "Contacto",
    privacy: "Política de Privacidad", terms: "Términos de Servicio",
  }
};

function applyTranslations(lang) {
  const dict = translations[lang] || translations.EN;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.documentElement.lang = lang.toLowerCase();
  document.documentElement.dir = (lang === 'AR') ? 'rtl' : 'ltr';

  document.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
  const map = { EN: 0, AR: 1, FR: 2, ES: 3 };
  const opts = document.querySelectorAll('.lang-option');
  if (opts[map[lang]]) opts[map[lang]].classList.add('active');

  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang;

  localStorage.setItem('worldhub_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('worldhub_lang') || 'EN';
  applyTranslations(saved);
});
