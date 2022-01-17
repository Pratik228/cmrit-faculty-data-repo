const express = require("express");
const facResultsController = require("../controllers/facResultsController");
const router = express.Router();

router
  .route("/")
  //   .get(facultyController.getAllAwards)
  .post(facResultsController.createResult);

// router
//   .route("/:id")
//   .get(facultyController.getAward)
//   .patch(facultyController.updateAward)
//   .delete(facultyController.deleteAward);

module.exports = router;
