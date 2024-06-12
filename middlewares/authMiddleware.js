exports.isAdminAuthenticated = (req, res, next) => {
  // Verifique se o usuário está autenticado e é um administrador
  if (req.session.user && req.session.user.role === 'admin') {
      // Se for um administrador autenticado, avance para a próxima rota
      return next();
  } else {
      // Se não for um administrador autenticado, redirecione para a página de login
      res.redirect('/login/admin');
  }
};
