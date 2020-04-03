<template>
  <div class="jxx-search">
    <div class="container">
      <searchItem :data="data" />
    </div>
  </div>
</template>

<script>
import searchItem from "~/components/searchItem.vue";

export default {
  async asyncData({ $axios }) {
    let data = await $axios.$get("/search");
    //  console.log(data);
    return data;
  },

  components: {
    searchItem
  }
};
</script>

<style>
body {
  background-color: #fff;
}
.jxx-search {
  background-color: #fff;
}
</style>