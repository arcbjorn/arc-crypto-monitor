const coins =
  "btc, eth, doge, xrp, trx, xlm, bch, bsv, neo, ada, awc, go, xtz, qtum, smart, ltc, xmr, vet, vtho, dent, eos, dcn, nexo, tpay, zrx, usdc, usdt, bnb, tnt, rex, rep, rcn, kin";

export const coinsArray: string[] = coins.toUpperCase().split(", ");

const subsToUSD: string[] = coinsArray.map((coin) => `2~Coinbase~${coin}~USD`);
const subsToEUR: string[] = coinsArray.map((coin) => `2~Coinbase~${coin}~EUR`);

const subsArray: string[] = [...subsToUSD, ...subsToEUR];

export default subsArray;
