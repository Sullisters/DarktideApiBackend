const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class SecondaryAction extends Model{}

SecondaryAction.init(
    {
        //Secondary Actions
        SecondaryAction: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { sequelize }
);

module.exports = SecondaryAction;