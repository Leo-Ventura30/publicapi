const express = require("express");

const routes = express.Router();

const auth = require("../middleware/auth");
const guest = require("../middleware/guest");

const EmployerController = require("../controllers/EmployerController");
const SessionController = require("../controllers/SessionController");
const DashboardController = require("../controllers/DashboardController");
const ScheduleController = require("../controllers/ScheduleController");

routes.post("/register", EmployerController.create);
routes.post("/signin/dashboard", EmployerController.load);
routes.put("/dashboard/update", EmployerController.update);

module.exports = routes;
