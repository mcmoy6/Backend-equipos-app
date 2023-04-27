const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Cuenta = dbConnection.define('cuentas', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    nombre: {
       type: DataTypes.STRING 
    },
    primerApellido: {
        type: DataTypes.STRING
    },
    segundoApellido: {
        type: DataTypes.STRING
    },
    noEmpleado: {
        type: DataTypes.STRING
    },
    denomPuesto:{
        type: DataTypes.STRING
    },
    denomArea:{
        type: DataTypes.STRING
    },
    ip:{
        type: DataTypes.STRING
    },
    host: {
        type: DataTypes.STRING
    },
    tipoCuenta: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    justificacion: {
        type: DataTypes.STRING
    },
           
});

module.exports = Cuenta;