import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { Coin } from "@/types";

declare module "@vue/runtime-core" {
  interface State {
    coin: Coin[];
    usdToRub: number;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
