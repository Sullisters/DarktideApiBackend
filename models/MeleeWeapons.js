const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class MeleeWeapons extends Model {}

MeleeWeapons.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { sequelize, createdAt: false, updatedAt: false }
);

module.exports = MeleeWeapons;