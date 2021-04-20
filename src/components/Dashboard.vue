<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Simple crypto coin monitoring solution for fellow geeks ☺️ 🤖</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
// import openConnection from "@/api/subscriptions";

export default defineComponent({
  name: "Dashboard",
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
