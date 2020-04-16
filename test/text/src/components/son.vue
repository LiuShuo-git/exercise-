<template>
  <div class="son">
    接收到的数据:{{data}}
    <button @click="isDad">向父组件传值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sonList: {
        id: "2",
        name: "我是子组件的值"
      }
    };
  },
  props: ["data"],
  methods: {
    isDad() {
      console.log(111);

      this.$emit("sonlist", this.sonList);
    }
  }
};
</script>

<style>
</style>