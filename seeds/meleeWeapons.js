const sequelize = require('../config/connection');

const { MeleeWeapons } = require('../models');

const meleeWeaponsData = [
    {
        name: 'Axe (Combat)',
        desc: 'The Combat Axe is a one-handed melee weapon',
    }
];

const seedMeleeWeapons = () => MeleeWeapons.bulkCreate(meleeWeaponsData);

module.exports = seedMeleeWeapons;