const { Op } = require("sequelize");
const { User } = require("../models/");
class UserController {
  async load(datas) {
    const { user, password } = datas;
    const hasUser = await User.findOne({
      where: { [Op.or]: { email: user, user } },
    });
    if (!hasUser || !(await hasUser.checkPassword(password))) {
      throw new Error("Usuário ou senha ínvalido!");
    }
    const status = [true];
    return status[0];
  }
  async create(datas) {
    const hasUser = await User.findOne({
      where: {
        [Op.or]: {
          email: datas.email,
          user: datas.user,
          commerce: datas.commerce,
        },
      },
    });
    if (hasUser) {
      throw new Error("Erro ao criar usuário ou usuário já existe");
    }
    await User.create(datas);
    return true;
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

module.exports = new UserController();
