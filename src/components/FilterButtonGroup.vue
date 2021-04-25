<template lang="pug">
.flex.flex-wrap
  .button-group.mr-8
    .bold.px-1 Sort by Name
    button(:class="getActiveButton(SortType.NAME_ASC)" @click="setActiveSortType(SortType.NAME_ASC)") &#9650;
    button(:class="getActiveButton(SortType.NAME_DES)" @click="setActiveSortType(SortType.NAME_DES)") &#9660;
  .button-group.mr-8
    .bold.px-1 Sort by Active Currency
    button(:class="getActiveButton(SortType.VALUE_ASC)" @click="setActiveSortType(SortType.VALUE_ASC)") &#9650;
    button(:class="getActiveButton(SortType.VALUE_DES)" @click="setActiveSortType(SortType.VALUE_DES)") &#9660;
  .button-group
    button(@click="setActiveSortType(SortType.NONE)").font-bold Reset
</template>

<script lang="ts">
import { State } from "@/store";
import { SortType, ActionType } from "@/types";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "FilterButtonGroup",
  data: () => {
    return {
      SortType: SortType,
    };
  },
  computed: {
    ...mapState({
      // using object syntax, because linter argues - typisation is not deep
      activeSortType: (state): SortType => (state as State).activeSortType,
    }),
  },
  methods: {
    ...mapActions([ActionType.setActiveSortType]),

    getActiveButton(btnType: SortType): string {
      if (this.activeSortType === btnType) return "bg-white shadow";
      else return "";
    },
  },
});
</script>

<style scoped></style>
