const {DataTypes} = require('sequelize');
const sequelize = require('../database');

const Votacao = sequelize.define('Votacao', {
  idVotacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idquestao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'questionarios', // Certifique-se de que o nome da tabela aqui corresponde ao definido no modelo Questionario
      key: 'idquestao',
    },
  },
  qtdade_votos_primeira_opcao: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  qtdade_votos_segunda_opcao: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  qtdade_votos_terceira_opcao: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'votacoes', // Nome da tabela no banco
});

module.exports = Votacao;
