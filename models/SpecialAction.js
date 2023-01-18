const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class SpecialAction extends Model{}

SpecialAction.init(
    {
        //Special Actions
        SpecialAction: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { sequelize }
);

module.exports = SpecialAction;