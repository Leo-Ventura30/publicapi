const express = require("express");

const routes = express.Router();

const auth = require("../middleware/auth");
const guest = require("../middleware/guest");

const EmployerController = require("../controllers/EmployerController");
const UserController = require("../controllers/UserController");
const AppointmentsController = require("../controllers/AppointmentsController");
const AuthController = require("../controllers/AuthController");

routes.use("/dashboard/", auth);

routes.get("/verify/:token/key", AuthController.tokenVerify);
routes.post("/register", EmployerController.create);
routes.post("/signin/dashboard", EmployerController.login);
routes.post("/dashboard/user/create", UserController.create);
routes.post("/dashboard/appointments/create", AppointmentsController.create);
routes.post("/dashboard/logout", EmployerController.logout);

routes.get("/dashboard/appointments", AppointmentsController.load);
routes.get("/dashboard/employer/:id/appointments", UserController.load);

routes.delete(
  "/dashboard/appointments/delete/:id",
  AppointmentsController.delete
);

routes.put("/dashboard/update", EmployerController.update);
routes.put(
  "/dashboard/appointment/:id/updating",
  AppointmentsController.update
);
routes.put(
  "/dashboard/appointment/:id/closing",
  AppointmentsController.finalize
);

module.exports = routes;
