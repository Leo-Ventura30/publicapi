const { Op } = require("sequelize");
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
