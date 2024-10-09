const mysql = require('mysql2');

// membuat pool untuk mengakses database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'citech_kpu',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;