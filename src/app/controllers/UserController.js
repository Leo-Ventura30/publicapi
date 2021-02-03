const UserDomain = require("../domains/UserDomain");
class UserController {
  async load(req, res) {
    try {
      const users_id = req.params.id;
      const { employers_id } = req;
      const result = await UserDomain.load(users_id, employers_id);
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async create(req, res) {
    try {
      const datas = req.body;
      const { employers_id } = req;
      const result = await UserDomain.create(datas, employers_id);
      return res.json(result);
    } catch (error) {
      console.log(error);
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
