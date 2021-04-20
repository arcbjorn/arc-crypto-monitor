<template lang="pug">
table.mx-auto.table-fixed.border-separate.border.border-green-800.rounded-md(class="min-w-3/4")
  thead
    tr
      th.py-2.text-xl(class="w-1/2") Coin
      th.py-2.text-xl(class="w-1/2") Value
  tbody
    tr
      td.border.border-green-600.rounded-md.py-2 BTC
      td.border.border-green-600.rounded-md.py-2 50.000 USD
    tr
      td.border.border-green-600.rounded-md.py-2 ETH
      td.border.border-green-600.rounded-md.py-2 25.000 USD
    tr
      td.border.border-green-600.rounded-md.py-2 DOGE
      td.border.border-green-600.rounded-md.py-2 15.000 USD
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
// import openConnection from "@/api/subscriptions";

export default defineComponent({
  name: "Table",
  // components: {
  //   Table,
  // },
  props: {
    msg: String,
  },
  setup: () => {
    const { state } = useStore();

    console.log(state.tickers);
  },
  created: function () {
    // openConnection();
  },
});
</script>

<style scoped></style>
