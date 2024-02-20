const mysql = require("mysql");


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mistdjva2@.com",
  database: "db"
})

module.exports = db;