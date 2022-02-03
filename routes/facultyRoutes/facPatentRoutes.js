const express = require("express");
const facPatentController = require("../../controllers/facultyController/facPatentController");
const router = express.Router();

router
  .route("/")
  //   .get(facPatentController.getAllAwards)
  .post(facPatentController.createPatent);

// router
//   .route("/:id")
//   .get(facultyController.getAward)
//   .patch(facultyController.updateAward)
//   .delete(facultyController.deleteAward);

module.exports = router;
