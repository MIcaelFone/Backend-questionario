
const Questionario = require('../models/relacionamento');
const criarQuestao = async (req, res) => {
    const { enunciado, opcao_primeira, opcao_segunda, opcao_terceira, data_hora_inicio, data_hora_fim } = req.body;
    try {
        const questao = await Questionario.create({
            enunciado,
            opcao_primeira,
            opcao_segunda,
            opcao_terceira,
            data_hora_inicio,
            data_hora_fim,
        });
        return res.status(201).json(questao);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const listarQuestoes = async (req, res) => {
    try {
        const questoes = await Questionario.findAll();
        return res.status(200).json(questoes);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const buscarQuestaoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const questao = await Questionario.findByPk(id);
        return res.status(200).json(questao);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const atualizarQuestao = async (req, res) => {
    const { id } = req.params;
    const { enunciado, opcao_primeira, opcao_segunda, opcao_terceira, data_hora_inicio, data_hora_fim } = req.body;
    try {
        await Questionario.update({
            enunciado,
            opcao_primeira,
            opcao_segunda,
            opcao_terceira,
            data_hora_inicio,
            data_hora_fim,
        }, {
            where: { idquestao: id }
        });
        return res.status(204).end();
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const excluirQuestao = async (req, res) => {
    const { id } = req.params;
    try {
        await Questionario.destroy({
            where: { idquestao: id }
        });
        return res.status(204).end();
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
module.exports = {
    criarQuestao,
    listarQuestoes,
    buscarQuestaoPorId,
    atualizarQuestao,
    excluirQuestao
}