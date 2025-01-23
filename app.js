const express = require('express');
const app = express();
const sequelize = require('./database');
const questionariosRouter = require('./routes/questionarioRouter');
const votacaoRouter = require('./routes/votacaoRouter');
require('./models/relacionamento');
require('dotenv').config();
app.use(express.json());
app.use(questionariosRouter);
app.use(votacaoRouter);
app.use(express.urlencoded({extended: true}));
(async () => {
    try {
      await sequelize.sync(); // Sincroniza com o banco (force: true recria as tabelas)
      console.log('Banco de dados sincronizado com sucesso!');
      app.listen(process.env.PORT, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT}`);s
      });
    } catch (error) {
      console.error('Erro ao sincronizar o banco de dados:', error);
    }
  })();
 


