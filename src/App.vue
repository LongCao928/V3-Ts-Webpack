<template>
  <nav v-if="isShowNav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/pinia">Pinia</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const isShowNav = ref(true)
const Router = useRouter()

watch(
  () => Router.currentRoute.value,
  newValue => {
    console.log(newValue)
    newValue.meta.isHideNav ? isShowNav.value = false : isShowNav.value = true
  },
  // immediate 立即执行回调，默认懒执行
  // deep 强制转成深层侦听器
  { immediate: true, deep: true }
)
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
