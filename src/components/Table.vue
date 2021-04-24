<template lang="pug">
div
  .button-group
    button(:class="getActiveButton(CurrencyType.EUR)" @click="setCurrency(CurrencyType.EUR)") EUR
    button(:class="getActiveButton(CurrencyType.USD)" @click="setCurrency(CurrencyType.USD)") USD
    Button(:class="getActiveButton(CurrencyType.RUB)" @click="setCurrency(CurrencyType.RUB)") RUB
  table
    thead
      tr
        th Coin
        th Value
    tbody
      tr(v-for="coin, i in Object.values(coins)" :key="i")
        td {{ coin.name }}
        td {{ getPriceByCurrency(coin) }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { Coin, CurrencyType } from "@/types";

export default defineComponent({
  name: "Table",
  data: () => {
    return {
      currency: CurrencyType.USD,
      CurrencyType: CurrencyType,
    };
  },
  computed: {
    ...mapState(["coins", "usdToRub"]),
  },
  methods: {
    ...mapActions(["getUsdToRubRate", "openTickerSubConnection"]),

    getPriceByCurrency(coin: Coin): string {
      return `${coin[this.currency]} ${this.currency}`;
    },

    getActiveButton(btnType: CurrencyType): string {
      if (this.currency === btnType) return "bg-white shadow";
      else return "";
    },

    setCurrency(btnType: CurrencyType): void {
      this.currency = btnType;
    },
  },
  beforeMount: function () {
    this.getUsdToRubRate();
    this.openTickerSubConnection();
  },
});
</script>

<style scoped></style>
