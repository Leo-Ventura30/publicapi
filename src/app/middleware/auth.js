module.exports = (req, res, next) => {
  console.log(req.token + req.auth);
  if (req.token && req.auth) {
    console.log(req.token + " " + req.auth);
    res.token = req.auth;
    return next();
  }
  return res
    .status(401)
    .json({ error: "puxa você não tem autorizão para acessar esta página" });
};
