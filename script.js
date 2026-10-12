const games = [
  {
    id: 1,
    title: "1789: CAMINO A LA BASTILLA",
    category: "Historia",
    collection: "Revolución Francesa",
    mode: "Narrativo",
    duration: "3 min",
    description:
      "Un relato interactivo sobre la Revolución Francesa en el que cada decisión cambia el rumbo del personaje.",
    longDescription:
      "Un juego de decisiones histórico-literario donde el jugador vive la Revolución Francesa desde la perspectiva de un ciudadano con varias opciones y consecuencias reales.",
    gradient: "linear-gradient(135deg, rgba(124,92,255,0.96), rgba(0,209,255,0.8))",
    image: "assets/game-covers/revol fran.png",
    previewUrl: "games/bastilla_1789.html",
    playUrl: "games/bastilla_1789.html"
  },
  {
    id: 2,
    title: "En diálogo con Sócrates",
    category: "Educativo",
    collection: "Filosofía",
    subcollection: "Filosofía antigua",
    mode: "Filosofía",
    duration: "10 min",
    description:
      "Un diálogo filosófico con Sócrates que invita a reflexionar sobre la verdad, la duda y la razón.",
    longDescription:
      "Una experiencia educativa rica en preguntas, diálogo y pensamiento crítico inspirada en la tradición socrática y en la filosofía griega.",
    gradient: "linear-gradient(135deg, rgba(10,190,255,0.85), rgba(58,236,174,0.8))",
    image: "assets/game-covers/socrate.png",
    previewUrl: "games/socrates_dialogo.html",
    playUrl: "games/socrates_dialogo.html"
  },
  {
    id: 3,
    title: "Revolución Industrial",
    category: "Estratégia",
    collection: "Revolución Industrial",
    mode: "Quiz",
    duration: "3 min",
    description:
      "Coloca la máquina en el lugar correcto y responde a preguntas clave sobre la industrialización europea.",
    longDescription:
      "Un juego tipo tren y estación que mezcla velocidad, observación y conocimiento histórico para repasar la Revolución Industrial y sus impactos.",
    gradient: "linear-gradient(135deg, rgba(255,130,102,0.9), rgba(255,192,78,0.85))",
    image: "assets/game-covers/revolucion industrial.png",
    previewUrl: "games/revolucion_industrial_estacionar.html",
    playUrl: "games/revolucion_industrial_estacionar.html"
  },
  {
    id: 4,
    title: "Napoleón vs Wellington",
    category: "Arcade",
    collection: "Revolución Francesa",
    mode: "2 jugadores",
    duration: "3 min",
    description:
      "Un duelo arcade de preguntas con puntuación, turnos y explosividad visual inspirada en la historia militar.",
    longDescription:
      "Reta a tu rival en una competicion de preguntas sobre Napoleón, Waterloo y la historia del Imperio francés.",
    gradient: "linear-gradient(135deg, rgba(255,104,116,0.92), rgba(124,92,255,0.82))",
    image: "assets/game-covers/napoleon.png",
    previewUrl: "games/napoleon_tenis_2p.html",
    playUrl: "games/napoleon_tenis_2p.html"
  },
  {
    id: 5,
    title: "Revolución Rusa: tanda de penaltis",
    category: "Historia",
    collection: "Revolución Rusa",
    mode: "Quiz",
    duration: "3 min",
    description:
      "Comparte respuestas históricas con los bolcheviques y mencheviques en una tanda de penaltis cargada de preguntas.",
    longDescription:
      "Un minijuego de historia y rapidez mental donde cada respuesta correcta suma goles para tu equipo y cada error deja al rival con ventaja.",
    gradient: "linear-gradient(135deg, rgba(207,58,58,0.9), rgba(20,103,180,0.88))",
    image: "assets/game-covers/rigori russi.png",
    previewUrl: "games/revolucion_rusa_penaltis.html",
    playUrl: "games/revolucion_rusa_penaltis.html"
  },
  {
    id: 6,
    title: "¡Motín del Té! Boston 1773",
    category: "Historia",
    collection: "Revolución Americana",
    mode: "Quiz",
    duration: "3 min",
    description:
      "Revive el motín del té de Boston de 1773 y descubre las causas y consecuencias de este episodio clave de la independencia americana.",
    longDescription:
      "Un juego histórico sobre el Boston Tea Party, uno de los detonantes de la Revolución Americana contra el dominio británico.",
    gradient: "linear-gradient(135deg, rgba(20,60,120,0.9), rgba(180,30,45,0.85))",
    image: "assets/game-covers/Washington.png",
    previewUrl: "games/boston_tea_party.html",
    playUrl: "games/boston_tea_party.html"
  },
  {
    id: 7,
    title: "¿Con Qué Se Hace? — Sector Primario",
    category: "Educativo",
    collection: "Geografía",
    mode: "Quiz",
    duration: "3 min",
    description:
      "Descubre de qué materia prima viene cada producto y aprende sobre el sector primario y el origen de las cosas que usamos.",
    longDescription:
      "Un juego educativo sobre geografía y el sector primario: agricultura, ganadería, pesca y minería, y cómo esos recursos se convierten en productos.",
    gradient: "linear-gradient(135deg, rgba(58,159,90,0.9), rgba(212,175,55,0.85))",
    image: "assets/game-covers/Recetas.png",
    previewUrl: "games/de_donde_viene.html",
    playUrl: "games/de_donde_viene.html"
  },
  {
    id: 8,
    title: "El Mensajero de las Trincheras",
    category: "Historia",
    collection: "Primera Guerra Mundial",
    mode: "Aventura",
    duration: "10 min",
    description:
      "Una campaña sobre la Primera Guerra Mundial en la que llevas mensajes entre las trincheras esquivando el peligro, sin combatir.",
    longDescription:
      "Un juego narrativo por niveles ambientado en la Primera Guerra Mundial (1914-1918): recorres momentos clave del conflicto, desde el atentado de Sarajevo hasta el armisticio, moviéndote y tomando decisiones en vez de luchar.",
    gradient: "linear-gradient(135deg, rgba(90,110,70,0.92), rgba(120,40,40,0.85))",
    image: "assets/game-covers/Trincheras.png",
    previewUrl: "games/mensajero_trincheras.html",
    playUrl: "games/mensajero_trincheras.html"
  },
  {
    id: 9,
    title: "El Secreto de la Ilustración",
    category: "Historia",
    collection: "Ilustración",
    mode: "Aventura",
    duration: "10 min",
    description:
      "Una aventura point-and-click en la que descubres las ideas de la Ilustración: Kant, Locke y el poder de la razón.",
    longDescription:
      "Un juego de aventura point-and-click basado en apuntes reales sobre la Ilustración, donde exploras, dialogas y tomas decisiones para desentrañar el secreto del Siglo de las Luces.",
    gradient: "linear-gradient(135deg, rgba(212,175,55,0.9), rgba(40,60,120,0.88))",
    image: "assets/game-covers/Ilustracion.png",
    previewUrl: "games/secreto_ilustracion.html",
    playUrl: "games/secreto_ilustracion.html"
  },
  {
    id: 11,
    title: "El 2 de mayo de 1808",
    category: "Pintura",
    collection: "Arte",
    mode: "Goya",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Goya",
    movements: ["Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Goya punto por punto: los detalles, los símbolos y el contexto histórico de la lucha contra los mamelucos en la Puerta del Sol.",
    longDescription:
      "Una página interactiva con las claves del cuadro de Goya sobre el levantamiento del 2 de mayo de 1808 en Madrid.",
    gradient: "linear-gradient(135deg, rgba(46,44,39,0.95), rgba(160,90,60,0.8))",
    image: "assets/art-covers/goya_2_de_mayo.jpg",
    previewUrl: "arte/goya_2_de_mayo.html",
    playUrl: "arte/goya_2_de_mayo.html"
  },
  {
    id: 10,
    title: "El 3 de mayo de 1808",
    category: "Pintura",
    collection: "Arte",
    mode: "Goya",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Goya",
    movements: ["Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Goya punto por punto: los detalles, los símbolos y el contexto histórico de los fusilamientos del 3 de mayo.",
    longDescription:
      "Una página interactiva con las claves del cuadro de Goya sobre los fusilamientos del 3 de mayo de 1808.",
    gradient: "linear-gradient(135deg, rgba(46,44,39,0.95), rgba(208,167,74,0.8))",
    image: "assets/art-covers/goya_3_de_mayo.jpg",
    previewUrl: "arte/goya_3_de_mayo.html",
    playUrl: "arte/goya_3_de_mayo.html"
  },
  {
    id: 12,
    title: "El sueño de la razón produce monstruos",
    category: "Grabado",
    collection: "Arte",
    mode: "Goya",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Goya",
    movements: ["Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el grabado de Goya punto por punto: los animales nocturnos, los símbolos y el significado de la razón dormida.",
    longDescription:
      "Una página interactiva con las claves del grabado «El sueño de la razón produce monstruos», de los Caprichos de Goya.",
    gradient: "linear-gradient(135deg, rgba(60,56,50,0.95), rgba(150,140,120,0.8))",
    image: "assets/art-covers/goya_sueno_razon.jpg",
    previewUrl: "arte/goya_sueno_razon.html",
    playUrl: "arte/goya_sueno_razon.html"
  },
  {
    id: 13,
    title: "Napoleón cruzando los Alpes",
    category: "Pintura",
    collection: "Arte",
    alsoIn: ["Revolución Francesa"],
    mode: "David",
    duration: "Interactivo",
    isArt: true,
    subcollection: "David",
    movements: ["Neoclasicismo", "Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Jacques-Louis David punto por punto: los detalles, los símbolos y la imagen que Napoleón quiso dar de sí mismo.",
    longDescription:
      "Una página interactiva con las claves del cuadro de David sobre el paso de Napoleón por los Alpes.",
    gradient: "linear-gradient(135deg, rgba(40,70,100,0.92), rgba(200,130,70,0.85))",
    image: "assets/art-covers/david_napoleon_alpes.jpg",
    previewUrl: "arte/david_napoleon_alpes.html",
    playUrl: "arte/david_napoleon_alpes.html"
  },
  {
    id: 14,
    title: "El juramento del Juego de Pelota",
    category: "Pintura",
    collection: "Arte",
    alsoIn: ["Revolución Francesa"],
    mode: "David",
    duration: "Interactivo",
    isArt: true,
    subcollection: "David",
    movements: ["Neoclasicismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Jacques-Louis David punto por punto: los detalles, los símbolos y el momento en que los diputados juraron no separarse hasta dar una constitución a Francia.",
    longDescription:
      "Una página interactiva con las claves del cuadro de David sobre el juramento del Juego de Pelota (1789), uno de los primeros actos de la Revolución Francesa.",
    gradient: "linear-gradient(135deg, rgba(40,70,100,0.92), rgba(190,60,60,0.85))",
    image: "assets/art-covers/david_juramento_juego_pelota.jpg",
    previewUrl: "arte/david_juramento_juego_pelota.html",
    playUrl: "arte/david_juramento_juego_pelota.html"
  },
  {
    id: 15,
    title: "La muerte de Marat",
    category: "Pintura",
    collection: "Arte",
    alsoIn: ["Revolución Francesa"],
    mode: "David",
    duration: "Interactivo",
    isArt: true,
    subcollection: "David",
    movements: ["Neoclasicismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Jacques-Louis David punto por punto: los detalles, los símbolos y el asesinato del líder revolucionario Jean-Paul Marat en su bañera.",
    longDescription:
      "Una página interactiva con las claves del cuadro de David sobre el asesinato de Marat (1793), obra cumbre del neoclasicismo comprometido políticamente.",
    gradient: "linear-gradient(135deg, rgba(60,50,40,0.95), rgba(150,60,50,0.85))",
    image: "assets/art-covers/david_muerte_marat.jpg",
    previewUrl: "arte/david_muerte_marat.html",
    playUrl: "arte/david_muerte_marat.html"
  },
  {
    id: 16,
    title: "La toma de la Bastilla",
    category: "Acuarela",
    collection: "Arte",
    alsoIn: ["Revolución Francesa"],
    mode: "Houël",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Houël",
    movements: ["Neoclasicismo", "Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora la acuarela de Jean-Pierre Houël punto por punto: los detalles, los símbolos y la imagen de la Bastilla en llamas durante el 14 de julio de 1789.",
    longDescription:
      "Una página interactiva con las claves de la acuarela de Houël sobre la toma de la Bastilla (1789), una vista casi periodística entre el neoclasicismo y la sensibilidad prerromántica.",
    gradient: "linear-gradient(135deg, rgba(60,70,90,0.92), rgba(210,120,50,0.85))",
    image: "assets/art-covers/houel_toma_bastilla.jpg",
    previewUrl: "arte/houel_toma_bastilla.html",
    playUrl: "arte/houel_toma_bastilla.html"
  },
  {
    id: 17,
    title: "El caminante sobre el mar de nubes",
    category: "Pintura",
    collection: "Arte",
    mode: "Friedrich",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Friedrich",
    movements: ["Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Caspar David Friedrich punto por punto: la figura de espaldas, el mar de nubes y la idea romántica de lo sublime.",
    longDescription:
      "Una página interactiva con las claves del cuadro de Friedrich, la imagen más conocida del romanticismo alemán.",
    gradient: "linear-gradient(135deg, rgba(70,85,100,0.92), rgba(160,170,180,0.85))",
    image: "assets/art-covers/friedrich_caminante.jpg",
    previewUrl: "arte/friedrich_caminante.html",
    playUrl: "arte/friedrich_caminante.html"
  },
  {
    id: 18,
    title: "Saturno devorando a un hijo",
    category: "Pintura",
    collection: "Arte",
    mode: "Goya",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Goya",
    movements: ["Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Goya punto por punto: el mito, la violencia y el mundo de pesadilla de las Pinturas negras.",
    longDescription:
      "Una página interactiva con las claves de «Saturno devorando a un hijo», una de las Pinturas negras de Goya, precursora del expresionismo.",
    gradient: "linear-gradient(135deg, rgba(20,18,16,0.95), rgba(120,40,30,0.85))",
    image: "assets/art-covers/goya_saturno.jpg",
    previewUrl: "arte/goya_saturno.html",
    playUrl: "arte/goya_saturno.html"
  },
  {
    id: 19,
    title: "El juramento de los Horacios",
    category: "Pintura",
    collection: "Arte",
    alsoIn: ["Revolución Francesa"],
    mode: "David",
    duration: "Interactivo",
    isArt: true,
    subcollection: "David",
    movements: ["Neoclasicismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Jacques-Louis David punto por punto: los detalles, los símbolos y el ideal de sacrificio por la patria que anunció la Revolución.",
    longDescription:
      "Una página interactiva con las claves de «El juramento de los Horacios» (1784), obra manifiesto del neoclasicismo y modelo para la pintura revolucionaria.",
    gradient: "linear-gradient(135deg, rgba(40,70,100,0.92), rgba(180,70,50,0.85))",
    image: "assets/art-covers/david_juramento_horacios.jpg",
    previewUrl: "arte/david_juramento_horacios.html",
    playUrl: "arte/david_juramento_horacios.html"
  },
  {
    id: 20,
    title: "Cristo velado",
    category: "Escultura",
    collection: "Arte",
    mode: "Sanmartino",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Sanmartino",
    movements: ["Barroco"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora la escultura de Giuseppe Sanmartino punto por punto: el velo de mármol, el cuerpo yacente y la leyenda alquímica de la Capilla Sansevero.",
    longDescription:
      "Una página interactiva con las claves del «Cristo velado» (1753), una obra del barroco tardío de virtuosismo técnico asombroso.",
    gradient: "linear-gradient(135deg, rgba(80,76,70,0.92), rgba(190,180,165,0.85))",
    image: "assets/art-covers/sanmartino_cristo_velado.jpg",
    previewUrl: "arte/sanmartino_cristo_velado.html",
    playUrl: "arte/sanmartino_cristo_velado.html"
  },
  {
    id: 21,
    title: "La coronación de Napoleón",
    category: "Pintura",
    collection: "Arte",
    alsoIn: ["Revolución Francesa"],
    mode: "David",
    duration: "Interactivo",
    isArt: true,
    subcollection: "David",
    movements: ["Neoclasicismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Jacques-Louis David punto por punto: los detalles, los símbolos y el paso de la República al Imperio.",
    longDescription:
      "Una página interactiva con las claves de «La coronación de Napoleón» (1805-1807), el neoclasicismo convertido en estilo oficial del Imperio.",
    gradient: "linear-gradient(135deg, rgba(120,30,40,0.92), rgba(212,175,55,0.85))",
    image: "assets/art-covers/david_coronacion_napoleon.jpg",
    previewUrl: "arte/david_coronacion_napoleon.html",
    playUrl: "arte/david_coronacion_napoleon.html"
  },
  {
    id: 22,
    title: "Napoleón en su estudio de las Tullerías",
    category: "Pintura",
    collection: "Arte",
    alsoIn: ["Revolución Francesa"],
    mode: "David",
    duration: "Interactivo",
    isArt: true,
    subcollection: "David",
    movements: ["Neoclasicismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Jacques-Louis David punto por punto: los detalles, los símbolos y el retrato de Napoleón como legislador, con el Código Civil sobre la mesa.",
    longDescription:
      "Una página interactiva con las claves de «Napoleón en su estudio de las Tullerías» (1812), un retrato neoclásico de estilo Imperio entre el realismo y la idealización.",
    gradient: "linear-gradient(135deg, rgba(30,50,90,0.92), rgba(190,150,60,0.85))",
    image: "assets/art-covers/david_napoleon_estudio.jpg",
    previewUrl: "arte/david_napoleon_estudio.html",
    playUrl: "arte/david_napoleon_estudio.html"
  },
  {
    id: 23,
    title: "Washington cruzando el Delaware",
    category: "Pintura",
    collection: "Arte",
    alsoIn: ["Revolución Americana"],
    mode: "Leutze",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Leutze",
    movements: ["Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Emanuel Leutze punto por punto: los detalles, los símbolos y el mito del cruce del Delaware en la guerra de independencia de Estados Unidos.",
    longDescription:
      "Una página interactiva con las claves de «Washington cruzando el Delaware» (1851), pintura de historia romántica, más mito que documento.",
    gradient: "linear-gradient(135deg, rgba(40,60,90,0.92), rgba(200,200,215,0.85))",
    image: "assets/art-covers/leutze_washington_delaware.jpg",
    previewUrl: "arte/leutze_washington_delaware.html",
    playUrl: "arte/leutze_washington_delaware.html"
  },
  {
    id: 24,
    title: "La escuela de Atenas",
    category: "Fresco",
    collection: "Arte",
    alsoIn: ["Filosofía"],
    mode: "Rafael",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Rafael",
    movements: ["Renacimiento"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el fresco de Rafael punto por punto: los filósofos de la Antigüedad, la perspectiva y el ideal de armonía del Renacimiento.",
    longDescription:
      "Una página interactiva con las claves de «La escuela de Atenas» (1509-1511), obra cumbre del Renacimiento pleno y modelo para el clasicismo posterior.",
    gradient: "linear-gradient(135deg, rgba(150,110,60,0.92), rgba(70,100,150,0.85))",
    image: "assets/art-covers/rafael_escuela_atenas.jpg",
    previewUrl: "arte/rafael_escuela_atenas.html",
    playUrl: "arte/rafael_escuela_atenas.html"
  },
  {
    id: 25,
    title: "La muerte de Sócrates",
    category: "Pintura",
    collection: "Arte",
    alsoIn: ["Filosofía", "Ilustración", "Revolución Francesa"],
    mode: "David",
    duration: "Interactivo",
    isArt: true,
    subcollection: "David",
    movements: ["Neoclasicismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Jacques-Louis David punto por punto: los detalles, los símbolos y la muerte serena de Sócrates, héroe de la razón.",
    longDescription:
      "Una página interactiva con las claves de «La muerte de Sócrates» (1787), obra clave del neoclasicismo moralizante, pintada en plena Ilustración y en vísperas de la Revolución.",
    gradient: "linear-gradient(135deg, rgba(60,70,90,0.92), rgba(170,140,100,0.85))",
    image: "assets/art-covers/david_muerte_socrates.jpg",
    previewUrl: "arte/david_muerte_socrates.html",
    playUrl: "arte/david_muerte_socrates.html"
  },
  {
    id: 26,
    title: "El beso de la muerte",
    category: "Escultura",
    collection: "Arte",
    mode: "Jaume Barba (atribuida)",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Barba",
    movements: ["Modernismo", "Simbolismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora la escultura funeraria del Cementerio de Poblenou punto por punto: el amor, la muerte y su simbolismo.",
    longDescription:
      "Una página interactiva con las claves de «El beso de la muerte» (1930), atribuida a Jaume Barba, una de las esculturas funerarias más conocidas de Europa.",
    gradient: "linear-gradient(135deg, rgba(50,50,55,0.95), rgba(160,160,170,0.8))",
    image: "assets/art-covers/beso_de_la_muerte.jpg",
    previewUrl: "arte/beso_de_la_muerte.html",
    playUrl: "arte/beso_de_la_muerte.html"
  },
  {
    id: 27,
    title: "La maja vestida",
    category: "Pintura",
    collection: "Arte",
    mode: "Goya",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Goya",
    movements: ["Rococó", "Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Goya punto por punto: la maja recostada, su pareja con la Maja desnuda y el misterio de su encargo.",
    longDescription:
      "Una página interactiva con las claves de «La maja vestida» (hacia 1800-1807), entre el rococó tardío y el prerromanticismo.",
    gradient: "linear-gradient(135deg, rgba(150,90,100,0.92), rgba(220,190,120,0.85))",
    image: "assets/art-covers/goya_maja_vestida.jpg",
    previewUrl: "arte/goya_maja_vestida.html",
    playUrl: "arte/goya_maja_vestida.html"
  },
  {
    id: 28,
    title: "Psique reanimada por el beso del Amor",
    category: "Escultura",
    collection: "Arte",
    mode: "Canova",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Canova",
    movements: ["Neoclasicismo", "Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora la escultura de Antonio Canova punto por punto: el mito de Eros y Psique, la composición y la elegancia del mármol.",
    longDescription:
      "Una página interactiva con las claves de «Psique reanimada por el beso del Amor» (1787-1793), obra cumbre del neoclasicismo con sensibilidad prerromántica.",
    gradient: "linear-gradient(135deg, rgba(200,200,205,0.9), rgba(120,130,160,0.85))",
    image: "assets/art-covers/canova_eros_psique.jpg",
    previewUrl: "arte/canova_eros_psique.html",
    playUrl: "arte/canova_eros_psique.html"
  },
  {
    id: 29,
    title: "Retrato de Madame Buron",
    category: "Pintura",
    collection: "Arte",
    mode: "David",
    duration: "Interactivo",
    isArt: true,
    subcollection: "David",
    movements: ["Rococó"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Jacques-Louis David punto por punto: el retrato de su tía, el tono amable del rococó y el David todavía joven.",
    longDescription:
      "Una página interactiva con las claves del «Retrato de Madame Buron» (1769), obra de juventud de David, anterior a su giro neoclásico.",
    gradient: "linear-gradient(135deg, rgba(150,180,170,0.9), rgba(230,200,170,0.85))",
    image: "assets/art-covers/david_madame_buron.jpg",
    previewUrl: "arte/david_madame_buron.html",
    playUrl: "arte/david_madame_buron.html"
  },
  {
    id: 30,
    title: "Satán desciende hacia la Tierra",
    category: "Grabado",
    collection: "Arte",
    mode: "Doré",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Doré",
    movements: ["Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora la ilustración de Gustave Doré para «El paraíso perdido» de Milton punto por punto: la caída, lo sublime y el Infierno romántico.",
    longDescription:
      "Una página interactiva con las claves del grabado de Doré (1866) para «El paraíso perdido», que definió cómo imaginamos el Infierno y a Satán.",
    gradient: "linear-gradient(135deg, rgba(20,20,30,0.95), rgba(200,160,80,0.8))",
    image: "assets/art-covers/dore_paraiso_perdido.jpg",
    previewUrl: "arte/dore_paraiso_perdido.html",
    playUrl: "arte/dore_paraiso_perdido.html"
  },
  {
    id: 31,
    title: "La Libertad guiando al pueblo",
    category: "Pintura",
    collection: "Arte",
    alsoIn: ["Revolución Francesa"],
    mode: "Delacroix",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Delacroix",
    movements: ["Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Eugène Delacroix punto por punto: Marianne, las barricadas y la revolución de julio de 1830.",
    longDescription:
      "Una página interactiva con las claves de «La Libertad guiando al pueblo» (1830), manifiesto del romanticismo y origen de Marianne.",
    gradient: "linear-gradient(135deg, rgba(40,60,120,0.92), rgba(200,50,50,0.85))",
    image: "assets/art-covers/delacroix_libertad.jpg",
    previewUrl: "arte/delacroix_libertad.html",
    playUrl: "arte/delacroix_libertad.html"
  },
  {
    id: 32,
    title: "El beso",
    category: "Pintura",
    collection: "Arte",
    mode: "Hayez",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Hayez",
    movements: ["Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Francesco Hayez punto por punto: el beso, los detalles y el mensaje patriótico del Risorgimento italiano.",
    longDescription:
      "Una página interactiva con las claves de «El beso» (1859), icono del romanticismo y de la unificación italiana.",
    gradient: "linear-gradient(135deg, rgba(40,70,120,0.92), rgba(190,90,80,0.85))",
    image: "assets/art-covers/hayez_beso.jpg",
    previewUrl: "arte/hayez_beso.html",
    playUrl: "arte/hayez_beso.html"
  },
  {
    id: 33,
    title: "Stańczyk",
    category: "Pintura",
    collection: "Arte",
    mode: "Matejko",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Matejko",
    movements: ["Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Jan Matejko punto por punto: el bufón de la corte, la reflexión melancólica y la Polonia sin Estado.",
    longDescription:
      "Una página interactiva con las claves de «Stańczyk» (1862), pintura romántica con un mensaje nacional de reflexión melancólica.",
    gradient: "linear-gradient(135deg, rgba(120,30,40,0.92), rgba(60,50,60,0.85))",
    image: "assets/art-covers/matejko_stanczyk.jpg",
    previewUrl: "arte/matejko_stanczyk.html",
    playUrl: "arte/matejko_stanczyk.html"
  },
  {
    id: 34,
    title: "El ángel caído",
    category: "Pintura",
    collection: "Arte",
    mode: "Cabanel",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Cabanel",
    movements: ["Academicismo", "Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Alexandre Cabanel punto por punto: el ángel rebelde, el desnudo académico y el gusto romántico por Satán.",
    longDescription:
      "Una página interactiva con las claves de «El ángel caído» (1847), obra académica con el gusto romántico por la figura de Satán.",
    gradient: "linear-gradient(135deg, rgba(30,40,80,0.92), rgba(200,120,60,0.85))",
    image: "assets/art-covers/cabanel_angel_caido.jpg",
    previewUrl: "arte/cabanel_angel_caido.html",
    playUrl: "arte/cabanel_angel_caido.html"
  },
  {
    id: 35,
    title: "Dos viejos comiendo sopa",
    category: "Pintura",
    collection: "Arte",
    mode: "Goya",
    duration: "Interactivo",
    isArt: true,
    subcollection: "Goya",
    movements: ["Romanticismo"],
    actionLabel: { es: "Ver", en: "View" },
    description:
      "Explora el cuadro de Goya punto por punto: la vejez, la muerte y el mundo de pesadilla de las Pinturas negras.",
    longDescription:
      "Una página interactiva con las claves de «Dos viejos comiendo sopa», una de las Pinturas negras de Goya, precursora del expresionismo.",
    gradient: "linear-gradient(135deg, rgba(20,18,16,0.95), rgba(150,130,90,0.85))",
    image: "assets/art-covers/goya_dos_viejos_sopa.jpg",
    previewUrl: "arte/goya_dos_viejos_sopa.html",
    playUrl: "arte/goya_dos_viejos_sopa.html"
  }
];

// Cada juego pertenece a su colección principal y, opcionalmente, a otras (alsoIn).
games.forEach((game) => {
  game.collections = [game.collection, ...(game.alsoIn || [])];
});

const translations = {
  es: { nav: ["Catálogo", "Destacados", "Contacto", "Cuenta atrás", "Arte"], eyebrow: "Juegos para aprender y jugar", heroTitle: "Tu galería de juegos online con historia, estrategia y cultura.", heroText: "Aquí tienes una colección de minijuegos y experiencias interactivas pensadas para divertirte mientras aprendes. Explora por colección, busca por nombre y prueba cualquiera en segundos.", explore: "Explorar juegos", games: "Juegos", categories: "Colecciones", collection: "Colección", curated: "Curada", featured: "Portada", title: "Título", catalog: "Colecciones", discover: "Descubre tus próximos juegos", search: "Buscar por nombre o colección", all: "Todas", contactTitle: "Sugerencias privadas", idea: "¿Tienes una idea?", suggestions: "¡Sugerencias!", send: "Enviar sugerencia", play: "Jugar", language: "Cambiar idioma", suggestionPlaceholder: "Escribe tu sugerencia aquí...", suggestionSubject: "Sugerencia para Piscina de juegos", extraTitle: "Días lectivos y vacaciones — Curso 2026/27", extraText: "Un vistazo rápido a lo que queda de curso en el calendario de la Comunidad de Madrid.", extraNextBreakLabel: "días lectivos hasta el próximo puente o vacaciones", extraChristmasLabel: "días lectivos hasta Navidad", extraEasterLabel: "días lectivos hasta Semana Santa", extraCalendarButton: "Ver calendario completo" },
  en: { nav: ["Catalog", "Featured", "Contact", "Countdown", "Art"], eyebrow: "Games to learn and play", heroTitle: "Your online game gallery for history, strategy, and culture.", heroText: "Explore a collection of mini-games and interactive experiences designed to entertain while you learn. Browse by collection, search by name, and try any game in seconds.", explore: "Explore games", games: "Games", categories: "Collections", collection: "Collection", curated: "Curated", featured: "Cover", title: "Title", catalog: "Collections", discover: "Discover your next games", search: "Search by name or collection", all: "All", contactTitle: "Private suggestions", idea: "Have an idea?", suggestions: "Suggestions!", send: "Send suggestion", play: "Play", language: "Change language", suggestionPlaceholder: "Write your suggestion here...", suggestionSubject: "Suggestion for Game pool", extraTitle: "School days & holidays — 2026/27 school year", extraText: "A quick look at what's left this year in the Community of Madrid calendar (the detailed countdown and calendar stay in Spanish).", extraNextBreakLabel: "school days until the next long break", extraChristmasLabel: "school days until Christmas", extraEasterLabel: "school days until Easter break", extraCalendarButton: "View full calendar" }
};

const gameTranslations = {
  en: {
    1: { title: "1789: ROAD TO THE BASTILLE", description: "An interactive story about the French Revolution where every decision changes the character's path.", longDescription: "An historical interactive story in which you experience the French Revolution as a citizen facing meaningful choices." },
    2: { title: "A Dialogue with Socrates", description: "A philosophical dialogue with Socrates inviting you to reflect on truth, doubt, and reason.", longDescription: "An educational experience of questions, dialogue, and critical thinking inspired by Greek philosophy." },
    3: { title: "Industrial Revolution", description: "Place the machine correctly and answer key questions about European industrialization.", longDescription: "A train-and-station game mixing speed, observation, and historical knowledge." },
    4: { title: "Napoleon vs Wellington", description: "An arcade quiz duel with scores, turns, and visual energy inspired by military history.", longDescription: "Challenge your rival with questions about Napoleon, Waterloo, and the French Empire." },
    5: { title: "Russian Revolution: Penalty Shootout", description: "Answer historical questions for the Bolsheviks and Mensheviks in an exciting penalty shootout.", longDescription: "A history and quick-thinking mini-game where correct answers score goals for your team." },
    6: { title: "Boston Tea Party 1773", description: "Relive the 1773 Boston Tea Party and discover the causes and consequences of this key episode of American independence.", longDescription: "A history game about the Boston Tea Party, one of the sparks of the American Revolution against British rule." },
    7: { title: "What Is It Made From? — Primary Sector", description: "Discover which raw material each product comes from and learn about the primary sector and where everyday things come from.", longDescription: "An educational game about geography and the primary sector: farming, livestock, fishing, and mining, and how those resources become products." },
    8: { title: "The Trenches Messenger", description: "A World War I campaign where you carry messages between the trenches while dodging danger, without fighting.", longDescription: "A level-based narrative game set in World War I (1914-1918): you relive key moments of the conflict, from the assassination in Sarajevo to the armistice, moving and making decisions instead of fighting." },
    9: { title: "The Secret of the Enlightenment", description: "A point-and-click adventure where you uncover the ideas of the Enlightenment: Kant, Locke, and the power of reason.", longDescription: "A point-and-click adventure based on real notes about the Enlightenment, where you explore, talk, and make choices to unravel the secret of the Age of Reason." },
    10: { title: "The Third of May 1808", description: "Explore Goya's painting point by point: the details, the symbols and the historical context of the executions of 3 May (the page itself is in Spanish).", longDescription: "An interactive page with the keys to Goya's painting of the executions of 3 May 1808." },
    11: { title: "The Second of May 1808", description: "Explore Goya's painting point by point: the details, the symbols and the historical context of the fight against the Mamluks at the Puerta del Sol (the page itself is in Spanish).", longDescription: "An interactive page with the keys to Goya's painting of the uprising of 2 May 1808 in Madrid." },
    12: { title: "The Sleep of Reason Produces Monsters", description: "Explore Goya's etching point by point: the nocturnal animals, the symbols and the meaning of the sleeping reason (the page itself is in Spanish).", longDescription: "An interactive page with the keys to the etching 'The Sleep of Reason Produces Monsters', from Goya's Caprichos." },
    13: { title: "Napoleon Crossing the Alps", description: "Explore Jacques-Louis David's painting point by point: the details, the symbols and the image Napoleon wanted to project of himself (the page itself is in Spanish).", longDescription: "An interactive page with the keys to David's painting of Napoleon crossing the Alps." },
    14: { title: "The Tennis Court Oath", description: "Explore Jacques-Louis David's painting point by point: the details, the symbols and the moment the deputies swore not to separate until France had a constitution (the page itself is in Spanish).", longDescription: "An interactive page with the keys to David's painting of the Tennis Court Oath (1789), one of the first acts of the French Revolution." },
    15: { title: "The Death of Marat", description: "Explore Jacques-Louis David's painting point by point: the details, the symbols and the murder of the revolutionary leader Jean-Paul Marat in his bath (the page itself is in Spanish).", longDescription: "An interactive page with the keys to David's painting of the murder of Marat (1793), a landmark of politically committed Neoclassicism." },
    16: { title: "The Storming of the Bastille", description: "Explore Jean-Pierre Houël's watercolour point by point: the details, the symbols and the image of the Bastille in flames on 14 July 1789 (the page itself is in Spanish).", longDescription: "An interactive page with the keys to Houël's watercolour of the storming of the Bastille (1789), an almost journalistic view between Neoclassicism and pre-Romantic sensibility." },
    17: { title: "Wanderer above the Sea of Fog", description: "Explore Caspar David Friedrich's painting point by point: the figure seen from behind, the sea of fog and the Romantic idea of the sublime (the page itself is in Spanish).", longDescription: "An interactive page with the keys to Friedrich's painting, the best-known image of German Romanticism." },
    18: { title: "Saturn Devouring His Son", description: "Explore Goya's painting point by point: the myth, the violence and the nightmarish world of the Black Paintings (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'Saturn Devouring His Son', one of Goya's Black Paintings and a forerunner of Expressionism." },
    19: { title: "The Oath of the Horatii", description: "Explore Jacques-Louis David's painting point by point: the details, the symbols and the ideal of sacrifice for the homeland that foreshadowed the Revolution (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'The Oath of the Horatii' (1784), the manifesto work of Neoclassicism and a model for revolutionary painting." },
    20: { title: "The Veiled Christ", description: "Explore Giuseppe Sanmartino's sculpture point by point: the marble veil, the recumbent body and the alchemical legend of the Sansevero Chapel (the page itself is in Spanish).", longDescription: "An interactive page with the keys to the 'Veiled Christ' (1753), a late Baroque work of astonishing technical virtuosity." },
    21: { title: "The Coronation of Napoleon", description: "Explore Jacques-Louis David's painting point by point: the details, the symbols and the passage from Republic to Empire (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'The Coronation of Napoleon' (1805-1807), Neoclassicism turned into the official style of the Empire." },
    22: { title: "Napoleon in His Study at the Tuileries", description: "Explore Jacques-Louis David's painting point by point: the details, the symbols and the portrait of Napoleon as lawgiver, with the Civil Code on the table (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'Napoleon in His Study at the Tuileries' (1812), a Neoclassical Empire-style portrait balancing realism and idealization." },
    23: { title: "Washington Crossing the Delaware", description: "Explore Emanuel Leutze's painting point by point: the details, the symbols and the myth of the Delaware crossing in the American War of Independence (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'Washington Crossing the Delaware' (1851), a Romantic history painting, more myth than document." },
    24: { title: "The School of Athens", description: "Explore Raphael's fresco point by point: the philosophers of Antiquity, the perspective and the Renaissance ideal of harmony (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'The School of Athens' (1509-1511), a landmark of the High Renaissance and a model for later classicism." },
    25: { title: "The Death of Socrates", description: "Explore Jacques-Louis David's painting point by point: the details, the symbols and the serene death of Socrates, hero of reason (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'The Death of Socrates' (1787), a key work of moralizing Neoclassicism, painted at the height of the Enlightenment and on the eve of the Revolution." },
    26: { title: "The Kiss of Death", description: "Explore the funerary sculpture in Poblenou Cemetery point by point: love, death and their symbolism (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'The Kiss of Death' (1930), attributed to Jaume Barba, one of the best-known funerary sculptures in Europe." },
    27: { title: "The Clothed Maja", description: "Explore Goya's painting point by point: the reclining maja, her pairing with the Naked Maja and the mystery of its commission (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'The Clothed Maja' (c. 1800-1807), between late Rococo and pre-Romanticism." },
    28: { title: "Psyche Revived by Cupid's Kiss", description: "Explore Antonio Canova's sculpture point by point: the myth of Cupid and Psyche, the composition and the elegance of the marble (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'Psyche Revived by Cupid's Kiss' (1787-1793), a masterpiece of Neoclassicism with pre-Romantic sensibility." },
    29: { title: "Portrait of Madame Buron", description: "Explore Jacques-Louis David's painting point by point: the portrait of his aunt, the gentle Rococo tone and the young David (the page itself is in Spanish).", longDescription: "An interactive page with the keys to the 'Portrait of Madame Buron' (1769), an early work by David, before his Neoclassical turn." },
    30: { title: "Satan Descends to Earth", description: "Explore Gustave Doré's illustration for Milton's Paradise Lost point by point: the fall, the sublime and the Romantic Hell (the page itself is in Spanish).", longDescription: "An interactive page with the keys to Doré's engraving (1866) for Paradise Lost, which defined how we imagine Hell and Satan." },
    31: { title: "Liberty Leading the People", description: "Explore Eugène Delacroix's painting point by point: Marianne, the barricades and the July Revolution of 1830 (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'Liberty Leading the People' (1830), a manifesto of Romanticism and the origin of Marianne." },
    32: { title: "The Kiss", description: "Explore Francesco Hayez's painting point by point: the kiss, the details and the patriotic message of the Italian Risorgimento (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'The Kiss' (1859), an icon of Romanticism and of Italian unification." },
    33: { title: "Stańczyk", description: "Explore Jan Matejko's painting point by point: the court jester, the melancholy reflection and a Poland without a state (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'Stańczyk' (1862), a Romantic painting with a national message of melancholy reflection." },
    34: { title: "The Fallen Angel", description: "Explore Alexandre Cabanel's painting point by point: the rebel angel, the academic nude and the Romantic taste for Satan (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'The Fallen Angel' (1847), an academic work with the Romantic taste for the figure of Satan." },
    35: { title: "Two Old Men Eating Soup", description: "Explore Goya's painting point by point: old age, death and the nightmarish world of the Black Paintings (the page itself is in Spanish).", longDescription: "An interactive page with the keys to 'Two Old Men Eating Soup', one of Goya's Black Paintings and a forerunner of Expressionism." }
  }
};

function gameText(game, field) {
  return gameTranslations[language]?.[game.id]?.[field] || game[field];
}

const state = {
  category: "",
  subcategory: "",
  movement: "",
  query: "",
  selectedGame: null
};

// Colecciones con un segundo nivel (autores): al elegirlas aparece otro desplegable.
const SUBFILTERED_COLLECTIONS = ["Arte"];
function hasSubfilter() {
  return SUBFILTERED_COLLECTIONS.includes(state.category);
}

const gamesGrid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const subFilterSelect = document.getElementById("subFilterSelect");
const movementSelect = document.getElementById("movementSelect");
const resultsCount = document.getElementById("resultsCount");
const featuredTitle = document.getElementById("featuredTitle");
const featuredCategory = document.getElementById("featuredCategory");
const featuredRating = document.getElementById("featuredRating");
const featuredDescription = document.getElementById("featuredDescription");
const featuredArt = document.getElementById("featuredArt");

const statsGames = document.getElementById("statGames");
const statsCategories = document.getElementById("statCategories");
const languageToggle = document.getElementById("languageToggle");
let language = localStorage.getItem("piscina-language") || "es";

function renderFeaturedGame() {
  const featured = games[0];
  featuredTitle.textContent = gameText(featured, "title");
  featuredCategory.textContent = featured.category;
  featuredDescription.textContent = gameText(featured, "description");
  featuredArt.style.backgroundImage = `url('${featured.image}')`;
  featuredArt.style.backgroundSize = "cover";
  featuredArt.style.backgroundPosition = "center";
  featuredArt.style.backgroundRepeat = "no-repeat";
}

// Segundo nivel de Arte: autor y/o movimiento (si no hay ninguno elegido, solo cuenta la búsqueda).
function matchesSubfilters(game, query) {
  if (!hasSubfilter()) return true;
  if (!state.subcategory && !state.movement) return Boolean(query);
  const authorOk = !state.subcategory || state.subcategory === "Todos" || game.subcollection === state.subcategory;
  const movementOk = !state.movement || state.movement === "Todos" || (game.movements || []).includes(state.movement);
  return authorOk && movementOk;
}

function movementName(movement) {
  const names = language === "en" ? { "Academicismo": "Academicism", "Barroco": "Baroque", "Modernismo": "Modernism", "Neoclasicismo": "Neoclassicism", "Renacimiento": "Renaissance", "Rococó": "Rococo", "Romanticismo": "Romanticism", "Simbolismo": "Symbolism" } : {};
  return names[movement] || movement;
}

function getVisibleGames() {
  const query = state.query.trim().toLowerCase();
  return games.filter((game) => {
    // Sin colección elegida (y sin búsqueda) no se muestra nada.
    const matchesCategory = !state.category
      ? Boolean(query)
      : (state.category === "Todos" || game.collections.includes(state.category)) &&
        matchesSubfilters(game, query);
    const matchesSearch =
      !query ||
      gameText(game, "title").toLowerCase().includes(query) ||
      game.category.toLowerCase().includes(query) ||
      gameText(game, "description").toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });
}

function collectionNames() {
  return language === "en" ? {
    "Revolución Francesa": "French Revolution",
    "Revolución Industrial": "Industrial Revolution",
    "Filosofía": "Philosophy",
    "Revolución Rusa": "Russian Revolution",
    "Revolución Americana": "American Revolution",
    "Geografía": "Geography",
    "Primera Guerra Mundial": "World War I",
    "Ilustración": "Enlightenment",
    "Arte": "Art"
  } : {};
}

// Subtítulo de una colección cuando todos sus juegos visibles comparten subcolección.
function subcollectionTitle(allGames) {
  // En colecciones mixtas (cuadros + juegos) el subtítulo solo depende de los juegos.
  const collectionGames = allGames.some((game) => !game.isArt) ? allGames.filter((game) => !game.isArt) : allGames;
  const subs = [...new Set(collectionGames.map((game) => game.subcollection).filter(Boolean))];
  if (subs.length !== 1 || collectionGames.some((game) => !game.subcollection)) return "";
  const names = language === "en" ? { "Filosofía antigua": "Ancient Philosophy" } : {};
  return `<p class="subcollection-title">${names[subs[0]] || subs[0]}</p>`;
}

function gameCardHtml(game) {
  return `
        <article class="game-card">
          <div class="game-visual${game.isArt ? " art-visual" : ""}" style="${game.isArt ? `--art-image: url('${game.image}');` : `background-image: url('${game.image}'); background-size: cover; background-position: center; background-repeat: no-repeat;`}"></div>
          <div class="game-top-row">
            <h3>${gameText(game, "title")}</h3>
            <span class="game-badge">${game.category}</span>
          </div>
          <div class="game-meta">
            <span>${game.mode}</span>${game.movements ? `<span>· ${game.movements.map(movementName).join(" / ")}</span>` : ""}
          </div>
          <p>${gameText(game, "description")}</p>
          <div class="game-bottom-row">
            <span class="game-badge">${game.duration}</span>
            <div class="game-actions">
              <button class="play-button" type="button" data-action="play" data-id="${game.id}">${game.actionLabel ? game.actionLabel[language] : (language === "en" ? "Play" : "Jugar")}</button>
            </div>
          </div>
        </article>
      `;
}

// Contenido de una colección: si mezcla cuadros y juegos, se divide en dos secciones (cuadros primero).
function blockContent(collectionGames) {
  const artworks = collectionGames.filter((game) => game.isArt);
  const plainGames = collectionGames.filter((game) => !game.isArt);
  if (!artworks.length || !plainGames.length) return collectionGames.map(gameCardHtml).join("");
  const artTitle = artworks.every((game) => game.category !== "Escultura")
    ? (language === "en" ? "Paintings" : "Cuadros")
    : (language === "en" ? "Artworks" : "Obras de arte");
  const gamesTitle = language === "en" ? "Games" : "Juegos";
  return `
      <h4 class="block-section-title">${artTitle}</h4>
      ${artworks.map(gameCardHtml).join("")}
      <h4 class="block-section-title">${gamesTitle}</h4>
      ${plainGames.map(gameCardHtml).join("")}`;
}

function renderGames() {
  const visibleGames = getVisibleGames();
  // "cuadros" si todo es pintura, "obras" si hay otras artes (escultura), "juegos" si no hay arte, "elementos" si se mezclan.
  const artCount = visibleGames.filter((game) => game.isArt).length;
  const allPaintings = visibleGames.every((game) => game.isArt && game.category !== "Escultura");
  const itemWords = artCount === visibleGames.length && artCount > 0
    ? (allPaintings
      ? (language === "en" ? ["painting", "paintings"] : ["cuadro", "cuadros"])
      : (language === "en" ? ["work", "works"] : ["obra", "obras"]))
    : artCount === 0
      ? (language === "en" ? ["game", "games"] : ["juego", "juegos"])
      : (language === "en" ? ["item", "items"] : ["elemento", "elementos"]);
  resultsCount.textContent = `${visibleGames.length} ${itemWords[visibleGames.length === 1 ? 0 : 1]}`;
  // Juegos de una colección en el bloque que se pinta (con una colección elegida, también los que la tienen como secundaria).
  const blockGames = (collection) => visibleGames.filter((game) =>
    state.category && state.category !== "Todos" ? game.collections.includes(collection) : game.collection === collection);
  statsGames.textContent = String(games.filter((game) => !game.isArt).length);
  statsCategories.textContent = String(new Set(games.map((game) => game.collection)).size);

  if (!state.category && !state.query.trim()) {
    resultsCount.textContent = "";
    gamesGrid.innerHTML = `
      <div class="empty-state">
        <h3>${language === "en" ? "Choose a collection" : "Elige una colección"}</h3>
        <p>${language === "en" ? "Pick a collection (or “All”) in the menu above to see its games." : "Elige una colección (o “Todas”) en el desplegable de arriba para ver sus juegos."}</p>
      </div>
    `;
    return;
  }

  if (hasSubfilter() && !state.subcategory && !state.movement && !state.query.trim()) {
    resultsCount.textContent = "";
    gamesGrid.innerHTML = `
      <div class="empty-state">
        <h3>${language === "en" ? "Choose an artist or a movement" : "Elige un autor o un movimiento"}</h3>
        <p>${language === "en" ? "Pick an artist or an art movement (or “All”) in the menus above to see the works." : "Elige un autor o un movimiento artístico (o “Todos”) en los desplegables de arriba para ver las obras."}</p>
      </div>
    `;
    return;
  }

  if (!visibleGames.length) {
    gamesGrid.innerHTML = `
      <div class="empty-state">
        <h3>${hasSubfilter() ? (language === "en" ? "No works found" : "No encontramos obras") : (language === "en" ? "No games found" : "No encontramos juegos")}</h3>
        <p>${language === "en" ? "Try another search or change the category." : "Prueba con otra búsqueda o cambia la categoría."}</p>
      </div>
    `;
    return;
  }

  const collectionLabels = (state.category && state.category !== "Todos" ? [state.category] : [...new Set(visibleGames.map((game) => game.collection))])
    .sort((first, second) => first.localeCompare(second, "es"));
  const names = collectionNames();
  gamesGrid.innerHTML = collectionLabels.map((collection) => `
    <section class="collection-block">
      <h3 class="collection-title">${names[collection] || collection}</h3>
      ${subcollectionTitle(blockGames(collection))}
      ${blockContent(blockGames(collection))}
    </section>
  `).join("");
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderGames();
});

// Desplegable de colecciones en orden alfabético (según el idioma activo).
function buildFilterSelect() {
  const collections = [...new Set(games.flatMap((game) => game.collections))]
    .map((collection) => ({ value: collection, label: collectionNames()[collection] || collection }))
    .sort((first, second) => first.label.localeCompare(second.label, language));
  const placeholder = { value: "", label: language === "en" ? "Choose a collection…" : "Elige una colección…" };
  filterSelect.innerHTML = [placeholder, { value: "Todos", label: translations[language].all }, ...collections]
    .map((option) => `<option value="${option.value}">${option.label}</option>`)
    .join("");
  filterSelect.value = state.category;
  buildSubFilterSelect();
}

// Segundo desplegable (autores, en orden alfabético): solo visible en colecciones con subnivel.
function buildSubFilterSelect() {
  subFilterSelect.hidden = !hasSubfilter();
  movementSelect.hidden = !hasSubfilter();
  if (!hasSubfilter()) return;
  const movements = [...new Set(games
    .filter((game) => game.collections.includes(state.category) && game.movements)
    .flatMap((game) => game.movements))]
    .sort((first, second) => movementName(first).localeCompare(movementName(second), language));
  const movementPlaceholder = { value: "", label: language === "en" ? "Choose a movement…" : "Elige un movimiento…" };
  const allMovements = { value: "Todos", label: language === "en" ? "All movements" : "Todos los movimientos" };
  movementSelect.innerHTML = [movementPlaceholder, allMovements, ...movements.map((movement) => ({ value: movement, label: movementName(movement) }))]
    .map((option) => `<option value="${option.value}">${option.label}</option>`)
    .join("");
  movementSelect.value = state.movement;
  const authors = [...new Set(games
    .filter((game) => game.collections.includes(state.category) && game.subcollection)
    .map((game) => game.subcollection))]
    .sort((first, second) => first.localeCompare(second, language));
  const placeholder = { value: "", label: language === "en" ? "Choose an artist…" : "Elige un autor…" };
  const all = { value: "Todos", label: language === "en" ? "All artists" : "Todos los autores" };
  subFilterSelect.innerHTML = [placeholder, all, ...authors.map((author) => ({ value: author, label: author }))]
    .map((option) => `<option value="${option.value}">${option.label}</option>`)
    .join("");
  subFilterSelect.value = state.subcategory;
}

filterSelect.addEventListener("change", () => {
  state.category = filterSelect.value;
  state.subcategory = "";
  state.movement = "";
  buildSubFilterSelect();
  renderGames();
});

subFilterSelect.addEventListener("change", () => {
  state.subcategory = subFilterSelect.value;
  renderGames();
});

movementSelect.addEventListener("change", () => {
  state.movement = movementSelect.value;
  renderGames();
});

// Enlaces del menú que activan un filtro del catálogo (p. ej. "Arte").
document.querySelectorAll("a[data-filter-collection]").forEach((link) => {
  link.addEventListener("click", () => {
    state.category = link.dataset.filterCollection;
    state.subcategory = "";
    state.movement = "";
    filterSelect.value = state.category;
    buildSubFilterSelect();
    renderGames();
  });
});

gamesGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const selectedGame = games.find((game) => game.id === Number(button.dataset.id));
  if (!selectedGame) return;

  if (button.dataset.action === "play") {
    window.open(selectedGame.playUrl, "_blank", "noopener,noreferrer");
  }
});

function applyLanguage() {
  const t = translations[language];
  document.documentElement.lang = language;
  document.title = language === "en" ? "Game pool | Online gallery" : "Piscina de juegos | Galería online";
  document.querySelectorAll(".main-nav a").forEach((link, index) => { link.textContent = t.nav[index]; });
  document.querySelector(".hero h1").textContent = t.heroTitle;
  document.querySelector(".hero-copy > p").textContent = t.heroText;
  document.querySelector(".hero-actions .primary-button").textContent = t.explore;
  document.querySelector(".stats-list li:nth-child(1) span").textContent = t.games;
  document.querySelector(".stats-list li:nth-child(2) span").textContent = t.categories;
  document.querySelector(".card-badge").textContent = t.featured;
  document.querySelector(".catalog .eyebrow").textContent = t.catalog;
  document.querySelector(".catalog h2").textContent = t.discover;
  searchInput.placeholder = t.search;
  buildFilterSelect();
  document.querySelector(".contact h2").textContent = t.contactTitle;
  document.querySelector(".contact-label").textContent = t.idea;
  document.querySelector(".contact-card h3").textContent = t.suggestions;
  document.querySelector(".contact-card .primary-button").textContent = t.send;
  document.getElementById("suggestionText").placeholder = t.suggestionPlaceholder;
  document.querySelector(".extra-section h2").textContent = t.extraTitle;
  document.querySelector(".extra-text").textContent = t.extraText;
  document.getElementById("extraNextBreakLabel").textContent = t.extraNextBreakLabel;
  document.getElementById("extraChristmasLabel").textContent = t.extraChristmasLabel;
  document.getElementById("extraEasterLabel").textContent = t.extraEasterLabel;
  document.getElementById("toggleCalendarBtn").textContent = t.extraCalendarButton;
  languageToggle.innerHTML = language === "es" ? "<span aria-hidden=\"true\">🇬🇧</span><span>EN</span>" : "<span aria-hidden=\"true\">🇪🇸</span><span>ES</span>";
  renderFeaturedGame();
  renderGames();
}

languageToggle.addEventListener("click", () => {
  language = language === "es" ? "en" : "es";
  localStorage.setItem("piscina-language", language);
  applyLanguage();
});

document.getElementById("suggestionSubmit").addEventListener("click", async () => {
  const suggestion = document.getElementById("suggestionText").value.trim();
  const suggestionInput = document.getElementById("suggestionText");
  const suggestionButton = document.getElementById("suggestionSubmit");
  const suggestionStatus = document.getElementById("suggestionStatus");
  if (!suggestion) {
    suggestionStatus.textContent = language === "en" ? "Write a suggestion first." : "Escribe primero una sugerencia.";
    suggestionInput.focus();
    return;
  }

  suggestionButton.disabled = true;
  suggestionStatus.textContent = language === "en" ? "Sending..." : "Enviando...";
  try {
    const response = await fetch("https://formspree.io/f/mdeozerk", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new URLSearchParams({
        message: suggestion,
        _subject: translations[language].suggestionSubject,
      }),
    });
    if (!response.ok) throw new Error("Formspree request failed");
    suggestionInput.value = "";
    suggestionStatus.textContent = language === "en" ? "Thanks, your suggestion was sent." : "Gracias, tu sugerencia se ha enviado.";
  } catch (error) {
    suggestionStatus.textContent = language === "en" ? "Could not send the suggestion. Try again." : "No se ha podido enviar la sugerencia. Inténtalo de nuevo.";
  } finally {
    suggestionButton.disabled = false;
  }
});

// --- Días lectivos hasta las próximas vacaciones ---
// Misma configuración de calendario que extras/cuenta_atras_curso.html;
// si el calendario oficial cambia, hay que actualizar ambos archivos.
const SCHOOL_YEAR_START = new Date("2026-09-07T00:00:00");
const SCHOOL_YEAR_END = new Date("2027-06-18T23:59:59");
const SCHOOL_HOLIDAYS = new Set([
  "2026-10-12", "2026-11-02", "2026-12-07", "2026-12-08",
  "2027-02-12", "2027-02-15", "2027-05-03",
]);
const CHRISTMAS_BREAK_START = new Date("2026-12-23T00:00:00");
const EASTER_BREAK_START = new Date("2027-03-19T00:00:00");

function schoolIsoDate(date) {
  // Fecha local en formato AAAA-MM-DD (no usar toISOString: convierte a UTC
  // y desplaza un día hacia atrás en la zona horaria de España).
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function schoolIsNonTeachingDay(date) {
  const weekday = date.getDay();
  if (weekday === 0 || weekday === 6) return true;
  const iso = schoolIsoDate(date);
  if (SCHOOL_HOLIDAYS.has(iso)) return true;
  if (iso >= "2026-12-23" && iso <= "2027-01-10") return true;
  if (iso >= "2027-03-19" && iso <= "2027-03-29") return true;
  return false;
}

function schoolIsTeachingDay(date) {
  return date >= SCHOOL_YEAR_START && date <= SCHOOL_YEAR_END && !schoolIsNonTeachingDay(date);
}

function schoolEachDay(start, end, callback) {
  const cursor = new Date(start);
  cursor.setHours(0, 0, 0, 0);
  const last = new Date(end);
  last.setHours(0, 0, 0, 0);
  while (cursor <= last) {
    callback(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
}

const schoolTeachingDays = [];
schoolEachDay(SCHOOL_YEAR_START, SCHOOL_YEAR_END, (day) => {
  if (schoolIsTeachingDay(day)) schoolTeachingDays.push(day);
});

function schoolDaysUntil(targetDate, fromDate) {
  return schoolTeachingDays.filter((day) => day >= fromDate && day < targetDate).length;
}

function findNextLongBreakStart(fromDate) {
  // Busca el próximo tramo de más de 2 días seguidos no lectivos (puente o vacaciones),
  // no un simple fin de semana suelto.
  const scanEnd = new Date(SCHOOL_YEAR_END.getTime() + 1000 * 60 * 60 * 24 * 10);
  let runStart = null;
  const cursor = new Date(Math.max(fromDate.getTime(), SCHOOL_YEAR_START.getTime()));
  cursor.setHours(0, 0, 0, 0);
  const last = new Date(scanEnd);
  last.setHours(0, 0, 0, 0);
  while (cursor <= last) {
    if (schoolIsNonTeachingDay(cursor)) {
      if (!runStart) runStart = new Date(cursor);
    } else if (runStart) {
      const runLength = Math.round((cursor - runStart) / (1000 * 60 * 60 * 24));
      if (runLength > 2 && runStart > fromDate) return runStart;
      runStart = null;
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return null;
}

function updateSchoolCountdownStats() {
  const statNextBreak = document.getElementById("statNextBreak");
  const statChristmas = document.getElementById("statChristmas");
  const statEaster = document.getElementById("statEaster");
  if (!statNextBreak || !statChristmas || !statEaster) return;

  // Pasadas las 14:00 se considera que el día lectivo de hoy ya ha terminado:
  // estas cifras pasan a contar desde mañana (misma regla que el countdown).
  const now = new Date();
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  if (now.getHours() >= 14) {
    today.setDate(today.getDate() + 1);
  }

  const nextBreakStart = findNextLongBreakStart(today);
  statNextBreak.textContent = nextBreakStart ? String(schoolDaysUntil(nextBreakStart, today)) : "—";
  statChristmas.textContent = today < CHRISTMAS_BREAK_START ? String(schoolDaysUntil(CHRISTMAS_BREAK_START, today)) : "🎄";
  statEaster.textContent = today < EASTER_BREAK_START ? String(schoolDaysUntil(EASTER_BREAK_START, today)) : "🐣";
}
updateSchoolCountdownStats();

// --- Panel "Countdown" y calendario completo: ocultos hasta pulsar su botón ---
const cuentaAtrasFrame = document.getElementById("cuentaAtrasFrame");
const countdownPanel = document.getElementById("countdownPanel");
const toggleCountdownBtn = document.getElementById("toggleCountdownBtn");
const calendarPanel = document.getElementById("calendarPanel");
const toggleCalendarBtn = document.getElementById("toggleCalendarBtn");

if (cuentaAtrasFrame) {
  const resizeCuentaAtrasFrame = () => {
    try {
      const frameDoc = cuentaAtrasFrame.contentWindow.document;
      cuentaAtrasFrame.style.height = `${frameDoc.documentElement.scrollHeight}px`;
    } catch (error) {
      // El iframe aún no ha cargado o el acceso está bloqueado; se mantiene el alto de reserva.
    }
  };
  let resizeTimeout;
  cuentaAtrasFrame.addEventListener("load", resizeCuentaAtrasFrame);
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCuentaAtrasFrame, 150);
  });
}

if (toggleCountdownBtn && countdownPanel && cuentaAtrasFrame) {
  toggleCountdownBtn.addEventListener("click", () => {
    const willShow = countdownPanel.hidden;
    countdownPanel.hidden = !willShow;
    toggleCountdownBtn.setAttribute("aria-expanded", String(willShow));
    if (willShow && !cuentaAtrasFrame.getAttribute("src")) {
      cuentaAtrasFrame.src = cuentaAtrasFrame.dataset.src;
    }
  });
}

if (toggleCalendarBtn && calendarPanel) {
  toggleCalendarBtn.addEventListener("click", () => {
    const willShow = calendarPanel.hidden;
    calendarPanel.hidden = !willShow;
    toggleCalendarBtn.setAttribute("aria-expanded", String(willShow));
  });
}

// Enlaces directos al catálogo: index.html?coleccion=Arte&autor=David
const linkParams = new URLSearchParams(window.location.search);
const linkedCollection = linkParams.get("coleccion");
if (linkedCollection && games.some((game) => game.collections.includes(linkedCollection))) {
  state.category = linkedCollection;
  const linkedAuthor = linkParams.get("autor");
  if (hasSubfilter() && games.some((game) => game.collections.includes(linkedCollection) && game.subcollection === linkedAuthor)) {
    state.subcategory = linkedAuthor;
  }
  const linkedMovement = linkParams.get("movimiento");
  if (hasSubfilter() && games.some((game) => game.collections.includes(linkedCollection) && (game.movements || []).includes(linkedMovement))) {
    state.movement = linkedMovement;
  }
}

applyLanguage();
