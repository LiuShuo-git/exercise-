<template>
  <div>
    兄弟组件2
    <div>{{message}}</div>
  </div>
</template>

<script>
import bus from "../assets/busEvent.js";
export default {
  data() {
    return {
      message: "11"
    };
  },
  created() {
    bus.$on("msg", msg => {
      console.log(msg);
      this.message = msg;
    });
  }
};
</script>

<style>
</style>