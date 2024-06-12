exports.isAdminAuthenticated = (req, res, next) => {
  if (req.session.user && req.session.user.role === "admin") {
    return next();
  } else {
    res.redirect("/login/admin");
  }
};

exports.isEleitorAuthenticated = (req, res, next) => {
  if (req.session.user && req.session.user.role === "eleitor") {
    return next();
  } else {
    res.redirect("/login/eleitor");
  }
};
