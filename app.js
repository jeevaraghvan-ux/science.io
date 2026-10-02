/**
 * science.io — 5th Grade Science Notes Application
 * Made with love from Jeeva R.
 * 
 * Features:
 * - 3D Coverflow Carousel & Glassmorphism Table View
 * - Physical Science, Life Science, Earth & Space, and Scientific Method
 * - Interactive Science Visualizers (Matter Phase Simulator, Photosynthesis Factory, Variables Lab)
 * - Cross-Device Cloud Database Sync (Zero Credit Drain, 100% Free Forever)
 * - 1-Click "PUBLISH ALL NOTES" across all phones, tablets, and computers
 * - Animated Cyberpunk/Neon High-Tech Science Loading Screen with Replay
 * - Web Audio API synthesized ASMR sound effects
 * - Confetti celebration particle engine
 * - Interactive science.io AI Assistant
 */

// ================= CLOUD SYNC CONFIGURATION =================
// 100% Free Forever • Zero Credit Drain • Cross-Device Live Sync
const CLOUD_SYNC_URL = "https://scienceio-best.vercel.app/api/sync";
const DEFAULT_SUPABASE_URL = "https://nidkkbsmptiyixvealum.supabase.co";
const DEFAULT_SUPABASE_KEY = "sb_publishable_VIbgYVwvFU2bcPJNLWg4Qg_Be4paQ_6";

// ================= INITIAL SCIENCE NOTES DATABASE =================

// Pre-populated with the user's Plant Cell unit (10 Concept Squares from worksheet)
const DEFAULT_SCIENCE_TOPICS = [
  {
    "id": "science-plant-cell",
    "title": "PLANT CELL",
    "category": "life",
    "color": "emerald",
    "grade": "5th Grade",
    "badge": "10 Concept Squares • Plant Biology",
    "coreFormula": "Cells are the basic building blocks of all living things!",
    "description": "A complete breakdown of plant cell anatomy, specialized organelles (Cell Wall, Chloroplast, Central Vacuole), and cellular machinery.",
    "isCustom": false,
    "properties": [
      {
        "num": 1,
        "name": "Cell Membrane",
        "formula": "Semi-Permeable Boundary Layer",
        "explanation": "Thin layer that surrounds the cell. It provides structure and protection and it is semi-permeable.",
        "example": "Controls what materials enter and exit the plant cell, keeping harmful substances out.",
        "trick": "Memory Trick: The security gatekeeper of the cell!"
      },
      {
        "num": 2,
        "name": "Cytoplasm",
        "formula": "Gel-Like Organelle Suspension",
        "explanation": "The fluid in which organelles are suspended. It maintains the pressure inside of the cell.",
        "example": "Jelly-like fluid providing turgor pressure so the plant cell does not collapse.",
        "trick": "Memory Trick: Cyto = Cell, Plasm = Fluid matrix!"
      },
      {
        "num": 3,
        "name": "Mitochondria",
        "formula": "Cellular Respiration: Glucose + O₂ → ATP Energy",
        "explanation": "Nicknamed the powerhouse of the cell because they provide energy for the cell. The site of cellular respiration.",
        "example": "Converts chemical energy from sugars into ATP fuel for cellular work.",
        "trick": "Memory Trick: Mighty Mitochondria = Powerhouse!"
      },
      {
        "num": 4,
        "name": "Endoplasmic Reticulum",
        "formula": "Smooth ER: Lipid Synthesis & Transport",
        "explanation": "Smooth endoplasmic reticulum makes lipids (fats), modifies proteins and transports them throughout the cell.",
        "example": "Produces essential cellular fats and delivers them through internal membrane tubules.",
        "trick": "Memory Trick: Smooth ER makes smooth lipids and highways!"
      },
      {
        "num": 5,
        "name": "Golgi Body",
        "formula": "Cellular Packaging & Shipping Center",
        "explanation": "Packages proteins and carbohydrates into vesicles for transport outside of the cell.",
        "example": "Acts like the cell's post office, tagging packages to be delivered outside.",
        "trick": "Memory Trick: Golgi = 'Go' deliver the packages!"
      },
      {
        "num": 6,
        "name": "Nucleus & Nucleolus",
        "formula": "Command Center • Genetic DNA Storage",
        "explanation": "The control center of the cell that directs functions and contains DNA. The nucleolus aids in the production of ribosomes.",
        "example": "Contains hereditary chromosomes instructing the cell how to grow, divide, and function.",
        "trick": "Memory Trick: Nucleus = Brain / Boss of the cell!"
      },
      {
        "num": 7,
        "name": "Rough ER & Ribosomes",
        "formula": "Protein Synthesis Factory",
        "explanation": "Rough endoplasmic reticulum has ribosomes bound to its membranes. Ribosomes are the site of protein synthesis.",
        "example": "Reads genetic messenger codes to assemble amino acids into strong proteins.",
        "trick": "Memory Trick: Ribosomes make Ribs (Proteins)!"
      },
      {
        "num": 8,
        "name": "Cell Wall",
        "formula": "Rigid Cellulose Outer Shield (Plant Only)",
        "explanation": "Found only in plant cells, cell walls provide extra structure and protection for the cell's internal structures.",
        "example": "Rigid exterior wall that lets tall plants and trees stand upright against gravity.",
        "trick": "Memory Trick: Like a fortress wall outside a castle!"
      },
      {
        "num": 9,
        "name": "Central Vacuole",
        "formula": "Water & Nutrient Storage Sac",
        "explanation": "Vacuoles provide storage for materials such as water. A plant cell's vacuole is larger than in an animal cell.",
        "example": "When full of water, it exerts turgor pressure keeping plant stems crisp and upright.",
        "trick": "Memory Trick: Vacuole is like a giant water reservoir!"
      },
      {
        "num": 10,
        "name": "Chloroplast",
        "formula": "Photosynthesis: 6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ + 6O₂",
        "explanation": "Convert light energy from the sun into sugars that can be used for energy in a process called photosynthesis.",
        "example": "Contains green chlorophyll pigments capturing solar photons to make plant food.",
        "trick": "Memory Trick: Solar panels of the plant world!"
      }
    ],
    "quiz": [
      {
        "q": "According to the teacher notes, which organelle is a thin, semi-permeable layer that surrounds the cell, providing structure and protection?",
        "options": [
          "Cell Membrane",
          "Cell Wall",
          "Cytoplasm",
          "Endoplasmic Reticulum"
        ],
        "ans": 0,
        "why": "Teacher note: 'Thin layer that surrounds the cell. It provides structure and protection and it is semi-permeable.'"
      },
      {
        "q": "In the worksheet explanation, what is the fluid in which organelles are suspended that maintains pressure inside the cell?",
        "options": [
          "Cytoplasm",
          "Central Vacuole",
          "Nucleoplasm",
          "Mitochondria"
        ],
        "ans": 0,
        "why": "Teacher note: 'The fluid in which organelles are suspended. It maintains the pressure inside of the cell.'"
      },
      {
        "q": "Why are Mitochondria nicknamed the 'powerhouse of the cell' in the teacher notes?",
        "options": [
          "Because they provide energy for the cell and are the site of cellular respiration",
          "Because they store water and minerals",
          "Because they package proteins into vesicles",
          "Because they make the cell look green"
        ],
        "ans": 0,
        "why": "Teacher note: 'Nicknamed the powerhouse of the cell because they provide energy for the cell. The site of cellular respiration.'"
      },
      {
        "q": "What does the Smooth Endoplasmic Reticulum do according to the teacher explanation?",
        "options": [
          "Makes lipids (fats), modifies proteins and transports them throughout the cell",
          "Performs photosynthesis using light photons",
          "Synthesizes DNA in the control center",
          "Builds the rigid outer cell wall"
        ],
        "ans": 0,
        "why": "Teacher note: 'Smooth endoplasmic reticulum makes lipids (fats), modifies proteins and transports them throughout the cell.'"
      },
      {
        "q": "According to the notes, what is the exact function of the Golgi Body?",
        "options": [
          "Packages proteins and carbohydrates into vesicles for transport outside of the cell",
          "Directs cell division and stores chromosomes",
          "Stores water to keep plant stems upright",
          "Absorbs solar energy to make glucose"
        ],
        "ans": 0,
        "why": "Teacher note: 'Packages proteins and carbohydrates into vesicles for transport outside of the cell.'"
      },
      {
        "q": "What is described as the control center of the cell that directs functions, contains DNA, and has a nucleolus that aids in making ribosomes?",
        "options": [
          "Nucleus & Nucleolus",
          "Central Vacuole",
          "Golgi Body",
          "Rough ER"
        ],
        "ans": 0,
        "why": "Teacher note: 'The control center of the cell that directs functions and contains DNA. The nucleolus aids in the production of ribosomes.'"
      },
      {
        "q": "According to the teacher notes, what makes Rough ER 'rough' and what is its role?",
        "options": [
          "It has ribosomes bound to its membranes, which are the site of protein synthesis",
          "It has coarse cellulose crystals that protect the nucleus",
          "It has jagged edges to tear up waste materials",
          "It is rough from storing sharp mineral crystals"
        ],
        "ans": 0,
        "why": "Teacher note: 'Rough endoplasmic reticulum has ribosomes bound to its membranes. Ribosomes are the site of protein synthesis.'"
      },
      {
        "q": "Which protective structure is found ONLY in plant cells to provide extra structure and protection for internal structures?",
        "options": [
          "Cell Wall",
          "Cell Membrane",
          "Cytoplasm",
          "Mitochondria"
        ],
        "ans": 0,
        "why": "Teacher note: 'Found only in plant cells, cell walls provide extra structure and protection for the cell\\'s internal structures.'"
      },
      {
        "q": "In the teacher notes, how does a plant cell's vacuole compare to an animal cell's vacuole?",
        "options": [
          "A plant cell's vacuole is larger and provides storage for materials like water",
          "Plant cells do not have vacuoles at all",
          "Plant vacuoles only store air, while animal vacuoles store water",
          "They are identical in size and function"
        ],
        "ans": 0,
        "why": "Teacher note: 'Vacuoles provide storage for materials such as water. A plant cell\\'s vacuole is larger than in an animal cell.'"
      },
      {
        "q": "According to the worksheet notes, what do Chloroplasts convert and what process do they use?",
        "options": [
          "Convert light energy from the sun into sugars for energy in photosynthesis",
          "Convert water into oxygen gas through respiration",
          "Convert proteins into lipids through active transport",
          "Convert sound waves into chemical signals"
        ],
        "ans": 0,
        "why": "Teacher note: 'Convert light energy from the sun into sugars that can be used for energy in a process called photosynthesis.'"
      }
    ]
  },
  {
    "id": "animal-cell-01",
    "title": "ANIMAL CELL (BASIC UNIT OF LIFE)",
    "category": "biology",
    "color": "blue",
    "grade": "5th Grade",
    "coreFormula": "Cell = Basic Unit of Life",
    "description": "Learn about the Animal Cell Parts and Organelle Functions",
    "isCustom": true,
    "properties": [
      {
        "num": 1,
        "name": "Cell Membrane",
        "formula": "Semi-Permeable Boundary",
        "explanation": "Thin layer that surrounds the cell . It provides structure and protection and it is semi-permeable.",
        "example": "Classroom demonstration observed by 5th graders.",
        "trick": "Remember key scientific terms!"
      },
      {
        "num": 2,
        "name": "Cytoplasm",
        "formula": "Internal Fluid",
        "explanation": "The fluid in which organelles are suspended. It maintains the pressure inside of the cell.",
        "example": "Classroom demonstration observed by 5th graders.",
        "trick": "Remember key scientific terms!"
      },
      {
        "num": 3,
        "name": "Mitochondria",
        "formula": "Powerhouse of the Cell",
        "explanation": "Nicknamed the powerhouse of the cell because they provide the energy for the cell. The site of cellular respiration.",
        "example": "Classroom demonstration observed by 5th graders.",
        "trick": "Remember key scientific terms!"
      },
      {
        "num": 4,
        "name": "Endoplasmic Reticulum",
        "formula": "Transport System",
        "explanation": "Smooth endoplasmic reticulum makes lipids (fats), modifies protein and transports them throughout the cell.",
        "example": "Classroom demonstration observed by 5th graders.",
        "trick": "Remember key scientific terms!"
      },
      {
        "num": 5,
        "name": "Golgi Body",
        "formula": "Packaging Center",
        "explanation": "Packages proteins and carbohydrates into vesicles for transport outside of the cell.",
        "example": "Classroom demonstration observed by 5th graders.",
        "trick": "Remember key scientific terms!"
      },
      {
        "num": 6,
        "name": "Nucleus & Nucleolus",
        "formula": "Control Center & DNA",
        "explanation": "Control center of the cell that directs functions and contains DNA. The nucleolus aids in the production of ribosomes.",
        "example": "Classroom demonstration observed by 5th graders.",
        "trick": "Remember key scientific terms!"
      },
      {
        "num": 7,
        "name": "Rough ER & Ribosomes",
        "formula": "Protein Synthesis",
        "explanation": "Rough Endoplasmic Reticulum has ribosomes bound to its membranes. Ribosomes are the site of protein synthesis.",
        "example": "Classroom demonstration observed by 5th graders.",
        "trick": "Remember key scientific terms!"
      }
    ],
    "quiz": [
      {
        "q": "What is the core principle behind Animal Cell (basic unit of life)?",
        "options": [
          "Cell is the basic unit of life that carries out all living functions",
          "Cells are only found in non-living objects",
          "Cells do not need energy or oxygen",
          "Cells are destroyed whenever they divide"
        ],
        "ans": 0,
        "why": "A cell is the basic structural and functional unit of all living organisms!"
      },
      {
        "q": "Why is the Mitochondria nicknamed the powerhouse of the cell?",
        "options": [
          "Because they provide the energy for the cell (site of cellular respiration)",
          "Because they make lipids and fats",
          "Because they store water like a vacuole",
          "Because they contain DNA in the nucleus"
        ],
        "ans": 0,
        "why": "Mitochondria produce ATP energy for cellular functions!"
      }
    ],
    "badge": "7 Concept Squares • Animal Biology"
  },
  {
    "id": "multicellular-organisms-03",
    "title": "MULTICELLULAR ORGANISMS",
    "category": "biology",
    "color": "purple",
    "grade": "5th Grade",
    "coreFormula": "an organism made of two or more cells",
    "description": "Multicellular Organisms",
    "isCustom": true,
    "properties": [
      {
        "num": 1,
        "name": "Multicellular Organisms",
        "formula": "an organism made with two or more cells",
        "explanation": "• These organisms are able to be seen with the naked eye\n• These organisms need all parts of themselves to survive\n• Plants belong to the category of autotrophs, meaning self feeders\n• In the kingdom Animalia; Heterotrophic - other feeder, organisms that eat other organisms.",
        "example": "Classroom demonstration observed by 5th graders.",
        "trick": "Multi = many cells working together to survive!"
      }
    ],
    "quiz": [
      {
        "q": "What is a multicellular organism?",
        "options": [
          "an organism made of two or more cells",
          "an organism made of only 1 cell.",
          "an organism that moves only with pseudopodia",
          "an organism without any living cells"
        ],
        "ans": 0,
        "why": "Multicellular organisms are composed of two or more cells and need all parts to survive!"
      },
      {
        "q": "In multicellular plants, what does 'autotroph' mean?",
        "options": [
          "self feeders (plants that make their own food)",
          "Heterotrophic - other feeder, organisms that eat other organisms",
          "an organism made of only 1 cell.",
          "organisms that move by using a flagellum"
        ],
        "ans": 0,
        "why": "Plants belong to the category of autotrophs, meaning self feeders!"
      },
      {
        "q": "In the kingdom Animalia, what does 'heterotrophic' mean?",
        "options": [
          "Heterotrophic - other feeder, organisms that eat other organisms.",
          "Autotroph - self feeders",
          "an organism made of only 1 cell.",
          "organisms that move by cillia (hair like)"
        ],
        "ans": 0,
        "why": "In the kingdom Animalia, animals are heterotrophic and eat other organisms!"
      }
    ],
    "badge": "1 Concept Square • Complex Life"
  },
  {
    "id": "unicellular-organisms-04",
    "title": "UNICELLULAR ORGANISM",
    "category": "biology",
    "color": "amber",
    "grade": "5th Grade",
    "coreFormula": "an organism made of only 1 cell.",
    "description": "Examples of unicellular organisms: Amoeba (pseudopodia), Bacteria, Euglena (flagellum, and paramecium (cilla). Other types of unicellular organisms come from the kingdom Protista. Examples of protists include algae, Amoeba, Paramecium, volvox, amd Euglena. Algae are plantlike protists and they contain chlorophyll.",
    "isCustom": true,
    "properties": [
      {
        "num": 1,
        "name": "Euglena",
        "formula": "an organism made of only 1 cell.",
        "explanation": "Move by using  a flagellum (thread like structures that whip around).",
        "example": "Classroom demonstration observed by 5th graders.",
        "trick": "Flagellum whips like a propeller!"
      },
      {
        "num": 2,
        "name": "Volvox",
        "formula": "an organism made of only 1 cell.",
        "explanation": "They move by using a flagellum ( thread like structures that whip around).",
        "example": "Classroom demonstration observed by 5th graders.",
        "trick": "Volvox colonies roll with flagella!"
      },
      {
        "num": 3,
        "name": "Paramecium",
        "formula": "an organism made of only 1 cell.",
        "explanation": "A paramecium moves by cillia (hair like)",
        "example": "Classroom demonstration observed by 5th graders.",
        "trick": "Cilia paddle like tiny oars!"
      },
      {
        "num": 4,
        "name": "Amoeba",
        "formula": "an organism made of only 1 cell.",
        "explanation": "An amoeba moves by projecting out its cytoplasm. These projections are called pseudopodia (false feet).",
        "example": "Classroom demonstration observed by 5th graders.",
        "trick": "Pseudopodia means false feet!"
      }
    ],
    "quiz": [
      {
        "q": "What is a unicellular organism?",
        "options": [
          "an organism made of only 1 cell.",
          "an organism made of two or more cells",
          "an organism with millions of organs",
          "an organism that is visible to the naked eye"
        ],
        "ans": 0,
        "why": "A unicellular organism is made of only 1 cell!"
      },
      {
        "q": "How does a Euglena move?",
        "options": [
          "Move by using  a flagellum (thread like structures that whip around).",
          "A paramecium moves by cillia (hair like)",
          "An amoeba moves by projecting out its cytoplasm. These projections are called pseudopodia (false feet).",
          "It uses roots to anchor itself"
        ],
        "ans": 0,
        "why": "Euglena moves using a whip-like flagellum!"
      },
      {
        "q": "How does a Paramecium move?",
        "options": [
          "A paramecium moves by cillia (hair like)",
          "Move by using  a flagellum (thread like structures that whip around).",
          "An amoeba moves by projecting out its cytoplasm. These projections are called pseudopodia (false feet).",
          "It floats without any moving structures"
        ],
        "ans": 0,
        "why": "Paramecium moves using tiny hair-like cilia!"
      },
      {
        "q": "How does an Amoeba move?",
        "options": [
          "An amoeba moves by projecting out its cytoplasm. These projections are called pseudopodia (false feet).",
          "Move by using  a flagellum (thread like structures that whip around).",
          "A paramecium moves by cillia (hair like)",
          "It swims with fins"
        ],
        "ans": 0,
        "why": "Amoeba projects out its cytoplasm in false feet called pseudopodia!"
      },
      {
        "q": "How does a Volvox move?",
        "options": [
          "They move by using a flagellum ( thread like structures that whip around).",
          "A paramecium moves by cillia (hair like)",
          "An amoeba moves by projecting out its cytoplasm. These projections are called pseudopodia (false feet).",
          "It does not move at all"
        ],
        "ans": 0,
        "why": "Volvox cells move by beating their flagella!"
      }
    ],
    "badge": "4 Concept Squares • Microscopic Life"
  }
];

