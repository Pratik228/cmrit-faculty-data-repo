const { getConnection } = require("../../db/db.config");

exports.createResearchProjects = async (req, res) => {
  try {
    req.body.dId = req.body.department;
    delete req.body.department;
    const db = await getConnection();
    const sql = `INSERT INTO research_projects SET ? `;
    await db.query(sql, req.body);
    res.status(201).json({
      status: "success",
      message: "Research is created!!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong!!",
    });
  }
};

// exports.getAllAwards = async (req, res) => {
//   const db = await getConnection();
//   const sql = `SELECT * FROM awards`;
//   const result = await db.query(sql);
//   console.log(result[0]);
//   res.status(200).json({
//     status: "success",
//     data: JSON.parse(JSON.stringify(result[0])),
//   });
// };
