const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Eleitor = sequelize.define("Eleitor", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  liberado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Eleitor;
