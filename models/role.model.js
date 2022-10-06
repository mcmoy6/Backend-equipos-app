const { DataTypes } = require('sequelize');
const  dbConnection  = require('../db/connection');

const Role = dbConnection.define('role', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED
      },
    role: {
        type: DataTypes.STRING
    }
});

module.exports = Role;
