const Votacao = require('../models/votacaoModel');

const realizarVoto = async (req, res) => {
    const { idquestao,idopcao} = req.body;
    try {
        const votacao = await Votacao.create({
            idquestao: idquestao,
            idopcao: idopcao,  
            dia_voto: new Date()
        });
        console.log("Voto realizado com sucesso!");
        return res.status(201).json(votacao);
    } catch (error) {
        console.log("Erro ao realizar voto!");
        return res.status(400).json({ error: error.message });
    }
}
const listarVotosPorId = async (req, res) => {
    const { idquestao } = req.params;
    try {
        const votacao = await Votacao.findByPk(idquestao);
        console.log("Votos listados com sucesso!");
        return res.status(200).json(votacao);
    } catch (error) {
        console.log("Erro ao listar votos!");
        return res.status(400).json({ error: error.message });
    }
}
module.exports = { realizarVoto, listarVotosPorId };