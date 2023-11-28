const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Mainbilcomputer = dbConnection.define('mainbilcomputer', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    fuap: {
       type: DataTypes.STRING 
    },
    sitio: {
        type: DataTypes.STRING
    },
    denomSitio: {
        type: DataTypes.STRING
    },
    marcaCpu: {
        type: DataTypes.STRING
    },
    serieCpu: {
        type: DataTypes.STRING
    },
    serieMonitor:{
        type: DataTypes.STRING
    },
    serieNobreak:{
        type: DataTypes.STRING
    },
    serieCandado:{
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
    aplicativoInst: {
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

module.exports = Mainbilcomputer;