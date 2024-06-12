// middlewares/authMiddleware.js
exports.isAdminAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    res.redirect("/login/admin");
  }
};

exports.isEleitorAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    res.redirect("/login/eleitor");
  }
};
