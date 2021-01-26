const EmployerDomain = require("../domains/EmployerDomain");
const jwt = require("../services/jwt");
const blacklist = [];

class EmployerController {
  async login(req, res) {
    try {
      const datas = req.body;
      const {
        auth,
        employer: { id, commerce, category, uf, city, email, user },
      } = await EmployerDomain.load(datas);
      const token = jwt.token(id);
      res.cookie("token", token, { secure: true, httpOnly: true });
      return res.json({
        auth,
        token,
        employer: { commerce, category, uf, city, email, user },
      });
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
      const {
        employers_id,
        body: { ...datas },
      } = req;
      const result = await EmployerDomain.update(employers_id, datas);
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async logout(req, res) {
    blacklist.push(req.headers["x-access-token"]);
    return res.json("deslogado").status(200);
  }
}

module.exports = new EmployerController();
