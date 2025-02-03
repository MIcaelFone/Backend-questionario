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
  idopcao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dia_voto: {
    type: DataTypes.DATE,
    allowNull: false,
  },
   
}, {
  tableName: 'votacoes', // Nome da tabela no banco
});

module.exports = Votacao;
