// Armor data
const armorData = {
    // Helmet options
    "Hypersensory-Scanner-Array": {
        name: "Hypersensory Scanner Array",
        description: "This advanced helmet is a marvel of sensory enchantment, merging arcane optics with practical battlefield awareness. Grants darkvision and the ability to detect invisible creatures.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/hyperscannerarray.png",
        progression: [
            "<strong>Level 1:</strong> Darkvision (60 ft.) and Basic Sensor that highlights hidden or invisible creatures.",
            "<strong>Level 4:</strong> Enhanced Detection Mode reveals invisible creatures within 30 ft. for 1 minute (once per short rest).",
            "<strong>Level 7:</strong> Truesight Activation grants Truesight out to 30 ft. for 1 minute (once per short rest).",
            "<strong>Level 11:</strong> Investigative Augmentation adds advantage on Investigation checks to find illusions or hidden entities.",
            "<strong>Level 14:</strong> Augmented Sensory Overload increases Truesight range to 60 ft. and detects magical auras within 30 ft."
        ]
    },    "Neuroprotective-Casement": {
        name: "Neuroprotective Casement",
        description: "A sleek, rune-etched helmet designed to shield your mind from intrusive psychic assaults. Provides enhanced mental fortification and psychic resistance.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/neuroprotectivecasement.png",
        bonusAC: 1,
        progression: [
            "<strong>Level 1:</strong> +1 bonus to AC and slight resistance to psychic damage.",
            "<strong>Level 4:</strong> Advantage on saving throws against charm effects.",
            "<strong>Level 7:</strong> Immunity to the frightened condition.",
            "<strong>Level 11:</strong> Immunity to charm effects and resistance to force damage.",
            "<strong>Level 14:</strong> Immunity to psychic damage and advantage on Intelligence saving throws."
        ]
    },    "Ultimate-Bastion-Heavy-Helmet": {
        name: "Ultimate-Bastion Heavy Helmet",
        description: "Forged in the crucible of relentless combat and imbued with archaic defensive runes, this helmet provides formidable protection against multiple damage types.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/ultimatebastion.png",
        bonusAC: 1,
        progression: [
            "<strong>Level 1:</strong> +1 bonus to AC and resistance to radiant damage.",
            "<strong>Level 4:</strong> Resistance to necrotic damage.",
            "<strong>Level 7:</strong> Immunity to radiant damage.",
            "<strong>Level 11:</strong> Additional +1 bonus to AC (total +2) and resistance/immunity to one chosen damage type.",
            "<strong>Level 14:</strong> Immunity to necrotic damage and advantage on saving throws against spells."
        ]
    },    "Golden-Chain-Hood": {
        name: "Golden Chain Hood",
        description: "A majestic hood interwoven with shimmering golden chains that pulse with divine energy, offering enhanced divine abilities and protection.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/holygoldchain.png",
        bonusAC: 1,
        progression: [
            "<strong>Level 1:</strong> +1 bonus to AC and saving throws against charm effects, darkvision (60 ft.), and detect magic ability.",
            "<strong>Level 4:</strong> Enhanced scanning mode for invisible or ethereal creatures.",
            "<strong>Level 7:</strong> +1 bonus to Wisdom saving throws and advantage on charm/fear saves.",
            "<strong>Level 11:</strong> Radiant Feedback deals extra radiant damage after using detection abilities.",
            "<strong>Level 14:</strong> Divine Ascendance grants Truesight, advantage on Wisdom saves, and bonus radiant damage."
        ]
    },    "Oracles-Tongue-Helm": {
        name: "Oracle's Tongue Helm",
        description: "Unlocks the power of language, allowing you to speak, read, and write a multitude of tongues while bridging the gap between mortals and spirits.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/oraclestongue.png",
        progression: [
            "<strong>Level 1:</strong> Two additional languages, Comprehend Languages ability, and +1 bonus to Persuasion checks.",
            "<strong>Level 4:</strong> Learn an additional language and cast Speak with Animals once per short rest.",
            "<strong>Level 7:</strong> Automatically decipher simple texts in any language and initiate telepathic conversations.",
            "<strong>Level 11:</strong> Permanent +1 bonus to Persuasion checks and cast Tongues once per long rest.",
            "<strong>Level 14:</strong> Universal Oratory ability that makes all creatures understand your words."
        ]
    },    "Pacifier-Themed-Helmet": {
        name: "Pacifier of Quietude",
        description: "A pacifier-themed helmet designed for caster-builds who value quiet spellcasting and mental focus over brute protection.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/pacifierofquietude.png",
        progression: [
            "<strong>Level 1:</strong> Silent Spellcasting negates verbal components and short-range telepathy (30 ft.).",
            "<strong>Level 4:</strong> Mutes ambient noise, granting advantage on Concentration checks in loud environments.",
            "<strong>Level 7:</strong> Enhanced telepathy (60 ft.) and nonverbal spell components can be dispensed with.",
            "<strong>Level 11:</strong> Mind shield allows re-rolling failed Wisdom saves against psychic effects once per short rest.",
            "<strong>Level 14:</strong> Silent casting becomes nearly undetectable, requiring DC 15 Perception to notice."
        ]
    },    "Bonnet-Themed-Helmet": {
        name: "Bonnet of Blushing Bravado",
        description: "For those who'd rather charm than conceal, this ostentatiously babyish bonnet radiates an irresistible level of adorable absurdity that distracts everyone around it.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/bonnetsallet.png",
        progression: [
            "<strong>Level 1:</strong> +1 bonus to Charisma and advantage on Persuasion checks.",
            "<strong>Level 4:</strong> Aura of adorable charm forces Charisma checks to maintain composure.",
            "<strong>Level 7:</strong> Allies within 10 ft. gain advantage on saving throws against fear.",
            "<strong>Level 11:</strong> Additional +1 bonus to saving throws against fear, charm, and 'soiling' effects for nearby allies.",
            "<strong>Level 14:</strong> 'Potty Parade' ability incapacitates creatures with uncontrollable mirth once per long rest."
        ]
    },    // Pauldrons options
    "Exultant-Type": {
        name: "Exultant Type",
        description: "Designed for the charismatic and commanding presence on the battlefield, these pauldrons enhance your social prowess and influence allies.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/exultantpauldrons.png",
        progression: [
            "<strong>Level 1:</strong> +1 to Persuasion or Intimidation checks.",
            "<strong>Level 4:</strong> Allies within 10 ft. gain advantage on saving throws against charm effects.",
            "<strong>Level 7:</strong> Double proficiency bonus on Persuasion or Intimidation checks.",
            "<strong>Level 11:</strong> Allies within 10 ft. receive +1 bonus to Charisma saving throws.",
            "<strong>Level 14:</strong> Charisma score increases by 2 (max 22)."
        ]
    },    "Vanguard-Heavy-Type": {
        name: "Vanguard Heavy Type",
        description: "For Aegisknights who demand unwavering durability, these pauldrons provide formidable protection while absorbing and deflecting incoming damage.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/vanguardheavypauldrons.png",
        bonusAC: 2,
        progression: [
            "<strong>Level 1:</strong> +2 bonus to AC and resistance to nonmagical damage.",
            "<strong>Level 4:</strong> Resistance to two damage types of your choice.",
            "<strong>Level 7:</strong> Once per short rest, use reaction to halve incoming damage.",
            "<strong>Level 11:</strong> Immunity to one of your chosen damage types.",
            "<strong>Level 14:</strong> Resistance to all damage types except psychic."
        ]
    },    "Tech-Type": {
        name: "Tech Type",
        description: "Engineered for versatility and precision, these pauldrons integrate advanced mechanized components to support technical and tactical needs.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/techpauldrons.png",
        progression: [
            "<strong>Level 1:</strong> Proficiency in one extra tool and two robotic arms granting +5 bonus to crafting actions.",
            "<strong>Level 4:</strong> Advantage on Strength (Athletics) checks for grappling.",
            "<strong>Level 7:</strong> Proficiency in an additional tool of your choice.",
            "<strong>Level 11:</strong> Ability to manipulate two objects in one turn.",
            "<strong>Level 14:</strong> Use the Help action as a bonus action."
        ]
    },    "Marksman-Type-Pauldron": {
        name: "Marksman Type Pauldron",
        description: "Engineered for ranged specialists, optimized for precise targeting and rapid missile deployment with versatile ammunition options.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/marksmanpauldrons.png",
        progression: [
            "<strong>Level 1:</strong> Sharp Shooter feature and mounted missile launcher with explosion damage.",
            "<strong>Level 4:</strong> Additional use of Sharp Shooter feature daily.",
            "<strong>Level 7:</strong> Increased explosion damage and barrage fires 4 darts instead of 3.",
            "<strong>Level 11:</strong> +2 bonus to ranged attack rolls for 1 minute once per short rest.",
            "<strong>Level 14:</strong> Advantage on one ranged attack roll per turn when using Sharp Shooter."
        ]
    },    "Kinetic-Resonance-Pauldron": {
        name: "Kinetic Resonance Pauldron",
        description: "Pulses with raw kinetic energy of movement, turning dashing into a storehouse of explosive force for both defense and offense.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/kineticresonancepauldrons.png",
        progression: [
            "<strong>Level 1:</strong> +2 bonus to Athletics and Acrobatics, store Kinetic Charges when dashing.",
            "<strong>Level 4:</strong> Advantage on Dexterity saving throws when moving half your speed.",
            "<strong>Level 7:</strong> Kinetic Charges deal extra 1d8 force damage and push targets.",
            "<strong>Level 11:</strong> Reaction to deal 2d8 force damage to attackers and gain +2 AC.",
            "<strong>Level 14:</strong> Double movement speed and deal bonus force damage after dashing."
        ]
    },    "Diaper-Duty-Pauldrons": {
        name: "Diaper Duty Pauldrons",
        description: "Adorned with adorable embroidered swaddles, cartoonish bibs, and tiny pacifiers, these pauldrons capture the nurturing chaos of diaper school, protecting you with a refreshing burst of cleanliness.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/diaperdutypauldrons.png",
        progression: [
            "<strong>Level 1:</strong> Basic abilities include nurturing abilities and cleansing effects.",
            "<strong>Level 4:</strong> Enhanced cleaning magic and protection against 'soiling' effects.",
            "<strong>Level 7:</strong> Diaper Dash allows standing up and extra movement without opportunity attacks.",
            "<strong>Level 11:</strong> Clean Sweep Counter forces strength saving throws on attackers, potentially reducing their movement.",
            "<strong>Level 14:</strong> Ultimate upgrade provides advanced nurturing and protective capabilities."
        ]
    },

    // Chest armor options     
        "Balanced-Type-Composite-Frame": {
        name: "Balanced Type Composite Frame",
        hitdice: "d10",
        armorclass: "14 + Dex modifier (max +2)",
        description: "A balanced chest armor that provides moderate protection and mobility with an energy shield.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/balancedarmor.png",
        progression: [
            "<strong>Level 1:</strong> AC 14 + Dex modifier (max +2) and temporary +2 shield bonus to AC for 1 minute once per day.",
            "<strong>Level 4:</strong> Resistance to one damage type for 1 minute once per short rest.",
            "<strong>Level 7:</strong> +2 bonus to initiative rolls.",
            "<strong>Level 11:</strong> Enhanced shield bonus of +4 AC instead of +2.",
            "<strong>Level 14:</strong> Immunity to one chosen damage type."
        ]
    },  
        "Bulwark-Type-Frame": {
        name: "Bulwark Type Frame",
        hitdice: "d12",
        armorclass: "17",
        description: "Embodying steadfast resilience, this chestpiece sacrifices nimbleness for solid defense and damage negation.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/bulwark.png",
        progression: [
            "<strong>Level 1:</strong> AC 17, Bulwark Aegis negates one damage type for 1 minute once per day, d12 hit die.",
            "<strong>Level 4:</strong> Bulwark Aegis can be used twice per day.",
            "<strong>Level 7:</strong> Passive resistance to two chosen damage types.",
            "<strong>Level 11:</strong> Critical hits reduced to normal hits during Bulwark Aegis.",
            "<strong>Level 14:</strong> Resistance to all damage types except psychic."
        ]
    },        "Light-Type-Frame": {
        name: "Light Type Frame",
        hitdice: "d8",
        armorclass: "13+dex",
        description: "Maximizes mobility at the expense of heavy armor, designed for agile Aegisknights who prioritize speed and dexterity.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/lighttypearmor.png",
        progression: [
            "<strong>Level 1:</strong> Lower base AC, +15 ft. movement speed, +1 bonus to AC from energy field, d8 hit die.",
            "<strong>Level 4:</strong> Additional +10 ft. movement speed (total +25 ft.).",
            "<strong>Level 7:</strong> Advantage on Dexterity saving throws.",
            "<strong>Level 11:</strong> Immunity to being restrained or grappled.",
            "<strong>Level 14:</strong> Dash as a bonus action without provoking opportunity attacks once per short rest."
        ]
    },
        "Xtra-Hev-Composite-Frame": {
        name: "Xtra-Hev Composite Frame",
        hitdice: "d10",
        armorclass: "17",
        description: "A heavy-duty frame with regenerating energy shield and enhanced defensive capabilities.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/xtrahevarmor.png",
        progression: [
            "<strong>Level 1:</strong> d10 hit die, AC 16, +1 to Constitution saves, Regen Shield grants temporary hit points.",
            "<strong>Level 4:</strong> AC increases to 17, shield regenerates 4 temporary hit points per turn.",
            "<strong>Level 7:</strong> +2 bonus to Constitution checks and increased shield capacity.",
            "<strong>Level 11:</strong> Additional shield regeneration and effective AC of 18 with full shield.",
            "<strong>Level 14:</strong> Fortress Mode increases shield capacity by 50% and reduces incoming damage."
        ]
    },    "Soiling-Shield-Bib": {
        name: "Soiling Shield Bib",
        hitdice: "d10",
        description: "This oversized, magically enchanted bib is designed to ward off the filth and chaos of the battlefield, ensuring that no matter how messy the combat gets, you remain pristine.",
        armorclass: "14+dex(3)",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/soilingshieldbib.png",
        progression: [
            "<strong>Level 1:</strong> Advantage on checks/saves against 'soiling' effects, base AC of 14 + Dex modifier (max +3).",
            "<strong>Level 4:</strong> Gain resistance to poison damage and immunity to disease.",
            "<strong>Level 7:</strong> Generate a cleansing aura that grants nearby allies advantage on saves against poison.",
            "<strong>Level 11:</strong> Purifying Strike adds radiant damage to attacks against 'corrupted' enemies.",
            "<strong>Level 14:</strong> Perfect Purity grants immunity to poison damage and the poisoned condition."
        ]
    },

    // Arms/Gloves options    
       "Shadestreak-Handmantles": {
        name: "Shadestreak Handmantles",
        description: "Dexterity-focused gauntlets designed for finesse and subtlety, providing lock-bypassing abilities and enhanced stealth.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/shadestreak.png",
        progression: [
            "<strong>Level 1:</strong> Proficiency with thieves' tools and ability to bypass locks once per day.",
            "<strong>Level 4:</strong> Advantage on Sleight of Hand checks.",
            "<strong>Level 7:</strong> Disarm traps without triggering them once per short rest.",
            "<strong>Level 11:</strong> Cast Invisibility on yourself once per short rest.",
            "<strong>Level 14:</strong> Bypass magical locks once per long rest."
        ]
    },
    "Blastbreaker-Fists": {
        name: "Blastbreaker Fists",
        description: "Engineered for raw melee power, enhancing physical might and allowing easier wielding of larger weapons.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/blastbreakers",
        progression: [
            "<strong>Level 1:</strong> Advantage on strength checks, +1 to melee damage, treat two-handed weapons as one-handed.",
            "<strong>Level 4:</strong> +2 bonus to melee attack rolls.",
            "<strong>Level 7:</strong> Extra 1d8 force damage once per turn on a hit.",
            "<strong>Level 11:</strong> Grapple two creatures at once, deals 1d6 damage to grappled creatures.",
            "<strong>Level 14:</strong> Ignore nonmagical damage resistance, extra 2d8 force damage on criticals."
        ]
    },"Somatic-Satellites": {
        name: "Somatic Satellites",
        description: "Floating magical spheres that can be launched as ranged attacks or used to store spells for later use.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/somaticsatellites.png",
        progression: [
            "<strong>Level 1:</strong> Spheres deal 1d8 force damage or store spells for later use.",
            "<strong>Level 4:</strong> Increase to 3 satellites.",
            "<strong>Level 7:</strong> Stored spells can be cast as reactions, store Counterspell once per day.",
            "<strong>Level 11:</strong> Deliver touch spells at 30 ft. range.",
            "<strong>Level 14:</strong> Gain a fourth satellite, stored spells last until cast."
        ]
    },"Serene-Palm-Gauntlets": {
        name: "Serene Palm Gauntlets",
        description: "Imbued with the essence of martial arts, allowing defense and controlled offense with elegant strikes.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/serenepalm.png",
        progression: [
            "<strong>Level 1:</strong> Parry Reflex reduces damage by 1d4 + proficiency bonus, +1 AC against melee attacks.",
            "<strong>Level 4:</strong> Force disadvantage on ranged attacks once per short rest, Parry Reflex improved to 1d6.",
            "<strong>Level 7:</strong> Open Palm Strike deals 1d6 force damage and pushes targets back.",
            "<strong>Level 11:</strong> Counterattack after successful Parry Reflex, improved Open Palm Strike.",
            "<strong>Level 14:</strong> Zen Reversal completely negates an attack and counters with 2d8 force damage."
        ]
    },
    "Infantile-Mittens": {
        name: "Infantile Mittens",
        description: "These gauntlets feature oversized, cuddly mittens that limit fine dexterity but grant unique protective benefits.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/infantilemitts.png",
        progression: [
            "<strong>Level 1:</strong> Inelegant Grip imposes penalty on Dexterity tasks but grants immunity to touch-based traps and poisons, advantage on saves against curses from touching objects.",
            "<strong>Level 4:</strong> Increase unarmed strike damage by 1d4.",
            "<strong>Level 7:</strong> Advantage on Strength (Athletics) checks for grappling or shoving.",
            "<strong>Level 11:</strong> Additional bonus to Strength checks for physical tasks.",
            "<strong>Level 14:</strong> Gain one-time bonus to any Strength-based contest per short rest, automatically winning."
        ]
    },    // Boots options
    "Ultra-Duty-Boots": {
        name: "Ultra-Duty Boots",
        description: "Built for the stalwart warrior who refuses to be knocked off balance, these boots anchor you to the ground.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/ultradutyboots.png",
        progression: [
            "<strong>Level 1:</strong> Advantage on saves against knockback/prone, but -5 ft. movement speed (25 ft. total).",
            "<strong>Level 4:</strong> Immunity to knockback effects.",
            "<strong>Level 7:</strong> Advantage on saving throws against being knocked prone.",
            "<strong>Level 11:</strong> Stand up from prone without using movement.",
            "<strong>Level 14:</strong> +5 bonus to saves against forced movement."
        ]
    },    "Balanced-Boots": {
        name: "Balanced Boots",
        description: "Sleek, streamlined boots that enhance speed and nimbleness while helping you navigate tricky terrain.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/balanced%20boots.png",
        progression: [
            "<strong>Level 1:</strong> +5 ft. movement speed (35 ft. total) and advantage on saves against trip attacks.",
            "<strong>Level 4:</strong> Ignore the effects of difficult terrain.",
            "<strong>Level 7:</strong> Additional +10 ft. movement speed (45 ft. total).",
            "<strong>Level 11:</strong> Advantage on saves against speed reduction effects.",
            "<strong>Level 14:</strong> Move across vertical surfaces and liquids without falling."
        ]
    },    "Blastcore-Soles": {
        name: "Blastcore Soles",
        description: "Infuse your steps with volatile energy for explosive speed and gravity-defying leaps that catch foes off guard.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/blastcoresoles.png",
        progression: [
            "<strong>Level 1:</strong> 40 ft. movement speed from explosive propulsion.",
            "<strong>Level 4:</strong> 25% increased jump distance and advantage on jump checks with running start.",
            "<strong>Level 7:</strong> Leap over enemies without provoking opportunity attacks once per short rest.",
            "<strong>Level 11:</strong> Leap up to 60 ft. horizontally or 30 ft. vertically.",
            "<strong>Level 14:</strong> Immunity to fall damage and create shockwaves dealing 2d10 force damage on landing."
        ]
    },    "Virtues-Bastion": {
        name: "Virtue's Bastion (Diaper Cover)",
        description: "This enchanted diaper cover isn't merely lower-wear—it's a full-body safeguard for those who must don the bulkiest, most efficient aegisknight diapers. Integrated with a magical self‑cleaning booster, the cover continuously sanitizes, deodorizes, and refreshes your diaper area, allowing you to navigate treacherous, trap‑laden grounds without penalty and always look, feel, and smell immaculate.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/virtuesbastion.png",
        progression: [
            "<strong>Level 1:</strong> Diaper Mastery Activation grants improved mobility, +1 bonus on saving throws against traps, and automatic cleansing of minor soiling.",
            "<strong>Level 4:</strong> Advanced Cleansing Burst grants advantage on hygiene checks and increases trap safety bonus to +2.",
            "<strong>Level 7:</strong> Continuous Cleanliness makes Diaper Mastery benefits permanent without requiring Fuel Cell expenditure.",
            "<strong>Level 11:</strong> Rapid Refresh allows extra movement without opportunity attacks and temporary saving throw bonus once per short rest.",
            "<strong>Level 14:</strong> Ultimate Diaper Time-Out creates aura of pristine cleanliness that negates traps and can incapacitate enemies."
        ]
    },    "Ethereal-Stride-Boots": {
        name: "Ethereal Stride Boots",
        description: "These sleek, mystically enhanced boots bear subtle, luminescent runes that channel arcane energy into your step. They are designed for rapid, unhindered movement—and pair especially well with raiment that lacks synergy. The runes spark with kinetic vigor as you dash across the battlefield.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/etherealstride.png",
        progression: [
            "<strong>Level 1:</strong> Enhanced Mobility increases walking speed by +5 ft. (40 ft. total). Difficult Terrain Negation allows treating difficult terrain as normal once per short rest.",
            "<strong>Level 4:</strong> Runic Surge grants advantage on Acrobatics checks to avoid hazards and traps for 1 minute once per short rest.",
            "<strong>Level 7:</strong> Resonant Stride adds 1d6 force damage to next melee attack after taking the Dash action.",
            "<strong>Level 11:</strong> Mystic Shift allows teleporting up to 15 ft. without provoking opportunity attacks once per short rest.",
            "<strong>Level 14:</strong> Ethereal Ascension grants invisibility to nonmagical sight and ability to pass through obstacles for 1 round once per long rest."
        ]
    },

    // Raiment options    
        "Photonic-Cape": {
        name: "Photonic Cape",
        description: "A high-tech cloak suffused with prismatic energy, allowing you to harness light and shadow for defense and stealth.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/photoniccape.png",
        bonusCellCharges: 2,
        progression: [
            "<strong>Level 3:</strong> Cast Shield multiple times per day, Displacement effect once per day, +2 bonus on Stealth checks.",
            "<strong>Level 6:</strong> Invisibility for 1 minute and flying speed of 30 ft. for 30 minutes once per short rest.",
            "<strong>Level 8:</strong> Resistance to radiant and necrotic damage.",
            "<strong>Level 12:</strong> Immunity to radiant damage and teleport 60 ft. as a bonus action once per short rest."
        ]
    },      "Soul-Core-Manifold": {
        name: "Soul Core Manifold",
        description: "A core of elemental power granting bonus Cell Charges and elemental rebuke capabilities.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/soulcoremanifold.png",
        bonusCellCharges: 2,
        progression: [
            "<strong>Level 3:</strong> Two extra Cell Charges, cast Hellish Rebuke, enhanced recharge rate.",
            "<strong>Level 6:</strong> Resistance to your chosen elemental type.",
            "<strong>Level 8:</strong> Deal 2d8 elemental damage to melee attackers.",
            "<strong>Level 12:</strong> Immunity to your chosen element and reaction-based shield."
        ]
    },    "Godhead-Shard": {
        name: "Godhead Shard",
        description: "A radiant fragment of divine essence infusing your raiment with celestial power and spellcasting.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/godheadshard.png",
        bonusCellCharges: 4,
        progression: [
            "<strong>Level 3:</strong> Two divine cantrips and one 1st-level divine spell, second-highest Cell Charge pool, restore charges via Religion checks.",
            "<strong>Level 6:</strong> Additional divine spell slot.",
            "<strong>Level 8:</strong> Integrate a cleric subclass feature into your armor.",
            "<strong>Level 12:</strong> Cast Divine Word once per long rest and enhanced Cell Charge restoration."
        ]
    },    "Arcanomatrix": {
        name: "Arcanomatrix",
        description: "A nexus of arcane energy woven into your raiment, granting spellcasting abilities and magical defenses.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/arcanomatrix.png",
        bonusCellCharges: 2,
        progression: [
            "<strong>Level 3:</strong> Two arcane cantrips and one 1st-level arcane spell, extra Cell Charges for spells.",
            "<strong>Level 6:</strong> Integrate a wizard subclass feature.",
            "<strong>Level 8:</strong> Cast Counterspell once per long rest without expending Cell Charges.",
            "<strong>Level 12:</strong> Resistance to force damage and advantage on saves against spells."
        ]
    },    "Luminant-Engine": {
        name: "Luminant Engine",
        description: "A radiant marvel channeling ephemeral power of illumination into tangible effects like light bolts and barriers.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/luminantengine.png",
        bonusCellCharges: 2,
        progression: [
            "<strong>Level 3:</strong> Causal Points for luminancer-like abilities, enhanced energy reservoir.",
            "<strong>Level 6:</strong> Luminal Motion teleport once per short rest.",
            "<strong>Level 8:</strong> Resistance to radiant and necrotic damage.",
            "<strong>Level 12:</strong> Immunity to radiant damage and unleash a Causal Nova once per long rest."
        ]
    },
    "Mystery-Module": {
        name: "Mystery Module",
        description: "A wild card raiment with effects determined by rolls on a custom table, offering unpredictable benefits.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/mysterymodule.png",
        bonusCellCharges: 4,
        progression: [
            "<strong>Level 3:</strong> Random baseline effect from DM table and stable bonus like damage immunity or AC bonus.",
            "<strong>Level 6:</strong> Additional random ability from DM table.",
            "<strong>Level 8:</strong> Reality-bending special action, like forcing enemy rerolls.",
            "<strong>Level 12:</strong> Major distinguishing ability that redefines your battlefield role."
        ]
    },
    "Transmorphic-Belt": {
        name: "Transmorphic Belt",
        description: "The Shapeshifter's Cinch grants elemental resistance, breath weapons, and size-altering capabilities.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/transformationbelt.png",
        bonusCellCharges: 1,
        progression: [
            "<strong>Level 3:</strong> Resistance to one elemental damage type, breath weapon, and size increase to Large.",
            "<strong>Level 6:</strong> Enhanced breath weapon damage and extended transformation duration.",
            "<strong>Level 8:</strong> Second elemental variant for breath weapon and improved elemental resistance.",
            "<strong>Level 12:</strong> Boost speed and Strength during transformation."
        ]
    },
    "Unstable-Fury-Core": {
        name: "Unstable Fury Core",
        description: "A volatile engine of primal might transforming aggression into destructive power with overload risks.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/unstablefurycore.png",
        bonusCellCharges: 5,
        progression: [
            "<strong>Level 3:</strong> Fury Mode grants bonus damage and temporary hit points, but with overload risk and extra charge costs.",
            "<strong>Level 6:</strong> Focused Smash for devastating strikes that bypass resistances.",
            "<strong>Level 8:</strong> Temporary resistance to physical damage and reduced misfire chance.",
            "<strong>Level 12:</strong> Fury Unleashed deals massive force damage and can stun targets."
        ]
    },
    "Diaper-Daycare-Raiment": {
        name: "Diaper Daycare Raiment",
        description: "Harnessing the wholesome chaos of Diaper School, this raiment transforms your suit's central core into a beacon of nurturing mischief and disruptive battleflow.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/daycarecore.png",
        bonusCellCharges: 2,
        progression: [
            "<strong>Level 3:</strong> Soothing Miracle grants advantage on fear saves, Absorbent Shield reduces damage, and Diaper Douse Blast can immobilize enemies.",
            "<strong>Level 4:</strong> Soothing Miracle can be used an extra time per short rest.",
            "<strong>Level 7:</strong> Diaper Dash allows bonus action movement without opportunity attacks.",
            "<strong>Level 11:</strong> Clean Sweep Counter splashes cleansing liquid at attackers, potentially reducing their movement.",
            "<strong>Level 14:</strong> Advanced nurturing abilities with greater range and effectiveness."
        ]
    },
    "Mephidium-Coda": {
        name: "Mephidium Coda (Skunk's Tail)",
        description: "Embodying toxic misfortune and grimy power, the Mephidium Coda transforms your battle presence into a malodorous curse that intensifies with combat grime.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/mephidiumcoda.png",
        bonusCellCharges: 2,
        progression: [
            "<strong>Level 3:</strong> Base toxic abilities including poison effects and noxious aura.",
            "<strong>Level 6:</strong> Enhanced poison damage and expanded aura of misfortune.",
            "<strong>Level 9:</strong> Additional toxic effects with chance to inflict special conditions.",
            "<strong>Level 12:</strong> Ultimate stinking cloud ability and toxic immunity."
        ]
    }
};

