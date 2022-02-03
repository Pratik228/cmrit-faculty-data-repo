const { getConnection } = require("../../db/db.config");

exports.createAward = async (req, res) => {
  try {
    req.body.dId = req.body.department;
    delete req.body.department;
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
  try {
    const db = await getConnection();
    let result;
    let sql = `SELECT * FROM awards`;

    const { fromDate, toDate, isDescriptionRequired } = req.query;

    if (fromDate && toDate && isDescriptionRequired === "true") {
      sql = `CALL filterAwards("awards","${fromDate}","${toDate}")`;
    } else if (fromDate && toDate && isDescriptionRequired === "false") {
      sql = `CALL filterAwardsNoDesc("awards","${fromDate}","${toDate}")`;
    } else if (!fromDate && !toDate && isDescriptionRequired === "false") {
      sql = `CALL getAllAwardsNoDesc("awards")`;
    }

    result = await db.query(sql);

    res.status(200).json({
      status: "success",
      results: result[0][0].length,
      data: JSON.parse(JSON.stringify(result[0][0])),
    });
  } catch (err) {
    console.error(err);
  }
};
