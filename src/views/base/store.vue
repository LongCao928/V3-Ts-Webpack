<template>
  <section>
    <div>usePinia</div>
    <div>{{ count }}-{{ doubule }}</div>
  </section>
</template>

<script lang="ts" setup>
import { useInitStore } from "@/store";
import { storeToRefs } from "pinia";
const store = useInitStore();
const { count, doubule } = storeToRefs(store);
const { increment } = store
increment()
</script>

<style lang="scss" scoped>
section {
  background: #fff;
}
</style>