// Hardcoded subset of weapons data
const weaponsData = [
    {
        "id": "club",
        "name": "Club",
        "damage_dice": "1d4",
        "damage_type": "bludgeoning",
        "light": true,
        "finesse": false,
        "special": null,
        "category": "simple melee",
        "weight": 2,
        "cost": "1 sp"
    },
    {
        "id": "dagger",
        "name": "Dagger",
        "damage_dice": "1d4",
        "damage_type": "piercing",
        "light": true,
        "finesse": true,
        "special": "Thrown (range 20/60)",
        "category": "simple melee",
        "weight": 1,
        "cost": "2 gp"
    },
    {
        "id": "greatclub",
        "name": "Greatclub",
        "damage_dice": "1d8",
        "damage_type": "bludgeoning",
        "light": false,
        "finesse": false,
        "special": "Two-handed",
        "category": "simple melee",
        "weight": 10,
        "cost": "2 sp"
    },
    {
        "id": "handaxe",
        "name": "Handaxe",
        "damage_dice": "1d6",
        "damage_type": "slashing",
        "light": true,
        "finesse": false,
        "special": "Thrown (range 20/60)",
        "category": "simple melee",
        "weight": 2,
        "cost": "5 gp"
    },
    {
        "id": "javelin",
        "name": "Javelin",
        "damage_dice": "1d6",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Thrown (range 30/120)",
        "category": "simple melee",
        "weight": 2,
        "cost": "5 sp"
    },
    {
        "id": "light_hammer",
        "name": "Light Hammer",
        "damage_dice": "1d4",
        "damage_type": "bludgeoning",
        "light": true,
        "finesse": false,
        "special": "Thrown (range 20/60)",
        "category": "simple melee",
        "weight": 2,
        "cost": "2 gp"
    },
    {
        "id": "mace",
        "name": "Mace",
        "damage_dice": "1d6",
        "damage_type": "bludgeoning",
        "light": false,
        "finesse": false,
        "special": null,
        "category": "simple melee",
        "weight": 4,
        "cost": "5 gp"
    },
    {
        "id": "quarterstaff",
        "name": "Quarterstaff",
        "damage_dice": "1d6",
        "damage_type": "bludgeoning",
        "light": false,
        "finesse": false,
        "special": "Versatile (1d8)",
        "category": "simple melee",
        "weight": 4,
        "cost": "2 sp"
    },
    {
        "id": "sickle",
        "name": "Sickle",
        "damage_dice": "1d4",
        "damage_type": "slashing",
        "light": true,
        "finesse": false,
        "special": null,
        "category": "simple melee",
        "weight": 2,
        "cost": "1 gp"
    },
    {
        "id": "spear",
        "name": "Spear",
        "damage_dice": "1d6",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Thrown (range 20/60), versatile (1d8)",
        "category": "simple melee",
        "weight": 3,
        "cost": "1 gp"
    },
    {
        "id": "light_crossbow",
        "name": "Light Crossbow",
        "damage_dice": "1d8",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 80/320), loading, two-handed",
        "category": "simple ranged",
        "weight": 5,
        "cost": "25 gp"
    },
    {
        "id": "dart",
        "name": "Dart",
        "damage_dice": "1d4",
        "damage_type": "piercing",
        "light": false,
        "finesse": true,
        "special": "Thrown (range 20/60)",
        "category": "simple ranged",
        "weight": 0.25,
        "cost": "5 cp"
    },
    {
        "id": "shortbow",
        "name": "Shortbow",
        "damage_dice": "1d6",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 80/320), two-handed",
        "category": "simple ranged",
        "weight": 2,
        "cost": "25 gp"
    },
    {
        "id": "sling",
        "name": "Sling",
        "damage_dice": "1d4",
        "damage_type": "bludgeoning",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 30/120)",
        "category": "simple ranged",
        "weight": 0,
        "cost": "1 sp"
    },
    {
        "id": "battleaxe",
        "name": "Battleaxe",
        "damage_dice": "1d8",
        "damage_type": "slashing",
        "light": false,
        "finesse": false,
        "special": "Versatile (1d10)",
        "category": "martial melee",
        "weight": 4,
        "cost": "10 gp"
    },
    {
        "id": "flail",
        "name": "Flail",
        "damage_dice": "1d8",
        "damage_type": "bludgeoning",
        "light": false,
        "finesse": false,
        "special": null,
        "category": "martial melee",
        "weight": 2,
        "cost": "10 gp"
    },
    {
        "id": "glaive",
        "name": "Glaive",
        "damage_dice": "1d10",
        "damage_type": "slashing",
        "light": false,
        "finesse": false,
        "special": "Heavy, reach, two-handed",
        "category": "martial melee",
        "weight": 6,
        "cost": "20 gp"
    },
    {
        "id": "greataxe",
        "name": "Greataxe",
        "damage_dice": "1d12",
        "damage_type": "slashing",
        "light": false,
        "finesse": false,
        "special": "Heavy, two-handed",
        "category": "martial melee",
        "weight": 7,
        "cost": "30 gp"
    },
    {
        "id": "greatsword",
        "name": "Greatsword",
        "damage_dice": "2d6",
        "damage_type": "slashing",
        "light": false,
        "finesse": false,
        "special": "Heavy, two-handed",
        "category": "martial melee",
        "weight": 6,
        "cost": "50 gp"
    },
    {
        "id": "halberd",
        "name": "Halberd",
        "damage_dice": "1d10",
        "damage_type": "slashing",
        "light": false,
        "finesse": false,
        "special": "Heavy, reach, two-handed",
        "category": "martial melee",
        "weight": 6,
        "cost": "20 gp"
    },
    {
        "id": "lance",
        "name": "Lance",
        "damage_dice": "1d12",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Reach, special (disadvantage when attacking within 5 feet)",
        "category": "martial melee",
        "weight": 6,
        "cost": "10 gp"
    },
    {
        "id": "longsword",
        "name": "Longsword",
        "damage_dice": "1d8",
        "damage_type": "slashing",
        "light": false,
        "finesse": false,
        "special": "Versatile (1d10)",
        "category": "martial melee",
        "weight": 3,
        "cost": "15 gp"
    },
    {
        "id": "maul",
        "name": "Maul",
        "damage_dice": "2d6",
        "damage_type": "bludgeoning",
        "light": false,
        "finesse": false,
        "special": "Heavy, two-handed",
        "category": "martial melee",
        "weight": 10,
        "cost": "10 gp"
    },
    {
        "id": "morningstar",
        "name": "Morningstar",
        "damage_dice": "1d8",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": null,
        "category": "martial melee",
        "weight": 4,
        "cost": "15 gp"
    },
    {
        "id": "pike",
        "name": "Pike",
        "damage_dice": "1d10",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Heavy, reach, two-handed",
        "category": "martial melee",
        "weight": 18,
        "cost": "5 gp"
    },
    {
        "id": "rapier",
        "name": "Rapier",
        "damage_dice": "1d8",
        "damage_type": "piercing",
        "light": false,
        "finesse": true,
        "special": null,
        "category": "martial melee",
        "weight": 2,
        "cost": "25 gp"
    },
    {
        "id": "scimitar",
        "name": "Scimitar",
        "damage_dice": "1d6",
        "damage_type": "slashing",
        "light": true,
        "finesse": true,
        "special": null,
        "category": "martial melee",
        "weight": 3,
        "cost": "25 gp"
    },
    {
        "id": "shortsword",
        "name": "Shortsword",
        "damage_dice": "1d6",
        "damage_type": "piercing",
        "light": true,
        "finesse": true,
        "special": null,
        "category": "martial melee",
        "weight": 2,
        "cost": "10 gp"
    },
    {
        "id": "trident",
        "name": "Trident",
        "damage_dice": "1d6",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Thrown (range 20/60), versatile (1d8)",
        "category": "martial melee",
        "weight": 4,
        "cost": "5 gp"
    },
    {
        "id": "war_pick",
        "name": "War Pick",
        "damage_dice": "1d8",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": null,
        "category": "martial melee",
        "weight": 2,
        "cost": "5 gp"
    },
    {
        "id": "warhammer",
        "name": "Warhammer",
        "damage_dice": "1d8",
        "damage_type": "bludgeoning",
        "light": false,
        "finesse": false,
        "special": "Versatile (1d10)",
        "category": "martial melee",
        "weight": 2,
        "cost": "15 gp"
    },
    {
        "id": "whip",
        "name": "Whip",
        "damage_dice": "1d4",
        "damage_type": "slashing",
        "light": false,
        "finesse": true,
        "special": "Reach",
        "category": "martial melee",
        "weight": 3,
        "cost": "2 gp"
    },
    {
        "id": "hand_crossbow",
        "name": "Hand Crossbow",
        "damage_dice": "1d6",
        "damage_type": "piercing",
        "light": true,
        "finesse": false,
        "special": "Ammunition (range 30/120), light, loading",
        "category": "martial ranged",
        "weight": 3,
        "cost": "75 gp"
    },
    {
        "id": "heavy_crossbow",
        "name": "Heavy Crossbow",
        "damage_dice": "1d10",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 100/400), heavy, loading, two-handed",
        "category": "martial ranged",
        "weight": 18,
        "cost": "50 gp"
    },
    {
        "id": "longbow",
        "name": "Longbow",
        "damage_dice": "1d8",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 150/600), heavy, two-handed",
        "category": "martial ranged",
        "weight": 2,
        "cost": "50 gp"
    },
    {
        "id": "net",
        "name": "Net",
        "damage_dice": "0",
        "damage_type": "none",
        "light": false,
        "finesse": false,
        "special": "Special (restrain, one target), thrown (range 5/15)",
        "category": "martial ranged",
        "weight": 3,
        "cost": "1 gp"
    },
    {
        "id": "pistol",
        "name": "Pistol",
        "damage_dice": "1d10",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 30/90), loading, firearm",
        "category": "renaissance ranged",
        "weight": 3,
        "cost": "250 gp"
    },
    {
        "id": "musket",
        "name": "Musket",
        "damage_dice": "1d12",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 40/120), loading, two-handed, firearm",
        "category": "renaissance ranged",
        "weight": 10,
        "cost": "500 gp"
    },
    {
        "id": "blunderbuss",
        "name": "Blunderbuss",
        "damage_dice": "2d8",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 15/30), loading, two-handed, firearm, scatter",
        "category": "renaissance ranged",
        "weight": 10,
        "cost": "300 gp"
    },
    {
        "id": "pepperbox",
        "name": "Pepperbox",
        "damage_dice": "1d8",
        "damage_type": "piercing",
        "light": true,
        "finesse": false,
        "special": "Ammunition (range 30/90), firearm, reload (6)",
        "category": "renaissance ranged",
        "weight": 5,
        "cost": "450 gp"
    },
    {
        "id": "arquebus",
        "name": "Arquebus",
        "damage_dice": "1d12",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 50/150), loading, two-handed, firearm",
        "category": "renaissance ranged",
        "weight": 9,
        "cost": "450 gp"
    },
    {
        "id": "hand_mortar",
        "name": "Hand Mortar",
        "damage_dice": "2d8",
        "damage_type": "bludgeoning",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 30/90), explosive, reload (1), firearm",
        "category": "renaissance ranged",
        "weight": 10,
        "cost": "600 gp"
    },
    {
        "id": "revolver",
        "name": "Revolver",
        "damage_dice": "1d10",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 40/120), firearm, reload (6)",
        "category": "modern ranged",
        "weight": 3,
        "cost": "750 gp"
    },
    {
        "id": "shotgun",
        "name": "Shotgun",
        "damage_dice": "2d10",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 20/60), reload (2), two-handed, firearm, scatter",
        "category": "modern ranged",
        "weight": 7,
        "cost": "650 gp"
    },
    {
        "id": "double_barrel_shotgun",
        "name": "Double-Barrel Shotgun",
        "damage_dice": "2d10",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 20/60), reload (2), two-handed, firearm, scatter",
        "category": "modern ranged",
        "weight": 8,
        "cost": "850 gp"
    },
    {
        "id": "hunting_rifle",
        "name": "Hunting Rifle",
        "damage_dice": "2d10",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 80/240), reload (5), two-handed, firearm",
        "category": "modern ranged",
        "weight": 8,
        "cost": "700 gp"
    },
    {
        "id": "automatic_rifle",
        "name": "Automatic Rifle",
        "damage_dice": "2d8",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 80/240), reload (30), two-handed, firearm, burst fire",
        "category": "modern ranged",
        "weight": 8,
        "cost": "1000 gp"
    },
    {
        "id": "sniper_rifle",
        "name": "Sniper Rifle",
        "damage_dice": "2d12",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 150/600), reload (4), two-handed, firearm",
        "category": "modern ranged",
        "weight": 10,
        "cost": "1300 gp"
    },
    {
        "id": "grenade_launcher",
        "name": "Grenade Launcher",
        "damage_dice": "3d10",
        "damage_type": "bludgeoning",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 60/180), reload (1), two-handed, firearm, explosive",
        "category": "modern ranged",
        "weight": 12,
        "cost": "1500 gp"
    },
    {
        "id": "flamethrower",
        "name": "Flamethrower",
        "damage_dice": "3d6",
        "damage_type": "fire",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 15/30), energy, reload (5), two-handed, scatter, explosive",
        "category": "modern ranged",
        "weight": 15,
        "cost": "1200 gp"
    },
    {
        "id": "hand_cannon",
        "name": "Hand Cannon",
        "damage_dice": "2d12",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 20/60), reload (1), heavy, firearm",
        "category": "renaissance ranged",
        "weight": 8,
        "cost": "700 gp"
    },
    {
        "id": "laser_pistol",
        "name": "Laser Pistol",
        "damage_dice": "3d6",
        "damage_type": "fire",
        "light": true,
        "finesse": false,
        "special": "Ammunition (range 40/120), energy, reload (20)",
        "category": "futuristic ranged",
        "weight": 2,
        "cost": "2000 gp"
    },
    {
        "id": "laser_rifle",
        "name": "Laser Rifle",
        "damage_dice": "3d8",
        "damage_type": "fire",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 100/300), energy, reload (10), two-handed",
        "category": "futuristic ranged",
        "weight": 7,
        "cost": "2500 gp"
    },
    {
        "id": "plasma_pistol",
        "name": "Plasma Pistol",
        "damage_dice": "2d10",
        "damage_type": "fire",
        "light": true,
        "finesse": false,
        "special": "Ammunition (range 30/90), energy, reload (8)",
        "category": "futuristic ranged",
        "weight": 3,
        "cost": "2200 gp"
    },
    {
        "id": "plasma_rifle",
        "name": "Plasma Rifle",
        "damage_dice": "3d10",
        "damage_type": "fire",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 80/240), energy, reload (6), two-handed",
        "category": "futuristic ranged",
        "weight": 8,
        "cost": "3000 gp"
    },
    {
        "id": "plasma_launcher",
        "name": "Plasma Launcher",
        "damage_dice": "4d10",
        "damage_type": "fire",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 30/90), energy, reload (2), heavy, two-handed, explosive",
        "category": "futuristic ranged",
        "weight": 15,
        "cost": "3500 gp"
    },
    {
        "id": "gauss_rifle",
        "name": "Gauss Rifle",
        "damage_dice": "2d12",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 120/360), reload (5), heavy, two-handed, firearm",
        "category": "futuristic ranged",
        "weight": 12,
        "cost": "3200 gp"
    },
    {
        "id": "fusion_cannon",
        "name": "Fusion Cannon",
        "damage_dice": "6d6",
        "damage_type": "fire",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 60/180), energy, reload (1), heavy, two-handed, explosive",
        "category": "futuristic ranged",
        "weight": 20,
        "cost": "4000 gp"
    },
    {
        "id": "arc_blaster",
        "name": "Arc Blaster",
        "damage_dice": "4d6",
        "damage_type": "lightning",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 50/150), energy, reload (6), two-handed, chain (targets up to 3 creatures within 10 feet of each other)",
        "category": "futuristic ranged",
        "weight": 10,
        "cost": "3300 gp"
    },
    {
        "id": "sonic_disruptor",
        "name": "Sonic Disruptor",
        "damage_dice": "3d8",
        "damage_type": "thunder",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 40/120), energy, reload (4), two-handed, concussive (target must succeed on a Constitution save or be stunned until end of its next turn)",
        "category": "futuristic ranged",
        "weight": 8,
        "cost": "3100 gp"
    },
    {
        "id": "antimatter_rifle",
        "name": "Antimatter Rifle",
        "damage_dice": "6d12",
        "damage_type": "necrotic",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 120/360), energy, reload (2), heavy, two-handed",
        "category": "futuristic ranged",
        "weight": 15,
        "cost": "6000 gp"
    },
    {
        "id": "arcane_pistol",
        "name": "Arcane Pistol",
        "damage_dice": "1d10",
        "damage_type": "force",
        "light": true,
        "finesse": false,
        "special": "Ammunition (range 60/180), magic, firearm",
        "category": "magical ranged",
        "weight": 3,
        "cost": "800 gp"
    },
    {
        "id": "arcane_rifle",
        "name": "Arcane Rifle",
        "damage_dice": "2d8",
        "damage_type": "force",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 100/300), magic, reload (5), two-handed, firearm",
        "category": "magical ranged",
        "weight": 8,
        "cost": "1500 gp"
    },
    {
        "id": "arcane_launcher",
        "name": "Arcane Launcher",
        "damage_dice": "4d8",
        "damage_type": "force",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 50/150), reload (1), heavy, two-handed, magic, explosive",
        "category": "magical ranged",
        "weight": 15,
        "cost": "2500 gp"
    },
    {
        "id": "arcane_repeater",
        "name": "Arcane Repeater",
        "damage_dice": "1d8",
        "damage_type": "force",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 60/180), magic, reload (4), firearm",
        "category": "magical ranged",
        "weight": 5,
        "cost": "1000 gp"
    },
    {
        "id": "elemental_wand",
        "name": "Elemental Wand",
        "damage_dice": "3d6",
        "damage_type": "variable",
        "light": true,
        "finesse": true,
        "special": "Ammunition (range 60/180), magic, reload (7), versatile (user can choose between fire, cold, lightning, or acid damage)",
        "category": "magical ranged",
        "weight": 1,
        "cost": "1200 gp"
    },
    {
        "id": "eldritch_staff",
        "name": "Eldritch Staff",
        "damage_dice": "1d8",
        "damage_type": "bludgeoning",
        "light": false,
        "finesse": false,
        "special": "Versatile (1d10), magic (can also cast 3 cantrips)",
        "category": "magical melee",
        "weight": 4,
        "cost": "900 gp"
    },
    {
        "id": "crystal_focus_staff",
        "name": "Crystal Focus Staff",
        "damage_dice": "2d6",
        "damage_type": "force",
        "light": false,
        "finesse": false,
        "special": "Magic, versatile (2d8)",
        "category": "magical melee",
        "weight": 6,
        "cost": "1800 gp"
    },
    {
        "id": "force_cannon",
        "name": "Force Cannon",
        "damage_dice": "6d6",
        "damage_type": "force",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 60/180), reload (2), heavy, two-handed, magic, explosive",
        "category": "magical ranged",
        "weight": 12,
        "cost": "3500 gp"
    },
    {
        "id": "energy_whip",
        "name": "Energy Whip",
        "damage_dice": "2d6",
        "damage_type": "force",
        "light": true,
        "finesse": true,
        "special": "Reach, energy",
        "category": "magical melee",
        "weight": 3,
        "cost": "800 gp"
    },
    {
        "id": "plasma_blade",
        "name": "Plasma Blade",
        "damage_dice": "2d8",
        "damage_type": "fire",
        "light": true,
        "finesse": true,
        "special": "Energy",
        "category": "futuristic melee",
        "weight": 3,
        "cost": "1500 gp"
    },
    {
        "id": "vibro_sword",
        "name": "Vibro Sword",
        "damage_dice": "3d6",
        "damage_type": "slashing",
        "light": false,
        "finesse": true,
        "special": "Energy, versatile (3d8)",
        "category": "futuristic melee",
        "weight": 4,
        "cost": "1200 gp"
    },
    {
        "id": "gravity_hammer",
        "name": "Gravity Hammer",
        "damage_dice": "3d10",
        "damage_type": "bludgeoning",
        "light": false,
        "finesse": false,
        "special": "Heavy, two-handed, energy, concussive (targets within 10 feet must make a Strength save or be knocked prone)",
        "category": "futuristic melee",
        "weight": 15,
        "cost": "2500 gp"
    },
    {
        "id": "photon_glaive",
        "name": "Photon Glaive",
        "damage_dice": "2d10",
        "damage_type": "radiant",
        "light": false,
        "finesse": false,
        "special": "Reach, heavy, two-handed, energy",
        "category": "futuristic melee",
        "weight": 8,
        "cost": "1800 gp"
    },
    {
        "id": "wrist_blades",
        "name": "Wrist Blades",
        "damage_dice": "1d8",
        "damage_type": "slashing",
        "light": true,
        "finesse": true,
        "special": "Light, can be concealed, counts as unarmed strike",
        "category": "martial melee",
        "weight": 1,
        "cost": "400 gp"
    },
    {
        "id": "thermal_blade",
        "name": "Thermal Blade",
        "damage_dice": "1d8",
        "damage_type": "slashing",
        "light": true,
        "finesse": true,
        "special": "Light, deals additional 1d6 fire damage",
        "category": "futuristic melee",
        "weight": 2,
        "cost": "900 gp"
    },
    {
        "id": "quantum_dagger",
        "name": "Quantum Dagger",
        "damage_dice": "1d4",
        "damage_type": "piercing",
        "light": true,
        "finesse": true,
        "special": "Thrown (range 20/60), returns to wielder's hand after being thrown, energy, deals additional 1d6 force damage",
        "category": "futuristic melee",
        "weight": 1,
        "cost": "800 gp"
    },
    {
        "id": "chakram",
        "name": "Chakram",
        "damage_dice": "1d6",
        "damage_type": "slashing",
        "light": true,
        "finesse": true,
        "special": "Thrown (range 30/120), returns to wielder's hand on a successful hit",
        "category": "martial melee",
        "weight": 1,
        "cost": "50 gp"
    },
    {
        "id": "boomerang",
        "name": "Boomerang",
        "damage_dice": "1d4",
        "damage_type": "bludgeoning",
        "light": true,
        "finesse": true,
        "special": "Thrown (range 30/120), returns to wielder's hand on a miss",
        "category": "simple ranged",
        "weight": 1,
        "cost": "5 gp"
    },
    {
        "id": "kunai",
        "name": "Kunai",
        "damage_dice": "1d4",
        "damage_type": "piercing",
        "light": true,
        "finesse": true,
        "special": "Thrown (range 20/60), can be used as a climbing tool",
        "category": "simple melee",
        "weight": 0.5,
        "cost": "3 gp"
    },
    {
        "id": "repeating_crossbow",
        "name": "Repeating Crossbow",
        "damage_dice": "1d8",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 80/320), reload (5), two-handed",
        "category": "martial ranged",
        "weight": 7,
        "cost": "250 gp"
    },
    {
        "id": "exploding_bolts_crossbow",
        "name": "Exploding Bolts Crossbow",
        "damage_dice": "2d8",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 60/240), reload (3), two-handed, explosive",
        "category": "martial ranged",
        "weight": 9,
        "cost": "350 gp"
    },
    {
        "id": "hand_flintlock",
        "name": "Hand Flintlock",
        "damage_dice": "1d8",
        "damage_type": "piercing",
        "light": true,
        "finesse": false,
        "special": "Ammunition (range 40/120), loading, firearm",
        "category": "renaissance ranged",
        "weight": 2,
        "cost": "200 gp"
    },
    {
        "id": "flintlock_rifle",
        "name": "Flintlock Rifle",
        "damage_dice": "1d12",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 80/240), loading, two-handed, firearm",
        "category": "renaissance ranged",
        "weight": 10,
        "cost": "400 gp"
    },
    {
        "id": "bolt_action_rifle",
        "name": "Bolt-Action Rifle",
        "damage_dice": "2d10",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 120/360), reload (5), two-handed, firearm",
        "category": "modern ranged",
        "weight": 8,
        "cost": "800 gp"
    },
    {
        "id": "harpoon_gun",
        "name": "Harpoon Gun",
        "damage_dice": "1d10",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 30/120), reload (1), two-handed, tether",
        "category": "martial ranged",
        "weight": 8,
        "cost": "150 gp"
    },
    {
        "id": "heavy_repeating_crossbow",
        "name": "Heavy Repeating Crossbow",
        "damage_dice": "1d10",
        "damage_type": "piercing",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 100/400), reload (3), heavy, two-handed",
        "category": "martial ranged",
        "weight": 12,
        "cost": "350 gp"
    },
    {
        "id": "cannon",
        "name": "Cannon",
        "damage_dice": "8d10",
        "damage_type": "bludgeoning",
        "light": false,
        "finesse": false,
        "special": "Ammunition (range 120/480), reload (1), heavy, two-handed, explosive, firearm",
        "category": "renaissance ranged",
        "weight": 750,
        "cost": "1500 gp"
    },
    {
        "id": "cestus",
        "name": "Cestus",
        "damage_dice": "1d6",
        "damage_type": "bludgeoning",
        "light": true,
        "finesse": false,
        "special": "Light, counts as unarmed strike",
        "category": "martial melee",
        "weight": 1,
        "cost": "5 gp"
    },
    {
        "id": "scythe",
        "name": "Scythe",
        "damage_dice": "1d10",
        "damage_type": "slashing",
        "light": false,
        "finesse": false,
        "special": "Two-handed, reach",
        "category": "martial melee",
        "weight": 10,
        "cost": "20 gp"
    },
    {
        "id": "katana",
        "name": "Katana",
        "damage_dice": "1d8",
        "damage_type": "slashing",
        "light": false,
        "finesse": true,
        "special": "Versatile (1d10)",
        "category": "martial melee",
        "weight": 3,
        "cost": "50 gp"
    },
    {
        "id": "sai",
        "name": "Sai",
        "damage_dice": "1d4",
        "damage_type": "piercing",
        "light": true,
        "finesse": true,
        "special": "Light, special (can attempt to disarm as bonus action)",
        "category": "martial melee",
        "weight": 1,
        "cost": "10 gp"
    }
];

