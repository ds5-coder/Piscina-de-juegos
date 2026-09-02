(() => {
  const translations = {
    "EMPEZAR": "START", "JUGAR OTRA VEZ": "PLAY AGAIN", "SIGUIENTE PREGUNTA": "NEXT QUESTION", "RESPONDER": "ANSWER", "VOLVER AL MENÚ": "BACK TO MENU", "Detalles": "Details", "Jugar": "Play", "PREGUNTA": "QUESTION", "INTENTO": "ATTEMPT", "Cargando pregunta...": "Loading question...", "SACAR": "SERVE", "MODO 2 JUGADORES": "2-PLAYER MODE", "PREGUNTA 1": "QUESTION 1", "Cambiar idioma": "Change language", "Sonido": "Sound"
  };
  const reverse = Object.fromEntries(Object.entries(translations).map(([es, en]) => [en, es]));
  let language = localStorage.getItem("piscina-language") || "es";

  const style = document.createElement("style");
  style.textContent = ".game-language-toggle{position:fixed;top:12px;right:12px;z-index:9999;border:2px solid #111;background:#fff;color:#111;padding:8px 11px;border-radius:999px;font:700 12px monospace;cursor:pointer;box-shadow:3px 3px 0 rgba(0,0,0,.28)}";
  document.head.appendChild(style);

  const button = document.createElement("button");
  button.className = "game-language-toggle";
  button.type = "button";
  button.setAttribute("aria-label", "Cambiar idioma");
  document.body.appendChild(button);

  function translateNode(node) {
    if (node.nodeType !== Node.TEXT_NODE || !node.textContent.trim()) return;
    const source = node.textContent;
    const dictionary = language === "en" ? translations : reverse;
    let result = source;
    Object.entries(dictionary).forEach(([from, to]) => {
      result = result.replace(new RegExp(`\\b${from.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}\\b`, "g"), to);
    });
    if (result !== source) node.textContent = result;
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    button.innerHTML = language === "es" ? "🇬🇧 EN" : "🇪🇸 ES";
    button.setAttribute("aria-label", language === "es" ? "Cambiar a inglés" : "Cambiar a español");
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateNode);
  }

  button.addEventListener("click", () => {
    language = language === "es" ? "en" : "es";
    localStorage.setItem("piscina-language", language);
    window.location.reload();
  });

  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) translateNode(node);
      else if (node.nodeType === Node.ELEMENT_NODE) {
        const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) translateNode(walker.currentNode);
      }
    }));
  }).observe(document.body, { childList: true, subtree: true });

  applyLanguage();
})();
