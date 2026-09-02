const games = [
  {
    id: 1,
    title: "1789: Diario de la Revolución",
    category: "Historia",
    mode: "Narrativo",
    duration: "3 min",
    description:
      "Un relato interactivo sobre la Revolución Francesa en el que cada decisión cambia el rumbo del personaje.",
    longDescription:
      "Un juego de decisiones histórico-literario donde el jugador vive la Revolución Francesa desde la perspectiva de un ciudadano con varias opciones y consecuencias reales.",
    gradient: "linear-gradient(135deg, rgba(124,92,255,0.96), rgba(0,209,255,0.8))",
    image: "assets/game-covers/revol fran.png",
    previewUrl: "games/diario_revolucion_francesa.html",
    playUrl: "games/diario_revolucion_francesa.html"
  },
  {
    id: 2,
    title: "En diálogo con Sócrates",
    category: "Educativo",
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
  }
];

const translations = {
  es: { nav: ["Catálogo", "Destacados", "Contacto"], enter: "Entrar", eyebrow: "Juegos para aprender y jugar", heroTitle: "Tu galería de juegos online con historia, estrategia y cultura.", heroText: "Aquí tienes una colección de minijuegos y experiencias interactivas pensadas para divertirte mientras aprendes. Explora por categoría, busca por nombre y prueba cualquiera en segundos.", explore: "Explorar juegos", games: "Juegos", categories: "Categorías", collection: "Colección", curated: "Curada", featured: "Juego destacado", title: "Título", catalog: "Catálogo", discover: "Descubre tus próximos juegos", search: "Buscar por nombre o categoría", all: "Todos", contactTitle: "Sugerencias privadas", idea: "¿Tienes una idea?", suggestions: "¡Sugerencias!", send: "Enviar sugerencia", details: "Detalles", play: "Jugar", language: "Cambiar idioma", suggestionPlaceholder: "Escribe tu sugerencia aquí...", suggestionSubject: "Sugerencia para Piscina de juegos", suggestionSent: "Se abrirá tu aplicación de correo para enviar la sugerencia." },
  en: { nav: ["Catalog", "Featured", "Contact"], enter: "Sign in", eyebrow: "Games to learn and play", heroTitle: "Your online game gallery for history, strategy, and culture.", heroText: "Explore a collection of mini-games and interactive experiences designed to entertain while you learn. Browse by category, search by name, and try any game in seconds.", explore: "Explore games", games: "Games", categories: "Categories", collection: "Collection", curated: "Curated", featured: "Featured game", title: "Title", catalog: "Catalog", discover: "Discover your next games", search: "Search by name or category", all: "All", contactTitle: "Private suggestions", idea: "Have an idea?", suggestions: "Suggestions!", send: "Send suggestion", details: "Details", play: "Play", language: "Change language", mode: "Mode", duration: "Duration", now: "Play now", suggestionPlaceholder: "Write your suggestion here...", suggestionSubject: "Suggestion for Game pool", suggestionSent: "Your email app will open to send the suggestion." }
};

const gameTranslations = {
  en: {
    1: { title: "1789: Diary of the Revolution", description: "An interactive story about the French Revolution where every decision changes the character's path.", longDescription: "An historical interactive story in which you experience the French Revolution as a citizen facing meaningful choices." },
    2: { title: "A Dialogue with Socrates", description: "A philosophical dialogue with Socrates inviting you to reflect on truth, doubt, and reason.", longDescription: "An educational experience of questions, dialogue, and critical thinking inspired by Greek philosophy." },
    3: { title: "Industrial Revolution", description: "Place the machine correctly and answer key questions about European industrialization.", longDescription: "A train-and-station game mixing speed, observation, and historical knowledge." },
    4: { title: "Napoleon vs Wellington", description: "An arcade quiz duel with scores, turns, and visual energy inspired by military history.", longDescription: "Challenge your rival with questions about Napoleon, Waterloo, and the French Empire." },
    5: { title: "Russian Revolution: Penalty Shootout", description: "Answer historical questions for the Bolsheviks and Mensheviks in an exciting penalty shootout.", longDescription: "A history and quick-thinking mini-game where correct answers score goals for your team." }
  }
};

function gameText(game, field) {
  return gameTranslations[language]?.[game.id]?.[field] || game[field];
}

const state = {
  category: "Todos",
  query: "",
  selectedGame: null
};

const gamesGrid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("searchInput");
const filterGroup = document.getElementById("filterGroup");
const resultsCount = document.getElementById("resultsCount");
const featuredTitle = document.getElementById("featuredTitle");
const featuredCategory = document.getElementById("featuredCategory");
const featuredRating = document.getElementById("featuredRating");
const featuredDescription = document.getElementById("featuredDescription");
const featuredArt = document.getElementById("featuredArt");

