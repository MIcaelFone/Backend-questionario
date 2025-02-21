const Questionario = require('../models/questionarioModel');
const { Op } = require('sequelize');
const criarQuestao = async (req, res) => {
    const { titulo, data_hora_inicio, data_hora_fim } = req.body;
    try {
        const questoes = await Questionario.create({
            titulo: titulo,  
            data_hora_inicio : data_hora_inicio,
            data_hora_fim : data_hora_fim
        });
         console.log("Questão criada com sucesso!");
        return res.status(201).json(questoes);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const listarQuestoes = async (req, res) => {
    try {
        const questoes = await Questionario.findAll();
        console.log("Questões encontradas com sucesso!");
        return res.status(200).json( { data:questoes } );
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const buscarIdPorNome = async (req, res) => {
    const { titulo } = req.params;
    try {
        const questao = await Questionario.findOne({
            where: { titulo: titulo }
        },
        attributes = ['idquestao']
        );
        
        console.log("Questão encontrada com sucesso!");
        return res.status(200).json({ data:questao.idquestao });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

}
const buscarQuestaoPorId = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const questao = await Questionario.findOne({idquestao: id});
        console.log("Questão encontrada com sucesso!");
        return res.status(200).json({ data: questao} );
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const atualizarQuestao = async (req, res) => {
    const { id } = req.params;
    const { titulo, data_hora_fim, data_hora_inicio } = req.body;
    try {
        await Questionario.update({
            titulo: titulo,
            data_hora_inicio:data_hora_inicio,
            data_hora_fim:data_hora_fim,
        }, {
            where: { idquestao: id }
        });
        return res.status(200).json({ message: "Questão atualizada com sucesso!" });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const excluirQuestao = async (req, res) => {
    const {id} = req.params;
    try {
        await Questionario.destroy({
            where: { idquestao: id }
        });
        return res.status(204).end();
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const buscarquestoesDisponiveis = async (req, res) => {
    try {
        
        const questoes = await Questionario.findAll({
            where: {
                data_hora_fim: { [Op.gte]: new Date() }, 
            }
        });
        console.log("Questões encontradas com sucesso!");
        return res.status(200).json({ data: questoes });
    } catch (error) {
        console.error("Erro ao buscar questões:", error);
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    criarQuestao,
    listarQuestoes,
    buscarQuestaoPorId,
    atualizarQuestao,
    excluirQuestao,
    buscarIdPorNome,
    buscarquestoesDisponiveis
}