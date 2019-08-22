var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'Aa123456',
    database: 'users',
    port: 3306,
    multipleStatements: true
});

module.exports  = pool;