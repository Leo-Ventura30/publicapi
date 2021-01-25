const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", require("./app/routes/routes"));

module.exports = app;
