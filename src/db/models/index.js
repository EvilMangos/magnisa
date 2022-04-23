require('dotenv').config({
    path: 'configs/.env'
});
const Sequelize = require('sequelize');

const sequelize = require('../index');
const cryptos = require('./cryptos');

module.exports = {
    Sequelize,
    cryptos: cryptos(sequelize, Sequelize)
}
