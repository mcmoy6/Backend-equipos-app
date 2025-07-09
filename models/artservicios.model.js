const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');


const Artservicio = dbConnection.define('artservicio', {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    idEmpresa: {
        type: DataTypes.STRING
    },
    idSucursal: {
        type: DataTypes.STRING
    },
    articuloServicio: {
        type: DataTypes.STRING
    },
    claveArtServ: {
        type: DataTypes.STRING
    },
    claveUnidad: {
        type: DataTypes.STRING
    },
    clave: {
        type: DataTypes.STRING
    },
    codigoBarras: {
        type: DataTypes.STRING
    },
    idCategoria: {
        type: DataTypes.STRING
    },
    idMarca: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
}, {
    tableName: 'articuloservicios',
    timestamps: true
});

module.exports = Artservicio;