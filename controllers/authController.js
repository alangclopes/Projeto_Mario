const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      username: req.body.username,
      password: hashedPassword,
    });
    res.redirect("/auth/login");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findByUsername(req.body.username);
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      const token = jwt.sign({ id: user.id }, "seuSegredo", {
        expiresIn: "1h",
      });
      res.cookie("token", token, { httpOnly: true });
      res.redirect("/");
    } else {
      res.status(401).send("Username or password incorrect");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/auth/login");
};
