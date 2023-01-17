const MeleeWeapons = require('./MeleeWeapons');
const Tags = require('./Tags');
// const RangedWeapons = require('./RangedWeapons');

MeleeWeapons.hasMany(Tags);
Tags.belongsTo(MeleeWeapons);

module.exports = {
    MeleeWeapons,
    Tags
    // RangedWeapons
};