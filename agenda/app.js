'use strict';

/* ============================================================
   Mi Agenda: visor de copias de seguridad de Task Agenda (.tsk2)
   La copia es una base de datos SQLite. Todo se lee en el
   dispositivo: no se envía nada a ningún servidor.
   ============================================================ */

const $ = (s, r = document) => r.querySelector(s);
const MS = 86400000;
const pad = n => String(n).padStart(2, '0');

/* ---- Fechas: se trabaja con "número de día" (días desde 1970, UTC) ---- */
const toDays = s => { const [y, m, d] = s.slice(0, 10).split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / MS); };
const fromDays = n => { const t = new Date(n * MS); return `${t.getUTCFullYear()}-${pad(t.getUTCMonth() + 1)}-${pad(t.getUTCDate())}`; };
const dow = n => new Date(n * MS).getUTCDay();               // 0 = domingo
const ymd = n => { const t = new Date(n * MS); return [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]; };
const daysIn = (y, m) => new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
const dayOf = (y, m, d) => Math.round(Date.UTC(y, m, d) / MS);
const monday = n => n - ((dow(n) + 6) % 7);
const todayDays = () => { const t = new Date(); return dayOf(t.getFullYear(), t.getMonth(), t.getDate()); };
const fmt = (n, o) => new Intl.DateTimeFormat('es', { timeZone: 'UTC', ...o }).format(new Date(n * MS));
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const colorOf = n => '#' + ((n >>> 0) & 0xFFFFFF).toString(16).padStart(6, '0');   // ARGB entero -> #rrggbb

const ICON_CHECK = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_PREV = '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_NEXT = '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* ---- Estado ---- */
const S = {
  loaded: false, fileName: '', loadedAt: null,
  types: {}, events: [], notes: [], minD: 0,
  view: 'calendar',
  cy: 0, cm: 0,          // mes visible
  week: 0,               // lunes de la semana visible
  query: '', db: null, dirty: 0, sel: null, sheetRefresh: null,
  _pending: null,
};

/* ============================================================
   Almacenamiento local (IndexedDB): así no hay que volver a cargar
   la copia cada vez que se abre la app.
   ============================================================ */
