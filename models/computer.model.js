const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Computer = dbConnection.define('computer', {
    fuap: {
       type: DataTypes.STRING 
    },
    sitio: {
        type: DataTypes.STRING
    },
    denomSitio: {
        type: DataTypes.STRING
    },
    serieCpu: {
        type: DataTypes.STRING
    },
    serieMonitor:{
        type: DataTypes.STRING
    },
    serieNobreakAnt:{
        type: DataTypes.STRING
    },
    serieNobreak:{
        type: DataTypes.STRING
    },
    ip: {
        type: DataTypes.STRING
    },
    nombreEquipo: {
        type: DataTypes.STRING
    },
    cuenta: {
        type: DataTypes.STRING
    },
    numEmpleado: {
        type: DataTypes.STRING
    },
    nombreUsuario: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    puesto: {
        type: DataTypes.STRING
    },
    area: {
        type: DataTypes.STRING
    },
    extension: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    observaciones: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    idUser: {
        type: DataTypes.BIGINT.UNSIGNED
       
    },
           
});

module.exports = Computer;