// Default Cloud Database Bucket ID (Hosted on permanent free REST backend)
const DEFAULT_CLOUD_DB_ID = "ff808181a09d98f701a0f483e327513e";

// ================= UNIVERSAL BULLET POINT FORMATTERS & HELPERS =================
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

// ================= SOUND FX SYSTEM (WEB AUDIO API) =================
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

  /* Heavy Vault Hydraulic Unlock Clunk & Chime */
  playVaultUnlock() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(95, now);
      osc1.frequency.exponentialRampToValueAtTime(32, now + 0.28);
      gain1.gain.setValueAtTime(0.25, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.28);

      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "sawtooth";
      osc2.frequency.setValueAtTime(360, now + 0.08);
      osc2.frequency.exponentialRampToValueAtTime(70, now + 0.42);
      gain2.gain.setValueAtTime(0.08, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.42);

      [587.33, 739.99, 880.0, 1174.66].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = f;
        gain.gain.setValueAtTime(0.05, now + 0.22 + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55 + idx * 0.06);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + 0.22 + idx * 0.06);
        osc.stop(now + 0.6 + idx * 0.06);
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
}

const sounds = new SoundController();

// ================= CONFETTI CELEBRATION ENGINE =================
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

// ================= ADMIN SECURITY VAULT CONTROLLER =================
class VaultController {
  constructor(app) {
    this.app = app;
    this.code = atob("NzQ1Mw==");
    this.currentPin = "";
    this.isUnlocked = false;
    this.openCreatorAfterUnlock = false;
    this.activeTab = "architect";
    this.architectSquares = [];
    this.editingNoteId = null;
  }

  init() {
    this.setupKeypad();
    this.setupVaultTriggers();
    this.setupAdminTabs();
    this.setupArchitectForm();
    this.setupAdminCommands();
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
        } else if (this.currentPin.length < 4) {
          this.currentPin += key;
        }

        this.updatePinDisplay();

