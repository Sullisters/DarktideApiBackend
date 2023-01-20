const MeleeWeapons = require('./MeleeWeapons');
const Tags = require('./Tags');
const MeleeTags = require('./MeleeTags');
const Class = require('./Class');
const ClassMelee = require('./ClassMelee');
const Subtypes = require('./Subtypes');
const Blessings = require('./Blessings');
const MeleeBlessings = require('./MeleeBlessings');

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

//Weapon Blessings (Melee)
MeleeWeapons.belongsToMany(Blessings, { through: MeleeBlessings });
Blessings.belongsToMany(MeleeWeapons, { through: MeleeBlessings });

module.exports = {
    MeleeWeapons,
    Tags,
    MeleeTags,
    Class,
    ClassMelee,
    Subtypes,
    Blessings,
    MeleeBlessings
};