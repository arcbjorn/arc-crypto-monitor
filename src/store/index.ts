import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import {
  Coin,
  CoinStore,
  CurrencyType,
  MutationType,
  SortType,
  TickerPropType,
} from "@/types";
import getExchangeRate from "@/api/getExchangeRate";
import openConnection from "@/api/tickerSubscriptions";
import { initiateCoinStore } from "./initCoinStore";

export interface State {
  coins: CoinStore;
  usdToRub: number;
  searchData: string;
  activeCurrency: CurrencyType;
  activeSortType: SortType;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    coins: initiateCoinStore(),
    usdToRub: 77,
    searchData: "",
    activeCurrency: CurrencyType.USD,
    activeSortType: SortType.NONE,
  },
  getters: {
    coins({ coins, searchData, activeCurrency, activeSortType }): Coin[] {
      let filteredCoins: Coin[] = [];

      if (searchData) {
        Object.entries(coins).map(([name, coin]) => {
          if (name.startsWith(searchData)) {
            filteredCoins.push(coin);
          }
        });
      } else {
        filteredCoins = Object.values(coins);
      }

      if (activeSortType !== SortType.NONE)
        switch (activeSortType) {
          case SortType.NAME_ASC:
            filteredCoins.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case SortType.NAME_DES:
            filteredCoins.sort((a, b) => b.name.localeCompare(a.name));
            break;
          case SortType.VALUE_ASC:
            filteredCoins.sort((a, b) => a[activeCurrency] - b[activeCurrency]);
            break;
          case SortType.VALUE_DES:
            filteredCoins.sort((a, b) => b[activeCurrency] - a[activeCurrency]);
            break;
        }

      return filteredCoins;
    },
  },
  mutations: {
    setUsdToRub(state, exchangeRate: number): void {
      state.usdToRub = exchangeRate;
    },
    setActiveCurrency(state, currency: CurrencyType): void {
      state.activeCurrency = currency;
    },
    setActiveSortType(state, sortType: SortType): void {
      state.activeSortType = sortType;
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
    setActiveSortType({ commit }, sortType: SortType): void {
      commit(MutationType.setActiveSortType, sortType);
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
