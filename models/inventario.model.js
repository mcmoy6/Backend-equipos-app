const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Inventario = dbConnection.define('inventario', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED
    },
    area: {
        type: DataTypes.STRING
    },
    fecha_asignacion: {
        type: DataTypes.DATE
    },
    perfil: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING
    },
    modelo: {
        type: DataTypes.STRING
    },
    serie_cpu: {
        type: DataTypes.STRING
    },
    serie_laptop: {
        type: DataTypes.STRING
    },
    serie_monitor: {
        type: DataTypes.STRING
    },
    dockstation: {
        type: DataTypes.STRING
    },
    nobreak: {
        type: DataTypes.STRING
    },
    camara: {
        type: DataTypes.STRING
    },
    canion: {
        type: DataTypes.STRING
    },
    ip: {
        type: DataTypes.STRING
    },
    mac_adress: {
        type: DataTypes.STRING
    },
    hostname: {
        type: DataTypes.STRING
    },
    cuenta_user: {
        type: DataTypes.STRING
    },
    usuario_ad: {
        type: DataTypes.STRING
    },
    fuap_actual: {
        type: DataTypes.STRING
    },
    fuap_nuevo: {
        type: DataTypes.STRING
    },
    paterno: {
        type: DataTypes.STRING
    },
    materno: {
        type: DataTypes.STRING
    },
    nombre_usuario: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    } 
});

module.exports = Inventario;