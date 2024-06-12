const pool = require("../config/db");

exports.renderAdminLogin = (req, res) => {
  res.render("auth/adminLogin");
};

exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const [user] = await pool.query(
      "SELECT * FROM Users WHERE username = ? AND password = ? AND role = 'admin'",
      [username, password]
    );
    if (user.length > 0) {
      // Se as credenciais estiverem corretas, crie uma sessão
      req.session.user = user[0];
      res.redirect("/dashboard");
    } else {
      // Se as credenciais estiverem incorretas, redirecione de volta para o formulário de login
      res.redirect("/login/admin");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao autenticar o administrador");
  }
};
