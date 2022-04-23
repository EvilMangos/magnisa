require('dotenv').config({
    path: 'configs/.env'
});
const Express = require('express');

require('./ws/index');
const router = require('./routes/cryptos');

const server = Express();

server.use(Express.json());
server.use(router);

server.listen(process.env.PORT || 3000, process.env.HOST, () => {
    console.log(`Server started}`);
});
