import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { CoinStore, CurrencyType, MutationType, TickerPropType } from "@/types";
import getExchangeRate from "@/api/getExchangeRate";
import openConnection from "@/api/tickerSubscriptions";
import { initiateCoinStore } from "./initCoinStore";

export interface State {
  coins: CoinStore;
  usdToRub: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    coins: initiateCoinStore(),
    usdToRub: 77,
  },
  mutations: {
    setUsdToRub(state, exchangeRate) {
      state.usdToRub = exchangeRate;
    },
    updateCoinsByConnection(state, connection) {
      connection.onmessage = function (event: MessageEvent): void {
        const ticker = JSON.parse(event.data);

        console.log(ticker);

        // Setting the key in CoinStore to the source currency of ticker
        if (ticker[TickerPropType.sourceCurrency]) {
          state.coins[ticker[TickerPropType.sourceCurrency]].name =
            ticker[TickerPropType.sourceCurrency];
        }

        // Switching by the destination currency (symbol) of ticker
        switch (ticker[TickerPropType.destCurrency]) {
          case CurrencyType.EUR:
            if (ticker[TickerPropType.price]) {
              state.coins[ticker[TickerPropType.sourceCurrency]].EUR =
                ticker[TickerPropType.price];
            }
            break;
          case CurrencyType.USD:
            if (ticker[TickerPropType.price]) {
              state.coins[ticker[TickerPropType.sourceCurrency]].USD =
                ticker[TickerPropType.price];
              // CryptoCompare does not provide exchange rate for Rubbles :-(
              state.coins[
                ticker[TickerPropType.sourceCurrency]
              ].RUB = Math.trunc(ticker[TickerPropType.price] * state.usdToRub);
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
