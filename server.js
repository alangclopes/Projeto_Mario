const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

const indexRouter = require('./routes/index');
const eleitorRouter = require('./routes/eleitorRoutes');
const eleicaoRouter = require('./routes/eleicaoRoutes');
const cargoRouter = require('./routes/cargoRoutes');
const chapaRouter = require('./routes/chapaRoutes');
const liberacaoRouter = require('./routes/liberacaoEleitoresRoutes');
const relatorioInicializacaoRouter = require('./routes/relatorioInicializacaoRoutes');
const relatorioFinalizacaoRouter = require('./routes/relatorioFinalizacaoRoutes');
const votoRouter = require('./routes/votoRoutes');
const candidatoRouter = require('./routes/candidatoRoutes');

app.use('/', indexRouter);
app.use('/eleitores', eleitorRouter);
app.use('/eleicoes', eleicaoRouter);
app.use('/cargos', cargoRouter);
app.use('/chapas', chapaRouter);
app.use('/liberacoes', liberacaoRouter);
app.use('/relatorios/inicializacao', relatorioInicializacaoRouter);
app.use('/relatorios/finalizacao', relatorioFinalizacaoRouter);
app.use('/votos', votoRouter);
app.use('/candidatos', candidatoRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
