const { User } = require("../models");
const UserDomain = require("../domains/UserDomain");
class UserController {
  async load(req, res) {
    try {
      const datas = req.body;
      const result = await UserDomain.load(datas);
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
  signup(req, res) {
    return res.render("auth/signup");
  }
  async create(req, res) {
    const { name, user, password } = req.body;
    const people = await User.findOne({ where: { user } });
    if (people) {
      return res.redirect("/signup");
    } else {
      await User.create({ name, user, password, avatar });
    }

    return res.redirect("/");
  }
}

module.exports = new UserController();
