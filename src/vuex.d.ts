import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { Ticker } from "@/types";

declare module "@vue/runtime-core" {
  interface State {
    tickers: Ticker[];
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
