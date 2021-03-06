const express = require("express");
const morgan = require("morgan");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/scripts", express.static(`${__dirname}/dist`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(`Requested at ${req.requestTime}`);
  next();
});

//routes

app.use("/", require("./routes/viewsRoutes/viewsRoutes"));
app.use("/api/v1/awards", require("./routes/facultyRoutes/facAwardsRoutes"));
app.use("/api/v1/results", require("./routes/facultyRoutes/facResultsRoutes"));
app.use("/api/v1/patent", require("./routes/facultyRoutes/facPatentRoutes"));
app.use(
  "/api/v1/researchProjects",
  require("./routes/facultyRoutes/facResearchProjectsRoutes")
);
app.use("/api/v1/faculty", require("./routes/facultyRoutes/facultyRoutes"));
app.use(
  "/api/v1/department",
  require("./routes/facultyRoutes/departmentRoutes")
);

module.exports = app;
