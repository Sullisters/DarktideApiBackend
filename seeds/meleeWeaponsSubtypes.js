const { MeleeWeaponsSubtypes } = require('../models');

const meleeWeaponsSubtypesData = [
    {
        meleeSubtypes_id: 1,
        meleeWeapons_id: 1,
    }
];

const seedMeleeWeaponSubtypes = () => MeleeWeaponsSubtypes.bulkCreate(meleeWeaponsSubtypesData);

module.exports = seedMeleeWeaponSubtypes;