const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const indexRoutes = require("./routes/indexRoutes");
const candidatoRoutes = require("./routes/candidatoRoutes");
const eleitorRoutes = require("./routes/eleitorRoutes");
const votacaoRoutes = require("./routes/votacaoRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Configurações
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.use("/", indexRoutes);
app.use("/candidatos", candidatoRoutes);
app.use("/eleitores", eleitorRoutes);
app.use("/votacoes", votacaoRoutes);
app.use("/auth", authRoutes);

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error", { error: err });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
