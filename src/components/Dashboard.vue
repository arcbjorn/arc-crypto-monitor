<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Simple crypto coin monitoring solution for fellow geeks ☺️ 🤖</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dashboard",
  props: {
    msg: String,
  },
});
</script>

<style scoped></style>
