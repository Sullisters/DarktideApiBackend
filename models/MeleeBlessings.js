const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class MeleeBlessings extends Model {}

MeleeBlessings.init(
    {
        MeleeWeaponId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        BlessingId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    { sequelize, createdAt: false, updatedAt: false}
);

module.exports = MeleeBlessings;