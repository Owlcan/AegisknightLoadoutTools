// Updated raiment options object with image URLs

const raimentData = {
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
    },
    "Unstable-Fury-Core": {
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
