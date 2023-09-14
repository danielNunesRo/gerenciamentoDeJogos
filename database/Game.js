const Sequelize = require('sequelize');
const connection = require('./database');

const Game = connection.define('game', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.FLOAT
    }
});

Game.sync({force: false}).then(() => {
    console.log('Tabela criada!')
}).catch((msgErro) => {
    console.log(msgErro)
})

module.exports=Game