const sequelize = require('../config/connection');

const { MeleeSubtypes } = require('../models');

const meleeSubtypesData = [
    {
        subtypes: 'Rashad Mk II Combat Axe'
    },
    {
        subtypes: 'Antax Mk V Combat Axe'
    },
    {
        subtypes: 'Achlys Mk VIII Combat Axe'
    },
];

const seedMeleeSubtypes = () => MeleeSubtypes.bulkCreate(meleeSubtypesData);

module.exports = seedMeleeSubtypes;