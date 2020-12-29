const { Op } = require("sequelize");
const AppointmentsDomain = require("./AppointmentsDomain");
const { User } = require("../models");
const defaults = {
  uf: "SP",
  city: "Santo André",
};
class UserDomains {
  async load(datas) {}
  async create(datas) {
    const { uf, city } = defaults;
    const { phone, employers_id } = datas;
    const hasUser = await User.findOne({ where: { phone } });

    if (hasUser) throw new Error("Usuário existente");

    const createUser = await User.create({ uf, city, ...datas });

    const { id } = createUser;
    const data = { users_id: id, employers_id };
    const findAppointment = await AppointmentsDomain.create(data);
    console.log(findAppointment);
    return 0;
  }
  async update(datas) {}
}

module.exports = new UserDomains();
