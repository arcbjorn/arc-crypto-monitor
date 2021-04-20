<template lang="pug">
.container.mx-auto.px-4
  .font-bold.text-4xl.p-2 {{ msg }}
  .block.bg-green-200.p-4.my-6.rounded-md.text-md
    | Simple crypto coin monitoring solution for fellow geeks ☺️ 🤖
  Table
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "@/components/Table.vue";
import { useStore } from "@/store";
// import openConnection from "@/api/subscriptions";

export default defineComponent({
  name: "Dashboard",
  components: {
    Table,
  },
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
