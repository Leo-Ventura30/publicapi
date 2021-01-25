const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

class authToken {
  token(employers_id) {
    return jwt.sign({ employers_id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 24,
    });
  }
}

module.exports = new authToken();
