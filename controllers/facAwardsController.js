const { getConnection } = require("../db/db.config");

exports.createAward = async (req, res) => {
  try {
    const db = await getConnection();
    const sql = `INSERT INTO awards SET ? `;
    await db.query(sql, req.body);
    res.status(201).json({
      status: "success",
      message: "Awards is created!!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong!!",
    });
  }
};

exports.getAllAwards = async (req, res) => {
  const db = await getConnection();
  const sql = `SELECT * FROM awards`;
  const result = await db.query(sql);
  console.log(result[0]);
  res.status(200).json({
    status: "success",
    data: JSON.parse(JSON.stringify(result[0])),
  });
};
