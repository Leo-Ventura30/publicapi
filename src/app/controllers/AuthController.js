const jwt = require("jsonwebtoken");
class AuthController {
  async tokenVerify(req, res, next) {
    try {
      const { token } = req.params;
      jwt.verify(token, process.env.SECRET, (err) => {
        if (err) throw new Error(err.message);
        return res.status(202).json({ auth: true });
      });
    } catch (error) {
      return res.json({ message: error.message, auth: false });
    }
  }
}
module.exports = new AuthController();
