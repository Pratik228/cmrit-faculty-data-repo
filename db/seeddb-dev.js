const mysql = require("mysql2");

const createDBConnection = async () => {
  try {
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "pratik79",
      database: "faculty_db",
    });
    console.log("Connection Created Successfully", db);
  } catch (error) {
    throw error;
    console.log(error);
  }
};
