const MeleeWeapons = require('./MeleeWeapons');
const Tags = require('./Tags');
// const RangedWeapons = require('./RangedWeapons');

// MeleeWeapons.hasMany(Tags);
// Tags.belongsTo(MeleeWeapons);

// MeleeWeapons.hasMany(Tags);
// Tags.belongsToMany(MeleeWeapons, { through: 'MeleeWeaponsTags' });

Tags.belongsToMany(MeleeWeapons, { through: 'meleeWeaponsTags' });
MeleeWeapons.belongsToMany(Tags, { through: 'meleeWeaponsTags' });

module.exports = {
    MeleeWeapons,
    Tags
    // RangedWeapons
};