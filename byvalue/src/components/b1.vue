<template>
  <div>兄弟组件1</div>
</template>

<script>
import bus from "../assets/busEvent.js";
export default {
  data() {
    return {
      msg: "fff"
    };
  },
  mounted() {
    bus.$emit("msg", this.msg);
    console.log(bus);
  }
};
</script>

<style>
</style>