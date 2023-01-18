const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PrimaryAction extends Model{}

PrimaryAction.init(
    {
        //Primary Actions
        primaryAction: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { sequelize }
);

module.exports = PrimaryAction;