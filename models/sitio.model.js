const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Sitio = dbConnection.define('sitio', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED
      },
    id_sitio: {
        type: DataTypes.STRING
    },
    denominacion_sitio:{
        type: DataTypes.STRING
    },
    direccion:{
        type: DataTypes.STRING
    }    
});

module.exports = Sitio;
