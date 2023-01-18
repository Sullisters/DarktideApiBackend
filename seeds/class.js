const sequelize = require('../config/connection');

const { Class } = require('../models');

const classData = [
    {
        class: 'Ogryn Skullbreaker'
    },
    {
        class: 'Psyker Psykinetic'
    },
    {
        class: 'Veteran Sharpshooter'
    },
    {
        class: 'Preacher Zealot'
    }
];

const seedClass = () => Class.bulkCreate(classData);

module.exports = seedClass;