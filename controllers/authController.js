const bcrypt = require("bcrypt");
const userModel = require("../models/user");

exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await userModel.createUser(username, hashedPassword, role);
  res.redirect("/login");
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findByUsername(username);
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.userId = user.id;
    req.session.role = user.role;
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
