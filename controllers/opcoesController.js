const Opcao = require('../models/opcoesModel');
const criarOpcao = async (req, res) => {
    const { idquestao, descricao} = req.body;
    try {
        const opcao = await Opcao.create({
            idquestao: idquestao,
            descricao: descricao,
            dia_voto: new Date(),
        });
        return res.status(201).json(opcao);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const atualizarOpcao = async (req, res) => {
    const { idopcao } = req.params;
    const { descricao } = req.body;
    console.log("id: ", idopcao);
    console.log("descricao: ", descricao);
    try {
        const opcoes = await Opcao.update({ descricao: descricao }, { where: { idopcao: idopcao } });
       
        console.log("Opção atualizada com sucesso!");
        return res.status(200).json(opcoes);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
const listarOpcaoPorIdQuestao = async (req, res) => {
    const { id } = req.params;
    console.log("idquestao: ", id);
    try {
        const opcao = await Opcao.findAll({ where: { idquestao: id } });
        console.log(opcao)
        console.log("Opções encontradas com sucesso!");
        return res.status(200).json({ data:opcao });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
module.exports = { criarOpcao,listarOpcaoPorIdQuestao,atualizarOpcao };