// Feats data
let featsData = [];
let selectedFeats = [];

// Load feats data directly to avoid CORS issues when running locally
document.addEventListener('DOMContentLoaded', function() {
    // Populate feats data from the hardcoded array
    featsData = [
    {
        "id": "ability_score_improvement",
        "name": "Ability Score Improvement",
        "description": "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. You can't use this feat to increase an ability score above 20.",
        "asi": true
    },
    {
        "id": "actor",
        "name": "Actor",
        "description": "Skilled at mimicry and dramatics, you gain the following benefits: Increase your Charisma score by 1, to a maximum of 20. You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person.",
        "asi": true
    },
    {
        "id": "athlete",
        "name": "Athlete",
        "description": "You gain the following benefits: Increase your Strength or Dexterity score by 1, to a maximum of 20. When you are prone, standing up uses only 5 feet of your movement. Climbing doesn't cost you extra movement. You can make a running long jump or high jump after only 5 feet of movement.",
        "asi": true
    },
    {
        "id": "charger",
        "name": "Charger",
        "description": "When you use your action to Dash, you can use a bonus action to make one melee weapon attack. If you move at least 10 feet in a straight line immediately before the attack, you either gain a +5 bonus to the attack's damage roll or push the target up to 10 feet away.",
        "asi": false
    },
    {
        "id": "crossbow_expert",
        "name": "Crossbow Expert",
        "description": "You gain the following benefits: You ignore the loading quality of crossbows with which you are proficient. Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls. When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a loaded hand crossbow you are holding.",
        "asi": false
    },
    {
        "id": "defensive_duelist",
        "name": "Defensive Duelist",
        "description": "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you.",
        "asi": false
    },
    {
        "id": "diaper_mastery",
        "name": "Diaper Mastery",
        "description": "Prerequisite: Incontinent flaw. Your Constitution score rises by 2 points. After consistent effort, training, or pure skill, you have conquered—most of—the hurdles of being in diapers 24/7 (or however time does or doesn't scale where you're at). Needless to say, you're in diapers for good—and they do quite a lot of good for you! Whenever you roll a 1 on a Potty Check or otherwise fill a diaper without leaking, you receive a +1 Relief Bonus to all rolls for 1 minute (10 rounds). Because of your time spent in and around diapers, you have advantage on Insight and Investigation checks related to diapers. You also have the newfound ability to track a diapered creature using the Survival skill—even if you are not trained in this skill. You no longer suffer many of the physical limitations of being diapered in combat. Only a Leaking Diaper will affect your combat ability. When diapered, you never suffer the Full Diaper or Messy Diaper status. You are adorably trustworthy when you stink. You have advantage on Persuasion checks when your diaper is messy—as long as this check is not intended to prove you are more mature than you look—or smell.",
        "asi": true
    },
    {
        "id": "dual_wielder",
        "name": "Dual Wielder",
        "description": "You master fighting with two weapons, gaining the following benefits: You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand. You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren't light. You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.",
        "asi": false
    },
    {
        "id": "dungeon_delver",
        "name": "Dungeon Delver",
        "description": "Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits: You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors. You have advantage on saving throws made to avoid or resist traps. You have resistance to the damage dealt by traps. You can search for traps while traveling at a normal pace.",
        "asi": false
    },
    {
        "id": "durable",
        "name": "Durable",
        "description": "Hardy and resilient, you gain the following benefits: Increase your Constitution score by 1, to a maximum of 20. When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2).",
        "asi": true
    },
    {
        "id": "elemental_adept",
        "name": "Elemental Adept",
        "description": "Prerequisite: The ability to cast at least one spell. When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder. Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2. You can select this feat multiple times. Each time you do so, you must choose a different damage type.",
        "asi": false
    },
    {
        "id": "grappler",
        "name": "Grappler",
        "description": "Prerequisite: Strength 13 or higher. You've developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits: You have advantage on attack rolls against a creature you are grappling. You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends.",
        "asi": false
    },
    {
        "id": "great_weapon_master",
        "name": "Great Weapon Master",
        "description": "You've learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits: On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action. Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage.",
        "asi": false
    },
    {
        "id": "healer",
        "name": "Healer",
        "description": "You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight. You gain the following benefits: When you use a healer’s kit to stabilize a dying creature, that creature also regains 1 hit point. As an action, you can spend one use of a healer’s kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature’s maximum number of Hit Dice. The creature can’t regain hit points from this feat again until it finishes a short or long rest.",
        "asi": false
    },
    {
        "id": "heavily_armored",
        "name": "Heavily Armored",
        "description": "Prerequisite: Proficiency with medium armor. You have trained to master the use of heavy armor, gaining the following benefits: Increase your Strength score by 1, to a maximum of 20. You gain proficiency with heavy armor.",
        "asi": true
    },
    {
        "id": "heavy_armor_master",
        "name": "Heavy Armor Master",
        "description": "Prerequisite: Proficiency with heavy armor. You can use your armor to deflect strikes that would kill others. You gain the following benefits: Increase your Strength score by 1, to a maximum of 20. While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from nonmagical weapons is reduced by 3.",
        "asi": true
    },
    {
        "id": "inspiring_leader",
        "name": "Inspiring Leader",
        "description": "Prerequisite: Charisma 13 or higher. You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature gains temporary hit points equal to your level + your Charisma modifier. A creature can’t gain temporary hit points from this feat again until it has finished a short or long rest.",
        "asi": false
    },
    {
        "id": "keen_mind",
        "name": "Keen Mind",
        "description": "You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits: Increase your Intelligence score by 1, to a maximum of 20. You always know which way is north. You always know the number of hours left before the next sunrise or sunset. You can accurately recall anything you have seen or heard within the past month.",
        "asi": true
    },
    {
        "id": "lightly_armored",
        "name": "Lightly Armored",
        "description": "You have trained to master the use of light armor, gaining the following benefits: Increase your Strength or Dexterity score by 1, to a maximum of 20. You gain proficiency with light armor.",
        "asi": true
    },
    {
        "id": "linguist",
        "name": "Linguist",
        "description": "You have studied languages and codes, gaining the following benefits: Increase your Intelligence score by 1, to a maximum of 20. You learn three languages of your choice. You can ably create written ciphers. Others can’t decipher a code you create unless you teach them, they succeed on an Intelligence (Investigation) check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it.",
        "asi": true
    },
    {
        "id": "mobile",
        "name": "Mobile",
        "description": "You are exceptionally speedy and agile. You gain the following benefits: Your speed increases by 10 feet. When you use the Dash action, difficult terrain doesn’t cost you extra movement on that turn. When you make a melee attack against a creature, you don’t provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.",
        "asi": false
    },
    {
        "id": "moderately_armored",
        "name": "Moderately Armored",
        "description": "Prerequisite: Proficiency with light armor. You have trained to master the use of medium armor and shields, gaining the following benefits: Increase your Strength or Dexterity score by 1, to a maximum of 20. You gain proficiency with medium armor and shields.",
        "asi": true
    },
    {
        "id": "mounted_combatant",
        "name": "Mounted Combatant",
        "description": "You are a dangerous foe to face while mounted. While you are mounted and aren’t incapacitated, you gain the following benefits: You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount. You can force an attack targeted at your mount to target you instead. If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.",
        "asi": false
    },
    {
        "id": "observant",
        "name": "Observant",
        "description": "Quick to notice details of your environment, you gain the following benefits: Increase your Intelligence or Wisdom score by 1, to a maximum of 20. If you can see a creature’s mouth while it is speaking a language you understand, you can interpret what it’s saying by reading its lips. You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores.",
        "asi": true
    },
    {
        "id": "polearm_master",
        "name": "Polearm Master",
        "description": "You can keep your enemies at bay with reach weapons. You gain the following benefits: When you take the Attack action and attack with only a glaive, halberd, quarterstaff, or spear, you can use a bonus action to make a melee weapon attack with the opposite end of the weapon. This attack uses the same ability modifier as the primary attack. The weapon’s damage die for this attack is a d4. While you are wielding a glaive, halberd, pike, quarterstaff, or spear, other creatures provoke an opportunity attack from you when they enter your reach.",
        "asi": false
    },
    {
        "id": "resilient",
        "name": "Resilient",
        "description": "Choose one ability score. Increase the chosen ability score by 1, to a maximum of 20. You gain proficiency in saving throws using the chosen ability.",
        "asi": true
    },
    {
        "id": "ritual_caster",
        "name": "Ritual Caster",
        "description": "Prerequisite: Intelligence or Wisdom 13 or higher. You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book, which you must have in hand while casting one of them. When you choose this feat, you acquire a ritual book holding two 1st-level spells of your choice. Choose one spellcasting class: bard, cleric, druid, sorcerer, warlock, or wizard. You must choose your spells from that class’s spell list, and the spells you choose must have the ritual tag. The class you choose also determines your spellcasting ability for these spells: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard.",
        "asi": false
    },
    {
        "id": "savage_attacker",
        "name": "Savage Attacker",
        "description": "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon’s damage dice and use either total.",
        "asi": false
    },
    {
        "id": "sentinel",
        "name": "Sentinel",
        "description": "You have mastered techniques to take advantage of every drop in any enemy’s guard, gaining the following benefits: When you hit a creature with an opportunity attack, the creature’s speed becomes 0 for the rest of the turn. Creatures within 5 feet of you provoke opportunity attacks from you even if they take the Disengage action before leaving your reach. When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn’t have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.",
        "asi": false
    },
    {
        "id": "sharpshooter",
        "name": "Sharpshooter",
        "description": "You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits: Attacking at long range doesn’t impose disadvantage on your ranged weapon attack rolls. Your ranged weapon attacks ignore half cover and three-quarters cover. Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage.",
        "asi": false
    },
    {
        "id": "shield_master",
        "name": "Shield Master",
        "description": "You use shields not just for protection but also for offense. You gain the following benefits while you are wielding a shield: If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield. If you aren’t incapacitated, you can add your shield’s AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you. If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect.",
        "asi": false
    },
    {
        "id": "skilled",
        "name": "Skilled",
        "description": "You gain proficiency in any combination of three skills or tools of your choice.",
        "asi": false
    },
    {
        "id": "skulker",
        "name": "Skulker",
        "description": "Prerequisite: Dexterity 13 or higher. You are expert at slinking through shadows. You gain the following benefits: You can try to hide when you are lightly obscured from the creature from which you are hiding. When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn’t reveal your position. Dim light doesn’t impose disadvantage on your Wisdom (Perception) checks relying on sight.",
        "asi": false
    },
    {
        "id": "spell_sniper",
        "name": "Spell Sniper",
        "description": "Prerequisite: The ability to cast at least one spell. You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits: When you cast a spell that requires you to make an attack roll, the spell’s range is doubled. Your ranged spell attacks ignore half cover and three-quarters cover. You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard.",
        "asi": false
    },
    {
        "id": "tavern_brawler",
        "name": "Tavern Brawler",
        "description": "Accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits: Increase your Strength or Constitution score by 1, to a maximum of 20. You are proficient with improvised weapons. Your unarmed strike uses a d4 for damage. When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target.",
        "asi": true
    },
    {
        "id": "tough",
        "name": "Tough",
        "description": "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.",
        "asi": false
    },
    {
        "id": "war_caster",
        "name": "War Caster",
        "description": "Prerequisite: The ability to cast at least one spell. You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits: You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage. You can perform the somatic components of spells even when you have weapons or a shield in one or both hands. When a hostile creature’s movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.",
        "asi": false
    },
    {
        "id": "weapon_master",
        "name": "Weapon Master",
        "description": "You have practiced extensively with a variety of weapons, gaining the following benefits: Increase your Strength or Dexterity score by 1, to a maximum of 20. You gain proficiency with four weapons of your choice.",
        "asi": true
    }
];
      // Initialize feats dropdown 
    populateFeatsDropdown();
    
    // Initialize weapons dropdowns
    populateWeaponDropdowns();
      // Add event listeners for large size weapon checkboxes
    document.getElementById('primary-large-size').addEventListener('change', function() {
        updateWeaponInfo('primary');
    });
    
    document.getElementById('secondary-large-size').addEventListener('change', function() {
        updateWeaponInfo('secondary');
    });
    
    // Load races data and populate race dropdown
    loadRacesData();
    
    // Initialize other feat-related elements
    initFeatsUI();
});

