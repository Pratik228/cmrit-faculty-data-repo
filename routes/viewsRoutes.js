const express = require("express");
const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.get("/", viewsController.getHomePage);
router.get("/faculty/:module", viewsController.getFacultyForms);
router.get("/search", viewsController.getSearchPage);
router.get("/result", viewsController.getResultPage);

module.exports = router;
