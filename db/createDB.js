const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});

const mysql = require("mysql2");
const util = require("util");

const CONNECTION_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const DROP_DATABASE = `DROP DATABASE IF EXISTS FACULTY_DB`;
const CREATE_DATABASE = `CREATE DATABASE IF NOT EXISTS FACULTY_DB`;

const createDBConnection = async () => {
  try {
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    if (!connection) {
      throw new Error("Could not create connection");
    }
    const execQuery = util.promisify(connection.query.bind(connection));
    await execQuery(DROP_DATABASE);
    await execQuery(CREATE_DATABASE);
    console.log("Faculty Database Created Successfully :) ");
    connection.end();
  } catch (error) {
    console.error(error);
  }
};

createDBConnection();
