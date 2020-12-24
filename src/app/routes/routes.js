const express = require("express");

const routes = express.Router();

const auth = require("../middleware/auth");
const guest = require("../middleware/guest");

const UserController = require("../controllers/UserController");
const SessionController = require("../controllers/SessionController");
const DashboardController = require("../controllers/DashboardController");
const ScheduleController = require("../controllers/ScheduleController");

routes.post("/register", UserController.create);
routes.post("/signin", UserController.load);

module.exports = routes;
