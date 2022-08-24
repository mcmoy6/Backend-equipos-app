const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Movimiento = dbConnection.define('movimiento', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED
      },
    tipo_movimiento: {
        type: DataTypes.STRING
    },
    tipo_dispositivo:{
        type: DataTypes.STRING
    },
    equipo_proporciona:{
        type: DataTypes.STRING
    },
    equipo_recibe:{
        type: DataTypes.STRING
    },
    justificacion:{
        type: DataTypes.STRING
    },
    createBy: {
        type: DataTypes.BIGINT.UNSIGNED
    }  
});

module.exports = Movimiento;
