module.exports = {
    up: async (queryInterface, DataTypes) => queryInterface.sequelize.query(`
        CREATE TABLE cryptos (
        id SERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price FLOAT,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    ); 
    `),

    down: async (queryInterface, DataTypes) => queryInterface.dropTable("cryptos", {})
};
