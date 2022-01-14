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
    const db = await getConnection();
    await createTable(db);
    console.log("Created Tables Successfully :) ");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

const createTable = async function (db) {
  try {
    await db.query(CREATE_USER_TABLE);
    await db.query(CREATE_DEPARTMENT_TABLE);
    await db.query(CREATE_FACULTY_TABLE);
    await db.query(CREATE_AWARDS_TABLE);
    await db.query(CREATE_PATENT_TABLE);
    await db.query(CREATE_FACULTY_SERVED_AS_TABLE);
    await db.query(CREATE_RESULTS_TABLE);
  } catch (err) {
    throw err;
  }
};

seedDatabase();
