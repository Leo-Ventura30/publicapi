const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).json({ auth: false, error: "No token provided." });

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err)
      return res.status(500).json({
        auth: false,
        error: "Usuário não autenticado, por favor faça o login!",
      });
    req.employers_id = decoded.employers_id;
    next();
  });
};
