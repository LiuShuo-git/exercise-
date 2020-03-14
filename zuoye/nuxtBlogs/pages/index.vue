<template>
  <div class="container">
    <ul>
      <li v-for="(item,index) in  topics" :key="index">
        <nuxt-link :to="'/content/'+item.id">{{item.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {};
  },
  async asyncData({ $axios }) {
    let res = await $axios.get("https://cnodejs.org/api/v1/topics");

    console.log(res);

    return {
      topics: res.data.data
    };
  }
};
</script>

<style>
.container {
  margin: 0 30px;
}
.container li {
  margin-bottom: 5px;
}

</style>