// Populate feats dropdown
function populateFeatsDropdown(searchTerm = '') {
    const featsSelect = document.getElementById('feats-select');
    
    // Clear existing options except the first one
    while (featsSelect.options.length > 1) {
        featsSelect.remove(1);
    }
    
    // Filter feats based on search term if provided
    const filteredFeats = searchTerm 
        ? featsData.filter(feat => 
            feat.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            feat.description.toLowerCase().includes(searchTerm.toLowerCase()))
        : featsData;
      // Add feats to dropdown
    filteredFeats.forEach(feat => {
        const option = document.createElement('option');
        option.value = feat.id;
        option.textContent = feat.name + (feat.asi ? " (ASI)" : "");
        featsSelect.appendChild(option);
    });
}

// Functions
function updateArmorInfo(armorType) {
    const selectElement = document.getElementById(`${armorType}-select`);
    const selectedValue = selectElement.value;
    
    const nameElement = document.getElementById('selected-item-name');
    const descriptionElement = document.getElementById('selected-item-description');
    const imagePlaceholder = document.querySelector('.item-image-placeholder');
    
    if (selectedValue === "") {
        nameElement.textContent = "Select an armor piece";
        descriptionElement.textContent = "Information about the selected item will appear here.";
        imagePlaceholder.innerHTML = `<div class="placeholder-text">Image Placeholder</div>`;
        return;
    }
    
    const selectedArmor = armorData[selectedValue];
    nameElement.textContent = selectedArmor.name;
    
    // Update image if available
    if (selectedArmor.imageUrl) {
        imagePlaceholder.innerHTML = `<img src="${selectedArmor.imageUrl}" alt="${selectedArmor.name}" class="armor-image">`;
    } else {
        imagePlaceholder.innerHTML = `<div class="placeholder-text">Image Placeholder</div>`;
    }
    
    // Create a more detailed description with progression information
    let detailedDescription = `<p class="armor-description">${selectedArmor.description}</p>`;
    
    // Add chest armor specific details (Hit Die and AC)
    if (armorType === 'chest' && selectedArmor.hitdice && selectedArmor.armorclass) {
        const dexterityScore = document.getElementById('dexterity').value || 10;
        const constitutionScore = document.getElementById('constitution').value || 10;
        const dexModifier = getAbilityModifier(dexterityScore);
        const conModifier = getAbilityModifier(constitutionScore);
        
        const armorClass = calculateAC(selectedArmor.armorclass, dexterityScore);
        const maxHP = calculateMaxHP(selectedArmor.hitdice, constitutionScore);          detailedDescription += `<div class="armor-stats">
            <p><strong>Hit Die:</strong> ${selectedArmor.hitdice}</p>
            <p><strong>Base Armor Class:</strong> ${selectedArmor.armorclass}</p>
            <p><strong>Calculated Armor Class:</strong> ${armorClass}</p>
            <p><strong>Max HP at Level 5:</strong> ${maxHP} (with CON ${conModifier >= 0 ? '+' : ''}${conModifier})</p>
        </div>`;
    }
    
    detailedDescription += `<div class="armor-progression"><h4>Level Progression:</h4>`;
    
    selectedArmor.progression.forEach(prog => {
        detailedDescription += `<p>${prog}</p>`;
    });
      detailedDescription += `</div>`;
    
    // Add full description from armor_descriptions.js if available
    if (typeof armorFullDescriptions !== 'undefined' && armorFullDescriptions[selectedValue]) {
        const fullDesc = armorFullDescriptions[selectedValue];
        
        detailedDescription += `
        <div class="full-description-container">
            <h4>Complete Description</h4>
            <p class="full-armor-description">${fullDesc.fullDescription}</p>
            
            <h4>Detailed Level Features</h4>
            <div class="level-features-list">`;
        
        // Add level features based on the armor type
        const levelKeys = armorType === 'raiment' ? ['3', '6', '8', '12'] : ['1', '4', '7', '11', '14'];
        
        levelKeys.forEach(level => {
            if (fullDesc.levelFeatures[level] && fullDesc.levelFeatures[level].trim() !== "") {
                detailedDescription += `
                <div class="level-feature">
                    <h5>Level ${level}</h5>
                    <div class="level-feature-text">${fullDesc.levelFeatures[level]}</div>
                </div>`;
            }
        });
        
        // Check for any special entries like 3-upgrade or Higher-Level
        if (fullDesc.levelFeatures['3-upgrade'] && fullDesc.levelFeatures['3-upgrade'].trim() !== "") {
            detailedDescription += `
            <div class="level-feature">
                <h5>Level 3 Enhancement</h5>
                <div class="level-feature-text">${fullDesc.levelFeatures['3-upgrade']}</div>
            </div>`;
        }
        
        if (fullDesc.levelFeatures['Higher-Level'] && fullDesc.levelFeatures['Higher-Level'].trim() !== "") {
            detailedDescription += `
            <div class="level-feature">
                <h5>Optional Higher-Level Upgrade</h5>
                <div class="level-feature-text">${fullDesc.levelFeatures['Higher-Level']}</div>
            </div>`;
        }
        
        detailedDescription += `
            </div>
        </div>`;
    }
    
    descriptionElement.innerHTML = detailedDescription;
}

function finalizeLoadout() {
    const selectorContainer = document.querySelector('.selector-container');
    const loadoutResults = document.getElementById('loadout-results');
    
    // Hide selector, show results
    selectorContainer.style.display = 'none';
    loadoutResults.classList.remove('hidden');
    
    // Get ability scores
    const dexterityScore = document.getElementById('dexterity').value || 10;
    const constitutionScore = document.getElementById('constitution').value || 10;
    const strengthScore = document.getElementById('strength').value || 10; 
    
    // Calculate ability modifiers
    const strModifier = getAbilityModifier(strengthScore);
    const dexModifier = getAbilityModifier(dexterityScore);
    
    // Get selected chest armor for HP and AC calculations
    const selectedChestValue = document.getElementById('chest-select').value;
    let hitDice = "";
    let armorClassText = "";
      if (selectedChestValue) {
        const selectedChestArmor = armorData[selectedChestValue];
        hitDice = selectedChestArmor.hitdice;
        armorClassText = selectedChestArmor.armorclass;
        
        // Debug logging
        console.log("Selected Armor:", selectedChestValue);
        console.log("Hit Dice Value:", hitDice);
        console.log("Armor Class Text:", armorClassText);
          // Calculate and display HP and AC
        const maxHP = calculateMaxHP(hitDice, constitutionScore);
        const armorClass = calculateAC(armorClassText, dexterityScore);
        const dexModifier = getAbilityModifier(dexterityScore);
          document.getElementById('hp-display').textContent = maxHP;
        document.getElementById('ac-display').textContent = `${armorClass}`;
    } else {
        document.getElementById('hp-display').textContent = "-";
        document.getElementById('ac-display').textContent = "-";
    }
      // Populate character information
    populateCharacterInfo();
    
    // Populate weapons information
    populateWeaponsInfo();
    
    // Populate results for each armor piece
    const armorTypes = ['helmet', 'pauldrons', 'chest', 'arms', 'boots', 'raiment'];
    
    // Track level 5 effects
    let level5Effects = [];
    
    armorTypes.forEach(type => {
        const selectElement = document.getElementById(`${type}-select`);
        const selectedValue = selectElement.value;
        
        const resultContainer = document.getElementById(`${type}-result`);
        const nameSpan = resultContainer.querySelector('.loadout-item-name');
        const progressionDiv = resultContainer.querySelector('.loadout-item-progression');
        
        // Get the image container for this armor piece
        const imageContainer = document.getElementById(`${type}-image`);
        
        if (selectedValue === "") {
            nameSpan.textContent = "None Selected";
            progressionDiv.innerHTML = "<p>No progression available.</p>";
            
            // Reset the image placeholder
            imageContainer.innerHTML = `<div class="armor-image-placeholder">${type.charAt(0).toUpperCase() + type.slice(1)}</div>`;
        } else {            const selectedArmor = armorData[selectedValue];
            nameSpan.textContent = selectedArmor.name;
            
            // Set armor image if available
            if (selectedArmor.imageUrl) {
                imageContainer.innerHTML = `<img src="${selectedArmor.imageUrl}" alt="${selectedArmor.name}">`;
            } else {
                imageContainer.innerHTML = `<div class="armor-image-placeholder">${selectedArmor.name}</div>`;
            }
              // Populate progression with enhanced descriptions
            let progressionHTML = `<p class="armor-description">${getEnhancedDescription(selectedArmor, type)}</p>`;
              // Add full description if available
            if (typeof armorFullDescriptions !== 'undefined' && armorFullDescriptions[selectedValue]) {
                const fullDesc = armorFullDescriptions[selectedValue];
                progressionHTML += `
                <div class="full-description-container">
                    <h4>Complete Description</h4>
                    <p class="full-armor-description">${fullDesc.fullDescription}</p>
                    
                    <h4>Level Features</h4>
                    <div class="level-features-list">`;
                
                // Add level features based on the armor type
                const levelKeys = type === 'raiment' ? ['3', '6', '8', '12'] : ['1', '4', '7', '11', '14'];
                
                levelKeys.forEach(level => {
                    if (fullDesc.levelFeatures[level] && fullDesc.levelFeatures[level].trim() !== "") {
                        progressionHTML += `
                        <div class="level-feature">
                            <h5>Level ${level}</h5>
                            <div class="level-feature-text">${fullDesc.levelFeatures[level]}</div>
                        </div>`;
                    }
                });
                
                // Check for any special entries like 3-upgrade or Higher-Level
                if (fullDesc.levelFeatures['3-upgrade'] && fullDesc.levelFeatures['3-upgrade'].trim() !== "") {
                    progressionHTML += `
                    <div class="level-feature">
                        <h5>Level 3 Enhancement</h5>
                        <div class="level-feature-text">${fullDesc.levelFeatures['3-upgrade']}</div>
                    </div>`;
                }
                
                if (fullDesc.levelFeatures['Higher-Level'] && fullDesc.levelFeatures['Higher-Level'].trim() !== "") {
                    progressionHTML += `
                    <div class="level-feature">
                        <h5>Optional Higher-Level Upgrade</h5>
                        <div class="level-feature-text">${fullDesc.levelFeatures['Higher-Level']}</div>
                    </div>`;
                }
                
                progressionHTML += `
                    </div>
                </div>`;
            }
            
            // Add chest armor specific details (Hit Die and AC)
            if (type === 'chest') {
                const dexterityScore = document.getElementById('dexterity').value || 10;
                const constitutionScore = document.getElementById('constitution').value || 10;
                const dexModifier = getAbilityModifier(dexterityScore);
                const conModifier = getAbilityModifier(constitutionScore);
                
                const armorClass = calculateAC(selectedArmor.armorclass, dexterityScore);
                const maxHP = calculateMaxHP(selectedArmor.hitdice, constitutionScore);
                  progressionHTML += `<div class="armor-stats">
                    <p><strong>Hit Die:</strong> ${selectedArmor.hitdice}</p>
                    <p><strong>Base Armor Class:</strong> ${selectedArmor.armorclass}</p>
                    <p><strong>Calculated Armor Class:</strong> ${armorClass}</p>
                    <p><strong>Max HP at Level 5:</strong> ${maxHP} (with CON ${conModifier >= 0 ? '+' : ''}${conModifier})</p>
                </div>`;
            }            
            progressionDiv.innerHTML = progressionHTML;
            
            // level 5 effects (assuming level 1 and 4 effects apply at level 5)
            if (selectedArmor.progression.length >= 2) {
                // first effect (level 1)
                const level1Effect = selectedArmor.progression[0];
                
                // second effect (level 4)
                const level4Effect = selectedArmor.progression[1];
                
                // to level 5 effects
                level5Effects.push({
                    name: selectedArmor.name,
                    type: type,
                    level1: extractEffectDescription(level1Effect),
                    level4: extractEffectDescription(level4Effect)
                });
            }
        }
    });
    
    // late the level 5 effects chart
    populateLevelEffectsChart(level5Effects);
}

// Function to get enhanced descriptions for the final loadout
function getEnhancedDescription(armor, type) {
    // c description
    let description = armor.description;
    
    // type-specific enhancements based on the reference document
    switch(type) {
        case 'helmet':
            if (armor.name === "Hypersensory Scanner Array") {
                description += " This advanced helmet provides darkvision (up to 60 ft.) if you lack it and lets you, once per short rest, briefly highlight hidden or invisible creatures.";
            }
            break;
        case 'pauldrons':
            if (armor.name === "Tech Type") {
                description += " The tech-pauldron grants proficiency with an extra tool and adds two extra 'robotic arms' that provide a +5 bonus to actions related to technical activities.";
            }
            break;
        case 'arms':
            if (armor.name === "Blastbreaker Fists") {
                description += " These allow you to wield two-handed weapons in one hand with no penalty and reclassify normally non-finesse light or one-handed weapons as finesse weapons for you.";
            } else if (armor.name === "Somatic Satellites") {
                description += " When paired with Tech Pauldron, the satellites integrate with the robotic arms, allowing you to cast additional non-cantrip spells in one turn.";
            }
            break;
        case 'chest':
            if (armor.name === "Balanced Type Composite Frame") {
                description += " Provides AC 14 + DEX (max +2) and grants a bonus to movement speed (+10 ft.) with a temporary +2 shield bonus to AC once per day.";
            } else if (armor.name === "Bulwark Type Frame") {
                description += " Provides base AC 16 and allows you to negate one chosen magical or physical damage type for 1 minute once per day.";
            } else if (armor.name === "Light Type Frame") {
                description += " Provides AC 13 + DEX and grants a static increase to movement speed (+15 ft.) with a temporary +1 shield bonus to AC while active.";
            }
            break;
        case 'boots':
            if (armor.name === "Blastcore Soles") {
                description += " Sets your base movement speed at 40 ft. and grants advantage on jump checks with a 10-ft running start. Once per short rest, leap over enemies without provoking opportunity attacks.";
            }
            break;
        case 'raiment':
            if (armor.name === "Soul Core Manifold") {
                description += " Grants two bonus Cell Charges and improves your recharge rate (restoring an extra half-hit-die's worth of charges per short rest).";
            } else if (armor.name === "Godhead Shard") {
                description += " Restores 2 Cell Charges per short rest if you pass a DC 14 Religion check, representing a brief prayer or rite.";
            } else if (armor.name === "Mystery Module") {
                description += " Whenever you activate a power, power surge, or expend a cell charge, you may choose to roll on the Wonder Module Miracore table for random effects.";
            }
            break;
    }
    
    return description;
}

