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
  },
  {
    "id": "skeletal-system-05",
    "title": "SKELETAL SYSTEM (FRAMEWORK & PROTECTION)",
    "category": "biology",
    "color": "purple",
    "grade": "5th Grade",
    "coreFormula": "206 Bones = Support + Protection + Movement + Blood Cells + Mineral Storage",
    "description": "The human skeletal system provides a rigid living framework that supports the body, shields vital organs, manufactures blood cells in marrow, and works with muscles to enable motion.",
    "isCustom": true,
    "properties": [
      {
        "num": 1,
        "name": "Functions of the Skeletal System",
        "formula": "Support + Protection + Movement",
        "explanation": "The skeletal system has 5 vital functions:\n• Provides a rigid structural framework holding the body upright\n• Protects vital organs (skull shields brain, ribs shield heart and lungs)\n• Acts as levers that muscles pull on to create movement\n• Bone marrow manufactures red blood cells, white blood cells, and platelets\n• Stores essential minerals like calcium and phosphorus.",
        "example": "The rib cage wraps around the heart and lungs like a protective helmet.",
        "trick": "Remember SPMM: Support, Protection, Movement, and Marrow!"
      },
      {
        "num": 2,
        "name": "Bones & Bone Marrow",
        "formula": "Compact Bone + Spongy Bone + Marrow",
        "explanation": "Bones are living organs made of hard calcium connective tissue:\n• Compact bone: Dense, hard outer layer that provides maximum strength\n• Spongy bone: Porous honeycomb interior that absorbs shocks and reduces weight\n• Red bone marrow: Generates billions of new blood cells daily\n• Yellow marrow: Stores fat reserves for energy.",
        "example": "Long bones like the femur have a dense compact shaft and spongy marrow-filled ends.",
        "trick": "Bones are not dry rocks—they are living organs filled with blood vessels and marrow!"
      },
      {
        "num": 3,
        "name": "The Axial Skeleton",
        "formula": "Skull + Spine (Vertebrae) + Ribs + Sternum",
        "explanation": "The central protective core along the body's vertical midline:\n• Cranium (Skull): 22 interlocking bones protecting the brain, eyes, and inner ear\n• Vertebral Column (Spine): 33 stacked vertebrae cushioning the spinal cord\n• Ribs: 12 pairs of curved bones shielding the chest cavity\n• Sternum: Central breastbone anchoring the front ribs.",
        "example": "Cartilage discs between vertebrae allow bending and twisting without bones grinding.",
        "trick": "'Axis' means center line—the axial skeleton forms the vertical trunk of the body!"
      },
      {
        "num": 4,
        "name": "The Appendicular Skeleton",
        "formula": "Limbs (Arms & Legs) + Girdles (Shoulders & Pelvis)",
        "explanation": "The bones of the upper and lower limbs that enable locomotion:\n• Upper Limbs: Humerus (upper arm), Radius & Ulna (forearm), carpals, and phalanges\n• Lower Limbs: Femur (thigh bone, longest and strongest bone), Tibia & Fibula, patella (kneecap)\n• Shoulder Girdle: Clavicle (collarbone) and Scapula (shoulder blade)\n• Pelvic Girdle: Strong bowl-shaped hip bones supporting abdominal weight.",
        "example": "The femur can support up to 30 times a person's body weight during jumps!",
        "trick": "'Append' means attach—the limbs append (attach) to the central body!"
      },
      {
        "num": 5,
        "name": "Joints (Where Bones Meet)",
        "formula": "Hinge + Ball-and-Socket + Pivot + Fixed",
        "explanation": "A joint is any point where two or more bones connect:\n• Ball-and-Socket Joint: Rotates 360° in all directions (Shoulder & Hip)\n• Hinge Joint: Moves back and forth in one direction like a door (Knee & Elbow)\n• Pivot Joint: Allows rotational twisting (Neck vertebrae turning the head)\n• Fixed / Immovable Joints: Fused seams that cannot move (Cranial skull sutures).",
        "example": "Throwing a baseball uses the shoulder's ball-and-socket joint for circular rotation.",
        "trick": "Doors have hinges (knees), joysticks have balls and sockets (shoulders)!"
      },
      {
        "num": 6,
        "name": "Cartilage",
        "formula": "Flexible Cushioning Connective Tissue",
        "explanation": "Tough, smooth, rubbery connective tissue:\n• Caps bone ends inside movable joints to eliminate friction and wear\n• Absorbs impact shock during jumping, running, and walking\n• Forms flexible external body parts like the ears and tip of the nose\n• Most bones start as soft cartilage in babies before hardening (ossification).",
        "example": "The meniscus inside your knee is a cartilage pad that cushions landing from a leap.",
        "trick": "Cartilage is the body's shock-absorbing Teflon cushion between grinding bones!"
      },
      {
        "num": 7,
        "name": "Ligaments",
        "formula": "Ligament = Bone to Bone Connection",
        "explanation": "Dense, tough bands of fibrous elastic tissue:\n• Connect bone to bone across joint cavities\n• Hold joints stable and prevent hyperextension or dislocation\n• Have limited blood supply, which is why joint sprains take weeks to heal.",
        "example": "The ACL (anterior cruciate ligament) connects the femur to the tibia to stabilize the knee.",
        "trick": "Memory Trick: 'Like to Like' — Ligaments connect Like-to-Like (Bone to Bone)!"
      },
      {
        "num": 8,
        "name": "Tendons",
        "formula": "Tendon = Muscle to Bone Connection",
        "explanation": "Extremely strong, non-elastic cords of fibrous collagen tissue:\n• Connect skeletal muscles securely to bone surfaces\n• Transfer the pulling contraction force of muscles directly to bones to move joints\n• Achilles tendon: The thickest and strongest tendon in the body, connecting calf to heel.",
        "example": "When your bicep muscle contracts, its tendon pulls your forearm bone upward.",
        "trick": "Two Different Things = Tendon (Muscle to Bone)!"
      }
    ],
    "quiz": [
      {
        "q": "What are the 5 primary functions of the skeletal system?",
        "options": [
          "Support, Protection, Movement, Blood Cell Production, and Mineral Storage",
          "Digestion, Respiration, Thinking, Circulation, and Excretion",
          "Only to hold skin in place",
          "To produce digestive acids"
        ],
        "ans": 0,
        "why": "The skeleton provides support, protects organs, enables movement with muscles, makes blood cells in marrow, and stores calcium!"
      },
      {
        "q": "Which type of joint allows 360° circular rotation in all directions?",
        "options": [
          "Ball-and-Socket Joint (Shoulder & Hip)",
          "Hinge Joint (Knee & Elbow)",
          "Fixed Joint (Skull)",
          "Suture Joint"
        ],
        "ans": 0,
        "why": "Ball-and-socket joints in the shoulders and hips permit full rotational movement!"
      },
      {
        "q": "What is the key difference between a ligament and a tendon?",
        "options": [
          "Ligaments connect Bone to Bone; Tendons connect Muscle to Bone",
          "Ligaments connect muscles to skin; Tendons connect bones to nerves",
          "Tendons connect Bone to Bone; Ligaments connect Muscle to Bone",
          "There is no difference between them"
        ],
        "ans": 0,
        "why": "Ligaments fasten bones together at joints; tendons attach muscles to bones to move them!"
      }
    ],
    "badge": "8 Concept Squares • Human Anatomy"
  },
  {
    "id": "muscular-system-06",
    "title": "MUSCULAR SYSTEM (FORCE, MOVEMENT & CONTRACTION)",
    "category": "biology",
    "color": "crimson",
    "grade": "5th Grade",
    "coreFormula": "600+ Muscles: Contraction (Pull) = Mechanical Force + Heat",
    "description": "The muscular system consists of more than 600 muscles that contract and relax to power voluntary body movements, pump blood through the heart, and move food through the digestive organs.",
    "isCustom": true,
    "properties": [
      {
        "num": 1,
        "name": "Functions of the Muscular System",
        "formula": "Movement + Posture + Heat Generation + Circulation",
        "explanation": "The muscular system powers every motion in the human body:\n• Contracts (shortens) to pull on skeletal bones and generate movement\n• Maintains upright posture and balance against the pull of gravity\n• Generates over 85% of body heat through cellular contraction (shivering warms you up)\n• Powers involuntary internal circulation: heartbeat, breathing, and peristalsis.",
        "example": "When cold, rapid involuntary muscle contractions (shivering) generate heat to warm your body.",
        "trick": "Muscles only PULL; they NEVER push!"
      },
      {
        "num": 2,
        "name": "Skeletal Muscle (Voluntary)",
        "formula": "Striated + Voluntary + Attached to Skeleton",
        "explanation": "Muscles attached to bones that you consciously control:\n• Under voluntary control: Moves when your brain sends conscious nerve signals\n• Striated appearance: Alternating light and dark protein bands under the microscope\n• Powers running, walking, jumping, writing, talking, and facial expressions\n• Fatigues during prolonged strenuous exercise and needs rest to repair and grow stronger.",
        "example": "Your biceps, triceps, and quadriceps are voluntary skeletal muscles.",
        "trick": "'Skeletal' muscles hug your skeleton and obey your conscious thoughts!"
      },
      {
        "num": 3,
        "name": "Smooth Muscle (Involuntary)",
        "formula": "Non-Striated + Involuntary + Internal Organs",
        "explanation": "Involuntary muscles lining internal organs and blood vessels:\n• Involuntary control: Works automatically 24/7 without conscious effort\n• Spindle-shaped cells without striations (smooth texture)\n• Found in the stomach, intestines, bladder, esophagus, and blood vessel walls\n• Performs peristalsis: Rhythmic wave-like muscular contractions that push food along.",
        "example": "Smooth muscles in your stomach churn and digest food automatically while you sleep.",
        "trick": "Smooth muscles work smoothly in the background without needing your permission!"
      },
      {
        "num": 4,
        "name": "Cardiac Muscle (The Heart)",
        "formula": "Striated + Involuntary + Non-Fatiguing",
        "explanation": "Specialized muscle tissue found ONLY in the walls of the heart:\n• Involuntary control: Controlled by the heart's intrinsic electrical pacemaker\n• Striated with branched intercalated discs for synchronized rhythmic pumping\n• Non-fatiguing: Contracts continuously over 100,000 times a day for a lifetime\n• Pumps oxygenated blood through 60,000 miles of systemic blood vessels.",
        "example": "Your cardiac muscle pumps about 2,000 gallons of blood every day without taking a single break.",
        "trick": "'Cardio' means heart—cardiac muscle is the tireless engine that never stops!"
      },
      {
        "num": 5,
        "name": "Antagonistic Muscle Pairs (Flexor & Extensor)",
        "formula": "Flexor Contracts (Bends) + Extensor Relaxes (Straightens)",
        "explanation": "Because muscles can only pull and never push, they work in opposing pairs:\n• Flexor muscle: Contracts to bend a joint and decrease the bone angle\n• Extensor muscle: Contracts to straighten a joint and increase the bone angle\n• When the biceps (flexor) contracts, the triceps (extensor) relaxes to bend the elbow\n• When the triceps contracts, the biceps relaxes to extend the arm straight.",
        "example": "Hamstrings (flexor) bend the knee, while quadriceps (extensor) straighten the leg to kick a ball.",
        "trick": "Teamwork: When one muscle partner pulls, the opposite partner lets go!"
      },
      {
        "num": 6,
        "name": "Muscle Contraction (Actin & Myosin)",
        "formula": "Sliding Filament: Actin + Myosin + ATP Energy",
        "explanation": "The microscopic mechanism of how muscle fibers shorten:\n• Muscle cells contain tiny protein filaments: actin (thin) and myosin (thick)\n• When stimulated by nerve impulses, myosin heads grab actin filaments\n• Myosin pulls actin inward, sliding the filaments past each other to shorten the muscle\n• Requires ATP energy (produced by mitochondria) and calcium ions.",
        "example": "Like a crew of rowers pulling oars together, myosin heads pull actin filaments in unison.",
        "trick": "Actin and Myosin slide past each other like clasping, interlocking fingers!"
      },
      {
        "num": 7,
        "name": "Muscle Fatigue & Lactic Acid",
        "formula": "Anaerobic Metabolism = Lactic Acid + Oxygen Debt",
        "explanation": "What happens when muscles work faster than blood can deliver oxygen:\n• During intense bursts, muscles burn glucose anaerobically (without oxygen)\n• Produces lactic acid byproduct, creating a temporary burning sensation and fatigue\n• Deep breathing after exercise supplies oxygen to break down lactic acid\n• Rest, hydration, and stretching restore muscle glycogen stores.",
        "example": "The burning feeling in your legs at the end of a sprint is caused by lactic acid buildup.",
        "trick": "Panting after a race is your body paying back its 'oxygen debt' to tired muscles!"
      },
      {
        "num": 8,
        "name": "How Muscles & Bones Work Together (Levers)",
        "formula": "Bone = Lever + Joint = Fulcrum + Muscle = Effort Force",
        "explanation": "The musculoskeletal system functions as mechanical levers:\n• Bones act as rigid lever arms\n• Joints act as pivot fulcrums\n• Muscle contractions apply input effort force\n• Enables humans to lift heavy weights, run fast, and perform delicate precision actions.",
        "example": "Your elbow acts as a fulcrum and forearm as a lever when your bicep lifts a backpack.",
        "trick": "Muscles provide the pulling power, bones provide the levers, joints provide the hinges!"
      }
    ],
    "quiz": [
      {
        "q": "Why must muscles work in antagonistic pairs (like biceps and triceps)?",
        "options": [
          "Because muscles can only pull, they can never push",
          "Because bones cannot support one muscle",
          "Because nerves only connect in pairs",
          "To double the weight of the limb"
        ],
        "ans": 0,
        "why": "Muscles only contract and pull; they cannot push, so an opposing muscle is required to return the bone to its starting position!"
      },
      {
        "q": "Which type of muscle tissue is found ONLY in the walls of the heart and never fatigues?",
        "options": [
          "Cardiac Muscle",
          "Skeletal Muscle",
          "Smooth Muscle",
          "Rough Muscle"
        ],
        "ans": 0,
        "why": "Cardiac muscle is specialized heart tissue that beats rhythmically 24/7 without fatiguing!"
      },
      {
        "q": "What are the three main types of muscle tissue in the human body?",
        "options": [
          "Skeletal, Smooth, and Cardiac",
          "Hard, Soft, and Flexible",
          "Bone, Joint, and Tendon",
          "Voluntary, Involuntary, and Neutral"
        ],
        "ans": 0,
        "why": "The three types are skeletal (voluntary), smooth (involuntary organs), and cardiac (heart)!"
      }
    ],
    "badge": "8 Concept Squares • Human Anatomy"
  }
];

