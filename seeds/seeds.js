const sequelize = require('../config/connection');
const {

} = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    
};

seedDatabase();