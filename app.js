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
        "example": "Functions as the master command center and architectural DNA library. For example, its chromosomes store the complete master recipe manual instructing the cell when to grow, repair damage, and divide; meanwhile, the dense nucleolus inside acts like a machine shop assembling ribosomes.",
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
    "description": "A complete breakdown of plant cell anatomy, specialized organelles (Cell Wall, Chloroplast, Central Vacuole), and cellular machinery."
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
        "example": "Operates as the cellular powerhouse and energy turbine. For example, during gym class when you sprint, your heart and muscle cell mitochondria consume the sugar from your meals and oxygen from your lungs to generate millions of ATP energy fuel sparks every second.",
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
        "example": "Functions as the master headquarters holding your genetic code (DNA). For example, it contains your unique hereditary chromosomes that determine eye color, hair type, and instruct white blood cells how to fight germs; the nucleolus inside manufactures ribosome workers.",
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
        "example": "Functions through teamwork and division of labor between specialized cells. For example, inside a human body or an oak tree, billions of specialized cells work together: red blood cells deliver oxygen, muscle cells contract to create motion, and root cells absorb water—no single cell could survive alone, but together they form living tissues, organs, and body systems that keep the entire organism alive!",
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
        "example": "Functions as a shape-shifting crawler and microscopic predator. For example, when it moves or hunts, it extends its fluid cytoplasm forward into temporary bulging arms called pseudopodia ('false feet') to crawl over rocks, and wraps two pseudopodia arms completely around bacteria to engulf and digest them inside a food vacuole.",
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
        "example": "Functions as an unbreakable, self-beating hydraulic pump. For example, the specialized muscular walls of your heart squeeze and relax over 100,000 times every single day without ever stopping to rest, continuously pushing blood through thousands of miles of blood vessels.",
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
        "example": "Functions as an ultra-delicate acoustic amplifier in your middle ear. For example, this tiny 2-to-3-millimeter stirrup-shaped bone vibrates when sound waves hit your eardrum, magnifying sound vibrations and transmitting them directly into the fluid-filled cochlea so your brain can hear whispers and music.",
        "formula": "NO FORMULA",
        "explanation": "The smallest bone in your body is the stapes, and it is 2 to 3 millimeters long."
      },
      {
        "num": 5,
        "name": "What are the different jobs of the vertebrae?",
        "trick": "5th Grade Science Concept",
        "example": "Functions as a flexible armored pillar and protective cable conduit. For example, the 33 stacked ring-shaped bones of your spine support the entire heavy weight of your upper body, bend so you can touch your toes, and form a hollow armored tunnel shielding your delicate spinal cord from injury.",
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
        "example": "Functions as the initial crushing mill and chemical prep kitchen. For example, your sharp incisors slice an apple while molars grind it down, and saliva glands squirt amylase enzymes that instantly start dissolving starches into simple sugars before you even swallow.",
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
        "example": "Functions as the master nutrient absorption highway. For example, along its 20-foot winding length, microscopic finger-like projections soak up glucose, vitamins, and minerals directly into your bloodstream over 4 to 8 hours to nourish your cells.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "(Tube that is 20 feet long. Food stays in your small intestine for 4 to 8 hours.)\n• Continues to break down food   \n• Absorbs nutrients into the blood\n"
      },
      {
        "num": 5,
        "name": "Large Intestine",
        "trick": "5th Grade Science Concept",
        "example": "Operates as a water reclamation and waste compaction facility. For example, as leftover liquid waste moves through over 10 to 12 hours, the large intestine reabsorbs almost all the water back into your body so you don't dehydrate, compacting leftovers into solid waste.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "(Tube that is 5 feet long. Gets waste from the small intestine. Waste stays for 10 to 12 hours.)\n• Absorbs (soaks up) water from the remaining food\n• Contains bacteria that breaks down food\n"
      },
      {
        "num": 6,
        "name": "Rectum",
        "trick": "5th Grade Science Concept",
        "example": "Functions as a temporary holding vault with sensory stretch receptors. For example, it stores compacted stool until sensory nerves alert your brain that it is time to visit the bathroom, then coordinates with the anal sphincter to release it cleanly.",
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
        "example": "Operates as a high-powered enzyme laboratory and blood-sugar regulator. For example, it pumps digestive juices that neutralize stomach acid and produces insulin hormones that unlock your cell doors so glucose sugar can leave the bloodstream and enter your cells.",
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
        "example": "Functions as a bustling community of trillions of helpful friendly bacteria. For example, these microbes digest stubborn fiber that your human enzymes cannot break down, manufacture essential Vitamin K for blood clotting, and fight off dangerous food poisoning germs.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Gut flora are bacteria inside your gut. It makes up 30% of your body weight and it helps turn food into nutrients.  "
      },
      {
        "num": 13,
        "name": "Who is a gasteroentologist?",
        "trick": "5th Grade Science Concept",
        "example": "Operates as a specialized medical detective and physician for the digestive tract. For example, they diagnose and treat stomach ulcers, food allergies, acid reflux, and bowel conditions using cameras and medical tests to keep your gut healthy.",
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
        "example": "Functions as an honorable battlefield collection of fallen immune soldiers. For example, when you scrape your knee and bacteria invade, white blood cells rush in and destroy the invaders; the resulting white fluid is made of dead bacteria, spent white blood cells, and damaged tissue cells.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Pus is dead skin cells that form when you get a cut and bacteria get in. Pus is produced from cells."
      },
      {
        "num": 3,
        "name": "CO2",
        "trick": "5th Grade Science Concept",
        "example": "Functions as a gaseous combustion exhaust byproduct of cellular respiration. For example, every time your cells burn glucose for energy, carbon dioxide gas builds up in your blood; your bloodstream carries it to your lungs, where you exhale it out into the air with every breath.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "When you breathe in, it goes through your lungs and you breathe out CO2"
      },
      {
        "num": 4,
        "name": "Poop",
        "trick": "5th Grade Science Concept",
        "example": "Functions as the elimination of unabsorbed solid food remnants, dead cells, and gut bacteria. For example, getting rid of solid bowel movements every 24 hours prevents toxic buildup and keeps your colon healthy, light, and clear.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Takes 24 hours to get rid of. Getting rid of it keeps you healthy."
      },
      {
        "num": 5,
        "name": "Fart",
        "trick": "5th Grade Science Concept",
        "example": "Functions as the natural pressure relief release of intestinal gases. For example, when gut bacteria ferment and digest hard-to-break-down beans and broccoli, harmless gases like nitrogen and methane build up pressure until they safely escape as a burp or a flatulence release.",
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
        "example": "Functions as a sticky, germ-trapping biological flypaper lining your airways. For example, when you inhale dust, soot, or pollen, sticky nasal mucus traps the foreign particles before they can reach your lungs, and sweeps them harmlessly away.",
        "formula": "It can protect you by keeping germs and dirt out of your body.",
        "explanation": "Mucus protects you by catching any dirt from entering your nose. When you get sick, mucus membranes go overload."
      },
      {
        "num": 2,
        "name": "Vomit",
        "trick": "5th Grade Science Concept",
        "example": "Functions as an emergency biological eject button. For example, if you accidentally swallow spoiled food or a dangerous toxin, your stomach senses the poison and violently reverses peristalsis to forcefully expel the contents before the poison can be absorbed into your blood.",
        "formula": "It can protect you by keeping germs and dirt out of your body.",
        "explanation": "When you eat too much food it wants to throw up. You vomit because your body wants to get rid of something."
      },
      {
        "num": 3,
        "name": "Earwax",
        "trick": "5th Grade Science Concept",
        "example": "Functions as a waterproof, antimicrobial trap door lining your ear canal. For example, sticky cerumen traps dirt, insects, and fungal spores from reaching your delicate eardrum, while natural antibacterial oils keep the ear canal skin moisturized and germ-free.",
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
        "example": "Functions as an evaporative cooling air conditioning system. For example, when your body temperature rises during sports on a hot day, sweat glands release droplets of water onto your skin; as the liquid sweat evaporates into the air, it pulls heat away from your skin, cooling you down.",
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
        "example": "Functions as a multi-organ detox cleanup network working together to flush toxic byproducts. For example, lungs exhale water vapor and carbon dioxide gas, sweat glands in the skin excrete excess salts and heat, and the liver filters harmful chemicals and medications out of the bloodstream.",
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
        "example": "Functions as an expandable, stretchy muscular holding tank. For example, its balloon-like elastic walls stretch to comfortably store up to two cups of urine until sensory nerves tell your brain it is time to empty it.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Muscular organ that stores urine until it passes out of the body"
      },
      {
        "num": 5,
        "name": "Urethra",
        "trick": "5th Grade Science Concept",
        "example": "Functions as the final exit pipeline and valve system. For example, a ring of sphincter muscle relaxes to allow stored urine to flow smoothly out of the bladder and leave the body cleanly during urination.",
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
        "example": "Functions as a dual-purpose throat intersection corridor. For example, this muscular hallway guides inhaled air from your nasal cavity down to the larynx, and guides swallowed food from your mouth into the esophagus.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Muscular passage from the nasal cavity to the larynx. "
      },
      {
        "num": 4,
        "name": "Trachea",
        "trick": "5th Grade Science Concept",
        "example": "Operates as a reinforced, non-collapsible windpipe corridor. For example, tough C-shaped rings of cartilage hold your trachea permanently wide open like a vacuum cleaner hose, ensuring air can flow freely into your chest even when your neck bends.",
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
        "example": "Functions as the body's internal balancing thermostat. For example, whether you are in a freezing snowstorm or a hot desert, homeostasis automatically regulates internal body temperature around 98.6°F, balances blood sugar, and signals hunger and thirst to keep you alive and stable.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Key to life and failures in homeostasis can lead to disease\n• Keeping things constant\n• Hunger & Thirst are examples\n\n\nHomeostasis includes the regulation of\n\n• oxygen & carbon dioxide levels \n• nutrient & waste product levels\n• water balance\n• body temperature\n"
      },
      {
        "num": 2,
        "name": "Pituitary Gland",
        "trick": "5th Grade Science Concept",
        "example": "Operates as the master endocrine conductor and hormone command center. For example, this pea-sized gland at the base of the brain produces human growth hormone to make your bones grow taller and sends chemical orders to all other hormone glands.",
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
        "example": "Operates as the metabolic throttle and energy speedometer. For example, this butterfly-shaped gland on your neck secretes thyroxine to control how fast your cells burn calories and convert food into active energy versus storing it.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Front of the lower neck\n• Controls the rate at which our cells burn food to produce energy"
      },
      {
        "num": 5,
        "name": "Adrenal Gland",
        "trick": "5th Grade Science Concept",
        "example": "Functions as the emergency adrenaline turbocharger. For example, if you encounter sudden danger or prepare for a race, these glands on top of your kidneys dump adrenaline into your blood, making your heart race, pupils dilate, and muscles surge with instant fight-or-flight power.",
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
        "example": "Functions as a high-precision chemical blood glucose monitor and dispenser. For example, after eating lunch, it secretes insulin to help cells absorb sugar from the blood; between meals, it secretes glucagon to release stored liver sugar, keeping energy perfectly steady.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Long flat gland\n• Produces insulin and glucagon\n• Helps controls the levels of glucose in the body"
      },
      {
        "num": 8,
        "name": "Summary",
        "trick": "5th Grade Science Concept",
        "example": "Operates as a wireless chemical messaging network controlling long-term body processes. For example, while nerves send instant electrical sparks, endocrine glands release slow-acting hormone messengers through the bloodstream to regulate mood, growth, metabolism, and sleep under hypothalamus supervision.",
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
        "example": "Functions as the body's master high-speed electrical communication grid. For example, it senses touch, light, and temperature from sensory organs, processes that data in the brain in milliseconds, and fires instant motor commands to keep you balanced, reacting, and safe.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Recieves info from inside & outside of the body\n• Controls & directs body's functions and responses\n• Helps maintain homeostasis"
      },
      {
        "num": 2,
        "name": "Divided into 2 parts",
        "trick": "5th Grade Science Concept",
        "example": "Operates as an integrated headquarters and regional dispatch system. For example, the Central Nervous System (brain and spinal cord) analyzes decisions and stores memories, while the Peripheral Nervous System runs nerve cables to every fingertip and toe.",
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
        "example": "Operates as a high-capacity armored fiber-optic data cable. For example, millions of nerve fibers packed inside your spine transmit electrical signals between your brain and limbs at 250 miles per hour, and coordinate lightning-fast reflexes (like yanking your hand off a hot stove) before pain even reaches the brain!",
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
        "example": "Functions as the master biological supercomputer containing 100 billion neurons. For example, it processes every thought, controls breathing, stores childhood memories, coordinates complex sports movements, and generates dreams while you sleep.",
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
        "example": "Operates as the conscious thinking, problem-solving, and sensory processing hub. For example, when you read a book, solve a math problem, create art, or remember your friend's face, your cerebrum's hemispheres are actively firing.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Coordinates\n• Thinking and learning\n• Creativity\n• Five Senses\n• Memory and Emotion\n• Problem Solving"
      },
      {
        "num": 9,
        "name": "Cerebellum",
        "trick": "5th Grade Science Concept",
        "example": "Functions as the athletic autopilot and balance coordinator. For example, when you ride a bicycle, jump rope, or play piano, the cerebellum fine-tunes your muscle timing and posture so you move smoothly without tripping.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• Most voluntary muscles movements\n• Helps maintain balance and muscle tone"
      },
      {
        "num": 10,
        "name": "Brain Stem",
        "trick": "5th Grade Science Concept",
        "example": "Functions as the unbreakable life-support autopilot. For example, this bridge connecting the brain to the spinal cord regulates involuntary vitals including your heartbeat, lung breathing rhythms, blood pressure, and swallowing reflexes 24 hours a day.",
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
        "example": "Functions as the superhighway main trunk artery of the entire body. For example, this thick, elastic arch receives high-pressure, oxygen-rich blood freshly pumped from the left ventricle and channels it into branching arterial highways serving the brain, chest, abdomen, and legs.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "The main artery in the human body starts from the left ventricle to the stomach"
      },
      {
        "num": 2,
        "name": "Right Atrium",
        "trick": "5th Grade Science Concept",
        "example": "Operates as the venous receiving lounge for depleted blood. For example, it collects oxygen-poor, carbon-dioxide-rich dark blood returning from your working muscles and organs through the vena cava veins and funnels it down into the right ventricle.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Receives blood from all the parts of the body. Blood is high in CO2 and low in oxygen."
      },
      {
        "num": 3,
        "name": "Right Ventricle",
        "trick": "5th Grade Science Concept",
        "example": "Functions as the pulmonary pump sending blood to the lungs. For example, with every heartbeat, its muscular chamber contracts to squeeze oxygen-depleted blood through the pulmonary artery straight into the lungs so it can pick up fresh oxygen.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Pumps blood to the lungs. Blood is high in carbon dioxide and low in oxygen"
      },
      {
        "num": 4,
        "name": "Left Atrium",
        "trick": "5th Grade Science Concept",
        "example": "Functions as the pulmonary receiving dock for freshly oxygenated blood. For example, it receives bright red, oxygen-rich blood arriving from the lungs via the pulmonary veins and funnels it through the mitral valve into the powerful left ventricle.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "Recieves blood from the lungs. Blood is high in oxygen and low in CO2"
      },
      {
        "num": 5,
        "name": "Left Ventricle",
        "trick": "5th Grade Science Concept",
        "example": "Functions as the powerhouse muscle engine of the entire circulatory system. For example, with walls three times thicker than any other chamber, it generates immense squeezing force to shoot oxygen-packed blood through the aorta all the way to your brain, toes, and every living cell.",
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
        "example": "Functions as the body's armed immune defense force. For example, when bacteria enter a cut, white blood cells squeeze through capillary walls, hunt down the invading germs, and swallow or chemically destroy them so you don't get infected.",
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
        "example": "Operates as the colorful muscular shutter controlling pupil size. For example, this pigmented ring of smooth muscle (giving eyes their blue, brown, or green color) contracts or expands automatically to regulate the exact amount of light entering the eye.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• The iris determines how much light should go through the pupil"
      },
      {
        "num": 4,
        "name": "Lens",
        "trick": "5th Grade Science Concept",
        "example": "Functions as a transparent, flexible zoom lens that fine-tunes image sharpness. For example, when you shift your gaze from a textbook right in front of your face to a clock across the classroom, the lens instantly changes its curvature to focus rays sharply onto the back of the eye.",
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
        "example": "Functions as the muscular focus adjuster controlling the lens. For example, when you read small text up close, ciliary muscles contract to make the lens rounder and thicker; when looking at distant stars, they relax to flatten the lens for far vision.",
        "formula": "5th Grade Scientific Principle",
        "explanation": "• The ciliary muscle change the shapes of the lens"
      },
      {
        "num": 7,
        "name": "Optic Nerve",
        "trick": "5th Grade Science Concept",
        "example": "Operates as a high-speed fiber-optic data transmission cable connecting the eye to the brain. For example, over one million nerve fibers bundled together carry the retina's electrical image signals directly to the visual cortex in the back of your brain, which flips the image right-side up so you can see!",
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
    this.code = atob("MTU5MzU3");
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
        } else if (this.currentPin.length < 6) {
          this.currentPin += key;
        }

        this.updatePinDisplay();

        if (this.currentPin.length === 6) {
          this.verifyPin();
        }
      });
    });

    window.addEventListener("keydown", (e) => {
      const vaultModal = document.getElementById("vault-modal");
      if (!vaultModal || vaultModal.classList.contains("hidden")) return;
      if (this.isUnlocked) return;

      if (e.key >= "0" && e.key <= "9") {
        if (this.currentPin.length < 6) {
          sounds.playKeypadTap();
          this.currentPin += e.key;
          this.updatePinDisplay();
          if (this.currentPin.length === 6) {
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
        feedback.textContent = "ENTER 6-DIGIT CODE";
        feedback.className = "vault-pin-feedback";
      } else {
        feedback.textContent = `AUTHENTICATING [${this.currentPin.length}/6]`;
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
    // Guarantee AI Chatbot bubble is visible and ready for re-entry
    const bubble = document.getElementById("ai-chat-bubble");
    if (bubble) {
      bubble.style.display = "flex";
      bubble.style.transform = "scale(1) rotate(0deg)";
    }
  }

  relock() {
    this.isUnlocked = false;
    this.currentPin = "";
    document.getElementById("vault-admin-view")?.classList.add("hidden");
    document.getElementById("vault-lock-view")?.classList.remove("hidden");
    this.updatePinDisplay();
    // Guarantee AI Chatbot bubble is visible and ready for re-entry
    const bubble = document.getElementById("ai-chat-bubble");
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

// ================= LIQUID GLASS SCIENTIFIC FORMULA CALCULATOR CONTROLLER =================
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
      if (this.historyText) this.historyText.textContent = `${f.code}  ➔  ${outcome.step}`;
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
      btn.innerHTML = this.isZen ? `<span>✕</span> Exit Fullscreen` : `<span>⛶</span> Fullscreen`;
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
      btn.innerHTML = `<span>⛶</span> Fullscreen`;
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
    this.calculator = new LiquidGlassCalculator(this);

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
    this.setupHolographic3DCardTilt();
    this.vault.init();
    this.setupEventListeners();
    this.setupPublishSystem();
    this.readingSuite.init();
    if (this.calculator) this.calculator.init();

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
    localStorage.setItem("scienceio_notes_v7", currentNotesJson);
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
      "Connecting to skience.io Global Cloud Database...",
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
            this.playCursiveHandwriting();
          }, 800);
        } else {
          this.playCursiveHandwriting();
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

  // ================= DIGITAL CURSIVE HANDWRITING ANIMATOR =================
  playCursiveHandwriting() {
    const svg = document.getElementById("cursive-logo-svg");
    if (!svg) return;
    const strokes = Array.from(svg.querySelectorAll(".cursive-stroke"));
    const dots = Array.from(svg.querySelectorAll(".cursive-dot"));
    const spark = document.getElementById("cursive-spark");

    if (this._cursiveAnimId) {
      cancelAnimationFrame(this._cursiveAnimId);
      this._cursiveAnimId = null;
    }

    svg.classList.remove("cursive-complete");

    // Measure each stroke and initialize dasharray
    const strokeData = strokes.map((s) => {
      const len = s.getTotalLength ? s.getTotalLength() : 30;
      s.style.strokeDasharray = `${len} ${len}`;
      s.style.strokeDashoffset = `${len}`;
      return { el: s, len: len };
    });

    // Reset dots to scale 0
    dots.forEach((d) => {
      d.style.transform = "scale(0)";
      d.style.opacity = "0";
    });

    if (spark) {
      spark.style.opacity = "1";
    }

    const totalLen = strokeData.reduce((acc, curr) => acc + curr.len, 0);
    // Deliberate, relaxed human pace (takes time for each curve and letter)
    const duration = 5800;
    const startTime = performance.now();

    // Exact cumulative thresholds for dotting the letters
    let cum = 0;
    const strokeCumFractions = strokeData.map(({ len }) => {
      cum += len;
      return cum / totalLen;
    });
    const dot1Threshold = strokeCumFractions[5] || 0.35; // dot on 'i' in 'skience'
    const dot2Threshold = strokeCumFractions[11] || 0.78; // period '.' after 'skience'
    const dot3Threshold = strokeCumFractions[12] || 0.86; // dot on 'i' in '.io'

    const frame = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Uniform constant pace throughout the entire word: strictly linear velocity (no speed up or slow down)
      const targetDistance = progress * totalLen;
      let accumulated = 0;
      let currentSparkPoint = null;

      strokeData.forEach(({ el, len }) => {
        if (targetDistance <= accumulated) {
          el.style.strokeDashoffset = `${len}`;
        } else if (targetDistance >= accumulated + len) {
          el.style.strokeDashoffset = "0";
        } else {
          const segProgress = (targetDistance - accumulated) / len;
          el.style.strokeDashoffset = `${len * (1 - segProgress)}`;
          try {
            if (el.getPointAtLength) {
              currentSparkPoint = el.getPointAtLength(len * segProgress);
            }
          } catch (e) {}
        }
        accumulated += len;
      });

      // Animate dots based on exact linear progress (3 dots in skience.io)
      dots.forEach((dot, idx) => {
        const threshold = idx === 0 ? dot1Threshold : idx === 1 ? dot2Threshold : dot3Threshold;
        if (progress >= threshold) {
          dot.style.transform = "scale(1)";
          dot.style.opacity = "1";
        } else {
          dot.style.transform = "scale(0)";
          dot.style.opacity = "0";
        }
      });

      // Move glowing pen-tip spark
      if (spark && currentSparkPoint) {
        spark.setAttribute("cx", currentSparkPoint.x.toFixed(2));
        spark.setAttribute("cy", currentSparkPoint.y.toFixed(2));
        spark.style.opacity = "1";
      }

      if (progress < 1) {
        this._cursiveAnimId = requestAnimationFrame(frame);
      } else {
        if (spark) {
          spark.style.opacity = "0";
        }
        svg.classList.add("cursive-complete");
        this._cursiveAnimId = null;
      }
    };

    this._cursiveAnimId = requestAnimationFrame(frame);
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
              📄 SKIENCE SHEET
            </button>
            <button class="card-action-btn btn-card-quiz" data-id="${topic.id}">
              ⚡ PRACTICE QUIZ
            </button>
          </div>
          ${topic.redirectUrl ? `
          <button class="card-action-btn btn-card-redirect" style="background: rgba(10, 132, 255, 0.4);" onclick="window.open('${topic.redirectUrl}', '_blank')">
            🔗 EXTERNAL LINK
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
            const tiltX = ((targetY / rect.height) - 0.5) * -12;
            const tiltY = ((targetX / rect.width) - 0.5) * 12;

            el.style.setProperty("--mouse-x", `${percentX.toFixed(1)}%`);
            el.style.setProperty("--mouse-y", `${percentY.toFixed(1)}%`);
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
      };

      el.addEventListener("mouseenter", onMouseEnter, { passive: true });
      el.addEventListener("mousemove", onMouseMove, { passive: true });
      el.addEventListener("mouseleave", onMouseLeave, { passive: true });
    };

    document.querySelectorAll(".deck-card").forEach((card) => attachTilt(card, true));
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
    if (catBadge) catBadge.textContent = `5TH GRADE ${((topic.category || "SKIENCE").replace(/science|sk1ence/gi, 'SKIENCE')).toUpperCase()}`;

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

  switchModalTab(tabName) {
    const tabs = ["notes", "interactive", "practice"];
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
      } else if (tabName === "interactive") {
        this.renderModalInteractive(this.currentModalTopic);
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
          <span class="prop-trick-badge" style="background: rgba(0, 240, 255, 0.15); border-color: rgba(0, 240, 255, 0.3); color: #a5f3fc;">🔬 Verified 5th Grade Skience</span>
        </div>
      `;

      container.appendChild(card);
    });

    const copyrightFooter = document.createElement("div");
    copyrightFooter.className = "modal-notes-copyright-footer";
    copyrightFooter.style.cssText = "grid-column: 1 / -1; text-align: center; padding: 18px 12px; margin-top: 14px; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.65); font-size: 0.85rem; display: flex; align-items: center; justify-content: center; gap: 8px;";
    copyrightFooter.innerHTML = `<span>© Copyright Protected • 5th Grade Skience Curriculum by Jeeva R.</span>`;
    container.appendChild(copyrightFooter);
    this.setupHolographic3DCardTilt();
  }

  // Interactive Science Visualizers (Circulatory, Respiratory, Digestive, Nervous, Animal Cell, Plant Cell, Unicellular, Multicellular, Universal Concept Matrix)
  renderModalInteractive(topic) {
    const container = document.getElementById("interactive-sandbox-container");
    if (!container) return;
    this.cleanupInteractiveSimulators();
    container.innerHTML = "";

    // Determine initial active lab based on topic
    let defaultLab = "concept-matrix";
    let defaultLabLabel = "🔬 Holographic Concept Matrix";
    const topicTitle = (topic.title || "").toUpperCase();
    const topicCategory = (topic.category || "").toLowerCase();
    const topicId = topic.id || "";

    if (topicTitle.includes("CIRCULAT") || topicTitle.includes("HEART") || topicTitle.includes("BLOOD") || topicId === "science-circulatory") {
      defaultLab = "circulatory";
      defaultLabLabel = "🫀 Circulatory System Visualizer";
    } else if (topicTitle.includes("RESPIRAT") || topicTitle.includes("LUNG") || topicTitle.includes("BREATH") || topicId === "science-respiratory") {
      defaultLab = "respiratory";
      defaultLabLabel = "🫁 Respiratory System Visualizer";
    } else if (topicTitle.includes("DIGEST") || topicTitle.includes("STOMACH") || topicTitle.includes("INTESTINE") || topicId === "science-digestive") {
      defaultLab = "digestive";
      defaultLabLabel = "🥪 Digestive System Visualizer";
    } else if (topicTitle.includes("NERVOUS") || topicTitle.includes("BRAIN") || topicTitle.includes("NEURON") || topicId === "science-nervous") {
      defaultLab = "nervous";
      defaultLabLabel = "🧠 Nervous System Visualizer";
    } else if (topicTitle.includes("ANIMAL CELL") || topicId === "animal-cell-01") {
      defaultLab = "animal-cell";
      defaultLabLabel = "🧬 Animal Cell Anatomy";
    } else if (topicTitle.includes("PLANT CELL") || topicId === "science-plant-cell") {
      defaultLab = "plant-cell";
      defaultLabLabel = "🌿 Plant Cell Anatomy";
    } else if (topicTitle.includes("UNICELLULAR") || topicTitle.includes("AMOEBA") || topicTitle.includes("PARAMECIUM") || topicTitle.includes("EUGLENA") || topicId === "unicellular-organisms-04") {
      defaultLab = "unicellular";
      defaultLabLabel = "🦠 Unicellular Organisms";
    } else if (topicTitle.includes("MULTICELLULAR") || topicId === "multicellular-organisms-03") {
      defaultLab = "multicellular";
      defaultLabLabel = "🌳 Multicellular Hierarchy";
    } else if (topicCategory === "earth" || topicTitle.includes("MOON") || topicTitle.includes("SPACE") || topicTitle.includes("ORBIT") || topicTitle.includes("SOLAR") || topicId === "moon-phases-01") {
      defaultLab = "moon";
      defaultLabLabel = "🪐 Moon Phases & Orbit (#3)";
    } else if (topicCategory === "physical" || topicTitle.includes("MATTER") || topicTitle.includes("HEAT") || topicTitle.includes("SOLID") || topicTitle.includes("GAS") || topicId === "states-of-matter-01") {
      defaultLab = "matter";
      defaultLabLabel = "❄️ Matter State Changes (#6)";
    } else {
      defaultLab = "concept-matrix";
      defaultLabLabel = `🔮 ${topic.title || 'Topic'} Visualizer`;
    }

    container.innerHTML = `
      <div class="interactive-lab-nav">
        <div class="lab-nav-header">
          <span class="lab-nav-badge">🧪 INTERACTIVE VIRTUAL LABS</span>
          <span class="lab-nav-sub">Inside Notes Exclusive Sandbox</span>
        </div>
        <div class="lab-switcher-pills">
          <button class="lab-pill-btn active" id="lab-btn-primary" data-lab="${defaultLab}">
            <span>${defaultLabLabel}</span>
          </button>
          ${defaultLab !== 'circulatory' ? `<button class="lab-pill-btn" data-lab="circulatory"><span>🫀 Circulatory</span></button>` : ''}
          ${defaultLab !== 'respiratory' ? `<button class="lab-pill-btn" data-lab="respiratory"><span>🫁 Respiratory</span></button>` : ''}
          ${defaultLab !== 'digestive' ? `<button class="lab-pill-btn" data-lab="digestive"><span>🥪 Digestive</span></button>` : ''}
          ${defaultLab !== 'nervous' ? `<button class="lab-pill-btn" data-lab="nervous"><span>🧠 Nervous</span></button>` : ''}
          ${defaultLab !== 'plant-cell' ? `<button class="lab-pill-btn" data-lab="plant-cell"><span>🌿 Plant Cell</span></button>` : ''}
          ${defaultLab !== 'animal-cell' ? `<button class="lab-pill-btn" data-lab="animal-cell"><span>🧬 Animal Cell</span></button>` : ''}
          ${defaultLab !== 'unicellular' ? `<button class="lab-pill-btn" data-lab="unicellular"><span>🦠 Unicellular</span></button>` : ''}
          ${defaultLab !== 'multicellular' ? `<button class="lab-pill-btn" data-lab="multicellular"><span>🌳 Multicellular</span></button>` : ''}
          ${defaultLab !== 'matter' ? `<button class="lab-pill-btn" data-lab="matter"><span>❄️ Matter (#6)</span></button>` : ''}
          ${defaultLab !== 'moon' ? `<button class="lab-pill-btn" data-lab="moon"><span>🪐 Moon Orbit (#3)</span></button>` : ''}
        </div>
      </div>
      <div id="interactive-lab-stage" class="interactive-lab-stage"></div>
    `;

    const stage = document.getElementById("interactive-lab-stage");
    const labButtons = container.querySelectorAll(".lab-pill-btn");
    labButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (typeof sounds !== 'undefined' && sounds.playClick) sounds.playClick();
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

    switch (labName) {
      case "circulatory":
        this.loadCirculatoryLab(stage, topic);
        break;
      case "respiratory":
        this.loadRespiratoryLab(stage, topic);
        break;
      case "digestive":
        this.loadDigestiveLab(stage, topic);
        break;
      case "nervous":
        this.loadNervousLab(stage, topic);
        break;
      case "animal-cell":
        this.loadAnimalCellLab(stage, topic);
        break;
      case "plant-cell":
      case "cell":
        this.loadPlantCellLab(stage, topic);
        break;
      case "unicellular":
        this.loadUnicellularLab(stage, topic);
        break;
      case "multicellular":
        this.loadMulticellularLab(stage, topic);
        break;
      case "concept-matrix":
        this.loadUniversalConceptMatrixLab(stage, topic);
        break;
      case "matter":
        this.loadMatterStateLab(stage, topic);
        break;
      case "moon":
        this.loadMoonPhasesLab(stage, topic);
        break;
      default:
        this.loadPlantCellLab(stage, topic);
        break;
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
            <div class="moon-scope-tag">EARTH & SPACE SKIENCE • IN-NOTES INTERACTIVE LAB</div>
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

  // ================= INTERACTIVE ANATOMY & CURRICULUM VISUALIZERS =================
  getPartNoteData(topic, partNum, partKeywords = [], fallbackData = {}) {
    // 1. Check active topic.properties by exact num
    let match = topic?.properties?.find(p => p.num === partNum);

    // 2. Check active topic.properties by keywords in name or explanation
    if (!match && topic?.properties && partKeywords.length > 0) {
      match = topic.properties.find(p => {
        const name = (p.name || '').toLowerCase();
        const expl = (p.explanation || '').toLowerCase();
        return partKeywords.some(kw => name.includes(kw.toLowerCase()) || expl.includes(kw.toLowerCase()));
      });
    }

    // 3. Fallback to curriculum database if available
    if (!match && topic) {
      const fallbackSystem = this.getCurriculumFallback(topic.title || '');
      if (fallbackSystem?.properties) {
        match = fallbackSystem.properties.find(p => p.num === partNum) ||
                fallbackSystem.properties.find(p => {
                  const name = (p.name || '').toLowerCase();
                  return partKeywords.some(kw => name.includes(kw.toLowerCase()));
                });
      }
    }

    const resolvedNum = match?.num || partNum;
    const cleanName = (match?.name || fallbackData.name || `Part #${partNum}`).replace(/^\d+[\.\-\)]\s*/, '').trim();

    return {
      num: resolvedNum,
      name: cleanName,
      formula: match?.formula || fallbackData.formula || 'Key Scientific Concept',
      explanation: match?.explanation || fallbackData.explanation || 'Scientific definition based on curriculum notes.',
      example: match?.example || fallbackData.example || 'Classroom observation observed in 5th grade laboratory.',
      trick: match?.trick || fallbackData.trick || 'Remember key scientific terms!',
      hasSquare: !!match || (topic?.properties && topic.properties.some(p => p.num === resolvedNum))
    };
  }

  bindInteractiveDiagram({ stage, topic, parts, defaultNum = 1 }) {
    const hudTitle = stage.querySelector("#diagram-hud-title");
    const hudFormula = stage.querySelector("#diagram-hud-formula");
    const hudDesc = stage.querySelector("#diagram-hud-desc");
    const hudExample = stage.querySelector("#diagram-hud-example");
    const hudTrick = stage.querySelector("#diagram-hud-trick");
    const hudJumpBtn = stage.querySelector("#diagram-hud-jump-btn");
    const hudSource = stage.querySelector("#diagram-hud-source");

    let activeNum = null;

    const selectPart = (num) => {
      const partConfig = parts.find(p => p.num === num) || parts[0];
      if (!partConfig) return;
      activeNum = partConfig.num;

      const data = this.getPartNoteData(topic, partConfig.num, partConfig.keywords || [], partConfig.fallback || {});

      if (typeof sounds !== 'undefined' && sounds.playClick) sounds.playClick();

      if (hudTitle) {
        hudTitle.innerHTML = `<span style="font-size: 1.15em;">${partConfig.icon || '🔬'}</span> ${data.num}. ${data.name}`;
      }
      if (hudFormula) {
        hudFormula.textContent = data.formula;
      }
      if (hudDesc) {
        hudDesc.textContent = data.explanation;
      }
      if (hudExample) {
        hudExample.innerHTML = `<strong>💡 Observation:</strong> <span>${data.example}</span>`;
      }
      if (hudTrick) {
        hudTrick.innerHTML = `<strong>🧠 Memory Trick:</strong> <span>${data.trick}</span>`;
      }
      if (hudSource) {
        hudSource.textContent = `Source: ${topic.title || 'Curriculum'} • Square #${data.num}`;
      }

      if (hudJumpBtn) {
        hudJumpBtn.style.display = "inline-flex";
        hudJumpBtn.innerHTML = `<span>🔍 Jump to Square #${data.num}</span>`;
      }

      // Update pins
      stage.querySelectorAll(".diagram-pin-marker").forEach(pin => {
        pin.classList.toggle("active", parseInt(pin.dataset.num, 10) === partConfig.num);
      });

      // Update quick buttons
      stage.querySelectorAll(".diagram-part-btn").forEach(btn => {
        btn.classList.toggle("active", parseInt(btn.dataset.num, 10) === partConfig.num);
      });

      // Update paths
      stage.querySelectorAll(".diagram-interactive-path").forEach(path => {
        path.classList.toggle("highlighted", parseInt(path.dataset.num, 10) === partConfig.num);
      });
    };

    stage.querySelectorAll(".diagram-pin-marker").forEach(pin => {
      pin.addEventListener("click", () => {
        const num = parseInt(pin.dataset.num, 10);
        selectPart(num);
      });
    });

    stage.querySelectorAll(".diagram-part-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const num = parseInt(btn.dataset.num, 10);
        selectPart(num);
      });
    });

    stage.querySelectorAll(".diagram-interactive-path").forEach(path => {
      path.addEventListener("click", () => {
        const num = parseInt(path.dataset.num, 10);
        selectPart(num);
      });
    });

    if (hudJumpBtn) {
      hudJumpBtn.addEventListener("click", () => {
        if (!activeNum) return;
        this.switchModalTab("notes");
        setTimeout(() => {
          const card = document.getElementById(`concept-square-${activeNum}`);
          if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            card.classList.add("highlighted");
            setTimeout(() => card.classList.remove("highlighted"), 1500);
          }
        }, 150);
      });
    }

    setTimeout(() => selectPart(defaultNum), 200);
  }

  // ================= 1. CIRCULATORY SYSTEM VISUALIZER =================
  loadCirculatoryLab(stage, topic) {
    const parts = [
      {
        num: 1,
        icon: "❤️",
        keywords: ["heart", "cardiac", "pump"],
        fallback: {
          name: "Heart (Cardiac Pump)",
          formula: "4-Chambered Muscular Engine",
          explanation: "Pumps blood through pulmonary and systemic circuits without stopping.",
          example: "Beats approximately 100,000 times per day to keep blood circulating.",
          trick: "Memory Trick: 2 Atriums at the top receive blood, 2 Ventricles at the bottom pump it out!"
        }
      },
      {
        num: 2,
        icon: "🔴",
        keywords: ["artery", "arteries", "aorta"],
        fallback: {
          name: "Arteries",
          formula: "High-Pressure Blood Vessels",
          explanation: "Carry freshly oxygenated blood AWAY from the heart into bodily tissues.",
          example: "The aorta is the largest artery with thick muscular walls to withstand high blood pressure.",
          trick: "Memory Trick: Arteries = AWAY from the heart!"
        }
      },
      {
        num: 3,
        icon: "🟣",
        keywords: ["capillary", "capillaries", "diffusion"],
        fallback: {
          name: "Capillaries",
          formula: "Microscopic Diffusion Beds",
          explanation: "Ultra-thin single-cell vessels where nutrients and gases diffuse into tissues.",
          example: "Blood cells must travel single-file through capillary beds to exchange O₂ and CO₂.",
          trick: "Memory Trick: Capillaries = Connectors & trading posts!"
        }
      },
      {
        num: 4,
        icon: "🔵",
        keywords: ["vein", "veins", "vena cava"],
        fallback: {
          name: "Veins",
          formula: "Low-Pressure One-Way Valved Vessels",
          explanation: "Return deoxygenated blood back into the heart, using one-way valves.",
          example: "Valves prevent blood from flowing backward against gravity as it returns from your legs.",
          trick: "Memory Trick: Veins = Visiting back into the heart!"
        }
      },
      {
        num: 5,
        icon: "🩸",
        keywords: ["red blood cell", "erythrocyte", "blood", "hemoglobin"],
        fallback: {
          name: "Red Blood Cells (Erythrocytes)",
          formula: "Hemoglobin Oxygen Transporter",
          explanation: "Biconcave disc cells packed with iron-rich hemoglobin that carry oxygen from lungs to every cell.",
          example: "Millions of red blood cells deliver fuel to cellular mitochondria for ATP synthesis.",
          trick: "Memory Trick: Red Blood Cells are tiny oxygen delivery delivery vans!"
        }
      },
      {
        num: 6,
        icon: "🫁",
        keywords: ["pulmonary", "pulmonary circuit", "lung circuit"],
        fallback: {
          name: "Pulmonary Circuit",
          formula: "Heart-to-Lungs Gas Exchange Loop",
          explanation: "Sends deoxygenated blood from the right ventricle into the lungs to release CO₂ and pick up fresh O₂.",
          example: "The only artery carrying deoxygenated blood is the pulmonary artery heading to the lungs.",
          trick: "Memory Trick: Pulmonary = Pumping to lungs!"
        }
      }
    ];

    stage.innerHTML = `
      <div class="diagram-interactive-wrap">
        <div class="diagram-viewport-container">
          <svg class="diagram-svg-canvas" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circAortaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ff4d4d" />
                <stop offset="100%" stop-color="#b91c1c" />
              </linearGradient>
              <linearGradient id="circVeinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8" />
                <stop offset="100%" stop-color="#1e40af" />
              </linearGradient>
              <radialGradient id="circHeartGrad" cx="45%" cy="40%" r="60%">
                <stop offset="0%" stop-color="#f87171" />
                <stop offset="60%" stop-color="#dc2626" />
                <stop offset="100%" stop-color="#7f1d1d" />
              </radialGradient>
              <linearGradient id="circCapillaryGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stop-color="#ef4444" />
                <stop offset="50%" stop-color="#a855f7" />
                <stop offset="100%" stop-color="#0284c7" />
              </linearGradient>
              <radialGradient id="rbcGlow" cx="40%" cy="40%" r="50%">
                <stop offset="0%" stop-color="#fca5a5" />
                <stop offset="70%" stop-color="#dc2626" />
                <stop offset="100%" stop-color="#991b1b" />
              </radialGradient>
            </defs>

            <!-- Background Circulation Glow -->
            <ellipse cx="320" cy="210" rx="260" ry="175" fill="none" stroke="rgba(56, 189, 248, 0.08)" stroke-width="2" stroke-dasharray="8 6" />

            <!-- UPPER CAPILLARIES (Head & Upper Body) -->
            <g id="path-circ-3" class="diagram-interactive-path" data-num="3">
              <path d="M 230,55 C 260,30 380,30 410,55" fill="none" stroke="url(#circCapillaryGrad)" stroke-width="6" stroke-linecap="round" />
              <path d="M 240,70 C 280,45 360,45 400,70" fill="none" stroke="url(#circCapillaryGrad)" stroke-width="4" stroke-linecap="round" />
              <path d="M 255,85 C 290,65 350,65 385,85" fill="none" stroke="url(#circCapillaryGrad)" stroke-width="3" stroke-linecap="round" />
              <text x="320" y="28" fill="#e0f2fe" font-size="11" font-weight="800" text-anchor="middle" opacity="0.8">Upper Body Capillary Bed</text>
            </g>

            <!-- 2. SYSTEMIC ARTERIES (Oxygenated - Red) -->
            <g id="path-circ-2" class="diagram-interactive-path" data-num="2">
              <!-- Aortic Arch -->
              <path d="M 320,150 C 315,100 250,90 230,55" fill="none" stroke="url(#circAortaGrad)" stroke-width="8" stroke-linecap="round" />
              <!-- Descending Aorta to Lower Body -->
              <path d="M 315,225 C 310,270 250,300 235,355" fill="none" stroke="url(#circAortaGrad)" stroke-width="7" stroke-linecap="round" />
              <path d="M 235,355 L 210,390" fill="none" stroke="url(#circAortaGrad)" stroke-width="5" stroke-linecap="round" />
              <text x="215" y="115" fill="#fca5a5" font-size="10" font-weight="bold">Arteries (Away)</text>
            </g>

            <!-- 4. SYSTEMIC VEINS (Deoxygenated - Blue) -->
            <g id="path-circ-4" class="diagram-interactive-path" data-num="4">
              <!-- Superior Vena Cava from Head -->
              <path d="M 410,55 C 390,90 335,100 330,150" fill="none" stroke="url(#circVeinGrad)" stroke-width="8" stroke-linecap="round" />
              <!-- Inferior Vena Cava from Lower Body -->
              <path d="M 405,355 C 390,300 330,270 328,225" fill="none" stroke="url(#circVeinGrad)" stroke-width="7" stroke-linecap="round" />
              <path d="M 405,355 L 430,390" fill="none" stroke="url(#circVeinGrad)" stroke-width="5" stroke-linecap="round" />
              <text x="425" y="115" fill="#93c5fd" font-size="10" font-weight="bold">Veins (Return)</text>
            </g>

            <!-- LOWER CAPILLARIES (Trunk & Lower Body) -->
            <g class="diagram-interactive-path" data-num="3">
              <path d="M 235,355 C 270,380 370,380 405,355" fill="none" stroke="url(#circCapillaryGrad)" stroke-width="6" stroke-linecap="round" />
              <path d="M 245,340 C 285,365 355,365 395,340" fill="none" stroke="url(#circCapillaryGrad)" stroke-width="4" stroke-linecap="round" />
              <text x="320" y="398" fill="#e0f2fe" font-size="11" font-weight="800" text-anchor="middle" opacity="0.8">Lower Body Capillary Bed</text>
            </g>

            <!-- 6. PULMONARY CIRCUIT (To Lungs & Back) -->
            <g id="path-circ-6" class="diagram-interactive-path" data-num="6">
              <!-- Right Pulmonary Artery to Left Lung -->
              <path d="M 330,165 C 380,155 430,180 470,185" fill="none" stroke="#0284c7" stroke-width="5" stroke-dasharray="6 3" />
              <!-- Left Pulmonary Artery to Right Lung -->
              <path d="M 310,165 C 260,155 210,180 170,185" fill="none" stroke="#0284c7" stroke-width="5" stroke-dasharray="6 3" />
              <!-- Lung Capillary mesh icons -->
              <ellipse cx="150" cy="190" rx="32" ry="24" fill="rgba(6, 182, 212, 0.15)" stroke="#38bdf8" stroke-width="2" />
              <text x="150" y="194" fill="#7dd3fc" font-size="9" font-weight="bold" text-anchor="middle">Right Lung</text>
              <ellipse cx="490" cy="190" rx="32" ry="24" fill="rgba(6, 182, 212, 0.15)" stroke="#38bdf8" stroke-width="2" />
              <text x="490" y="194" fill="#7dd3fc" font-size="9" font-weight="bold" text-anchor="middle">Left Lung</text>
              <!-- Pulmonary Veins returning fresh O2 -->
              <path d="M 182,200 C 230,205 275,190 305,185" fill="none" stroke="#ef4444" stroke-width="4" />
              <path d="M 458,200 C 410,205 365,190 335,185" fill="none" stroke="#ef4444" stroke-width="4" />
            </g>

            <!-- 1. HEART (Cardiac Muscular Pump) -->
            <g id="path-circ-1" class="diagram-interactive-path" data-num="1">
              <!-- Heart Muscle Contour -->
              <path d="M 320,135 C 290,110 260,140 260,180 C 260,225 320,255 320,265 C 320,255 380,225 380,180 C 380,140 350,110 320,135 Z" fill="url(#circHeartGrad)" stroke="#fca5a5" stroke-width="3.5" />
              <!-- Septum division line -->
              <line x1="320" y1="140" x2="320" y2="260" stroke="#7f1d1d" stroke-width="3" />
              <!-- Chamber labels -->
              <text x="285" y="165" fill="#fef2f2" font-size="8" font-weight="900">RA</text>
              <text x="345" y="165" fill="#fef2f2" font-size="8" font-weight="900">LA</text>
              <text x="288" y="215" fill="#fef2f2" font-size="8" font-weight="900">RV</text>
              <text x="342" y="215" fill="#fef2f2" font-size="8" font-weight="900">LV</text>
            </g>

            <!-- 5. RED BLOOD CELLS (Erythrocytes) -->
            <g id="path-circ-5" class="diagram-interactive-path" data-num="5">
              <ellipse cx="235" cy="275" rx="14" ry="9" fill="url(#rbcGlow)" stroke="#fff" stroke-width="1.5" transform="rotate(-25 235 275)" />
              <ellipse cx="235" cy="275" rx="5" ry="3" fill="#7f1d1d" opacity="0.6" transform="rotate(-25 235 275)" />
              <ellipse cx="245" cy="310" rx="12" ry="8" fill="url(#rbcGlow)" stroke="#fff" stroke-width="1.5" transform="rotate(15 245 310)" />
              <ellipse cx="395" cy="285" rx="13" ry="8" fill="#1e40af" stroke="#93c5fd" stroke-width="1.5" transform="rotate(30 395 285)" />
            </g>

            <!-- NUMBERED PINS -->
            <g class="diagram-pins-layer">
              <!-- Pin 1: Heart -->
              <g class="diagram-pin-marker" data-num="1" transform="translate(320, 195)">
                <circle cx="0" cy="0" r="15" class="pin-base" fill="#dc2626" stroke="#fff" stroke-width="2.5" />
                <text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
              </g>
              <!-- Pin 2: Arteries -->
              <g class="diagram-pin-marker" data-num="2" transform="translate(245, 95)">
                <circle cx="0" cy="0" r="15" class="pin-base" fill="#ef4444" stroke="#fff" stroke-width="2.5" />
                <text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
              </g>
              <!-- Pin 3: Capillaries -->
              <g class="diagram-pin-marker" data-num="3" transform="translate(320, 48)">
                <circle cx="0" cy="0" r="15" class="pin-base" fill="#8b5cf6" stroke="#fff" stroke-width="2.5" />
                <text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
              </g>
              <!-- Pin 4: Veins -->
              <g class="diagram-pin-marker" data-num="4" transform="translate(395, 95)">
                <circle cx="0" cy="0" r="15" class="pin-base" fill="#0284c7" stroke="#fff" stroke-width="2.5" />
                <text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">4</text>
              </g>
              <!-- Pin 5: Red Blood Cells -->
              <g class="diagram-pin-marker" data-num="5" transform="translate(225, 275)">
                <circle cx="0" cy="0" r="15" class="pin-base" fill="#b91c1c" stroke="#fff" stroke-width="2.5" />
                <text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">5</text>
              </g>
              <!-- Pin 6: Pulmonary Circuit -->
              <g class="diagram-pin-marker" data-num="6" transform="translate(435, 240)">
                <circle cx="0" cy="0" r="15" class="pin-base" fill="#06b6d4" stroke="#fff" stroke-width="2.5" />
                <text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">6</text>
              </g>
            </g>
          </svg>
        </div>

        <!-- Quick Access Parts Dock -->
        <div class="diagram-parts-quickbar">
          <button class="diagram-part-btn active" data-num="1"><span class="btn-badge">1</span> ❤️ Heart</button>
          <button class="diagram-part-btn" data-num="2"><span class="btn-badge">2</span> 🔴 Arteries</button>
          <button class="diagram-part-btn" data-num="3"><span class="btn-badge">3</span> 🟣 Capillaries</button>
          <button class="diagram-part-btn" data-num="4"><span class="btn-badge">4</span> 🔵 Veins</button>
          <button class="diagram-part-btn" data-num="5"><span class="btn-badge">5</span> 🩸 Blood Cells</button>
          <button class="diagram-part-btn" data-num="6"><span class="btn-badge">6</span> 🫁 Pulmonary Circuit</button>
        </div>

        <!-- Note Inspection HUD Card -->
        <div class="diagram-hud-card">
          <div class="diagram-hud-header">
            <span class="diagram-hud-title" id="diagram-hud-title">❤️ 1. Heart (Cardiac Pump)</span>
            <span class="diagram-hud-formula" id="diagram-hud-formula">4-Chambered Muscular Engine</span>
          </div>
          <p class="diagram-hud-desc" id="diagram-hud-desc">
            Pumps blood through pulmonary and systemic circuits without stopping.
          </p>
          <div class="diagram-hud-callouts">
            <div class="diagram-hud-example" id="diagram-hud-example">
              <strong>💡 Observation:</strong> <span>Beats approximately 100,000 times per day.</span>
            </div>
            <div class="diagram-hud-trick" id="diagram-hud-trick">
              <strong>🧠 Memory Trick:</strong> <span>2 Atriums receive, 2 Ventricles pump!</span>
            </div>
          </div>
          <div class="diagram-hud-footer">
            <span class="diagram-hud-source" id="diagram-hud-source">Source: Circulatory System Notes</span>
            <button class="btn-jump-square" id="diagram-hud-jump-btn">
              <span>🔍 Jump to Square Notes</span>
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindInteractiveDiagram({ stage, topic, parts, defaultNum: 1 });
  }

  // ================= 2. RESPIRATORY SYSTEM VISUALIZER =================
  loadRespiratoryLab(stage, topic) {
    const parts = [
      {
        num: 1,
        icon: "👃",
        keywords: ["nose", "trachea", "windpipe", "airway"],
        fallback: {
          name: "Nose & Trachea (Windpipe)",
          formula: "Filtration & Main Airway",
          explanation: "Cilia hairs and mucus filter pathogens and dust, while C-shaped cartilage rings keep the airway wide open.",
          example: "Air is warmed and humidified in the nasal cavity before reaching the delicate lungs.",
          trick: "Memory Trick: The hollow highway channeling filtered air straight to the chest!"
        }
      },
      {
        num: 2,
        icon: "🌿",
        keywords: ["bronchi", "bronchial", "bronchiole"],
        fallback: {
          name: "Bronchi & Bronchioles",
          formula: "Branching Air Tree",
          explanation: "Two primary bronchial tubes branch into left and right lungs, dividing into thousands of tiny bronchioles.",
          example: "Smooth muscle rings around bronchioles regulate airflow into each lung quadrant.",
          trick: "Memory Trick: Think of an upside-down tree with branching air twigs!"
        }
      },
      {
        num: 3,
        icon: "🍇",
        keywords: ["alveoli", "air sac", "alveolus", "diffusion"],
        fallback: {
          name: "Alveoli (Air Sacs)",
          formula: "Microscopic Gas Diffusion",
          explanation: "Millions of grape-like microscopic air sacs wrapped in capillaries where O₂ enters red blood cells and CO₂ exits.",
          example: "The total surface area of human alveoli is about the size of an entire tennis court!",
          trick: "Memory Trick: Alveoli = Tiny Air Grapes where oxygen and CO₂ trade places!"
        }
      },
      {
        num: 4,
        icon: "🫁",
        keywords: ["diaphragm", "muscle", "breathing"],
        fallback: {
          name: "Diaphragm Muscle",
          formula: "Breathing Engine (Pressure Pump)",
          explanation: "Dome-shaped muscle beneath lungs. Pulls down to draw air in; pushes up to force air out.",
          example: "When you inhale, the diaphragm contracts downward creating negative pressure that pulls air inside.",
          trick: "Memory Trick: Diaphragm down = Inhale; Diaphragm up = Exhale!"
        }
      },
      {
        num: 5,
        icon: "🌬️",
        keywords: ["lung", "lungs", "pleural", "gas exchange"],
        fallback: {
          name: "Lungs & Capillary Gas Exchange",
          formula: "Pleural Gas Exchange Chambers",
          explanation: "Paired spongy organs housing the bronchial tree and alveolar capillary networks for external respiration.",
          example: "The right lung has 3 lobes while the left lung has 2 lobes to make room for the heart.",
          trick: "Memory Trick: Lungs expand like twin air balloons inside the ribcage!"
        }
      }
    ];

    stage.innerHTML = `
      <div class="diagram-interactive-wrap">
        <div class="diagram-viewport-container">
          <svg class="diagram-svg-canvas" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="tracheaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#94a3b8" />
                <stop offset="50%" stop-color="#f1f5f9" />
                <stop offset="100%" stop-color="#94a3b8" />
              </linearGradient>
              <radialGradient id="lungLeftGrad" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35" />
                <stop offset="100%" stop-color="#be123c" stop-opacity="0.15" />
              </radialGradient>
              <radialGradient id="alveoliGrad" cx="35%" cy="35%" r="60%">
                <stop offset="0%" stop-color="#fda4af" />
                <stop offset="60%" stop-color="#f43f5e" />
                <stop offset="100%" stop-color="#9f1239" />
              </radialGradient>
              <linearGradient id="diaphragmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f59e0b" />
                <stop offset="100%" stop-color="#b45309" />
              </linearGradient>
            </defs>

            <!-- 5. LUNGS CONTOURS (Spongy paired organs) -->
            <g id="path-resp-5" class="diagram-interactive-path" data-num="5">
              <!-- Right Lung (3 lobes) -->
              <path d="M 230,150 C 180,150 140,200 140,270 C 140,320 180,340 230,340 C 255,340 265,300 265,220 C 265,160 250,150 230,150 Z" fill="url(#lungLeftGrad)" stroke="#fb7185" stroke-width="2.5" />
              <!-- Left Lung (2 lobes with cardiac notch) -->
              <path d="M 330,150 C 310,150 295,170 295,220 C 295,260 315,280 305,310 C 315,335 340,340 370,340 C 420,340 440,300 440,270 C 440,200 380,150 330,150 Z" fill="url(#lungLeftGrad)" stroke="#fb7185" stroke-width="2.5" />
              <text x="180" y="240" fill="#fecdd3" font-size="10" font-weight="bold" opacity="0.7">Right Lung</text>
              <text x="385" y="240" fill="#fecdd3" font-size="10" font-weight="bold" opacity="0.7">Left Lung</text>
            </g>

            <!-- 1. NOSE, PHARYNX, LARYNX & TRACHEA -->
            <g id="path-resp-1" class="diagram-interactive-path" data-num="1">
              <!-- Nasal profile -->
              <path d="M 280,30 Q 300,30 295,50 Q 285,60 285,75" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" />
              <!-- Trachea tube with cartilage rings -->
              <rect x="272" y="75" width="16" height="85" rx="4" fill="url(#tracheaGrad)" stroke="#0284c7" stroke-width="2" />
              <!-- Cartilage ring ridges -->
              <line x1="272" y1="90" x2="288" y2="90" stroke="#0f172a" stroke-width="2" />
              <line x1="272" y1="105" x2="288" y2="105" stroke="#0f172a" stroke-width="2" />
              <line x1="272" y1="120" x2="288" y2="120" stroke="#0f172a" stroke-width="2" />
              <line x1="272" y1="135" x2="288" y2="135" stroke="#0f172a" stroke-width="2" />
              <line x1="272" y1="150" x2="288" y2="150" stroke="#0f172a" stroke-width="2" />
            </g>

            <!-- 2. BRONCHI & BRONCHIAL TREE -->
            <g id="path-resp-2" class="diagram-interactive-path" data-num="2">
              <!-- Right primary bronchus -->
              <path d="M 276,160 Q 250,180 220,195 Q 190,210 170,230" fill="none" stroke="#22c55e" stroke-width="5" stroke-linecap="round" />
              <path d="M 220,195 Q 210,230 195,260" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" />
              <path d="M 235,185 Q 240,220 235,260" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" />
              <!-- Left primary bronchus -->
              <path d="M 284,160 Q 315,180 345,195 Q 380,210 400,230" fill="none" stroke="#22c55e" stroke-width="5" stroke-linecap="round" />
              <path d="M 345,195 Q 360,230 375,260" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" />
              <path d="M 330,185 Q 325,220 330,260" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" />
            </g>

            <!-- 3. ZOOMED ALVEOLI CLUSTER (Microscopic Air Sacs with Capillaries) -->
            <g id="path-resp-3" class="diagram-interactive-path" data-num="3" transform="translate(470, 75)">
              <rect x="0" y="0" width="150" height="135" rx="16" fill="rgba(15, 23, 42, 0.85)" stroke="#38bdf8" stroke-width="1.5" />
              <text x="75" y="20" fill="#38bdf8" font-size="10" font-weight="900" text-anchor="middle">ZOOM: Alveoli (Air Sacs)</text>
              <!-- Grape cluster -->
              <circle cx="55" cy="55" r="16" fill="url(#alveoliGrad)" stroke="#fff" stroke-width="1.5" />
              <circle cx="85" cy="50" r="15" fill="url(#alveoliGrad)" stroke="#fff" stroke-width="1.5" />
              <circle cx="70" cy="78" r="18" fill="url(#alveoliGrad)" stroke="#fff" stroke-width="1.5" />
              <circle cx="98" cy="75" r="14" fill="url(#alveoliGrad)" stroke="#fff" stroke-width="1.5" />
              <circle cx="45" cy="85" r="14" fill="url(#alveoliGrad)" stroke="#fff" stroke-width="1.5" />
              <!-- Capillary Net Wrap -->
              <path d="M 35,55 Q 65,35 95,65 Q 115,85 85,95 Q 45,95 35,55" fill="none" stroke="#ef4444" stroke-width="2.5" />
              <path d="M 40,65 Q 75,55 105,75" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="3 2" />
              <!-- Gas exchange arrows -->
              <text x="70" y="120" fill="#4ade80" font-size="9" font-weight="bold" text-anchor="middle">O₂ ➔ Blood | CO₂ ➔ Air</text>
            </g>

            <!-- 4. DIAPHRAGM MUSCLE (Breathing Engine) -->
            <g id="path-resp-4" class="diagram-interactive-path" data-num="4">
              <path d="M 130,345 C 190,325 370,325 450,345 C 430,365 150,365 130,345 Z" fill="url(#diaphragmGrad)" stroke="#fef08a" stroke-width="2.5" />
              <text x="290" y="358" fill="#fff" font-size="11" font-weight="900" text-anchor="middle">Diaphragm Muscle Sheet</text>
              <!-- Inhale motion arrows -->
              <path d="M 290,368 L 290,385 M 285,380 L 290,385 L 295,380" fill="none" stroke="#f59e0b" stroke-width="2" />
              <text x="290" y="400" fill="#f59e0b" font-size="9" font-weight="bold" text-anchor="middle">Pulls Down to Inhale</text>
            </g>

            <!-- PINS -->
            <g class="diagram-pins-layer">
              <g class="diagram-pin-marker" data-num="1" transform="translate(280, 85)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#0284c7" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text></g>
              <g class="diagram-pin-marker" data-num="2" transform="translate(280, 185)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#16a34a" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text></g>
              <g class="diagram-pin-marker" data-num="3" transform="translate(485, 145)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#e11d48" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text></g>
              <g class="diagram-pin-marker" data-num="4" transform="translate(290, 340)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#d97706" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">4</text></g>
              <g class="diagram-pin-marker" data-num="5" transform="translate(195, 235)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#ec4899" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">5</text></g>
            </g>
          </svg>
        </div>

        <!-- Quick Access Parts Dock -->
        <div class="diagram-parts-quickbar">
          <button class="diagram-part-btn active" data-num="1"><span class="btn-badge">1</span> 👃 Nose & Trachea</button>
          <button class="diagram-part-btn" data-num="2"><span class="btn-badge">2</span> 🌿 Bronchi Tree</button>
          <button class="diagram-part-btn" data-num="3"><span class="btn-badge">3</span> 🍇 Alveoli (Air Sacs)</button>
          <button class="diagram-part-btn" data-num="4"><span class="btn-badge">4</span> 🫁 Diaphragm Muscle</button>
          <button class="diagram-part-btn" data-num="5"><span class="btn-badge">5</span> 🌬️ Lungs & Gas Exchange</button>
        </div>

        <!-- Inspection HUD Card -->
        <div class="diagram-hud-card">
          <div class="diagram-hud-header">
            <span class="diagram-hud-title" id="diagram-hud-title">👃 1. Nose & Trachea (Windpipe)</span>
            <span class="diagram-hud-formula" id="diagram-hud-formula">Filtration & Main Airway</span>
          </div>
          <p class="diagram-hud-desc" id="diagram-hud-desc">
            Cilia hairs and mucus filter pathogens and dust, while C-shaped cartilage rings keep the airway wide open.
          </p>
          <div class="diagram-hud-callouts">
            <div class="diagram-hud-example" id="diagram-hud-example">
              <strong>💡 Observation:</strong> <span>Air is warmed and humidified before reaching lungs.</span>
            </div>
            <div class="diagram-hud-trick" id="diagram-hud-trick">
              <strong>🧠 Memory Trick:</strong> <span>The hollow highway channeling filtered air straight to the chest!</span>
            </div>
          </div>
          <div class="diagram-hud-footer">
            <span class="diagram-hud-source" id="diagram-hud-source">Source: Respiratory System Notes</span>
            <button class="btn-jump-square" id="diagram-hud-jump-btn">
              <span>🔍 Jump to Square Notes</span>
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindInteractiveDiagram({ stage, topic, parts, defaultNum: 1 });
  }

  // ================= 3. DIGESTIVE SYSTEM VISUALIZER =================
  loadDigestiveLab(stage, topic) {
    const parts = [
      {
        num: 1,
        icon: "👄",
        keywords: ["mouth", "esophagus", "peristalsis"],
        fallback: {
          name: "Mouth & Esophagus",
          formula: "Mastication & Peristalsis",
          explanation: "Teeth physically crush food, salivary enzymes digest starch, and peristalsis squeezes food downward.",
          example: "Peristalsis is strong enough to transport food to your stomach even if you are hanging upside down!",
          trick: "Memory Trick: Peristalsis is the muscular wave pushing food down!"
        }
      },
      {
        num: 2,
        icon: "🥣",
        keywords: ["stomach", "acid", "chyme"],
        fallback: {
          name: "Stomach",
          formula: "Acid & Churning Tank",
          explanation: "Hydrochloric acid and enzymes liquefy food into nutrient chyme while destroying pathogens.",
          example: "A protective mucus barrier prevents the strong stomach acid (pH 1.5–2.0) from digesting the stomach itself.",
          trick: "Memory Trick: The acid blender tank liquefying food!"
        }
      },
      {
        num: 3,
        icon: "🧬",
        keywords: ["small intestine", "villi", "absorption"],
        fallback: {
          name: "Small Intestine & Villi",
          formula: "90% Nutrient Absorption Hub",
          explanation: "Millions of finger-like villi absorb glucose, amino acids, and fats directly into the blood.",
          example: "Stretches over 20 feet long with microvilli that create an absorption surface area of 250 square meters.",
          trick: "Memory Trick: Small Intestine has HUGE surface area for absorption!"
        }
      },
      {
        num: 4,
        icon: "🔄",
        keywords: ["large intestine", "colon", "water"],
        fallback: {
          name: "Large Intestine",
          formula: "Water Reclamation & Waste Compaction",
          explanation: "Reabsorbs water and compacts indigestible matter for excretion.",
          example: "Millions of beneficial gut bacteria synthesize vitamin K and break down fibrous matter.",
          trick: "Memory Trick: The water recycling plant of the body!"
        }
      },
      {
        num: 5,
        icon: "🧪",
        keywords: ["liver", "pancreas", "gallbladder", "bile", "enzymes"],
        fallback: {
          name: "Liver, Gallbladder & Pancreas",
          formula: "Digestive Chemistry & Enzymes",
          explanation: "Liver produces bile to break down fats, while the pancreas secretes digestive enzymes and insulin.",
          example: "Bile is stored in the gallbladder and squirted into the duodenum when fatty foods arrive.",
          trick: "Memory Trick: The chemical factory supporting digestion!"
        }
      }
    ];

    stage.innerHTML = `
      <div class="diagram-interactive-wrap">
        <div class="diagram-viewport-container">
          <svg class="diagram-svg-canvas" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="digStomachGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f87171" />
                <stop offset="100%" stop-color="#b91c1c" />
              </linearGradient>
              <linearGradient id="digLiverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#991b1b" />
                <stop offset="100%" stop-color="#581c87" />
              </linearGradient>
              <linearGradient id="digSmallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fbbf24" />
                <stop offset="100%" stop-color="#d97706" />
              </linearGradient>
              <linearGradient id="digLargeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#34d399" />
                <stop offset="100%" stop-color="#047857" />
              </linearGradient>
            </defs>

            <!-- 1. MOUTH & ESOPHAGUS -->
            <g id="path-dig-1" class="diagram-interactive-path" data-num="1">
              <path d="M 260,25 Q 285,25 285,45 Q 275,55 275,70" fill="none" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" />
              <!-- Esophagus Tube with Peristalsis rings -->
              <path d="M 275,70 L 275,145" fill="none" stroke="#fb7185" stroke-width="12" stroke-linecap="round" />
              <!-- Wave constriction lines -->
              <path d="M 269,85 Q 275,80 281,85" fill="none" stroke="#881337" stroke-width="2.5" />
              <path d="M 269,105 Q 275,100 281,105" fill="none" stroke="#881337" stroke-width="2.5" />
              <path d="M 269,125 Q 275,120 281,125" fill="none" stroke="#881337" stroke-width="2.5" />
              <text x="245" y="105" fill="#fecdd3" font-size="9" font-weight="bold" text-anchor="end">Esophagus (Peristalsis)</text>
            </g>

            <!-- 5. LIVER, GALLBLADDER & PANCREAS -->
            <g id="path-dig-5" class="diagram-interactive-path" data-num="5">
              <!-- Liver Wedge -->
              <path d="M 210,135 C 255,135 265,155 255,185 C 245,210 185,200 175,175 C 170,150 185,135 210,135 Z" fill="url(#digLiverGrad)" stroke="#fca5a5" stroke-width="2" />
              <text x="215" y="170" fill="#fff" font-size="10" font-weight="900" text-anchor="middle">Liver</text>
              <!-- Gallbladder -->
              <ellipse cx="235" cy="190" rx="9" ry="6" fill="#16a34a" stroke="#86efac" stroke-width="1.5" />
              <!-- Pancreas -->
              <path d="M 285,185 Q 330,175 350,195 Q 315,205 285,190" fill="#fde047" stroke="#eab308" stroke-width="2" />
              <text x="345" y="180" fill="#fef08a" font-size="8" font-weight="bold">Pancreas</text>
            </g>

            <!-- 2. STOMACH (J-shaped Acid Tank) -->
            <g id="path-dig-2" class="diagram-interactive-path" data-num="2">
              <path d="M 275,145 C 315,140 345,160 340,200 C 335,235 285,230 265,205 C 260,190 270,165 275,145 Z" fill="url(#digStomachGrad)" stroke="#fecaca" stroke-width="3" />
              <path d="M 290,165 Q 305,180 295,200" fill="none" stroke="#7f1d1d" stroke-width="2" opacity="0.6" />
              <path d="M 310,170 Q 325,185 315,205" fill="none" stroke="#7f1d1d" stroke-width="2" opacity="0.6" />
              <text x="305" y="190" fill="#fff" font-size="10" font-weight="900" text-anchor="middle">Stomach</text>
            </g>

            <!-- 4. LARGE INTESTINE (Framing Inverted U-Shape) -->
            <g id="path-dig-4" class="diagram-interactive-path" data-num="4">
              <!-- Ascending, Transverse, Descending colon -->
              <path d="M 210,320 L 210,230 Q 210,210 235,210 L 375,210 Q 395,210 395,230 L 395,330 L 340,330 L 340,375" fill="none" stroke="url(#digLargeGrad)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
              <text x="305" y="222" fill="#d1fae5" font-size="9" font-weight="900" text-anchor="middle">Large Intestine (Colon)</text>
            </g>

            <!-- 3. SMALL INTESTINE & ZOOMED VILLI -->
            <g id="path-dig-3" class="diagram-interactive-path" data-num="3">
              <!-- Coiled central loops -->
              <path d="M 270,225 Q 310,240 270,255 Q 340,265 260,280 Q 350,295 280,310 Q 320,315 295,325" fill="none" stroke="url(#digSmallGrad)" stroke-width="14" stroke-linecap="round" />
              <!-- Zoomed Villi Callout -->
              <g transform="translate(460, 230)">
                <rect x="0" y="0" width="160" height="130" rx="14" fill="rgba(15, 23, 42, 0.9)" stroke="#fbbf24" stroke-width="1.5" />
                <text x="80" y="20" fill="#fbbf24" font-size="10" font-weight="900" text-anchor="middle">ZOOM: Intestinal Villi</text>
                <!-- Finger like microvilli -->
                <path d="M 25,100 L 25,50 Q 35,40 45,50 L 45,100" fill="#fde68a" stroke="#d97706" stroke-width="2" />
                <path d="M 55,100 L 55,42 Q 65,32 75,42 L 75,100" fill="#fde68a" stroke="#d97706" stroke-width="2" />
                <path d="M 85,100 L 85,46 Q 95,36 105,46 L 105,100" fill="#fde68a" stroke="#d97706" stroke-width="2" />
                <path d="M 115,100 L 115,54 Q 125,44 135,54 L 135,100" fill="#fde68a" stroke="#d97706" stroke-width="2" />
                <!-- Capillary core inside villi -->
                <path d="M 65,100 L 65,55" stroke="#ef4444" stroke-width="2" />
                <text x="80" y="118" fill="#fef08a" font-size="8" font-weight="bold" text-anchor="middle">Nutrients ➔ Blood</text>
              </g>
            </g>

            <!-- PINS -->
            <g class="diagram-pins-layer">
              <g class="diagram-pin-marker" data-num="1" transform="translate(280, 75)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#f43f5e" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text></g>
              <g class="diagram-pin-marker" data-num="2" transform="translate(315, 175)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#dc2626" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text></g>
              <g class="diagram-pin-marker" data-num="3" transform="translate(285, 275)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#d97706" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text></g>
              <g class="diagram-pin-marker" data-num="4" transform="translate(395, 265)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#059669" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">4</text></g>
              <g class="diagram-pin-marker" data-num="5" transform="translate(195, 165)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#7c2d12" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">5</text></g>
            </g>
          </svg>
        </div>

        <!-- Quick Access Parts Dock -->
        <div class="diagram-parts-quickbar">
          <button class="diagram-part-btn active" data-num="1"><span class="btn-badge">1</span> 👄 Mouth & Esophagus</button>
          <button class="diagram-part-btn" data-num="2"><span class="btn-badge">2</span> 🥣 Stomach</button>
          <button class="diagram-part-btn" data-num="3"><span class="btn-badge">3</span> 🧬 Small Intestine & Villi</button>
          <button class="diagram-part-btn" data-num="4"><span class="btn-badge">4</span> 🔄 Large Intestine</button>
          <button class="diagram-part-btn" data-num="5"><span class="btn-badge">5</span> 🧪 Liver & Pancreas</button>
        </div>

        <!-- Inspection HUD Card -->
        <div class="diagram-hud-card">
          <div class="diagram-hud-header">
            <span class="diagram-hud-title" id="diagram-hud-title">👄 1. Mouth & Esophagus</span>
            <span class="diagram-hud-formula" id="diagram-hud-formula">Mastication & Peristalsis</span>
          </div>
          <p class="diagram-hud-desc" id="diagram-hud-desc">
            Teeth physically crush food, salivary enzymes digest starch, and peristalsis squeezes food downward.
          </p>
          <div class="diagram-hud-callouts">
            <div class="diagram-hud-example" id="diagram-hud-example">
              <strong>💡 Observation:</strong> <span>Peristalsis works against gravity!</span>
            </div>
            <div class="diagram-hud-trick" id="diagram-hud-trick">
              <strong>🧠 Memory Trick:</strong> <span>Peristalsis is the muscular wave pushing food down!</span>
            </div>
          </div>
          <div class="diagram-hud-footer">
            <span class="diagram-hud-source" id="diagram-hud-source">Source: Digestive System Notes</span>
            <button class="btn-jump-square" id="diagram-hud-jump-btn">
              <span>🔍 Jump to Square Notes</span>
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindInteractiveDiagram({ stage, topic, parts, defaultNum: 1 });
  }

  // ================= 4. NERVOUS SYSTEM VISUALIZER =================
  loadNervousLab(stage, topic) {
    const parts = [
      {
        num: 1,
        icon: "🧠",
        keywords: ["brain", "cerebrum", "cerebellum", "brainstem"],
        fallback: {
          name: "Brain (Central Command)",
          formula: "Cerebrum, Cerebellum, Brainstem",
          explanation: "Directs voluntary movement, processes sensory input, and controls vital functions like heartbeat.",
          example: "Contains approximately 86 billion neurons communicating through trillions of synaptic connections.",
          trick: "Memory Trick: The supercomputer running all body systems!"
        }
      },
      {
        num: 2,
        icon: "⚡",
        keywords: ["spinal cord", "spine", "vertebra"],
        fallback: {
          name: "Spinal Cord",
          formula: "Information Superhighway",
          explanation: "Connects the brain to peripheral nerves and mediates rapid life-saving reflex arcs.",
          example: "Protected inside the bony spinal vertebrae, conducting signals between brain and body in milliseconds.",
          trick: "Memory Trick: The fiber-optic trunk line running down your back!"
        }
      },
      {
        num: 3,
        icon: "🧬",
        keywords: ["neuron", "nerve cell", "axon"],
        fallback: {
          name: "Neurons (Nerve Cells)",
          formula: "Dendrites ➔ Axon ➔ Synapse",
          explanation: "Specialized cells transmitting electrical impulses at speeds over 200 mph.",
          example: "The longest single neuron in the human body is the sciatic nerve running from lower spine to big toe!",
          trick: "Memory Trick: High-speed electrical messengers firing signals!"
        }
      },
      {
        num: 4,
        icon: "✨",
        keywords: ["synapse", "dendrite", "neurotransmitter"],
        fallback: {
          name: "Dendrites & Synaptic Cleft",
          formula: "Chemical Neurotransmitter Junction",
          explanation: "Dendrites receive incoming messages while synapses release neurotransmitter chemicals across microscopic gaps.",
          example: "Chemical messengers like dopamine and acetylcholine bridge the 20-nanometer synaptic cleft instantly.",
          trick: "Memory Trick: Synapse is the microscopic whisper between neurons!"
        }
      },
      {
        num: 5,
        icon: "🖐️",
        keywords: ["peripheral", "reflex", "nerve"],
        fallback: {
          name: "Peripheral Nerves & Reflex Arcs",
          formula: "Sensory & Motor Arc Network",
          explanation: "Branching nerve network reaching muscles and organs that trigger instant reflex actions before signals reach the conscious brain.",
          example: "Touching a hot stove causes your hand to jerk back before you even consciously perceive the pain!",
          trick: "Memory Trick: Emergency reflexes react before reaching the brain!"
        }
      }
    ];

    stage.innerHTML = `
      <div class="diagram-interactive-wrap">
        <div class="diagram-viewport-container">
          <svg class="diagram-svg-canvas" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="nervBrainGrad" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stop-color="#e9d5ff" />
                <stop offset="60%" stop-color="#a855f7" />
                <stop offset="100%" stop-color="#581c87" />
              </radialGradient>
              <linearGradient id="nervSpineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8" />
                <stop offset="100%" stop-color="#6366f1" />
              </linearGradient>
              <linearGradient id="axonMyelinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#fde047" />
                <stop offset="100%" stop-color="#eab308" />
              </linearGradient>
            </defs>

            <!-- 1. BRAIN (Central Command) -->
            <g id="path-nerv-1" class="diagram-interactive-path" data-num="1">
              <!-- Cerebrum folds -->
              <path d="M 230,45 C 195,45 180,75 185,100 C 185,120 205,130 220,130 L 240,130 C 255,130 275,120 275,100 C 280,75 265,45 230,45 Z" fill="url(#nervBrainGrad)" stroke="#c084fc" stroke-width="2.5" />
              <!-- Gyri convolutions -->
              <path d="M 195,75 Q 220,65 245,75 Q 260,90 240,105 Q 215,95 200,105" fill="none" stroke="#581c87" stroke-width="2" />
              <!-- Cerebellum & Brainstem -->
              <ellipse cx="250" cy="120" rx="16" ry="12" fill="#7e22ce" stroke="#d8b4fe" stroke-width="1.5" />
              <path d="M 230,125 L 230,145" stroke="#a855f7" stroke-width="8" stroke-linecap="round" />
              <text x="230" y="32" fill="#f3e8ff" font-size="10" font-weight="900" text-anchor="middle">Brain</text>
            </g>

            <!-- 2. SPINAL CORD & 5. PERIPHERAL NERVES -->
            <g id="path-nerv-2" class="diagram-interactive-path" data-num="2">
              <!-- Central Spinal Conduit -->
              <rect x="226" y="145" width="8" height="195" rx="4" fill="url(#nervSpineGrad)" stroke="#38bdf8" stroke-width="2" />
              <!-- Radiating Spinal Nerve Roots (5. Peripheral) -->
              <g id="path-nerv-5" class="diagram-interactive-path" data-num="5">
                <path d="M 226,165 Q 180,180 145,210" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" />
                <path d="M 234,165 Q 280,180 305,210" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" />
                <path d="M 226,205 Q 170,225 130,265" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />
                <path d="M 234,205 Q 285,225 315,265" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />
                <path d="M 226,255 Q 165,280 120,340" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />
                <path d="M 234,255 Q 290,280 325,340" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />
                <text x="145" y="195" fill="#7dd3fc" font-size="9" font-weight="bold">Peripheral Nerves</text>
              </g>
            </g>

            <!-- 3. LARGE ZOOMED MULTIPOLAR NEURON -->
            <g id="path-nerv-3" class="diagram-interactive-path" data-num="3" transform="translate(350, 45)">
              <rect x="0" y="0" width="275" height="340" rx="18" fill="rgba(15, 23, 42, 0.88)" stroke="#a855f7" stroke-width="1.5" />
              <text x="135" y="24" fill="#c084fc" font-size="11" font-weight="900" text-anchor="middle">ZOOM: Neuron (Nerve Cell)</text>

              <!-- Dendrites (4. Dendrites & Synapse) -->
              <g id="path-nerv-4" class="diagram-interactive-path" data-num="4">
                <path d="M 65,85 L 35,65 M 35,65 L 18,55 M 35,65 L 20,78" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />
                <path d="M 85,65 L 75,40 M 75,40 L 60,28 M 75,40 L 88,25" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />
                <path d="M 105,80 L 125,55 M 125,55 L 140,42 M 125,55 L 145,62" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />
                <text x="35" y="105" fill="#7dd3fc" font-size="8" font-weight="bold">Dendrites</text>
              </g>

              <!-- Soma (Cell Body) & Nucleus -->
              <circle cx="85" cy="85" r="22" fill="#7e22ce" stroke="#e9d5ff" stroke-width="2" />
              <circle cx="85" cy="85" r="8" fill="#fde047" />

              <!-- Long Axon with Myelin Sheaths -->
              <path d="M 85,107 L 85,270" stroke="#facc15" stroke-width="4" />
              <!-- Myelin Pods -->
              <rect x="74" y="120" width="22" height="30" rx="8" fill="url(#axonMyelinGrad)" stroke="#fff" stroke-width="1.5" />
              <rect x="74" y="165" width="22" height="30" rx="8" fill="url(#axonMyelinGrad)" stroke="#fff" stroke-width="1.5" />
              <rect x="74" y="210" width="22" height="30" rx="8" fill="url(#axonMyelinGrad)" stroke="#fff" stroke-width="1.5" />
              <text x="105" y="185" fill="#fde047" font-size="8" font-weight="bold">Myelin Sheath</text>

              <!-- Axon Terminals & Synapse (4) -->
              <path d="M 85,270 L 65,305 M 65,305 L 50,318 M 65,305 L 70,325" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />
              <path d="M 85,270 L 105,305 M 105,305 L 120,318 M 105,305 L 100,325" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />
              <circle cx="50" cy="318" r="4" fill="#38bdf8" />
              <circle cx="120" cy="318" r="4" fill="#38bdf8" />
              <text x="135" y="305" fill="#38bdf8" font-size="9" font-weight="bold">Synaptic Terminals</text>
            </g>

            <!-- PINS -->
            <g class="diagram-pins-layer">
              <g class="diagram-pin-marker" data-num="1" transform="translate(230, 85)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#8b5cf6" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text></g>
              <g class="diagram-pin-marker" data-num="2" transform="translate(230, 220)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#0284c7" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text></g>
              <g class="diagram-pin-marker" data-num="3" transform="translate(435, 130)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#f59e0b" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text></g>
              <g class="diagram-pin-marker" data-num="4" transform="translate(435, 305)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#06b6d4" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">4</text></g>
              <g class="diagram-pin-marker" data-num="5" transform="translate(155, 235)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#3b82f6" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">5</text></g>
            </g>
          </svg>
        </div>

        <!-- Quick Access Parts Dock -->
        <div class="diagram-parts-quickbar">
          <button class="diagram-part-btn active" data-num="1"><span class="btn-badge">1</span> 🧠 Brain</button>
          <button class="diagram-part-btn" data-num="2"><span class="btn-badge">2</span> ⚡ Spinal Cord</button>
          <button class="diagram-part-btn" data-num="3"><span class="btn-badge">3</span> 🧬 Neurons</button>
          <button class="diagram-part-btn" data-num="4"><span class="btn-badge">4</span> ✨ Dendrites & Synapse</button>
          <button class="diagram-part-btn" data-num="5"><span class="btn-badge">5</span> 🖐️ Peripheral Nerves</button>
        </div>

        <!-- Inspection HUD Card -->
        <div class="diagram-hud-card">
          <div class="diagram-hud-header">
            <span class="diagram-hud-title" id="diagram-hud-title">🧠 1. Brain (Central Command)</span>
            <span class="diagram-hud-formula" id="diagram-hud-formula">Cerebrum, Cerebellum, Brainstem</span>
          </div>
          <p class="diagram-hud-desc" id="diagram-hud-desc">
            Directs voluntary movement, processes sensory input, and controls vital functions like heartbeat.
          </p>
          <div class="diagram-hud-callouts">
            <div class="diagram-hud-example" id="diagram-hud-example">
              <strong>💡 Observation:</strong> <span>Contains 86 billion interconnected neurons!</span>
            </div>
            <div class="diagram-hud-trick" id="diagram-hud-trick">
              <strong>🧠 Memory Trick:</strong> <span>The supercomputer running all body systems!</span>
            </div>
          </div>
          <div class="diagram-hud-footer">
            <span class="diagram-hud-source" id="diagram-hud-source">Source: Nervous System Notes</span>
            <button class="btn-jump-square" id="diagram-hud-jump-btn">
              <span>🔍 Jump to Square Notes</span>
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindInteractiveDiagram({ stage, topic, parts, defaultNum: 1 });
  }

  // ================= 5. ANIMAL CELL VISUALIZER =================
  loadAnimalCellLab(stage, topic) {
    const parts = [
      {
        num: 1,
        icon: "🛡️",
        keywords: ["cell membrane", "membrane"],
        fallback: {
          name: "Cell Membrane",
          formula: "Semi-Permeable Boundary",
          explanation: "Thin layer that surrounds the cell. It provides structure and protection and it is semi-permeable.",
          example: "Regulates what molecules (water, oxygen, glucose) enter and exit the animal cell.",
          trick: "Memory Trick: The security gatekeeper of the cell!"
        }
      },
      {
        num: 2,
        icon: "💧",
        keywords: ["cytoplasm", "internal fluid"],
        fallback: {
          name: "Cytoplasm",
          formula: "Internal Fluid Matrix",
          explanation: "The fluid in which organelles are suspended. It maintains the pressure inside of the cell.",
          example: "Gel-like suspension where biochemical reactions occur continuously.",
          trick: "Memory Trick: Cyto = Cell, Plasm = Fluid matrix!"
        }
      },
      {
        num: 3,
        icon: "⚡",
        keywords: ["mitochondria", "powerhouse"],
        fallback: {
          name: "Mitochondria",
          formula: "Powerhouse of the Cell",
          explanation: "Nicknamed the powerhouse of the cell because they provide the energy for the cell. The site of cellular respiration.",
          example: "Converts glucose and oxygen into ATP fuel to power cellular work.",
          trick: "Memory Trick: Mighty Mitochondria = Powerhouse!"
        }
      },
      {
        num: 4,
        icon: "🧪",
        keywords: ["smooth endoplasmic reticulum", "smooth er", "lipid"],
        fallback: {
          name: "Endoplasmic Reticulum (Smooth)",
          formula: "Transport & Lipid Synthesis",
          explanation: "Smooth endoplasmic reticulum makes lipids (fats), modifies proteins and transports them throughout the cell.",
          example: "Synthesizes cholesterol and steroid hormones needed by the body.",
          trick: "Memory Trick: Smooth ER makes smooth lipids and highways!"
        }
      },
      {
        num: 5,
        icon: "📦",
        keywords: ["golgi", "packaging"],
        fallback: {
          name: "Golgi Body",
          formula: "Packaging & Shipping Center",
          explanation: "Packages proteins and carbohydrates into vesicles for transport outside of the cell.",
          example: "Tags proteins with molecular addresses so vesicles deliver them accurately.",
          trick: "Memory Trick: Golgi = 'Go' deliver the packages!"
        }
      },
      {
        num: 6,
        icon: "👑",
        keywords: ["nucleus", "nucleolus", "dna"],
        fallback: {
          name: "Nucleus & Nucleolus",
          formula: "Control Center & DNA Storage",
          explanation: "Control center of the cell that directs functions and contains DNA. The nucleolus aids in the production of ribosomes.",
          example: "Houses chromosomes that code instructions for cellular division and synthesis.",
          trick: "Memory Trick: Nucleus = Brain / Boss of the cell!"
        }
      },
      {
        num: 7,
        icon: "🏭",
        keywords: ["rough er", "ribosome", "protein"],
        fallback: {
          name: "Rough ER & Ribosomes",
          formula: "Protein Synthesis Factory",
          explanation: "Rough Endoplasmic Reticulum has ribosomes bound to its membranes. Ribosomes are the site of protein synthesis.",
          example: "Assembles amino acid chains into functional structural proteins and enzymes.",
          trick: "Memory Trick: Ribosomes make Ribs (Proteins)!"
        }
      },
      {
        num: 8,
        icon: "♻️",
        keywords: ["lysosome", "centrosome", "digestive"],
        fallback: {
          name: "Lysosomes & Centrosome",
          formula: "Digestive Enzymes & Division Machinery",
          explanation: "Contains hydrolytic enzymes that break down cellular waste and worn-out organelles.",
          example: "Recycles cellular biomolecules and destroys foreign bacteria.",
          trick: "Memory Trick: Lysosomes = Cellular garbage disposal!"
        }
      }
    ];

    stage.innerHTML = `
      <div class="diagram-interactive-wrap">
        <div class="diagram-viewport-container">
          <svg class="diagram-svg-canvas" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="animCytoGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#1e1b4b" stop-opacity="0.8" />
                <stop offset="80%" stop-color="#0f172a" stop-opacity="0.95" />
                <stop offset="100%" stop-color="#020617" />
              </radialGradient>
              <radialGradient id="animNucGrad" cx="40%" cy="40%" r="50%">
                <stop offset="0%" stop-color="#c084fc" />
                <stop offset="65%" stop-color="#7e22ce" />
                <stop offset="100%" stop-color="#3b0764" />
              </radialGradient>
              <linearGradient id="animMitoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fb923c" />
                <stop offset="100%" stop-color="#c2410c" />
              </linearGradient>
            </defs>

            <!-- 1. CELL MEMBRANE & 2. CYTOPLASM (Flexible rounded contour) -->
            <path id="path-anim-1" class="diagram-interactive-path" data-num="1" d="M 120,200 C 110,100 240,50 340,55 C 470,60 550,120 540,230 C 530,340 440,375 320,370 C 180,365 130,300 120,200 Z" fill="url(#animCytoGrad)" stroke="#38bdf8" stroke-width="4" stroke-dasharray="10 4" />

            <!-- 6. NUCLEUS & NUCLEOLUS -->
            <g id="path-anim-6" class="diagram-interactive-path" data-num="6">
              <circle cx="310" cy="205" r="52" fill="url(#animNucGrad)" stroke="#e9d5ff" stroke-width="2.5" />
              <circle cx="300" cy="210" r="18" fill="#3b0764" stroke="#a855f7" stroke-width="2" />
              <text x="310" y="248" fill="#e9d5ff" font-size="9" font-weight="bold" text-anchor="middle">Nucleus</text>
            </g>

            <!-- 4. SMOOTH ER -->
            <g id="path-anim-4" class="diagram-interactive-path" data-num="4">
              <path d="M 370,185 Q 410,165 440,190 Q 405,205 375,210" fill="none" stroke="#c084fc" stroke-width="6" stroke-linecap="round" />
              <path d="M 380,170 Q 420,150 455,175 Q 420,190 385,195" fill="none" stroke="#c084fc" stroke-width="5" stroke-linecap="round" />
            </g>

            <!-- 7. ROUGH ER & RIBOSOMES -->
            <g id="path-anim-7" class="diagram-interactive-path" data-num="7">
              <path d="M 255,190 Q 220,170 195,195 Q 225,210 255,215" fill="none" stroke="#a855f7" stroke-width="7" stroke-linecap="round" />
              <circle cx="240" cy="180" r="2.5" fill="#fde047" />
              <circle cx="220" cy="178" r="2.5" fill="#fde047" />
              <circle cx="205" cy="190" r="2.5" fill="#fde047" />
              <circle cx="230" cy="200" r="2.5" fill="#fde047" />
            </g>

            <!-- 3. MITOCHONDRIA (Powerhouses) -->
            <g id="path-anim-3" class="diagram-interactive-path" data-num="3">
              <rect x="180" y="110" width="46" height="24" rx="12" transform="rotate(-30 203 122)" fill="url(#animMitoGrad)" stroke="#fdba74" stroke-width="2" />
              <path d="M 190,118 Q 203,112 215,125" fill="none" stroke="#7c2d12" stroke-width="2" />
              <rect x="420" y="270" width="46" height="24" rx="12" transform="rotate(25 443 282)" fill="url(#animMitoGrad)" stroke="#fdba74" stroke-width="2" />
            </g>

            <!-- 5. GOLGI BODY -->
            <g id="path-anim-5" class="diagram-interactive-path" data-num="5">
              <path d="M 390,270 Q 420,260 450,275" fill="none" stroke="#f43f5e" stroke-width="5" stroke-linecap="round" />
              <path d="M 395,282 Q 425,272 455,287" fill="none" stroke="#f43f5e" stroke-width="5" stroke-linecap="round" />
              <circle cx="470" cy="275" r="4.5" fill="#fda4af" />
              <circle cx="465" cy="295" r="5" fill="#fda4af" />
            </g>

            <!-- 8. LYSOSOMES & CENTROSOME -->
            <g id="path-anim-8" class="diagram-interactive-path" data-num="8">
              <circle cx="230" cy="280" r="14" fill="#059669" stroke="#6ee7b7" stroke-width="2" />
              <circle cx="280" cy="115" r="12" fill="#059669" stroke="#6ee7b7" stroke-width="2" />
              <!-- Centrioles -->
              <rect x="345" y="125" width="12" height="6" fill="#e2e8f0" stroke="#94a3b8" />
              <rect x="350" y="120" width="6" height="12" fill="#e2e8f0" stroke="#94a3b8" />
            </g>

            <!-- PINS -->
            <g class="diagram-pins-layer">
              <g class="diagram-pin-marker" data-num="1" transform="translate(135, 125)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#0284c7" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text></g>
              <g class="diagram-pin-marker" data-num="2" transform="translate(260, 85)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#0891b2" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text></g>
              <g class="diagram-pin-marker" data-num="3" transform="translate(203, 122)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#ea580c" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text></g>
              <g class="diagram-pin-marker" data-num="4" transform="translate(425, 165)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#8b5cf6" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">4</text></g>
              <g class="diagram-pin-marker" data-num="5" transform="translate(425, 275)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#e11d48" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">5</text></g>
              <g class="diagram-pin-marker" data-num="6" transform="translate(310, 205)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#6d28d9" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">6</text></g>
              <g class="diagram-pin-marker" data-num="7" transform="translate(225, 195)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#9333ea" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">7</text></g>
              <g class="diagram-pin-marker" data-num="8" transform="translate(230, 280)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#059669" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">8</text></g>
            </g>
          </svg>
        </div>

        <!-- Quick Access Parts Dock -->
        <div class="diagram-parts-quickbar">
          <button class="diagram-part-btn active" data-num="1"><span class="btn-badge">1</span> 🛡️ Membrane</button>
          <button class="diagram-part-btn" data-num="2"><span class="btn-badge">2</span> 💧 Cytoplasm</button>
          <button class="diagram-part-btn" data-num="3"><span class="btn-badge">3</span> ⚡ Mitochondria</button>
          <button class="diagram-part-btn" data-num="4"><span class="btn-badge">4</span> 🧪 Smooth ER</button>
          <button class="diagram-part-btn" data-num="5"><span class="btn-badge">5</span> 📦 Golgi Body</button>
          <button class="diagram-part-btn" data-num="6"><span class="btn-badge">6</span> 👑 Nucleus</button>
          <button class="diagram-part-btn" data-num="7"><span class="btn-badge">7</span> 🏭 Rough ER</button>
          <button class="diagram-part-btn" data-num="8"><span class="btn-badge">8</span> ♻️ Lysosomes</button>
        </div>

        <!-- Inspection HUD Card -->
        <div class="diagram-hud-card">
          <div class="diagram-hud-header">
            <span class="diagram-hud-title" id="diagram-hud-title">🛡️ 1. Cell Membrane</span>
            <span class="diagram-hud-formula" id="diagram-hud-formula">Semi-Permeable Boundary</span>
          </div>
          <p class="diagram-hud-desc" id="diagram-hud-desc">
            Thin layer that surrounds the cell. It provides structure and protection and it is semi-permeable.
          </p>
          <div class="diagram-hud-callouts">
            <div class="diagram-hud-example" id="diagram-hud-example">
              <strong>💡 Observation:</strong> <span>Functions like a flexible, selective border patrol surrounding the animal cell.</span>
            </div>
            <div class="diagram-hud-trick" id="diagram-hud-trick">
              <strong>🧠 Memory Trick:</strong> <span>The security gatekeeper of the cell!</span>
            </div>
          </div>
          <div class="diagram-hud-footer">
            <span class="diagram-hud-source" id="diagram-hud-source">Source: Animal Cell Notes</span>
            <button class="btn-jump-square" id="diagram-hud-jump-btn">
              <span>🔍 Jump to Square Notes</span>
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindInteractiveDiagram({ stage, topic, parts, defaultNum: 1 });
  }

  // ================= 6. PLANT CELL BIOLOGY VISUALIZER =================
  loadPlantCellLab(stage, topic) {
    const parts = [
      { num: 1, icon: "🛡️", keywords: ["cell membrane"], fallback: { name: "Cell Membrane", formula: "Semi-Permeable Layer", explanation: "Thin layer surrounding the cell that provides structure and regulates passage.", trick: "Memory Trick: The security gatekeeper of the cell!" } },
      { num: 2, icon: "💧", keywords: ["cytoplasm"], fallback: { name: "Cytoplasm", formula: "Gel-Like Matrix", explanation: "Fluid in which organelles are suspended. Maintains turgor pressure.", trick: "Memory Trick: Cyto = Cell, Plasm = Fluid matrix!" } },
      { num: 3, icon: "⚡", keywords: ["mitochondria"], fallback: { name: "Mitochondria", formula: "Cellular Respiration", explanation: "Powerhouse of the cell providing energy via ATP synthesis.", trick: "Memory Trick: Mighty Mitochondria = Powerhouse!" } },
      { num: 4, icon: "🧪", keywords: ["smooth endoplasmic reticulum", "smooth er"], fallback: { name: "Smooth Endoplasmic Reticulum", formula: "Lipid Synthesis", explanation: "Makes lipids (fats) and transports them throughout the cell.", trick: "Memory Trick: Smooth ER makes smooth lipids!" } },
      { num: 5, icon: "📦", keywords: ["golgi"], fallback: { name: "Golgi Body", formula: "Packaging Center", explanation: "Packages proteins and carbohydrates into vesicles for secretion.", trick: "Memory Trick: Golgi = 'Go' deliver the packages!" } },
      { num: 6, icon: "👑", keywords: ["nucleus"], fallback: { name: "Nucleus & Nucleolus", formula: "Command Center", explanation: "Control center that directs functions and contains DNA blueprints.", trick: "Memory Trick: Nucleus = Brain / Boss of the cell!" } },
      { num: 7, icon: "🏭", keywords: ["rough er", "ribosome"], fallback: { name: "Rough ER & Ribosomes", formula: "Protein Factory", explanation: "Membranes studded with ribosomes that assemble amino acids into proteins.", trick: "Memory Trick: Ribosomes make Ribs (Proteins)!" } },
      { num: 8, icon: "🏰", keywords: ["cell wall"], fallback: { name: "Cell Wall", formula: "Rigid Cellulose Shield", explanation: "Found only in plants, provides rigid structural protection against gravity.", trick: "Memory Trick: Like a fortress wall outside a castle!" } },
      { num: 9, icon: "🌊", keywords: ["central vacuole", "vacuole"], fallback: { name: "Central Vacuole", formula: "Water Storage Reservoir", explanation: "Large water sac exerting turgor pressure so plant stems remain upright.", trick: "Memory Trick: Vacuole is like a giant water reservoir!" } },
      { num: 10, icon: "☀️", keywords: ["chloroplast"], fallback: { name: "Chloroplast", formula: "Photosynthesis Engine", explanation: "Converts light energy from the sun into glucose sugars using chlorophyll.", trick: "Memory Trick: Solar panels of the plant world!" } }
    ];

    stage.innerHTML = `
      <div class="diagram-interactive-wrap">
        <div class="diagram-viewport-container">
          <svg class="diagram-svg-canvas" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
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
            <polygon id="path-org-8" class="diagram-interactive-path" data-num="8" points="40,25 560,25 580,70 580,330 560,375 40,375 20,330 20,70" fill="url(#cellWallGrad)" stroke="#4ade80" stroke-width="5" />

            <!-- 1. CELL MEMBRANE & CYTOPLASM -->
            <polygon id="path-org-1" class="diagram-interactive-path" data-num="1" points="52,38 548,38 565,78 565,322 548,362 52,362 35,322 35,78" fill="url(#cytoGrad)" stroke="#22c55e" stroke-width="3" stroke-dasharray="8 4" />

            <!-- 9. CENTRAL VACUOLE -->
            <path id="path-org-9" class="diagram-interactive-path" data-num="9" d="M 170,140 C 130,160 120,240 150,290 C 180,340 320,340 370,310 C 420,280 430,220 400,180 C 370,140 280,120 220,130 Z" fill="url(#vacuoleGrad)" stroke="#7dd3fc" stroke-width="2" />
            <text x="220" y="240" fill="#e0f2fe" font-size="12" font-weight="bold" opacity="0.6">Central Vacuole</text>

            <!-- 6. NUCLEUS & NUCLEOLUS -->
            <g id="path-org-6" class="diagram-interactive-path" data-num="6">
              <circle cx="340" cy="110" r="48" fill="url(#nucleusGrad)" stroke="#e9d5ff" stroke-width="2.5" />
              <circle cx="330" cy="115" r="18" fill="#3b0764" stroke="#a855f7" stroke-width="2" />
            </g>

            <!-- 4. SMOOTH ER -->
            <g id="path-org-4" class="diagram-interactive-path" data-num="4">
              <path d="M 395,95 Q 430,75 465,100 Q 435,115 400,120" fill="none" stroke="#c084fc" stroke-width="5" stroke-linecap="round" />
            </g>

            <!-- 7. ROUGH ER & RIBOSOMES -->
            <g id="path-org-7" class="diagram-interactive-path" data-num="7">
              <path d="M 285,100 Q 250,75 220,95 Q 255,110 290,115" fill="none" stroke="#a855f7" stroke-width="6" stroke-linecap="round" />
              <circle cx="270" cy="90" r="2.5" fill="#fde047" />
              <circle cx="250" cy="85" r="2.5" fill="#fde047" />
            </g>

            <!-- 10. CHLOROPLASTS -->
            <g id="path-org-10" class="diagram-interactive-path" data-num="10">
              <ellipse cx="110" cy="90" rx="34" ry="20" transform="rotate(-15 110 90)" fill="url(#chloroGrad)" stroke="#86efac" stroke-width="2" />
              <ellipse cx="105" cy="315" rx="32" ry="18" transform="rotate(20 105 315)" fill="url(#chloroGrad)" stroke="#86efac" stroke-width="2" />
              <ellipse cx="480" cy="320" rx="32" ry="18" transform="rotate(-10 480 320)" fill="url(#chloroGrad)" stroke="#86efac" stroke-width="2" />
            </g>

            <!-- 3. MITOCHONDRIA -->
            <g id="path-org-3" class="diagram-interactive-path" data-num="3">
              <rect x="75" y="180" width="46" height="24" rx="12" transform="rotate(-40 98 192)" fill="url(#mitoGrad)" stroke="#fdba74" stroke-width="2" />
              <rect x="470" y="160" width="46" height="24" rx="12" transform="rotate(35 493 172)" fill="url(#mitoGrad)" stroke="#fdba74" stroke-width="2" />
            </g>

            <!-- 5. GOLGI BODY -->
            <g id="path-org-5" class="diagram-interactive-path" data-num="5">
              <path d="M 450,225 Q 480,215 510,230" fill="none" stroke="#f43f5e" stroke-width="5" stroke-linecap="round" />
              <circle cx="530" cy="235" r="4" fill="#fda4af" />
            </g>

            <!-- NUMBERED PINS -->
            <g class="diagram-pins-layer">
              <g class="diagram-pin-marker" data-num="1" transform="translate(48, 55)"><circle cx="0" cy="0" r="14" class="pin-base" fill="#10b981" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text></g>
              <g class="diagram-pin-marker" data-num="2" transform="translate(170, 75)"><circle cx="0" cy="0" r="14" class="pin-base" fill="#059669" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text></g>
              <g class="diagram-pin-marker" data-num="3" transform="translate(98, 192)"><circle cx="0" cy="0" r="14" class="pin-base" fill="#ea580c" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text></g>
              <g class="diagram-pin-marker" data-num="4" transform="translate(440, 85)"><circle cx="0" cy="0" r="14" class="pin-base" fill="#8b5cf6" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">4</text></g>
              <g class="diagram-pin-marker" data-num="5" transform="translate(485, 238)"><circle cx="0" cy="0" r="14" class="pin-base" fill="#e11d48" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">5</text></g>
              <g class="diagram-pin-marker" data-num="6" transform="translate(340, 110)"><circle cx="0" cy="0" r="14" class="pin-base" fill="#6d28d9" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">6</text></g>
              <g class="diagram-pin-marker" data-num="7" transform="translate(255, 95)"><circle cx="0" cy="0" r="14" class="pin-base" fill="#9333ea" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">7</text></g>
              <g class="diagram-pin-marker" data-num="8" transform="translate(26, 260)"><circle cx="0" cy="0" r="14" class="pin-base" fill="#15803d" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">8</text></g>
              <g class="diagram-pin-marker" data-num="9" transform="translate(270, 260)"><circle cx="0" cy="0" r="14" class="pin-base" fill="#0284c7" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">9</text></g>
              <g class="diagram-pin-marker" data-num="10" transform="translate(110, 90)"><circle cx="0" cy="0" r="14" class="pin-base" fill="#16a34a" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">10</text></g>
            </g>
          </svg>
        </div>

        <!-- Quick Access Parts Dock -->
        <div class="diagram-parts-quickbar">
          <button class="diagram-part-btn active" data-num="1"><span class="btn-badge">1</span> 🛡️ Membrane</button>
          <button class="diagram-part-btn" data-num="2"><span class="btn-badge">2</span> 💧 Cytoplasm</button>
          <button class="diagram-part-btn" data-num="3"><span class="btn-badge">3</span> ⚡ Mitochondria</button>
          <button class="diagram-part-btn" data-num="4"><span class="btn-badge">4</span> 🧪 Smooth ER</button>
          <button class="diagram-part-btn" data-num="5"><span class="btn-badge">5</span> 📦 Golgi Body</button>
          <button class="diagram-part-btn" data-num="6"><span class="btn-badge">6</span> 👑 Nucleus</button>
          <button class="diagram-part-btn" data-num="7"><span class="btn-badge">7</span> 🏭 Rough ER</button>
          <button class="diagram-part-btn" data-num="8"><span class="btn-badge">8</span> 🏰 Cell Wall</button>
          <button class="diagram-part-btn" data-num="9"><span class="btn-badge">9</span> 🌊 Vacuole</button>
          <button class="diagram-part-btn" data-num="10"><span class="btn-badge">10</span> ☀️ Chloroplast</button>
        </div>

        <!-- Inspection HUD Card -->
        <div class="diagram-hud-card">
          <div class="diagram-hud-header">
            <span class="diagram-hud-title" id="diagram-hud-title">🛡️ 1. Cell Membrane</span>
            <span class="diagram-hud-formula" id="diagram-hud-formula">Semi-Permeable Boundary Layer</span>
          </div>
          <p class="diagram-hud-desc" id="diagram-hud-desc">
            Thin layer that surrounds the cell. It provides structure and protection and it is semi-permeable.
          </p>
          <div class="diagram-hud-callouts">
            <div class="diagram-hud-example" id="diagram-hud-example">
              <strong>💡 Observation:</strong> <span>Controls what materials enter and exit the plant cell.</span>
            </div>
            <div class="diagram-hud-trick" id="diagram-hud-trick">
              <strong>🧠 Memory Trick:</strong> <span>The security gatekeeper of the cell!</span>
            </div>
          </div>
          <div class="diagram-hud-footer">
            <span class="diagram-hud-source" id="diagram-hud-source">Source: Plant Cell Notes</span>
            <button class="btn-jump-square" id="diagram-hud-jump-btn">
              <span>🔍 Jump to Square Notes</span>
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindInteractiveDiagram({ stage, topic, parts, defaultNum: 1 });
  }

  // ================= 7. UNICELLULAR ORGANISMS VISUALIZER =================
  loadUnicellularLab(stage, topic) {
    const parts = [
      {
        num: 1,
        icon: "🟢",
        keywords: ["euglena", "flagellum"],
        fallback: {
          name: "Euglena",
          formula: "an organism made of only 1 cell.",
          explanation: "Move by using a flagellum (thread like structures that whip around).",
          example: "Can photosynthesize using chloroplasts in sunlight or absorb organic nutrients in the dark.",
          trick: "Memory Trick: Flagellum whips like a propeller!"
        }
      },
      {
        num: 2,
        icon: "🌐",
        keywords: ["volvox", "colony"],
        fallback: {
          name: "Volvox",
          formula: "an organism made of only 1 cell.",
          explanation: "They move by using a flagellum (thread like structures that whip around).",
          example: "Hundreds of individual flagellated cells join to form a rolling hollow sphere.",
          trick: "Memory Trick: Volvox colonies roll with flagella!"
        }
      },
      {
        num: 3,
        icon: "👟",
        keywords: ["paramecium", "cilia"],
        fallback: {
          name: "Paramecium",
          formula: "an organism made of only 1 cell.",
          explanation: "A paramecium moves by cillia (hair like).",
          example: "Thousands of beating cilia sweep food into its oral groove while paddling through water.",
          trick: "Memory Trick: Cilia paddle like tiny oars!"
        }
      },
      {
        num: 4,
        icon: "🦠",
        keywords: ["amoeba", "pseudopodia", "false feet"],
        fallback: {
          name: "Amoeba",
          formula: "an organism made of only 1 cell.",
          explanation: "An amoeba moves by projecting out its cytoplasm. These projections are called pseudopodia (false feet).",
          example: "Surrounds and engulfs food particles through phagocytosis using its false feet.",
          trick: "Memory Trick: Pseudopodia means false feet!"
        }
      },
      {
        num: 5,
        icon: "💧",
        keywords: ["contractile vacuole", "water regulator"],
        fallback: {
          name: "Contractile Vacuole",
          formula: "Cellular Bilge Pump",
          explanation: "Specialized organelle in freshwater protists that collects and expels excess water so the single cell doesn't burst.",
          example: "Pumps water out rhythmically like a microscopic heartbeat.",
          trick: "Memory Trick: Keeps the single cell from popping like a water balloon!"
        }
      }
    ];

    stage.innerHTML = `
      <div class="diagram-interactive-wrap">
        <div class="diagram-viewport-container">
          <svg class="diagram-svg-canvas" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="slideGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#042f2e" stop-opacity="0.9" />
                <stop offset="100%" stop-color="#020617" />
              </radialGradient>
              <linearGradient id="euglenaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#4ade80" />
                <stop offset="100%" stop-color="#15803d" />
              </linearGradient>
            </defs>

            <!-- Darkfield Microscope Slide Glass Outline -->
            <rect x="20" y="20" width="600" height="380" rx="20" fill="url(#slideGrad)" stroke="#14b8a6" stroke-width="2" />
            <text x="320" y="42" fill="#2dd4bf" font-size="11" font-weight="900" text-anchor="middle" letter-spacing="2">MICROSCOPIC PROTIST OBSERVATION CHAMBER (1000X)</text>

            <!-- 1. EUGLENA (Top Left) -->
            <g id="path-uni-1" class="diagram-interactive-path" data-num="1" transform="translate(60, 60)">
              <!-- Spindle body -->
              <path d="M 40,70 C 60,40 140,50 160,85 C 140,120 60,110 40,70 Z" fill="url(#euglenaGrad)" stroke="#86efac" stroke-width="2" />
              <!-- Eyespot (stigma) -->
              <circle cx="58" cy="72" r="4.5" fill="#ef4444" stroke="#fca5a5" />
              <!-- Nucleus -->
              <circle cx="105" cy="80" r="14" fill="#a855f7" opacity="0.8" />
              <!-- Whip Flagellum -->
              <path d="M 40,70 C 20,60 10,40 25,20 C 35,5 15, -10 5,5" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linecap="round" />
              <text x="105" y="125" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">Euglena (Flagellum)</text>
            </g>

            <!-- 2. VOLVOX (Top Right) -->
            <g id="path-uni-2" class="diagram-interactive-path" data-num="2" transform="translate(380, 50)">
              <!-- Sphere perimeter -->
              <circle cx="100" cy="80" r="55" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4 3" />
              <!-- Daughter colonies inside -->
              <circle cx="85" cy="65" r="15" fill="#059669" opacity="0.7" />
              <circle cx="115" cy="95" r="18" fill="#059669" opacity="0.7" />
              <circle cx="120" cy="60" r="12" fill="#059669" opacity="0.7" />
              <text x="100" y="152" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Volvox (Rolling Colony)</text>
            </g>

            <!-- 3. PARAMECIUM (Bottom Left) -->
            <g id="path-uni-3" class="diagram-interactive-path" data-num="3" transform="translate(60, 200)">
              <!-- Slipper shape -->
              <path d="M 60,95 C 40,60 60,30 110,35 C 160,40 190,75 180,110 C 170,140 120,150 75,130 C 50,115 50,110 60,95 Z" fill="#38bdf8" fill-opacity="0.3" stroke="#0284c7" stroke-width="2.5" />
              <!-- Oral groove -->
              <path d="M 120,55 Q 110,85 135,100" fill="none" stroke="#0369a1" stroke-width="4" stroke-linecap="round" />
              <!-- Cilia Fringe -->
              <path d="M 50,90 Q 30,55 105,30 Q 170,35 185,75 Q 195,115 175,145 Q 120,160 65,135 Z" fill="none" stroke="#7dd3fc" stroke-width="2" stroke-dasharray="3 3" />
              <!-- 5. Contractile Vacuole star -->
              <g id="path-uni-5" class="diagram-interactive-path" data-num="5" transform="translate(150, 75)">
                <circle cx="0" cy="0" r="7" fill="#0284c7" />
                <path d="M -12,0 L 12,0 M 0,-12 L 0,12" stroke="#38bdf8" stroke-width="2" />
              </g>
              <text x="120" y="165" fill="#bae6fd" font-size="10" font-weight="bold" text-anchor="middle">Paramecium (Cilia)</text>
            </g>

            <!-- 4. AMOEBA (Bottom Right) -->
            <g id="path-uni-4" class="diagram-interactive-path" data-num="4" transform="translate(360, 210)">
              <!-- Amorphous pseudopodia extensions -->
              <path d="M 110,40 C 150,20 180,60 170,95 C 205,110 195,155 155,150 C 125,180 80,165 70,135 C 40,130 35,90 70,70 C 60,40 90,30 110,40 Z" fill="#a855f7" fill-opacity="0.3" stroke="#9333ea" stroke-width="3" />
              <!-- Food vacuoles -->
              <circle cx="120" cy="85" r="16" fill="#6d28d9" opacity="0.8" />
              <circle cx="95" cy="115" r="9" fill="#eab308" opacity="0.7" />
              <circle cx="145" cy="120" r="7" fill="#10b981" opacity="0.7" />
              <!-- Pseudopodia projection arrow -->
              <path d="M 185,115 L 205,120 M 200,113 L 206,120 L 200,126" stroke="#c084fc" stroke-width="2" fill="none" />
              <text x="125" y="172" fill="#e9d5ff" font-size="10" font-weight="bold" text-anchor="middle">Amoeba (Pseudopodia)</text>
            </g>

            <!-- PINS -->
            <g class="diagram-pins-layer">
              <g class="diagram-pin-marker" data-num="1" transform="translate(100, 100)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#16a34a" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text></g>
              <g class="diagram-pin-marker" data-num="2" transform="translate(480, 120)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#059669" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text></g>
              <g class="diagram-pin-marker" data-num="3" transform="translate(140, 290)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#0284c7" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text></g>
              <g class="diagram-pin-marker" data-num="4" transform="translate(470, 305)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#9333ea" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">4</text></g>
              <g class="diagram-pin-marker" data-num="5" transform="translate(210, 275)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#0891b2" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">5</text></g>
            </g>
          </svg>
        </div>

        <!-- Quick Access Parts Dock -->
        <div class="diagram-parts-quickbar">
          <button class="diagram-part-btn active" data-num="1"><span class="btn-badge">1</span> 🟢 Euglena (Flagellum)</button>
          <button class="diagram-part-btn" data-num="2"><span class="btn-badge">2</span> 🌐 Volvox (Colony)</button>
          <button class="diagram-part-btn" data-num="3"><span class="btn-badge">3</span> 👟 Paramecium (Cilia)</button>
          <button class="diagram-part-btn" data-num="4"><span class="btn-badge">4</span> 🦠 Amoeba (Pseudopodia)</button>
          <button class="diagram-part-btn" data-num="5"><span class="btn-badge">5</span> 💧 Contractile Vacuole</button>
        </div>

        <!-- Inspection HUD Card -->
        <div class="diagram-hud-card">
          <div class="diagram-hud-header">
            <span class="diagram-hud-title" id="diagram-hud-title">🟢 1. Euglena</span>
            <span class="diagram-hud-formula" id="diagram-hud-formula">an organism made of only 1 cell.</span>
          </div>
          <p class="diagram-hud-desc" id="diagram-hud-desc">
            Move by using a flagellum (thread like structures that whip around).
          </p>
          <div class="diagram-hud-callouts">
            <div class="diagram-hud-example" id="diagram-hud-example">
              <strong>💡 Observation:</strong> <span>Can photosynthesize or hunt depending on light availability.</span>
            </div>
            <div class="diagram-hud-trick" id="diagram-hud-trick">
              <strong>🧠 Memory Trick:</strong> <span>Flagellum whips like a propeller!</span>
            </div>
          </div>
          <div class="diagram-hud-footer">
            <span class="diagram-hud-source" id="diagram-hud-source">Source: Unicellular Organisms Notes</span>
            <button class="btn-jump-square" id="diagram-hud-jump-btn">
              <span>🔍 Jump to Square Notes</span>
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindInteractiveDiagram({ stage, topic, parts, defaultNum: 1 });
  }

  // ================= 8. MULTICELLULAR ORGANISMS VISUALIZER =================
  loadMulticellularLab(stage, topic) {
    const parts = [
      {
        num: 1,
        icon: "👥",
        keywords: ["multicellular", "two or more cells"],
        fallback: {
          name: "Multicellular Organisms",
          formula: "an organism made with two or more cells",
          explanation: "• These organisms are able to be seen with the naked eye\n• These organisms need all parts of themselves to survive\n• Plants belong to the category of autotrophs, meaning self feeders\n• In the kingdom Animalia; Heterotrophic - other feeder, organisms that eat other organisms.",
          example: "Humans, dogs, trees, and insects are all multicellular living beings.",
          trick: "Memory Trick: Multi = many cells working together to survive!"
        }
      },
      {
        num: 2,
        icon: "🌱",
        keywords: ["autotroph", "heterotroph"],
        fallback: {
          name: "Autotrophs vs Heterotrophs",
          formula: "Self-Feeders vs Other-Feeders",
          explanation: "Plants are autotrophs (making food via photosynthesis); animals are heterotrophs (consuming other organisms for fuel).",
          example: "Autotrophic oak trees convert solar photons; heterotrophic rabbits consume plant leaves.",
          trick: "Memory Trick: Auto = automatic self food; Hetero = other food!"
        }
      },
      {
        num: 3,
        icon: "🔬",
        keywords: ["specialized cells", "cell"],
        fallback: {
          name: "Specialized Cells (Level 1)",
          formula: "Basic Structural Units",
          explanation: "Individual cells differentiate to perform specialized tasks (e.g. muscle cells contract, nerve cells fire signals, red blood cells carry O₂).",
          example: "A single muscle cell cannot survive on its own outside the multicellular organism.",
          trick: "Memory Trick: Each specialized cell is a worker with one specific job!"
        }
      },
      {
        num: 4,
        icon: "🫀",
        keywords: ["tissue", "organ"],
        fallback: {
          name: "Tissues & Organs (Levels 2 & 3)",
          formula: "Cellular Teams & Functional Units",
          explanation: "Similar cells group into tissues (muscle, nerve, epithelial); different tissues combine to form distinct organs (heart, stomach, lungs).",
          example: "The heart organ contains cardiac muscle tissue, connective tissue, and nerve tissue working in unison.",
          trick: "Memory Trick: Cells make Tissues, Tissues make Organs!"
        }
      },
      {
        num: 5,
        icon: "🧍",
        keywords: ["organ system", "organism"],
        fallback: {
          name: "Organ Systems & Whole Organism (Levels 4 & 5)",
          formula: "Interdependent Life Support Systems",
          explanation: "Groups of organs cooperate into organ systems (circulatory, respiratory, digestive) that keep the entire organism alive.",
          example: "Respiratory system brings in oxygen, circulatory distributes it, and digestive delivers the fuel.",
          trick: "Memory Trick: Cells ➔ Tissues ➔ Organs ➔ Organ Systems ➔ Organism!"
        }
      }
    ];

    stage.innerHTML = `
      <div class="diagram-interactive-wrap">
        <div class="diagram-viewport-container">
          <svg class="diagram-svg-canvas" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pyr1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#3b82f6" /><stop offset="100%" stop-color="#1d4ed8" /></linearGradient>
              <linearGradient id="pyr2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#06b6d4" /><stop offset="100%" stop-color="#0e7490" /></linearGradient>
              <linearGradient id="pyr3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#10b981" /><stop offset="100%" stop-color="#047857" /></linearGradient>
              <linearGradient id="pyr4" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f59e0b" /><stop offset="100%" stop-color="#b45309" /></linearGradient>
              <linearGradient id="pyr5" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#a855f7" /><stop offset="100%" stop-color="#6b21a8" /></linearGradient>
            </defs>

            <text x="320" y="35" fill="#e0f2fe" font-size="12" font-weight="900" text-anchor="middle" letter-spacing="1">HIERARCHY OF MULTICELLULAR ORGANIZATION</text>

            <!-- 5 TIER PYRAMID / LADDER -->
            <!-- Level 5: Whole Organism -->
            <g id="path-multi-1" class="diagram-interactive-path" data-num="1">
              <polygon points="260,60 380,60 410,115 230,115" fill="url(#pyr5)" stroke="#e9d5ff" stroke-width="2" />
              <text x="320" y="85" fill="#fff" font-size="11" font-weight="900" text-anchor="middle">5. WHOLE ORGANISM</text>
              <text x="320" y="102" fill="#f3e8ff" font-size="8" font-weight="bold" text-anchor="middle">Autotrophs & Heterotrophs</text>
            </g>

            <!-- Level 4: Organ Systems -->
            <g id="path-multi-5" class="diagram-interactive-path" data-num="5">
              <polygon points="230,120 410,120 440,175 200,175" fill="url(#pyr4)" stroke="#fef3c7" stroke-width="2" />
              <text x="320" y="145" fill="#fff" font-size="11" font-weight="900" text-anchor="middle">4. ORGAN SYSTEMS</text>
              <text x="320" y="162" fill="#fef9c3" font-size="8" font-weight="bold" text-anchor="middle">Circulatory, Respiratory, Digestive</text>
            </g>

            <!-- Level 3: Organs -->
            <g id="path-multi-4" class="diagram-interactive-path" data-num="4">
              <polygon points="200,180 440,180 470,235 170,235" fill="url(#pyr3)" stroke="#d1fae5" stroke-width="2" />
              <text x="320" y="205" fill="#fff" font-size="11" font-weight="900" text-anchor="middle">3. ORGANS</text>
              <text x="320" y="222" fill="#ecfdf5" font-size="8" font-weight="bold" text-anchor="middle">Heart, Stomach, Lungs, Brain</text>
            </g>

            <!-- Level 2: Tissues -->
            <g class="diagram-interactive-path" data-num="4">
              <polygon points="170,240 470,240 500,295 140,295" fill="url(#pyr2)" stroke="#cffafe" stroke-width="2" />
              <text x="320" y="265" fill="#fff" font-size="11" font-weight="900" text-anchor="middle">2. TISSUES</text>
              <text x="320" y="282" fill="#e0f2fe" font-size="8" font-weight="bold" text-anchor="middle">Muscle, Nerve, Epithelial, Connective</text>
            </g>

            <!-- Level 1: Cells -->
            <g id="path-multi-3" class="diagram-interactive-path" data-num="3">
              <polygon points="140,300 500,300 530,355 110,355" fill="url(#pyr1)" stroke="#dbeafe" stroke-width="2" />
              <text x="320" y="325" fill="#fff" font-size="11" font-weight="900" text-anchor="middle">1. SPECIALIZED CELLS</text>
              <text x="320" y="342" fill="#eff6ff" font-size="8" font-weight="bold" text-anchor="middle">Basic building blocks (Cannot live alone)</text>
            </g>

            <!-- 2. AUTOTROPHS vs HETEROTROPHS CALLOUTS -->
            <g id="path-multi-2" class="diagram-interactive-path" data-num="2">
              <rect x="25" y="70" width="165" height="70" rx="12" fill="rgba(6, 78, 59, 0.7)" stroke="#34d399" stroke-width="1.5" />
              <text x="107" y="92" fill="#6ee7b7" font-size="10" font-weight="900" text-anchor="middle">🌱 AUTOTROPHS</text>
              <text x="107" y="110" fill="#ecfdf5" font-size="8" font-weight="bold" text-anchor="middle">Self-feeders (Plants make food</text>
              <text x="107" y="124" fill="#ecfdf5" font-size="8" font-weight="bold" text-anchor="middle">via photosynthesis)</text>

              <rect x="450" y="70" width="165" height="70" rx="12" fill="rgba(127, 29, 29, 0.7)" stroke="#f87171" stroke-width="1.5" />
              <text x="532" y="92" fill="#fca5a5" font-size="10" font-weight="900" text-anchor="middle">🦁 HETEROTROPHS</text>
              <text x="532" y="110" fill="#fef2f2" font-size="8" font-weight="bold" text-anchor="middle">Other-feeders (Animals eat</text>
              <text x="532" y="124" fill="#fef2f2" font-size="8" font-weight="bold" text-anchor="middle">other organisms)</text>
            </g>

            <!-- PINS -->
            <g class="diagram-pins-layer">
              <g class="diagram-pin-marker" data-num="1" transform="translate(320, 85)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#9333ea" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text></g>
              <g class="diagram-pin-marker" data-num="2" transform="translate(107, 105)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#10b981" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text></g>
              <g class="diagram-pin-marker" data-num="3" transform="translate(320, 325)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#2563eb" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text></g>
              <g class="diagram-pin-marker" data-num="4" transform="translate(320, 205)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#059669" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">4</text></g>
              <g class="diagram-pin-marker" data-num="5" transform="translate(320, 145)"><circle cx="0" cy="0" r="15" class="pin-base" fill="#d97706" stroke="#fff" stroke-width="2.5" /><text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">5</text></g>
            </g>
          </svg>
        </div>

        <!-- Quick Access Parts Dock -->
        <div class="diagram-parts-quickbar">
          <button class="diagram-part-btn active" data-num="1"><span class="btn-badge">1</span> 👥 Multicellular Organism</button>
          <button class="diagram-part-btn" data-num="2"><span class="btn-badge">2</span> 🌱 Auto vs Heterotrophs</button>
          <button class="diagram-part-btn" data-num="3"><span class="btn-badge">3</span> 🔬 Specialized Cells</button>
          <button class="diagram-part-btn" data-num="4"><span class="btn-badge">4</span> 🫀 Tissues & Organs</button>
          <button class="diagram-part-btn" data-num="5"><span class="btn-badge">5</span> 🧍 Organ Systems</button>
        </div>

        <!-- Inspection HUD Card -->
        <div class="diagram-hud-card">
          <div class="diagram-hud-header">
            <span class="diagram-hud-title" id="diagram-hud-title">👥 1. Multicellular Organisms</span>
            <span class="diagram-hud-formula" id="diagram-hud-formula">an organism made with two or more cells</span>
          </div>
          <p class="diagram-hud-desc" id="diagram-hud-desc">
            These organisms are able to be seen with the naked eye and need all parts of themselves to survive.
          </p>
          <div class="diagram-hud-callouts">
            <div class="diagram-hud-example" id="diagram-hud-example">
              <strong>💡 Observation:</strong> <span>Plants are autotrophs; animals are heterotrophs.</span>
            </div>
            <div class="diagram-hud-trick" id="diagram-hud-trick">
              <strong>🧠 Memory Trick:</strong> <span>Multi = many cells working together to survive!</span>
            </div>
          </div>
          <div class="diagram-hud-footer">
            <span class="diagram-hud-source" id="diagram-hud-source">Source: Multicellular Organisms Notes</span>
            <button class="btn-jump-square" id="diagram-hud-jump-btn">
              <span>🔍 Jump to Square Notes</span>
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindInteractiveDiagram({ stage, topic, parts, defaultNum: 1 });
  }

  // ================= 9. UNIVERSAL HOLOGRAPHIC CONCEPT MATRIX =================
  loadUniversalConceptMatrixLab(stage, topic) {
    const props = topic.properties && topic.properties.length > 0
      ? topic.properties
      : [
          { num: 1, name: topic.title || "Core Concept", formula: topic.coreFormula || "Scientific Principle", explanation: topic.description || "Core scientific concept.", example: "Observed in classroom curriculum.", trick: "Focus on primary scientific terms!" }
        ];

    const parts = props.map((p, idx) => ({
      num: p.num || (idx + 1),
      icon: "⚛️",
      keywords: [(p.name || '').toLowerCase()],
      fallback: {
        name: p.name || `Square #${idx + 1}`,
        formula: p.formula || "Key Formula",
        explanation: p.explanation || "Scientific definition from notes.",
        example: p.example || "Demonstrates the scientific function and observable characteristics of this concept in real life.",
        trick: p.trick || "Remember key scientific terms!"
      }
    }));

    const count = props.length;
    const cx = 320;
    const cy = 200;
    const radius = Math.min(155, 120 + Math.min(count * 5, 40));

    let nodesSvg = "";
    let linesSvg = "";
    let quickbarHtml = "";

    props.forEach((p, idx) => {
      const num = p.num || (idx + 1);
      const angle = (2 * Math.PI * idx) / count - Math.PI / 2;
      const nx = Math.round(cx + radius * Math.cos(angle));
      const ny = Math.round(cy + radius * Math.sin(angle));
      const cleanName = (p.name || `Square #${num}`).replace(/^\d+[\.\-\)]\s*/, '').slice(0, 18);

      linesSvg += `
        <line x1="${cx}" y1="${cy}" x2="${nx}" y2="${ny}" stroke="rgba(56, 189, 248, 0.45)" stroke-width="2.5" stroke-dasharray="6 4" class="diagram-interactive-path" data-num="${num}" id="path-matrix-${num}" />
      `;

      nodesSvg += `
        <g class="diagram-pin-marker ${idx === 0 ? 'active' : ''}" data-num="${num}" transform="translate(${nx}, ${ny})">
          <circle cx="0" cy="0" r="16" class="pin-base" fill="#0284c7" stroke="#fff" stroke-width="2.5" />
          <text x="0" y="4.5" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">${num}</text>
          <text x="0" y="${ny > cy ? 26 : -22}" text-anchor="middle" fill="#e0f2fe" font-size="9" font-weight="bold">${cleanName}</text>
        </g>
      `;

      quickbarHtml += `
        <button class="diagram-part-btn ${idx === 0 ? 'active' : ''}" data-num="${num}">
          <span class="btn-badge">${num}</span> ${cleanName}
        </button>
      `;
    });

    stage.innerHTML = `
      <div class="diagram-interactive-wrap">
        <div class="diagram-viewport-container">
          <svg class="diagram-svg-canvas" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#38bdf8" />
                <stop offset="70%" stop-color="#0369a1" />
                <stop offset="100%" stop-color="#082f49" />
              </radialGradient>
            </defs>

            <!-- Background Neural Constellation Rings -->
            <circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="rgba(56, 189, 248, 0.12)" stroke-width="2" stroke-dasharray="8 6" />
            <circle cx="${cx}" cy="${cy}" r="${radius + 35}" fill="none" stroke="rgba(168, 85, 247, 0.08)" stroke-width="1.5" />

            <!-- Connecting Data Bus Lines -->
            <g class="matrix-lines-layer">${linesSvg}</g>

            <!-- Central Holographic Core Reactor -->
            <g transform="translate(${cx}, ${cy})">
              <circle cx="0" cy="0" r="44" fill="url(#coreGlow)" stroke="#38bdf8" stroke-width="3" class="diagram-pulse-ring" />
              <circle cx="0" cy="0" r="50" fill="none" stroke="#a855f7" stroke-width="2" stroke-dasharray="6 4" class="diagram-spin-slow" />
              <text x="0" y="-4" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="900">${(topic.title || 'TOPIC').slice(0, 16)}</text>
              <text x="0" y="12" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="bold">CORE REACTOR</text>
            </g>

            <!-- Interactive Concept Node Pins -->
            <g class="diagram-pins-layer">${nodesSvg}</g>
          </svg>
        </div>

        <!-- Quick Access Parts Dock -->
        <div class="diagram-parts-quickbar">
          ${quickbarHtml}
        </div>

        <!-- Inspection HUD Card -->
        <div class="diagram-hud-card">
          <div class="diagram-hud-header">
            <span class="diagram-hud-title" id="diagram-hud-title">⚛️ 1. Concept Square</span>
            <span class="diagram-hud-formula" id="diagram-hud-formula">Scientific Principle</span>
          </div>
          <p class="diagram-hud-desc" id="diagram-hud-desc">
            Inspect the key scientific properties and explanations directly from your notes.
          </p>
          <div class="diagram-hud-callouts">
            <div class="diagram-hud-example" id="diagram-hud-example">
              <strong>💡 Observation:</strong> <span>Key observation from notes.</span>
            </div>
            <div class="diagram-hud-trick" id="diagram-hud-trick">
              <strong>🧠 Memory Trick:</strong> <span>Remember the core concepts!</span>
            </div>
          </div>
          <div class="diagram-hud-footer">
            <span class="diagram-hud-source" id="diagram-hud-source">Source: ${topic.title || 'Curriculum'} Notes</span>
            <button class="btn-jump-square" id="diagram-hud-jump-btn">
              <span>🔍 Jump to Square Notes</span>
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindInteractiveDiagram({ stage, topic, parts, defaultNum: parts[0]?.num || 1 });
  }

  // ================= PRACTICE QUIZ =================
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
          <h1 style="font-size: 1.8rem; margin: 0; color: #0f172a; font-weight: 800;">skience.io — 5th Grade Ultimate Science Review</h1>
          <div style="font-size: 0.95rem; color: #64748b; margin-top: 4px;">Comprehensive Science Principle & Concept Guide • Total Topics: ${this.notes.length} • Made with ❤️ by Jeeva R.</div>
        </div>
        <div style="text-align: right; font-size: 0.85rem; color: #64748b; line-height: 1.4;">
          <strong>scienceio-best.vercel.app</strong><br>
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
            🔬 Core Principle / Formula: <span style="font-weight: 600; color: #0369a1;">${formatBulletText(topic.coreFormula)}</span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      `;

      if (topic.properties && topic.properties.length > 0) {
        topic.properties.forEach((p) => {
          html += `
            <div style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 12px; background: #ffffff; break-inside: avoid; page-break-inside: avoid;">
              <div style="font-weight: 800; color: #0f172a; font-size: 0.92rem; margin-bottom: 3px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 2px;">
                #${p.num} — ${formatBulletText(p.name)}
              </div>
              <div style="font-size: 0.85rem; color: #0369a1; font-weight: 700; margin-bottom: 4px;">
                Rule: ${formatBulletText(p.formula)}
              </div>
              <div style="font-size: 0.85rem; color: #334155; margin-bottom: 4px; line-height: 1.4;">
                ${formatBulletText(p.explanation)}
              </div>
              ${p.example ? `<div style="font-size: 0.8rem; color: #64748b; font-style: italic;">Observation: ${formatBulletText(p.example)}</div>` : ''}
              ${p.trick ? `<div style="font-size: 0.8rem; color: #b45309; font-weight: 600; margin-top: 3px;">💡 Trick: ${formatBulletText(p.trick)}</div>` : ''}
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
        btn.style.color = "var(--neon-cyan)";
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
          } else if (notesSec && notesBtn && notesSec.getBoundingClientRect().top <= 250) {
            notesBtn.classList.add("active");
            if (calcBtn) calcBtn.classList.remove("active");
            if (homeBtn) homeBtn.classList.remove("active");
          } else {
            if (homeBtn) homeBtn.classList.add("active");
            if (notesBtn) notesBtn.classList.remove("active");
            if (calcBtn) calcBtn.classList.remove("active");
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
        const msgInput = document.getElementById("fb-user-message");
        const submitBtn = fbForm.querySelector("button[type='submit']");

        const userName = (nameInput?.value || "").trim() || "Anonymous Student";
        const userMsg = (msgInput?.value || "").trim();

        if (!userMsg) return;

        const origBtnText = submitBtn ? submitBtn.textContent : "Submit Feedback";
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Sending to Jeeva... 🚀";
        }

        try {
          const payload = {
            student_name: userName,
            feedback: userMsg,
            platform: "scienceio-best.vercel.app",
            _subject: `scienceio-best.vercel.app Feedback from ${userName}`,
            _template: "table"
          };

          const sendPrimary1 = fetch("https://formsubmit.co/ajax/jeev.rag914@scholarsacademy.org", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(payload)
          });

          const sendPrimary2 = fetch("https://formsubmit.co/ajax/jeeva.raghvan@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(payload)
          });

          await Promise.allSettled([sendPrimary1, sendPrimary2]);
        } catch (err) {
          console.warn("Feedback delivery attempted:", err);
        }

        sounds.playSuccess();
        this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 55);

        if (submitBtn) {
          submitBtn.textContent = "Sent to Jeeva! ✨";
        }

        setTimeout(() => {
          if (nameInput) nameInput.value = "";
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

    // Direct redirect to haunt.gg/reallyjgr on "Made with love by Jeeva R." (DO NOT OPEN MODAL)
    const redirectToJeevaProfile = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      sounds.playSuccess();
      window.location.href = "https://haunt.gg/reallyjgr";
    };

    document.getElementById("author-credit-trigger")?.addEventListener("click", redirectToJeevaProfile);
    document.querySelector(".loader-author")?.addEventListener("click", redirectToJeevaProfile);

    document.getElementById("modal-projects-close")?.addEventListener("click", () => {
      sounds.playClick();
      document.getElementById("projects-modal")?.classList.add("hidden");
    });

    document.getElementById("project-link-skience")?.addEventListener("click", () => {
      sounds.playSuccess();
    });

    document.getElementById("project-link-wprints")?.addEventListener("click", () => {
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

    this.messagesContainer.addEventListener("click", (e) => {
      const pill = e.target.closest(".chat-prompt-pill");
      if (pill) {
        const query = pill.dataset.query;
        if (query) {
          this.input.value = query;
          this.handleSend();
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
        coreFormula: "Gas Exchange: O₂ (Inhale) ➔ Trachea ➔ Bronchi ➔ Alveoli (Blood Diffusion) ➔ CO₂ (Exhale)",
        description: "The vital organ system that brings oxygen into the bloodstream to power cellular mitochondria and expels carbon dioxide waste.",
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
          "Inhale = Delivers Oxygen (O₂) for mitochondria to synthesize cellular ATP energy.",
          "Exhale = Removes Carbon Dioxide (CO₂) waste produced during cellular respiration.",
          "Capillaries wrap directly around alveoli to exchange gases via rapid diffusion."
        ]
      },
      circulatory: {
        title: "CIRCULATORY SYSTEM",
        id: "science-circulatory",
        coreFormula: "Internal Transport: Heart Pump ➔ Arteries (Away) ➔ Capillaries (Trade) ➔ Veins (Return)",
        description: "The transport network of blood vessels and the muscular heart that distributes oxygen and nutrients to every cell.",
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
        coreFormula: "Nutrient Extraction: Mechanical Chewing + Chemical Enzymes ➔ Absorption (Villi) ➔ Elimination",
        description: "Breaks food down physically and chemically into biomolecules that cells convert into ATP fuel.",
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
        coreFormula: "Signal Flow: Sensory Receptor ➔ Central Processor (Brain/Spinal Cord) ➔ Motor Output",
        description: "The body's electrochemical network directing conscious thought, automatic vitals, and instant reflexes.",
        properties: [
          {
            num: 1,
            name: "Brain (Central Command)",
            formula: "Cerebrum, Cerebellum, Brainstem",
            explanation: "Directs voluntary movement, processes sensory input, and controls vital functions like heartbeat.",
            trick: "Memory Trick: The supercomputer running all body systems!"
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
            formula: "Dendrites ➔ Axon ➔ Synapse",
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
          <div class="chat-memo-item-trick">💡 <strong>Memory Key:</strong> ${this.escapeHTML(trick)}</div>
        </div>
      `;
    }).join('');

    const takeawayBullets = (Array.isArray(note.takeaways) && note.takeaways.length > 0)
      ? note.takeaways.map(t => `<li>⚡ ${this.escapeHTML(t)}</li>`).join('')
      : props.slice(0, 4).map(p => `<li>⚡ <strong>${this.escapeHTML(p.name)}:</strong> ${this.escapeHTML((p.explanation || '').slice(0, 75))}...</li>`).join('');

    const jumpId = note.id || '';

    return `
      <div class="chat-memo-dossier">
        <div class="chat-memo-badge">🧠 ULTRA-MEMORIZATION DOSSIER</div>
        <div class="chat-memo-title">${this.escapeHTML(title)}</div>
        <div class="chat-memo-formula">⚡ <strong>Core Principle:</strong> ${this.escapeHTML(formula)}</div>
        ${desc ? `<div class="chat-memo-intro">${this.escapeHTML(desc)}</div>` : ''}
        
        <div class="chat-memo-section-hd">📋 CONCEPT SQUARES & MEMORY TRICKS</div>
        <div class="chat-memo-list">
          ${renderedProps}
        </div>

        <div class="chat-memo-recall-box">
          <div class="chat-memo-recall-hd">🎯 Rapid 10-Second Self-Test Checklist:</div>
          <ul class="chat-memo-checklist">
            ${takeawayBullets}
          </ul>
        </div>

        <div class="chat-memo-btn-row">
          <button type="button" class="chat-memo-jump-btn" data-note-id="${this.escapeHTML(jumpId)}">
            🔬 Open in 3D Card Carousel
          </button>
        </div>
      </div>
    `;
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

        const t = text.trim().toLowerCase();
        const cleanT = t.replace(/\s+/g, ' ');
        let replyHTML = "";

        // Secret Admin Passcode Clearance: ONLY way to open Vault Passcode Entry Area
        if (cleanT === "access j33v4") {
          replyHTML = `<div class="msg-bubble" style="background: rgba(6, 182, 212, 0.2); border-color: #06b6d4; color: #38bdf8; font-weight: bold;">Security Clearance Verified. Opening Vault Passcode Entry Area...</div>`;
          setTimeout(() => {
            if (window.app && window.app.vault) {
              window.app.vault.isUnlocked = false;
              window.app.vault.open();
            }
            this.closeChat();
            sounds.playSuccess();
          }, 800);
        }
        // Memorization & Dynamic Note Summarization (checks published notes and curriculum body systems)
        else if (
          t.includes("memoriz") || t.includes("summar") || t.includes("study") || 
          t.includes("explain") || t.includes("breakdown") || t.includes("review") || 
          t.includes("how to remember") || t.includes("respirat") || t.includes("circulat") || 
          t.includes("digest") || t.includes("nervous") || t.includes("cell") || t.includes("matter")
        ) {
          const matchedNote = this.findNoteMatch(text);
          if (matchedNote) {
            replyHTML = this.buildMemorizationHTML(matchedNote);
          } else if (this.getCurriculumFallback(text)) {
            replyHTML = this.buildMemorizationHTML(this.getCurriculumFallback(text));
          } else {
            // General memorization guide listing available topics
            const avail = this.getAvailableNotes();
            const titles = avail.map(n => n.title).filter(Boolean);
            const pillsHTML = [
              ...titles.map(title => `<button type="button" class="chat-prompt-pill" data-query="memorize ${this.escapeHTML(title)}">🔬 ${this.escapeHTML(title)}</button>`),
              `<button type="button" class="chat-prompt-pill" data-query="memorize respiratory system">🫁 Respiratory System</button>`,
              `<button type="button" class="chat-prompt-pill" data-query="memorize circulatory system">❤️ Circulatory System</button>`,
              `<button type="button" class="chat-prompt-pill" data-query="memorize digestive system">🍎 Digestive System</button>`,
              `<button type="button" class="chat-prompt-pill" data-query="memorize nervous system">🧠 Nervous System</button>`
            ].join(' ');

            replyHTML = `
              <div class="msg-bubble">
                <strong>🧠 Ultra-Memorization Engine:</strong><br>
                I auto-read all your published study sheets! Tap any topic below or ask me to memorize any system or note to generate a complete concept breakdown and memory mnemonics:
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px;">
                  ${pillsHTML}
                </div>
              </div>
            `;
          }
        }
        // Navigation: Take me to notes / notes area / scroll to notes
        else if (t.includes("note") || t.includes("take me") || t.includes("go to") || t.includes("show me") || t.includes("navigate") || t.includes("area") || t.includes("scroll") || t.includes("carousel") || t.includes("table")) {
          replyHTML = `<div class="msg-bubble">Taking you directly to the <strong>5th Grade Skience Notes & 3D Coverflow Carousel</strong>! 🔬✨</div>`;
          setTimeout(() => {
            const target = document.getElementById("notes-section");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }, 400);
        }
        // Navigation: Calculator / Scientific Formula Calculator
        else if (t.includes("calc") || t.includes("formula") || t.includes("density") || t.includes("speed") || t.includes("math") || t.includes("equation") || t.includes("kinetic")) {
          replyHTML = `<div class="msg-bubble">Taking you directly to the <strong>Liquid Glass Scientific Formula Calculator</strong>! 🧪⚡ Compute density, force, speed, kinetic energy, or evaluate scientific expressions.</div>`;
          setTimeout(() => {
            const target = document.getElementById("calculator-section");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }, 400);
        }
        // Save / Publish question
        else if (t.includes("save") || t.includes("publish") || t.includes("phone") || t.includes("database") || t.includes("different device")) {
          replyHTML = `
            <div class="msg-bubble">
              <strong>How to save notes across all devices:</strong><br>
              1. Add and architect your notes in the <strong>Admin Vault</strong>.<br>
              2. Click <strong>🚀 Publish All Notes to Cloud</strong> inside the Vault.<br>
              3. All your notes are instantly uploaded to the secure skience.io Cloud Database (zero credit drain, 100% free)!<br>
              4. When you open skience.io on your phone, tablet, or another computer, your notes will be right there!
            </div>
          `;
        }
        // Scientific method
        else if (t.includes("scientific method") || t.includes("skientific method") || t.includes("hypothesis") || t.includes("experiment") || t.includes("variable")) {
          replyHTML = `<div class="msg-bubble">The 5 steps of the <strong>Skientific Method</strong> are:<br>1. Ask a Question<br>2. Form a Hypothesis (If... then...)<br>3. Conduct a Controlled Experiment (change only 1 variable!)<br>4. Collect & Analyze Data<br>5. Draw Conclusions!</div>`;
        }
        // Practice quiz
        else if (t.includes("quiz") || t.includes("test") || t.includes("practice")) {
          replyHTML = `<div class="msg-bubble">Every skience topic has an interactive <strong>⚡ Practice Quiz</strong> directly on its carousel card and inside the notes viewer! Test your mastery with instant scoring and feedback.</div>`;
        }
        // Creator Bio & Projects
        else if (t.includes("who created") || t.includes("developer") || t.includes("creator") || t.includes("who made") || t.includes("jeeva") || t.includes("project")) {
          replyHTML = `
            <div class="creator-plaque">
              <div class="plaque-title">Jeeva Raghavan • Developer</div>
              I built <strong>skience.io</strong> and <strong>W PRINTS</strong>. Click "made with love by Jeeva R." in the footer or visit <a href="https://haunt.gg/reallyjgr" target="_blank" style="color: #38bdf8; text-decoration: underline;">haunt.gg/reallyjgr</a>!
              <div style="margin-top: 10px;">
                <button type="button" class="hero-cta-btn" id="chat-view-projects-btn" style="padding: 6px 14px; font-size: 0.78rem;">🚀 Visit haunt.gg/reallyjgr</button>
              </div>
            </div>
          `;
          setTimeout(() => {
            document.getElementById("chat-view-projects-btn")?.addEventListener("click", () => {
              this.closeChat();
              sounds.playSuccess();
              window.location.href = "https://haunt.gg/reallyjgr";
            });
          }, 60);
        }
        // Passcode Protection
        else if (t.includes("passcode") || t.includes("password") || t.includes("vault code") || t.includes("pin")) {
          replyHTML = `<div class="msg-bubble" style="background: rgba(255, 55, 95, 0.2); border-color: #FF375F; color: #FF375F; font-weight: bold;">The Admin Vault requires confidential passcode clearance authorized by the site administrator. Passcodes are strictly classified!</div>`;
        }
        // Greeting
        else if (t.includes("hi") || t.includes("hello") || t.includes("hey") || t.includes("help")) {
          replyHTML = `<div class="msg-bubble">Hello! 👋 I'm the skience.io assistant. I can help explain 5th grade skience concepts (Cells, Respiratory System, Circulatory System, Matter, Ecosystems), summarize any of your notes for memorization, or guide you through your study sheets!</div>`;
        }
        // Fallback
        else {
          replyHTML = `<div class="msg-bubble">I am the skience.io assistant! Ask me "memorize respiratory system", "summarize plant cell", "explain the circulatory system", or ask about any of your published study notes!</div>`;
        }

        this.appendRawHTML(replyHTML, "ai-msg");
        sounds.playSuccess();
      }, 700);
    }, 250);
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
  window.chatbot = new Chatbot();

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
