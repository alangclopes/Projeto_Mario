const db = require("../config/db");

class Votacao {
  static getAll(callback) {
    const sql = "SELECT * FROM Votacoes";
    db.query(sql, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static create(data, callback) {
    const sql = "INSERT INTO Votacoes SET ?";
    db.query(sql, data, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }
}

module.exports = Votacao;
