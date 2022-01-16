const express = require("express");
const morgan = require("morgan");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(`Requested at ${req.requestTime}`);
  next();
});

//routes

app.use("/api/v1/faculty", require("./routes/facultyRoutes"));

module.exports = app;
