/* UI icons (16x16 SVG) */
const UI_SVG = {
  play: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><polygon points="4 2.5 13.5 8 4 13.5"/></svg>',
  pause: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><rect x="3" y="2.5" width="3.5" height="11" rx="1"/><rect x="9.5" y="2.5" width="3.5" height="11" rx="1"/></svg>',
  stop: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><rect x="3.5" y="3.5" width="9" height="9" rx="1.2"/></svg>',
  prev: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><rect x="3" y="4" width="2" height="8"/><polygon points="6.5 8 13 4 13 12"/></svg>',
  next: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><polygon points="3 4 9.5 8 3 12"/><rect x="11" y="4" width="2" height="8"/></svg>',
  music: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 12V3.5l8-1.5v8.5"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="10.5" r="2"/></svg>',
  bolt: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 1L2 9h5l-1 6 8-8H9z"/></svg>',
  timer: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6.5"/><polyline points="8 4.5 8 8 10.5 9.5"/></svg>',
  volume: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="7.5 3.5 4 6 1.5 6 1.5 10 4 10 7.5 12.5"/><path d="M10.5 5.5a3.5 3.5 0 0 1 0 5M12.5 3.5a6.5 6.5 0 0 1 0 9"/></svg>',
  mute: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="7.5 3.5 4 6 1.5 6 1.5 10 4 10 7.5 12.5"/><line x1="11" y1="6" x2="14.5" y2="10"/><line x1="14.5" y1="6" x2="11" y2="10"/></svg>',
  bell: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5.5a4 4 0 0 0-8 0c0 4.5-2 5.8-2 5.8h12s-2-1.3-2-5.8"/><path d="M9.2 13.8a1.3 1.3 0 0 1-2.4 0"/></svg>',
  bellOff: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5.8 5.8A4 4 0 0 0 4 5.5c0 4.5-2 5.8-2 5.8h9.2M7 2.8A4 4 0 0 1 12 5.5c0 2.2.4 3.5.8 4.3"/><line x1="1.5" y1="1.5" x2="14.5" y2="14.5"/></svg>',
  battery: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1.5" y="4.5" width="11" height="7" rx="1.2"/><line x1="14.5" y1="7" x2="14.5" y2="9"/></svg>',
  batteryLow: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1.5" y="4.5" width="11" height="7" rx="1.2"/><line x1="4" y1="6.8" x2="4" y2="9.2"/><line x1="14.5" y1="7" x2="14.5" y2="9"/></svg>',
  headphones: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12V8a6 6 0 0 1 12 0v4"/><rect x="1.5" y="10" width="3" height="4.5" rx="1"/><rect x="11.5" y="10" width="3" height="4.5" rx="1"/></svg>',
  book: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 13a1.8 1.8 0 0 1 1.8-1.8H13.5V14.5H4.8A1.8 1.8 0 0 1 3 13V3.2A1.8 1.8 0 0 1 4.8 1.5H13.5V11"/></svg>',
  calc: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2.5" y="1.5" width="11" height="13" rx="1.5"/><line x1="5" y1="4.5" x2="11" y2="4.5"/><circle cx="5.5" cy="7.5" r=".7"/><circle cx="8" cy="7.5" r=".7"/><circle cx="10.5" cy="7.5" r=".7"/><circle cx="5.5" cy="10" r=".7"/><circle cx="8" cy="10" r=".7"/><line x1="10.5" y1="9.5" x2="10.5" y2="12"/></svg>',
  user: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="4.8" r="2.6"/><path d="M2.8 14a5.2 5.2 0 0 1 10.4 0"/></svg>',
  check: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="13 4 6 11.5 3 8.5"/></svg>',
  sparkle: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><polygon points="8 1.5 10 6 14.5 8 10 10 8 14.5 6 10 1.5 8 6 6"/></svg>',
  atom: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="1.4"/><ellipse cx="8" cy="8" rx="6" ry="2.6" transform="rotate(30 8 8)"/><ellipse cx="8" cy="8" rx="6" ry="2.6" transform="rotate(-30 8 8)"/></svg>',
  flask: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.5 1.5v4.5L3 12.5a1.3 1.3 0 0 0 1.2 1.8h7.6a1.3 1.3 0 0 0 1.2-1.8L9.5 6V1.5M5.5 1.5h5M6.5 6.5h3"/></svg>',
  lock: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="12" height="7.5" rx="1.4"/><path d="M4.8 7V4.6a3.2 3.2 0 0 1 6.4 0V7"/></svg>',
  unlock: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="12" height="7.5" rx="1.4"/><path d="M4.8 7V4.6a3.2 3.2 0 0 1 6.2-.8"/></svg>',
  rocket: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 11c-1 1-1.3 3.3-1.3 3.3s2.3-.3 3.3-1.3m3-2.5L6 8.5A14 14 0 0 1 14.5 1.5c0 2.2-.8 5.2-4 7.5z"/></svg>',
  bulb: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 12h4M6.8 14.5h2.4M8 1.5a4.6 4.6 0 0 0-4.6 4.6c0 1.6.8 3 2 3.8V11a.7.7 0 0 0 .7.7h3.8a.7.7 0 0 0 .7-.7V9.9a4.6 4.6 0 0 0-2.6-8.4z"/></svg>',
  microscope: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12h5.5M2 14.5h12M9.5 14.5a4.5 4.5 0 1 0-9 0"/><circle cx="6" cy="6" r="1.5"/></svg>',
  flame: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5.7 9.7c.9 0 1.6-.7 1.6-1.6 0-.9-.3-1.4-.6-2-.7-1.4-.2-2.7 1.3-4 .4 1.6 1.3 3.2 2.6 4.3 1.3 1 2 2.3 2 3.6a4.7 4.7 0 1 1-9.4 0c0-.8.3-1.5.7-2 0 .9.8 1.7 1.8 1.7z"/></svg>',
  cloud: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11.5 12.8H6a4.5 4.5 0 1 1 4.4-5.8h1.1a3 3 0 1 1 0 5.8z"/></svg>',
  save: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12.5 14H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7.5l3 3v8a1 1 0 0 1-1 1z"/><polyline points="11 14 11 8.8 5 8.8 5 14"/><polyline points="5 2 5 5.2 10 5.2"/></svg>',
  sync: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="15 2.5 15 6.5 11 6.5"/><polyline points="1 13.5 1 9.5 5 9.5"/><path d="M2.3 6A6 6 0 0 1 12.2 3.8L15 6.5M1 9.5l3 2.8A6 6 0 0 0 13.6 10"/></svg>',
  folder: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.5 12.5a1.2 1.2 0 0 1-1.2 1.2H2.7a1.2 1.2 0 0 1-1.2-1.2V3.2A1.2 1.2 0 0 1 2.7 2h3.3l1.3 2h6a1.2 1.2 0 0 1 1.2 1.2z"/></svg>',
  file: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.5 1.5H4a1.2 1.2 0 0 0-1.2 1.2v10.6A1.2 1.2 0 0 0 4 14.5h8a1.2 1.2 0 0 0 1.2-1.2V5.2z"/><polyline points="9.5 1.5 9.5 5.2 13.2 5.2"/></svg>',
  mail: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1.5" y="3" width="13" height="10" rx="1.2"/><polyline points="14.5 4.2 8 8.8 1.5 4.2"/></svg>',
  printer: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6V1.8h8V6M4 12H2.2a1.2 1.2 0 0 1-1.2-1.2V7.2A1.2 1.2 0 0 1 2.2 6h11.6A1.2 1.2 0 0 1 15 7.2v3.6a1.2 1.2 0 0 1-1.2 1.2H12"/><rect x="4" y="9.5" width="8" height="4.7"/></svg>',
  search: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="7" r="5"/><line x1="14.5" y1="14.5" x2="10.8" y2="10.8"/></svg>',
  camera: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.8 12.5a1.2 1.2 0 0 1-1.2 1.2H2.4a1.2 1.2 0 0 1-1.2-1.2V5.4a1.2 1.2 0 0 1 1.2-1.2H5l1.2-1.8h3.6L11 4.2h2.6a1.2 1.2 0 0 1 1.2 1.2z"/><circle cx="8" cy="8.8" r="2.5"/></svg>',
  image: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="12" height="12" rx="1.2"/><circle cx="5.6" cy="5.6" r="1"/><polyline points="14 10 10.6 6.8 3.5 14"/></svg>',
  fullscreen: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="10 2 14 2 14 6"/><polyline points="6 14 2 14 2 10"/><line x1="14" y1="2" x2="9.5" y2="6.5"/><line x1="2" y1="14" x2="6.5" y2="9.5"/></svg>',
  chart: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="13.5" x2="12" y2="6.5"/><line x1="8" y1="13.5" x2="8" y2="2.5"/><line x1="4" y1="13.5" x2="4" y2="9.5"/></svg>',
  trash: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="2 4 14 4"/><path d="M12.5 4v9.2a1.2 1.2 0 0 1-1.2 1.2H4.7a1.2 1.2 0 0 1-1.2-1.2V4m2.2 0V2.6A1.2 1.2 0 0 1 6.9 1.5h2.2a1.2 1.2 0 0 1 1.2 1.2V4"/></svg>',
  shuffle: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="10.5 2 14 2 14 5.5"/><line x1="2.5" y1="13.5" x2="14" y2="2"/><polyline points="14 10.5 14 14 10.5 14"/><line x1="10" y1="10" x2="14" y2="14"/><line x1="2.5" y1="2.5" x2="6" y2="6"/></svg>',
  cards: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1.5" y="4.5" width="9" height="9.5" rx="1.2"/><path d="M4.2 2h9a1.2 1.2 0 0 1 1.2 1.2v9"/></svg>',
  home: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 6.2L8 1.5l6 4.7v7.2a1.2 1.2 0 0 1-1.2 1.2H3.2A1.2 1.2 0 0 1 2 13.4z"/><polyline points="6 14.5 6 8.2 10 8.2 10 14.5"/></svg>',
  cosmos: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6.5"/><ellipse cx="8" cy="8" rx="2.8" ry="6.5"/><line x1="1.5" y1="8" x2="14.5" y2="8"/></svg>',
  planet: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="4.5"/><ellipse cx="8" cy="8" rx="7.2" ry="2.6" transform="rotate(-20 8 8)"/></svg>',
  wave: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1.5 8c1.6-2.5 3.6-2.5 5.2 0s3.6 2.5 5.2 0 2.6-1.6 2.6-1.6"/></svg>',
  terminal: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="2.8 11.2 6.8 7.2 2.8 3.2"/><line x1="8" y1="12.5" x2="13.2" y2="12.5"/></svg>',
  help: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6.5"/><path d="M6.2 6a2 2 0 0 1 3.8.7c0 1.3-2 2-2 2"/><line x1="8" y1="11.5" x2="8.01" y2="11.5"/></svg>',
  bot: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="12" height="7" rx="1.2"/><circle cx="8" cy="3.5" r="1.3"/><line x1="8" y1="4.8" x2="8" y2="7"/><circle cx="6" cy="10.5" r=".7"/><circle cx="10" cy="10.5" r=".7"/></svg>',
  link: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.8 8.8a3.2 3.2 0 0 0 4.8.3l2-2a3.2 3.2 0 0 0-4.5-4.5L8 3.7M9.2 7.2a3.2 3.2 0 0 0-4.8-.3l-2 2a3.2 3.2 0 0 0 4.5 4.5L8 12.3"/></svg>',
  sprout: '<svg class="ui-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.5 13.5h7M6.8 13.5c3.5-1.6.5-4.2 2-6.5M6.3 6.2c.8.6 1.2 1.5 1.5 2.5-1.3.3-2.3.3-3.2-.2-.8-.4-1.5-1.3-2-2.8 1.9-.3 3 0 3.7.5zM9.4 4a4.5 4.5 0 0 0-.7 2.6c1.2 0 2.2-.4 2.8-.9.7-.7 1.1-1.5 1.1-3-1.8 0-2.6.6-3.2 1.3z"/></svg>'
};

function getIconSVG(name) {
  if (!name) return "";
  if (typeof name !== "string") return "";
  if (name.startsWith("<svg")) return name;
  const map = {
    "\u26A1": UI_SVG.bolt, "bolt": UI_SVG.bolt, "zap": UI_SVG.bolt,
    "\u{1F3B5}": UI_SVG.music, "\u{1F3B6}": UI_SVG.music, "music": UI_SVG.music,
    "\u25B6": UI_SVG.play, "\u25B6\uFE0F": UI_SVG.play, "play": UI_SVG.play,
    "\u23F8": UI_SVG.pause, "\u23F8\uFE0F": UI_SVG.pause, "pause": UI_SVG.pause,
    "\u23F9": UI_SVG.stop, "stop": UI_SVG.stop,
    "\u23EE": UI_SVG.prev, "\u23EE\uFE0F": UI_SVG.prev, "prev": UI_SVG.prev,
    "\u23ED": UI_SVG.next, "\u23ED\uFE0F": UI_SVG.next, "next": UI_SVG.next,
    "\u23F1": UI_SVG.timer, "\u23F1\uFE0F": UI_SVG.timer, "timer": UI_SVG.timer, "clock": UI_SVG.timer,
    "\u{1F50B}": UI_SVG.battery, "battery": UI_SVG.battery,
    "\u{1FAAB}": UI_SVG.batteryLow, "batteryLow": UI_SVG.batteryLow,
    "\u{1F3A7}": UI_SVG.headphones, "headphones": UI_SVG.headphones,
    "\u{1F50A}": UI_SVG.volume, "volume": UI_SVG.volume,
    "\u{1F507}": UI_SVG.mute, "mute": UI_SVG.mute,
    "\u{1F515}": UI_SVG.bellOff, "bellOff": UI_SVG.bellOff,
    "\u{1F514}": UI_SVG.bell, "bell": UI_SVG.bell,
    "book": UI_SVG.book, "notes": UI_SVG.book, "\u{1F4D3}": UI_SVG.book, "\u{1F4DA}": UI_SVG.book,
    "\u{1F9EE}": UI_SVG.calc, "calc": UI_SVG.calc, "calculator": UI_SVG.calc,
    "\u{1F464}": UI_SVG.user, "user": UI_SVG.user, "me": UI_SVG.user,
    "\u269B": UI_SVG.atom, "\u269B\uFE0F": UI_SVG.atom, "atom": UI_SVG.atom, "science": UI_SVG.atom,
    "\u{1F9EA}": UI_SVG.flask, "flask": UI_SVG.flask, "chem": UI_SVG.flask,
    "\u{1F680}": UI_SVG.rocket, "rocket": UI_SVG.rocket, "launch": UI_SVG.rocket,
    "\u{1F4A1}": UI_SVG.bulb, "bulb": UI_SVG.bulb, "idea": UI_SVG.bulb, "trick": UI_SVG.bulb,
    "\u{1F52C}": UI_SVG.microscope, "microscope": UI_SVG.microscope,
    "lock": UI_SVG.lock, "\u{1F512}": UI_SVG.lock, "\u{1F510}": UI_SVG.lock,
    "\u{1F513}": UI_SVG.unlock, "unlock": UI_SVG.unlock,
    "\u{1F525}": UI_SVG.flame, "flame": UI_SVG.flame, "fire": UI_SVG.flame,
    "\u2601": UI_SVG.cloud, "\u2601\uFE0F": UI_SVG.cloud, "cloud": UI_SVG.cloud,
    "\u{1F4BE}": UI_SVG.save, "save": UI_SVG.save,
    "\u{1F504}": UI_SVG.sync, "sync": UI_SVG.sync, "refresh": UI_SVG.sync,
    "\u{1F4C1}": UI_SVG.folder, "\u{1F4C2}": UI_SVG.folder, "folder": UI_SVG.folder,
    "file": UI_SVG.file, "\u{1F4C4}": UI_SVG.file, "\u{1F4CB}": UI_SVG.file,
    "mail": UI_SVG.mail, "\u2709": UI_SVG.mail, "\u2709\uFE0F": UI_SVG.mail, "\u{1F4EC}": UI_SVG.mail, "inbox": UI_SVG.mail,
    "\u{1F5A8}": UI_SVG.printer, "\u{1F5A8}\uFE0F": UI_SVG.printer, "print": UI_SVG.printer,
    "\u{1F50D}": UI_SVG.search, "search": UI_SVG.search,
    "\u{1F4F7}": UI_SVG.camera, "camera": UI_SVG.camera,
    "\u{1F5BC}": UI_SVG.image, "\u{1F5BC}\uFE0F": UI_SVG.image, "image": UI_SVG.image,
    "\u26F6": UI_SVG.fullscreen, "fullscreen": UI_SVG.fullscreen,
    "\u{1F4CA}": UI_SVG.chart, "chart": UI_SVG.chart, "telemetry": UI_SVG.chart,
    "\u{1F5D1}": UI_SVG.trash, "\u{1F5D1}\uFE0F": UI_SVG.trash, "trash": UI_SVG.trash, "clear": UI_SVG.trash,
    "\u{1F500}": UI_SVG.shuffle, "shuffle": UI_SVG.shuffle,
    "\u{1F0CF}": UI_SVG.cards, "cards": UI_SVG.cards, "flashcards": UI_SVG.cards,
    "\u{1F3E0}": UI_SVG.home, "home": UI_SVG.home,
    "\u{1F30C}": UI_SVG.cosmos, "cosmos": UI_SVG.cosmos, "space": UI_SVG.cosmos,
    "\u{1F311}": UI_SVG.planet, "planet": UI_SVG.planet, "earth": UI_SVG.planet,
    "\u{1F30A}": UI_SVG.wave, "wave": UI_SVG.wave,
    "\u{1F4BB}": UI_SVG.terminal, "terminal": UI_SVG.terminal, "dev": UI_SVG.terminal,
    "\u2753": UI_SVG.help, "help": UI_SVG.help,
    "\u{1F916}": UI_SVG.bot, "ai": UI_SVG.bot,
    "\u{1F517}": UI_SVG.link, "link": UI_SVG.link,
    "\u{1F331}": UI_SVG.sprout, "\u{1F33F}": UI_SVG.sprout, "\u{1F343}": UI_SVG.sprout, "sprout": UI_SVG.sprout, "plant": UI_SVG.sprout,
    "\u{1F31F}": UI_SVG.sparkle, "\u2728": UI_SVG.sparkle, "\u2726": UI_SVG.sparkle, "sparkle": UI_SVG.sparkle, "star": UI_SVG.sparkle,
    "\u2705": UI_SVG.check, "\u2713": UI_SVG.check, "check": UI_SVG.check,
    "\u{1F3A8}": UI_SVG.sparkle
  };
  return map[name] || name;
}

/* skience.io main application */

// CLOUD SYNC CONFIGURATION
// 100% Free Forever • Zero Credit Drain • Cross-Device Live Sync
const CLOUD_SYNC_URL = "https://skienceisthebest.vercel.app/api/sync";
const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBuPx45kJLhoiAjP6SaJAxIuZ7dcD7seKE",
  authDomain: "science-io.firebaseapp.com",
  projectId: "science-io",
  storageBucket: "science-io.firebasestorage.app",
  messagingSenderId: "128776151203",
  appId: "1:128776151203:web:189778b06ceb1f0ebd1f16",
  measurementId: "G-WLYT5E4MFD"
};
const DEFAULT_SUPABASE_URL = "https://nidkkbsmptiyixvealum.supabase.co";
const DEFAULT_SUPABASE_KEY = "sb_publishable_VIbgYVwvFU2bcPJNLWg4Qg_Be4paQ_6";

// INITIAL SCIENCE NOTES DATABASE

// Pre-populated with the user's Plant Cell unit (10 Concept Squares from worksheet)
const DEFAULT_SCIENCE_TOPICS = [
  {
    "id": "science-plant-cell",
    "quiz": [
      {
        "q": "According to the teacher notes, which organelle is a thin, semi-permeable layer that surrounds the cell, providing structure and protection?",
        "ans": 0,
        "why": "Teacher note: 'Thin layer that surrounds the cell. It provides structure and protection and it is semi-permeable.'",
        "options": [
          "Cell Membrane",
          "Cell Wall",
          "Cytoplasm",
          "Endoplasmic Reticulum"
        ]
      },
      {
        "q": "In the worksheet explanation, what is the fluid in which organelles are suspended that maintains pressure inside the cell?",
        "ans": 0,
        "why": "Teacher note: 'The fluid in which organelles are suspended. It maintains the pressure inside of the cell.'",
        "options": [
          "Cytoplasm",
          "Central Vacuole",
          "Nucleoplasm",
          "Mitochondria"
        ]
      },
      {
        "q": "Why are Mitochondria nicknamed the 'powerhouse of the cell' in the teacher notes?",
        "ans": 0,
        "why": "Teacher note: 'Nicknamed the powerhouse of the cell because they provide energy for the cell. The site of cellular respiration.'",
        "options": [
          "Because they provide energy for the cell and are the site of cellular respiration",
          "Because they store water and minerals",
          "Because they package proteins into vesicles",
          "Because they make the cell look green"
        ]
      },
      {
        "q": "What does the Smooth Endoplasmic Reticulum do according to the teacher explanation?",
        "ans": 0,
        "why": "Teacher note: 'Smooth endoplasmic reticulum makes lipids (fats), modifies proteins and transports them throughout the cell.'",
        "options": [
          "Makes lipids (fats), modifies proteins and transports them throughout the cell",
          "Performs photosynthesis using light photons",
          "Synthesizes DNA in the control center",
          "Builds the rigid outer cell wall"
        ]
      },
      {
        "q": "According to the notes, what is the exact function of the Golgi Body?",
        "ans": 0,
        "why": "Teacher note: 'Packages proteins and carbohydrates into vesicles for transport outside of the cell.'",
        "options": [
          "Packages proteins and carbohydrates into vesicles for transport outside of the cell",
          "Directs cell division and stores chromosomes",
          "Stores water to keep plant stems upright",
          "Absorbs solar energy to make glucose"
        ]
      },
      {
        "q": "What is described as the control center of the cell that directs functions, contains DNA, and has a nucleolus that aids in making ribosomes?",
        "ans": 0,
        "why": "Teacher note: 'The control center of the cell that directs functions and contains DNA. The nucleolus aids in the production of ribosomes.'",
        "options": [
          "Nucleus & Nucleolus",
          "Central Vacuole",
          "Golgi Body",
          "Rough ER"
        ]
      },
      {
        "q": "According to the teacher notes, what makes Rough ER 'rough' and what is its role?",
        "ans": 0,
        "why": "Teacher note: 'Rough endoplasmic reticulum has ribosomes bound to its membranes. Ribosomes are the site of protein synthesis.'",
        "options": [
          "It has ribosomes bound to its membranes, which are the site of protein synthesis",
          "It has coarse cellulose crystals that protect the nucleus",
          "It has jagged edges to tear up waste materials",
          "It is rough from storing sharp mineral crystals"
        ]
      },
      {
        "q": "Which protective structure is found ONLY in plant cells to provide extra structure and protection for internal structures?",
        "ans": 0,
        "why": "Teacher note: 'Found only in plant cells, cell walls provide extra structure and protection for the cell\\'s internal structures.'",
        "options": [
          "Cell Wall",
          "Cell Membrane",
          "Cytoplasm",
          "Mitochondria"
        ]
      },
      {
        "q": "In the teacher notes, how does a plant cell's vacuole compare to an animal cell's vacuole?",
        "ans": 0,
        "why": "Teacher note: 'Vacuoles provide storage for materials such as water. A plant cell\\'s vacuole is larger than in an animal cell.'",
        "options": [
          "A plant cell's vacuole is larger and provides storage for materials like water",
          "Plant cells do not have vacuoles at all",
          "Plant vacuoles only store air, while animal vacuoles store water",
          "They are identical in size and function"
        ]
      },
      {
        "q": "According to the worksheet notes, what do Chloroplasts convert and what process do they use?",
        "ans": 0,
        "why": "Teacher note: 'Convert light energy from the sun into sugars that can be used for energy in a process called photosynthesis.'",
        "options": [
          "Convert light energy from the sun into sugars for energy in photosynthesis",
          "Convert water into oxygen gas through respiration",
          "Convert proteins into lipids through active transport",
          "Convert sound waves into chemical signals"
        ]
      }
    ],
    "badge": "10 Concept Squares • Plant Biology",
    "color": "emerald",
    "grade": "5th Grade",
    "title": "PLANT CELL",
    "category": "life",
    "isCustom": false,
    "properties": [
      {
        "num": 1,
        "name": "Cell Membrane",
        "trick": "Memory Trick: The security gatekeeper of the cell!",
        "example": "Acts like a smart security gatekeeper with turnstiles. For example, when you water a plant, the membrane opens microscopic channels to let water and vital minerals flow in while blocking harmful bacteria and toxins from getting inside.",
        "formula": "Semi-Permeable Boundary Layer",
        "explanation": "Thin layer that surrounds the cell. It provides structure and protection and it is semi-permeable."
      },
      {
        "num": 2,
        "name": "Cytoplasm",
        "trick": "Memory Trick: Cyto = Cell, Plasm = Fluid matrix!",
        "example": "Functions like a nutrient-rich, shock-absorbing gel filling a water balloon. For example, it cushions the organelles so they do not crash into each other, and lets dissolved sugars and enzymes float smoothly across the cell to wherever reactions occur.",
        "formula": "Gel-Like Organelle Suspension",
        "explanation": "The fluid in which organelles are suspended. It maintains the pressure inside of the cell."
      },
      {
        "num": 3,
        "name": "Mitochondria",
        "trick": "Memory Trick: Mighty Mitochondria = Powerhouse!",
        "example": "Acts like an internal power plant or turbine generator. For example, whenever the plant needs energy to open flower petals or push roots through soil, the mitochondria burn stored glucose sugar with oxygen through cellular respiration to create bursts of ATP energy packets.",
        "formula": "Cellular Respiration: Glucose + O₂ → ATP Energy",
        "explanation": "Nicknamed the powerhouse of the cell because they provide energy for the cell. The site of cellular respiration."
      },
      {
        "num": 4,
        "name": "Endoplasmic Reticulum",
        "trick": "Memory Trick: Smooth ER makes smooth lipids and highways!",
        "example": "Operates like a chemical manufacturing line and internal highway. For example, it synthesizes lipids (essential fats and oils that form waterproof leaf wax coatings) and pipes these newly made fats through smooth winding tubules directly to cell parts that need repair.",
        "formula": "Smooth ER: Lipid Synthesis & Transport",
        "explanation": "Smooth endoplasmic reticulum makes lipids (fats), modifies proteins and transports them throughout the cell."
      },
      {
        "num": 5,
        "name": "Golgi Body",
        "trick": "Memory Trick: Golgi = 'Go' deliver the packages!",
        "example": "Works like a post office and packaging distribution center (like FedEx/Amazon). For example, it receives newly made proteins, wraps them into tiny shipping bubbles called vesicles, prints chemical address tags on them, and ships them out to build plant cell walls or nectar.",
        "formula": "Cellular Packaging & Shipping Center",
        "explanation": "Packages proteins and carbohydrates into vesicles for transport outside of the cell."
      },
      {
        "num": 6,
        "name": "Nucleus & Nucleolus",
        "trick": "Memory Trick: Nucleus = Brain / Boss of the cell!",
        "example": "Acts like the master command center and architectural DNA library. For example, its chromosomes store the complete master recipe manual instructing the cell when to grow, repair damage, and divide; meanwhile, the dense nucleolus inside acts like a machine shop assembling ribosomes.",
        "formula": "Command Center • Genetic DNA Storage",
        "explanation": "The control center of the cell that directs functions and contains DNA. The nucleolus aids in the production of ribosomes."
      },
      {
        "num": 7,
        "name": "Rough ER & Ribosomes",
        "trick": "Memory Trick: Ribosomes make Ribs (Proteins)!",
        "example": "Operates like a heavy-duty protein construction factory. For example, the tiny ribosomes studded all over the rough ER read genetic messenger recipes and snap amino acids together like LEGO bricks to build sturdy structural proteins and digestive enzymes.",
        "formula": "Protein Synthesis Factory",
        "explanation": "Rough endoplasmic reticulum has ribosomes bound to its membranes. Ribosomes are the site of protein synthesis."
      },
      {
        "num": 8,
        "name": "Cell Wall",
        "trick": "Memory Trick: Like a fortress wall outside a castle!",
        "example": "Acts like a rigid outer suit of armor and fortress brick wall made of tough cellulose fibers. For example, it gives plant stems the strong structural backbone needed so giant trees and tall sunflowers can stand straight up against gravity and wind without having bones.",
        "formula": "Rigid Cellulose Outer Shield (Plant Only)",
        "explanation": "Found only in plant cells, cell walls provide extra structure and protection for the cell's internal structures."
      },
      {
        "num": 9,
        "name": "Central Vacuole",
        "trick": "Memory Trick: Vacuole is like a giant water reservoir!",
        "example": "Functions like a giant pressurized water storage reservoir. For example, when you water a drooping wilted plant, this vacuole fills up like an inflated water balloon, pushing outward against the cell wall (turgor pressure) to make stems and leaves stand stiff and crisp.",
        "formula": "Water & Nutrient Storage Sac",
        "explanation": "Vacuoles provide storage for materials such as water. A plant cell's vacuole is larger than in an animal cell."
      },
      {
        "num": 10,
        "name": "Chloroplast",
        "trick": "Memory Trick: Solar panels of the plant world!",
        "example": "Operates like miniature solar panels and a food-cooking kitchen. For example, green chlorophyll pigments inside trap rays of sunlight and mix that solar energy with water and carbon dioxide gas (photosynthesis) to cook sweet glucose sugar for plant food and release fresh oxygen into the air.",
        "formula": "Photosynthesis: 6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ + 6O₂",
        "explanation": "Convert light energy from the sun into sugars that can be used for energy in a process called photosynthesis."
      }
    ],
    "coreFormula": "Cells are the basic building blocks of all living things!",
    "description": "Parts of a plant cell (cell wall, chloroplast, central vacuole, nucleus) and what each part does."
  },
  {
    "id": "animal-cell-01",
    "quiz": [
      {
        "q": "What is the core principle behind Animal Cell (basic unit of life)?",
        "ans": 0,
        "why": "A cell is the basic structural and functional unit of all living organisms!",
        "options": [
          "Cell is the basic unit of life that carries out all living functions",
          "Cells are only found in non-living objects",
          "Cells do not need energy or oxygen",
          "Cells are destroyed whenever they divide"
        ]
      },
      {
        "q": "Why is the Mitochondria nicknamed the powerhouse of the cell?",
        "ans": 0,
        "why": "Mitochondria produce ATP energy for cellular functions!",
        "options": [
          "Because they provide the energy for the cell (site of cellular respiration)",
          "Because they make lipids and fats",
          "Because they store water like a vacuole",
          "Because they contain DNA in the nucleus"
        ]
      }
    ],
    "badge": "10 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "ANIMAL CELL (BASIC UNIT OF LIFE)",
    "category": "biology",
    "isCustom": true,
    "updatedAt": "2026-10-02T20:31:22.181Z",
    "properties": [
      {
        "num": 1,
        "name": "Cell Membrane",
        "trick": "Remember key scientific terms!",
        "example": "Functions like a flexible, selective border patrol surrounding the animal cell. For example, in your muscle and skin cells, it opens tiny doorways to allow glucose sugar and oxygen in while pumping carbon dioxide and waste out, keeping toxic chemicals out.",
        "formula": "Semi-Permeable Boundary",
        "explanation": "Thin layer that surrounds the cell . It provides structure and protection and it is semi-permeable."
      },
      {
        "num": 2,
        "name": "Cytoplasm",
        "trick": "Remember key scientific terms!",
        "example": "Acts like a jelly-like shock absorber and biochemical pool. For example, when you jump or run, the fluid cytoplasm cushions your cell's delicate organelles against physical impact and maintains internal turgor pressure so the cell maintains its proper shape.",
        "formula": "Internal Fluid",
        "explanation": "The fluid in which organelles are suspended. It maintains the pressure inside of the cell."
      },
      {
        "num": 3,
        "name": "Mitochondria",
        "trick": "Remember key scientific terms!",
        "example": "Runs as the cellular powerhouse and energy turbine. For example, during gym class when you sprint, your heart and muscle cell mitochondria consume the sugar from your meals and oxygen from your lungs to generate millions of ATP energy fuel sparks every second.",
        "formula": "Powerhouse of the Cell",
        "explanation": "Nicknamed the powerhouse of the cell because they provide the energy for the cell. The site of cellular respiration."
      },
      {
        "num": 4,
        "name": "Endoplasmic Reticulum",
        "trick": "Remember key scientific terms!",
        "example": "Serves as a detoxification laboratory and lipid highway. For example, in liver cells, the smooth ER breaks down medicines, alcohol, and harmful pollutants to detoxify your bloodstream, while also synthesizing essential cell fats, steroids, and cholesterol.",
        "formula": "Transport System",
        "explanation": "Smooth endoplasmic reticulum makes lipids (fats), modifies protein and transports them throughout the cell."
      },
      {
        "num": 5,
        "name": "Golgi Body",
        "trick": "Remember key scientific terms!",
        "example": "Functions like a sorting and packaging depot. For example, in your salivary gland cells, the Golgi body wraps digestive enzymes into membrane-bound vesicle packages and exports them out of the cell into your saliva to help dissolve food as you chew.",
        "formula": "Packaging Center",
        "explanation": "Packages proteins and carbohydrates into vesicles for transport outside of the cell."
      },
      {
        "num": 6,
        "name": "Nucleus & Nucleolus",
        "trick": "Remember key scientific terms!",
        "example": "Acts like the master headquarters holding your genetic code (DNA). For example, it contains your unique hereditary chromosomes that determine eye color, hair type, and instruct white blood cells how to fight germs; the nucleolus inside manufactures ribosome workers.",
        "formula": "Control Center & DNA",
        "explanation": "Control center of the cell that directs functions and contains DNA. The nucleolus aids in the production of ribosomes."
      },
      {
        "num": 7,
        "name": "Rough ER & Ribosomes",
        "trick": "Remember key scientific terms!",
        "example": "Operates like an automated protein factory floor. For example, ribosomes on the rough ER translate RNA instructions into collagen (which keeps your skin elastic and heals cuts) and antibodies (which hunt down and destroy invading viruses).",
        "formula": "Protein Synthesis",
        "explanation": "Rough Endoplasmic Reticulum has ribosomes bound to its membranes. Ribosomes are the site of protein synthesis."
      },
      {
        "num": 8,
        "name": "Lysosome",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the cell's garbage disposal and recycling center. For example, when white blood cells swallow invading germs, lysosomes flood the bacteria with powerful digestive acid enzymes to shred the germs into harmless scraps and recycle reusable parts.",
        "formula": "Digestive System of the Cell",
        "explanation": "The lysosome is the digestive system of the cell. They help to break down waste molecules."
      },
      {
        "num": 9,
        "name": "Vacoules & Vesicles",
        "trick": "5th Grade Science Concept",
        "example": "Function like cellular delivery cargo vans and storage pods. For example, small vesicles bubble off cell membranes to transport hormones across the bloodstream or store water and salts until cell parts need them.",
        "formula": "Cell = Basic Unit of Life",
        "explanation": "Vacoules provide storage for materials such as water. Smaller vesicles move stuff in and out of the cell. "
      },
      {
        "num": 10,
        "name": "Centrosome & Centrioles",
        "trick": "5th Grade Science Concept",
        "example": "Operate like construction organizers and cable winches during cell division. For example, when skin cells divide to heal a scraped knee, centrioles shoot out microtubule cables that reel duplicated chromosomes apart evenly into two new twin cells.",
        "formula": "Cell = Basic Unit of Life",
        "explanation": "Centrosomes serve as the main microtuble organizing center. Centrioles in the centrosomes help the cell divide during mitosis."
      }
    ],
    "coreFormula": "Cell = Basic Unit of Life",
    "description": "Learn about the Animal Cell Parts and Organelle Functions",
    "redirectUrl": ""
  },
  {
    "id": "multicellular-organisms-03",
    "quiz": [
      {
        "q": "What is a multicellular organism?",
        "ans": 0,
        "why": "Multicellular organisms are composed of two or more cells and need all parts to survive!",
        "options": [
          "an organism made of two or more cells",
          "an organism made of only 1 cell.",
          "an organism that moves only with pseudopodia",
          "an organism without any living cells"
        ]
      },
      {
        "q": "In multicellular plants, what does 'autotroph' mean?",
        "ans": 0,
        "why": "Plants belong to the category of autotrophs, meaning self feeders!",
        "options": [
          "self feeders (plants that make their own food)",
          "Heterotrophic - other feeder, organisms that eat other organisms",
          "an organism made of only 1 cell.",
          "organisms that move by using a flagellum"
        ]
      },
      {
        "q": "In the kingdom Animalia, what does 'heterotrophic' mean?",
        "ans": 0,
        "why": "In the kingdom Animalia, animals are heterotrophic and eat other organisms!",
        "options": [
          "Heterotrophic - other feeder, organisms that eat other organisms.",
          "Autotroph - self feeders",
          "an organism made of only 1 cell.",
          "organisms that move by cillia (hair like)"
        ]
      }
    ],
    "badge": "1 Concept Square • Complex Life",
    "color": "purple",
    "grade": "5th Grade",
    "title": "MULTICELLULAR ORGANISMS",
    "category": "biology",
    "isCustom": true,
    "properties": [
      {
        "num": 1,
        "name": "Multicellular Organisms",
        "trick": "Multi = many cells working together to survive!",
        "example": "Functions through teamwork and division of labor between specialized cells. For example, inside a human body or an oak tree, billions of specialized cells work together: red blood cells deliver oxygen, muscle cells contract to create motion, and root cells absorb water // no single cell could survive alone, but together they form living tissues, organs, and body systems that keep the entire organism alive!",
        "formula": "an organism made with two or more cells",
        "explanation": "• These organisms are able to be seen with the naked eye\n• These organisms need all parts of themselves to survive\n• Plants belong to the category of autotrophs, meaning self feeders\n• In the kingdom Animalia; Heterotrophic - other feeder, organisms that eat other organisms."
      }
    ],
    "coreFormula": "an organism made of two or more cells",
    "description": "Multicellular Organisms"
  },
  {
    "id": "unicellular-organisms-04",
    "quiz": [
      {
        "q": "What is a unicellular organism?",
        "ans": 0,
        "why": "A unicellular organism is made of only 1 cell!",
        "options": [
          "an organism made of only 1 cell.",
          "an organism made of two or more cells",
          "an organism with millions of organs",
          "an organism that is visible to the naked eye"
        ]
      },
      {
        "q": "How does a Euglena move?",
        "ans": 0,
        "why": "Euglena moves using a whip-like flagellum!",
        "options": [
          "Move by using  a flagellum (thread like structures that whip around).",
          "A paramecium moves by cillia (hair like)",
          "An amoeba moves by projecting out its cytoplasm. These projections are called pseudopodia (false feet).",
          "It uses roots to anchor itself"
        ]
      },
      {
        "q": "How does a Paramecium move?",
        "ans": 0,
        "why": "Paramecium moves using tiny hair-like cilia!",
        "options": [
          "A paramecium moves by cillia (hair like)",
          "Move by using  a flagellum (thread like structures that whip around).",
          "An amoeba moves by projecting out its cytoplasm. These projections are called pseudopodia (false feet).",
          "It floats without any moving structures"
        ]
      },
      {
        "q": "How does an Amoeba move?",
        "ans": 0,
        "why": "Amoeba projects out its cytoplasm in false feet called pseudopodia!",
        "options": [
          "An amoeba moves by projecting out its cytoplasm. These projections are called pseudopodia (false feet).",
          "Move by using  a flagellum (thread like structures that whip around).",
          "A paramecium moves by cillia (hair like)",
          "It swims with fins"
        ]
      },
      {
        "q": "How does a Volvox move?",
        "ans": 0,
        "why": "Volvox cells move by beating their flagella!",
        "options": [
          "They move by using a flagellum ( thread like structures that whip around).",
          "A paramecium moves by cillia (hair like)",
          "An amoeba moves by projecting out its cytoplasm. These projections are called pseudopodia (false feet).",
          "It does not move at all"
        ]
      }
    ],
    "badge": "4 Concept Squares • Microscopic Life",
    "color": "amber",
    "grade": "5th Grade",
    "title": "UNICELLULAR ORGANISM",
    "category": "biology",
    "isCustom": true,
    "properties": [
      {
        "num": 1,
        "name": "Euglena",
        "trick": "Flagellum whips like a propeller!",
        "example": "Functions like a microscopic, self-steering solar submarine. For example, it senses light with a red eyespot and whips a long, thread-like flagellum like an outboard motor propeller to swim toward sunlit pond water, where its green chloroplasts make food through photosynthesis (or it absorbs dissolved nutrients if trapped in the dark).",
        "formula": "an organism made of only 1 cell.",
        "explanation": "Move by using  a flagellum (thread like structures that whip around)."
      },
      {
        "num": 2,
        "name": "Volvox",
        "trick": "Volvox colonies roll with flagella!",
        "example": "Functions like a synchronized swimming sphere. For example, up to 50,000 individual green algal cells join together into a hollow globe; by beating their paired flagella in synchronized harmony, they roll the entire spherical colony through pond water toward sunlight like a living green wheel.",
        "formula": "an organism made of only 1 cell.",
        "explanation": "They move by using a flagellum ( thread like structures that whip around)."
      },
      {
        "num": 3,
        "name": "Paramecium",
        "trick": "Cilia paddle like tiny oars!",
        "example": "Functions like a microscopic slipper-shaped boat powered by thousands of tiny oars. For example, thousands of microscopic hair-like cilia covering its outer body paddle in coordinated waves to dart smoothly forward and backward through pond water, while sweeping bacteria into its oral groove mouth to eat.",
        "formula": "an organism made of only 1 cell.",
        "explanation": "A paramecium moves by cillia (hair like)"
      },
      {
        "num": 4,
        "name": "Amoeba",
        "trick": "Pseudopodia means false feet!",
        "example": "Works like a shape-shifting crawler and microscopic predator. For example, when it moves or hunts, it extends its fluid cytoplasm forward into temporary bulging arms called pseudopodia ('false feet') to crawl over rocks, and wraps two pseudopodia arms completely around bacteria to engulf and digest them inside a food vacuole.",
        "formula": "an organism made of only 1 cell.",
        "explanation": "An amoeba moves by projecting out its cytoplasm. These projections are called pseudopodia (false feet)."
      }
    ],
    "coreFormula": "an organism made of only 1 cell.",
    "description": "Examples of unicellular organisms: Amoeba (pseudopodia), Bacteria, Euglena (flagellum, and paramecium (cilla). Other types of unicellular organisms come from the kingdom Protista. Examples of protists include algae, Amoeba, Paramecium, volvox, amd Euglena. Algae are plantlike protists and they contain chlorophyll."
  },
  {
    "id": "science-unit-1790909251250",
    "quiz": [
      {
        "q": "What is to provide posture, generate heat, and provide movement?",
        "ans": 2,
        "why": "Functions of the muscular system: \"Functions of the muscular system are to provide posture, generate heat, and provide movement. \"",
        "options": [
          "Skeletal Muscle",
          "Smooth Muscle",
          "Functions of the muscular system",
          "Cardiac Muscle"
        ]
      },
      {
        "q": "What msucle is a voluntary this structure which means you can control what you do. It is found on one end of a bone. Its function is to give your body power and strength?",
        "ans": 0,
        "why": "Skeletal Muscle: \"A skeletal msucle is a voluntary muscle which means you can control what you do. It is found on one end of a bone. Its function is to give your body power and strength. \"",
        "options": [
          "Skeletal Muscle",
          "Functions of the muscular system",
          "Smooth Muscle",
          "Cardiac Muscle"
        ]
      },
      {
        "q": "What is a involuntary this structure which means you can't control what you do. This is this structure typically like the heart. this structure are found in your bladder, stomach, and uterus and in other places?",
        "ans": 3,
        "why": "Smooth Muscle: \"A smooth muscle is a involuntary muscle which means you can't control what you do. This is muscles typically like the heart. Smooth muscles are found in your bladder, stomach, and uterus and in other places.\"",
        "options": [
          "Cardiac Muscle",
          "Skeletal Muscle",
          "Functions of the muscular system",
          "Smooth Muscle"
        ]
      },
      {
        "q": "What is the heart this structure. It is found in the heart. The function is to pump blood out?",
        "ans": 2,
        "why": "Cardiac Muscle: \"A cardiac muscle is the heart muscle. It is found in the heart. The function is to pump blood out.\"",
        "options": [
          "Functions of the muscular system",
          "Skeletal Muscle",
          "Cardiac Muscle",
          "Smooth Muscle"
        ]
      },
      {
        "q": "What is helping for your skeletal muscle to stick to your bones. Their functions is to attach your muscles to your bones?",
        "ans": 0,
        "why": "Tendons: \"Tendons are helping for your skeletal muscle to stick to your bones. Their functions is to attach your muscles to your bones.\"",
        "options": [
          "Tendons",
          "Functions of the muscular system",
          "Skeletal Muscle",
          "Smooth Muscle"
        ]
      },
      {
        "q": "The bicep is when you contract your muscles and you can see it when you contract it. The function is for to help you pick up simple things. The tricep straightens your elbow. The difference is what straightens the elbow and what contract it?",
        "ans": 2,
        "why": "Biceps v Triceps: \"The bicep is when you contract your muscles and you can see it when you contract it. The function is for to help you pick up simple things. The tricep straightens your elbow. The difference is the triceps straightens the elbow and the biceps contract it. \"",
        "options": [
          "Smooth Muscle",
          "Functions of the muscular system",
          "Biceps v Triceps",
          "Skeletal Muscle"
        ]
      }
    ],
    "badge": "6 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "MUSCULAR SYSTEM",
    "category": "physical",
    "isCustom": true,
    "updatedAt": "2026-10-11T16:50:42.867Z",
    "properties": [
      {
        "num": 1,
        "name": "Functions of the muscular system",
        "trick": "5th Grade Science Concept",
        "example": "Acts as the body's mechanical engine and central heating system. For example, when you shiver in cold weather, your muscles rapidly twitch to generate internal body heat, while simultaneously holding your spine upright in proper posture so you can sit and run.",
        "formula": "There is no scientific formula",
        "explanation": "Functions of the muscular system are to provide posture, generate heat, and provide movement. "
      },
      {
        "num": 2,
        "name": "Skeletal Muscle",
        "trick": "5th Grade Science Concept",
        "example": "Functions like powerful biological pull cables under your conscious command. For example, when you decide to kick a soccer ball or write with a pencil, your brain sends electrical pulses to voluntary skeletal muscles attached to your leg and hand bones to yank them into motion.",
        "formula": "No formula",
        "explanation": "A skeletal msucle is a voluntary muscle which means you can control what you do. It is found on one end of a bone. Its function is to give your body power and strength. "
      },
      {
        "num": 3,
        "name": "Smooth Muscle",
        "trick": "5th Grade Science Concept",
        "example": "Operates like an automatic, tireless motor running in the background. For example, while you sleep, smooth muscles in your stomach and intestines rhythmically squeeze and churn food without you ever having to think about it or tell them to work.",
        "formula": "NO FORMULA",
        "explanation": "A smooth muscle is a involuntary muscle which means you can't control what you do. This is muscles typically like the heart. Smooth muscles are found in your bladder, stomach, and uterus and in other places."
      },
      {
        "num": 4,
        "name": "Cardiac Muscle",
        "trick": "Lab Memory Tip",
        "example": "Works like an unbreakable, self-beating hydraulic pump. For example, the specialized muscular walls of your heart squeeze and relax over 100,000 times every single day without ever stopping to rest, continuously pushing blood through thousands of miles of blood vessels.",
        "formula": "No FORMULA",
        "explanation": "A cardiac muscle is the heart muscle. It is found in the heart. The function is to pump blood out."
      },
      {
        "num": 5,
        "name": "Tendons",
        "trick": "5th Grade Science Concept",
        "example": "Act like super-strong biological steel cables anchoring muscles to bones. For example, your Achilles tendon at the back of your ankle connects your powerful calf muscle to your heel bone, transmitting the muscular pull force that lets you jump and run.",
        "formula": "NO FORMULA",
        "explanation": "Tendons are helping for your skeletal muscle to stick to your bones. Their functions is to attach your muscles to your bones."
      },
      {
        "num": 6,
        "name": "Biceps v Triceps",
        "trick": "5th Grade Science Concept",
        "example": "Function as an opposing tag-team pulley system. For example, to lift a backpack toward your shoulder, your bicep muscle contracts and shortens while the tricep relaxes; then, when you lower the bag, your tricep contracts to pull your elbow straight again.",
        "formula": "NO FORMULA!",
        "explanation": "The bicep is when you contract your muscles and you can see it when you contract it. The function is for to help you pick up simple things. The tricep straightens your elbow. The difference is the triceps straightens the elbow and the biceps contract it. "
      }
    ],
    "coreFormula": "5th Grade Scientific Principle",
    "description": "The muscular system has over 600 muscles; without muscles, we would be unable to move. When a muscle get shortened it contracts, which lets your bones move.",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1790994413345",
    "badge": "5 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "SKELETAL SYSTEM",
    "category": "physical",
    "isCustom": true,
    "updatedAt": "2026-10-03T02:26:53.345Z",
    "properties": [
      {
        "num": 1,
        "name": "What are Bones Made Of?",
        "trick": "5th Grade Science Concept",
        "example": "Functions as living composite armor that is light, hollow, and incredibly strong. For example, the hard compact bone outer shell resists cracking when you jump, spongy cancellous bone absorbs shock like honeycomb arches, and inner bone marrow constantly manufactures billions of fresh red blood cells.",
        "formula": "NO FORMULA",
        "explanation": "Bones are made out of periosteum, compact bone , cancellous bone, and bone marrow."
      },
      {
        "num": 2,
        "name": "Cartilage & Ligaments",
        "trick": "5th Grade Science Concept",
        "example": "Act like slick shock-absorbing bumpers and durable rubber tie-down straps. For example, cartilage cushions your knee joints so bone never grinds on bone when running, while stretchy ligaments strap your thigh and shin bones firmly together so your knee doesn't twist out of place.",
        "formula": "No FORMULA",
        "explanation": "Cartilage is soft and flexible and as your growing your bones slowly replaces it. Ligaments are things that hold bones together in the joints, and they are like strong rubber bands."
      },
      {
        "num": 3,
        "name": "Types of Joints ",
        "trick": "5th Grade Science Concept",
        "example": "Function like mechanical door hinges and omnidirectional joysticks. For example, your elbow and knee hinge joints open and shut in one direction like a door, your shoulder ball-and-socket joint lets your arm swing in complete 360-degree circles, and synovial fluid oils the joint like WD-40 so bones glide friction-free.",
        "formula": "NO FORMULA",
        "explanation": "The hinge joint helps you bend your arms and legs. It also helps you straighten them. The ball-and-socket joint helps you swing your arms and your legs. Synovial fluid is like oiling the valves of a brass instrument; it lets your bones move freely. "
      },
      {
        "num": 4,
        "name": "Where is the smallest bone in your body? What is it called? Size?",
        "trick": "5th Grade Science Concept",
        "example": "Works like an tiny, sensitive acoustic amplifier in your middle ear. For example, this tiny 2-to-3-millimeter stirrup-shaped bone vibrates when sound waves hit your eardrum, magnifying sound vibrations and transmitting them directly into the fluid-filled cochlea so your brain can hear whispers and music.",
        "formula": "NO FORMULA",
        "explanation": "The smallest bone in your body is the stapes, and it is 2 to 3 millimeters long."
      },
      {
        "num": 5,
        "name": "What are the different jobs of the vertebrae?",
        "trick": "5th Grade Science Concept",
        "example": "Works like a flexible armored pillar and protective cable conduit. For example, the 33 stacked ring-shaped bones of your spine support the entire heavy weight of your upper body, bend so you can touch your toes, and form a hollow armored tunnel shielding your delicate spinal cord from injury.",
        "formula": "NO FORMULA",
        "explanation": "Your vertebrae help bend your neck, and they carry the weight of your upper body."
      }
    ],
    "coreFormula": "NO FORMULA",
    "description": "Learn about the parts of the skeletal system",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1790995817093",
    "badge": "13 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "DIGESTIVE SYSTEM",
    "category": "custom",
    "isCustom": true,
    "updatedAt": "2026-10-03T17:16:55.102Z",
    "properties": [
      {
        "num": 1,
        "name": "Mouth",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the initial crushing mill and chemical prep kitchen. For example, your sharp incisors slice an apple while molars grind it down, and saliva glands squirt amylase enzymes that instantly start dissolving starches into simple sugars before you even swallow.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Your mouth has teeth that tear up and chop your food. Your saliva enzymes break it down even more."
      },
      {
        "num": 2,
        "name": "Esophagus",
        "trick": "5th Grade Science Concept",
        "example": "Operates like an automated muscular elevator chute. For example, when you swallow a bite of bread, wave-like muscular contractions called peristalsis push the food bolus downward into your stomach, working so reliably that food would still travel to your stomach even if you were hanging upside down!",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• (Pushes food down to the stomach by Peristalsis)\n• The tube that connects your mouth and the stomach"
      },
      {
        "num": 3,
        "name": "Stomach",
        "trick": "5th Grade Science Concept",
        "example": "Acts like a churning acid blender and sterilization vat. For example, three layers of thick smooth muscle mash food into a liquid soup called chyme, while hydrochloric acid kills swallowed germs and activates pepsin enzymes to break tough proteins down.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• (Smooth Muscles churn and mix the food.)\n• Chemicals, like acids, break down the food\n"
      },
      {
        "num": 4,
        "name": "Small Intestine",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the master nutrient absorption highway. For example, along its 20-foot winding length, microscopic finger-like projections soak up glucose, vitamins, and minerals directly into your bloodstream over 4 to 8 hours to nourish your cells.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "(Tube that is 20 feet long. Food stays in your small intestine for 4 to 8 hours.)\n• Continues to break down food   \n• Absorbs nutrients into the blood\n"
      },
      {
        "num": 5,
        "name": "Large Intestine",
        "trick": "5th Grade Science Concept",
        "example": "Works like a water reclamation and waste compaction facility. For example, as leftover liquid waste moves through over 10 to 12 hours, the large intestine reabsorbs almost all the water back into your body so you don't dehydrate, compacting leftovers into solid waste.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "(Tube that is 5 feet long. Gets waste from the small intestine. Waste stays for 10 to 12 hours.)\n• Absorbs (soaks up) water from the remaining food\n• Contains bacteria that breaks down food\n"
      },
      {
        "num": 6,
        "name": "Rectum",
        "trick": "5th Grade Science Concept",
        "example": "Works like a temporary holding vault with sensory stretch receptors. For example, it stores compacted stool until sensory nerves alert your brain that it is time to visit the bathroom, then coordinates with the anal sphincter to release it cleanly.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Rectum (Stores waste until it leaves the body through the anus)\n"
      },
      {
        "num": 7,
        "name": "Gall Bladder",
        "trick": "5th Grade Science Concept",
        "example": "Acts like a pressurized squeeze pouch holding concentrated digestive bile. For example, when you eat french fries or butter, the gall bladder squeezes greenish-yellow bile into your small intestine to break large fat blobs down into tiny droplets that enzymes can digest.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "(Storage tank for bile - a greenish-yellow liquid, that helps your body break down and use fats. Located under your liver. Shaped like a pear.)\n"
      },
      {
        "num": 8,
        "name": "Liver",
        "trick": "5th Grade Science Concept",
        "example": "Functions as your body's central chemical processing factory and warehouse. For example, it filters poisons and toxins from blood, manufactures digestive bile, and stores extra glucose as glycogen, releasing it whenever your muscles need extra sprint energy.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "(Factory for antibodies and bile. Store vitamins and sugars until your body needs them.)\n"
      },
      {
        "num": 9,
        "name": "Pancreas",
        "trick": "5th Grade Science Concept",
        "example": "Works like a busy digestive organ and blood-sugar regulator. For example, it pumps digestive juices that neutralize stomach acid and produces insulin hormones that unlock your cell doors so glucose sugar can leave the bloodstream and enter your cells.",
        "formula": "5th Grade Scientific Principle",
        "explanation": " (Helps you digest food by breaking down sugars.)\n"
      },
      {
        "num": 10,
        "name": "Summary",
        "trick": "Lab Memory Tip",
        "example": "Functions through two coordinated phases: mechanical breakdown (teeth chewing and stomach churning into smaller pieces) followed by chemical breakdown (acids and enzymes dissolving complex food molecules into microscopic nutrients that blood can carry).",
        "formula": "NO FORMULA",
        "explanation": "• Mechanical digestion breaks food down into smaller pieces   \n• Chemical digestion breaks food down into nutrients "
      },
      {
        "num": 11,
        "name": "Role of villi",
        "trick": "5th Grade Science Concept",
        "example": "Function like millions of plush velvet towel fibers maximizing absorption surface area. For example, if all the microscopic villi in your small intestine were smoothed flat, they would cover an entire tennis court, allowing nutrients to soak into blood vessels in seconds!",
        "formula": "NO FORMULA",
        "explanation": "Villi breaks down food into nutrients"
      },
      {
        "num": 12,
        "name": "What is gut flora?",
        "trick": "5th Grade Science Concept",
        "example": "Works like a bustling community of trillions of helpful friendly bacteria. For example, these microbes digest stubborn fiber that your human enzymes cannot break down, manufacture essential Vitamin K for blood clotting, and fight off dangerous food poisoning germs.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Gut flora are bacteria inside your gut. It makes up 30% of your body weight and it helps turn food into nutrients.  "
      },
      {
        "num": 13,
        "name": "Who is a gasteroentologist?",
        "trick": "5th Grade Science Concept",
        "example": "Works like a specialized medical detective and physician for the digestive tract. For example, they diagnose and treat stomach ulcers, food allergies, acid reflux, and bowel conditions using cameras and medical tests to keep your gut healthy.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Gastroentologists are people that specialize in the digestive system"
      }
    ],
    "coreFormula": "5th Grade Scientific Principle",
    "description": "• Digest the food we eat\n• Take the nutrients out of your food so your body can use it",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1791049853454",
    "badge": "5 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "WASTE THAT YOUR BODY GETS RID OF.",
    "category": "custom",
    "isCustom": true,
    "updatedAt": "2026-10-03T17:50:53.454Z",
    "properties": [
      {
        "num": 1,
        "name": "Urine",
        "trick": "5th Grade Science Concept",
        "example": "Functions as liquid chemical waste filtered from your bloodstream. For example, when your kidneys filter blood, they dissolve excess urea, salts, and unneeded water into urine; pale yellow urine indicates healthy hydration, while dark yellow warns you to drink a glass of water immediately!",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Goes into the kidneys' waste products. If your urine is yellow, then you need to drink more liquids and fluids."
      },
      {
        "num": 2,
        "name": "Puss",
        "trick": "5th Grade Science Concept",
        "example": "Works like an honorable battlefield collection of fallen immune soldiers. For example, when you scrape your knee and bacteria invade, white blood cells rush in and destroy the invaders; the resulting white fluid is made of dead bacteria, spent white blood cells, and damaged tissue cells.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Pus is dead skin cells that form when you get a cut and bacteria get in. Pus is produced from cells."
      },
      {
        "num": 3,
        "name": "CO2",
        "trick": "5th Grade Science Concept",
        "example": "Works like a gaseous combustion exhaust byproduct of cellular respiration. For example, every time your cells burn glucose for energy, carbon dioxide gas builds up in your blood; your bloodstream carries it to your lungs, where you exhale it out into the air with every breath.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "When you breathe in, it goes through your lungs and you breathe out CO2"
      },
      {
        "num": 4,
        "name": "Poop",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the elimination of unabsorbed solid food remnants, dead cells, and gut bacteria. For example, getting rid of solid bowel movements every 24 hours prevents toxic buildup and keeps your colon healthy, light, and clear.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Takes 24 hours to get rid of. Getting rid of it keeps you healthy."
      },
      {
        "num": 5,
        "name": "Fart",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the natural pressure relief release of intestinal gases. For example, when gut bacteria ferment and digest hard-to-break-down beans and broccoli, harmless gases like nitrogen and methane build up pressure until they safely escape as a burp or a flatulence release.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Farts are caused by bacteria, and they can escape as a burp or a fart."
      }
    ],
    "coreFormula": "5th Grade Scientific Principle",
    "description": "Learn about the waste your body doesn't need",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1791055801467",
    "badge": "5 Concept Squares",
    "color": "emerald",
    "grade": "5th Grade",
    "title": "WASTE THAT PROTECTS",
    "category": "physical",
    "isCustom": true,
    "updatedAt": "2026-10-03T19:30:01.467Z",
    "properties": [
      {
        "num": 1,
        "name": "Mucus",
        "trick": "5th Grade Science Concept",
        "example": "Works like a sticky, germ-trapping biological flypaper lining your airways. For example, when you inhale dust, soot, or pollen, sticky nasal mucus traps the foreign particles before they can reach your lungs, and sweeps them harmlessly away.",
        "formula": "It can protect you by keeping germs and dirt out of your body.",
        "explanation": "Mucus protects you by catching any dirt from entering your nose. When you get sick, mucus membranes go overload."
      },
      {
        "num": 2,
        "name": "Vomit",
        "trick": "5th Grade Science Concept",
        "example": "Works like an emergency biological eject button. For example, if you accidentally swallow spoiled food or a dangerous toxin, your stomach senses the poison and violently reverses peristalsis to forcefully expel the contents before the poison can be absorbed into your blood.",
        "formula": "It can protect you by keeping germs and dirt out of your body.",
        "explanation": "When you eat too much food it wants to throw up. You vomit because your body wants to get rid of something."
      },
      {
        "num": 3,
        "name": "Earwax",
        "trick": "5th Grade Science Concept",
        "example": "Works like a waterproof, antimicrobial trap door lining your ear canal. For example, sticky cerumen traps dirt, insects, and fungal spores from reaching your delicate eardrum, while natural antibacterial oils keep the ear canal skin moisturized and germ-free.",
        "formula": "It can protect you by keeping germs and dirt out of your body.",
        "explanation": "Earwax helps you by catching dirt and helps protect  the skin. You shouldn't put Q-tips into the ear canal because Q-tips are used for medicine. (Credit to Clifford for teaching me this)"
      },
      {
        "num": 4,
        "name": "Tears",
        "trick": "5th Grade Science Concept",
        "example": "Function as an automatic optical wash and sterile saline rinse. For example, every time you blink, tear glands flush a protective film of saltwater and antibacterial lysozyme enzymes across your eyeball to wash away dirt specks and keep corneal cells crystal clear.",
        "formula": "It can protect you by keeping germs and dirt out of your body.",
        "explanation": "You get tears to help keep your eyes moist and to wash off dirt from your face."
      },
      {
        "num": 5,
        "name": "Sweat",
        "trick": "5th Grade Science Concept",
        "example": "Works like an evaporative cooling air conditioning system. For example, when your body temperature rises during sports on a hot day, sweat glands release droplets of water onto your skin; as the liquid sweat evaporates into the air, it pulls heat away from your skin, cooling you down.",
        "formula": "It can protect you by keeping germs and dirt out of your body.",
        "explanation": "You sweat to regulate your body temperature"
      }
    ],
    "coreFormula": "It can protect you by keeping germs and dirt out of your body.",
    "description": "Learn about the waste that protects your body.",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1791057557017",
    "badge": "1 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "EXCRETORY SYSTEM",
    "category": "physical",
    "isCustom": true,
    "updatedAt": "2026-10-03T19:59:17.017Z",
    "properties": [
      {
        "num": 1,
        "name": "Other Excretory Organs",
        "trick": "5th Grade Science Concept",
        "example": "Works like a multi-organ detox cleanup network working together to flush toxic byproducts. For example, lungs exhale water vapor and carbon dioxide gas, sweat glands in the skin excrete excess salts and heat, and the liver filters harmful chemicals and medications out of the bloodstream.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Lungs remove water vapor and carbon dioxide from the body each time you exhale\n• Skin excretes water and salts when the body is overheated\n• The liver filters blood to remove harmful chemicals and bacteria"
      }
    ],
    "coreFormula": "5th Grade Scientific Principle",
    "description": "• Collects wastes produced by the cells & removes them from the body.",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1791058004932",
    "badge": "5 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "URINARY SYSTEM",
    "category": "physical",
    "isCustom": true,
    "updatedAt": "2026-10-03T20:06:44.932Z",
    "properties": [
      {
        "num": 1,
        "name": "Kidneys",
        "trick": "5th Grade Science Concept",
        "example": "Function as twin high-efficiency water treatment and blood purification plants. For example, your two bean-shaped kidneys filter your entire body's blood volume over 400 times every day, sifting out urea waste and excess salts while reabsorbing clean water back into circulation.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Major organs of the urinary system remove excess water and other waste materials by filtering blood."
      },
      {
        "num": 2,
        "name": "Nephrons",
        "trick": "5th Grade Science Concept",
        "example": "Operate as over one million microscopic filtration funnels inside each kidney. For example, each nephron acts like a tiny sieve that strains out liquid waste and toxins into collecting ducts while keeping valuable red blood cells and protein molecules in your blood.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Tiny structures in the kidneys that filter liquid waste from blood to produce urine"
      },
      {
        "num": 3,
        "name": "Ureters",
        "trick": "5th Grade Science Concept",
        "example": "Act like two narrow muscular pipeline conduits. For example, these 10-inch tubes use rhythmic smooth muscle waves to push urine droplets downward from each kidney into the urinary bladder, preventing backflow.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Tubes that carry wastes from the kidneys to the urinary bladder."
      },
      {
        "num": 4,
        "name": "Urinary Bladder",
        "trick": "5th Grade Science Concept",
        "example": "Works like an expandable, stretchy muscular holding tank. For example, its balloon-like elastic walls stretch to comfortably store up to two cups of urine until sensory nerves tell your brain it is time to empty it.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Muscular organ that stores urine until it passes out of the body"
      },
      {
        "num": 5,
        "name": "Urethra",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the final exit pipeline and valve system. For example, a ring of sphincter muscle relaxes to allow stored urine to flow smoothly out of the bladder and leave the body cleanly during urination.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Tube that opens to release urine out of the body."
      }
    ],
    "coreFormula": "5th Grade Scientific Principle",
    "description": "• Eliminates many wastes as liquid urine\n\n\nParts of the urinary system\n\n• Kidneys\n• Nephrons\n• Ureters\n• Urinary Bladder\n• Urethra",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1791126671261",
    "quiz": [
      {
        "q": "According to the teacher notes: \"Small air sacs where gases are exchanged\" - What part is this?",
        "ans": 1,
        "why": "Alveoli: \"Small air sacs where gases are exchanged\"",
        "options": [
          "Larynx",
          "Alveoli",
          "Trachea",
          "Pharynx"
        ]
      },
      {
        "q": "According to the teacher notes: \"Routes air and food into proper channels\" - What part is this?",
        "ans": 0,
        "why": "Larynx: \"Routes air and food into proper channels\"",
        "options": [
          "Larynx",
          "Alveoli",
          "Trachea",
          "Pharynx"
        ]
      },
      {
        "q": "According to the teacher notes: \"Muscular passage from the nasal cavity to the larynx\" - What part is this?",
        "ans": 0,
        "why": "Pharynx: \"Muscular passage from the nasal cavity to the larynx. \"",
        "options": [
          "Pharynx",
          "Alveoli",
          "Larynx",
          "Trachea"
        ]
      },
      {
        "q": "According to the teacher notes: \"Connects the larynx with the bronchi\" - What part is this?",
        "ans": 3,
        "why": "Trachea: \"Connects the larynx with the bronchi\"",
        "options": [
          "Pharynx",
          "Larynx",
          "Alveoli",
          "Trachea"
        ]
      },
      {
        "q": "According to the teacher notes: \"The lung is the essential respiratory organ in air-breathing vertebrates. Its principal function is to transport oxygen from the atmosphere into the bloodstream and to excrete carbon dioxide from the bloodstream into the atmosphere. This exchange of gases is accomplished in the mosaic of specialized cells that form millions of tiny, exceptionally thin-walled air sacs called alveoli\" - What part is this?",
        "ans": 0,
        "why": "Lungs: \"The lung is the essential respiratory organ in air-breathing vertebrates. Its principal function is to transport oxygen from the atmosphere into the bloodstream and to excrete carbon dioxide from the bloodstream into the atmosphere. This exchange of gases is accomplished in the mosaic of specialized cells that form millions of tiny, exceptionally thin-walled air sacs called alveoli.\"",
        "options": [
          "Lungs",
          "Larynx",
          "Alveoli",
          "Pharynx"
        ]
      }
    ],
    "badge": "5 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "RESPIRATORY SYSTEM",
    "category": "biology",
    "isCustom": true,
    "updatedAt": "2026-10-04T15:11:11.261Z",
    "properties": [
      {
        "num": 1,
        "name": "Alveoli",
        "trick": "5th Grade Science Concept",
        "example": "Function as over 300 million microscopic, gossamer-thin air sac bubbles. For example, each alveolus is wrapped in spiderweb capillaries where oxygen molecules hop across into your red blood cells while carbon dioxide waste hops out to be exhaled with each breath.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Small air sacs where gases are exchanged"
      },
      {
        "num": 2,
        "name": "Larynx",
        "trick": "5th Grade Science Concept",
        "example": "Operates as your vocal soundbox and emergency airway traffic director. For example, its vocal cords vibrate when exhaled air rushes through to create your voice, while the epiglottis flap snaps shut over your windpipe when swallowing so food never goes down the wrong pipe.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Routes air and food into proper channels"
      },
      {
        "num": 3,
        "name": "Pharynx",
        "trick": "5th Grade Science Concept",
        "example": "Works like a dual-purpose throat intersection corridor. For example, this muscular hallway guides inhaled air from your nasal cavity down to the larynx, and guides swallowed food from your mouth into the esophagus.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Muscular passage from the nasal cavity to the larynx. "
      },
      {
        "num": 4,
        "name": "Trachea",
        "trick": "5th Grade Science Concept",
        "example": "Works like a reinforced, non-collapsible windpipe corridor. For example, tough C-shaped rings of cartilage hold your trachea permanently wide open like a vacuum cleaner hose, ensuring air can flow freely into your chest even when your neck bends.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Connects the larynx with the bronchi"
      },
      {
        "num": 5,
        "name": "Lungs",
        "trick": "5th Grade Science Concept",
        "example": "Function as twin spongy, elastic gas exchange bellows. For example, when your diaphragm pulls downward, the lungs expand and draw in fresh atmospheric air, transferring life-giving oxygen directly into the bloodstream while collecting carbon dioxide to exhaust on exhalation.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "The lung is the essential respiratory organ in air-breathing vertebrates. Its principal function is to transport oxygen from the atmosphere into the bloodstream and to excrete carbon dioxide from the bloodstream into the atmosphere. This exchange of gases is accomplished in the mosaic of specialized cells that form millions of tiny, exceptionally thin-walled air sacs called alveoli."
      }
    ],
    "coreFormula": "5th Grade Scientific Principle",
    "description": "Function  of the respiratory system\n\n\n\n• Gas exchange between the blood and the external environment\n• Exchange of gases takes place within the lungs in alveoli\n• Conducting passageways: purify, warm, and humidify the incoming air.\n\n\nOrgans of the Respiratory System\n\n• Conducting pathways: Nose, Pharynx, Larynx, Trachea, Bronchi\n• Gas Exchange: Lungs and Alveoli",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1791135574244",
    "quiz": [
      {
        "q": "According to the teacher notes: \"Epidermis\" - What part is this?",
        "ans": 0,
        "why": "Layers of the Skin: \"• Epidermis\n• Dermis\n• Hypodermis\"",
        "options": [
          "Layers of the Skin",
          "Cell Membrane",
          "Cytoplasm",
          "Mitochondria"
        ]
      }
    ],
    "badge": "1 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "INTEGUMENTARY SYSTEM",
    "category": "physical",
    "isCustom": true,
    "updatedAt": "2026-10-04T17:39:34.244Z",
    "properties": [
      {
        "num": 1,
        "name": "Layers of the Skin",
        "trick": "5th Grade Science Concept",
        "example": "Functions as your body's waterproof, multi-layered protective suit of armor. For example, the outer epidermis sheds dead cells and blocks germs like a raincoat, the middle dermis contains blood vessels, sweat glands, and touch nerves that sense warmth and pain, and the inner hypodermis cushions against falls with a layer of insulating fat.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Epidermis\n• Dermis\n• Hypodermis"
      }
    ],
    "coreFormula": "5th Grade Scientific Principle",
    "description": "Functions of the Integumentary System\n\n\n• Protects the Body\n• Keeps water & removes waste\n• Helps regulate body temperature\n\n\nOrgans in the Integumentary System\n\n• Skin sweat glands\n• Oil Glands Hair\n• Nails",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1791244354574",
    "quiz": [
      {
        "q": "Key to life and failures in what can lead to disease?",
        "ans": 1,
        "why": "Homeostasis: \"• Key to life and failures in homeostasis can lead to disease\n• Keeping things constant\n• Hunger & Thirst are examples\n\n\nHomeostasis includes the regulation of\n\n• oxygen & carbon dioxide levels \n• nutrient & waste product levels\n• water balance\n• body temperature\n\"",
        "options": [
          "Pineal Gland",
          "Homeostasis",
          "Thyroid Gland",
          "Pituitary Gland"
        ]
      },
      {
        "q": "This is considered the \"master what.\"?",
        "ans": 0,
        "why": "Pituitary Gland: \"• This is considered the \"master gland.\"\n• Growth harmonies get produced there and they get sent to other organs\"",
        "options": [
          "Pituitary Gland",
          "Pineal Gland",
          "Homeostasis",
          "Thyroid Gland"
        ]
      },
      {
        "q": "Secretes hormones that control the other what?",
        "ans": 0,
        "why": "Pineal Gland: \"• Secretes hormones that control the other glands\n• Middle of the Brain\n• Secretes melatonin\n• Helps to regulate when you sleep and when you wake up\"",
        "options": [
          "Pineal Gland",
          "Thyroid Gland",
          "Homeostasis",
          "Pituitary Gland"
        ]
      },
      {
        "q": "According to the teacher notes: \"Front of the lower neck\" - What part is this?",
        "ans": 2,
        "why": "Thyroid Gland: \"• Front of the lower neck\n• Controls the rate at which our cells burn food to produce energy\"",
        "options": [
          "Pineal Gland",
          "Homeostasis",
          "Thyroid Gland",
          "Pituitary Gland"
        ]
      },
      {
        "q": "Two what?",
        "ans": 1,
        "why": "Adrenal Gland: \"• Two glands\n• Produces adrenaline\n• Controls the body's response to stress\"",
        "options": [
          "Pineal Gland",
          "Adrenal Gland",
          "Pituitary Gland",
          "Homeostasis"
        ]
      },
      {
        "q": "According to the teacher notes: \"Hormones secreted are called Gonads\" - What part is this?",
        "ans": 2,
        "why": "Reproductive Glands: \"• Hormones secreted are called Gonads\n• Produces hormones called androgens, most importantly testosterone\"",
        "options": [
          "Pineal Gland",
          "Pituitary Gland",
          "Reproductive Glands",
          "Homeostasis"
        ]
      },
      {
        "q": "According to the teacher notes: \"Long flat gland\" - What part is this?",
        "ans": 0,
        "why": "Pancreas: \"• Long flat gland\n• Produces insulin and glucagon\n• Helps controls the levels of glucose in the body\"",
        "options": [
          "Pancreas",
          "Homeostasis",
          "Pituitary Gland",
          "Pineal Gland"
        ]
      },
      {
        "q": "According to the teacher notes: \"The purpose of the endocrine system is to control body functions. It works with tthe nervous system and the circulatory system. Each gland an organ that makes chemical substances/ hormones in the endocrine system has a different job. Glands are controlled by the hypothalamus which acts like a thermostat\" - What part is this?",
        "ans": 1,
        "why": "Summary: \"The purpose of the endocrine system is to control body functions. It works with tthe nervous system and the circulatory system. Each gland an organ that makes chemical substances/ hormones in the endocrine system has a different job. Glands are controlled by the hypothalamus which acts like a thermostat.\"",
        "options": [
          "Homeostasis",
          "Summary",
          "Pituitary Gland",
          "Pineal Gland"
        ]
      }
    ],
    "badge": "8 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "ENDOCRINE SYSTEM",
    "category": "physical",
    "isCustom": true,
    "updatedAt": "2026-10-09T11:49:13.454Z",
    "properties": [
      {
        "num": 1,
        "name": "Homeostasis",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the body's internal balancing thermostat. For example, whether you are in a freezing snowstorm or a hot desert, homeostasis automatically regulates internal body temperature around 98.6°F, balances blood sugar, and signals hunger and thirst to keep you alive and stable.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Key to life and failures in homeostasis can lead to disease\n• Keeping things constant\n• Hunger & Thirst are examples\n\n\nHomeostasis includes the regulation of\n\n• oxygen & carbon dioxide levels \n• nutrient & waste product levels\n• water balance\n• body temperature\n"
      },
      {
        "num": 2,
        "name": "Pituitary Gland",
        "trick": "5th Grade Science Concept",
        "example": "Runs as the master endocrine conductor and hormone command center. For example, this pea-sized gland at the base of the brain produces human growth hormone to make your bones grow taller and sends chemical orders to all other hormone glands.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• This is considered the \"master gland.\"\n• Growth harmonies get produced there and they get sent to other organs"
      },
      {
        "num": 3,
        "name": "Pineal Gland",
        "trick": "5th Grade Science Concept",
        "example": "Functions as your internal biological clock and sleep regulator. For example, when darkness falls at night, the pineal gland secretes melatonin into your bloodstream to make you feel drowsy, then turns off production at sunrise so you wake up refreshed.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Secretes hormones that control the other glands\n• Middle of the Brain\n• Secretes melatonin\n• Helps to regulate when you sleep and when you wake up"
      },
      {
        "num": 4,
        "name": "Thyroid Gland",
        "trick": "5th Grade Science Concept",
        "example": "Runs as the metabolic throttle and energy speedometer. For example, this butterfly-shaped gland on your neck secretes thyroxine to control how fast your cells burn calories and convert food into active energy versus storing it.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Front of the lower neck\n• Controls the rate at which our cells burn food to produce energy"
      },
      {
        "num": 5,
        "name": "Adrenal Gland",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the emergency adrenaline turbocharger. For example, if you encounter sudden danger or prepare for a race, these glands on top of your kidneys dump adrenaline into your blood, making your heart race, pupils dilate, and muscles surge with instant fight-or-flight power.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Two glands\n• Produces adrenaline\n• Controls the body's response to stress"
      },
      {
        "num": 6,
        "name": "Reproductive Glands",
        "trick": "5th Grade Science Concept",
        "example": "Function as developmental maturation glands. For example, they produce androgens and sex hormones that trigger growth spurts, deepen the voice, and develop secondary characteristics as children grow into healthy adults.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Hormones secreted are called Gonads\n• Produces hormones called androgens, most importantly testosterone"
      },
      {
        "num": 7,
        "name": "Pancreas",
        "trick": "5th Grade Science Concept",
        "example": "Works like a high-precision chemical blood glucose monitor and dispenser. For example, after eating lunch, it secretes insulin to help cells absorb sugar from the blood; between meals, it secretes glucagon to release stored liver sugar, keeping energy perfectly steady.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Long flat gland\n• Produces insulin and glucagon\n• Helps controls the levels of glucose in the body"
      },
      {
        "num": 8,
        "name": "Summary",
        "trick": "5th Grade Science Concept",
        "example": "Works like a wireless chemical messaging network controlling long-term body processes. For example, while nerves send instant electrical sparks, endocrine glands release slow-acting hormone messengers through the bloodstream to regulate mood, growth, metabolism, and sleep under hypothalamus supervision.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "The purpose of the endocrine system is to control body functions. It works with tthe nervous system and the circulatory system. Each gland an organ that makes chemical substances/ hormones in the endocrine system has a different job. Glands are controlled by the hypothalamus which acts like a thermostat."
      }
    ],
    "coreFormula": "5th Grade Scientific Principle",
    "description": "• Consists of glands that produce chemical messengers called hormones\n• Hormones are released directly into the bloodstream\n• Hormones turn on, turn off, speed up, or slow down the activities of certain organs, tissues, or cells.",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1791299610199",
    "quiz": [
      {
        "q": "According to the teacher notes: \"Recieves info from inside & outside of the body\" - What part is this?",
        "ans": 1,
        "why": "Functions of the nervous system: \"• Recieves info from inside & outside of the body\n• Controls & directs body's functions and responses\n• Helps maintain homeostasis\"",
        "options": [
          "Divided into 2 parts",
          "Functions of the nervous system",
          "Peripheral nervous system",
          "Central Nervous System: The Spinal Cord"
        ]
      },
      {
        "q": "According to the teacher notes: \"Peripheral Nervous System\" - What part is this?",
        "ans": 2,
        "why": "Divided into 2 parts: \"• Peripheral Nervous System\n• Central Nervous System (Brain and Spinal Cord)\"",
        "options": [
          "Central Nervous System: The Spinal Cord",
          "Functions of the nervous system",
          "Divided into 2 parts",
          "Peripheral nervous system"
        ]
      },
      {
        "q": "According to the teacher notes: \"Somatic NS- carries messages between brain & body to control voluntary muscles\" - What part is this?",
        "ans": 1,
        "why": "Peripheral nervous system: \"• Somatic NS- carries messages between brain & body to control voluntary muscles\n• Autonomic NS- controls organs & involuntary muscles\"",
        "options": [
          "Functions of the nervous system",
          "Peripheral nervous system",
          "Central Nervous System: The Spinal Cord",
          "Divided into 2 parts"
        ]
      },
      {
        "q": "According to the teacher notes: \"Bundle of nerves that runs down the spine to carry messages between the brain and the rest of the body\" - What part is this?",
        "ans": 0,
        "why": "Central Nervous System: The Spinal Cord: \"• Bundle of nerves that runs down the spine to carry messages between the brain and the rest of the body\n\"",
        "options": [
          "Central Nervous System: The Spinal Cord",
          "Divided into 2 parts",
          "Functions of the nervous system",
          "Peripheral nervous system"
        ]
      },
      {
        "q": "Basic functioning units of what system that carry messages called impulses?",
        "ans": 3,
        "why": "Central Nervous System: Nerve cells (neurons): \"Basic functioning units of the nervous system that carry messages called impulses\"",
        "options": [
          "Divided into 2 parts",
          "Peripheral nervous system",
          "Functions of the nervous system",
          "Central Nervous System: Nerve cells (neurons)"
        ]
      },
      {
        "q": "According to the teacher notes: \"Coordinates body activities made up of approximately 100 billion neurons\" - What part is this?",
        "ans": 2,
        "why": "Central Nervous System: The Brain: \"• Coordinates body activities made up of approximately 100 billion neurons\"",
        "options": [
          "Peripheral nervous system",
          "Functions of the nervous system",
          "Central Nervous System: The Brain",
          "Divided into 2 parts"
        ]
      },
      {
        "q": "According to the teacher notes: \"Cerebrum\" - What part is this?",
        "ans": 1,
        "why": "The brain is divided into 3 main parts: \"• Cerebrum\n• Cerebellum\n• Brain stem\"",
        "options": [
          "Functions of the nervous system",
          "The brain is divided into 3 main parts",
          "Peripheral nervous system",
          "Divided into 2 parts"
        ]
      },
      {
        "q": "According to the teacher notes: \"Coordinates\" - What part is this?",
        "ans": 0,
        "why": "Cerebrum: \"• Coordinates\n• Thinking and learning\n• Creativity\n• Five Senses\n• Memory and Emotion\n• Problem Solving\"",
        "options": [
          "Cerebrum",
          "Peripheral nervous system",
          "Divided into 2 parts",
          "Functions of the nervous system"
        ]
      },
      {
        "q": "According to the teacher notes: \"Most voluntary muscles movements\" - What part is this?",
        "ans": 1,
        "why": "Cerebellum: \"• Most voluntary muscles movements\n• Helps maintain balance and muscle tone\"",
        "options": [
          "Peripheral nervous system",
          "Cerebellum",
          "Functions of the nervous system",
          "Divided into 2 parts"
        ]
      },
      {
        "q": "Connects what to the spinal cord?",
        "ans": 3,
        "why": "Brain Stem: \"• Connects brain to the spinal cord\n• Coordinates involuntary actions\"",
        "options": [
          "Divided into 2 parts",
          "Functions of the nervous system",
          "Peripheral nervous system",
          "Brain Stem"
        ]
      }
    ],
    "badge": "10 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "NERVOUS SYSTEM",
    "category": "physical",
    "isCustom": true,
    "updatedAt": "2026-10-06T15:13:30.199Z",
    "properties": [
      {
        "num": 1,
        "name": "Functions of the nervous system",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the body's master high-speed electrical communication grid. For example, it senses touch, light, and temperature from sensory organs, processes that data in the brain in milliseconds, and fires instant motor commands to keep you balanced, reacting, and safe.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Recieves info from inside & outside of the body\n• Controls & directs body's functions and responses\n• Helps maintain homeostasis"
      },
      {
        "num": 2,
        "name": "Divided into 2 parts",
        "trick": "5th Grade Science Concept",
        "example": "Works like an integrated headquarters and regional dispatch system. For example, the Central Nervous System (brain and spinal cord) analyzes decisions and stores memories, while the Peripheral Nervous System runs nerve cables to every fingertip and toe.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Peripheral Nervous System\n• Central Nervous System (Brain and Spinal Cord)"
      },
      {
        "num": 3,
        "name": "Peripheral nervous system",
        "trick": "5th Grade Science Concept",
        "example": "Functions as two specialized wiring tracks: voluntary motor control and automatic maintenance. For example, somatic nerves let you consciously wave your hand, while autonomic nerves automatically control your heartbeat, breathing, and pupil dilation.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Somatic NS- carries messages between brain & body to control voluntary muscles\n• Autonomic NS- controls organs & involuntary muscles"
      },
      {
        "num": 4,
        "name": "Central Nervous System: The Spinal Cord ",
        "trick": "5th Grade Science Concept",
        "example": "Works like a high-capacity armored fiber-optic data cable. For example, millions of nerve fibers packed inside your spine transmit electrical signals between your brain and limbs at 250 miles per hour, and coordinate lightning-fast reflexes (like yanking your hand off a hot stove) before pain even reaches the brain!",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Bundle of nerves that runs down the spine to carry messages between the brain and the rest of the body\n"
      },
      {
        "num": 5,
        "name": "Central Nervous System: Nerve cells (neurons)",
        "trick": "5th Grade Science Concept",
        "example": "Function as microscopic electrical wires and relay transmitters. For example, each neuron catches incoming chemical messages on branching dendrites, shoots an electrical impulse down its axon cable, and hops the message across synapses to neighboring neurons.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Basic functioning units of the nervous system that carry messages called impulses"
      },
      {
        "num": 6,
        "name": "Central Nervous System: The Brain",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the master biological supercomputer containing 100 billion neurons. For example, it processes every thought, controls breathing, stores childhood memories, coordinates complex sports movements, and generates dreams while you sleep.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Coordinates body activities made up of approximately 100 billion neurons"
      },
      {
        "num": 7,
        "name": "The brain is divided into 3 main parts",
        "trick": "5th Grade Science Concept",
        "example": "Functions through three specialized computing zones: the Cerebrum (creative thinking and senses), Cerebellum (muscle coordination and balance), and Brain Stem (vital life-support systems).",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Cerebrum\n• Cerebellum\n• Brain stem"
      },
      {
        "num": 8,
        "name": "Cerebrum",
        "trick": "5th Grade Science Concept",
        "example": "Runs as the conscious thinking, problem-solving, and sensory processing hub. For example, when you read a book, solve a math problem, create art, or remember your friend's face, your cerebrum's hemispheres are actively firing.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Coordinates\n• Thinking and learning\n• Creativity\n• Five Senses\n• Memory and Emotion\n• Problem Solving"
      },
      {
        "num": 9,
        "name": "Cerebellum",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the athletic autopilot and balance coordinator. For example, when you ride a bicycle, jump rope, or play piano, the cerebellum fine-tunes your muscle timing and posture so you move smoothly without tripping.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Most voluntary muscles movements\n• Helps maintain balance and muscle tone"
      },
      {
        "num": 10,
        "name": "Brain Stem",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the unbreakable life-support autopilot. For example, this bridge connecting the brain to the spinal cord regulates involuntary vitals including your heartbeat, lung breathing rhythms, blood pressure, and swallowing reflexes 24 hours a day.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Connects brain to the spinal cord\n• Coordinates involuntary actions"
      }
    ],
    "coreFormula": "5th Grade Scientific Principle",
    "description": "Learn about the nervous system",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1791502148496",
    "quiz": [
      {
        "q": "According to the teacher notes: \"The main artery in the human body starts from the left ventricle to the stomach\" - What part is this?",
        "ans": 1,
        "why": "Aorta: \"The main artery in the human body starts from the left ventricle to the stomach\"",
        "options": [
          "Right Atrium",
          "Aorta",
          "Left Atrium",
          "Right Ventricle"
        ]
      },
      {
        "q": "According to the teacher notes: \"Receives blood from all the parts of the body. Blood is high in CO2 and low in oxygen\" - What part is this?",
        "ans": 0,
        "why": "Right Atrium: \"Receives blood from all the parts of the body. Blood is high in CO2 and low in oxygen.\"",
        "options": [
          "Right Atrium",
          "Aorta",
          "Left Atrium",
          "Right Ventricle"
        ]
      },
      {
        "q": "According to the teacher notes: \"Pumps blood to the lungs. Blood is high in carbon dioxide and low in oxygen\" - What part is this?",
        "ans": 2,
        "why": "Right Ventricle: \"Pumps blood to the lungs. Blood is high in carbon dioxide and low in oxygen\"",
        "options": [
          "Right Atrium",
          "Left Atrium",
          "Right Ventricle",
          "Aorta"
        ]
      },
      {
        "q": "According to the teacher notes: \"Recieves blood from the lungs. Blood is high in oxygen and low in CO2\" - What part is this?",
        "ans": 3,
        "why": "Left Atrium: \"Recieves blood from the lungs. Blood is high in oxygen and low in CO2\"",
        "options": [
          "Right Ventricle",
          "Aorta",
          "Right Atrium",
          "Left Atrium"
        ]
      },
      {
        "q": "According to the teacher notes: \"Pumps blood to all parts of the body except the lungs. Blood is high in oxygen and low in CO2\" - What part is this?",
        "ans": 2,
        "why": "Left Ventricle: \"Pumps blood to all parts of the body except the lungs. Blood is high in oxygen and low in CO2\"",
        "options": [
          "Right Ventricle",
          "Aorta",
          "Left Ventricle",
          "Right Atrium"
        ]
      }
    ],
    "badge": "5 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "HEART (CIRCULATORY SYSTEM)",
    "category": "physical",
    "isCustom": true,
    "updatedAt": "2026-10-08T23:29:08.496Z",
    "properties": [
      {
        "num": 1,
        "name": "Aorta",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the superhighway main trunk artery of the entire body. For example, this thick, elastic arch receives high-pressure, oxygen-rich blood freshly pumped from the left ventricle and channels it into branching arterial highways serving the brain, chest, abdomen, and legs.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "The main artery in the human body starts from the left ventricle to the stomach"
      },
      {
        "num": 2,
        "name": "Right Atrium",
        "trick": "5th Grade Science Concept",
        "example": "Runs as the venous receiving lounge for depleted blood. For example, it collects oxygen-poor, carbon-dioxide-rich dark blood returning from your working muscles and organs through the vena cava veins and funnels it down into the right ventricle.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Receives blood from all the parts of the body. Blood is high in CO2 and low in oxygen."
      },
      {
        "num": 3,
        "name": "Right Ventricle",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the pulmonary pump sending blood to the lungs. For example, with every heartbeat, its muscular chamber contracts to squeeze oxygen-depleted blood through the pulmonary artery straight into the lungs so it can pick up fresh oxygen.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Pumps blood to the lungs. Blood is high in carbon dioxide and low in oxygen"
      },
      {
        "num": 4,
        "name": "Left Atrium",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the pulmonary receiving dock for freshly oxygenated blood. For example, it receives bright red, oxygen-rich blood arriving from the lungs via the pulmonary veins and funnels it through the mitral valve into the powerful left ventricle.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Recieves blood from the lungs. Blood is high in oxygen and low in CO2"
      },
      {
        "num": 5,
        "name": "Left Ventricle",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the powerhouse muscle engine of the entire circulatory system. For example, with walls three times thicker than any other chamber, it generates immense squeezing force to shoot oxygen-packed blood through the aorta all the way to your brain, toes, and every living cell.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Pumps blood to all parts of the body except the lungs. Blood is high in oxygen and low in CO2"
      }
    ],
    "coreFormula": "5th Grade Scientific Principle",
    "description": "The heart pumps blood so that it can circulate through the blood vessels to reach all organs in the body.",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1791502958384",
    "quiz": [
      {
        "q": "According to the teacher notes: \"Largest of all blood vessels\" - What part is this?",
        "ans": 1,
        "why": "Artery: \"• Largest of all blood vessels\n• Carries blood away from the heart\n• Arteries, except those that go to the lungs, are rich in oxygen\n• Carry materials that the cells need\n• \"",
        "options": [
          "Vein",
          "Artery",
          "Capilary",
          "Blood vessels"
        ]
      },
      {
        "q": "According to the teacher notes: \"Carry blood back to the heart\" - What part is this?",
        "ans": 0,
        "why": "Vein: \"• Carry blood back to the heart\n• Veins, except those that go to the lungs carry blood with dissolved materials\n• Medium sized\"",
        "options": [
          "Vein",
          "Capilary",
          "Artery",
          "Blood vessels"
        ]
      },
      {
        "q": "According to the teacher notes: \"Connects the arteries and the veins\" - What part is this?",
        "ans": 3,
        "why": "Capilary: \"• Connects the arteries and the veins\n• They are tiny in size -- some as thin as one strand of hair\n• Most numerous in your body\"",
        "options": [
          "Vein",
          "Blood vessels",
          "Artery",
          "Capilary"
        ]
      },
      {
        "q": "What carry this structure to and from the heart and other parts of the body?",
        "ans": 0,
        "why": "Blood vessels: \"• Blood vessels carry blood to and from the heart and other parts of the body\n• Blood circulates throughout the blood vessels to reach all areas of the body. It transports nutrients and oxygens to the heart and carries away waste.\n\"",
        "options": [
          "Blood vessels",
          "Artery",
          "Capilary",
          "Vein"
        ]
      },
      {
        "q": "According to the teacher notes: \"Fight disease and infection\" - What part is this?",
        "ans": 0,
        "why": "White Blood Cell: \"• Fight disease and infection\n• Destroy harmful germs in the body\n• Largest of blood cells\"",
        "options": [
          "White Blood Cell",
          "Vein",
          "Artery",
          "Capilary"
        ]
      },
      {
        "q": "According to the teacher notes: \"Contains hemoglobin that gives it that red color\" - What part is this?",
        "ans": 1,
        "why": "Red Blood Cell: \"• Contains hemoglobin that gives it that red color\n• Most numerous\n• Carries oxygen to all parts of the body\n• Picks up carbon dioide waste from the cells\"",
        "options": [
          "Capilary",
          "Red Blood Cell",
          "Artery",
          "Vein"
        ]
      },
      {
        "q": "According to the teacher notes: \"Tiny colorless pieces of blood\" - What part is this?",
        "ans": 0,
        "why": "Platelets: \"• Tiny colorless pieces of blood\n• Help stop bleeding by giving off a chemical that helps blood clot\n• Smallest of the blood cells\"",
        "options": [
          "Platelets",
          "Artery",
          "Capilary",
          "Vein"
        ]
      }
    ],
    "badge": "7 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "CIRCULATORY SYSTEM",
    "category": "physical",
    "isCustom": true,
    "updatedAt": "2026-10-08T23:42:38.384Z",
    "properties": [
      {
        "num": 1,
        "name": "Artery",
        "trick": "5th Grade Science Concept",
        "example": "Functions as high-pressure, thick-walled distribution pipelines. For example, each time your heart beats, strong elastic arteries pulse as they carry oxygen-rich, nutrient-packed blood away from the heart to fuel muscles and tissues under high pressure.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Largest of all blood vessels\n• Carries blood away from the heart\n• Arteries, except those that go to the lungs, are rich in oxygen\n• Carry materials that the cells need\n• "
      },
      {
        "num": 2,
        "name": "Vein",
        "trick": "5th Grade Science Concept",
        "example": "Operates as low-pressure return conduits equipped with one-way valves. For example, veins carry deoxygenated blood back toward the heart; tiny flap valves inside prevent blood from pooling backward in your legs against gravity.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Carry blood back to the heart\n• Veins, except those that go to the lungs carry blood with dissolved materials\n• Medium sized"
      },
      {
        "num": 3,
        "name": "Capilary",
        "trick": "5th Grade Science Concept",
        "example": "Functions as ultra-thin microscopic transfer bridges connecting arteries and veins. For example, being only one red blood cell wide with walls as thin as cell membranes, capillaries allow oxygen and glucose to slip directly into body cells while absorbing waste products.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Connects the arteries and the veins\n• They are tiny in size -- some as thin as one strand of hair\n• Most numerous in your body"
      },
      {
        "num": 4,
        "name": "Blood vessels",
        "trick": "5th Grade Science Concept",
        "example": "Function as an interconnected closed loop transport network spanning over 60,000 miles. For example, they deliver continuous streams of oxygen, water, and fuel to every organ while whisking away toxic waste products to keep tissues alive.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Blood vessels carry blood to and from the heart and other parts of the body\n• Blood circulates throughout the blood vessels to reach all areas of the body. It transports nutrients and oxygens to the heart and carries away waste.\n"
      },
      {
        "num": 5,
        "name": "White Blood Cell",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the body's armed immune defense force. For example, when bacteria enter a cut, white blood cells squeeze through capillary walls, hunt down the invading germs, and swallow or chemically destroy them so you don't get infected.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Fight disease and infection\n• Destroy harmful germs in the body\n• Largest of blood cells"
      },
      {
        "num": 6,
        "name": "Red Blood Cell",
        "trick": "5th Grade Science Concept",
        "example": "Functions as microscopic hemoglobin oxygen delivery trucks. For example, packed with red iron hemoglobin molecules, billions of disc-shaped red blood cells load up on oxygen in your lungs and deliver it to your muscle cells, picking up carbon dioxide waste on the return trip.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Contains hemoglobin that gives it that red color\n• Most numerous\n• Carries oxygen to all parts of the body\n• Picks up carbon dioide waste from the cells"
      },
      {
        "num": 7,
        "name": "Platelets ",
        "trick": "5th Grade Science Concept",
        "example": "Function as microscopic biological emergency patching kits. For example, the moment you get a papercut, sticky platelets clump together over the broken blood vessel and release chemical clotting factors that form a mesh scab to stop bleeding immediately.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Tiny colorless pieces of blood\n• Help stop bleeding by giving off a chemical that helps blood clot\n• Smallest of the blood cells"
      }
    ],
    "coreFormula": "5th Grade Scientific Principle",
    "description": "The heart and blood vessels together make up the circulatory system\nThe circulatory system carries blood and dissolved substances to and from different places in the body.",
    "redirectUrl": ""
  },
  {
    "id": "science-unit-1791828041009",
    "quiz": [
      {
        "q": "What helps the eye focus as light enters?",
        "ans": 1,
        "why": "Cornea: \"• Helps the eye focus as light enters\"",
        "options": [
          "Pupil",
          "Cornea",
          "Iris",
          "Lens"
        ]
      },
      {
        "q": "According to the teacher notes: \"It lets light enter the eye\" - What part is this?",
        "ans": 1,
        "why": "Pupil: \"• It lets light enter the eye\n\"",
        "options": [
          "Iris",
          "Pupil",
          "Cornea",
          "Lens"
        ]
      },
      {
        "q": "What determines how much light should go through the pupil?",
        "ans": 1,
        "why": "Iris: \"• The iris determines how much light should go through the pupil\"",
        "options": [
          "Lens",
          "Iris",
          "Cornea",
          "Pupil"
        ]
      },
      {
        "q": "What job is to focus the light rays at the back of the eyeballs?",
        "ans": 3,
        "why": "Lens: \"• Lens job is to focus the light rays at the back of the eyeballs\"",
        "options": [
          "Iris",
          "Cornea",
          "Pupil",
          "Lens"
        ]
      },
      {
        "q": "According to the teacher notes: \"Takes the light and turns it into nerve signals\" - What part is this?",
        "ans": 1,
        "why": "Retina: \"• Takes the light and turns it into nerve signals\n• In the retina, the light makes an upside-down and backwards picture.\n• The retina contains light sensitive cells (called rods and cones) that change the picture into messages that your brain understands\"",
        "options": [
          "Iris",
          "Retina",
          "Cornea",
          "Pupil"
        ]
      },
      {
        "q": "What change the shapes of the lens?",
        "ans": 0,
        "why": "Ciliary Muscle: \"• The ciliary muscle change the shapes of the lens\"",
        "options": [
          "Ciliary Muscle",
          "Cornea",
          "Iris",
          "Pupil"
        ]
      },
      {
        "q": "What carries the this structure signals to the brain?",
        "ans": 2,
        "why": "Optic Nerve: \"• The optic nerve carries the nerve signals to the brain\"",
        "options": [
          "Pupil",
          "Cornea",
          "Optic Nerve",
          "Iris"
        ]
      }
    ],
    "badge": "7 Concept Squares",
    "color": "blue",
    "grade": "5th Grade",
    "title": "EYE",
    "category": "physical",
    "isCustom": true,
    "updatedAt": "2026-10-12T18:00:41.009Z",
    "properties": [
      {
        "num": 1,
        "name": "Cornea",
        "trick": "5th Grade Science Concept",
        "example": "Functions like a crystal-clear protective windshield and primary focusing lens. For example, it covers the front of your eyeball, keeping dust and water out while bending and refracting incoming light rays so they pass through the pupil directly toward the lens.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Helps the eye focus as light enters"
      },
      {
        "num": 2,
        "name": "Pupil",
        "trick": "5th Grade Science Concept",
        "example": "Functions like an adjustable doorway aperture for light rays. For example, when you walk into a dark movie theater, your pupil opens wide (dilates) to let more light in; when you step out into bright sunshine, it shrinks to a tiny black pinhole to protect your eye.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• It lets light enter the eye\n"
      },
      {
        "num": 3,
        "name": "Iris",
        "trick": "5th Grade Science Concept",
        "example": "Runs as the colorful muscular shutter controlling pupil size. For example, this pigmented ring of smooth muscle (giving eyes their blue, brown, or green color) contracts or expands automatically to regulate the exact amount of light entering the eye.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• The iris determines how much light should go through the pupil"
      },
      {
        "num": 4,
        "name": "Lens",
        "trick": "5th Grade Science Concept",
        "example": "Works like a transparent, flexible zoom lens that fine-tunes image sharpness. For example, when you shift your gaze from a textbook right in front of your face to a clock across the classroom, the lens instantly changes its curvature to focus rays sharply onto the back of the eye.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Lens job is to focus the light rays at the back of the eyeballs"
      },
      {
        "num": 5,
        "name": "Retina",
        "trick": "5th Grade Science Concept",
        "example": "Functions like a high-tech digital camera sensor lining the back of the eyeball. For example, millions of photoreceptor cells (rods for dim light and cones for bright colors) catch focused light rays and convert the upside-down image into electrical nerve pulses for the brain.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Takes the light and turns it into nerve signals\n• In the retina, the light makes an upside-down and backwards picture.\n• The retina contains light sensitive cells (called rods and cones) that change the picture into messages that your brain understands"
      },
      {
        "num": 6,
        "name": "Ciliary Muscle",
        "trick": "5th Grade Science Concept",
        "example": "Acts like the muscular focus adjuster controlling the lens. For example, when you read small text up close, ciliary muscles contract to make the lens rounder and thicker; when looking at distant stars, they relax to flatten the lens for far vision.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• The ciliary muscle change the shapes of the lens"
      },
      {
        "num": 7,
        "name": "Optic Nerve",
        "trick": "5th Grade Science Concept",
        "example": "Works like a high-speed fiber-optic data transmission cable connecting the eye to the brain. For example, over one million nerve fibers bundled together carry the retina's electrical image signals directly to the visual cortex in the back of your brain, which flips the image right-side up so you can see!",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• The optic nerve carries the nerve signals to the brain"
      }
    ],
    "coreFormula": "5th Grade Scientific Principle",
    "description": "Learn about the eye",
    "redirectUrl": ""
  }
];

// Default Cloud Database Bucket ID (Hosted on permanent free REST backend)
const DEFAULT_CLOUD_DB_ID = "ff808181a09d98f701a0f483e327513e";

// UNIVERSAL BULLET POINT FORMATTERS & HELPERS
function formatBulletText(str) {
  if (!str && str !== 0) return "";
  const raw = String(str);
  if (!raw.trim()) return "";

  const hasBullets = raw.includes("•") || /(?:^|\n)\s*[-*]\s+/.test(raw) || /(?:^|\n)\s*\d+[\.\)]\s+/.test(raw);
  const hasLines = raw.includes("\n");

  if (!hasBullets && !hasLines) {
    return raw;
  }

  // Single line with inline bullets (e.g. "• A • B • C")
  if (!hasLines && raw.includes("•")) {
    const parts = raw.split("•").map(p => p.trim()).filter(Boolean);
    if (parts.length > 1 || raw.trim().startsWith("•")) {
      const items = parts.map(p => `<li class="bullet-item"><span class="bullet-dot">•</span><span class="bullet-text">${p}</span></li>`).join("");
      return `<ul class="notes-bullet-list">${items}</ul>`;
    }
  }

  // Multi-line list & paragraph parsing
  const lines = raw.split(/\r?\n/);
  let html = "";
  let inList = false;
  let listType = "ul";

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      if (inList) {
        html += `</${listType}>`;
        inList = false;
      }
      html += `<div class="bullet-spacer"></div>`;
      return;
    }

    const isBulletDot = trimmed.startsWith("•");
    const isDash = /^[-*]\s+/.test(trimmed);
    const isNum = /^(\d+)[\.\)]\s+/.test(trimmed);

    if (isBulletDot || isDash) {
      let content = isBulletDot ? trimmed.replace(/^•\s*/, "") : trimmed.replace(/^[-*]\s+/, "");
      if (!inList || listType !== "ul") {
        if (inList) html += `</${listType}>`;
        html += `<ul class="notes-bullet-list">`;
        inList = true;
        listType = "ul";
      }
      html += `<li class="bullet-item"><span class="bullet-dot">•</span><span class="bullet-text">${content}</span></li>`;
    } else if (isNum) {
      const numMatch = trimmed.match(/^(\d+)[\.\)]\s+(.*)/);
      const numVal = numMatch ? numMatch[1] : "";
      const content = numMatch ? numMatch[2] : trimmed;
      if (!inList || listType !== "ol") {
        if (inList) html += `</${listType}>`;
        html += `<ol class="notes-bullet-list numbered">`;
        inList = true;
        listType = "ol";
      }
      html += `<li class="bullet-item"><span class="bullet-num">${numVal}.</span><span class="bullet-text">${content}</span></li>`;
    } else {
      if (inList) {
        html += `</${listType}>`;
        inList = false;
      }
      html += `<div class="bullet-line">${trimmed}</div>`;
    }
  });

  if (inList) {
    html += `</${listType}>`;
  }

  return html;
}

function insertTextAtCursor(inputEl, text) {
  if (!inputEl) return;
  inputEl.focus();
  const start = inputEl.selectionStart !== undefined ? inputEl.selectionStart : inputEl.value.length;
  const end = inputEl.selectionEnd !== undefined ? inputEl.selectionEnd : inputEl.value.length;
  const val = inputEl.value;

  inputEl.value = val.substring(0, start) + text + val.substring(end);
  const newPos = start + text.length;
  inputEl.setSelectionRange(newPos, newPos);
  inputEl.dispatchEvent(new Event("input", { bubbles: true }));
  inputEl.dispatchEvent(new Event("change", { bubbles: true }));
}

function insertBulletAtCursor(inputEl) {
  if (!inputEl) return;
  inputEl.focus();
  const val = inputEl.value;
  const start = inputEl.selectionStart !== undefined ? inputEl.selectionStart : val.length;
  const end = inputEl.selectionEnd !== undefined ? inputEl.selectionEnd : val.length;

  const lastNewline = val.lastIndexOf("\n", start - 1);
  const lineStart = lastNewline === -1 ? 0 : lastNewline + 1;
  const currentLinePrefix = val.substring(lineStart, start);

  let toInsert = "• ";
  if (currentLinePrefix.trim().length > 0) {
    toInsert = "\n• ";
  }

  if (start !== end) {
    const selectedText = val.substring(start, end);
    const bulletedSelection = selectedText
      .split("\n")
      .map(line => line.trim().startsWith("•") ? line : `• ${line}`)
      .join("\n");
    inputEl.value = val.substring(0, start) + bulletedSelection + val.substring(end);
    const newEnd = start + bulletedSelection.length;
    inputEl.setSelectionRange(newEnd, newEnd);
  } else {
    inputEl.value = val.substring(0, start) + toInsert + val.substring(end);
    const newPos = start + toInsert.length;
    inputEl.setSelectionRange(newPos, newPos);
  }

  inputEl.dispatchEvent(new Event("input", { bubbles: true }));
  inputEl.dispatchEvent(new Event("change", { bubbles: true }));
}

function enableSmartBulletInput(el) {
  if (!el || el._smartBulletAttached) return;
  el._smartBulletAttached = true;

  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (el.tagName === "TEXTAREA") {
        const val = el.value;
        const selStart = el.selectionStart;
        const lastNewline = val.lastIndexOf("\n", selStart - 1);
        const lineStart = lastNewline === -1 ? 0 : lastNewline + 1;
        const currentLine = val.substring(lineStart, selStart);

        const bulletMatch = currentLine.match(/^(\s*)([•\-\*])\s+/);
        if (bulletMatch) {
          e.preventDefault();
          const indent = bulletMatch[1];
          const afterBullet = currentLine.substring(bulletMatch[0].length).trim();

          if (afterBullet.length === 0) {
            const nextNewline = val.indexOf("\n", selStart);
            const lineEnd = nextNewline === -1 ? val.length : nextNewline;
            el.value = val.substring(0, lineStart) + val.substring(lineEnd);
            el.setSelectionRange(lineStart, lineStart);
          } else {
            const insertion = `\n${indent}• `;
            const before = val.substring(0, selStart);
            const after = val.substring(selStart);
            el.value = before + insertion + after;
            const newPos = selStart + insertion.length;
            el.setSelectionRange(newPos, newPos);
          }
          el.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }
    }
  });

  el.addEventListener("input", (e) => {
    if (e.inputType === "insertText" && (e.data === " " || e.data === "\u00A0")) {
      const val = el.value;
      const selStart = el.selectionStart;
      const lastNewline = val.lastIndexOf("\n", selStart - 2);
      const lineStart = lastNewline === -1 ? 0 : lastNewline + 1;
      const lineBeforeCursor = val.substring(lineStart, selStart);

      if (/^[-*]\s$/.test(lineBeforeCursor)) {
        const before = val.substring(0, lineStart);
        const after = val.substring(selStart);
        el.value = before + "• " + after;
        const newPos = lineStart + 2;
        el.setSelectionRange(newPos, newPos);
        el.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  });
}

// SOUND FX SYSTEM (WEB AUDIO API)
class SoundController {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  /* ASMR Buttery Smooth Slide Chime */
  playAsmrSlide() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(380, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.09);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);

      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(960, now);
      osc2.frequency.exponentialRampToValueAtTime(640, now + 0.05);
      gain2.gain.setValueAtTime(0.025, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now);
      osc2.stop(now + 0.05);
    } catch (e) {}
  }

  /* Tactile Mechanical Keypad Click */
  playKeypadTap() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(820, now);
      osc.frequency.exponentialRampToValueAtTime(1150, now + 0.035);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.035);
    } catch (e) {}
  }

  /* Multi-Stage Cyber-Hydraulic Vault Unlock Clunk, Decompression Hiss & Chime */
  playVaultUnlock() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;

      // 1. Digital Authorization Chirp
      const chirp = this.ctx.createOscillator();
      const chirpGain = this.ctx.createGain();
      chirp.type = "sine";
      chirp.frequency.setValueAtTime(987.77, now);
      chirp.frequency.exponentialRampToValueAtTime(1760.00, now + 0.12);
      chirpGain.gain.setValueAtTime(0.12, now);
      chirpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      chirp.connect(chirpGain);
      chirpGain.connect(this.ctx.destination);
      chirp.start(now);
      chirp.stop(now + 0.12);

      // 2. High-Torque Mechanical Dial Ratchet Spin
      const dialOsc = this.ctx.createOscillator();
      const dialGain = this.ctx.createGain();
      dialOsc.type = "sawtooth";
      dialOsc.frequency.setValueAtTime(480, now + 0.06);
      dialOsc.frequency.exponentialRampToValueAtTime(80, now + 0.45);
      dialGain.gain.setValueAtTime(0.14, now + 0.06);
      dialGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      dialOsc.connect(dialGain);
      dialGain.connect(this.ctx.destination);
      dialOsc.start(now + 0.06);
      dialOsc.stop(now + 0.45);

      // 3. Deep Sub-Bass Hydraulic Chamber Release
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = "triangle";
      subOsc.frequency.setValueAtTime(110, now + 0.22);
      subOsc.frequency.exponentialRampToValueAtTime(28, now + 0.65);
      subGain.gain.setValueAtTime(0.35, now + 0.22);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);
      subOsc.start(now + 0.22);
      subOsc.stop(now + 0.65);

      // 4. Triumphant Crystal Glass Chord
      [587.33, 739.99, 880.0, 1174.66, 1479.98].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = f;
        gain.gain.setValueAtTime(0.06, now + 0.32 + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75 + idx * 0.06);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + 0.32 + idx * 0.06);
        osc.stop(now + 0.85 + idx * 0.06);
      });
    } catch (e) {}
  }

  playVaultError() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [135, 105].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        gain.gain.setValueAtTime(0.14, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.11);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.11);
      });
    } catch (e) {}
  }

  playVaultRedirect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.16);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch (e) {}
  }

  playMechanicalKey() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(1400 + Math.random() * 300, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.025);
      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.025);
    } catch (e) {}
  }

  playLaser() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(920, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.11);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.11);
    } catch (e) {}
  }

  playExplosion() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.18);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } catch (e) {}
  }

  playCoin() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [987.77, 1318.51].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.07);
        gain.gain.setValueAtTime(0.08, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.18);
      });
    } catch (e) {}
  }

  playMatrix() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [440, 554, 659, 830, 987, 1108].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(f, now + idx * 0.035);
        gain.gain.setValueAtTime(0.04, now + idx * 0.035);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.035 + 0.09);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.035);
        osc.stop(now + idx * 0.035 + 0.09);
      });
    } catch (e) {}
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.08, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.25);
      });
    } catch (e) {}
  }

  /* Crisp, bubbly popping sound */
  playBubblePop(freqMod = 1) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      const startFreq = (480 + Math.random() * 320) * freqMod;
      const endFreq = (1100 + Math.random() * 500) * freqMod;
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.045);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.045);
    } catch (e) {}
  }

  /* Gentle bubbling reaction fizz */
  playBubbleFizz() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      for (let i = 0; i < 3; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        const t = now + i * 0.04 + Math.random() * 0.02;
        osc.frequency.setValueAtTime(320 + Math.random() * 400, t);
        osc.frequency.exponentialRampToValueAtTime(800 + Math.random() * 300, t + 0.035);
        gain.gain.setValueAtTime(0.035, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.035);
      }
    } catch (e) {}
  }

  /* Celestial Magical Reveal Chime */
  playMagicalReveal() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Celestial Pentatonic Chime: C5, E5, G5, B5, D6, G6
      const chord = [523.25, 659.25, 783.99, 987.77, 1174.66, 1567.98];
      chord.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        const noteTime = now + idx * 0.065;
        osc.frequency.setValueAtTime(freq, noteTime);
        gain.gain.setValueAtTime(0.075, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.55);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(noteTime);
        osc.stop(noteTime + 0.55);
      });
    } catch (e) {}
  }

  /* Cinematic Impact Synth for Letter Zoom-Out (s, k, i, e, n, c, e) */
  playLetterZoom(index = 0) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Musical pentatonic scale with deep bass: C3, D3, E3, G3, A3, C4, E4
      const baseFreqs = [130.81, 146.83, 164.81, 196.00, 220.00, 261.63, 329.63];
      const freq = baseFreqs[Math.min(index, baseFreqs.length - 1)];

      // 1. Deep Sub-bass Drop
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(freq * 1.5, now);
      subOsc.frequency.exponentialRampToValueAtTime(freq * 0.7, now + 0.16);
      subGain.gain.setValueAtTime(0.18, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 0.22);

      // 2. Crisp Metallic Shimmer Accent
      const pingOsc = this.ctx.createOscillator();
      const pingGain = this.ctx.createGain();
      pingOsc.type = "triangle";
      pingOsc.frequency.setValueAtTime(freq * 4, now);
      pingOsc.frequency.exponentialRampToValueAtTime(freq * 2, now + 0.08);
      pingGain.gain.setValueAtTime(0.06, now);
      pingGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      pingOsc.connect(pingGain);
      pingGain.connect(this.ctx.destination);
      pingOsc.start(now);
      pingOsc.stop(now + 0.09);
    } catch (e) {}
  }

  /* Apple Face ID TrueDepth Dual-Tone Haptic Chime */
  playFaceIdChime() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      
      // Tone 1: E6 (1318.5 Hz) crisp optical ping
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(1318.5, now);
      gain1.gain.setValueAtTime(0.14, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.12);

      // Tone 2: G#6 (1661.2 Hz) harmonic confirmation (80ms later)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(1661.2, now + 0.08);
      gain2.gain.setValueAtTime(0.001, now);
      gain2.gain.setValueAtTime(0.18, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.28);
    } catch (e) {}
  }

  /* Apple Face ID Scanning Infrared Chirp / Pulse */
  playFaceIdPulse() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.04);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }
}

const sounds = new SoundController();

// INDEXEDDB AUDIO STORAGE FOR CUSTOM ADMIN UPLOADS
const AudioStorage = {
  dbName: "science_bg_music_db",
  storeName: "audio_tracks",
  db: null,

  async init() {
    if (this.db) return this.db;
    return new Promise((resolve) => {
      try {
        const req = indexedDB.open(this.dbName, 1);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(this.storeName)) {
            db.createObjectStore(this.storeName, { keyPath: "id" });
          }
        };
        req.onsuccess = (e) => {
          this.db = e.target.result;
          resolve(this.db);
        };
        req.onerror = () => resolve(null);
      } catch (err) {
        console.warn("IndexedDB init notice:", err);
        resolve(null);
      }
    });
  },

  async saveTrack(id, fileBlob, meta) {
    const db = await this.init();
    if (!db) return false;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction(this.storeName, "readwrite");
        const store = tx.objectStore(this.storeName);
        store.put({
          id,
          blob: fileBlob,
          name: meta.name || "Custom Track",
          size: meta.size || 0,
          type: meta.type || "audio/mpeg",
          updatedAt: Date.now()
        });
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (e) {
        resolve(false);
      }
    });
  },

  async getTrack(id) {
    const db = await this.init();
    if (!db) return null;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction(this.storeName, "readonly");
        const store = tx.objectStore(this.storeName);
        const req = store.get(id);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      } catch (e) {
        resolve(null);
      }
    });
  },

  async clearTrack(id) {
    const db = await this.init();
    if (!db) return false;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction(this.storeName, "readwrite");
        const store = tx.objectStore(this.storeName);
        store.delete(id);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (e) {
        resolve(false);
      }
    });
  }
};


// AUDIO METADATA PARSER (ID3v1, ID3v2, M4A/AAC)
// Extracts real full song title & artist from audio files
// eliminating raw track numbers (e.g. "01", "1.mp3") in Dynamic Island

const AudioMetadataParser = {
  decodeString(bytes, encoding) {
    if (!bytes || !bytes.length) return "";
    try {
      if (encoding === 0) { // ISO-8859-1 / Latin-1
        let str = "";
        for (let i = 0; i < bytes.length; i++) {
          if (bytes[i] === 0) break;
          str += String.fromCharCode(bytes[i]);
        }
        return str.trim();
      } else if (encoding === 1) { // UTF-16 with BOM
        if (bytes.length < 2) return "";
        const isLE = !(bytes[0] === 0xfe && bytes[1] === 0xff);
        const start = ((bytes[0] === 0xfe && bytes[1] === 0xff) || (bytes[0] === 0xff && bytes[1] === 0xfe)) ? 2 : 0;
        let str = "";
        for (let i = start; i + 1 < bytes.length; i += 2) {
          const code = isLE ? bytes[i] | (bytes[i + 1] << 8) : (bytes[i] << 8) | bytes[i + 1];
          if (code === 0) break;
          str += String.fromCharCode(code);
        }
        return str.trim();
      } else if (encoding === 2) { // UTF-16BE without BOM
        let str = "";
        for (let i = 0; i + 1 < bytes.length; i += 2) {
          const code = (bytes[i] << 8) | bytes[i + 1];
          if (code === 0) break;
          str += String.fromCharCode(code);
        }
        return str.trim();
      } else { // UTF-8
        if (typeof TextDecoder !== "undefined") {
          return new TextDecoder("utf-8").decode(bytes).replace(/\0.*$/g, "").trim();
        }
        let str = "";
        for (let i = 0; i < bytes.length; i++) {
          if (bytes[i] === 0) break;
          str += String.fromCharCode(bytes[i]);
        }
        return str.trim();
      }
    } catch (_) {
      return "";
    }
  },

  cleanNoise(str) {
    if (!str) return "";
    return str
      .replace(/\s*\[(?:official\s*(?:video|audio|lyric\s*video|music\s*video|visualizer|hd|hq)?|lyrics?|visualizer|remastered|audio|hq|hd|4k)\]/gi, "")
      .replace(/\s*\((?:official\s*(?:video|audio|lyric\s*video|music\s*video|visualizer|hd|hq)?|lyrics?|visualizer|remastered|audio|hq|hd|4k)\)/gi, "")
      .replace(/\s*-\s*official\s*(?:audio|video|lyrics?)/gi, "")
      .replace(/\s{2,}/g, " ")
      .trim();
  },

  parseID3v2(u8) {
    if (!u8 || u8.length < 10) return null;
    if (u8[0] !== 0x49 || u8[1] !== 0x44 || u8[2] !== 0x33) return null; // 'ID3'
    const major = u8[3];
    if (major < 2 || major > 4) return null;

    const tagSize = ((u8[6] & 0x7f) << 21) | ((u8[7] & 0x7f) << 14) | ((u8[8] & 0x7f) << 7) | (u8[9] & 0x7f);
    const end = Math.min(u8.length, 10 + tagSize);
    let offset = 10;
    const tags = {};
    let coverArtBlob = null;
    let coverArtUrl = null;

    if (major === 2) {
      while (offset + 6 <= end) {
        if (u8[offset] === 0) break;
        const frameId = String.fromCharCode(u8[offset], u8[offset + 1], u8[offset + 2]);
        const frameSize = (u8[offset + 3] << 16) | (u8[offset + 4] << 8) | u8[offset + 5];
        if (frameSize <= 0 || offset + 6 + frameSize > end) break;
        const enc = u8[offset + 6];

        if (frameId === "PIC" && !coverArtUrl && frameSize > 6) {
          try {
            const format = String.fromCharCode(u8[offset + 7], u8[offset + 8], u8[offset + 9]).toUpperCase();
            const mime = (format === "PNG") ? "image/png" : "image/jpeg";
            let descPos = offset + 11;
            const frameEnd = offset + 6 + frameSize;
            if (enc === 1 || enc === 2) {
              while (descPos + 1 < frameEnd && !(u8[descPos] === 0 && u8[descPos + 1] === 0)) descPos += 2;
              descPos += 2;
            } else {
              while (descPos < frameEnd && u8[descPos] !== 0) descPos++;
              descPos += 1;
            }
            if (descPos < frameEnd) {
              const imgBytes = u8.subarray(descPos, frameEnd);
              coverArtBlob = new Blob([imgBytes], { type: mime });
              coverArtUrl = URL.createObjectURL(coverArtBlob);
            }
          } catch (_) {}
        } else {
          const raw = u8.subarray(offset + 7, offset + 6 + frameSize);
          tags[frameId] = this.decodeString(raw, enc);
        }

        offset += 6 + frameSize;
      }
    } else {
      while (offset + 10 <= end) {
        if (u8[offset] === 0) break;
        const frameId = String.fromCharCode(u8[offset], u8[offset + 1], u8[offset + 2], u8[offset + 3]);
        let frameSize = 0;
        if (major === 4) {
          frameSize = ((u8[offset + 4] & 0x7f) << 21) | ((u8[offset + 5] & 0x7f) << 14) | ((u8[offset + 6] & 0x7f) << 7) | (u8[offset + 7] & 0x7f);
        } else {
          frameSize = (u8[offset + 4] << 24) | (u8[offset + 5] << 16) | (u8[offset + 6] << 8) | u8[offset + 7];
        }
        if (frameSize <= 0 || offset + 10 + frameSize > end) break;
        const enc = u8[offset + 10];

        if (frameId === "APIC" && !coverArtUrl && frameSize > 6) {
          try {
            let cur = offset + 11;
            const frameEnd = offset + 10 + frameSize;
            let mime = "";
            while (cur < frameEnd && u8[cur] !== 0) {
              mime += String.fromCharCode(u8[cur]);
              cur++;
            }
            cur++; // skip null terminator
            mime = (mime || "").trim().toLowerCase();
            if (!mime || mime === "image/" || mime === "-->") mime = "image/jpeg";
            if (mime === "jpg" || mime === "jpeg") mime = "image/jpeg";
            if (mime === "png") mime = "image/png";

            if (cur < frameEnd) {
              cur++; // skip picture type (1 byte)
              if (enc === 1 || enc === 2) {
                while (cur + 1 < frameEnd && !(u8[cur] === 0 && u8[cur + 1] === 0)) cur += 2;
                cur += 2;
              } else {
                while (cur < frameEnd && u8[cur] !== 0) cur++;
                cur += 1;
              }
              if (cur < frameEnd) {
                const imgBytes = u8.subarray(cur, frameEnd);
                coverArtBlob = new Blob([imgBytes], { type: mime });
                coverArtUrl = URL.createObjectURL(coverArtBlob);
              }
            }
          } catch (_) {}
        } else {
          const raw = u8.subarray(offset + 11, offset + 10 + frameSize);
          tags[frameId] = this.decodeString(raw, enc);
        }

        offset += 10 + frameSize;
      }
    }

    const title = tags["TIT2"] || tags["TT2"] || tags["TIT1"] || tags["TIT3"] || "";
    const artist = tags["TPE1"] || tags["TP1"] || tags["TPE2"] || "";
    return { title, artist, coverArtBlob, coverArtUrl };
  },

  parseID3v1(u8) {
    if (!u8 || u8.length < 128) return null;
    const start = u8.length - 128;
    if (u8[start] !== 0x54 || u8[start + 1] !== 0x41 || u8[start + 2] !== 0x47) return null; // 'TAG'
    const titleBytes = u8.subarray(start + 3, start + 33);
    const artistBytes = u8.subarray(start + 33, start + 63);
    const title = this.decodeString(titleBytes, 0);
    const artist = this.decodeString(artistBytes, 0);
    return { title, artist };
  },

  parseFLAC(u8) {
    if (!u8 || u8.length < 42) return null;
    if (u8[0] !== 0x66 || u8[1] !== 0x4c || u8[2] !== 0x61 || u8[3] !== 0x43) return null; // 'fLaC'
    let offset = 4;
    let isLast = false;
    let title = "";
    let artist = "";
    let coverArtBlob = null;
    let coverArtUrl = null;

    while (offset + 4 <= u8.length && !isLast) {
      const header = u8[offset];
      isLast = (header & 0x80) !== 0;
      const blockType = header & 0x7f;
      const blockLen = (u8[offset + 1] << 16) | (u8[offset + 2] << 8) | u8[offset + 3];
      const blockDataStart = offset + 4;
      const blockEnd = blockDataStart + blockLen;
      if (blockEnd > u8.length) break;

      // Type 4: VORBIS_COMMENT
      if (blockType === 4 && blockLen > 8) {
        try {
          let pos = blockDataStart;
          const vendorLen = (u8[pos] | (u8[pos + 1] << 8) | (u8[pos + 2] << 16) | (u8[pos + 3] << 24)) >>> 0;
          pos += 4 + vendorLen;
          if (pos + 4 <= blockEnd) {
            const commentCount = (u8[pos] | (u8[pos + 1] << 8) | (u8[pos + 2] << 16) | (u8[pos + 3] << 24)) >>> 0;
            pos += 4;
            for (let c = 0; c < commentCount && pos + 4 <= blockEnd; c++) {
              const cLen = (u8[pos] | (u8[pos + 1] << 8) | (u8[pos + 2] << 16) | (u8[pos + 3] << 24)) >>> 0;
              pos += 4;
              if (pos + cLen <= blockEnd) {
                const commentStr = this.decodeString(u8.subarray(pos, pos + cLen), 3);
                pos += cLen;
                const eqIdx = commentStr.indexOf("=");
                if (eqIdx > 0) {
                  const key = commentStr.substring(0, eqIdx).toUpperCase();
                  const val = commentStr.substring(eqIdx + 1);
                  if (key === "TITLE") title = val;
                  if (key === "ARTIST") artist = val;
                }
              }
            }
          }
        } catch (_) {}
      }

      // Type 6: PICTURE
      if (blockType === 6 && blockLen > 32 && !coverArtUrl) {
        try {
          let pos = blockDataStart + 4; // skip picture type
          const mimeLen = (u8[pos] << 24) | (u8[pos + 1] << 16) | (u8[pos + 2] << 8) | u8[pos + 3];
          pos += 4;
          let mime = this.decodeString(u8.subarray(pos, pos + mimeLen), 0) || "image/jpeg";
          pos += mimeLen;
          const descLen = (u8[pos] << 24) | (u8[pos + 1] << 16) | (u8[pos + 2] << 8) | u8[pos + 3];
          pos += 4 + descLen;
          pos += 16; // width (4), height (4), depth (4), colors (4)
          if (pos + 4 <= blockEnd) {
            const dataLen = (u8[pos] << 24) | (u8[pos + 1] << 16) | (u8[pos + 2] << 8) | u8[pos + 3];
            pos += 4;
            if (pos + dataLen <= blockEnd) {
              const imgBytes = u8.subarray(pos, pos + dataLen);
              coverArtBlob = new Blob([imgBytes], { type: mime });
              coverArtUrl = URL.createObjectURL(coverArtBlob);
            }
          }
        } catch (_) {}
      }

      offset = blockEnd;
    }

    return { title, artist, coverArtBlob, coverArtUrl };
  },

  parseM4A(u8) {
    if (!u8 || u8.length < 32) return null;
    let title = "";
    let artist = "";
    let coverArtBlob = null;
    let coverArtUrl = null;

    const searchAtom = (fourCC) => {
      for (let i = 0; i < u8.length - 24; i++) {
        if (u8[i] === fourCC[0] && u8[i + 1] === fourCC[1] && u8[i + 2] === fourCC[2] && u8[i + 3] === fourCC[3]) {
          let atomLen = (u8[i - 4] << 24) | (u8[i - 3] << 16) | (u8[i - 2] << 8) | u8[i - 1];
          if (atomLen <= 8 || atomLen > 10000000) atomLen = 512;
          for (let j = i + 4; j < i + atomLen && j < u8.length - 16; j++) {
            if (u8[j] === 0x64 && u8[j + 1] === 0x61 && u8[j + 2] === 0x74 && u8[j + 3] === 0x61) { // 'data'
              const dataLen = (u8[j - 4] << 24) | (u8[j - 3] << 16) | (u8[j - 2] << 8) | u8[j - 1];
              const textStart = j + 12;
              const textLen = Math.max(0, dataLen - 16);
              if (textStart + textLen <= u8.length) {
                const raw = u8.subarray(textStart, textStart + textLen);
                return this.decodeString(raw, 3);
              }
            }
          }
        }
      }
      return "";
    };

    const searchCover = () => {
      for (let i = 0; i < u8.length - 24; i++) {
        // 'covr' = [0x63, 0x6f, 0x76, 0x72]
        if (u8[i] === 0x63 && u8[i + 1] === 0x6f && u8[i + 2] === 0x76 && u8[i + 3] === 0x72) {
          let atomLen = (u8[i - 4] << 24) | (u8[i - 3] << 16) | (u8[i - 2] << 8) | u8[i - 1];
          if (atomLen <= 8 || atomLen > 12000000) atomLen = 4000000;
          const searchEnd = Math.min(u8.length - 16, i + atomLen);
          for (let j = i + 4; j < searchEnd; j++) {
            // 'data' = [0x64, 0x61, 0x74, 0x61]
            if (u8[j] === 0x64 && u8[j + 1] === 0x61 && u8[j + 2] === 0x74 && u8[j + 3] === 0x61) {
              const dataLen = (u8[j - 4] << 24) | (u8[j - 3] << 16) | (u8[j - 2] << 8) | u8[j - 1];
              const dataType = (u8[j + 4] << 24) | (u8[j + 5] << 16) | (u8[j + 6] << 8) | u8[j + 7];
              const mime = (dataType === 14) ? "image/png" : "image/jpeg";
              const imgStart = j + 12;
              const imgLen = Math.max(0, dataLen - 16);
              if (imgStart + imgLen <= u8.length && imgLen > 0) {
                const imgBytes = u8.subarray(imgStart, imgStart + imgLen);
                try {
                  const blob = new Blob([imgBytes], { type: mime });
                  return {
                    coverArtBlob: blob,
                    coverArtUrl: URL.createObjectURL(blob)
                  };
                } catch (_) {}
              }
            }
          }
        }
      }
      return null;
    };

    title = searchAtom([0xa9, 0x6e, 0x61, 0x6d]); // ©nam
    artist = searchAtom([0xa9, 0x41, 0x52, 0x54]); // ©ART
    const cov = searchCover();
    if (cov) {
      coverArtBlob = cov.coverArtBlob;
      coverArtUrl = cov.coverArtUrl;
    }
    return { title, artist, coverArtBlob, coverArtUrl };
  },

  cleanFilename(fileName) {
    if (!fileName) return "";
    let name = fileName.replace(/\.[^/.]+$/, "").trim();
    name = name.replace(/_/g, " ");
    // Remove leading track numbers: '01 - ', '01. ', '1 - ', 'Track 01 - ', '[01] ', '01_ '
    name = name.replace(/^(\d{1,3}[\s.\-_]+|track\s*\d+[\s.\-_]+|\[\d+\][\s.\-_]*)/i, "").trim();
    name = this.cleanNoise(name);
    return name;
  },

  async parseAudioMetadata(fileOrBlob, fileName = "") {
    const fallbackName = fileName || (fileOrBlob && fileOrBlob.name) || "";
    let title = "";
    let artist = "";
    let coverArtUrl = null;
    let coverArtBlob = null;

    try {
      if (fileOrBlob && typeof fileOrBlob.slice === "function") {
        // Read header first (first 10 bytes) to get accurate ID3v2 tag size
        const first10Blob = fileOrBlob.slice(0, 10);
        const first10Buf = await first10Blob.arrayBuffer();
        const first10 = new Uint8Array(first10Buf);

        let sliceSize = 262144; // default 256KB
        if (first10[0] === 0x49 && first10[1] === 0x44 && first10[2] === 0x33) {
          const tagSize = ((first10[6] & 0x7f) << 21) | ((first10[7] & 0x7f) << 14) | ((first10[8] & 0x7f) << 7) | (first10[9] & 0x7f);
          sliceSize = Math.min(fileOrBlob.size, Math.min(10 + tagSize, 12 * 1024 * 1024)); // cap at 12MB
        } else if (fileOrBlob.size > 262144) {
          sliceSize = Math.min(fileOrBlob.size, 4 * 1024 * 1024); // 4MB for M4A/FLAC to catch cover art
        }

        const headBlob = fileOrBlob.slice(0, sliceSize);
        const headBuffer = await headBlob.arrayBuffer();
        const headU8 = new Uint8Array(headBuffer);

        // 1. Try ID3v2
        const v2 = this.parseID3v2(headU8);
        if (v2) {
          if (v2.title) title = v2.title;
          if (v2.artist) artist = v2.artist;
          if (v2.coverArtUrl) {
            coverArtUrl = v2.coverArtUrl;
            coverArtBlob = v2.coverArtBlob;
          }
        }

        // 2. Try FLAC if not found
        if (!title && !artist && !coverArtUrl) {
          const flac = this.parseFLAC(headU8);
          if (flac) {
            if (flac.title) title = flac.title;
            if (flac.artist) artist = flac.artist;
            if (flac.coverArtUrl) {
              coverArtUrl = flac.coverArtUrl;
              coverArtBlob = flac.coverArtBlob;
            }
          }
        }

        // 3. Try M4A / AAC if not found
        if (!title && !artist && !coverArtUrl) {
          const m4a = this.parseM4A(headU8);
          if (m4a) {
            if (m4a.title) title = m4a.title;
            if (m4a.artist) artist = m4a.artist;
            if (m4a.coverArtUrl) {
              coverArtUrl = m4a.coverArtUrl;
              coverArtBlob = m4a.coverArtBlob;
            }
          }
        }

        // 4. Try ID3v1 at tail if title is still missing
        if (!title && fileOrBlob.size > 128) {
          const tailBlob = fileOrBlob.slice(-128);
          const tailBuffer = await tailBlob.arrayBuffer();
          const tailU8 = new Uint8Array(tailBuffer);
          const v1 = this.parseID3v1(tailU8);
          if (v1 && (v1.title || v1.artist)) {
            if (!title) title = v1.title || "";
            if (!artist) artist = v1.artist || "";
          }
        }
      }
    } catch (e) {
      console.warn("Audio metadata parse notice:", e);
    }

    title = this.cleanNoise(title);
    artist = this.cleanNoise(artist);

    let trackTitle = "";
    let trackArtist = artist || "";

    if (title) {
      trackTitle = title;
      // If title includes "Artist - Track" or artist is at the beginning, isolate the track name!
      if (trackArtist && trackTitle.toLowerCase().startsWith(trackArtist.toLowerCase())) {
        trackTitle = trackTitle.substring(trackArtist.length).replace(/^[\s\-_:]+/, "").trim();
      } else if (trackTitle.includes(" - ")) {
        const parts = trackTitle.split(/\s+-\s+/);
        if (parts.length >= 2) {
          if (!trackArtist) trackArtist = parts[0].trim();
          trackTitle = parts.slice(1).join(" - ").trim();
        }
      }
    } else {
      let cleaned = this.cleanFilename(fallbackName);
      if (cleaned.includes(" - ")) {
        const parts = cleaned.split(/\s+-\s+/);
        if (parts.length >= 2) {
          if (!trackArtist) trackArtist = parts[0].trim();
          trackTitle = parts.slice(1).join(" - ").trim();
        } else {
          trackTitle = cleaned;
        }
      } else {
        trackTitle = cleaned;
      }
    }

    trackTitle = this.cleanNoise(trackTitle);
    trackArtist = this.cleanNoise(trackArtist);

    if (!trackTitle || /^\d+$/.test(trackTitle)) {
      if (typeof window !== "undefined" && typeof window.prompt === "function") {
        try {
          const userEntered = window.prompt(`Detected audio track "${fallbackName}". What is the song title?`, "");
          if (userEntered && userEntered.trim()) {
            trackTitle = userEntered.trim();
          }
        } catch (_) {}
      }
      if (!trackTitle || /^\d+$/.test(trackTitle)) {
        trackTitle = `Custom Track ${trackTitle || "1"}`;
      }
    }

    return {
      title: trackTitle,
      artist: trackArtist,
      cleanTitle: trackTitle,
      coverArtUrl,
      coverArtBlob
    };
  },

  async parseAudioFile(fileOrBlob, fileName = "") {
    const meta = await this.parseAudioMetadata(fileOrBlob, fileName);
    return meta.cleanTitle || "Custom Audio Track";
  }
};

// Preset library
const MUSIC_PRESETS = {
  anthem: {
    id: "anthem",
    name: "Am I Wrong",
    source: "default",
    url: "background-music.mp3",
    desc: "Official Study Anthem (High Energy)"
  },
  lofi: {
    id: "lofi",
    name: "Lofi Chill Study Beats",
    source: "preset",
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
    desc: "Relaxed, smooth, continuous study rhythm"
  },
  cosmic: {
    id: "cosmic",
    name: "Cosmic Focus Space Drone",
    source: "preset",
    url: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=space-chillout-14194.mp3",
    desc: "Atmospheric cosmic focus for deep reading"
  },
  synthwave: {
    id: "synthwave",
    name: "Synthwave Cyber Momentum",
    source: "preset",
    url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=synthwave-80s-110045.mp3",
    desc: "Upbeat synthwave drive for rapid test review"
  }
};

// BACKGROUND STUDY MUSIC MANAGER
class BackgroundMusicManager {
  constructor() {
    this.audio = null;
    this.currentTrack = {
      name: "Am I Wrong",
      source: "default",
      url: "background-music.mp3"
    };
    this.customBlobUrl = null;
    this.selectedUploadFile = null;
    this.volume = 0.40;
    this.hasStarted = false;
    this.isMuted = false;
    this.appRef = null;
    this.toastTimeout = null;
    this._adminUIBound = false;
  }

  async init(appRef = null) {
    this.appRef = appRef;
    this.audio = document.getElementById("bg-music-player");
    if (!this.audio) {
      this.audio = new Audio("background-music.mp3");
      this.audio.id = "bg-music-player";
      this.audio.loop = true;
      document.body.appendChild(this.audio);
    }
    this.audio.volume = this.volume;

    // Check mute state from localStorage
    const savedMute = localStorage.getItem("scienceio_sound_muted");
    this.isMuted = (savedMute === "true");

    // Check IndexedDB for custom track
    try {
      const storedTrack = await AudioStorage.getTrack("active_custom_track");
      if (storedTrack && storedTrack.blob) {
        this.customBlobUrl = URL.createObjectURL(storedTrack.blob);
        let trackName = storedTrack.name;
        let coverArtUrl = null;
        let trackArtist = storedTrack.artist || "";
        try {
          const meta = await AudioMetadataParser.parseAudioMetadata(storedTrack.blob, storedTrack.name || "custom.mp3");
          if (meta.cleanTitle) {
            trackName = meta.cleanTitle;
          }
          if (meta.artist) {
            trackArtist = meta.artist;
          }
          if (meta.coverArtUrl) {
            coverArtUrl = meta.coverArtUrl;
          }
        } catch (_) {}
        this.currentTrack = {
          name: trackName || "Custom Uploaded Track",
          title: trackName || "Custom Uploaded Track",
          artist: trackArtist,
          source: "custom",
          url: this.customBlobUrl,
          coverArt: coverArtUrl
        };
        this.audio.src = this.customBlobUrl;
      }
    } catch (e) {
      console.warn("AudioStorage fetch notice:", e);
    }

    this.bindEvents();
    this.bindAdminVaultUI();
    this.updateUI();

    // Auto-start on first user interaction if not explicitly muted
    if (!this.isMuted) {
      const startOnInteraction = () => {
        if (!this.hasStarted && !this.isMuted) {
          this.play(false);
        }
        cleanupListeners();
      };
      const cleanupListeners = () => {
        document.removeEventListener("click", startOnInteraction);
        document.removeEventListener("keydown", startOnInteraction);
        document.removeEventListener("touchstart", startOnInteraction);
        document.removeEventListener("scroll", startOnInteraction);
      };
      document.addEventListener("click", startOnInteraction, { once: true });
      document.addEventListener("keydown", startOnInteraction, { once: true });
      document.addEventListener("touchstart", startOnInteraction, { once: true });
      document.addEventListener("scroll", startOnInteraction, { once: true });

      // Attempt immediate background start
      this.audio.play().then(() => {
        this.hasStarted = true;
        this.updateUI();
        this.showToast();
      }).catch(() => {
        // Handled by first interaction listener above
      });
    } else {
      sounds.enabled = false;
      this.updateNavbarIcons(false);
    }
  }

  bindEvents() {
    if (!this.audio) return;

    this.audio.addEventListener("timeupdate", () => {
      this.updateScrubber();
    });

    this.audio.addEventListener("play", () => {
      this.hasStarted = true;
      this.updateUI();
    });

    this.audio.addEventListener("pause", () => {
      this.updateUI();
    });

    this.audio.addEventListener("error", (e) => {
      console.warn("Audio element error, restoring default study anthem:", e);
      if (this.audio.src && !this.audio.src.endsWith("background-music.mp3")) {
        this.audio.src = "background-music.mp3";
        this.currentTrack = {
          name: "Am I Wrong",
          source: "default",
          url: "background-music.mp3"
        };
        this.updateUI();
        if (!this.isMuted && this.hasStarted) {
          this.audio.play().catch(() => {});
        }
      }
    });

    // Wire navbar sound toggle (placed next to printer) and music toggle
    const soundToggle = document.getElementById("btn-sound-toggle");
    const musicToggle = document.getElementById("btn-music-toggle");
    const toastToggle = document.getElementById("toast-music-toggle-btn");
    const toastCard = document.getElementById("music-floating-toast");

    const onToggleClick = (e) => {
      if (e) e.stopPropagation();
      this.toggle();
    };

    soundToggle?.addEventListener("click", onToggleClick);
    musicToggle?.addEventListener("click", onToggleClick);
    toastToggle?.addEventListener("click", onToggleClick);
    toastCard?.addEventListener("click", onToggleClick);
  }

  bindAdminVaultUI() {
    if (this._adminUIBound) return;
    if (!document.getElementById("btn-admin-music-playpause")) return;
    this._adminUIBound = true;
    document.getElementById("cmd-btn-open-music-studio")?.addEventListener("click", () => {
      const vaultCtrl = (this.appRef && typeof this.appRef.switchTab === "function") ? this.appRef : this.appRef?.vault;
      vaultCtrl?.switchTab?.("music");
    });

    // Play/Pause button in Admin Vault
    document.getElementById("btn-admin-music-playpause")?.addEventListener("click", () => {
      this.toggle();
    });

    // Restart button
    document.getElementById("btn-admin-music-restart")?.addEventListener("click", () => {
      if (this.audio) {
        this.audio.currentTime = 0;
        this.play(true);
      }
    });

    // Volume slider
    const volSlider = document.getElementById("admin-music-volume-slider");
    const volVal = document.getElementById("admin-music-volume-val");
    if (volSlider) {
      volSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value, 10);
        this.volume = val / 100;
        if (this.audio) this.audio.volume = this.volume;
        if (volVal) volVal.textContent = `${val}%`;
      });
    }

    // Scrubber
    const scrubber = document.getElementById("admin-music-scrubber");
    if (scrubber) {
      scrubber.addEventListener("input", (e) => {
        if (this.audio && this.audio.duration) {
          const seekPercent = parseFloat(e.target.value);
          this.audio.currentTime = (seekPercent / 100) * this.audio.duration;
        }
      });
    }

    // File Dropzone & Browse button
    const fileInput = document.getElementById("admin-music-file-input");
    const browseBtn = document.getElementById("btn-browse-music-file");
    const dropzone = document.getElementById("admin-music-dropzone");
    const saveUploadBtn = document.getElementById("btn-save-uploaded-music");
    const resetDefaultBtn = document.getElementById("btn-reset-default-music");

    browseBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      fileInput?.click();
    });

    dropzone?.addEventListener("click", () => {
      fileInput?.click();
    });

    dropzone?.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });

    dropzone?.addEventListener("dragleave", () => {
      dropzone.classList.remove("dragover");
    });

    dropzone?.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer && e.dataTransfer.files.length > 0) {
        this.handleFileSelected(e.dataTransfer.files[0]);
      }
    });

    fileInput?.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        this.handleFileSelected(e.target.files[0]);
      }
    });

    // Save uploaded music button
    saveUploadBtn?.addEventListener("click", async () => {
      if (!this.selectedUploadFile) return;
      await this.applyUploadedFile(this.selectedUploadFile);
    });

    // Reset default button
    resetDefaultBtn?.addEventListener("click", async () => {
      await this.resetToDefault();
    });

    // Presets click listeners
    document.querySelectorAll(".music-preset-card").forEach((card) => {
      const presetKey = card.dataset.preset;
      const selectBtn = card.querySelector(".btn-preset-select");
      const handleSelect = async () => {
        if (MUSIC_PRESETS[presetKey]) {
          await this.selectPreset(presetKey);
        }
      };
      card.addEventListener("click", handleSelect);
      selectBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        handleSelect();
      });
    });

    // Direct URL Apply button
    document.getElementById("btn-apply-music-url")?.addEventListener("click", async () => {
      const input = document.getElementById("admin-music-direct-url");
      const url = (input?.value || "").trim();
      if (!url) {
        alert("Please enter a valid audio URL (e.g., https://example.com/study-beats.mp3)");
        return;
      }
      await this.applyDirectUrl(url);
    });
  }

  async handleFileSelected(file) {
    if (!file || !file.type.startsWith("audio/")) {
      alert("Please select a valid audio file (MP3, WAV, OGG, M4A, etc.)");
      return;
    }
    this.selectedUploadFile = file;
    const filePill = document.getElementById("selected-audio-file-info");
    const nameEl = document.getElementById("selected-audio-name");
    const sizeEl = document.getElementById("selected-audio-size");
    const saveBtn = document.getElementById("btn-save-uploaded-music");

    let displayTitle = file.name;
    try {
      displayTitle = await AudioMetadataParser.parseAudioFile(file, file.name);
    } catch (_) {
      displayTitle = AudioMetadataParser.cleanFilename(file.name);
    }

    if (nameEl) nameEl.textContent = displayTitle;
    if (sizeEl) sizeEl.textContent = `(${(file.size / (1024 * 1024)).toFixed(2)} MB)`;
    if (filePill) filePill.classList.remove("hidden");
    if (saveBtn) saveBtn.disabled = false;
  }

  async playCustomUploadedFile(file, customTitle = null) {
    if (!file) return;

    // Immediately stop whatever audio is playing
    if (this.audio) {
      try {
        this.audio.pause();
      } catch (_) {}
    }

    let cleanTitle = customTitle;
    let coverArtUrl = null;
    let trackArtist = "";
    try {
      const meta = await AudioMetadataParser.parseAudioMetadata(file, file.name);
      cleanTitle = meta.cleanTitle;
      coverArtUrl = meta.coverArtUrl;
      trackArtist = meta.artist || "";
    } catch (_) {
      cleanTitle = AudioMetadataParser.cleanFilename(file.name);
    }
    if (!cleanTitle) cleanTitle = "Custom Uploaded Song";

    // 1. Save to local IndexedDB for permanent persistence across refreshes
    try {
      await AudioStorage.saveTrack("active_custom_track", file, {
        name: cleanTitle,
        artist: trackArtist,
        size: file.size,
        type: file.type
      });
    } catch (e) {
      console.warn("AudioStorage save notice:", e);
    }

    // 2. Revoke previous blob if any
    if (this.customBlobUrl) {
      URL.revokeObjectURL(this.customBlobUrl);
      this.customBlobUrl = null;
    }
    if (this.currentTrack?.coverArt && this.currentTrack.coverArt.startsWith("blob:")) {
      try { URL.revokeObjectURL(this.currentTrack.coverArt); } catch (_) {}
    }

    this.customBlobUrl = URL.createObjectURL(file);
    this.currentTrack = {
      name: cleanTitle,
      title: cleanTitle,
      artist: trackArtist,
      rawName: file.name,
      source: "custom_upload",
      url: this.customBlobUrl,
      coverArt: coverArtUrl
    };

    if (!this.audio) {
      this.audio = document.getElementById("bg-music-player") || new Audio(this.customBlobUrl);
      this.audio.id = "bg-music-player";
      this.audio.loop = true;
      document.body.appendChild(this.audio);
    }

    this.audio.src = this.customBlobUrl;
    this.audio.currentTime = 0;
    this.hasStarted = true;
    this.isMuted = false;
    sounds.enabled = true;
    localStorage.setItem("scienceio_sound_muted", "false");

    try {
      await this.audio.play();
    } catch (err) {
      console.warn("Custom audio play notice:", err);
    }

    this.updateUI();

    // Trigger Dynamic Island immediately with custom song name and embedded cover art
    if (window.app?.dynamicIsland) {
      if (typeof window.app.dynamicIsland.trigger === "function") {
        window.app.dynamicIsland.trigger({
          icon: "music",
          title: cleanTitle,
          subtitle: "Custom Audio • Now Playing",
          badge: "CUSTOM",
          actionText: "CONTROLS",
          showEqualizer: !coverArtUrl,
          isPlaying: true,
          coverArt: coverArtUrl,
          duration: 4000,
          action: () => {
            if (typeof window.app.dynamicIsland.openMacDeck === "function") {
              window.app.dynamicIsland.openMacDeck();
            }
          }
        });
      }
      if (typeof window.app.dynamicIsland.syncMusic === "function") {
        window.app.dynamicIsland.syncMusic(cleanTitle, true);
      }
    }

    // Background sync metadata to Firestore
    const musicConfig = {
      trackName: cleanTitle,
      trackSource: "custom_upload",
      audioUrl: "custom_upload",
      fileSize: file.size,
      updated_at: new Date().toISOString()
    };
    if (file.size <= 700 * 1024) {
      try {
        const base64 = await this.fileToBase64(file);
        musicConfig.audioData = base64;
      } catch (_) {}
    }
    await this.syncToFirestore(musicConfig);
  }

  async applyUploadedFile(file) {
    const saveBtn = document.getElementById("btn-save-uploaded-music");
    if (saveBtn) {
      saveBtn.disabled = true;
      saveBtn.innerHTML = `<span>Storing & Syncing Audio...</span>`;
    }

    try {
      let cleanTitle = "";
      try {
        cleanTitle = await AudioMetadataParser.parseAudioFile(file, file.name);
      } catch (_) {
        cleanTitle = AudioMetadataParser.cleanFilename(file.name);
      }
      await this.playCustomUploadedFile(file, cleanTitle);
      sounds.playSuccess();
      alert(`Background music successfully set to "${cleanTitle}"! It is now playing in the background for all study sessions.`);
      this.updateUI();
    } catch (err) {
      alert(`Failed to set background audio: ${err.message}`);
    } finally {
      if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.innerHTML = `<span>Apply & Set as Website Background Music</span>`;
      }
    }
  }

  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(file);
    });
  }

  async selectPreset(presetKey) {
    const preset = MUSIC_PRESETS[presetKey];
    if (!preset) return;

    if (preset.isDefault || presetKey === "anthem") {
      await this.resetToDefault();
      return;
    }

    if (this.currentTrack?.coverArt && this.currentTrack.coverArt.startsWith("blob:")) {
      try { URL.revokeObjectURL(this.currentTrack.coverArt); } catch (_) {}
    }

    this.currentTrack = {
      name: preset.name,
      source: "preset",
      url: preset.url,
      coverArt: null
    };

    if (this.audio) {
      this.audio.src = preset.url;
      this.audio.currentTime = 0;
      await this.play(true);
    }

    await this.syncToFirestore({
      trackName: preset.name,
      trackSource: "preset",
      presetKey: presetKey,
      audioUrl: preset.url,
      updated_at: new Date().toISOString()
    });

    sounds.playSuccess();
    this.updateUI();
  }

  async applyDirectUrl(url) {
    let cleanUrl = url.trim();
    let trackTitle = cleanUrl.split("/").pop().split("?")[0] || "Custom Cloud Audio Stream";

    if (this.currentTrack?.coverArt && this.currentTrack.coverArt.startsWith("blob:")) {
      try { URL.revokeObjectURL(this.currentTrack.coverArt); } catch (_) {}
    }

    this.currentTrack = {
      name: trackTitle,
      source: "direct_url",
      url: cleanUrl,
      coverArt: null
    };

    if (this.audio) {
      this.audio.src = cleanUrl;
      this.audio.currentTime = 0;
      await this.play(true);
    }

    await this.syncToFirestore({
      trackName: trackTitle,
      trackSource: "direct_url",
      audioUrl: cleanUrl,
      updated_at: new Date().toISOString()
    });

    sounds.playSuccess();
    alert(`Cloud audio URL applied! Now playing "${trackTitle}" for all visitors.`);
    this.updateUI();
  }

  async resetToDefault() {
    await AudioStorage.clearTrack("active_custom_track");
    if (this.customBlobUrl) {
      URL.revokeObjectURL(this.customBlobUrl);
      this.customBlobUrl = null;
    }
    if (this.currentTrack?.coverArt && this.currentTrack.coverArt.startsWith("blob:")) {
      try { URL.revokeObjectURL(this.currentTrack.coverArt); } catch (_) {}
    }

    this.currentTrack = {
      name: "Am I Wrong",
      source: "default",
      url: "background-music.mp3",
      coverArt: null
    };

    if (this.audio) {
      this.audio.src = "background-music.mp3";
      this.audio.currentTime = 0;
      await this.play(true);
    }

    await this.syncToFirestore({
      trackName: "Am I Wrong",
      trackSource: "default",
      audioUrl: "background-music.mp3",
      updated_at: new Date().toISOString()
    });

    const filePill = document.getElementById("selected-audio-file-info");
    const saveBtn = document.getElementById("btn-save-uploaded-music");
    if (filePill) filePill.classList.add("hidden");
    if (saveBtn) saveBtn.disabled = true;

    sounds.playSuccess();
    this.updateUI();
  }

  async syncToFirestore(config) {
    if (this.appRef && this.appRef.firestore) {
      try {
        await this.appRef.firestore.collection("science_notes").doc("curriculum").set({
          musicConfig: config,
          updated_at: new Date().toISOString()
        }, { merge: true });
      } catch (err) {
        console.warn("Firestore music sync notice:", err);
      }
    }
  }

  handleRemoteMusicUpdate(config) {
    if (!config || !config.audioUrl) return;
    // Transient browser-local blob URLs must never be accepted from remote cloud sync
    if (typeof config.audioUrl === "string" && config.audioUrl.startsWith("blob:")) {
      console.warn("Skipping remote transient blob URL in musicConfig:", config.audioUrl);
      return;
    }
    if (config.trackSource === "default" && this.currentTrack.source === "default") return;

    if (config.audioData && config.audioData.startsWith("data:audio")) {
      this.currentTrack = {
        name: config.trackName || "Custom Track",
        source: "remote_sync",
        url: config.audioData
      };
      if (this.audio && this.audio.src !== config.audioData) {
        const wasPlaying = !this.audio.paused;
        this.audio.src = config.audioData;
        if (wasPlaying && !this.isMuted) this.audio.play().catch(() => {});
      }
    } else if (config.audioUrl && config.audioUrl !== "custom_upload") {
      this.currentTrack = {
        name: config.trackName || "Background Music",
        source: config.trackSource || "remote_sync",
        url: config.audioUrl
      };
      if (this.audio && !this.audio.src.endsWith(config.audioUrl)) {
        const wasPlaying = !this.audio.paused;
        this.audio.src = config.audioUrl;
        if (wasPlaying && !this.isMuted) this.audio.play().catch(() => {});
      }
    }
    this.updateUI();
  }

  getMusicConfig() {
    let safeUrl = this.currentTrack.url;
    if (!safeUrl || safeUrl.startsWith("blob:") || this.currentTrack.source === "default") {
      safeUrl = "background-music.mp3";
    }
    return {
      trackName: this.currentTrack.name || "Am I Wrong",
      trackSource: (safeUrl === "background-music.mp3") ? "default" : this.currentTrack.source,
      audioUrl: safeUrl,
      updated_at: new Date().toISOString()
    };
  }

  toggle() {
    if (!this.audio) {
      this.audio = document.getElementById("bg-music-player");
    }
    if (!this.audio) return;
    if (this.audio.paused) {
      this.play(true);
    } else {
      this.pause();
    }
  }

  async play(userInitiated = true) {
    if (!this.audio) {
      this.audio = document.getElementById("bg-music-player") || new Audio("background-music.mp3");
    }
    try {
      this.audio.volume = this.volume;
      // If audio has no src or has an error, ensure background-music.mp3 is set
      if (!this.audio.src || this.audio.error) {
        this.audio.src = "background-music.mp3";
        this.currentTrack = {
          name: "Am I Wrong",
          source: "default",
          url: "background-music.mp3"
        };
      }
      await this.audio.play();
      this.hasStarted = true;
      this.isMuted = false;
      sounds.enabled = true;
      localStorage.setItem("scienceio_sound_muted", "false");
      this.updateUI();
      if (userInitiated) {
        this.showToast();
      }
    } catch (err) {
      console.warn("Audio play notice:", err);
      // Auto-fallback to default study anthem and retry
      try {
        this.audio.src = "background-music.mp3";
        this.currentTrack = {
          name: "Am I Wrong",
          source: "default",
          url: "background-music.mp3"
        };
        this.audio.load();
        await this.audio.play();
        this.hasStarted = true;
        this.isMuted = false;
        sounds.enabled = true;
        localStorage.setItem("scienceio_sound_muted", "false");
        this.updateUI();
        if (userInitiated) {
          this.showToast();
        }
      } catch (retryErr) {
        console.warn("Audio fallback retry notice:", retryErr);
        // Ensure state is unmuted in UI so user can see it attempted
        this.isMuted = false;
        this.updateUI();
      }
    }
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isMuted = true;
    sounds.enabled = false;
    localStorage.setItem("scienceio_sound_muted", "true");
    this.updateUI();
  }

  updateNavbarIcons(isPlaying) {
    const soundOn = document.getElementById("sound-icon-on");
    const soundOff = document.getElementById("sound-icon-off");
    const soundToggle = document.getElementById("btn-sound-toggle");
    const musicToggle = document.getElementById("btn-music-toggle");

    if (soundOn && soundOff) {
      soundOn.classList.toggle("hidden", !isPlaying);
      soundOff.classList.toggle("hidden", isPlaying);
    }

    if (soundToggle) {
      soundToggle.classList.toggle("music-playing", isPlaying);
      soundToggle.title = isPlaying 
        ? "Background Music Playing (Click to Stop/Mute)" 
        : "Sound Muted (Click to Play Background Music)";
    }

    if (musicToggle) {
      musicToggle.classList.toggle("music-playing", isPlaying);
    }
  }

  updateUI() {
    const isPlaying = this.audio && !this.audio.paused;
    this.updateNavbarIcons(isPlaying);

    // Update Waveform bars
    const waveform = document.getElementById("music-waveform-bars");
    if (waveform) {
      waveform.classList.toggle("paused", !isPlaying);
    }

    // Update Admin Track Info
    const titleEl = document.getElementById("admin-music-track-title");
    if (titleEl) titleEl.textContent = this.currentTrack.name;

    const statusText = document.getElementById("admin-music-status-text");
    const statusInd = document.getElementById("admin-music-status-indicator");
    if (statusText) statusText.textContent = isPlaying ? "Playing" : "Paused";
    if (statusInd) statusInd.classList.toggle("active", isPlaying);

    const playPauseIcon = document.getElementById("admin-playpause-icon");
    const playPauseText = document.getElementById("admin-playpause-text");
    if (playPauseIcon) playPauseIcon.innerHTML = isPlaying ? UI_SVG.pause : UI_SVG.play;
    if (playPauseText) playPauseText.textContent = isPlaying ? "Pause Music" : "Play Music";

    // Update Floating Toast
    const toast = document.getElementById("music-floating-toast");
    const toastTitle = document.getElementById("toast-music-title");
    const toastIcon = document.getElementById("toast-icon");
    if (toastTitle) toastTitle.textContent = this.currentTrack.name;
    if (toastIcon) toastIcon.innerHTML = isPlaying ? UI_SVG.pause : UI_SVG.play;
    if (toast) toast.classList.toggle("paused", !isPlaying);

    // Update active preset card
    document.querySelectorAll(".music-preset-card").forEach((card) => {
      const presetKey = card.dataset.preset;
      const isCardActive = (presetKey === "anthem" && this.currentTrack.source === "default") ||
                           (presetKey === "lofi" && this.currentTrack.name.includes("Lofi")) ||
                           (presetKey === "cosmic" && this.currentTrack.name.includes("Cosmic")) ||
                           (presetKey === "synthwave" && this.currentTrack.name.includes("Synthwave"));
      card.classList.toggle("active", isCardActive);
    });

    // Sync Dynamic Island instantly
    if (window.app?.dynamicIsland?.syncMusic) {
      window.app.dynamicIsland.syncMusic(this.currentTrack.name, isPlaying);
    }
  }

  updateScrubber() {
    if (!this.audio) return;
    const currTimeEl = document.getElementById("admin-music-curr-time");
    const totalTimeEl = document.getElementById("admin-music-total-time");
    const scrubber = document.getElementById("admin-music-scrubber");

    const cur = this.audio.currentTime || 0;
    const dur = this.audio.duration || 0;

    if (currTimeEl) currTimeEl.textContent = this.formatTime(cur);
    if (totalTimeEl && dur > 0) totalTimeEl.textContent = this.formatTime(dur);
    if (scrubber && dur > 0) {
      scrubber.value = ((cur / dur) * 100).toFixed(1);
    }
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  showToast() {
    const toast = document.getElementById("music-floating-toast");
    if (!toast) return;
    toast.classList.remove("hidden");
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.add("hidden");
    }, 6000);
  }
}

const bgMusic = new BackgroundMusicManager();


// CONFETTI CELEBRATION ENGINE
class ConfettiEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas ? canvas.getContext("2d") : null;
    this.particles = [];
    this.animating = false;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(x, y, count = 60) {
    if (!this.canvas || !this.ctx) return;
    const colors = ["#00d4ff", "#9d4edd", "#ff375f", "#34d399", "#f59e0b", "#38bdf8"];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 3;
      this.particles.push({
        x: x || window.innerWidth / 2,
        y: y || window.innerHeight / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 12,
        life: 1,
        decay: Math.random() * 0.015 + 0.01
      });
    }

    if (!this.animating) {
      this.animating = true;
      this.loop();
    }
  }

  loop() {
    if (!this.animating || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2; // Gravity
      p.rotation += p.vr;
      p.life -= p.decay;

      if (p.life <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = p.life;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// ADMIN SECURITY VAULT CONTROLLER
class VaultController {
  constructor(app) {
    this.app = app;
    this.code = "6151983";
    this.currentPin = "";
    this.isUnlocked = false;
    this.openCreatorAfterUnlock = false;
    this.activeTab = "architect";
    this.architectSquares = [];
    this.editingNoteId = null;
    this._adminMounted = false;
  }

  init() {
    this.setupKeypad();
    this.setupVaultTriggers();
  }

  getAdminViewHTML() {
    return "\n        <div class=\"admin-deck-header\">\n          <div class=\"admin-identity-row\">\n            <div class=\"admin-avatar\">\n              <span class=\"avatar-ring\"></span>\n              <span class=\"avatar-text\">JR</span>\n            </div>\n            <div>\n              <div class=\"admin-title-row\">\n                <h2 class=\"admin-title\">ADMIN COMMAND DECK</h2>\n                <span class=\"admin-clearance-pill\">LEVEL 5 SUPERUSER</span>\n              </div>\n              <p class=\"admin-welcome\">Welcome, <strong>Jeeva R.</strong> Full administrative control granted.</p>\n            </div>\n          </div>\n\n          <div class=\"admin-header-actions\">\n            <button type=\"button\" class=\"vault-publish-btn\" id=\"btn-vault-publish-cloud\" title=\"Publish and sync all notes to cloud database\">\n              <span><svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M3 11c-1 1-1.3 3.3-1.3 3.3s2.3-.3 3.3-1.3m3-2.5L6 8.5A14 14 0 0 1 14.5 1.5c0 2.2-.8 5.2-4 7.5z\"/></svg> Publish All Notes to Cloud</span>\n            </button>\n            <button type=\"button\" class=\"admin-btn-lock\" id=\"btn-vault-relock\" title=\"Lock the vault and end session\">\n              <svg viewBox=\"0 0 16 16\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><rect x=\"2\" y=\"7\" width=\"12\" height=\"7.5\" rx=\"1.4\"/><path d=\"M4.8 7V4.6a3.2 3.2 0 0 1 6.4 0V7\"/></svg>\n              Lock Vault\n            </button>\n            <button type=\"button\" class=\"modal-close-btn\" id=\"vault-admin-close\" title=\"Exit to website\">&times;</button>\n          </div>\n        </div>\n\n        <!-- Admin Navigation Tabs -->\n        <div class=\"admin-nav-tabs\">\n          <button type=\"button\" class=\"admin-tab-btn active\" data-tab=\"architect\" id=\"admin-tab-architect\">\n            <svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><rect x=\"2\" y=\"2\" width=\"12\" height=\"12\" rx=\"1.4\"/><path d=\"M2 6h12M6 14V6\"/></svg> Note Architect (Add Squares)\n          </button>\n          <button type=\"button\" class=\"admin-tab-btn\" data-tab=\"commands\" id=\"admin-tab-commands\">\n            <svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M9 1L2 9h5l-1 6 8-8H9z\"/></svg> Admin Web Controls\n          </button>\n          <button type=\"button\" class=\"admin-tab-btn\" data-tab=\"music\" id=\"admin-tab-music\">\n            <svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M6 12V3.5l8-1.5v8.5\"/><circle cx=\"4\" cy=\"12\" r=\"2\"/><circle cx=\"12\" cy=\"10.5\" r=\"2\"/></svg> Background Music Studio\n          </button>\n          <button type=\"button\" class=\"admin-tab-btn\" data-tab=\"manager\" id=\"admin-tab-manager\">\n            <svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M3 13a1.8 1.8 0 0 1 1.8-1.8H13.5V14.5H4.8A1.8 1.8 0 0 1 3 13V3.2A1.8 1.8 0 0 1 4.8 1.5H13.5V11\"/></svg> Database Manager\n          </button>\n          <button type=\"button\" class=\"admin-tab-btn\" data-tab=\"telemetry\" id=\"admin-tab-telemetry\">\n            <svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><line x1=\"12\" y1=\"13.5\" x2=\"12\" y2=\"6.5\"/><line x1=\"8\" y1=\"13.5\" x2=\"8\" y2=\"2.5\"/><line x1=\"4\" y1=\"13.5\" x2=\"4\" y2=\"9.5\"/></svg> System Telemetry\n          </button>\n          <button type=\"button\" class=\"admin-tab-btn\" data-tab=\"feedback\" id=\"admin-tab-feedback\">\n            <svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><rect x=\"1.5\" y=\"3\" width=\"13\" height=\"10\" rx=\"1.2\"/><polyline points=\"14.5 4.2 8 8.8 1.5 4.2\"/></svg> Student Feedback (<span id=\"admin-fb-count\">0</span>)\n          </button>\n        </div>\n\n        <div class=\"admin-deck-content-body\">\n          <!-- PANEL 1: NOTE ARCHITECT (WITH DYNAMIC SQUARES BUILDER) -->\n          <div id=\"panel-admin-architect\" class=\"admin-panel active\">\n            <div class=\"architect-intro-card\">\n              <div class=\"architect-intro-text\">\n                <h3>Structured Skience Unit Architect</h3>\n                <p>Create rich units with individual concept squares. Each square renders as a distinct card with its own principle, definition, observations, and lab tips!</p>\n              </div>\n              <div class=\"architect-quick-templates\">\n                <button type=\"button\" class=\"btn-template-pill\" id=\"btn-template-science-props\"><svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M9 1L2 9h5l-1 6 8-8H9z\"/></svg> Skientific Method Template</button>\n                <button type=\"button\" class=\"btn-template-pill\" id=\"btn-template-steps\"><svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M4 12h5.5M2 14.5h12M9.5 14.5a4.5 4.5 0 1 0-9 0\"/><circle cx=\"6\" cy=\"6\" r=\"1.5\"/></svg> Structure &amp; Function Template</button>\n                <button type=\"button\" class=\"btn-template-pill\" id=\"btn-architect-insert-bullet\" style=\"border-color: var(--accent-cyan); color: var(--accent-cyan);\" title=\"Insert bullet point into active field\">• Add Bullet Anywhere</button>\n              </div>\n            </div>\n\n            <form id=\"vault-note-form\" class=\"vault-note-form\">\n              <div class=\"form-row-2\">\n                <div class=\"form-group\">\n                  <div class=\"field-label-row\">\n                    <label for=\"vnote-title\">Unit / Topic Title <span class=\"req\">*</span></label>\n                    <button type=\"button\" class=\"btn-field-bullet\" data-for=\"vnote-title\" title=\"Insert a bullet point at cursor\">+ • Bullet</button>\n                  </div>\n                  <input type=\"text\" id=\"vnote-title\" required placeholder=\"e.g. STATES OF MATTER & PHASE CHANGES\" />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"vnote-category\">Category / Branch</label>\n                  <select id=\"vnote-category\">\n                    <option value=\"physical\" selected>Physical Skience (Matter, Energy, Force)</option>\n                    <option value=\"life\">Life Skience (Cells, Ecosystems, Plants)</option>\n                    <option value=\"biology\">Biology & Living Systems</option>\n                    <option value=\"earth\">Earth & Space (Planets, Weather, Rocks)</option>\n                    <option value=\"method\">Skientific Method & Experiments</option>\n                    <option value=\"custom\">Custom Skience Unit</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"form-row-2\">\n                <div class=\"form-group\">\n                  <div class=\"field-label-row\">\n                    <label for=\"vnote-formula\">Core Formula / Scientific Law</label>\n                    <button type=\"button\" class=\"btn-field-bullet\" data-for=\"vnote-formula\" title=\"Insert a bullet point at cursor\">+ • Bullet</button>\n                  </div>\n                  <input type=\"text\" id=\"vnote-formula\" placeholder=\"e.g. Conservation of Mass: Mass cannot be created or destroyed\" />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"vnote-color\">Card Glow Color</label>\n                  <select id=\"vnote-color\">\n                    <option value=\"blue\" selected>Electric Blue</option>\n                    <option value=\"cyan\">Neon Cyan</option>\n                    <option value=\"teal\">Tertiary Teal</option>\n                    <option value=\"indigo\">Tertiary Indigo / Blue-Violet</option>\n                    <option value=\"purple\">Deep Indigo Blue</option>\n                    <option value=\"plum\">Tertiary Plum / Red-Violet</option>\n                    <option value=\"emerald\">Emerald Bio</option>\n                    <option value=\"amber\">Solar Amber</option>\n                    <option value=\"orange\">Solar Orange</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"field-label-row\">\n                  <label for=\"vnote-desc\">Unit Summary & Teacher Notes <span class=\"req\">*</span></label>\n                  <button type=\"button\" class=\"btn-field-bullet\" data-for=\"vnote-desc\" title=\"Insert a bullet point at cursor\">+ • Bullet</button>\n                </div>\n                <textarea id=\"vnote-desc\" rows=\"2\" required placeholder=\"Provide an overview of the unit and what 5th graders will explore...\"></textarea>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"vnote-redirect\">External Link Redirect (Optional)</label>\n                <input type=\"url\" id=\"vnote-redirect\" placeholder=\"e.g. https://nasa.gov (Adds a link button next to 'View Notes')\" />\n              </div>\n\n              <!-- DYNAMIC SQUARES SECTION (DEFAULT FORMAT) -->\n              <div class=\"squares-builder-section\">\n                <div class=\"squares-builder-header\">\n                  <div class=\"squares-header-title-box\">\n                    <span class=\"squares-count-badge\" id=\"squares-count-badge\">0 Squares Configured</span>\n                    <h4>Individual Squares & Concepts</h4>\n                  </div>\n                  <button type=\"button\" class=\"btn-add-square\" id=\"btn-add-square\">\n                    <span>+ Add Another Concept Square</span>\n                  </button>\n                </div>\n\n                <p class=\"squares-instruction-text\">\n                  Each square below represents an individual card. Add titles, scientific formulas/laws, explanations, and observations:\n                </p>\n\n                <div class=\"squares-list-container\" id=\"vault-squares-list\">\n                  <!-- Dynamically populated squares -->\n                </div>\n\n                <div class=\"squares-footer-actions\">\n                  <button type=\"button\" class=\"btn-add-square secondary\" id=\"btn-add-square-bottom\">\n                    + Add Another Concept Square\n                  </button>\n                </div>\n              </div>\n\n              <div class=\"form-actions-admin\">\n                <button type=\"button\" class=\"btn-modal-action secondary\" id=\"btn-clear-architect\">Clear Form</button>\n                <button type=\"submit\" class=\"btn-modal-action primary admin-save-btn\" id=\"btn-save-vault-note\">\n                  <span><svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M3 11c-1 1-1.3 3.3-1.3 3.3s2.3-.3 3.3-1.3m3-2.5L6 8.5A14 14 0 0 1 14.5 1.5c0 2.2-.8 5.2-4 7.5z\"/></svg> Publish to Website & Cloud</span>\n                </button>\n              </div>\n            </form>\n          </div>\n\n          <!-- PANEL 2: ADMIN WEB CONTROLS & CLI -->\n          <div id=\"panel-admin-commands\" class=\"admin-panel hidden\">\n            <div class=\"admin-commands-grid\">\n              <div class=\"admin-cmd-card\" style=\"border-color: var(--accent-cyan);\">\n                <div class=\"cmd-icon-box\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M3 11c-1 1-1.3 3.3-1.3 3.3s2.3-.3 3.3-1.3m3-2.5L6 8.5A14 14 0 0 1 14.5 1.5c0 2.2-.8 5.2-4 7.5z\"/></svg></div>\n                <h4>Publish All Notes to Cloud</h4>\n                <p>Sync all stored units and squares to the cloud database so any device can view them.</p>\n                <button type=\"button\" class=\"cmd-exec-btn\" id=\"cmd-btn-quick-publish\" style=\"background: #1d4ed8;\">Publish Now</button>\n              </div>\n\n              <div class=\"admin-cmd-card\">\n                <div class=\"cmd-icon-box\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M6.5 1.5v4.5L3 12.5a1.3 1.3 0 0 0 1.2 1.8h7.6a1.3 1.3 0 0 0 1.2-1.8L9.5 6V1.5M5.5 1.5h5M6.5 6.5h3\"/></svg></div>\n                <h4>Preset: States of Matter</h4>\n                <p>Optionally injects \"States of Matter & Phase Changes\" with Solid, Liquid, Gas concept squares.</p>\n                <button type=\"button\" class=\"cmd-exec-btn\" id=\"cmd-btn-preset-matter\">Insert Unit</button>\n              </div>\n\n              <div class=\"cmd-cmd-card admin-cmd-card\">\n                <div class=\"cmd-icon-box\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M4.5 13.5h7M6.8 13.5c3.5-1.6.5-4.2 2-6.5M6.3 6.2c.8.6 1.2 1.5 1.5 2.5-1.3.3-2.3.3-3.2-.2-.8-.4-1.5-1.3-2-2.8 1.9-.3 3 0 3.7.5zM9.4 4a4.5 4.5 0 0 0-.7 2.6c1.2 0 2.2-.4 2.8-.9.7-.7 1.1-1.5 1.1-3-1.8 0-2.6.6-3.2 1.3z\"/></svg></div>\n                <h4>Preset: Photosynthesis & Energy</h4>\n                <p>Optionally injects Plant Energy Flow with Chloroplasts, Glucose, and Oxygen concept squares.</p>\n                <button type=\"button\" class=\"cmd-exec-btn\" id=\"cmd-btn-preset-photo\">Insert Unit</button>\n              </div>\n\n              <div class=\"admin-cmd-card\">\n                <div class=\"cmd-icon-box\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><polygon points=\"8 1.5 10 6 14.5 8 10 10 8 14.5 6 10 1.5 8 6 6\"/></svg></div>\n                <h4>Burst Celebration Confetti</h4>\n                <p>Triggers full-screen physics confetti particle engine across the whole site.</p>\n                <button type=\"button\" class=\"cmd-exec-btn\" id=\"cmd-btn-confetti\">Fire Confetti</button>\n              </div>\n\n              <div class=\"admin-cmd-card\" style=\"border-color: var(--accent-purple);\">\n                <div class=\"cmd-icon-box\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M6 12V3.5l8-1.5v8.5\"/><circle cx=\"4\" cy=\"12\" r=\"2\"/><circle cx=\"12\" cy=\"10.5\" r=\"2\"/></svg></div>\n                <h4>Background Music Studio</h4>\n                <p>Upload your own music file, choose study vibes, or adjust global audio for all visitors.</p>\n                <button type=\"button\" class=\"cmd-exec-btn\" id=\"cmd-btn-open-music-studio\" style=\"background: #1d4ed8; border-color: #3b82f6; color: #fff;\">Open Music Studio</button>\n              </div>\n\n              <div class=\"admin-cmd-card\">\n                <div class=\"cmd-icon-box\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><polygon points=\"7.5 3.5 4 6 1.5 6 1.5 10 4 10 7.5 12.5\"/><path d=\"M10.5 5.5a3.5 3.5 0 0 1 0 5M12.5 3.5a6.5 6.5 0 0 1 0 9\"/></svg></div>\n                <h4>Toggle Sound Effects</h4>\n                <p>Enable or disable synthesized Web Audio ASMR click and swoosh sound effects.</p>\n                <button type=\"button\" class=\"cmd-exec-btn\" id=\"cmd-btn-toggle-sound\">Toggle Audio</button>\n              </div>\n\n              <div class=\"admin-cmd-card\">\n                <div class=\"cmd-icon-box\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M12.5 14H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7.5l3 3v8a1 1 0 0 1-1 1z\"/><polyline points=\"11 14 11 8.8 5 8.8 5 14\"/><polyline points=\"5 2 5 5.2 10 5.2\"/></svg></div>\n                <h4>Export Database (JSON)</h4>\n                <p>Backup all skience units, properties, and custom notes to a downloadable JSON file.</p>\n                <button type=\"button\" class=\"cmd-exec-btn\" id=\"cmd-btn-export-json\">Export JSON</button>\n              </div>\n\n              <div class=\"admin-cmd-card\">\n                <div class=\"cmd-icon-box\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M14 10v2.8a1.2 1.2 0 0 1-1.2 1.2H3.2A1.2 1.2 0 0 1 2 12.8V10\"/><polyline points=\"4.8 6.8 8 10 11.2 6.8\"/><line x1=\"8\" y1=\"10\" x2=\"8\" y2=\"2\"/></svg></div>\n                <h4>Import Database (JSON)</h4>\n                <p>Restore or merge skience units and notes from a JSON backup file.</p>\n                <button type=\"button\" class=\"cmd-exec-btn\" id=\"cmd-btn-import-json\">Import JSON</button>\n                <input type=\"file\" id=\"admin-file-import\" accept=\".json\" class=\"hidden\" />\n              </div>\n\n              <div class=\"admin-cmd-card danger\">\n                <div class=\"cmd-icon-box\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><polyline points=\"2 4 14 4\"/><path d=\"M12.5 4v9.2a1.2 1.2 0 0 1-1.2 1.2H4.7a1.2 1.2 0 0 1-1.2-1.2V4m2.2 0V2.6A1.2 1.2 0 0 1 6.9 1.5h2.2a1.2 1.2 0 0 1 1.2 1.2V4\"/></svg></div>\n                <h4>Clear All Notes</h4>\n                <p>Cleans out all stored notes so your skience notebook is completely fresh.</p>\n                <button type=\"button\" class=\"cmd-exec-btn danger\" id=\"cmd-btn-clear-custom\">Clear All</button>\n              </div>\n            </div>\n          </div>\n\n          <!-- PANEL 3: DATABASE MANAGER -->\n          <div id=\"panel-admin-manager\" class=\"admin-panel hidden\">\n            <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;\">\n              <h4 style=\"color: #fff; margin: 0;\">Stored Units in Database</h4>\n              <button class=\"vault-publish-btn\" id=\"btn-manager-publish\" style=\"font-size: 0.8rem; padding: 7px 16px;\">\n                <span><svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M3 11c-1 1-1.3 3.3-1.3 3.3s2.3-.3 3.3-1.3m3-2.5L6 8.5A14 14 0 0 1 14.5 1.5c0 2.2-.8 5.2-4 7.5z\"/></svg> Publish All Notes to Cloud</span>\n              </button>\n            </div>\n            <div class=\"manager-table-wrapper\">\n              <table class=\"admin-data-table\">\n                <thead>\n                  <tr>\n                    <th>Title</th>\n                    <th>Branch</th>\n                    <th>Concept Squares</th>\n                    <th>Origin</th>\n                    <th>Actions</th>\n                  </tr>\n                </thead>\n                <tbody id=\"admin-manager-tbody\">\n                  <!-- Dynamically populated rows -->\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n          <!-- PANEL 4: SITE STATS -->\n          <div id=\"panel-admin-telemetry\" class=\"admin-panel hidden\">\n            <div class=\"telemetry-grid\">\n              <div class=\"telem-stat-card\">\n                <span class=\"telem-label\">TOTAL SKIENCE UNITS</span>\n                <span class=\"telem-val\" id=\"telem-topics-count\">0</span>\n              </div>\n              <div class=\"telem-stat-card\">\n                <span class=\"telem-label\">TOTAL CONCEPT SQUARES</span>\n                <span class=\"telem-val\" id=\"telem-squares-count\">0</span>\n              </div>\n              <div class=\"telem-stat-card\">\n                <span class=\"telem-label\">CLOUD DB STATUS</span>\n                <span class=\"telem-val\" style=\"color: #60a5fa; font-size: 1.1rem;\">CONNECTED (NO COST)</span>\n              </div>\n              <div class=\"telem-stat-card\">\n                <span class=\"telem-label\">AUTHENTICATED SUPERUSER</span>\n                <span class=\"telem-val\" style=\"color: var(--accent-cyan);\">Jeeva R.</span>\n              </div>\n              <div class=\"telem-stat-card\">\n                <span class=\"telem-label\">SECURITY PROTOCOL</span>\n                <span class=\"telem-val\" style=\"color: #93c5fd;\">SHA-256 ENCRYPTED</span>\n              </div>\n              <div class=\"telem-stat-card\">\n                <span class=\"telem-label\">ASMR AUDIO ENGINE</span>\n                <span class=\"telem-val\" style=\"color: var(--accent-purple);\">ACTIVE</span>\n              </div>\n            </div>\n          </div>\n\n          <!-- PANEL 5: BACKGROUND MUSIC STUDIO -->\n          <div id=\"panel-admin-music\" class=\"admin-panel hidden\">\n            <div class=\"music-studio-container\">\n              <!-- Active Playing Track Glass Card -->\n              <div class=\"music-active-track-card\">\n                <div class=\"music-active-track-header\">\n                  <div class=\"music-track-meta\">\n                    <span class=\"music-badge\" id=\"admin-music-badge\">ACTIVE BACKGROUND MUSIC</span>\n                    <h3 id=\"admin-music-track-title\">Am I Wrong</h3>\n                    <p id=\"admin-music-source-desc\">Playing in background for all visitors during science study sessions</p>\n                  </div>\n                  <div class=\"music-status-indicator active\" id=\"admin-music-status-indicator\">\n                    <span class=\"status-pulse-dot\"></span>\n                    <span id=\"admin-music-status-text\">Playing</span>\n                  </div>\n                </div>\n\n                <!-- Animated Liquid Glass Waveform Visualizer -->\n                <div class=\"music-waveform-bars\" id=\"music-waveform-bars\">\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                  <span class=\"music-bar\"></span>\n                </div>\n\n                <!-- Live Scrub Bar & Times -->\n                <div class=\"music-progress-wrapper\">\n                  <span class=\"music-time\" id=\"admin-music-curr-time\">0:00</span>\n                  <input type=\"range\" class=\"music-scrubber\" id=\"admin-music-scrubber\" min=\"0\" max=\"100\" value=\"0\" />\n                  <span class=\"music-time\" id=\"admin-music-total-time\">4:07</span>\n                </div>\n\n                <!-- Studio Controls Bar -->\n                <div class=\"music-controls-row\">\n                  <div class=\"music-playback-btns\">\n                    <button type=\"button\" class=\"btn-music-ctrl primary\" id=\"btn-admin-music-playpause\" title=\"Play or Pause\">\n                      <span id=\"admin-playpause-icon\"><svg viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"currentColor\"><rect x=\"3\" y=\"2.5\" width=\"3.5\" height=\"11\" rx=\"1\"/><rect x=\"9.5\" y=\"2.5\" width=\"3.5\" height=\"11\" rx=\"1\"/></svg></span>\n                      <span id=\"admin-playpause-text\">Pause Music</span>\n                    </button>\n                    <button type=\"button\" class=\"btn-music-ctrl secondary\" id=\"btn-admin-music-restart\" title=\"Restart from Beginning\">\n                      <svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"currentColor\"><rect x=\"3\" y=\"4\" width=\"2\" height=\"8\"/><polygon points=\"6.5 8 13 4 13 12\"/></svg> Restart Track\n                    </button>\n                  </div>\n\n                  <div class=\"music-volume-control\">\n                    <span><svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><polygon points=\"7.5 3.5 4 6 1.5 6 1.5 10 4 10 7.5 12.5\"/><path d=\"M10.5 5.5a3.5 3.5 0 0 1 0 5M12.5 3.5a6.5 6.5 0 0 1 0 9\"/></svg> Volume</span>\n                    <input type=\"range\" id=\"admin-music-volume-slider\" min=\"0\" max=\"100\" value=\"40\" />\n                    <span id=\"admin-music-volume-val\">40%</span>\n                  </div>\n                </div>\n              </div>\n\n              <!-- Upload Custom Audio Zone -->\n              <div class=\"music-upload-section\">\n                <div class=\"music-section-heading\">\n                  <h4><svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M14 10v2.8a1.2 1.2 0 0 1-1.2 1.2H3.2A1.2 1.2 0 0 1 2 12.8V10\"/><polyline points=\"11.2 5.2 8 2 4.8 5.2\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"10\"/></svg> Upload Custom Background Music</h4>\n                  <p>Upload your own MP3, WAV, OGG, or M4A file here. It will immediately play for anyone visiting the website, and can be stopped anytime by clicking the sound button next to the printer icon.</p>\n                </div>\n\n                <div class=\"music-dropzone\" id=\"admin-music-dropzone\">\n                  <input type=\"file\" id=\"admin-music-file-input\" accept=\"audio/*\" class=\"hidden\" />\n                  <div class=\"dropzone-content\">\n                    <div class=\"dropzone-icon\"><svg viewBox=\"0 0 16 16\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M6 12V3.5l8-1.5v8.5\"/><circle cx=\"4\" cy=\"12\" r=\"2\"/><circle cx=\"12\" cy=\"10.5\" r=\"2\"/></svg></div>\n                    <h5>Choose an audio file or drag &amp; drop here</h5>\n                    <p class=\"dropzone-hint\">Supports MP3, WAV, OGG, M4A, AAC • Audio is stored and played in background for all students</p>\n                    <button type=\"button\" class=\"btn-modal-action secondary\" id=\"btn-browse-music-file\" style=\"margin-top: 10px;\">\n                      <svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M14.5 12.5a1.2 1.2 0 0 1-1.2 1.2H2.7a1.2 1.2 0 0 1-1.2-1.2V3.2A1.2 1.2 0 0 1 2.7 2h3.3l1.3 2h6a1.2 1.2 0 0 1 1.2 1.2z\"/></svg> Select Music File From Computer\n                    </button>\n                    <div id=\"selected-audio-file-info\" class=\"selected-file-pill hidden\">\n                      <span class=\"pill-icon\"><svg viewBox=\"0 0 16 16\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M6 12V3.5l8-1.5v8.5\"/><circle cx=\"4\" cy=\"12\" r=\"2\"/><circle cx=\"12\" cy=\"10.5\" r=\"2\"/></svg></span>\n                      <span id=\"selected-audio-name\">my-music.mp3</span>\n                      <span id=\"selected-audio-size\" class=\"pill-size\">(5.2 MB)</span>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"music-upload-actions\">\n                  <button type=\"button\" class=\"btn-modal-action primary\" id=\"btn-save-uploaded-music\" disabled>\n                    <span><svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M3 11c-1 1-1.3 3.3-1.3 3.3s2.3-.3 3.3-1.3m3-2.5L6 8.5A14 14 0 0 1 14.5 1.5c0 2.2-.8 5.2-4 7.5z\"/></svg> Apply &amp; Set as Website Background Music</span>\n                  </button>\n                  <button type=\"button\" class=\"btn-modal-action secondary\" id=\"btn-reset-default-music\" title=\"Restore original Am I Wrong\">\n                    <span><svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><polyline points=\"1.5 2.5 1.5 6.5 5.5 6.5\"/><path d=\"M2.5 10a5.8 5.8 0 1 0 1.4-6L1.5 6.5\"/></svg> Reset to Default Anthem (Am I Wrong)</span>\n                  </button>\n                </div>\n              </div>\n\n              <!-- Study Vibes Library & Cloud Audio Stream -->\n              <div class=\"music-presets-section\">\n                <div class=\"music-section-heading\">\n                  <h4><svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M2 12V8a6 6 0 0 1 12 0v4\"/><rect x=\"1.5\" y=\"10\" width=\"3\" height=\"4.5\" rx=\"1\"/><rect x=\"11.5\" y=\"10\" width=\"3\" height=\"4.5\" rx=\"1\"/></svg> Curated Study Music Vibes &amp; Cloud Audio URL</h4>\n                  <p>Switch between study anthems or paste any direct streaming audio link.</p>\n                </div>\n\n                <div class=\"music-presets-grid\">\n                  <div class=\"music-preset-card active\" data-preset=\"anthem\">\n                    <div class=\"preset-badge\">Default Study Anthem</div>\n                    <div class=\"preset-icon\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"currentColor\"><polygon points=\"8 1.5 10 6 14.5 8 10 10 8 14.5 6 10 1.5 8 6 6\"/></svg></div>\n                    <div class=\"preset-info\">\n                      <h5>Am I Wrong</h5>\n                      <span>Official Study Anthem (High Energy)</span>\n                    </div>\n                    <button type=\"button\" class=\"btn-preset-select\" data-track=\"anthem\">Select Track</button>\n                  </div>\n\n                  <div class=\"music-preset-card\" data-preset=\"lofi\">\n                    <div class=\"preset-icon\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M12 5.5h.7a2.5 2.5 0 0 1 0 5H12M1.5 5.5H12v6a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.5-2.5zM4.2 1.5v1.8M6.8 1.5v1.8M9.5 1.5v1.8\"/></svg></div>\n                    <div class=\"preset-info\">\n                      <h5>Lofi Chill Study Beats</h5>\n                      <span>Relaxed, smooth, continuous study rhythm</span>\n                    </div>\n                    <button type=\"button\" class=\"btn-preset-select\" data-track=\"lofi\">Select Track</button>\n                  </div>\n\n                  <div class=\"music-preset-card\" data-preset=\"cosmic\">\n                    <div class=\"preset-icon\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><circle cx=\"8\" cy=\"8\" r=\"6.5\"/><ellipse cx=\"8\" cy=\"8\" rx=\"2.8\" ry=\"6.5\"/><line x1=\"1.5\" y1=\"8\" x2=\"14.5\" y2=\"8\"/></svg></div>\n                    <div class=\"preset-info\">\n                      <h5>Cosmic Focus Space Drone</h5>\n                      <span>Steady ambient audio for focused reading</span>\n                    </div>\n                    <button type=\"button\" class=\"btn-preset-select\" data-track=\"cosmic\">Select Track</button>\n                  </div>\n\n                  <div class=\"music-preset-card\" data-preset=\"synthwave\">\n                    <div class=\"preset-icon\"><svg viewBox=\"0 0 16 16\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M9 1L2 9h5l-1 6 8-8H9z\"/></svg></div>\n                    <div class=\"preset-info\">\n                      <h5>Upbeat Study Mix</h5>\n                      <span>Fast tempo track for review sessions</span>\n                    </div>\n                    <button type=\"button\" class=\"btn-preset-select\" data-track=\"synthwave\">Select Track</button>\n                  </div>\n                </div>\n\n                <div class=\"music-url-direct-row\">\n                  <label for=\"admin-music-direct-url\">Direct Audio Stream / Cloud MP3 URL:</label>\n                  <div style=\"display: flex; gap: 8px; margin-top: 6px;\">\n                    <input type=\"url\" id=\"admin-music-direct-url\" placeholder=\"https://cdn.example.com/audio/study-track.mp3\" style=\"flex: 1; font-size: 0.85rem; padding: 8px 12px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; color: #fff;\" />\n                    <button type=\"button\" class=\"btn-modal-action secondary\" id=\"btn-apply-music-url\" style=\"white-space: nowrap; font-size: 0.85rem; padding: 8px 16px;\">\n                      Apply URL Globally\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- PANEL 6: STUDENT FEEDBACK & REVIEWS FOR JEEVA -->\n          <div id=\"panel-admin-feedback\" class=\"admin-panel hidden\">\n            <div class=\"architect-intro-card\" style=\"border-color: rgba(56, 189, 248, 0.45);\">\n              <div class=\"architect-intro-text\">\n                <h3 style=\"color: #38bdf8; font-size: 1.25rem;\"><svg class=\"ui-icon\" viewBox=\"0 0 16 16\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><rect x=\"1.5\" y=\"3\" width=\"13\" height=\"10\" rx=\"1.2\"/><polyline points=\"14.5 4.2 8 8.8 1.5 4.2\"/></svg> Student Reviews &amp; Community Ideas</h3>\n                <p>All feedback, topic ideas, and feature requests submitted by students from the \"Help Us Improve\" modal. Stored in real-time in Supabase cloud database.</p>\n              </div>\n              <div class=\"architect-quick-templates\">\n                <button type=\"button\" class=\"btn-template-pill\" id=\"btn-refresh-feedback\" style=\"border-color: #38bdf8; color: #38bdf8;\">↻ Refresh Feedbacks</button>\n              </div>\n            </div>\n            <div id=\"admin-feedback-list\" class=\"admin-feedback-list-container\">\n              <div class=\"feedback-empty-state\">Loading messages for Jeeva...</div>\n            </div>\n          </div>\n        </div>\n      ";
  }

  ensureAdminViewMounted() {
    if (this._adminMounted) return;
    const container = document.getElementById("vault-admin-view");
    if (!container) return;
    container.innerHTML = this.getAdminViewHTML();
    this._adminMounted = true;
    document.getElementById("vault-admin-close")?.addEventListener("click", () => this.close());
    document.getElementById("btn-vault-relock")?.addEventListener("click", () => this.relock());
    document.getElementById("btn-refresh-feedback")?.addEventListener("click", () => {
      sounds.playClick();
      this.loadFeedback();
    });
    this.setupAdminTabs();
    this.setupArchitectForm();
    this.setupAdminCommands();
    if (typeof bgMusic !== "undefined") {
      bgMusic.bindAdminVaultUI();
      bgMusic.updateUI();
    }
    document.getElementById("btn-vault-publish-cloud")?.addEventListener("click", () => {
      sounds.playClick();
      this.app?.publishAllNotes();
    });
    document.getElementById("btn-manager-publish")?.addEventListener("click", () => {
      sounds.playClick();
      this.app?.publishAllNotes();
    });
    this.app?.updatePublishBadge?.();
  }

  setupKeypad() {
    const keypadBtns = document.querySelectorAll(".keypad-btn");
    keypadBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.key;
        sounds.playKeypadTap();

        if (key === "clear") {
          this.currentPin = "";
        } else if (key === "back") {
          this.currentPin = this.currentPin.slice(0, -1);
        } else if (this.currentPin.length < 7) {
          this.currentPin += key;
        }

        this.updatePinDisplay();

        if (this.currentPin.length === 7) {
          this.verifyPin();
        }
      });
    });

    window.addEventListener("keydown", (e) => {
      const vaultModal = document.getElementById("vault-modal");
      if (!vaultModal || vaultModal.classList.contains("hidden")) return;
      if (this.isUnlocked) return;

      if (e.key >= "0" && e.key <= "9") {
        if (this.currentPin.length < 7) {
          sounds.playKeypadTap();
          this.currentPin += e.key;
          this.updatePinDisplay();
          if (this.currentPin.length === 7) {
            this.verifyPin();
          }
        }
      } else if (e.key === "Backspace") {
        sounds.playKeypadTap();
        this.currentPin = this.currentPin.slice(0, -1);
        this.updatePinDisplay();
      } else if (e.key === "Escape") {
        this.close();
      }
    });
  }

  updatePinDisplay() {
    const slots = document.querySelectorAll(".pin-slot");
    slots.forEach((slot, idx) => {
      slot.classList.toggle("filled", idx < this.currentPin.length);
    });

    const feedback = document.getElementById("vault-pin-feedback");
    if (feedback) {
      if (this.currentPin.length === 0) {
        feedback.textContent = "ENTER 7-DIGIT CODE";
        feedback.className = "vault-pin-feedback";
      } else {
        feedback.textContent = `AUTHENTICATING [${this.currentPin.length}/7]`;
        feedback.className = "vault-pin-feedback checking";
      }
    }
  }

  verifyPin() {
    const safeDoor = document.getElementById("vault-safe-door");
    const pinDisplay = document.getElementById("vault-pin-display");
    const feedback = document.getElementById("vault-pin-feedback");

    if (this.currentPin === this.code) {
      this.unlockVault();
    } else {
      if (safeDoor) safeDoor.classList.add("shake-error");
      if (pinDisplay) pinDisplay.classList.add("shake");
      if (feedback) {
        feedback.textContent = "ACCESS DENIED • INVALID PASSCODE";
        feedback.className = "vault-pin-feedback error";
      }
      sounds.playVaultError();

      setTimeout(() => {
        if (safeDoor) safeDoor.classList.remove("shake-error");
        if (pinDisplay) pinDisplay.classList.remove("shake");
        this.currentPin = "";
        this.updatePinDisplay();
      }, 750);
    }
  }

  unlockVault() {
    const safeDoor = document.getElementById("vault-safe-door");
    const feedback = document.getElementById("vault-pin-feedback");

    this.isUnlocked = true;
    if (feedback) {
      feedback.textContent = "ACCESS GRANTED • CLEARANCE LEVEL 5";
      feedback.className = "vault-pin-feedback success";
    }

    const lockIcon = document.getElementById("vault-lock-status-icon");
    if (lockIcon) {
      lockIcon.innerHTML = `<rect x="2" y="7" width="12" height="7.5" rx="1.4"/><path d="M4.8 7V4.6a3.2 3.2 0 0 1 6.2-.8"/><circle cx="8" cy="10.8" r="1"/>`;
    }

    // Dynamic Island Alert for Passcode unlock
    if (this.app?.dynamicIsland?.trigger) {
      this.app.dynamicIsland.trigger({
        icon: "unlock",
        title: "Passcode Authenticated",
        subtitle: "Vault Unlocked",
        badge: "VERIFIED",
        actionText: "VAULT",
        duration: 3500
      });
    }

    if (safeDoor) safeDoor.classList.add("unlocking");
    sounds.playVaultUnlock();
    this.app.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 80);

    setTimeout(() => {
      this.ensureAdminViewMounted();
      document.getElementById("vault-lock-view")?.classList.add("hidden");
      document.getElementById("vault-admin-view")?.classList.remove("hidden");
      if (safeDoor) safeDoor.classList.remove("unlocking");
      if (lockIcon) {
        lockIcon.innerHTML = `<rect x="2" y="7" width="12" height="7.5" rx="1.4"/><path d="M4.8 7V4.6a3.2 3.2 0 0 1 6.4 0V7"/><circle cx="8" cy="10.8" r="1"/>`;
      }

      this.currentPin = "";
      this.updatePinDisplay();
      this.updateManagerTable();
      this.updateTelemetry();
      this.loadFeedback();
      this.switchTab("architect");
    }, 1250);
  }

  setupVaultTriggers() {
    document.getElementById("vault-lock-close")?.addEventListener("click", () => this.close());
  }

  requestCreateNote() {
    if (this.isUnlocked) {
      this.ensureAdminViewMounted();
      this.open();
      this.switchTab("architect");
      const titleInput = document.getElementById("vnote-title");
      if (titleInput) {
        titleInput.focus();
        titleInput.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  open(mode = "normal") {
    const modal = document.getElementById("vault-modal");
    if (!modal) return;
    modal.classList.remove("hidden");

    const warn = document.getElementById("vault-redirect-warning");
    if (mode === "redirect") {
      if (warn) warn.classList.remove("hidden");
      sounds.playVaultRedirect();
    } else {
      if (warn) warn.classList.add("hidden");
      sounds.playClick();
    }

    if (this.isUnlocked) {
      this.ensureAdminViewMounted();
      document.getElementById("vault-lock-view")?.classList.add("hidden");
      document.getElementById("vault-admin-view")?.classList.remove("hidden");
      this.updateManagerTable();
      this.updateTelemetry();
    } else {
      document.getElementById("vault-lock-view")?.classList.remove("hidden");
      document.getElementById("vault-admin-view")?.classList.add("hidden");
      this.currentPin = "";
      this.updatePinDisplay();
    }
  }

  close() {
    this.isUnlocked = false;
    this.chatbotAuthorized = false;
    document.getElementById("vault-modal")?.classList.add("hidden");
    this.currentPin = "";
    this.updatePinDisplay();
    // Ensure Study Lookup toggle is visible
    const bubble = document.getElementById("study-lookup-toggle");
    if (bubble) {
      bubble.style.display = "flex";
      bubble.style.transform = "scale(1) rotate(0deg)";
    }
  }

  relock() {
    this.isUnlocked = false;
    this.chatbotAuthorized = false;
    this.currentPin = "";
    document.getElementById("vault-admin-view")?.classList.add("hidden");
    document.getElementById("vault-lock-view")?.classList.remove("hidden");
    this.updatePinDisplay();
    // Ensure Study Lookup toggle is visible
    const bubble = document.getElementById("study-lookup-toggle");
    if (bubble) {
      bubble.style.display = "flex";
      bubble.style.transform = "scale(1) rotate(0deg)";
    }
    sounds.playClick();
    alert("Vault session ended. Security lock re-engaged.");
  }

  setupAdminTabs() {
    const tabBtns = document.querySelectorAll(".admin-tab-btn");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        sounds.playClick();
        const tab = btn.dataset.tab;
        this.switchTab(tab);
      });
    });
  }

  switchTab(tabName) {
    this.activeTab = tabName;
    document.querySelectorAll(".admin-tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tabName);
    });

    document.querySelectorAll(".admin-panel").forEach((panel) => {
      panel.classList.toggle("hidden", panel.id !== `panel-admin-${tabName}`);
      panel.classList.toggle("active", panel.id === `panel-admin-${tabName}`);
    });

    if (tabName === "manager") {
      this.updateManagerTable();
    } else if (tabName === "telemetry") {
      this.updateTelemetry();
    } else if (tabName === "feedback") {
      this.loadFeedback();
    }
  }

  async loadFeedback() {
    const listContainer = document.getElementById("admin-feedback-list");
    const countBadge = document.getElementById("admin-fb-count");

    if (listContainer) {
      listContainer.innerHTML = '<div class="feedback-empty-state">Loading messages from cloud storage...</div>';
    }

    let items = [];
    // 1. Try serverless API
    try {
      const res = await fetch("/api/feedback");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.feedback)) items = data.feedback;
      }
    } catch (_) {}

    // 2. Direct Supabase fallback
    if (items.length === 0) {
      try {
        const SUPABASE_URL = "https://nidkkbsmptiyixvealum.supabase.co";
        const SUPABASE_KEY = "sb_publishable_VIbgYVwvFU2bcPJNLWg4Qg_Be4paQ_6";
        const res = await fetch(`${SUPABASE_URL}/rest/v1/science_notes?id=eq.feedback&select=notes`, {
          headers: {
            "apikey": SUPABASE_KEY,
            "Authorization": `Bearer ${SUPABASE_KEY}`
          }
        });
        if (res.ok) {
          const rows = await res.json();
          if (Array.isArray(rows) && rows[0]?.notes) items = rows[0].notes;
        }
      } catch (_) {}
    }

    // 3. Fallback to localStorage if any
    if (items.length === 0) {
      try {
        const local = JSON.parse(localStorage.getItem("skience_local_feedback") || "[]");
        if (Array.isArray(local) && local.length > 0) items = local;
      } catch (_) {}
    }

    if (countBadge) {
      countBadge.textContent = items.length;
    }

    if (!listContainer) return;

    if (items.length === 0) {
      listContainer.innerHTML = `
        <div class="feedback-empty-state">
          <div style="font-size: 1.8rem; margin-bottom: 8px;">${UI_SVG.mail}</div>
          <strong>No student feedback or ideas received yet.</strong><br>
          <span style="font-size: 0.85rem; opacity: 0.7;">When students submit suggestions via "Help Us Improve", they will appear here instantly!</span>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = items.map((item) => {
      const name = item.name || item["Student Name"] || "Anonymous Scholar";
      const email = item.email || item["Student Email"] || "";
      const msg = item.message || item["Review / Idea"] || "";
      const dateStr = item.createdAt ? new Date(item.createdAt).toLocaleString() : "Recently submitted";

      return `
        <div class="admin-fb-item-card">
          <div class="admin-fb-header">
            <div class="admin-fb-author-row">
              <span class="admin-fb-author">${name}</span>
              ${email && email.includes("@") ? `<a href="mailto:${email}?subject=Regarding%20your%20skience.io%20feedback" class="admin-fb-email-badge">${UI_SVG.mail} ${email}</a>` : `<span style="font-size: 0.78rem; opacity: 0.6;">(No email provided)</span>`}
            </div>
            <span class="admin-fb-date">${dateStr}</span>
          </div>
          <div class="admin-fb-message">${(msg || "").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
          <div class="admin-fb-actions-row">
            ${email && email.includes("@") ? `<a href="mailto:${email}?subject=Thank%20you%20for%20your%20skience.io%20feedback!" class="admin-fb-reply-btn">Reply via Email ${UI_SVG.mail}</a>` : ""}
          </div>
        </div>
      `;
    }).join("");
  }

// NOTE ARCHITECT LOGIC
  setupArchitectForm() {
    const form = document.getElementById("vault-note-form");
    if (!form) return;

    // Attach smart bullet auto-continuation to top-level fields
    const titleInp = document.getElementById("vnote-title");
    const formulaInp = document.getElementById("vnote-formula");
    const descInp = document.getElementById("vnote-desc");

    if (titleInp) enableSmartBulletInput(titleInp);
    if (formulaInp) enableSmartBulletInput(formulaInp);
    if (descInp) enableSmartBulletInput(descInp);

    // Wire top-level field bullet buttons (+ • Bullet)
    document.querySelectorAll(".btn-field-bullet[data-for]").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-for");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          insertBulletAtCursor(targetEl);
          sounds.playClick();
        }
      });
    });

    // Wire universal bullet template button
    document.getElementById("btn-architect-insert-bullet")?.addEventListener("click", () => {
      const active = document.activeElement;
      if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA")) {
        insertBulletAtCursor(active);
      } else {
        if (descInp) insertBulletAtCursor(descInp);
      }
      sounds.playClick();
    });

    document.getElementById("btn-add-square")?.addEventListener("click", () => this.addBlankSquare());
    document.getElementById("btn-add-square-bottom")?.addEventListener("click", () => this.addBlankSquare());

    document.getElementById("btn-template-science-props")?.addEventListener("click", () => this.loadTemplate("method"));
    document.getElementById("btn-template-steps")?.addEventListener("click", () => this.loadTemplate("structure"));

    document.getElementById("btn-clear-architect")?.addEventListener("click", () => {
      if (confirm("Clear all fields in Note Architect?")) {
        form.reset();
        this.architectSquares = [];
        this.editingNoteId = null;
        this.renderSquares();
        const saveBtn = document.getElementById("btn-save-vault-note");
        if (saveBtn) {
          saveBtn.innerHTML = "<span>Publish to Website & Cloud</span>";
          saveBtn.style.background = "";
        }
      }
    });

    form.addEventListener("submit", (e) => this.handleSaveNote(e));
  }

  addBlankSquare(data = null) {
    const sqIndex = this.architectSquares.length + 1;
    const defaultData = data || {
      name: `Concept Square #${sqIndex}`,
      formula: "Observation / Principle",
      explanation: "Explain this scientific concept clearly for 5th graders...",
      example: "Real-world experiment or demonstration...",
      trick: "Lab Memory Tip",
      image: ""
    };
    if (data && data.image) {
      defaultData.image = data.image;
    } else if (!defaultData.image) {
      defaultData.image = "";
    }

    this.architectSquares.push(defaultData);
    sounds.playClick();
    this.renderSquares();

    setTimeout(() => {
      const container = document.getElementById("vault-squares-list");
      if (container && container.lastElementChild) {
        container.lastElementChild.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 50);
  }

  removeSquare(index) {
    this.architectSquares.splice(index, 1);
    sounds.playClick();
    this.renderSquares();
  }

  renderSquares() {
    const list = document.getElementById("vault-squares-list");
    const countBadge = document.getElementById("squares-count-badge");
    if (!list) return;

    // Snapshot existing square inputs before re-rendering so typed text is never lost
    const existingCards = document.querySelectorAll("#vault-squares-list .architect-square-card");
    if (existingCards.length > 0) {
      existingCards.forEach((c) => {
        const cIdx = parseInt(c.dataset.index, 10);
        if (this.architectSquares[cIdx]) {
          const nameVal = c.querySelector(".sq-input-name")?.value;
          const formVal = c.querySelector(".sq-input-formula")?.value;
          const explVal = c.querySelector(".sq-input-explanation")?.value;
          const exVal = c.querySelector(".sq-input-example")?.value;
          const trkVal = c.querySelector(".sq-input-trick")?.value;
          if (nameVal !== undefined) this.architectSquares[cIdx].name = nameVal;
          if (formVal !== undefined) this.architectSquares[cIdx].formula = formVal;
          if (explVal !== undefined) this.architectSquares[cIdx].explanation = explVal;
          if (exVal !== undefined) this.architectSquares[cIdx].example = exVal;
          if (trkVal !== undefined) this.architectSquares[cIdx].trick = trkVal;
        }
      });
    }

    list.innerHTML = "";
    if (countBadge) {
      countBadge.textContent = `${this.architectSquares.length} Square${this.architectSquares.length === 1 ? "" : "s"} Configured`;
    }

    if (this.architectSquares.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; padding: 24px; color: var(--text-muted); border: 2px dashed rgba(255,255,255,0.1); border-radius: 14px;">
          <p style="margin-bottom: 10px;">No concept squares added yet.</p>
          <button type="button" class="btn-add-square" id="btn-add-first-sq">+ Add First Concept Square</button>
        </div>
      `;
      document.getElementById("btn-add-first-sq")?.addEventListener("click", () => this.addBlankSquare());
      return;
    }

    this.architectSquares.forEach((sq, idx) => {
      const card = document.createElement("div");
      card.className = "architect-square-card";
      card.dataset.index = idx;

      card.innerHTML = `
        <div class="sq-card-top-bar">
          <div class="sq-pill-badge">
            <span class="sq-drag-handle">:::</span>
            <span>CONCEPT SQUARE #${idx + 1}</span>
          </div>
          <button type="button" class="sq-remove-btn" data-index="${idx}" title="Remove this square">&times;</button>
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <div class="field-label-row">
              <label>Square Title / Principle <span class="req">*</span></label>
              <button type="button" class="btn-field-bullet sq-bullet-btn" data-field="name" title="Insert a bullet point at cursor">+ • Bullet</button>
            </div>
            <input type="text" class="sq-input-name" value="${sq.name || ""}" placeholder="e.g. Solid: Definite Shape & Volume" />
          </div>
          <div class="form-group">
            <div class="field-label-row">
              <label>Scientific Formula / Rule</label>
              <button type="button" class="btn-field-bullet sq-bullet-btn" data-field="formula" title="Insert a bullet point at cursor">+ • Bullet</button>
            </div>
            <input type="text" class="sq-input-formula" value="${sq.formula || ""}" placeholder="e.g. Molecular motion: Tightly packed vibration" />
          </div>
        </div>

        <div class="form-group">
          <div class="field-label-row">
            <label>Scientific Explanation <span class="req">*</span></label>
            <button type="button" class="btn-field-bullet sq-bullet-btn" data-field="explanation" title="Insert a bullet point at cursor">+ • Bullet</button>
          </div>
          <textarea class="sq-input-explanation" rows="2" placeholder="Describe the mechanism, behavior, or core science idea...">${sq.explanation || ""}</textarea>
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <div class="field-label-row">
              <label>Real-World Example / Experiment</label>
              <button type="button" class="btn-field-bullet sq-bullet-btn" data-field="example" title="Insert a bullet point at cursor">+ • Bullet</button>
            </div>
            <input type="text" class="sq-input-example" value="${sq.example || ""}" placeholder="e.g. Ice cube in a glass holding its geometric shape" />
          </div>
          <div class="form-group">
            <div class="field-label-row">
              <label>Lab Tip / Memory Trick</label>
              <button type="button" class="btn-field-bullet sq-bullet-btn" data-field="trick" title="Insert a bullet point at cursor">+ • Bullet</button>
            </div>
            <input type="text" class="sq-input-trick" value="${sq.trick || ""}" placeholder="e.g. Solids hold their ground; liquids flow around!" />
          </div>
        </div>

        <!-- Concept Picture Device Import -->
        <div class="sq-image-group">
          <div class="field-label-row">
            <label>Concept Picture / Diagram <span class="sq-img-hint">(Import picture from your computer/device)</span></label>
            ${sq.image ? `<span class="sq-image-attached-badge">Picture Attached</span>` : ""}
          </div>
          <div class="sq-image-uploader-box ${sq.image ? "has-image" : "empty"}">
            <input type="file" class="sq-image-file-input" accept="image/*" style="display: none;" />
            ${sq.image ? `
              <div class="sq-image-preview-wrap">
                <div class="sq-image-preview-thumb">
                  <img src="${sq.image}" alt="Concept picture preview" />
                </div>
                <div class="sq-image-preview-info">
                  <span class="sq-image-filename">Device Picture Loaded</span>
                  <div class="sq-image-btn-row">
                    <button type="button" class="btn-change-sq-img">Change Picture</button>
                    <button type="button" class="btn-remove-sq-img">Remove</button>
                  </div>
                </div>
              </div>
            ` : `
              <div class="sq-image-dropzone">
                <div class="sq-drop-icon">${UI_SVG.image}</div>
                <div class="sq-drop-text">
                  <strong>Click to import a picture</strong> or drag & drop image here
                </div>
                <div class="sq-drop-subtext">Supports PNG, JPG, JPEG, WebP, GIF from your computer/device</div>
                <button type="button" class="btn-choose-sq-img">Import Picture From Device</button>
              </div>
            `}
          </div>
        </div>
      `;

      card.querySelector(".sq-remove-btn")?.addEventListener("click", () => {
        this.removeSquare(idx);
      });

      const nameInp = card.querySelector(".sq-input-name");
      const formInp = card.querySelector(".sq-input-formula");
      const explInp = card.querySelector(".sq-input-explanation");
      const exInp = card.querySelector(".sq-input-example");
      const trkInp = card.querySelector(".sq-input-trick");

      nameInp?.addEventListener("input", (e) => {
        this.architectSquares[idx].name = e.target.value;
      });
      formInp?.addEventListener("input", (e) => {
        this.architectSquares[idx].formula = e.target.value;
      });
      explInp?.addEventListener("input", (e) => {
        this.architectSquares[idx].explanation = e.target.value;
      });
      exInp?.addEventListener("input", (e) => {
        this.architectSquares[idx].example = e.target.value;
      });
      trkInp?.addEventListener("input", (e) => {
        this.architectSquares[idx].trick = e.target.value;
      });

      // Enable smart bullet auto-continuation on all square inputs
      if (nameInp) enableSmartBulletInput(nameInp);
      if (formInp) enableSmartBulletInput(formInp);
      if (explInp) enableSmartBulletInput(explInp);
      if (exInp) enableSmartBulletInput(exInp);
      if (trkInp) enableSmartBulletInput(trkInp);

      // Wire bullet buttons for each field on this concept square
      card.querySelectorAll(".sq-bullet-btn").forEach((bBtn) => {
        bBtn.addEventListener("click", () => {
          const field = bBtn.dataset.field;
          const targetInp = card.querySelector(`.sq-input-${field}`);
          if (targetInp) {
            insertBulletAtCursor(targetInp);
            this.architectSquares[idx][field] = targetInp.value;
            sounds.playClick();
          }
        });
      });

      // Device Picture Import Handlers (FileReader + Canvas Optimization)
      const fileInput = card.querySelector(".sq-image-file-input");
      const dropzone = card.querySelector(".sq-image-dropzone");
      const chooseBtn = card.querySelector(".btn-choose-sq-img");
      const changeBtn = card.querySelector(".btn-change-sq-img");
      const removeBtn = card.querySelector(".btn-remove-sq-img");

      const processDeviceImage = (file) => {
        if (!file || !file.type.startsWith("image/")) {
          alert("Please select a valid image file (PNG, JPG, WebP, GIF).");
          return;
        }

        const reader = new FileReader();
        reader.onload = (re) => {
          const rawData = re.target.result;
          const img = new Image();
          img.onload = () => {
            const maxDim = 1200;
            let width = img.width;
            let height = img.height;
            if (width > maxDim || height > maxDim) {
              if (width > height) {
                height = Math.round((height * maxDim) / width);
                width = maxDim;
              } else {
                width = Math.round((width * maxDim) / height);
                height = maxDim;
              }
            }
            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            let dataUrl = canvas.toDataURL(file.type === "image/png" ? "image/png" : "image/jpeg", 0.88);
            if (file.type === "image/png" && dataUrl.length > 500000) {
              const testJpeg = canvas.toDataURL("image/jpeg", 0.86);
              if (testJpeg.length < dataUrl.length) dataUrl = testJpeg;
            }

            this.architectSquares[idx].image = dataUrl;
            if (window.sounds) window.sounds.playSuccess();
            if (typeof showToast === "function") showToast("Concept picture imported from device!");
            this.renderSquares();
          };
          img.src = rawData;
        };
        reader.readAsDataURL(file);
      };

      if (fileInput) {
        fileInput.addEventListener("change", (e) => {
          if (e.target.files && e.target.files[0]) {
            processDeviceImage(e.target.files[0]);
          }
        });
      }

      if (chooseBtn) {
        chooseBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          fileInput?.click();
        });
      }

      if (dropzone) {
        dropzone.addEventListener("click", () => fileInput?.click());
        dropzone.addEventListener("dragover", (e) => {
          e.preventDefault();
          dropzone.classList.add("dragover");
        });
        dropzone.addEventListener("dragleave", () => {
          dropzone.classList.remove("dragover");
        });
        dropzone.addEventListener("drop", (e) => {
          e.preventDefault();
          dropzone.classList.remove("dragover");
          if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
            processDeviceImage(e.dataTransfer.files[0]);
          }
        });
      }

      if (changeBtn) {
        changeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          fileInput?.click();
        });
      }

      if (removeBtn) {
        removeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.architectSquares[idx].image = "";
          if (window.sounds) window.sounds.playClick();
          this.renderSquares();
        });
      }

      list.appendChild(card);
    });
  }

  loadTemplate(type) {
    if (type === "method") {
      document.getElementById("vnote-title").value = "THE SCIENTIFIC METHOD: 5-STEP INQUIRY";
      document.getElementById("vnote-category").value = "method";
      document.getElementById("vnote-formula").value = "Question → Hypothesis → Controlled Experiment → Data → Conclusion";
      document.getElementById("vnote-desc").value = "The official process 5th grade scientists use to explore questions, test hypotheses, and discover truths about our world.";
      this.architectSquares = [
        {
          name: "Step 1: Ask a Testable Question",
          formula: "Does changing [Independent Variable] affect [Dependent Variable]?",
          explanation: "Begin with curiosity. Formulate a specific question that can be measured and tested through hands-on observation.",
          example: "Does increasing sunlight make tomato plants grow taller?",
          trick: "Tip: Make sure your question can be answered with numbers or direct measurements!"
        },
        {
          name: "Step 2: Formulate a Hypothesis",
          formula: "If... then... because...",
          explanation: "An educated prediction of what you expect to occur based on prior scientific research and reasoning.",
          example: "If a plant receives 8 hours of light, then it will grow faster because photosynthesis produces more energy.",
          trick: "Tip: A hypothesis is not just a guess // it must be testable!"
        },
        {
          name: "Step 3: Conduct a Controlled Experiment",
          formula: "Keep Controls Constant • Change 1 Variable",
          explanation: "Test only ONE independent variable at a time. Keep all controlled variables (water, soil, temperature) identical.",
          example: "3 plants receive identical soil and water, but different light exposure.",
          trick: "Memory Trick: If you change two things at once, you won't know which one caused the result!"
        },
        {
          name: "Step 4: Collect & Analyze Data",
          formula: "Quantitative Data (Numbers) + Qualitative Data (Observations)",
          explanation: "Record measurements daily using metric tools (rulers, scales, graduated cylinders) and plot into charts.",
          example: "Plant A: 14cm, Plant B: 9cm, Plant C: 4cm after 2 weeks.",
          trick: "Tip: Repeat experiments multiple times to ensure reliable results!"
        },
        {
          name: "Step 5: Draw Conclusions & Share",
          formula: "Did the evidence support or refute the hypothesis?",
          explanation: "Synthesize findings. Explain what the data proves, identify experimental errors, and communicate results to peers.",
          example: "Data supported the hypothesis: greater sunlight exposure produced 55% more stem growth.",
          trick: "Tip: In science, even an incorrect hypothesis teaches you valuable discoveries!"
        }
      ];
    } else {
      document.getElementById("vnote-title").value = "CELL STRUCTURE & SPECIALIZED FUNCTIONS";
      document.getElementById("vnote-category").value = "life";
      document.getElementById("vnote-formula").value = "Cell Theory: All living organisms are composed of one or more cells";
      document.getElementById("vnote-desc").value = "Exploring the fundamental building blocks of life: plant vs animal cell organelles and their vital jobs.";
      this.architectSquares = [
        {
          name: "Cell Membrane: The Gatekeeper",
          formula: "Selectively Permeable Barrier",
          explanation: "A flexible outer boundary that controls what enters and exits the cell (nutrients in, waste out).",
          example: "Like a security guard at school doors letting registered students inside.",
          trick: "Memory Trick: 'Membrane' means Member Access Only!"
        },
        {
          name: "Nucleus: The Command Center",
          formula: "Houses DNA & Genetic Instructions",
          explanation: "The brain of the cell containing hereditary chromosomes that guide all cellular operations and protein manufacturing.",
          example: "Like City Hall directing municipal services and public construction.",
          trick: "Memory Trick: Nucleus is the Boss of the Cell!"
        },
        {
          name: "Chloroplast: Solar Energy Converter",
          formula: "6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ + 6O₂",
          explanation: "Plant cell organelle containing green chlorophyll pigments that capture sunlight to manufacture glucose food.",
          example: "Green leaves acting as microscopic solar panel factories.",
          trick: "Found in plant cells, NOT animal cells!"
        },
        {
          name: "Mitochondria: The Powerhouse",
          formula: "Cellular Respiration (ATP Energy)",
          explanation: "Breaks down food molecules into usable cellular energy to power all organism activity.",
          example: "Like the electric power station supplying electricity to city buildings.",
          trick: "Memory Trick: Mighty Mitochondria makes energy!"
        }
      ];
    }
    sounds.playSuccess();
    this.renderSquares();
  }

  async handleSaveNote(e) {
    if (e && e.preventDefault) e.preventDefault();
    const title = document.getElementById("vnote-title").value.trim();
    const category = document.getElementById("vnote-category").value;
    const color = document.getElementById("vnote-color").value;
    const formula = document.getElementById("vnote-formula").value.trim() || "5th Grade Scientific Principle";
    const desc = document.getElementById("vnote-desc").value.trim();
    let redirectUrl = document.getElementById("vnote-redirect")?.value.trim() || "";
    if (redirectUrl && !redirectUrl.startsWith("http://") && !redirectUrl.startsWith("https://")) {
      redirectUrl = "https://" + redirectUrl;
    }

    if (!title || !desc) {
      alert("Please fill in the unit title and description.");
      return;
    }

    if (this.architectSquares.length === 0) {
      alert("Please add at least one concept square to your science unit!");
      return;
    }

    // Synchronize current values directly from rendered square inputs to ensure latest user edits are captured
    const squareCards = document.querySelectorAll("#vault-squares-list .architect-square-card");
    if (squareCards.length > 0) {
      this.architectSquares = Array.from(squareCards).map((card, idx) => ({
        name: card.querySelector(".sq-input-name")?.value || this.architectSquares[idx]?.name || `Square #${idx + 1}`,
        formula: card.querySelector(".sq-input-formula")?.value || this.architectSquares[idx]?.formula || "",
        explanation: card.querySelector(".sq-input-explanation")?.value || this.architectSquares[idx]?.explanation || "",
        example: card.querySelector(".sq-input-example")?.value || this.architectSquares[idx]?.example || "",
        trick: card.querySelector(".sq-input-trick")?.value || this.architectSquares[idx]?.trick || "",
        image: this.architectSquares[idx]?.image || ""
      }));
    }

    const properties = this.architectSquares.map((sq, idx) => ({
      num: idx + 1,
      name: sq.name || `Square #${idx + 1}`,
      formula: sq.formula || formula,
      explanation: sq.explanation || desc,
      example: sq.example || "Demonstrated in Jeeva's notebook.",
      trick: sq.trick || "5th Grade Science Concept",
      image: sq.image || ""
    }));

    const newNote = {
      id: this.editingNoteId ? this.editingNoteId : `science-unit-${Date.now()}`,
      title: (title.includes("\n") || title.includes("•")) ? title : title.toUpperCase(),
      category: category,
      color: color,
      grade: "5th Grade",
      badge: `${properties.length} Concept Squares`,
      coreFormula: formula,
      description: desc,
      redirectUrl: redirectUrl,
      isCustom: true,
      properties: properties,
      updatedAt: new Date().toISOString()
    };

    // Generate practice quiz matching the exact same layout & rephrased questions
    newNote.quiz = this.app.generateQuizForTopic(newNote);

    if (this.editingNoteId) {
      const idx = this.app.notes.findIndex(n => n.id === this.editingNoteId);
      if (idx !== -1) {
        this.app.notes[idx] = newNote;
      }
      this.editingNoteId = null;
    } else {
      this.app.notes.push(newNote);
    }

    this.app.saveNotes();
    this.app.render();
    this.updateManagerTable();
    this.updateTelemetry();

    const saveBtn = document.getElementById("btn-save-vault-note");
    if (saveBtn) {
      saveBtn.disabled = true;
      saveBtn.innerHTML = "<span>Publishing to Website & Cloud...</span>";
    }

    // Automatically publish to Cloud Database across all devices
    await this.app.publishAllNotes(true, `Unit "${newNote.title}" published live to website & cloud database!`);

    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.innerHTML = "<span>Publish to Website & Cloud</span>";
      saveBtn.style.background = "";
    }

    // Close vault and celebrate
    this.close();

    const filtered = this.app.getFilteredNotes();
    const newIdx = filtered.findIndex((n) => n.id === newNote.id);
    if (newIdx !== -1) {
      this.app.carouselIndex = newIdx;
      this.app.updateCarouselPositions();
    }
  }

  setupAdminCommands() {
    // Quick Publish
    document.getElementById("cmd-btn-quick-publish")?.addEventListener("click", () => {
      this.app.publishAllNotes();
    });

    // Preset: States of Matter
    document.getElementById("cmd-btn-preset-matter")?.addEventListener("click", async () => {
      const matterNote = {
        id: `science-matter-${Date.now()}`,
        title: "STATES OF MATTER & PHASE CHANGES",
        category: "physical",
        color: "cyan",
        grade: "5th Grade",
        badge: "3 Concept Squares",
        coreFormula: "Thermal Energy Changes Matter: Solid ⇄ Liquid ⇄ Gas",
        description: "How heating and cooling changes solids, liquids, and gases.",
        isCustom: true,
        properties: [
          {
            num: 1,
            name: "Solid State: Tightly Packed",
            formula: "Definite Shape & Definite Volume",
            explanation: "Particles vibrate in fixed lattice positions. They have the least thermal energy and cannot be easily compressed.",
            example: "Ice cubes, quartz crystals, iron bars.",
            trick: "Memory Trick: Solids are solid as a rock!"
          },
          {
            num: 2,
            name: "Liquid State: Flowing & Conforming",
            formula: "Definite Volume & Indefinite Shape",
            explanation: "Particles slide past one another smoothly. Liquids take the shape of whatever container holds them.",
            example: "Liquid water, juice, vegetable oil.",
            trick: "Memory Trick: Liquids flow to the bottom!"
          },
          {
            num: 3,
            name: "Gas State: Rapid Expansion",
            formula: "Indefinite Shape & Indefinite Volume",
            explanation: "Particles move rapidly in all directions with high kinetic energy, filling the entire volume of any closed container.",
            example: "Water vapor steam, oxygen, nitrogen in our air.",
            trick: "Memory Trick: Gas spreads fast everywhere!"
          }
        ]
      };
      matterNote.quiz = this.app.generateQuizForTopic(matterNote);
      this.app.notes.push(matterNote);
      this.app.saveNotes();
      this.app.render();
      sounds.playSuccess();
      this.app.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 60);
      this.updateManagerTable();
      this.updateTelemetry();
      await this.app.publishAllNotes(true);
    });

    // Preset: Photosynthesis
    document.getElementById("cmd-btn-preset-photo")?.addEventListener("click", async () => {
      const photoNote = {
        id: `science-photo-${Date.now()}`,
        title: "PHOTOSYNTHESIS & ECOSYSTEM ENERGY",
        category: "life",
        color: "emerald",
        grade: "5th Grade",
        badge: "3 Concept Squares",
        coreFormula: "6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ (Sugar) + 6O₂ (Oxygen)",
        description: "How green plants use sunlight, water, and CO2 to make sugar and oxygen.",
        isCustom: true,
        properties: [
          {
            num: 1,
            name: "Chlorophyll & Solar Capture",
            formula: "Solar Energy Captured in Chloroplasts",
            explanation: "Green pigments inside plant cells absorb sunlight energy, driving the synthesis of carbon and water.",
            example: "Leaves turning toward the sun on a windowsill.",
            trick: "Producers create energy for the entire food web!"
          },
          {
            num: 2,
            name: "Chemical Reactants: CO₂ + H₂O",
            formula: "Carbon Dioxide (Air) + Water (Soil)",
            explanation: "Roots absorb water from soil while leaf stomata take in carbon dioxide gas from the atmosphere.",
            example: "Watering garden plants and giving them fresh air.",
            trick: "Without water, the reaction halts!"
          },
          {
            num: 3,
            name: "Essential Products: Glucose & Oxygen",
            formula: "C₆H₁₂O₆ + 6O₂",
            explanation: "Plants produce glucose sugar to feed their own growth and release pure oxygen gas for all animals to breathe.",
            example: "Forests acting as the green lungs of Earth.",
            trick: "Plants feed themselves and oxygenate us!"
          }
        ]
      };
      photoNote.quiz = this.app.generateQuizForTopic(photoNote);
      this.app.notes.push(photoNote);
      this.app.saveNotes();
      this.app.render();
      sounds.playSuccess();
      this.app.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 60);
      this.updateManagerTable();
      this.updateTelemetry();
      await this.app.publishAllNotes(true);
    });

    // Confetti
    document.getElementById("cmd-btn-confetti")?.addEventListener("click", () => {
      sounds.playSuccess();
      this.app.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 90);
    });

    // Toggle Sound
    document.getElementById("cmd-btn-toggle-sound")?.addEventListener("click", () => {
      sounds.enabled = !sounds.enabled;
      alert(`Sound effects are now ${sounds.enabled ? "ENABLED" : "MUTED"}`);
      const soundOn = document.getElementById("sound-icon-on");
      const soundOff = document.getElementById("sound-icon-off");
      if (soundOn && soundOff) {
        soundOn.classList.toggle("hidden", !sounds.enabled);
        soundOff.classList.toggle("hidden", sounds.enabled);
      }
    });

    // Export JSON
    document.getElementById("cmd-btn-export-json")?.addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.app.notes, null, 2));
      const dlAnchor = document.createElement("a");
      dlAnchor.setAttribute("href", dataStr);
      dlAnchor.setAttribute("download", `scienceio-backup-${Date.now()}.json`);
      dlAnchor.click();
      sounds.playClick();
    });

    // Import JSON
    const fileInput = document.getElementById("admin-file-import");
    document.getElementById("cmd-btn-import-json")?.addEventListener("click", () => {
      if (fileInput) fileInput.click();
    });

    if (fileInput) {
      fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async (event) => {
          try {
            const parsed = JSON.parse(event.target.result);
            const notesArr = Array.isArray(parsed) ? parsed : (Array.isArray(parsed.notes) ? parsed.notes : null);
            if (notesArr) {
              this.app.notes = notesArr;
              this.app.saveNotes();
              this.app.render();
              sounds.playSuccess();
              this.updateManagerTable();
              this.updateTelemetry();
              await this.app.publishAllNotes(true);
            } else {
              alert("Invalid JSON format: expected an array of science units.");
            }
          } catch (err) {
            alert("Error parsing JSON file: " + err.message);
          }
        };
        reader.readAsText(file);
      });
    }

    // Clear All Notes
    document.getElementById("cmd-btn-clear-custom")?.addEventListener("click", async () => {
      if (!confirm("Are you sure you want to clear all notes? Your notebook will be completely empty.")) return;
      this.app.notes = [];
      this.app.saveNotes();
      this.app.render();
      sounds.playClick();
      this.updateManagerTable();
      this.updateTelemetry();
      await this.app.publishAllNotes(true);
    });
  }

// DATABASE MANAGER
  updateManagerTable() {
    const tbody = document.getElementById("admin-manager-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (this.app.notes.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 24px; color: var(--text-muted);">No units stored in database. Create your first unit above!</td></tr>`;
      return;
    }

    this.app.notes.forEach((topic) => {
      const tr = document.createElement("tr");
      const sqCount = topic.properties ? topic.properties.length : 0;

      tr.innerHTML = `
        <td><strong>${topic.title}</strong></td>
        <td><span class="card-cat-pill">${(topic.category || "General").toUpperCase()}</span></td>
        <td>${sqCount} Concept Squares</td>
        <td><span style="color: #6ee7b7;">User Unit</span></td>
        <td>
          <div style="display: flex; gap: 8px;">
            <button type="button" class="btn-table-action preview" data-id="${topic.id}">Preview</button>
            <button type="button" class="btn-table-action edit" data-id="${topic.id}">Edit</button>
            <button type="button" class="btn-table-action delete" data-id="${topic.id}">Delete</button>
          </div>
        </td>
      `;

      tr.querySelector(".preview")?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.app.openNotesViewer(topic.id);
      });

      tr.querySelector(".edit")?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.editNoteInArchitect(topic.id);
      });

      tr.querySelector(".delete")?.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (confirm(`Delete unit "${topic.title}"?`)) {
          this.app.notes = this.app.notes.filter(n => n.id !== topic.id);
          this.app.saveNotes();
          this.app.render();
          this.updateManagerTable();
          this.updateTelemetry();
          sounds.playClick();
          await this.app.publishAllNotes(true, `Unit "${topic.title}" deleted and changes synced live to all devices!`);
        }
      });

      tbody.appendChild(tr);
    });
  }

  editNoteInArchitect(id) {
    const note = this.app.notes.find(n => n.id === id);
    if (!note) return;

    this.editingNoteId = note.id;
    const titleInput = document.getElementById("vnote-title");
    const catSelect = document.getElementById("vnote-category");
    const colorSelect = document.getElementById("vnote-color");
    const formulaInput = document.getElementById("vnote-formula");
    const descInput = document.getElementById("vnote-desc");
    const redirectInput = document.getElementById("vnote-redirect");

    if (titleInput) titleInput.value = note.title || "";
    
    // Category mapping
    if (catSelect) {
      const catVal = note.category || "life";
      if (catSelect.querySelector(`option[value="${catVal}"]`)) {
        catSelect.value = catVal;
      } else if (catVal === "biology") {
        catSelect.value = "life";
      } else {
        catSelect.value = "physical";
      }
    }

    // Color mapping
    if (colorSelect) {
      const colorVal = note.color || "blue";
      if (colorSelect.querySelector(`option[value="${colorVal}"]`)) {
        colorSelect.value = colorVal;
      } else if (colorVal === "amber") {
        colorSelect.value = "orange";
      } else {
        colorSelect.value = "blue";
      }
    }

    if (formulaInput) formulaInput.value = note.coreFormula || "";
    if (descInput) descInput.value = note.description || "";
    if (redirectInput) redirectInput.value = note.redirectUrl || "";

    this.architectSquares = (note.properties || []).map(p => ({
      name: p.name || "",
      formula: p.formula || "",
      explanation: p.explanation || "",
      example: p.example || "",
      trick: p.trick || "",
      image: p.image || ""
    }));

    this.renderSquares();
    this.switchTab("architect");

    // Scroll to top of architect form and focus title input
    const deckBody = document.querySelector(".admin-deck-content-body");
    if (deckBody) deckBody.scrollTop = 0;
    const vaultModal = document.getElementById("vault-modal");
    if (vaultModal) {
      const scrollable = vaultModal.querySelector(".admin-vault-container") || vaultModal;
      scrollable.scrollTop = 0;
    }
    if (titleInput) {
      titleInput.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => titleInput.focus(), 80);
    }

    const saveBtn = document.getElementById("btn-save-vault-note");
    if (saveBtn) {
      saveBtn.innerHTML = "<span>Update & Publish to Website & Cloud</span>";
      saveBtn.style.background = "linear-gradient(135deg, #10b981, #06b6d4)";
    }

    sounds.playClick();
  }

// SYSTEM TELEMETRY
  updateTelemetry() {
    const topEl = document.getElementById("telem-topics-count");
    const sqEl = document.getElementById("telem-squares-count");
    if (topEl) topEl.textContent = this.app.notes.length;
    if (sqEl) {
      const totalSq = this.app.notes.reduce((acc, n) => acc + (n.properties ? n.properties.length : 0), 0);
      sqEl.textContent = totalSq;
    }
  }
}

// LIQUID GLASS SCIENTIFIC FORMULA CALCULATOR CONTROLLER
class LiquidGlassCalculator {
  constructor(app) {
    this.app = app;
    this.currentFormula = "density";
    this.degMode = true; // true = degrees, false = radians
    this.currentExpression = "";
    this.ans = 0;
    this.history = [];

    this.formulas = {
      density: {
        id: "density",
        name: "Density of Matter",
        code: "D = m ÷ V",
        principle: "Physical Skience • States & Mass",
        unit: "g/cm³",
        desc: "Density is the amount of mass packed into a given unit volume of matter.",
        inputs: [
          { id: "mass", label: "Mass (m)", unit: "grams (g)", default: 120, min: 0.001 },
          { id: "vol", label: "Volume (V)", unit: "cm³ or mL", default: 24, min: 0.001 }
        ],
        solve: (vals) => {
          const m = parseFloat(vals.mass) || 0;
          const v = parseFloat(vals.vol) || 1;
          const d = m / v;
          const floatStatus = d > 1.0 ? "SINKS in liquid water (> 1.0 g/cm³)" : "FLOATS in liquid water (≤ 1.0 g/cm³)";
          return {
            result: Number(d.toFixed(3)),
            unit: "g/cm³",
            step: `${m}g ÷ ${v}cm³`,
            insight: `Density = ${d.toFixed(2)} g/cm³. Pure liquid water has a density of 1.0 g/cm³. Result: This substance ${floatStatus}!`
          };
        }
      },
      speed: {
        id: "speed",
        name: "Speed & Velocity",
        code: "s = d ÷ t",
        principle: "Forces & Motion",
        unit: "m/s",
        desc: "Speed describes how quickly an object travels over a distance in a period of time.",
        inputs: [
          { id: "dist", label: "Distance (d)", unit: "meters (m)", default: 100, min: 0 },
          { id: "time", label: "Time (t)", unit: "seconds (s)", default: 9.58, min: 0.001 }
        ],
        solve: (vals) => {
          const d = parseFloat(vals.dist) || 0;
          const t = parseFloat(vals.time) || 1;
          const s = d / t;
          const kmh = (s * 3.6).toFixed(1);
          const mph = (s * 2.237).toFixed(1);
          return {
            result: Number(s.toFixed(2)),
            unit: "m/s",
            step: `${d}m ÷ ${t}s`,
            insight: `Speed = ${s.toFixed(2)} m/s (${kmh} km/h or ${mph} mph). The speed of sound in air is ~343 m/s!`
          };
        }
      },
      force: {
        id: "force",
        name: "Force (Newton's 2nd Law)",
        code: "F = m × a",
        principle: "Newtonian Physics & Force",
        unit: "N (Newtons)",
        desc: "An unbalanced force causes a mass to accelerate proportionally.",
        inputs: [
          { id: "mass", label: "Mass (m)", unit: "kilograms (kg)", default: 25, min: 0 },
          { id: "accel", label: "Acceleration (a)", unit: "m/s²", default: 9.8, min: 0 }
        ],
        solve: (vals) => {
          const m = parseFloat(vals.mass) || 0;
          const a = parseFloat(vals.accel) || 0;
          const f = m * a;
          return {
            result: Number(f.toFixed(2)),
            unit: "N",
            step: `${m}kg × ${a}m/s²`,
            insight: `Force = ${f.toFixed(2)} Newtons (kg·m/s²). Earth's gravitational acceleration is roughly 9.8 m/s²!`
          };
        }
      },
      work: {
        id: "work",
        name: "Work & Mechanical Energy",
        code: "W = F × d",
        principle: "Energy & Simple Machines",
        unit: "J (Joules)",
        desc: "Work is done when a force causes an object to move in the direction of the force.",
        inputs: [
          { id: "force", label: "Force (F)", unit: "Newtons (N)", default: 50, min: 0 },
          { id: "dist", label: "Distance (d)", unit: "meters (m)", default: 12, min: 0 }
        ],
        solve: (vals) => {
          const f = parseFloat(vals.force) || 0;
          const d = parseFloat(vals.dist) || 0;
          const w = f * d;
          return {
            result: Number(w.toFixed(2)),
            unit: "J (Joules)",
            step: `${f}N × ${d}m`,
            insight: `Work = ${w.toFixed(2)} Joules. In physics, if an object doesn't move (d = 0), zero work is done regardless of the effort!`
          };
        }
      },
      ke: {
        id: "ke",
        name: "Kinetic Energy",
        code: "KE = ½ · m · v²",
        principle: "Forms of Energy",
        unit: "J (Joules)",
        desc: "Kinetic energy is the energy of motion possessed by any moving mass.",
        inputs: [
          { id: "mass", label: "Mass (m)", unit: "kilograms (kg)", default: 1200, min: 0 },
          { id: "vel", label: "Velocity (v)", unit: "m/s", default: 20, min: 0 }
        ],
        solve: (vals) => {
          const m = parseFloat(vals.mass) || 0;
          const v = parseFloat(vals.vel) || 0;
          const ke = 0.5 * m * Math.pow(v, 2);
          return {
            result: Number(ke.toFixed(1)),
            unit: "J (Joules)",
            step: `0.5 × ${m}kg × (${v}m/s)²`,
            insight: `Kinetic Energy = ${ke.toLocaleString()} Joules. Velocity is squared (v²), meaning doubling speed quadruples energy!`
          };
        }
      },
      temp: {
        id: "temp",
        name: "Thermal Temperature Scale",
        code: "°F = (1.8 × °C) + 32",
        principle: "Thermal Energy & Phases",
        unit: "°F / °C",
        desc: "Convert thermal kinetic molecular activity between Celsius and Fahrenheit.",
        inputs: [
          { id: "tempVal", label: "Degrees Input", unit: "Value", default: 25 },
          { id: "mode", label: "Conversion Mode (1: C → F, 2: F → C)", unit: "1 or 2", default: 1 }
        ],
        solve: (vals) => {
          const t = parseFloat(vals.tempVal) || 0;
          const mode = parseInt(vals.mode, 10) === 2 ? 2 : 1;
          if (mode === 2) {
            const c = (t - 32) / 1.8;
            return {
              result: Number(c.toFixed(1)),
              unit: "°C",
              step: `(${t}°F - 32) ÷ 1.8`,
              insight: `${t}°F is ${c.toFixed(1)}°C. Liquid water freezes at 0°C (32°F) and boils at 100°C (212°F).`
            };
          } else {
            const f = (t * 1.8) + 32;
            return {
              result: Number(f.toFixed(1)),
              unit: "°F",
              step: `(${t}°C × 1.8) + 32`,
              insight: `${t}°C is ${f.toFixed(1)}°F. Average healthy human body temperature is 37°C (98.6°F).`
            };
          }
        }
      },
      photo: {
        id: "photo",
        name: "Photosynthesis Stoichiometric Yield",
        code: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
        principle: "Life Skience • Cellular Plant Energy",
        unit: "g Glucose",
        desc: "Calculates the mass of glucose plant food and oxygen produced from carbon dioxide input.",
        inputs: [
          { id: "co2", label: "Carbon Dioxide (CO₂) Moles", unit: "moles", default: 6, min: 0.1 }
        ],
        solve: (vals) => {
          const moles = parseFloat(vals.co2) || 6;
          const glucoseMoles = moles / 6;
          const glucoseGrams = glucoseMoles * 180.16;
          const o2Grams = moles * 32.0;
          return {
            result: Number(glucoseGrams.toFixed(1)),
            unit: "g Glucose",
            step: `${moles} mol CO₂ produces ${glucoseMoles.toFixed(2)} mol Glucose & ${o2Grams.toFixed(1)}g O₂`,
            insight: `Chloroplasts convert ${moles} mol of CO₂ into ${glucoseGrams.toFixed(1)} grams of glucose plant food and release ${o2Grams.toFixed(1)}g of oxygen!`
          };
        }
      }
    };
  }

  init() {
    this.bindDomElements();
    this.setupPresetPills();
    this.setupSolverActions();
    this.setupKeypad();
    this.switchFormula("density");
  }

  bindDomElements() {
    this.pillsContainer = document.getElementById("calc-formula-pills");
    this.solverPanel = document.getElementById("calc-solver-panel");
    this.solverInputsGrid = document.getElementById("solver-inputs-grid");
    this.formulaCode = document.getElementById("solver-formula-code");
    this.formulaName = document.getElementById("solver-formula-name");
    this.principleBadge = document.getElementById("solver-principle-badge");
    this.solveBtn = document.getElementById("btn-calc-solve-formula");
    this.resetBtn = document.getElementById("btn-calc-reset-formula");

    this.modeText = document.getElementById("calc-mode-text");
    this.degRadIndicator = document.getElementById("calc-deg-rad-indicator");
    this.historyText = document.getElementById("calc-history-text");
    this.resultValue = document.getElementById("calc-result-value");
    this.unitTag = document.getElementById("calc-unit-tag");
    this.insightText = document.getElementById("calc-insight-text");
    this.historyTags = document.getElementById("calc-history-tags");
  }

  setupPresetPills() {
    if (!this.pillsContainer) return;
    const pills = this.pillsContainer.querySelectorAll(".calc-pill");
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        sounds.playClick();
        pills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        const formulaKey = pill.dataset.formula;
        this.switchFormula(formulaKey);
      });
    });
  }

  switchFormula(key) {
    this.currentFormula = key;
    if (key === "freeform") {
      if (this.solverPanel) this.solverPanel.classList.add("hidden-panel");
      if (this.modeText) this.modeText.textContent = "DIRECT SCIENTIFIC EVALUATOR";
      if (this.unitTag) this.unitTag.textContent = "";
      if (this.historyText) this.historyText.textContent = "Ready for expression";
      if (this.insightText) this.insightText.textContent = "Type numbers, operators (+, -, ×, ÷), or scientific functions (sin, cos, √, x²) on the keypad.";
      this.currentExpression = "";
      this.updateDisplay("0");
    } else {
      const f = this.formulas[key];
      if (!f) return;
      if (this.solverPanel) this.solverPanel.classList.remove("hidden-panel");
      if (this.formulaCode) this.formulaCode.textContent = f.code;
      if (this.formulaName) this.formulaName.textContent = f.name;
      if (this.principleBadge) this.principleBadge.textContent = f.principle;
      if (this.modeText) this.modeText.textContent = `FORMULA SOLVER • ${f.id.toUpperCase()}`;
      if (this.unitTag) this.unitTag.textContent = f.unit;
      this.renderInputs(f);
      this.solveCurrentFormula(false);
    }
  }

  renderInputs(formula) {
    if (!this.solverInputsGrid) return;
    this.solverInputsGrid.innerHTML = "";
    formula.inputs.forEach((inp) => {
      const group = document.createElement("div");
      group.className = "solver-input-group";
      group.innerHTML = `
        <label class="solver-input-label" for="calc-inp-${inp.id}">
          <span>${inp.label}</span>
          <span class="solver-input-unit">[${inp.unit}]</span>
        </label>
        <div class="solver-field-wrap">
          <input type="number" step="any" class="solver-input-box" id="calc-inp-${inp.id}" value="${inp.default}">
        </div>
      `;
      this.solverInputsGrid.appendChild(group);

      const inputEl = group.querySelector("input");
      inputEl.addEventListener("input", () => {
        this.solveCurrentFormula(false);
      });
      inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.solveCurrentFormula(true);
        }
      });
    });
  }

  setupSolverActions() {
    this.solveBtn?.addEventListener("click", () => {
      this.solveCurrentFormula(true);
    });

    this.resetBtn?.addEventListener("click", () => {
      sounds.playClick();
      const f = this.formulas[this.currentFormula];
      if (f) {
        this.renderInputs(f);
        this.solveCurrentFormula(false);
      }
    });
  }

  solveCurrentFormula(triggerFeedback = true) {
    const f = this.formulas[this.currentFormula];
    if (!f) return;

    const values = {};
    f.inputs.forEach((inp) => {
      const el = document.getElementById(`calc-inp-${inp.id}`);
      values[inp.id] = el ? parseFloat(el.value) || 0 : inp.default;
    });

    try {
      const outcome = f.solve(values);
      this.ans = outcome.result;
      this.updateDisplay(outcome.result.toLocaleString());
      if (this.unitTag) this.unitTag.textContent = outcome.unit;
      if (this.historyText) this.historyText.textContent = `${f.code}  ->  ${outcome.step}`;
      if (this.insightText) this.insightText.textContent = outcome.insight;

      if (triggerFeedback) {
        sounds.playSuccess();
        this.addHistoryTag(`${f.name}: ${outcome.result} ${outcome.unit}`, outcome.result);
      }
    } catch (e) {
      if (this.historyText) this.historyText.textContent = "Error in formula parameters";
    }
  }

  setupKeypad() {
    const keys = document.querySelectorAll(".lkey");
    keys.forEach((key) => {
      key.addEventListener("click", () => {
        sounds.playKeypadTap();
        this.handleKeyClick(key);
      });
    });
  }

  handleKeyClick(btn) {
    const val = btn.dataset.val;
    const op = btn.dataset.op;
    const action = btn.dataset.action;

    if (action === "all_clear") {
      this.currentExpression = "";
      this.updateDisplay("0");
      if (this.historyText) this.historyText.textContent = "Cleared";
      return;
    }

    if (action === "backspace") {
      this.currentExpression = this.currentExpression.slice(0, -1);
      this.updateDisplay(this.currentExpression || "0");
      return;
    }

    if (action === "ans") {
      this.currentExpression += this.ans.toString();
      this.updateDisplay(this.currentExpression);
      return;
    }

    if (action === "equals") {
      this.evaluateExpression();
      return;
    }

    if (op === "deg_rad") {
      this.degMode = !this.degMode;
      if (this.degRadIndicator) {
        this.degRadIndicator.textContent = this.degMode ? "DEG" : "RAD";
      }
      return;
    }

    if (op === "sq") {
      this.currentExpression += "^2";
      this.updateDisplay(this.currentExpression);
      return;
    }

    if (op === "pow") {
      this.currentExpression += "^";
      this.updateDisplay(this.currentExpression);
      return;
    }

    if (op === "sqrt") {
      this.currentExpression += "√(";
      this.updateDisplay(this.currentExpression);
      return;
    }

    if (op === "cbrt") {
      this.currentExpression += "∛(";
      this.updateDisplay(this.currentExpression);
      return;
    }

    if (op === "sin" || op === "cos" || op === "tan") {
      this.currentExpression += `${op}(`;
      this.updateDisplay(this.currentExpression);
      return;
    }

    if (val === "PI") {
      this.currentExpression += "π";
      this.updateDisplay(this.currentExpression);
      return;
    }

    if (val === "E") {
      this.currentExpression += "e";
      this.updateDisplay(this.currentExpression);
      return;
    }

    if (val) {
      this.currentExpression += val;
      this.updateDisplay(this.currentExpression);
    }
  }

  evaluateExpression() {
    if (!this.currentExpression.trim()) return;

    let expr = this.currentExpression;
    const originalExpr = expr;

    try {
      // Replace display symbols with JavaScript equivalents
      expr = expr.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
      expr = expr.replace(/π/g, "Math.PI").replace(/\be\b/g, "Math.E");
      expr = expr.replace(/\^/g, "**");

      // Replace square roots and cube roots
      expr = expr.replace(/√\(([^)]+)\)/g, "Math.sqrt($1)");
      expr = expr.replace(/∛\(([^)]+)\)/g, "Math.cbrt($1)");

      // Replace trig functions with degree / radian conversion
      if (this.degMode) {
        expr = expr.replace(/sin\(([^)]+)\)/g, "Math.sin(($1) * Math.PI / 180)");
        expr = expr.replace(/cos\(([^)]+)\)/g, "Math.cos(($1) * Math.PI / 180)");
        expr = expr.replace(/tan\(([^)]+)\)/g, "Math.tan(($1) * Math.PI / 180)");
      } else {
        expr = expr.replace(/sin\(/g, "Math.sin(");
        expr = expr.replace(/cos\(/g, "Math.cos(");
        expr = expr.replace(/tan\(/g, "Math.tan(");
      }

      // Safe evaluation
      // Allow only digits, basic operators, Math calls, parentheses, decimals
      const cleanExpr = expr.replace(/Math\.(PI|E|sqrt|cbrt|sin|cos|tan)/g, "");
      if (/[^0-9+\-*/%().\s*]/g.test(cleanExpr)) {
        throw new Error("Invalid characters");
      }

      const evalFn = new Function(`return (${expr});`);
      let result = evalFn();

      if (typeof result === "number") {
        if (!isFinite(result)) {
          this.updateDisplay("Undefined");
          if (this.historyText) this.historyText.textContent = `${originalExpr} = Undefined`;
          return;
        }
        // Round to reasonable precision to remove floating point anomalies
        result = Math.round(result * 100000000) / 100000000;
        this.ans = result;
        this.updateDisplay(result.toLocaleString());
        if (this.historyText) this.historyText.textContent = `${originalExpr} =`;
        if (this.insightText) this.insightText.textContent = `Evaluated: ${originalExpr} = ${result}`;

        sounds.playSuccess();
        this.addHistoryTag(`${originalExpr} = ${result}`, result);
        this.currentExpression = result.toString();
      }
    } catch (err) {
      this.updateDisplay("Error");
      if (this.historyText) this.historyText.textContent = `Syntax Error in: ${originalExpr}`;
      sounds.playVaultError();
    }
  }

  updateDisplay(val) {
    if (this.resultValue) {
      this.resultValue.textContent = val;
      const len = val.toString().length;
      if (len > 12) {
        this.resultValue.style.fontSize = "1.8rem";
      } else if (len > 8) {
        this.resultValue.style.fontSize = "2.4rem";
      } else {
        this.resultValue.style.fontSize = "";
      }
    }
  }

  addHistoryTag(label, val) {
    this.history.unshift({ label, val });
    if (this.history.length > 8) this.history.pop();
    if (!this.historyTags) return;

    this.historyTags.innerHTML = "";
    this.history.forEach((h) => {
      const tag = document.createElement("span");
      tag.className = "calc-history-tag";
      tag.textContent = h.label;
      tag.title = "Click to load value into calculator";
      tag.addEventListener("click", () => {
        sounds.playClick();
        this.currentExpression = h.val.toString();
        this.updateDisplay(h.val.toString());
      });
      this.historyTags.appendChild(tag);
    });
  }
}

// Helper to guarantee science notes list has valid fallback if completely empty and filters out unwanted notes
function ensurePlantCellUnit(notesList) {
  if (!Array.isArray(notesList) || notesList.length === 0) {
    return JSON.parse(JSON.stringify(DEFAULT_SCIENCE_TOPICS));
  }
  const defaultPlant = DEFAULT_SCIENCE_TOPICS.find(t => t.id === "science-plant-cell") || DEFAULT_SCIENCE_TOPICS[0];
  // Strip out any added notes the user explicitly does not want
  const list = notesList.filter(n => n && 
    n.id !== "states-of-matter-01" && 
    n.id !== "moon-phases-01" &&
    !n.id.startsWith("science-matter-") &&
    !n.id.startsWith("science-photo-")
  );
  list.forEach(n => {
    if (n.id === "science-plant-cell" && (!n.quiz || !Array.isArray(n.quiz) || n.quiz.length === 0)) {
      n.quiz = JSON.parse(JSON.stringify(defaultPlant.quiz || []));
    }
  });
  return list;
}

// 5TH GRADE SCIENCE VOCABULARY GLOSSARY
const SCIENCE_VOCAB_GLOSSARY = {
  "chloroplast": { pron: "KLOR-uh-plast", def: "A green plant organelle holding chlorophyll where photosynthesis creates food from sunlight." },
  "chloroplasts": { pron: "KLOR-uh-plasts", def: "Green plant organelles holding chlorophyll where photosynthesis creates food from sunlight." },
  "photosynthesis": { pron: "foh-toh-SIN-thuh-sis", def: "Process where green plants convert carbon dioxide, water, and solar energy into glucose and oxygen." },
  "mitochondria": { pron: "my-toe-KON-dree-uh", def: "The powerhouses of the cell that generate cellular energy (ATP) through respiration." },
  "cytoplasm": { pron: "SY-toe-plaz-um", def: "Jelly-like fluid that fills the cell interior, cushioning and supporting all organelles." },
  "nucleus": { pron: "NOO-klee-us", def: "The command center of a cell holding genetic DNA instructions and directing cell activities." },
  "vacuole": { pron: "VAK-yoo-ohl", def: "Storage sac inside cells for water, nutrients, and waste (extra-large in plant cells for structural turgor pressure)." },
  "vacuoles": { pron: "VAK-yoo-ohls", def: "Storage sacs inside cells for water, nutrients, and cellular waste." },
  "cell wall": { pron: "sel wawl", def: "Rigid outer cellulose layer providing physical support, protection, and rectangular shape to plant cells." },
  "cell membrane": { pron: "sel MEM-brayn", def: "Flexible semi-permeable boundary controlling which molecules enter and exit the cell." },
  "endoplasmic reticulum": { pron: "en-doh-PLAZ-mik reh-TIK-yuh-lum", def: "Intracellular membrane network synthesizing and transporting essential proteins and lipids." },
  "golgi body": { pron: "GOHL-jee BAH-dee", def: "The cellular shipping department that modifies, packages, and sorts proteins into vesicles." },
  "ribosome": { pron: "RY-buh-sohm", def: "Microscopic molecular factory that translates genetic code to assemble amino acids into proteins." },
  "ribosomes": { pron: "RY-buh-sohms", def: "Microscopic molecular factories that assemble amino acids into essential proteins." },
  "diffusion": { pron: "dih-FYOO-zhun", def: "Movement of particles from an area of higher concentration to lower concentration until balanced." },
  "osmosis": { pron: "oz-MOH-sis", def: "The spontaneous diffusion of water molecules through a selectively permeable membrane." },
  "organism": { pron: "OR-guh-niz-um", def: "Any individual living thing (animal, plant, fungus, or microbe) capable of life processes." },
  "unicellular": { pron: "yoo-nih-SEL-yoo-ler", def: "An organism made of only one single independent cell (e.g., amoeba, paramecium, bacterium)." },
  "multicellular": { pron: "mul-tee-SEL-yoo-ler", def: "An organism made of many specialized cells organized into tissues, organs, and systems." },
  "hypothesis": { pron: "hy-POTH-uh-sis", def: "A testable prediction or explanation for an observation, often framed as 'If... then...'." },
  "variable": { pron: "VAIR-ee-uh-bul", def: "Any factor or condition in an experiment that can be changed, controlled, or measured." },
  "ecosystem": { pron: "EE-koh-sis-tum", def: "A community of living organisms interacting with non-living environmental factors." },
  "density": { pron: "DEN-sih-tee", def: "Mass per unit volume of a substance (how tightly matter particles are packed together)." },
  "evaporation": { pron: "ee-vap-uh-RAY-shun", def: "Phase change where liquid absorbs heat energy and turns into gaseous water vapor." },
  "condensation": { pron: "kon-den-SAY-shun", def: "Phase change where gaseous vapor cools down and turns back into liquid droplets." }
};

function bionicWord(word) {
  if (word.length <= 1) return `<b>${word}</b>`;
  if (word.length <= 3) return `<b class="bionic-fix">${word.slice(0, 1)}</b>${word.slice(1)}`;
  const mid = Math.ceil(word.length * 0.45);
  return `<b class="bionic-fix">${word.slice(0, mid)}</b>${word.slice(mid)}`;
}

function applyBionicReading(html) {
  return html.replace(/(<[^>]+>)|([A-Za-z0-9]+)/g, (match, tag, word) => {
    if (tag) return tag;
    return bionicWord(word);
  });
}

let _VOCAB_TERMS_REGEX = null;
function getVocabTermsRegex() {
  if (!_VOCAB_TERMS_REGEX) {
    const terms = Object.keys(SCIENCE_VOCAB_GLOSSARY).sort((a, b) => b.length - a.length);
    _VOCAB_TERMS_REGEX = new RegExp(`(?![^<]*>)(\\b(?:${terms.join('|')})\\b)`, 'gi');
  }
  return _VOCAB_TERMS_REGEX;
}

function annotateVocabTerms(html) {
  if (!html) return html;
  return html.replace(getVocabTermsRegex(), (match) => {
    const key = match.toLowerCase();
    return `<span class="vocab-term" data-term="${key}">${match}</span>`;
  });
}

// READING ENHANCEMENT SUITE CONTROLLER
class ReadingEnhancementSuite {
  constructor(app) {
    this.app = app;
    this.currentTopic = null;
    this.isBionic = false;
    this.isFlashcard = false;
    this.isZen = false;
    this.isDyslexia = false;
    this.fontSize = 16;
    this.activeColor = "cyan";
    this.ttsPlaying = false;
    this.ttsQueue = [];
    this.ttsIndex = 0;
    this.selectedVoice = null;
    this.ttsSpeed = 1.0;
    this.voices = [];
    this.masteredCards = new Set();
    this.currentVocabTerm = null;
  }

  init() {
    this.initVoices();
    this.initToolbarEvents();
    this.initVocabEvents();
    this.initScrollProgress();
    this.initHighlighter();
  }

  initVoices() {
    const populateVoiceDropdown = () => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;
      this.voices = window.speechSynthesis.getVoices();
      const select = document.getElementById("tts-voice-select");
      if (!select) return;

      select.innerHTML = "";
      if (this.voices.length === 0) {
        select.innerHTML = `<option value="">System Default Voice</option>`;
        return;
      }

      // Group and sort voices: English first, then others
      const sortedVoices = [...this.voices].sort((a, b) => {
        const aEng = a.lang.startsWith("en");
        const bEng = b.lang.startsWith("en");
        if (aEng && !bEng) return -1;
        if (!aEng && bEng) return 1;
        return a.name.localeCompare(b.name);
      });

      const savedVoiceName = localStorage.getItem("scienceio_tts_voice");

      sortedVoices.forEach((v) => {
        const opt = document.createElement("option");
        opt.value = v.name;
        const cleanLang = v.lang.replace('_', '-');
        opt.textContent = `${v.name} (${cleanLang})`;
        if (savedVoiceName && v.name === savedVoiceName) {
          opt.selected = true;
          this.selectedVoice = v;
        }
        select.appendChild(opt);
      });

      if (!this.selectedVoice && sortedVoices.length > 0) {
        const preferred = sortedVoices.find(v => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("Zira"))) || sortedVoices[0];
        if (preferred) {
          this.selectedVoice = preferred;
          select.value = preferred.name;
        }
      }
    };

    populateVoiceDropdown();
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = populateVoiceDropdown;
    }
  }

  initToolbarEvents() {
    // 1. TTS Play / Stop
    document.getElementById("btn-tts-play")?.addEventListener("click", () => {
      this.toggleAudio();
    });

    // 2. TTS Voice Selection
    document.getElementById("tts-voice-select")?.addEventListener("change", (e) => {
      const voiceName = e.target.value;
      this.selectedVoice = this.voices.find(v => v.name === voiceName) || null;
      if (voiceName) {
        localStorage.setItem("scienceio_tts_voice", voiceName);
      }
      if (this.ttsPlaying) {
        this.stopAudio();
        this.startSequentialAudio();
      }
    });

    // 3. TTS Speed Selection
    document.getElementById("tts-speed-select")?.addEventListener("change", (e) => {
      this.ttsSpeed = parseFloat(e.target.value) || 1.0;
      if (this.ttsPlaying) {
        this.stopAudio();
        this.startSequentialAudio();
      }
    });

    // 4. Bionic Reading Toggle
    document.getElementById("btn-toggle-bionic")?.addEventListener("click", () => {
      this.toggleBionic();
    });

    // 5. 3D Flashcards Mode Toggle
    document.getElementById("btn-toggle-flashcards")?.addEventListener("click", () => {
      this.toggleFlashcards();
    });

    // 6. Zen Focus Mode Toggle
    document.getElementById("btn-zen-mode")?.addEventListener("click", () => {
      this.toggleZen();
    });

    // 7. Typography: Font sizing
    document.getElementById("btn-font-dec")?.addEventListener("click", () => {
      this.adjustFontSize(-1);
    });
    document.getElementById("btn-font-inc")?.addEventListener("click", () => {
      this.adjustFontSize(1);
    });

    // 8. Dyslexia-Friendly Font Toggle
    document.getElementById("btn-dyslexia-font")?.addEventListener("click", () => {
      this.toggleDyslexia();
    });

    // 9. Highlighter Color Selection
    document.querySelectorAll(".hl-color-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".hl-color-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeColor = btn.dataset.color || "cyan";
      });
    });

    // 10. Clear Highlights Button
    document.getElementById("btn-clear-highlights")?.addEventListener("click", () => {
      if (!this.currentTopic) return;
      if (confirm("Clear all your personal highlights on this unit?")) {
        localStorage.removeItem("scienceio_highlights_" + this.currentTopic.id);
        if (this.app) this.app.renderModalProperties(this.currentTopic);
        if (window.sounds) window.sounds.playClick();
      }
    });

    // 11. Popover Pronounce Speaker Button
    document.getElementById("vocab-pop-speak-btn")?.addEventListener("click", () => {
      if (this.currentVocabTerm && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(this.currentVocabTerm);
        if (this.selectedVoice) utter.voice = this.selectedVoice;
        utter.rate = 0.9;
        window.speechSynthesis.speak(utter);
      }
    });

    // Event delegation on container for card speaker buttons & flashcard interactions
    const container = document.getElementById("modal-sections-container");
    if (container) {
      container.addEventListener("click", (e) => {
        // Individual Card Speaker Button
        const ttsBtn = e.target.closest(".prop-tts-btn");
        if (ttsBtn) {
          e.stopPropagation();
          const sq = parseInt(ttsBtn.dataset.sq, 10);
          this.playSingleSquare(sq);
          return;
        }

        // Flashcard Rating Buttons
        const fcReviewBtn = e.target.closest(".fc-btn.review");
        if (fcReviewBtn) {
          e.stopPropagation();
          const card = fcReviewBtn.closest(".flashcard-card");
          if (card) {
            const num = card.dataset.sq;
            this.masteredCards.delete(num);
            card.style.borderColor = "#ef4444";
            this.updateFlashcardProgress();
            if (window.sounds) window.sounds.playClick();
          }
          return;
        }

        const fcMasteredBtn = e.target.closest(".fc-btn.mastered");
        if (fcMasteredBtn) {
          e.stopPropagation();
          const card = fcMasteredBtn.closest(".flashcard-card");
          if (card) {
            const num = card.dataset.sq;
            this.masteredCards.add(num);
            card.style.borderColor = "#10b981";
            this.updateFlashcardProgress();
            if (window.sounds) window.sounds.playSuccess();
          }
          return;
        }

        // Flashcard Flip
        const flashCard = e.target.closest(".flashcard-card");
        if (flashCard && !e.target.closest(".flashcard-review-bar")) {
          flashCard.classList.toggle("flipped");
          if (window.sounds) window.sounds.playClick();
          return;
        }
      });
    }
  }

  initVocabEvents() {
    const container = document.getElementById("modal-sections-container");
    const popover = document.getElementById("vocab-popover");
    if (!container || !popover) return;

    container.addEventListener("click", (e) => {
      const vocabSpan = e.target.closest(".vocab-term");
      if (vocabSpan) {
        e.stopPropagation();
        const term = vocabSpan.dataset.term;
        this.showVocabPopover(term, vocabSpan);
      }
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".vocab-popover") && !e.target.closest(".vocab-term")) {
        this.hideVocabPopover();
      }
    });
  }

  showVocabPopover(termKey, targetEl) {
    const popover = document.getElementById("vocab-popover");
    if (!popover || !termKey) return;
    const entry = SCIENCE_VOCAB_GLOSSARY[termKey.toLowerCase()];
    if (!entry) return;

    this.currentVocabTerm = termKey;
    const wordEl = document.getElementById("vocab-pop-word");
    const pronEl = document.getElementById("vocab-pop-pron");
    const defEl = document.getElementById("vocab-pop-def");

    if (wordEl) wordEl.textContent = termKey;
    if (pronEl) pronEl.textContent = entry.pron ? `/${entry.pron}/` : "";
    if (defEl) defEl.textContent = entry.def;

    const modalWindow = document.querySelector(".notes-detail-window");
    const modalRect = modalWindow ? modalWindow.getBoundingClientRect() : { top: 0, left: 0 };
    const rect = targetEl.getBoundingClientRect();

    popover.classList.remove("hidden");
    const popWidth = 300;
    let leftPos = rect.left - modalRect.left;
    if (leftPos + popWidth > (modalRect.width - 20)) {
      leftPos = modalRect.width - popWidth - 20;
    }
    if (leftPos < 15) leftPos = 15;

    let topPos = rect.top - modalRect.top - 110;
    if (topPos < 10) {
      topPos = rect.bottom - modalRect.top + 10;
    }

    popover.style.left = `${leftPos}px`;
    popover.style.top = `${topPos}px`;
  }

  hideVocabPopover() {
    const popover = document.getElementById("vocab-popover");
    if (popover) popover.classList.add("hidden");
  }

  initScrollProgress() {
    const scrollContainer = document.querySelector(".modal-body-scrollable");
    const fill = document.getElementById("reading-progress-fill");
    if (!scrollContainer || !fill) return;

    scrollContainer.addEventListener("scroll", () => {
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      if (scrollHeight > 0) {
        const pct = Math.min(100, Math.max(0, (scrollContainer.scrollTop / scrollHeight) * 100));
        fill.style.width = `${pct}%`;
      }
    }, { passive: true });
  }

  initHighlighter() {
    const container = document.getElementById("modal-sections-container");
    if (!container) return;

    const applySelectionHighlight = () => {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;
      const text = selection.toString().trim();
      if (text.length < 2) return;

      const range = selection.getRangeAt(0);
      const containerElem = range.commonAncestorContainer;
      const parentCard = (containerElem.nodeType === 3 ? containerElem.parentNode : containerElem).closest(".property-detail-card");
      if (!parentCard) return;

      try {
        const mark = document.createElement("mark");
        mark.className = `neon-highlight hl-${this.activeColor}`;
        range.surroundContents(mark);
        selection.removeAllRanges();
        this.saveHighlights();
      } catch (err) {
        // Selection crosses node boundaries, handled gracefully
      }
    };

    container.addEventListener("mouseup", applySelectionHighlight);
    container.addEventListener("touchend", () => {
      setTimeout(applySelectionHighlight, 120);
    });
  }

  saveHighlights() {
    if (!this.currentTopic) return;
    const container = document.getElementById("modal-sections-container");
    if (!container) return;
    localStorage.setItem("scienceio_highlights_" + this.currentTopic.id, container.innerHTML);
  }

  onOpenTopic(topic) {
    this.currentTopic = topic;
    this.masteredCards.clear();
    this.hideVocabPopover();
    this.stopAudio();

    // 1. Calculate reading time
    let totalWords = (topic.title || "").split(/\s+/).length + (topic.description || "").split(/\s+/).length;
    if (topic.properties) {
      topic.properties.forEach(p => {
        totalWords += (p.name || "").split(/\s+/).length;
        totalWords += (p.explanation || "").split(/\s+/).length;
        totalWords += (p.example || "").split(/\s+/).length;
      });
    }
    const mins = Math.max(1, Math.ceil(totalWords / 175));
    const timeEl = document.getElementById("reading-time-pill");
    if (timeEl) timeEl.textContent = `${mins} min read`;

    // 2. Render Sticky Jump Bar (TOC)
    this.renderTOC(topic);

    // 3. Reset progress bar
    const fill = document.getElementById("reading-progress-fill");
    if (fill) fill.style.width = "0%";
  }

  renderTOC(topic) {
    const strip = document.getElementById("notes-toc-strip");
    if (!strip) return;
    strip.innerHTML = "";
    if (!topic || !topic.properties || topic.properties.length === 0) return;

    topic.properties.forEach((prop) => {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "toc-pill";
      const cleanName = (prop.name || "").replace(/^\d+\.\s*/, "");
      pill.textContent = `#${prop.num} ${cleanName}`;
      pill.title = `Jump directly to Concept Square #${prop.num}: ${cleanName}`;
      pill.setAttribute("style", "appearance: none; -webkit-appearance: none; background: rgba(30, 41, 59, 0.85); border: 1px solid rgba(255,255,255,0.22); color: #e2e8f0; border-radius: 999px; padding: 4px 12px; font-size: 0.72rem; font-weight: 700; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center;");
      pill.addEventListener("click", () => {
        if (window.sounds) window.sounds.playClick();
        const target = document.getElementById(`concept-square-${prop.num}`);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
          target.classList.add("speaking-card-active");
          setTimeout(() => target.classList.remove("speaking-card-active"), 1200);
        }
      });
      strip.appendChild(pill);
    });
  }

  toggleBionic() {
    this.isBionic = !this.isBionic;
    const btn = document.getElementById("btn-toggle-bionic");
    if (btn) btn.classList.toggle("active", this.isBionic);
    if (window.sounds) window.sounds.playClick();
    if (this.app && this.currentTopic) {
      this.app.renderModalProperties(this.currentTopic);
    }
  }

  toggleFlashcards() {
    this.isFlashcard = !this.isFlashcard;
    const btn = document.getElementById("btn-toggle-flashcards");
    if (btn) {
      btn.classList.toggle("active", this.isFlashcard);
      btn.innerHTML = this.isFlashcard ? `${UI_SVG.file} Full Notes` : `${UI_SVG.cards} Flashcards`;
    }
    if (window.sounds) window.sounds.playClick();
    if (this.app && this.currentTopic) {
      this.app.renderModalProperties(this.currentTopic);
    }
  }

  toggleZen() {
    this.isZen = !this.isZen;
    const modal = document.getElementById("notes-viewer-modal");
    const btn = document.getElementById("btn-zen-mode");
    if (modal) modal.classList.toggle("zen-mode-active", this.isZen);
    if (btn) {
      btn.classList.toggle("active", this.isZen);
      btn.innerHTML = this.isZen ? "Exit Fullscreen" : `${UI_SVG.fullscreen} Fullscreen`;
    }
    if (window.sounds) window.sounds.playClick();
  }

  exitZenMode() {
    this.isZen = false;
    const modal = document.getElementById("notes-viewer-modal");
    const btn = document.getElementById("btn-zen-mode");
    if (modal) modal.classList.remove("zen-mode-active");
    if (btn) {
      btn.classList.remove("active");
      btn.innerHTML = `${UI_SVG.fullscreen} Fullscreen`;
    }
  }

  adjustFontSize(delta) {
    this.fontSize = Math.max(13, Math.min(22, this.fontSize + delta));
    const pane = document.getElementById("pane-structured-notes");
    if (pane) {
      pane.style.fontSize = `${this.fontSize}px`;
    }
    if (window.sounds) window.sounds.playClick();
  }

  toggleDyslexia() {
    this.isDyslexia = !this.isDyslexia;
    const pane = document.getElementById("pane-structured-notes");
    const btn = document.getElementById("btn-dyslexia-font");
    if (pane) pane.classList.toggle("dyslexia-font-mode", this.isDyslexia);
    if (btn) btn.classList.toggle("active", this.isDyslexia);
    if (window.sounds) window.sounds.playClick();
  }

  toggleAudio() {
    if (this.ttsPlaying) {
      this.stopAudio();
    } else {
      this.startSequentialAudio();
    }
  }

  startSequentialAudio() {
    if (!this.currentTopic || typeof window.speechSynthesis === "undefined") {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    this.stopAudio();
    this.ttsPlaying = true;
    const playBtn = document.getElementById("btn-tts-play");
    const playIcon = document.getElementById("tts-icon");
    const playLabel = document.getElementById("tts-label");
    if (playBtn) playBtn.classList.add("playing");
    if (playIcon) playIcon.innerHTML = UI_SVG.stop;
    if (playLabel) playLabel.textContent = "Stop";

    // Build speech queue
    this.ttsQueue = [
      { text: `${this.currentTopic.title}. ${this.currentTopic.description || ''}`, cardId: null }
    ];

    if (this.currentTopic.properties) {
      this.currentTopic.properties.forEach(prop => {
        const text = `Concept Square ${prop.num}: ${prop.name}. ${prop.explanation}. Scientific Observation: ${prop.example || ''}`;
        this.ttsQueue.push({ text, cardId: `concept-square-${prop.num}` });
      });
    }

    this.ttsIndex = 0;
    this.speakNextQueueItem();
  }

  speakNextQueueItem() {
    if (!this.ttsPlaying || this.ttsIndex >= this.ttsQueue.length) {
      this.stopAudio();
      return;
    }

    const item = this.ttsQueue[this.ttsIndex];
    const utter = new SpeechSynthesisUtterance(item.text);
    if (this.selectedVoice) utter.voice = this.selectedVoice;
    utter.rate = this.ttsSpeed;
    utter.pitch = 1.0;

    utter.onstart = () => {
      document.querySelectorAll(".speaking-card-active").forEach(el => el.classList.remove("speaking-card-active"));
      if (item.cardId) {
        const target = document.getElementById(item.cardId);
        if (target) {
          target.classList.add("speaking-card-active");
          target.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    };

    utter.onstart = () => {
      this.app?.dynamicIsland?.setMicPrivacy?.(true);
    };

    utter.onend = () => {
      if (item.cardId) {
        document.getElementById(item.cardId)?.classList.remove("speaking-card-active");
      }
      this.ttsIndex++;
      if (this.ttsIndex >= this.ttsQueue.length) {
        this.app?.dynamicIsland?.setMicPrivacy?.(false);
      }
      this.speakNextQueueItem();
    };

    utter.onerror = () => {
      this.app?.dynamicIsland?.setMicPrivacy?.(false);
      this.stopAudio();
    };

    window.speechSynthesis.speak(utter);
  }

  playSingleSquare(squareNum) {
    if (!this.currentTopic || !this.currentTopic.properties || typeof window.speechSynthesis === "undefined") return;
    const prop = this.currentTopic.properties.find(p => p.num === squareNum);
    if (!prop) return;

    this.stopAudio();
    const text = `Concept Square ${prop.num}: ${prop.name}. ${prop.explanation}. Scientific Observation: ${prop.example || ''}`;
    const utter = new SpeechSynthesisUtterance(text);
    if (this.selectedVoice) utter.voice = this.selectedVoice;
    utter.rate = this.ttsSpeed;

    const card = document.getElementById(`concept-square-${prop.num}`);
    utter.onstart = () => {
      card?.classList.add("speaking-card-active");
      this.app?.dynamicIsland?.setMicPrivacy?.(true);
    };
    utter.onend = () => {
      card?.classList.remove("speaking-card-active");
      this.app?.dynamicIsland?.setMicPrivacy?.(false);
    };
    utter.onerror = () => {
      card?.classList.remove("speaking-card-active");
      this.app?.dynamicIsland?.setMicPrivacy?.(false);
    };

    window.speechSynthesis.speak(utter);
  }

  stopAudio() {
    this.ttsPlaying = false;
    this.app?.dynamicIsland?.setMicPrivacy?.(false);
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    const playBtn = document.getElementById("btn-tts-play");
    const playIcon = document.getElementById("tts-icon");
    const playLabel = document.getElementById("tts-label");
    if (playBtn) playBtn.classList.remove("playing");
    if (playIcon) playIcon.innerHTML = UI_SVG.play;
    if (playLabel) playLabel.textContent = "Listen";
    document.querySelectorAll(".speaking-card-active").forEach(el => el.classList.remove("speaking-card-active"));
  }

  updateFlashcardProgress() {
    if (!this.currentTopic || !this.currentTopic.properties) return;
    const total = this.currentTopic.properties.length;
    const mastered = this.masteredCards.size;
    const pill = document.getElementById("flashcard-progress-pill");
    if (pill) {
      pill.textContent = `Mastered: ${mastered} / ${total}`;
    }
  }

  renderFlashcards(topic, container) {
    container.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "flashcards-mode-grid";

    const headerStrip = document.createElement("div");
    headerStrip.style.cssText = "grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: center; padding: 6px 4px 12px;";
    headerStrip.innerHTML = `
      <span style="font-size: 0.88rem; font-weight: 700; color: #a5f3fc;"><svg class="ui-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1.5" y="4.8" width="13" height="9.2" rx="1.2"/><path d="M10.5 14V3.2a1.2 1.2 0 0 0-1.2-1.2H6.7a1.2 1.2 0 0 0-1.2 1.2V14"/></svg> Interactive 3D Study Flashcards (Tap card to flip)</span>
      <span id="flashcard-progress-pill" style="font-size: 0.78rem; font-weight: 800; padding: 4px 12px; background: rgba(16, 185, 129, 0.2); border: 1px solid #10b981; border-radius: 999px; color: #6ee7b7;">
        Mastered: ${this.masteredCards.size} / ${(topic.properties || []).length}
      </span>
    `;
    container.appendChild(headerStrip);

    topic.properties.forEach(prop => {
      const card = document.createElement("div");
      card.className = "flashcard-card";
      card.id = `concept-square-${prop.num}`;
      card.dataset.sq = prop.num;

      const isMastered = this.masteredCards.has(String(prop.num));
      if (isMastered) card.style.borderColor = "#10b981";

      card.innerHTML = `
        <div class="flashcard-inner">
          <!-- FRONT OF FLASHCARD -->
          <div class="flashcard-front">
            <span class="prop-number-tag">CONCEPT SQUARE #${prop.num}</span>
            <div style="display:flex;justify-content:center;margin:16px 0;">${UI_SVG.microscope}</div>
            <h3 style="font-size: 1.35rem; color: #fff; font-weight: 800; font-family: var(--font-display);">${prop.name}</h3>
            <span class="prop-formula-box" style="margin: 10px 0;">${prop.formula}</span>
            <span style="font-size: 0.76rem; color: rgba(255, 255, 255, 0.6); margin-top: auto;">Tap card to flip definition</span>
          </div>

          <!-- BACK OF FLASHCARD -->
          <div class="flashcard-back">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="prop-number-tag">#${prop.num} DEFINITION</span>
                <button class="prop-tts-btn" data-sq="${prop.num}" title="Hear definition">${UI_SVG.volume}</button>
              </div>
              <h4 style="font-size: 1.1rem; color: #38bdf8; margin-bottom: 8px;">${prop.name}</h4>
              ${prop.image ? `<div style="text-align: center; margin: 6px 0;"><img src="${prop.image}" alt="${prop.name}" style="max-height: 80px; max-width: 100%; border-radius: 6px; object-fit: contain; border: 1px solid rgba(255,255,255,0.25);" /></div>` : ""}
              <p style="font-size: 0.88rem; line-height: 1.5; color: #e2e8f0; margin-bottom: 12px;">${prop.explanation}</p>
              ${prop.example ? `<div style="font-size: 0.82rem; background: rgba(6, 182, 212, 0.15); padding: 8px 12px; border-radius: 8px; border-left: 2px solid #06b6d4; margin-bottom: 8px;"><strong>Observation:</strong> ${prop.example}</div>` : ""}
            </div>
            <div class="flashcard-review-bar">
              <button class="fc-btn review">Review Later</button>
              <button class="fc-btn mastered">Mastered</button>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    container.appendChild(grid);
  }
}

// BUBBLE CASCADE ENGINE (DEPRECATED & DORMANT FOR ZERO-LAG)
class BubbleCascadeEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.bubbles = [];
    this.sparkles = [];
  }
  resize() {}
  spawnPreBubble() {}
  startCascade() {}
  handleClick() {}
  popBubble() {}
  startMagicalBurst(cb) { if (typeof cb === "function") cb(); }
  animate() {}
  destroy() {
    this.bubbles = [];
    this.sparkles = [];
  }
}

// MAIN SCIENCE.IO APP
class ScienceIoApp {
  constructor() {
    this.readingSuite = new ReadingEnhancementSuite(this);
    // 1. Initialize with published notes from published_notes.js if available, or DEFAULT_SCIENCE_TOPICS
    let initialNotes = DEFAULT_SCIENCE_TOPICS;
    if (window.SCIENCE_IO_PUBLISHED_NOTES && Array.isArray(window.SCIENCE_IO_PUBLISHED_NOTES) && window.SCIENCE_IO_PUBLISHED_NOTES.length > 0) {
      initialNotes = window.SCIENCE_IO_PUBLISHED_NOTES;
    }
    this.notes = JSON.parse(JSON.stringify(initialNotes));
    this.activeFilter = "all";
    this.searchQuery = "";
    this.activeView = "carousel"; // 'carousel' or 'table'
    this.carouselIndex = 0;
    this.confetti = null;
    this.currentModalTopic = null;
    let savedDbId = localStorage.getItem("scienceio_cloud_id");
    if (!savedDbId || savedDbId === "bbaffcc" || savedDbId.length !== 32) {
      savedDbId = DEFAULT_CLOUD_DB_ID;
      localStorage.setItem("scienceio_cloud_id", DEFAULT_CLOUD_DB_ID);
    }
    this.cloudDbId = savedDbId;
    this.hasUnpublishedChanges = false;
    const savedSupaUrl = localStorage.getItem("scienceio_supabase_url");
    const savedSupaKey = localStorage.getItem("scienceio_supabase_key");
    this.supabaseUrl = (savedSupaUrl && savedSupaUrl.trim()) ? savedSupaUrl.trim() : DEFAULT_SUPABASE_URL;
    this.supabaseKey = (savedSupaKey && savedSupaKey.trim()) ? savedSupaKey.trim() : DEFAULT_SUPABASE_KEY;
    this.firebaseApp = null;
    this.firestore = null;
    this.firestoreUnsubscribe = null;
    this.supabase = null;
    this.supabaseChannel = null;
    this.activeSimAnimId = null;
    this.moonOrbitAnimId = null;
    this.currentLabType = null;
    this.vault = new VaultController(this);
    this.calculator = new LiquidGlassCalculator(this);

    this.init();
  }

  initFirebase() {
    let config = null;
    const savedConfig = localStorage.getItem("scienceio_firebase_config");
    if (savedConfig) {
      try {
        config = JSON.parse(savedConfig);
      } catch (e) {}
    }
    if (!config && typeof DEFAULT_FIREBASE_CONFIG !== "undefined" && DEFAULT_FIREBASE_CONFIG.apiKey) {
      config = DEFAULT_FIREBASE_CONFIG;
    }
    if (!config) return false;
    try {
      if (window.firebase && config && (config.apiKey || config.projectId)) {
        if (!firebase.apps || !firebase.apps.length) {
          this.firebaseApp = firebase.initializeApp(config);
        } else {
          this.firebaseApp = firebase.app();
        }
        this.firestore = firebase.firestore();
        this.setupFirestoreRealtime();
        return true;
      }
    } catch (err) {
      console.warn("Firebase initialization notice:", err);
    }
    return false;
  }

  setupFirestoreRealtime() {
    if (!this.firestore) return;
    try {
      if (typeof this.firestoreUnsubscribe === "function") {
        this.firestoreUnsubscribe();
      }
      this.firestoreUnsubscribe = this.firestore
        .collection("science_notes")
        .doc("curriculum")
        .onSnapshot((doc) => {
          if (doc.exists) {
            const data = doc.data();
            if (data && Array.isArray(data.notes)) {
              this.handleRemoteNotesUpdate(data.notes, "Firebase");
            }
            if (data && data.musicConfig) {
              bgMusic.handleRemoteMusicUpdate(data.musicConfig);
            }
          }
        }, (err) => {
          console.warn("Firestore Realtime notice:", err);
        });
    } catch (e) {
      console.warn("Firestore Realtime error:", e);
    }
  }

  initSupabase() {
    const savedSupaUrl = localStorage.getItem("scienceio_supabase_url");
    const savedSupaKey = localStorage.getItem("scienceio_supabase_key");
    this.supabaseUrl = (savedSupaUrl && savedSupaUrl.trim()) ? savedSupaUrl.trim() : DEFAULT_SUPABASE_URL;
    this.supabaseKey = (savedSupaKey && savedSupaKey.trim()) ? savedSupaKey.trim() : DEFAULT_SUPABASE_KEY;
    if (window.supabase && this.supabaseUrl && this.supabaseKey) {
      try {
        this.supabase = window.supabase.createClient(this.supabaseUrl, this.supabaseKey);
        this.setupSupabaseRealtime();
        return true;
      } catch (err) {
        console.warn("Supabase initialization notice:", err);
      }
    }
    return false;
  }

  handleRemoteNotesUpdate(incomingNotes, source = "Database") {
    if (!Array.isArray(incomingNotes) || incomingNotes.length === 0) return;
    const incomingJson = JSON.stringify(incomingNotes);
    const currentJson = JSON.stringify(this.notes);
    if (incomingJson !== currentJson) {
      this.notes = ensurePlantCellUnit(incomingNotes);
      localStorage.setItem("scienceio_notes_v7", incomingJson);
      this.render();
      if (this.vault && typeof this.vault.updateManagerTable === "function") {
        this.vault.updateManagerTable();
      }
      if (this.vault && typeof this.vault.updateTelemetry === "function") {
        this.vault.updateTelemetry();
      }
      const cloudDot = document.getElementById("cloud-status-dot");
      const cloudText = document.getElementById("cloud-status-text");
      if (cloudDot) cloudDot.style.background = (source === "Firebase" ? "#f59e0b" : "#10b981");
      if (cloudText) cloudText.textContent = `${source} Live`;
    }
  }

  setupSupabaseRealtime() {
    if (!this.supabase) return;
    try {
      if (this.supabaseChannel) {
        this.supabase.removeChannel(this.supabaseChannel);
      }
      this.supabaseChannel = this.supabase
        .channel('public:science_notes')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'science_notes' }, (payload) => {
          if (payload.new && Array.isArray(payload.new.notes)) {
            this.handleRemoteNotesUpdate(payload.new.notes, "Supabase");
          }
        })
        .on('broadcast', { event: 'sync' }, (payload) => {
          if (payload.payload && Array.isArray(payload.payload.notes)) {
            this.handleRemoteNotesUpdate(payload.payload.notes, "Supabase");
          }
        })
        .subscribe((status) => {
          console.log("Supabase Realtime status:", status);
        });
    } catch (e) {
      console.warn("Supabase Realtime notice:", e);
    }
  }

  async init() {
    this.setupConfetti();
    this.setupLoadingScreen();

    // 0. Initialize Cloud Real-Time Clients (Firebase primary, Supabase fallback)
    this.initFirebase();
    this.initSupabase();

    // 1. Load cached notes from localStorage FIRST so notes are ready before rendering UI
    this.loadCachedNotes();

    // 2. Setup carousel and table views
    this.setupCarouselTrack();
    this.setupCarouselDrag();
    this.setupTableView();
    this.setupHolographic3DCardTilt();
    this.vault.init();
    this.setupEventListeners();
    this.setupHeroSnowAndStars();
    this.setupHeroHeadlineRotator();
    this.setupMeSkiencePortfolio();
    this.setupPublishSystem();
    this.readingSuite.init();
    if (this.calculator) this.calculator.init();
    this.setupMonochromeProSystem();

    // 3. Fetch fresh notes from Cloud Database asynchronously in background
    await this.fetchCloudNotes();

    // 4. Cross-Device Live Sync: auto-sync when user opens or switches back to tab
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.fetchCloudNotes(true);
      }
    });
    window.addEventListener("focus", () => {
      this.fetchCloudNotes(true);
    });

    // 5. Quiet background sync fallback (Supabase Realtime WebSocket handles instant live pushes)
    setInterval(() => {
      if (!this.hasUnpublishedChanges && document.visibilityState === "visible") {
        this.fetchCloudNotes(true);
      }
    }, 30000);
  }

  // Persistent storage via localStorage & cloud fallback
  loadCachedNotes() {
    const baseNotes = (window.SCIENCE_IO_PUBLISHED_NOTES && Array.isArray(window.SCIENCE_IO_PUBLISHED_NOTES) && window.SCIENCE_IO_PUBLISHED_NOTES.length > 0)
      ? window.SCIENCE_IO_PUBLISHED_NOTES
      : DEFAULT_SCIENCE_TOPICS;

    const saved = localStorage.getItem("scienceio_notes_v7");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const merged = [...parsed];
          baseNotes.forEach(bn => {
            const existing = merged.find(n => n.id === bn.id);
            if (existing) {
              existing.properties = bn.properties;
              existing.description = bn.description;
              existing.coreFormula = bn.coreFormula;
              if (bn.quiz) existing.quiz = bn.quiz;
            } else {
              merged.push(bn);
            }
          });
          this.notes = ensurePlantCellUnit(merged);
          localStorage.setItem("scienceio_notes_v7", JSON.stringify(this.notes));
          this.render();
          return;
        }
      } catch (e) {}
    }

    this.notes = ensurePlantCellUnit(JSON.parse(JSON.stringify(baseNotes)));
    localStorage.setItem("scienceio_notes_v7", JSON.stringify(this.notes));
    this.render();
  }

  saveNotes() {
    this.notes = ensurePlantCellUnit(this.notes);
    localStorage.setItem("scienceio_notes_v7", JSON.stringify(this.notes));
    this.hasUnpublishedChanges = true;
    this.updatePublishBadge();
  }

// DATABASE SYNC & "PUBLISH ALL NOTES"
  async fetchCloudNotes(silent = false) {
    const cloudDot = document.getElementById("cloud-status-dot");
    const cloudText = document.getElementById("cloud-status-text");

    let loadedNotes = null;

    // 0. Primary: Firebase Firestore Document Fetch
    if (this.firestore) {
      try {
        const doc = await this.firestore.collection('science_notes').doc('curriculum').get();
        if (doc.exists) {
          const data = doc.data();
          if (data && Array.isArray(data.notes) && data.notes.length > 0) {
            loadedNotes = data.notes;
          }
          if (data && data.musicConfig) {
            bgMusic.handleRemoteMusicUpdate(data.musicConfig);
          }
        }
      } catch (err) {
        console.warn("Firestore fetch notice:", err);
      }
    }

    // 1. Fallback: Supabase Real-Time Client Fetch
    if (!loadedNotes && this.supabase) {
      try {
        const { data, error } = await this.supabase
          .from('science_notes')
          .select('notes')
          .eq('id', 'curriculum')
          .single();
        if (data && Array.isArray(data.notes) && data.notes.length > 0) {
          loadedNotes = data.notes;
        }
      } catch (err) {
        console.warn("Supabase fetch notice:", err);
      }
    }

    // 1. Secondary: load from live Vercel Cloud Sync API (works on localhost, 127.0.0.1, file://, and web)
    if (!loadedNotes) {
      try {
        const syncRes = await fetch(CLOUD_SYNC_URL + "?t=" + Date.now(), {
          cache: "no-store",
          headers: { "Accept": "application/json" }
        });
        if (syncRes.ok) {
          const syncData = await syncRes.json();
          if (syncData && Array.isArray(syncData.notes) && syncData.notes.length > 0) {
            loadedNotes = syncData.notes;
          } else if (Array.isArray(syncData) && syncData.length > 0) {
            loadedNotes = syncData;
          }
        }
      } catch (err) {}
    }

    // 2. Tertiary fallback: direct extendsclass cloud bin
    if (!loadedNotes) {
      try {
        const res = await fetch("https://extendsclass.com/api/json-storage/bin/bbaffcc?t=" + Date.now(), {
          method: "GET",
          headers: { "Accept": "application/json" }
        });
        if (res.ok) {
          const cloudData = await res.json();
          if (cloudData && Array.isArray(cloudData.notes) && cloudData.notes.length > 0) {
            loadedNotes = cloudData.notes;
          }
        }
      } catch (err) {}
    }

    // 3. Quaternary fallback: live GitHub Gist
    if (!loadedNotes) {
      try {
        const gistRes = await fetch("https://api.github.com/gists/f510a4bebd324971611e496799b913ff?t=" + Date.now());
        if (gistRes.ok) {
          const gistData = await gistRes.json();
          if (gistData.files && gistData.files["published_notes.json"]) {
            const parsedGist = JSON.parse(gistData.files["published_notes.json"].content);
            if (Array.isArray(parsedGist) && parsedGist.length > 0) {
              loadedNotes = parsedGist;
            }
          }
        }
      } catch (err) {}
    }

    if (loadedNotes && loadedNotes.length > 0) {
      // If user is actively typing / modifying on THIS device without having published, don't overwrite local work
      if (this.hasUnpublishedChanges) {
        return true;
      }

      const incomingNotes = ensurePlantCellUnit(loadedNotes);
      const incomingJson = JSON.stringify(incomingNotes);
      const currentJson = JSON.stringify(this.notes);

      if (incomingJson !== currentJson) {
        this.notes = incomingNotes;
        localStorage.setItem("scienceio_notes_v7", incomingJson);
        this.render();
        if (this.vault && typeof this.vault.updateManagerTable === "function") {
          this.vault.updateManagerTable();
        }
        if (this.vault && typeof this.vault.updateTelemetry === "function") {
          this.vault.updateTelemetry();
        }
      }

      if (cloudDot) cloudDot.className = "cloud-dot";
      if (cloudText) cloudText.textContent = "Database Live";
      this.updatePublishBadge();
      return true;
    }

    return true;
  }

  async publishAllNotes(fromVault = false, customMessage = "") {
    const publishBtns = [
      document.getElementById("btn-vault-publish-cloud"),
      document.getElementById("btn-manager-publish"),
      document.getElementById("cmd-btn-quick-publish"),
      document.getElementById("btn-do-publish-now")
    ].filter(Boolean);

    publishBtns.forEach(btn => {
      btn.disabled = true;
      btn.dataset.prevHtml = btn.innerHTML;
      btn.innerHTML = `<span>Publishing ${this.notes.length} Unit(s)...</span>`;
    });

    let publishedSuccessfully = false;
    let publishError = null;

    // 0. Primary: Firebase Firestore Upsert
    if (this.firestore) {
      try {
        await this.firestore.collection('science_notes').doc('curriculum').set({
          id: 'curriculum',
          notes: this.notes,
          musicConfig: bgMusic.getMusicConfig(),
          updated_at: new Date().toISOString()
        }, { merge: true });
        publishedSuccessfully = true;
      } catch (err) {
        publishError = err.message;
        console.warn("Firestore publish notice:", err);
      }
    }

    // 1. Fallback: Supabase Real-Time Client Upsert
    if (!publishedSuccessfully && this.supabase) {
      try {
        const { error } = await this.supabase
          .from('science_notes')
          .upsert({
            id: 'curriculum',
            notes: this.notes,
            updated_at: new Date().toISOString()
          });
        if (!error) {
          publishedSuccessfully = true;
          try {
            if (this.supabaseChannel) {
              this.supabaseChannel.send({
                type: 'broadcast',
                event: 'sync',
                payload: { notes: this.notes }
              });
            }
          } catch (bErr) {
            console.warn("Supabase broadcast notice:", bErr);
          }
        } else {
          publishError = error.message;
        }
      } catch (err) {
        publishError = err.message;
        console.warn("Supabase upsert notice:", err);
      }
    }

    // 1. Secondary: Serverless Cloud Sync API (works across ALL environments: localhost, live web, mobile)
    if (!publishedSuccessfully) {
      try {
        const syncRes = await fetch(CLOUD_SYNC_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ notes: this.notes })
        });
        if (syncRes.ok) {
          const json = await syncRes.json();
          if (json && json.success) {
            publishedSuccessfully = true;
          }
        } else {
          publishError = `HTTP ${syncRes.status}`;
        }
      } catch (e) {
        publishError = e.message;
        console.warn("Primary Serverless sync notice:", e);
      }
    }

    // 2. Secondary fallback: Direct cloud PUT to extendsclass if cloud sync is unreachable
    if (!publishedSuccessfully) {
      try {
        const cloudPayload = {
          app: "science.io",
          version: "3.5.0",
          updatedAt: new Date().toISOString(),
          notes: this.notes
        };
        const ecRes = await fetch("https://extendsclass.com/api/json-storage/bin/bbaffcc", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cloudPayload)
        });
        if (ecRes.ok) {
          publishedSuccessfully = true;
        }
      } catch (e) {
        console.warn("Extendsclass fallback notice:", e);
      }
    }

    // Always update local cache
    this.notes = ensurePlantCellUnit(this.notes);
    const currentNotesJson = JSON.stringify(this.notes);
    localStorage.setItem("scienceio_notes_v7", currentNotesJson);
    this.hasUnpublishedChanges = false;
    this.updatePublishBadge();

    publishBtns.forEach(btn => {
      btn.disabled = false;
      btn.innerHTML = btn.dataset.prevHtml || `<span>Publish All Notes to Cloud</span>`;
    });

    const cloudDot = document.getElementById("cloud-status-dot");
    const cloudText = document.getElementById("cloud-status-text");

    if (publishedSuccessfully) {
      if (cloudDot) cloudDot.className = "cloud-dot";
      if (cloudText) cloudText.textContent = "Database Live";
      sounds.playSuccess();
      this.confetti?.burst(window.innerWidth / 2, window.innerHeight / 2, 85);

      const msg = customMessage || `SUCCESS! All ${this.notes.length} note unit(s) were published live!\n\n• Live across all devices (Desktop, Mobile, Tablet).\n• 100% Free Forever • Zero API Token Usage.`;
      alert(msg);
    } else {
      if (cloudDot) cloudDot.className = "cloud-dot error";
      if (cloudText) cloudText.textContent = "Sync Offline";
      alert(`Could not sync to live Cloud Database (${publishError || "Network Offline"}).\nChanges saved locally on this device.`);
    }

    this.updatePublishModalInfo();
    return publishedSuccessfully;
  }

  updatePublishBadge() {
    const badge = document.getElementById("nav-publish-count");
    const cloudDot = document.getElementById("cloud-status-dot");
    const cloudText = document.getElementById("cloud-status-text");

    if (badge) {
      if (this.hasUnpublishedChanges) {
        badge.style.display = "inline-block";
        badge.textContent = "Pending";
      } else {
        badge.style.display = "none";
      }
    }

    if (this.hasUnpublishedChanges && cloudDot && cloudText) {
      cloudDot.className = "cloud-dot pending";
      cloudText.textContent = "Unpublished";
    }
  }

  setupPublishSystem() {
    // Vault Header Publish Button
    document.getElementById("btn-vault-publish-cloud")?.addEventListener("click", () => {
      sounds.playClick();
      this.publishAllNotes();
    });


    // Manager tab publish button
    document.getElementById("btn-manager-publish")?.addEventListener("click", () => {
      sounds.playClick();
      this.publishAllNotes();
    });

    // Modal internal publish action
    document.getElementById("btn-do-publish-now")?.addEventListener("click", () => {
      this.publishAllNotes();
    });

    // Modal pull from cloud action
    document.getElementById("btn-pull-cloud-now")?.addEventListener("click", async () => {
      sounds.playClick();
      const btn = document.getElementById("btn-pull-cloud-now");
      if (btn) btn.textContent = "Pulling from cloud...";
      await this.fetchCloudNotes();
      sounds.playSuccess();
      if (btn) btn.textContent = "Pull Latest Notes from Cloud";
      alert("Notes refreshed from Cloud Database!");
    });

    // Close publish modal
    document.getElementById("modal-publish-close")?.addEventListener("click", () => {
      document.getElementById("publish-modal")?.classList.add("hidden");
    });

    // Update custom cloud DB ID
    document.getElementById("btn-update-cloud-id")?.addEventListener("click", () => {
      const input = document.getElementById("publish-cloud-id-input");
      if (input && input.value.trim()) {
        this.cloudDbId = input.value.trim();
        localStorage.setItem("scienceio_cloud_id", this.cloudDbId);
        sounds.playSuccess();
        alert(`Cloud Database ID updated to: ${this.cloudDbId}`);
        this.fetchCloudNotes();
      }
    });

    // Firebase Configuration UI
    const fbConfigInput = document.getElementById("firebase-config-input");
    const fbBadge = document.getElementById("firebase-status-badge");
    const savedFbConfig = localStorage.getItem("scienceio_firebase_config");

    if (fbConfigInput) {
      if (savedFbConfig) {
        try {
          fbConfigInput.value = JSON.stringify(JSON.parse(savedFbConfig), null, 2);
        } catch (e) {
          fbConfigInput.value = savedFbConfig;
        }
      } else if (typeof DEFAULT_FIREBASE_CONFIG !== "undefined") {
        fbConfigInput.value = JSON.stringify(DEFAULT_FIREBASE_CONFIG, null, 2);
      }
    }
    if (fbBadge) {
      if (this.firestore) {
        fbBadge.textContent = "Connected & Live";
        fbBadge.style.background = "rgba(245, 158, 11, 0.25)";
        fbBadge.style.color = "#fcd34d";
      } else {
        fbBadge.textContent = "Not Configured";
        fbBadge.style.background = "rgba(255,255,255,0.1)";
        fbBadge.style.color = "#aaa";
      }
    }

    document.getElementById("btn-save-firebase-config")?.addEventListener("click", async () => {
      const rawText = fbConfigInput ? fbConfigInput.value.trim() : "";
      if (!rawText) {
        alert("Please paste your Firebase configuration object or JSON.");
        return;
      }

      let parsedConfig = null;
      try {
        parsedConfig = JSON.parse(rawText);
      } catch (e) {
        // Try extracting object if pasted as JS: const firebaseConfig = { ... };
        try {
          const match = rawText.match(/\{[\s\S]*\}/);
          if (match) {
            const sanitized = match[0]
              .replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":')
              .replace(/'/g, '"')
              .replace(/,\s*([}\]])/g, '$1');
            parsedConfig = JSON.parse(sanitized);
          }
        } catch (err2) {
          try {
            parsedConfig = new Function(`return (${rawText.replace(/^const\s+[a-zA-Z0-9_]+\s*=\s*/, '').replace(/;*$/, '')})`)();
          } catch (err3) {
            console.warn("Failed to parse config:", err3);
          }
        }
      }

      if (!parsedConfig || typeof parsedConfig !== "object" || (!parsedConfig.apiKey && !parsedConfig.projectId)) {
        alert("Could not parse a valid Firebase configuration. Please ensure it contains 'apiKey' and 'projectId'.");
        return;
      }

      localStorage.setItem("scienceio_firebase_config", JSON.stringify(parsedConfig));
      const success = this.initFirebase();
      if (success) {
        if (fbBadge) {
          fbBadge.textContent = "Connected & Live";
          fbBadge.style.background = "rgba(245, 158, 11, 0.25)";
          fbBadge.style.color = "#fcd34d";
        }
        sounds.playSuccess();
        alert("Firebase successfully connected! Syncing current notes now...");
        await this.publishAllNotes(true, "All notes synced to Firebase Firestore database in real-time!");
      } else {
        alert("Failed to initialize Firebase. Please check your config parameters.");
      }
    });

    // Supabase Configuration UI
    const supaUrlInput = document.getElementById("supabase-url-input");
    const supaKeyInput = document.getElementById("supabase-key-input");
    const supaBadge = document.getElementById("supabase-status-badge");

    if (supaUrlInput) supaUrlInput.value = this.supabaseUrl || DEFAULT_SUPABASE_URL;
    if (supaKeyInput) supaKeyInput.value = this.supabaseKey || DEFAULT_SUPABASE_KEY;
    if (supaBadge) {
      if (this.supabase) {
        supaBadge.textContent = "Connected & Live";
        supaBadge.style.background = "rgba(16, 185, 129, 0.25)";
        supaBadge.style.color = "#6ee7b7";
      } else {
        supaBadge.textContent = "Not Configured";
        supaBadge.style.background = "rgba(255,255,255,0.1)";
        supaBadge.style.color = "#aaa";
      }
    }

    document.getElementById("btn-save-supabase-config")?.addEventListener("click", async () => {
      const url = supaUrlInput ? supaUrlInput.value.trim() : "";
      const key = supaKeyInput ? supaKeyInput.value.trim() : "";
      if (!url || !key) {
        alert("Please enter both your Supabase Project URL and Anon Key.");
        return;
      }
      this.supabaseUrl = url;
      this.supabaseKey = key;
      localStorage.setItem("scienceio_supabase_url", url);
      localStorage.setItem("scienceio_supabase_key", key);

      const success = this.initSupabase();
      if (success) {
        if (supaBadge) {
          supaBadge.textContent = "Connected & Live";
          supaBadge.style.background = "rgba(16, 185, 129, 0.25)";
          supaBadge.style.color = "#6ee7b7";
        }
        sounds.playSuccess();
        alert("Supabase successfully connected! Syncing current notes now...");
        await this.publishAllNotes(true, "All notes synced to Supabase database in real-time!");
      } else {
        alert("Failed to initialize Supabase. Please check your URL and Key.");
      }
    });

    // Download database.json
    document.getElementById("btn-download-db-json")?.addEventListener("click", () => {
      const payload = {
        appName: "science.io",
        version: "2.0.0",
        updatedAt: new Date().toISOString(),
        cloudDbId: this.cloudDbId,
        notes: this.notes
      };
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
      const a = document.createElement("a");
      a.href = dataStr;
      a.download = "database.json";
      a.click();
      sounds.playClick();
    });
  }

  openPublishModal() {
    const modal = document.getElementById("publish-modal");
    if (!modal) return;
    this.updatePublishModalInfo();
    modal.classList.remove("hidden");
  }

  updatePublishModalInfo() {
    const summary = document.getElementById("publish-notes-count-summary");
    if (summary) {
      summary.textContent = `${this.notes.length} Note${this.notes.length === 1 ? "" : "s"} Ready`;
    }

    const idInput = document.getElementById("publish-cloud-id-input");
    if (idInput) {
      idInput.value = this.cloudDbId;
    }
  }

  setupConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    this.confetti = new ConfettiEngine(canvas);
  }

// SKIENCE QUANTUM LETTER ZOOM-OUT OPENING CONTROLLER
  setupLoadingScreen() {
    const loader = document.getElementById("loader-screen");
    if (loader) {
      loader.style.display = "none";
    }
    const svg = document.getElementById("cursive-logo-svg");
    if (svg) {
      svg.classList.add("cursive-complete");
    }
    const spark = document.getElementById("cursive-spark");
    if (spark) {
      spark.style.opacity = "0";
    }
    return;
    const soloStage = document.getElementById("solo-letter-stage");
    const soloLetter = document.getElementById("solo-zoom-letter");
    const aperture = document.getElementById("quantum-aperture-core");
    const pulseRing = document.getElementById("quantum-pulse-ring");
    const pulseRing2 = document.getElementById("quantum-pulse-ring-2");
    const skipBtn = document.getElementById("loader-skip-btn");
    const warpCanvas = document.getElementById("loader-warp-canvas");
    const halo = document.getElementById("solo-letter-halo");
    const badgeIcon = document.getElementById("solo-badge-icon");
    const badgeText = document.getElementById("solo-badge-text");
    const badge = document.getElementById("solo-science-badge");
    const hudState = document.getElementById("hud-status-state");
    const hudWarp = document.getElementById("hud-warp-speed");
    const hudDiscipline = document.getElementById("hud-discipline-tag");

    // Clear any pending animation timers
    if (this._zoomTimers) {
      this._zoomTimers.forEach((t) => clearTimeout(t));
    }
    this._zoomTimers = [];

    if (this._warpAnimId) {
      cancelAnimationFrame(this._warpAnimId);
      this._warpAnimId = null;
    }

    // Reset visibility & classes
    if (soloStage) soloStage.style.display = "";
    if (soloLetter) {
      soloLetter.textContent = "s";
      soloLetter.setAttribute("data-theme", "s");
      soloLetter.classList.remove("zooming-out");
    }
    if (aperture) {
      aperture.classList.remove("portal-warp");
    }
    if (pulseRing) {
      pulseRing.classList.remove("pulse-active");
    }
    if (pulseRing2) {
      pulseRing2.classList.remove("pulse-active");
    }
    const postResolve = document.getElementById("skience-post-resolve");
    if (postResolve) {
      postResolve.classList.add("hidden");
      postResolve.classList.remove("resolve-active");
    }

    // 60FPS Quantum Warp Speed & Particle Shockwave Engine
    let warpRunning = true;
    let warpStars = [];
    let shockwaveParticles = [];

    if (warpCanvas) {
      const resizeWarpCanvas = () => {
        warpCanvas.width = window.innerWidth;
        warpCanvas.height = window.innerHeight;
      };
      resizeWarpCanvas();

      // Initialize 90 3D warp stars
      const numStars = 90;
      warpStars = [];
      for (let i = 0; i < numStars; i++) {
        warpStars.push({
          x: (Math.random() - 0.5) * window.innerWidth * 2,
          y: (Math.random() - 0.5) * window.innerHeight * 2,
          z: Math.random() * 1000 + 10,
          pz: 1000,
          color: ["#00f5d4", "#818cf8", "#38bdf8", "#c084fc", "#ffffff"][Math.floor(Math.random() * 5)]
        });
      }

      const ctx = warpCanvas.getContext("2d");
      let cx = window.innerWidth / 2;
      let cy = window.innerHeight / 2;

      const runWarpLoop = () => {
        if (!warpRunning) return;
        cx = warpCanvas.width / 2;
        cy = warpCanvas.height / 2;

        ctx.clearRect(0, 0, warpCanvas.width, warpCanvas.height);

        // 1. Draw 3D hyperspace warp stars
        for (let i = 0; i < warpStars.length; i++) {
          const s = warpStars[i];
          s.pz = s.z;
          s.z -= 18; // Warp flight velocity
          if (s.z <= 0) {
            s.x = (Math.random() - 0.5) * warpCanvas.width * 2;
            s.y = (Math.random() - 0.5) * warpCanvas.height * 2;
            s.z = 1000;
            s.pz = 1000;
          }

          const k = 280 / s.z;
          const px = s.x * k + cx;
          const py = s.y * k + cy;

          const pk = 280 / s.pz;
          const prevX = s.x * pk + cx;
          const prevY = s.y * pk + cy;

          if (px >= 0 && px <= warpCanvas.width && py >= 0 && py <= warpCanvas.height) {
            const alpha = Math.min(1, (1000 - s.z) / 500);
            ctx.strokeStyle = s.color;
            ctx.globalAlpha = alpha * 0.7;
            ctx.lineWidth = Math.min(3.5, (1000 - s.z) / 300);
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(px, py);
            ctx.stroke();
          }
        }

        // 2. Draw shockwave spark particles
        for (let i = shockwaveParticles.length - 1; i >= 0; i--) {
          const p = shockwaveParticles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.94;
          p.vy *= 0.94;
          p.alpha -= p.decay;

          if (p.alpha <= 0) {
            shockwaveParticles.splice(i, 1);
            continue;
          }

          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = 1;
        this._warpAnimId = requestAnimationFrame(runWarpLoop);
      };

      this._warpAnimId = requestAnimationFrame(runWarpLoop);
    }

    const burstParticles = (color, count = 35) => {
      if (!warpCanvas) return;
      const cx = warpCanvas.width / 2;
      const cy = warpCanvas.height / 2;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 3;
        shockwaveParticles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: color,
          alpha: 1,
          radius: Math.random() * 2.5 + 1.2,
          decay: Math.random() * 0.035 + 0.02
        });
      }
    };

    const supernovaBurst = () => {
      if (!warpCanvas) return;
      const cx = warpCanvas.width / 2;
      const cy = warpCanvas.height / 2;
      const colors = ["#00f5d4", "#ffb703", "#c084fc", "#10b981", "#38bdf8", "#f43f5e", "#ffffff"];
      for (let i = 0; i < 140; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 16 + 4;
        shockwaveParticles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          radius: Math.random() * 3.5 + 1.5,
          decay: Math.random() * 0.02 + 0.012
        });
      }
    };

    let finished = false;

    const completeLoader = () => {
      if (finished) return;
      finished = true;
      warpRunning = false;
      if (this._warpAnimId) {
        cancelAnimationFrame(this._warpAnimId);
        this._warpAnimId = null;
      }
      if (this._zoomTimers) {
        this._zoomTimers.forEach((t) => clearTimeout(t));
        this._zoomTimers = [];
      }

      if (aperture) aperture.classList.add("portal-warp");
      sounds.playMagicalReveal();

      setTimeout(() => {
        if (loader) {
          loader.classList.add("fade-out");
          setTimeout(() => {
            loader.style.display = "none";
            this.playCursiveHandwriting();
          }, 500);
        } else {
          this.playCursiveHandwriting();
        }
      }, 350);
    };

    if (skipBtn) {
      skipBtn.onclick = (e) => {
        e.stopPropagation();
        completeLoader();
      };
    }

    loader.onclick = (e) => {
      if (e.target !== skipBtn) {
        completeLoader();
      }
    };

    // Keyboard shortcut to skip intro (Space / Escape)
    const onKeyDown = (e) => {
      if (e.code === "Space" || e.code === "Escape") {
        window.removeEventListener("keydown", onKeyDown);
        completeLoader();
      }
    };
    window.addEventListener("keydown", onKeyDown, { once: true });

    // The sequence of letters with rich creative domains and chromatic gradients:
    const letterData = [
      { char: "s", theme: "s", icon: "atom", title: "QUANTUM STRUCTURE // ATOMS & MATTER", color: "#00f5d4" },
      { char: "k", theme: "k", icon: "bolt", title: "KINETIC DYNAMICS // ENERGY & FORCES", color: "#ffb703" },
      { char: "i", theme: "i", icon: "cosmos", title: "INTERSTELLAR COSMOS // ASTRONOMY", color: "#c084fc" },
      { char: "e", theme: "e1", icon: "sprout", title: "BIOSPHERE // ECOSYSTEMS & LIFE", color: "#10b981" },
      { char: "n", theme: "n", icon: "atom", title: "NEWTONIAN MOTION // GRAVITY LAWS", color: "#38bdf8" },
      { char: "c", theme: "c", icon: "flask", title: "MOLECULAR BONDS // CHEMICAL REACTIONS", color: "#f43f5e" },
      { char: "e", theme: "e2", icon: "planet", title: "PLANETARY SCIENCE // EARTH SYSTEMS", color: "#eab308" }
    ];

    const letterDurationMs = 380; // Crisp, zero-lag kinetic zoom timing

    const playNextLetter = (index) => {
      if (finished) return;

      if (index >= letterData.length) {
        // All individual letters completed! The letter 'e' has exploded into the singularity.
        // Climax: Trigger supernova shockwave burst & reveal full liquid glass "skience" word
        if (soloStage) soloStage.style.display = "none";

        const postResolve = document.getElementById("skience-post-resolve");
        if (postResolve) {
          postResolve.classList.remove("hidden");
          postResolve.classList.add("resolve-active");
        }

        supernovaBurst();
        sounds.playMagicalReveal();
        if (this.confetti) {
          this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 70);
        }

        if (hudState) hudState.textContent = "SYNCHRONIZATION COMPLETE";
        if (hudWarp) hudWarp.textContent = "WARP COLLAPSE 1.00c";

        // Display for comfortable 1100ms so branding & credit are vividly appreciated
        const finishTimer = setTimeout(() => {
          if (finished) return;
          completeLoader();
        }, 1100);
        this._zoomTimers.push(finishTimer);
        return;
      }

      const item = letterData[index];

      // Update and trigger the solo letter zooming into singularity and fading
      if (soloLetter) {
        soloLetter.textContent = item.char;
        soloLetter.setAttribute("data-theme", item.theme);
        // Hardware-accelerated animation restart
        soloLetter.classList.remove("zooming-out");
        void soloLetter.offsetWidth;
        soloLetter.classList.add("zooming-out");
      }

      // Update science subtitle badge under the letter
      if (badgeIcon) badgeIcon.textContent = item.icon;
      if (badgeText) badgeText.textContent = item.title;
      if (badge) {
        badge.style.borderColor = item.color;
        badge.style.boxShadow = `0 0 22px ${item.color}55`;
      }

      // Update halo glow behind letter
      if (halo) {
        halo.style.background = `radial-gradient(circle, ${item.color}55 0%, transparent 70%)`;
        halo.style.opacity = "1";
        setTimeout(() => { if (halo) halo.style.opacity = "0"; }, 280);
      }

      // Update Telemetry HUD
      if (hudState) hudState.textContent = `ACCELERATING // LETTER ${index + 1} OF 7`;
      if (hudWarp) hudWarp.textContent = `${(0.5 + index * 0.08).toFixed(2)}c`;
      if (hudDiscipline) hudDiscipline.textContent = item.title.split("//")[0].trim();

      // Trigger dual sonic shockwave ring ripples
      if (pulseRing) {
        pulseRing.classList.remove("pulse-active");
        void pulseRing.offsetWidth;
        pulseRing.classList.add("pulse-active");
      }
      if (pulseRing2) {
        pulseRing2.classList.remove("pulse-active");
        void pulseRing2.offsetWidth;
        pulseRing2.classList.add("pulse-active");
      }

      // Trigger quantum particle explosion in warp canvas matching letter theme
      burstParticles(item.color, 40);

      // Play punchy synthesizer chime for this letter
      sounds.playLetterZoom(index);

      // Schedule next letter
      const stepTimer = setTimeout(() => {
        if (finished) return;
        playNextLetter(index + 1);
      }, letterDurationMs);
      this._zoomTimers.push(stepTimer);
    };

    // Start with letter 0 ('s') after slight initial pause
    const startTimer = setTimeout(() => {
      playNextLetter(0);
    }, 100);
    this._zoomTimers.push(startTimer);
  }

  replayLoader() {
    const loader = document.getElementById("loader-screen");
    if (!loader) return;
    loader.style.display = "";
    loader.classList.remove("fade-out");
    this.setupLoadingScreen();
  }

// DIGITAL CURSIVE HANDWRITING ANIMATOR
  playCursiveHandwriting() {
    const svg = document.getElementById("cursive-logo-svg");
    if (!svg) return;
    svg.classList.add("cursive-complete");
    const spark = document.getElementById("cursive-spark");
    if (spark) {
      spark.style.opacity = "0";
    }
  }

// FILTERED NOTES
  getFilteredNotes() {
    return this.notes.filter((item) => {
      const matchCat =
        this.activeFilter === "all" ||
        (this.activeFilter === "custom" ? item.isCustom : item.category === this.activeFilter);

      const q = this.searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.coreFormula && item.coreFormula.toLowerCase().includes(q)) ||
        (item.properties && item.properties.some((p) => p.name.toLowerCase().includes(q) || p.explanation.toLowerCase().includes(q)));

      return matchCat && matchQuery;
    });
  }

// 3D COVERFLOW CAROUSEL
  setupCarouselTrack() {
    const track = document.getElementById("carousel-track");
    const dotsContainer = document.getElementById("carousel-dots");
    if (!track) return;

    const filtered = this.getFilteredNotes();
    track.innerHTML = "";

    // Empty state handling
    if (filtered.length === 0) {
      if (this.notes.length === 0) {
        // Welcoming Empty Notebook (No notes added yet)
        track.innerHTML = `
          <div class="empty-notebook-card">
            <div class="empty-notebook-icon">${UI_SVG.microscope}</div>
            <h3 class="empty-notebook-title">Your Skience Notebook is Ready!</h3>
            <p class="empty-notebook-desc">
              No notes have been published yet. Skience units and concept squares will appear here once published from the Vault.
            </p>
          </div>
        `;
      } else {
        // Search returned no results
        track.innerHTML = `
          <div style="text-align: center; color: var(--text-muted); padding: 40px;">
            <p style="font-size: 1.2rem; margin-bottom: 8px;">No skience notes found for "${this.searchQuery}"</p>
            <button class="hero-cta-btn" id="reset-search-btn" style="padding: 10px 20px; font-size: 0.85rem; margin: 12px auto 0;">Reset Filters</button>
          </div>
        `;
        const resetBtn = document.getElementById("reset-search-btn");
        if (resetBtn) {
          resetBtn.addEventListener("click", () => {
            this.searchQuery = "";
            this.activeFilter = "all";
            const input = document.getElementById("notes-search-input");
            if (input) input.value = "";
            document.querySelectorAll(".cat-pill").forEach((p) => p.classList.toggle("active", p.dataset.filter === "all"));
            this.render();
          });
        }
      }

      if (dotsContainer) dotsContainer.innerHTML = "";
      return;
    }

    if (this.carouselIndex >= filtered.length) {
      this.carouselIndex = 0;
    }

    filtered.forEach((topic, idx) => {
      const card = document.createElement("div");
      card.className = "deck-card";
      card.dataset.index = idx;
      card.dataset.id = topic.id;

      const glowClass = `glow-${topic.color || "cyan"}`;
      const sqCount = topic.properties ? topic.properties.length : 1;
      const hasBulletsOrLines = topic.coreFormula && (topic.coreFormula.includes('•') || topic.coreFormula.includes('\n'));
      const catDisplay = ((topic.category || "Skience").replace(/science|sk1ence/gi, 'Skience')).toUpperCase();

      card.innerHTML = `
        <div class="card-glow-layer ${glowClass}"></div>
        
        <div class="card-header-meta">
          <span class="card-cat-pill">${topic.grade || "5th Grade"} • ${catDisplay} • ${sqCount} SQUARES</span>
          <h3 class="card-topic-title">${formatBulletText(topic.title)}</h3>
        </div>

        <div class="card-preview-formula ${hasBulletsOrLines ? 'has-bullets' : ''}" title="${(topic.coreFormula || '').replace(/"/g, '&quot;')}">
          ${formatBulletText(topic.coreFormula)}
        </div>

        ${topic.properties && topic.properties.length > 0 ? `
          <div class="card-chips-rack">
            ${topic.properties.map((p, pIdx) => `
              <span class="organelle-chip" data-id="${topic.id}" data-sq="${p.num}" title="${p.formula}">
                ${p.num}. ${p.name.replace(/^\d+\.\s*/, '')}
              </span>
            `).join('')}
          </div>
        ` : ''}

        <div class="card-buttons-stack">
          <button class="card-action-btn primary-action btn-card-view" data-id="${topic.id}">
            VIEW NOTES (${sqCount} SQUARES)
          </button>
          <div class="card-dual-actions-row">
            <button class="card-action-btn btn-card-pdf" data-id="${topic.id}">
              SKIENCE SHEET
            </button>
            <button class="card-action-btn btn-card-quiz" data-id="${topic.id}">
              PRACTICE QUIZ
            </button>
          </div>
          ${topic.redirectUrl ? `
          <button class="card-action-btn btn-card-redirect" style="background: rgba(10, 132, 255, 0.4);" onclick="window.open('${topic.redirectUrl}', '_blank')">
            EXTERNAL LINK
          </button>` : ""}
        </div>
      `;

      card.addEventListener("click", (e) => {
        if (this._hasDragged) return;
        if (idx !== this.carouselIndex) {
          e.stopPropagation();
          this.carouselIndex = idx;
          sounds.playAsmrSlide();
          this.updateCarouselPositions();
          return;
        }
      });

      track.appendChild(card);
    });

    // Populate Dots
    if (dotsContainer) {
      dotsContainer.innerHTML = "";
      filtered.forEach((_, idx) => {
        const dot = document.createElement("div");
        dot.className = `dot-indicator ${idx === this.carouselIndex ? "active" : ""}`;
        dot.addEventListener("click", () => {
          this.carouselIndex = idx;
          sounds.playAsmrSlide();
          this.updateCarouselPositions();
        });
        dotsContainer.appendChild(dot);
      });
    }

    this.attachCardButtonListeners();
    this.updateCarouselPositions();
  }

  setupCarouselDrag() {
    const stage = document.querySelector(".carousel-stage-viewport");
    if (!stage) return;
    let startX = 0;
    let isDragging = false;
    this._hasDragged = false;

    stage.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button") || e.target.closest(".organelle-chip")) return;
      startX = e.clientX;
      isDragging = true;
      this._hasDragged = false;
    }, { passive: true });

    window.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      if (Math.abs(e.clientX - startX) > 10) {
        this._hasDragged = true;
      }
    }, { passive: true });

    window.addEventListener("pointerup", (e) => {
      if (!isDragging) return;
      isDragging = false;
      const diffX = e.clientX - startX;
      if (diffX > 40) {
        this.slidePrev();
      } else if (diffX < -40) {
        this.slideNext();
      }
      setTimeout(() => {
        this._hasDragged = false;
      }, 100);
    }, { passive: true });

    window.addEventListener("pointercancel", () => {
      isDragging = false;
      this._hasDragged = false;
    }, { passive: true });
  }

  slideNext() {
    const filtered = this.getFilteredNotes();
    if (filtered.length <= 1) return;
    this.carouselIndex = (this.carouselIndex + 1) % filtered.length;
    sounds.playAsmrSlide();
    this.updateCarouselPositions();
  }

  slidePrev() {
    const filtered = this.getFilteredNotes();
    if (filtered.length <= 1) return;
    this.carouselIndex = (this.carouselIndex - 1 + filtered.length) % filtered.length;
    sounds.playAsmrSlide();
    this.updateCarouselPositions();
  }

  updateCarouselPositions() {
    const cards = document.querySelectorAll(".deck-card");
    const dots = document.querySelectorAll(".dot-indicator");
    const n = cards.length;
    if (n === 0) return;

    cards.forEach((card) => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      const idx = parseInt(card.dataset.index, 10);
      card.classList.remove(
        "pos-center",
        "pos-left-1",
        "pos-left-2",
        "pos-right-1",
        "pos-right-2",
        "pos-hidden",
        "active-center",
        "left-card",
        "right-card"
      );
      card.style.transform = "";
      card.style.opacity = "";
      card.style.zIndex = "";

      let offset = idx - this.carouselIndex;
      // Seamless circular wrapping for infinite coverflow
      while (offset > n / 2) offset -= n;
      while (offset < -n / 2) offset += n;

      if (offset === 0) {
        card.classList.add("pos-center");
      } else if (offset === 1) {
        card.classList.add("pos-right-1");
      } else if (offset === -1) {
        card.classList.add("pos-left-1");
      } else if (offset === 2) {
        card.classList.add("pos-right-2");
      } else if (offset === -2) {
        card.classList.add("pos-left-2");
      } else {
        card.classList.add("pos-hidden");
      }
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === this.carouselIndex);
    });

    this.setupHolographic3DCardTilt();
  }

  setupHolographic3DCardTilt() {
    // Disabled in Full Performance Overhaul: stops continuous mousemove calculations & gyro style invalidations
    return;
    const attachTilt = (el, isCarousel = false) => {
      if (!el || el._hasTiltListener) return;
      el._hasTiltListener = true;

      let rect = null;
      let rafPending = false;
      let targetX = 0;
      let targetY = 0;

      const onMouseEnter = () => {
        rect = el.getBoundingClientRect();
      };

      const onMouseMove = (e) => {
        if (isCarousel && !el.classList.contains("pos-center")) return;
        if (!rect) rect = el.getBoundingClientRect();
        if (!rect || rect.width === 0 || rect.height === 0) return;

        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;

        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(() => {
            rafPending = false;
            if (!rect || rect.width === 0 || rect.height === 0) return;
            const percentX = (targetX / rect.width) * 100;
            const percentY = (targetY / rect.height) * 100;
            const tiltX = ((targetY / rect.height) - 0.5) * -16;
            const tiltY = ((targetX / rect.width) - 0.5) * 16;

            // Apple iOS Liquid Glass Optical Coordinates & Laser Edge Refraction
            const specularAngle = Math.atan2(targetY - (rect.height / 2), targetX - (rect.width / 2)) * (180 / Math.PI) + 180;

            el.style.setProperty("--mouse-x", `${percentX.toFixed(1)}%`);
            el.style.setProperty("--mouse-y", `${percentY.toFixed(1)}%`);
            el.style.setProperty("--specular-x", `${percentX.toFixed(1)}%`);
            el.style.setProperty("--specular-y", `${percentY.toFixed(1)}%`);
            el.style.setProperty("--specular-angle", `${specularAngle.toFixed(1)}deg`);
            el.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
            el.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
          });
        }
      };

      const onMouseLeave = () => {
        rect = null;
        rafPending = false;
        el.style.setProperty("--tilt-x", "0deg");
        el.style.setProperty("--tilt-y", "0deg");
        el.style.setProperty("--specular-x", "50%");
        el.style.setProperty("--specular-y", "20%");
        el.style.setProperty("--specular-angle", "135deg");
      };

      el.addEventListener("mouseenter", onMouseEnter, { passive: true });
      el.addEventListener("mousemove", onMouseMove, { passive: true });
      el.addEventListener("mouseleave", onMouseLeave, { passive: true });
    };

    document.querySelectorAll(".deck-card").forEach((card) => attachTilt(card, true));

    // Also attach optical tracking to floating controls (Pill nav, calculator, modals)
    const floatingElements = document.querySelectorAll(".glass-pill-nav, .liquid-calc-container, .vault-bubble-btn, .pill-toggle-container");
    floatingElements.forEach((elem) => attachTilt(elem, false));

    // Mobile Gyroscope Tilt for Apple iOS 26 Liquid Glass
    if (!window._hasLiquidGlassGyro && window.DeviceOrientationEvent) {
      window._hasLiquidGlassGyro = true;
      let gyroRaf = false;
      window.addEventListener("deviceorientation", (ev) => {
        if (ev.gamma === null || ev.beta === null) return;
        if (gyroRaf) return;
        gyroRaf = true;
        requestAnimationFrame(() => {
          gyroRaf = false;
          // Clamp gamma (-30 to 30) and beta (10 to 60) for natural hand-held phone angle
          const clampedX = Math.max(-30, Math.min(30, ev.gamma));
          const clampedY = Math.max(-30, Math.min(30, ev.beta - 35));
          const normX = ((clampedX + 30) / 60) * 100;
          const normY = ((clampedY + 30) / 60) * 100;

          document.documentElement.style.setProperty("--specular-x", `${normX.toFixed(1)}%`);
          document.documentElement.style.setProperty("--specular-y", `${normY.toFixed(1)}%`);
          document.documentElement.style.setProperty("--gyro-tilt-x", `${(clampedY * 0.35).toFixed(2)}deg`);
          document.documentElement.style.setProperty("--gyro-tilt-y", `${(clampedX * 0.35).toFixed(2)}deg`);
        });
      }, { passive: true });
    }
  }

  attachCardButtonListeners() {
    document.querySelectorAll(".btn-card-view").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const card = btn.closest(".deck-card");
        if (card && !card.classList.contains("pos-center")) return;
        e.stopPropagation();
        sounds.playClick();
        this.openNotesViewer(btn.dataset.id, "notes");
      });
    });

    document.querySelectorAll(".organelle-chip").forEach((chip) => {
      chip.addEventListener("click", (e) => {
        const card = chip.closest(".deck-card");
        if (card && !card.classList.contains("pos-center")) return;
        e.stopPropagation();
        sounds.playClick();
        const topicId = chip.dataset.id;
        const sqNum = chip.dataset.sq;
        this.openNotesViewer(topicId, "notes");
        setTimeout(() => {
          const targetCard = document.getElementById(`concept-square-${sqNum}`);
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
            targetCard.classList.add("highlighted");
            setTimeout(() => targetCard.classList.remove("highlighted"), 1500);
          }
        }, 200);
      });
    });

    document.querySelectorAll(".btn-card-pdf").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const card = btn.closest(".deck-card");
        if (card && !card.classList.contains("pos-center")) return;
        e.stopPropagation();
        sounds.playClick();
        this.printCheatSheet(btn.dataset.id);
      });
    });

    document.querySelectorAll(".btn-card-quiz").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const card = btn.closest(".deck-card");
        if (card && !card.classList.contains("pos-center")) return;
        e.stopPropagation();
        sounds.playClick();
        this.openNotesViewer(btn.dataset.id, "practice");
      });
    });
  }

// TABLE VIEW
  setupTableView() {
    const tbody = document.getElementById("table-body");
    const countBadge = document.getElementById("table-count-badge");
    if (!tbody) return;

    const filtered = this.getFilteredNotes();
    tbody.innerHTML = "";

    if (countBadge) {
      countBadge.textContent = `${filtered.length} Topic${filtered.length === 1 ? "" : "s"}`;
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 36px; color: var(--text-muted);">
            No skience topics stored yet. Click "Add My Notes" or open the Admin Vault to create your first unit!
          </td>
        </tr>
      `;
      return;
    }

    filtered.forEach((topic) => {
      const tr = document.createElement("tr");
      const sqCount = topic.properties ? topic.properties.length : 1;
      const catDisplay = ((topic.category || "Skience").replace(/science|sk1ence/gi, 'Skience')).toUpperCase();

      tr.innerHTML = `
        <td><strong>${formatBulletText(topic.title)}</strong></td>
        <td><span class="card-cat-pill">${catDisplay}</span></td>
        <td><code class="table-formula-code">${formatBulletText(topic.coreFormula)}</code></td>
        <td>${sqCount} Concept Squares</td>
        <td><span class="table-type-pill">User Unit</span></td>
        <td>
          <button class="btn-table-action view-btn" data-id="${topic.id}">View</button>
        </td>
      `;

      tr.querySelector(".view-btn")?.addEventListener("click", () => {
        sounds.playClick();
        this.openNotesViewer(topic.id);
      });

      tbody.appendChild(tr);
    });
  }

  render() {
    this.setupCarouselTrack();
    this.setupTableView();
    this.vault.updateTelemetry();
  }

// DETAILED MODAL VIEWER
  openNotesViewer(topicId, defaultTab = "notes") {
    const topic = this.notes.find((t) => t.id === topicId);
    if (!topic) return;

    if (typeof this.recordTopicExplored === "function") {
      this.recordTopicExplored(topicId);
    }

    this.currentModalTopic = topic;
    const modal = document.getElementById("notes-viewer-modal");
    const titleEl = document.getElementById("modal-topic-title");
    const descEl = document.getElementById("modal-topic-desc");
    const catBadge = document.getElementById("modal-cat-badge");

    if (titleEl) {
      if (topic.title && (topic.title.includes('•') || topic.title.includes('\n'))) {
        titleEl.innerHTML = formatBulletText(topic.title);
      } else {
        titleEl.textContent = topic.title;
      }
    }
    if (descEl) {
      if (topic.description && (topic.description.includes('•') || topic.description.includes('\n'))) {
        descEl.innerHTML = formatBulletText(topic.description);
      } else {
        descEl.textContent = topic.description;
      }
    }
    if (catBadge) catBadge.textContent = `5TH GRADE ${((topic.category || "SKIENCE").replace(/science|sk1ence/gi, 'SKIENCE')).toUpperCase()}`;

    const collapsedTitleEl = document.getElementById("collapsed-title-text");
    if (collapsedTitleEl) {
      collapsedTitleEl.textContent = (topic.title || "").replace(/^[•\s*-]+/, '').trim() || "Scientific Principles";
    }

    const notesWindow = modal ? modal.querySelector(".notes-detail-window") : null;
    if (notesWindow) {
      notesWindow.classList.remove("header-collapsed");
      delete notesWindow.dataset.userPinnedExpanded;
    }
    const collapseBtn = document.getElementById("btn-collapse-header");
    if (collapseBtn) {
      collapseBtn.setAttribute("title", "Collapse header for more reading space");
    }
    const scrollBody = modal ? modal.querySelector(".modal-body-scrollable") : null;
    if (scrollBody) {
      scrollBody.scrollTop = 0;
    }

    if (this.readingSuite) {
      this.readingSuite.onOpenTopic(topic);
    }

    this._modalRenderedTabs = {};
    this.switchModalTab(defaultTab);

    if (modal) modal.classList.remove("hidden");
  }

  closeNotesViewer() {
    this._modalRenderedTabs = {};
    this.cleanupInteractiveSimulators();
    if (this.readingSuite) {
      this.readingSuite.stopAudio();
      this.readingSuite.exitZenMode();
      this.readingSuite.hideVocabPopover();
    }
    const modal = document.getElementById("notes-viewer-modal");
    if (modal) modal.classList.add("hidden");
  }

  openImageLightbox(src, caption = "") {
    const lightbox = document.getElementById("concept-image-lightbox");
    const img = document.getElementById("lightbox-img");
    const cap = document.getElementById("lightbox-caption");
    if (!lightbox || !img) return;

    img.src = src;
    if (cap) cap.textContent = caption || "Concept Square Diagram / Observation";
    lightbox.classList.remove("hidden");
    if (window.sounds) window.sounds.playClick();
  }

  closeImageLightbox() {
    const lightbox = document.getElementById("concept-image-lightbox");
    if (!lightbox) return;
    lightbox.classList.add("hidden");
    const img = document.getElementById("lightbox-img");
    if (img) img.src = "";
  }

  switchModalTab(tabName) {
    if (tabName !== "practice") tabName = "notes";
    const tabs = ["notes", "practice"];
    tabs.forEach((tab) => {
      const btn = document.getElementById(`modal-tab-${tab}`);
      const pane = document.getElementById(`pane-${tab === "notes" ? "structured-notes" : tab}`);
      if (btn) btn.classList.toggle("active", tab === tabName);
      if (pane) pane.classList.toggle("hidden", tab !== tabName);
    });

    if (!this._modalRenderedTabs) this._modalRenderedTabs = {};
    if (!this._modalRenderedTabs[tabName] && this.currentModalTopic) {
      if (tabName === "notes") {
        this.renderModalProperties(this.currentModalTopic);
      } else if (tabName === "practice") {
        this.renderModalQuiz(this.currentModalTopic);
      }
      this._modalRenderedTabs[tabName] = true;
    }

    const readingControls = document.getElementById("reading-controls-bar");
    if (readingControls) {
      readingControls.style.display = tabName === "notes" ? "flex" : "none";
    }

    if (tabName !== "notes" && this.readingSuite) {
      this.readingSuite.stopAudio();
      this.readingSuite.hideVocabPopover();
    }
  }

  cleanupInteractiveSimulators() {
    if (this.activeSimAnimId) {
      cancelAnimationFrame(this.activeSimAnimId);
      this.activeSimAnimId = null;
    }
    if (this.moonOrbitAnimId) {
      cancelAnimationFrame(this.moonOrbitAnimId);
      this.moonOrbitAnimId = null;
    }
  }

  resumeInteractiveSimulator() {}

  renderModalProperties(topic) {
    const container = document.getElementById("modal-sections-container");
    if (!container) return;
    container.innerHTML = "";

    // If 3D Flashcards mode is active, render flashcards!
    if (this.readingSuite && this.readingSuite.isFlashcard) {
      this.readingSuite.renderFlashcards(topic, container);
      return;
    }

    // Check if user has saved personal highlights for this topic AND we are not in bionic mode
    const savedHighlights = localStorage.getItem("scienceio_highlights_" + topic.id);
    if (savedHighlights && (!this.readingSuite || !this.readingSuite.isBionic)) {
      container.innerHTML = savedHighlights;
      return;
    }

    if (!topic.properties || topic.properties.length === 0) {
      let titleHtml = formatBulletText(topic.title);
      let formulaHtml = formatBulletText(topic.coreFormula);
      let descHtml = formatBulletText(topic.description);
      descHtml = annotateVocabTerms(descHtml);
      if (this.readingSuite && this.readingSuite.isBionic) {
        titleHtml = applyBionicReading(titleHtml);
        formulaHtml = applyBionicReading(formulaHtml);
        descHtml = applyBionicReading(descHtml);
      }
      container.innerHTML = `
        <div class="property-detail-card">
          <div class="prop-card-header">
            <h4 class="prop-card-title">${titleHtml}</h4>
            <span class="prop-formula-box">${formulaHtml}</span>
          </div>
          <div class="prop-explanation">${descHtml}</div>
        </div>
      `;
      return;
    }

    const keyWordsRegex = /\b(surrounds|structure|semi-permeable|fluid|pressure|powerhouse|energy|cellular respiration|Smooth|lipids|proteins|transports|carbohydrates|vesicles|outside|control|functions|DNA|ribosomes|Rough|protein|plant|protection|storage|water|larger|animal|light|sun|sugars|photosynthesis)\b/gi;

    topic.properties.forEach((prop) => {
      const card = document.createElement("div");
      card.className = "property-detail-card";
      card.id = `concept-square-${prop.num}`;

      let highlightedExplanation = (prop.explanation || "").replace(keyWordsRegex, `<span class="key-term">$1</span>`);

      let nameHtml = formatBulletText(prop.name);
      let formulaHtml = formatBulletText(prop.formula);
      let expHtml = formatBulletText(highlightedExplanation);
      let exampleHtml = formatBulletText(prop.example || "");
      let trickHtml = prop.trick ? formatBulletText(prop.trick) : "";

      // Annotate vocabulary terms
      expHtml = annotateVocabTerms(expHtml);
      exampleHtml = annotateVocabTerms(exampleHtml);

      // Apply Bionic Reading if enabled
      if (this.readingSuite && this.readingSuite.isBionic) {
        nameHtml = applyBionicReading(nameHtml);
        formulaHtml = applyBionicReading(formulaHtml);
        expHtml = applyBionicReading(expHtml);
        exampleHtml = applyBionicReading(exampleHtml);
        if (trickHtml) trickHtml = applyBionicReading(trickHtml);
      }

      card.innerHTML = `
        <div class="prop-card-header">
          <div>
            <span class="prop-number-tag">CONCEPT SQUARE #${prop.num}</span>
            <h4 class="prop-card-title">${nameHtml}</h4>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="prop-tts-btn" data-sq="${prop.num}" title="Listen to Concept #${prop.num}">${UI_SVG.volume}</button>
            <div class="prop-formula-box">${formulaHtml}</div>
          </div>
        </div>

        ${prop.image ? `
        <div class="prop-image-wrap" data-img="${prop.image.replace(/"/g, '&quot;')}" data-caption="${(prop.name || '').replace(/"/g, '&quot;')}">
          <img src="${prop.image}" alt="${(prop.name || 'Concept Square').replace(/"/g, '&quot;')}" class="prop-concept-image" loading="lazy" />
          <div class="prop-image-overlay">
            <span class="prop-zoom-badge">Click to Enlarge Picture</span>
          </div>
        </div>
        ` : ""}

        <div class="prop-explanation">${expHtml}</div>

        <div class="prop-example-box">
          <div class="prop-example-title">5th Grade Scientific Observation / Demonstration</div>
          <div class="prop-example-text">${exampleHtml}</div>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px;">
          ${trickHtml ? `<span class="prop-trick-badge">${UI_SVG.bulb} ${trickHtml}</span>` : ""}
          <span class="prop-trick-badge" style="background: rgba(0, 240, 255, 0.15); border-color: rgba(0, 240, 255, 0.3); color: #a5f3fc;">${UI_SVG.microscope} Verified 5th Grade Skience</span>
        </div>
      `;

      container.appendChild(card);
    });

    const copyrightFooter = document.createElement("div");
    copyrightFooter.className = "modal-notes-copyright-footer";
    copyrightFooter.style.cssText = "grid-column: 1 / -1; text-align: center; padding: 18px 12px; margin-top: 14px; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.65); font-size: 0.85rem; display: flex; align-items: center; justify-content: center; gap: 8px;";
    copyrightFooter.innerHTML = `<span>© Copyright Protected • 5th Grade Skience Curriculum by Jeeva R.</span>`;
    container.appendChild(copyrightFooter);

    // Lightbox click delegation on concept images
    container.querySelectorAll(".prop-image-wrap").forEach((wrap) => {
      wrap.addEventListener("click", () => {
        const imgSrc = wrap.getAttribute("data-img");
        const caption = wrap.getAttribute("data-caption");
        if (imgSrc) {
          this.openImageLightbox(imgSrc, caption);
        }
      });
    });

    this.setupHolographic3DCardTilt();
  }

  // Interactive Visualizers in notes removed per specification
  renderModalInteractive(topic) {}

// PRACTICE QUIZ
  cleanQuizName(raw) {
    return (raw || '').replace(/^(\d+[\.\-\)]\s*|#\d+\s*)/, '').trim();
  }

  escapeRegex(s) {
    return (s || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Rephrases a definition into a clean question if the answer is present in the definition.
   * Ex: "Earwax helps protect your ear canal." -> "What helps protect your ear canal?"
   */
  rephraseDefinitionToQuestion(rawExplanation, rawName) {
    if (!rawExplanation || !rawExplanation.trim()) {
      return 'Which scientific part or concept is this?';
    }

    const name = this.cleanQuizName(rawName);
    let text = rawExplanation.trim().replace(/^[•\-\*\s]+/, '');

    // Extract first coherent sentence or line
    const lines = text.split(/\r?\n|\\n/).map(l => l.replace(/^[•\-\*\s]+/, '').trim()).filter(Boolean);
    let sentence = lines[0] || text;
    
    // Strip leading numbering e.g. "1. " or "#1 "
    sentence = sentence.replace(/^(\d+[\.\-\)]\s*|#\d+\s*)/, '').trim();

    // Clean trailing period and whitespace
    sentence = sentence.replace(/[\.\s]+$/, '');

    // Build name tokens and variations
    const nameVariants = new Set();
    if (name) {
      nameVariants.add(name);
      // Subparts: e.g. "Nucleus & Nucleolus" -> "Nucleus", "Nucleolus"
      const subParts = name.split(/\s*(?:&|and|\/|\(|\))\s*/i).map(s => s.trim()).filter(s => s.length > 2);
      subParts.forEach(p => nameVariants.add(p));

      // Also individual significant words if multi-word: e.g. "Central Vacuole" -> "Vacuole"
      const words = name.split(/\s+/).map(w => w.replace(/[^a-zA-Z]/g, '')).filter(w => w.length > 3);
      const stopWords = new Set(['cell', 'body', 'system', 'plant', 'animal', 'rough', 'smooth', 'unit', 'life', 'part', 'type']);
      words.forEach(w => {
        if (!stopWords.has(w.toLowerCase())) {
          nameVariants.add(w);
        }
      });
    }

    // Build regex patterns
    const patternList = [];
    nameVariants.forEach(v => {
      const esc = this.escapeRegex(v);
      patternList.push(esc + '(?:s|es|ies)?');
      const parts = v.split(/\s+/).map(w => this.escapeRegex(w));
      if (parts.length > 1) {
        patternList.push(parts.slice(0, -1).join('\\s+') + '\\s+' + parts[parts.length - 1] + '(?:s|es)?');
      }
    });

    patternList.sort((a, b) => b.length - a.length);
    const anyNameRegex = new RegExp('\\b(?:' + patternList.join('|') + ')(?:\'s)?\\b', 'gi');

    // Check if answer appears at the beginning of sentence (with optional article / adjective)
    const startRegex = new RegExp('^(?:(?:a|an|the|these|this|some)\\s+)?(?:smooth\\s+|rough\\s+)?(?:' + patternList.join('|') + ')(?:\'s)?\\b\\s*', 'i');
    
    if (startRegex.test(sentence)) {
      let remainder = sentence.replace(startRegex, '').trim();

      // Conjugate common plural verbs to 3rd person singular after 'What'
      remainder = remainder.replace(/^provide\b/i, 'provides')
        .replace(/^convert\b/i, 'converts')
        .replace(/^make\b/i, 'makes')
        .replace(/^package\b/i, 'packages')
        .replace(/^transport\b/i, 'transports')
        .replace(/^store\b/i, 'stores')
        .replace(/^help\b/i, 'helps')
        .replace(/^contain\b/i, 'contains')
        .replace(/^produce\b/i, 'produces')
        .replace(/^are\b/i, 'is')
        .replace(/^have\b/i, 'has');

      // Also sanitize any remaining occurrences of the answer inside remainder
      remainder = remainder.replace(anyNameRegex, 'this structure');

      // Ensure first character of verb is lowercase
      remainder = remainder.replace(/^([A-Z])/, (m, c) => c.toLowerCase());

      return 'What ' + remainder + '?';
    }

    // Check if answer appears in the middle of sentence
    if (anyNameRegex.test(sentence)) {
      // Replace the answer occurrence with 'what'
      let replaced = sentence.replace(anyNameRegex, 'what');
      // Clean up 'a what', 'the what', 'these what'
      replaced = replaced.replace(/\b(?:a|an|the|these|this)\s+what\b/gi, 'what');
      // Fix verb if needed: 'what provide' -> 'what provides'
      replaced = replaced.replace(/\bwhat\s+provide\b/gi, 'what provides')
        .replace(/\bwhat\s+make\b/gi, 'what makes')
        .replace(/\bwhat\s+convert\b/gi, 'what converts')
        .replace(/\bwhat\s+help\b/gi, 'what helps');

      // Capitalize first letter
      replaced = replaced.replace(/^([a-z])/, (m, c) => c.toUpperCase());
      return replaced + '?';
    }

    // If answer is NOT in the sentence, but sentence starts with a verb or description
    if (/^(?:convert|converts|packages|package|makes|make|produces|produce|provides|provide|stores|store|controls|directs|protects|protect|helps|help|moves|move)\b/i.test(sentence)) {
      let remainder = sentence
        .replace(/^convert\b/i, 'converts')
        .replace(/^package\b/i, 'packages')
        .replace(/^make\b/i, 'makes')
        .replace(/^produce\b/i, 'produces')
        .replace(/^provide\b/i, 'provides')
        .replace(/^store\b/i, 'stores')
        .replace(/^protect\b/i, 'protects')
        .replace(/^help\b/i, 'helps')
        .replace(/^move\b/i, 'moves');
      
      remainder = remainder.replace(/^([A-Z])/, (m, c) => c.toLowerCase());
      return 'What ' + remainder + '?';
    }

    if (/^(?:nicknamed|found only in|located in|known as|described as)\b/i.test(sentence)) {
      return 'What is ' + sentence + '?';
    }

    if (/^(?:the\s+fluid|fluid\s+in|the\s+control\s+center|control\s+center)\b/i.test(sentence)) {
      const cleanDesc = sentence.replace(/^(?:the)\s+/i, '');
      return 'What is the ' + cleanDesc + '?';
    }

    if (/^(?:the\s+thin|a\s+thin|thin\s+layer)\b/i.test(sentence)) {
      const cleanDesc = sentence.replace(/^(?:the|a)\s+/i, '');
      return 'What is a ' + cleanDesc + '?';
    }

    // Fallback if not matched
    return 'According to the teacher notes: "' + sentence + '" - What part is this?';
  }

  doesTextContainAnswer(text, answerName) {
    if (!text || !answerName) return false;
    const name = this.cleanQuizName(answerName);
    const nameVariants = new Set();
    nameVariants.add(name);
    const subParts = name.split(/\s*(?:&|and|\/|\(|\))\s*/i).map(s => s.trim()).filter(s => s.length > 2);
    subParts.forEach(p => nameVariants.add(p));
    const words = name.split(/\s+/).map(w => w.replace(/[^a-zA-Z]/g, '')).filter(w => w.length > 3);
    const stopWords = new Set(['cell', 'body', 'system', 'plant', 'animal', 'rough', 'smooth', 'unit', 'life', 'part', 'type']);
    words.forEach(w => {
      if (!stopWords.has(w.toLowerCase())) nameVariants.add(w);
    });

    const patternList = [];
    nameVariants.forEach(v => {
      const esc = this.escapeRegex(v);
      patternList.push(esc + '(?:s|es|ies)?');
      const parts = v.split(/\s+/).map(w => this.escapeRegex(w));
      if (parts.length > 1) {
        patternList.push(parts.slice(0, -1).join('\\s+') + '\\s+' + parts[parts.length - 1] + '(?:s|es)?');
      }
    });
    patternList.sort((a, b) => b.length - a.length);
    const regex = new RegExp('\\b(?:' + patternList.join('|') + ')(?:\'s)?\\b', 'gi');
    return regex.test(text);
  }

  sanitizeQuizOption(opt, subjectName) {
    if (!opt || typeof opt !== 'string') return opt;
    let clean = opt.trim();

    clean = clean.replace(/^[\d\.\-\*•]+\s*/, '');
    clean = clean.replace(/^(?:a|an|the)?\s*(?:paramecium|amoeba|euglena|volvox)\s+moves?\s+by\s+/i, 'Moves by ');
    clean = clean.replace(/^(?:they|it)\s+moves?\s+by\s+/i, 'Moves by ');
    clean = clean.replace(/^(?:they|it)\s+move\s+by\s+using\s+/i, 'Moves by using ');
    clean = clean.replace(/^move\s+by\s+using\s+/i, 'Moves by using ');
    clean = clean.replace(/^(?:heterotrophic|autotroph)\s*[-–:]\s*/i, '');
    clean = clean.replace(/^([a-z])/, (m, c) => c.toUpperCase());

    return clean;
  }

  sanitizeQuizQuestion(item) {
    if (!item || !item.q || !Array.isArray(item.options)) return item;
    const answerName = item.options[item.ans] || '';
    let qText = item.q;

    if (this.doesTextContainAnswer(qText, answerName)) {
      const quoteMatch = qText.match(/["'“]([^"'”]+)["'”]/);
      if (quoteMatch) {
        item.q = this.rephraseDefinitionToQuestion(quoteMatch[1], answerName);
      } else {
        item.q = this.rephraseDefinitionToQuestion(qText, answerName);
      }
    }

    item.options = item.options.map(opt => this.sanitizeQuizOption(opt, answerName));
    return item;
  }

  generateQuizForTopic(topic) {
    if (!topic) return [];
    if (!topic.properties || topic.properties.length === 0) {
      return [
        {
          q: `What is the core principle of ${topic.title || "this unit"}?`,
          options: [topic.coreFormula || "Observable Science Law", "Matter disappears completely", "Energy cannot be transformed", "Variables do not matter"],
          ans: 0,
          why: "This matches the official 5th grade scientific law!"
        }
      ];
    }

    const fallbackPool = [
      "Cell Membrane", "Mitochondria", "Cytoplasm", "Nucleus", "Chloroplast",
      "Cell Wall", "Central Vacuole", "Endoplasmic Reticulum", "Golgi Body",
      "Photosynthesis", "Cellular Respiration", "Gravitational Pull", "Kinetic Energy",
      "Water Cycle Condensation", "Precipitation", "Evaporation", "Ecosystem Producer"
    ];

    const allNotePropNames = [];
    (this.notes || []).forEach(n => {
      if (Array.isArray(n.properties)) {
        n.properties.forEach(p => {
          if (p.name) allNotePropNames.push(this.cleanQuizName(p.name));
        });
      }
    });

    const questions = topic.properties.map((p, idx) => {
      const correctName = this.cleanQuizName(p.name);
      
      // 1. Distractors from same topic
      const sameTopicNames = topic.properties
        .filter((_, i) => i !== idx)
        .map(o => this.cleanQuizName(o.name))
        .filter(n => n.toLowerCase() !== correctName.toLowerCase());

      const chosenDistractors = [...sameTopicNames];

      // 2. If needed, pull from other published notes
      if (chosenDistractors.length < 3) {
        for (const name of allNotePropNames) {
          if (name.toLowerCase() !== correctName.toLowerCase() && !chosenDistractors.some(d => d.toLowerCase() === name.toLowerCase())) {
            chosenDistractors.push(name);
            if (chosenDistractors.length >= 3) break;
          }
        }
      }

      // 3. If still needed, pull from 5th grade curriculum fallback pool
      if (chosenDistractors.length < 3) {
        for (const fallback of fallbackPool) {
          if (fallback.toLowerCase() !== correctName.toLowerCase() && !chosenDistractors.some(d => d.toLowerCase() === fallback.toLowerCase())) {
            chosenDistractors.push(fallback);
            if (chosenDistractors.length >= 3) break;
          }
        }
      }

      const finalDistractors = chosenDistractors.slice(0, 3);
      const options = [correctName, ...finalDistractors].sort(() => Math.random() - 0.5);

      // Rephrase definition so answer is not revealed in question
      const questionText = this.rephraseDefinitionToQuestion(p.explanation, correctName);

      return {
        q: questionText,
        options: options,
        ans: options.indexOf(correctName),
        why: `${correctName}: "${p.explanation}"`
      };
    });

    return questions.map(item => this.sanitizeQuizQuestion(item));
  }

  renderModalQuiz(topic) {
    const container = document.getElementById("modal-quiz-container");
    if (!container) return;
    container.innerHTML = "";

    let questions = [];

    // 1. If topic has predefined quiz, use them (and sanitize them)
    if (Array.isArray(topic.quiz) && topic.quiz.length > 0) {
      questions = JSON.parse(JSON.stringify(topic.quiz)).map(item => this.sanitizeQuizQuestion(item));
    } else {
      // 2. Otherwise generate questions with exact same layout and rephrased definitions
      questions = this.generateQuizForTopic(topic);
    }

    if (questions.length === 0) {
      questions = [
        {
          q: `What is the core principle of ${topic.title}?`,
          options: [topic.coreFormula || "Observable Science Law", "Matter disappears completely", "Energy cannot be transformed", "Variables do not matter"],
          ans: 0,
          why: "This matches the official 5th grade scientific law!"
        }
      ];
    }

    questions.forEach((item, qIdx) => {
      const card = document.createElement("div");
      card.className = "quiz-card";

      card.innerHTML = `
        <div class="quiz-q-num">QUESTION ${qIdx + 1} OF ${questions.length} • TEACHER NOTES REVIEW</div>
        <div class="quiz-question-text">${item.q}</div>
        <div class="quiz-options-grid">
          ${item.options
            .map(
              (opt, optIdx) =>
                `<button class="quiz-opt-btn" data-q="${qIdx}" data-opt="${optIdx}">${opt}</button>`
            )
            .join("")}
        </div>
        <div class="quiz-feedback-box hidden" id="q-feedback-${qIdx}"></div>
      `;

      container.appendChild(card);
    });

    container.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qIdx = parseInt(btn.dataset.q, 10);
        const optIdx = parseInt(btn.dataset.opt, 10);
        const qData = questions[qIdx];
        const fb = document.getElementById(`q-feedback-${qIdx}`);
        const parentGrid = btn.parentElement;

        parentGrid.querySelectorAll(".quiz-opt-btn").forEach((b) => (b.disabled = true));

        if (optIdx === qData.ans) {
          btn.classList.add("correct");
          sounds.playSuccess();
          this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 40);
          if (typeof this.recordQuizSolved === "function") {
            this.recordQuizSolved();
          }
          if (fb) {
            fb.classList.remove("hidden");
            fb.style.color = "#86efac";
            fb.textContent = `Correct! ${qData.why}`;
          }
        } else {
          btn.classList.add("incorrect");
          sounds.playClick();
          const correctBtn = parentGrid.querySelector(`[data-opt="${qData.ans}"]`);
          if (correctBtn) correctBtn.classList.add("correct");
          if (fb) {
            fb.classList.remove("hidden");
            fb.style.color = "#fca5a5";
            fb.textContent = `Not quite! ${qData.why}`;
          }
        }
      });
    });
  }

  printAllNotes() {
    const printContent = document.getElementById("printable-content");
    if (!printContent) return;

    if (!this.notes || this.notes.length === 0) {
      alert("No notes available to print. Please add a skience note first!");
      return;
    }

    let html = `
      <div class="print-meta-banner" style="margin-bottom: 24px; border-bottom: 2.5px solid #0284c7; padding-bottom: 12px; display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <h1 style="font-size: 1.8rem; margin: 0; color: #0f172a; font-weight: 800;">skience.io  //  5th Grade Ultimate Science Review</h1>
          <div style="font-size: 0.95rem; color: #64748b; margin-top: 4px;">Comprehensive Science Principle & Concept Guide • Total Topics: ${this.notes.length} • Made with love by Jeeva R.</div>
        </div>
        <div style="text-align: right; font-size: 0.85rem; color: #64748b; line-height: 1.4;">
          <strong>skienceisthebest.vercel.app</strong><br>
          Student: ___________________ Date: ___________
        </div>
      </div>
    `;

    this.notes.forEach((topic, idx) => {
      html += `
        <div class="print-topic-block" style="margin-bottom: 28px; page-break-inside: avoid; break-inside: avoid; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 18px; background: #ffffff;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 10px;">
            <div>
              <span style="display: inline-block; background: #e0f2fe; color: #0369a1; font-size: 0.75rem; font-weight: 800; padding: 3px 9px; border-radius: 4px; text-transform: uppercase; margin-bottom: 4px;">TOPIC ${idx + 1} • ${((topic.category || "SCIENCE").replace(/science|sk1ence/gi, 'SCIENCE')).toUpperCase()}</span>
              <h2 style="font-size: 1.35rem; color: #0f172a; margin: 0; font-weight: 800;">${formatBulletText(topic.title)}</h2>
            </div>
          </div>
          
          <div style="font-size: 0.95rem; color: #334155; margin-bottom: 8px; line-height: 1.5;">${formatBulletText(topic.description)}</div>
          
          <div style="background: #f8fafc; border-left: 4px solid #0284c7; padding: 8px 12px; margin-bottom: 14px; font-weight: 700; color: #0f172a; font-size: 0.95rem;">
            Core Principle / Formula: <span style="font-weight: 600; color: #0369a1;">${formatBulletText(topic.coreFormula)}</span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      `;

      if (topic.properties && topic.properties.length > 0) {
        topic.properties.forEach((p) => {
          html += `
            <div style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 12px; background: #ffffff; break-inside: avoid; page-break-inside: avoid;">
              <div style="font-weight: 800; color: #0f172a; font-size: 0.92rem; margin-bottom: 3px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 2px;">
                #${p.num}  //  ${formatBulletText(p.name)}
              </div>
              <div style="font-size: 0.85rem; color: #0369a1; font-weight: 700; margin-bottom: 4px;">
                Rule: ${formatBulletText(p.formula)}
              </div>
              ${p.image ? `<div style="text-align: center; margin: 6px 0;"><img src="${p.image}" alt="${p.name}" style="max-height: 100px; max-width: 100%; border-radius: 4px; border: 1px solid #e2e8f0; object-fit: contain;" /></div>` : ""}
              <div style="font-size: 0.85rem; color: #334155; margin-bottom: 4px; line-height: 1.4;">
                ${formatBulletText(p.explanation)}
              </div>
              ${p.example ? `<div style="font-size: 0.8rem; color: #64748b; font-style: italic;">Observation: ${formatBulletText(p.example)}</div>` : ''}
              ${p.trick ? `<div style="font-size: 0.8rem; color: #b45309; font-weight: 600; margin-top: 3px;">${UI_SVG.bulb} Trick: ${formatBulletText(p.trick)}</div>` : ''}
            </div>
          `;
        });
      }

      html += `
          </div>
        </div>
      `;
    });

    printContent.innerHTML = html;
    window.print();
  }

  printCheatSheet(topicId) {
    const topic = this.notes.find((t) => t.id === topicId) || this.notes[0];
    const printContent = document.getElementById("printable-content");
    if (!printContent) return;

    if (!topic) {
      alert("No notes available to print. Please add a skience note first!");
      return;
    }

    let html = `
      <div style="margin-bottom: 24px;">
        <h2 style="color: #0284c7; border-bottom: 2px solid #bae6fd; padding-bottom: 6px;">${formatBulletText(topic.title)}</h2>
        <div style="font-size: 1.1rem; font-style: italic; margin-top: 6px;">${formatBulletText(topic.description)}</div>
        <div style="font-weight: bold; margin-top: 8px;">Scientific Principle: ${formatBulletText(topic.coreFormula)}</div>
      </div>
    `;

    if (topic.properties) {
      topic.properties.forEach((p) => {
        html += `
          <div style="margin-bottom: 16px; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px;">
            <h3 style="font-size: 1.05rem; margin-bottom: 4px;">#${p.num}  //  ${formatBulletText(p.name)}</h3>
            <div style="font-weight: bold; color: #1e293b;">Formula / Rule: ${formatBulletText(p.formula)}</div>
            ${p.image ? `<div style="text-align: center; margin: 8px 0;"><img src="${p.image}" alt="${p.name}" style="max-height: 120px; max-width: 100%; border-radius: 6px; border: 1px solid #cbd5e1; object-fit: contain;" /></div>` : ""}
            <div style="margin: 4px 0;">${formatBulletText(p.explanation)}</div>
            <div style="color: #475569; font-size: 0.95rem;">Observation: ${formatBulletText(p.example)}</div>
            ${p.trick ? `<div style="color: #d97706; font-size: 0.9rem;">${UI_SVG.bulb} ${formatBulletText(p.trick)}</div>` : ""}
          </div>
        `;
      });
    }

    printContent.innerHTML = html;
    window.print();
  }

  setupThemePicker() {
    const btn = document.getElementById("btn-theme-color-palette");
    const popover = document.getElementById("theme-palette-popover");
    if (!btn || !popover) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      sounds.playClick();
      popover.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
      if (!popover.contains(e.target) && e.target !== btn) {
        popover.classList.add("hidden");
      }
    });

    const swatches = popover.querySelectorAll(".theme-swatch-btn");
    const savedTheme = localStorage.getItem("scienceio_theme_colorway") || "theme-cyber-neon";
    
    const applyTheme = (themeName) => {
      document.body.classList.remove("theme-cyber-neon", "theme-bio-emerald", "theme-solar-flare", "theme-quantum-void");
      if (themeName !== "theme-cyber-neon") {
        document.body.classList.add(themeName);
      }
      if (themeName === "theme-bio-emerald") {
        btn.style.color = "#10b981";
      } else if (themeName === "theme-solar-flare") {
        btn.style.color = "#f59e0b";
      } else if (themeName === "theme-quantum-void") {
        btn.style.color = "#a855f7";
      } else {
        btn.style.color = "var(--accent-cyan)";
      }
      swatches.forEach(s => s.classList.toggle("active", s.dataset.theme === themeName));
      localStorage.setItem("scienceio_theme_colorway", themeName);
    };

    applyTheme(savedTheme);

    swatches.forEach(swatch => {
      swatch.addEventListener("click", () => {
        sounds.playClick();
        applyTheme(swatch.dataset.theme);
        setTimeout(() => popover.classList.add("hidden"), 300);
      });
    });
  }

  setupEventListeners() {
    this.setupThemePicker();

    // Active tab attribute helper
    const updateActiveTab = (tab) => {
      document.body.setAttribute("data-active-tab", tab);
    };
    updateActiveTab("home");

    // Nav links
    const navLinks = document.querySelectorAll(".nav-link[data-scroll]");
    navLinks.forEach((btn) => {
      btn.addEventListener("click", () => {
        sounds.playClick();
        navLinks.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const targetId = btn.dataset.scroll;
        if (targetId === "hero") updateActiveTab("home");
        else if (targetId === "notes-section") updateActiveTab("notes");
        else if (targetId === "calculator-section") updateActiveTab("calc");

        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });

    // Digital Cursive Logo hover replay
    const brandLogo = document.getElementById("nav-brand-logo");
    if (brandLogo) {
      brandLogo.addEventListener("mouseenter", () => {
        this.playCursiveHandwriting();
      });
    }

    // Scroll spy (RAF throttled to eliminate layout thrashing)
    let scrollRafPending = false;
    const notesSec = document.getElementById("notes-section");
    const calcSec = document.getElementById("calculator-section");
    const homeBtn = document.getElementById("nav-btn-home");
    const notesBtn = document.getElementById("nav-btn-notes");
    const calcBtn = document.getElementById("nav-btn-calc");
    window.addEventListener("scroll", () => {
      if (!scrollRafPending) {
        scrollRafPending = true;
        requestAnimationFrame(() => {
          if (calcSec && calcBtn && calcSec.getBoundingClientRect().top <= 250) {
            calcBtn.classList.add("active");
            if (notesBtn) notesBtn.classList.remove("active");
            if (homeBtn) homeBtn.classList.remove("active");
            updateActiveTab("calc");
          } else if (notesSec && notesBtn && notesSec.getBoundingClientRect().top <= 250) {
            notesBtn.classList.add("active");
            if (calcBtn) calcBtn.classList.remove("active");
            if (homeBtn) homeBtn.classList.remove("active");
            updateActiveTab("notes");
          } else {
            if (homeBtn) homeBtn.classList.add("active");
            if (notesBtn) notesBtn.classList.remove("active");
            if (calcBtn) calcBtn.classList.remove("active");
            updateActiveTab("home");
          }
          scrollRafPending = false;
        });
      }
    }, { passive: true });

    // Hero buttons
    document.getElementById("hero-explore-btn")?.addEventListener("click", () => {
      sounds.playClick();
      document.getElementById("notes-section")?.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("hero-scroll-cue")?.addEventListener("click", () => {
      document.getElementById("notes-section")?.scrollIntoView({ behavior: "smooth" });
    });

    // Modals
    document.getElementById("lightbox-close-btn")?.addEventListener("click", () => {
      this.closeImageLightbox();
    });

    document.getElementById("modal-notes-close")?.addEventListener("click", () => {
      this.closeNotesViewer();
    });
    document.getElementById("modal-done-btn")?.addEventListener("click", () => {
      this.closeNotesViewer();
    });
    document.getElementById("modal-print-btn")?.addEventListener("click", () => {
      if (this.currentModalTopic) this.printCheatSheet(this.currentModalTopic.id);
    });

    document.getElementById("modal-tab-notes")?.addEventListener("click", () => this.switchModalTab("notes"));
    document.getElementById("modal-tab-practice")?.addEventListener("click", () => this.switchModalTab("practice"));

    // Collapsible notes viewer header
    const notesModalEl = document.getElementById("notes-viewer-modal");
    const notesWindowEl = notesModalEl?.querySelector(".notes-detail-window");
    const notesScrollEl = notesModalEl?.querySelector(".modal-body-scrollable");
    const collapseHeaderBtn = document.getElementById("btn-collapse-header");

    if (collapseHeaderBtn && notesWindowEl) {
      collapseHeaderBtn.addEventListener("click", () => {
        if (window.sounds) window.sounds.playClick();
        const isCollapsed = notesWindowEl.classList.toggle("header-collapsed");
        if (isCollapsed) {
          collapseHeaderBtn.setAttribute("title", "Expand header");
          delete notesWindowEl.dataset.userPinnedExpanded;
        } else {
          collapseHeaderBtn.setAttribute("title", "Collapse header for more reading space");
          notesWindowEl.dataset.userPinnedExpanded = "true";
        }
      });
    }

    if (notesScrollEl && notesWindowEl) {
      notesScrollEl.addEventListener("scroll", () => {
        if (notesScrollEl.scrollTop > 45) {
          if (!notesWindowEl.classList.contains("header-collapsed") && !notesWindowEl.dataset.userPinnedExpanded) {
            notesWindowEl.classList.add("header-collapsed");
            if (collapseHeaderBtn) collapseHeaderBtn.setAttribute("title", "Expand header");
          }
        } else if (notesScrollEl.scrollTop < 15) {
          if (notesWindowEl.classList.contains("header-collapsed")) {
            notesWindowEl.classList.remove("header-collapsed");
            delete notesWindowEl.dataset.userPinnedExpanded;
            if (collapseHeaderBtn) collapseHeaderBtn.setAttribute("title", "Collapse header for more reading space");
          }
        }
      }, { passive: true });
    }

    // View toggle: Carousel vs Table
    const viewCarouselBtn = document.getElementById("view-carousel-btn");
    const viewTableBtn = document.getElementById("view-table-btn");
    const slider = document.getElementById("toggle-slider");
    const carouselView = document.getElementById("carousel-view");
    const tableView = document.getElementById("table-view");

    if (viewCarouselBtn && viewTableBtn) {
      viewCarouselBtn.addEventListener("click", () => {
        sounds.playClick();
        viewCarouselBtn.classList.add("active");
        viewTableBtn.classList.remove("active");
        if (slider) slider.style.transform = "translateX(0%)";
        if (carouselView) carouselView.classList.remove("hidden");
        if (tableView) tableView.classList.add("hidden");
        this.activeView = "carousel";
      });

      viewTableBtn.addEventListener("click", () => {
        sounds.playClick();
        viewTableBtn.classList.add("active");
        viewCarouselBtn.classList.remove("active");
        if (slider) slider.style.transform = "translateX(100%)";
        if (carouselView) carouselView.classList.add("hidden");
        if (tableView) tableView.classList.remove("hidden");
        this.activeView = "table";
        this.setupTableView();
      });
    }

    // Carousel arrows
    document.getElementById("carousel-prev-btn")?.addEventListener("click", () => this.slidePrev());
    document.getElementById("carousel-next-btn")?.addEventListener("click", () => this.slideNext());

    // Keyboard arrow keys navigation for carousel (Left / Right)
    window.addEventListener("keydown", (e) => {
      // 1. Never intercept if user is typing in input/textarea/select/editable
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || document.activeElement?.isContentEditable) {
        return;
      }

      // 2. Never intercept if any modal is visible
      const openModal = document.querySelector(`
        #notes-viewer-modal:not(.hidden),
        #practice-quiz-modal:not(.hidden),
        #vault-modal:not(.hidden),
        #publish-modal:not(.hidden),
        #asst-modal:not(.hidden),
        #feedback-modal:not(.hidden),
        #curriculum-builder-modal:not(.hidden)
      `);
      if (openModal) {
        return;
      }

      // 3. Only active when viewing the carousel
      if (this.activeView !== "carousel") {
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.slidePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        this.slideNext();
      }
    });

    // Search input (debounced to prevent UI stutter while typing)
    const searchInput = document.getElementById("notes-search-input");
    const searchClear = document.getElementById("search-clear-btn");
    let searchDebounce = null;
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value;
        if (searchClear) searchClear.classList.toggle("hidden", !this.searchQuery);
        clearTimeout(searchDebounce);
        searchDebounce = setTimeout(() => {
          this.carouselIndex = 0;
          this.render();
        }, 120);
      });
    }

    if (searchClear) {
      searchClear.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        this.searchQuery = "";
        searchClear.classList.add("hidden");
        this.render();
      });
    }

    // Filter pills
    document.querySelectorAll(".cat-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        sounds.playClick();
        document.querySelectorAll(".cat-pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        this.activeFilter = pill.dataset.filter;
        this.carouselIndex = 0;
        this.render();
      });
    });

    // Sound & Music toggle next to printer icon is managed by bgMusic controller

    // Print All Science Notes from Top Nav (next to sound FX toggle)
    document.getElementById("btn-cheat-sheet")?.addEventListener("click", () => {
      sounds.playClick();
      this.printAllNotes();
    });

    // Feedback Bubble
    const fbBubble = document.getElementById("feedback-bubble-btn");
    const fbModal = document.getElementById("feedback-modal");
    if (fbBubble && fbModal) {
      fbBubble.addEventListener("click", () => {
        sounds.playClick();
        fbModal.classList.remove("hidden");
      });
    }

    document.getElementById("modal-feedback-close")?.addEventListener("click", () => {
      fbModal?.classList.add("hidden");
    });

    const fbForm = document.getElementById("feedback-form");
    if (fbForm) {
      fbForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("fb-user-name");
        const emailInput = document.getElementById("fb-user-email");
        const msgInput = document.getElementById("fb-user-message");
        const submitBtn = fbForm.querySelector("button[type='submit']");

        const userName = (nameInput?.value || "").trim() || "Anonymous Scholar";
        const userEmail = (emailInput?.value || "").trim() || "No email provided";
        const userMsg = (msgInput?.value || "").trim();

        if (!userMsg) return;

        const origBtnText = submitBtn ? submitBtn.textContent : "Submit Review & Idea";
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Delivering to Jeeva...";
        }

        const submissionData = {
          name: userName,
          email: userEmail,
          message: userMsg,
          platform: window.location.hostname || "skience.io",
          createdAt: new Date().toISOString()
        };

        // 1. Send to serverless API /api/feedback
        const apiPromise = fetch("/api/feedback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData)
        }).catch(err => console.warn("API delivery fallback:", err));

        // 2. Direct Supabase cloud persistence backup (guaranteed storage in cloud)
        const supabasePromise = (async () => {
          try {
            const SUPABASE_URL = "https://nidkkbsmptiyixvealum.supabase.co";
            const SUPABASE_KEY = "sb_publishable_VIbgYVwvFU2bcPJNLWg4Qg_Be4paQ_6";
            let existing = [];
            const r = await fetch(`${SUPABASE_URL}/rest/v1/science_notes?id=eq.feedback&select=notes`, {
              headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` }
            });
            if (r.ok) {
              const rows = await r.json();
              if (Array.isArray(rows) && rows[0]?.notes) existing = rows[0].notes;
            }
            existing.unshift({
              id: "fb_" + Date.now(),
              name: userName,
              email: userEmail,
              message: userMsg,
              createdAt: new Date().toISOString()
            });
            if (existing.length > 300) existing = existing.slice(0, 300);

            await fetch(`${SUPABASE_URL}/rest/v1/science_notes`, {
              method: "POST",
              headers: {
                "apikey": SUPABASE_KEY,
                "Authorization": `Bearer ${SUPABASE_KEY}`,
                "Content-Type": "application/json",
                "Prefer": "resolution=merge-duplicates"
              },
              body: JSON.stringify({
                id: "feedback",
                notes: existing,
                updated_at: new Date().toISOString()
              })
            });
          } catch (e) {
            console.warn("Supabase backup delivery:", e);
          }
        })();

        // 3. Multi-target email dispatch to Jeeva's personal and school inboxes
        const formSubmitPayload = {
          "Student Name": userName,
          "Student Email": userEmail,
          "Review / Idea": userMsg,
          email: userEmail.includes("@") ? userEmail : undefined,
          _replyto: userEmail.includes("@") ? userEmail : undefined,
          _subject: `skience.io Review/Idea from ${userName} (${userEmail})`,
          message: `Student Name: ${userName}\nEmail: ${userEmail}\nReview / Idea: ${userMsg}\nSubmitted: ${new Date().toLocaleString()}`,
          _template: "table"
        };
        const emails = [
          "jvrghvn0@gmail.com",
          "jeeva.raghvan@gmail.com",
          "jeev.rag914@scholarsacademy.org"
        ];
        const emailDispatches = emails.map(addr =>
          fetch(`https://formsubmit.co/ajax/${addr}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify(formSubmitPayload)
          }).catch(err => console.warn(`FormSubmit ${addr}:`, err))
        );

        // 4. Save to localStorage cache
        try {
          const localFb = JSON.parse(localStorage.getItem("skience_local_feedback") || "[]");
          localFb.unshift(submissionData);
          localStorage.setItem("skience_local_feedback", JSON.stringify(localFb.slice(0, 50)));
        } catch (_) {}

        await Promise.allSettled([apiPromise, supabasePromise, ...emailDispatches]);

        sounds.playSuccess();
        this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 60);

        if (submitBtn) {
          submitBtn.textContent = "Delivered to Jeeva!";
        }

        setTimeout(() => {
          if (nameInput) nameInput.value = "";
          if (emailInput) emailInput.value = "";
          if (msgInput) msgInput.value = "";
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = origBtnText;
          }
          fbModal?.classList.add("hidden");
        }, 1200);
      });
    }

    // Replay loader
    document.getElementById("replay-loader-btn")?.addEventListener("click", () => {
      this.replayLoader();
    });

    // In-App "All About Me" Portfolio Modal for Jeeva Raghavan (Zero Redirects)
    const openJeevaProfileModal = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      const modal = document.getElementById("projects-modal");
      if (modal) {
        modal.classList.remove("hidden");
      }
      if (typeof this.playAllAboutMeBootLoader === "function") {
        this.playAllAboutMeBootLoader();
      } else {
        sounds.playSuccess();
        this.confetti?.burst(window.innerWidth / 2, window.innerHeight * 0.35, 60);
        if (typeof this.drawMePortrait === "function") {
          this.drawMePortrait(false);
        }
      }
    };

    document.getElementById("author-credit-trigger")?.addEventListener("click", openJeevaProfileModal);
    document.querySelector(".loader-author")?.addEventListener("click", openJeevaProfileModal);

    // 1-Click Copy Gmail feature
    const copyGmailBtn = document.getElementById("btn-copy-gmail");
    if (copyGmailBtn) {
      copyGmailBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText("jvrghvn0@gmail.com").then(() => {
          sounds.playBeep(880, 0.08);
          const textEl = document.getElementById("copy-email-text");
          if (textEl) {
            const original = textEl.textContent;
            textEl.textContent = "Copied!";
            setTimeout(() => {
              textEl.textContent = original;
            }, 2000);
          }
        }).catch(() => {
          alert("Email: jvrghvn0@gmail.com");
        });
      });
    }

    document.getElementById("modal-projects-close")?.addEventListener("click", () => {
      sounds.playClick();
      document.getElementById("projects-modal")?.classList.add("hidden");
    });

    document.getElementById("project-link-skience")?.addEventListener("click", () => {
      sounds.playSuccess();
    });

    // Close on clicking backdrop
    document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          if (backdrop.id === "notes-viewer-modal") {
            this.closeNotesViewer();
          } else {
            backdrop.classList.add("hidden");
          }
        }
      });
    });

    // Escape key closes modals safely
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const notesModal = document.getElementById("notes-viewer-modal");
        if (notesModal && !notesModal.classList.contains("hidden")) {
          this.closeNotesViewer();
          return;
        }
        document.querySelectorAll(".modal-backdrop:not(.hidden)").forEach((m) => m.classList.add("hidden"));
      }
    });

    // Daily Riddle
    const riddleModal = document.getElementById("riddle-modal");
    document.getElementById("riddle-close-btn")?.addEventListener("click", () => {
      riddleModal?.classList.add("hidden");
    });

    document.getElementById("riddle-submit")?.addEventListener("click", () => {
      const ansInput = document.getElementById("riddle-answer");
      const fb = document.getElementById("riddle-feedback");
      const val = (ansInput?.value || "").toLowerCase().trim();

      if (val.includes("fossil")) {
        sounds.playSuccess();
        this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 60);
        if (fb) fb.textContent = "Brilliant! A fossil preserves prehistoric life inside rock!";
      } else {
        sounds.playClick();
        if (fb) fb.textContent = "Not quite! Think of prehistoric remains preserved in stone...";
      }
    });
  }

// HOME PAGE BACKGROUND: PITCH BLACK (OPTIMIZED FOR 60FPS)
  setupHeroSnowAndStars() {
    // Disabled in Full Performance Overhaul: stops heavy canvas loop, shooting stars, and shadowBlur repaints
    const canvas = document.getElementById("hero-snow-stars-canvas");
    if (canvas) canvas.style.display = "none";
    return;

    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = Math.max(window.innerHeight, hero.offsetHeight || window.innerHeight);
    };
    resize();
    window.addEventListener("resize", resize);
    if (window.ResizeObserver) {
      new ResizeObserver(resize).observe(hero);
    }

    // Snowflakes array (continuous snowfall across entire home page)
    const snowflakeCount = 135;
    const snowflakes = [];
    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || window.innerHeight),
        radius: Math.random() * 2.4 + 0.8,
        speedY: Math.random() * 1.3 + 0.6,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAmp: Math.random() * 1.4 + 0.4,
        opacity: Math.random() * 0.7 + 0.3
      });
    }

    // Shooting stars array
    const shootingStars = [];
    let lastShootTime = performance.now();
    let nextShootDelay = 1200;

    const spawnShootingStar = () => {
      const startX = Math.random() * (width * 0.85) + (width * 0.08);
      const startY = Math.random() * (height * 0.55);
      const angle = (Math.PI / 4) + (Math.random() * 0.25 - 0.12);
      const speed = Math.random() * 12 + 15;
      const length = Math.random() * 95 + 75;
      shootingStars.push({
        x: startX,
        y: startY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length: length,
        life: 1.0,
        decay: Math.random() * 0.02 + 0.015,
        width: Math.random() * 1.8 + 1.2
      });
    };

    const render = (time) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Periodic shooting star generation
      if (time - lastShootTime > nextShootDelay) {
        spawnShootingStar();
        lastShootTime = time;
        nextShootDelay = Math.random() * 2200 + 1200;
      }

      // Render & update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        star.x += star.dx;
        star.y += star.dy;
        star.life -= star.decay;

        if (star.life <= 0 || star.x > width + 100 || star.y > height + 100) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = star.x - (star.dx / Math.hypot(star.dx, star.dy)) * star.length;
        const tailY = star.y - (star.dy / Math.hypot(star.dx, star.dy)) * star.length;

        const grad = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
        grad.addColorStop(0, "rgba(56, 189, 248, 0)");
        grad.addColorStop(0.55, `rgba(56, 189, 248, ${star.life * 0.45})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${star.life * 0.95})`);

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = star.width;
        ctx.lineCap = "round";
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${star.life})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.width * 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Render & update snowflakes
      ctx.save();
      for (let i = 0; i < snowflakes.length; i++) {
        const flake = snowflakes[i];
        flake.y += flake.speedY;
        flake.swayAngle += flake.swaySpeed;
        flake.x += Math.sin(flake.swayAngle) * flake.swayAmp;

        if (flake.y > height) {
          flake.y = -5;
          flake.x = Math.random() * width;
        }
        if (flake.x > width) flake.x = 0;
        if (flake.x < 0) flake.x = width;

        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
        ctx.shadowBlur = flake.radius * 1.2;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }

// HERO HEADLINE ROTATOR (3s INTERVAL PER PHRASE)
  setupHeroHeadlineRotator() {
    const neonWord = document.getElementById("hero-neon-word");
    if (!neonWord) return;

    const words = [
      "CLASS NOTES.",
      "STUDY GUIDE.",
      "FORMULAS.",
      "FLASHCARDS.",
      "LAB NOTES.",
      "5TH GRADE.",
      "DIAGRAMS.",
      "QUIZZES."
    ];
    let wordIndex = 0;

    const rotateWord = () => {
      setTimeout(() => {
        // 1. Exit animation (smooth slide up + cyber glow blur)
        neonWord.classList.add("word-exit");

        setTimeout(() => {
          // 2. Advance index in exact continuous order and update text
          wordIndex = (wordIndex + 1) % words.length;
          neonWord.textContent = words[wordIndex];

          // 3. Prepare entry from bottom with reflow
          neonWord.classList.remove("word-exit");
          neonWord.classList.add("word-enter-from-bottom");
          void neonWord.offsetWidth;

          // 4. Animate smoothly to resting position
          requestAnimationFrame(() => {
            neonWord.classList.remove("word-enter-from-bottom");
          });

          // 5. Schedule next rotation after 3 full seconds of visibility
          rotateWord();
        }, 360);
      }, 3000);
    };

    rotateWord();
  }

// ME.SKIENCE.IO PORTFOLIO & macOS TERMINAL ENGINE
  setupMeSkiencePortfolio() {
    const emailAddress = "jvrghvn0@gmail.com";
    const ytUrl = "https://youtube.com/@rivals0321";
    const ghUrl = "https://github.com/jeevaraghvan-ux";

    const projectsData = {
      skience: {
        name: "skience",
        domain: "skienceisthebest.vercel.app",
        url: "https://skienceisthebest.vercel.app",
        tag: "Built for learning",
        description: "5th Grade Science notes, interactive formula calculator, and study tools. Making the things you're learning a little easier to understand."
      }
    };

    // Toast helper
    const showToast = (msg) => {
      const toast = document.getElementById("me-toast");
      if (!toast) return;
      toast.textContent = msg;
      toast.hidden = false;
      clearTimeout(this._toastTimeout);
      this._toastTimeout = setTimeout(() => {
        toast.hidden = true;
      }, 2500);
    };

    // Pixel portrait drawing with Real-time Mouse Eye Tracking
    const canvas = document.getElementById("me-portrait-canvas");
    let isWaving = false;
    let waveTimeout = null;
    let pupilX = 0;
    let pupilY = 0;

    const drawPortrait = (waving = false, pX = 0, pY = 0) => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, 96, 96);
      const fill = (x, y, w, h, col) => {
        ctx.fillStyle = col;
        ctx.fillRect(x, y, w, h);
      };
      fill(19, 84, 58, 5, '#20291c');
      fill(15, 89, 66, 3, '#151b11');
      fill(30, 19, 35, 6, '#222720');
      fill(24, 25, 46, 29, '#222720');
      fill(28, 32, 37, 29, '#b97d57');
      fill(23, 42, 5, 11, '#b97d57');
      fill(65, 42, 5, 11, '#b97d57');
      fill(28, 28, 37, 8, '#282b21');
      fill(26, 35, 8, 8, '#282b21');
      fill(59, 35, 8, 8, '#282b21');
      fill(31, 43, 12, 9, '#171b15');
      fill(50, 43, 12, 9, '#171b15');
      fill(43, 45, 7, 3, '#171b15');
      // Pupils with dynamic eye tracking offset
      fill(34 + pX, 45 + pY, 5, 3, '#d9dcd2');
      fill(53 + pX, 45 + pY, 5, 3, '#d9dcd2');
      fill(44, 50, 5, 5, '#925e3e');
      fill(40, 57, 14, 3, '#eceee6');
      fill(34, 61, 25, 8, '#b97d57');
      fill(31, 67, 31, 20, '#4a8a50');
      fill(25, 70, 8, 17, '#3b7141');
      fill(61, 70, 8, 17, '#3b7141');
      fill(39, 67, 15, 6, '#304e30');
      fill(45, 74, 4, 4, '#78d98a');
      fill(29, 85, 16, 7, '#242c20');
      fill(49, 85, 16, 7, '#242c20');
      fill(26, 92, 19, 4, '#141711');
      fill(49, 92, 20, 4, '#141711');
      if (waving) {
        fill(65, 61, 8, 12, '#4a8a50');
        fill(71, 46, 7, 19, '#4a8a50');
        fill(71, 39, 7, 10, '#b97d57');
        fill(75, 36, 3, 5, '#b97d57');
      } else {
        fill(24, 85, 9, 6, '#b97d57');
        fill(61, 85, 9, 6, '#b97d57');
      }
    };
    this.drawMePortrait = drawPortrait;
    drawPortrait(false, 0, 0);

    // Eye tracking listener across the about me modal
    const meModal = document.getElementById("projects-modal");
    if (meModal) {
      meModal.addEventListener("mousemove", (e) => {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        const newPX = Math.max(-2, Math.min(2, Math.round(dx / 75)));
        const newPY = Math.max(-1, Math.min(1, Math.round(dy / 90)));
        if (newPX !== pupilX || newPY !== pupilY) {
          pupilX = newPX;
          pupilY = newPY;
          drawPortrait(isWaving, pupilX, pupilY);
        }
      });
    }

    // Avatar speech bubbles & greeting
    const speechBubble = document.getElementById("avatar-speech-bubble");
    const avatarQuotes = [
      "Hi, player 2!",
      "Building the future at skience!",
      "Skience.io is live in neon!",
      "Curiosity is power!",
      "Every line coded by hand!",
      "Making things that matter!"
    ];
    let quoteIndex = 0;

    document.getElementById("me-portrait-btn")?.addEventListener("click", () => {
      isWaving = true;
      drawPortrait(true, pupilX, pupilY);
      sounds.playCoin();
      const currentQuote = avatarQuotes[quoteIndex % avatarQuotes.length];
      quoteIndex++;
      if (speechBubble) {
        speechBubble.textContent = currentQuote;
        speechBubble.classList.remove("hidden");
        clearTimeout(this._bubbleTimeout);
        this._bubbleTimeout = setTimeout(() => {
          speechBubble.classList.add("hidden");
        }, 2600);
      }
      showToast("Jeeva: " + currentQuote);
      clearTimeout(waveTimeout);
      waveTimeout = setTimeout(() => {
        isWaving = false;
        drawPortrait(false, pupilX, pupilY);
      }, 2400);
    });

    // 3D Holographic Tilt on project cards
    document.querySelectorAll(".me-skience-container .project-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotX = ((y - centerY) / centerY) * -9;
        const rotY = ((x - centerX) / centerX) * 9;
        card.style.transform = `perspective(800px) rotateX(${rotX.toFixed(1)}deg) rotateY(${rotY.toFixed(1)}deg) translateZ(8px)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      });
    });

    // Project inspect dialog
    const projectDialog = document.getElementById("me-project-dialog");
    document.querySelectorAll(".inspect-project").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.project;
        const project = projectsData[key];
        if (!project || !projectDialog) return;
        sounds.playClick();
        document.getElementById("me-dialog-title").textContent = project.name;
        document.getElementById("me-dialog-description").textContent = project.description;
        const link = document.getElementById("me-dialog-link");
        if (link) {
          link.href = project.url;
          link.textContent = `Visit ${project.name}`;
        }
        if (typeof projectDialog.showModal === "function") {
          projectDialog.showModal();
        } else {
          projectDialog.setAttribute("open", "true");
        }
      });
    });

    document.getElementById("me-dialog-close")?.addEventListener("click", () => {
      sounds.playClick();
      if (typeof projectDialog?.close === "function") {
        projectDialog.close();
      } else {
        projectDialog?.removeAttribute("open");
      }
    });

    projectDialog?.addEventListener("click", (e) => {
      const rect = projectDialog.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        if (typeof projectDialog.close === "function") projectDialog.close();
        else projectDialog.removeAttribute("open");
      }
    });

// "ALL ABOUT ME" RETRO-CYBER KERNEL BOOT LOADER
    const bootLoader = document.getElementById("me-boot-loader");
    const bootLogs = document.getElementById("me-boot-logs");
    const bootFill = document.getElementById("me-boot-progress-fill");
    const bootStatus = document.getElementById("me-boot-status-text");
    const bootPct = document.getElementById("me-boot-pct-text");
    let bootTimeouts = [];
    let isBooting = false;

    const clearBootTimeouts = () => {
      bootTimeouts.forEach(t => clearTimeout(t));
      bootTimeouts = [];
    };

    const addBootLog = (line, okText = "[  OK  ]") => {
      if (!bootLogs) return;
      const row = document.createElement("div");
      row.className = "me-boot-log-line";
      row.innerHTML = `<span class="log-ok">${okText}</span> ${line}`;
      bootLogs.appendChild(row);
      bootLogs.scrollTop = bootLogs.scrollHeight;
    };

    const finishBootLoader = (instant = false) => {
      clearBootTimeouts();
      if (!bootLoader || !isBooting) return;
      isBooting = false;

      if (bootFill) bootFill.style.width = "100%";
      if (bootPct) bootPct.textContent = "100%";
      if (bootStatus) bootStatus.textContent = ">> SYSTEM READY. WELCOME, PLAYER 2.";

      sounds.playCoin();
      sounds.playSuccess();
      this.confetti?.burst(window.innerWidth / 2, window.innerHeight * 0.35, 60);

      const delay = instant ? 80 : 250;
      setTimeout(() => {
        bootLoader.classList.add("boot-exit");
        setTimeout(() => {
          bootLoader.classList.add("hidden");
          bootLoader.classList.remove("crt-turn-on", "boot-exit");
          drawPortrait(false, 0, 0);
        }, 300);
      }, delay);
    };

    const playAllAboutMeBootLoader = () => {
      if (!bootLoader) return;
      clearBootTimeouts();
      isBooting = true;

      // Reset state
      if (bootLogs) bootLogs.innerHTML = "";
      if (bootFill) bootFill.style.width = "0%";
      if (bootPct) bootPct.textContent = "0%";
      if (bootStatus) bootStatus.textContent = "LOADING PROFILE...";

      bootLoader.classList.remove("hidden", "boot-exit");
      bootLoader.classList.add("crt-turn-on");

      sounds.playKeypadTap();

      const logSequence = [
        { time: 100, text: "STARTING PROFILE..." },
        { time: 240, text: "LOADING /skience" },
        { time: 380, text: "AUDIO: READY" },
        { time: 520, text: "OPENING ABOUT ME..." }
      ];

      logSequence.forEach(({ time, text }) => {
        bootTimeouts.push(setTimeout(() => {
          if (!isBooting) return;
          addBootLog(text);
          sounds.playKeypadTap();
        }, time));
      });

      // Progress bar ticks
      bootTimeouts.push(setTimeout(() => {
        if (!isBooting) return;
        if (bootFill) bootFill.style.width = "46%";
        if (bootPct) bootPct.textContent = "46%";
        if (bootStatus) bootStatus.textContent = "LOADING UNITS...";
        sounds.playKeypadTap();
      }, 550));

      bootTimeouts.push(setTimeout(() => {
        if (!isBooting) return;
        if (bootFill) bootFill.style.width = "88%";
        if (bootPct) bootPct.textContent = "88%";
        if (bootStatus) bootStatus.textContent = "ALMOST READY...";
        sounds.playKeypadTap();
      }, 820));

      bootTimeouts.push(setTimeout(() => {
        if (!isBooting) return;
        if (bootFill) bootFill.style.width = "100%";
        if (bootPct) bootPct.textContent = "100%";
        if (bootStatus) bootStatus.textContent = ">> SYSTEM READY. WELCOME, PLAYER 2.";
        addBootLog("ALL SUBSYSTEMS NOMINAL. LAUNCHING PORTFOLIO.", "[ READY ]");
      }, 1080));

      // Auto finish
      bootTimeouts.push(setTimeout(() => {
        finishBootLoader(false);
      }, 1300));
    };

    this.playAllAboutMeBootLoader = playAllAboutMeBootLoader;

    // Skip on click or keyboard shortcut
    bootLoader?.addEventListener("click", () => {
      if (isBooting) finishBootLoader(true);
    });

    window.addEventListener("keydown", (e) => {
      if (!isBooting) return;
      if (e.key === " " || e.key === "Spacebar" || e.key === "Escape" || e.key === "Enter") {
        e.preventDefault();
        finishBootLoader(true);
      }
    });

    // Replay intro button in me footer
    document.getElementById("me-replay-btn")?.addEventListener("click", () => {
      sounds.playClick();
      const scrollable = document.querySelector(".me-modal-scrollable");
      if (scrollable) scrollable.scrollTo({ top: 0, behavior: "smooth" });
      resetTerminal();
      playAllAboutMeBootLoader();
    });

// macOS TERMINAL ENGINE
    const terminalOutput = document.getElementById("me-terminal-output");
    const terminalForm = document.getElementById("me-terminal-form");
    const terminalInput = document.getElementById("me-terminal-command");
    const terminalClearBtn = document.getElementById("me-terminal-clear");
    const matrixCanvas = document.getElementById("me-terminal-matrix-canvas");
    const customAudioFileInput = document.getElementById("terminal-custom-audio-file");
    const macTerminal = document.getElementById("me-mac-terminal");
    const macLightClose = document.getElementById("mac-light-close");
    const macLightMinimize = document.getElementById("mac-light-minimize");
    const macLightZoom = document.getElementById("mac-light-zoom");

    const commandHistory = [];
    let historyIndex = 0;
    let awaitingJokeResponse = false;
    let matrixRunning = false;
    let matrixAnimId = null;

    // Window Traffic Light Controls (Red / Yellow / Green)
    macLightClose?.addEventListener("click", () => {
      sounds.playClick();
      resetTerminal();
      showToast("Terminal session cleared.");
    });

    macLightMinimize?.addEventListener("click", () => {
      sounds.playClick();
      if (macTerminal) {
        macTerminal.classList.toggle("is-minimized");
        if (macTerminal.classList.contains("is-minimized")) {
          showToast("Terminal minimized. Click yellow button to restore.");
        }
      }
    });

    macLightZoom?.addEventListener("click", () => {
      sounds.playClick();
      if (macTerminal) {
        macTerminal.classList.toggle("is-maximized");
        const titleText = document.getElementById("terminal-title-display");
        if (titleText) {
          titleText.textContent = macTerminal.classList.contains("is-maximized")
            ? "jeeva  //  -zsh  //  140×36 (Zoomed)"
            : "jeeva  //  -zsh  //  80×24";
        }
      }
    });

    // Terminal typing sound & hotkeys (Cmd+K / Ctrl+K to clear, Cmd+1..6 for dock)
    terminalInput?.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        sounds.playClick();
        resetTerminal();
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key >= "1" && e.key <= "6") {
        e.preventDefault();
        const btns = document.querySelectorAll("#me-terminal-actions button");
        const idx = parseInt(e.key, 10) - 1;
        if (btns[idx]) btns[idx].click();
        return;
      }

      if (e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.key !== "Control" && e.key !== "Alt" && e.key !== "Meta") {
        sounds.playMechanicalKey();
      }
    });

    // Dynamic initial session time
    const updateLoginTime = () => {
      const el = document.getElementById("terminal-login-time");
      if (el) {
        el.textContent = new Date().toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        });
      }
    };
    updateLoginTime();

    // Matrix Digital Rain
    const toggleMatrixRain = () => {
      if (!matrixCanvas) return;
      matrixRunning = !matrixRunning;
      if (matrixRunning) {
        matrixCanvas.classList.remove("hidden");
        const parent = matrixCanvas.parentElement;
        matrixCanvas.width = parent ? parent.clientWidth : 400;
        matrixCanvas.height = parent ? parent.clientHeight : 260;
        const ctx = matrixCanvas.getContext("2d");
        const cols = Math.floor(matrixCanvas.width / 14);
        const ypos = Array(cols).fill(0);
        const chars = "0123456789ABCDEFSKIENCE";

        const stepMatrix = () => {
          if (!matrixRunning) return;
          ctx.fillStyle = "rgba(10, 13, 9, 0.15)";
          ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
          ctx.fillStyle = "#78d98a";
          ctx.font = "12px monospace";

          ypos.forEach((y, ind) => {
            const text = chars[Math.floor(Math.random() * chars.length)];
            const x = ind * 14;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
            else ypos[ind] = y + 14;
          });
          matrixAnimId = requestAnimationFrame(stepMatrix);
        };
        sounds.playMatrix();
        cancelAnimationFrame(matrixAnimId);
        matrixAnimId = requestAnimationFrame(stepMatrix);
        appendTerminalLine("Matrix rain activated. Type 'matrix' or 'clear' to disable.", "command-result");
      } else {
        matrixCanvas.classList.add("hidden");
        cancelAnimationFrame(matrixAnimId);
        appendTerminalLine("Matrix rain stopped.", "command-result");
      }
    };

    const resetTerminal = () => {
      if (!terminalOutput) return;
      terminalOutput.innerHTML = "";
      const dateStr = new Date().toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      const header = document.createElement("div");
      header.className = "terminal-session-header";
      header.innerHTML = `Last login: <span>${dateStr}</span> on ttys001`;
      const intro = document.createElement("p");
      intro.className = "terminal-intro-line";
      intro.innerHTML = `hi. this is jeeva’s terminal. Type <span class="term-hl">help</span> for commands, or use the dock buttons below.`;
      terminalOutput.appendChild(header);
      terminalOutput.appendChild(intro);
      awaitingJokeResponse = false;
      if (matrixRunning) toggleMatrixRain();
    };

    terminalClearBtn?.addEventListener("click", () => {
      sounds.playClick();
      resetTerminal();
    });

    const appendTerminalLine = (text, className = "command-result") => {
      if (!terminalOutput) return;
      const p = document.createElement("p");
      p.className = className;
      p.textContent = text;
      terminalOutput.appendChild(p);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      return p;
    };

    const appendTerminalLink = (text, href, isBlank = true) => {
      if (!terminalOutput) return;
      const p = document.createElement("p");
      p.className = "command-result";
      const a = document.createElement("a");
      a.textContent = text;
      a.href = href;
      if (isBlank) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      p.appendChild(a);
      terminalOutput.appendChild(p);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    };

    const copyEmail = async () => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(emailAddress);
        } else {
          throw new Error("Clipboard unavailable");
        }
        appendTerminalLine("Email copied. Let's make something.");
        showToast("Email copied to clipboard.");
        sounds.playSuccess();
      } catch (err) {
        appendTerminalLine(`Copy this address: ${emailAddress}`);
        appendTerminalLink("Open your email app", `mailto:${emailAddress}`, false);
      }
    };

    // Custom user music playback
    let currentCustomAudio = null;
    let customAudioInterval = null;

    const setupCustomMusicPlayer = async (file) => {
      if (!file) return;
      if (!file.type.startsWith("audio/")) {
        appendTerminalLine("Error: Please select a valid audio file (.mp3, .wav, .m4a, .ogg).");
        return;
      }

      if (currentCustomAudio) {
        try { currentCustomAudio.pause(); } catch (_) {}
        clearInterval(customAudioInterval);
      }

      let cleanName = "";
      let coverArtUrl = null;
      try {
        const meta = await AudioMetadataParser.parseAudioMetadata(file, file.name);
        cleanName = meta.cleanTitle;
        coverArtUrl = meta.coverArtUrl;
      } catch (_) {
        cleanName = AudioMetadataParser.cleanFilename(file.name);
      }
      if (!cleanName) cleanName = "Custom Audio";

      // 1. Automatically stop Am I Wrong / default anthem and play custom uploaded track on background player
      if (window.bgMusic && typeof window.bgMusic.playCustomUploadedFile === "function") {
        await window.bgMusic.playCustomUploadedFile(file, cleanName);
      } else if (bgMusic && typeof bgMusic.playCustomUploadedFile === "function") {
        await bgMusic.playCustomUploadedFile(file, cleanName);
      }

      appendTerminalLine(`Now Playing: "${cleanName}"`, "command-result");
      if (coverArtUrl) {
        appendTerminalLine(`Extracted embedded album cover art for Dynamic Island!`, "terminal-muted");
      }
      appendTerminalLine(`Study anthem stopped. Background music set to "${cleanName}".`, "terminal-muted");
      appendTerminalLine(`Mac Dynamic Island updated with real-time scrubber and controls!`, "terminal-muted");

      const coverThumb = coverArtUrl
        ? `<img src="${coverArtUrl}" alt="Album Art" style="width:38px;height:38px;border-radius:6px;object-fit:cover;border:1px solid rgba(0,245,212,0.6);box-shadow:0 0 10px rgba(0,245,212,0.3);flex-shrink:0;">`
        : "";

      const card = document.createElement("div");
      card.className = "terminal-audio-card";
      card.innerHTML = `
        <div class="terminal-audio-header" style="display:flex;align-items:center;gap:10px;">
          ${coverThumb}
          <div style="flex:1;min-width:0;">
            <div style="font-weight:700;color:#00f5d4;">CUSTOM CYBER AUDIO</div>
            <div class="terminal-audio-time" id="terminal-audio-timer" style="font-size:11px;color:#94a3b8;">0:00 / 0:00</div>
          </div>
        </div>
        <div class="terminal-audio-track">Track: <strong>${cleanName}</strong> (${(file.size / 1024 / 1024).toFixed(2)} MB)</div>
        <div class="terminal-audio-controls">
          <button type="button" class="terminal-audio-btn" id="terminal-btn-playpause">Pause</button>
          <button type="button" class="terminal-audio-btn" id="terminal-btn-stop" style="background:#ff7a3d; color:#0c0d0b;">Stop</button>
          <button type="button" class="terminal-audio-btn" id="terminal-btn-reupload" style="background:#5e6b57; color:#fff;">Change Track</button>
          <div class="terminal-audio-bars">
            <span class="terminal-audio-bar playing"></span>
            <span class="terminal-audio-bar playing"></span>
            <span class="terminal-audio-bar playing"></span>
            <span class="terminal-audio-bar playing"></span>
            <span class="terminal-audio-bar playing"></span>
          </div>
        </div>
      `;

      terminalOutput?.appendChild(card);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;

      const playPauseBtn = card.querySelector("#terminal-btn-playpause");
      const stopBtn = card.querySelector("#terminal-btn-stop");
      const reuploadBtn = card.querySelector("#terminal-btn-reupload");
      const timerEl = card.querySelector("#terminal-audio-timer");
      const bars = card.querySelectorAll(".terminal-audio-bar");

      const formatTime = (sec) => {
        const m = Math.floor(sec / 60) || 0;
        const s = Math.floor(sec % 60) || 0;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
      };

      showToast("Playing: " + cleanName);
      sounds.playCoin();

      const bgAudio = document.getElementById("bg-music-player");
      customAudioInterval = setInterval(() => {
        if (!bgAudio) return;
        const cur = formatTime(bgAudio.currentTime);
        const dur = formatTime(bgAudio.duration || 0);
        if (timerEl) timerEl.textContent = `${cur} / ${dur}`;
        const isPlaying = !bgAudio.paused;
        if (playPauseBtn) playPauseBtn.textContent = isPlaying ? "Pause" : "Play";
        bars.forEach(b => b.classList.toggle("playing", isPlaying));
      }, 400);

      playPauseBtn?.addEventListener("click", () => {
        sounds.playClick();
        if (window.bgMusic && typeof window.bgMusic.toggle === "function") {
          window.bgMusic.toggle();
        } else if (bgAudio) {
          if (bgAudio.paused) bgAudio.play().catch(() => {});
          else bgAudio.pause();
        }
      });

      stopBtn?.addEventListener("click", () => {
        sounds.playClick();
        if (bgAudio) {
          bgAudio.pause();
          bgAudio.currentTime = 0;
        }
        if (playPauseBtn) playPauseBtn.textContent = "Play";
        bars.forEach(b => b.classList.remove("playing"));
      });

      reuploadBtn?.addEventListener("click", () => {
        sounds.playClick();
        customAudioFileInput?.click();
      });
    };

    customAudioFileInput?.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        setupCustomMusicPlayer(file);
      }
    });

    const executeCommand = (cmdText) => {
      const raw = (cmdText || "").trim();
      const cleanCmd = raw.toLowerCase().replace(/\s+/g, ' ');
      if (!cleanCmd) return;

      commandHistory.push(raw);
      historyIndex = commandHistory.length;

      if (terminalOutput) {
        const line = document.createElement("div");
        line.className = "command-line";
        const sanitized = raw.replace(/[&<>'\"]/g, tag => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;'
        }[tag] || tag));
        line.innerHTML = `<span class="terminal-prompt-user">guest@jeeva-macbook</span><span class="terminal-prompt-colon">:</span><span class="terminal-prompt-dir">~</span><span class="terminal-prompt-symbol">%</span> <span>${sanitized}</span>`;
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }

      // Check if user is responding to the joke punchline setup
      if (awaitingJokeResponse) {
        appendTerminalLine("To get to the other side!");
        awaitingJokeResponse = false;
        sounds.playSuccess();
        return;
      }

      // 1. Terminal direct gateway disabled: use Study Lookup panel
      if (cleanCmd === "secret vault access" || cleanCmd === "vault" || cleanCmd === "admin vault" || cleanCmd === "6151983" || cleanCmd === "11182015") {
        appendTerminalLine("ACCESS GATEWAY RESTRICTED", "command-result");
        appendTerminalLine("Direct terminal entry is decommissioned. Use the Study Lookup panel to open the Admin Security Vault.", "terminal-muted");
        sounds.playVaultError();
        return;
      }

      // 2. SECRET CODE: music / upload / secret -> upload your own music
      if (
        cleanCmd === "music" ||
        cleanCmd === "secret" ||
        cleanCmd === "upload" ||
        cleanCmd === "music upload" ||
        cleanCmd === "upload music" ||
        cleanCmd === "own music" ||
        cleanCmd === "own music upload" ||
        cleanCmd === "studio"
      ) {
        appendTerminalLine("SECRET MUSIC STUDIO & UPLOADER UNLOCKED", "command-result");
        appendTerminalLine("Secret Code Validated! Upload your own audio file (.mp3, .wav, .m4a, .ogg) to play on skience.io:", "terminal-muted");
        
        const uploadBtn = document.createElement("button");
        uploadBtn.type = "button";
        uploadBtn.className = "terminal-audio-btn";
        uploadBtn.style.marginTop = "8px";
        uploadBtn.textContent = "Select Music File";
        uploadBtn.addEventListener("click", () => {
          sounds.playClick();
          customAudioFileInput?.click();
        });

        terminalOutput?.appendChild(uploadBtn);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;

        customAudioFileInput?.click();
        sounds.playCoin();
        return;
      }



      // 4. CALC COMMAND (Safe Math Evaluator)
      if (cleanCmd === "calc" || cleanCmd.startsWith("calc ")) {
        const expr = raw.slice(4).trim();
        if (!expr) {
          appendTerminalLine("Usage: calc <math expression>\nExamples:\n• calc (42 * 1337) / 2\n• calc sqrt(256)\n• calc 2^8\n• calc pi * 10^2");
          return;
        }

        try {
          let sanitizedExpr = expr
            .replace(/\bpi\b/gi, "Math.PI")
            .replace(/\be\b/gi, "Math.E")
            .replace(/\bsqrt\(([^)]+)\)/gi, "Math.sqrt($1)")
            .replace(/\babs\(([^)]+)\)/gi, "Math.abs($1)")
            .replace(/\bround\(([^)]+)\)/gi, "Math.round($1)")
            .replace(/\bfloor\(([^)]+)\)/gi, "Math.floor($1)")
            .replace(/\bceil\(([^)]+)\)/gi, "Math.ceil($1)")
            .replace(/\bsin\(([^)]+)\)/gi, "Math.sin($1)")
            .replace(/\bcos\(([^)]+)\)/gi, "Math.cos($1)")
            .replace(/\btan\(([^)]+)\)/gi, "Math.tan($1)")
            .replace(/\blog\(([^)]+)\)/gi, "Math.log10($1)")
            .replace(/\^/g, "**");

          if (!/^[\d\s+\-*/%(),.MathPIEsqrtabsroundfloorceilsincostanlog]+$/.test(sanitizedExpr)) {
            throw new Error("Invalid characters");
          }

          const result = Function(`"use strict"; return (${sanitizedExpr});`)();
          if (typeof result !== "number" || isNaN(result)) {
            throw new Error("Invalid calculation");
          }

          const formattedResult = Number.isInteger(result) ? result : parseFloat(result.toFixed(6));
          appendTerminalLine(`= ${formattedResult}`, "command-result");
          sounds.playSuccess();
        } catch (err) {
          appendTerminalLine(`Error: Unable to calculate "${expr}". Check math syntax (e.g. calc 25 * 4, calc sqrt(144)).`);
        }
        return;
      }



      switch (cleanCmd) {
        case "help":
          appendTerminalLine(
            "email        --> write a note\n" +
            "copy         --> copy my email\n" +
            "follow       --> find me elsewhere\n" +
            "projects     --> see what I’ve built\n" +
            "skills       --> visual skill meters\n" +
            "banner       --> neon cyber banner\n" +
            "about        --> a little about me\n" +
            "music        --> upload your own music\n" +
            "sciencefact  --> mind-blowing science fact\n" +
            "quote        --> inspirational pioneer quote\n" +
            "calc <math>  --> terminal quick calculator\n" +
            "clear        --> a fresh terminal\n" +
            "hello        --> say hello\n" +
            "replay       --> play the intro again\n" +
            "joke         --> hear a joke"
          );
          break;

        case "sciencefact":
        case "fact": {
          const scienceFacts = [
            "A teaspoon of a neutron star would weigh about 6 billion tons on Earth.",
            "Light travels fast enough to circle the Earth approximately 7.5 times in one second (299,792 km/s).",
            "Tardigrades (water bears) can survive the intense vacuum, extreme cold, and cosmic radiation of open space.",
            "Venus is the hottest planet in our solar system (465°C / 869°F), hot enough to melt lead due to runaway greenhouse gases.",
            "Honey never spoils; archaeologists discovered 3,000-year-old edible honey jars in ancient Egyptian tombs.",
            "If you could fold a standard piece of paper 42 times, its thickness would reach the Moon.",
            "A single bolt of lightning contains enough electrical energy to toast 100,000 slices of bread.",
            "Saturn is the only planet in our solar system whose average density is lower than liquid water // it would float in a giant bathtub!",
            "DNA uncoiled from all the cells in your body would stretch from Earth to Pluto and back.",
            "Octopuses have three hearts, nine brains, and blue copper-based blood.",
            "Bananas are naturally slightly radioactive because they contain high levels of the potassium-40 isotope."
          ];
          const fact = scienceFacts[Math.floor(Math.random() * scienceFacts.length)];
          appendTerminalLine("MIND-BLOWING SKIENCE FACT:", "command-result");
          appendTerminalLine(`"${fact}"`);
          sounds.playSuccess();
          break;
        }

        case "quote":
        case "wisdom": {
          const pioneerQuotes = [
            { quote: "The important thing is not to stop questioning. Curiosity has its own reason for existence.", author: "Albert Einstein" },
            { quote: "I would rather have questions that can't be answered than answers that can't be questioned.", author: "Richard Feynman" },
            { quote: "Sometimes it is the people no one imagines anything of who do the things that no one can imagine.", author: "Alan Turing" },
            { quote: "The people who are crazy enough to think they can change the world are the ones who do.", author: "Steve Jobs" },
            { quote: "That brain of mine is something more than merely mortal; as time will show.", author: "Ada Lovelace" },
            { quote: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
            { quote: "The present is theirs; the future, for which I really worked, is mine.", author: "Nikola Tesla" },
            { quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", author: "Marie Curie" },
            { quote: "The most dangerous phrase in the language is, 'We've always done it this way.'", author: "Grace Hopper" }
          ];
          const item = pioneerQuotes[Math.floor(Math.random() * pioneerQuotes.length)];
          appendTerminalLine("PIONEER WISDOM:", "command-result");
          appendTerminalLine(`"${item.quote}"\n //  ${item.author}`);
          sounds.playSuccess();
          break;
        }

        case "skills":
          appendTerminalLine(
            "SKILLS & TECH LOADOUT:\n" +
            "HTML5 & Canvas        [████████████████] 100%\n" +
            "CSS Grid & Layout     [████████████████] 100%\n" +
            "JavaScript & Audio    [██████████████░]  95%\n" +
            "Curiosity & Code      [████████████████] 100%"
          );
          sounds.playSuccess();
          break;

        case "banner":
          appendTerminalLine(
            "   ___ _____ _____ _   _   _   \n" +
            "  |_  |  ___|  ___| | | | / \\  \n" +
            "    | | |__ | |__ | | | |/ _ \\ \n" +
            "| | | |  __||  __|| | | / ___ \\\n" +
            "| |_| | |___| |___\\ \\_/ / /   \\\n" +
            " \\___/\\____/\\____/ \\___/_/     \\\n" +
            "JEEVA RAGHAVAN • DEVELOPER • SKIENCE"
          );
          sounds.playSuccess();
          break;

        case "matrix":
          toggleMatrixRain();
          break;

        case "email":
        case "contact":
          appendTerminalLink(emailAddress, `mailto:${emailAddress}`, false);
          appendTerminalLine("Or type “copy” to grab the address.");
          break;

        case "copy":
          copyEmail();
          break;

        case "follow":
          appendTerminalLink("YouTube → @rivals0321", ytUrl);
          appendTerminalLink("GitHub → @jeevaraghvan-ux", ghUrl);
          break;

        case "projects":
          Object.values(projectsData).forEach((proj) => {
            appendTerminalLink(`${proj.name} → ${proj.domain}`, proj.url);
          });
          break;

        case "about":
          appendTerminalLine(
            "Jeeva Raghavan. Developer. Making Things for skience.\n" +
            "gng I don't know."
          );
          break;

        case "clear":
          resetTerminal();
          break;

        case "hello":
        case "hi":
          appendTerminalLine("Hi, player 2. Welcome to my little corner of the web.");
          sounds.playSuccess();
          break;

        case "replay":
        case "boot":
          resetTerminal();
          const scrollable = document.querySelector(".me-modal-scrollable");
          if (scrollable) scrollable.scrollTo({ top: 0, behavior: "smooth" });
          if (typeof this.playAllAboutMeBootLoader === "function") {
            this.playAllAboutMeBootLoader();
          }
          break;

        case "joke":
          appendTerminalLine("Why did the chicken cross the road.");
          awaitingJokeResponse = true;
          break;

        default:
          appendTerminalLine(`Unknown command: ${raw}. Type "help" to see what works.`);
          break;
      }
    };

    terminalForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!terminalInput) return;
      const text = terminalInput.value;
      terminalInput.value = "";
      executeCommand(text);
    });

    terminalInput?.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        historyIndex = Math.max(0, historyIndex - 1);
        terminalInput.value = commandHistory[historyIndex] || "";
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        historyIndex = Math.min(commandHistory.length, historyIndex + 1);
        terminalInput.value = commandHistory[historyIndex] || "";
      }
    });

    document.querySelectorAll("[data-command]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const c = btn.dataset.command;
        if (c) executeCommand(c);
      });
    });
  }

// MONOCHROME PRO UPGRADES
  setupMonochromeProSystem() {
    this.setupMagneticFluidCursor();
    this.setupCommandHud();
    this.setupExtended3DTiltAndSpecularShimmer();
    this.setupDynamicIsland();
    this.setupAppleFlashcards();
    this.setupAppleSplitView();
    this.setupAppleActivityRings();
  }

  setupMagneticFluidCursor() {
    // Disabled in Full Performance Overhaul: restores native fast cursor, stops tickRing RAF loop & spotlight recalcs
    const dot = document.getElementById("fluid-cursor-dot");
    const ring = document.getElementById("fluid-cursor-ring");
    const spotlight = document.getElementById("mouse-spotlight");
    if (dot) dot.style.display = "none";
    if (ring) ring.style.display = "none";
    if (spotlight) spotlight.style.display = "none";
    return;

    // Only enable when a fine pointer (mouse/trackpad) is present
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHidden = true;
    let isSnapped = false;
    let isMouseDown = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (isHidden) {
        isHidden = false;
        dot.classList.remove("hidden");
        ring.classList.remove("hidden");
      }

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      // Update ambient obsidian spotlight coordinates
      document.documentElement.style.setProperty("--spotlight-x", `${mouseX}px`);
      document.documentElement.style.setProperty("--spotlight-y", `${mouseY}px`);

      // Check if hovering interactive target
      const target = e.target.closest(
        "button, a, input, select, textarea, .deck-card, .project-card, .nav-icon-btn, .calc-key, .theme-swatch-btn, .pill-toggle-btn, .cat-pill, .hud-result-item, .hud-filter-chip, .portrait-button, .terminal-actions button, .contact-link"
      );

      if (target && !isSnapped) {
        isSnapped = true;
        ring.classList.add("snapped");
      } else if (!target && isSnapped) {
        isSnapped = false;
        ring.classList.remove("snapped");
      }
    };

    const onMouseDown = () => {
      isMouseDown = true;
      dot.classList.add("clicked");
      ring.classList.add("clicked");
    };

    const onMouseUp = () => {
      isMouseDown = false;
      dot.classList.remove("clicked");
      ring.classList.remove("clicked");
    };

    const onMouseLeaveDoc = () => {
      isHidden = true;
      dot.classList.add("hidden");
      ring.classList.add("hidden");
    };

    const onMouseEnterDoc = () => {
      isHidden = false;
      dot.classList.remove("hidden");
      ring.classList.remove("hidden");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeaveDoc);
    document.addEventListener("mouseenter", onMouseEnterDoc);

    // Smooth spring/lerp ring follow loop
    const tickRing = () => {
      if (!isHidden) {
        ringX += (mouseX - ringX) * 0.22;
        ringY += (mouseY - ringY) * 0.22;
        ring.style.left = `${ringX.toFixed(1)}px`;
        ring.style.top = `${ringY.toFixed(1)}px`;
      }
      requestAnimationFrame(tickRing);
    };
    requestAnimationFrame(tickRing);
  }

  setupExtended3DTiltAndSpecularShimmer() {
    // Disabled in Full Performance Overhaul: eliminates whole-app MutationObserver and 3D card tilt lag
    return;
    const attachCardTilt = (card) => {
      if (!card || card._hasExtendedTilt) return;
      card._hasExtendedTilt = true;
      card.classList.add("pro-hairline-card", "pro-tilt-card");

      let rect = null;

      const onEnter = () => {
        rect = card.getBoundingClientRect();
      };

      const onMove = (e) => {
        if (!rect) rect = card.getBoundingClientRect();
        if (!rect || rect.width === 0 || rect.height === 0) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const tiltX = ((y / rect.height) - 0.5) * -10;
        const tiltY = ((x / rect.width) - 0.5) * 10;

        card.style.setProperty("--mouse-x", `${x.toFixed(1)}px`);
        card.style.setProperty("--mouse-y", `${y.toFixed(1)}px`);
        card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
        card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(4px)`;
      };

      const onLeave = () => {
        rect = null;
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      };

      card.addEventListener("mouseenter", onEnter, { passive: true });
      card.addEventListener("mousemove", onMove, { passive: true });
      card.addEventListener("mouseleave", onLeave, { passive: true });
    };

    document.querySelectorAll(".project-card, .player-card, .table-card-glass, .admin-cmd-card").forEach(attachCardTilt);

    // Also re-apply if new cards render
    const observer = new MutationObserver(() => {
      document.querySelectorAll(".project-card, .player-card, .table-card-glass, .admin-cmd-card").forEach(attachCardTilt);
    });
    const mainApp = document.getElementById("app");
    if (mainApp) {
      observer.observe(mainApp, { childList: true, subtree: true });
    }
  }

  setupCommandHud() {
    const modal = document.getElementById("command-hud-modal");
    const input = document.getElementById("command-hud-input");
    const resultsContainer = document.getElementById("command-hud-results");
    const triggerBtn = document.getElementById("btn-command-hud");
    const escBtn = document.getElementById("command-hud-esc-btn");
    const filterChips = document.querySelectorAll(".hud-filter-chip");
    if (!modal || !input || !resultsContainer) return;

    let activeFilter = "all";
    let selectedIndex = 0;
    let filteredCommands = [];

    const getBaseCommands = () => [
      // Quick Actions
      {
        id: "nav-home",
        category: "actions",
        title: "Jump to Home",
        sub: "Scroll to top hero presentation",
        badge: "NAV",
        icon: "home",
        keywords: "home top hero start",
        action: () => {
          document.getElementById("nav-btn-home")?.click();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
      {
        id: "nav-notes",
        category: "actions",
        title: "5th Grade Notes Carousel",
        sub: "Explore all science concept cards in 3D coverflow",
        badge: "NOTES",
        icon: "book",
        keywords: "notes cards coverflow carousel grade 5",
        action: () => {
          document.getElementById("nav-btn-notes")?.click();
          document.getElementById("notes-section")?.scrollIntoView({ behavior: "smooth" });
        }
      },
      {
        id: "nav-table",
        category: "actions",
        title: "Catalog Table View",
        sub: "Switch to high-density tabular index of science topics",
        badge: "VIEW",
        icon: "file",
        keywords: "table catalog list switch index",
        action: () => {
          document.getElementById("view-table-btn")?.click();
          document.getElementById("notes-section")?.scrollIntoView({ behavior: "smooth" });
        }
      },
      {
        id: "nav-calc",
        category: "actions",
        title: "Scientific Calculator & Converter",
        sub: "Open physical constants, units, and orbital formulas",
        badge: "CALC",
        icon: "calc",
        keywords: "calculator formulas math units constants physics",
        action: () => {
          document.getElementById("nav-btn-calc")?.click();
          document.getElementById("calculator-section")?.scrollIntoView({ behavior: "smooth" });
        }
      },
      {
        id: "nav-me",
        category: "actions",
        title: "Jeeva Raghavan  //  All About Me",
        sub: "Developer portfolio, projects, and macOS terminal",
        badge: "DEV",
        icon: "bolt",
        keywords: "jeeva about me developer skience portfolio terminal",
        action: () => {
          if (typeof this.openJeevaProfileModal === "function") {
            this.openJeevaProfileModal();
          } else {
            document.getElementById("projects-modal")?.classList.remove("hidden");
          }
        }
      },
      {
        id: "nav-cheat-sheet",
        category: "actions",
        title: "Print Review Cheat Sheet",
        sub: "Formatted printer-ready comprehensive study sheet",
        badge: "PRINT",
        icon: "printer",
        keywords: "print cheat sheet pdf study review paper",
        action: () => {
          document.getElementById("btn-cheat-sheet")?.click();
        }
      },

      // Tools & Audio
      {
        id: "tool-activity-rings",
        category: "tools",
        title: "Apple Activity Rings & Concept Widget",
        sub: "Track your 5th-grade study streaks, explored units, and interactive 3D daily concept cards",
        badge: "RINGS",
        icon: "bolt",
        keywords: "rings activity streak apple watch widget daily concept flip cards progress",
        action: () => {
          if (typeof this.openAppleActivityRings === "function") {
            this.openAppleActivityRings();
          }
        }
      },
      {
        id: "tool-flashcards",
        category: "tools",
        title: "Apple 3D Interactive Flashcards",
        sub: "Flip through stacked study flashcards",
        badge: "CARDS",
        icon: "cards",
        keywords: "flashcards cards 3d flip deck study test practice apple",
        action: () => {
          if (typeof this.openAppleFlashcards === "function") {
            this.openAppleFlashcards();
          }
        }
      },
      {
        id: "tool-split-view",
        category: "tools",
        title: "Apple Split View: Concept Duel & Comparator",
        sub: "Side-by-side Stage Manager comparison of any two science concepts with freeform drag",
        badge: "SPLIT",
        icon: "bolt",
        keywords: "split view duel compare stage manager concepts notes apple freeform drag movable",
        action: () => {
          if (typeof this.openAppleSplitView === "function") {
            this.openAppleSplitView();
          }
        }
      },
      {
        id: "tool-study-timer",
        category: "tools",
        title: "Live Study Activity & Pomodoro Timer",
        sub: "Start 25m focus sprint with Mac Dynamic Island live tracking",
        badge: "TIMER",
        icon: "timer",
        keywords: "timer pomodoro focus sprint countdown break island study",
        action: () => {
          if (this.dynamicIsland?.openMacDeck) {
            this.dynamicIsland.openMacDeck();
            document.getElementById("mac-tab-timer")?.click();
          }
        }
      },
      {
        id: "toggle-sound",
        category: "tools",
        title: "Toggle UI Sound FX",
        sub: "Turn synthesizer keypad clicks & celebration chimes on/off",
        badge: "AUDIO",
        icon: "volume",
        keywords: "sound fx mute unmute volume audio clicks",
        action: () => {
          document.getElementById("btn-sound-toggle")?.click();
        }
      },
      {
        id: "toggle-music",
        category: "tools",
        title: "Toggle Background Study Music",
        sub: "Play or pause study music (Am I Wrong)",
        badge: "MUSIC",
        icon: "music",
        keywords: "music song am i wrong study audio track background",
        action: () => {
          document.getElementById("btn-music-toggle")?.click();
        }
      },
      {
        id: "theme-cyber",
        category: "tools",
        title: "Theme: Midnight Blue",
        sub: "Dark navy and cobalt blue palette",
        badge: "THEME",
        icon: "cosmos",
        keywords: "theme cyber midnight blue glass",
        action: () => {
          document.querySelector('[data-theme="theme-cyber-neon"]')?.click();
        }
      },
      {
        id: "theme-void",
        category: "tools",
        title: "Theme: Obsidian Void",
        sub: "Stealth monochromatic deep space obsidian black",
        badge: "THEME",
        icon: "planet",
        keywords: "theme obsidian void black dark stealth monochrome",
        action: () => {
          document.querySelector('[data-theme="theme-quantum-void"]')?.click();
        }
      },
      {
        id: "theme-emerald",
        category: "tools",
        title: "Theme: Deep Navy Blue",
        sub: "Luminous sapphire glass and celestial gradients",
        badge: "THEME",
        icon: "wave",
        keywords: "theme navy blue ocean glass",
        action: () => {
          document.querySelector('[data-theme="theme-bio-emerald"]')?.click();
        }
      },

      // Easter Eggs & Power
      {
        id: "easter-boot",
        category: "easter",
        title: "Replay Profile Loader",
        sub: "Run Jeeva's diagnostic CRT hardware boot sequence",
        badge: "BOOT",
        icon: "terminal",
        keywords: "boot kernel crt sequence diagnostic hardware retro",
        action: () => {
          if (typeof this.playAllAboutMeBootLoader === "function") {
            const meModal = document.getElementById("projects-modal");
            if (meModal) meModal.classList.remove("hidden");
            this.playAllAboutMeBootLoader();
          }
        }
      },
      {
        id: "easter-confetti",
        category: "easter",
        title: "Launch Confetti",
        sub: "Trigger luminous particle fireworks across the viewport",
        badge: "BURST",
        icon: "sparkle",
        keywords: "confetti burst celebrate fireworks quantum particles",
        action: () => {
          this.confetti?.burst(window.innerWidth / 2, window.innerHeight * 0.35, 100);
          sounds.playSuccess();
        }
      },
      {
        id: "easter-riddle",
        category: "easter",
        title: "Daily Skience Riddle",
        sub: "Solve today's 5th grade science brain-teaser",
        badge: "QUIZ",
        icon: "help",
        keywords: "riddle daily quiz trivia question brain teaser",
        action: () => {
          document.getElementById("riddle-modal")?.classList.remove("hidden");
          sounds.playKeypadTap();
        }
      },
      {
        id: "easter-lookup",
        category: "easter",
        title: "Topic & Formula Lookup",
        sub: "Search 5th grade units, terms, and formulas",
        badge: "FIND",
        icon: "bot",
        keywords: "search lookup find notes topics formulas help",
        action: () => {
          document.getElementById("study-lookup-toggle")?.click();
        }
      }
    ];

    const getScienceTopicCommands = () => {
      if (!Array.isArray(this.notes)) return [];
      return this.notes.map((topic) => ({
        id: `topic-${topic.id}`,
        category: "science",
        title: topic.title,
        sub: topic.description || `Grade 5 • ${topic.category || "Science"}`,
        badge: (topic.category || "SCIENCE").toUpperCase(),
        icon: "microscope",
        keywords: `${topic.title} ${topic.category || ""} ${topic.description || ""} ${topic.coreFormula || ""}`,
        action: () => {
          if (typeof this.openNotesViewer === "function") {
            this.openNotesViewer(topic.id, "notes");
          }
        }
      }));
    };

    const filterAndRender = () => {
      const query = input.value.trim().toLowerCase();
      const allCommands = [...getBaseCommands(), ...getScienceTopicCommands()];

      filteredCommands = allCommands.filter((cmd) => {
        if (activeFilter !== "all" && cmd.category !== activeFilter) {
          return false;
        }
        if (!query) return true;
        return (
          cmd.title.toLowerCase().includes(query) ||
          cmd.sub.toLowerCase().includes(query) ||
          cmd.keywords.toLowerCase().includes(query) ||
          cmd.badge.toLowerCase().includes(query)
        );
      });

      if (selectedIndex >= filteredCommands.length) {
        selectedIndex = 0;
      }

      renderResults();
    };

    const renderResults = () => {
      resultsContainer.innerHTML = "";
      if (filteredCommands.length === 0) {
        resultsContainer.innerHTML = `
          <div class="hud-empty-state">
            <div class="hud-empty-icon"><svg viewBox="0 0 16 16" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="7" r="5"/><line x1="14.5" y1="14.5" x2="10.8" y2="10.8"/></svg></div>
            <p>No commands or science topics found for "${input.value}"</p>
          </div>
        `;
        return;
      }

      // Group commands by category title
      const categoryTitles = {
        actions: "Quick Actions & Navigation",
        science: "5th Grade Science Topics",
        tools: "Tools & Audio Settings",
        easter: "Easter Eggs & Power Tools"
      };

      let currentCat = null;

      filteredCommands.forEach((cmd, idx) => {
        if (cmd.category !== currentCat) {
          currentCat = cmd.category;
          const groupTitle = document.createElement("div");
          groupTitle.className = "hud-result-group-title";
          groupTitle.textContent = categoryTitles[currentCat] || currentCat.toUpperCase();
          resultsContainer.appendChild(groupTitle);
        }

        const item = document.createElement("div");
        item.className = `hud-result-item ${idx === selectedIndex ? "selected" : ""}`;
        item.dataset.index = idx;

        item.innerHTML = `
          <div class="hud-result-item-left">
            <div class="hud-item-icon">${getIconSVG(cmd.icon)}</div>
            <div class="hud-item-text">
              <span class="hud-item-title">${cmd.title}</span>
              <span class="hud-item-sub">${cmd.sub}</span>
            </div>
          </div>
          <span class="hud-item-badge">${cmd.badge}</span>
        `;

        item.addEventListener("click", () => {
          executeCommand(idx);
        });

        item.addEventListener("mouseenter", () => {
          selectedIndex = idx;
          updateSelectionHighlight();
        });

        resultsContainer.appendChild(item);
      });

      scrollSelectedIntoView();
    };

    const updateSelectionHighlight = () => {
      const items = resultsContainer.querySelectorAll(".hud-result-item");
      items.forEach((it) => {
        const idx = parseInt(it.dataset.index, 10);
        it.classList.toggle("selected", idx === selectedIndex);
      });
      scrollSelectedIntoView();
    };

    const scrollSelectedIntoView = () => {
      const selectedEl = resultsContainer.querySelector(".hud-result-item.selected");
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    };

    const executeCommand = (idx) => {
      const cmd = filteredCommands[idx];
      if (!cmd) return;
      closeHud();
      sounds.playClick();
      cmd.action();
    };

    const openHud = () => {
      modal.classList.remove("hidden");
      input.value = "";
      selectedIndex = 0;
      activeFilter = "all";
      filterChips.forEach((c) => c.classList.toggle("active", c.dataset.hudFilter === "all"));
      sounds.playKeypadTap();
      filterAndRender();
      setTimeout(() => input.focus(), 60);
    };

    const closeHud = () => {
      modal.classList.add("hidden");
    };

    // Filter chip clicks
    filterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        sounds.playKeypadTap();
        filterChips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        activeFilter = chip.dataset.hudFilter || "all";
        selectedIndex = 0;
        filterAndRender();
        input.focus();
      });
    });

    // Input typing listener
    input.addEventListener("input", () => {
      selectedIndex = 0;
      filterAndRender();
    });

    // Keyboard navigation in HUD
    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (filteredCommands.length > 0) {
          selectedIndex = (selectedIndex + 1) % filteredCommands.length;
          updateSelectionHighlight();
          sounds.playKeypadTap();
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (filteredCommands.length > 0) {
          selectedIndex = (selectedIndex - 1 + filteredCommands.length) % filteredCommands.length;
          updateSelectionHighlight();
          sounds.playKeypadTap();
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        executeCommand(selectedIndex);
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeHud();
      }
    });

    // Trigger button and close buttons
    triggerBtn?.addEventListener("click", () => {
      if (modal.classList.contains("hidden")) {
        openHud();
      } else {
        closeHud();
      }
    });

    escBtn?.addEventListener("click", closeHud);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeHud();
      }
    });

    // Global Cmd+K / Ctrl+K shortcut
    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        if (modal.classList.contains("hidden")) {
          openHud();
        } else {
          closeHud();
        }
      } else if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        e.preventDefault();
        closeHud();
      }
    });
  }

// APPLE PRO "DYNAMIC ISLAND" (MACOS NOTCH DECK & CAPSULE)
  setupDynamicIsland() {
    const navPill = document.getElementById("glass-pill-nav");
    const islandPod = document.getElementById("dynamic-island-pod");
    const islandIcon = document.getElementById("island-icon");
    const islandEqualizer = document.getElementById("island-equalizer");
    const islandTitle = document.getElementById("island-title");
    const islandSubtitle = document.getElementById("island-subtitle");
    const islandBadge = document.getElementById("island-badge");
    const islandActionPill = document.getElementById("island-action-pill");
    const islandActionText = document.getElementById("island-action-text");

    // Mac Notch Expanded Elements
    const macDeckArt = document.getElementById("mac-deck-art");
    const macTrackTitle = document.getElementById("mac-deck-title");
    const macTrackSub = document.getElementById("mac-deck-sub");
    const macLiveEq = document.getElementById("mac-deck-live-eq");
    const macCloseBtn = document.getElementById("mac-deck-close-btn");
    const macCurTime = document.getElementById("mac-deck-cur-time");
    const macTotTime = document.getElementById("mac-deck-tot-time");
    const macSlider = document.getElementById("mac-deck-slider");
    const macSliderFill = document.getElementById("mac-slider-fill");
    const macPlaypauseBtn = document.getElementById("mac-btn-playpause");
    const macPlaypauseGlyph = document.getElementById("mac-playpause-glyph");
    const macPrevBtn = document.getElementById("mac-btn-prev");
    const macNextBtn = document.getElementById("mac-btn-next");
    const macMuteBtn = document.getElementById("mac-btn-mute");
    const macMuteGlyph = document.getElementById("mac-mute-glyph");
    const macTravelPills = document.querySelectorAll(".mac-travel-pill");

    // Apple Hardware & System Telemetry Elements
    const audioPrivacyDot = document.getElementById("island-privacy-audio");
    const micPrivacyDot = document.getElementById("island-privacy-mic");
    const batteryWrap = document.getElementById("island-battery-wrap");
    const batteryPct = document.getElementById("island-battery-pct");
    const batteryFill = document.getElementById("island-battery-fill");
    const batteryBolt = document.getElementById("island-battery-bolt");
    const sysBattIcon = document.getElementById("mac-sys-batt-icon");
    const sysBattText = document.getElementById("mac-sys-batt-text");
    const sysAudioDevice = document.getElementById("mac-sys-audio-device");

    if (!islandPod) return;

    let collapseTimer = null;
    let isExpanded = false;
    let isMacOpen = false;
    let isDraggingScrubber = false;
    let currentActionHandler = null;

    // Helper: Dynamic track title & metadata resolution
    const getDynamicTrackInfo = () => {
      const current = window.bgMusic?.currentTrack || bgMusic?.currentTrack;
      const bgAudio = document.getElementById("bg-music-player");
      let rawTitle = current?.title || current?.name;
      const coverArt = current?.coverArt || null;
      const artist = current?.artist || "";

      if (!rawTitle && bgAudio && bgAudio.src) {
        try {
          const parts = bgAudio.src.split("/");
          const filename = parts[parts.length - 1].split("?")[0];
          rawTitle = decodeURIComponent(filename).replace(/\.[^/.]+$/, "");
        } catch (_) {}
      }

      const isCustom = current && (current.source === "custom" || current.source === "custom_upload" || current.source === "remote_sync");

      if (isCustom && rawTitle) {
        let cleanTitle = rawTitle
          .replace(/\.mp3$/i, "")
          .replace(/\.[^/.]+$/, "")
          .replace(/\s*\[.*?\]|\s*\(.*?\)/g, "")
          .replace(/_/g, " ")
          .trim() || "Custom Track";

        // Strip leading track numbers e.g. "01 - ", "01. ", "Track 01 - ", "[01] ", "01_ "
        cleanTitle = cleanTitle.replace(/^(\d{1,3}[\s.\-_]+|track\s*\d+[\s.\-_]+|\[\d+\][\s.\-_]*)/i, "").trim() || cleanTitle;

        // If title still contains "Artist - Track", isolate strictly the Track Name!
        if (artist && cleanTitle.toLowerCase().startsWith(artist.toLowerCase())) {
          cleanTitle = cleanTitle.substring(artist.length).replace(/^[\s\-_:]+/, "").trim();
        } else if (cleanTitle.includes(" - ")) {
          const parts = cleanTitle.split(/\s+-\s+/);
          if (parts.length >= 2) {
            cleanTitle = parts.slice(1).join(" - ").trim();
          }
        }

        if (/^\d+$/.test(cleanTitle)) {
          cleanTitle = `Custom Track ${cleanTitle}`;
        }

        const isPlaying = bgAudio && !bgAudio.paused && !bgAudio.muted;
        const subtitle = artist ? `${artist} • ${isPlaying ? "Playing" : "Paused"}` : `Custom Audio • ${isPlaying ? "Playing" : "Paused"}`;
        return {
          title: cleanTitle,
          subtitle,
          isPlaying,
          rawTitle,
          coverArt,
          artist
        };
      }

      if (!rawTitle || rawTitle === "Custom Track") {
        rawTitle = "Am I Wrong";
      }

      let cleanTitle = rawTitle
        .replace(/\.mp3$/i, "")
        .replace(/\s*\[.*?\]|\s*\(.*?\)/g, "")
        .replace(/_/g, " ")
        .trim();

      if (/am\s*i\s*wrong/i.test(cleanTitle) || /afterparty/i.test(cleanTitle) || /background-music/i.test(rawTitle)) {
        cleanTitle = "Am I Wrong";
      }

      const isPlaying = bgAudio && !bgAudio.paused && !bgAudio.muted;
      let subtitle = isPlaying ? "Background Audio • Now Playing" : "Playback Paused • Tap to Resume";
      if (current?.source === "preset") {
        subtitle = `Study Beats • ${isPlaying ? "Playing" : "Paused"}`;
      } else if (cleanTitle === "Am I Wrong") {
        subtitle = `Study Anthem • ${isPlaying ? "Playing" : "Paused"}`;
      }

      return {
        title: cleanTitle || "Am I Wrong",
        subtitle,
        isPlaying,
        rawTitle,
        coverArt
      };
    };

    const formatMacTime = (seconds) => {
      if (isNaN(seconds) || seconds < 0) return "0:00";
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const syncMacDeckUI = () => {
      const track = getDynamicTrackInfo();
      const bgAudio = document.getElementById("bg-music-player");
      const isPlaying = bgAudio && !bgAudio.paused && !bgAudio.muted;

      if (macTrackTitle) macTrackTitle.textContent = track.title;
      if (macTrackSub) macTrackSub.textContent = track.subtitle;

      if (macPlaypauseGlyph) {
        macPlaypauseGlyph.innerHTML = isPlaying ? UI_SVG.pause : UI_SVG.play;
      }
      if (macDeckArt) {
        macDeckArt.classList.toggle("playing", isPlaying);
      }
      const macCoverImg = document.getElementById("mac-deck-cover-img");
      const macArtIcon = document.getElementById("mac-art-icon");
      if (track.coverArt) {
        if (macCoverImg) {
          macCoverImg.src = track.coverArt;
          macCoverImg.classList.remove("hidden");
        }
        if (macDeckArt) macDeckArt.classList.add("has-cover");
        if (macArtIcon) macArtIcon.classList.add("hidden");
      } else {
        if (macCoverImg) {
          macCoverImg.classList.add("hidden");
          macCoverImg.src = "";
        }
        if (macDeckArt) macDeckArt.classList.remove("has-cover");
        if (macArtIcon) macArtIcon.classList.remove("hidden");
      }
      if (macLiveEq) {
        macLiveEq.classList.toggle("playing", isPlaying);
      }
      if (macMuteGlyph) {
        const isMuted = bgAudio && (bgAudio.muted || bgAudio.volume === 0 || !sounds.enabled);
        macMuteGlyph.innerHTML = isMuted ? UI_SVG.mute : UI_SVG.volume;
      }

      if (!isDraggingScrubber && bgAudio && macSlider && macCurTime && macTotTime) {
        const cur = bgAudio.currentTime || 0;
        const dur = bgAudio.duration || 0;
        macCurTime.textContent = formatMacTime(cur);
        if (dur > 0) {
          macTotTime.textContent = formatMacTime(dur);
          const percent = Math.min(100, Math.max(0, (cur / dur) * 100));
          macSlider.value = percent;
          if (macSliderFill) macSliderFill.style.width = `${percent}%`;
        }
      }

      if (audioPrivacyDot) {
        audioPrivacyDot.classList.toggle("hidden", !isPlaying);
      }
    };

    const onIslandDocMouseMove = (e) => {
      if (!isMacOpen || isDraggingScrubber) return;
      const rect = islandPod.getBoundingClientRect();
      const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
      const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
      const dist = Math.hypot(dx, dy);

      // Closes automatically when user drags/moves mouse far enough away (> 55px)
      if (dist > 55) {
        closeMacDeck();
      }
    };

    const onIslandDocPointerDown = (e) => {
      if (!isMacOpen || isDraggingScrubber) return;
      if (!islandPod.contains(e.target)) {
        closeMacDeck();
      }
    };

    const openMacDeck = () => {
      if (collapseTimer) {
        clearTimeout(collapseTimer);
        collapseTimer = null;
      }
      isMacOpen = true;
      isExpanded = false;

      if (navPill) navPill.classList.add("island-active");
      islandPod.classList.remove("island-idle", "island-compact", "island-expanded");
      islandPod.classList.add("island-mac-open");

      syncMacDeckUI();

      // Listen for pointer moving away or tapping outside
      document.addEventListener("mousemove", onIslandDocMouseMove, { passive: true });
      document.addEventListener("pointerdown", onIslandDocPointerDown, { passive: true });

      try {
        if (typeof sounds.playTapticClick === "function") {
          sounds.playTapticClick();
        } else {
          sounds.playKeypadTap();
        }
      } catch (_) {}
    };

    const closeMacDeck = () => {
      isMacOpen = false;
      document.removeEventListener("mousemove", onIslandDocMouseMove);
      document.removeEventListener("pointerdown", onIslandDocPointerDown);
      islandPod.classList.remove("island-mac-open");
      collapseIsland();
    };

    const triggerSilentModeHUD = (isMuted) => {
      if (collapseTimer) {
        clearTimeout(collapseTimer);
        collapseTimer = null;
      }

      isExpanded = true;
      if (navPill) navPill.classList.add("island-active");

      islandPod.classList.remove("island-idle", "island-compact", "island-expanded", "island-mac-open");
      islandPod.classList.add("island-silent-hud");
      islandPod.classList.toggle("silent-on", !!isMuted);
      islandPod.classList.toggle("silent-off", !isMuted);

      const islandMiniCover = document.getElementById("island-cover-art-mini");
      if (islandMiniCover) islandMiniCover.classList.add("hidden");

      if (islandIcon) {
        islandIcon.innerHTML = isMuted ? UI_SVG.bellOff : UI_SVG.bell;
        islandIcon.classList.remove("hidden");
      }
      if (islandEqualizer) {
        islandEqualizer.classList.add("hidden");
      }
      if (islandTitle) {
        islandTitle.textContent = "Silent Mode";
      }
      if (islandBadge) {
        islandBadge.textContent = isMuted ? "On" : "Off";
        islandBadge.classList.remove("hidden");
      }
      if (islandSubtitle) {
        islandSubtitle.classList.add("hidden");
      }
      if (islandActionPill) {
        islandActionPill.classList.add("hidden");
      }

      try {
        if (typeof sounds.playTapticClick === "function") {
          sounds.playTapticClick();
        } else {
          sounds.playKeypadTap();
        }
      } catch (_) {}

      collapseTimer = setTimeout(() => {
        islandPod.classList.remove("island-silent-hud", "silent-on", "silent-off");
        collapseIsland();
      }, 2300);
    };

    const triggerIsland = ({
      icon = "bolt",
      title = "SKIENCE PRO",
      subtitle = "System Nominal",
      badge = "ACTIVE",
      actionText = "VIEW",
      action = null,
      showEqualizer = false,
      isPlaying = false,
      coverArt = null,
      duration = 3200,
      sound = true
    } = {}) => {
      if (collapseTimer) {
        clearTimeout(collapseTimer);
        collapseTimer = null;
      }

      // If Mac deck is already open, do not abruptly replace unless instructed
      if (isMacOpen) {
        syncMacDeckUI();
        return;
      }

      isExpanded = true;
      currentActionHandler = action;

      if (navPill) navPill.classList.add("island-active");
      islandPod.classList.remove("island-idle", "island-compact", "island-mac-open");
      islandPod.classList.add("island-expanded");

      const currentCover = coverArt || (window.bgMusic?.currentTrack?.coverArt);
      const islandMiniCover = document.getElementById("island-cover-art-mini");

      if (currentCover) {
        if (islandMiniCover) {
          islandMiniCover.src = currentCover;
          islandMiniCover.classList.remove("hidden");
        }
        if (islandIcon) islandIcon.classList.add("hidden");
        if (islandEqualizer) islandEqualizer.classList.add("hidden");
      } else {
        if (islandMiniCover) islandMiniCover.classList.add("hidden");
        if (islandIcon) {
          islandIcon.innerHTML = getIconSVG(icon);
          islandIcon.classList.toggle("hidden", !!showEqualizer);
        }
        if (islandEqualizer) {
          islandEqualizer.classList.toggle("hidden", !showEqualizer);
          islandEqualizer.classList.toggle("playing", isPlaying);
        }
      }

      if (islandTitle) islandTitle.textContent = title;
      if (islandSubtitle) islandSubtitle.textContent = subtitle;
      if (islandBadge) islandBadge.textContent = badge;

      if (islandActionPill && islandActionText) {
        if (actionText) {
          islandActionText.textContent = actionText;
          islandActionPill.classList.remove("hidden");
        } else {
          islandActionPill.classList.add("hidden");
        }
      }

      if (sound) {
        try {
          if (typeof sounds.playTapticClick === "function") {
            sounds.playTapticClick();
          } else {
            sounds.playKeypadTap();
          }
        } catch (_) {}
      }

      if (duration > 0) {
        collapseTimer = setTimeout(() => {
          collapseIsland();
        }, duration);
      }
    };

// LIVE STUDY ACTIVITY & POMODORO TIMER
    let studyTimerInterval = null;
    let studyTimerSeconds = 1500; // default 25m
    let studyTimerTotal = 1500;
    let isStudyTimerRunning = false;
    let studyTimerMode = "25m Focus";

    const macTabMusic = document.getElementById("mac-tab-music");
    const macTabTimer = document.getElementById("mac-tab-timer");
    const macViewMusic = document.getElementById("mac-view-music");
    const macViewTimer = document.getElementById("mac-view-timer");
    const macTimerDigits = document.getElementById("mac-timer-digits");
    const macTimerGlyph = document.getElementById("mac-timer-glyph");
    const macTimerToggle = document.getElementById("mac-timer-toggle");
    const macTimerReset = document.getElementById("mac-timer-reset");
    const macTimerInc = document.getElementById("mac-timer-inc");
    const macTimerDec = document.getElementById("mac-timer-dec");
    const macTimerBadge = document.getElementById("mac-timer-badge");
    const macTimerSub = document.getElementById("mac-timer-sub");
    const macTimerPresets = document.querySelectorAll(".mac-timer-preset");
    const macTimerCloseBtn = document.getElementById("mac-timer-close-btn");

    const formatTimerDigits = (sec) => {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
    };

    const updateStudyTimerUI = () => {
      if (macTimerDigits) macTimerDigits.textContent = formatTimerDigits(studyTimerSeconds);
      if (macTimerGlyph) macTimerGlyph.innerHTML = isStudyTimerRunning ? UI_SVG.pause : UI_SVG.play;

      // If timer is running and Island is collapsed or compact, live-stream countdown into Dynamic Island!
      if (isStudyTimerRunning && !isMacOpen) {
        if (islandTitle) islandTitle.textContent = formatTimerDigits(studyTimerSeconds);
        if (islandBadge) islandBadge.textContent = "FOCUS";
        if (islandIcon) {
          islandIcon.innerHTML = UI_SVG.timer;
          islandIcon.classList.remove("hidden");
        }
        if (islandEqualizer) islandEqualizer.classList.add("hidden");
      }
    };

    const toggleStudyTimer = () => {
      if (isStudyTimerRunning) {
        clearInterval(studyTimerInterval);
        studyTimerInterval = null;
        isStudyTimerRunning = false;
        updateStudyTimerUI();
        triggerIsland({
          icon: "pause",
          title: `Paused: ${formatTimerDigits(studyTimerSeconds)}`,
          subtitle: "Study Focus Sprint Paused",
          badge: "PAUSED",
          duration: 2500
        });
      } else {
        isStudyTimerRunning = true;
        studyTimerInterval = setInterval(() => {
          if (studyTimerSeconds > 0) {
            studyTimerSeconds--;
            updateStudyTimerUI();
          } else {
            clearInterval(studyTimerInterval);
            studyTimerInterval = null;
            isStudyTimerRunning = false;
            updateStudyTimerUI();
            try {
              if (typeof sounds.playSuccess === "function") sounds.playSuccess();
              else sounds.playCoin();
            } catch (_) {}
            triggerIsland({
              icon: "sparkle",
              title: "TIME'S UP! Focus Complete",
              subtitle: "Great study sprint! Take a 5-minute brain break.",
              badge: "COMPLETE",
              duration: 6000,
              action: () => {
                openMacDeck();
                macTabTimer?.click();
              }
            });
          }
        }, 1000);
        updateStudyTimerUI();
        try {
          if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
        } catch (_) {}
        triggerIsland({
          icon: "timer",
          title: `Focus Sprint: ${formatTimerDigits(studyTimerSeconds)}`,
          subtitle: `${studyTimerMode} Active • Stay in the zone!`,
          badge: "FOCUS",
          duration: 2500
        });
      }
    };

    // Tab switching between Music Deck and Study Timer
    macTabMusic?.addEventListener("click", (e) => {
      e.stopPropagation();
      macTabMusic.classList.add("active");
      macTabTimer?.classList.remove("active");
      macViewMusic?.classList.remove("hidden");
      macViewTimer?.classList.add("hidden");
      try {
        if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
      } catch (_) {}
    });

    macTabTimer?.addEventListener("click", (e) => {
      e.stopPropagation();
      macTabTimer.classList.add("active");
      macTabMusic?.classList.remove("active");
      macViewTimer?.classList.remove("hidden");
      macViewMusic?.classList.add("hidden");
      updateStudyTimerUI();
      try {
        if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
      } catch (_) {}
    });

    macTimerToggle?.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleStudyTimer();
    });

    macTimerReset?.addEventListener("click", (e) => {
      e.stopPropagation();
      if (studyTimerInterval) {
        clearInterval(studyTimerInterval);
        studyTimerInterval = null;
      }
      isStudyTimerRunning = false;
      studyTimerSeconds = studyTimerTotal;
      updateStudyTimerUI();
      try {
        if (typeof sounds.playClick === "function") sounds.playClick();
      } catch (_) {}
    });

    macTimerInc?.addEventListener("click", (e) => {
      e.stopPropagation();
      studyTimerSeconds = Math.min(7200, studyTimerSeconds + 60);
      updateStudyTimerUI();
    });

    macTimerDec?.addEventListener("click", (e) => {
      e.stopPropagation();
      studyTimerSeconds = Math.max(60, studyTimerSeconds - 60);
      updateStudyTimerUI();
    });

    macTimerPresets.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        macTimerPresets.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const sec = parseInt(btn.dataset.time, 10) || 1500;
        studyTimerTotal = sec;
        studyTimerSeconds = sec;
        studyTimerMode = btn.textContent.trim();
        if (macTimerSub) macTimerSub.textContent = `${studyTimerMode} • Tap start when ready`;
        updateStudyTimerUI();
        try {
          if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
        } catch (_) {}
      });
    });

    macTimerCloseBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMacDeck();
    });

    const collapseIsland = () => {
      if (collapseTimer) {
        clearTimeout(collapseTimer);
        collapseTimer = null;
      }
      isExpanded = false;
      isMacOpen = false;

      const islandMiniCover = document.getElementById("island-cover-art-mini");

      // Priority 1: If Study Timer is running, stream timer into Dynamic Island!
      if (isStudyTimerRunning) {
        if (islandMiniCover) islandMiniCover.classList.add("hidden");
        if (navPill) navPill.classList.remove("island-active");
        islandPod.classList.remove("island-expanded", "island-idle", "island-mac-open");
        islandPod.classList.add("island-compact");
        if (islandIcon) {
          islandIcon.innerHTML = UI_SVG.timer;
          islandIcon.classList.remove("hidden");
        }
        if (islandEqualizer) islandEqualizer.classList.add("hidden");
        if (islandTitle) islandTitle.textContent = formatTimerDigits(studyTimerSeconds);
        if (islandBadge) islandBadge.textContent = "FOCUS";
        if (islandActionText) islandActionText.textContent = "TIMER";
        currentActionHandler = () => {
          openMacDeck();
          macTabTimer?.click();
        };
        return;
      }

      // Priority 2: If background music is playing, transition to compact ambient mode
      const bgAudio = document.getElementById("bg-music-player");
      const isMusicPlaying = bgAudio && !bgAudio.paused && !bgAudio.muted;
      const track = getDynamicTrackInfo();

      if (isMusicPlaying) {
        if (audioPrivacyDot) audioPrivacyDot.classList.remove("hidden");
        if (navPill) navPill.classList.remove("island-active");
        islandPod.classList.remove("island-expanded", "island-idle", "island-mac-open");
        islandPod.classList.add("island-compact");
        if (track.coverArt) {
          if (islandMiniCover) {
            islandMiniCover.src = track.coverArt;
            islandMiniCover.classList.remove("hidden");
          }
          if (islandIcon) islandIcon.classList.add("hidden");
          if (islandEqualizer) islandEqualizer.classList.add("hidden");
        } else {
          if (islandMiniCover) islandMiniCover.classList.add("hidden");
          if (islandIcon) islandIcon.classList.add("hidden");
          if (islandEqualizer) {
            islandEqualizer.classList.remove("hidden");
            islandEqualizer.classList.add("playing");
          }
        }
        if (islandTitle) islandTitle.textContent = track.title;
        if (islandBadge) islandBadge.textContent = "PLAYING";
        if (islandActionText) islandActionText.textContent = "CONTROLS";
        currentActionHandler = () => {
          openMacDeck();
        };
      } else {
        if (islandMiniCover) islandMiniCover.classList.add("hidden");
        if (audioPrivacyDot) audioPrivacyDot.classList.add("hidden");
        if (navPill) navPill.classList.remove("island-active");
        islandPod.classList.remove("island-expanded", "island-compact", "island-mac-open");
        islandPod.classList.add("island-idle");
        if (islandTitle) islandTitle.textContent = "skience";
        if (islandBadge) islandBadge.textContent = "PRO";
        currentActionHandler = null;
      }
    };

    // Clicking on action pill
    islandActionPill?.addEventListener("click", (e) => {
      e.stopPropagation();
      if (typeof currentActionHandler === "function") {
        currentActionHandler();
      } else {
        openMacDeck();
      }
    });

    // Clicking anywhere on the island pod
    islandPod.addEventListener("click", (e) => {
      if (isMacOpen) {
        return;
      }
      openMacDeck();
    });

    // Hover opens Mac deck smoothly
    islandPod.addEventListener("mouseenter", () => {
      if (collapseTimer) {
        clearTimeout(collapseTimer);
        collapseTimer = null;
      }
      if (!isMacOpen) {
        openMacDeck();
      }
    });

    // When mouse leaves the pod, check distance; if paused nearby, close after brief buffer
    islandPod.addEventListener("mouseleave", () => {
      if (isDraggingScrubber) return;
      if (isMacOpen) {
        if (collapseTimer) clearTimeout(collapseTimer);
        collapseTimer = setTimeout(() => {
          if (!isDraggingScrubber && isMacOpen) {
            closeMacDeck();
          }
        }, 750);
      }
    });

    // Mac Play/Pause Button
    macPlaypauseBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const bgAudio = document.getElementById("bg-music-player");
      if (window.bgMusic && typeof window.bgMusic.toggle === "function") {
        window.bgMusic.toggle();
      } else if (bgAudio) {
        if (bgAudio.paused) bgAudio.play().catch(() => {});
        else bgAudio.pause();
      }
      setTimeout(syncMacDeckUI, 60);
    });

    // Mac Next Track / Preset Button (Fast Forward for Custom Songs)
    macNextBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const bgAudio = document.getElementById("bg-music-player");
      const current = window.bgMusic?.currentTrack || bgMusic?.currentTrack;
      const isCustom = current && (current.source === "custom" || current.source === "custom_upload");

      if (isCustom && bgAudio && bgAudio.duration) {
        bgAudio.currentTime = Math.min(bgAudio.duration, bgAudio.currentTime + 10);
        syncMacDeckUI();
        try {
          if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
        } catch (_) {}
      } else {
        const presets = Object.keys(MUSIC_PRESETS);
        if (window.bgMusic && presets.length > 0) {
          const curPreset = window.bgMusic.currentTrack?.presetKey || "anthem";
          const curIdx = presets.indexOf(curPreset);
          const nextIdx = (curIdx + 1) % presets.length;
          const nextKey = presets[nextIdx];
          window.bgMusic.selectPreset(nextKey);
          setTimeout(syncMacDeckUI, 120);
        }
      }
    });

    // Mac Prev Track / Restart Button (Rewind for Custom Songs)
    macPrevBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const bgAudio = document.getElementById("bg-music-player");
      const current = window.bgMusic?.currentTrack || bgMusic?.currentTrack;
      const isCustom = current && (current.source === "custom" || current.source === "custom_upload");

      if (isCustom && bgAudio) {
        if (bgAudio.currentTime > 3) {
          bgAudio.currentTime = Math.max(0, bgAudio.currentTime - 10);
        } else {
          bgAudio.currentTime = 0;
        }
        syncMacDeckUI();
        try {
          if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
        } catch (_) {}
      } else if (bgAudio && bgAudio.currentTime > 3) {
        bgAudio.currentTime = 0;
        bgAudio.play().catch(() => {});
        syncMacDeckUI();
      } else {
        const presets = Object.keys(MUSIC_PRESETS);
        if (window.bgMusic && presets.length > 0) {
          const curPreset = window.bgMusic.currentTrack?.presetKey || "anthem";
          const curIdx = presets.indexOf(curPreset);
          const prevIdx = (curIdx - 1 + presets.length) % presets.length;
          const prevKey = presets[prevIdx];
          window.bgMusic.selectPreset(prevKey);
          setTimeout(syncMacDeckUI, 120);
        }
      }
    });

    // Mac Mute Button
    macMuteBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const bgAudio = document.getElementById("bg-music-player");
      if (bgAudio) {
        bgAudio.muted = !bgAudio.muted;
        syncMacDeckUI();
        triggerSilentModeHUD(bgAudio.muted);
      }
    });

    // Scrubber Slider
    macSlider?.addEventListener("input", (e) => {
      isDraggingScrubber = true;
      const bgAudio = document.getElementById("bg-music-player");
      const val = parseFloat(e.target.value);
      if (macSliderFill) macSliderFill.style.width = `${val}%`;
      if (bgAudio && bgAudio.duration) {
        const targetTime = (val / 100) * bgAudio.duration;
        bgAudio.currentTime = targetTime;
        if (macCurTime) macCurTime.textContent = formatMacTime(targetTime);
      }
    });

    macSlider?.addEventListener("change", () => {
      isDraggingScrubber = false;
    });

    // Mac Fast-Travel Navigation Pills ("access controls while going to a certain place")
    macTravelPills.forEach((pill) => {
      pill.addEventListener("click", (e) => {
        e.stopPropagation();
        const place = pill.dataset.place;
        try {
          if (typeof sounds.playTapticClick === "function") {
            sounds.playTapticClick();
          } else {
            sounds.playClick();
          }
        } catch (_) {}

        switch (place) {
          case "notes":
            document.getElementById("notes-section")?.scrollIntoView({ behavior: "smooth" });
            document.getElementById("nav-btn-notes")?.click();
            break;
          case "cards":
            if (typeof this.openAppleFlashcards === "function") {
              this.openAppleFlashcards();
            }
            break;
          case "split":
            if (typeof this.openAppleSplitView === "function") {
              this.openAppleSplitView();
            }
            break;
          case "timer":
            openMacDeck();
            macTabTimer?.click();
            return;
          case "calc":
            document.getElementById("calculator-section")?.scrollIntoView({ behavior: "smooth" });
            document.getElementById("nav-btn-calc")?.click();
            break;
          case "aboutme":
            const meModal = document.getElementById("projects-modal");
            if (meModal) {
              meModal.classList.remove("hidden");
              if (typeof this.playAllAboutMeBootLoader === "function") {
                this.playAllAboutMeBootLoader();
              }
            }
            break;
          case "studio":
            const meStudioModal = document.getElementById("projects-modal");
            if (meStudioModal) {
              meStudioModal.classList.remove("hidden");
              if (typeof this.playAllAboutMeBootLoader === "function") {
                this.playAllAboutMeBootLoader();
              }
              setTimeout(() => {
                const termInput = document.getElementById("me-terminal-command");
                const termCard = document.getElementById("me-mac-terminal") || document.querySelector(".terminal-window-mac");
                if (termCard) termCard.scrollIntoView({ behavior: "smooth" });
                if (termInput) termInput.focus();
              }, 300);
            }
            break;
          case "top":
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.getElementById("nav-btn-home")?.click();
            break;
        }

        // Music continues playing smoothly uninterrupted!
        collapseTimer = setTimeout(() => {
          collapseIsland();
        }, 1600);
      });
    });

    // Keyboard Shortcuts (ESC closes Mac Deck, 'M' toggles Silent Mode HUD)
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isMacOpen) {
        closeMacDeck();
      } else if ((e.key === "m" || e.key === "M") && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
        if (activeTag !== "input" && activeTag !== "textarea") {
          const bgAudio = document.getElementById("bg-music-player");
          if (bgAudio) {
            bgAudio.muted = !bgAudio.muted;
            syncMacDeckUI();
            triggerSilentModeHUD(bgAudio.muted);
          } else if (typeof sounds !== "undefined") {
            sounds.enabled = !sounds.enabled;
            triggerSilentModeHUD(!sounds.enabled);
          }
        }
      }
    });

    this.dynamicIsland = {
      trigger: triggerIsland,
      triggerSilentModeHUD: triggerSilentModeHUD,
      setMicPrivacy: (isActive) => {
        if (micPrivacyDot) {
          micPrivacyDot.classList.toggle("hidden", !isActive);
        }
      },
      setAudioPrivacy: (isActive) => {
        if (audioPrivacyDot) {
          audioPrivacyDot.classList.toggle("hidden", !isActive);
        }
      },
      collapse: collapseIsland,
      openMacDeck: openMacDeck,
      closeMacDeck: closeMacDeck,
      syncMusic: (trackName, isPlaying) => {
        if (isMacOpen) {
          syncMacDeckUI();
        } else if (isPlaying) {
          collapseIsland();
        }
      }
    };

// WIRE SYSTEM EVENTS INTO DYNAMIC ISLAND
    // 1. Background Music Events
    const bgAudio = document.getElementById("bg-music-player");
    if (bgAudio) {
      bgAudio.addEventListener("play", () => {
        const track = getDynamicTrackInfo();
        triggerIsland({
          icon: "music",
          title: track.title,
          subtitle: track.subtitle,
          badge: "MUSIC",
          actionText: "CONTROLS",
          showEqualizer: !track.coverArt,
          isPlaying: true,
          coverArt: track.coverArt,
          duration: 3500,
          action: () => {
            openMacDeck();
          }
        });
        syncMacDeckUI();
      });

      bgAudio.addEventListener("pause", () => {
        const track = getDynamicTrackInfo();
        triggerIsland({
          icon: "pause",
          title: `${track.title} (Paused)`,
          subtitle: "Playback Stopped • Tap for Mac Deck",
          badge: "PAUSED",
          actionText: "PLAY",
          showEqualizer: false,
          isPlaying: false,
          duration: 2500,
          action: () => {
            document.getElementById("btn-music-toggle")?.click();
          }
        });
        syncMacDeckUI();
      });

      bgAudio.addEventListener("timeupdate", () => {
        if (isMacOpen) {
          syncMacDeckUI();
        }
      });
    }

    // 2. Sound FX Toggle (Triggers Apple Silent Mode HUD)
    document.getElementById("btn-sound-toggle")?.addEventListener("click", () => {
      setTimeout(() => {
        const isMuted = !sounds.enabled;
        triggerSilentModeHUD(isMuted);
      }, 50);
    });

    // 3. Theme Palette Selection
    document.querySelectorAll(".theme-swatch-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const themeLabel = btn.querySelector("span:last-child")?.textContent || "Theme Updated";
        triggerIsland({
          icon: "sparkle",
          title: `Theme: ${themeLabel}`,
          subtitle: "Theme Updated",
          badge: "THEME",
          actionText: "NICE",
          duration: 2600
        });
      });
    });

    // 4. View Switcher (Carousel / Table)
    document.getElementById("view-carousel-btn")?.addEventListener("click", () => {
      triggerIsland({
        icon: "microscope",
        title: "3D Coverflow Mode",
        subtitle: "Card View",
        badge: "DECK",
        actionText: "VIEW",
        duration: 2200,
        action: () => {
          document.getElementById("notes-section")?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    document.getElementById("view-table-btn")?.addEventListener("click", () => {
      triggerIsland({
        icon: "file",
        title: "Table Catalog View",
        subtitle: "Table View",
        badge: "TABLE",
        actionText: "VIEW",
        duration: 2200,
        action: () => {
          document.getElementById("notes-section")?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // 5. Native Battery & Power Telemetry Management
    const updateBatteryUI = (battery) => {
      const level = Math.round((battery.level !== undefined ? battery.level : 1) * 100);
      const charging = !!battery.charging;

      if (batteryPct) batteryPct.textContent = `${level}%`;
      if (batteryFill) {
        batteryFill.style.width = `${level}%`;
        if (charging) {
          batteryFill.style.backgroundColor = "#10b981"; // Apple green charging
        } else if (level <= 20) {
          batteryFill.style.backgroundColor = "#ef4444"; // Apple red low
        } else {
          batteryFill.style.backgroundColor = "#ffffff";
        }
      }
      if (batteryBolt) {
        batteryBolt.classList.toggle("hidden", !charging);
      }
      if (batteryWrap) {
        batteryWrap.classList.remove("hidden");
        batteryWrap.title = `Mac Battery: ${level}% ${charging ? "(Charging)" : ""}`;
      }

      // Update System Telemetry Bar in Mac Deck
      if (sysBattText) {
        sysBattText.textContent = `${level}% ${charging ? "Charging" : "Battery"}`;
      }
      if (sysBattIcon) {
        sysBattIcon.innerHTML = charging ? UI_SVG.bolt : (level <= 20 ? UI_SVG.batteryLow : UI_SVG.battery);
      }
    };

    if (typeof navigator !== "undefined" && typeof navigator.getBattery === "function") {
      navigator.getBattery().then((battery) => {
        updateBatteryUI(battery);
        battery.addEventListener("levelchange", () => {
          updateBatteryUI(battery);
          if (battery.level <= 0.20 && !battery.charging) {
            triggerIsland({
              icon: "batteryLow",
              title: "Low Battery",
              subtitle: `${Math.round(battery.level * 100)}% Remaining • Connect to Power`,
              badge: "20%",
              actionText: "CHARGE",
              duration: 3500
            });
          }
        });
        battery.addEventListener("chargingchange", () => {
          updateBatteryUI(battery);
          triggerIsland({
            icon: battery.charging ? "bolt" : "battery",
            title: battery.charging ? "Connected to Power" : "On Battery Power",
            subtitle: `${Math.round(battery.level * 100)}% • Apple Fast Charge`,
            badge: battery.charging ? "CHARGING" : "BATTERY",
            actionText: "SYSTEM",
            duration: 2800,
            action: () => openMacDeck()
          });
        });
      }).catch(() => {
        updateBatteryUI({ level: 0.98, charging: false });
      });
    } else {
      updateBatteryUI({ level: 0.98, charging: false });
    }

    batteryWrap?.addEventListener("click", (e) => {
      e.stopPropagation();
      triggerIsland({
        icon: batteryBolt && !batteryBolt.classList.contains("hidden") ? "bolt" : "battery",
        title: "Battery Health: Normal",
        subtitle: `Current Charge: ${batteryPct?.textContent || "98%"} • High Efficiency`,
        badge: "POWER",
        actionText: "SYS INFO",
        duration: 3000,
        action: () => openMacDeck()
      });
    });

    // 6. Headphones & Audio Peripheral Route Detection
    if (typeof navigator !== "undefined" && navigator.mediaDevices && typeof navigator.mediaDevices.enumerateDevices === "function") {
      const checkAudioDevices = async (showNotification = false) => {
        try {
          const devices = await navigator.mediaDevices.enumerateDevices();
          const audioOuts = devices.filter(d => d.kind === "audiooutput");
          const hasHeadphones = audioOuts.some(d => /headphone|airpods|earphones|bluetooth/i.test(d.label));
          const label = hasHeadphones ? "AirPods / Headphones" : (audioOuts[0]?.label || "MacBook Pro Speakers");
          if (sysAudioDevice) {
            sysAudioDevice.textContent = label.length > 20 ? label.slice(0, 18) + "…" : label;
          }
          if (showNotification) {
            triggerIsland({
              icon: hasHeadphones ? "headphones" : "volume",
              title: hasHeadphones ? "AirPods Connected" : "Audio Output Changed",
              subtitle: label,
              badge: "AUDIO",
              actionText: "SWITCH",
              duration: 3000,
              action: () => openMacDeck()
            });
          }
        } catch (_) {}
      };
      checkAudioDevices(false);
      navigator.mediaDevices.addEventListener("devicechange", () => checkAudioDevices(true));
    }

    // 7. Initial Boot Glance
    setTimeout(() => {
      triggerIsland({
        icon: "bolt",
        title: "SKIENCE PRO v81.0",
        subtitle: "Study notes ready",
        badge: "ONLINE",
        actionText: "EXPLORE",
        duration: 3500,
        action: () => {
          document.getElementById("nav-btn-notes")?.click();
        }
      });
    }, 1500);
  }

// APPLE 3D INTERACTIVE FLASHCARD DECKS
  setupAppleFlashcards() {
    const modal = document.getElementById("apple-flashcards-modal");
    const closeBtn = document.getElementById("apple-fc-close-btn");
    const topicSelect = document.getElementById("apple-fc-topic-select");
    const cardContainer = document.getElementById("apple-fc-card-container");
    const prevBtn = document.getElementById("apple-fc-prev-btn");
    const nextBtn = document.getElementById("apple-fc-next-btn");
    const flipBtn = document.getElementById("apple-fc-flip-btn");
    const shuffleBtn = document.getElementById("apple-fc-shuffle-btn");
    const practiceBtn = document.getElementById("apple-fc-btn-practice");
    const masteredBtn = document.getElementById("apple-fc-btn-mastered");

    const catEl = document.getElementById("apple-fc-cat");
    const numEl = document.getElementById("apple-fc-num");
    const backNumEl = document.getElementById("apple-fc-back-num");
    const termEl = document.getElementById("apple-fc-term");
    const backTitleEl = document.getElementById("apple-fc-back-title");
    const formulaEl = document.getElementById("apple-fc-formula");
    const trickEl = document.getElementById("apple-fc-trick");
    const defEl = document.getElementById("apple-fc-definition");
    const exampleEl = document.getElementById("apple-fc-example");
    const counterEl = document.getElementById("apple-fc-counter");
    const masteryTagEl = document.getElementById("apple-fc-mastery-tag");

    if (!modal || !cardContainer) return;

    let topics = [];
    let currentCards = [];
    let currentIndex = 0;
    let isFlipped = false;
    let masteredCards = new Set();
    try {
      const saved = JSON.parse(localStorage.getItem("scienceio_apple_fc_mastered") || "[]");
      if (Array.isArray(saved)) masteredCards = new Set(saved);
    } catch (_) {}

    const saveMastery = () => {
      try {
        localStorage.setItem("scienceio_apple_fc_mastered", JSON.stringify([...masteredCards]));
      } catch (_) {}
    };

    const getAvailableTopics = () => {
      if (Array.isArray(window.SCIENCE_IO_PUBLISHED_NOTES) && window.SCIENCE_IO_PUBLISHED_NOTES.length > 0) {
        return window.SCIENCE_IO_PUBLISHED_NOTES;
      }
      if (Array.isArray(this.notes) && this.notes.length > 0) {
        return this.notes;
      }
      return [];
    };

    const populateTopicSelect = () => {
      topics = getAvailableTopics();
      if (!topicSelect || !topics.length) return;
      topicSelect.innerHTML = "";

      const allOpt = document.createElement("option");
      allOpt.value = "all";
      allOpt.textContent = "All Topics Mixed Shuffle";
      topicSelect.appendChild(allOpt);

      topics.forEach((t, i) => {
        const opt = document.createElement("option");
        opt.value = String(i);
        opt.textContent = `${t.title} (${(t.properties || []).length} Cards)`;
        topicSelect.appendChild(opt);
      });
    };

    const loadTopicCards = (topicIndexVal) => {
      topics = getAvailableTopics();
      currentCards = [];

      if (topicIndexVal === "all" || topicIndexVal === "") {
        topics.forEach(t => {
          if (Array.isArray(t.properties)) {
            t.properties.forEach(p => {
              currentCards.push({
                topicTitle: t.title,
                cardId: `${t.id || t.title}-${p.num}`,
                num: p.num,
                name: p.name || "Concept",
                formula: p.formula || "Scientific Principle",
                trick: p.trick || "Memory Trick: Read carefully!",
                explanation: p.explanation || "Scientific concept overview.",
                example: p.example || "Real-world science example in nature."
              });
            });
          }
        });
      } else {
        const idx = parseInt(topicIndexVal, 10);
        const t = topics[idx] || topics[0];
        if (t && Array.isArray(t.properties)) {
          t.properties.forEach(p => {
            currentCards.push({
              topicTitle: t.title,
              cardId: `${t.id || t.title}-${p.num}`,
              num: p.num,
              name: p.name || "Concept",
              formula: p.formula || "Scientific Principle",
              trick: p.trick || "Memory Trick: Read carefully!",
              explanation: p.explanation || "Scientific concept overview.",
              example: p.example || "Real-world science example in nature."
            });
          });
        }
      }

      currentIndex = 0;
      isFlipped = false;
      cardContainer.classList.remove("flipped");
      renderActiveCard();
    };

    const renderActiveCard = () => {
      if (!currentCards.length) return;
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex >= currentCards.length) currentIndex = currentCards.length - 1;

      const card = currentCards[currentIndex];
      const isMastered = masteredCards.has(card.cardId);

      isFlipped = false;
      cardContainer.classList.remove("flipped");

      if (catEl) catEl.textContent = card.topicTitle.toUpperCase();
      if (numEl) numEl.textContent = `#${currentIndex + 1}`;
      if (backNumEl) backNumEl.textContent = `#${currentIndex + 1}`;
      if (termEl) termEl.textContent = card.name;
      if (backTitleEl) backTitleEl.textContent = card.name;
      if (formulaEl) formulaEl.textContent = card.formula;
      if (trickEl) trickEl.textContent = card.trick.startsWith("Memory Trick:") ? `${card.trick}` : `${card.trick}`;
      if (defEl) defEl.textContent = card.explanation;
      if (exampleEl) {
        exampleEl.innerHTML = `<strong>Real-World Science:</strong> ${card.example}`;
      }

      const total = currentCards.length;
      let masteredInDeck = 0;
      currentCards.forEach(c => {
        if (masteredCards.has(c.cardId)) masteredInDeck++;
      });
      const pct = Math.round((masteredInDeck / total) * 100);

      if (counterEl) counterEl.textContent = `Card ${currentIndex + 1} / ${total}`;
      if (masteryTagEl) {
        masteryTagEl.textContent = `${pct}% Mastered`;
        masteryTagEl.style.color = pct >= 80 ? "#34d399" : pct >= 40 ? "#38bdf8" : "#fbbf24";
      }

      // Sync Dynamic Island
      if (window.app?.dynamicIsland?.trigger) {
        window.app.dynamicIsland.trigger({
          icon: "cards",
          title: `Card ${currentIndex + 1}/${total}: ${card.name}`,
          subtitle: `${card.topicTitle} • ${pct}% Mastered`,
          badge: isMastered ? "MASTERED" : "STUDY",
          duration: 2500
        });
      }
    };

    const flipCard = () => {
      isFlipped = !isFlipped;
      cardContainer.classList.toggle("flipped", isFlipped);
      try {
        if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
        else sounds.playClick();
      } catch (_) {}
    };

    const nextCard = () => {
      if (currentIndex < currentCards.length - 1) {
        currentIndex++;
        renderActiveCard();
      } else {
        currentIndex = 0;
        renderActiveCard();
      }
      try {
        if (typeof sounds.playKeypadTap === "function") sounds.playKeypadTap();
      } catch (_) {}
    };

    const prevCard = () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderActiveCard();
      } else {
        currentIndex = currentCards.length - 1;
        renderActiveCard();
      }
      try {
        if (typeof sounds.playKeypadTap === "function") sounds.playKeypadTap();
      } catch (_) {}
    };

    const shuffleDeck = () => {
      for (let i = currentCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
      }
      currentIndex = 0;
      renderActiveCard();
      try {
        if (typeof sounds.playMechanicalKey === "function") sounds.playMechanicalKey();
      } catch (_) {}
      if (window.app?.dynamicIsland?.trigger) {
        window.app.dynamicIsland.trigger({
          icon: "shuffle",
          title: "Deck Shuffled!",
          subtitle: "Cards randomized for active recall testing",
          badge: "SHUFFLE",
          duration: 2200
        });
      }
    };

    cardContainer.addEventListener("click", () => flipCard());
    flipBtn?.addEventListener("click", () => flipCard());
    nextBtn?.addEventListener("click", () => nextCard());
    prevBtn?.addEventListener("click", () => prevCard());
    shuffleBtn?.addEventListener("click", () => shuffleDeck());

    practiceBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = currentCards[currentIndex];
      if (card) {
        masteredCards.delete(card.cardId);
        saveMastery();
      }
      nextCard();
    });

    masteredBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = currentCards[currentIndex];
      if (card) {
        masteredCards.add(card.cardId);
        saveMastery();
        try {
          if (typeof sounds.playSuccess === "function") sounds.playSuccess();
        } catch (_) {}
      }
      nextCard();
    });

    topicSelect?.addEventListener("change", (e) => {
      loadTopicCards(e.target.value);
    });

    closeBtn?.addEventListener("click", () => {
      this.closeAppleFlashcards();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) this.closeAppleFlashcards();
    });

    window.addEventListener("keydown", (e) => {
      if (modal.classList.contains("hidden")) return;
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;

      if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        flipCard();
      } else if (e.key === "ArrowRight" || e.key === "l" || e.key === "L") {
        nextCard();
      } else if (e.key === "ArrowLeft" || e.key === "h" || e.key === "H") {
        prevCard();
      } else if (e.key === "1") {
        practiceBtn?.click();
      } else if (e.key === "2") {
        masteredBtn?.click();
      } else if (e.key === "Escape") {
        this.closeAppleFlashcards();
      }
    });

    document.getElementById("nav-btn-cards")?.addEventListener("click", () => {
      this.openAppleFlashcards();
    });

    this.openAppleFlashcards = (topicId = null) => {
      populateTopicSelect();
      if (topicId) {
        const foundIdx = topics.findIndex(t => (t.id || "").toLowerCase() === String(topicId).toLowerCase());
        if (foundIdx >= 0) {
          topicSelect.value = String(foundIdx);
          loadTopicCards(String(foundIdx));
        } else {
          loadTopicCards("0");
        }
      } else {
        loadTopicCards(topicSelect.value || "0");
      }
      modal.classList.remove("hidden");
      cardContainer.focus();
      try {
        if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
      } catch (_) {}
    };

    this.closeAppleFlashcards = () => {
      modal.classList.add("hidden");
      try {
        if (typeof sounds.playClick === "function") sounds.playClick();
      } catch (_) {}
    };
  }

// APPLE SPLIT VIEW: SCIENCE CONCEPT DUEL & COMPARATOR (STAGE MANAGER)
  setupAppleSplitView() {
    const modal = document.getElementById("apple-split-view-modal");
    const windowEl = document.getElementById("apple-split-window");
    const arenaEl = document.getElementById("apple-split-arena");
    const closeBtn = document.getElementById("split-close-btn");
    const trafficClose = document.getElementById("split-traffic-close");
    const trafficReset = document.getElementById("split-traffic-reset");
    const trafficExpand = document.getElementById("split-traffic-expand");
    const modeToggle = document.getElementById("split-mode-toggle");
    const modeLabel = document.getElementById("split-mode-label");
    const resetLayoutBtn = document.getElementById("split-reset-layout-btn");
    const presetChips = document.querySelectorAll(".split-preset-chip");

    // Pane A Elements
    const paneA = document.getElementById("split-pane-a");
    const unitSelectA = document.getElementById("split-unit-a");
    const conceptSelectA = document.getElementById("split-concept-a");
    const cardA = document.getElementById("split-card-a");
    const dragHandleA = document.getElementById("drag-handle-a");
    const coordA = document.getElementById("drag-coord-a");
    const catTagA = document.getElementById("split-cat-a");
    const numPillA = document.getElementById("split-num-a");
    const titleA = document.getElementById("split-title-a");
    const formulaA = document.getElementById("split-formula-a");
    const descA = document.getElementById("split-desc-a");
    const trickA = document.getElementById("split-trick-a");
    const exampleA = document.getElementById("split-example-a");
    const ttsBtnA = document.getElementById("split-tts-a");

    // Pane B Elements
    const paneB = document.getElementById("split-pane-b");
    const unitSelectB = document.getElementById("split-unit-b");
    const conceptSelectB = document.getElementById("split-concept-b");
    const cardB = document.getElementById("split-card-b");
    const dragHandleB = document.getElementById("drag-handle-b");
    const coordB = document.getElementById("drag-coord-b");
    const catTagB = document.getElementById("split-cat-b");
    const numPillB = document.getElementById("split-num-b");
    const titleB = document.getElementById("split-title-b");
    const formulaB = document.getElementById("split-formula-b");
    const descB = document.getElementById("split-desc-b");
    const trickB = document.getElementById("split-trick-b");
    const exampleB = document.getElementById("split-example-b");
    const ttsBtnB = document.getElementById("split-tts-b");

    // Center Bridge & Duel Elements
    const ratioBtns = document.querySelectorAll(".split-ratio-btn");
    const handleBar = document.getElementById("split-handle-bar");
    const swapBtn = document.getElementById("split-swap-btn");
    const contrastUnitA = document.getElementById("contrast-unit-a");
    const contrastUnitB = document.getElementById("contrast-unit-b");
    const contrastCatA = document.getElementById("contrast-cat-a");
    const contrastCatB = document.getElementById("contrast-cat-b");

    const duelStreakBadge = document.getElementById("split-streak-badge");
    const duelPrompt = document.getElementById("split-duel-prompt");
    const duelStartBtn = document.getElementById("split-duel-start-btn");
    const duelChoices = document.getElementById("split-duel-choices");
    const duelChoiceA = document.getElementById("duel-choice-a");
    const duelChoiceB = document.getElementById("duel-choice-b");
    const duelFeedback = document.getElementById("split-duel-feedback");

    if (!modal || !windowEl || !unitSelectA || !unitSelectB) return;

    let topics = [];
    let isFreeformMode = false;
    let duelStreak = 0;
    let activeDuel = null;
    let cardAPos = { x: 0, y: 0 };
    let cardBPos = { x: 0, y: 0 };

    const getAvailableTopics = () => {
      let list = Array.isArray(window.SCIENCE_IO_PUBLISHED_NOTES) ? [...window.SCIENCE_IO_PUBLISHED_NOTES] : [];
      try {
        const stored = localStorage.getItem("skience_user_notes");
        if (stored) {
          const userNotes = JSON.parse(stored);
          if (Array.isArray(userNotes)) {
            userNotes.forEach((un) => {
              if (un && un.id && !list.some(t => t.id === un.id)) {
                list.push(un);
              }
            });
          }
        }
      } catch (_) {}
      return list.filter(t => t && Array.isArray(t.properties) && t.properties.length > 0);
    };

    const populateUnitDropdowns = () => {
      topics = getAvailableTopics();
      if (!topics.length) return;

      const html = topics.map((t, idx) => `<option value="${idx}">${t.title || `Unit ${idx + 1}`}</option>`).join("");
      unitSelectA.innerHTML = html;
      unitSelectB.innerHTML = html;

      // Default: Unit 0 (Plant Cell) on Left, Unit 1 (Animal Cell) on Right
      unitSelectA.value = "0";
      unitSelectB.value = topics.length > 1 ? "1" : "0";

      populateConceptDropdown("a");
      populateConceptDropdown("b");
    };

    const populateConceptDropdown = (side) => {
      const unitSelect = side === "a" ? unitSelectA : unitSelectB;
      const conceptSelect = side === "a" ? conceptSelectA : conceptSelectB;
      const unitIdx = parseInt(unitSelect.value, 10) || 0;
      const topic = topics[unitIdx];
      if (!topic || !Array.isArray(topic.properties)) return;

      conceptSelect.innerHTML = topic.properties.map((p, idx) => {
        return `<option value="${idx}">#${p.num || idx + 1} ${p.name || `Concept ${idx + 1}`}</option>`;
      }).join("");

      // Default selections for maximum visual comparison
      if (side === "a") {
        conceptSelect.value = "0"; // e.g. Chloroplast / Cell Membrane
      } else {
        conceptSelect.value = topic.properties.length > 2 ? "2" : "0";
      }

      renderConceptCard(side);
      updateContrastMatrix();
    };

    const getSelectedProperty = (side) => {
      const unitSelect = side === "a" ? unitSelectA : unitSelectB;
      const conceptSelect = side === "a" ? conceptSelectA : conceptSelectB;
      const unitIdx = parseInt(unitSelect.value, 10) || 0;
      const topic = topics[unitIdx];
      if (!topic || !Array.isArray(topic.properties)) return null;
      const conceptIdx = parseInt(conceptSelect.value, 10) || 0;
      return { topic, prop: topic.properties[conceptIdx] || topic.properties[0] };
    };

    const renderConceptCard = (side) => {
      const data = getSelectedProperty(side);
      if (!data || !data.prop) return;

      const { topic, prop } = data;
      const catEl = side === "a" ? catTagA : catTagB;
      const numEl = side === "a" ? numPillA : numPillB;
      const titleEl = side === "a" ? titleA : titleB;
      const formulaEl = side === "a" ? formulaA : formulaB;
      const descEl = side === "a" ? descA : descB;
      const trickEl = side === "a" ? trickA : trickB;
      const exampleEl = side === "a" ? exampleA : exampleB;

      if (catEl) catEl.textContent = (topic.category || "SCIENCE").toUpperCase();
      if (numEl) numEl.textContent = `#${prop.num || 1}`;
      if (titleEl) titleEl.textContent = prop.name || "Concept";
      if (formulaEl) formulaEl.textContent = prop.formula || "Key Concept Principle";
      if (descEl) descEl.textContent = prop.explanation || "Scientific concept details and characteristics.";
      if (trickEl) trickEl.textContent = prop.trick || "Memory Trick: Connect core idea to familiar objects!";
      if (exampleEl) exampleEl.textContent = prop.example || "Real-world scientific application.";

      // Update duel choice buttons
      if (side === "a" && duelChoiceA) duelChoiceA.textContent = `A: ${prop.name}`;
      if (side === "b" && duelChoiceB) duelChoiceB.textContent = `B: ${prop.name}`;
    };

    const updateContrastMatrix = () => {
      const dataA = getSelectedProperty("a");
      const dataB = getSelectedProperty("b");
      if (!dataA || !dataB) return;

      if (contrastUnitA) contrastUnitA.textContent = dataA.topic.title || "Unit A";
      if (contrastUnitB) contrastUnitB.textContent = dataB.topic.title || "Unit B";
      if (contrastCatA) contrastCatA.textContent = dataA.prop?.name || "Concept A";
      if (contrastCatB) contrastCatB.textContent = dataB.prop?.name || "Concept B";
    };

// MOVABLE DRAG & FREEFORM ENGINE
    const setupDraggableCard = (cardEl, handleEl, coordEl, isCardA) => {
      let isDragging = false;
      let startX = 0;
      let startY = 0;
      let initialPos = { x: 0, y: 0 };

      const onPointerDown = (e) => {
        // Prevent drag on text selection or clicks inside select/button
        if (e.target.closest("select") || e.target.closest("button")) return;
        e.preventDefault();

        isDragging = true;
        startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        startY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
        initialPos = isCardA ? { ...cardAPos } : { ...cardBPos };

        cardEl.classList.add("is-dragging");
        try {
          if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
        } catch (_) {}

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);
        window.addEventListener("touchmove", onPointerMove, { passive: false });
        window.addEventListener("touchend", onPointerUp);
      };

      const onPointerMove = (e) => {
        if (!isDragging) return;
        const curX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        const curY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
        const dx = curX - startX;
        const dy = curY - startY;

        const newX = initialPos.x + dx;
        const newY = initialPos.y + dy;

        cardEl.style.transform = `translate(${newX}px, ${newY}px) scale(1.02) rotate(-1.5deg)`;
        if (coordEl) coordEl.textContent = `X: ${Math.round(newX)} Y: ${Math.round(newY)}`;

        // Detect hover over opposite pane
        const targetPane = isCardA ? paneB : paneA;
        if (targetPane) {
          const rect = targetPane.getBoundingClientRect();
          const isOver = curX >= rect.left && curX <= rect.right && curY >= rect.top && curY <= rect.bottom;
          targetPane.classList.toggle("drag-hover", isOver);
        }
      };

      const onPointerUp = (e) => {
        if (!isDragging) return;
        isDragging = false;
        cardEl.classList.remove("is-dragging");

        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("touchmove", onPointerMove);
        window.removeEventListener("touchend", onPointerUp);

        const curX = e.clientX || (e.changedTouches && e.changedTouches[0]?.clientX) || 0;
        const curY = e.clientY || (e.changedTouches && e.changedTouches[0]?.clientY) || 0;
        const targetPane = isCardA ? paneB : paneA;
        let droppedOnOpposite = false;

        if (targetPane) {
          const rect = targetPane.getBoundingClientRect();
          if (curX >= rect.left && curX <= rect.right && curY >= rect.top && curY <= rect.bottom) {
            droppedOnOpposite = true;
          }
          targetPane.classList.remove("drag-hover");
        }

        if (droppedOnOpposite) {
          // Dropped on opposite pane: SWAP!
          swapSides();
          snapToGrid();
          try {
            if (typeof sounds.playSuccess === "function") sounds.playSuccess();
          } catch (_) {}
        } else if (isFreeformMode) {
          // Freeform mode: remember position
          const dx = curX - startX;
          const dy = curY - startY;
          const newPos = { x: initialPos.x + dx, y: initialPos.y + dy };
          if (isCardA) cardAPos = newPos;
          else cardBPos = newPos;

          cardEl.classList.add("is-freeform");
          cardEl.style.transform = `translate(${newPos.x}px, ${newPos.y}px)`;
          if (coordEl) coordEl.textContent = "Custom Pinned";
        } else {
          // Standard split: spring back to column
          cardEl.style.transform = "";
          if (isCardA) cardAPos = { x: 0, y: 0 };
          else cardBPos = { x: 0, y: 0 };
          if (coordEl) coordEl.textContent = "Auto Column";
        }
      };

      handleEl.addEventListener("pointerdown", onPointerDown);
      handleEl.addEventListener("touchstart", onPointerDown, { passive: false });
    };

    setupDraggableCard(cardA, dragHandleA, coordA, true);
    setupDraggableCard(cardB, dragHandleB, coordB, false);

    // Freeform Mode Toggle
    modeToggle?.addEventListener("click", () => {
      isFreeformMode = !isFreeformMode;
      modeToggle.classList.toggle("active", isFreeformMode);
      if (modeLabel) modeLabel.textContent = isFreeformMode ? "Freeform: Active" : "Freeform Move";
      try {
        if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
      } catch (_) {}
    });

    // Snap to Grid Reset
    const snapToGrid = () => {
      cardAPos = { x: 0, y: 0 };
      cardBPos = { x: 0, y: 0 };
      cardA.style.transform = "";
      cardB.style.transform = "";
      cardA.classList.remove("is-freeform");
      cardB.classList.remove("is-freeform");
      if (coordA) coordA.textContent = "Auto Column";
      if (coordB) coordB.textContent = "Auto Column";
    };

    resetLayoutBtn?.addEventListener("click", () => {
      snapToGrid();
      try {
        if (typeof sounds.playKeypadTap === "function") sounds.playKeypadTap();
      } catch (_) {}
    });

// SWAP SIDES
    const swapSides = () => {
      const uA = unitSelectA.value;
      const cA = conceptSelectA.value;
      const uB = unitSelectB.value;
      const cB = conceptSelectB.value;

      cardA.classList.add("card-swapping");
      cardB.classList.add("card-swapping");

      unitSelectA.value = uB;
      populateConceptDropdown("a");
      conceptSelectA.value = cB;
      renderConceptCard("a");

      unitSelectB.value = uA;
      populateConceptDropdown("b");
      conceptSelectB.value = cA;
      renderConceptCard("b");

      updateContrastMatrix();
      setTimeout(() => {
        cardA.classList.remove("card-swapping");
        cardB.classList.remove("card-swapping");
      }, 350);
    };

    swapBtn?.addEventListener("click", () => {
      swapSides();
      try {
        if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
      } catch (_) {}
    });

// SPLIT RATIO & DRAGGABLE DIVIDER
    ratioBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        ratioBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const ratio = btn.dataset.ratio;
        if (ratio === "30-70") {
          paneA.style.flex = "0 0 30%";
          paneB.style.flex = "0 0 70%";
        } else if (ratio === "70-30") {
          paneA.style.flex = "0 0 70%";
          paneB.style.flex = "0 0 30%";
        } else {
          paneA.style.flex = "1 1 0";
          paneB.style.flex = "1 1 0";
        }
        try {
          if (typeof sounds.playKeypadTap === "function") sounds.playKeypadTap();
        } catch (_) {}
      });
    });

    let isResizingDivider = false;
    handleBar?.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      isResizingDivider = true;
      const arenaRect = arenaEl.getBoundingClientRect();

      const onMove = (me) => {
        if (!isResizingDivider) return;
        const clientX = me.clientX || (me.touches && me.touches[0].clientX);
        const percent = Math.min(80, Math.max(20, ((clientX - arenaRect.left) / arenaRect.width) * 100));
        paneA.style.flex = `0 0 ${percent}%`;
        paneB.style.flex = `0 0 ${100 - percent}%`;
      };

      const onUp = () => {
        isResizingDivider = false;
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    });

// MATCHUP PRESETS
    presetChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        presetChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const preset = chip.dataset.preset;

        const findUnitIndex = (pattern) => {
          return topics.findIndex(t => {
            const str = `${t.id} ${t.title}`.toLowerCase();
            return str.includes(pattern);
          });
        };

        if (preset === "plant-vs-animal") {
          const idxA = Math.max(0, findUnitIndex("plant"));
          const idxB = Math.max(0, findUnitIndex("animal"));
          unitSelectA.value = String(idxA);
          populateConceptDropdown("a");
          unitSelectB.value = String(idxB);
          populateConceptDropdown("b");
        } else if (preset === "wall-vs-membrane") {
          const idxA = Math.max(0, findUnitIndex("plant"));
          unitSelectA.value = String(idxA);
          populateConceptDropdown("a");
          conceptSelectA.value = "7"; // Cell Wall in Plant Cell
          renderConceptCard("a");

          const idxB = Math.max(0, findUnitIndex("animal"));
          unitSelectB.value = String(idxB);
          populateConceptDropdown("b");
          conceptSelectB.value = "0"; // Cell Membrane in Animal Cell
          renderConceptCard("b");
        } else if (preset === "artery-vs-vein") {
          const idxCirc = Math.max(0, findUnitIndex("circulatory"));
          unitSelectA.value = String(idxCirc);
          populateConceptDropdown("a");
          conceptSelectA.value = "1"; // Artery
          renderConceptCard("a");

          unitSelectB.value = String(idxCirc);
          populateConceptDropdown("b");
          conceptSelectB.value = "2"; // Vein
          renderConceptCard("b");
        } else if (preset === "voluntary-vs-involuntary") {
          const idxMusc = Math.max(0, findUnitIndex("muscular"));
          unitSelectA.value = String(idxMusc);
          populateConceptDropdown("a");
          conceptSelectA.value = "0"; // Skeletal / Voluntary
          renderConceptCard("a");

          unitSelectB.value = String(idxMusc);
          populateConceptDropdown("b");
          conceptSelectB.value = "1"; // Smooth / Involuntary
          renderConceptCard("b");
        } else if (preset === "random") {
          const randA = Math.floor(Math.random() * topics.length);
          let randB = Math.floor(Math.random() * topics.length);
          if (topics.length > 1 && randB === randA) randB = (randA + 1) % topics.length;

          unitSelectA.value = String(randA);
          populateConceptDropdown("a");
          const propsA = topics[randA]?.properties || [];
          if (propsA.length) conceptSelectA.value = String(Math.floor(Math.random() * propsA.length));
          renderConceptCard("a");

          unitSelectB.value = String(randB);
          populateConceptDropdown("b");
          const propsB = topics[randB]?.properties || [];
          if (propsB.length) conceptSelectB.value = String(Math.floor(Math.random() * propsB.length));
          renderConceptCard("b");
        }

        updateContrastMatrix();
        try {
          if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
        } catch (_) {}
      });
    });

// CONCEPT DUEL QUIZ ENGINE
    const startConceptDuel = () => {
      const dataA = getSelectedProperty("a");
      const dataB = getSelectedProperty("b");
      if (!dataA || !dataB) return;

      const targetIsA = Math.random() < 0.5;
      const targetData = targetIsA ? dataA : dataB;
      const prop = targetData.prop;

      // Extract a punchy clue
      const clues = [
        prop.formula ? `Principle: "${prop.formula}"` : null,
        prop.explanation ? `Teacher Definition: "${prop.explanation}"` : null,
        prop.example ? `Real-World: "${prop.example}"` : null,
        prop.trick ? `Clue: "${prop.trick}"` : null
      ].filter(Boolean);

      const clue = clues[Math.floor(Math.random() * clues.length)] || prop.explanation;

      activeDuel = {
        targetIsA,
        nameA: dataA.prop.name,
        nameB: dataB.prop.name,
        targetName: prop.name
      };

      if (duelPrompt) {
        duelPrompt.innerHTML = `<strong>Which concept does this describe?</strong><br/><em style="color:#38bdf8;">${clue}</em>`;
      }

      if (duelStartBtn) duelStartBtn.textContent = "Next Duel Question";
      if (duelChoices) duelChoices.classList.remove("hidden");
      if (duelFeedback) duelFeedback.classList.add("hidden");

      // Card highlight prompts
      cardA.style.borderColor = targetIsA ? "rgba(56, 189, 248, 0.6)" : "rgba(255, 255, 255, 0.15)";
      cardB.style.borderColor = !targetIsA ? "rgba(168, 85, 247, 0.6)" : "rgba(255, 255, 255, 0.15)";
    };

    const handleDuelAnswer = (choseA) => {
      if (!activeDuel) return;
      const isCorrect = choseA === activeDuel.targetIsA;

      if (duelFeedback) {
        duelFeedback.classList.remove("hidden", "correct", "wrong");
        if (isCorrect) {
          duelStreak++;
          duelFeedback.classList.add("correct");
          duelFeedback.textContent = `Brilliant! That describes ${activeDuel.targetName}!`;
          try {
            if (typeof sounds.playSuccess === "function") sounds.playSuccess();
          } catch (_) {}
        } else {
          duelStreak = 0;
          duelFeedback.classList.add("wrong");
          duelFeedback.textContent = `Almost! That was ${activeDuel.targetName}.`;
          try {
            if (typeof sounds.playKeypadTap === "function") sounds.playKeypadTap();
          } catch (_) {}
        }
      }

      if (duelStreakBadge) {
        duelStreakBadge.textContent = `Streak: ${duelStreak}`;
      }

      activeDuel = null;
    };

    duelStartBtn?.addEventListener("click", () => startConceptDuel());
    duelChoiceA?.addEventListener("click", () => handleDuelAnswer(true));
    duelChoiceB?.addEventListener("click", () => handleDuelAnswer(false));
    cardA?.addEventListener("click", (e) => {
      if (activeDuel && !e.target.closest("select") && !e.target.closest("button") && !e.target.closest(".card-drag-bar")) {
        handleDuelAnswer(true);
      }
    });
    cardB?.addEventListener("click", (e) => {
      if (activeDuel && !e.target.closest("select") && !e.target.closest("button") && !e.target.closest(".card-drag-bar")) {
        handleDuelAnswer(false);
      }
    });

// AUDIO READ ALOUD (TTS)
    const speakConcept = (side) => {
      const data = getSelectedProperty(side);
      if (!data || !data.prop || typeof window.speechSynthesis === "undefined") return;

      window.speechSynthesis.cancel();
      const text = `${data.prop.name}. ${data.prop.formula || ""}. Explanation: ${data.prop.explanation}. ${data.prop.trick || ""}. Real world example: ${data.prop.example || ""}`;
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 0.96;
      utter.pitch = 1.0;

      utter.onstart = () => {
        this.dynamicIsland?.setMicPrivacy?.(true);
      };
      utter.onend = () => {
        this.dynamicIsland?.setMicPrivacy?.(false);
      };
      utter.onerror = () => {
        this.dynamicIsland?.setMicPrivacy?.(false);
      };

      window.speechSynthesis.speak(utter);
      try {
        if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
      } catch (_) {}
    };

    ttsBtnA?.addEventListener("click", () => speakConcept("a"));
    ttsBtnB?.addEventListener("click", () => speakConcept("b"));

    // Dropdown change events
    unitSelectA?.addEventListener("change", () => populateConceptDropdown("a"));
    conceptSelectA?.addEventListener("change", () => {
      renderConceptCard("a");
      updateContrastMatrix();
    });

    unitSelectB?.addEventListener("change", () => populateConceptDropdown("b"));
    conceptSelectB?.addEventListener("change", () => {
      renderConceptCard("b");
      updateContrastMatrix();
    });

    // Traffic light window actions
    trafficClose?.addEventListener("click", () => this.closeAppleSplitView());
    trafficReset?.addEventListener("click", () => {
      paneA.style.flex = "1 1 0";
      paneB.style.flex = "1 1 0";
      ratioBtns.forEach(b => b.classList.toggle("active", b.dataset.ratio === "50-50"));
      snapToGrid();
    });
    trafficExpand?.addEventListener("click", () => {
      windowEl.classList.toggle("is-fullscreen");
      try {
        if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
      } catch (_) {}
    });

    closeBtn?.addEventListener("click", () => this.closeAppleSplitView());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) this.closeAppleSplitView();
    });

    // Wire navbar trigger button
    document.getElementById("nav-btn-split-view")?.addEventListener("click", () => {
      this.openAppleSplitView();
    });

    // Public Open / Close Methods
    this.openAppleSplitView = (unitA = null, conceptA = null, unitB = null, conceptB = null) => {
      populateUnitDropdowns();

      if (unitA !== null) {
        unitSelectA.value = String(unitA);
        populateConceptDropdown("a");
        if (conceptA !== null) conceptSelectA.value = String(conceptA);
        renderConceptCard("a");
      }

      if (unitB !== null) {
        unitSelectB.value = String(unitB);
        populateConceptDropdown("b");
        if (conceptB !== null) conceptSelectB.value = String(conceptB);
        renderConceptCard("b");
      }

      updateContrastMatrix();
      snapToGrid();
      modal.classList.remove("hidden");

      if (this.dynamicIsland?.trigger) {
        this.dynamicIsland.trigger({
          icon: "bolt",
          title: "Apple Split View Active",
          subtitle: "Stage Manager Dual Concept Lab • Drag to Arrange",
          badge: "STAGE MGR",
          actionText: "EXPLORE",
          duration: 3200
        });
      }

      try {
        if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
      } catch (_) {}
    };

    this.closeAppleSplitView = () => {
      modal.classList.add("hidden");
      if (typeof window.speechSynthesis !== "undefined") {
        window.speechSynthesis.cancel();
      }
      this.dynamicIsland?.setMicPrivacy?.(false);
      try {
        if (typeof sounds.playClick === "function") sounds.playClick();
      } catch (_) {}
    };
  }

// APPLE WATCH ACTIVITY RINGS & IOS 18 WIDGET DECK
  setupAppleActivityRings() {
    const modal = document.getElementById("apple-rings-modal");
    const openBtn = document.getElementById("btn-apple-activity-rings");
    const closeBtn = document.getElementById("apple-rings-close-btn");
    const flipCard = document.getElementById("concept-flip-card");
    const shuffleBtn = document.getElementById("concept-shuffle-btn");
    const jumpBtn = document.getElementById("widget-jump-notes-btn");

    if (!modal) return;

    // Ring SVG Elements
    const ringOuter = document.getElementById("ring-outer");
    const ringMiddle = document.getElementById("ring-middle");
    const ringInner = document.getElementById("ring-inner");

    // Metric Displays
    const topicsVal = document.getElementById("metric-topics-val");
    const topicsPct = document.getElementById("metric-topics-pct");
    const cardsVal = document.getElementById("metric-cards-val");
    const cardsPct = document.getElementById("metric-cards-pct");
    const quizVal = document.getElementById("metric-quiz-val");
    const quizPct = document.getElementById("metric-quiz-pct");

    // Widget Card Face Elements
    const cardCat = document.getElementById("widget-card-cat");
    const cardTitle = document.getElementById("widget-card-title");
    const cardDesc = document.getElementById("widget-card-desc");
    const cardTrick = document.getElementById("widget-card-trick");
    const cardFormula = document.getElementById("widget-card-formula");

    // Circumference constants (2 * PI * r)
    const C_OUTER = 339.29; // r = 54
    const C_MIDDLE = 245.04; // r = 39
    const C_INNER = 150.80; // r = 24

    // Local Storage Progress State
    let exploredTopics = new Set();
    let quizSolvedCount = 0;
    try {
      const savedTopics = JSON.parse(localStorage.getItem("scienceio_explored_topics") || "[]");
      if (Array.isArray(savedTopics)) exploredTopics = new Set(savedTopics);
      quizSolvedCount = parseInt(localStorage.getItem("scienceio_quizzes_solved") || "0", 10);
      if (isNaN(quizSolvedCount)) quizSolvedCount = 0;
    } catch (_) {}

    this.recordTopicExplored = (topicId) => {
      if (!topicId) return;
      exploredTopics.add(String(topicId));
      try {
        localStorage.setItem("scienceio_explored_topics", JSON.stringify([...exploredTopics]));
      } catch (_) {}
      this.updateAppleActivityRings();
    };

    this.recordQuizSolved = () => {
      quizSolvedCount++;
      try {
        localStorage.setItem("scienceio_quizzes_solved", String(quizSolvedCount));
      } catch (_) {}
      this.updateAppleActivityRings();
    };

    // Public Update Method (Pure SVG stroke-dashoffset math, 0% CPU lag)
    this.updateAppleActivityRings = () => {
      const totalTopics = (Array.isArray(this.notes) && this.notes.length > 0) ? this.notes.length : 19;
      const exploredCount = Math.min(totalTopics, exploredTopics.size);
      const ratioTopics = Math.min(1, exploredCount / totalTopics);

      // Cards Mastered (from Apple Flashcards storage)
      let masteredCount = 0;
      try {
        const savedCards = JSON.parse(localStorage.getItem("scienceio_apple_fc_mastered") || "[]");
        if (Array.isArray(savedCards)) masteredCount = savedCards.length;
      } catch (_) {}
      const ratioCards = Math.min(1, masteredCount / 25);

      // Quiz Streak
      const ratioQuiz = Math.min(1, quizSolvedCount / 10);

      // Apply stroke-dashoffsets with smooth CSS transition
      if (ringOuter) {
        ringOuter.style.strokeDashoffset = (C_OUTER * (1 - ratioTopics)).toFixed(2);
      }
      if (ringMiddle) {
        ringMiddle.style.strokeDashoffset = (C_MIDDLE * (1 - ratioCards)).toFixed(2);
      }
      if (ringInner) {
        ringInner.style.strokeDashoffset = (C_INNER * (1 - ratioQuiz)).toFixed(2);
      }

      // Update text values
      if (topicsVal) topicsVal.textContent = `${exploredCount} / ${totalTopics}`;
      if (topicsPct) topicsPct.textContent = `${Math.round(ratioTopics * 100)}%`;

      if (cardsVal) cardsVal.textContent = `${masteredCount} Mastered`;
      if (cardsPct) cardsPct.textContent = masteredCount > 0 ? `${Math.round(ratioCards * 100)}%` : "Active";

      if (quizVal) quizVal.textContent = `${quizSolvedCount} Solved`;
      if (quizPct) quizPct.textContent = quizSolvedCount > 0 ? `${Math.round(ratioQuiz * 100)}%` : "Ready";
    };

    // 3D Concept Card Shuffle
    let currentTopicId = null;
    const shuffleConceptCard = () => {
      if (!Array.isArray(this.notes) || this.notes.length === 0) return;
      const randomTopic = this.notes[Math.floor(Math.random() * this.notes.length)];
      if (!randomTopic) return;
      currentTopicId = randomTopic.id;

      // Extract a representative property or topic info
      let prop = null;
      if (Array.isArray(randomTopic.properties) && randomTopic.properties.length > 0) {
        prop = randomTopic.properties[Math.floor(Math.random() * randomTopic.properties.length)];
      }

      if (cardCat) cardCat.textContent = (randomTopic.category || "PHYSICAL SCIENCE").toUpperCase();
      if (cardTitle) cardTitle.textContent = prop ? prop.name : randomTopic.title;
      if (cardDesc) cardDesc.textContent = prop ? prop.explanation : (randomTopic.description || "Core 5th Grade Science Principle.");
      if (cardTrick) cardTrick.textContent = prop?.trick ? `${UI_SVG.bulb} ${prop.trick}` : `Master ${randomTopic.title} for guaranteed science honors!`;
      if (cardFormula) cardFormula.textContent = prop?.formula || randomTopic.coreFormula || "Observable Science Law";

      // Reset flip state on shuffle
      if (flipCard) flipCard.classList.remove("flipped");
      try {
        if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
      } catch (_) {}
    };

    // Flip Card Toggle
    flipCard?.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      flipCard.classList.toggle("flipped");
      try {
        if (typeof sounds.playClick === "function") sounds.playClick();
      } catch (_) {}
    });

    flipCard?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        flipCard.classList.toggle("flipped");
      }
    });

    shuffleBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      shuffleConceptCard();
    });

    jumpBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.closeAppleActivityRings();
      if (currentTopicId && typeof this.openNotesViewer === "function") {
        this.openNotesViewer(currentTopicId, "notes");
      }
    });

    // Open / Close Handlers
    this.openAppleActivityRings = () => {
      this.updateAppleActivityRings();
      shuffleConceptCard();
      modal.classList.remove("hidden");
      try {
        if (typeof sounds.playTapticClick === "function") sounds.playTapticClick();
      } catch (_) {}
    };

    this.closeAppleActivityRings = () => {
      modal.classList.add("hidden");
      try {
        if (typeof sounds.playClick === "function") sounds.playClick();
      } catch (_) {}
    };

    openBtn?.addEventListener("click", () => this.openAppleActivityRings());
    closeBtn?.addEventListener("click", () => this.closeAppleActivityRings());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) this.closeAppleActivityRings();
    });

    window.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("hidden") && e.key === "Escape") {
        this.closeAppleActivityRings();
      }
    });

    // Initial load
    this.updateAppleActivityRings();
  }
}


// TOPIC & FORMULA LOOKUP PANEL
class StudyLookupPanel {
  constructor() {
    this.bubble = document.getElementById("study-lookup-toggle");
    this.window = document.getElementById("study-lookup-panel");
    this.closeBtn = document.getElementById("study-lookup-close");
    this.clearBtn = document.getElementById("study-lookup-clear");
    this.input = document.getElementById("study-lookup-input");
    this.sendBtn = document.getElementById("study-lookup-go");
    this.messagesContainer = document.getElementById("study-lookup-results");
    this.promptTray = document.getElementById("study-lookup-chips");
    this.isResponding = false;

    if (this.bubble && this.window) {
      this.init();
    }
  }

  init() {
    this.bubble.addEventListener("click", () => this.toggleChat());
    this.closeBtn.addEventListener("click", () => this.toggleChat());
    if (this.clearBtn) {
      this.clearBtn.addEventListener("click", () => this.clearChat());
    }
    this.sendBtn.addEventListener("click", () => this.handleSend());
    this.input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.handleSend();
    });

    if (this.promptTray) {
      this.promptTray.addEventListener("click", (e) => {
        const chip = e.target.closest(".lookup-chip");
        if (chip && !this.isResponding) {
          const query = chip.dataset.query;
          if (query) {
            this.input.value = query;
            this.handleSend();
          }
        }
      });
    }

    this.messagesContainer.addEventListener("click", (e) => {
      const pill = e.target.closest(".chat-prompt-pill");
      if (pill && !this.isResponding) {
        const query = pill.dataset.query;
        if (query) {
          this.input.value = query;
          this.handleSend();
        }
        return;
      }

      // Quiz Choice Selection
      const choiceBtn = e.target.closest(".quiz-choice-btn");
      if (choiceBtn && !choiceBtn.disabled) {
        const parent = choiceBtn.closest(".chat-quiz-box");
        if (parent) {
          const isCorrect = choiceBtn.dataset.correct === "true";
          const explanation = choiceBtn.dataset.explanation || "";
          parent.querySelectorAll(".quiz-choice-btn").forEach(b => {
            b.disabled = true;
            if (b.dataset.correct === "true") {
              b.style.background = "#10b981";
              b.style.borderColor = "#34d399";
              b.style.color = "#fff";
            } else if (b === choiceBtn && !isCorrect) {
              b.style.background = "#ef4444";
              b.style.borderColor = "#f87171";
              b.style.color = "#fff";
            }
          });

          const feedbackEl = parent.querySelector(".quiz-feedback-box");
          if (feedbackEl) {
            feedbackEl.classList.remove("hidden");
            feedbackEl.style.display = "block";
            feedbackEl.innerHTML = isCorrect 
              ? `<strong style="color: #34d399;">Correct!</strong> ${this.escapeHTML(explanation)}`
              : `<strong style="color: #f87171;">Incorrect.</strong> ${this.escapeHTML(explanation)}`;
            sounds.playSuccess();
          }
        }
        return;
      }

      // Interactive Action Button
      const actionBtn = e.target.closest(".chat-action-btn");
      if (actionBtn) {
        const action = actionBtn.dataset.action;
        const targetId = actionBtn.dataset.targetId;
        this.closeChat();
        sounds.playClick();

        if (action === "open-notes" && targetId && window.app && typeof window.app.openNotesViewer === "function") {
          window.app.openNotesViewer(targetId, "notes");
        } else if (action === "open-quiz" && targetId && window.app && typeof window.app.openNotesViewer === "function") {
          window.app.openNotesViewer(targetId, "practice");
        } else if (action === "scroll") {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        } else if (action === "toggle-music") {
          const musicBtn = document.getElementById("toast-music-toggle-btn");
          if (musicBtn) musicBtn.click();
        } else if (action === "print-all") {
          const printBtn = document.getElementById("btn-cheat-sheet");
          if (printBtn) printBtn.click();
        } else if (action === "command-hud") {
          const hudBtn = document.getElementById("btn-command-hud");
          if (hudBtn) hudBtn.click();
        }
        return;
      }

      const jumpBtn = e.target.closest(".chat-memo-jump-btn");
      if (jumpBtn) {
        const noteId = jumpBtn.dataset.noteId;
        this.closeChat();
        sounds.playSuccess();
        if (noteId && window.app && typeof window.app.openNotesViewer === "function") {
          window.app.openNotesViewer(noteId, "notes");
        } else {
          const target = document.getElementById("notes-section");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }

  clearChat() {
    this.messagesContainer.innerHTML = `
      <div class="chat-msg lookup-msg">
        <div class="msg-bubble lookup-bubble">
          <strong>Notes Lookup:</strong> Cleared. Search any unit, term, or formula below.
        </div>
      </div>
    `;
    sounds.playClick();
  }

  toggleChat() {
    if (this.window.classList.contains("hidden")) {
      this.openChat();
    } else {
      this.closeChat();
    }
  }

  openChat() {
    this.window.classList.remove("hidden");
    this.bubble.style.transform = "scale(0) rotate(-90deg)";
    setTimeout(() => { this.bubble.style.display = "none"; }, 300);
    sounds.playClick();
    this.input.focus();
  }

  closeChat() {
    this.window.classList.add("hidden");
    this.bubble.style.display = "flex";
    setTimeout(() => { this.bubble.style.transform = "scale(1) rotate(0deg)"; }, 10);
    sounds.playClick();
  }

  escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  getAvailableNotes() {
    if (window.app && Array.isArray(window.app.notes) && window.app.notes.length > 0) {
      return window.app.notes;
    }
    if (Array.isArray(window.SCIENCE_IO_PUBLISHED_NOTES) && window.SCIENCE_IO_PUBLISHED_NOTES.length > 0) {
      return window.SCIENCE_IO_PUBLISHED_NOTES;
    }
    try {
      const cached = JSON.parse(localStorage.getItem("scienceio_notes_v7") || "[]");
      if (Array.isArray(cached) && cached.length > 0) return cached;
    } catch (e) {}
    return [];
  }

  findNoteMatch(query) {
    const notes = this.getAvailableNotes();
    if (!notes.length) return null;
    const q = query.toLowerCase().trim();
    const stripped = q.replace(/^(memorize|summarize|summary of|explain|study|how to memorize|tell me about|what is|review|help me memorize)\s+/i, '').replace(/system/gi, '').trim();

    // 1. Direct title match or stripped match
    for (const note of notes) {
      const title = (note.title || '').toLowerCase();
      const id = (note.id || '').toLowerCase();
      if ((stripped && title.includes(stripped)) || (stripped && stripped.includes(title))) return note;
      if (q.includes(title)) return note;
      if (stripped && (id.includes(stripped) || stripped.includes(id))) return note;
    }

    // 2. Organelle / concept property match
    for (const note of notes) {
      if (Array.isArray(note.properties)) {
        for (const prop of note.properties) {
          const pName = (prop.name || '').toLowerCase();
          if (q.includes(pName) || (stripped && (pName.includes(stripped) || stripped.includes(pName)))) {
            return note;
          }
        }
      }
    }

    // 3. Keyword matching across topics
    const keywords = [
      { key: "plant", test: (n) => (n.title || '').toLowerCase().includes("plant") },
      { key: "animal", test: (n) => (n.title || '').toLowerCase().includes("animal") },
      { key: "multi", test: (n) => (n.title || '').toLowerCase().includes("multi") },
      { key: "uni", test: (n) => (n.title || '').toLowerCase().includes("uni") },
      { key: "cell", test: (n) => (n.title || '').toLowerCase().includes("cell") },
      { key: "matter", test: (n) => (n.title || '').toLowerCase().includes("matter") },
      { key: "ecosystem", test: (n) => (n.title || '').toLowerCase().includes("ecosystem") },
      { key: "respirat", test: (n) => (n.title || '').toLowerCase().includes("respirat") },
      { key: "circulat", test: (n) => (n.title || '').toLowerCase().includes("circulat") },
      { key: "digest", test: (n) => (n.title || '').toLowerCase().includes("digest") },
      { key: "nervous", test: (n) => (n.title || '').toLowerCase().includes("nervous") },
    ];

    for (const kw of keywords) {
      if (q.includes(kw.key)) {
        const found = notes.find(kw.test);
        if (found) return found;
      }
    }

    return null;
  }

  getCurriculumFallback(query) {
    const q = query.toLowerCase();
    const systems = {
      respiratory: {
        title: "RESPIRATORY SYSTEM",
        id: "science-respiratory",
        coreFormula: "Gas Exchange: O₂ (Inhale) -> Trachea -> Bronchi -> Alveoli (Blood Diffusion) -> CO₂ (Exhale)",
        description: "How lungs bring oxygen into the blood and remove carbon dioxide.",
        properties: [
          {
            num: 1,
            name: "Nose & Trachea (Windpipe)",
            formula: "Filtration & Main Airway",
            explanation: "Cilia hairs and mucus filter pathogens and dust, while C-shaped cartilage rings keep the airway wide open.",
            trick: "Memory Trick: The hollow highway channeling filtered air straight to the chest!"
          },
          {
            num: 2,
            name: "Bronchi & Bronchioles",
            formula: "Branching Air Tree",
            explanation: "Two primary bronchial tubes branch into left and right lungs, dividing into thousands of tiny bronchioles.",
            trick: "Memory Trick: Think of an upside-down tree with branching air twigs!"
          },
          {
            num: 3,
            name: "Alveoli (Air Sacs)",
            formula: "Microscopic Gas Diffusion",
            explanation: "Millions of grape-like microscopic air sacs wrapped in capillaries where O₂ enters red blood cells and CO₂ exits.",
            trick: "Memory Trick: Alveoli = Tiny Air Grapes where oxygen and CO₂ trade places!"
          },
          {
            num: 4,
            name: "Diaphragm Muscle",
            formula: "Breathing Engine (Pressure Pump)",
            explanation: "Dome-shaped muscle beneath lungs. Pulls down to draw air in; pushes up to force air out.",
            trick: "Memory Trick: Diaphragm down = Inhale; Diaphragm up = Exhale!"
          }
        ],
        takeaways: [
          "Inhale = Delivers Oxygen (O₂) for mitochondria to make usable cell energy (ATP).",
          "Exhale = Removes Carbon Dioxide (CO₂) waste produced during cellular respiration.",
          "Capillaries wrap directly around alveoli to exchange gases via rapid diffusion."
        ]
      },
      circulatory: {
        title: "CIRCULATORY SYSTEM",
        id: "science-circulatory",
        coreFormula: "Internal Transport: Heart Pump -> Arteries (Away) -> Capillaries (Trade) -> Veins (Return)",
        description: "How the heart and blood vessels carry oxygen and nutrients around the body.",
        properties: [
          {
            num: 1,
            name: "Heart (Cardiac Pump)",
            formula: "4-Chambered Muscular Engine",
            explanation: "Pumps blood through pulmonary and systemic circuits without stopping.",
            trick: "Memory Trick: 2 Atriums at the top receive blood, 2 Ventricles at the bottom pump it out!"
          },
          {
            num: 2,
            name: "Arteries",
            formula: "High-Pressure Blood Vessels",
            explanation: "Carry freshly oxygenated blood AWAY from the heart into bodily tissues.",
            trick: "Memory Trick: Arteries = AWAY from the heart!"
          },
          {
            num: 3,
            name: "Capillaries",
            formula: "Microscopic Diffusion Beds",
            explanation: "Ultra-thin single-cell vessels where nutrients and gases diffuse into tissues.",
            trick: "Memory Trick: Capillaries = Connectors & trading posts!"
          },
          {
            num: 4,
            name: "Veins",
            formula: "Low-Pressure One-Way Valved Vessels",
            explanation: "Return deoxygenated blood back into the heart, using one-way valves.",
            trick: "Memory Trick: Veins = Visiting back into the heart!"
          }
        ],
        takeaways: [
          "Arteries travel Away; Veins visit back In.",
          "Capillaries are so narrow red blood cells travel single file.",
          "Delivers oxygen and glucose to every living cell."
        ]
      },
      digestive: {
        title: "DIGESTIVE SYSTEM",
        id: "science-digestive",
        coreFormula: "Nutrient Extraction: Mechanical Chewing + Chemical Enzymes -> Absorption (Villi) -> Elimination",
        description: "How the stomach and intestines break down food into nutrients.",
        properties: [
          {
            num: 1,
            name: "Mouth & Esophagus",
            formula: "Mastication & Peristalsis",
            explanation: "Teeth physically crush food, salivary enzymes digest starch, and peristalsis squeezes food downward.",
            trick: "Memory Trick: Peristalsis is the muscular wave pushing food down!"
          },
          {
            num: 2,
            name: "Stomach",
            formula: "Acid & Churning Tank",
            explanation: "Hydrochloric acid and enzymes liquefy food into nutrient chyme while destroying pathogens.",
            trick: "Memory Trick: The acid blender tank liquefying food!"
          },
          {
            num: 3,
            name: "Small Intestine & Villi",
            formula: "90% Nutrient Absorption Hub",
            explanation: "Millions of finger-like villi absorb glucose, amino acids, and fats directly into the blood.",
            trick: "Memory Trick: Small Intestine has HUGE surface area for absorption!"
          },
          {
            num: 4,
            name: "Large Intestine",
            formula: "Water Reclamation & Waste Compaction",
            explanation: "Reabsorbs water and compacts indigestible matter for excretion.",
            trick: "Memory Trick: The water recycling plant of the body!"
          }
        ],
        takeaways: [
          "Digestion is both Mechanical (physical breakdown) and Chemical (enzymes and acid).",
          "Most nutrients enter the bloodstream in the Small Intestine.",
          "Supplies fuel for mitochondria to perform cellular respiration."
        ]
      },
      nervous: {
        title: "NERVOUS SYSTEM",
        id: "science-nervous",
        coreFormula: "Signal Flow: Sensory Receptor -> Central Processor (Brain/Spinal Cord) -> Motor Output",
        description: "How the brain, spinal cord, and nerves carry signals and control reflexes.",
        properties: [
          {
            num: 1,
            name: "Brain (Central Command)",
            formula: "Cerebrum, Cerebellum, Brainstem",
            explanation: "Directs voluntary movement, processes sensory input, and controls vital functions like heartbeat.",
            trick: "Memory Trick: The control center running your body!"
          },
          {
            num: 2,
            name: "Spinal Cord",
            formula: "Information Superhighway",
            explanation: "Connects the brain to peripheral nerves and mediates rapid life-saving reflex arcs.",
            trick: "Memory Trick: The fiber-optic trunk line running down your back!"
          },
          {
            num: 3,
            name: "Neurons (Nerve Cells)",
            formula: "Dendrites -> Axon -> Synapse",
            explanation: "Specialized cells transmitting electrical impulses at over 200 mph.",
            trick: "Memory Trick: High-speed electrical messengers firing signals!"
          }
        ],
        takeaways: [
          "Central Nervous System (CNS) = Brain + Spinal Cord.",
          "Peripheral Nervous System (PNS) = Branching nerves to organs and limbs.",
          "Reflex arcs trigger movement before signals reach the conscious brain to prevent injury!"
        ]
      }
    };

    if (q.includes("respirat") || q.includes("lung") || q.includes("breath")) return systems.respiratory;
    if (q.includes("circulat") || q.includes("heart") || q.includes("blood") || q.includes("cardio")) return systems.circulatory;
    if (q.includes("digest") || q.includes("stomach") || q.includes("intestine")) return systems.digestive;
    if (q.includes("nervous") || q.includes("brain") || q.includes("neuron") || q.includes("nerve")) return systems.nervous;
    return null;
  }

  buildMemorizationHTML(note) {
    const title = (note.title || 'SKIENCE TOPIC').toUpperCase();
    const formula = note.coreFormula || note.badge || 'Core Scientific Principle';
    const desc = note.description || '';
    const props = Array.isArray(note.properties) ? note.properties : [];
    
    const renderedProps = props.map((p, idx) => {
      const num = p.num || (idx + 1);
      const name = p.name || `Concept ${num}`;
      const formulaSub = p.formula ? `<span class="chat-memo-chip">${this.escapeHTML(p.formula)}</span>` : '';
      const exp = p.explanation || '';
      let trick = p.trick || '';
      if (!trick) {
        trick = `Associate ${name} with its primary role: ${exp.slice(0, 50)}...`;
      }
      return `
        <div class="chat-memo-item">
          <div class="chat-memo-item-header">
            <span class="chat-memo-num">#${num}</span>
            <strong class="chat-memo-item-name">${this.escapeHTML(name)}</strong>
            ${formulaSub}
          </div>
          <div class="chat-memo-item-desc">${this.escapeHTML(exp)}</div>
          <div class="chat-memo-item-trick">${UI_SVG.bulb} <strong>Memory Key:</strong> ${this.escapeHTML(trick)}</div>
        </div>
      `;
    }).join('');

    const takeawayBullets = (Array.isArray(note.takeaways) && note.takeaways.length > 0)
      ? note.takeaways.map(t => `<li>${this.escapeHTML(t)}</li>`).join('')
      : props.slice(0, 4).map(p => `<li><strong>${this.escapeHTML(p.name)}:</strong> ${this.escapeHTML((p.explanation || '').slice(0, 75))}...</li>`).join('');

    const jumpId = note.id || '';

    return `
      <div class="chat-memo-dossier">
        <div class="chat-memo-badge">STUDENT STUDY DOSSIER</div>
        <div class="chat-memo-title">${this.escapeHTML(title)}</div>
        <div class="chat-memo-formula"><strong>Core Principle:</strong> ${this.escapeHTML(formula)}</div>
        ${desc ? `<div class="chat-memo-intro">${this.escapeHTML(desc)}</div>` : ''}
        
        <div class="chat-memo-section-hd">CONCEPT SQUARES &amp; MEMORY KEYS</div>
        <div class="chat-memo-list">
          ${renderedProps}
        </div>

        <div class="chat-memo-recall-box">
          <div class="chat-memo-recall-hd">Key Concept Checkpoints:</div>
          <ul class="chat-memo-checklist">
            ${takeawayBullets}
          </ul>
        </div>

        <div class="chat-memo-btn-row">
          <button type="button" class="chat-memo-jump-btn" data-note-id="${this.escapeHTML(jumpId)}">
            Open in 3D Card Carousel
          </button>
        </div>
      </div>
    `;
  }

  handleSend() {
    const text = this.input.value.trim();
    if (!text || this.isResponding) return;

    this.isResponding = true;
    this.appendMessage(text, "user-msg");
    this.input.value = "";
    sounds.playClick();

    // Lookup Searching Indicator
    const statusText = document.getElementById("study-lookup-status");
    if (statusText) statusText.textContent = "Searching notes...";

    const thinkingHTML = `
      <div class="lookup-thinking-container"><div class="lookup-thinking-dot"></div><div class="lookup-thinking-text">Searching notes...</div></div>
    `;
    const thinkingNode = this.appendRawHTML(thinkingHTML, "lookup-msg");

    setTimeout(() => {
      if (thinkingNode && thinkingNode.parentNode) {
        thinkingNode.remove();
      }

      if (statusText) statusText.textContent = "Grade 5 Notes Index • Ready";

      const rawText = text.trim();
      const t = rawText.toLowerCase();
      const normText = t.replace(/\s+/g, " ");
      let replyHTML = "";

      // 0. EXCLUSIVE PORTAL TO ADMIN VAULT (SECRET PASSPHRASE / 8-DIGIT PASSCODE)
      if (normText.includes("j33v4 r4gh4v4n is the best") || normText.includes("jeeva raghavan is the best") || normText.includes("6151983") || normText.includes("11182015")) {
        replyHTML = `
          <div class="msg-bubble lookup-bubble" style="border: 1px solid rgba(56, 189, 248, 0.5); background: rgba(15, 23, 42, 0.75);">
            <strong style="color: #38bdf8; font-size: 1.05rem;">Admin Security Vault Portal</strong><br>
            <div style="font-size: 0.82rem; font-family: monospace; color: #a5f3fc; margin: 6px 0 8px; line-height: 1.4;">
              SECURITY CLEARANCE: Secret Passphrase Accepted<br>
              DESTINATION: Admin Security Vault Keypad
            </div>
            Transferring to Admin Security Vault keypad. Enter your 7-digit passcode to unlock...
          </div>
        `;
        this.appendRawHTML(replyHTML, "lookup-msg");
        sounds.playVaultRedirect();
        this.isResponding = false;

        setTimeout(() => {
          if (this.isOpen) {
            this.toggle();
          }
          if (window.app && window.app.vault) {
            window.app.vault.isUnlocked = false;
            window.app.vault.open();
            showToast("Opening Admin Vault");
          }
        }, 750);
        return;
      }
      // Vault access guard - informs about 8-digit passcode
      else if (t.includes("admin vault") || t.includes("vault password") || t.includes("open vault") || (t.includes("vault") && !t.includes("carousel"))) {
        replyHTML = `
          <div class="msg-bubble lookup-bubble">
            <strong style="color: #38bdf8;">Admin Security Vault Access</strong><br>
            The Admin Vault is protected by a classified 7-digit security passcode.<br>
            Enter your passcode on the vault keypad to access Web Administration &amp; Note Architect!
          </div>
        `;
      }

      // 1. Website Navigation / How to use website
      if (t.includes("how do i use") || t.includes("how to use") || t.includes("guide") || t.includes("help") || t.includes("features") || t.includes("what is this site") || t.includes("overview")) {
        replyHTML = `
          <div class="msg-bubble lookup-bubble">
            <strong>skience.io Navigation Guide:</strong><br>
            Welcome to the ultimate 5th-grade science study hub! Here is how to navigate:
            <ul style="margin: 6px 0 8px 16px; padding: 0; font-size: 0.85rem; line-height: 1.5;">
              <li><strong>3D Carousel:</strong> Scroll or drag cards in coverflow 3D to explore all 19 science topics.</li>
              <li><strong>Study Notes & Quiz:</strong> Tap any card to open the structured notes viewer with flash memorization tricks and quizzes.</li>
              <li><strong>Formula Calculator:</strong> Solve density, speed, force, and kinetic energy formulas instantly.</li>
              <li><strong>Background Music:</strong> Focus while studying with curated lo-fi audio tracks.</li>
            </ul>
            <div class="chat-action-card">
              <span class="chat-action-card-header">Jump To Feature</span>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button type="button" class="chat-action-btn" data-action="scroll" data-target-id="notes-section">Notes Carousel</button>
                <button type="button" class="chat-action-btn" data-action="scroll" data-target-id="calculator-section">Calculator</button>
                <button type="button" class="chat-action-btn" data-action="print-all">Print Notes</button>
              </div>
            </div>
          </div>
        `;
      }
      // 2. Study Music / Background Audio
      else if (t.includes("music") || t.includes("song") || t.includes("audio") || t.includes("sound") || t.includes("lo-fi") || t.includes("player")) {
        replyHTML = `
          <div class="msg-bubble lookup-bubble">
            <strong>Study Music Studio:</strong><br>
            Background music helps you lock into a study flow-state!
            <ul style="margin: 6px 0 8px 16px; padding: 0; font-size: 0.85rem; line-height: 1.5;">
              <li>Click the <strong>equalizer toast</strong> at the top right of the page to play, pause, or switch audio tracks.</li>
              <li>Supports tracks like <em>Am I Wrong</em> with responsive equalizer animation.</li>
            </ul>
            <div class="chat-action-card">
              <button type="button" class="chat-action-btn" data-action="toggle-music">Toggle Music Play/Pause</button>
            </div>
          </div>
        `;
      }
      // 3. Calculator / Scientific Formulas
      else if (t.includes("calc") || t.includes("formula") || t.includes("density") || t.includes("speed") || t.includes("kinetic") || t.includes("math")) {
        replyHTML = `
          <div class="msg-bubble lookup-bubble">
            <strong>Science Calculator:</strong><br>
            Built right into the page below the notes section!
            <ul style="margin: 6px 0 8px 16px; padding: 0; font-size: 0.85rem; line-height: 1.5;">
              <li><strong>Density:</strong> D = M / V (Mass / Volume)</li>
              <li><strong>Speed:</strong> S = d / t (Distance / Time)</li>
              <li><strong>Force:</strong> F = m * a (Mass x Acceleration)</li>
              <li><strong>Kinetic Energy:</strong> KE = 0.5 * m * v²</li>
            </ul>
            <div class="chat-action-card">
              <button type="button" class="chat-action-btn" data-action="scroll" data-target-id="calculator-section">Launch Calculator</button>
            </div>
          </div>
        `;
      }
      // 4. Print / Cheat Sheet / PDF
      else if (t.includes("print") || t.includes("cheat sheet") || t.includes("pdf") || t.includes("review sheet") || t.includes("download")) {
        replyHTML = `
          <div class="msg-bubble lookup-bubble">
            <strong>Ultimate Science Review Sheet:</strong><br>
            You can print a clean, comprehensive study guide containing all 5th-grade notes, formulas, and diagrams with a single click.
            <div class="chat-action-card">
              <button type="button" class="chat-action-btn" data-action="print-all">Print All Science Notes</button>
            </div>
          </div>
        `;
      }
      // 5. Quiz / Test / Interactive Challenge
      else if (t.includes("quiz") || t.includes("test me") || t.includes("challenge") || t.includes("question")) {
        replyHTML = `
          <div class="msg-bubble lookup-bubble">
            <div class="chat-quiz-box" style="margin-top: 4px;">
              <span style="font-size: 0.72rem; font-family: monospace; color: #a855f7; font-weight: 700;">MINI POP QUIZ: PLANT CELL BIOLOGY</span>
              <p style="font-size: 0.88rem; font-weight: 600; margin: 6px 0 10px;">Which organelle is known as the "solar power plant" of plant cells, converting sunlight into sugars?</p>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <button type="button" class="quiz-choice-btn lookup-chip" style="justify-content: flex-start; padding: 8px 12px; font-size: 0.8rem;" data-correct="false" data-explanation="Mitochondria are the powerhouses of cellular respiration, not solar photosynthesis!">A) Mitochondria</button>
                <button type="button" class="quiz-choice-btn lookup-chip" style="justify-content: flex-start; padding: 8px 12px; font-size: 0.8rem;" data-correct="true" data-explanation="Chloroplasts contain chlorophyll pigment to absorb sunlight and conduct photosynthesis!">B) Chloroplast</button>
                <button type="button" class="quiz-choice-btn lookup-chip" style="justify-content: flex-start; padding: 8px 12px; font-size: 0.8rem;" data-correct="false" data-explanation="The nucleus stores the genetic DNA blueprints of the cell!">C) Nucleus</button>
              </div>
              <div class="quiz-feedback-box hidden" style="margin-top: 10px; padding: 8px 10px; border-radius: 8px; background: rgba(0,0,0,0.4); font-size: 0.8rem; line-height: 1.4;"></div>
            </div>
          </div>
        `;
      }
      // 6. Cloud Sync / Saving / Multi-device
      else if (t.includes("save") || t.includes("publish") || t.includes("cloud") || t.includes("firestore") || t.includes("phone")) {
        replyHTML = `
          <div class="msg-bubble lookup-bubble">
            <strong>Real-Time Cloud Notes Sync:</strong><br>
            skience.io is powered by a live <strong>Firebase Firestore</strong> database:
            <ul style="margin: 6px 0 8px 16px; padding: 0; font-size: 0.85rem; line-height: 1.5;">
              <li>When notes are published, they upload to the cloud in real-time.</li>
              <li>When you open skience.io on your iPhone, iPad, or another computer, your notes sync automatically!</li>
            </ul>
          </div>
        `;
      }
      // 7. Creator / Developer
      else if (t.includes("who created") || t.includes("developer") || t.includes("creator") || t.includes("who made") || t.includes("jeeva") || t.includes("project")) {
        replyHTML = `
          <div class="msg-bubble lookup-bubble">
            <strong style="color: #38bdf8;">Jeeva Raghavan • Lead Creator</strong><br>
            Jeeva built <strong>skience.io</strong> for 5th-grade science notes and class review. Click "made with love by Jeeva R." in the footer or visit <a href="https://haunt.gg/reallyjgr" target="_blank" style="color: #38bdf8; text-decoration: underline;">haunt.gg/reallyjgr</a>!
            <div class="chat-action-card">
              <a href="https://haunt.gg/reallyjgr" target="_blank" class="chat-action-btn">Visit haunt.gg/reallyjgr</a>
            </div>
          </div>
        `;
      }
      // 8. Scientific Method
      else if (t.includes("scientific method") || t.includes("skientific method") || t.includes("hypothesis") || t.includes("experiment") || t.includes("variable")) {
        replyHTML = `
          <div class="msg-bubble lookup-bubble">
            <strong>The 5 Steps of the Scientific Method:</strong>
            <ol style="margin: 6px 0 8px 16px; padding: 0; font-size: 0.85rem; line-height: 1.5;">
              <li><strong>Question:</strong> Identify the phenomenon you want to investigate.</li>
              <li><strong>Hypothesis:</strong> Form an "If... then... because" testable prediction.</li>
              <li><strong>Experiment:</strong> Test with independent, dependent, and controlled variables.</li>
              <li><strong>Data Collection:</strong> Record precise qualitative & quantitative observations.</li>
              <li><strong>Conclusion:</strong> Determine if your hypothesis was supported or rejected.</li>
            </ol>
            <div class="chat-action-card">
              <button type="button" class="chat-action-btn" data-action="scroll" data-target-id="notes-section">View Scientific Method Notes</button>
            </div>
          </div>
        `;
      }
      // 9. Science Concept & Curriculum Note Matching
      else {
        const matchedNote = this.findNoteMatch(text);
        if (matchedNote) {
          replyHTML = this.buildMemorizationHTML(matchedNote);
        } else if (this.getCurriculumFallback && this.getCurriculumFallback(text)) {
          replyHTML = this.buildMemorizationHTML(this.getCurriculumFallback(text));
        } else if (t.includes("photosynth")) {
          replyHTML = `
            <div class="msg-bubble lookup-bubble">
              <strong style="color: #38bdf8; font-size: 1rem;">Photosynthesis Explained</strong><br>
              <div style="font-size: 0.8rem; font-family: monospace; background: rgba(0,0,0,0.3); padding: 6px 10px; border-radius: 6px; margin: 8px 0; color: #a5f3fc;">
                Formula: Sunlight + Water (H₂O) + Carbon Dioxide (CO₂) &rarr; Glucose (Sugar) + Oxygen (O₂)
              </div>
              Plants absorb sunlight through <strong>chlorophyll</strong> inside chloroplasts to create food energy for growth while releasing oxygen into the atmosphere!
              <div class="chat-action-card">
                <button type="button" class="chat-action-btn" data-action="scroll" data-target-id="notes-section">Explore Cells in Carousel</button>
              </div>
            </div>
          `;
        } else {
          replyHTML = `
            <div class="msg-bubble lookup-bubble">
              <strong>Science Notes Lookup:</strong><br>Try searching a science topic or clicking a shortcut below:
              <ul style="margin: 6px 0 8px 16px; padding: 0; font-size: 0.85rem; line-height: 1.5;">
                <li><em>"How do I use this website?"</em></li>
                <li><em>"Explain Photosynthesis or Plant Cells"</em></li>
                <li><em>"How does the Calculator work?"</em></li>
                <li><em>"How do I toggle background music?"</em></li>
                <li><em>"Quiz me on science topics"</em></li>
              </ul>
              <div class="chat-action-card">
                <span class="chat-action-card-header">Popular Quick Jumps</span>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button type="button" class="chat-action-btn" data-action="scroll" data-target-id="notes-section">Notes Carousel</button>
                  <button type="button" class="chat-action-btn" data-action="scroll" data-target-id="calculator-section">Calculator</button>
                </div>
              </div>
            </div>
          `;
        }
      }

      this.appendRawHTML(replyHTML, "lookup-msg");
      sounds.playSuccess();
      this.isResponding = false;
    }, 900);
  }

  appendRawHTML(html, className) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-msg ${className}`;
    msgDiv.innerHTML = html;
    this.messagesContainer.appendChild(msgDiv);
    setTimeout(() => {
      this.messagesContainer.scrollTo({ top: this.messagesContainer.scrollHeight, behavior: 'smooth' });
    }, 10);
  }

  appendMessage(text, className) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-msg ${className}`;
    msgDiv.innerHTML = `<div class="msg-bubble">${text}</div>`;
    this.messagesContainer.appendChild(msgDiv);
    setTimeout(() => {
      this.messagesContainer.scrollTo({ top: this.messagesContainer.scrollHeight, behavior: 'smooth' });
    }, 10);
  }
}

// Mouse spotlight disabled to eliminate continuous GPU invalidation of glass cards

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  window.app = new ScienceIoApp();
  window.scienceApp = window.app;
  window.studyLookup = new StudyLookupPanel();
  window.chatbot = window.studyLookup;
  window.bgMusic = bgMusic;
  bgMusic.init(window.app);

  // Science Keyboard
  const mk = document.createElement("div");
  mk.id = "science-keyboard";
  mk.className = "hidden";
  mk.innerHTML = `
    <button class="mk-btn mk-bullet-btn" style="color: #64d2ff; font-weight: 800; border-color: rgba(0,212,255,0.4);" title="Insert Bullet Point">• Bullet</button>
    <button class="mk-btn">H₂O</button>
    <button class="mk-btn">CO₂</button>
    <button class="mk-btn">O₂</button>
    <button class="mk-btn">°C</button>
    <button class="mk-btn">${UI_SVG.atom}</button>
    <button class="mk-btn">Δ</button>
    <button class="mk-btn">μ</button>
    <button class="mk-btn">²</button>
    <button class="mk-btn">³</button>
  `;
  document.body.appendChild(mk);

  let activeInput = null;
  document.addEventListener("focusin", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      activeInput = e.target;
      mk.classList.remove("hidden");
    }
  });
  document.addEventListener("focusout", () => {
    setTimeout(() => {
      if (!document.activeElement.classList.contains("mk-btn")) {
        mk.classList.add("hidden");
      }
    }, 150);
  });

  mk.querySelectorAll(".mk-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (activeInput) {
        if (btn.classList.contains("mk-bullet-btn")) {
          insertBulletAtCursor(activeInput);
        } else {
          insertTextAtCursor(activeInput, btn.textContent);
        }
        activeInput.focus();
        sounds.playClick();
      }
    });
  });
});


// Universal Keyboard Nav Shortcuts: Cmd+1 / Ctrl+1 (Syllabus), Cmd+2 / Ctrl+2 (Field Notes), Cmd+3 / Ctrl+3 (Lab Engine)
window.addEventListener("keydown", (e) => {
  if (e.metaKey || e.ctrlKey) {
    if (e.key === "1") {
      e.preventDefault();
      document.getElementById("nav-btn-home")?.click();
    } else if (e.key === "2") {
      e.preventDefault();
      document.getElementById("nav-btn-notes")?.click();
    } else if (e.key === "3") {
      e.preventDefault();
      document.getElementById("nav-btn-calc")?.click();
    }
  }
});
