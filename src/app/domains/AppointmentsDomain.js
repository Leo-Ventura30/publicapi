const { Appointment } = require("../models");
const UserDomain = require("./UserDomain");
class AppointmentsDomain {
  async load(employers_id) {
    const allAppointments = await Appointment.findAll({
      where: { employers_id },
    });
    const { date, location, type, value, status, users_id } = allAppointments;
    const id = users_id;
    const allUsers = await UserDomain.load(id);
    return { date, location, type, value, status, user: allUsers };
  }
  async create(users_id, employers_id, datas) {
    const hasAppointment = await Appointment.create({
      date: new Date(),
      employers_id,
      users_id,
      ...datas.appointment,
    });
    if (!hasAppointment) throw new Error("Erro ao criar agendamento");
    return hasAppointment;
  }
}

module.exports = new AppointmentsDomain();
