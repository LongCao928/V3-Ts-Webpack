<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
// vue-class-component 库不再维护，不推荐在 Vue3 中使用基于类的组件。
// 推荐单文件组件，组合式API和<script setup>。
// 那干嘛安装时还默认这个library ？
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
