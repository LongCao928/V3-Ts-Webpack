
<template>
  <div class="wrap">
    <h2>axios request</h2>
    <template v-if="data.resData.length">
      <div v-for="item in data.resData" :key="item.id">
        <div class="item">
          <span class="id">{{ item.id }}. </span>
          <span class="title">{{ item.title }}</span>
          <div class="body">{{ item.body }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Servies from '@/servers/axios';
interface IData {
  id: string,
  userId: number,
  title: string,
  body: string
}
let data = reactive({
  resData: [] as Array<IData>
})

async function getData() {
  let res = await Servies.getData()
  console.log(res)
  data.resData = res
}

getData()

</script>

<style lang="scss" scoped>
  .wrap {
    margin: 30px;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    h2 {
      margin: 20px 0;
    }
    .item {
      margin: 10px 0;
      text-align: left;
    }
    .id {
      color: #000;
    }
    .title {
      font-size: 16px;
      color: #000;
    }
    .body {
      text-align: left;
      margin-top: 5px;
      color: gray;
      font-size: 14px;
      text-indent: 20px;
      word-break: break-all;
    }
  }
</style>