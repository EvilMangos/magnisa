const router = require('express').Router();
const controllers = require('../controllers/cryptos');

router.get('/', controllers.getHome);
router.get('/cryptos', controllers.getCryptosList);
router.get('/crypto', controllers.getCrypto);

module.exports = router;
