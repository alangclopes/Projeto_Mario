const User = require("../models/User");

exports.showAdminLoginForm = (req, res) => {
  res.render("auth/adminLogin");
};

exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).send("Por favor, preencha todos os campos");
    }

    const user = await User.findOne(username);

    if (!user || user.password !== password ) {
      return res
        .status(401)
        .render("auth/adminLogin", { error: "Credenciais inválidas" });
    }

    req.session.user = user;

    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro no servidor");
  }
};

exports.showEleitorLoginForm = (req, res) => {
  res.render("auth/eleitorLogin");
};

exports.eleitorLogin = async (req, res) => {
  const { cpf, password } = req.body;

  try {

    if (!cpf || !password) {
      return res.status(400).send("Por favor, preencha todos os campos.");
    }

    const eleitor = await User.findByCpfAndPassword(cpf, password);

    if (!eleitor) {
      return res.status(401).send("CPF ou senha incorretos.");
    }

    req.session.eleitor = eleitor;

    res.redirect("/votacoes");
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).send("Erro ao fazer login.");
  }
};