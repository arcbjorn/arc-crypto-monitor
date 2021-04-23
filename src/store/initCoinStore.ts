import { CoinStore } from "@/types";
import { coinsArray } from "@/api/subs.helpers";

export const initiateCoinStore = (): CoinStore => {
  const coinStore: CoinStore = {};

  coinsArray.forEach((coinName) => {
    coinStore[coinName] = {
      name: coinName,
      USD: 0,
      EUR: 0,
      RUB: 0,
    };
  });

  return coinStore;
};
