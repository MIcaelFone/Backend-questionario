const Questionario = require('./questionarioModel');
const Votacao = require('./votacaoModel');

Questionario.hasMany(Votacao, {
  foreignKey: 'idquestao',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Votacao.belongsTo(Questionario, {
  foreignKey: 'idquestao',
});

module.exports = { Questionario, Votacao };
