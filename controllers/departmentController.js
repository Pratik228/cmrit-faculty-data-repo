const { getConnection } = require("../db/db.config");

exports.getAllDepartments = async (req, res) => {
  try {
    const db = await getConnection();
    const sql = `SELECT * FROM department`;
    const result = await db.query(sql);
    console.log(result[0]);
    res.status(200).json(JSON.parse(JSON.stringify(result[0])));
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong!!",
    });
  }
};
