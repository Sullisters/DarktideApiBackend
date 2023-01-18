const sequelize = require('../config/connection');

const { SpecialAction } = require('../models');

const specialActionData = [
    {
        specialAction: 'Special Melee Attack'
    }
];

const seedSpecialAction = () => SpecialAction.bulkCreate(specialActionData);

module.exports = seedSpecialAction;