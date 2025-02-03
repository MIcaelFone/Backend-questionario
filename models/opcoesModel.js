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
        type: DataTypes.TEXT,
        allowNull: false,
    },
    dia_voto: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    }, {
    tableName: 'opcao',
});
module.exports=opcaoModel;