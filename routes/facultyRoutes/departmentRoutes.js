const express = require("express");
const departmentController = require("../../controllers/facultyController/departmentController");
const router = express.Router();

router
  .route("/")
  //   .get(facultyController.getAllAwards)
  .get(departmentController.getAllDepartments);

// router
//   .route("/:id")
//   .get(facultyController.getAward)
//   .patch(facultyController.updateAward)
//   .delete(facultyController.deleteAward);

module.exports = router;
