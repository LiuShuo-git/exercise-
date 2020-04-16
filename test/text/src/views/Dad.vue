<template>
  <div class="dad">
    <button @click="showson">查看子组件传递的值</button>

    <son :data="data" @sonlist="showson" />
    <div>{{this.sonList}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import son from "@/components/son.vue";

export default {
  components: {
    son
  },
  data() {
    return {
      sonList: "",
      data: {
        id: 1,
        name: "来自组件的值"
      }
    };
  },
  methods: {
    showson(data) {
      console.log(22);

      console.log(data);
      this.sonList = data;
    }
  }
};
</script>
