import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { CoinStore, CurrencyType, MutationType, TickerPropType } from "@/types";
import getExchangeRate from "@/api/getExchangeRate";
import openConnection from "@/api/tickerSubscriptions";
import { initiateCoinStore } from "./initCoinStore";

export interface State {
  coins: CoinStore;
  usdToRub: number;
  searchData: string;
  activeCurrency: CurrencyType;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    coins: initiateCoinStore(),
    usdToRub: 77,
    searchData: "",
    activeCurrency: CurrencyType.USD,
  },
  getters: {
    getCoinsByName({ coins, searchData }): CoinStore {
      const filteredCoinStore: CoinStore = {};

      Object.entries(coins).map(([name, coin]) => {
        if (name.startsWith(searchData)) {
          filteredCoinStore[name] = coin;
        }
      });

      return Object.keys(filteredCoinStore).length ? filteredCoinStore : coins;
    },
  },
  mutations: {
    setUsdToRub(state, exchangeRate: number): void {
      state.usdToRub = exchangeRate;
    },
    setActiveCurrency(state, currency: CurrencyType): void {
      state.activeCurrency = currency;
    },
    updateSearchData(state, data: string) {
      state.searchData = data;
    },
    updateCoinsByConnection({ coins, usdToRub }, connection: WebSocket): void {
      connection.onmessage = function (event: MessageEvent): void {
        const ticker = JSON.parse(event.data);

        // Switching by the destination currency (symbol) of ticker
        switch (ticker[TickerPropType.destCurrency]) {
          case CurrencyType.EUR:
            if (ticker[TickerPropType.price]) {
              coins[ticker[TickerPropType.sourceCurrency]].EUR =
                ticker[TickerPropType.price];
            }
            break;
          case CurrencyType.USD:
            if (ticker[TickerPropType.price]) {
              coins[ticker[TickerPropType.sourceCurrency]].USD =
                ticker[TickerPropType.price];
              // CryptoCompare does not provide exchange rate for Rubbles :-(
              coins[ticker[TickerPropType.sourceCurrency]].RUB =
                Math.trunc(ticker[TickerPropType.price] * usdToRub * 100) / 100;
            }
            break;
        }
      };
    },
  },
  actions: {
    getUsdToRubRate({ commit }): Promise<void> {
      return getExchangeRate().then((rate) => {
        if (rate) commit(MutationType.setUsdToRub, rate);
      });
    },
    setActiveCurrency({ commit }, currency: CurrencyType): void {
      commit(MutationType.setActiveCurrency, currency);
    },
    updateSearchData({ commit }, data: string): void {
      commit(MutationType.updateSearchData, data);
    },
    openTickerSubConnection({ commit }): void {
      const connection = openConnection();
      if (connection) commit(MutationType.updateCoinsByConnection, connection);
    },
  },
  modules: {},
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
