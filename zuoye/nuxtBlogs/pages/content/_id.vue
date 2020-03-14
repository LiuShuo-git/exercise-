<template>
  <div id="id">
  <h2 class="title">{{topic.title}}</h2>
  <div v-html="topic.content"></div>
  </div>
</template>

<script>
export default {
  // 根据 ID 调用接口查询这个文章的详细内容
  async asyncData({ $axios, params, payload }) {
    // 如果已经有数据了就直接使用这个数据
    console.log(params);

    if (payload) return { topic: payload };
    else {
      let res = await $axios.get(
        "https://cnodejs.org/api/v1/topic/" + params.id
      );
      console.log(res.data.data);
      
      return {
        topic: res.data.data
      };
    }
  }
};
</script>

<style>
#id .title{
   text-align: center;
}
</style>