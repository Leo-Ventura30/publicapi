const { User, Schedule } = require("../models");
// const { Op } = require("sequelize");
// const moment = require("moment");
class SessionController {
  //funçao para checkar se o usuario existe
  async signin(req, res) {
    let error = "";
    const { user, password } = req.body;

    const people = await User.findOne({ where: { user } });

    if (!people || !(await people.checkPassword(password))) {
      error = "Usuário ou senha incorretos.";
      return res.render("auth/signin", { error });
    }

    req.session.people = people;
    res.locals.people = people;
    return res.redirect("/dashboard/home");
  }
  DestroyCookie(req, res) {
    req.session.destroy();
    res.clearCookie("root");
    return res.redirect("/");
  }
}

module.exports = new SessionController();
