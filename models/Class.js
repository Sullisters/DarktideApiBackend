const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Class extends Model {}

Class.init(
    {
        class: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { sequelize }
);

module.exports = Class;