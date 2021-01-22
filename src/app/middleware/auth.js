const jwt = require("jsonwebtoken");
const secret = "rosquinadeb@n@N!haAmaçada";
module.exports = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  jwt.verify(token, secret, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });

  // console.log(req.token + req.auth);
  // const secret = "rosquinadeb@n@N!haAmaçada";
  // const token = jwt.sign({ employer: "Leo" }, secret, {
  //   expiresIn: 300,
  // });
  // if (req.token && req.auth) {
  //   console.log(req.token + " " + req.auth);
  //   res.token = req.auth;
  //   return next();
  // }
  // return res
  //   .status(401)
  //   .json({ error: "puxa você não tem autorizão para acessar esta página" });
};
