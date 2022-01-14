const mysql = require("mysql2");

const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});

const CONNECTION_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const connection = mysql.createConnection(CONNECTION_CONFIG);

connection.connect(function (err) {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = { connection, CONNECTION_CONFIG };
