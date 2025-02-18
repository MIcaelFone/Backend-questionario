const Votacao = require('../models/votacaoModel');
const sequelize = require('../database');

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
const listarContagemVotosPorOpcao = async (req, res) => {
    const { id } = req.params;
    try {
        const votacao = await Votacao.findAndCountAll({
           where: {idquestao: id},
        });
        return res.status(200).json({ votacao });
    } catch (error) {
        console.log("Erro ao listar votos!",error);
        return res.status(400).json({ error: error.message });
    }
}
module.exports = { realizarVoto, listarContagemVotosPorOpcao };