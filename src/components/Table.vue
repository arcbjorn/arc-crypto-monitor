<template lang="pug">
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
  },
  beforeMount: function () {
    this.getUsdToRubRate();
    this.openTickerSubConnection();
  },
  mounted: function () {
    console.log(this.coins);
  },
});
</script>

<style scoped></style>