const modal = document.getElementById("gameModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalMode = document.getElementById("modalMode");
const modalDuration = document.getElementById("modalDuration");
const modalPlayLink = document.getElementById("modalPlayLink");
const previewFrame = document.getElementById("previewFrame");

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

function getVisibleGames() {
  const query = state.query.trim().toLowerCase();
  return games.filter((game) => {
    const matchesCategory = state.category === "Todos" || game.category === state.category;
    const matchesSearch =
      !query ||
      gameText(game, "title").toLowerCase().includes(query) ||
      game.category.toLowerCase().includes(query) ||
      gameText(game, "description").toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });
}

function renderGames() {
  const visibleGames = getVisibleGames();
  const gameWord = language === "en" ? "game" : "juego";
  resultsCount.textContent = `${visibleGames.length} ${gameWord}${visibleGames.length === 1 ? "" : "s"}`;
  statsGames.textContent = String(games.length);
  statsCategories.textContent = String(new Set(games.map((game) => game.category)).size);

  if (!visibleGames.length) {
    gamesGrid.innerHTML = `
      <div class="empty-state">
        <h3>${translations[language].noGames || (language === "en" ? "No games found" : "No encontramos juegos")}</h3>
        <p>${language === "en" ? "Try another search or change the category." : "Prueba con otra búsqueda o cambia la categoría."}</p>
      </div>
    `;
    return;
  }

  gamesGrid.innerHTML = visibleGames
    .map(
      (game) => `
        <article class="game-card">
          <div class="game-visual" style="background-image: url('${game.image}'); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
          <div class="game-top-row">
            <h3>${gameText(game, "title")}</h3>
            <span class="game-badge">${game.category}</span>
          </div>
          <div class="game-meta">
            <span>${game.mode}</span>
          </div>
          <p>${gameText(game, "description")}</p>
          <div class="game-bottom-row">
            <span class="game-badge">${game.duration}</span>
            <div class="game-actions">
              <button class="details-button" type="button" data-action="details" data-id="${game.id}">${language === "en" ? "Details" : "Detalles"}</button>
              <button class="play-button" type="button" data-action="play" data-id="${game.id}">${language === "en" ? "Play" : "Jugar"}</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function openModal(game) {
  state.selectedGame = game;
  modalTitle.textContent = gameText(game, "title");
  modalDescription.textContent = gameText(game, "longDescription");
  modalMode.textContent = game.mode;
  modalDuration.textContent = game.duration;
  modalPlayLink.href = game.playUrl;
  previewFrame.src = game.previewUrl;

  modalTags.innerHTML = `
    <span>${game.category}</span>
    <span>${game.mode}</span>
    <span>${game.duration}</span>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  previewFrame.src = "about:blank";
  state.selectedGame = null;
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderGames();
});

filterGroup.addEventListener("click", (event) => {
  const chip = event.target.closest("button[data-category]");
  if (!chip) return;

  state.category = chip.dataset.category;
  filterGroup.querySelectorAll(".filter-chip").forEach((button) => {
    button.classList.toggle("active", button === chip);
  });

  renderGames();
});

gamesGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const selectedGame = games.find((game) => game.id === Number(button.dataset.id));
  if (!selectedGame) return;

  if (button.dataset.action === "details") {
    openModal(selectedGame);
  }

  if (button.dataset.action === "play") {
    window.open(selectedGame.playUrl, "_blank", "noopener,noreferrer");
  }
});

document.querySelector(".close-button").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

function applyLanguage() {
  const t = translations[language];
  document.documentElement.lang = language;
  document.title = language === "en" ? "Game pool | Online gallery" : "Piscina de juegos | Galería online";
  document.querySelectorAll(".main-nav a").forEach((link, index) => { link.textContent = t.nav[index]; });
  document.querySelector(".nav-button").textContent = t.enter;
  document.querySelector(".hero .eyebrow").textContent = t.eyebrow;
  document.querySelector(".hero h1").textContent = t.heroTitle;
  document.querySelector(".hero-copy > p").textContent = t.heroText;
  document.querySelector(".hero-actions .primary-button").textContent = t.explore;
  document.querySelector(".stats-list li:nth-child(1) span").textContent = t.games;
  document.querySelector(".stats-list li:nth-child(2) span").textContent = t.categories;
  document.querySelector(".stats-list li:nth-child(3) strong").textContent = t.collection;
  document.querySelector(".stats-list li:nth-child(3) span").textContent = t.curated;
  document.querySelector(".card-badge").textContent = t.featured;
  document.querySelector(".featured-label").textContent = t.title;
  document.querySelector(".catalog .eyebrow").textContent = t.catalog;
  document.querySelector(".catalog h2").textContent = t.discover;
  searchInput.placeholder = t.search;
  document.querySelector('[data-category="Todos"]').textContent = t.all;
  document.querySelector(".contact h2").textContent = t.contactTitle;
  document.querySelector(".contact-label").textContent = t.idea;
  document.querySelector(".contact-card h3").textContent = t.suggestions;
  document.querySelector(".contact-card .primary-button").textContent = t.send;
  document.getElementById("suggestionText").placeholder = t.suggestionPlaceholder;
  document.querySelector(".modal-kicker").textContent = language === "en" ? "Game" : "Juego";
  document.querySelectorAll(".meta-box span")[0].textContent = t.mode || "Modo";
  document.querySelectorAll(".meta-box span")[1].textContent = t.duration || "Duración";
  modalPlayLink.textContent = t.now || "Jugar ahora";
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

applyLanguage();
