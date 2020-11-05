module.exports = (req, res, next) => {
  if (req.session && !req.session.people) {
    return next();
  }

  return res.redirect("/dashboard/home");
};
