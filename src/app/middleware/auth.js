const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log(req.token + req.auth);
  const secret = "rosquinadeb@n@N!haAmaçada";
  const token = jwt.sign({ employer: "Leo" }, secret, {
    expiresIn: 300,
  });
  if (req.token && req.auth) {
    console.log(req.token + " " + req.auth);
    res.token = req.auth;
    return next();
  }
  return res
    .status(401)
    .json({ error: "puxa você não tem autorizão para acessar esta página" });
};
