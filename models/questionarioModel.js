const { DataTypes } = require('sequelize');
const sequelize  = require('../database');

const Questionario = sequelize.define('Questionario', {
  
  idquestao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
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
