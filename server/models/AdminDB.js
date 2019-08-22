var mysql = require('mysql');

var adminpool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'Aa123456',
    database: 'admin',
    port: 3306,
    multipleStatements: true
});

module.exports = adminpool;