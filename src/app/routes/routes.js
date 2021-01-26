const express = require("express");

const routes = express.Router();

const auth = require("../middleware/auth");
const guest = require("../middleware/guest");

const EmployerController = require("../controllers/EmployerController");
const UserController = require("../controllers/UserController");
const AppointmentsController = require("../controllers/AppointmentsController");

routes.use("/dashboard/", auth);

routes.post("/register", EmployerController.create);
routes.post("/signin/dashboard", EmployerController.login);
routes.post("/dashboard/user/create", UserController.create);
routes.post("/dashboard/appointments/create", AppointmentsController.create);
routes.post("/dashboard/logout", EmployerController.logout);
routes.get("/dashboard/appointments", AppointmentsController.load);

routes.put("/dashboard/update", EmployerController.update);

module.exports = routes;
