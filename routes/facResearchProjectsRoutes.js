const express = require("express");
const facResearchProjectsController = require("../controllers/facResearchProjectsController");
const router = express.Router();

router
  .route("/")
  //   .get(facResearchController.getAll)
  .post(facResearchProjectsController.createResearchProjects);

// router
//   .route("/:id")
//   .get(facultyController.getAward)
//   .patch(facultyController.updateAward)
//   .delete(facultyController.deleteAward);

module.exports = router;
