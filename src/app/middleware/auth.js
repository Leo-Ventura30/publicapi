const jwt = require("jsonwebtoken");
const tmp_token = "438473874387"

module.exports = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token)
    return res.status(401).json({ auth: false, error: "No token provided." });

  jwt.verify(token, process.env.SECRET || tmp_token, function (err, decoded) {
    if (err) {
      if (err.message === "jwt expired")
        return res.json({ message: "Faça o login novamente!" });
      return res.status(500).json({
        auth: false,
        error: "Usuário não autenticado, por favor faça o login!",
      });
    }
    req.employers_id = decoded.employers_id;
    next();
  });
};
