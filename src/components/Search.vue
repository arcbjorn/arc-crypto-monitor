<template lang="pug">
.search-box
  Icon(name="search").ml-4
  input.search-input(v-model="searchData" @input="setSearch" type="text" placeholder="Search")
</template>

<script lang="ts">
import { State } from "@/store";
import { ActionType, CurrencyType } from "@/types";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import Icon from "@/components/Icon.vue";

export default defineComponent({
  name: "Search",
  components: {
    Icon,
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
  },
  methods: {
    ...mapActions([ActionType.updateSearchData]),
    setSearch() {
      this.updateSearchData(this.searchData);
    },
  },
});
</script>

<style scoped></style>
