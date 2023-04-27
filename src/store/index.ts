import { defineStore, createPinia } from "pinia";

const store = createPinia();

export const useInitStore = defineStore("init", {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    doubule: (state) => {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export default store;