        if (this.currentPin.length === 4) {
          this.verifyPin();
        }
      });
    });

    window.addEventListener("keydown", (e) => {
      const vaultModal = document.getElementById("vault-modal");
      if (!vaultModal || vaultModal.classList.contains("hidden")) return;
      if (this.isUnlocked) return;

      if (e.key >= "0" && e.key <= "9") {
        if (this.currentPin.length < 4) {
          sounds.playKeypadTap();
          this.currentPin += e.key;
          this.updatePinDisplay();
          if (this.currentPin.length === 4) {
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
        feedback.textContent = "ENTER 4-DIGIT CODE";
        feedback.className = "vault-pin-feedback";
      } else {
        feedback.textContent = `AUTHENTICATING [${this.currentPin.length}/4]`;
        feedback.className = "vault-pin-feedback checking";
      }
    }
  }

  verifyPin() {
    const safeDoor = document.getElementById("vault-safe-door");
    const feedback = document.getElementById("vault-pin-feedback");

    if (this.currentPin === this.code) {
      this.isUnlocked = true;
      if (feedback) {
        feedback.textContent = "ACCESS GRANTED • WELCOME JEEVA R.";
        feedback.className = "vault-pin-feedback granted";
      }

      if (safeDoor) safeDoor.classList.add("unlocking");
      sounds.playVaultUnlock();
      this.app.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 70);

      setTimeout(() => {
        document.getElementById("vault-lock-view")?.classList.add("hidden");
        document.getElementById("vault-admin-view")?.classList.remove("hidden");
        if (safeDoor) safeDoor.classList.remove("unlocking");

        this.currentPin = "";
        this.updatePinDisplay();
        this.updateManagerTable();
        this.updateTelemetry();

        this.switchTab("architect");
      }, 900);
    } else {
      if (safeDoor) safeDoor.classList.add("shake-error");
      if (feedback) {
        feedback.textContent = "ACCESS DENIED • INVALID PASSCODE";
        feedback.className = "vault-pin-feedback denied";
      }
      sounds.playVaultError();

      setTimeout(() => {
        if (safeDoor) safeDoor.classList.remove("shake-error");
        this.currentPin = "";
        this.updatePinDisplay();
      }, 800);
    }
  }

  setupVaultTriggers() {
    document.getElementById("vault-lock-close")?.addEventListener("click", () => this.close());
    document.getElementById("vault-admin-close")?.addEventListener("click", () => this.close());

    document.getElementById("btn-vault-relock")?.addEventListener("click", () => {
      this.relock();
    });
  }

  requestCreateNote() {
    if (this.isUnlocked) {
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
    document.getElementById("vault-modal")?.classList.add("hidden");
    this.currentPin = "";
    this.updatePinDisplay();
  }

  relock() {
    this.isUnlocked = false;
    this.currentPin = "";
    document.getElementById("vault-admin-view")?.classList.add("hidden");
    document.getElementById("vault-lock-view")?.classList.remove("hidden");
    this.updatePinDisplay();
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
    }
  }

  // ================= NOTE ARCHITECT LOGIC =================
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
          saveBtn.innerHTML = "<span>🚀 Publish to Website & Cloud</span>";
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
      trick: "Lab Memory Tip"
    };

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
            <span class="sq-drag-handle">☰</span>
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
          trick: "Tip: A hypothesis is not just a guess—it must be testable!"
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
        trick: card.querySelector(".sq-input-trick")?.value || this.architectSquares[idx]?.trick || ""
      }));
    }

    const properties = this.architectSquares.map((sq, idx) => ({
      num: idx + 1,
      name: sq.name || `Square #${idx + 1}`,
      formula: sq.formula || formula,
      explanation: sq.explanation || desc,
      example: sq.example || "Demonstrated in Jeeva's notebook.",
      trick: sq.trick || "5th Grade Science Concept"
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

    if (this.editingNoteId) {
      const existingNote = this.app.notes.find(n => n.id === this.editingNoteId);
      if (existingNote && existingNote.quiz) {
        newNote.quiz = existingNote.quiz;
      }
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
      saveBtn.innerHTML = "<span>⏳ Publishing to Website & Cloud...</span>";
    }

    // Automatically publish to Cloud Database across all devices
    await this.app.publishAllNotes(true, `🎉 Unit "${newNote.title}" published live to website & cloud database!`);

    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.innerHTML = "<span>🚀 Publish to Website & Cloud</span>";
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
        description: "How heating and cooling alters molecular motion without changing the substance's chemical identity.",
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
        description: "The foundational biochemical process where green plant producers convert solar energy into storable chemical sugar food.",
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
      alert(`Sound effects are now ${sounds.enabled ? "ENABLED 🔊" : "MUTED 🔇"}`);
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

  // ================= DATABASE MANAGER =================
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
          await this.app.publishAllNotes(true, `🗑️ Unit "${topic.title}" deleted and changes synced live to all devices!`);
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
      trick: p.trick || ""
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
      saveBtn.innerHTML = "<span>🚀 Update & Publish to Website & Cloud</span>";
      saveBtn.style.background = "linear-gradient(135deg, #10b981, #06b6d4)";
    }

    sounds.playClick();
  }

  // ================= SYSTEM TELEMETRY =================
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

// Helper to guarantee science notes list has valid fallback if completely empty and filters out unwanted notes
function ensurePlantCellUnit(notesList) {
  if (!Array.isArray(notesList) || notesList.length === 0) {
    return JSON.parse(JSON.stringify(DEFAULT_SCIENCE_TOPICS));
  }
  // Strip out any added notes the user explicitly does not want
  return notesList.filter(n => n && 
    n.id !== "states-of-matter-01" && 
    n.id !== "moon-phases-01" &&
    !n.id.startsWith("science-matter-") &&
    !n.id.startsWith("science-photo-")
  );
}

// ================= 5TH GRADE SCIENCE VOCABULARY GLOSSARY =================
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

function annotateVocabTerms(html) {
  const terms = Object.keys(SCIENCE_VOCAB_GLOSSARY).sort((a, b) => b.length - a.length);
  const regex = new RegExp(`(?![^<]*>)(\\b(?:${terms.join('|')})\\b)`, 'gi');
  return html.replace(regex, (match) => {
    const key = match.toLowerCase();
    return `<span class="vocab-term" data-term="${key}">${match}</span>`;
  });
}

// ================= READING ENHANCEMENT SUITE CONTROLLER =================
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

    container.addEventListener("mouseover", (e) => {
      const vocabSpan = e.target.closest(".vocab-term");
      if (vocabSpan) {
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
    if (timeEl) timeEl.textContent = `⏱️ ${mins} min read`;

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
      pill.className = "toc-pill";
      pill.textContent = `#${prop.num} ${prop.name}`;
      pill.title = `Jump directly to Concept Square #${prop.num}`;
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
      btn.innerHTML = this.isFlashcard ? `<span>📄</span> Full Notes` : `<span>🃏</span> Flashcards`;
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
      btn.innerHTML = this.isZen ? `<span>✕</span> Exit Zen` : `<span>⛶</span> Zen`;
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
      btn.innerHTML = `<span>⛶</span> Zen`;
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
    if (playIcon) playIcon.textContent = "⏹";
    if (playLabel) playLabel.textContent = "Stop Audio";

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

    utter.onend = () => {
      if (item.cardId) {
        document.getElementById(item.cardId)?.classList.remove("speaking-card-active");
      }
      this.ttsIndex++;
      this.speakNextQueueItem();
    };

    utter.onerror = () => {
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
    };
    utter.onend = () => {
      card?.classList.remove("speaking-card-active");
    };
    utter.onerror = () => {
      card?.classList.remove("speaking-card-active");
    };

    window.speechSynthesis.speak(utter);
  }

  stopAudio() {
    this.ttsPlaying = false;
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    const playBtn = document.getElementById("btn-tts-play");
    const playIcon = document.getElementById("tts-icon");
    const playLabel = document.getElementById("tts-label");
    if (playBtn) playBtn.classList.remove("playing");
    if (playIcon) playIcon.textContent = "▶";
    if (playLabel) playLabel.textContent = "Read Aloud";
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
      <span style="font-size: 0.88rem; font-weight: 700; color: #a5f3fc;">🃏 Interactive 3D Study Flashcards (Tap card to flip)</span>
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
            <div style="font-size: 2.5rem; margin: 16px 0;">🔬</div>
            <h3 style="font-size: 1.35rem; color: #fff; font-weight: 800; font-family: var(--font-display);">${prop.name}</h3>
            <span class="prop-formula-box" style="margin: 10px 0;">${prop.formula}</span>
            <span style="font-size: 0.76rem; color: rgba(255, 255, 255, 0.6); margin-top: auto;">🔄 Tap card to flip definition</span>
          </div>

          <!-- BACK OF FLASHCARD -->
          <div class="flashcard-back">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="prop-number-tag">#${prop.num} DEFINITION</span>
                <button class="prop-tts-btn" data-sq="${prop.num}" title="Hear definition">🔊</button>
              </div>
              <h4 style="font-size: 1.1rem; color: #38bdf8; margin-bottom: 8px;">${prop.name}</h4>
              <p style="font-size: 0.88rem; line-height: 1.5; color: #e2e8f0; margin-bottom: 12px;">${prop.explanation}</p>
              ${prop.example ? `<div style="font-size: 0.82rem; background: rgba(6, 182, 212, 0.15); padding: 8px 12px; border-radius: 8px; border-left: 2px solid #06b6d4; margin-bottom: 8px;"><strong>Observation:</strong> ${prop.example}</div>` : ""}
            </div>
            <div class="flashcard-review-bar">
              <button class="fc-btn review">🔄 Review Later</button>
              <button class="fc-btn mastered">✅ Mastered</button>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    container.appendChild(grid);
  }
}

// ================= MAIN SCIENCE.IO APP =================
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
    this.supabase = null;
    this.supabaseChannel = null;
    this.activeSimAnimId = null;
    this.moonOrbitAnimId = null;
    this.currentLabType = null;
    this.vault = new VaultController(this);

    this.init();
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

  handleRemoteNotesUpdate(incomingNotes) {
    if (!Array.isArray(incomingNotes) || incomingNotes.length === 0) return;
    const incomingJson = JSON.stringify(incomingNotes);
    const currentJson = JSON.stringify(this.notes);
    if (incomingJson !== currentJson) {
      this.notes = ensurePlantCellUnit(incomingNotes);
      localStorage.setItem("scienceio_notes_v6", incomingJson);
      this.render();
      if (this.vault && typeof this.vault.updateManagerTable === "function") {
        this.vault.updateManagerTable();
      }
      if (this.vault && typeof this.vault.updateTelemetry === "function") {
        this.vault.updateTelemetry();
      }
      const cloudDot = document.getElementById("cloud-status-dot");
      const cloudText = document.getElementById("cloud-status-text");
      if (cloudDot) cloudDot.style.background = "#10b981";
      if (cloudText) cloudText.textContent = "Supabase Live";
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
            this.handleRemoteNotesUpdate(payload.new.notes);
          }
        })
        .on('broadcast', { event: 'sync' }, (payload) => {
          if (payload.payload && Array.isArray(payload.payload.notes)) {
            this.handleRemoteNotesUpdate(payload.payload.notes);
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

    // 0. Initialize Supabase Client & Realtime WebSocket if credentials exist
    this.initSupabase();

    // 1. Load cached notes from localStorage FIRST so notes are ready before rendering UI
    this.loadCachedNotes();

    // 2. Setup carousel and table views
    this.setupCarouselTrack();
    this.setupCarouselDrag();
    this.setupTableView();
    this.vault.init();
    this.setupEventListeners();
    this.setupPublishSystem();
    this.readingSuite.init();

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

    const saved = localStorage.getItem("scienceio_notes_v6");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.notes = ensurePlantCellUnit(parsed);
          localStorage.setItem("scienceio_notes_v6", JSON.stringify(this.notes));
          this.render();
          return;
        }
      } catch (e) {}
    }

    this.notes = ensurePlantCellUnit(JSON.parse(JSON.stringify(baseNotes)));
    localStorage.setItem("scienceio_notes_v6", JSON.stringify(this.notes));
    this.render();
  }

  saveNotes() {
    this.notes = ensurePlantCellUnit(this.notes);
    localStorage.setItem("scienceio_notes_v6", JSON.stringify(this.notes));
    this.hasUnpublishedChanges = true;
    this.updatePublishBadge();
  }

  // ================= DATABASE SYNC & "PUBLISH ALL NOTES" =================
  async fetchCloudNotes(silent = false) {
    const cloudDot = document.getElementById("cloud-status-dot");
    const cloudText = document.getElementById("cloud-status-text");

    let loadedNotes = null;

    // 0. Primary: Supabase Real-Time Client Fetch (100% Free Forever • Zero Node Server • Zero Token Drain)
    if (this.supabase) {
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
        localStorage.setItem("scienceio_notes_v6", incomingJson);
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
      btn.innerHTML = `<span>⏳ Publishing ${this.notes.length} Unit(s)...</span>`;
    });

    let publishedSuccessfully = false;
    let publishError = null;

    // 0. Primary: Supabase Real-Time Client Upsert (100% Free Forever • Zero Node Server • Zero Token Drain)
    if (this.supabase) {
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
    localStorage.setItem("scienceio_notes_v6", currentNotesJson);
    this.hasUnpublishedChanges = false;
    this.updatePublishBadge();

    publishBtns.forEach(btn => {
      btn.disabled = false;
      btn.innerHTML = btn.dataset.prevHtml || `<span>🚀 Publish All Notes to Cloud</span>`;
    });

    const cloudDot = document.getElementById("cloud-status-dot");
    const cloudText = document.getElementById("cloud-status-text");

    if (publishedSuccessfully) {
      if (cloudDot) cloudDot.className = "cloud-dot";
      if (cloudText) cloudText.textContent = "Database Live";
      sounds.playSuccess();
      this.confetti?.burst(window.innerWidth / 2, window.innerHeight / 2, 85);

      const msg = customMessage || `🎉 SUCCESS! All ${this.notes.length} note unit(s) were published live!\n\n✓ Live across all devices (Desktop, Mobile, Tablet).\n✓ 100% Free Forever • Zero API Token Usage.`;
      alert(msg);
    } else {
      if (cloudDot) cloudDot.className = "cloud-dot error";
      if (cloudText) cloudText.textContent = "Sync Offline";
      alert(`⚠️ Could not sync to live Cloud Database (${publishError || "Network Offline"}).\nChanges saved locally on this device.`);
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
      if (btn) btn.textContent = "🔄 Pull Latest Notes from Cloud";
      alert("✅ Notes refreshed from Cloud Database!");
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
        alert("⚡ Supabase successfully connected! Syncing current notes now...");
        await this.publishAllNotes(true, "🎉 All notes synced to Supabase database in real-time!");
      } else {
        alert("⚠️ Failed to initialize Supabase. Please check your URL and Key.");
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

  // ================= SCIENCE LOADING SCREEN CONTROLLER =================
  setupLoadingScreen() {
    const loader = document.getElementById("loader-screen");
    const bar = document.getElementById("loader-bar");
    const pct = document.getElementById("loader-pct");
    const status = document.getElementById("loader-status");
    const symbolsContainer = document.getElementById("floating-symbols-container");
    const skipBtn = document.getElementById("loader-skip-btn");

    // Spawn 18 floating scientific glyphs & molecules
    const glyphs = ["⚛️", "🧬", "🔬", "🧪", "🪐", "⚡", "🧲", "🌍", "🌡️", "💡", "🔭", "H₂O", "CO₂", "E=mc²", "F=ma", "DNA", "v=d/t", "O₂"];
    if (symbolsContainer) {
      symbolsContainer.innerHTML = "";
      glyphs.forEach((char) => {
        const span = document.createElement("span");
        span.className = "floating-science-symbol";
        span.textContent = char;
        span.style.left = `${Math.random() * 90 + 5}%`;
        span.style.top = `${Math.random() * 85 + 5}%`;
        span.style.animationDelay = `${Math.random() * 4}s`;
        span.style.animationDuration = `${Math.random() * 6 + 6}s`;
        symbolsContainer.appendChild(span);
      });
    }

    const messages = [
      "Calibrating atomic mass spectrometers...",
      "Sequencing cellular DNA matrices...",
      "Simulating ecosystem energy flows...",
      "Connecting to science.io Global Cloud Database...",
      "System Operational. Welcome Jeeva R."
    ];

    let progress = 0;
    let finished = false;

    const completeLoader = () => {
      if (finished) return;
      finished = true;
      progress = 100;
      if (bar) bar.style.width = "100%";
      if (pct) pct.textContent = "100%";
      if (status) status.innerHTML = `<span class="terminal-prefix">&gt;</span> System Operational. Welcome Jeeva R.`;
      sounds.playSuccess();
      setTimeout(() => {
        if (loader) {
          loader.classList.add("fade-out");
          setTimeout(() => {
            loader.style.display = "none";
          }, 800);
        }
      }, 350);
    };

    if (skipBtn) {
      skipBtn.addEventListener("click", () => {
        completeLoader();
      });
    }

    const interval = setInterval(() => {
      if (finished) {
        clearInterval(interval);
        return;
      }
      progress += Math.floor(Math.random() * 12) + 8;
      if (progress > 100) progress = 100;

      if (bar) bar.style.width = `${progress}%`;
      if (pct) pct.textContent = `${progress}%`;

      const msgIndex = Math.min(Math.floor((progress / 100) * messages.length), messages.length - 1);
      if (status) status.innerHTML = `<span class="terminal-prefix">&gt;</span> ${messages[msgIndex]}`;

      if (progress >= 100) {
        clearInterval(interval);
        completeLoader();
      }
    }, 80);
  }

  replayLoader() {
    const loader = document.getElementById("loader-screen");
    if (!loader) return;
    loader.style.display = "";
    loader.classList.remove("fade-out");
    this.setupLoadingScreen();
  }

  // ================= FILTERED NOTES =================
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

  // ================= 3D COVERFLOW CAROUSEL =================
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
            <div class="empty-notebook-icon">🔬</div>
            <h3 class="empty-notebook-title">Your Science Notebook is Ready!</h3>
            <p class="empty-notebook-desc">
              No notes have been published yet. Science units and concept squares will appear here once published from the Vault.
            </p>
          </div>
        `;
      } else {
        // Search returned no results
        track.innerHTML = `
          <div style="text-align: center; color: var(--text-muted); padding: 40px;">
            <p style="font-size: 1.2rem; margin-bottom: 8px;">No science notes found for "${this.searchQuery}"</p>
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

      const glowClass = `glow-${topic.color || "cyan"}`;
      const sqCount = topic.properties ? topic.properties.length : 1;
      const hasBulletsOrLines = topic.coreFormula && (topic.coreFormula.includes('•') || topic.coreFormula.includes('\n'));

      card.innerHTML = `
        <div class="card-glow-layer ${glowClass}"></div>
        
        <div class="card-header-meta">
          <span class="card-cat-pill">${topic.grade || "5th Grade"} • ${(topic.category || "Science").toUpperCase()} • ${sqCount} SQUARES</span>
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
          ${topic.redirectUrl ? `
          <button class="card-action-btn btn-card-redirect" style="background: rgba(10, 132, 255, 0.4);" onclick="window.open('${topic.redirectUrl}', '_blank')">
            🔗 EXTERNAL LINK
          </button>` : ""}
          <button class="card-action-btn btn-card-pdf" data-id="${topic.id}">
            SCIENCE SHEET
          </button>
          <button class="card-action-btn btn-card-quiz" data-id="${topic.id}">
            PRACTICE QUIZ
          </button>
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
      } else if (offset === -1) {
        card.classList.add("pos-left-1");
      } else if (offset === 1) {
        card.classList.add("pos-right-1");
      } else if (offset === -2) {
        card.classList.add("pos-left-2");
      } else if (offset === 2) {
        card.classList.add("pos-right-2");
      } else {
        card.classList.add("pos-hidden");
      }
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === this.carouselIndex);
    });
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

  // ================= TABLE VIEW =================
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
            No science topics stored yet. Click "Add My Notes" or open the Admin Vault to create your first unit!
          </td>
        </tr>
      `;
      return;
    }

    filtered.forEach((topic) => {
      const tr = document.createElement("tr");
      const sqCount = topic.properties ? topic.properties.length : 1;

      tr.innerHTML = `
        <td><strong>${formatBulletText(topic.title)}</strong></td>
        <td><span class="card-cat-pill">${(topic.category || "Science").toUpperCase()}</span></td>
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

  // ================= DETAILED MODAL VIEWER =================
  openNotesViewer(topicId, defaultTab = "notes") {
    const topic = this.notes.find((t) => t.id === topicId);
    if (!topic) return;

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
    if (catBadge) catBadge.textContent = `5TH GRADE ${(topic.category || "SCIENCE").toUpperCase()}`;

    if (this.readingSuite) {
      this.readingSuite.onOpenTopic(topic);
    }

    this.renderModalProperties(topic);
    this.renderModalInteractive(topic);
    this.renderModalQuiz(topic);
    this.switchModalTab(defaultTab);

    if (modal) modal.classList.remove("hidden");
  }

  closeNotesViewer() {
    this.cleanupInteractiveSimulators();
    if (this.readingSuite) {
      this.readingSuite.stopAudio();
      this.readingSuite.exitZenMode();
      this.readingSuite.hideVocabPopover();
    }
    const modal = document.getElementById("notes-viewer-modal");
    if (modal) modal.classList.add("hidden");
  }

  switchModalTab(tabName) {
    const tabs = ["notes", "interactive", "practice"];
    tabs.forEach((tab) => {
      const btn = document.getElementById(`modal-tab-${tab}`);
      const pane = document.getElementById(`pane-${tab === "notes" ? "structured-notes" : tab}`);
      if (btn) btn.classList.toggle("active", tab === tabName);
      if (pane) pane.classList.toggle("hidden", tab !== tabName);
    });

    const readingControls = document.getElementById("reading-controls-bar");
    if (readingControls) {
      readingControls.style.display = tabName === "notes" ? "flex" : "none";
    }

    if (tabName !== "notes" && this.readingSuite) {
      this.readingSuite.stopAudio();
      this.readingSuite.hideVocabPopover();
    }

    if (tabName !== "interactive") {
      this.cleanupInteractiveSimulators();
    } else {
      this.resumeInteractiveSimulator();
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

  resumeInteractiveSimulator() {
    if (this._resumeSimFn && typeof this._resumeSimFn === "function") {
      this._resumeSimFn();
    }
  }

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

    const keyWords = [
      "surrounds", "structure", "semi-permeable",
      "fluid", "pressure",
      "powerhouse", "energy", "cellular respiration",
      "Smooth", "lipids", "proteins", "transports",
      "carbohydrates", "vesicles", "outside",
      "control", "functions", "DNA", "ribosomes",
      "Rough", "protein",
      "plant", "protection",
      "storage", "water", "larger", "animal",
      "light", "sun", "sugars", "photosynthesis"
    ];

    topic.properties.forEach((prop) => {
      const card = document.createElement("div");
      card.className = "property-detail-card";
      card.id = `concept-square-${prop.num}`;

      let highlightedExplanation = prop.explanation || "";
      keyWords.forEach((kw) => {
        const regex = new RegExp(`\\b(${kw})\\b`, "gi");
        highlightedExplanation = highlightedExplanation.replace(regex, `<span class="key-term">$1</span>`);
      });

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
            <button class="prop-tts-btn" data-sq="${prop.num}" title="Listen to Concept #${prop.num}">🔊</button>
            <div class="prop-formula-box">${formulaHtml}</div>
          </div>
        </div>

        <div class="prop-explanation">${expHtml}</div>

        <div class="prop-example-box">
          <div class="prop-example-title">5th Grade Scientific Observation / Demonstration</div>
          <div class="prop-example-text">${exampleHtml}</div>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px;">
          ${trickHtml ? `<span class="prop-trick-badge">💡 ${trickHtml}</span>` : ""}
          <span class="prop-trick-badge" style="background: rgba(0, 240, 255, 0.15); border-color: rgba(0, 240, 255, 0.3); color: #a5f3fc;">🔬 Verified 5th Grade Science</span>
        </div>
      `;

      container.appendChild(card);
    });

    const copyrightFooter = document.createElement("div");
    copyrightFooter.className = "modal-notes-copyright-footer";
    copyrightFooter.style.cssText = "grid-column: 1 / -1; text-align: center; padding: 18px 12px; margin-top: 14px; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.65); font-size: 0.85rem; display: flex; align-items: center; justify-content: center; gap: 8px;";
    copyrightFooter.innerHTML = `<span>© Copyright Protected • 5th Grade Science Curriculum by Jeeva R.</span>`;
    container.appendChild(copyrightFooter);
  }

  // Interactive Science Visualizers (Matter States #6, Moon Phases Orbit #3, Plant Cell Biology)
  renderModalInteractive(topic) {
    const container = document.getElementById("interactive-sandbox-container");
    if (!container) return;
    this.cleanupInteractiveSimulators();
    container.innerHTML = "";

    // Determine initial active lab based on topic
    let defaultLab = "cell";
    const topicTitle = (topic.title || "").toUpperCase();
    const topicCategory = (topic.category || "").toLowerCase();
    const topicId = topic.id || "";

    if (topicCategory === "earth" || topicTitle.includes("MOON") || topicTitle.includes("SPACE") || topicTitle.includes("ORBIT") || topicTitle.includes("SOLAR") || topicId === "moon-phases-01") {
      defaultLab = "moon";
    } else if (topicCategory === "physical" || topicTitle.includes("MATTER") || topicTitle.includes("HEAT") || topicTitle.includes("SOLID") || topicTitle.includes("GAS") || topicId === "states-of-matter-01") {
      defaultLab = "matter";
    } else {
      defaultLab = "cell";
    }

    container.innerHTML = `
      <div class="interactive-lab-nav">
        <div class="lab-nav-header">
          <span class="lab-nav-badge">🧪 INTERACTIVE VIRTUAL LABS</span>
          <span class="lab-nav-sub">Inside Notes Exclusive Sandbox</span>
        </div>
        <div class="lab-switcher-pills">
          <button class="lab-pill-btn ${defaultLab === 'matter' ? 'active' : ''}" id="lab-btn-matter" data-lab="matter">
            <span>❄️ Matter State Changes (#6)</span>
          </button>
          <button class="lab-pill-btn ${defaultLab === 'moon' ? 'active' : ''}" id="lab-btn-moon" data-lab="moon">
            <span>🪐 Moon Phases & Orbit (#3)</span>
          </button>
          <button class="lab-pill-btn ${defaultLab === 'cell' ? 'active' : ''}" id="lab-btn-cell" data-lab="cell">
            <span>🔬 Plant Cell Biology</span>
          </button>
        </div>
      </div>
      <div id="interactive-lab-stage" class="interactive-lab-stage"></div>
    `;

    const stage = document.getElementById("interactive-lab-stage");
    const labButtons = container.querySelectorAll(".lab-pill-btn");
    labButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        sounds.playClick();
        const targetLab = btn.dataset.lab;
        labButtons.forEach((b) => b.classList.toggle("active", b.dataset.lab === targetLab));
        this.loadInteractiveLab(targetLab, topic, stage);
      });
    });

    this.loadInteractiveLab(defaultLab, topic, stage);
  }

  loadInteractiveLab(labName, topic, stage) {
    if (!stage) stage = document.getElementById("interactive-lab-stage");
    if (!stage) return;
    this.cleanupInteractiveSimulators();
    this.currentLabType = labName;

    if (labName === "matter") {
      this.loadMatterStateLab(stage, topic);
    } else if (labName === "moon") {
      this.loadMoonPhasesLab(stage, topic);
    } else {
      this.loadPlantCellLab(stage, topic);
    }
  }

  // ================= LAB #6: MATTER STATE CHANGES & MOLECULAR MOTION =================
  loadMatterStateLab(stage, topic) {
    stage.innerHTML = `
      <div class="matter-sandbox-wrap">
        <div class="matter-hud-header">
          <div class="matter-hud-title-col">
            <h3 class="matter-title">Kinetic Molecular Heat Simulator</h3>
            <p class="matter-desc">Control thermal energy from -50°C to 150°C to observe molecular spacing, vibration, and phase transitions in real time.</p>
          </div>
          <div class="matter-status-badge" id="matter-status-pill">
            <span id="matter-status-icon">💧</span>
            <span id="matter-status-label">LIQUID (WATER)</span>
          </div>
        </div>

        <div class="matter-viewport-row">
          <!-- MERCURY THERMOMETER -->
          <div class="thermometer-glass-tube" title="Liquid Mercury Thermometer">
            <div class="thermometer-stem">
              <div class="thermometer-mercury-bar" id="thermo-mercury-bar" style="height: 35%;"></div>
              <div class="thermo-ticks">
                <span class="thermo-tick" style="top: 0%;">150°C</span>
                <span class="thermo-tick" style="top: 25%;">100°C ♨️</span>
                <span class="thermo-tick" style="top: 56.5%;">37°C 🌡️</span>
                <span class="thermo-tick" style="top: 75%;">0°C 🧊</span>
                <span class="thermo-tick" style="top: 100%;">-50°C ❄️</span>
              </div>
            </div>
            <div class="thermometer-bulb" id="thermo-bulb"></div>
          </div>

          <!-- CHAMBER CANVAS -->
          <div class="matter-chamber-card">
            <div class="chamber-glass-rim">
              <canvas id="matter-physics-canvas" width="480" height="260"></canvas>
            </div>
            <div class="chamber-footer-metrics">
              <div class="metric-chip">
                <span class="metric-label">TEMP:</span>
                <strong class="metric-val" id="metric-temp-c">20°C</strong>
                <span class="metric-sub" id="metric-temp-f">/ 68°F</span>
              </div>
              <div class="metric-chip">
                <span class="metric-label">KINETIC ENERGY ($E_k$):</span>
                <div class="ke-meter-bar-track">
                  <div class="ke-meter-bar-fill" id="metric-ke-bar" style="width: 35%;"></div>
                </div>
              </div>
              <div class="metric-chip">
                <span class="metric-label">BONDS:</span>
                <strong class="metric-val" id="metric-bonds-val">Fluid Hydrogen Bonds</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- CONTROLS & PRESETS -->
        <div class="matter-controls-panel">
          <div class="slider-control-row">
            <span class="slider-label-cold">❄️ -50°C</span>
            <div class="slider-wrapper">
              <input type="range" id="matter-temp-slider" min="-50" max="150" step="1" value="20" class="neon-temp-slider" />
              <div class="slider-milestones">
                <span style="left: 0%;">Deep Freeze</span>
                <span style="left: 25%;">0°C Melt/Freeze</span>
                <span style="left: 36%;">Room</span>
                <span style="left: 75%;">100°C Boil/Cond</span>
                <span style="left: 100%;">Steam</span>
              </div>
            </div>
            <span class="slider-label-hot">🔥 150°C</span>
          </div>

          <div class="matter-presets-row">
            <span class="presets-title">Presets:</span>
            <button class="preset-btn" data-temp="-30">❄️ Deep Freeze (-30°C)</button>
            <button class="preset-btn" data-temp="0">🧊 Freezing Point (0°C)</button>
            <button class="preset-btn" data-temp="22">💧 Room Temp (22°C)</button>
            <button class="preset-btn" data-temp="75">☕ Hot Water (75°C)</button>
            <button class="preset-btn" data-temp="125">💨 Superheated Vapor (125°C)</button>
          </div>
        </div>

        <!-- 5TH GRADE TEACHING CALLOUT -->
        <div class="matter-edu-callout" id="matter-edu-callout">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <h4 class="callout-heading" id="matter-callout-heading">Liquid Phase: Fluid Cohesion</h4>
            <p class="callout-text" id="matter-callout-text">
              Molecules have enough kinetic energy to break out of rigid crystal lattice positions and slide past one another. They take the shape of the container while maintaining a definite volume!
            </p>
          </div>
        </div>
      </div>
    `;

    const canvas = document.getElementById("matter-physics-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const slider = document.getElementById("matter-temp-slider");
    const statusPill = document.getElementById("matter-status-pill");
    const statusIcon = document.getElementById("matter-status-icon");
    const statusLabel = document.getElementById("matter-status-label");
    const tempCEl = document.getElementById("metric-temp-c");
    const tempFEl = document.getElementById("metric-temp-f");
    const keBar = document.getElementById("metric-ke-bar");
    const bondsEl = document.getElementById("metric-bonds-val");
    const mercuryBar = document.getElementById("thermo-mercury-bar");
    const bulb = document.getElementById("thermo-bulb");
    const calloutHeading = document.getElementById("matter-callout-heading");
    const calloutText = document.getElementById("matter-callout-text");

    let temp = parseInt(slider.value, 10);

    // Particle Simulation setup: 64 molecules
    const COLS = 8;
    const ROWS = 8;
    const NUM_PARTICLES = COLS * ROWS;
    const particles = [];
    const width = canvas.width;
    const height = canvas.height;

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const baseX = 80 + c * 45;
        const baseY = 115 + r * 17;
        particles.push({
          baseX: baseX,
          baseY: baseY,
          x: baseX + (Math.random() - 0.5) * 10,
          y: baseY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          phase: Math.random() * Math.PI * 2,
          row: r,
          col: c,
          history: []
        });
      }
    }

    const updateHUD = (t) => {
      temp = t;
      const degF = Math.round(t * (9 / 5) + 32);
      const kelvin = (t + 273.15).toFixed(1);

      if (tempCEl) tempCEl.textContent = `${t}°C`;
      if (tempFEl) tempFEl.textContent = `/ ${degF}°F (${kelvin} K)`;

      // Mercury level calculation: -50°C to 150°C
      const pct = Math.max(0, Math.min(100, ((t - -50) / 200) * 100));
      if (mercuryBar) mercuryBar.style.height = `${pct}%`;
      if (keBar) keBar.style.width = `${Math.max(6, pct)}%`;

      // Color and state thresholds
      let color = "#34d399";
      let stateName = "LIQUID (WATER)";
      let stateIcon = "💧";
      let bonds = "Fluid Hydrogen Bonds";
      let heading = "Liquid Phase: Fluid Cohesion";
      let desc = "Molecules have enough kinetic energy to break out of rigid crystal positions and slide past one another. They take the shape of the container while maintaining a definite volume!";

      if (t < 0) {
        color = "#38bdf8";
        stateName = "SOLID (ICE)";
        stateIcon = "❄️";
        bonds = "Rigid Crystal Lattice";
        heading = "Solid Phase: Rigid Crystalline Lattice";
        desc = "Molecules are locked tightly in a fixed hexagonal lattice. With low kinetic energy, they cannot slide past each other and only vibrate in fixed positions, maintaining definite shape and volume.";
      } else if (t === 0) {
        color = "#f59e0b";
        stateName = "MELTING / FREEZING POINT (0°C / 32°F)";
        stateIcon = "🧊";
        bonds = "Phase Equilibrium (Latent Heat of Fusion)";
        heading = "Phase Transition: Melting & Freezing (0°C / 32°F)";
        desc = "At 0°C, thermal energy is absorbed to break the rigid crystalline bonds without changing temperature until all solid ice melts into liquid water!";
      } else if (t > 0 && t < 100) {
        color = "#34d399";
        stateName = "LIQUID (WATER)";
        stateIcon = "💧";
        bonds = "Dynamic Hydrogen Bonds";
        heading = "Liquid Phase: Fluid Flow & Surface Tension";
        desc = "Thermal heat gives molecules kinetic energy to slide past one another. Gravity pools them at the bottom while intermolecular forces hold them in a fluid volume.";
      } else if (t === 100) {
        color = "#f97316";
        stateName = "BOILING POINT (100°C / 212°F)";
        stateIcon = "♨️";
        bonds = "Vaporization (Latent Heat of Vaporization)";
        heading = "Phase Transition: Boiling & Vaporization (100°C / 212°F)";
        desc = "Molecules gain enough kinetic energy to overcome atmospheric pressure completely! Rapid vapor bubbles form at the bottom and escape into the air.";
      } else {
        color = "#ef4444";
        stateName = "GAS (STEAM / WATER VAPOR)";
        stateIcon = "💨";
        bonds = "Negligible / Free Particles";
        heading = "Gas Phase: High-Speed Molecular Diffusion";
        desc = "High thermal kinetic energy overcomes all intermolecular attraction. Molecules zoom around at high speeds, colliding elastically with container walls and expanding to fill all available volume.";
      }

      if (statusIcon) statusIcon.textContent = stateIcon;
      if (statusLabel) statusLabel.textContent = stateName;
      if (statusPill) {
        statusPill.style.borderColor = color;
        statusPill.style.boxShadow = `0 0 15px ${color}40`;
      }
      if (bondsEl) bondsEl.textContent = bonds;
      if (mercuryBar) mercuryBar.style.background = color;
      if (bulb) bulb.style.background = color;
      if (calloutHeading) calloutHeading.textContent = heading;
      if (calloutText) calloutText.textContent = desc;
    };

    updateHUD(temp);

    slider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      updateHUD(val);
    });

    stage.querySelectorAll(".preset-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        sounds.playClick();
        const pTemp = parseInt(btn.dataset.temp, 10);
        slider.value = pTemp;
        updateHUD(pTemp);
      });
    });

    // Physics Animation Loop
    let lastTime = performance.now();
    let tickCount = 0;

    const animatePhysics = (time) => {
      tickCount++;
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Background subtle gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      if (temp <= 0) {
        bgGrad.addColorStop(0, "rgba(8, 20, 36, 0.85)");
        bgGrad.addColorStop(1, "rgba(4, 12, 24, 0.95)");
      } else if (temp < 100) {
        bgGrad.addColorStop(0, "rgba(6, 26, 22, 0.85)");
        bgGrad.addColorStop(1, "rgba(3, 16, 14, 0.95)");
      } else {
        bgGrad.addColorStop(0, "rgba(32, 12, 10, 0.85)");
        bgGrad.addColorStop(1, "rgba(20, 6, 6, 0.95)");
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // If Solid (T <= 0): Draw crystalline lattice lines between neighbors
      if (temp <= 0) {
        const bondAlpha = Math.max(0.15, 0.45 * (1 - (temp / -50) * 0.4));
        ctx.strokeStyle = `rgba(56, 189, 248, ${bondAlpha})`;
        ctx.lineWidth = 1.2;

        for (let i = 0; i < NUM_PARTICLES; i++) {
          const p1 = particles[i];
          for (let j = i + 1; j < NUM_PARTICLES; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p1.baseX - p2.baseX, p1.baseY - p2.baseY);
            if (dist < 48) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // If Liquid (0 < T < 100): Draw fluid surface glow line
      if (temp > 0 && temp < 100) {
        const fluidSurfaceY = 110;
        ctx.strokeStyle = "rgba(52, 211, 153, 0.25)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(15, fluidSurfaceY + Math.sin(time * 0.003) * 3);
        for (let x = 15; x <= width - 15; x += 30) {
          ctx.lineTo(x, fluidSurfaceY + Math.sin(x * 0.02 + time * 0.004) * 4);
        }
        ctx.stroke();
      }

      // Update & Render each particle
      particles.forEach((p) => {
        if (temp <= 0) {
          // SOLID: Anchor vibration about base lattice position
          const vibAmp = Math.max(0.4, (temp + 50) / 25);
          p.x = p.baseX + Math.sin(time * 0.09 + p.phase) * vibAmp;
          p.y = p.baseY + Math.cos(time * 0.09 + p.phase * 1.3) * vibAmp;

          // Render Frost Crystal Atom
          ctx.beginPath();
          ctx.arc(p.x, p.y, 6.5, 0, Math.PI * 2);
          ctx.fillStyle = "#38bdf8";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Shiny nucleus dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        } else if (temp < 100) {
          // LIQUID: Fluid particle motion with pooling and surface tension
          const speedScale = 1.0 + (temp / 100) * 2.8;
          p.vx += (Math.random() - 0.5) * 0.4 * speedScale;
          p.vy += (Math.random() - 0.5) * 0.4 * speedScale + 0.12; // gentle gravity

          // Cap speed
          const currentSpeed = Math.hypot(p.vx, p.vy);
          if (currentSpeed > speedScale * 2.2) {
            p.vx = (p.vx / currentSpeed) * speedScale * 2.2;
            p.vy = (p.vy / currentSpeed) * speedScale * 2.2;
          }

          p.x += p.vx;
          p.y += p.vy;

          // Fluid bounding box
          const padding = 16;
          const surfaceY = 110;
          if (p.x < padding) { p.x = padding; p.vx = Math.abs(p.vx); }
          if (p.x > width - padding) { p.x = width - padding; p.vx = -Math.abs(p.vx); }
          if (p.y > height - padding) { p.y = height - padding; p.vy = -Math.abs(p.vy) * 0.8; }
          if (p.y < surfaceY) { p.y = surfaceY; p.vy = Math.abs(p.vy) * 0.6; }

          // Render Fluid Droplet Atom
          ctx.beginPath();
          ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
          ctx.fillStyle = "#34d399";
          ctx.shadowColor = "#34d399";
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.beginPath();
          ctx.arc(p.x - 2, p.y - 2, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "#a7f3d0";
          ctx.fill();
        } else {
          // GAS: High-speed elastic collisions with velocity trails
          const gasSpeed = 3.8 + ((temp - 100) / 50) * 3.5;
          const curSpeed = Math.hypot(p.vx, p.vy);
          if (curSpeed < gasSpeed * 0.8 || curSpeed > gasSpeed * 1.3) {
            const angle = Math.atan2(p.vy, p.vx) || Math.random() * Math.PI * 2;
            p.vx = Math.cos(angle) * gasSpeed;
            p.vy = Math.sin(angle) * gasSpeed;
          }

          p.x += p.vx;
          p.y += p.vy;

          const pad = 14;
          if (p.x < pad) { p.x = pad; p.vx = Math.abs(p.vx); }
          if (p.x > width - pad) { p.x = width - pad; p.vx = -Math.abs(p.vx); }
          if (p.y < pad) { p.y = pad; p.vy = Math.abs(p.vy); }
          if (p.y > height - pad) { p.y = height - pad; p.vy = -Math.abs(p.vy); }

          // Store trail history
          p.history.push({ x: p.x, y: p.y });
          if (p.history.length > 4) p.history.shift();

          // Render motion trail
          if (p.history.length > 1) {
            ctx.beginPath();
            ctx.moveTo(p.history[0].x, p.history[0].y);
            for (let h = 1; h < p.history.length; h++) {
              ctx.lineTo(p.history[h].x, p.history[h].y);
            }
            ctx.strokeStyle = "rgba(249, 115, 22, 0.4)";
            ctx.lineWidth = 3;
            ctx.stroke();
          }

          // Render High-Energy Vapor Atom
          ctx.beginPath();
          ctx.arc(p.x, p.y, 7.5, 0, Math.PI * 2);
          ctx.fillStyle = "#f97316";
          ctx.shadowColor = "#ef4444";
          ctx.shadowBlur = 14;
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#fef08a";
          ctx.fill();
        }
      });

      this.activeSimAnimId = requestAnimationFrame(animatePhysics);
    };

    this.activeSimAnimId = requestAnimationFrame(animatePhysics);
    this._resumeSimFn = () => {
      if (!this.activeSimAnimId && this.currentLabType === "matter") {
        this.activeSimAnimId = requestAnimationFrame(animatePhysics);
      }
    };
  }

  // ================= LAB #3: INTERACTIVE 3D SOLAR SYSTEM & MOON PHASES ORBIT =================
  // Constrained exclusively inside Notes Viewer Modal
  loadMoonPhasesLab(stage, topic) {
    stage.innerHTML = `
      <div class="moon-orbit-wrap">
        <div class="moon-hud-header">
          <div class="moon-hud-title-col">
            <div class="moon-scope-tag">EARTH & SPACE SCIENCE • IN-NOTES INTERACTIVE LAB</div>
            <h3 class="moon-title">Moon Phases & Solar System Orbit Simulator</h3>
            <p class="moon-desc">Drag the Moon around Earth or scrub the orbit to see why lunar phases appear from Earth's vantage point!</p>
          </div>
          <div class="moon-phase-pill" id="moon-phase-pill">
            <span id="moon-phase-pill-icon">🌓</span>
            <span id="moon-phase-pill-name">FIRST QUARTER</span>
          </div>
        </div>

        <div class="moon-dual-viewport">
          <!-- VIEW 1: TOP-DOWN SPACE ORBIT -->
          <div class="moon-view-card orbit-view-card">
            <div class="view-header-strip">
              <span class="view-tag">VIEW 1: TOP-DOWN SPACE ORBIT</span>
              <span class="view-tip">Drag Moon or click orbital nodes!</span>
            </div>
            <div class="orbit-canvas-box">
              <canvas id="moon-orbit-canvas" width="340" height="300"></canvas>
              <div class="sunbeam-label-flag">☀️ Sunlight from Sun (Left)</div>
            </div>
            <div class="view-caption">
              <strong>Space Truth:</strong> The left 50% of the Moon is <em>always</em> illuminated by the Sun in space.
            </div>
          </div>

          <!-- VIEW 2: TELESCOPE VIEW (FROM EARTH) -->
          <div class="moon-view-card telescope-view-card">
            <div class="view-header-strip">
              <span class="view-tag">VIEW 2: EARTH VIEW (TELESCOPE)</span>
              <span class="view-tip" id="moon-illum-percent">50% Illuminated</span>
            </div>
            <div class="telescope-viewport">
              <div class="telescope-lens">
                <canvas id="moon-telescope-canvas" width="220" height="220"></canvas>
                <div class="telescope-crosshair"></div>
                <div class="telescope-glare"></div>
              </div>
            </div>
            <div class="view-caption">
              <strong>What Earth Sees:</strong> As the Moon revolves around us, our line-of-sight angle reveals different amounts of the sunlit hemisphere!
            </div>
          </div>
        </div>

        <!-- CONTROLS & 8 PHASES QUICK-JUMP -->
        <div class="moon-controls-panel">
          <div class="moon-scrubber-row">
            <button class="btn-orbit-play" id="btn-orbit-auto" title="Auto Orbit Animation">
              <span id="orbit-play-icon">▶</span>
              <span id="orbit-play-text">Auto Orbit</span>
            </button>
            <div class="moon-slider-track-wrap">
              <div class="slider-meta-row">
                <span>🌑 New Moon (0°)</span>
                <span id="orbit-angle-deg" class="orbit-angle-deg">Angle: 90° • Day 7.4 of 29.5</span>
                <span>🌑 End (360°)</span>
              </div>
              <input type="range" id="moon-orbit-slider" min="0" max="360" step="1" value="90" class="neon-orbit-slider" />
            </div>
            <button class="btn-orbit-speed" id="btn-orbit-speed">1x Speed</button>
          </div>

          <!-- 8 PHASES QUICK-JUMP GRID -->
          <div class="moon-phases-grid">
            <button class="phase-jump-btn" data-angle="0" title="Day 0">🌑 1. New Moon (0°)</button>
            <button class="phase-jump-btn" data-angle="45" title="Day 3.7">🌒 2. Waxing Crescent (45°)</button>
            <button class="phase-jump-btn active" data-angle="90" title="Day 7.4">🌓 3. First Quarter (90°)</button>
            <button class="phase-jump-btn" data-angle="135" title="Day 11.1">🌔 4. Waxing Gibbous (135°)</button>
            <button class="phase-jump-btn" data-angle="180" title="Day 14.8">🌕 5. Full Moon (180°)</button>
            <button class="phase-jump-btn" data-angle="225" title="Day 18.5">🌖 6. Waning Gibbous (225°)</button>
            <button class="phase-jump-btn" data-angle="270" title="Day 22.1">🌗 7. Third Quarter (270°)</button>
            <button class="phase-jump-btn" data-angle="315" title="Day 25.8">🌘 8. Waning Crescent (315°)</button>
          </div>
        </div>

        <!-- 5TH GRADE MNEMONIC & DEEP DIVE HUD -->
        <div class="moon-edu-card" id="moon-edu-card">
          <div class="moon-mnemonic-badge" id="moon-mnemonic-badge">
            <span>🧠 5th Grade Memory Rule:</span>
            <strong id="moon-mnemonic-text">Light on the RIGHT = WAXING (growing bright)!</strong>
          </div>
          <p class="moon-explanation-text" id="moon-explanation-text">
            At First Quarter (Day 7.4), the Moon is 90° along its orbit around Earth. Looking at the Moon from Earth, exactly half of the visible disc is illuminated on the right side.
          </p>
        </div>
      </div>
    `;

    const orbitCanvas = document.getElementById("moon-orbit-canvas");
    const telCanvas = document.getElementById("moon-telescope-canvas");
    if (!orbitCanvas || !telCanvas) return;

    const oCtx = orbitCanvas.getContext("2d");
    const tCtx = telCanvas.getContext("2d");

    const slider = document.getElementById("moon-orbit-slider");
    const autoBtn = document.getElementById("btn-orbit-auto");
    const playIcon = document.getElementById("orbit-play-icon");
    const playText = document.getElementById("orbit-play-text");
    const speedBtn = document.getElementById("btn-orbit-speed");
    const angleText = document.getElementById("orbit-angle-deg");
    const pillIcon = document.getElementById("moon-phase-pill-icon");
    const pillName = document.getElementById("moon-phase-pill-name");
    const illumText = document.getElementById("moon-illum-percent");
    const mnemonicText = document.getElementById("moon-mnemonic-text");
    const explanationText = document.getElementById("moon-explanation-text");

    let currentAngle = 90; // degrees, 0 to 360
    let isAutoPlaying = false;
    let orbitSpeedMultiplier = 1;
    let earthSpinAngle = 0;

    const PHASE_DEFINITIONS = [
      { name: "New Moon", icon: "🌑", minAngle: 355, maxAngle: 5, target: 0, day: 0.0, rule: "Moon is between Earth & Sun! The sunlit side faces away from Earth.", desc: "The Moon is directly between Earth and the Sun. The sunlit hemisphere faces away into space, while the dark shadowed side faces Earth, making the Moon invisible at night." },
      { name: "Waxing Crescent", icon: "🌒", minAngle: 5, maxAngle: 85, target: 45, day: 3.7, rule: "Light on the RIGHT = WAXING! The crescent grows larger each night.", desc: "As the Moon travels counterclockwise, a curved silver crescent becomes visible on the right side in the western evening sky after sunset." },
      { name: "First Quarter", icon: "🌓", minAngle: 85, maxAngle: 95, target: 90, day: 7.4, rule: "Right Half Illuminated! One-quarter through the 29.5-day cycle.", desc: "One quarter through the lunar orbit. From Earth, we see exactly half of the Moon's visible disc illuminated on the right side (looks like a half-moon)." },
      { name: "Waxing Gibbous", icon: "🌔", minAngle: 95, maxAngle: 175, target: 135, day: 11.1, rule: "Gibbous = Great Big! More than half lit on the right and growing.", desc: "'Gibbous' means swollen or humped. More than half of the visible disc is lit on the right side, continuing to swell larger as it approaches Full Moon." },
      { name: "Full Moon", icon: "🌕", minAngle: 175, maxAngle: 185, target: 180, day: 14.8, rule: "Earth is between Sun and Moon! 100% of the sunlit face is visible.", desc: "Earth is between the Sun and Moon. The entire illuminated hemisphere faces directly toward Earth, presenting a brilliant 100% fully lit circle in the night sky." },
      { name: "Waning Gibbous", icon: "🌖", minAngle: 185, maxAngle: 265, target: 225, day: 18.5, rule: "Light on the LEFT = WANING! The illuminated portion is shrinking.", desc: "'Waning' means shrinking or decreasing. After Full Moon, the light begins to decrease, now showing on the left side while the right side enters shadow." },
      { name: "Third / Last Quarter", icon: "🌗", minAngle: 265, maxAngle: 275, target: 270, day: 22.1, rule: "Left Half Illuminated! Three-quarters through the lunar cycle.", desc: "Three quarters through the 29.5-day cycle. From Earth, we see exactly half of the visible disc illuminated, but this time on the left side before sunrise." },
      { name: "Waning Crescent", icon: "🌘", minAngle: 275, maxAngle: 355, target: 315, day: 25.8, rule: "Light on the LEFT = WANING! Final silver sliver before New Moon.", desc: "The final phase before New Moon. Only a tiny crescent remains illuminated on the left side, visible in the eastern sky right before dawn." }
    ];

    const getPhaseForAngle = (angle) => {
      const a = ((angle % 360) + 360) % 360;
      if (a >= 355 || a <= 5) return PHASE_DEFINITIONS[0]; // New Moon
      if (a > 5 && a < 85) return PHASE_DEFINITIONS[1]; // Waxing Crescent
      if (a >= 85 && a <= 95) return PHASE_DEFINITIONS[2]; // First Quarter
      if (a > 95 && a < 175) return PHASE_DEFINITIONS[3]; // Waxing Gibbous
      if (a >= 175 && a <= 185) return PHASE_DEFINITIONS[4]; // Full Moon
      if (a > 185 && a < 265) return PHASE_DEFINITIONS[5]; // Waning Gibbous
      if (a >= 265 && a <= 275) return PHASE_DEFINITIONS[6]; // Third Quarter
      return PHASE_DEFINITIONS[7]; // Waning Crescent
    };

    const updatePhaseHUD = (deg) => {
      const phase = getPhaseForAngle(deg);
      const day = ((deg / 360) * 29.53).toFixed(1);
      const alphaRad = deg * (Math.PI / 180);
      const illumPct = Math.round(((1 - Math.cos(alphaRad)) / 2) * 100);

      if (pillIcon) pillIcon.textContent = phase.icon;
      if (pillName) pillName.textContent = phase.name.toUpperCase();
      if (angleText) angleText.textContent = `Angle: ${Math.round(deg)}° • Day ${day} of 29.5`;
      if (illumText) illumText.textContent = `${illumPct}% Illuminated from Earth`;
      if (mnemonicText) mnemonicText.textContent = phase.rule;
      if (explanationText) explanationText.textContent = phase.desc;

      // Update active phase jump button
      stage.querySelectorAll(".phase-jump-btn").forEach((btn) => {
        const btnAngle = parseInt(btn.dataset.angle, 10);
        const isActive = Math.abs(btnAngle - deg) < 22.5 || (btnAngle === 0 && deg > 337.5);
        btn.classList.toggle("active", isActive);
      });
    };

    // ================= RENDER TOP-DOWN SPACE ORBIT =================
    const renderSpaceOrbit = () => {
      const w = orbitCanvas.width;
      const h = orbitCanvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const orbitRadius = 100;

      oCtx.clearRect(0, 0, w, h);

      // Deep space starry canvas background
      const spaceGrad = oCtx.createRadialGradient(cx, cy, 20, cx, cy, 180);
      spaceGrad.addColorStop(0, "rgba(10, 16, 32, 0.95)");
      spaceGrad.addColorStop(1, "rgba(2, 6, 16, 1)");
      oCtx.fillStyle = spaceGrad;
      oCtx.fillRect(0, 0, w, h);

      // Distant stars
      oCtx.fillStyle = "rgba(255, 255, 255, 0.4)";
      for (let s = 0; s < 25; s++) {
        const sx = (s * 47) % w;
        const sy = (s * 31) % h;
        oCtx.fillRect(sx, sy, (s % 3 === 0 ? 1.5 : 1), (s % 3 === 0 ? 1.5 : 1));
      }

      // Golden parallel sunlight rays coming from the left
      oCtx.save();
      oCtx.strokeStyle = "rgba(255, 183, 3, 0.22)";
      oCtx.lineWidth = 1.5;
      oCtx.setLineDash([8, 8]);
      for (let y = 30; y <= h - 30; y += 40) {
        oCtx.beginPath();
        oCtx.moveTo(10, y);
        oCtx.lineTo(cx - 35, y);
        oCtx.stroke();

        // Arrow head
        oCtx.fillStyle = "rgba(255, 183, 3, 0.5)";
        oCtx.beginPath();
        oCtx.moveTo(cx - 35, y);
        oCtx.lineTo(cx - 43, y - 4);
        oCtx.lineTo(cx - 43, y + 4);
        oCtx.closePath();
        oCtx.fill();
      }
      oCtx.restore();

      // Moon orbital track circle (dashed neon)
      oCtx.save();
      oCtx.strokeStyle = "rgba(0, 212, 255, 0.25)";
      oCtx.lineWidth = 1.5;
      oCtx.setLineDash([4, 4]);
      oCtx.beginPath();
      oCtx.arc(cx, cy, orbitRadius, 0, Math.PI * 2);
      oCtx.stroke();
      oCtx.restore();

      // 8 orbital phase anchor markers
      const angles = [0, 45, 90, 135, 180, 225, 270, 315];
      angles.forEach((ang) => {
        const rad = ang * (Math.PI / 180);
        const px = cx - orbitRadius * Math.cos(rad);
        const py = cy + orbitRadius * Math.sin(rad);

        oCtx.beginPath();
        oCtx.arc(px, py, 3, 0, Math.PI * 2);
        oCtx.fillStyle = (Math.abs(ang - currentAngle) < 15 || (ang === 0 && currentAngle > 345)) ? "#00f0ff" : "rgba(255, 255, 255, 0.3)";
        oCtx.fill();
      });

      // Calculate Moon's coordinates on orbit:
      // At angle = 0° (New Moon), Moon is to the left of Earth between Earth and Sun: (cx - orbitRadius, cy)
      // At angle = 90° (First Qtr), Moon is below Earth: (cx, cy + orbitRadius)
      // At angle = 180° (Full Moon), Moon is to the right of Earth: (cx + orbitRadius, cy)
      // At angle = 270° (Third Qtr), Moon is above Earth: (cx, cy - orbitRadius)
      const curRad = currentAngle * (Math.PI / 180);
      const moonX = cx - orbitRadius * Math.cos(curRad);
      const moonY = cy + orbitRadius * Math.sin(curRad);

      // Line of Sight from Earth to Moon with observer eye
      oCtx.save();
      oCtx.strokeStyle = "rgba(255, 255, 255, 0.35)";
      oCtx.lineWidth = 1.2;
      oCtx.setLineDash([3, 3]);
      oCtx.beginPath();
      oCtx.moveTo(cx, cy);
      oCtx.lineTo(moonX, moonY);
      oCtx.stroke();
      oCtx.restore();

      // Center Earth Sphere (Radius 22px)
      const earthRadius = 22;
      oCtx.save();
      oCtx.shadowColor = "rgba(0, 212, 255, 0.5)";
      oCtx.shadowBlur = 15;

      // Base ocean
      oCtx.fillStyle = "#0284c7";
      oCtx.beginPath();
      oCtx.arc(cx, cy, earthRadius, 0, Math.PI * 2);
      oCtx.fill();
      oCtx.shadowBlur = 0;

      // Earth rotation continents
      earthSpinAngle += 0.005;
      oCtx.save();
      oCtx.beginPath();
      oCtx.arc(cx, cy, earthRadius, 0, Math.PI * 2);
      oCtx.clip();

      oCtx.fillStyle = "#10b981"; // green continents
      oCtx.beginPath();
      oCtx.arc(cx - 6 + Math.sin(earthSpinAngle) * 6, cy - 4, 8, 0, Math.PI * 2);
      oCtx.arc(cx + 8 + Math.sin(earthSpinAngle) * 6, cy + 6, 9, 0, Math.PI * 2);
      oCtx.fill();

      // Earth Day/Night Terminator (Left half lit by sun, Right half dark)
      oCtx.fillStyle = "rgba(8, 12, 24, 0.82)"; // dark night shadow on right half
      oCtx.beginPath();
      oCtx.rect(cx, cy - earthRadius, earthRadius + 2, earthRadius * 2);
      oCtx.fill();

      // Night city lights on the dark half
      oCtx.fillStyle = "#fde047";
      oCtx.fillRect(cx + 6, cy - 4, 1.5, 1.5);
      oCtx.fillRect(cx + 10, cy + 3, 1.5, 1.5);
      oCtx.fillRect(cx + 4, cy + 8, 1.5, 1.5);

      oCtx.restore(); // restore Earth clip

      // Earth label
      oCtx.fillStyle = "#ffffff";
      oCtx.font = "bold 10px monospace";
      oCtx.textAlign = "center";
      oCtx.fillText("EARTH", cx, cy + earthRadius + 14);
      oCtx.restore();

      // THE MOON (Radius 12px)
      // CRITICAL 5TH GRADE TEACHING TRUTH:
      // In Space Orbit View, THE LEFT HALF IS ALWAYS 100% ILLUMINATED BY SUNLIGHT,
      // and THE RIGHT HALF IS ALWAYS DARK SHADOW!
      const moonR = 12;
      oCtx.save();

      // Subtle orbital glow
      oCtx.shadowColor = "rgba(255, 255, 255, 0.6)";
      oCtx.shadowBlur = 10;

      // Illuminated left semi-circle (facing Sun)
      oCtx.fillStyle = "#f8fafc";
      oCtx.beginPath();
      oCtx.arc(moonX, moonY, moonR, Math.PI / 2, (3 * Math.PI) / 2); // left half
      oCtx.closePath();
      oCtx.fill();

      // Dark shadow right semi-circle (facing away from Sun)
      oCtx.shadowBlur = 0;
      oCtx.fillStyle = "#1e293b";
      oCtx.beginPath();
      oCtx.arc(moonX, moonY, moonR, (3 * Math.PI) / 2, Math.PI / 2); // right half
      oCtx.closePath();
      oCtx.fill();

      // Moon outer outline ring
      oCtx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      oCtx.lineWidth = 1;
      oCtx.beginPath();
      oCtx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
      oCtx.stroke();

      // Draggable handle highlight
      oCtx.strokeStyle = "#00f0ff";
      oCtx.lineWidth = 2;
      oCtx.setLineDash([2, 2]);
      oCtx.beginPath();
      oCtx.arc(moonX, moonY, moonR + 4, 0, Math.PI * 2);
      oCtx.stroke();

      // Moon label
      oCtx.fillStyle = "#00f0ff";
      oCtx.font = "bold 9px monospace";
      oCtx.textAlign = "center";
      oCtx.fillText("MOON", moonX, moonY - moonR - 6);

      oCtx.restore();
    };

    // ================= RENDER TELESCOPE VIEW (FROM EARTH) =================
    const renderTelescopeView = () => {
      const w = telCanvas.width;
      const h = telCanvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const R = 75; // Moon disc radius

      tCtx.clearRect(0, 0, w, h);

      // Deep space circular background with starry sky
      tCtx.save();
      tCtx.beginPath();
      tCtx.arc(cx, cy, cx, 0, Math.PI * 2);
      tCtx.clip();

      const bgGrad = tCtx.createRadialGradient(cx, cy, 20, cx, cy, cx);
      bgGrad.addColorStop(0, "#080c18");
      bgGrad.addColorStop(1, "#02040a");
      tCtx.fillStyle = bgGrad;
      tCtx.fillRect(0, 0, w, h);

      // Background stars
      tCtx.fillStyle = "rgba(255, 255, 255, 0.6)";
      for (let i = 0; i < 30; i++) {
        const sx = (i * 37) % w;
        const sy = (i * 59) % h;
        tCtx.fillRect(sx, sy, (i % 4 === 0 ? 1.5 : 1), (i % 4 === 0 ? 1.5 : 1));
      }

      // Base dark disc of the Moon (nightside with subtle Earthshine)
      tCtx.save();
      tCtx.fillStyle = "#1e293b";
      tCtx.beginPath();
      tCtx.arc(cx, cy, R, 0, Math.PI * 2);
      tCtx.fill();

      // Dark basalt maria patches (Sea of Tranquility, etc.)
      tCtx.fillStyle = "#141c2b";
      tCtx.beginPath();
      tCtx.arc(cx - 20, cy - 15, 22, 0, Math.PI * 2);
      tCtx.arc(cx + 15, cy - 25, 18, 0, Math.PI * 2);
      tCtx.arc(cx - 10, cy + 20, 24, 0, Math.PI * 2);
      tCtx.arc(cx + 25, cy + 15, 16, 0, Math.PI * 2);
      tCtx.fill();

      // Atmospheric/illuminated lunar phase mask calculated mathematically from currentAngle:
      // Angle: 0° = New Moon (completely dark)
      // Angle: 90° = First Quarter (right 50% lit)
      // Angle: 180° = Full Moon (100% lit)
      // Angle: 270° = Third Quarter (left 50% lit)
      // Angle: 360° = New Moon
      const rad = currentAngle * (Math.PI / 180);

      // Draw lit portion using standard lunar phase geometry
      tCtx.save();
      tCtx.beginPath();

      if (currentAngle >= 0 && currentAngle <= 180) {
        // WAXING: Illuminated portion is on the RIGHT side
        // Right semi-circle: arc from -PI/2 to PI/2 with radius R
        tCtx.arc(cx, cy, R, -Math.PI / 2, Math.PI / 2, false);
        // Terminator ellipse: goes from PI/2 back to -PI/2 with x-radius R * cos(rad)
        const cosVal = Math.cos(rad);
        tCtx.ellipse(cx, cy, Math.abs(R * cosVal), R, 0, Math.PI / 2, -Math.PI / 2, cosVal > 0);
      } else {
        // WANING: Illuminated portion is on the LEFT side
        // Left semi-circle: arc from PI/2 to 3PI/2 with radius R
        tCtx.arc(cx, cy, R, Math.PI / 2, (3 * Math.PI) / 2, false);
        // Terminator ellipse: goes from 3PI/2 back to PI/2 with x-radius R * cos(rad)
        const cosVal = Math.cos(rad);
        tCtx.ellipse(cx, cy, Math.abs(R * cosVal), R, 0, (3 * Math.PI) / 2, Math.PI / 2, cosVal < 0);
      }

      tCtx.closePath();
      tCtx.clip(); // clip to the illuminated phase shape

      // Brilliant pearlescent lunar light gradient
      const litGrad = tCtx.createRadialGradient(cx - 15, cy - 15, 10, cx, cy, R);
      litGrad.addColorStop(0, "#ffffff");
      litGrad.addColorStop(0.7, "#f1f5f9");
      litGrad.addColorStop(1, "#cbd5e1");
      tCtx.fillStyle = litGrad;
      tCtx.fillRect(cx - R, cy - R, R * 2, R * 2);

      // Illuminated craters and surface texture
      tCtx.fillStyle = "#94a3b8";
      tCtx.beginPath();
      tCtx.arc(cx - 20, cy - 15, 20, 0, Math.PI * 2);
      tCtx.arc(cx + 15, cy - 25, 16, 0, Math.PI * 2);
      tCtx.arc(cx - 10, cy + 20, 22, 0, Math.PI * 2);
      tCtx.arc(cx + 25, cy + 15, 15, 0, Math.PI * 2);
      tCtx.fill();

      // Bright crater impact rings (e.g. Tycho with bright rays)
      tCtx.strokeStyle = "rgba(255, 255, 255, 0.7)";
      tCtx.lineWidth = 1.2;
      tCtx.beginPath();
      tCtx.arc(cx + 10, cy + 38, 5, 0, Math.PI * 2);
      tCtx.stroke();

      tCtx.restore(); // restore phase clip
      tCtx.restore(); // restore telescope circle clip
    };

    // Synchronized Render
    const renderAll = () => {
      renderSpaceOrbit();
      renderTelescopeView();
    };

    renderAll();
    updatePhaseHUD(currentAngle);

    // Interactive Slider Listener
    slider.addEventListener("input", (e) => {
      currentAngle = parseInt(e.target.value, 10);
      updatePhaseHUD(currentAngle);
      renderAll();
    });

    // 8 Quick Jump Buttons
    stage.querySelectorAll(".phase-jump-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        sounds.playClick();
        const targetAng = parseInt(btn.dataset.angle, 10);
        currentAngle = targetAng;
        slider.value = targetAng;
        updatePhaseHUD(targetAng);
        renderAll();
      });
    });

    // Auto Orbit Animation Loop
    const orbitTick = () => {
      if (isAutoPlaying) {
        currentAngle = (currentAngle + 0.4 * orbitSpeedMultiplier) % 360;
        slider.value = Math.round(currentAngle);
        updatePhaseHUD(currentAngle);
        renderAll();
      }
      this.moonOrbitAnimId = requestAnimationFrame(orbitTick);
    };

    autoBtn.addEventListener("click", () => {
      sounds.playClick();
      isAutoPlaying = !isAutoPlaying;
      if (isAutoPlaying) {
        playIcon.textContent = "⏸";
        playText.textContent = "Pause";
        autoBtn.classList.add("playing");
      } else {
        playIcon.textContent = "▶";
        playText.textContent = "Auto Orbit";
        autoBtn.classList.remove("playing");
      }
    });

    speedBtn.addEventListener("click", () => {
      sounds.playClick();
      orbitSpeedMultiplier = orbitSpeedMultiplier === 1 ? 2 : 1;
      speedBtn.textContent = `${orbitSpeedMultiplier}x Speed`;
    });

    // Draggable Moon directly on Orbit Canvas
    let isDraggingMoon = false;
    const handlePointerDown = (e) => {
      const rect = orbitCanvas.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      const cx = orbitCanvas.width / 2;
      const cy = orbitCanvas.height / 2;
      const distFromCenter = Math.hypot(px - cx, py - cy);

      // If clicked near the orbital ring (between 70 and 130 px from center)
      if (distFromCenter >= 60 && distFromCenter <= 140) {
        isDraggingMoon = true;
        // Calculate angle: in our coordinate system, angle = 0 is left (-1, 0)
        const dx = px - cx;
        const dy = py - cy;
        const angDeg = (Math.round((Math.atan2(dy, -dx) * 180) / Math.PI) + 360) % 360;
        currentAngle = angDeg;
        slider.value = angDeg;
        updatePhaseHUD(angDeg);
        renderAll();
      }
    };

    const handlePointerMove = (e) => {
      if (!isDraggingMoon) return;
      const rect = orbitCanvas.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      const cx = orbitCanvas.width / 2;
      const cy = orbitCanvas.height / 2;
      const dx = px - cx;
      const dy = py - cy;
      const angDeg = (Math.round((Math.atan2(dy, -dx) * 180) / Math.PI) + 360) % 360;
      currentAngle = angDeg;
      slider.value = angDeg;
      updatePhaseHUD(angDeg);
      renderAll();
    };

    const handlePointerUp = () => {
      isDraggingMoon = false;
    };

    orbitCanvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    this.moonOrbitAnimId = requestAnimationFrame(orbitTick);
    this._resumeSimFn = () => {
      if (!this.moonOrbitAnimId && this.currentLabType === "moon") {
        this.moonOrbitAnimId = requestAnimationFrame(orbitTick);
      }
    };
  }

  // ================= LAB: PLANT CELL BIOLOGY =================
  loadPlantCellLab(stage, topic) {
    stage.innerHTML = `
      <div class="plant-cell-interactive-wrap">
        <div class="cell-diagram-svg-container">
          <svg class="cell-svg-canvas" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cellWallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#15803d" />
                <stop offset="100%" stop-color="#166534" />
              </linearGradient>
              <linearGradient id="cytoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#064e3b" stop-opacity="0.85" />
                <stop offset="100%" stop-color="#022c22" stop-opacity="0.95" />
              </linearGradient>
              <linearGradient id="vacuoleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8" />
                <stop offset="50%" stop-color="#0284c7" stop-opacity="0.7" />
                <stop offset="100%" stop-color="#0369a1" stop-opacity="0.88" />
              </linearGradient>
              <radialGradient id="nucleusGrad" cx="40%" cy="40%" r="50%">
                <stop offset="0%" stop-color="#c084fc" />
                <stop offset="70%" stop-color="#7e22ce" />
                <stop offset="100%" stop-color="#581c87" />
              </radialGradient>
              <radialGradient id="chloroGrad" cx="40%" cy="40%" r="50%">
                <stop offset="0%" stop-color="#4ade80" />
                <stop offset="100%" stop-color="#15803d" />
              </radialGradient>
              <linearGradient id="mitoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fb923c" />
                <stop offset="100%" stop-color="#c2410c" />
              </linearGradient>
            </defs>

            <!-- 8. CELL WALL -->
            <polygon id="path-org-8" class="cell-organelle-path" points="40,25 560,25 580,70 580,330 560,375 40,375 20,330 20,70" fill="url(#cellWallGrad)" stroke="#4ade80" stroke-width="5" />

            <!-- 1. CELL MEMBRANE & CYTOPLASM -->
            <polygon id="path-org-1" class="cell-organelle-path" points="52,38 548,38 565,78 565,322 548,362 52,362 35,322 35,78" fill="url(#cytoGrad)" stroke="#22c55e" stroke-width="3" stroke-dasharray="8 4" />

            <!-- 9. CENTRAL VACUOLE -->
            <path id="path-org-9" class="cell-organelle-path" d="M 170,140 C 130,160 120,240 150,290 C 180,340 320,340 370,310 C 420,280 430,220 400,180 C 370,140 280,120 220,130 Z" fill="url(#vacuoleGrad)" stroke="#7dd3fc" stroke-width="2" />
            <text x="220" y="240" fill="#e0f2fe" font-size="12" font-weight="bold" opacity="0.6">Central Vacuole (Water Storage)</text>

            <!-- 6. NUCLEUS & NUCLEOLUS -->
            <g id="path-org-6" class="cell-organelle-path">
              <circle cx="340" cy="110" r="48" fill="url(#nucleusGrad)" stroke="#e9d5ff" stroke-width="2.5" />
              <circle cx="330" cy="115" r="18" fill="#3b0764" stroke="#a855f7" stroke-width="2" />
              <circle cx="350" cy="100" r="10" fill="#581c87" opacity="0.8" />
            </g>

            <!-- 4. SMOOTH ER -->
            <g id="path-org-4" class="cell-organelle-path">
              <path d="M 395,95 Q 430,75 465,100 Q 435,115 400,120" fill="none" stroke="#c084fc" stroke-width="5" stroke-linecap="round" />
              <path d="M 405,80 Q 445,60 480,85 Q 445,100 410,105" fill="none" stroke="#c084fc" stroke-width="4" stroke-linecap="round" />
            </g>

            <!-- 7. ROUGH ER & RIBOSOMES -->
            <g id="path-org-7" class="cell-organelle-path">
              <path d="M 285,100 Q 250,75 220,95 Q 255,110 290,115" fill="none" stroke="#a855f7" stroke-width="6" stroke-linecap="round" />
              <circle cx="270" cy="90" r="2.5" fill="#fde047" />
              <circle cx="250" cy="85" r="2.5" fill="#fde047" />
              <circle cx="235" cy="95" r="2.5" fill="#fde047" />
              <circle cx="260" cy="102" r="2.5" fill="#fde047" />
              <circle cx="275" cy="108" r="2.5" fill="#fde047" />
            </g>

            <!-- 10. CHLOROPLASTS -->
            <g id="path-org-10" class="cell-organelle-path">
              <ellipse cx="110" cy="90" rx="34" ry="20" transform="rotate(-15 110 90)" fill="url(#chloroGrad)" stroke="#86efac" stroke-width="2" />
              <line x1="90" y1="90" x2="130" y2="90" stroke="#166534" stroke-width="2" />
              <ellipse cx="105" cy="315" rx="32" ry="18" transform="rotate(20 105 315)" fill="url(#chloroGrad)" stroke="#86efac" stroke-width="2" />
              <ellipse cx="480" cy="320" rx="32" ry="18" transform="rotate(-10 480 320)" fill="url(#chloroGrad)" stroke="#86efac" stroke-width="2" />
            </g>

            <!-- 3. MITOCHONDRIA -->
            <g id="path-org-3" class="cell-organelle-path">
              <rect x="75" y="180" width="46" height="24" rx="12" transform="rotate(-40 98 192)" fill="url(#mitoGrad)" stroke="#fdba74" stroke-width="2" />
              <path d="M 85,188 Q 98,182 110,195" fill="none" stroke="#7c2d12" stroke-width="2" />
              <rect x="470" y="160" width="46" height="24" rx="12" transform="rotate(35 493 172)" fill="url(#mitoGrad)" stroke="#fdba74" stroke-width="2" />
            </g>

            <!-- 5. GOLGI BODY -->
            <g id="path-org-5" class="cell-organelle-path">
              <path d="M 450,225 Q 480,215 510,230" fill="none" stroke="#f43f5e" stroke-width="5" stroke-linecap="round" />
              <path d="M 455,238 Q 485,228 515,243" fill="none" stroke="#f43f5e" stroke-width="5" stroke-linecap="round" />
              <circle cx="530" cy="235" r="4" fill="#fda4af" />
              <circle cx="525" cy="255" r="5" fill="#fda4af" />
            </g>

            <!-- 10 NUMBERED PINS -->
            <g class="cell-pins-group">
              <g class="cell-pin-marker" data-num="1" transform="translate(48, 55)"><circle cx="0" cy="0" r="14" fill="#10b981" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text></g>
              <g class="cell-pin-marker" data-num="2" transform="translate(170, 75)"><circle cx="0" cy="0" r="14" fill="#059669" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text></g>
              <g class="cell-pin-marker" data-num="3" transform="translate(98, 192)"><circle cx="0" cy="0" r="14" fill="#ea580c" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text></g>
              <g class="cell-pin-marker" data-num="4" transform="translate(440, 85)"><circle cx="0" cy="0" r="14" fill="#8b5cf6" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">4</text></g>
              <g class="cell-pin-marker" data-num="5" transform="translate(485, 238)"><circle cx="0" cy="0" r="14" fill="#e11d48" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">5</text></g>
              <g class="cell-pin-marker" data-num="6" transform="translate(340, 110)"><circle cx="0" cy="0" r="14" fill="#6d28d9" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">6</text></g>
              <g class="cell-pin-marker" data-num="7" transform="translate(255, 95)"><circle cx="0" cy="0" r="14" fill="#9333ea" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">7</text></g>
              <g class="cell-pin-marker" data-num="8" transform="translate(26, 260)"><circle cx="0" cy="0" r="14" fill="#15803d" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">8</text></g>
              <g class="cell-pin-marker" data-num="9" transform="translate(270, 260)"><circle cx="0" cy="0" r="14" fill="#0284c7" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">9</text></g>
              <g class="cell-pin-marker" data-num="10" transform="translate(110, 90)"><circle cx="0" cy="0" r="14" fill="#16a34a" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">10</text></g>
            </g>
          </svg>
        </div>

        <!-- Organelle Inspect HUD Card -->
        <div class="plant-cell-hud-card" id="plant-cell-hud">
          <div class="hud-organelle-header">
            <span class="hud-organelle-title" id="hud-title">Click Any Organelle (1–10)</span>
            <span class="hud-organelle-formula" id="hud-formula">Interactive Plant Biology</span>
          </div>
          <p class="hud-organelle-desc" id="hud-desc">
            Explore the 10 essential structures of the plant cell from your worksheet! Click or hover any numbered pin on the diagram above to inspect its scientific explanation.
          </p>
          <div class="hud-actions-row">
            <span style="font-size: 0.75rem; color: var(--text-muted);">Source: 5th Grade Plant Cell Worksheet</span>
            <button class="btn-jump-square" id="hud-jump-btn" style="display: none;">
              <span>🔍 Jump to Square Notes</span>
            </button>
          </div>
        </div>
      </div>
    `;

    const hudTitle = document.getElementById("hud-title");
    const hudFormula = document.getElementById("hud-formula");
    const hudDesc = document.getElementById("hud-desc");
    const hudJumpBtn = document.getElementById("hud-jump-btn");
    let activeSqNum = null;

    const selectOrganelle = (num) => {
      // Look up organelle info from plant cell topic or current topic
      const plantTopic = this.notes.find((n) => n.id === "science-plant-cell") || topic;
      const sq = plantTopic.properties?.find((p) => p.num === num);
      if (!sq) return;
      activeSqNum = num;

      sounds.playClick();

      if (hudTitle) hudTitle.textContent = `${sq.num}. ${sq.name.replace(/^\d+\.\s*/, "")}`;
      if (hudFormula) hudFormula.textContent = sq.formula;
      if (hudDesc) hudDesc.textContent = sq.explanation;
      if (hudJumpBtn) {
        hudJumpBtn.style.display = "inline-flex";
        hudJumpBtn.innerHTML = `<span>🔍 Jump to Square #${sq.num}</span>`;
      }

      document.querySelectorAll(".cell-pin-marker").forEach((pin) => {
        pin.classList.toggle("active", parseInt(pin.dataset.num, 10) === num);
      });

      document.querySelectorAll(".cell-organelle-path").forEach((p) => p.classList.remove("highlighted"));
      const targetPath = document.getElementById(`path-org-${num}`);
      if (targetPath) targetPath.classList.add("highlighted");
    };

    stage.querySelectorAll(".cell-pin-marker").forEach((pin) => {
      pin.addEventListener("click", () => {
        const num = parseInt(pin.dataset.num, 10);
        selectOrganelle(num);
      });
    });

    if (hudJumpBtn) {
      hudJumpBtn.addEventListener("click", () => {
        if (!activeSqNum) return;
        this.switchModalTab("notes");
        setTimeout(() => {
          const card = document.getElementById(`concept-square-${activeSqNum}`);
          if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            card.classList.add("highlighted");
            setTimeout(() => card.classList.remove("highlighted"), 1500);
          }
        }, 150);
      });
    }

    setTimeout(() => selectOrganelle(1), 250);
  }

  // Practice Quiz
  renderModalQuiz(topic) {
    const container = document.getElementById("modal-quiz-container");
    if (!container) return;
    container.innerHTML = "";

    let questions = [];

    // 1. If topic has predefined quiz (like our 10 Plant Cell worksheet questions), use them
    if (Array.isArray(topic.quiz) && topic.quiz.length > 0) {
      questions = [...topic.quiz];
    } 
    // 2. Otherwise generate questions based directly on the teacher explanation notes
    else if (topic.properties && topic.properties.length > 0) {
      questions = topic.properties.map((p, idx) => {
        const correctName = p.name.replace(/^\d+\.\s*/, '');
        const otherNames = topic.properties
          .filter((_, i) => i !== idx)
          .map(o => o.name.replace(/^\d+\.\s*/, ''));
        const distractors = otherNames.slice(0, 3);
        while (distractors.length < 3) distractors.push("Cell Component");
        const options = [correctName, ...distractors].sort(() => Math.random() - 0.5);
        return {
          q: `According to the teacher explanation: "${p.explanation}" Which part is this?`,
          options: options,
          ans: options.indexOf(correctName),
          why: `${correctName} definition: "${p.explanation}"`
        };
      });
    }

    if (questions.length === 0) {
      questions = [
        {
          q: `What is the core principle of ${topic.title}?`,
          options: [topic.coreFormula, "Matter disappears completely", "Energy cannot be transformed", "Variables do not matter"],
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
          if (fb) {
            fb.classList.remove("hidden");
            fb.style.color = "#86efac";
            fb.textContent = `🎉 Correct! ${qData.why}`;
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

  printCheatSheet(topicId) {
    const topic = this.notes.find((t) => t.id === topicId) || this.notes[0];
    const printContent = document.getElementById("printable-content");
    if (!printContent) return;

    if (!topic) {
      alert("No notes available to print. Please add a science note first!");
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
            <h3 style="font-size: 1.05rem; margin-bottom: 4px;">#${p.num} — ${formatBulletText(p.name)}</h3>
            <div style="font-weight: bold; color: #1e293b;">Formula / Rule: ${formatBulletText(p.formula)}</div>
            <div style="margin: 4px 0;">${formatBulletText(p.explanation)}</div>
            <div style="color: #475569; font-size: 0.95rem;">Observation: ${formatBulletText(p.example)}</div>
            ${p.trick ? `<div style="color: #d97706; font-size: 0.9rem;">💡 ${formatBulletText(p.trick)}</div>` : ""}
          </div>
        `;
      });
    }

    printContent.innerHTML = html;
    window.print();
  }

  setupEventListeners() {
    // Nav links
    const navLinks = document.querySelectorAll(".nav-link[data-scroll]");
    navLinks.forEach((btn) => {
      btn.addEventListener("click", () => {
        sounds.playClick();
        navLinks.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const targetId = btn.dataset.scroll;
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });

    // Scroll spy (RAF throttled to eliminate layout thrashing)
    let scrollRafPending = false;
    const notesSec = document.getElementById("notes-section");
    const homeBtn = document.getElementById("nav-btn-home");
    const notesBtn = document.getElementById("nav-btn-notes");
    window.addEventListener("scroll", () => {
      if (!scrollRafPending) {
        scrollRafPending = true;
        requestAnimationFrame(() => {
          if (notesSec && homeBtn && notesBtn) {
            const rect = notesSec.getBoundingClientRect();
            if (rect.top <= 200) {
              notesBtn.classList.add("active");
              homeBtn.classList.remove("active");
            } else {
              homeBtn.classList.add("active");
              notesBtn.classList.remove("active");
            }
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
    document.getElementById("modal-tab-interactive")?.addEventListener("click", () => this.switchModalTab("interactive"));
    document.getElementById("modal-tab-practice")?.addEventListener("click", () => this.switchModalTab("practice"));

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

    // Sound toggle
    const soundToggle = document.getElementById("btn-sound-toggle");
    const soundOn = document.getElementById("sound-icon-on");
    const soundOff = document.getElementById("sound-icon-off");
    if (soundToggle) {
      soundToggle.addEventListener("click", () => {
        sounds.enabled = !sounds.enabled;
        if (soundOn && soundOff) {
          soundOn.classList.toggle("hidden", !sounds.enabled);
          soundOff.classList.toggle("hidden", sounds.enabled);
        }
        if (sounds.enabled) sounds.playClick();
      });
    }

    // Cheat Sheet from Nav
    document.getElementById("btn-cheat-sheet")?.addEventListener("click", () => {
      sounds.playClick();
      if (this.notes.length > 0) {
        this.printCheatSheet(this.notes[0]?.id);
      } else {
        alert("Add a science note first to generate your cheat sheet!");
      }
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

    document.getElementById("feedback-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      sounds.playSuccess();
      this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 50);
      alert("Thank you! Your science feedback was recorded.");
      fbModal?.classList.add("hidden");
    });

    // Replay loader
    document.getElementById("replay-loader-btn")?.addEventListener("click", () => {
      this.replayLoader();
    });

    // Easter egg on "Made with ❤️ from Jeeva R."
    document.getElementById("author-credit-trigger")?.addEventListener("click", () => {
      sounds.playSuccess();
      const rect = document.getElementById("author-credit-trigger")?.getBoundingClientRect();
      if (rect) this.confetti.burst(rect.left + rect.width / 2, rect.top, 50);
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
        if (fb) fb.textContent = "🎉 Brilliant! A fossil preserves prehistoric life inside rock!";
      } else {
        sounds.playClick();
        if (fb) fb.textContent = "Not quite! Think of prehistoric remains preserved in stone...";
      }
    });
  }
}

// ================= SCIENCE.IO AI CHATBOT =================
class Chatbot {
  constructor() {
    this.bubble = document.getElementById("ai-chat-bubble");
    this.window = document.getElementById("ai-chat-window");
    this.closeBtn = document.getElementById("ai-close-btn");
    this.input = document.getElementById("ai-chat-input");
    this.sendBtn = document.getElementById("ai-send-btn");
    this.messagesContainer = document.getElementById("ai-chat-messages");

    if (this.bubble && this.window) {
      this.init();
    }
  }

  init() {
    this.bubble.addEventListener("click", () => this.toggleChat());
    this.closeBtn.addEventListener("click", () => this.toggleChat());
    this.sendBtn.addEventListener("click", () => this.handleSend());
    this.input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.handleSend();
    });
  }

  toggleChat() {
    if (this.window.classList.contains("hidden")) {
      this.window.classList.remove("hidden");
      this.bubble.style.transform = "scale(0) rotate(-90deg)";
      setTimeout(() => { this.bubble.style.display = "none"; }, 300);
      sounds.playClick();
      this.input.focus();
    } else {
      this.window.classList.add("hidden");
      this.bubble.style.display = "flex";
      setTimeout(() => { this.bubble.style.transform = "scale(1) rotate(0deg)"; }, 10);
      sounds.playClick();
    }
  }

  handleSend() {
    const text = this.input.value.trim();
    if (!text) return;

    this.appendMessage(text, "user-msg");
    this.input.value = "";
    sounds.playClick();

    setTimeout(() => {
      this.appendRawHTML('<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>', "ai-msg");

      setTimeout(() => {
        if (this.messagesContainer.lastChild) {
          this.messagesContainer.lastChild.remove();
        }

        const cleanT = text.trim().toLowerCase().replace(/\s+/g, ' ');
        let replyHTML = "";

        // Secret Admin Passcode Clearance: ONLY way to open Vault Passcode Entry Area
        if (cleanT === "access j33v4") {
          replyHTML = `<div class="msg-bubble" style="background: rgba(6, 182, 212, 0.2); border-color: #06b6d4; color: #38bdf8; font-weight: bold;">Security Clearance Verified. Opening Vault Passcode Entry Area...</div>`;
          setTimeout(() => {
            if (window.app && window.app.vault) {
              window.app.vault.isUnlocked = false;
              window.app.vault.open();
            }
            const chatWin = document.getElementById("ai-chat-window");
            if (chatWin) chatWin.classList.add("hidden");
            sounds.playSuccess();
          }, 800);
        }
        // Save / Publish question
        else if (t.includes("save") || t.includes("publish") || t.includes("phone") || t.includes("database") || t.includes("different device")) {
          replyHTML = `
            <div class="msg-bubble">
              <strong>How to save notes across all devices:</strong><br>
              1. Add and architect your notes in the <strong>Admin Vault</strong>.<br>
              2. Click <strong>🚀 Publish All Notes to Cloud</strong> inside the Vault.<br>
              3. All your notes are instantly uploaded to the secure science.io Cloud Database (zero credit drain, 100% free)!<br>
              4. When you open science.io on your phone, tablet, or another computer, your notes will be right there!
            </div>
          `;
        }
        // Matter / Physical science
        else if (t.includes("matter") || t.includes("solid") || t.includes("liquid") || t.includes("gas") || t.includes("atom")) {
          replyHTML = `<div class="msg-bubble">In 5th grade science, matter exists in 3 primary states: <strong>Solid</strong> (definite shape & volume), <strong>Liquid</strong> (flows to take container shape), and <strong>Gas</strong> (expands rapidly). Atoms are the fundamental building blocks of all matter!</div>`;
        }
        // Photosynthesis / Life science
        else if (t.includes("photosynthesis") || t.includes("plant") || t.includes("cell") || t.includes("ecosystem")) {
          replyHTML = `<div class="msg-bubble"><strong>Photosynthesis Equation:</strong><br><code>6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ (Glucose) + 6O₂ (Oxygen)</code><br>Plants use solar energy in chloroplasts to create food for themselves and oxygen for animals!</div>`;
        }
        // Scientific method
        else if (t.includes("scientific method") || t.includes("hypothesis") || t.includes("experiment") || t.includes("variable")) {
          replyHTML = `<div class="msg-bubble">The 5 steps of the <strong>Scientific Method</strong> are:<br>1. Ask a Question<br>2. Form a Hypothesis (If... then...)<br>3. Conduct a Controlled Experiment (change only 1 variable!)<br>4. Collect & Analyze Data<br>5. Draw Conclusions!</div>`;
        }
        // Creator Bio
        else if (t.includes("who created") || t.includes("developer") || t.includes("creator") || t.includes("who made")) {
          replyHTML = `
            <div class="creator-plaque">
              <div class="plaque-title">Jeeva Raghavan Developer</div>
              I built science.io to make 5th-grade science vibrant, tactile, and accessible across every computer and mobile device. Crafted with clean code and high-tech neon aesthetics!
            </div>
          `;
        }
        // Passcode Protection
        else if (t.includes("passcode") || t.includes("password") || t.includes("vault code") || t.includes("pin")) {
          replyHTML = `<div class="msg-bubble" style="background: rgba(255, 55, 95, 0.2); border-color: #FF375F; color: #FF375F; font-weight: bold;">The Admin Vault requires confidential passcode clearance authorized by the site administrator. Passcodes are strictly classified!</div>`;
        }
        // Fallback
        else {
          replyHTML = `<div class="msg-bubble">I am the science.io assistant! Ask me about 5th grade science concepts (Matter, Ecosystems, the Scientific Method), or how to publish your notes across all your devices!</div>`;
        }

        this.appendRawHTML(replyHTML, "ai-msg");
        sounds.playSuccess();
      }, 1000);
    }, 300);
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
  new Chatbot();

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
    <button class="mk-btn">⚛️</button>
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
