const { getConnection } = require("../db/db.config");

exports.createResult = async (req, res) => {
  try {
    const db = await getConnection();
    const sql = `INSERT INTO results SET ? `;
    await db.query(sql, req.body);
    res.status(201).json({
      status: "success",
      message: "Results is created!!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong!!",
    });
  }
};
