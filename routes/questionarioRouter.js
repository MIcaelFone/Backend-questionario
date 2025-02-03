const {criarQuestao,listarQuestoes,buscarQuestaoPorId, buscarIdPorNome, atualizarQuestao,excluirQuestao} = require('../controllers/questionarioController');
const questionarioRouter = require('express').Router();
questionarioRouter.post('/questoes', criarQuestao);
questionarioRouter.get('/questoes', listarQuestoes);
questionarioRouter.get('/questoes/:titulo', buscarIdPorNome);
questionarioRouter.get('/questao/:id', buscarQuestaoPorId);
questionarioRouter.put('/questoes/:id', atualizarQuestao); 
questionarioRouter.delete('/questoes/:id', excluirQuestao);
module.exports = questionarioRouter;
