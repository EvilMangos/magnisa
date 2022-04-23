require('dotenv').config({
  path: 'configs/.env'
});

module.exports = {
  development: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    migrationStorageTableName: 'sequelize_meta',
    migrationStorageTableSchema: 'sequelize_schema',
    seederStorageTableName: 'sequelize_data',
    seederStorage: 'sequelize',
    seederStorageTableSchema: 'sequelize_schema',
    logging: false
  }
};
