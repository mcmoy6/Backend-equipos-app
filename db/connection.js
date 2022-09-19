const { Sequelize } = require('sequelize');


const dbConnection = new Sequelize('node', 'root', 'Entermoy6', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});



dbConnection.sync({}); // Solucionar SequelizeConnectionRefusedError: connect ECONNREFUSED

module.exports = dbConnection;