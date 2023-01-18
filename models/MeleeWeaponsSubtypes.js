const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class MeleeWeaponsSubtypes extends Model{}

MeleeWeaponsSubtypes.init(
    {
        meleeSubtypes_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'MeleeSubtypes',
                key: 'id'
            }
        },
        meleeWeapons_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'MeleeWeapons',
                key: 'id'
            }
        }
    },
    { sequelize }
);

module.exports = MeleeWeaponsSubtypes;