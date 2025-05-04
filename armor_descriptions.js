// Full text descriptions for armor pieces extracted from Aegisknight.txt
const armorFullDescriptions = {
    // Helmet options
    "Hypersensory-Scanner-Array": {
        fullDescription: "This advanced helmet is a marvel of sensory enchantment, merging arcane optics with practical battlefield awareness. Its glassy, rune-etched visor and faintly humming sensors grant you unparalleled insight into the unseen. Whether darkness or illusion conceals your foes, your vision—and your investigative prowess—remains unfaltering.",
        levelFeatures: {
            "1": "**Darkvision Bestowal:** If you do not already have it, you gain darkvision out to 60 ft., allowing you to see in nocturnal or dimly lit environments.\n**Basic Sensor:** Your helmet is equipped with a rudimentary sensor that highlights hidden or invisible creatures, functioning similarly to a \"detect invisibility\" effect. This ability can be activated once per short rest.",
            "4": "**Enhanced Detection Mode:** As a bonus action, you can activate an improved sensor that reveals any invisible creatures within a 30-ft radius for 1 minute. This upgraded detection effect is usable once per short rest, ensuring that no subtle presence goes unnoticed.",
            "7": "**Truesight Activation:** Your perceptive faculties are augmented, granting you Truesight out to 30 ft. for 1 minute, once per short rest. With this ability, illusions, disguises, and obfuscations dissolve before your gaze.",
            "11": "**Investigative Augmentation:** When you activate your sensor using an action, you also gain advantage on Investigation checks to find illusions or any hidden entities, and you can discern the location of hidden doorways for 1 minute.",
            "14": "**Augmented Sensory Overload:** Your helmet's visionary might expands further: your Truesight range increases to 60 ft., and you can now, as an action, detect magical auras within a 30-ft radius."
        }
    },
    "Neuroprotective-Casement": {
        fullDescription: "The Neuroprotective Casement is a masterwork of mental fortification—a sleek, rune-etched helmet designed to shield your mind from intrusive psychic assaults. Swirling patterns of arcane energy trace its surface, forming a barrier that not only hones your focus but also defies the subtle manipulation of hostile magic. Whether you face bewildering enchantments or overwhelming psychic force, this helmet stands as a steadfast guardian of your inner resolve.",
        levelFeatures: {
            "1": "**Initial Ward:** While wearing the Neuroprotective Casement, you gain a +1 bonus to AC, and its delicate enchantments confer slight resistance to psychic damage. This early defense helps keep your thoughts undisturbed in the midst of chaos.",
            "4": "**Charm Deflection:** The helmet's protective runes intensify, granting you advantage on saving throws against charm effects. Your mind becomes ever more adept at resisting attempts to subvert your will.",
            "7": "**Fear Immunity:** Bolstered by deep-seated arcane safeguards, you gain immunity to the frightened condition. No spectral terror or illusory horror can shake your resolve.",
            "11": "**Absolute Charm Rejection & Enhanced Force Resistance:** Your mental defenses reach new heights. You become completely immune to charm effects, and the Casement's energy field extends its protection to offer additional resistance to force damage, softening the impact of overwhelming kinetic strikes.",
            "14": "**Psychic Bastion:** The pinnacle of neuroprotective artistry is achieved. You gain full immunity to psychic damage, and your sharp intellect is further safeguarded by advantage on Intelligence saving throws—ensuring that your mind remains a bastion against all forms of mental coercion."
        }
    },
    "Ultimate-Bastion-Heavy-Helmet": {
        fullDescription: "Forged in the crucible of relentless combat and imbued with archaic defensive runes, the Ultimate-Bastion Heavy Helmet is the epitome of protective mastery. Its robust construction and enchanted surface form an unyielding barrier against both divine light and corrupting shadows. As its magic deepens over time, the helmet transforms into a legendary aegis—deflecting radiant fury and necrotic decay with supernatural finesse.",
        levelFeatures: {
            "1": "**Defensive Ward:** The helmet grants a **+1 bonus to AC** as its enchanted metal and intricate runes bolster your physical defenses.\n**Radiant Resistance:** Its first shield is set against the searing purity of divine energy, providing **resistance to radiant damage**.",
            "4": "**Necrotic Fortification:** The mystical inscriptions on the helmet expand to cover darker forces, granting **resistance to necrotic damage** and safeguarding you against energy that drains life.",
            "7": "**Radiant Immunity:** The helm's power reaches a new threshold, and you become completely impervious to radiant harm—**gaining immunity to radiant damage** and neutralizing even the most potent beams of holy retribution.",
            "11": "**Enhanced Barrier:** The protective enchantments surge further, granting an **extra +1 bonus to AC (total +2)**. Additionally, you choose one damage type of your choice to receive further protection—whether by gaining resistance or immunity, the helm adapts to your needs.",
            "14": "**Arcane Shielding:** At its zenith, the Ultimate-Bastion Heavy Helmet solidifies its defenses with unassailable magic. You gain **immunity to necrotic damage** and, by channeling the helm's deep-seated protections, you also gain **advantage on saving throws against spells**, ensuring that both physical and magical assaults are met with unwavering resolve."
        }
    },
    "Golden-Chain-Hood": {
        fullDescription: "This majestic hood is interwoven with shimmering golden chains that pulse with divine energy. Forged from sacred metal and imbued with celestial radiance, it protects its wearer while subtly enhancing divine insight. Even if you do not attune to the Godhead Shard, the hood offers its own impressive benefits—but when paired with the shard, its power ascends to near-mythical levels.",
        levelFeatures: {
            "1": "**Divine Aegis:** Grants a +1 bonus to AC and to saving throws against charm effects.\n**Luminous Vision:** If you lack darkvision, you gain darkvision out to 60 ft.\n**Chain-Link Detection:** Once per short rest, as an action, activate the hood's built-in sensor to detect magical auras (as per *detect magic*) for 1 minute.\n**Godhead Synergy:** If attuned to the Godhead Shard, the hood radiates a warm, golden glow. While its sensor is active, you gain an additional +1 bonus to Wisdom saving throws and advantage on Wisdom (Insight) checks.",
            "4": "**Auroral Scanning:** You can now use a bonus action to activate an enhanced scanning mode that detects invisible or ethereal creatures within 30 ft. for 1 minute (usable once per short rest).\n**Synergistic Glimmer:** If attuned with the Godhead Shard, this mode also reveals the auras of celestial and fiendish entities, offering deeper insights into hidden threats.",
            "7": "**Chain of Clarity:** Gain a permanent +1 bonus to Wisdom saving throws. Additionally, once per short rest, when you are subject to a charm or fear effect, you can use your reaction to gain advantage on the saving throw—or, if attuned with the Godhead Shard, become immune to that effect until the end of your next turn.",
            "11": "**Radiant Feedback:** When you activate any of the hood's detection or scanning abilities, you can empower your next attack or spell to deal extra radiant damage equal to 1d8 + your proficiency modifier. If attuned with the Godhead Shard, this bonus increases to 2d8 radiant damage.",
            "14": "**Divine Ascendance:** Once per long rest, as an action, invoke the full divine potential of the Golden Chain Hood for 1 minute. During this time, you gain Truesight out to 60 ft., advantage on all Wisdom saving throws, and all your spells that deal radiant or divine damage add an extra 2d8 damage. Additionally, if attuned with the Godhead Shard, you become immune to charm and fear effects for the duration."
        }
    },
    "Oracles-Tongue-Helm": {
        fullDescription: "The Oracle's Tongue Helm unlocks the power of language, allowing you to speak, read, and write a multitude of tongues while effortlessly bridging the gap between mortals and the spectral. Naturally effective on its own, its true potential shines when paired with the Transformation Raiment.",
        levelFeatures: {
            "1": "**Linguistic Resonance:** You gain the ability to read, write, and speak two additional languages of your choice.\n**Ethereal Comprehension:** Once per short rest, as an action, you can invoke a unique version of *Comprehend Languages* that lasts for 10 minutes, enabling you to understand any spoken or written language.\n**Social Augury:** You receive a mild boost—a +1 bonus to Persuasion checks—when interacting with creatures and spirits.\n**Transformation Synergy:** When paired with the Transformation Raiment, you automatically learn one extra language (for a total of three extra languages).",
            "4": "**Transcendent Tongues:** You learn an additional language (total of three extra languages, or four if paired with Transformation Raiment).\n**Spirit Speech:** Once per short rest, you can, as a bonus action, cast *Speak with Animals* (with the thematic flavor extended to minor spirits), deepening your cross-planar communication.",
            "7": "**Mystic Translator:** The helm's enchantments allow you to automatically decipher simple texts written in any language. You also gain advantage on checks to interpret ancient writings or cryptic dialects.\n**Ethereal Parley:** Once per short rest, you can initiate a telepathic conversation for up to 1 minute with any creature or spirit that communicates verbally—even if they exist on a different plane of existence.",
            "11": "**Divine Eloquence:** You gain a permanent +1 bonus to Persuasion checks, and you have advantage on Intelligence (History) or (Arcana) checks when deciphering linguistic or esoteric scripts.\n**Tongue of the Ancients:** Once per long rest, you can cast *Tongues* for 1 hour without expending a spell slot, enabling you to fluently understand and speak any language for the duration.",
            "14": "**Universal Oratory:** As an action, you can emanate an aura of linguistic clarity for 1 minute. During this time, every creature within 30 ft. understands your words as if they shared a common tongue, and you gain advantage on all Charisma (Persuasion) checks.\n**Enhanced Transformation Synergy:** When paired with the Transformation Raiment, your aura's range increases to 60 ft., and the bonus to Persuasion checks rises to +2."
        }
    },
    
    // Pauldrons options
    "Exultant-Type": {
        fullDescription: "Designed for the charismatic and commanding presence on the battlefield, Exultant Type pauldrons enhance your social prowess—directly influencing friend and foe alike with your inspiring aura.",
        levelFeatures: {
            "1": "Grants a bonus to presence by adding **+1 to Persuasion (or Intimidation) checks**.",
            "4": "Allies within 10 ft. gain **advantage on saving throws against charm effects**, bolstering their resolve against enchantments.",
            "7": "If you are already proficient in either Persuasion or Intimidation, your natural influence is magnified—**double your proficiency bonus on relevant checks**.",
            "11": "Your inspiring presence extends to your allies; those within 10 ft. now also receive a **+1 bonus to their Charisma saving throws**.",
            "14": "Your personal magnetism reaches its apex, increasing your **Charisma score by 2** (up to a maximum of 22)."
        }
    },
    "Vanguard-Heavy-Type": {
        fullDescription: "For Aegisknights who demand unwavering durability, Vanguard Heavy Type pauldrons provide formidable protection while absorbing and deflecting incoming damage.",
        levelFeatures: {
            "1": "Provides a **+2 bonus to AC** and grants **extra resistance to nonmagical damage**, forming a robust defensive barrier.",
            "4": "The pauldrons strengthen further, and you gain **resistance to two damage types of your choice** (selected as you create your character).",
            "7": "Once per short rest, you can use your reaction to **halve incoming damage**, reflecting your ability to shrug off powerful blows.",
            "11": "You refine your defenses to the point of near-imperviousness, gaining **immunity to one of your chosen damage types**.",
            "14": "The Vanguard Heavy Type evolves further, granting you **resistance to all damage types except psychic**, ensuring comprehensive protection in even the most chaotic skirmishes."
        }
    },
    "Tech-Type": {
        fullDescription: "Engineered for versatility and precision, the Tech Type pauldrons integrate advanced mechanized components—garnering additional tools and robotic appendages to support your technical and tactical needs.",
        levelFeatures: {
            "1": "Grants proficiency in one extra tool of your choice and provides **two extra \"robotic arms\"** that assist in simple tasks—granting a **+5 bonus to actions** such as crafting or disarming mundane traps.",
            "4": "Your robotic arms become more adept at physical tasks; they now **assist in grappling, granting advantage on Strength (Athletics) checks**.",
            "7": "Expand your technical versatility with proficiency in an **additional tool of your choice**.",
            "11": "Your arms gain enhanced dexterity, allowing them to **manipulate two objects in one turn**, significantly boosting your multitasking capabilities.",
            "14": "Your pauldrons now integrate an **advanced micro-fabricator**. Once per long rest, you can create a **temporary magical item or tool** with a market value of 150 gp or less. The created item lasts for 8 hours before disintegrating."
        }
    },    "Marksman-Type": {
        fullDescription: "Engineered for ranged specialists and snipers, this pauldron is optimized for precise targeting and rapid missile deployment. It integrates a built-in stabilizer that grants the benefits of Sharp Shooter along with a mounted missile launcher that offers versatile ammunition options for devastating ranged attacks.",
        levelFeatures: {
            "1": "**Precision Module:** Unique targeting optics integrated into these pauldrons allow for improved accuracy with ranged weapons. As a bonus action once per short rest, you can activate Sharp Shooter mode, which reduces the penalty for shooting at long range and grants you the ability to ignore half cover and three-quarters cover for the next minute. Your critical hit range increases by 1 for all your ranged attacks during this time.",
            "4": "**Enhanced Stabilizer:** The precision module is refined—its effectiveness increases so that you gain an additional use of the Sharp Shooter feature once per day (up to a total equal to your proficiency bonus + 1). Additionally, its benefits reduce the impact of adverse conditions on your ranged attacks.",
            "7": "**Mounted Missile System:** Your pauldrons now feature a small, shoulder-mounted missile launcher that can be fired as a bonus action once per short rest. It fires a small explosive that deals 2d6 force damage to all creatures in a 5-foot radius (Dexterity save for half damage, DC = 8 + your proficiency bonus + your Dexterity modifier).",
            "11": "**Enhanced Ammunition:** Your missile system can now use specialized ammunition. Choose one of the following effects when you fire: acid (ignores resistance to acid damage), frost (reduces target's speed by half on a failed save), or shock (target can't take reactions until the start of its next turn on a failed save).",
            "14": "**Perfect Aim:** Your precision has reached its apex. Once per long rest, you can declare a perfect shot before making a ranged attack roll. This attack automatically hits and is a critical hit, allowing you to capitalize on perfect positioning for maximum effect."
        }
    },
    "Kinetic-Resonance-Pauldron": {
        fullDescription: "Crafted from lightweight, energy-conductive plating interwoven with shimmering, radiant filigree, this pauldron pulses with the raw kinetic energy of movement. Every step you take imbues you with a surge of power, turning the very act of dashing into a storehouse of explosive force. This kinetic marvel transforms agile maneuvers into both a defensive boon and a deadly offensive weapon.",
        levelFeatures: {
            "1": "**Enhanced Resonant Momentum:** You gain a **+2 bonus to Athletics and Acrobatics checks** as the pauldron amplifies your physical prowess. Additionally, whenever you take the Dash action, you store 1 \"Kinetic Charge\" that can be used to enhance your next melee attack or reaction attack. Kinetic Charges reset at the start of your next turn.",
            "4": "**Momentum Augmentation:** When you move at least half your speed in a turn, you now gain **advantage on Dexterity saving throws** as your body rides the raw momentum. In addition, any Kinetic Charge you gain lingers until the start of your next turn, allowing you to preserve its energy for a more opportune moment.",
            "7": "**Explosive Impact:** When you expend a Kinetic Charge to enhance a melee attack, your strike now deals an extra **1d8 force damage** and optionally pushes the target 5 feet away from you. You can use this explosive bonus once per short rest.",
            "11": "**Chain Reaction Counter:** When you're hit by a melee attack while holding at least one stored Kinetic Charge, you may use your reaction to unleash a burst of stored energy. The attacker suffers **2d8 force damage**, and you gain a **+2 bonus to AC** until the start of your next turn. This counterattack can only be triggered once per short rest.",
            "14": "**Moment of Absolute Momentum:** Once per long rest, as an action, you can tap into the full reservoir of kinetic energy within your pauldron for 1 minute. During this time, your movement speed is **doubled**, and whenever you use the Dash action, your next melee attack that turn deals bonus force damage equal to your proficiency bonus plus an extra **1d8**. Additionally, every enemy within 5 feet of you must succeed on a Strength saving throw (DC = 8 + your proficiency bonus + your Strength modifier) or be knocked prone."
        }
    },
    
    // Arms options
    "Shadestreak-Handmantles": {
        fullDescription: "These dexterity-focused gauntlets are designed for finesse and subtlety. They not only grant you proficiency with thieves' tools but also provide technological assistance for precise actions, such as bypassing locks with a magitek laser-bore.",
        levelFeatures: {
            "1": "**Dexterity Enhancement:** Grant proficiency with thieves' tools.\n**Laser-Bore Function:** Once per day, you can use a magitek laser-bore to bypass a lock (DC 15 or lower).",
            "4": "**Enhanced Finesse:** Gain advantage on Dexterity (Sleight of Hand) checks.",
            "7": "**Trap-Disarming Precision:** Once per short rest, you can disarm traps without triggering them.",
            "11": "**Stealth Field Generator:** Gain the ability to cast *Invisibility* on yourself once per short rest.",
            "14": "**Advanced Locking Bypass:** You can bypass magical locks (such as those from *Arcane Lock*) once per long rest."
        }
    },
    "Blastbreaker-Fists": {
        fullDescription: "Engineered for raw melee power, these augmented smashing hands enhance your physical might. They enable you to wield larger weapons with ease, reclassify lighter weapons for finesse, and improve your unarmed and melee damage output.",
        levelFeatures: {
            "1": "**Enhanced Strength:** Advantage on strength checks to lift, drag, carry, or pull heavy objects. **+1 to damage on all melee-based attacks.**\n**Weapon Versatility:** Treat two-handed weapons as if wielded in one hand; any non–two-handed weapon is considered light for you, and any such light weapon that isn't finesse is treated as finesse.",
            "4": "**Improved Combat Proficiency:** Gain a **+2 bonus to melee attack rolls**.",
            "7": "**Augmented Strike:** When you hit with a melee attack, you may deal an extra **1d8 force damage** once per turn.",
            "11": "**Master Grappler:** You can grapple two creatures simultaneously. Additionally, at the start of your turn, each grappled creature takes **1d6 bludgeoning damage**.",
            "14": "**Force Penetration:** Your melee attacks ignore nonmagical damage resistance and add an extra **2d8 force damage** on a critical hit."
        }
    },
    "Somatic-Satellites": {
        fullDescription: "Small magical spheres orbit your hands, serving both as ranged attackers and auxiliary spell-storage devices. These satellites can be launched to deliver force damage or to hold spells for later use; when paired with Tech pauldrons, they even boost your spellcasting capabilities.",
        levelFeatures: {
            "1": "**Orbiting Satellites:** Gain two small magical satellites that orbit your hands. Each satellite can be launched as a ranged missile attack (30 ft. range), dealing 1d8 force damage. Additionally, each satellite can store a single spell of 1st level or higher for later use. Once a satellite is launched or its stored spell is cast, it becomes inert until you complete a short rest.\n**Tech Synergy:** When paired with Tech-Type pauldrons, your satellites can be controlled by your robotic arms, enabling greater magical versatility.",
            "4": "**Satellite Upgrade:** You gain a third satellite, allowing for additional spell storage or attacks. The damage of your satellite missiles increases to 2d6 force damage.",
            "7": "**Improved Spell Storage:** Your satellites can now store spells of up to 3rd level. Additionally, their missile range doubles to 60 ft.",
            "11": "**Extended Magical Reach:** Satellites can deliver touch-range spells to a target up to 30 ft away.",
            "14": "**Advanced Satellite Array:** Gain an additional satellite (total of 4), and stored spells last until cast, allowing for somatic satellite spells to be cast without consuming daily spell slots."
        }
    },
    "Serene-Palm-Gauntlets": {
        fullDescription: "Fashioned from supple, rune-etched leather and tempered mithral, these gauntlets are imbued with the essence of time-honored martial arts. More than mere gloves, they channel the disciplined spirit of ancient masters. Whether wielding a weapon or fighting unarmed, you can seamlessly blend defense and controlled offense—deflecting blows and delivering pinpoint open palm strikes that echo the calm fury of inner ki.",
        levelFeatures: {
            "1": "**Parry Reflex:** When you are targeted by a melee attack, you can use your reaction to parry the blow. Doing so reduces the damage taken by 1d4 + your proficiency bonus.\n**Deflective Guard:** The steady energy of the gauntlets grants you a +1 bonus to AC against melee attacks, as your arms instinctively adopt a defensive stance.",
            "4": "**Enhanced Deflection:** Your techniques improve: once per short rest, when targeted by a ranged attack, you can use your reaction to force the attacker to roll with disadvantage. In addition, your Parry Reflex now reduces incoming melee damage by 1d6 + your proficiency bonus instead of 1d4.",
            "7": "**Open Palm Strike:** You unlock the disciplined art of the open palm. Once per short rest, as an action, you can execute a focused open palm strike. This special attack deals an additional 1d6 force damage, and on a hit the target must make a Strength saving throw (DC = 8 + your proficiency bonus + your Dexterity modifier) or be pushed 5 feet away.",
            "11": "**Ki Harmony:** The gauntlets' mystical energies align with your inner focus. You gain a +1 bonus to all saving throws, and your Parry Reflex now reduces damage by 1d8 + your proficiency bonus.",
            "14": "**Serenity in Motion:** Once per long rest, as a bonus action, you can achieve perfect harmony between offense and defense for 1 minute. During this time, your AC increases by 2, and after parrying an attack, your next attack against that attacker is automatically a critical hit if it lands."
        }
    },
    
    // Chest options
    "Balanced-Type-Composite-Frame": {
        fullDescription: "This versatile chest armor strikes a balance between protection and mobility, offering moderate defenses while maintaining flexibility in combat. Its energy shield provides temporary protection in critical moments, and its refined design allows for nimble movement and tactical responsiveness.",
        levelFeatures: {
            "1": "**Base AC:** Your armor grants an effective AC of **14 + Dexterity modifier** (up to a maximum bonus of +2), representing its lightweight, streamlined design.\n**Shield Bonus (Daily):** Once per day, you can activate an energy shield to gain a temporary **+2 shield bonus to AC** for 1 minute.",
            "4": "**Elemental Resistance Activation:** You gain the ability to imbue your frame with a protective enchantment—once per short rest, choose one damage type (fire, cold, lightning, etc.) and gain resistance to that damage type for 1 minute.",
            "7": "**Initiative Amplification:** Your balanced design and enhanced reflexes grant you a permanent **+2 bonus to initiative rolls**, ensuring you act quicker in combat.",
            "11": "**Enhanced Shield Projection:** When you activate your shield bonus, you can choose to intensify its effect—granting a temporary **+4 shield bonus to AC** instead of +2, representing a moment of peak defensive prowess.",
            "14": "**Defensive Immunity:** Your frame's protective magic evolves further, and you gain **immunity to one chosen damage type** (selected at the time of upgrade), completely negating that type of harm."
        }
    },
    "Bulwark-Type-Frame": {
        fullDescription: "Embodying steadfast resilience, this chestpiece is designed for Aegisknights who demand the utmost in protective fortitude. Sacrificing nimbleness for solid defense, this frame not only bolsters your AC but actively negates select damage types, offering a unique counter to both magical and physical onslaughts.",
        levelFeatures: {
            "1": "**Base AC:** 16\n**Bulwark Aegis:** Once per day, you can activate the Bulwark Aegis for 1 minute. While active, choose one magical or physical damage type; any damage of that type is completely negated against you.\n**Hit Die:** Uses a d12 hit die.",
            "4": "**Increased Activation:** The uses of Bulwark Aegis increase to twice per day.",
            "7": "**Dual Resistance:** The frame now provides passive resistance to two chosen damage types.",
            "11": "**Critical Block:** While the Bulwark Aegis is active, any critical hit against you is negated and treated as a normal hit.\n**Charge Activation:** You can also activate the Bulwark by spending 1 Cell Charge.",
            "14": "**Comprehensive Resilience:** Gain resistance to all damage types except psychic."
        }
    },
    "Light-Type-Frame": {
        fullDescription: "This variant maximizes mobility at the expense of heavy armor, designed for agile Aegisknights who prioritize speed and dexterity over brute defense. Its lightweight design grants a modest shield bonus while boosting your movement, as represented by its use of a d8 hit die.",
        levelFeatures: {
            "1": "**Base Defense:** Grants the lowest base AC among chestpiece options, reflecting its minimal plating.\n**Mobility Augmentation:** Provides a static bonus to movement speed of +15 ft., enabling rapid repositioning.\n**Shield Bonus Activation:** When activated, the frame projects an energy field that grants a +1 bonus to AC.\n**Hit Die:** Uses a d8 hit die.",
            "4": "**Enhanced Stride:** Your frame is further streamlined, permanently increasing your movement speed by an additional +10 ft.",
            "7": "**Agile Reflexes:** The frame's lightweight construction sharpens your acumen in evading danger, granting advantage on Dexterity saving throws.",
            "11": "**Unrestricted Movement:** The design improves further to prevent encumbering conditions, rendering you immune to being restrained or grappled.",
            "14": "**Dash Booster:** Once per short rest, you can activate a burst of speed as a bonus action to Dash without provoking opportunity attacks."
        }
    },
    "Xtra-Hev-Composite-Frame": {
        fullDescription: "This fortified frame offers superior protection through its enhanced structural integrity and regenerating energy shield. Built for those who prefer durability above all, it sacrifices some mobility for unparalleled defensive capabilities and constitution enhancements.",
        levelFeatures: {
            "1": "**Hitdice**: 1d10 per level\n**AC:** 16\n**Constitution Bonus:** Gain a +1 bonus to Constitution saving throws and ability checks.\n**Regen Shield:** When activated (1 Charge), the frame projects a regenerating energy shield that grants temporary hit points equal to 10 + your Constitution modifier. At the start of each turn, if any of these temporary hit points remain, the shield automatically regenerates 2 temporary hit points (up to the maximum).",
            "4": "**Advanced Plating:** The frame's defensive panels improve, increasing your base AC by 1 (to AC 17).\n**Enhanced Shield Regeneration:** The regeneration factor of your shield improves, so it now restores 4 temporary hit points at the start of each turn while active.",
            "7": "**Fortified Constitution:** The frame's integration with your body improves, and the bonus it provides to Constitution checks and saving throws increases to +2.\n**Reinforced Shield Capacity:** The maximum temporary hit points granted by the shield increase by 5.",
            "11": "**Adaptive Regeneration:** If your shield was not completely depleted on your previous turn, it now regenerates an additional number of temporary hit points equal to your Constitution modifier at the start of your turn.\n**Optimal Defense:** When your shield is fully active, conditions allow your effective AC to be treated as 18.",
            "14": "**Fortress Mode:** Once per short rest, you can activate Fortress Mode as a bonus action. For 1 minute, your shield's maximum capacity increases by 50%, and you reduce all incoming damage by 2 (unless the damage comes from a source that bypasses non-magical defenses).\n**Stalwart Mobility:** While in Fortress Mode, you gain advantage on Dexterity saving throws against effects that specifically target your movement, though your base movement speed remains 30 ft."
        }
    },
    
    // Boots options
    "Ultra-Duty-Boots": {
        fullDescription: "Built for the stalwart warrior who refuses to be knocked off balance, these rugged boots are engineered with heavy-duty enchantments that anchor you to the ground—even if it means sacrificing some speed.",
        levelFeatures: {
            "1": "**Stalwart Stance:** You gain advantage on saving throws against effects that would knock you back or knock you prone.\n**Heavily Anchored:** Your base movement speed is reduced by 5 ft., setting it at **25 ft.** to reflect the boots' extra weight and bulk.",
            "4": "**Immovable Resolve:** You become completely immune to knockback effects.",
            "7": "**Steadfast Posture:** You gain advantage on saving throws against being knocked prone.",
            "11": "**Quick Recovery:** You can stand up from being prone without using any of your movement.",
            "14": "**Forcefield Footing:** You gain a +5 bonus to saving throws against any effects that attempt to forcibly move you."
        }
    },
    "Balanced-Boots": {
        fullDescription: "Perfect for the agile combatant, these sleek, streamlined boots enhance your speed and nimbleness. They amplify your natural grace while helping you navigate tricky terrain and avoid entangling hazards on the battlefield.",
        levelFeatures: {
            "1": "**Fleet Footed:** Increase your movement speed by +5 ft., setting your base movement speed at **35 ft.**\n**Agile Evasion:** Once per short rest, you can gain advantage on saving throws against trip attacks.",
            "4": "**Terrain Mastery:** You ignore the effects of difficult terrain, letting you move as if the ground itself were smooth.",
            "7": "**Burst of Speed:** Gain an additional +10 ft. bonus to movement speed.",
            "11": "**Speed Preservation:** You gain advantage on saving throws against effects that would reduce your speed.",
            "14": "**Vertical and Fluid Mobility:** You gain the ability to traverse vertical surfaces and liquids during your turn without falling—opening up new tactical avenues for maneuvering in unconventional environments."
        }
    },
    "Blastcore-Soles": {
        fullDescription: "For the bold and unpredictable fighter, these cutting-edge soles infuse your every step with volatile energy. They grant you explosive speed and gravity-defying leaps that catch foes off guard, making your movement as disruptive as your combat style.",
        levelFeatures: {
            "1": "**Enhanced Mobility:** Your base movement speed is set at 40 ft., and you gain advantage on jump checks provided you have a 10-ft running start.\n**Leap Over Enemies:** Once per short rest, you can attempt to leap over enemies without provoking opportunity attacks—using an Acrobatics check with a DC that scales by enemy size.",
            "4": "**Improved Jumping:** Your jump distance is doubled, allowing for extraordinary leaps across the battlefield.",
            "7": "**Enhanced Stability:** You gain a +5 bonus to any checks made to avoid failing a jump, ensuring that your aerial maneuvers rarely result in unfortunate mishaps.",
            "11": "**Aerial Dominance:** Your enhanced training allows you to leap up to **60 ft. horizontally** or **30 ft. vertically**, propelling you into superior tactical positions.",
            "14": "**Shockwave Landing:** You gain immunity to fall damage. Furthermore, when you land after a leap, you create a shockwave that deals **2d10 force damage** to all creatures within 10 ft., demonstrating the raw kinetic force behind every jump."
        }
    },
    
    // Raiment options
    "Photonic-Cape": {
        fullDescription: "A high-tech cloak suffused with prismatic energy, the Photonic Cape allows its wearer to harness light and shadow in defense and stealth. Even at its base, it enhances your protective and evasive abilities; as you invest in upgrades, it evolves into a conduit for defensive magic, enhanced stealth, and rapid movement.",
        levelFeatures: {
            "3": "**Enhanced Stealth:** The cape warps light around you, granting a +2 bonus to Stealth checks.\n**Prismatic Shield:** Once per short rest, as a reaction to taking damage, you can activate the cape's prismatic shield. For 1 round, you gain resistance to the damage type that triggered this ability.",
            "6": "**Invisibility & Flight Activation:** Once per short rest, you can activate the cape's enhanced photonic emitter. As an action, you become invisible for 1 minute. Additionally, for the next 30 minutes, you gain a flying speed of 30 ft., allowing you to reposition or escape with ease.",
            "8": "**Harmonic Resistance:** The prismatic energies within the cape start to absorb external forces. You gain resistance to both radiant and necrotic damage, reducing the harm from these potent energy types.",
            "12": "**Radiant Immunity & Teleportation:** Your armament reaches a new pinnacle of defensive magic. You gain immunity to radiant damage. Furthermore, as a bonus action, you can teleport up to 60 ft. to a location you can see (usable once per short rest).",
            "Higher-Level": "**Mirror Image Projection:** At the pinnacle of its evolution, the cape allows you to create perfect light-based duplicates of yourself. As an action, generate 1d4+1 illusory duplicates that move with you and mimic your actions. Each time a creature targets you with an attack, roll a d20 to determine if the attack instead targets one of your duplicates."
        }
    },
    "Soul-Core-Manifold": {
        fullDescription: "A cutting-edge core of raw elemental power integrated into your raiment, the Soul Core Manifold channels a potent surge of energy that fuels your abilities. It grants bonus Cell Charges and the unique ability to cast a chosen version of Hellish Rebuke, with further upgrades enhancing its recharge efficiency, defensive counterattacks, and elemental fortitude.",
        levelFeatures: {
            "3": "**Charge Supplement:** Gain 2 additional Cell Charges over other raiments (7 total at level 3).\n**Elemental Hellish Rebuke:** Once per short rest, you can cast Hellish Rebuke as a 1st-level spell, choosing one of the following damage types when you create your character: fire, cold, lightning, acid, or poison.\n**Enhanced Recharge Rate:** Your recharge rate improves, allowing you to regain an extra ½ hit die worth of Cell Charges per short rest.",
            "6": "**Elemental Resistance:** You gain resistance to your chosen elemental type, reducing damage from that element by half.",
            "8": "**Retaliatory Burst:** When a creature within 10 ft. hits you with a melee attack, you automatically deal 2d8 retaliatory damage of your chosen elemental type to the attacker.",
            "12": "**Elemental Immunity & Shielding:** You become immune to your chosen element. In addition, you gain a reaction-based shield that can fully negate one incoming attack per short rest."
        }
    },
    "Godhead-Shard": {
        fullDescription: "A radiant fragment of divine essence, the Godhead Shard infuses your raiment with celestial power. Far more than a mere accessory, it integrates divine spells and sacred invocations directly into your armor—empowering you to channel miracles on demand. While potent on its own, its true brilliance is revealed when you align it with other divine components, transforming your Aegisknight into a living conduit of sacred might.",
        levelFeatures: {
            "3": "**Divine Spellcasting Integration:** Choose two divine cantrips and one 1st-level divine spell (similar in function to the Magic Initiate feat, but seamlessly built into your raiment)\n**Enhanced Cell Charge Pool:** You gain the second-highest pool of Cell Charges among all raiments, ensuring you have ample energy to activate your other magical abilities.",
            "3-upgrade": "**Sacred Recharge:** The shard grants you the ability to attempt to restore 2 Cell Charges per short rest. To do so, you must succeed on a DC 14 Religion check within three attempts. Each attempt requires using a small fuel component—such as incense, candles, or a 5 gp expenditure per Cell Charge restored—symbolizing your ritualistic devotion.",
            "6": "**Additional Divine Slot:** You gain an extra divine spell slot (or an extra spell effect), equivalent to one of the early abilities granted to clerics. This extra slot deepens your access to sacred magic, adding versatility to your divine arsenal.",
            "8": "**Cleric Subclass Feature Integration:** You may now select one cleric subclass feature (available at 3rd level) to integrate into your armor's divine capabilities. This chosen feature is woven into your raiment's magic, providing specialized benefits that reflect your divine focus.",
            "12": "**Divine Word Invocation & Advanced Recharge:** Once per long rest, you gain the ability to cast *Divine Word*, unleashing a potent blast of holy retribution. Additionally, you can restore additional Cell Charges through focused religious invocations, bolstering your energy reserves and ensuring that your divine power is never in short supply."
        }
    },
    "Arcanomatrix": {
        fullDescription: "The Arcanomatrix is a nexus of pure arcane energy intricately woven into your raiment. Designed for the aspiring arcane caster, it grants you a built-in spellcasting focus that not only supplies extra Cell Charges for your magical arsenal, but also evolves with you—integrating key wizard abilities and defensive enchantments that bolster your arcane prowess.",
        levelFeatures: {
            "3": "**Arcane Spellcasting Integration:** Choose two arcane cantrips and one 1st-level arcane spell (in the manner of the Magic Initiate feat for an arcane caster). These spells are organically bound to your raiment, allowing you to wield established arcane powers with ease.",
            "3-upgrade": "**Arcane Recovery:** The matrix draws ambient magical energy into itself. Once per day, after a short rest, you can recover one expended 1st-level spell slot, mimicking a wizard's Arcane Recovery ability.",
            "6": "**Enhanced Spellcasting Access:** You gain the ability to cast one 2nd-level wizard spell once per day without expending a spell slot. This spell becomes a permanent part of your raiment's magical repertoire.",
            "8": "**Wizardly Tradition Feature:** You may now select one School of Magic feature from a Wizard subclass (typically available to wizards at 2nd level). This specialized knowledge is woven into your raiment, providing focused arcane benefits.",
            "12": "**Arcane Resilience:** Your deep connection with arcane forces fortifies your defenses. You gain resistance to force damage and have advantage on saving throws against spells. This upgrade embodies the dual nature of sophisticated arcane mastery—both destructive and protective."
        }
    },
    "Luminant-Engine": {
        fullDescription: "The Luminant Engine is a radiant marvel—a pulsating core of light and potential woven into your raiment. Forged by visionary luminancers and fueled by cosmic energy, it channels the ephemeral power of illumination into tangible effects. Whether you choose to send forth searing bolts of light or create protective barriers with a flash of brilliance, the Engine offers a unique blend of utility and explosive power. As its power grows, so too does its ability to bend space and unleash dazzling bursts of energy that shatter the darkness.",
        levelFeatures: {
            "3": "**Causal Points:** You gain access to Causal Points, a specialized form of magical energy unique to the Luminant Engine. You have a number of Causal Points equal to your proficiency bonus + your Intelligence modifier. These points can be spent to fuel your luminous abilities.\n**Light Manipulation:** You can cast the Light cantrip at will and can control the intensity, color, and direction of any light source within 30 ft. as a bonus action.",
            "3-upgrade": "**Barrier of Light:** As an action, spend 1 Causal Point to create a 5-ft.-radius hemisphere of solid light that provides three-quarters cover. This barrier lasts for 1 minute or until it takes damage equal to 5 × your level.",
            "6": "**Bending Light:** You gain the ability to bend light around yourself or allies. As an action, spend 2 Causal Points to cast Invisibility without requiring concentration, or spend 1 Causal Point to impose disadvantage on attack rolls against a target of your choice until the start of your next turn.",
            "8": "**Searing Beam:** As an action, spend 2 Causal Points to fire a beam of concentrated light in a 60-ft. line. Each creature in the line must make a Dexterity saving throw (DC = 8 + your proficiency bonus + your Intelligence modifier) or take 6d6 radiant damage, or half damage on a successful save.",
            "12": "**Nova Eruption:** At the pinnacle of its power, the Luminant Engine transforms into an awe-inspiring force. You gain immunity to radiant damage, and once per long rest, you can expend a large burst of Causal Points to unleash a miniature Causal Nova. This scaled-down 9th-level effect radiates from you in a blinding explosion, dealing significant radiant damage to all creatures in its area and temporarily banishing the encroaching darkness."
        }
    },
    "Mystery-Module": {
        fullDescription: "Shrouded in enigma and ever unpredictable, the Mystery Module is the wild card of your raiment. Its true nature is determined by fate—a roll on a custom table (crafted by your DM) unleashes its myriad potential, whether that means bonus Cell Charges, a quirky spell-like ability, or even an extra proficiency. As its power is refined through upgrades, the module's chaotic gifts become a reliable part of your arsenal, setting you apart as an Aegisknight of limitless possibility.",
        levelFeatures: {
            "3": "**Random Benefit:** When you choose this raiment, you roll on a custom table (designed by your DM) to determine its initial properties. This table might include options such as bonus Cell Charges, a unique spell-like ability, or an additional skill proficiency.",
            "3-upgrade": "**Stabilized Chaos:** Once per long rest, you can reroll on the Mystery Module table, potentially gaining a different benefit for the day. If you don't like the new result, you can retain your previous benefit.",
            "6": "**Expanded Potential:** The Mystery Module's capabilities grow more diverse. The DM adds several higher-tier options to the Mystery Module table, potentially including more powerful spell-like abilities or enhanced defensive capabilities.",
            "8": "**Chaotic Mastery:** You gain greater control over the Module's unpredictable nature. Once per short rest, you can temporarily gain a different benefit from the Mystery Module table for 10 minutes, in addition to your daily rolled benefit.",
            "12": "**Module Ascendance:** The Mystery Module reaches its apotheosis—granting you a major ability (as determined by DM design) that unmistakably distinguishes your Aegisknight. This crowning effect might redefine your battlefield role, embodying the full, unpredictable power of chaos harnessed and mastered."
        }
    },
    "Transmorphic-Belt": {
        fullDescription: "A marvel of transformation magic, the Transmorphic Belt grants the wearer control over their size and unleashes elemental powers through a breath weapon. This versatile raiment adapts to your tactical needs, whether you require brute force in combat or specialized resistances against environmental hazards.",
        levelFeatures: {
            "3": "**Breath of Transformation:** You learn to unleash a potent breath weapon as an action a number of times per day equal to your proficiency bonus. When activated, you emit a 30‑ft cone of elemental energy. Choose one of the following breath weapons at creation. You can change this breath weapon once per month, and whenever you can swap armor pieces.\n**Elemental Resistance:** Upon acquiring the Transmorphic Belt, choose one elemental damage type (fire, cold, lightning, acid, or poison). You gain resistance to that damage type.\n**Shapeshift Initiation:** As an inherent bonus action, you can activate the belt's growth mode. For a duration equal to **10 rounds + your Wisdom modifier** (minimum 1 round), your armor expands—granting you the Large Build trait. If you already possess Large Build (or have it granted by the Xtra-Hev Frame Chestpiece), you instead become Huge for the duration.",
            "6": "**Enhanced Breath:** Your breath weapon damage increases by 1d10 for Radiant, Necrotic, or Force variants (or by 1d4 for Poison, raising it from 4d4 to 5d4).\n**Extended Transformation:** The duration of your size transformation increases by an additional 5 rounds.",
            "10": "**Elemental Mastery:** You may now select a second elemental variant for your breath weapon (allowing you to choose, for example, either Radiant or Necrotic on a given use) to add versatility.\n**Augmented Resistance:** The resistance granted by your elemental choice improves—damage of that type is halved rather than simply resisted.",
            "14": "**Advanced Transformation:** Once per short rest, through a bonus action you can trigger a burst transformation. For the next 10 rounds + your Wisdom modifier, in addition to gaining the Large (or Huge) Build trait, your speed and Strength score increase by 2 (temporary bonuses)."
        }
    },

    // Diaper-School Options
    "Pacifier-of-Quietude": {
        fullDescription: "For caster-builds who value quiet spellcasting and mental focus over brute protection.",
        levelFeatures: {
            "1": "**Silent Spellcasting:** Your pacifier helmet negates the need for verbal components when you cast spells, letting you channel your magic in an almost wordless, meditative state.\n**Telepathic Link:** You gain short-range telepathy (up to 30 ft.) to communicate silently with allies.",
            "4": "Your helmet mutes ambient noise around you, granting advantage on Concentration checks when casting spells in a loud environment.",
            "7": "Enhance your telepathy to extend communication range to 60 ft. and allow nonverbal spell components to be entirely dispensed with.",
            "11": "Gain a subtle \"mind shield\" that occasionally deflects disruptive mental effects (once per short rest, you can re-roll a failed Wisdom saving throw against a psychic effect).",
            "14": "Your silent casting becomes nearly undetectable—opponents must succeed on a DC 15 Perception check to notice you casting spells, even if you use somatic components."
        }
    },
    "Bonnet-Themed-Helmet": {
        fullDescription: "For those who'd rather charm than conceal, this ostentatiously babyish bonnet radiates an irresistible level of adorable absurdity that distracts everyone around it.",
        levelFeatures: {
            "1": "**Innocent Charm:** The bonnet bestows a +1 bonus to Charisma and grants advantage on Persuasion checks, reflecting the pure, sugary innocence of its design.\n**Captivating Cuteness:** Once per short rest, as an action, you may activate the bonnet's captivating display. When activated, every creature (both allies and foes) within 10 ft. must immediately roll a 'potty check'—a Constitution saving throw (DC = your class save DC, typically 14). On a failure, the creature is overwhelmed by the sheer babyish allure and becomes distracted: they lose their reaction and have disadvantage on attack rolls and ability checks involving concentration until the start of your next turn.",
            "4": "The bonnet's charm intensifies—your bonus to Charisma increases by an additional +1, and the effective radius of your captivating display increases to 15 ft. In addition, any creature that fails the potty check becomes dazed for 1 round instead of merely losing their reaction.",
            "7": "Your bonnet now exudes an aura of irresistible whimsy that enhances your social prowess: you gain advantage on Deception and Performance checks related to your captivating presence.",
            "11": "The bonnet further empowers you and your nearby allies. Allies within 10 ft. gain an additional +1 bonus to saving throws against fear, charm, and effects that would \"soil\" their spirits, as your infectious babyish delight bolsters their resolve.",
            "14": "The pinnacle of infantile charm is reached. Once per long rest, you may invoke a \"Potty Parade\" as an action. When activated, every creature within 15 ft. must make a potty check (DC = 16, or your class save DC if higher). On a failure, the affected creatures become incapacitated by uncontrollable mirth and adoration for 1 round, as if caught in a state of utter, adorable distraction."
        }
    },
    "Infantile-Mittens": {
        fullDescription: "These gauntlets feature oversized, cuddly mittens that limit fine dexterity but grant unique protective benefits.",
        levelFeatures: {
            "1": "**Inelegant Grip:** Your gauntlets impose a slight penalty on Dexterity-based tasks (at DM's discretion) but make your hands less susceptible to traps and poisons—granting immunity to effects that rely solely on manual touch (such as handling a poisoned item or disarming trap triggers that require delicate manipulation).\n**Anti-Curse Touch:** You have advantage on saving throws against curses or magical effects that require you to physically touch the triggering object.",
            "4": "Although your manual finesse remains infantile, your gauntlets bolster your brute force—increasing your unarmed strike damage by 1d4.",
            "7": "The mittens magically adjust to improve your grip in grappling, granting you advantage on Strength (Athletics) checks involving grappling or shoving.",
            "11": "Gain an additional bonus to Strength checks that involve physical tasks (such as moving heavy objects) while wearing the gauntlets.",
            "14": "Your gauntlets reach peak infantile power, giving a one-time bonus to any Strength-based contest per short rest—allowing you to automatically win a contest that involves raw physical touch."
        }
    },
    "Soiling-Shield-Bib": {
        fullDescription: "This oversized, magically enchanted bib is designed to ward off the filth and chaos of the battlefield—ensuring that no matter how messy the combat gets, you (and your reputation) remain pristine.",
        levelFeatures: {
            "1": "**Potty Protection:** You gain advantage on any ability checks or saving throws against effects that would \"soil\" you (whether from enemy abilities or environmental hazards), reflecting an innate resistance to the grimy influences that might otherwise tarnish you.\n**Initial AC:** Your base AC is determined as 14 + your Dexterity modifier (up to a maximum bonus of +3), representing the bib's modest physical protection.",
            "4": "The bib's enchantments improve—once per short rest, you can automatically succeed on a \"potty check\" (a saving throw against conditions that would impose a soiling or muck-related debuff).",
            "7": "As the bib becomes more robust, it grants an additional +1 bonus to AC against \"mucky\" effects and provides resistance to one damage type related to filth (such as acid or sludge), channeling the protective functions seen in an *Absorbent Barrier*.",
            "11": "The bib now exudes restorative magic; whenever an effect would soil or debilitate you, you gain temporary hit points equal to your Aegisknight level and reduce the duration of that effect by 1 round.",
            "14": "The ultimate enchantment of the bib awakens: once per long rest, you can invoke the \"Cleanliness Covenant\" as an action. For 1 minute, you and all allies within 15 ft. become immune to soiling effects and automatically dispel any active conditions tied to filth."
        }
    },
    "Diaper-Duty-Pauldrons": {
        fullDescription: "Adorned with adorable embroidered swaddles, cartoonish bibs, and a scattering of tiny pacifiers, these pauldrons capture the nurturing chaos of diaper school. Infused with cleaning magic and childlike exuberance, they protect you with a refreshing burst of cleanliness—and a few surprises that will leave enemies (and allies) grinning in spite of themselves.",
        levelFeatures: {
            "1": "**Absorbent Barrier:** When you are hit by a melee or ranged attack, you can use your reaction to activate an absorbent aura. Doing so reduces the damage taken by 1d6 + your proficiency bonus, as if a fresh, padded diaper cushions the blow. (Usable once per short rest.)\n**Cleanliness Aura:** Your ever-present freshness grants you a +1 bonus to saving throws against conditions linked to messy or soiled effects (such as slippery, muddy, or chaotic battlefield states).",
            "4": "**Sanitizing Swirl:** Once per short rest, you can use a bonus action to unleash a burst of cleansing energy in a 10‑ft radius around you. Every hostile creature in the area must succeed on a Dexterity saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or suffer disadvantage on their attack rolls until the start of your next turn, as they are briefly overwhelmed by an aroma of baby powder and scented wipes.",
            "7": "**Diaper Dash:** Channeling the quick-change efficiency of diaper school, you can, once per short rest as a bonus action, immediately stand up (if prone) and move an extra 10 ft. without provoking opportunity attacks. This nimble burst of movement embodies that swift diaper change when every second counts.",
            "11": "**Clean Sweep Counter:** Whenever you successfully use your Absorbent Barrier reaction, you can simultaneously splash a wave of cleansing liquid at your attacker. The attacker must then make a Strength saving throw (DC = 8 + your proficiency bonus + your Strength modifier) or have its movement reduced by half until the end of its next turn, as if caught in a slick torrent of freshly laundered magic.",
            "14": "**Ultimate Diaper Time-Out:** Once per long rest, as an action, you can invoke an aura of absolute cleanliness. For 1 minute, all hostile creatures within 15 ft. must make a Wisdom saving throw (DC = 8 + your proficiency bonus + your Wisdom modifier) or become incapacitated with the ridiculous charm and overwhelming freshness. It's as if your enemies have been put into an enforced 'time-out' by the adorable authority of your impeccably clean appearance."
        }
    },    
    "Diaper-Daycare-Raiment": {
        fullDescription: "Harnessing the wholesome chaos of Diaper School, this raiment transforms your suit's central core into a beacon of nurturing mischief and disruptive battleflow.",
        levelFeatures: {
            "3": "**Soothing Miracle:** Once per short rest, invoke an aura reminiscent of the \"Little Miracle\" cantrip. For 1 minute, all allies within 15 ft. gain advantage on saving throws against fear and panic effects—bathed in a gentle, comforting radiance that soothes their wounds and worries. You may also create one other effect from the Little Miracle effect list that remains constant for the duration.\n**Absorbent Shield:** When you are hit by an attack, you can use your reaction to manifest an invisible, absorbent barrier (in the style of the \"Absorbent Barrier\" spell). This shield reduces the triggering damage by 1d8 + your spellcasting modifier as if your raiment momentarily mops up the impact.\n**Diaper Douse Blast:** Once per short rest, you can unleash a burst of saturated, messy energy. As an action, all creatures within a 15-ft radius must succeed on a Dexterity saving throw (DC = your class save DC) or have their movement reduced to 0 until the end of their next turn—as if suddenly caught in a drenching Diaper Douse.",
            "4": "The raiment's soothing aura grows more potent. You may use Soothing Miracle one extra time per short rest.",
            "7": "The disruptive field of Diaper Douse expands by an additional 5 ft., and its saving throw DC increases by 1. Additionally, Absorbent Shield now reduces damage by 1d10 instead of 1d8.",
            "11": "You gain an enhanced protective synergy: once per short rest, you can combine Soothing Miracle and Absorbent Shield. When activated in tandem, you gain temporary hit points equal to your level while also reducing the next incoming attack's damage by an extra 1d8.",
            "14": "Unlock the ultimate \"Diaper Time-Out\" ability. Once per long rest, as an action, you force all enemies within 15 ft. to make a Wisdom saving throw (DC equal to 16 or your class save DC, whichever is higher). On a failure, affected creatures become incapacitated—overwhelmed by the absurdity and cuteness of your raiment—for 1 round."
        }
    },
    "Mephidium-Coda": {
        fullDescription: "Embodying toxic misfortune and grimy power, the Mephidium Coda transforms your battle presence into a malodorous curse. When soiled by combat's grime, its venomous energies intensify—buffing your poison attacks and, with devilish regularity, cursing friend and foe alike with untimely accidents.",
        levelFeatures: {
            "3": "**Toxic Emission:** As an action, you can activate the Mephidium Coda to exude a noxious cloud in a 10‑ft radius. Every creature in that area must succeed on a Constitution saving throw (DC = your class save DC) or take 1d6 poison damage and become \"soiled\"—their next attack roll is made at disadvantage until the start of your next turn. *If you are wearing a messy diaper, the DC increases by +2.*\n**Soiled Buff:** When the Coda is in its \"soiled\" state (triggered whenever you load your diaper or when environmental grime or battle conditions \"dirty\" the raiment), you gain a +1 bonus to poison attack rolls and all of your poison effects deal an additional 1d4 points of poison damage.\n**Malodorous Fortitude:** You gain resistance to poison damage and advantage on saving throws against poison-based effects. You gain advantage against poison and gas-based effects that might cause you to mess your diaper, but you may voluntarily fail such a secondary effect to take half-damage or otherwise negate a primary effect (such as negating the damage of a Magic Messle missile by dumping butt into one's hero huggies).",
            "3-upgrade": "Once per short rest, you may command the Coda to surge with extra rancor. This ability increases its poison damage by 1d4 for the next activation and temporarily boosts the saving throw DC of its Toxic Emission by 1 until the start of your next turn.",
            "6": "The area of Toxic Emission expands to 15‑ft, and any creature that fails the saving throw becomes more susceptible: they take an additional 1d4 poison damage from subsequent poison effects you inflict until the start of your next turn.",
            "8": "When your Mephidium Coda is soiled, your next attack within the following round deals an extra 1d8 poison damage. Additionally, any target hit must succeed on a Constitution saving throw (DC increased by 1) or be poisoned for 1 round.",
            "12": "Unleash the ultimate \"Accidental Misfortune.\" Once per long rest, you may invoke this power as an action. All enemies—and any unfortunate allies within a 15‑ft radius—must immediately make a Constitution saving throw (DC = 16 or your class save DC, whichever is higher). On a failure, they are overwhelmed by a vile stench and become incapacitated with nausea (treated as the poisoned condition) for 1 round while taking 2d8 poison damage. Until the start of your next long rest, any activation of Toxic Emission further increases your bonus to poison-based effect rolls by +2, and your resistance to poison damage is doubled."
        }
    }
};
