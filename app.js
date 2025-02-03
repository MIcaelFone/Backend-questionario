const express = require('express');
const app = express();
const sequelize = require('./database');
const questionarioRouter = require('./routes/questionarioRouter');
const votacaoRouter = require('./routes/votacaoRouter');
const opcaoRouter = require('./routes/opcoesRouter');
const cors = require('cors');
require('./models/relacionamento');
require('dotenv').config();
app.use(express.json());
app.use(cors())
app.use(questionarioRouter);
app.use(votacaoRouter);
app.use(opcaoRouter);
app.use(express.urlencoded({extended: true}));
 
 
(async () => {
    try {
      await sequelize.sync(); // Sincroniza com o banco (force: true recria as tabelas)
      console.log('Banco de dados sincronizado com sucesso!');
      app.listen(process.env.PORT, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT}`);
      });
    } catch (error) {
      console.error('Erro ao sincronizar o banco de dados:', error);
    }
  })();
 


