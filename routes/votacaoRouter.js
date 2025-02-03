const { realizarVoto, listarVotosPorId} =require("../controllers/votacaoController");
const votacaoRouter = require('express').Router();
votacaoRouter.post('/votos', realizarVoto);
votacaoRouter.get('/votos/:id', listarVotosPorId);
module.exports = votacaoRouter;