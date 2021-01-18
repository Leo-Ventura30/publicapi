const AppointmentsDomain = require("../domains/AppointmentsDomain");
class AppointmentsController {
  async create(req, res) {
    try {
      const employers_id = "a8ef9e10-4996-11eb-98fb-d9a3536a9ec7";
      const users_id = "56e60230-4f04-11eb-99d0-2d5c855fff4b";
      const { appointment } = req.body;
      const result = await AppointmentsDomain.create(
        users_id,
        employers_id,
        appointment
      );
      return res.json(result);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async load(req, res) {
    try {
      const { employers_id } = req.body;
      const result = await AppointmentsDomain.load(employers_id);
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
