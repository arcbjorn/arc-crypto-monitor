export type Coin = {
  name: string;
  USD: number;
  EUR: number;
  RUB: number;
};

export enum ActionType {
  setUsdToRub = "setUsdToRub",
  setCoins = "setCoins",
}
