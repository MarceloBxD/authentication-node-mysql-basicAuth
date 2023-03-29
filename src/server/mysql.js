// conectando ao banco de dados mysql
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const host = process.env.MYSQL_HOST;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DATABASE;

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

module.exports = connection;
