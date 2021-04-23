export type Coin = {
  name: string;
  USD: number;
  EUR: number;
  RUB: number;
};

export interface RateObject {
  [key: string]: number;
}

export interface CoinStore {
  [key: string]: Coin;
}

export enum TickerPropType {
  sourceCurrency = "FROMSYMBOL",
  destCurrency = "TOSYMBOL",
  price = "PRICE",
}

export enum CurrencyType {
  EUR = "EUR",
  USD = "USD",
  RUB = "RUB",
}

export enum MutationType {
  setUsdToRub = "setUsdToRub",
  updateCoinsByConnection = "updateCoinsByConnection",
}

export enum ActionType {
  getUsdToRubRate = "getUsdToRubRate",
  openTickerSubConnection = "openTickerSubConnection",
}
