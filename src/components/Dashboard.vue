<template lang="pug">
.dashboard
  .title {{ msg }}
  .description
    | Simple crypto coin monitoring solution for fellow geeks ☺️ 🤖
  Table
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "@/components/Table.vue";
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
    // openConnection();
  },
});
</script>

<style scoped></style>
