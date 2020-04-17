<template>
  <div>
    当前count的值:{{count}}
    <button @click="add">+1</button>
    <button @click="addn">+n</button>
  </div>
</template>

<script>
// 引入mapstate 来自 vuex
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
//   通过计算属性compputed 展开mapState 映射 出需要的值，使页面可以像计算属性一样 直接调用

  computed: {
    ...mapState(["count"])
  },
//   定义方法
  methods: {
   //   通过 vuex $store.commit 调用vuex中定义的方法， 改变 state的值
    add() {
      this.$store.commit("add");
    },
   //  参数1 方法， 参数二 自定义的值！ commit 翻译为 提交 托管
    addn() {
      this.$store.commit("addN", 3);
    }
  }
};
</script>

<style>
</style>