const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Blessings extends Model {}

Blessings.init(
    {
        blessing: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    { sequelize, createdAt: false, updatedAt: false }
);

module.exports = Blessings;