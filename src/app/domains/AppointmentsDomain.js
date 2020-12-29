const { Appointment } = require("../models");
class AppointmentsDomain {
  async load(datas = null) {
    const hasUser = await Appointment.findAll({});
    return hasUser;
  }
  async create(datas) {
    this.load();
    // const hasAppointment = await Appointment.create({
    //   date: new Date(),
    //   ...datas,
    // });
    return datas;
  }
}

module.exports = new AppointmentsDomain();
