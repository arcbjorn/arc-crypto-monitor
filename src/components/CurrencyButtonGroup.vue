<template lang="pug">
.button-group
  button(:class="getActiveButton(CurrencyType.EUR)" @click="setActiveCurrency(CurrencyType.EUR)") EUR
  button(:class="getActiveButton(CurrencyType.USD)" @click="setActiveCurrency(CurrencyType.USD)") USD
  button(:class="getActiveButton(CurrencyType.RUB)" @click="setActiveCurrency(CurrencyType.RUB)") RUB
</template>

<script lang="ts">
import { State } from "@/store";
import { CurrencyType } from "@/types";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "CurrencyButtonGroup",
  data: () => {
    return {
      CurrencyType: CurrencyType,
    };
  },
  computed: {
    ...mapState({
      activeCurrency: (state): CurrencyType => (state as State).activeCurrency,
    }),
  },
  methods: {
    ...mapActions(["setActiveCurrency"]),

    getActiveButton(btnType: CurrencyType): string {
      if (this.activeCurrency === btnType) return "bg-white shadow";
      else return "";
    },
  },
});
</script>

<style scoped></style>
