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
        description: "A balanced chest armor that provides moderate protection and mobility with an energy shield.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/balancedarmor.png",
        progression: [
            "<strong>Level 1:</strong> AC 14 + Dex modifier (max +2) and temporary +2 shield bonus to AC for 1 minute once per day.",
            "<strong>Level 4:</strong> Resistance to one damage type for 1 minute once per short rest.",
            "<strong>Level 7:</strong> +2 bonus to initiative rolls.",
            "<strong>Level 11:</strong> Enhanced shield bonus of +4 AC instead of +2.",
            "<strong>Level 14:</strong> Immunity to one chosen damage type."
        ]
    },  "Bulwark-Type-Frame": {
        name: "Bulwark Type Frame",
        description: "Embodying steadfast resilience, this chestpiece sacrifices nimbleness for solid defense and damage negation.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/bulwark.png",
        progression: [
            "<strong>Level 1:</strong> AC 17, Bulwark Aegis negates one damage type for 1 minute once per day, d12 hit die.",
            "<strong>Level 4:</strong> Bulwark Aegis can be used twice per day.",
            "<strong>Level 7:</strong> Passive resistance to two chosen damage types.",
            "<strong>Level 11:</strong> Critical hits reduced to normal hits during Bulwark Aegis.",
            "<strong>Level 14:</strong> Resistance to all damage types except psychic."
        ]
    },
    "Light-Type-Frame": {
        name: "Light Type Frame",
        description: "Maximizes mobility at the expense of heavy armor, designed for agile Aegisknights who prioritize speed and dexterity.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/lighttypearmor.png",
        progression: [
            "<strong>Level 1:</strong> Lower base AC, +15 ft. movement speed, +1 bonus to AC from energy field, d8 hit die.",
            "<strong>Level 4:</strong> Additional +10 ft. movement speed (total +25 ft.).",
            "<strong>Level 7:</strong> Advantage on Dexterity saving throws.",
            "<strong>Level 11:</strong> Immunity to being restrained or grappled.",
            "<strong>Level 14:</strong> Dash as a bonus action without provoking opportunity attacks once per short rest."
        ]    },    "Xtra-Hev-Composite-Frame": {
        name: "Xtra-Hev Composite Frame",
        description: "A heavy-duty frame with regenerating energy shield and enhanced defensive capabilities.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/xtrahevarmor.png",
        progression: [
            "<strong>Level 1:</strong> d10 hit die, AC 16, +1 to Constitution saves, Regen Shield grants temporary hit points.",
            "<strong>Level 4:</strong> AC increases to 17, shield regenerates 4 temporary hit points per turn.",
            "<strong>Level 7:</strong> +2 bonus to Constitution checks and increased shield capacity.",
            "<strong>Level 11:</strong> Additional shield regeneration and effective AC of 18 with full shield.",
            "<strong>Level 14:</strong> Fortress Mode increases shield capacity by 50% and reduces incoming damage."
        ]
    },
    "Soiling-Shield-Bib": {
        name: "Soiling Shield Bib",
        description: "This oversized, magically enchanted bib is designed to ward off the filth and chaos of the battlefield, ensuring that no matter how messy the combat gets, you remain pristine.",
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
        progression: [
            "<strong>Level 3:</strong> Cast Shield multiple times per day, Displacement effect once per day, +2 bonus on Stealth checks.",
            "<strong>Level 6:</strong> Invisibility for 1 minute and flying speed of 30 ft. for 30 minutes once per short rest.",
            "<strong>Level 8:</strong> Resistance to radiant and necrotic damage.",
            "<strong>Level 12:</strong> Immunity to radiant damage and teleport 60 ft. as a bonus action once per short rest."
        ]
    },    
        "Soul-Core-Manifold": {
        name: "Soul Core Manifold",
        description: "A core of elemental power granting bonus Cell Charges and elemental rebuke capabilities.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/soulcoremanifold.png",
        progression: [
            "<strong>Level 3:</strong> Two extra Cell Charges, cast Hellish Rebuke, enhanced recharge rate.",
            "<strong>Level 6:</strong> Resistance to your chosen elemental type.",
            "<strong>Level 8:</strong> Deal 2d8 elemental damage to melee attackers.",
            "<strong>Level 12:</strong> Immunity to your chosen element and reaction-based shield."
        ]
    },
    "Godhead-Shard": {
        name: "Godhead Shard",
        description: "A radiant fragment of divine essence infusing your raiment with celestial power and spellcasting.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/godheadshard.png",
        progression: [
            "<strong>Level 3:</strong> Two divine cantrips and one 1st-level divine spell, second-highest Cell Charge pool, restore charges via Religion checks.",
            "<strong>Level 6:</strong> Additional divine spell slot.",
            "<strong>Level 8:</strong> Integrate a cleric subclass feature into your armor.",
            "<strong>Level 12:</strong> Cast Divine Word once per long rest and enhanced Cell Charge restoration."
        ]
    },
    "Arcanomatrix": {
        name: "Arcanomatrix",
        description: "A nexus of arcane energy woven into your raiment, granting spellcasting abilities and magical defenses.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/arcanomatrix.png",
        progression: [
            "<strong>Level 3:</strong> Two arcane cantrips and one 1st-level arcane spell, extra Cell Charges for spells.",
            "<strong>Level 6:</strong> Integrate a wizard subclass feature.",
            "<strong>Level 8:</strong> Cast Counterspell once per long rest without expending Cell Charges.",
            "<strong>Level 12:</strong> Resistance to force damage and advantage on saves against spells."
        ]
    },
    "Luminant-Engine": {
        name: "Luminant Engine",
        description: "A radiant marvel channeling ephemeral power of illumination into tangible effects like light bolts and barriers.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/luminantengine.png",
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
        progression: [
            "<strong>Level 3:</strong> Resistance to one elemental damage type, breath weapon, and size increase to Large.",
            "<strong>Level 6:</strong> Enhanced breath weapon damage and extended transformation duration.",
            "<strong>Level 8:</strong> Second elemental variant for breath weapon and improved elemental resistance.",
            "<strong>Level 12:</strong> Boost speed and Strength during transformation."
        ]
    },    "Unstable-Fury-Core": {
        name: "Unstable Fury Core",
        description: "A volatile engine of primal might transforming aggression into destructive power with overload risks.",
        imageUrl: "https://ik.imagekit.io/owlcan/aegisknight/unstablefurycore.png",
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
        progression: [
            "<strong>Level 3:</strong> Base toxic abilities including poison effects and noxious aura.",
            "<strong>Level 6:</strong> Enhanced poison damage and expanded aura of misfortune.",
            "<strong>Level 9:</strong> Additional toxic effects with chance to inflict special conditions.",
            "<strong>Level 12:</strong> Ultimate stinking cloud ability and toxic immunity."
        ]
    }
};

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
    detailedDescription += `<div class="armor-progression"><h4>Level Progression:</h4>`;
    
    selectedArmor.progression.forEach(prog => {
        detailedDescription += `<p>${prog}</p>`;
    });
    
    detailedDescription += `</div>`;
    descriptionElement.innerHTML = detailedDescription;
}

