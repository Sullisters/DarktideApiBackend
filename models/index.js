const Class = require('./Class');
const MeleeBlessings = require('./MeleeBlessings');
const MeleeSubtypes = require('./MeleeSubtypes');
const MeleeTags = require('./MeleeTags');
const MeleeWeapons = require('./MeleeWeapons');
const PrimaryAction = require('./PrimaryAction');
const SecondaryAction = require('./SecondaryAction');
const SpecialAction = require('./SpecialAction');

const MeleeWeaponsSubtypes = require('./MeleeWeaponsSubtypes');

MeleeSubtypes.belongsToMany(MeleeWeapons, {
    through: MeleeWeaponsSubtypes,
    foreignKey: 'meleeSubtypes_id',
});

MeleeWeapons.belongsToMany(MeleeSubtypes, {
    through: MeleeWeaponsSubtypes,
    foreignKey: 'meleeWeapons_id',
});

module.exports = {
    Class,
    MeleeBlessings,
    MeleeSubtypes,
    MeleeTags,
    PrimaryAction,
    SecondaryAction,
    SpecialAction,
    MeleeWeaponsSubtypes,
    MeleeWeapons
};