const store = {
  open() {
    return new Promise((res, rej) => {
      const r = indexedDB.open('agenda', 1);
      r.onupgradeneeded = () => r.result.createObjectStore('kv');
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  },
  async get(k) {
    const db = await this.open();
    return new Promise((res, rej) => { const q = db.transaction('kv').objectStore('kv').get(k); q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); });
  },
  async set(k, v) {
    const db = await this.open();
    return new Promise((res, rej) => { const t = db.transaction('kv', 'readwrite'); t.objectStore('kv').put(v, k); t.oncomplete = res; t.onerror = () => rej(t.error); });
  },
  async del(k) {
    const db = await this.open();
    return new Promise((res, rej) => { const t = db.transaction('kv', 'readwrite'); t.objectStore('kv').delete(k); t.oncomplete = res; t.onerror = () => rej(t.error); });
  },
};

/* ============================================================
   Lectura de la copia de seguridad
   ============================================================ */
let SQLP = null;
const getSQL = () => SQLP || (SQLP = initSqlJs({ locateFile: f => 'vendor/' + f }));

function rows(db, sql) {
  const r = db.exec(sql)[0];
  if (!r) return [];
  return r.values.map(v => Object.fromEntries(r.columns.map((c, i) => [c, v[i]])));
}

function readData(db) {
  const tables = rows(db, "select name from sqlite_master where type='table'").map(r => r.name);
  if (!tables.includes('Evento')) throw new Error('El archivo es una base de datos, pero no tiene los datos de Task Agenda (falta la tabla de eventos).');

  const types = {};
  if (tables.includes('TipoEvento')) {
    for (const t of rows(db, 'select * from TipoEvento')) {
      types[t._id] = { id: t._id, nombre: t.TevNome, color: colorOf(t.TevCor), prio: t.TevPrioridade, activo: !!t.TevAtivo };
    }
  }

  const virt = new Map();               // idRecurrencia -> Map(fecha -> {done, del})
  if (tables.includes('EventoVirtualDados')) {
    for (const v of rows(db, 'select * from EventoVirtualDados')) {
      if (!virt.has(v.EvdIdEventoRecorrente)) virt.set(v.EvdIdEventoRecorrente, new Map());
      virt.get(v.EvdIdEventoRecorrente).set(v.EvdDataReferencia.slice(0, 10), { done: v.EvdEventoConcluido == null ? null : !!v.EvdEventoConcluido, del: !!v.EvdEventoExcluido });
    }
  }
  const recByEvent = new Map();
  if (tables.includes('EventoRecorrente')) {
    for (const r of rows(db, 'select * from EventoRecorrente')) {
      recByEvent.set(r.RecIdEventoReferencia, {
        id: r._id, tipo: r.RecTipo, seq: Math.max(1, r.RecSequencia || 1),
        dias: r.RecDiasSemana ? new Set(String(r.RecDiasSemana).split(',').map(x => (Number(x) - 1 + 7) % 7)) : null,
        fim: r.RecDataFim ? toDays(r.RecDataFim) : null,
        occ: r.RecOcorrencias || null,
        virt: virt.get(r._id) || new Map(),
      });
    }
  }

  const events = rows(db, 'select * from Evento').map(e => ({
    id: e._id, tipo: e.EveTipo, date: e.EveData.slice(0, 10), d: toDays(e.EveData),
    hora: e.EveHora || '', horaFim: e.EveHoraFim || '',
    titulo: e.EveTitulo || '', desc: e.EveDescricao || '', done: !!e.EveEventoConcluido,
    rec: recByEvent.get(e._id) || null,
  }));

  const notes = tables.includes('Note') ? rows(db, 'select * from Note').map(n => ({
    id: n._id, titulo: n.NteTitle || '', lista: !!n.NteIsList, texto: n.NteText || '', items: n.NteItems || '',
    fijada: !!n.NtePinned, color: n.NteColor != null && n.NteColor !== 0 ? colorOf(n.NteColor) : null, orden: n.NteOrder ?? 0,
  })).sort((a, b) => (b.fijada - a.fijada) || (a.orden - b.orden)) : [];

  return { types, events, notes };
}

async function parseBackup(bytes, name) {
  const head = new TextDecoder().decode(bytes.slice(0, 15));
  if (head !== 'SQLite format 3') throw new Error('Este archivo no es una copia de seguridad de Task Agenda (no es una base de datos SQLite).');
  const SQL = await getSQL();
  const db = new SQL.Database(bytes);
  try { return { db, data: readData(db), name }; }
  catch (err) { db.close(); throw err; }
}

function setData(d) {
  S.types = d.types; S.events = d.events; S.notes = d.notes;
  S.minD = d.events.reduce((m, e) => Math.min(m, e.d), Infinity);
  if (!isFinite(S.minD)) S.minD = todayDays();
  S._pending = null;
}
function applyData(r, loadedAt, dirty) {
  if (S.db) { try { S.db.close(); } catch { /* ya cerrada */ } }
  S.db = r.db; setData(r.data);
  S.fileName = r.name; S.loadedAt = loadedAt || Date.now(); S.dirty = dirty || 0; S.loaded = true;
  const [y, m] = ymd(todayDays());
  S.cy = y; S.cm = m; S.week = monday(todayDays()); S.sel = null;
}

/* ============================================================
   Recurrencias
   Tipos: 1 diaria · 2 semanal · 3 mensual · 4 anual
          5 varios días seguidos · 6 días concretos de la semana
   ============================================================ */
function* iterRec(r, base, skipTo) {
  const step = r.seq;
  switch (r.tipo) {
    case 1: case 5: case 2: {
      const len = r.tipo === 2 ? 7 * step : step;
      for (let k = skipTo > base ? Math.ceil((skipTo - base) / len) : 0; ; k++) yield base + k * len;
    }
    case 3: {
      const [y, m, d] = ymd(base);
      for (let k = 0; ; k++) {
        const mi = m + k * step, yy = y + Math.floor(mi / 12), mm = ((mi % 12) + 12) % 12;
        if (d <= daysIn(yy, mm)) yield dayOf(yy, mm, d);     // como Task Agenda: si el mes no tiene ese día, se salta
      }
    }
    case 4: {
      const [y, m, d] = ymd(base);
      for (let k = 0; ; k++) { const yy = y + k * step; if (d <= daysIn(yy, m)) yield dayOf(yy, m, d); }
    }
    case 6: {
      const set = r.dias || new Set([dow(base)]);
      const ws = monday(base);
      for (let d = Math.max(base, skipTo); ; d++) {
        if (set.has(dow(d)) && Math.floor((d - ws) / 7) % step === 0) yield d;
      }
    }
    default: yield base;
  }
}

function genRec(e, from, to) {
  const r = e.rec, out = [];
  const end = r.fim != null ? Math.min(to, r.fim) : to;
  if (e.d > end) return out;
  const counted = r.occ != null;
  let n = 0;
  for (const d of iterRec(r, e.d, counted ? e.d : from)) {
    if (d > end) break;
    n++;
    if (counted && n > r.occ) break;
    if (d >= from) out.push(d);
    if (r.tipo !== 1 && r.tipo !== 2 && r.tipo !== 3 && r.tipo !== 4 && r.tipo !== 5 && r.tipo !== 6) break;
  }
  return out;
}

function occurrences(from, to) {
  const out = [];
  for (const e of S.events) {
    const r = e.rec;
    if (!r) { if (e.d >= from && e.d <= to) out.push(mk(e, e.d, e.done)); continue; }
    const days = genRec(e, from, to);
    if (r.fim != null) {   // ocurrencias con registro propio pasada la fecha de fin: la app original las conserva
      for (const [date, v] of r.virt) { const d = toDays(date); if (d > r.fim && d >= from && d <= to && !v.del) days.push(d); }
    }
    for (const d of days) {
      const v = r.virt.get(fromDays(d));
      if (v && v.del) continue;
      out.push(mk(e, d, v && v.done != null ? v.done : (d === e.d ? e.done : false)));
    }
  }
  return out;
}
const mk = (e, d, done) => ({ e, d, done });
const prio = o => (S.types[o.e.tipo]?.prio ?? 99);
const cmpDay = (a, b) => (a.e.hora || '').localeCompare(b.e.hora || '') || prio(a) - prio(b) || a.e.id - b.e.id;

function groupByDay(list) {
  const m = new Map();
  for (const o of list) { if (!m.has(o.d)) m.set(o.d, []); m.get(o.d).push(o); }
  for (const l of m.values()) l.sort(cmpDay);
  return m;
}

function pending() {
  if (S._pending) return S._pending;
  const today = todayDays();
  const all = occurrences(S.minD, today + 30).filter(o => !o.done).sort((a, b) => a.d - b.d || cmpDay(a, b));
  return (S._pending = {
    late: all.filter(o => o.d < today), today: all.filter(o => o.d === today), soon: all.filter(o => o.d > today),
  });
}

const REC_NAMES = { 1: 'Cada día', 2: 'Cada semana', 3: 'Cada mes', 4: 'Cada año', 5: 'Varios días' };
const DOW_SHORT = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
function recLabel(r) {
  if (r.tipo === 6) {
    const days = [...(r.dias || [])].sort((a, b) => ((a + 6) % 7) - ((b + 6) % 7)).map(d => DOW_SHORT[d]).join(' ');
    return 'Semanal: ' + (days || 'mismo día');
  }
  const base = REC_NAMES[r.tipo] || 'Repetido';
  return r.seq > 1 ? `${base} (×${r.seq})` : base;
}

/* ============================================================
   Vistas
   ============================================================ */
function evRow(o, opts = {}) {
  const e = o.e, t = S.types[e.tipo] || { nombre: 'Evento', color: '#8a8d95' };
  const time = e.hora ? e.hora + (e.horaFim ? '–' + e.horaFim : '') : '';
  const today = todayDays();
  const late = !o.done && o.d < today ? `<span class="late">Atrasado ${today - o.d} d</span>` : '';
  return `<li class="ev${o.done ? ' done' : ''}${opts.hit ? ' hit' : ''}" style="--c:${t.color}" ${opts.hit ? `data-d="${o.d}"` : `data-edit="${e.id}:${o.d}"`}>
    <button class="chk" data-toggle="${e.id}:${o.d}" role="checkbox" aria-checked="${o.done}" aria-label="Marcar como ${o.done ? 'pendiente' : 'hecho'}">${o.done ? ICON_CHECK : ''}</button>
    <div class="ev-body">
      <div class="ev-title">${esc(e.titulo)}</div>
      ${e.desc ? `<div class="ev-desc">${esc(e.desc)}</div>` : ''}
      <div class="ev-meta">${time ? `<span>${esc(time)}</span>` : ''}<span class="chip">${esc(t.nombre)}</span>${e.rec ? `<span>${esc(recLabel(e.rec))}</span>` : ''}${late}</div>
      ${opts.when ? `<div class="when">${esc(cap(fmt(o.d, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })))}</div>` : ''}
    </div></li>`;
}
const evList = l => `<ul class="evlist">${l.map(o => evRow(o)).join('')}</ul>`;

