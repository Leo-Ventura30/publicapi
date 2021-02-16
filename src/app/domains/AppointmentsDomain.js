const { Appointment, User } = require("../models");
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
    if (!hasAppointment)
      throw new Error("Erro ao criar agendamento, tente novamente!");
    return hasAppointment;
  }
  async delete(id, employers_id) {
    const hasAppointment = await Appointment.destroy({
      where: { employers_id, id },
    });
    if (hasAppointment !== 1)
      throw new Error("Usuário não existe, ou foi deletado!");

    return { success: `Agendamento ${id} deletado!` };
  }
  async update(id, employers_id, status) {
    const hasAppointment = await Appointment.findOne({
      where: { id, employers_id },
    });
    const wasUpdate = await Appointment.update(
      { status: status, ...hasAppointment },
      { where: { id, employers_id, status: 1 } }
    );
    if (wasUpdate <= 0)
      return { message: "Agendamento ja está atualizado!", success: false };

    return { message: "Agendamento atualizado com successo!", success: true };
  }
  async finalizeAppointment(id, employers_id, status) {
    const wasUpdate = await this.update(id, employers_id, status);
    if (wasUpdate.success !== true)
      throw new Error("Impossivel finalizar agendamento, ou ja finalizado!");

    return { message: "Agendamento finalizado!" };
  }
}

module.exports = new AppointmentsDomains();
