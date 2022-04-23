const WebSocket = require('ws');

const Models = require('../db/models/index');

const ws = new WebSocket('wss://ws-sandbox.coinapi.io/v1/');

ws.onopen = async () => {
    console.log('Websocket connected');

    let cryptos = await Models.cryptos.findAll({
        attributes: ['name'],
        raw: true,
        nest: true
    });

    cryptos = cryptos.map(elem => `${elem.name}/USD`);

    ws.send(JSON.stringify({
        type: 'hello',
        apikey: process.env.COIN_API_KEY,
        heartbeat: false,
        subscribe_data_type: ['exrate'],
        subscribe_filter_asset_id: cryptos
    }));
};

ws.onmessage = async (message) => {
    const jsonMessage = JSON.parse(message.data);
    await Models.cryptos.update({
        price: jsonMessage.rate
    }, {
        where: {
            name: jsonMessage.asset_id_base
        }
    });
};

ws.onclose = () => {
    console.log('Websocket disconnected');
}

module.exports = ws;
