const {DataTypes} = require('sequelize');
const sequelize = require('../database');
const opcaoModel = sequelize.define('opção', {
    idopcao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    idquestao: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    }, {
    tableName: 'opcao',
});
module.exports=opcaoModel;