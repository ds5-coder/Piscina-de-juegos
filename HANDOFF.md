# The Philosopher's Paradox (Kosmopolis): handoff notes

## What it is
A single-file browser game, three.js r128, about Nico, a 2026 student, stranded in ancient Greece
with his grandfather's time car. The whole game is one file: `index.html` (~14k lines, script inline).

- Published version: https://claude.ai/artifact/EmbkZgNsB3c3Ltsexpcc3U (version 27 at the time of writing)
- Assets: `models/` (JSON models, textures), `music/`, `memes/` (posters), `i18n/` (translation source files)

## Layout of index.html (search these markers)
- The translation table `ES_TEXT` is between `/*ES_START*/` and `/*ES_END*/` at the top of the script.
  `tr()` looks up English text; a `Node.prototype.textContent` hook translates all on-screen text.
  New English text needs an entry there (or a prefix rule in `tr()`), or it stays in English.
- Title menu and phone app: `openPhoneApp` (origin: download the time-travel app), `newGameBtn` handler.
- Missions: `defMission({ id: 'ch1'…})` … `'ch13'`; mission 2 is `ch2` (Anaximander, gnomon, apeiron).
- The apeiron (boundless meadow): `APX`, `enterApeiron`, `leaveApeiron`.
- Taverns: `makeTavern`, `TAVERNS`, games `dartsGame`, `poolGame`, `foosGame`.
- Barbershops: `makeBarber`, `barberTalk`, `doCut`, `HAIRS`.
- Vases: `VASE_TYPES`, `amphora()`. Memes/posters: `placeMeme`, `placeMemes()`.
- Radar: `drawMinimap`, `drawPlaceIcon`, `updateBeacons` (places shown within 70 m).
- The car: `argo` (DeLorean built from primitives), `playDrive`, `updateDrive`, `fireTrail`, the grotto `GROT`.
- Horses: `makeHorse`, `updateHorses`. Townsfolk: `NOON_CROWD`.

## Testing (Playwright, software GL)
- `./mktest.sh index.html test.html` builds a test page; then
  `sed -i 's#^frame();$#window.__E = s => eval(s);\nframe();#' test.html` exposes `window.__E`.
- Serve with `python3 -m http.server PORT` (use a new port each run) and drive with a Playwright script.
- The headless browser is slow: timers run late, so wait longer than you think.
- Syntax check before publishing: extract the `<script>` and run `node --check`.

## Done so far (summary)
Chapters 1 to 13 with Athens, the Aegean, sailing and driving; taverns with mini-games; barbershops with
haircut choice; vases you can carry, throw and break; memes as posters in both cities; full Spanish
(menu, HUD, ~2,100 strings); phone-app origin; the grotto where the car is hidden and the save point;
radar with place pictures.

## Open items
- Mission 2 rewrite (agreed direction: Anaximander's philosophy and the gnomon; the apeiron exit is clear now).
- Horse and donkey from poly.pizza: not downloadable from the sandbox; needs GLB files uploaded.
- Garden wall in Miletus next to the well (Anaximenes' village): needs the exact wall, to make it jumpable.
- Mission-one bush glitch and ladder camera (camera fix applied; bush state not found).
- Spanish: some on-screen text is still English where it is built with concatenation or drawn on canvas.
- Story: the origin is a phone app and the charger; Socrates' death is the emotional end of the story.
