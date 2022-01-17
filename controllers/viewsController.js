const { snakeCase, startCase } = require("lodash");

exports.getHomePage = (req, res) => {
  res.render("index", {
    Username: "test",
  });
};

exports.getFacultyForms = (req, res) => {
  const moduleName = snakeCase(req.params.module); //Dynamically render the page using url params
  const title = startCase(req.params.module); //Send the tiltle of html page
  res.render(`fields/${moduleName}`, {
    title: title,
    Username: "test",
    isInsertMode: true, //This is for checking if we are inserting the data or updating it
    role: "admin", // This is for testing, we will send the actual user on production
  });
};

exports.getSearchPage = (req, res) => {
  res.render("search", {
    title: "Search",
  });
};

exports.getResultPage = (req, res) => {
  res.render("result", {
    title: "Result",
  });
};

exports.getAwardsPage = (req, res) => {
  res.render("awards", {
    title: "Award",
  });
};

exports.getPatentPage = (req, res) => {
  res.render("patent", {
    title: "Patent",
  });
};

exports.getResearchProjects = (req, res) => {
  res.render("research_projects", {
    title: "Research Projects",
  });
};
