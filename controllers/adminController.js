const pool = require("../config/db");

exports.dashboard = async (req, res) => {
  res.render("admin/dashboard");
};
