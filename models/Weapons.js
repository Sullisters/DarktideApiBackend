const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Weapons extends Model {}

Weapons.init(
    {
        //Image of weapon
        img: {

        },
        //Name of weapon
        name: {

        },
        //Weapon description
        desc: {

        },
        //Available classes
        class: {

        },
        //Sybtypes
        subtypes: {

        },
        //Weapon type
        type: {

        },
        //Primary action
        primeAction: {

        },
        //Secondary action
        SecAction: {

        },
        //Special action
        specAction: {

        },
        //Possible blessings
        blessing: {

        }
    }
)