const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');


const Telefono = dbConnection.define('telefono', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    id_sitio: {
        type: DataTypes.STRING 
     },
     sitio: {
        type: DataTypes.STRING 
     },
     clue: {
        type: DataTypes.STRING 
     },
     adscripcion: {
        type: DataTypes.STRING 
     },
     paterno: {
        type: DataTypes.STRING 
     },
     materno: {
        type: DataTypes.STRING 
     },
     nombre: {
        type: DataTypes.STRING 
     },
     serie: {
      type: DataTypes.STRING
     },
     mac: {
      type: DataTypes.STRING
     },
     display: {
        type: DataTypes.STRING 
     },
     tipo_conexion: {
        type: DataTypes.STRING 
     },
     ubicacion: {
        type: DataTypes.STRING 
     },
     rack: {
        type: DataTypes.STRING 
     },
     extension: {
        type: DataTypes.STRING 
     },
});

module.exports = Telefono;