<template lang="pug">
div
  .table-header
    CurrencyButtonGroup
    Search
    FilterButtonGroup
  table
    thead
      tr
        th Coin
        th Value
    tbody
      tr(v-for="coin, i in coins" :key="i")
        td {{ coin.name }}
        td {{ getPriceByCurrency(coin) }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrencyButtonGroup from "@/components/CurrencyButtonGroup.vue";
import FilterButtonGroup from "@/components/FilterButtonGroup.vue";
import Search from "@/components/Search.vue";
import { mapActions, mapGetters, mapState } from "vuex";
import { ActionType, Coin, CurrencyType, GetterType } from "@/types";
import { State } from "@/store";

export default defineComponent({
  name: "Table",
  components: {
    CurrencyButtonGroup,
    FilterButtonGroup,
    Search,
  },
  computed: {
    ...mapState({
      // using object syntax, because linter argues - typisation is not deep
      activeCurrency: (state): CurrencyType => (state as State).activeCurrency,
    }),
    ...mapGetters([GetterType.coins]),
  },
  methods: {
    ...mapActions([
      ActionType.getUsdToRubRate,
      ActionType.openTickerSubConnection,
    ]),

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
