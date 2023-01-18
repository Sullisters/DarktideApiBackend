const sequelize = require('../config/connection');

const { MeleeTags } = require('../models');

const meleeTagsData = [
    {
        tags: 'Assassin'
    },
    {
        tags: 'Cleaving Strike'
    },
    {
        tags: 'Crowd Control'
    },
    {
        tags: 'Defensive'
    },
    {
        tags: 'Flurry'
    },
    {
        tags: 'Force Weapon'
    },
    {
        tags: 'High Damage'
    },
    {
        tags: 'Obliterating'
    },
    {
        tags: 'Power Weapon'
    },
    {
        tags: 'Ravage'
    },
    {
        tags: 'Saw Weapon'
    },
    {
        tags: 'Strikedown'
    },
    {
        tags: 'Swiftstrike'
    },
    {
        tags: 'Unstoppable'
    },
    {
        tags: 'Versatile'
    },
];

const seedMeleeTags = () => MeleeTags.bulkCreate(meleeTagsData);

module.exports = seedMeleeTags;