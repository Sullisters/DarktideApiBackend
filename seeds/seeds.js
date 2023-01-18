const sequelize = require('../config/connection');
const {
    MeleeWeapons,
    Tags
    // RangedWeapons
} = require('../models');

const meleeWeaponsData = [
    {
        // image : '',
        name: 'Thunder Hammer',
        tags: [
            'Crowd Control',
            'Obliterating'
        ],
        desc: 'The Thunder Hammer is a Zealot specific weapon',
        class: [
            'Preacher Zealot'
        ],
        subtypes: [
            'Crucis Mk II Thunder Hammer'
        ],
        primeAction: 'Strikedown',
        secAction: 'Relentless',
        specAction: 'Activate',
        blessings: [
            'Hammerblow',
            'Headtaker',
            'Momentum',
            'Shock & Awe',
            'Skullcrusher',
            'Slaughterer',
            'Thrust',
            'Thunderstrike',
            'Trauma'
        ]
    },
]

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const meleeWeapons = await MeleeWeapons.bulkCreate(meleeWeaponsData);
    const tags = await Tags.bulkCreate(tagsData);
};

seedDatabase();