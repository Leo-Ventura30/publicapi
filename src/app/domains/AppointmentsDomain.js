const { Appointment } = require("../models");
class AppointmentsDomain {
  async load(datas = null) {
    const { employers_id } = datas;
    const allAppointments = await Appointment.findAll({
      where: { employers_id },
    });
    return allAppointments;
  }
  async create(users_id, employers_id, datas) {
    console.log(users_id, employers_id, datas);

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
