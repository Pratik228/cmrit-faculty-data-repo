const express = require("express");
const facultyController = require("../../controllers/facultyController/facultyController");
const router = express.Router();

router
  .route("/")
  .get(facultyController.getAllFaculties)
  .post(facultyController.createFaculty);

router
  .route("/:id")
  .get(facultyController.getFaculty)
  .patch(facultyController.updateFaculty)
  .delete(facultyController.deleteFaculty);

module.exports = router;
