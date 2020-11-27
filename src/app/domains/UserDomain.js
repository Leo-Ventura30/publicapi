const { Op } = require("sequelize");
const { User } = require("../models/");
class UserController {
  async load(datas) {
    const { user, password } = datas;
    const hasUser = await User.findOne({
      [Op.or]: [{ email: user, user }],
    });
    if (!!(await User.checkPassword(password))) {
      console.log("true");
    }
    const status = [true];
    // if (user !== person.user || password !== person.password) {
    //   throw new Error("Usuário ou senha invalidos!");
    // }
    console.log(hasUser);
    return status[0];
  }
  async register(datas) {
    console.log(datas);
    const hasUser = await User.findOne({
      where: {
        email: datas.email,
      },
    });
    if (hasUser) {
      throw new Error("Erro ao criar usuário ou usuário já existe");
    }
    await User.create(datas);

    return true;
  }
}

module.exports = new UserController();
