const User = require("../models/User");

exports.showAdminLoginForm = (req, res) => {
  res.render("auth/adminLogin");
};

exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verifica se ambos os campos estão preenchidos
    if (!username || !password) {
      return res.status(400).send("Por favor, preencha todos os campos");
    }

    // Busca o usuário no banco de dados pelo nome de usuário
    const user = await User.findOne(username);

    // Verifica se o usuário foi encontrado e se a senha está correta
    if (!user || user.password !== password ) {
      return res
        .status(401)
        .render("auth/adminLogin", { error: "Credenciais inválidas" });
    }

    // Define o usuário na sessão
    req.session.user = user;

    // Redireciona para o dashboard após o login bem-sucedido
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

  if (!cpf || !password) {
    return res.status(400).send("Por favor, preencha todos os campos");
  }

  try {
    const user = await User.findOneByCpf(cpf);

    if (!user || user.password !== password) {
      return res
        .status(401)
        .render("auth/eleitorLogin", { error: "Credenciais inválidas" });
    }

    req.session.user = user;
    res.redirect("/votacao");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro no servidor");
  }
};
