// models/liberacaoEleitores.js
const db = require("../config/db");

class LiberacaoEleitores {
  static getAll(callback) {
    const sql = "SELECT * FROM LiberacaoEleitores";
    db.query(sql, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static create(data, callback) {
    const sql = "INSERT INTO LiberacaoEleitores SET ?";
    db.query(sql, data, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }
}

module.exports = LiberacaoEleitores;
