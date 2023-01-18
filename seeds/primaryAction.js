const sequelize = require('../config/connection');

const { PrimaryAction } = require('../models');

const primaryActionData = [
    {
        primaryAction: 'Strikedown'
    },
];

const seedPrimaryAction = () => PrimaryAction.bulkCreate(primaryActionData);

module.exports = seedPrimaryAction;