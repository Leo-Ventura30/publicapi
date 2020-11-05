const express = require("express");
const session = require("express-session");
const cors = require("cors");
const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./app/routes/routes"));

module.exports = app;
