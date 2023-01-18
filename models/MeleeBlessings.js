const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Blessings extends Model{}

Blessings.init(
    {
        //Possible blessings
        blessings: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { sequelize }
);

module.exports = Blessings;