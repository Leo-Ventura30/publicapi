const { Op } = require("sequelize");
const AppointmentsDomain = require("./AppointmentsDomain");
const { User } = require("../models");
const defaults = {
  uf: "SP",
  city: "Santo André",
};
class UserDomains {
  async load(datas) {}
  async create(datas, employers_id) {
    const { uf, city } = defaults;
    const { phone } = datas;
    const hasUser = await User.findOne({ where: { phone } });

    if (!hasUser) {
      var newUser = await User.create({ uf, city, ...datas });
      console.log("[*] task: New user create");
    }
    const { id: users_id } = hasUser || newUser;
    const newAppointment = await AppointmentsDomain.create(
      users_id,
      employers_id,
      datas
    );
    return { newAppointment, status: true };
  }
  async update(datas) {}
}

module.exports = new UserDomains();