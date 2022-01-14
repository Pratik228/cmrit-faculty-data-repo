const { getConnection } = require("../db/db.config");

exports.createFaculty = async (req, res) => {
  try {
    const db = await getConnection();
    const sql = `INSERT INTO faculty SET ? `;
    await db.query(sql, req.body);
    res.status(201).json({
      status: "success",
      message: "Faculty is created!!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong!!",
    });
  }
};

exports.getAllFaculties = async (req, res) => {
  const db = await getConnection();
  const sql = `SELECT * FROM faculty`;
  const result = await db.query(sql);
  console.log(result[0]);
  res.status(200).json({
    status: "success",
    data: JSON.parse(JSON.stringify(result[0])),
  });
};

exports.getFaculty = async (req, res) => {
  try {
    const db = await getConnection();
    const sql = `SELECT * FROM faculty WHERE facultyId = ?`;
    const result = await db.query(sql, req.params.id);
    console.log(result[0][0]);
    res.status(200).json({
      status: "ok",
      data: result[0][0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "This route is not yet defined!!",
    });
  }
};

exports.updateFaculty = (req, res) => {
  const sql = `UPDATE faculty SET ? WHERE facultyId ?`;
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!!",
  });
};

exports.deleteFaculty = (req, res) => {
  const sql = `DELETE FROM faculty WHERE faculty id ?`;
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!!",
  });
};
