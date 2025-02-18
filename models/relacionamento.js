const Questionario = require('./questionarioModel');
const Votacao = require('./votacaoModel');
const opcaoModel = require('./opcoesModel');

Questionario.hasMany(Votacao, {
  foreignKey: 'idquestao',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Votacao.belongsTo(Questionario, {
  foreignKey: 'idquestao',
});
opcaoModel.hasMany(Votacao, {
  foreignKey: 'idopcao',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Votacao.belongsTo(opcaoModel, {
  foreignKey: 'idopcao',
});
Questionario.hasMany(opcaoModel, {
  foreignKey: 'idquestao', 
  onDelete: 'CASCADE',     
  onUpdate: 'CASCADE',
});
opcaoModel.belongsTo(Questionario, {
  foreignKey: 'idquestao', 
});
module.exports = { Questionario, Votacao , opcaoModel};
