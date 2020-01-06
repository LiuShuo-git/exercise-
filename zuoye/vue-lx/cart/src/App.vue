<template>
  <div id="app">
    <div id="nav">
      <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="search">分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我</van-tabbar-item>
      </van-tabbar>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  created(){
    window.sessionStorage.setItem('userId',1)
  }
}
</script>
<style lang="less">
</style>
