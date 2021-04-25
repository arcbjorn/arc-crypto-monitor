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

export enum SortType {
  NONE = "NONE",
  NAME_ASC = "NAME_ASC",
  NAME_DES = "NAME_DES",
  VALUE_ASC = "VALUE_ASC",
  VALUE_DES = "VALUE_DES",
}

export enum MutationType {
  setUsdToRub = "setUsdToRub",
  updateCoinsByConnection = "updateCoinsByConnection",
  updateSearchData = "updateSearchData",
  setActiveCurrency = "setActiveCurrency",
  setActiveSortType = "setActiveSortType",
}

export enum ActionType {
  getUsdToRubRate = "getUsdToRubRate",
  openTickerSubConnection = "openTickerSubConnection",
  updateSearchData = "updateSearchData",
  setActiveCurrency = "setActiveCurrency",
  setActiveSortType = "setActiveSortType",
}

export enum GetterType {
  coins = "coins",
}
