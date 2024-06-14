const Eleicao = require("../models/eleicao");

// Função para exibir o formulário de cadastro de eleição
exports.showForm = (req, res) => {
  res.render("eleicao/index");
};

// Função para processar o cadastro de uma nova eleição
exports.addEleicao = async (req, res) => {
  const { data, local, nome} = req.body;

  if (!data || !local || !nome) {
    return res.status(400).send("Por favor, preencha todos os campos.");
  }

  try {
    const newEleicao = {
      data,
      local,
      nome,
    };

    const eleicaoId = await Eleicao.add(newEleicao);
    res.redirect("/dashboard"); 
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao cadastrar a eleição.");
  }
};
