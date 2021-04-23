<template lang="pug">
table
  thead
    tr
      th Coin
      th Value
  tbody
    tr
      td BTC
      td 50.000 USD
    tr
      td ETH
      td 25.000 USD
    tr
      td DOGE
      td 15.000 USD
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
// import openConnection from "@/api/tickerSubscriptions";
import getExchangeRate from "@/api/getExchangeRate";

export default defineComponent({
  name: "Table",
  setup: () => {
    const { getters } = useStore();

    console.log(getters.usdToRub);
  },
  beforeMount: function () {
    // USD to RUB
    getExchangeRate();
    // openConnection();
  },
});
</script>

<style scoped></style>
