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
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
        },
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
        //Subtypes
            //Multiple subtypes labeled 1-x
        // subtypes: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
            //Primary action
        primeAction: {
            type: DataTypes.STRING,
            allowNull: false,
        },
                //Strikedown
                //Assassin
                //Relentless

            //Secondary action
        secAction: {
            type: DataTypes.STRING,
            allowNull: false,
        },
                //Strikedown
                //Vanguard
                //Relentless

            //Special action
        specAction: {
            type: DataTypes.STRING,
            allowNull: false,
        },
                //Special melee attack
                //Activate
                //Punch
                //Defensive stance
                //Parry
                //Warp charged

            //Possible blessings
        // blessings: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // }
                //Blessings labelled 1-x; showing all blessings
    },
    { sequelize }
);

module.exports = MeleeWeapons;