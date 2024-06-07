const express = require("express");
const app = express();
const port = 3000;
const indexRouter = require("./routes/index");
const candidatoRouter = require("./routes/candidatoRoutes");
const eleicaoRouter = require("./routes/eleicaoRoutes");
const votoRouter = require("./routes/votoRoutes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/candidatos", candidatoRouter);
app.use("/eleicoes", eleicaoRouter);
app.use("/votos", votoRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo deu errado!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
