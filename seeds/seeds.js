const sequelize = require('../config/connection');
const {
    MeleeWeapons,
    Tags,
    MeleeTags,
    Class,
    ClassMelee,
    Subtypes,
    Blessings,
    MeleeBlessings
} = require('../models');

const meleeWeaponsSeedData = require('./meleeWeaponsSeedData.json');
const tagsSeedData = require('./tagsSeedData.json');
const meleeTagsSeedData = require('./meleeTagsSeedData.json');
const classSeedData = require('./classSeedData.json');
const classMeleeSeedData = require('./classMeleeSeedData.json');
const subtypesSeedData = require('./subtypesSeedData.json');
const blessingsSeedData = require('./blessingsSeedData.json');
const meleeBlessingsSeedData = require('./meleeBlessingsSeedData.json');

// const meleeWeaponsData = [
//     {
//         // image : '',
//         // class: [
//         //     'Preacher Zealot'
//         // ],
//         // subtypes: [
//         //     'Crucis Mk II Thunder Hammer'
//         // ],
//         // primeAction: 'Strikedown',
//         // secAction: 'Relentless',
//         // specAction: 'Activate',
//         // blessings: [
//         //     'Hammerblow',
//         //     'Headtaker',
//         //     'Momentum',
//         //     'Shock & Awe',
//         //     'Skullcrusher',
//         //     'Slaughterer',
//         //     'Thrust',
//         //     'Thunderstrike',
//         //     'Trauma'
//         // ]
//     },
// ];

// const tagsData = [
//     {
//         tags: 'Crowd Control'
//     },
//     {
//         tags: 'Obliterating'
//     }
// ];

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const meleeWeapons = await MeleeWeapons.bulkCreate(meleeWeaponsSeedData);
    const tags = await Tags.bulkCreate(tagsSeedData);
    const meleeTags = await MeleeTags.bulkCreate(meleeTagsSeedData);
    const classes = await Class.bulkCreate(classSeedData);
    const classMelee = await ClassMelee.bulkCreate(classMeleeSeedData);
    const subtypes = await Subtypes.bulkCreate(subtypesSeedData);
    const blessings = await Blessings.bulkCreate(blessingsSeedData);
    const meleeBlessings = await MeleeBlessings.bulkCreate(meleeBlessingsSeedData);
};

seedDatabase();