// Function to populate character information in the loadout view
function populateCharacterInfo() {
    // character information from input fields
    const characterName = document.getElementById('character-name').value || "Unnamed Aegisknight";
    
    // Get race and subrace information
    let raceText = "Unknown Race";
    if (selectedRace) {
        raceText = selectedRace.name;
        if (selectedSubrace) {
            raceText += ` (${selectedSubrace.name})`;
        }
    }
    
    const strength = document.getElementById('strength').value || "-";
    const dexterity = document.getElementById('dexterity').value || "-";
    const constitution = document.getElementById('constitution').value || "-";
    const intelligence = document.getElementById('intelligence').value || "-";
    const wisdom = document.getElementById('wisdom').value || "-";
    const charisma = document.getElementById('charisma').value || "-";
    const background = document.getElementById('background').value || "No background specified";
    const backgroundFeat = document.getElementById('background-feat').value || "No background feat specified";
    
    // character image URL
    const characterImageUrl = document.getElementById('character-image-url').value || "";
    
    // appearance details
    const hairColor = document.getElementById('hair-color').value || "Not specified";
    const eyeColor = document.getElementById('eye-color').value || "Not specified";
    const skinColor = document.getElementById('skin-color').value || "Not specified";
    const notableFeatures = document.getElementById('notable-features').value || "None";
    
    // character name and race
    document.getElementById('character-name-display').textContent = characterName;
    document.getElementById('character-race-display').textContent = raceText;
      // Set character portrait
    const portraitImg = document.getElementById('character-portrait-img');
    const portraitPlaceholder = document.getElementById('character-portrait-placeholder');
    
    if (characterImageUrl && characterImageUrl.trim() !== "") {
        portraitImg.src = characterImageUrl;
        portraitImg.style.display = 'block';
        portraitPlaceholder.style.display = 'none';
        
        // Add error handling for the image
        portraitImg.onerror = function() {
            this.style.display = 'none';
            portraitPlaceholder.style.display = 'flex';
            portraitPlaceholder.textContent = 'Image Error';
        };
    } else {
        portraitImg.style.display = 'none';
        portraitPlaceholder.style.display = 'flex';
    }
    
    // Display racial traits in the loadout
    displayRaceTraitsInLoadout();
    
    // ability scores
    document.getElementById('strength-display').textContent = strength;
    document.getElementById('dexterity-display').textContent = dexterity;
    document.getElementById('constitution-display').textContent = constitution;
    document.getElementById('intelligence-display').textContent = intelligence;
    document.getElementById('wisdom-display').textContent = wisdom;
    document.getElementById('charisma-display').textContent = charisma;
    
    // appearance details
    document.getElementById('hair-display').textContent = hairColor;
    document.getElementById('eye-display').textContent = eyeColor;
    document.getElementById('skin-display').textContent = skinColor;
    document.getElementById('features-display').textContent = notableFeatures;
    
    // background information
    document.getElementById('background-display').textContent = background;
    document.getElementById('background-feat-display').textContent = backgroundFeat;
    
    // character feats
    populateCharacterFeats();
}

// Function to extract the description part from effect text
function extractEffectDescription(effectText) {
    // act the text after the level part (e.g., "<strong>Level 1:</strong> Some effect" -> "Some effect")
    const match = effectText.match(/<strong>Level \d+:<\/strong>\s*(.*)/);
    return match ? match[1] : effectText;
}

// Function to populate the level 5 effects chart
function populateLevelEffectsChart(effects) {
    const chartContainer = document.getElementById('level-effects-chart');
    
    if (effects.length === 0) {
        chartContainer.innerHTML = '<p class="no-effects">No effects available - select armor pieces to see their level 5 effects</p>';
        return;
    }
    
    let chartHTML = '';
    
    effects.forEach(effect => {
        chartHTML += `
            <div class="effect-item">
                <h4>${effect.name} (${effect.type.charAt(0).toUpperCase() + effect.type.slice(1)})</h4>
                <p><strong>Level 1:</strong> ${effect.level1}</p>
                <p><strong>Level 4:</strong> ${effect.level4}</p>
            </div>
        `;
    });
    
    chartContainer.innerHTML = chartHTML;
}

function backToSelection() {
    const selectorContainer = document.querySelector('.selector-container');
    const loadoutResults = document.getElementById('loadout-results');
    
    // Show selector, hide results
    selectorContainer.style.display = 'flex';
    loadoutResults.classList.add('hidden');
}

// Function to populate character feats in the loadout view
function populateCharacterFeats() {
    const featsDisplay = document.getElementById('character-feats-display');
    
    // Clear existing content
    featsDisplay.innerHTML = '';
    
    // If no feats are selected, show a message
    if (selectedFeats.length === 0) {
        featsDisplay.innerHTML = '<p class="no-feats">No feats selected</p>';
        return;
    }
    
    // t ASI feats
    const asiFeats = selectedFeats.filter(feat => feat.asi);
    
    // feat summary if there are any feats
    if (selectedFeats.length > 0) {
        const summaryElement = document.createElement('div');
        summaryElement.className = 'feats-summary';
        summaryElement.innerHTML = `
            <p>Total Feats: <strong>${selectedFeats.length}</strong> | 
            ASI Feats: <strong>${asiFeats.length}</strong> | 
            Other Feats: <strong>${selectedFeats.length - asiFeats.length}</strong></p>
        `;
        featsDisplay.appendChild(summaryElement);
    }
    
    // Create a card for each selected feat
    selectedFeats.forEach(feat => {
        const featCard = document.createElement('div');
        featCard.className = 'feat-card';
        if (feat.asi) featCard.classList.add('asi-feat');
        
        featCard.innerHTML = `
            <h4>${feat.name} ${feat.asi ? "(ASI)" : ""}</h4>
            <p>${feat.description}</p>
        `;
        featsDisplay.appendChild(featCard);
    });
}

// Add keyboard shortcut for adding feats
function initKeyboardShortcuts() {
    // Add keyboard shortcut (Enter) for adding feats when the dropdown is focused
    const featsSelect = document.getElementById('feats-select');
    if (featsSelect) {
        featsSelect.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                addSelectedFeat();
                event.preventDefault();
            }
        });
    }
    
    // Add keyboard shortcut (Enter) for the feat search field to focus the dropdown
    const featSearch = document.getElementById('feat-search');
    if (featSearch) {
        featSearch.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                featsSelect.focus();
                event.preventDefault();
            }
        });
    }
}

// Add selected feat to the list
function addSelectedFeat() {
    const featsSelect = document.getElementById('feats-select');
    const selectedFeatId = featsSelect.value;
    
    if (!selectedFeatId) {
        // No feat selected, show a tooltip or message if you have UI for that
        return;
    }
    
    // Check if feat is already selected
    if (selectedFeats.some(feat => feat.id === selectedFeatId)) {
        // Show feedback - you could create a nicer toast notification
        const featPreview = document.getElementById('feat-preview');
        const originalContent = featPreview.innerHTML;
        
        featPreview.innerHTML = '<p class="error-message">This feat is already selected!</p>';
        featPreview.classList.add('active', 'error');
        
        // Reset after a short delay
        setTimeout(() => {
            featPreview.innerHTML = originalContent;
            featPreview.classList.remove('error');
        }, 2000);
        
        return;
    }
    
    // Find the feat in the data
    const feat = featsData.find(feat => feat.id === selectedFeatId);
    if (feat) {
        // Add to selectedFeats array
        selectedFeats.push(feat);
        
        // Update the UI
        updateSelectedFeatsUI();
        
        // Show success message in preview
        const featPreview = document.getElementById('feat-preview');
        const originalContent = featPreview.innerHTML;
        
        featPreview.innerHTML = '<p class="success-message">Feat added successfully!</p>';
        featPreview.classList.add('active', 'success');
        
        // eset after a short delay
        setTimeout(() => {
            // eset dropdown
            featsSelect.value = '';
            featPreview.innerHTML = '';
            featPreview.classList.remove('active', 'success');
        }, 1000);
    }
}

// pdate the selected feats UI
function updateSelectedFeatsUI() {
    const selectedFeatsContainer = document.getElementById('selected-feats-container');
    const featsCountBadge = document.getElementById('feats-count');
    
    // pdate count badge
    if (featsCountBadge) {
        featsCountBadge.textContent = selectedFeats.length;
    }
    
    // lear current content
    selectedFeatsContainer.innerHTML = '';
    
    // o feats selected
    if (selectedFeats.length === 0) {
        selectedFeatsContainer.innerHTML = '<div class="no-feats">No feats selected</div>';
        return;
    }
    
    // dd each selected feat
    selectedFeats.forEach((feat, index) => {
        const featElement = document.createElement('div');
        featElement.className = 'selected-feat';
        featElement.setAttribute('data-tooltip', feat.description);
        featElement.innerHTML = `
            <div class="feat-name">${feat.name}</div>
            <button type="button" class="remove-feat" data-index="${index}" aria-label="Remove ${feat.name}">×</button>
        `;
        selectedFeatsContainer.appendChild(featElement);
    });
    
    // Add event listeners to remove buttons
    const removeButtons = selectedFeatsContainer.querySelectorAll('.remove-feat');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            removeSelectedFeat(index);
        });
    });
}

// Remove a selected feat
function removeSelectedFeat(index) {
    selectedFeats.splice(index, 1);
    updateSelectedFeatsUI();
}

// Initialize feat-related UI elements
function initFeatsUI() {
    const addFeatButton = document.getElementById('add-feat-button');
    const featSearch = document.getElementById('feat-search');
    const asiFilter = document.getElementById('asi-filter');
    
    // Add feat button click event
    if (addFeatButton) {
        addFeatButton.addEventListener('click', addSelectedFeat);
    }
    
    // Search input event
    if (featSearch) {
        featSearch.addEventListener('input', function() {
            populateFeatsDropdown(this.value);
        });
    }
    
    // ASI filter change event
    if (asiFilter) {
        asiFilter.addEventListener('change', function() {
            populateFeatsDropdown(featSearch ? featSearch.value : '');
        });
    }
    
    // Initialize keyboard shortcuts
    initKeyboardShortcuts();
    
    // Update selected feats UI on initial load
    updateSelectedFeatsUI();
}

// Function to preview the selected feat before adding
function previewFeat() {
    const featsSelect = document.getElementById('feats-select');
    const featPreview = document.getElementById('feat-preview');
    
    const selectedFeatId = featsSelect.value;
    
    if (!selectedFeatId) {
        featPreview.innerHTML = '';
        featPreview.classList.remove('active');
        return;
    }
    
    const feat = featsData.find(feat => feat.id === selectedFeatId);
    if (feat) {
        featPreview.innerHTML = `
            <h4>${feat.name} ${feat.asi ? "(ASI)" : ""}</h4>
            <p>${feat.description}</p>
        `;
        featPreview.classList.add('active');
    }
}

// Function to calculate ability score modifier
function getAbilityModifier(score) {
    if (!score || isNaN(parseInt(score))) return 0;
    return Math.floor((parseInt(score) - 10) / 2);
}

// Function to calculate max HP for level 5
function calculateMaxHP(hitDice, constitutionScore) {
    if (!hitDice) return "-";
    
    const conModifier = getAbilityModifier(constitutionScore);
    let baseHP = 0;
    
    // Debug logging
    console.log("Hit Dice:", hitDice);
    
    // Calculate HP based on hit dice
    switch(hitDice) {
        case "d8":
            baseHP = 8 + (8 * 4); // Maximized HP
            console.log("d8 used for Light Type Frame:", baseHP);
            break;
        case "d10":
            baseHP = 10 + (10 * 4); // Maximized HP
            console.log("d10 used:", baseHP);
            break;
        case "d12":
            baseHP = 12 + (12 * 4); // Maximized HP
            console.log("d12 used:", baseHP);
            break;
        default:
            console.log("Unknown hit dice:", hitDice);
            return "-";
    }
    
    // Add Con modifier for all 5 levels
    return baseHP + (conModifier * 5);
}

// Function to calculate AC
function calculateAC(armorClassText, dexterityScore) {
    if (!armorClassText) return "-";
    
    const dexModifier = getAbilityModifier(dexterityScore);
    console.log("AC Text:", armorClassText, "Dex Score:", dexterityScore, "Dex Mod:", dexModifier);
    
    // Start with base AC
    let finalAC = 0;
    
    // Parse the armor class data
    // Format could be: 
    // 1. A number (e.g., "17")
    // 2. A base number + full dex (e.g., "13+dex")
    // 3. A base number + capped dex (e.g., "14+dex(2)")
    
    // Check if it's just a number (fixed AC)
    if (!isNaN(parseInt(armorClassText)) && !armorClassText.includes("+")) {
        finalAC = parseInt(armorClassText);
        console.log("Fixed AC value:", finalAC);
    }
    // Check if it has a dex component
    else if (armorClassText.includes("+dex")) {
        const parts = armorClassText.split("+dex");
        const baseAC = parseInt(parts[0]);
        
        // Check if there's a max cap
        if (parts[1] && parts[1].includes("(")) {
            const maxCapMatch = parts[1].match(/\((\d+)\)/);
            if (maxCapMatch) {
                const maxCap = parseInt(maxCapMatch[1]);
                finalAC = baseAC + Math.min(dexModifier, maxCap);
                console.log("AC with max cap:", finalAC, "Base:", baseAC, "Cap:", maxCap);
            } else {
                finalAC = baseAC + dexModifier;
                console.log("AC with full dex (cap parsing failed):", finalAC);
            }
        } else {
            // No max cap specified, add full dex modifier
            finalAC = baseAC + dexModifier;
            console.log("AC with full dex (no cap):", finalAC);
        }
    } else {
        // Legacy format handling (try to parse text description)
        try {
            // Extract the base AC number
            const baseACMatch = armorClassText.match(/(\d+)/);
            if (!baseACMatch) return "-";
            
            const baseAC = parseInt(baseACMatch[0]);
            
            // Check if there's a max cap on Dex modifier
            if (armorClassText.toLowerCase().includes("max")) {
                const maxMatch = armorClassText.match(/max\s*\+?(\d+)/i);
                if (!maxMatch) {
                    finalAC = baseAC + dexModifier;
                } else {
                    const maxDexBonus = parseInt(maxMatch[1]);
                    finalAC = baseAC + Math.min(dexModifier, maxDexBonus);
                }
            } else if (armorClassText.toLowerCase().includes("dex")) {
                finalAC = baseAC + dexModifier;
            } else {
                finalAC = baseAC;
            }
            console.log("AC from legacy parsing:", finalAC);
        } catch (e) {
            console.error("Error parsing armor class:", e);
            return "-";
        }
    }    
    // Add bonuses from other armor pieces with bonusAC property
    // Get all selected armor pieces
    const armorTypes = ['helmet', 'pauldrons', 'arms', 'boots', 'raiment'];
    let bonusAC = 0;
    
    armorTypes.forEach(type => {
        const selectElement = document.getElementById(`${type}-select`);
        if (selectElement && selectElement.value) {
            const selectedArmor = armorData[selectElement.value];
            if (selectedArmor && selectedArmor.bonusAC) {
                bonusAC += selectedArmor.bonusAC;
                console.log(`Adding ${selectedArmor.bonusAC} AC from ${type} (${selectedArmor.name})`);
            }
        }
    });
    
    // Add any bonus AC
    finalAC += bonusAC;
    console.log("Final AC with all bonuses:", finalAC);
    
    return finalAC;
}

// Calculate total cell charges based on raiment
function calculateCellCharges() {
    const raimentSelect = document.getElementById('raiment-select');
    const raimentValue = raimentSelect.value;
    
    // Base cell charges
    const baseCellCharges = 9;
    let bonusCellCharges = 0;
    
    // Add bonus cell charges from raiment if selected
    if (raimentValue && armorData[raimentValue]) {
        bonusCellCharges = armorData[raimentValue].bonusCellCharges || 0;
    }
    
    const totalCellCharges = baseCellCharges + bonusCellCharges;
    return {
        base: baseCellCharges,
        bonus: bonusCellCharges,
        total: totalCellCharges
    };
}

// Update the battery display to show cell charges
function updateCellChargesDisplay() {
    const chargesInfo = calculateCellCharges();
    const cellChargesDisplay = document.getElementById('cell-charges-display');
    const batteryLevel = document.getElementById('battery-level');
    
    // Update the text display with detailed info
    cellChargesDisplay.textContent = `${chargesInfo.total} (${chargesInfo.base}+${chargesInfo.bonus})`;
    
    // Calculate percentage for the battery visual (cap at 100%)
    // The max capacity is set to a reasonable number so the battery doesn't look too empty
    const maxCapacity = 20; // Visual reference point
    const batteryPercentage = Math.min((chargesInfo.total / maxCapacity) * 100, 100);
    
    // Update the battery level width to reflect the charge percentage
    batteryLevel.style.width = `${batteryPercentage}%`;
    
    console.log(`Cell Charges updated: Base ${chargesInfo.base}, Bonus ${chargesInfo.bonus}, Total ${chargesInfo.total}`);
}

// Add event listeners to update HP and AC when ability scores or chest armor change
document.addEventListener('DOMContentLoaded', function() {
    // Elements that affect HP and AC calculations
    const dexInput = document.getElementById('dexterity');
    const conInput = document.getElementById('constitution');
    const chestSelect = document.getElementById('chest-select');
    
    // Element that affects Cell Charges
    const raimentSelect = document.getElementById('raiment-select');
    
    // Function to update the preview if viewing chest armor
    const updateStatsDisplay = function() {
        const currentArmorType = document.getElementById('chest-select');
        if (currentArmorType && currentArmorType.value) {
            updateArmorInfo('chest');
        }
    };
    
    // Add event listeners
    if (dexInput) dexInput.addEventListener('change', updateStatsDisplay);
    if (conInput) conInput.addEventListener('change', updateStatsDisplay);
    if (chestSelect) chestSelect.addEventListener('change', updateStatsDisplay);
    
    // Add event listener for raiment to update cell charges
    if (raimentSelect) {
        raimentSelect.addEventListener('change', function() {
            updateCellChargesDisplay();
        });
    }
    
    // Initialize cell charges display
    updateCellChargesDisplay();
});

// Function to populate weapon dropdowns
function populateWeaponDropdowns() {
    const primarySelect = document.getElementById('primary-weapon-select');
    const secondarySelect = document.getElementById('secondary-weapon-select');
    
    // Clear existing options except the first one
    while (primarySelect.options.length > 1) {
        primarySelect.remove(1);
    }
    
    while (secondarySelect.options.length > 1) {
        secondarySelect.remove(1);
    }
    
    // Add weapons to dropdowns
    weaponsData.forEach(weapon => {
        // Create options for primary weapon
        const primaryOption = document.createElement('option');
        primaryOption.value = weapon.id;
        primaryOption.textContent = `${weapon.name} (${weapon.damage_dice} ${weapon.damage_type})`;
        primarySelect.appendChild(primaryOption);
        
        // Create options for secondary weapon
        const secondaryOption = document.createElement('option');
        secondaryOption.value = weapon.id;
        secondaryOption.textContent = `${weapon.name} (${weapon.damage_dice} ${weapon.damage_type})`;
        secondarySelect.appendChild(secondaryOption);
    });
}

// Function to update weapon info display
function updateWeaponInfo(weaponType) {
    const selectId = `${weaponType}-weapon-select`;
    const selectElement = document.getElementById(selectId);
    const selectedValue = selectElement.value;
    
    // Find the description area to update
    const nameElement = document.getElementById('selected-item-name');
    const descriptionElement = document.getElementById('selected-item-description');
    
    if (selectedValue === "") {
        // No weapon is selected, we'll just leave the current armor info
        return;
    }
    
    // Find the selected weapon data
    const selectedWeapon = weaponsData.find(weapon => weapon.id === selectedValue);
    
    if (!selectedWeapon) return;
    
    // Update the info panel
    nameElement.textContent = selectedWeapon.name;
    
    // Check the large size checkbox status
    const isLargeSize = document.getElementById(`${weaponType}-large-size`).checked;
    
    // Calculate damage based on size
    let damageDisplay = selectedWeapon.damage_dice;
    if (isLargeSize) {
        // Double the number of dice for large size weapons
        damageDisplay = doubleDamageDice(selectedWeapon.damage_dice);
    }
    
    // Create weapon details
    let weaponDescription = `
        <div class="weapon-info">
            <p><strong>Damage:</strong> ${damageDisplay} ${selectedWeapon.damage_type}</p>
            <p><strong>Category:</strong> ${selectedWeapon.category}</p>
            <p><strong>Properties:</strong> ${selectedWeapon.special}</p>
            ${isLargeSize ? '<p><strong>Large Size:</strong> This weapon is being wielded as a large-sized weapon, doubling its damage dice.</p>' : ''}
        </div>
    `;
    
    descriptionElement.innerHTML = weaponDescription;
}

// Function to double damage dice for large weapons
function doubleDamageDice(damageDice) {
    // Parse the damage dice format (e.g., "1d8", "2d6", etc.)
    const match = damageDice.match(/(\d+)d(\d+)/);
    if (!match) return damageDice; // Return original if format doesn't match
    
    const numberOfDice = parseInt(match[1]);
    const diceType = match[2];
    
    // Double the number of dice
    return `${numberOfDice * 2}d${diceType}`;
}

