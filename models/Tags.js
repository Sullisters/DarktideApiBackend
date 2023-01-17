const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tags extends Model{}

Tags.init(
    {
        //Weapon tags
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { sequelize }
);

module.exports = Tags;