const User = require("../models/User");

exports.showAdminLoginForm = (req, res) => {
  res.render("auth/adminLogin");
};

exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Por favor, preencha todos os campos");
  }

  try {
    const user = await User.findOne(username);

    if (!user || user.password !== password) {
      return res.status(401).render("auth/adminLogin", { error: "Credenciais inválidas" });
    }

    req.session.user = user;
    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro no servidor");
  }
};

exports.dashboard = async (req, res) => {
  res.render("auth/dashboard");
};

exports.showEleitorLoginForm = (req, res) => {
  res.render("auth/eleitorLogin");
};

exports.eleitorLogin = async (req, res) => {
  const { cpf, password } = req.body;

  if (!cpf || !password) {
    return res.status(400).send("Por favor, preencha todos os campos");
  }

  try {
    const user = await User.findOneByCpf(cpf);

    if (!user || user.password !== password) {
      return res.status(401).render("auth/eleitorLogin", { error: "Credenciais inválidas" });
    }

    req.session.user = user;
    res.redirect("/votacao");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro no servidor");
  }
};
