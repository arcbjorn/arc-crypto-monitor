<template lang="pug">
div
  .table-header
    div
      .search-box
        Icon(name="search").ml-4
        input.search-input(v-model="searchData" @input="setSearch" type="text" placeholder="Search")
    CurrencyButtonGroup
  table
    thead
      tr
        th Coin
        th Value
    tbody
      tr(v-for="coin, i in Object.values(getCoinsByName)" :key="i")
        td {{ coin.name }}
        td {{ getPriceByCurrency(coin) }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "@/components/Icon.vue";
import CurrencyButtonGroup from "@/components/CurrencyButtonGroup.vue";
import { mapActions, mapGetters, mapState } from "vuex";
import { Coin, CurrencyType } from "@/types";
import { State } from "@/store";

export default defineComponent({
  name: "Table",
  components: {
    Icon,
    CurrencyButtonGroup,
  },
  data: () => {
    return {
      searchData: "",
    };
  },
  computed: {
    ...mapState({
      // using object syntax, because linter argues - typisation is not deep
      activeCurrency: (state): CurrencyType => (state as State).activeCurrency,
    }),
    ...mapGetters(["getCoinsByName"]),
  },
  methods: {
    ...mapActions([
      "getUsdToRubRate",
      "openTickerSubConnection",
      "updateSearchData",
    ]),

    getPriceByCurrency(coin: Coin): string {
      return `${coin[this.activeCurrency]} ${this.activeCurrency}`;
    },

    setSearch() {
      this.updateSearchData(this.searchData);
    },
  },
  beforeMount: function () {
    this.getUsdToRubRate();
    this.openTickerSubConnection();
  },
});
</script>

<style scoped></style>
