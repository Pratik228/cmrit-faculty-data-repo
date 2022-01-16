const express = require("express");
const facAwardsController = require("../controllers/facAwardsController");
const router = express.Router();

router
  .route("/")
  //   .get(facultyController.getAllAwards)
  .post(facAwardsController.createAward);

// router
//   .route("/:id")
//   .get(facultyController.getAward)
//   .patch(facultyController.updateAward)
//   .delete(facultyController.deleteAward);

module.exports = router;
