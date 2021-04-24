<template lang="pug">
div
  .table-header
    div
      Search
    CurrencyButtonGroup
  table
    thead
      tr
        th Coin
        th Value
    tbody
      tr(v-for="coin, i in getCoinsByName" :key="i")
        td {{ coin.name }}
        td {{ getPriceByCurrency(coin) }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrencyButtonGroup from "@/components/CurrencyButtonGroup.vue";
import Search from "@/components/Search.vue";
import { mapActions, mapGetters, mapState } from "vuex";
import { Coin, CurrencyType } from "@/types";
import { State } from "@/store";

export default defineComponent({
  name: "Table",
  components: {
    CurrencyButtonGroup,
    Search,
  },
  computed: {
    ...mapState({
      // using object syntax, because linter argues - typisation is not deep
      activeCurrency: (state): CurrencyType => (state as State).activeCurrency,
    }),
    ...mapGetters(["getCoinsByName"]),
  },
  methods: {
    ...mapActions(["getUsdToRubRate", "openTickerSubConnection"]),

    getPriceByCurrency(coin: Coin): string {
      return `${coin[this.activeCurrency]} ${this.activeCurrency}`;
    },
  },
  beforeMount: function () {
    this.getUsdToRubRate();
    this.openTickerSubConnection();
  },
});
</script>

<style scoped></style>
