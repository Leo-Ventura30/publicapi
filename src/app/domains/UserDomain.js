class UserController {
  async load(datas) {
    const { user, password } = datas;
    const person = { user: "leo", password: "2585" };
    const status = [true];
    if (user !== person.user || password !== person.password) {
      console.log("err");
      throw new Error("Usuário ou senha invalidos!");
    }
    return status[0];
  }
}
module.exports = new UserController();