// Function to populate weapons in the loadout view
function populateWeaponsInfo() {
    // Process primary weapon
    const primaryWeaponId = document.getElementById('primary-weapon-select').value;
    const primaryLargeSize = document.getElementById('primary-large-size').checked;
    
    // Process secondary weapon
    const secondaryWeaponId = document.getElementById('secondary-weapon-select').value;
    const secondaryLargeSize = document.getElementById('secondary-large-size').checked;
    
    // Get the strength and dexterity modifiers for attack bonuses
    const strengthScore = document.getElementById('strength').value || 10;
    const dexterityScore = document.getElementById('dexterity').value || 10;
    const strModifier = getAbilityModifier(strengthScore);
    const dexModifier = getAbilityModifier(dexterityScore);
    
    // Populate primary weapon info
    const primaryNameElement = document.getElementById('primary-weapon-name');
    const primaryDamageElement = document.getElementById('primary-weapon-damage');
    const primaryTypeElement = document.getElementById('primary-weapon-type');
    const primaryPropertiesElement = document.getElementById('primary-weapon-properties');
    
    if (primaryWeaponId) {
        const primaryWeapon = weaponsData.find(weapon => weapon.id === primaryWeaponId);
        if (primaryWeapon) {
            primaryNameElement.textContent = primaryWeapon.name;
            
            // Calculate damage based on size
            let damageDisplay = primaryWeapon.damage_dice;
            if (primaryLargeSize) {
                damageDisplay = doubleDamageDice(primaryWeapon.damage_dice);
            }
            
            // Add appropriate ability modifier to damage
            const usesDex = primaryWeapon.special && primaryWeapon.special.toLowerCase().includes('finesse');
            const bestModifier = usesDex ? Math.max(strModifier, dexModifier) : strModifier;
            const modifierDisplay = bestModifier >= 0 ? `+${bestModifier}` : bestModifier;
            
            primaryDamageElement.textContent = `${damageDisplay} ${modifierDisplay} ${primaryWeapon.damage_type}`;
            primaryTypeElement.textContent = primaryWeapon.category;
            primaryPropertiesElement.textContent = primaryWeapon.special || "None";
        }
    } else {
        primaryNameElement.textContent = "None Selected";
        primaryDamageElement.textContent = "-";
        primaryTypeElement.textContent = "-";
        primaryPropertiesElement.textContent = "-";
    }
    
    // Populate secondary weapon info
    const secondaryNameElement = document.getElementById('secondary-weapon-name');
    const secondaryDamageElement = document.getElementById('secondary-weapon-damage');
    const secondaryTypeElement = document.getElementById('secondary-weapon-type');
    const secondaryPropertiesElement = document.getElementById('secondary-weapon-properties');
    
    if (secondaryWeaponId) {
        const secondaryWeapon = weaponsData.find(weapon => weapon.id === secondaryWeaponId);
        if (secondaryWeapon) {
            secondaryNameElement.textContent = secondaryWeapon.name;
            
            // Calculate damage based on size
            let damageDisplay = secondaryWeapon.damage_dice;
            if (secondaryLargeSize) {
                damageDisplay = doubleDamageDice(secondaryWeapon.damage_dice);
            }
            
            // Add appropriate ability modifier to damage
            const usesDex = secondaryWeapon.special && secondaryWeapon.special.toLowerCase().includes('finesse');
            const bestModifier = usesDex ? Math.max(strModifier, dexModifier) : strModifier;
            const modifierDisplay = bestModifier >= 0 ? `+${bestModifier}` : bestModifier;
            
            secondaryDamageElement.textContent = `${damageDisplay} ${modifierDisplay} ${secondaryWeapon.damage_type}`;
            secondaryTypeElement.textContent = secondaryWeapon.category;
            secondaryPropertiesElement.textContent = secondaryWeapon.special || "None";
        }
    } else {
        secondaryNameElement.textContent = "None Selected";
        secondaryDamageElement.textContent = "-";
        secondaryTypeElement.textContent = "-";
        secondaryPropertiesElement.textContent = "-";
    }
}

// Global variables for races data
let racesData = [];
let selectedRace = null;
let selectedSubrace = null;

