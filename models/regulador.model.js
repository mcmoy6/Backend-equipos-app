const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Regulador = dbConnection.define('regulator', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED
      },
    serie: {
        type: DataTypes.STRING
    },
    marca:{
        type: DataTypes.STRING
    },
    modelo:{
        type: DataTypes.STRING
    },
    serieCpu:{
        type: DataTypes.STRING
    },
    observaciones: {
        type: DataTypes.STRING
    }
});

module.exports = Regulador;
