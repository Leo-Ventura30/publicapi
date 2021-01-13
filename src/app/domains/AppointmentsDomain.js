const { Appointment } = require("../models");
const UserDomain = require("./UserDomain");
class AppointmentsDomains {
  async load(employers_id) {
    const allAppointments = await Appointment.findAll({
      where: { employers_id },
    });
    var obj = [];

    allAppointments.forEach((element, key) => {
      const { id, date, location, type, value, status, users_id } = element;

      obj[key] = {
        id,
        date,
        location,
        type,
        value,
        status,
        user: { users_id },
      };
    });
    var count = 0;

    for (var appointment of obj) {
      const {
        user: { users_id },
      } = appointment;
      const allUsers = await UserDomain.load(users_id);
      obj[count].user = allUsers;
      count++;
    }
    // const id = users_id;
    // const allUsers = await UserDomain.load(id);
    return obj;
  }

  async acreate(users_id, employers_id, datas) {
    // const hasAppointment = await Appointment.create({
    //   date: new Date(),
    //   employers_id,
    //   users_id,
    //   ...datas.appointment,
    // });
    // if (!hasAppointment) throw new Error("Erro ao criar agendamento");
    return "hasAppointment";
  }
}

module.exports = new AppointmentsDomains();
