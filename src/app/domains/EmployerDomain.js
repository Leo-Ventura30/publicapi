const { Op } = require("sequelize");
const { Employer } = require("../models");
const AppointmentsDomain = require("./AppointmentsDomain");
class EmployerDomains {
  async load(datas) {
    const { user, password } = datas;
    const hasUser = await Employer.findOne({
      where: { [Op.or]: { email: user, user } },
    });
    const userAppointments = await AppointmentsDomain.load(hasUser.id);
    if (!hasUser || !(await hasUser.checkPassword(password))) {
      throw new Error("Usuário ou senha ínvalido!");
    }

    const { commerce, category, uf, city, email } = hasUser;
    return {
      status: true,
      company: {
        employer: { commerce, category, uf, city, email },
        appointments: userAppointments,
      },
    };
  }
  async create(datas) {
    const hasUser = await Employer.findOne({
      where: {
        [Op.or]: {
          email: datas.email,
          user: datas.user,
          commerce: datas.commerce,
        },
      },
    });
    if (hasUser) throw new Error("Erro ao criar usuário ou usuário já existe");

    await Employer.create(datas);
    return true;
  }
  async update(datas) {
    const hasUser = await Employer.findOne({ where: { email: datas.email } });
    if (hasUser) {
      const { id } = hasUser;
      await hasUser.update(datas, {
        where: { id },
      });
    }
    return hasUser;
  }
}

module.exports = new EmployerDomains();
