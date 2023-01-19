const MeleeWeapons = require('./MeleeWeapons');
const Tags = require('./Tags');
const MeleeTags = require('./MeleeTags');
const Class = require('./Class');
const ClassMelee = require('./ClassMelee');

// MeleeWeapons.hasMany(MeleeTags);
// MeleeTags.belongsTo(MeleeWeapons);

// Tags.hasMany(MeleeTags);
// MeleeTags.belongsTo(Tags);

//Many-to-many
MeleeWeapons.belongsToMany(Tags, { through: MeleeTags });
Tags.belongsToMany(MeleeWeapons, { through: MeleeTags });

MeleeWeapons.belongsToMany(Class, { through: ClassMelee});
Class.belongsToMany(MeleeWeapons, { through: ClassMelee});

module.exports = {
    MeleeWeapons,
    Tags,
    MeleeTags,
    Class,
    ClassMelee
};