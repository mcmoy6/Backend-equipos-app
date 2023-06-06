const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Telecomunicacion = dbConnection.define('telecomunicaciones', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    tipoDispositivo: {
       type: DataTypes.STRING 
    },
    marca: {
        type: DataTypes.STRING
    },
    modelo: {
        type: DataTypes.STRING
    },
    serie: {
        type: DataTypes.STRING
    },
    macAdress:{
        type: DataTypes.STRING
    },
    capacidadPuertos:{
        type: DataTypes.STRING
    },
    puertosActivos:{
        type: DataTypes.STRING
    },
    puertosLibres: {
        type: DataTypes.STRING
    },
    estatusOperativo: {
        type: DataTypes.STRING
    },
    rack: {
        type: DataTypes.STRING
    },
    ubicacion: {
        type: DataTypes.STRING
    },
    idSitio:{
        type: DataTypes.STRING
    },
    observaciones: {
        type: DataTypes.STRING
    },
    createdBy: {
        type: DataTypes.BIGINT
    }       
});

module.exports = Telecomunicacion;