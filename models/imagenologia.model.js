const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Imagenologia = dbConnection.define('imagenologias', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    descripcion: {
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
    clasificacion: {
        type: DataTypes.STRING
    },
    ubicacion:{
        type: DataTypes.STRING
    },
    observaciones:{
        type: DataTypes.STRING
    },
    createdBy: {
        type: DataTypes.BIGINT
    }       
});

module.exports = Imagenologia;