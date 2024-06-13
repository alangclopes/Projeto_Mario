const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

const eleitorRoutes = require("./routes/eleitorRoutes");
const candidatoRoutes = require("./routes/candidatoRoutes");
const chapaRoutes = require("./routes/chapaRoutes");
const votacaoRoutes = require("./routes/votacaoRoutes");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({ secret: "your_secret_key", resave: false, saveUninitialized: true })
);

app.use("/eleitores", eleitorRoutes);
app.use("/candidatos", candidatoRoutes);
app.use("/chapas", chapaRoutes);
app.use("/votacoes", votacaoRoutes);
app.use("/login", authRoutes); 
app.use("/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
