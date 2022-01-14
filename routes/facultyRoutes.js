const express = require("express");
const facultyController = require("../controllers/facultyController");

const router = express.Router();

router
  .route("/")
  .get(facultyController.getAllfaculties)
  .post(facultyController.createFaculty);

router
  .route("/:id")
  .get(facultyController.getFaculty)
  .patch(facultyController.updateFaculty)
  .delete(facultyController.deleteFaculty);

module.exports = router;
