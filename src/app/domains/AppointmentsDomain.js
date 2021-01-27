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
      const {
        id,
        date,
        location,
        type,
        value,
        status,
        users_id,
        createdAt,
        updatedAt,
      } = e;
      appointments[k] = {
        id,
        date,
        location,
        type,
        value,
        status,
        users_id,
        createdAt,
        updatedAt,
      };
    });
    return { appointments };
  }

  async create(users_id, employers_id, datas) {
    const hasAppointment = await Appointment.create({
      date: new Date(),
      location: datas.city,
      type: datas.appointment.type,
      value: datas.appointment.value,
      status: 1,
      employers_id,
      users_id,
    });
    if (!hasAppointment) throw new Error("Erro ao criar agendamento");
    return hasAppointment;
  }
}

module.exports = new AppointmentsDomains();
