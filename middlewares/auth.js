function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    return next();
  }
  res.redirect("/login");
}

function isAdmin(req, res, next) {
  if (req.session.role === "admin") {
    return next();
  }
  res.status(403).send("Acesso negado");
}

function isEleitor(req, res, next) {
  if (req.session.role === "eleitor") {
    return next();
  }
  res.status(403).send("Acesso negado");
}

module.exports = { isAuthenticated, isAdmin, isEleitor };
