const pool = require("../config/db");

// Função para exibir a página de controle da eleição
exports.showControleEleicao = (req, res) => {
  res.render("controleEleicao/index");
};

// Função para iniciar a votação
exports.iniciarVotacao = (req, res) => {
  // Aqui você pode implementar a lógica para iniciar a votação
  // Exemplo básico com mensagem de confirmação usando SweetAlert
  const dataAtual = new Date();
  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth() + 1;
  const ano = dataAtual.getFullYear();
  const hora = dataAtual.getHours();
  const minutos = dataAtual.getMinutes();
  const segundos = dataAtual.getSeconds();

  res.send(
    `A votação foi iniciada em: ${dia}/${mes}/${ano} às ${hora}:${minutos}:${segundos}`
  );
};

// Função para encerrar a votação
exports.encerrarVotacao = (req, res) => {
  // Aqui você pode implementar a lógica para encerrar a votação
  // Exemplo básico com mensagem de confirmação usando SweetAlert
  const dataAtual = new Date();
  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth() + 1;
  const ano = dataAtual.getFullYear();
  const hora = dataAtual.getHours();
  const minutos = dataAtual.getMinutes();
  const segundos = dataAtual.getSeconds();

  res.send(
    `A votação foi encerrada em: ${dia}/${mes}/${ano} às ${hora}:${minutos}:${segundos}`
  );
};
