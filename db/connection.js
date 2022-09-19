const { Sequelize } = require('sequelize');


const dbConnection = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});



dbConnection.sync({}); // Solucionar SequelizeConnectionRefusedError: connect ECONNREFUSED

module.exports = dbConnection;