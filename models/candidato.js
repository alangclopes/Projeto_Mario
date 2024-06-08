const db = require("../config/db");

class Candidato {
  static getAll(callback) {
    const sql = "SELECT * FROM Candidatos";
    db.query(sql, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static create(data, callback) {
    const sql = "INSERT INTO Candidatos SET ?";
    db.query(sql, data, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }
}

module.exports = Candidato;
