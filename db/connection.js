const { Sequelize } = require('sequelize');
require('dotenv').config();


const dbConnection = new Sequelize('node', 'root', 'Entermoy6', {
    host: 'localhost',
    port:3306,
    dialect: 'mysql',
    logging: false
});

// const dbConnection = new Sequelize(process.env.BD_NAME, process.env.BD_USERNAME, process.env.BD_PASS, {
//     host: 'bwobk3prlqiftqyareyd-mysql.services.clever-cloud.com',
//     port: 3306,
//     dialect: 'mysql',
//     logging: false
// });

dbConnection.sync({}); // Solucionar SequelizeConnectionRefusedError: connect ECONNREFUSED

module.exports = dbConnection;