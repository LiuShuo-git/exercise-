<template>
  <div>
    当前count的值:{{this.$store.state.count}}
    <button @click="del">-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    del() {
      //  提交
      this.$store.commit("del");
    }
  }
};
</script>

<style>
</style>