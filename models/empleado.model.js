const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Empleado = dbConnection.define('empleado', {
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
    nom_completo:{
        type: DataTypes.STRING
    },
    curp:{
        type: DataTypes.STRING
    },
    rfc: {
        type: DataTypes.STRING
    },
    denom_puesto: {
        type: DataTypes.STRING
    },
    denom_servicio: {
        type: DataTypes.STRING
    },
    denom_centro_trabajo: {
        type: DataTypes.STRING
    }
           
});

module.exports = Empleado;