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

module.exports = app;
