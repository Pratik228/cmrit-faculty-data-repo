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

exports.getAllFaculties = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!!",
  });
};

exports.getFaculty = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!!",
  });
};

exports.updateFaculty = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!!",
  });
};

exports.deleteFaculty = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!!",
  });
};
