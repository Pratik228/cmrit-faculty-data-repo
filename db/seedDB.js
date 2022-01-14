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

const { CONNECTION_CONFIG } = require("./dbHelper");

const seedDatabase = async function () {
  try {
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    if (!connection) {
      throw new Error("Could not create connection");
    }
    const execQuery = util.promisify(connection.query.bind(connection));
    await createTable(execQuery);

    console.log("Created Tables Successfully!");
  } catch (err) {
    console.error(err);
  }
};

const createTable = async function (execQuery) {
  try {
    await execQuery(CREATE_USER_TABLE);
    await execQuery(CREATE_DEPARTMENT_TABLE);
    await execQuery(CREATE_FACULTY_TABLE);
    await execQuery(CREATE_AWARDS_TABLE);
    await execQuery(CREATE_PATENT_TABLE);
    await execQuery(CREATE_FACULTY_SERVED_AS_TABLE);
    await execQuery(CREATE_RESULTS_TABLE);
    process.exit();
  } catch (err) {
    throw err;
  }
};

seedDatabase();
