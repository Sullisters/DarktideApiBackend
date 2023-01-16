const sequelize = require('../config/connection');
const {
    MeleeWeapons,
    // RangedWeapons
} = require('../models');

const meleeWeaponsData = [
    {
        // image : '',
        name: 'Axe (Combat)',
        // tags: [
        //     'Strikedown',
        //     'Versatile'
        // ],
        desc: 'The Combat Axe is a one-handed melee weapon',
        // class: [
        //     'Zealot Preacher',
        //     'Veteran Sharpshooter',
        //     'Psyker Psykinetic'
        // ],
        // subtypes: [
        //     'Rashad Mk II Combat Axe',
        //     'Antax Mk V Combat Axe',
        //     'Achlys Mk VIII Combat Axe'
        // ],
        primeAction: 'Strikedown',
        secAction: 'Strikedown',
        specAction: 'Special Melee Attack',
        // blessings: [
        //     'All or Nothing',
        //     'Brutal Momentum',
        //     'Decapitator',
        //     'Decimator (Combat Axe)',
        //     'Headtaker',
        //     'Limbsplitter',
        //     'Shred',
        //     'Thrust',
        //     'Thunderous'
        // ]
    },
    // {
    //     // image : '',
    //     name: 'Axe (Tactical)',
    //     tags: [
    //         'Flurry',
    //         'Assassin'
    //     ],
    //     desc: 'The Tactical Axe is a melee weapon',
    //     class: [
    //         'Zealot Preacher',
    //         'Veteran Sharpshooter'
    //     ],
    //     subtypes: [
    //         'Atrox Mk VII Tactical Axe',
    //         'Atrox Mk II Tactical Axe',
    //         'Atrox Mk IV Tactical Axe'
    //     ],
    //     primeAction: 'Assassin',
    //     secAction: 'Strikedown',
    //     specAction: 'Special Melee Attack',
    //     blessings: [
    //         'All or Nothing',
    //         'Brutal Momentum',
    //         'Decapitator',
    //         'Decimator (Tactical Axe)',
    //         'Headtaker',
    //         'Limbsplitter',
    //         'Shred'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Chainaxe',
    //     tags: [
    //         'High Damage',
    //         'Ravage'
    //     ],
    //     desc: 'The Chainaxe is a heavy melee weapon',
    //     class: [
    //         'Zealot Preacher',
    //         'Veteran Sharpshooter'
    //     ],
    //     subtypes: [
    //         'Orestes Mk IV Chainaxe'
    //     ],
    //     primeAction: 'Strikedown',
    //     secAction: 'Vanguard',
    //     specAction: 'Activate',
    //     blessings: [
    //         'Bloodletter',
    //         'Headtaker',
    //         'Rev It Up',
    //         'Shred',
    //         'Slaughterer',
    //         'Thrust',
    //         'Thunderous'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Chainsword',
    //     tags: [
    //         'Versatile',
    //         'Saw Weapon'
    //     ],
    //     desc: 'The Chainsword is a one-handed melee weapon',
    //     class: [
    //         'Zealot Preacher',
    //         'Veteran Sharpshooter',
    //         'Psyker Psykinetic'
    //     ],
    //     subtypes: [
    //         'Cadia Mk IV ASsault Chainsword'
    //     ],
    //     primeAction: 'Strikedown',
    //     secAction: 'Vanguard',
    //     specAction: 'Activate',
    //     blessings: [
    //         'Bloodletter',
    //         'Bloodthirsty',
    //         'Devastating Strike (Chainsword)',
    //         'Rampage',
    //         'Rev It Up',
    //         'Savage Sweep',
    //         'Shred',
    //         'Skullcrusher',
    //         'Wrath'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Cleaver',
    //     tags: [
    //         'Flurry',
    //         'Cleaving Strike'
    //     ],
    //     desc: 'The Cleaver is an Ogryn specific melee weapon',
    //     class: [
    //         'Ogryn Skullcrusher'
    //     ],
    //     subtypes: [
    //         'Bull Butcher Mk III Cleaver',
    //         'Krourk Mk IV Cleaver',
    //         'Krourk Mk VI Cleaver',
    //     ],
    //     primeAction: 'Strikedown',
    //     secAction: 'Vanguard',
    //     specAction: 'Punch',
    //     blessings: [
    //         'Bash',
    //         'Confident Strike',
    //         'Devastating Strike (Cleaver',
    //         'Momentum',
    //         'Savage Sweep',
    //         'Slaughterer',
    //         'Tenderiser',
    //         'Thrust',
    //         'Unstoppable Force'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Club',
    //     tags: [
    //         'Strikedown',
    //         'Versatile'
    //     ],
    //     desc: 'The Club is an Ogryn specific melee weapon',
    //     class: [
    //         'Ogryn Skullcrusher'
    //     ],
    //     subtypes: [
    //         `'Brunt Special' Mk I Bully Club`
    //     ],
    //     primeAction: 'Vanguard',
    //     secAction: 'Strikedown',
    //     specAction: 'Punch',
    //     blessings: [
    //         'Confident Strike',
    //         'Haymaker',
    //         'Momentum',
    //         'Perfect Strike',
    //         'Skullcrusher',
    //         'Smackdown',
    //         'Thrust',
    //         'Thunderous'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Combat Blade',
    //     tags: [
    //         'Swiftstrike',
    //         'Assassin'
    //     ],
    //     desc: 'The Combat Blade is a one-handed melee weapon',
    //     class: [
    //         'Preacher Zealot',
    //         'Veteran Sharpshooter',
    //         'Psyker Psykinetic'
    //     ],
    //     subtypes: [
    //         'Catachan Mk III Combat Blade'
    //     ],
    //     primeAction: 'Assassin',
    //     secAction: 'Strikedown',
    //     specAction: 'Punch',
    //     blessings: [
    //         'Executor',
    //         'Flesh Tearer',
    //         'Haymaker',
    //         'Lacerate',
    //         'Mercy Killer',
    //         'Precognition',
    //         'Ruthless Backstab',
    //         'Riposte',
    //         'Shred',
    //         'Smackdown',
    //         'Uncanny Strike'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Crusher',
    //     tags: [
    //         'Power Weapon',
    //         'Unstopabble'
    //     ],
    //     desc: 'The Crusher is a Zealot exclusive powered weapon',
    //     class: [
    //         'Preacher Zealot'
    //     ],
    //     subtypes: [
    //         'Indignatus Mk IVe Crusher'
    //     ],
    //     primeAction: 'Relentless',
    //     secAction: 'Strikedown',
    //     specAction: 'Activate',
    //     blessings: [
    //         'Hammerblow',
    //         'Skullcrusher',
    //         'Trauma',
    //         'Thunderstrike'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Eviscerator',
    //     tags: [
    //         'Unstoppable',
    //         'Ravage'
    //     ],
    //     desc: 'The Eviscerator is a Zealot exclusive melee weapon',
    //     class: [
    //         'Preacher Zealot'
    //     ],
    //     subtypes: [
    //         'Tigrus Mk II Heavy Eviscerator'
    //     ],
    //     primeAction: 'Vanguard',
    //     secAction: 'Strikedown',
    //     specAction: 'Activate',
    //     blessings: [
    //         'Bloodletter',
    //         'Momentum',
    //         'Perfect Strike',
    //         'Rampage',
    //         'Rev It Up',
    //         'Savage Sweep',
    //         'Shred',
    //         'Wrath'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Latrine Shovel',
    //     tags: [
    //         'Crowd Control',
    //         'Versatile'
    //     ],
    //     desc: 'The Latrine Shovel is an Ogryn specific melee weapon',
    //     class: [
    //         'Ogryn Skullcrusher'
    //     ],
    //     subtypes: [
    //         'Brute-Brainer Mk III Latrine Shovel'
    //     ],
    //     primeAction: 'Relentless',
    //     secAction: 'Strikedown',
    //     specAction: 'Punch',
    //     blessings: [
    //         'Brutal Momentum',
    //         'Confident Strike',
    //         'Perfect Strike',
    //         'Skullcrusher',
    //         'Thrust',
    //         'Thunderous'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Power Maul',
    //     tags: [
    //         'Crowd Control',
    //         'Power Weapon'
    //     ],
    //     desc: 'The Power Maul is an Ogryn exclusive power weapon',
    //     class: [
    //         'Ogryn Skullcrusher'
    //     ],
    //     subtypes: [
    //         'Achlys Mk I Power Maul'
    //     ],
    //     primeAction: 'Strikedown',
    //     secAction: 'Relentless',
    //     specAction: 'Activate',
    //     blessings: [
    //         'Brutal Momentum',
    //         'Confident Strike',
    //         'Skullcrusher',
    //         'Thunderstrike'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Sapper Shovel',
    //     tags: [
    //         'Versatile',
    //         'Crowd Control'
    //     ],
    //     desc: 'The Sapper Shovel is a Veteran specific melee weapon',
    //     class: [
    //         'Veteran Sharpshooter'
    //     ],
    //     subtypes: [
    //         'Standard-Issue Munitorium Sapper Shovel'
    //     ],
    //     primeAction: 'Strikedown',
    //     secAction: 'Relentless',
    //     specAction: 'Special Melee Attack',
    //     blessings: [
    //         'All or Nothing',
    //         'Decimator (Sapper Shovel)',
    //         'Hammerblow',
    //         'Limbsplitter',
    //         'Skullcrusher',
    //         'Take a Swing',
    //         'Thrust',
    //         'Thunderstrike',
    //         'Uncanny Strike'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Slab Sheild',
    //     tags: [
    //         'Crowd Control',
    //         'Defensive'
    //     ],
    //     desc: 'The Shield is an Ogryn specific defensive weapon',
    //     class: [
    //         'Ogryn Skullcrusher'
    //     ],
    //     subtypes: [
    //         'Orox Mk II Battle Maul & Mk II Slab Shield'
    //     ],
    //     primeAction: 'Relentless',
    //     secAction: 'Relentless',
    //     specAction: 'Defensive Stance',
    //     blessings: [
    //         'Brutal Momentum',
    //         'Confident Strike',
    //         'Skullcrusher',
    //         'Thunderstrike'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Sword',
    //     tags: [
    //         'Flurry',
    //         'Crowd Control'
    //     ],
    //     desc: 'The Sword is a melee weapon',
    //     class: [
    //         'Preacher Zealot',
    //         'Veteran Sharpshooter'
    //     ],
    //     subtypes: [
    //         `Catachan Mk VII 'Devil's Claw' Sword`,
    //         `Catachan Mk IV 'Devil's Claw' Sword`,
    //         `Catachan Mk I 'Devil's Claw' Sword`,
    //     ],
    //     primeAction: 'Vanguard',
    //     secAction: 'Relentless',
    //     specAction: 'Parry',
    //     blessings: [
    //         'Devastating Strike',
    //         'Hammerblow',
    //         'Rampage',
    //         'Savage Sweep',
    //         'Shred',
    //         'Skullcrusher',
    //         'Thunderstrike',
    //         'Vicious Slice',
    //         'Wrath'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Sword (Dueling)',
    //     tags: [
    //         'Swiftstrike',
    //         'Assassin'
    //     ],
    //     desc: 'The Duelling Sword is a Psyker-specific melee weapon',
    //     class: [
    //         'Psyker Psykinetic'
    //     ],
    //     subtypes: [
    //         'Maccabian Mk IV Dueling Sword',
    //         'Maccabian Mk II Dueling Sword',
    //         'Maccabian Mk V Dueling Sword',
    //     ],
    //     primeAction: 'Assassin',
    //     secAction: 'Stikedown',
    //     specAction: 'Special Melee Attack',
    //     blessings: [
    //         'Precognition',
    //         'Rampage',
    //         'Riposte',
    //         'Shred',
    //         'Uncanny Strike'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Sword (Force)',
    //     tags: [
    //         'Flurry',
    //         'Force Weapon'
    //     ],
    //     desc: 'The Force Sword is a Psyker specific melee weapon',
    //     class: [
    //         'Psyker Psykinetic'
    //     ],
    //     subtypes: [
    //         'Obscurus Mk II Blaze Force Sword'
    //     ],
    //     primeAction: 'Assassin',
    //     secAction: 'Stikedown',
    //     specAction: 'Warp Charged',
    //     blessings: [
    //         'Blazing Spirit (Force Sword)',
    //         'Bloodthirsty',
    //         'Deflector',
    //         'Executor',
    //         'Exorcist',
    //         'Precognition',
    //         'Riposte',
    //         'Shred',
    //         'Slaughterer',
    //         'Superiority',
    //         'Trauma',
    //         'Uncanny',
    //         'Unstable Power'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Sword (Heavy)',
    //     tags: [
    //         'Cleaving Strike',
    //         'Strikedown'
    //     ],
    //     desc: 'The Heavy Sword is a two-handed melee weapon',
    //     class: [
    //         'Preacher Zealot'
    //     ],
    //     subtypes: [
    //         'Turtolsky Mk VII Heavy Sword',
    //         'Turtolsky Mk VI Heavy Sword',
    //         'Turtolsky Mk IX Heavy Sword',
    //     ],
    //     primeAction: 'Vanguard',
    //     secAction: 'Relentless',
    //     specAction: 'Special Melee Attack',
    //     blessings: [
    //         'Brutal Momentum',
    //         'Deathblow',
    //         'Headtaker (Heavy Sword)',
    //         'Devastating Strike',
    //         'Perfect Strike',
    //         'Rampage',
    //         'Savage Sweep',
    //         'Wrath'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Sword (Power)',
    //     tags: [
    //         'Cleaving Strike',
    //         'Power Weapon'
    //     ],
    //     desc: 'The Power Sword is a Veteran-specific power weapon',
    //     class: [
    //         'Veteran Sharpshooter'
    //     ],
    //     subtypes: [
    //         'Munitorum Km III Power Sword'
    //     ],
    //     primeAction: 'Vanguard',
    //     secAction: 'Relentless',
    //     specAction: 'Activate',
    //     blessings: [
    //         'Brutal Momentum',
    //         'Power Cycler',
    //         'Rampage',
    //         'Savage Sweep',
    //         'Slaughterer',
    //         'Sunder',
    //         'Supercharge',
    //         'Wrath'
    //     ]
    // },
    // {
    //     // image : '',
    //     name: 'Thunder Hammer',
    //     tags: [
    //         'Crowd Control',
    //         'Obliterating'
    //     ],
    //     desc: 'The Thunder Hammer is a Zealot specific weapon',
    //     class: [
    //         'Preacher Zealot'
    //     ],
    //     subtypes: [
    //         'Crucis Mk II Thunder Hammer'
    //     ],
    //     primeAction: 'Strikedown',
    //     secAction: 'Relentless',
    //     specAction: 'Activate',
    //     blessings: [
    //         'Hammerblow',
    //         'Headtaker',
    //         'Momentum',
    //         'Shock & Awe',
    //         'Skullcrusher',
    //         'Slaughterer',
    //         'Thrust',
    //         'Thunderstrike',
    //         'Trauma'
    //     ]
    // },
]

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const meleeWeapons = await MeleeWeapons.bulkCreate(meleeWeaponsData)
};

seedDatabase();