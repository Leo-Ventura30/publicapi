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
      const employers_id = "a8ef9e10-4996-11eb-98fb-d9a3536a9ec7";
      const result = await UserDomain.create(datas, employers_id);
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
