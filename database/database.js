const Sequelize = require('sequelize');

const connection = new Sequelize('games', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection;
