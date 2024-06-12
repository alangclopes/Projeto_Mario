const User = require("../models/user");

exports.showAdminLoginForm = (req, res) => {
  res.render("auth/adminLogin");
};

exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;
   try {
    const user = await User.findOne({ username: username, role: "admin" });

    if (!user || user.password !== password) {

      return res.status(401).send("Credenciais inválidas");
    }

    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro no servidor");
  }
};
