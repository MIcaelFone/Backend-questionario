const { realizarVoto, listarVotosPorId} =require("../controllers/votacaoController");
const router = require('express').Router();
router.post('/votos', realizarVoto);
router.get('/votos/:id', listarVotosPorId);
module.exports = router;