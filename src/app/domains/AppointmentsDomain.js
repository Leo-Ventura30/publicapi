const { Appointment, User } = require("../models");
const UserDomain = require("./UserDomain");
const { Op } = require("sequelize");
class AppointmentsDomains {
  async load(employers_id) {
    const allAppointments = await Appointment.findAll({
      where: { [Op.and]: { employers_id, status: 1 } },
    });
    var appointments = [];
    var user = [];

    allAppointments.map((e, k) => {
      appointments[k] = e;
    });
    var j = 0;
    for (const i of appointments) {
      console.log(i.users_id);
      const hasUser = await User.findOne({ where: { id: i.users_id } });
      user[j] = hasUser;
      appointments[j].users_id = user[j];
      j++;
    }

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
