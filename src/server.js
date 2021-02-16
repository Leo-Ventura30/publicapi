const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", require("./app/routes/routes"));

module.exports = app;
