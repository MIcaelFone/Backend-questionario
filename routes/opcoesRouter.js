const {criarOpcao,listarOpcaoPorIdQuestao,atualizarOpcao}=require('../controllers/opcoesController');
const express = require('express');
const opcaoRouter = express.Router();
opcaoRouter.post('/opcao', criarOpcao);
opcaoRouter.get('/opcao/:idquestao', listarOpcaoPorIdQuestao);
opcaoRouter.put('/opcao/:idopcao', atualizarOpcao);
module.exports = opcaoRouter;