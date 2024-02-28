const mysql = require("mysql");


/**
 * Host: sql11.freesqldatabase.com
Database name: sql11687457
Database user: sql11687457
Database password: A7kdA7XEXB
Port number: 3306
 */
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mistdjva2@.com",
  database: "db"
})

module.exports = db;