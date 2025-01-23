const Votacao = require('../models/votacaoModel');

const realizarVoto = async (req, res) => {
    const { idquestao, qtdade_votos_primeira_opcao, qtdade_votos_segunda_opcao, qtdade_votos_terceira_opcao } = req.body;
    try {
        const votacao = await Votacao.create({
            idquestao,
            qtdade_votos_primeira_opcao,
            qtdade_votos_segunda_opcao,
            qtdade_votos_terceira_opcao,
        });
        return res.status(201).json(votacao);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const listarVotosPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const votacao = await Votacao.findByPk(id);
        return res.status(200).json(votacao);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
module.exports = { realizarVoto, listarVotosPorId };