function setNav(html) { $('#nav').innerHTML = html; }

function renderCalendar() {
  const first = dayOf(S.cy, S.cm, 1), len = daysIn(S.cy, S.cm), last = first + len - 1;
  const by = groupByDay(occurrences(first, last));
  const today = todayDays();
  setNav(`<button class="round" data-act="prev" aria-label="Mes anterior">${ICON_PREV}</button>
    <button class="title" data-act="today">${esc(cap(fmt(first, { month: 'long', year: 'numeric' })))}</button>
    <button class="round" data-act="next" aria-label="Mes siguiente">${ICON_NEXT}</button>`);

  let cells = '';
  const lead = (dow(first) + 6) % 7;
  for (let i = 0; i < lead; i++) cells += '<div class="cell"></div>';
  for (let i = 0; i < len; i++) {
    const d = first + i, list = by.get(d) || [];
    let cls = 'day', style = '';
    if (dow(d) === 0) cls += ' sun';
    if (d === today) cls += ' today';
    if (S.sel === d) cls += ' sel';
    const pend = list.filter(o => !o.done);
    if (!list.length) cls += ' none';
    else if (pend.length) {
      const cols = [...new Set(pend.sort((a, b) => prio(a) - prio(b)).map(o => S.types[o.e.tipo]?.color || '#8a8d95'))].slice(0, 4);
      const ring = cols.length === 1 ? cols[0] : `conic-gradient(${cols.map((c, k) => `${c} ${k * 100 / cols.length}% ${(k + 1) * 100 / cols.length}%`).join(',')})`;
      cls += ' pend'; style = `--ring:${ring}`;
    }
    cells += `<div class="cell"><button class="${cls}" style="${style}" data-day="${d}" aria-label="${esc(fmt(d, { weekday: 'long', day: 'numeric', month: 'long' }))}${list.length ? `, ${list.length} eventos` : ''}">${pad(i + 1)}</button></div>`;
  }
  const used = Object.values(S.types).filter(t => t.activo);
  $('#main').innerHTML = `<div class="dow">${['lun', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom'].map(x => `<span>${x}</span>`).join('')}</div>
    <div class="grid">${cells}</div>
    <div class="legend">${used.map(t => `<span><i style="--c:${t.color}"></i>${esc(t.nombre)}</span>`).join('')}<span><i style="--c:var(--line)"></i>Todo hecho</span></div>`;
}

