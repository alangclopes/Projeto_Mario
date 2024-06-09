const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

const indexRouter = require("./routes/index");
const candidatoRouter = require("./routes/candidatoRoutes");
const eleitorRouter = require("./routes/eleitorRoutes");
const votacaoRouter = require("./routes/votacaoRoutes");

app.use("/", indexRouter);
app.use("/candidatos", candidatoRouter);
app.use("/eleitores", eleitorRouter);
app.use("/votacao", votacaoRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo deu errado!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