function finalizeLoadout() {
    const selectorContainer = document.querySelector('.selector-container');
    const loadoutResults = document.getElementById('loadout-results');
    
    // Hide selector, show results
    selectorContainer.style.display = 'none';
    loadoutResults.style.display = 'block';
    
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
        } else {
            const selectedArmor = armorData[selectedValue];
            nameSpan.textContent = selectedArmor.name;
            
            // Set armor image if available
            if (selectedArmor.imageUrl) {
                imageContainer.innerHTML = `<img src="${selectedArmor.imageUrl}" alt="${selectedArmor.name}">`;
            } else {
                imageContainer.innerHTML = `<div class="armor-image-placeholder">${selectedArmor.name}</div>`;
            }
            
            // Populate progression
            let progressionHTML = "";
            selectedArmor.progression.forEach(prog => {
                progressionHTML += `<p>${prog}</p>`;
            });
            
            progressionDiv.innerHTML = progressionHTML;
            
            // Add level 5 effects (assuming level 1 and 4 effects apply at level 5)
            if (selectedArmor.progression.length >= 2) {
                // Get first effect (level 1)
                const level1Effect = selectedArmor.progression[0];
                
                // Get second effect (level 4)
                const level4Effect = selectedArmor.progression[1];
                
                // Add to level 5 effects
                level5Effects.push({
                    name: selectedArmor.name,
                    type: type,
                    level1: extractEffectDescription(level1Effect),
                    level4: extractEffectDescription(level4Effect)
                });
            }
        }
    });
    
    // Populate the level 5 effects chart
    populateLevelEffectsChart(level5Effects);
}

// Function to extract the description part from effect text
function extractEffectDescription(effectText) {
    // Extract the text after the level part (e.g., "<strong>Level 1:</strong> Some effect" -> "Some effect")
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
    loadoutResults.style.display = 'none';
}
