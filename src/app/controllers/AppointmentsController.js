const AppointmentsDomain = require("../domains/AppointmentsDomain");
class AppointmentsController {
  async load(req, res) {
    try {
      const { employers_id } = req;
      const result = await AppointmentsDomain.load(employers_id);
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async create(req, res) {
    try {
      const { id } = req.params;
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const { employers_id } = req;
      const result = await AppointmentsDomain.delete(id, employers_id);
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async update(req, res) {
    try {
      const datas = req.body;
      const result = await AppointmentsDomain.update(datas);
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
}

module.exports = new AppointmentsController();
