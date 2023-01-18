const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class MeleeWeapons extends Model {}

MeleeWeapons.init(
    {
        //Image of weapon
        // image: {

        // },
        //Name of weapon
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //Weapon tags
        // tags: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        //Weapon description
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //Available classes
        // class: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // Subtypes
        // subtypes: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
            //Primary action
        // primeAction: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        //Secondary action
        // secAction: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        //Special action
        // specAction: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        //Possible blessings
        // blessings: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // }
    },
    { sequelize }
);

module.exports = MeleeWeapons;