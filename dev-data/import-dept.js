const util = require("util");
const fs = require("fs");
const mysql = require("mysql2");

const { CONNECTION_CONFIG, getConnection } = require("../db/db.config");

async function seedDatabase() {
  const readFile = util.promisify(fs.readFile);
  try {
    const data = await readFile(`${__dirname}/department.json`, "utf8");
    const departmentList = JSON.parse(data);
    const db = await getConnection();
    const promises = departmentList.map((dept) =>
      db.query("INSERT INTO department SET ?", dept)
    );
    await Promise.all(promises);
    console.log("Department Added Successfully :) ");
    db.close();
    process.exit();
  } catch (err) {
    db.close();
    console.error(err.message);
  }
}

seedDatabase();
