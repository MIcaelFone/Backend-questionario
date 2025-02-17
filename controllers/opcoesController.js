const Opcao = require('../models/opcoesModel');
const criarOpcao = async (req, res) => {
    const { idquestao, descricao} = req.body;
    try {
        const opcao = await Opcao.create({
            idquestao: idquestao,
            descricao: descricao,
        });
        return res.status(201).json(opcao);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const atualizarOpcao = async (req, res) => {
    const { idopcao } = req.params;
    const { descricao } = req.body;
    try {
        const opcoes = await Opcao.update({ descricao: descricao }, { where: { idopcao: idopcao } });
       
        console.log("Opção atualizada com sucesso!");
        return res.status(200).json(opcoes);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const listarOpcaoPorIdQuestao = async (req, res) => {
    const { idquestao } = req.params ;
    try {
        const opcao = await Opcao.findAll({ where: { idquestao: idquestao } });
        console.log("Opções encontradas com sucesso!");
        return res.status(200).json({ data:opcao });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
module.exports = { criarOpcao,listarOpcaoPorIdQuestao,atualizarOpcao };