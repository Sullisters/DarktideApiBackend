const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tags extends Model {}

Tags.init(
    {
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { sequelize, createdAt: false, updatedAt: false }
);

module.exports = Tags;