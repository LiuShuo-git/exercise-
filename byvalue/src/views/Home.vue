 
<template>
  <div class="home">
    <b1></b1>
    <b2></b2>
    <div class="msg">{{msg}}</div>
    <button @click="getMsg">传参</button>
  </div>
</template>

<script>
import bus from "../assets/busEvent.js";
import b1 from "../components/b1";
import b2 from "../components/b2";
export default {
  components: {
    b1,
    b2
  },
  data() {
    return {
      msg: "小小酥"
    };
  },
  methods: {
    getMsg() {
      console.log(this.msg);
      console.log(bus);
      bus.$emit("msg", this.msg);
    }
  }
};
</script>

