const { getConnection } = require("./db.config");
exports.createFaculty = async (req, res) => {
  try {
    const { facultyId, name, dId, mailId, phoneNumber, joiningDate } = req.body;
    const sql = await getConnection();
    await sql.query(
      `INSERT INTO faculty(facultyId, name, dId, mailId, phoneNumber, joiningDate) VALUES(${facultyId},${name}, ${dId},${mailId},${phoneNumber},${joiningDate})`
    );
    res.status(201).json({
      status: "success",
      message: "Faculty is created!!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "This route is not yet defined!!",
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