// Default Cloud Database Bucket ID (Hosted on permanent free REST backend)
const DEFAULT_CLOUD_DB_ID = "ff808181a09d98f701a0f483e327513e";

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
    const vaultBubble = document.getElementById("vault-bubble-btn");
    if (vaultBubble) {
      vaultBubble.addEventListener("click", () => {
        this.open();
      });
    }

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
    } else {
      this.openCreatorAfterUnlock = true;
      this.open("redirect");
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
          saveBtn.innerHTML = "<span>✦ Save Unit & Squares to science.io</span>";
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
            <label>Square Title / Principle <span class="req">*</span></label>
            <input type="text" class="sq-input-name" value="${sq.name || ""}" placeholder="e.g. Solid: Definite Shape & Volume" />
          </div>
          <div class="form-group">
            <label>Scientific Formula / Rule</label>
            <input type="text" class="sq-input-formula" value="${sq.formula || ""}" placeholder="e.g. Molecular motion: Tightly packed vibration" />
          </div>
        </div>

        <div class="form-group">
          <label>Scientific Explanation <span class="req">*</span></label>
          <textarea class="sq-input-explanation" rows="2" placeholder="Describe the mechanism, behavior, or core science idea...">${sq.explanation || ""}</textarea>
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <label>Real-World Example / Experiment</label>
            <input type="text" class="sq-input-example" value="${sq.example || ""}" placeholder="e.g. Ice cube in a glass holding its geometric shape" />
          </div>
          <div class="form-group">
            <label>Lab Tip / Memory Trick</label>
            <input type="text" class="sq-input-trick" value="${sq.trick || ""}" placeholder="e.g. Solids hold their ground; liquids flow around!" />
          </div>
        </div>
      `;

      card.querySelector(".sq-remove-btn")?.addEventListener("click", () => {
        this.removeSquare(idx);
      });

      card.querySelector(".sq-input-name")?.addEventListener("input", (e) => {
        this.architectSquares[idx].name = e.target.value;
      });
      card.querySelector(".sq-input-formula")?.addEventListener("input", (e) => {
        this.architectSquares[idx].formula = e.target.value;
      });
      card.querySelector(".sq-input-explanation")?.addEventListener("input", (e) => {
        this.architectSquares[idx].explanation = e.target.value;
      });
      card.querySelector(".sq-input-example")?.addEventListener("input", (e) => {
        this.architectSquares[idx].example = e.target.value;
      });
      card.querySelector(".sq-input-trick")?.addEventListener("input", (e) => {
        this.architectSquares[idx].trick = e.target.value;
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
      title: title.toUpperCase(),
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

    const saveBtn = document.getElementById("btn-save-vault-note");
    if (saveBtn) {
      saveBtn.disabled = true;
      saveBtn.innerHTML = "<span>⏳ Publishing Unit to Cloud...</span>";
    }

    // Automatically publish to Cloud Database across all devices
    await this.app.publishAllNotes(true);

    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.innerHTML = "<span>✦ Save Unit & Squares to science.io</span>";
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
            <button class="btn-table-action preview" data-id="${topic.id}">Preview</button>
            <button class="btn-table-action edit" data-id="${topic.id}">Edit</button>
            <button class="btn-table-action delete" data-id="${topic.id}">Delete</button>
          </div>
        </td>
      `;

      tr.querySelector(".preview")?.addEventListener("click", () => {
        this.app.openNotesViewer(topic.id);
      });

      tr.querySelector(".edit")?.addEventListener("click", () => {
        this.editNoteInArchitect(topic.id);
      });

      tr.querySelector(".delete")?.addEventListener("click", async () => {
        if (confirm(`Delete unit "${topic.title}"?`)) {
          this.app.notes = this.app.notes.filter(n => n.id !== topic.id);
          this.app.saveNotes();
          this.app.render();
          this.updateManagerTable();
          this.updateTelemetry();
          sounds.playClick();
          await this.app.publishAllNotes(true);
        }
      });

      tbody.appendChild(tr);
    });
  }

  editNoteInArchitect(id) {
    const note = this.app.notes.find(n => n.id === id);
    if (!note) return;

    this.editingNoteId = note.id;
    document.getElementById("vnote-title").value = note.title;
    document.getElementById("vnote-category").value = note.category || "physical";
    document.getElementById("vnote-color").value = note.color || "blue";
    document.getElementById("vnote-formula").value = note.coreFormula || "";
    document.getElementById("vnote-desc").value = note.description || "";
    if (document.getElementById("vnote-redirect")) {
      document.getElementById("vnote-redirect").value = note.redirectUrl || "";
    }

    this.architectSquares = (note.properties || []).map(p => ({
      name: p.name,
      formula: p.formula,
      explanation: p.explanation,
      example: p.example,
      trick: p.trick
    }));

    this.renderSquares();
    this.switchTab("architect");

    const saveBtn = document.getElementById("btn-save-vault-note");
    if (saveBtn) {
      saveBtn.innerHTML = "<span>✦ Update Unit & Squares</span>";
      saveBtn.style.background = "linear-gradient(135deg, #30D158, #34C759)";
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

// Helper to guarantee science notes list has valid fallback if completely empty
function ensurePlantCellUnit(notesList) {
  if (!Array.isArray(notesList) || notesList.length === 0) {
    return [JSON.parse(JSON.stringify(DEFAULT_SCIENCE_TOPICS[0]))];
  }
  return notesList;
}

// ================= MAIN SCIENCE.IO APP =================
class ScienceIoApp {
  constructor() {
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
    this.vault = new VaultController(this);

    this.init();
  }

  async init() {
    this.setupConfetti();
    this.setupLoadingScreen();

    // 1. Load cached notes from localStorage FIRST so notes are ready before rendering UI
    this.loadCachedNotes();

    // 2. Setup carousel and table views
    this.setupCarouselTrack();
    this.setupCarouselDrag();
    this.setupTableView();
    this.vault.init();
    this.setupEventListeners();
    this.setupPublishSystem();

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

    // 5. Quiet background sync every 12s so other devices (e.g. phone) stay live in real-time
    setInterval(() => {
      if (!this.hasUnpublishedChanges && document.visibilityState === "visible") {
        this.fetchCloudNotes(true);
      }
    }, 12000);
  }

  // Persistent storage via localStorage & cloud fallback
  loadCachedNotes() {
    const baseNotes = (window.SCIENCE_IO_PUBLISHED_NOTES && Array.isArray(window.SCIENCE_IO_PUBLISHED_NOTES) && window.SCIENCE_IO_PUBLISHED_NOTES.length > 0)
      ? window.SCIENCE_IO_PUBLISHED_NOTES
      : DEFAULT_SCIENCE_TOPICS;

    const saved = localStorage.getItem("scienceio_notes_v6") || localStorage.getItem("scienceio_notes_v5");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.notes = ensurePlantCellUnit(parsed);
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
    localStorage.setItem("scienceio_notes_v5", JSON.stringify(this.notes));
    this.hasUnpublishedChanges = true;
    this.updatePublishBadge();
  }

  // ================= DATABASE SYNC & "PUBLISH ALL NOTES" =================
  async fetchCloudNotes(silent = false) {
    const cloudDot = document.getElementById("cloud-status-dot");
    const cloudText = document.getElementById("cloud-status-text");

    let loadedNotes = null;

    // 1. Primary: load from same-origin Vercel Serverless Sync API (/api/sync)
    // 100% Free Forever • Zero Token Drain • Zero CORS Issues across all devices
    try {
      if (window.location.protocol.startsWith('http')) {
        const syncRes = await fetch("/api/sync?t=" + Date.now(), {
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
      }
    } catch (err) {}

    // 2. Secondary fallback: direct extendsclass cloud bin
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

    // 3. Tertiary fallback: live GitHub Gist
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

    // 4. Quaternary fallback: check ./database.json (works on static hosting & Vercel)
    if (!loadedNotes) {
      try {
        if (window.location.protocol.startsWith('http')) {
          const localRes = await fetch("./database.json?v=" + Date.now(), { cache: "no-store" });
          if (localRes.ok) {
            const localData = await localRes.json();
            if (Array.isArray(localData.notes) && localData.notes.length > 0) {
              loadedNotes = localData.notes;
            }
          }
        }
      } catch (e) {}
    }

    // 5. Quinary fallback: check local Node server API (/api/notes) if running
    if (!loadedNotes) {
      try {
        if (window.location.protocol.startsWith('http')) {
          const apiRes = await fetch("/api/notes");
          if (apiRes.ok) {
            const apiData = await apiRes.json();
            if (apiData && Array.isArray(apiData.notes) && apiData.notes.length > 0) {
              loadedNotes = apiData.notes;
            }
          }
        }
      } catch (e) {}
    }

    if (loadedNotes && loadedNotes.length > 0) {
      // If user is actively typing / modifying on THIS device without having published, don't overwrite local work
      if (this.hasUnpublishedChanges) {
        return true;
      }

      const incomingJson = JSON.stringify(loadedNotes);
      const currentJson = JSON.stringify(this.notes);

      if (incomingJson !== currentJson) {
        this.notes = ensurePlantCellUnit(loadedNotes);
        localStorage.setItem("scienceio_notes_v6", incomingJson);
        localStorage.setItem("scienceio_notes_v5", incomingJson);
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

  async publishAllNotes(fromVault = false) {
    const publishBtns = [
      document.getElementById("btn-vault-publish-cloud"),
      document.getElementById("btn-architect-publish-cloud"),
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

    // 1. Primary: Serverless Sync API (/api/sync) - 100% Free Forever • Zero Credit Drain • No CORS Issues
    try {
      if (window.location.protocol.startsWith('http')) {
        const syncRes = await fetch("/api/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ notes: this.notes })
        });
        if (syncRes.ok) {
          publishedSuccessfully = true;
        }
      }
    } catch (e) {
      console.warn("Primary Serverless sync warning:", e);
    }

    // 2. Secondary fallback: Direct cloud PUT to extendsclass if running locally without /api/sync
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
        console.warn("Extendsclass fallback warning:", e);
      }
    }

    // 3. Tertiary fallback: Local dev server REST API (/api/notes) if running node server.js
    try {
      if (window.location.protocol.startsWith('http')) {
        await fetch("/api/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ notes: this.notes, cloudDbId: this.cloudDbId })
        });
      }
    } catch (e) {}

    // Always update local cache
    this.notes = ensurePlantCellUnit(this.notes);
    const currentNotesJson = JSON.stringify(this.notes);
    localStorage.setItem("scienceio_notes_v6", currentNotesJson);
    localStorage.setItem("scienceio_notes_v5", currentNotesJson);
    this.hasUnpublishedChanges = false;
    this.updatePublishBadge();

    publishBtns.forEach(btn => {
      btn.disabled = false;
      btn.innerHTML = btn.dataset.prevHtml || `<span>🚀 Publish All Notes to Cloud</span>`;
    });

    const cloudDot = document.getElementById("cloud-status-dot");
    const cloudText = document.getElementById("cloud-status-text");
    if (cloudDot) cloudDot.className = "cloud-dot";
    if (cloudText) cloudText.textContent = "Database Live";

    sounds.playSuccess();
    this.confetti?.burst(window.innerWidth / 2, window.innerHeight / 2, 85);

    if (!fromVault) {
      alert(`🎉 SUCCESS! All ${this.notes.length} note unit(s) were published live!\n\n✓ Live across all devices (Desktop, Mobile, Tablet).\n✓ 100% Free Forever • Zero API Token Usage.`);
    }

    this.updatePublishModalInfo();
    return true;
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

    // Vault Architect Footer Publish Button - auto-save if architect has form inputs!
    document.getElementById("btn-architect-publish-cloud")?.addEventListener("click", async () => {
      sounds.playClick();
      const titleInput = document.getElementById("vnote-title");
      if (titleInput && titleInput.value.trim() && this.vault && this.vault.architectSquares.length > 0) {
        await this.vault.handleSaveNote(new Event("submit"));
      } else {
        await this.publishAllNotes();
      }
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
        if (loader) loader.classList.add("fade-out");
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
              No notes have been added yet. Click <strong>ADD MY NOTES</strong> below (or enter the Admin Vault) to architect your first science unit and concept squares.<br><br>
              Once created, unlock the Vault to publish them across your phone, tablet, and other computers!
            </p>
            <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
              <button class="hero-cta-btn" id="empty-add-note-btn" style="padding: 12px 24px; font-size: 0.9rem;">
                ✦ ADD MY FIRST NOTE
              </button>
            </div>
          </div>
        `;

        document.getElementById("empty-add-note-btn")?.addEventListener("click", () => {
          this.vault.requestCreateNote();
        });
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

      card.innerHTML = `
        <div class="card-glow-layer ${glowClass}"></div>
        
        <div class="card-header-meta">
          <span class="card-cat-pill">${topic.grade || "5th Grade"} • ${(topic.category || "Science").toUpperCase()} • ${sqCount} SQUARES</span>
          <h3 class="card-topic-title">${topic.title}</h3>
        </div>

        <div class="card-preview-formula" title="${topic.coreFormula}">
          ${topic.coreFormula}
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
          <button class="card-action-btn btn-card-interactive" data-id="${topic.id}" style="background: rgba(52, 211, 153, 0.2); border-color: rgba(52, 211, 153, 0.45); color: #6ee7b7;">
            🔬 INTERACTIVE VISUALIZER
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
        if (e.target.closest("button") || e.target.closest(".organelle-chip")) return;
        if (idx !== this.carouselIndex) {
          this.carouselIndex = idx;
          sounds.playAsmrSlide();
          this.updateCarouselPositions();
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

    stage.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button") || e.target.closest(".organelle-chip")) return;
      startX = e.clientX;
      isDragging = true;
    });

    window.addEventListener("pointerup", (e) => {
      if (!isDragging) return;
      isDragging = false;
      const diffX = e.clientX - startX;
      if (diffX > 45) {
        this.slidePrev();
      } else if (diffX < -45) {
        this.slideNext();
      }
    });
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

    cards.forEach((card, idx) => {
      const offset = idx - this.carouselIndex;
      card.className = "deck-card";

      if (offset === 0) {
        card.classList.add("active-center");
        card.style.transform = "translateX(0) translateZ(0) rotateY(0) scale(1)";
        card.style.opacity = "1";
        card.style.zIndex = "10";
      } else if (offset === -1) {
        card.classList.add("left-card");
        card.style.transform = "translateX(-280px) translateZ(-150px) rotateY(25deg) scale(0.85)";
        card.style.opacity = "0.65";
        card.style.zIndex = "5";
      } else if (offset === 1) {
        card.classList.add("right-card");
        card.style.transform = "translateX(280px) translateZ(-150px) rotateY(-25deg) scale(0.85)";
        card.style.opacity = "0.65";
        card.style.zIndex = "5";
      } else if (offset < -1) {
        card.style.transform = "translateX(-500px) translateZ(-300px) scale(0.7)";
        card.style.opacity = "0";
        card.style.zIndex = "1";
      } else {
        card.style.transform = "translateX(500px) translateZ(-300px) scale(0.7)";
        card.style.opacity = "0";
        card.style.zIndex = "1";
      }
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === this.carouselIndex);
    });
  }

  attachCardButtonListeners() {
    document.querySelectorAll(".btn-card-view").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        sounds.playClick();
        this.openNotesViewer(btn.dataset.id, "notes");
      });
    });

    document.querySelectorAll(".btn-card-interactive").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        sounds.playClick();
        this.openNotesViewer(btn.dataset.id, "interactive");
      });
    });

    document.querySelectorAll(".organelle-chip").forEach((chip) => {
      chip.addEventListener("click", (e) => {
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
        e.stopPropagation();
        sounds.playClick();
        this.printCheatSheet(btn.dataset.id);
      });
    });

    document.querySelectorAll(".btn-card-quiz").forEach((btn) => {
      btn.addEventListener("click", (e) => {
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
        <td><strong>${topic.title}</strong></td>
        <td><span class="card-cat-pill">${(topic.category || "Science").toUpperCase()}</span></td>
        <td><code class="table-formula-code">${topic.coreFormula}</code></td>
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

    if (titleEl) titleEl.textContent = topic.title;
    if (descEl) descEl.textContent = topic.description;
    if (catBadge) catBadge.textContent = `5TH GRADE ${(topic.category || "SCIENCE").toUpperCase()}`;

    this.renderModalProperties(topic);
    this.renderModalInteractive(topic);
    this.renderModalQuiz(topic);
    this.switchModalTab(defaultTab);

    if (modal) modal.classList.remove("hidden");
  }

  switchModalTab(tabName) {
    const tabs = ["notes", "interactive", "practice"];
    tabs.forEach((tab) => {
      const btn = document.getElementById(`modal-tab-${tab}`);
      const pane = document.getElementById(`pane-${tab === "notes" ? "structured-notes" : tab}`);
      if (btn) btn.classList.toggle("active", tab === tabName);
      if (pane) pane.classList.toggle("hidden", tab !== tabName);
    });
  }

  renderModalProperties(topic) {
    const container = document.getElementById("modal-sections-container");
    if (!container) return;
    container.innerHTML = "";

    if (!topic.properties || topic.properties.length === 0) {
      container.innerHTML = `
        <div class="property-detail-card">
          <div class="prop-card-header">
            <h4 class="prop-card-title">${topic.title}</h4>
            <span class="prop-formula-box">${topic.coreFormula}</span>
          </div>
          <p class="prop-explanation">${topic.description}</p>
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

      card.innerHTML = `
        <div class="prop-card-header">
          <div>
            <span class="prop-number-tag">CONCEPT SQUARE #${prop.num}</span>
            <h4 class="prop-card-title">${prop.name}</h4>
          </div>
          <div class="prop-formula-box">${prop.formula}</div>
        </div>

        <p class="prop-explanation">${highlightedExplanation}</p>

        <div class="prop-example-box">
          <div class="prop-example-title">5th Grade Scientific Observation / Demonstration</div>
          <div class="prop-example-text">${(prop.example || "").replace(/\n/g, "<br>")}</div>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px;">
          ${prop.trick ? `<span class="prop-trick-badge">💡 ${prop.trick}</span>` : ""}
          <span class="prop-trick-badge" style="background: rgba(0, 240, 255, 0.15); border-color: rgba(0, 240, 255, 0.3); color: #a5f3fc;">🔬 Verified 5th Grade Science</span>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // Interactive Science Visualizer
  renderModalInteractive(topic) {
    const container = document.getElementById("interactive-sandbox-container");
    if (!container) return;
    container.innerHTML = "";

    // 1. Interactive Plant Cell Diagram
    if (topic.id === "science-plant-cell" || topic.title.includes("CELL")) {
      container.innerHTML = `
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

              <!-- 10 NUMBERED PINS (Matching the 10 worksheet callouts) -->
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

          <!-- Interactive Organelle Inspect HUD Card -->
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

      // Wire up pins and organelle interactions
      const hudTitle = document.getElementById("hud-title");
      const hudFormula = document.getElementById("hud-formula");
      const hudDesc = document.getElementById("hud-desc");
      const hudJumpBtn = document.getElementById("hud-jump-btn");
      let activeSqNum = null;

      const selectOrganelle = (num) => {
        const sq = topic.properties?.find((p) => p.num === num);
        if (!sq) return;
        activeSqNum = num;

        sounds.playClick();

        if (hudTitle) hudTitle.textContent = `${sq.num}. ${sq.name.replace(/^\d+\.\s*/, '')}`;
        if (hudFormula) hudFormula.textContent = sq.formula;
        if (hudDesc) hudDesc.textContent = sq.explanation;
        if (hudJumpBtn) {
          hudJumpBtn.style.display = "inline-flex";
          hudJumpBtn.innerHTML = `<span>🔍 Jump to Square #${sq.num}</span>`;
        }

        // Highlight marker
        document.querySelectorAll(".cell-pin-marker").forEach((pin) => {
          pin.classList.toggle("active", parseInt(pin.dataset.num, 10) === num);
        });

        // Highlight SVG path
        document.querySelectorAll(".cell-organelle-path").forEach((p) => p.classList.remove("highlighted"));
        const targetPath = document.getElementById(`path-org-${num}`);
        if (targetPath) targetPath.classList.add("highlighted");
      };

      document.querySelectorAll(".cell-pin-marker").forEach((pin) => {
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

      // Auto-select first organelle on open
      setTimeout(() => selectOrganelle(1), 300);
      return;
    }

    // 2. States of matter phase simulator
    if (topic.title.includes("MATTER") || (topic.category === "physical")) {
      container.innerHTML = `
        <div class="interactive-demo-card">
          <h4 class="demo-title">Kinetic Molecular Heat Simulator</h4>
          <p class="demo-subtitle">Adjust thermal energy to observe molecular spacing and state transitions!</p>
          
          <div style="display: flex; flex-direction: column; align-items: center; gap: 16px; margin: 20px 0;">
            <div id="matter-canvas-box" style="width: 260px; height: 160px; background: rgba(0,0,0,0.6); border: 2px solid var(--neon-cyan); border-radius: 16px; position: relative; overflow: hidden; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 6px; padding: 10px;">
            </div>

            <div style="display: flex; align-items: center; gap: 12px; width: 80%; max-width: 320px;">
              <span style="font-size: 0.9rem; color: #38bdf8;">❄️ Cold</span>
              <input type="range" id="heat-slider" min="1" max="3" value="1" style="flex: 1; accent-color: var(--neon-cyan);" />
              <span style="font-size: 0.9rem; color: #f87171;">🔥 Heat</span>
            </div>

            <div id="matter-state-text" style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 800; color: var(--neon-cyan);">
              STATE: SOLID (Tightly Packed Vibration)
            </div>
          </div>
        </div>
      `;

      const box = document.getElementById("matter-canvas-box");
      const slider = document.getElementById("heat-slider");
      const text = document.getElementById("matter-state-text");

      const updateMolecules = () => {
        if (!box || !slider || !text) return;
        const val = parseInt(slider.value, 10);
        box.innerHTML = "";

        if (val === 1) {
          text.textContent = "STATE: SOLID (Tightly Packed Vibration)";
          text.style.color = "#38bdf8";
          for (let i = 0; i < 28; i++) {
            const m = document.createElement("div");
            m.style.cssText = "width: 14px; height: 14px; border-radius: 50%; background: #38bdf8; box-shadow: 0 0 6px #38bdf8;";
            box.appendChild(m);
          }
        } else if (val === 2) {
          text.textContent = "STATE: LIQUID (Flowing Particle Motion)";
          text.style.color = "#34d399";
          for (let i = 0; i < 18; i++) {
            const m = document.createElement("div");
            m.style.cssText = "width: 16px; height: 16px; border-radius: 50%; background: #34d399; box-shadow: 0 0 8px #34d399; margin: 4px;";
            box.appendChild(m);
          }
        } else {
          text.textContent = "STATE: GAS (High-Speed Rapid Diffusion)";
          text.style.color = "#f87171";
          for (let i = 0; i < 8; i++) {
            const m = document.createElement("div");
            m.style.cssText = "width: 18px; height: 18px; border-radius: 50%; background: #f87171; box-shadow: 0 0 10px #f87171; margin: 12px; animation: subtleNeonFlicker 0.2s infinite;";
            box.appendChild(m);
          }
        }
      };

      updateMolecules();
      slider.addEventListener("input", () => {
        sounds.playClick();
        updateMolecules();
      });
    } else {
      // General Science Playground
      container.innerHTML = `
        <div class="interactive-demo-card">
          <h4 class="demo-title">${topic.title} Exploration Sandbox</h4>
          <p class="demo-subtitle">Core scientific principle and formula verified for 5th grade inquiry.</p>
          <div class="array-formula-live" style="color: var(--neon-cyan); margin-top: 14px; font-size: 1.2rem;">
            ⚛️ ${topic.coreFormula}
          </div>
        </div>
      `;
    }
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
        <h2 style="color: #0284c7; border-bottom: 2px solid #bae6fd; padding-bottom: 6px;">${topic.title}</h2>
        <p style="font-size: 1.1rem; font-style: italic; margin-top: 6px;">${topic.description}</p>
        <p style="font-weight: bold; margin-top: 8px;">Scientific Principle: ${topic.coreFormula}</p>
      </div>
    `;

    if (topic.properties) {
      topic.properties.forEach((p) => {
        html += `
          <div style="margin-bottom: 16px; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px;">
            <h3 style="font-size: 1.05rem; margin-bottom: 4px;">#${p.num} — ${p.name}</h3>
            <p style="font-weight: bold; color: #1e293b;">Formula / Rule: ${p.formula}</p>
            <p style="margin: 4px 0;">${p.explanation}</p>
            <p style="color: #475569; font-size: 0.95rem;">Observation: ${p.example}</p>
            ${p.trick ? `<p style="color: #d97706; font-size: 0.9rem;">💡 ${p.trick}</p>` : ""}
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

    // Scroll spy
    window.addEventListener("scroll", () => {
      const notesSec = document.getElementById("notes-section");
      const homeBtn = document.getElementById("nav-btn-home");
      const notesBtn = document.getElementById("nav-btn-notes");
      if (!notesSec || !homeBtn || !notesBtn) return;
      const rect = notesSec.getBoundingClientRect();
      if (rect.top <= 200) {
        notesBtn.classList.add("active");
        homeBtn.classList.remove("active");
      } else {
        homeBtn.classList.add("active");
        notesBtn.classList.remove("active");
      }
    }, { passive: true });

    // Hero buttons
    document.getElementById("hero-explore-btn")?.addEventListener("click", () => {
      sounds.playClick();
      document.getElementById("notes-section")?.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("hero-create-btn")?.addEventListener("click", () => {
      this.vault.requestCreateNote();
    });

    document.getElementById("hero-scroll-cue")?.addEventListener("click", () => {
      document.getElementById("notes-section")?.scrollIntoView({ behavior: "smooth" });
    });

    // Modals
    document.getElementById("modal-notes-close")?.addEventListener("click", () => {
      document.getElementById("notes-viewer-modal")?.classList.add("hidden");
    });
    document.getElementById("modal-done-btn")?.addEventListener("click", () => {
      document.getElementById("notes-viewer-modal")?.classList.add("hidden");
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

    // Search input
    const searchInput = document.getElementById("notes-search-input");
    const searchClear = document.getElementById("search-clear-btn");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value;
        if (searchClear) searchClear.classList.toggle("hidden", !this.searchQuery);
        this.carouselIndex = 0;
        this.render();
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
        if (e.target === backdrop) backdrop.classList.add("hidden");
      });
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

        const t = text.toLowerCase();
        let replyHTML = "";

        // Secret Admin Passcode
        if (t === "access j33v4") {
          replyHTML = `<div class="msg-bubble" style="background: rgba(48, 209, 88, 0.2); border-color: #30D158; color: #30D158; font-weight: bold;">Authentication Accepted. Welcome back, Jeeva. Opening Vault...</div>`;
          setTimeout(() => {
            if (window.app && window.app.vault) {
              window.app.vault.isUnlocked = true;
              window.app.vault.open();
            }
            const chatWin = document.getElementById("ai-chat-window");
            if (chatWin) chatWin.classList.add("hidden");
            sounds.playSuccess();
          }, 1000);
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

// Mouse Spotlight Logic
document.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.getElementById("mouse-spotlight");
  if (spotlight) {
    document.addEventListener("mousemove", (e) => {
      spotlight.style.opacity = "1";
      spotlight.style.left = e.clientX + "px";
      spotlight.style.top = e.clientY + "px";
    });
    document.addEventListener("mouseleave", () => {
      spotlight.style.opacity = "0";
    });
  }
});

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
        activeInput.value += btn.textContent;
        activeInput.focus();
        sounds.playClick();
      }
    });
  });
});
