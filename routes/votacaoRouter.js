const { realizarVoto, listarContagemVotosPorOpcao} =require("../controllers/votacaoController");
const votacaoRouter = require('express').Router();
votacaoRouter.post('/votos', realizarVoto);
votacaoRouter.get('/votos/:id', listarContagemVotosPorOpcao);
module.exports = votacaoRouter;