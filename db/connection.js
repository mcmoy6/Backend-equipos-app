const { Sequelize } = require('sequelize');


// const dbConnection = new Sequelize('node', 'root', 'Entermoy6', {
//     host: 'localhost',
//     port:3306,
//     dialect: 'mysql',
//     logging: false
// });

const dbConnection = new Sequelize('bwobk3prlqiftqyareyd', 'ulz82r5jeg1l90ap', 'A6KnaaRYtclsgz0pCZi4', {
    host: 'bwobk3prlqiftqyareyd-mysql.services.clever-cloud.com',
    port: 3306,
    dialect: 'mysql',
    logging: false
});

dbConnection.sync({}); // Solucionar SequelizeConnectionRefusedError: connect ECONNREFUSED

module.exports = dbConnection;