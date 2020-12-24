const EmployerDomain = require("../domains/EmployerDomain");
class EmployerController {
  async load(req, res) {
    try {
      const datas = req.body;
      const result = await EmployerDomain.load(datas);
      return res.json(result);
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
