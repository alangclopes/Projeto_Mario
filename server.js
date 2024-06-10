const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const app = express();

// Configurar o view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware para analisar o corpo das requisições
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configurar sessão
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Inicializar Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Configurar a pasta public para arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Importar as rotas
const indexRoutes = require("./routes/indexRoutes");
const authRoutes = require("./routes/authRoutes");
const eleitorRoutes = require("./routes/eleitorRoutes");
const adminRoutes = require("./routes/adminRoutes");
const votacaoRoutes = require("./routes/votacaoRoutes");
const candidatoRoutes = require("./routes/candidatoRoutes");

// Usar as rotas
app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/eleitores", eleitorRoutes);
app.use("/admin", adminRoutes);
app.use("/votacao", votacaoRoutes);
app.use("/candidatos", candidatoRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
