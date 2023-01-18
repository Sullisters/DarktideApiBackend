const sequelize = require('../config/connection');

const { SecondaryAction } = require('../models');

const secondaryActionData = [
    {
        secondaryAction: 'Strikedown'
    },
];

const seedSecondaryAction = () => SecondaryAction.bulkCreate(secondaryActionData);

module.exports = seedSecondaryAction;