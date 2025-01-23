const { DataTypes } = require('sequelize');
const sequelize  = require('../database');

const Questionario = sequelize.define('Questionario', {
  idquestao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  enunciado: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  opcao_primeira: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  opcao_segunda: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  opcao_terceira: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  data_hora_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  data_hora_fim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'questionarios', // Nome da tabela no banco (use minúsculas no padrão)
});

module.exports = Questionario;
