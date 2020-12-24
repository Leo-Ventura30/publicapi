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
}

module.exports = new UserController();
