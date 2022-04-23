module.exports = {
    cryptos: [
        { id: 1, name: 'BTC' },
        { id: 2, name: 'ETH' },
        { id: 3, name: 'LTC' },
        { id: 3, name: 'SOL' },
        { id: 4, name: 'ADA' },
        { id: 5, name: 'SUPER' },
    ],
    crypto_prices: [
        { crypto_id: foreign(cryptos_available(1)), price, updated_at }
    ]
}
