const { User, Schedule } = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");
const stats = ["Fechado", "Aberto", "Remarcado"];
class DashboardController {
  async create(req, res) {
    let { id, name, avatar } = req.session.people;
    let firstName = name.split(" ");
    res.locals.people.name = firstName[0];
    var actualDate = moment().toDate();

    const schedules = await Schedule.findAll({
      where: {
        user_id: id,
        date: { [Op.gte]: actualDate },
        status: 1,
      },
      order: [["date", "ASC"]],
    });
    const sched = schedules.map((a) => {
      return {
        id: a.id,
        date: {
          day: moment(a.date).format("DD/MM/YYYY"),
          hour: moment(a.date).format("HH:mm"),
        },
        location: a.location,
        type: a.type,
        value: a.value,
        status: a.status,
        dog: a.dog,
      };
    });

    return res.render("home/dashboardHome", {
      name: firstName[0],
      avatar,
      sched,
      stats,
    });
  }

  async updateImage(req, res) {
    const { id, name } = res.locals.people;
    const { filename: avatar } = req.file;
    console.log(req.file);
    res.locals.people.avatar = avatar;
    req.session.people.avatar = avatar;
    await User.update({ avatar }, { where: { id } });
    let firstName = name.split(" ");
    res.locals.people.name = firstName[0];
    var actualDate = moment().toDate();

    const schedules = await Schedule.findAll({
      where: {
        user_id: id,
        date: { [Op.gte]: actualDate },
        status: 1,
      },
      order: [["date", "ASC"]],
    });
    const sched = schedules.map((a) => {
      return {
        id: a.id,
        date: {
          day: moment(a.date).format("DD/MM/YYYY"),
          hour: moment(a.date).format("HH:mm"),
        },
        location: a.location,
        type: a.type,
        value: a.value,
        status: a.status,
        dog: a.dog,
      };
    });

    return res.render("home/dashboardHome", {
      name: firstName[0],
      avatar,
      sched,
      stats,
    });
  }
}

module.exports = new DashboardController();