function renderWeek() {
  const today = todayDays(), start = S.week, end = start + 6;
  const by = groupByDay(occurrences(start, end));
  const sameMonth = ymd(start)[1] === ymd(end)[1];
  setNav(`<button class="round" data-act="prev" aria-label="Semana anterior">${ICON_PREV}</button>
    <button class="title" data-act="today">${esc(fmt(start, { day: 'numeric', month: sameMonth ? undefined : 'short' }))} – ${esc(fmt(end, { day: 'numeric', month: 'short' }))}<small>${esc(String(ymd(end)[0]))}</small></button>
    <button class="round" data-act="next" aria-label="Semana siguiente">${ICON_NEXT}</button>`);
  let html = '';
  for (let d = start; d <= end; d++) {
    const l = by.get(d) || [];
    html += `<section class="dayblock${d === today ? ' today' : ''}"><h3>${esc(cap(fmt(d, { weekday: 'long', day: 'numeric' })))}<span>${d === today ? 'Hoy' : ''}</span></h3>${l.length ? evList(l) : '<div class="empty">Sin eventos</div>'}</section>`;
  }
  $('#main').innerHTML = html;
}

function parseItems(raw) {
  if (!raw) return [];
  try {
    const j = JSON.parse(raw);
    if (Array.isArray(j)) return j.map(x => typeof x === 'string' ? { t: x, done: false } : { t: x.text ?? x.title ?? x.name ?? x.t ?? JSON.stringify(x), done: !!(x.done ?? x.checked ?? x.isChecked ?? x.completed) });
  } catch { /* texto plano */ }
  return String(raw).split(/\r?\n/).filter(Boolean).map(t => ({ t, done: false }));
}
function renderNotes() {
  setNav('');
  if (!S.notes.length) { $('#main').innerHTML = '<p class="empty" style="padding-top:28px">No hay notas ni listas en esta copia.</p>'; return; }
  $('#main').innerHTML = `<div class="notes">${S.notes.map(n => {
    const items = n.lista ? parseItems(n.items) : [];
    return `<article class="note" style="${n.color ? `--c:${n.color}` : ''}">${n.fijada ? '<div class="pin">📌 Fijada</div>' : ''}${n.titulo ? `<h3>${esc(n.titulo)}</h3>` : ''}
      ${n.lista ? `<ul>${items.map(i => `<li class="${i.done ? 'done' : ''}">${esc(i.t)}</li>`).join('')}</ul>` : `<p>${esc(n.texto)}</p>`}</article>`;
  }).join('')}</div>`;
}

function renderWelcome(err) {
  $('#top').hidden = true; $('#pendBtn').hidden = true; $('#fab').hidden = true;
  $('#main').innerHTML = `<div class="welcome" id="drop">
    <img class="logo" src="icon.svg" alt="">
    <h1>Mi Agenda</h1>
    <p>Abre tu copia de seguridad de Task Agenda para ver y editar tu calendario y tus tareas.</p>
    <button class="btn" id="pick">Cargar copia de seguridad</button>
    ${err ? `<p class="err" role="alert">${esc(err)}</p>` : ''}
    <ol class="steps">
      <li>En Task Agenda: menú → copia de seguridad → guardar en el dispositivo (archivo <b>.tsk2</b>).</li>
      <li>Elige ese archivo aquí.</li>
      <li>Tus datos se leen en tu dispositivo y no se envían a ningún sitio.</li>
    </ol></div>`;
}

function render(keep) {
  if (!S.loaded) return renderWelcome();
  $('#top').hidden = false;
  document.querySelectorAll('.tabs button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.view === S.view)));
  if (S.view === 'calendar') renderCalendar();
  else if (S.view === 'week') renderWeek();
  else renderNotes();
  const showPend = S.view !== 'notes';
  const p = pending(), n = p.late.length + p.today.length;
  const b = $('#pendBtn');
  b.hidden = !showPend;
  b.className = n ? '' : 'clear';
  b.textContent = n ? `${n} ${n === 1 ? 'evento pendiente' : 'eventos pendientes'}` : 'Todo al día';
  $('#btnMenu').classList.toggle('dot', S.dirty > 0);
  $('#fab').hidden = !showPend;
  if (!keep) window.scrollTo(0, 0);
}

/* ============================================================
   Hojas (diálogos inferiores)
   ============================================================ */
let lastFocus = null;
function openSheet(title, html, refresh) {
  if ($('#sheet').hidden) lastFocus = document.activeElement;
  $('#sheetTitle').textContent = title;
  $('#sheetBody').innerHTML = html;
  S.sheetRefresh = refresh || null;
  $('#sheet').hidden = false;
  document.body.style.overflow = 'hidden';
  $('#sheetBody').scrollTop = 0;
  $('#sheet .panel-head button').focus();
}
function closeSheet() {
  $('#sheet').hidden = true; document.body.style.overflow = ''; S.sheetRefresh = null;
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}

const dayHtml = d => {
  const l = groupByDay(occurrences(d, d)).get(d) || [];
  return `<button class="btn add" data-add="${d}">+ Añadir evento</button>` + (l.length ? evList(l) : '<div class="empty">Sin eventos este día.</div>');
};
function openDay(d) {
  S.sel = d;
  openSheet(cap(fmt(d, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })), dayHtml(d), () => { $('#sheetBody').innerHTML = dayHtml(d); });
  if (S.view === 'calendar') { const sc = scrollY; renderCalendar(); scrollTo(0, sc); }
}

