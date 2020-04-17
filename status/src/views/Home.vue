<template>
  <div class="about">
    <addition/>
    <hr>
    <subraction/>
  </div>
</template>
<script>
import addition from "../components/addition.vue";
import subraction from "../components/subraction.vue";
export default {
 components:{
   addition,
   subraction
 },
  data() {
    return {
      
    };
  }
};
</script>
