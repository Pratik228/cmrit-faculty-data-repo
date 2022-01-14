const mysql = require("mysql2");
const util = require("util");

const {
  CREATE_USER_TABLE,
  CREATE_DEPARTMENT_TABLE,
  CREATE_FACULTY_TABLE,
  CREATE_AWARDS_TABLE,
  CREATE_PATENT_TABLE,
  CREATE_FACULTY_SERVED_AS_TABLE,
  CREATE_RESULTS_TABLE,
} = require("./dbTable");

const { CONNECTION_CONFIG, getConnection } = require("./db.config");

const seedDatabase = async function () {
  try {
    const sql = await getConnection();
    await createTable(sql);
    console.log("Created Tables Successfully :)");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

const createTable = async function (sql) {
  try {
    await sql.query(CREATE_USER_TABLE);
    await sql.query(CREATE_DEPARTMENT_TABLE);
    await sql.query(CREATE_FACULTY_TABLE);
    await sql.query(CREATE_AWARDS_TABLE);
    await sql.query(CREATE_PATENT_TABLE);
    await sql.query(CREATE_FACULTY_SERVED_AS_TABLE);
    await sql.query(CREATE_RESULTS_TABLE);
  } catch (err) {
    throw err;
  }
};

seedDatabase();
