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
  }
];

const translations = {
  es: { nav: ["Catálogo", "Destacados", "Contacto"], eyebrow: "Juegos para aprender y jugar", heroTitle: "Tu galería de juegos online con historia, estrategia y cultura.", heroText: "Aquí tienes una colección de minijuegos y experiencias interactivas pensadas para divertirte mientras aprendes. Explora por colección, busca por nombre y prueba cualquiera en segundos.", explore: "Explorar juegos", games: "Juegos", categories: "Colecciones", collection: "Colección", curated: "Curada", featured: "Portada", title: "Título", catalog: "Colecciones", discover: "Descubre tus próximos juegos", search: "Buscar por nombre o colección", all: "Todas", contactTitle: "Sugerencias privadas", idea: "¿Tienes una idea?", suggestions: "¡Sugerencias!", send: "Enviar sugerencia", play: "Jugar", language: "Cambiar idioma", suggestionPlaceholder: "Escribe tu sugerencia aquí...", suggestionSubject: "Sugerencia para Piscina de juegos" },
  en: { nav: ["Catalog", "Featured", "Contact"], eyebrow: "Games to learn and play", heroTitle: "Your online game gallery for history, strategy, and culture.", heroText: "Explore a collection of mini-games and interactive experiences designed to entertain while you learn. Browse by collection, search by name, and try any game in seconds.", explore: "Explore games", games: "Games", categories: "Collections", collection: "Collection", curated: "Curated", featured: "Cover", title: "Title", catalog: "Collections", discover: "Discover your next games", search: "Search by name or collection", all: "All", contactTitle: "Private suggestions", idea: "Have an idea?", suggestions: "Suggestions!", send: "Send suggestion", play: "Play", language: "Change language", suggestionPlaceholder: "Write your suggestion here...", suggestionSubject: "Suggestion for Game pool" }
};

const gameTranslations = {
  en: {
    1: { title: "1789: ROAD TO THE BASTILLE", description: "An interactive story about the French Revolution where every decision changes the character's path.", longDescription: "An historical interactive story in which you experience the French Revolution as a citizen facing meaningful choices." },
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
    const matchesCategory = state.category === "Todos" || game.collection === state.category;
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
  statsCategories.textContent = "4";

  if (!visibleGames.length) {
    gamesGrid.innerHTML = `
      <div class="empty-state">
        <h3>${translations[language].noGames || (language === "en" ? "No games found" : "No encontramos juegos")}</h3>
        <p>${language === "en" ? "Try another search or change the category." : "Prueba con otra búsqueda o cambia la categoría."}</p>
      </div>
    `;
    return;
  }

  const collectionLabels = [...new Set(visibleGames.map((game) => game.collection))];
  const collectionNames = language === "en" ? {
    "Revolución Francesa": "French Revolution",
    "Revolución Industrial": "Industrial Revolution",
    "Filosofía": "Philosophy",
    "Revolución Rusa": "Russian Revolution"
  } : {};
  gamesGrid.innerHTML = collectionLabels.map((collection) => `
    <section class="collection-block">
      <h3 class="collection-title">${collectionNames[collection] || collection}</h3>
      ${collection === "Filosofía" ? `<p class="subcollection-title">${language === "en" ? "Ancient Philosophy" : "Filosofía antigua"}</p>` : ""}
      ${visibleGames.filter((game) => game.collection === collection).map((game) => `
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
              <button class="play-button" type="button" data-action="play" data-id="${game.id}">${language === "en" ? "Play" : "Jugar"}</button>
            </div>
          </div>
        </article>
      `).join("")}
    </section>
  `).join("");
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

  if (button.dataset.action === "play") {
    window.open(selectedGame.playUrl, "_blank", "noopener,noreferrer");
  }
});

function applyLanguage() {
  const t = translations[language];
  document.documentElement.lang = language;
  document.title = language === "en" ? "Game pool | Online gallery" : "Piscina de juegos | Galería online";
  document.querySelectorAll(".main-nav a").forEach((link, index) => { link.textContent = t.nav[index]; });
  document.querySelector(".hero .eyebrow").textContent = t.eyebrow;
  document.querySelector(".hero h1").textContent = t.heroTitle;
  document.querySelector(".hero-copy > p").textContent = t.heroText;
  document.querySelector(".hero-actions .primary-button").textContent = t.explore;
  document.querySelector(".stats-list li:nth-child(1) span").textContent = t.games;
  document.querySelector(".stats-list li:nth-child(2) span").textContent = t.categories;
  document.querySelector(".stats-list li:nth-child(3) strong").textContent = t.collection;
  document.querySelector(".stats-list li:nth-child(3) span").textContent = t.curated;
  document.querySelector(".card-badge").textContent = t.featured;
  document.querySelector(".catalog .eyebrow").textContent = t.catalog;
  document.querySelector(".catalog h2").textContent = t.discover;
  searchInput.placeholder = t.search;
  document.querySelector('[data-category="Todos"]').textContent = t.all;
  document.querySelector(".contact h2").textContent = t.contactTitle;
  document.querySelector(".contact-label").textContent = t.idea;
  document.querySelector(".contact-card h3").textContent = t.suggestions;
  document.querySelector(".contact-card .primary-button").textContent = t.send;
  document.getElementById("suggestionText").placeholder = t.suggestionPlaceholder;
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
