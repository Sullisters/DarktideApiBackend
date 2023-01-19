const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class MeleeTags extends Model {}

MeleeTags.init(
    {
        MeleeWeaponId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        TagId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    { sequelize, createdAt: false, updatedAt: false}
);

module.exports = MeleeTags;