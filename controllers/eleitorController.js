const Eleitor = require("../models/eleitor");

exports.create = async (req, res) => {
  try {
    await Eleitor.create(req.body);
    res.redirect("/eleitores");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const eleitores = await Eleitor.findAll();
    res.render("eleitor/index", { eleitores });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findById = async (req, res) => {
  try {
    const eleitor = await Eleitor.findById(req.params.id);
    res.render("eleitor/edit", { eleitor });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    await Eleitor.update(req.params.id, req.body);
    res.redirect("/eleitores");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Eleitor.delete(req.params.id);
    res.redirect("/eleitores");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
