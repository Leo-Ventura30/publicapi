const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const tmp_token = "438473874387"

dotenv.config();

class authToken {
  token(employers_id) {
    return jwt.sign({ employers_id }, process.env.SECRET || tmp_token, {
      expiresIn: 60 * 60 * 24,
    });
  }
}

module.exports = new authToken();
