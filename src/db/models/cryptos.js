const cryptos = (sequelize, DataTypes) => {
    return sequelize.define(
        'cryptos',
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                field: 'id',
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'name'
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: true,
                field: 'price'
            }
        }, {
            timestamps: true,
            updatedAt: 'updated_at',
            createdAt: false
        }
    )
};

module.exports = cryptos;
