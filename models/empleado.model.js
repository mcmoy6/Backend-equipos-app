const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Empleado = dbConnection.define('empleado', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED
    },
    label: {
       type: DataTypes.STRING 
    },
    apellido_pat: {
        type: DataTypes.STRING
    },
    apellido_mat: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    denom_puesto: {
        type: DataTypes.STRING
    },
    denom_servicio: {
        type: DataTypes.STRING
    }
   
           
});

module.exports = Empleado;