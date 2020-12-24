const { User } = require("../models");
const UserDomain = require("../domains/UserDomain");
class UserController {
  async load(req, res) {
    try {
      const datas = req.body;
      const result = await UserDomain.load(datas);
      console.log(result);
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async create(req, res) {
    try {
      const datas = req.body;
      const result = await UserDomain.create(datas);
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async update(req, res) {
    try {
      const datas = req.body;
      const result = await UserDomain.update(datas);
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }

  signup(req, res) {
    return res.render("auth/signup");
  }
  async screate(req, res) {
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
