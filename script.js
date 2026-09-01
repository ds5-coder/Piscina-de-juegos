const games = [
  {
    id: 1,
    title: "1789: Diario de la Revolución",
    category: "Historia",
    mode: "Narrativo",
    duration: "8 min",
    description:
      "Un relato interactivo sobre la Revolución Francesa en el que cada decisión cambia el rumbo del personaje.",
    longDescription:
      "Un juego de decisiones histórico-literario donde el jugador vive la Revolución Francesa desde la perspectiva de un ciudadano con varias opciones y consecuencias reales.",
    gradient: "linear-gradient(135deg, rgba(124,92,255,0.96), rgba(0,209,255,0.8))",
    image: "assets/game-covers/Captura de pantalla 2026-09-01 190537.png",
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
    image: "assets/game-covers/ChatGPT Image 31 ago 2026, 21_05_50.png",
    previewUrl: "games/socrates_dialogo.html",
    playUrl: "games/socrates_dialogo.html"
  },
  {
    id: 3,
    title: "Revolución Industrial",
    category: "Estratégia",
    mode: "Quiz",
    duration: "6 min",
    description:
      "Coloca la máquina en el lugar correcto y responde a preguntas clave sobre la industrialización europea.",
    longDescription:
      "Un juego tipo tren y estación que mezcla velocidad, observación y conocimiento histórico para repasar la Revolución Industrial y sus impactos.",
    gradient: "linear-gradient(135deg, rgba(255,130,102,0.9), rgba(255,192,78,0.85))",
    image: "assets/game-covers/Captura de pantalla 2026-09-01 190518.png",
    previewUrl: "games/revolucion_industrial_estacionar.html",
    playUrl: "games/revolucion_industrial_estacionar.html"
  },
  {
    id: 4,
    title: "Napoleón vs Wellington",
    category: "Arcade",
    mode: "2 jugadores",
    duration: "7 min",
    description:
      "Un duelo arcade de preguntas con puntuación, turnos y explosividad visual inspirada en la historia militar.",
    longDescription:
      "Reta a tu rival en una competicion de preguntas sobre Napoleón, Waterloo y la historia del Imperio francés.",
    gradient: "linear-gradient(135deg, rgba(255,104,116,0.92), rgba(124,92,255,0.82))",
    image: "assets/game-covers/Captura de pantalla 2026-09-01 190527.png",
    previewUrl: "games/napoleon_tenis_2p.html",
    playUrl: "games/napoleon_tenis_2p.html"
  }
];

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
const featuredPlayButton = document.getElementById("featuredPlayButton");

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

function renderFeaturedGame() {
  const featured = games[0];
  featuredTitle.textContent = featured.title;
  featuredCategory.textContent = featured.category;
  featuredDescription.textContent = featured.description;
  featuredArt.style.backgroundImage = `url('${featured.image}')`;
  featuredArt.style.backgroundSize = "cover";
  featuredArt.style.backgroundPosition = "center";
  featuredArt.style.backgroundRepeat = "no-repeat";
  featuredPlayButton.dataset.gameId = featured.id;
}

function getVisibleGames() {
  const query = state.query.trim().toLowerCase();
  return games.filter((game) => {
    const matchesCategory = state.category === "Todos" || game.category === state.category;
    const matchesSearch =
      !query ||
      game.title.toLowerCase().includes(query) ||
      game.category.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });
}

function renderGames() {
  const visibleGames = getVisibleGames();
  resultsCount.textContent = `${visibleGames.length} juego${visibleGames.length === 1 ? "" : "s"}`;
  statsGames.textContent = String(games.length);
  statsCategories.textContent = String(new Set(games.map((game) => game.category)).size);

  if (!visibleGames.length) {
    gamesGrid.innerHTML = `
      <div class="empty-state">
        <h3>No encontramos juegos</h3>
        <p>Prueba con otra búsqueda o cambia la categoría.</p>
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
            <h3>${game.title}</h3>
            <span class="game-badge">${game.category}</span>
          </div>
          <div class="game-meta">
            <span>${game.mode}</span>
          </div>
          <p>${game.description}</p>
          <div class="game-bottom-row">
            <span class="game-badge">${game.duration}</span>
            <div class="game-actions">
              <button class="details-button" type="button" data-action="details" data-id="${game.id}">Detalles</button>
              <button class="play-button" type="button" data-action="play" data-id="${game.id}">Jugar</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function openModal(game) {
  state.selectedGame = game;
  modalTitle.textContent = game.title;
  modalDescription.textContent = game.longDescription;
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

featuredPlayButton.addEventListener("click", () => {
  const featured = games.find((game) => game.id === Number(featuredPlayButton.dataset.gameId));
  if (featured) {
    window.open(featured.playUrl, "_blank", "noopener,noreferrer");
  }
});

document.querySelector(".close-button").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

renderFeaturedGame();
renderGames();
