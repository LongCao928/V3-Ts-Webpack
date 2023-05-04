
<template>
  <div>
    <div>axios request</div>
  </div>
</template>

<script lang="ts" setup>
import Servies from '@/servers/axios';
let res = Servies.getData()
console.log(res)
</script>

<style lang="scss" scoped></style>