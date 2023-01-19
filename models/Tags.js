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
    { sequelize }
);

module.exports = Tags;