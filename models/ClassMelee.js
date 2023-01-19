const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class ClassMelee extends Model {}

ClassMelee.init(
    {
        ClassId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    { sequelize, createdAt: false, updatedAt: false}
);

module.exports = ClassMelee;