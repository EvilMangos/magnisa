const axios = require('axios');
const moment = require('moment');

const Models = require('../db/models/index');

exports.getHome = (req, res) => {
    const currentDate = new Date();
    console.log('Current time: ', currentDate);
    return res.end(`Home: ${currentDate}`);
}

exports.getCryptosList = async (req, res) => {
    const result = await Models.cryptos.findAll({
        where: {
            price: {
                [Models.Sequelize.Op.ne]: null
            }
        },
        order: ['id'],
        raw: true,
        nest: true
    });
    res.setHeader('Content-Type', 'application/json');
    return res.json({data: result});
};

exports.getCrypto = async (req, res) => {
    let {time, name} = req.body;

    const where = [];

    where.push({
        price: {
            [Models.Sequelize.Op.ne]: null
        }
    });

    if (!name) {
        res.status(400);
        return res.end('name is required');
    } else {
        where.push({name});
    }

    let result = await Models.cryptos.findOne({
        attributes: ['name', 'price', 'updated_at'],
        where: {
            [Models.Sequelize.Op.and]: where
        },
        raw: true,
        nest: true
    });

    if (!result) {
        if (!time) time = new Date();

        if (!moment(time, moment.ISO_8601, true).isValid()) {
            res.status(400);
            return res.end('time is invalid');
        }
        const validDate = new Date(time).toISOString();

        try {
            result = await axios({
                method: 'GET',
                url: `https://rest.coinapi.io/v1/exchangerate/${name}/USD?time=${validDate}`,
                headers: {'X-CoinAPI-Key': process.env.COIN_API_KEY}
            })
        } catch (err) {
            res.status(err.response.status);
            return res.end(err.message);
        }
        result = {
            name,
            price: result.data?.rate || null,
            updated_at: new Date()
        }
    }

    res.setHeader('Content-Type', 'application/json');
    return res.json({data: result});
}
