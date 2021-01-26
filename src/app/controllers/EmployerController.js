const EmployerDomain = require("../domains/EmployerDomain");
const jwt = require("../services/jwt");

class EmployerController {
  async load(req, res) {
    try {
      const datas = req.body;
      const { auth, employer } = await EmployerDomain.load(datas);
      const token = jwt.token(employer.id);
      res.cookie("token", token, { secure: true, httpOnly: true });
      return res.json({ auth, token }).status(200);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async create(req, res) {
    try {
      const datas = req.body;
      const result = await EmployerDomain.create(datas);
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async update(req, res) {
    try {
      const datas = req.body;
      const result = await EmployerDomain.update(datas);
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
}

module.exports = new EmployerController();
