const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Ticket = dbConnection.define('ticket', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED
      },
    equipo: {
        type: DataTypes.STRING
    },
    tipo_reporte:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    num_reporte:{
        type: DataTypes.STRING
    },
    num_rproveedor:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.STRING
    },
    createBy: {
        type: DataTypes.BIGINT.UNSIGNED
    }  
});

module.exports = Ticket;
