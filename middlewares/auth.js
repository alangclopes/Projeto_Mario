function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect("/login");
  }
}

function isAdmin(req, res, next) {
  if (req.session.role === "admin") {
    next();
  } else {
    res.status(403).send("Acesso negado");
  }
}

module.exports = {
  isAuthenticated,
  isAdmin,
};
