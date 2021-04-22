import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { Coin, ActionType } from "@/types";

export interface State {
  coins: Coin[];
  usdToRub: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    coins: [
      {
        name: "test",
        USD: 123,
        EUR: 123,
        RUB: 123,
      },
    ],
    usdToRub: 0,
  },
  getters: {
    coins: (state) => state.coins,
    usdToRub: (state) => state.usdToRub,
  },
  mutations: {
    setUsdToRub(state, { exchangeRate }) {
      state.usdToRub = exchangeRate;
    },
    setCoins(state, { coins }) {
      state.coins = coins;
    },
  },
  actions: {
    setUsdToRubExchangeRate({ commit }, exchangeRate) {
      commit(ActionType.setUsdToRub, exchangeRate);
    },
  },
  modules: {},
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
