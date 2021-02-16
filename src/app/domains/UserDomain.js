const { Op } = require("sequelize");

const AppointmentsDomain = require("./AppointmentsDomain");
const { User, Appointment } = require("../models");
const defaults = {
  uf: "SP",
  city: "Santo André",
};
class UserDomains {
  async load(id, employers_id) {
    const hasUser = await User.findOne({ where: { id } });
    const appointments = await Appointment.findAll({
      where: { [Op.and]: { users_id: id, employers_id, status: 1 } },
    });
    const { name, phone, uf, city, id: users_id } = hasUser;
    return { user: { users_id, name, phone, uf, city, appointments } };
  }
  async create(datas, employers_id) {
    const { uf, city } = defaults;
    const { phone } = datas;
    const hasUser = await User.findOne({ where: { phone } });

    if (!hasUser) {
      var newUser = await User.create({ uf, city, ...datas });
      console.log("[*] task: Create new user ");
    }
    const { id: users_id } = hasUser || newUser;
    const {
      id,
      date,
      location,
      type,
      value,
      createdAt,
      updatedAt,
    } = await AppointmentsDomain.create(users_id, employers_id, datas);
    return {
      user: newUser,
      appointment: { id, date, location, type, value, createdAt, updatedAt },
      status: true,
    };
  }
}

module.exports = new UserDomains();

const { Employer } = require("../models/");
const alerts = [
  "Usuário ou senha ínvalido!",
  "Usuário criado com sucesso!",
  "Erro ao criar usuário ou usuário já existe",
];
class EmployersController {
  async load(datas) {
    const { user, password } = datas;
    const hasUser = await Employer.findOne({
      where: { [Op.or]: { email: user, user } },
    });
    if (!hasUser || !(await hasUser.checkPassword(password))) {
      throw new Error(alerts[0]);
    }
    const { commerce, category, uf, city, email } = hasUser;
    console.log();
    return { status: true, commerce, category, uf, city, email, user };
  }
  async create(datas) {
    if (!datas) throw new Error("Error ao criar usuário");
    console.log(datas);
    const hasUser = await Employer.findOne({
      where: {
        [Op.or]: {
          email: datas.email,
          user: datas.user,
          commerce: datas.commerce,
        },
      },
    });
    if (hasUser) {
      throw new Error(alerts[2]);
    }
    await Employer.create(datas);
    return { status: true, alert: alerts[1] };
  }
  async update(datas) {
    const hasUser = await User.updateOne(
      {
        datas,
      },
      {
        where: {
          [Op.or]: { email: datas.email, user: datas.user },
        },
      }
    );
  }
}

module.exports = new EmployersController();
