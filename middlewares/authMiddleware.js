exports.isAdminAuthenticated = (req, res, next) => {
  // Verificar se o usuário está autenticado e é um administrador
  if (req.session.user && req.session.user.role === "admin") {
    // Se for um administrador autenticado, avançar para a próxima rota
    return next();
  } else {
    // Se não for um administrador autenticado, redirecionar para a página de login
    res.redirect("/login/admin");
  }
};
