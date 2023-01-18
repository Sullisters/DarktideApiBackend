const seedClass = require('./class');
const seedMeleeBlessings = require('./meleeBlessings');
const seedMeleeSubtypes = require('./meleeSubtypes');
const seedMeleeTags = require('./meleeTags');
const seedMeleeWeapons = require('./meleeWeapons');
const seedPrimaryAction = require('./primaryAction');
// const seedRangedSubtypes = require('./rangedSubtypes');
// const seedRangedWeapons = require('./rangedWeapons');
const seedSecondaryAction = require('./secondaryAction');
const seedSpecialAction = require('./specialAction');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('DATABASE SYNCED');

    await seedClass();
    console.log('CLASSES SYNCED');

    await seedMeleeBlessings();
    console.log('MELEE BLESSINGS SYNCED');

    await seedMeleeSubtypes();
    console.log('MELEE SUBTYPES SYNCED');

    await seedMeleeTags();
    console.log('MELEE TAGS SYNCED');

    await seedMeleeWeapons();
    console.log('MELEE WEAPONS SYNCED');

    await seedPrimaryAction();
    console.log('PRIMARY ACTIONS SYNCED');

    // await seedSecondaryAction();
    // console.log('SECONDARY ACTIONS SYCNED');

    // await seedSpecialAction();
    // console.log('SPECIAL ACTIONS SYNCED');

    process.exit(0);
};

seedAll();