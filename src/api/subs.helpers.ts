// String manipilations to compose correct request parameters

// Required coins, not all are updated properly on CryptoCompare
// const requiredCoins =
//   "btc, eth, doge, xrp, trx, xlm, bch, bsv, neo, ada, awc, go, xtz, qtum, smart, ltc, xmr, vet, vtho, dent, eos, dcn, nexo, tpay, zrx, usdc, usdt, bnb, tnt, rex, rep, rcn, kin";

const coins = "btc, eth, xrp, xlm, bch, ada, xtz, ltc, eos, zrx, rep";

export const coinsArray: string[] = coins.toUpperCase().split(", ");

const subsToUSD: string[] = coinsArray.map((coin) => `2~Coinbase~${coin}~USD`);
const subsToEUR: string[] = coinsArray.map((coin) => `2~Coinbase~${coin}~EUR`);

export const subsArray: string[] = [...subsToUSD, ...subsToEUR];