function pendingHtml() {
  const p = pending();
  const sec = (t, l) => l.length ? `<div class="group-title">${t} · ${l.length}</div>${evList(l)}` : '';
  return sec('Atrasados', p.late) + sec('Hoy', p.today) + sec('Próximos 30 días', p.soon) || '<div class="empty">No tienes nada pendiente.</div>';
}
function openPending() { openSheet('Pendientes', pendingHtml(), () => { $('#sheetBody').innerHTML = pendingHtml(); }); }

function openSearch() {
  openSheet('Buscar', `<div class="search"><input id="q" type="search" placeholder="Buscar en títulos y descripciones…" autocomplete="off" value="${esc(S.query)}"></div><div id="results"></div>`);
  const input = $('#q'); input.focus();
  const run = () => {
    S.query = input.value.trim();
    const q = S.query.toLowerCase();
    if (q.length < 2) { $('#results').innerHTML = '<div class="empty">Escribe al menos 2 letras.</div>'; return; }
    const hits = S.events.filter(e => e.titulo.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q)).sort((a, b) => b.d - a.d);
    $('#results').innerHTML = hits.length
      ? `<div class="empty">${hits.length} ${hits.length === 1 ? 'resultado' : 'resultados'}${hits.length > 150 ? ' (se muestran 150)' : ''}</div><ul class="evlist">${hits.slice(0, 150).map(e => evRow(mk(e, e.d, e.done), { hit: true, when: true })).join('')}</ul>`
      : '<div class="empty">Sin resultados.</div>';
  };
  let t; input.addEventListener('input', () => { clearTimeout(t); t = setTimeout(run, 150); });
  S.sheetRefresh = run;
  run();
}

/* ============================================================
   Edición: se modifica la propia base de datos de la copia
   ============================================================ */
function sql(q, params = []) { S.db.run(q, params); }

async function persist() {
  try { await store.set('db', { bytes: S.db.export(), name: S.fileName, loadedAt: S.loadedAt, dirty: S.dirty }); }
  catch { toast('No se pudo guardar en el dispositivo. Descarga la copia para no perder los cambios.'); }
}

async function mutate(fn) {
  S.db.run('begin');
  try { fn(); S.db.run('commit'); }
  catch (err) { try { S.db.run('rollback'); } catch { /* nada */ } console.error(err); toast('No se pudo guardar el cambio.'); return false; }
  S.dirty++;
  setData(readData(S.db));
  render(true);
  if (!$('#sheet').hidden && S.sheetRefresh) { const sb = $('#sheetBody'), top = sb.scrollTop; S.sheetRefresh(); sb.scrollTop = top; }
  await persist();
  return true;
}

const findEvent = id => S.events.find(e => e.id === id);
const lastId = () => S.db.exec('select last_insert_rowid()')[0].values[0][0];

function setDone(e, d, done) {
  const date = fromDays(d), v = done ? 1 : 0;
  if (!e.rec) { sql('update Evento set EveEventoConcluido=? where _id=?', [v, e.id]); return; }
  if (d === e.d) {                       // la primera ocurrencia vive en el propio evento
    sql('update Evento set EveEventoConcluido=? where _id=?', [v, e.id]);
    sql('update EventoVirtualDados set EvdEventoConcluido=? where EvdIdEventoRecorrente=? and EvdDataReferencia=?', [v, e.rec.id, date]);
  } else {
    sql(`insert into EventoVirtualDados(EvdEventoConcluido,EvdDataReferencia,EvdIdEventoRecorrente,EvdEventoExcluido) values(?,?,?,0)
         on conflict(EvdDataReferencia,EvdIdEventoRecorrente) do update set EvdEventoConcluido=excluded.EvdEventoConcluido`, [v, date, e.rec.id]);
  }
}

const REPS = [['', 'No se repite'], ['1', 'Cada día'], ['2', 'Cada semana'], ['3', 'Cada mes'], ['4', 'Cada año'], ['6', 'Días concretos de la semana'], ['5', 'Varios días seguidos']];
const DOW_CHIPS = [[1, 'L'], [2, 'M'], [3, 'X'], [4, 'J'], [5, 'V'], [6, 'S'], [0, 'D']];

