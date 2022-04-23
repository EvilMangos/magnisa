const Models = require('../models/index');

const cryptos = [
    {name: 'BTC', price: null},
    {name: 'ETH', price: null},
    {name: 'SOL', price: null},
    {name: 'MATIC', price: null},
    {name: 'ALICE', price: null},
    {name: 'AVAX', price: null}
]

module.exports = {
    async up(queryInterface, Sequelize) {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            const promises = cryptos.map(elem => Models.cryptos.create(elem, {transaction}));
            await Promise.all(promises)

            await transaction.commit();
        } catch (e) {
            console.log(e);
            await transaction.rollback();
        }

    },

    async down(queryInterface, Sequelize) {
    }
};
