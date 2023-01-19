const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Subtypes extends Model {}

Subtypes.init(
    {
        subtype: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { sequelize, createdAt: false, updatedAt: false }
);

module.exports = Subtypes;