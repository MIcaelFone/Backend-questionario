const {criarQuestao,listarQuestoes,buscarQuestaoPorId, atualizarQuestao,excluirQuestao} = require('../controllers/questionarioController');
const router = require('express').Router();
router.post('/questoes', criarQuestao);
router.get('/questoes', listarQuestoes);
router.get('/questoes/:id', buscarQuestaoPorId);
router.put('/questoes/:id', atualizarQuestao);
router.delete('/questoes/:id', excluirQuestao);
module.exports = router;