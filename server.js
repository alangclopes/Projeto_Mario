const express = require("express");
const session = require("express-session");
const path = require("path");
const candidatoRoutes = require("./routes/candidatoRoutes");
const eleitorRoutes = require("./routes/eleitorRoutes");
const votacaoRoutes = require("./routes/votacaoRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const indexRoutes = require("./routes/indexRoutes");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  res.locals.user = req.session.userId
    ? { id: req.session.userId, role: req.session.role }
    : undefined;
  next();
});

app.use("/", indexRoutes);
app.use("/candidatos", candidatoRoutes);
app.use("/eleitores", eleitorRoutes);
app.use("/votacoes", votacaoRoutes); // Certifique-se de que esta linha está presente
app.use("/", authRoutes);
app.use("/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
