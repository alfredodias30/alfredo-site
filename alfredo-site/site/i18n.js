/* Idiomas: PT (padrão) · EN · ES. Troca manual pelo seletor do cabeçalho.
   Também aceita ?lang=en ou ?lang=es no endereço (útil para mandar a clientes). */
(() => {
  const T = {
 "en": {
  "1": "Skip to the work",
  "4": "Work",
  "5": "About",
  "6": "Contact",
  "9": "Designer<br>Advertising Pro",
  "12": "Rio de Janeiro · Since 2020 · 20+ brands",
  "13": "Move your cursor to spray paint",
  "14": "Drag your finger to spray paint",
  "15": "About me",
  "16": "Designer and advertising professional who turns vision into <mark>memorable presence</mark>. Since 2020, I’ve created identities, campaigns, content and prints for <mark>more than 20 brands</mark> — from NGOs to tech startups. Passionate about fashion and print design, I bring that authorial eye to every project, <mark>from concept to paid traffic</mark>.",
  "20": "Visual identity",
  "21": "Art direction",
  "22": "Photography",
  "23": "Social media",
  "24": "Print design",
  "25": "Flyers",
  "26": "UI design",
  "27": "Paid traffic",
  "28": "14 projects · 5 chapters",
  "29": "Fashion &amp; art direction",
  "31": "Art and photo direction",
  "33": "Photography and art direction",
  "35": "Complete visual identity and social media",
  "37": "Complete visual identity",
  "41": "Visual identity and UI design",
  "43": "Party flyers",
  "45": "Carousels and posts",
  "47": "Carousels",
  "50": "Post and story",
  "52": "Photo coverage, retouching and social media",
  "54": "Photo coverage and retouching",
  "55": "Chapter",
  "56": "Fashion &amp;<br>art direction",
  "57": "Studio lookbook and the <em>Aero Reality</em> campaign for the streetwear brand: close-up prints, blue sky, grass and bodies in motion.",
  "59": "Drag →",
  "60": "<em>Modo Avião</em> (Airplane Mode): a campaign about unplugging from the feed and diving into the horizon. Beach, beach chair and tees that ask for less posting and more living.",
  "62": "Visual<br>identity",
  "63": "Aether Inteligência Artificial builds AI agents for companies. Brand, stationery and feed built around a circle that becomes the “a” of the logotype.",
  "64": "Carousel · AI Agents",
  "65": "A logotype of fat, smiling letters, a warm palette and snack packaging that fits in a lunchbox and on a shelf.",
  "66": "Consulting for entrepreneurs and small businesses. The “A” rises like an arrow: brand, letterhead, cards and event pieces.",
  "71": "Social<br>media",
  "72": "Social media · Carousels and posts",
  "73": "Institutional communication for the school in Niterói: dates that matter, events, campaigns and the Talent Show streamed live.",
  "74": "Carousel · International Day of Indigenous Peoples",
  "75": "Carousel · #SejaAntirracista",
  "76": "Social media · Carousels",
  "77": "Social media · Post and story",
  "78": "Multicultural fair, Thanksgiving, rite of passage and end-of-year parties: 26 cuts from a school year, photographed, retouched and published.",
  "79": "Résumé",
  "80": "Experience",
  "81": "Visual identity, graphic design and photography",
  "82": "Visual identities, social media, print design, advertising campaigns, video editing and photography for more than 20 brands, including Viva Rio, Aether Inteligência Artificial, La Salle Abel, Ânimo Consultoria, Restaurante Nomar, Gemini Experience and Puzzled.Co.",
  "83": "Internship at Escola La Salle Abel",
  "84": "Marketing, graphic design and photography, producing visual materials for the school’s institutional communication in Niterói, RJ.",
  "85": "Teaching Assistant in Art Direction and UX Design",
  "86": "In the 4th semester of Advertising at Unilasalle RJ, tutoring students in Photoshop, Illustrator, Figma and Canva.",
  "87": "Education",
  "88": "Postgraduate · Digital Design",
  "89": "In progress at Infnet School of Communication and Digital Design.",
  "90": "Bachelor’s degree · Advertising",
  "91": "Unilasalle RJ, graduated in 2026.",
  "92": "Skills",
  "99": "Video editing",
  "100": "Copywriting",
  "101": "Office suite",
  "102": "Strong communication",
  "103": "Social Media",
  "104": "Photoshop and Illustrator",
  "105": "Paid Traffic",
  "106": "Digital Marketing",
  "108": "Languages",
  "109": "Advanced English",
  "110": "Full course, CNA (2015–2021)",
  "111": "Let’s create<br>together?",
  "115": "Copy email",
  "116": "Close",
  "117": "Courses · Alura"
 },
 "es": {
  "1": "Saltar a los trabajos",
  "4": "Trabajos",
  "5": "Sobre mí",
  "6": "Contacto",
  "9": "Diseñador<br>Publicista",
  "12": "Río de Janeiro · Desde 2020 · +20 marcas",
  "13": "Mueve el cursor para pintar con spray",
  "14": "Desliza el dedo para pintar con spray",
  "15": "Sobre mí",
  "16": "Diseñador y publicista que transforma la visión en <mark>presencia memorable</mark>. Desde 2020, creo identidades, campañas, contenidos y estampados para <mark>más de 20 marcas</mark> — de ONG a startups de tecnología. Apasionado por la moda y el diseño de estampados, llevo esa mirada autoral a cada proyecto, <mark>del concepto al tráfico de pago</mark>.",
  "20": "Identidad visual",
  "21": "Dirección de arte",
  "22": "Fotografía",
  "23": "Redes sociales",
  "24": "Estampados",
  "25": "Flyers",
  "26": "Diseño UI",
  "27": "Tráfico de pago",
  "28": "14 proyectos · 5 capítulos",
  "29": "Moda &amp; dirección de arte",
  "31": "Dirección de arte y fotográfica",
  "33": "Fotografía y dirección de arte",
  "35": "Identidad visual completa y redes sociales",
  "37": "Identidad visual completa",
  "41": "Identidad visual y diseño UI",
  "43": "Flyers de fiesta",
  "45": "Carruseles y posts",
  "47": "Carruseles",
  "50": "Post e historia",
  "52": "Cobertura fotográfica, tratamiento y redes sociales",
  "54": "Cobertura fotográfica y tratamiento",
  "55": "Capítulo",
  "56": "Moda &amp;<br>dirección de arte",
  "57": "Lookbook en estudio y la campaña <em>Aero Reality</em> para la marca de streetwear: estampados en primer plano, cielo azul, césped y cuerpos en movimiento.",
  "59": "Arrastra →",
  "60": "<em>Modo Avião</em> (Modo Avión): una campaña sobre desconectarse del feed y sumergirse en el horizonte. Playa, silla de playa y camisetas que piden menos posts y más vida.",
  "62": "Identidad<br>visual",
  "63": "Aether Inteligência Artificial crea agentes de IA para empresas. Marca, papelería y feed construidos sobre un círculo que se convierte en la “a” del logotipo.",
  "64": "Carrusel · Agentes de IA",
  "65": "Logotipo de letras gordas y sonrientes, paleta cálida y empaques de snack que caben en una merienda y en una estantería.",
  "66": "Consultoría para emprendedores y microempresas. La “A” sube como una flecha: marca, papel membretado, tarjetas y piezas para eventos.",
  "71": "Redes<br>sociales",
  "72": "Redes sociales · Carruseles y posts",
  "73": "Comunicación institucional de la escuela en Niterói: fechas importantes, eventos, campañas y el Talent Show transmitido en vivo.",
  "74": "Carrusel · Día Internacional de los Pueblos Indígenas",
  "75": "Carrusel · #SejaAntirracista",
  "76": "Redes sociales · Carruseles",
  "77": "Redes sociales · Post e historia",
  "78": "Muestra multicultural, Thanksgiving, rito de pasaje y fiestas de cierre: 26 recortes de un año escolar, fotografiados, tratados y publicados.",
  "79": "Currículum",
  "80": "Experiencia",
  "81": "Identidad visual, diseño gráfico y fotografía",
  "82": "Identidades visuales, redes sociales, diseño de estampados, campañas publicitarias, edición de video y fotografía para más de 20 marcas, entre ellas Viva Rio, Aether Inteligência Artificial, La Salle Abel, Ânimo Consultoria, Restaurante Nomar, Gemini Experience y Puzzled.Co.",
  "83": "Pasantía en la Escola La Salle Abel",
  "84": "Marketing, diseño gráfico y fotografía, produciendo materiales visuales para la comunicación institucional de la escuela en Niterói, RJ.",
  "85": "Monitor de Dirección de Arte y UX Design",
  "86": "En el 4.º semestre de Publicidad y Propaganda en Unilasalle RJ, monitor de alumnos en Photoshop, Illustrator, Figma y Canva.",
  "87": "Formación",
  "88": "Posgrado · Diseño Digital",
  "89": "En curso en la Escuela de Comunicación y Diseño Digital Infnet.",
  "90": "Grado · Publicidad y Propaganda",
  "91": "Unilasalle RJ, egresado en 2026.",
  "92": "Habilidades",
  "99": "Edición de video",
  "100": "Copywriting",
  "101": "Paquete Office",
  "102": "Buena comunicación",
  "103": "Redes sociales",
  "104": "Photoshop e Illustrator",
  "105": "Tráfico de pago",
  "106": "Marketing Digital",
  "108": "Idiomas",
  "109": "Inglés avanzado",
  "110": "Curso completo, CNA (2015–2021)",
  "111": "¿Creamos<br>juntos?",
  "115": "Copiar correo",
  "116": "Cerrar",
  "117": "Cursos · Alura"
 }
};
  const UI = {
 "pt": {
  "copied": "E-mail copiado"
 },
 "en": {
  "copied": "Email copied",
  "nav": "Main",
  "brand": "Alfredo Barbosa Visual, back to top",
  "areas": "Areas of expertise",
  "lbox": "Enlarged image",
  "close": "Close",
  "prev": "Previous image",
  "next": "Next image",
  "lang": "Language",
  "desc": "Alfredo Barbosa, designer and advertising professional from Rio de Janeiro. Visual identity, art direction, photography and social media for more than 20 brands since 2020.",
  "ogdesc": "Designer and advertising professional. Visual identity, art direction, photography and social media."
 },
 "es": {
  "copied": "Correo copiado",
  "nav": "Principal",
  "brand": "Alfredo Barbosa Visual, volver al inicio",
  "areas": "Áreas de actuación",
  "lbox": "Imagen ampliada",
  "close": "Cerrar",
  "prev": "Imagen anterior",
  "next": "Imagen siguiente",
  "lang": "Idioma",
  "desc": "Alfredo Barbosa, diseñador y publicista de Río de Janeiro. Identidad visual, dirección de arte, fotografía y redes sociales para más de 20 marcas desde 2020.",
  "ogdesc": "Diseñador y publicista. Identidad visual, dirección de arte, fotografía y redes sociales."
 }
};
  const KEY = 'lang';
  const LANGS = ['pt', 'en', 'es'];
  const HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };

  const els = [...document.querySelectorAll('[data-i18n]')];
  els.forEach(el => { el.dataset.pt = el.innerHTML; });

  const aria = [
    ['.top nav', 'nav'], ['.top .mark', 'brand'], ['.disciplines', 'areas'],
    ['dialog.lightbox', 'lbox'], ['.lb-close', 'close'], ['.lb-prev', 'prev'],
    ['.lb-next', 'next'], ['.lang-switch', 'lang']
  ].map(([s, k]) => [document.querySelector(s), k]).filter(([e]) => e);
  aria.forEach(([e]) => { e.dataset.ptAria = e.getAttribute('aria-label') || ''; });

  const metaSel = {
    desc: 'meta[name="description"]',
    ogdesc: 'meta[property="og:description"]'
  };
  const meta = {};
  for (const k in metaSel) {
    const m = document.querySelector(metaSel[k]);
    if (m) meta[k] = [m, m.content];
  }
  const buttons = [...document.querySelectorAll('.lang-switch [data-lang]')];

  let lang = 'pt';
  const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  const save = v => { try { localStorage.setItem(KEY, v); } catch { /* sem armazenamento */ } };

  const label = el => (lang === 'pt' ? el.dataset.pt : (T[lang][el.dataset.i18n] ?? el.dataset.pt));

  function apply(l) {
    lang = l;
    els.forEach(el => { el.innerHTML = label(el); });
    aria.forEach(([e, k]) => {
      e.setAttribute('aria-label', l === 'pt' ? e.dataset.ptAria : (UI[l][k] || e.dataset.ptAria));
    });
    for (const k in meta) {
      const [m, ptv] = meta[k];
      m.content = l === 'pt' ? ptv : (UI[l][k] || ptv);
    }
    document.documentElement.lang = HTML_LANG[l];
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  }

  buttons.forEach(b => b.addEventListener('click', () => {
    apply(b.dataset.lang);
    save(b.dataset.lang);
  }));

  window.I18N = {
    get lang() { return lang; },
    t: k => (UI[lang] && UI[lang][k]) || UI.pt[k],
    label
  };

  const q = new URLSearchParams(location.search).get('lang');
  const start = LANGS.includes(q) ? q : (LANGS.includes(read()) ? read() : 'pt');
  apply(start);
})();
