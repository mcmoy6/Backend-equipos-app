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
    nombre: {
        type: DataTypes.STRING
    },
    rfc: {
        type: DataTypes.STRING
    },
    denom_puesto: {
        type: DataTypes.STRING
    },
    other: {
        type: DataTypes.STRING
    },
    horario: {
        type: DataTypes.STRING
    },
    adscripcion: {
        type: DataTypes.STRING
    }
   
           
});

module.exports = Empleado;