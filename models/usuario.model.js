const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Usuario = dbConnection.define('usuario', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED
      },
    nombre: {
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    id_sitio:{
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }      
});

module.exports = Usuario;

