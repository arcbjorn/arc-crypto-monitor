<template lang="pug">
div
  .table-header
    div
      .search-box
        Icon(name="search").ml-4
        input.search-input(v-model="searchData" @input="setSearch" type="text" placeholder="Search")
    .button-group
      button(:class="getActiveButton(CurrencyType.EUR)" @click="setCurrency(CurrencyType.EUR)") EUR
      button(:class="getActiveButton(CurrencyType.USD)" @click="setCurrency(CurrencyType.USD)") USD
      button(:class="getActiveButton(CurrencyType.RUB)" @click="setCurrency(CurrencyType.RUB)") RUB
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
import { mapActions, mapGetters } from "vuex";
import { Coin, CurrencyType } from "@/types";

export default defineComponent({
  name: "Table",
  components: {
    Icon,
  },
  data: () => {
    return {
      currency: CurrencyType.USD,
      searchData: "",
      CurrencyType: CurrencyType,
    };
  },
  computed: {
    ...mapGetters(["getCoinsByName"]),
  },
  methods: {
    ...mapActions([
      "getUsdToRubRate",
      "openTickerSubConnection",
      "updateSearchData",
    ]),

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
