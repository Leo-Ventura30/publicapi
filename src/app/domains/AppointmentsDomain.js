const { Appointment } = require("../models");
const UserDomain = require("./UserDomain");
const { Op } = require("sequelize");
class AppointmentsDomains {
  async load(employers_id) {
    const allAppointments = await Appointment.findAll({
      where: { [Op.and]: { employers_id, status: 1 } },
    });
    var appointments = [];
    allAppointments.map((e, k) => {
      const { id, date, location, type, value, status } = e;
      appointments[k] = { id, date, location, type, value, status };
    });
    return { appointments };
  }

  async create(users_id, employers_id, appointment) {
    console.log(users_id, employers_id, appointment);
    const hasAppointment = await Appointment.create({
      date: new Date(),
      employers_id,
      users_id,
      ...appointment,
    });
    console.log(hasAppointment);
    if (!hasAppointment) throw new Error("Erro ao criar agendamento");
    return "hasAppointment";
  }
}

module.exports = new AppointmentsDomains();
