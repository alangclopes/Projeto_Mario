const pool = require("../config/db");

exports.showControleEleicao = (req, res) => {
  res.render("controleEleicao/index");
};

exports.iniciarVotacao = (req, res) => {
  
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

exports.encerrarVotacao = (req, res) => {

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
