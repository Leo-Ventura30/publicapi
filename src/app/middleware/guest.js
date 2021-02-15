module.exports = (req, res, next) => {
  if (req.auth && !req.token) {
    return next();
  }

  return res.redirect("/dashboard/home");
};
