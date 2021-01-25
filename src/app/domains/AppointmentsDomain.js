const { Appointment } = require("../models");
const UserDomain = require("./UserDomain");
const { Op } = require("sequelize");
class AppointmentsDomains {
  async load(employers_id) {
    const allAppointments = await Appointment.findAll({
      where: { [Op.and]: [{ employers_id, status: 1 }] },
    });
    return allAppointments;
    // var obj = [];

    // allAppointments.forEach((element, key) => {
    //   const { id, date, location, type, value, status, users_id } = element;

    //   obj[key] = {
    //     id,
    //     date,
    //     location,
    //     type,
    //     value,
    //     status,
    //     user: { users_id },
    //   };
    // });
    // var count = 0;

    // for (var appointment of obj) {
    //   const {
    //     user: { users_id },
    //   } = appointment;
    //   const allUsers = await UserDomain.load(users_id);
    //   obj[count].user = allUsers;
    //   count++;
    // }
    // return obj;
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
