const sequelize = require('../config/connection');

const { MeleeBlessings } = require('../models');

const meleeBlessingsData = [
    {
        blessings: 'All or nothing'
    },
    {
        blessings: 'Brutal Momentum'
    },
    {
        blessings: 'Decapitator'
    },
    {
        blessings: 'Decimator (Combat Axe)'
    },
    {
        blessings: 'Headtaker'
    },
    {
        blessings: 'Limbsplitter'
    },
    {
        blessings: 'Shred'
    },
    {
        blessings: 'Thrust'
    },
    {
        blessings: 'Thunderous'
    },
];

const seedMeleeBlessings = () => MeleeBlessings.bulkCreate(meleeBlessingsData);

module.exports = seedMeleeBlessings;