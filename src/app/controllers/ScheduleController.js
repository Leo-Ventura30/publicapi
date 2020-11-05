const moment = require("moment");
const { Schedule } = require("../models");
const stats = ["Fechado", "Aberto", "Remarcado"];

class ScheduleController {
  async create(req, res) {
    const { id } = req.session.people;
    const { days, ...body } = req.body;

    const newDate = moment(days, "DD/MM/YYYY hh:mm");

    await Schedule.create({
      date: newDate.toDate(),
      ...body,
      user_id: id,
    });

    return res.redirect("/dashboard/home");
  }

  async index(req, res) {
    const { id, name, avatar } = res.locals.people;
    const schedules = await Schedule.findAll({
      where: {
        user_id: id,
      },
      order: [["date", "DESC"]],
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
      };
    });

    return res.render("schedules/schedule", {
      sched,
      stats,
      name,
      avatar,
    });
  }
  async details(req, res) {
    const { id } = req.params;
    const { avatar, name } = res.locals.people;
    const schedule = await Schedule.findOne({
      where: {
        id,
      },
    });
    const { date, location, type, value, status } = schedule;
    const sched = {
      date: {
        day: moment(date).format("DD/MM/YYYY"),
        hour: moment(date).format("hh:mm"),
      },
      location: location,
      type: type,
      value: value,
      status: status,
    };

    return res.render("schedules/details", { sched, name, avatar, stats });
  }
  async closeSchedule(req, res) {
    const { id } = req.params;
    await Schedule.update({ status: 0 }, { where: { id } });
    return res.redirect("/dashboard/home");
  }
}

module.exports = new ScheduleController();
