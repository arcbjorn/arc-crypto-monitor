// String manipilations to compose correct request parameters

const coins =
  "btc, eth, xrp, xlm, bch, ada, xtz, ltc, eos, zrx, link, etc, fil, celo, mana, omg, crv, aave, band, bat, grt, matic, algo, sushi, ankr";

export const coinsArray: string[] = coins.toUpperCase().split(", ");

const subsToUSD: string[] = coinsArray.map((coin) => `2~Coinbase~${coin}~USD`);
const subsToEUR: string[] = coinsArray.map((coin) => `2~Coinbase~${coin}~EUR`);

export const subsArray: string[] = [...subsToUSD, ...subsToEUR];
