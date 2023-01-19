const MeleeWeapons = require('./MeleeWeapons');
const Tags = require('./Tags');
const MeleeTags = require('./MeleeTags');
const Class = require('./Class');
const ClassMelee = require('./ClassMelee');
const Subtypes = require('./Subtypes');

// MeleeWeapons.hasMany(MeleeTags);
// MeleeTags.belongsTo(MeleeWeapons);

// Tags.hasMany(MeleeTags);
// MeleeTags.belongsTo(Tags);

//Melee Weapon Tags
MeleeWeapons.belongsToMany(Tags, { through: MeleeTags });
Tags.belongsToMany(MeleeWeapons, { through: MeleeTags });

//Class specific Melee Weapons
MeleeWeapons.belongsToMany(Class, { through: ClassMelee });
Class.belongsToMany(MeleeWeapons, { through: ClassMelee });

//Melee Weapon Subtypes
MeleeWeapons.hasMany(Subtypes);
Subtypes.belongsTo(MeleeWeapons);

module.exports = {
    MeleeWeapons,
    Tags,
    MeleeTags,
    Class,
    ClassMelee,
    Subtypes
};