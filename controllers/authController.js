const pool = require("../config/db");

exports.renderAdminLogin = (req, res) => {
  res.render("auth/adminLogin");
};

exports.adminLogin = async (req, res) => {
  const { Nome, Senha } = req.body;
  try {
    const [admins] = await pool.query(
      "SELECT * FROM Admins WHERE nome = ? AND senha = ?",
      [Nome, Senha]
    );
    if (admins.length > 0) {
      req.session.admin = admins[0];
      res.redirect("/admin/dashboard");
    } else {
      res.redirect("/login/admin");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao fazer login");
  }
};

exports.renderEleitorLogin = (req, res) => {
  res.render("auth/eleitorLogin");
};

exports.eleitorLogin = async (req, res) => {
  const { Nome, Senha } = req.body;
  try {
    const [eleitores] = await pool.query(
      "SELECT * FROM Eleitores WHERE nome = ? AND senha = ?",
      [Nome, Senha]
    );
    if (eleitores.length > 0) {
      req.session.eleitor = eleitores[0];
      res.redirect("/eleitores/dashboard");
    } else {
      res.redirect("/login/eleitor");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao fazer login");
  }
};
