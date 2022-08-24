const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Impresora = dbConnection.define('impresora', {
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
    tipo_impresora: {
        type: DataTypes.STRING
    },
    ip_host:{
        type: DataTypes.STRING
    },
    contador_bn:{
        type: DataTypes.BIGINT.UNSIGNED
    },
    contador_color:{
        type: DataTypes.BIGINT.UNSIGNED
    },
    ubicacion:{
        type: DataTypes.STRING
    },
    estatus:{
        type: DataTypes.STRING
    },
    createdBy: {
        type: DataTypes.BIGINT.UNSIGNED
    }  
});

module.exports = Impresora;
