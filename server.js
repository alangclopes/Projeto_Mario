const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "secredo",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");
app.use(express.static("public"));

const candidatoRoutes = require("./routes/candidatoRoutes");
const eleitorRoutes = require("./routes/eleitorRoutes");
const votacaoRoutes = require("./routes/votacaoRoutes");

app.use("/candidatos", candidatoRoutes);
app.use("/eleitores", eleitorRoutes);
app.use("/votacao", votacaoRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo deu errado!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
