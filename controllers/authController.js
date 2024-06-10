const pool = require("../config/db");
const bcrypt = require("bcrypt");

exports.getLogin = (req, res) => {
  res.render("auth/login");
};

exports.postLogin = async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await pool.query("SELECT * FROM Users WHERE username = ?", [
    username,
  ]);
  if (rows.length > 0) {
    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      req.session.userId = user.id;
      req.session.role = user.role;
      if (user.role === "admin") {
        return res.redirect("/admin");
      } else {
        return res.redirect("/votacoes");
      }
    }
  }
  res.status(401).send("Usuário ou senha incorretos");
};

exports.getRegister = (req, res) => {
  res.render("auth/register");
};

exports.postRegister = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await pool.query(
    "INSERT INTO Users (username, password, role) VALUES (?, ?, ?)",
    [username, hashedPassword, role]
  );
  res.redirect("/login");
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};