function openForm(eventId, d) {
  const e = eventId ? findEvent(eventId) : null, r = e && e.rec;
  const date = e ? e.date : fromDays(d);
  const dias = r && r.dias ? r.dias : new Set([dow(toDays(date))]);
  let defType = e ? e.tipo : null;
  if (defType == null) {
    const cnt = {}; for (const x of S.events) cnt[x.tipo] = (cnt[x.tipo] || 0) + 1;
    defType = Number(Object.keys(cnt).sort((a, b) => cnt[b] - cnt[a])[0]) || Object.keys(S.types)[0];
  }
  const types = Object.values(S.types).filter(t => t.activo || (e && t.id === e.tipo)).sort((a, b) => a.prio - b.prio);
  const repVal = r ? String(r.tipo) : '';
  openSheet(e ? 'Editar evento' : 'Nuevo evento', `<form id="evForm" data-id="${e ? e.id : ''}" data-d="${d}" novalidate>
    <label class="f">Título<input name="titulo" required maxlength="300" autocomplete="off" value="${esc(e ? e.titulo : '')}"></label>
    <label class="f">Descripción<textarea name="desc" rows="3">${esc(e ? e.desc : '')}</textarea></label>
    <label class="f">${r ? 'Inicio de la serie' : 'Fecha'}<input type="date" name="fecha" required value="${date}"></label>
    <div class="row2">
      <label class="f">Hora (opcional)<input type="time" name="hora" value="${esc(e ? e.hora : '')}"></label>
      <label class="f">Hora fin<input type="time" name="horaFin" value="${esc(e ? e.horaFin : '')}"></label>
    </div>
    <label class="f">Tipo<select name="tipo">${types.map(t => `<option value="${t.id}" ${t.id == defType ? 'selected' : ''}>${esc(t.nombre)}</option>`).join('')}</select></label>
    <label class="f">Repetición<select name="rep">${REPS.map(([v, n]) => `<option value="${v}" ${v === repVal ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
    <div class="f" id="diasBox"><span>Días</span><div class="chips">${DOW_CHIPS.map(([v, n]) => `<label class="dchip"><input type="checkbox" name="dia" value="${v}" ${dias.has(v) ? 'checked' : ''}><span>${n}</span></label>`).join('')}</div></div>
    <label class="f" id="finBox">Hasta <small id="finHint">(opcional)</small><input type="date" name="fin" value="${r && r.fim != null ? fromDays(r.fim) : ''}"></label>
    ${r ? '<p class="about">Los cambios afectan a toda la serie.</p>' : ''}
    <p class="err" id="formErr" role="alert" hidden></p>
    <div class="actions">
      <button type="submit" class="btn">Guardar</button>
      ${e ? '<button type="button" class="btn ghost danger" data-delete>Eliminar</button>' : ''}
    </div></form>`);
  syncRep();
  if (!e) $('#evForm [name=titulo]').focus();
}
function syncRep() {
  const f = $('#evForm'); if (!f) return;
  const v = f.rep.value;
  $('#diasBox').hidden = v !== '6';
  $('#finBox').hidden = v === '';
  $('#finHint').textContent = v === '5' ? '(obligatorio)' : '(opcional)';
}

async function submitForm(f) {
  const q = new FormData(f), err = $('#formErr');
  const fail = m => { err.textContent = m; err.hidden = false; };
  const titulo = String(q.get('titulo')).trim(), fecha = q.get('fecha'), rep = q.get('rep');
  const hora = q.get('hora') || null, horaFin = hora ? (q.get('horaFin') || null) : null;
  const fin = rep ? (q.get('fin') || null) : null;
  const dias = q.getAll('dia').map(Number);
  if (!titulo) return fail('Escribe un título.');
  if (!fecha) return fail('Elige una fecha.');
  if (rep === '5' && !fin) return fail('Indica hasta qué día dura.');
  if (rep === '6' && !dias.length) return fail('Elige al menos un día de la semana.');
  if (fin && toDays(fin) < toDays(fecha)) return fail('La fecha final no puede ser anterior al inicio.');
  const diasTxt = rep === '6' ? dias.map(x => x + 1).join(',') : null;     // formato Java: 1 = domingo
  const id = f.dataset.id ? Number(f.dataset.id) : null, e = id ? findEvent(id) : null;
  const ok = await mutate(() => {
    let eid = id;
    if (!e) {
      sql("insert into Evento(EveTipo,EveData,EveHora,EveTitulo,EveDescricao,EveEventoConcluido,EveIdRecorrenciaEvento,EveHoraFim) values(?,?,?,?,?,0,NULL,?)",
        [Number(q.get('tipo')), fecha, hora, titulo, String(q.get('desc')), horaFin]);
      eid = lastId();
    } else {
      sql('update Evento set EveTipo=?,EveData=?,EveHora=?,EveTitulo=?,EveDescricao=?,EveHoraFim=? where _id=?',
        [Number(q.get('tipo')), fecha, hora, titulo, String(q.get('desc')), horaFin, id]);
    }
    const r = e && e.rec;
    if (r && rep && Number(rep) === r.tipo) {
      sql('update EventoRecorrente set RecDiasSemana=?, RecDataFim=? where _id=?', [diasTxt, fin, r.id]);
    } else {
      if (r) { sql('delete from EventoVirtualDados where EvdIdEventoRecorrente=?', [r.id]); sql('delete from EventoRecorrente where _id=?', [r.id]); }
      if (rep) sql('insert into EventoRecorrente(RecTipo,RecSequencia,RecDiasSemana,RecDataFim,RecOcorrencias,RecIdEventoReferencia) values(?,1,?,?,NULL,?)', [Number(rep), diasTxt, fin, eid]);
    }
  });
  if (ok) { closeSheet(); toast(e ? 'Cambios guardados' : 'Evento añadido'); }
}

function deleteEvent(e, d, mode) {
  if (mode === 'one') {
    sql(`insert into EventoVirtualDados(EvdEventoConcluido,EvdDataReferencia,EvdIdEventoRecorrente,EvdEventoExcluido) values(0,?,?,1)
         on conflict(EvdDataReferencia,EvdIdEventoRecorrente) do update set EvdEventoExcluido=1`, [fromDays(d), e.rec.id]);
    return;
  }
  if (e.rec) { sql('delete from EventoVirtualDados where EvdIdEventoRecorrente=?', [e.rec.id]); sql('delete from EventoRecorrente where _id=?', [e.rec.id]); }
  try { sql('delete from Alarme where AlaIdEvento=?', [e.id]); } catch { /* sin alarmas */ }
  sql('delete from Evento where _id=?', [e.id]);
}

async function askDelete(id, d) {
  const e = findEvent(id); if (!e) return;
  if (!e.rec) {
    if (!confirm(`¿Eliminar «${e.titulo}»?`)) return;
    if (await mutate(() => deleteEvent(e, d, 'all'))) { closeSheet(); toast('Evento eliminado'); }
    return;
  }
  openSheet('Eliminar evento repetido', `<p class="about" style="padding-top:0"><b>${esc(e.titulo)}</b> se repite. ¿Qué quieres eliminar?</p>
    <ul class="menu">
      <li><button data-del="one:${id}:${d}">Solo el ${esc(fmt(d, { weekday: 'long', day: 'numeric', month: 'long' }))}</button></li>
      <li><button class="danger" data-del="all:${id}:${d}">Toda la serie</button></li>
    </ul>`);
}

function exportBackup() {
  const bytes = S.db.export(), t = new Date();
  const name = `${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())}_${pad(t.getHours())}.${pad(t.getMinutes())}.${pad(t.getSeconds())}_Agenda.tsk2`;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([bytes], { type: 'application/octet-stream' }));
  a.download = name; document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  S.dirty = 0; persist(); render(true);
  if (!$('#sheet').hidden) closeSheet();
  toast(`Copia descargada: ${name}`);
}

function openTypes() {
  const counts = {};
  for (const e of S.events) counts[e.tipo] = (counts[e.tipo] || 0) + 1;
  openSheet('Tipos de evento', `<ul class="evlist">${Object.values(S.types).sort((a, b) => a.prio - b.prio).map(t =>
    `<li class="ev" style="--c:${t.color}"><span class="chk"></span><div class="ev-body"><div class="ev-title">${esc(t.nombre)}</div><div class="ev-meta"><span>${counts[t.id] || 0} eventos</span></div></div></li>`).join('')}</ul>`);
}

function openMenu() {
  const when = new Date(S.loadedAt).toLocaleString('es', { dateStyle: 'medium', timeStyle: 'short' });
  const n = S.dirty;
  openSheet('Menú', `<ul class="menu">
    <li><button data-m="export">Descargar copia de seguridad (.tsk2)<small>${n ? `⚠ ${n} ${n === 1 ? 'cambio' : 'cambios'} sin descargar` : 'Sin cambios pendientes de descargar'}</small></button></li>
    <li><button data-m="search">Buscar</button></li>
    <li><button data-m="types">Tipos de evento</button></li>
    <li><button data-m="load">Cargar otra copia de seguridad</button></li>
    <li><button class="danger" data-m="clear">Borrar mis datos de este dispositivo</button></li>
  </ul>
  <p class="about">Copia cargada: <b>${esc(S.fileName)}</b><br>${S.events.length} eventos · ${S.notes.length} notas · abierta el ${esc(when)}.<br>Tus cambios se guardan en este dispositivo. Para llevarlos a otro sitio, descarga la copia.</p>`);
}

/* ============================================================
   Acciones
   ============================================================ */
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toast._t); toast._t = setTimeout(() => t.hidden = true, 3200);
}

async function handleFile(file) {
  if (!file) return;
  try {
    const bytes = new Uint8Array(await file.arrayBuffer());
    if (S.loaded && S.dirty && !confirm(`Tienes ${S.dirty} cambios sin descargar. Si cargas otra copia se perderán. ¿Continuar?`)) return;
    const r = await parseBackup(bytes, file.name);
    applyData(r, Date.now(), 0);
    S.view = 'calendar';
    await persist();
    if (!$('#sheet').hidden) closeSheet();
    render();
    toast(`Copia cargada: ${r.data.events.length} eventos`);
  } catch (err) {
    console.error(err);
    if (S.loaded) toast(err.message); else renderWelcome(err.message);
  } finally { $('#file').value = ''; }
}

function shift(dir) {
  if (S.view === 'calendar') {
    S.cm += dir; if (S.cm < 0) { S.cm = 11; S.cy--; } else if (S.cm > 11) { S.cm = 0; S.cy++; }
    S.sel = null;
  } else if (S.view === 'week') S.week += 7 * dir;
  render();
}
function goToday() {
  const t = todayDays(), [y, m] = ymd(t);
  S.cy = y; S.cm = m; S.week = monday(t); render();
}
function goDate(d) {
  const [y, m] = ymd(d); S.cy = y; S.cm = m; S.week = monday(d); S.view = 'calendar'; closeSheet(); render(); openDay(d);
}

document.addEventListener('click', async ev => {
  const el = ev.target.closest('button, .hit, [data-edit]');
  if (!el) return;
  if (el.hasAttribute('data-close')) return closeSheet();
  if (el.dataset.day) return openDay(Number(el.dataset.day));
  if (el.dataset.toggle) {
    const [id, d] = el.dataset.toggle.split(':').map(Number), e = findEvent(id);
    const o = e && occurrences(d, d).find(x => x.e === e);
    return o && mutate(() => setDone(e, d, !o.done));
  }
  if (el.dataset.edit) { const [id, d] = el.dataset.edit.split(':').map(Number); return openForm(id, d); }
  if (el.dataset.add) return openForm(null, Number(el.dataset.add));
  if (el.dataset.delete !== undefined) { const f = $('#evForm'); return askDelete(Number(f.dataset.id), Number(f.dataset.d)); }
  if (el.dataset.del) {
    const [mode, id, d] = el.dataset.del.split(':'), e = findEvent(Number(id));
    if (e && await mutate(() => deleteEvent(e, Number(d), mode))) { closeSheet(); toast(mode === 'one' ? 'Día eliminado' : 'Serie eliminada'); }
    return;
  }
  if (el.classList.contains('hit')) return goDate(Number(el.dataset.d));
  if (el.dataset.view) { S.view = el.dataset.view; return render(); }
  if (el.dataset.act === 'prev') return shift(-1);
  if (el.dataset.act === 'next') return shift(1);
  if (el.dataset.act === 'today') return goToday();
  switch (el.id) {
    case 'btnMenu': return openMenu();
    case 'btnSearch': return openSearch();
    case 'pendBtn': return openPending();
    case 'fab': return openForm(null, S.view === 'calendar' && S.sel != null ? S.sel : todayDays());
    case 'pick': return $('#file').click();
  }
  switch (el.dataset.m) {
    case 'export': return exportBackup();
    case 'search': return openSearch();
    case 'types': return openTypes();
    case 'load': closeSheet(); return $('#file').click();
    case 'clear':
      if (!confirm(`¿Borrar los datos de este dispositivo?${S.dirty ? ` Perderás ${S.dirty} cambios que no has descargado.` : ''} Tu archivo original no se toca.`)) return;
      try { await store.del('db'); } catch { /* sin almacenamiento */ }
      S.loaded = false; closeSheet(); render(); return;
  }
});
document.addEventListener('submit', e => { if (e.target.id === 'evForm') { e.preventDefault(); submitForm(e.target); } });
document.addEventListener('change', e => { if (e.target.name === 'rep') syncRep(); });
addEventListener('beforeunload', e => { if (S.dirty) { e.preventDefault(); e.returnValue = ''; } });
$('#file').addEventListener('change', e => handleFile(e.target.files[0]));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#sheet').hidden) closeSheet(); });

/* Arrastrar y soltar el archivo en la pantalla de bienvenida */
addEventListener('dragover', e => { if (!S.loaded) { e.preventDefault(); $('#drop')?.classList.add('drop'); } });
addEventListener('dragleave', () => $('#drop')?.classList.remove('drop'));
addEventListener('drop', e => { if (!S.loaded) { e.preventDefault(); handleFile(e.dataTransfer.files[0]); } });

/* Deslizar para cambiar de mes o semana */
let tx = null;
addEventListener('touchstart', e => { tx = e.touches.length === 1 && $('#sheet').hidden ? e.touches[0].clientX : null; }, { passive: true });
addEventListener('touchend', e => {
  if (tx == null || !S.loaded || (S.view !== 'calendar' && S.view !== 'week')) return;
  const dx = e.changedTouches[0].clientX - tx; tx = null;
  if (Math.abs(dx) > 70) shift(dx < 0 ? 1 : -1);
}, { passive: true });

/* ---- Arranque ---- */
(async function init() {
  render();                                 // bienvenida mientras se comprueba si hay copia guardada
  try {
    const saved = await store.get('db');
    if (saved && saved.bytes) { applyData(await parseBackup(saved.bytes, saved.name), saved.loadedAt, saved.dirty); render(); }
  } catch (err) { console.warn('No se pudo restaurar la copia guardada', err); }
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => { });
})();
