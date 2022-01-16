const { getConnection } = require("../db/db.config");

exports.createAward = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.body);
    // const db = await getConnection();
    // const sql = `INSERT INTO awards SET ?`,
    // {
    //     awardsId : awardsId,
    //     facultyId : facultyId,
    //     category :  category,
    //     dId : dId,
    //     filterDate :  filterDate,
    //     level : level,
    //     eventName : eventName,
    //     awardedBy : awardsBy,
    //     servedAs :servedAs,
    //     activityType : activityType,
    //     description : description,

    // }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong!!",
    });
  }
};

// exports.getAwards = (req, res) => {
//   const sql = `SELECT * FROM awards ?`;
// };

// exports.updateAwards = (req, res) => {
//   const sql = `UPDATE awards SET ? WHERE awardsId ?`;
// };