// Load races data
function loadRacesData() {
    // Hardcode races data directly to avoid CORS issues
    racesData = [
    {
        "id": "kittenfolk",
        "name": "Kittenfolk",
        "alternate_names": ["Kittenling", "Konekojin"],
        "size": "Small",
        "base_speed": 35,
        "ability_score_increases": {
            "dexterity": 2,
            "charisma": 1
        },
        "traits": [
            {
                "name": "Low-Light Vision",
                "description": "You have superior vision in dim light. You can see in dim light within 60 feet of you as if it were bright light."
            },
            {
                "name": "Feline Agility",
                "description": "You gain proficiency in the Stealth skill. Additionally, you have advantage on ability checks made to jump or climb."
            },
            {
                "name": "Natural Paws",
                "description": "Your unarmed strikes with your paws count as natural weapons. Due to your small size, these strikes deal 2 bludgeoning damage instead of the usual 1d4."
            },
            {
                "name": "Aquatic Ineptitude",
                "description": "You have disadvantage on Athletics checks made to swim."
            }
        ],
        "languages": ["Common", "Choice"],
        "subraces": [
            {
                "id": "tawny_folk",
                "name": "Tawny Folk",
                "ability_score_increases": {
                    "charisma": 2,
                    "intelligence": -1
                },
                "traits": [
                    {
                        "name": "Trade Expertise",
                        "description": "You gain proficiency with one artisan's tool of your choice."
                    },
                    {
                        "name": "Local Knowledge",
                        "description": "You are proficient in the History skill. When making checks related to local folklore, customs, or geography, you have advantage."
                    }
                ]
            },
            {
                "id": "umbral_tribe",
                "name": "Umbral Tribe",
                "ability_score_increases": {
                    "intelligence": 2
                },
                "traits": [
                    {
                        "name": "Mystic Cantrip",
                        "description": "You know one cantrip of your choice from the wizard, bard, or sorcerer spell list. Intelligence is your spellcasting ability for this cantrip."
                    },
                    {
                        "name": "Herbalist Proficiency",
                        "description": "You are proficient with the herbalist's kit."
                    },
                    {
                        "name": "Catnip Tincture",
                        "description": "Using an herbalist's kit, you can create a Catnip Tincture that when consumed increases the user's base speed by 10 feet for 3 rounds, but they take a -1 penalty to attack rolls during this time."
                    }
                ]
            },
            {
                "id": "purekin",
                "name": "Purekin",
                "ability_score_increases": {
                    "wisdom": 2
                },
                "traits": [
                    {
                        "name": "Divine Cantrip",
                        "description": "You know one cantrip of your choice from the cleric or bard spell list. Wisdom is your spellcasting ability for this cantrip."
                    },
                    {
                        "name": "Resilient Physique",
                        "description": "You have advantage on saving throws against disease and poison, including magical diseases and poisons."
                    },
                    {
                        "name": "Artisan Proficiency",
                        "description": "You are proficient with one of the following: calligrapher's supplies, cartographer's tools, or engraver's tools."
                    }
                ]
            },
            {
                "id": "megafaunal_kittenkin",
                "name": "Megafaunal Kittenkin",
                "ability_score_increases": {
                    "strength": 2,
                    "intelligence": -1,
                    "wisdom": -1
                },
                "size": "Medium",
                "base_speed": 40,
                "traits": [
                    {
                        "name": "Survivor's Instinct",
                        "description": "You gain proficiency in the Survival skill."
                    },
                    {
                        "name": "Combat Proficiency",
                        "description": "You have proficiency with all simple weapons."
                    }
                ]
            }
        ]
    },
    {
        "id": "pupperling",
        "name": "Pupperling",
        "size": "Small",
        "base_speed": 35,
        "ability_score_increases": {
            "charisma": 1,
            "constitution": 1,
            "strength": 1
        },
        "traits": [
            {
                "name": "Loyal Might",
                "description": "You have an innate carrying capacity bonus. Your carrying capacity increases by +5 for every point of Strength over 10."
            },
            {
                "name": "Strong Paws",
                "description": "Your unarmed strikes with your paws count as natural weapons. These strikes deal 1d4 bludgeoning damage. Additionally, your claws may be used as improvised tools with a -2 penalty to the roll."
            },
            {
                "name": "Boundless Energy",
                "description": "You gain proficiency in the Athletics skill."
            }
        ],
        "languages": ["Common", "Choice"],
        "subraces": [
            {
                "id": "watchkin",
                "name": "Watchkin",
                "ability_score_increases": {
                    "wisdom": 2,
                    "dexterity": -1
                },
                "traits": [
                    {
                        "name": "Ever Watchful",
                        "description": "You have advantage on Wisdom (Perception) checks to detect hidden creatures or objects."
                    },
                    {
                        "name": "Proficiency",
                        "description": "You gain proficiency with the Insight skill and smith's tools."
                    }
                ]
            },
            {
                "id": "huntkin",
                "name": "Huntkin",
                "ability_score_increases": {
                    "dexterity": 2,
                    "charisma": -1
                },
                "traits": [
                    {
                        "name": "Hunter's Instinct",
                        "description": "When tracking a creature, you have advantage on Wisdom (Survival) checks to follow its trail. Additionally, you can move stealthily at a normal pace while traveling alone or with one other creature."
                    },
                    {
                        "name": "Proficiency",
                        "description": "You gain proficiency with the Survival skill and bowyer's tools."
                    }
                ]
            },
            {
                "id": "corgites",
                "name": "Corgites",
                "ability_score_increases": {
                    "constitution": 2,
                    "strength": -1
                },
                "traits": [
                    {
                        "name": "Stubborn Resilience",
                        "description": "When you fail a saving throw against being knocked prone or moved, you can roll again and must use the second result. You can use this feature once per short or long rest."
                    },
                    {
                        "name": "Proficiency",
                        "description": "You gain proficiency with the Persuasion skill and mason's tools."
                    }
                ]
            },
            {
                "id": "wolfbreed",
                "name": "Wolfbreed",
                "ability_score_increases": {
                    "strength": 2,
                    "intelligence": -1
                },
                "size": "Medium",
                "base_speed": 40,
                "traits": [
                    {
                        "name": "Alpha's Command",
                        "description": "As a bonus action, you can bolster an ally within 10 feet. They gain advantage on their next attack roll or saving throw. You can use this feature once per long rest."
                    },
                    {
                        "name": "Proficiency",
                        "description": "You gain proficiency with the Intimidation skill and carpenter's tools."
                    }
                ]
            },
            {
                "id": "magipup",
                "name": "Magipup",
                "ability_score_increases": {
                    "intelligence": 2,
                    "strength": -1
                },
                "traits": [
                    {
                        "name": "Arcane Cantrip",
                        "description": "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for this cantrip."
                    },
                    {
                        "name": "Mystic Insight",
                        "description": "You have advantage on Arcana checks related to magical devices or symbols."
                    },
                    {
                        "name": "Proficiency",
                        "description": "You gain proficiency with the Arcana skill and alchemist's supplies."
                    }
                ]
            }
        ]
    },
    {
        "id": "skunkiddo",
        "name": "Skunkiddo",
        "size": "Small",
        "base_speed": 25,
        "ability_score_increases": {
            "dexterity": 2,
            "constitution": 1
        },
        "traits": [
            {
                "name": "Dig Speed",
                "description": "You have a burrow (dig) speed of 5 feet, allowing you to tunnel through loose earth or sand."
            },
            {
                "name": "Climb Speed",
                "description": "You have a climb speed of 10 feet."
            },
            {
                "name": "Stink Spray",
                "description": "As an action, you can exhale a repulsive cloud of odor in a 15-foot cone. Each creature in that area must succeed on a Constitution saving throw (DC = 8 + your proficiency bonus + your Dexterity modifier) or be poisoned and sickened until the end of your next turn. Once you use this trait, you cannot use it again until you finish a short or long rest."
            },
            {
                "name": "Diapered Instinct",
                "description": "Having eschewed potty training on the DS Plane, you are naturally incontinent at creation. Because of this inherent flaw, you are eligible to select the Diaper-Mastery feat at character creation in lieu of meeting its usual prerequisites."
            },
            {
                "name": "Keen Senses",
                "description": "You have advantage on Wisdom (Perception) checks that rely on your sense of smell."
            },
            {
                "name": "Mischievous Nature",
                "description": "Your wily personality grants you proficiency in the Stealth skill."
            }
        ],
        "languages": ["Common", "Skunkiddo"],
        "subraces": [
            {
                "id": "fragrance_furs",
                "name": "Fragrance Furs",
                "ability_score_increases": {
                    "intelligence": 1
                },
                "traits": [
                    {
                        "name": "Perfume Poof",
                        "description": "You replace the standard Skunkiddo Stink Spray with a burst of heady, magical fragrance. As an action, you can exude a pleasant perfume in a 15-foot cone. Each creature in the area must succeed on a Wisdom saving throw or be dazzled (enemies) or inspired (allies). You can use this ability a number of times per day equal to your proficiency bonus."
                    },
                    {
                        "name": "Fragrant Magic",
                        "description": "Your innate magical flair allows you to learn one arcane cantrip of your choice. Intelligence is your spellcasting ability for this cantrip."
                    }
                ]
            },
            {
                "id": "malodorans",
                "name": "Malodorans",
                "ability_score_increases": {
                    "strength": 1
                },
                "traits": [
                    {
                        "name": "Enhanced Stink Spray",
                        "description": "Your Stink Spray is particularly potent. Affected creatures also become frightened of you for 1 round on a failed save."
                    },
                    {
                        "name": "Unbridled Momentum",
                        "description": "Your walking speed increases by 5 feet."
                    },
                    {
                        "name": "Battle-Hardened Aroma",
                        "description": "You gain proficiency in the Intimidation skill if you do not already have it."
                    }
                ]
            }
        ]
    },
    {
        "id": "bunbunkin",
        "name": "Bunbunkin",
        "size": "Small",
        "base_speed": 35,
        "ability_score_increases": {
            "dexterity": 2,
            "strength": 2,
            "wisdom": -1,
            "constitution": -1
        },
        "traits": [
            {
                "name": "Darkvision",
                "description": "You can see in darkness within 30 feet as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                "name": "Low-Light Vision",
                "description": "You can see in dim light within 60 feet as if it were bright light."
            },
            {
                "name": "Burrower's Paws",
                "description": "Your unarmed strikes with your paws count as natural weapons dealing 1d4 bludgeoning damage. Additionally, you have a burrowing speed of 5 feet."
            },
            {
                "name": "Tunnelborn Navigation",
                "description": "You gain proficiency in Nature and Dungeoneering. You can never become lost or disoriented within underground passageways."
            },
            {
                "name": "Sharp Hearing",
                "description": "You have advantage on Perception checks that rely on hearing."
            }
        ],
        "languages": ["Common", "Choice"],
        "subraces": [
            {
                "id": "fleetfeets",
                "name": "Fleetfeets",
                "ability_score_increases": {
                    "dexterity": 2,
                    "wisdom": -1
                },
                "base_speed": 45,
                "traits": [
                    {
                        "name": "Bonus Dash",
                        "description": "You can take the Dash action as a bonus action. If you already have this ability, your movement speed increases by an additional 10 feet during that Dash."
                    },
                    {
                        "name": "Climbing Adaptation",
                        "description": "You lose your burrowing speed, but you gain a climbing speed of 15 feet on unobstructed surfaces less than 65 degrees steep."
                    },
                    {
                        "name": "Proficiency",
                        "description": "You gain proficiency in the Survival skill."
                    }
                ]
            },
            {
                "id": "bigpaws",
                "name": "Bigpaws",
                "ability_score_increases": {
                    "strength": 1,
                    "constitution": 1
                },
                "traits": [
                    {
                        "name": "Large Build",
                        "description": "You have all the benefits of being Medium sized while retaining the advantages of being Small, and you suffer none of the usual disadvantages of being Small sized."
                    },
                    {
                        "name": "Enhanced Burrowing",
                        "description": "Your burrowing speed increases to 10 feet."
                    },
                    {
                        "name": "Proficiency",
                        "description": "You gain proficiency in the Athletics skill."
                    }
                ]
            },
            {
                "id": "sparkly_ears",
                "name": "Sparkly-Ears",
                "ability_score_increases": {
                    "intelligence": 2,
                    "wisdom": 2,
                    "strength": -1,
                    "dexterity": -1
                },
                "traits": [
                    {
                        "name": "Arcane and Divine Cantrips",
                        "description": "You know one cantrip of your choice from the wizard spell list and one cantrip of your choice from the cleric spell list."
                    },
                    {
                        "name": "Pandimensional Navigation",
                        "description": "Your ability to avoid becoming lost underground now applies to any plane cosmologically below the Material Plane, and it functions even in areas affected by magical sound dampening or spatial distortions."
                    },
                    {
                        "name": "Proficiency",
                        "description": "You gain proficiency with either two magical artisan's tools or one magical tool and one language of your choice."
                    }
                ]
            }
        ]
    },
    {
        "id": "ghost",
        "name": "Ghost",
        "size": "Varies",
        "base_speed": 30,
        "ability_score_increases": {
            "wisdom": 1,
            "intelligence": 1
        },
        "traits": [
            {
                "name": "Sleepless Spectre",
                "description": "You do not need to sleep. Instead, you enter a semi-dormant state for 4 hours, akin to elven meditation. During this time, you are fully aware of your surroundings. You are also immune to charm effects that rely on sleep."
            },
            {
                "name": "Darkvision",
                "description": "You can see in darkness within 60 feet as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                "name": "Formless Passage",
                "description": "Twice per long rest, you can assume an incorporeal form for up to 10 minutes. While incorporeal, you can move through non-magical objects, doors, or walls as if they were difficult terrain."
            },
            {
                "name": "Spectral Manipulation",
                "description": "You can cast the mage hand cantrip a number of times per day equal to your Constitution modifier (minimum of once). Intelligence is your spellcasting ability for this cantrip."
            },
            {
                "name": "Wail of the Lost",
                "description": "As an action, you can release an otherworldly wail. Each creature within 10 feet that can hear you must succeed on a Wisdom saving throw or be frightened of you for 1 minute."
            },
            {
                "name": "Ethereal Insight",
                "description": "Gain proficiency in Arcana and Religion."
            }
        ],
        "languages": ["Common", "Choice"],
        "special_mechanics": "Ghost subraces combine the traits of your original 'living' race with the spectral abilities of the Ghost race. Rather than replacing features, you layer the essence of your mortal past onto the Ghost template."
    },
    {
        "id": "morphian_changeling",
        "name": "Morphian Changeling",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {
            "charisma": 2,
            "choice": 1
        },
        "traits": [
            {
                "name": "Robust Transformation",
                "description": "You can transform into any Medium or Small-sized race you have previously touched with bare skin. This transformation requires a 12-hour biological process that functions as a trance-like sleep, during which you alter your racial phylogeny."
            },
            {
                "name": "Form Limitations",
                "description": "While temporarily disguising yourself using your standard changeling transformation ability, you can only mimic races you have touched but do not gain the racial abilities or powers of any race other than your current chosen form."
            },
            {
                "name": "Temporary Transformation",
                "description": "As an action, you can temporarily transform to take on the physical appearance of a race you have touched. This transformation lasts up to 1 hour or until you revert to your original form."
            }
        ],
        "languages": ["Common", "Choice", "Choice", "Racial languages from chosen form"],
        "special_mechanics": "Your subrace is determined by the race you last transformed into using your Robust Transformation ability. You must complete the 12-hour transformation process to change subraces."
    },
    {
        "id": "cowbuddy",
        "name": "Cowbuddy",
        "size": "Varies",
        "base_speed": 35,
        "ability_score_increases": {
            "constitution": 1
        },
        "traits": [
            {
                "name": "Natural Hooved Feet",
                "description": "Your hoof-like nails let you make unarmed strikes that deal 1d4 bludgeoning damage using your Strength modifier."
            },
            {
                "name": "Rapid Digestion",
                "description": "You have resistance to all ingested poisons and non-magical poisons. You have immunity to all common-rarity poisons. However, you must roll potty-checks twice as often as other characters, and roll a CON-based potty-check after any strenuous action."
            },
            {
                "name": "Naturally Unpottytrained",
                "description": "You are Incontinent as per the Flaw, and as such immediately qualify for the Diaper Mastery feat at creation."
            },
            {
                "name": "Horned Charge",
                "description": "Once per short rest, when you move 15 feet in a straight line toward a creature, you can use a bonus action to make a melee attack with your horns dealing 1d6 piercing damage plus your Strength modifier."
            },
            {
                "name": "Bovine Fortitude",
                "description": "You have proficiency in Constitution saving throws."
            }
        ],
        "languages": ["Common", "Choice"],
        "subraces": [
            {
                "id": "dairy_friends",
                "name": "Dairy Friends",
                "ability_score_increases": {
                    "constitution": 1,
                    "charisma": 2
                },
                "traits": [
                    {
                        "name": "Artisan's Touch",
                        "description": "You gain proficiency with one type of artisan's tool of your choice."
                    },
                    {
                        "name": "Produce Milk",
                        "description": "As an action, you can magically produce 24 fluid ounces of fresh, magical milk from your body. Any creature that consumes this milk immediately regains 1d4 hit points. You can use this ability a number of times equal to your proficiency bonus per long rest."
                    },
                    {
                        "name": "Soothing Presence",
                        "description": "When you cast a healing spell or use a healing ability, you can grant yourself or one creature within 10 feet temporary hit points equal to your Charisma modifier. You can use this ability once per short rest."
                    }
                ]
            },
            {
                "id": "bull_buddies",
                "name": "Bull Buddies",
                "ability_score_increases": {
                    "constitution": 1,
                    "strength": 2
                },
                "traits": [
                    {
                        "name": "Lone Charge",
                        "description": "You gain proficiency in Athletics. Additionally, when you are not adjacent to any allies, you have advantage on Strength (Athletics) checks and Strength saving throws."
                    },
                    {
                        "name": "Unyielding Might",
                        "description": "Once per short rest, when you roll a Strength check or saving throw, you can add a bonus equal to your Strength modifier (minimum +1), tapping into an inner reserve of raw power."
                    }
                ]
            }
        ]
    },
    {
        "id": "darkling",
        "name": "Darkling",
        "size": "Medium",
        "base_speed": 30,
        "traits": [
            {
                "name": "Scent",
                "description": "You can track creatures around you by scent within a defined radius, treated as blindsense."
            },
            {
                "name": "Tendril Lash",
                "description": "You have a natural shadow-lash weapon that deals 1d4 damage instead of the unarmed strike damage of 1."
            },
            {
                "name": "Umbral Jaunt",
                "description": "You can use shadowed ethereal movement to move to any unoccupied space within 20 feet."
            },
            {
                "name": "Shadow Regeneration",
                "description": "If unwounded for 1 round, you begin to coalesce your being back together. Every round after the first round you are not wounded, you can restore 1d6 HP granted you do not move more than 10 ft in that turn."
            },
            {
                "name": "Nightling Mind and Body",
                "description": "You take double damage from sources of radiant damage. You don't sleep; you lurk for 4–6 hours. You cannot be frightened."
            },
            {
                "name": "Body of Vapor",
                "description": "As an action up to 3 times per day, you can compress or expand your body to have either the Giant Might class feature for 1 minute, or Small racial features as desired."
            },
            {
                "name": "Darkvision",
                "description": "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
            },
            {
                "name": "Aggressive",
                "description": "As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear."
            }
        ],
        "languages": ["Common", "Undercommon (understand only)"],
        "subraces": [
            {
                "id": "ossuite",
                "name": "Ossuite",
                "ability_score_increases": {
                    "wisdom": 1
                },
                "traits": [
                    {
                        "name": "Bone Toss",
                        "description": "The Ossuite replaces the standard Tendril Lash with Bone Toss, a ranged attack with 30 ft range dealing 1d4 piercing damage."
                    },
                    {
                        "name": "Divine Insight",
                        "description": "You learn one divine cantrip of your choosing from the Cleric spell list."
                    }
                ]
            },
            {
                "id": "dark_kin",
                "name": "Dark-kin",
                "traits": [
                    {
                        "name": "Enhanced Transmorphic Abilities",
                        "description": "You can use Body of Vapor an additional time per day."
                    },
                    {
                        "name": "Blend with Shadows",
                        "description": "Once per short rest, you may take on a translucent, shadowy form for 1 minute, gaining resistance to nonmagical bludgeoning, piercing, and slashing damage."
                    },
                    {
                        "name": "Shadowmeld Reflex",
                        "description": "When you use Umbral Jaunt, you can temporarily meld into an ally's shadow, occupying the same space as them for 1 round."
                    }
                ]
            }
        ]
    },
    {
        "id": "tanukijin",
        "name": "Tanukijin",
        "size": "Small",
        "base_speed": 35,
        "ability_score_increases": {
            "dexterity": 2,
            "charisma": 1
        },
        "traits": [
            {
                "name": "Trickster's Grace",
                "description": "You gain proficiency in the Stealth and Sleight of Hand skills."
            },
            {
                "name": "Mischievous Luck",
                "description": "Once per short rest, if you fail a Dexterity saving throw, you can reroll the check and use the new result."
            },
            {
                "name": "Illusory Shift",
                "description": "As a bonus action once per long rest, you can briefly alter your appearance to gain advantage on a Charisma (Deception) or Dexterity (Acrobatics) check."
            }
        ],
        "languages": ["Common", "Choice"],
        "subraces": [
            {
                "id": "mystic_tanuki",
                "name": "Mystic Tanuki",
                "ability_score_increases": {
                    "intelligence": 1
                },
                "traits": [
                    {
                        "name": "Arcane Trickery",
                        "description": "You know one cantrip of your choice from the bard or sorcerer spell list. Charisma is your spellcasting ability for this cantrip."
                    },
                    {
                        "name": "Minor Illusionist",
                        "description": "You have advantage on Intelligence (Investigation) checks when searching for magical effects or hidden enchantments."
                    }
                ]
            },
            {
                "id": "wandering_tanuki",
                "name": "Wandering Tanuki",
                "ability_score_increases": {
                    "wisdom": 1
                },
                "traits": [
                    {
                        "name": "Pathfinder's Instinct",
                        "description": "You gain proficiency in the Survival skill and have advantage on Wisdom (Perception) checks when navigating natural environments."
                    },
                    {
                        "name": "Fleet Footed",
                        "description": "Your base walking speed increases to 40 feet when traveling in expansive or rugged terrain."
                    }
                ]
            },
            {
                "id": "gleaming_tanuki",
                "name": "Gleaming Tanuki",
                "ability_score_increases": {
                    "charisma": 1
                },
                "traits": [
                    {
                        "name": "Sparkling Focus",
                        "description": "You have a keen eye for all things glimmering. You gain a +2 bonus on Investigation checks related to appraising or locating valuable or magical items."
                    },
                    {
                        "name": "Treasure's Allure",
                        "description": "Once per short rest, you can use a bonus action to gain advantage on an Investigation check specifically aimed at detecting hidden treasures, secret compartments, or enchanted artifacts."
                    }
                ]
            }
        ]
    },
    {
        "id": "foxfolk",
        "name": "Foxfolk",
        "size": "Small",
        "base_speed": 35,
        "ability_score_increases": {
            "dexterity": 2,
            "charisma": 1
        },
        "traits": [
            {
                "name": "Keen Senses",
                "description": "You gain proficiency in the Perception and Stealth skills."
            },
            {
                "name": "Natural Camouflage",
                "description": "When in natural environments, you have advantage on Dexterity (Stealth) checks to hide amidst foliage, rain, snow, or other natural phenomena."
            }
        ],
        "languages": ["Common", "Choice"],
        "subraces": [
            {
                "id": "emberclaw_fox",
                "name": "Emberclaw Fox",
                "ability_score_increases": {
                    "constitution": 1
                },
                "traits": [
                    {
                        "name": "Arcane Strike",
                        "description": "Once per short rest, when you take the Attack action, you can channel mystical energy into a melee weapon attack, adding 1d6 fire or radiant damage and potentially stunning the target."
                    },
                    {
                        "name": "Blazing Aura",
                        "description": "When you are in dim light or darkness, your presence burns with latent magical energy, granting you resistance to fire damage."
                    }
                ]
            },
            {
                "id": "arcane_fox",
                "name": "Arcane Fox",
                "ability_score_increases": {
                    "intelligence": 1
                },
                "traits": [
                    {
                        "name": "Innate Spellcasting",
                        "description": "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for this cantrip."
                    },
                    {
                        "name": "Spell Scholar",
                        "description": "You gain proficiency in the Arcana skill with double proficiency bonus for magical lore checks."
                    },
                    {
                        "name": "Focused Mind",
                        "description": "You have advantage on saving throws against spells or effects that would charm or frighten you."
                    }
                ]
            },
            {
                "id": "moonshadow_fox",
                "name": "Moonshadow Fox",
                "ability_score_increases": {
                    "charisma": 1
                },
                "traits": [
                    {
                        "name": "Shifting Shadows",
                        "description": "As a bonus action, you can dissolve into shadows, gaining advantage on Stealth checks until your next turn."
                    },
                    {
                        "name": "Quick Wit",
                        "description": "You gain proficiency in the Deception and Insight skills."
                    },
                    {
                        "name": "Trickster's Prank",
                        "description": "When you successfully deceive a hostile creature in combat, you can grant an ally a +2 bonus on attack rolls against that creature."
                    }
                ]
            }
        ]
    },
     {
        "id": "human",
        "name": "Human",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {
            "strength": 1,
            "dexterity": 1,
            "constitution": 1,
            "intelligence": 1,
            "wisdom": 1,
            "charisma": 1
        },
        "traits": [
            {
                "name": "Languages",
                "description": "You can speak, read, and write Common and one extra language of your choice."
            }
        ],
        "languages": ["Common", "Choice"],
        "subraces": []
    },
    {
        "id": "variant_human",
        "name": "Human (Variant)",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {
            "choice1": 1,
            "choice2": 1
        },
        "traits": [
            {
                "name": "Skills",
                "description": "You gain proficiency in one skill of your choice."
            },
            {
                "name": "Feat",
                "description": "You gain one feat of your choice."
            },
            {
                "name": "Languages",
                "description": "You can speak, read, and write Common and one extra language of your choice."
            }
        ],
        "languages": ["Common", "Choice"],
        "subraces": []
    },
    {
        "id": "dragonborn",
        "name": "Dragonborn",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {
            "strength": 2,
            "charisma": 1
        },
        "traits": [
            {
                "name": "Draconic Ancestry",
                "description": "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type."
            },
            {
                "name": "Breath Weapon",
                "description": "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest."
            },
            {
                "name": "Damage Resistance",
                "description": "You have resistance to the damage type associated with your draconic ancestry."
            }
        ],
        "languages": ["Common", "Draconic"],
        "subraces": []
    },
    {
        "id": "dwarf",
        "name": "Dwarf",
        "size": "Medium",
        "base_speed": 25,
        "ability_score_increases": {
            "constitution": 2
        },
        "traits": [
            {
                "name": "Darkvision",
                "description": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                "name": "Dwarven Resilience",
                "description": "You have advantage on saving throws against poison, and you have resistance against poison damage."
            },
            {
                "name": "Dwarven Combat Training",
                "description": "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."
            },
            {
                "name": "Tool Proficiency",
                "description": "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools."
            },
            {
                "name": "Stonecunning",
                "description": "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
            }
        ],
        "languages": ["Common", "Dwarvish"],
        "subraces": [
            {
                "id": "hill_dwarf",
                "name": "Hill Dwarf",
                "ability_score_increases": {
                    "wisdom": 1
                },
                "traits": [
                    {
                        "name": "Dwarven Toughness",
                        "description": "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
                    }
                ]
            },
            {
                "id": "mountain_dwarf",
                "name": "Mountain Dwarf",
                "ability_score_increases": {
                    "strength": 2
                },
                "traits": [
                    {
                        "name": "Dwarven Armor Training",
                        "description": "You have proficiency with light and medium armor."
                    }
                ]
            }
        ]
    },
    {
        "id": "elf",
        "name": "Elf",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {
            "dexterity": 2
        },
        "traits": [
            {
                "name": "Darkvision",
                "description": "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                "name": "Keen Senses",
                "description": "You have proficiency in the Perception skill."
            },
            {
                "name": "Fey Ancestry",
                "description": "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
            },
            {
                "name": "Trance",
                "description": "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
            }
        ],
        "languages": ["Common", "Elvish"],
        "subraces": [
            {
                "id": "high_elf",
                "name": "High Elf",
                "ability_score_increases": {
                    "intelligence": 1
                },
                "traits": [
                    {
                        "name": "Elf Weapon Training",
                        "description": "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                    },
                    {
                        "name": "Cantrip",
                        "description": "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."
                    },
                    {
                        "name": "Extra Language",
                        "description": "You can speak, read, and write one extra language of your choice."
                    }
                ]
            },
            {
                "id": "wood_elf",
                "name": "Wood Elf",
                "ability_score_increases": {
                    "wisdom": 1
                },
                "traits": [
                    {
                        "name": "Elf Weapon Training",
                        "description": "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                    },
                    {
                        "name": "Fleet of Foot",
                        "description": "Your base walking speed increases to 35 feet."
                    },
                    {
                        "name": "Mask of the Wild",
                        "description": "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
                    }
                ],
                "base_speed": 35
            },
            {
                "id": "drow",
                "name": "Drow",
                "ability_score_increases": {
                    "charisma": 1
                },
                "traits": [
                    {
                        "name": "Superior Darkvision",
                        "description": "Your darkvision has a radius of 120 feet."
                    },
                    {
                        "name": "Sunlight Sensitivity",
                        "description": "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
                    },
                    {
                        "name": "Drow Magic",
                        "description": "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
                    },
                    {
                        "name": "Drow Weapon Training",
                        "description": "You have proficiency with rapiers, shortswords, and hand crossbows."
                    }
                ]
            }
        ]
    },
    {
        "id": "gnome",
        "name": "Gnome",
        "size": "Small",
        "base_speed": 25,
        "ability_score_increases": {
            "intelligence": 2
        },
        "traits": [
            {
                "name": "Darkvision",
                "description": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                "name": "Gnome Cunning",
                "description": "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
            }
        ],
        "languages": ["Common", "Gnomish"],
        "subraces": [
            {
                "id": "forest_gnome",
                "name": "Forest Gnome",
                "ability_score_increases": {
                    "dexterity": 1
                },
                "traits": [
                    {
                        "name": "Natural Illusionist",
                        "description": "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it."
                    },
                    {
                        "name": "Speak with Small Beasts",
                        "description": "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets."
                    }
                ]
            },
            {
                "id": "rock_gnome",
                "name": "Rock Gnome",
                "ability_score_increases": {
                    "constitution": 1
                },
                "traits": [
                    {
                        "name": "Artificer's Lore",
                        "description": "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
                    },
                    {
                        "name": "Tinker",
                        "description": "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options: Clockwork Toy, Fire Starter, or Music Box."
                    }
                ]
            }
        ]
    },
    {
        "id": "half_elf",
        "name": "Half-Elf",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {
            "charisma": 2,
            "choice1": 1,
            "choice2": 1
        },
        "traits": [
            {
                "name": "Darkvision",
                "description": "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                "name": "Fey Ancestry",
                "description": "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
            },
            {
                "name": "Skill Versatility",
                "description": "You gain proficiency in two skills of your choice."
            }
        ],
        "languages": ["Common", "Elvish", "Choice"],
        "subraces": []
    },
    {
        "id": "half_orc",
        "name": "Half-Orc",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {
            "strength": 2,
            "constitution": 1
        },
        "traits": [
            {
                "name": "Darkvision",
                "description": "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                "name": "Menacing",
                "description": "You gain proficiency in the Intimidation skill."
            },
            {
                "name": "Relentless Endurance",
                "description": "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."
            },
            {
                "name": "Savage Attacks",
                "description": "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
            }
        ],
        "languages": ["Common", "Orc"],
        "subraces": []
    },
    {
        "id": "halfling",
        "name": "Halfling",
        "size": "Small",
        "base_speed": 25,
        "ability_score_increases": {
            "dexterity": 2
        },
        "traits": [
            {
                "name": "Lucky",
                "description": "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
            },
            {
                "name": "Brave",
                "description": "You have advantage on saving throws against being frightened."
            },
            {
                "name": "Halfling Nimbleness",
                "description": "You can move through the space of any creature that is of a size larger than yours."
            }
        ],
        "languages": ["Common", "Halfling"],
        "subraces": [
            {
                "id": "lightfoot_halfling",
                "name": "Lightfoot Halfling",
                "ability_score_increases": {
                    "charisma": 1
                },
                "traits": [
                    {
                        "name": "Naturally Stealthy",
                        "description": "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
                    }
                ]
            },
            {
                "id": "stout_halfling",
                "name": "Stout Halfling",
                "ability_score_increases": {
                    "constitution": 1
                },
                "traits": [
                    {
                        "name": "Stout Resilience",
                        "description": "You have advantage on saving throws against poison, and you have resistance against poison damage."
                    }
                ]
            }
        ]
    },
    {
        "id": "tiefling",
        "name": "Tiefling",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {
            "charisma": 2,
            "intelligence": 1
        },
        "traits": [
            {
                "name": "Darkvision",
                "description": "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                "name": "Hellish Resistance",
                "description": "You have resistance to fire damage."
            },
            {
                "name": "Infernal Legacy",
                "description": "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
            }
        ],
        "languages": ["Common", "Infernal"],
        "subraces": []
    },
    {
        "id": "kalashtar",
        "name": "Kalashtar",
        "alternate_names": ["The Inspired", "Dream Speakers"],
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {
            "wisdom": 2,
            "charisma": 1
        },
        "traits": [
            {
                "name": "Dual Mind",
                "description": "You have advantage on all Wisdom saving throws."
            },
            {
                "name": "Mental Discipline",
                "description": "You have resistance to psychic damage."
            },
            {
                "name": "Mind Link",
                "description": "You can speak telepathically to any creature you can see, provided the creature is within a number of feet of you equal to 10 times your level (minimum of 60 feet). You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language. When you're using this trait to speak telepathically to a creature, you can use your action to give that creature the ability to speak telepathically with you for 1 hour or until you end this effect as an action. To use this ability, the creature must be able to see you and must be within this trait's range. You can give this ability to only one creature at a time; giving it to a creature takes it away from another creature who has it."
            },
            {
                "name": "Severed from Dreams",
                "description": "Kalashtar sleep, but they don't connect to the plane of dreams as other creatures do. Instead, their minds draw from their kalashtar spirit while they sleep, creating a personal dreamscape. A kalashtar thus sleeps, but does not dream in the way other creatures do. A kalashtar can choose to remain aware of their surroundings while sleeping, similar to an elf's Trance ability, but if they do so, they gain no benefit from the rest."
            }
        ],
        "languages": ["Common", "Quori", "Choice"],
        "subraces": []
    },
    {
        "id": "aasimar_2024",
        "name": "Aasimar",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {},
        "traits": [
            {
                "name": "Celestial Resistance",
                "description": "You have resistance to necrotic damage and radiant damage."
            },
            {
                "name": "Darkvision",
                "description": "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
            },
            {
                "name": "Healing Hands",
                "description": "As an action, you can touch a creature and roll a number of d4s equal to your Proficiency Bonus. The creature regains a number of Hit Points equal to the total rolled. Once you use this trait, you can't use it again until you finish a Long Rest."
            },
            {
                "name": "Light Bearer",
                "description": "You know the Light cantrip. Charisma is your spellcasting ability for it."
            },
            {
                "name": "Celestial Revelation",
                "description": "When you reach 3rd level, choose one of the revelation options below. Thereafter, you can use a Bonus Action to unleash the celestial energy within yourself, gaining the benefits of that revelation. Your transformation lasts for 1 minute or until you end it as a Bonus Action. While transformed, you shed bright light in a 10-foot radius and dim light for an additional 10 feet. Once you transform using your revelation, you can't use it again until you finish a Long Rest."
            }
        ],
        "languages": ["Common", "Celestial"],
        "subraces": [
            {
                "id": "protector_aasimar",
                "name": "Protector Revelation",
                "traits": [
                    {
                        "name": "Protector Revelation",
                        "description": "Spectral wings sprout from your back, giving you a flying speed of 30 feet."
                    }
                ]
            },
            {
                "id": "scourge_aasimar",
                "name": "Scourge Revelation",
                "traits": [
                    {
                        "name": "Scourge Revelation",
                        "description": "Your transformation causes a searing light to radiate from you. At the end of each of your turns while transformed, you and each creature within 10 feet of you take radiant damage equal to your Proficiency Bonus. You don't take this damage if you're incapacitated."
                    }
                ]
            },
            {
                "id": "fallen_aasimar",
                "name": "Fallen Revelation",
                "traits": [
                    {
                        "name": "Fallen Revelation",
                        "description": "You can cause fear in others. At the start of each of your turns while transformed, each creature within 10 feet of you that can see you must succeed on a Wisdom saving throw (DC = 8 + your Proficiency Bonus + your Charisma modifier) or become Frightened of you until the start of your next turn."
                    }
                ]
            }
        ]
    },
    {
        "id": "dragonborn_2024",
        "name": "Dragonborn",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {},
        "traits": [
            {
                "name": "Draconic Ancestry",
                "description": "You have a draconic ancestor or origin. Choose one type of dragon from the Draconic Ancestor table. This choice determines the damage type and area of effect of your Breath Weapon trait, as well as the type of your Damage Resistance trait."
            },
            {
                "name": "Breath Weapon",
                "description": "When you take the Attack action, you can replace one of your attacks with an exhalation of draconic energy in either a 15-foot cone or a 30-foot line that is 5 feet wide (your choice). Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your Proficiency Bonus). On a failed save, the creature takes 1d10 damage of the type associated with your Draconic Ancestry. On a successful save, it takes half as much damage. This damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
            },
            {
                "name": "Damage Resistance",
                "description": "You have resistance to the damage type associated with your Draconic Ancestry."
            },
            {
                "name": "Draconic Language",
                "description": "You instinctively know the language of dragons. You can speak, read, and write Draconic."
            }
        ],
        "languages": ["Common", "Draconic"],
        "subraces": [
            {
                "id": "chromatic_dragonborn",
                "name": "Chromatic Dragonborn",
                "traits": [
                    {
                        "name": "Chromatic Warding",
                        "description": "Starting at 5th level, as an action, you can channel your draconic energy to protect yourself. For 1 minute, you become immune to the damage type associated with your Draconic Ancestry. Once you use this trait, you can't do so again until you finish a Long Rest."
                    }
                ]
            },
            {
                "id": "metallic_dragonborn",
                "name": "Metallic Dragonborn",
                "traits": [
                    {
                        "name": "Metallic Breath Weapon",
                        "description": "At 5th level, you gain a second breath weapon. When you take the Attack action, you can replace one of your attacks with an exhalation in either a 15-foot cone or a 30-foot line that is 5 feet wide (your choice). Each creature in that area must succeed on a saving throw against your Breath Weapon save DC. The save type and effect depend on which type of breath you use:\n\nEnervating Breath. A creature that fails its Constitution saving throw becomes Incapacitated until the start of your next turn.\n\nRepulsion Breath. A creature that fails its Strength saving throw is pushed 20 feet away from you."
                    }
                ]
            },
            {
                "id": "gem_dragonborn",
                "name": "Gem Dragonborn",
                "traits": [
                    {
                        "name": "Psionic Mind",
                        "description": "You can telepathically speak to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic messages, but the creature must be able to understand at least one language to comprehend these messages."
                    },
                    {
                        "name": "Gem Flight",
                        "description": "Starting at 5th level, you can use a bonus action to manifest spectral wings on your body. These wings last for 1 minute. For the duration, you gain a flying speed equal to your walking speed. Once you use this trait, you can't do so again until you finish a Long Rest."
                    }
                ]
            }
        ]
    },
    {
        "id": "dwarf_2024",
        "name": "Dwarf",
        "size": "Medium",
        "base_speed": 25,
        "ability_score_increases": {},
        "traits": [
            {
                "name": "Darkvision",
                "description": "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
            },
            {
                "name": "Dwarven Resilience",
                "description": "You have advantage on saving throws against poison, and you have resistance against poison damage."
            },
            {
                "name": "Dwarven Toughness",
                "description": "Your hit point maximum increases by 1, and it increases by 1 again whenever you gain a level."
            },
            {
                "name": "Forge Wise",
                "description": "Your divine creator gave you an intuitive understanding of how to craft with stone and metal, granting you the following benefits:\n• You gain tool proficiency with one of the following options of your choice: mason's tools, smith's tools, or tinker's tools.\n• Whenever you make an Intelligence (History) check related to the origin of stonework or metalwork, you are considered proficient in the History skill and add double your Proficiency Bonus to the check, instead of your normal Proficiency Bonus."
            },
            {
                "name": "Stonecunning",
                "description": "As a Bonus Action, you gain Tremorsense with a range of 60 feet for 10 minutes. Tremorsense enables you to detect and pinpoint the origin of vibrations, provided that you and whatever you're detecting are in contact with the same solid surface, such as the ground. Tremorsense can't be used to detect flying or incorporeal creatures. You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
            }
        ],
        "languages": ["Common", "Dwarvish"],
        "subraces": [
            {
                "id": "hill_dwarf_2024",
                "name": "Hill Dwarf",
                "traits": [
                    {
                        "name": "Hill Dwarf Weapon Training",
                        "description": "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."
                    }
                ]
            },
            {
                "id": "mountain_dwarf_2024",
                "name": "Mountain Dwarf",
                "traits": [
                    {
                        "name": "Dwarven Armor Training",
                        "description": "You have proficiency with light and medium armor."
                    },
                    {
                        "name": "Mountain Dwarf Weapon Training",
                        "description": "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."
                    }
                ]
            }
        ]
    },
    {
        "id": "elf_2024",
        "name": "Elf",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {},
        "traits": [
            {
                "name": "Darkvision",
                "description": "You can see in dim light within a distance of 60 feet as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                "name": "Elven Lineage",
                "description": "You are part of an Elven lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table: Drow, High Elf, or Wood Elf."
            },
            {
                "name": "Fey Ancestry",
                "description": "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
            },
            {
                "name": "Keen Senses",
                "description": "You have proficiency in the Perception skill."
            },
            {
                "name": "Trance",
                "description": "You don't need to sleep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness."
            }
        ],
        "languages": ["Common", "Elvish"],
        "subraces": [
            {
                "id": "high_elf_2024",
                "name": "High Elf",
                "traits": [
                    {
                        "name": "Cantrip",
                        "description": "You know one cantrip of your choice from the Arcane spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this lineage)."
                    },
                    {
                        "name": "Elf Weapon Training",
                        "description": "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                    },
                    {
                        "name": "Extra Language",
                        "description": "You can speak, read, and write one additional language of your choice."
                    }
                ]
            },
            {
                "id": "wood_elf_2024",
                "name": "Wood Elf",
                "traits": [
                    {
                        "name": "Elf Weapon Training",
                        "description": "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                    },
                    {
                        "name": "Fleet of Foot",
                        "description": "Your base walking speed increases to 35 feet."
                    },
                    {
                        "name": "Mask of the Wild",
                        "description": "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
                    }
                ],
                "base_speed": 35
            },
            {
                "id": "drow_2024",
                "name": "Drow",
                "traits": [
                    {
                        "name": "Drow Magic",
                        "description": "You know the Dancing Lights cantrip. Starting at 3rd level, you can cast the Faerie Fire spell with this trait. Starting at 5th level, you can also cast the Darkness spell with it. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a Long Rest. You can also cast these spells using spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells (choose when you select this lineage)."
                    },
                    {
                        "name": "Drow Weapon Training",
                        "description": "You have proficiency with rapiers, shortswords, and hand crossbows."
                    },
                    {
                        "name": "Keen Hearing",
                        "description": "You have advantage on Wisdom (Perception) checks that rely on hearing."
                    },
                    {
                        "name": "Superior Darkvision",
                        "description": "Your darkvision has a range of 120 feet."
                    }
                ]
            }
        ]
    },
    {
        "id": "gnome_2024",
        "name": "Gnome",
        "size": "Small",
        "base_speed": 25,
        "ability_score_increases": {},
        "traits": [
            {
                "name": "Darkvision",
                "description": "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
            },
            {
                "name": "Gnome Cunning",
                "description": "You have advantage on Intelligence, Wisdom, and Charisma saving throws."
            },
            {
                "name": "Gnomish Lineage",
                "description": "You are part of a gnomish lineage that grants you supernatural abilities. Choose a lineage: Deep Gnome (Svirfneblin), Forest Gnome, or Rock Gnome."
            }
        ],
        "languages": ["Common", "Gnomish"],
        "subraces": [
            {
                "id": "forest_gnome_2024",
                "name": "Forest Gnome",
                "traits": [
                    {
                        "name": "Illusion Magic",
                        "description": "You know the Minor Illusion cantrip. Intelligence is your spellcasting ability for it."
                    },
                    {
                        "name": "Speak with Small Beasts",
                        "description": "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts."
                    }
                ]
            },
            {
                "id": "rock_gnome_2024",
                "name": "Rock Gnome",
                "traits": [
                    {
                        "name": "Artificer's Lore",
                        "description": "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your Proficiency Bonus, instead of any Proficiency Bonus you normally apply."
                    },
                    {
                        "name": "Tinker",
                        "description": "You have proficiency with tinker's tools. Using those tools, you can spend 1 hour and 10 GP worth of materials to construct a Tiny clockwork device (AC 5, 1 HP). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. Each device must be Small or smaller and can occupy a space no larger than 3 feet on a side. When you create a device, choose one of the following options:\n\nClockwork Toy. This toy is a Small clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.\n\nFire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.\n\nMusic Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it's closed."
                    }
                ]
            },
            {
                "id": "deep_gnome_2024",
                "name": "Deep Gnome (Svirfneblin)",
                "traits": [
                    {
                        "name": "Gift of Stone",
                        "description": "Your connection to stone gives you advantage on Dexterity (Stealth) checks when trying to hide in a rocky environment."
                    },
                    {
                        "name": "Svirfneblin Magic",
                        "description": "You know the Mage Hand cantrip, and Intelligence is your spellcasting ability for it. You can also cast the Disguise Self spell with this trait once. Starting at 3rd level, you can cast the Nondetection spell on yourself with this trait. You regain the ability to cast these spells with this trait when you finish a Long Rest. You can also cast these spells using spell slots you have."
                    },
                    {
                        "name": "Superior Darkvision",
                        "description": "Your darkvision has a range of 120 feet."
                    }
                ]
            }
        ]
    },
    {
        "id": "half_elf_2024",
        "name": "Half-Elf",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {},
        "traits": [
            {
                "name": "Darkvision",
                "description": "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
            },
            {
                "name": "Fey Ancestry",
                "description": "You have advantage on saving throws against being Charmed, and magic can't put you to sleep."
            },
            {
                "name": "Skill Versatility",
                "description": "You gain proficiency in two skills of your choice."
            },
            {
                "name": "Elven Lineage",
                "description": "You have an Elven lineage. Choose the High Elf, Wood Elf, or Drow lineage. Your choice gives you access to that lineage's Elven Legacy."
            }
        ],
        "languages": ["Common", "Elvish", "Choice"],
        "subraces": [
            {
                "id": "high_elf_lineage",
                "name": "High Elf Lineage",
                "traits": [
                    {
                        "name": "Elven Legacy (High Elf)",
                        "description": "You know one cantrip of your choice from the Arcane spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this lineage)."
                    }
                ]
            },
            {
                "id": "wood_elf_lineage",
                "name": "Wood Elf Lineage",
                "traits": [
                    {
                        "name": "Elven Legacy (Wood Elf)",
                        "description": "You have proficiency in either the Animal Handling, Medicine, Nature, Perception, or Survival skill (your choice)."
                    }
                ]
            },
            {
                "id": "drow_lineage",
                "name": "Drow Lineage",
                "traits": [
                    {
                        "name": "Elven Legacy (Drow)",
                        "description": "You know the Dancing Lights cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this lineage)."
                    }
                ]
            }
        ]
    },
    {
        "id": "halfling_2024",
        "name": "Halfling",
        "size": "Small",
        "base_speed": 30,
        "ability_score_increases": {},
        "traits": [
            {
                "name": "Brave",
                "description": "You have advantage on saving throws against being Frightened."
            },
            {
                "name": "Halfling Luck",
                "description": "When you roll a 1 on the d20 of a d20 Test, you can reroll the die, and you must use the new roll."
            },
            {
                "name": "Halfling Nimbleness",
                "description": "You can move through the space of any creature that is of a size larger than yours, but you can't end your turn in its space."
            },
            {
                "name": "Naturally Stealthy",
                "description": "You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you."
            }
        ],
        "languages": ["Common", "Halfling"],
        "subraces": [
            {
                "id": "lightfoot_halfling_2024",
                "name": "Lightfoot Halfling",
                "traits": [
                    {
                        "name": "Naturally Stealthy",
                        "description": "You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you."
                    }
                ]
            },
            {
                "id": "stout_halfling_2024",
                "name": "Stout Halfling",
                "traits": [
                    {
                        "name": "Stout Resilience",
                        "description": "You have advantage on saving throws against poison, and you have resistance against poison damage."
                    }
                ]
            },
            {
                "id": "ghostwise_halfling_2024",
                "name": "Ghostwise Halfling",
                "traits": [
                    {
                        "name": "Silent Speech",
                        "description": "You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time."
                    }
                ]
            }
        ]
    },
    {
        "id": "orc_2024",
        "name": "Orc",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {},
        "traits": [
            {
                "name": "Adrenaline Rush",
                "description": "You can take the Dash action as a Bonus Action. When you do so, you gain a number of Temporary Hit Points equal to your Proficiency Bonus. You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
            },
            {
                "name": "Darkvision",
                "description": "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
            },
            {
                "name": "Powerful Build",
                "description": "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
            },
            {
                "name": "Relentless Endurance",
                "description": "When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. Once you use this trait, you can't do so again until you finish a Long Rest."
            }
        ],
        "languages": ["Common", "Orc"],
        "subraces": []
    },
    {
        "id": "tiefling_2024",
        "name": "Tiefling",
        "size": "Medium",
        "base_speed": 30,
        "ability_score_increases": {},
        "traits": [
            {
                "name": "Darkvision",
                "description": "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
            },
            {
                "name": "Otherworldly Presence",
                "description": "You know the Thaumaturgy cantrip and can cast it without any material components. Charisma is your spellcasting ability for this spell."
            },
            {
                "name": "Fiendish Legacy",
                "description": "You have a fiendish lineage that grants you supernatural abilities. Choose the Abyssal, Chthonic, or Infernal Legacy. Charisma is your spellcasting ability for the spells gained from this trait. When you cast them with this trait, they don't require either Verbal or Material components. You can also cast these spells using your own spell slots of the appropriate level. The spells are cast at the lowest possible level."
            }
        ],
        "languages": ["Common", "Choice"],
        "subraces": [
            {
                "id": "abyssal_tiefling",
                "name": "Abyssal Legacy",
                "traits": [
                    {
                        "name": "Abyssal Legacy",
                        "description": "You know the Thaumaturgy cantrip. Starting at 3rd level, you can cast the Arms of Hadar spell once with this trait and regain the ability to do so when you finish a Long Rest. Starting at 5th level, you can cast the Alter Self spell once with this trait, and you regain the ability to do so when you finish a Long Rest."
                    }
                ]
            },
            {
                "id": "chthonic_tiefling",
                "name": "Chthonic Legacy",
                "traits": [
                    {
                        "name": "Chthonic Legacy",
                        "description": "You know the Thaumaturgy cantrip. Starting at 3rd level, you can cast the Dissonant Whispers spell once with this trait and regain the ability to do so when you finish a Long Rest. Starting at 5th level, you can cast the Darkness spell once with this trait, and you regain the ability to do so when you finish a Long Rest."
                    }
                ]
            },
            {
                "id": "infernal_tiefling",
                "name": "Infernal Legacy",
                "traits": [
                    {
                        "name": "Infernal Legacy",
                        "description": "You know the Thaumaturgy cantrip. Starting at 3rd level, you can cast the Hellish Rebuke spell (1st-level version) once with this trait and regain the ability to do so when you finish a Long Rest. Starting at 5th level, you can cast the Darkness spell once with this trait, and you regain the ability to do so when you finish a Long Rest."
                    },
                    {
                        "name": "Hellish Resistance",
                        "description": "You have resistance to fire damage."
                    }
                ]
            }
        ]
    }
];
    
    // Initialize race dropdown with hardcoded data
    populateRaceDropdown();
}

// Populate the race dropdown
function populateRaceDropdown() {
    const raceSelect = document.getElementById('race-select');
    
    // Clear existing options except the first one
    while (raceSelect.options.length > 1) {
        raceSelect.remove(1);
    }
    
    // Add each race to the dropdown
    racesData.forEach(race => {
        const option = document.createElement('option');
        option.value = race.id;
        option.textContent = race.name;
        raceSelect.appendChild(option);
    });
}

// Update subrace options based on selected race
function updateSubraceOptions() {
    const raceSelect = document.getElementById('race-select');
    const subraceSelect = document.getElementById('subrace-select');
    const selectedRaceId = raceSelect.value;
    
    // Clear existing subrace options
    while (subraceSelect.options.length > 1) {
        subraceSelect.remove(1);
    }
    
    // Reset the subrace value
    subraceSelect.value = "";
    selectedSubrace = null;
    
    // Clear traits display if no race is selected
    if (!selectedRaceId) {
        document.getElementById('race-traits').innerHTML = "";
        selectedRace = null;
        return;
    }
    
    // Find the selected race
    selectedRace = racesData.find(race => race.id === selectedRaceId);
    if (!selectedRace) return;
    
    // Update the race traits display
    displayRaceTraits();
    
    // Add subraces if available
    if (selectedRace.subraces && selectedRace.subraces.length > 0) {
        selectedRace.subraces.forEach(subrace => {
            const option = document.createElement('option');
            option.value = subrace.id;
            option.textContent = subrace.name;
            subraceSelect.appendChild(option);
        });
        
        // Add event listener for subrace selection
        subraceSelect.addEventListener('change', updateSubraceTraits);
    } else {
        // Add "None" option if no subraces
        const option = document.createElement('option');
        option.value = "none";
        option.textContent = "None Available";
        subraceSelect.appendChild(option);
    }
}

// Update traits display when subrace is selected
function updateSubraceTraits() {
    const subraceSelect = document.getElementById('subrace-select');
    const selectedSubraceId = subraceSelect.value;
    
    if (!selectedSubraceId || selectedSubraceId === "none") {
        selectedSubrace = null;
        displayRaceTraits(); // Display just the race traits
        return;
    }
    
    // Find the selected subrace
    selectedSubrace = selectedRace.subraces.find(subrace => subrace.id === selectedSubraceId);
    if (!selectedSubrace) return;
    
    // Update the traits display with both race and subrace traits
    displayRaceTraits();
}

// Display race and subrace traits
function displayRaceTraits() {
    const traitsDiv = document.getElementById('race-traits');
    if (!selectedRace) {
        traitsDiv.innerHTML = "<p>Select a race to see traits.</p>";
        return;
    }
    
    let traitsHTML = `<div class="race-info">
        <p><strong>Size:</strong> ${selectedRace.size}</p>
        <p><strong>Speed:</strong> ${selectedRace.base_speed} feet</p>
        <p><strong>Languages:</strong> ${selectedRace.languages.join(", ")}</p>
    </div>`;
    
    // Add ability score increases
    if (selectedRace.ability_score_increases) {
        traitsHTML += `<div class="ability-increases">
            <p><strong>Ability Score Increases:</strong></p>
            <ul>`;
        
        for (const [ability, value] of Object.entries(selectedRace.ability_score_increases)) {
            const abilityName = ability.charAt(0).toUpperCase() + ability.slice(1);
            traitsHTML += `<li>${abilityName}: ${value > 0 ? '+' : ''}${value}</li>`;
        }
        
        traitsHTML += `</ul></div>`;
    }
      // Add race traits
    traitsHTML += `<div class="traits-list">
        <p><strong>Racial Traits:</strong></p>
        <ul>`;
    
    selectedRace.traits.forEach(trait => {
        if (trait.name && trait.description) {
            traitsHTML += `<li><strong>${trait.name}:</strong> ${trait.description}</li>`;
        } else if (trait.description) {
            traitsHTML += `<li>${trait.description}</li>`;
        }
    });
    
    traitsHTML += `</ul></div>`;
    
    // Add subrace traits if selected
    if (selectedSubrace) {
        traitsHTML += `<div class="subrace-info">
            <h4>${selectedSubrace.name} Traits</h4>`;
        
        // Add subrace ability score increases if available
        if (selectedSubrace.ability_score_increases) {
            traitsHTML += `<div class="ability-increases">
                <p><strong>Additional Ability Score Increases:</strong></p>
                <ul>`;
            
            for (const [ability, value] of Object.entries(selectedSubrace.ability_score_increases)) {
                const abilityName = ability.charAt(0).toUpperCase() + ability.slice(1);
                traitsHTML += `<li>${abilityName}: ${value > 0 ? '+' : ''}${value}</li>`;
            }
            
            traitsHTML += `</ul></div>`;
        }
        
        // Add subrace speed if different from base race
        if (selectedSubrace.base_speed && selectedSubrace.base_speed !== selectedRace.base_speed) {
            traitsHTML += `<p><strong>Speed:</strong> ${selectedSubrace.base_speed} feet</p>`;
        }
        
        // Add subrace size if different from base race
        if (selectedSubrace.size && selectedSubrace.size !== selectedRace.size) {
            traitsHTML += `<p><strong>Size:</strong> ${selectedSubrace.size}</p>`;
        }
          // Add subrace traits
        traitsHTML += `<div class="traits-list">
            <p><strong>Subrace Traits:</strong></p>
            <ul>`;
        
        selectedSubrace.traits.forEach(trait => {
            if (trait.name && trait.description) {
                traitsHTML += `<li><strong>${trait.name}:</strong> ${trait.description}</li>`;
            } else if (trait.description) {
                traitsHTML += `<li>${trait.description}</li>`;
            }
        });
        
        traitsHTML += `</ul></div></div>`;
    }
    
    traitsDiv.innerHTML = traitsHTML;
}

// Function to display race traits in the loadout view
function displayRaceTraitsInLoadout() {
    const raceTraitsDisplay = document.getElementById('character-traits-display');
    if (!raceTraitsDisplay) return;
    
    if (!selectedRace) {
        raceTraitsDisplay.innerHTML = "<p>No race selected</p>";
        return;
    }
    
    let traitsHTML = `<h4>Racial Traits</h4><ul>`;
    
    // Base race traits
    selectedRace.traits.forEach(trait => {
        if (trait.name && trait.description) {
            traitsHTML += `<li><strong>${trait.name}:</strong> ${trait.description}</li>`;
        } else if (trait.description) {
            traitsHTML += `<li>${trait.description}</li>`;
        }
    });
    
    // Subrace traits if applicable
    if (selectedSubrace && selectedSubrace.traits) {
        traitsHTML += `<li class="subrace-divider"><strong>${selectedSubrace.name} Traits</strong></li>`;
        
        selectedSubrace.traits.forEach(trait => {
            if (trait.name && trait.description) {
                traitsHTML += `<li><strong>${trait.name}:</strong> ${trait.description}</li>`;
            } else if (trait.description) {
                traitsHTML += `<li>${trait.description}</li>`;
            }
        });
    }
    
    traitsHTML += `</ul>`;
    raceTraitsDisplay.innerHTML = traitsHTML;
}
