<template>
  <!-- 顶部导航 -->
  <div class="tabar">
    <div class="container">
      <!-- 顶部左侧 -->
      <div class="col-5">
        <zdk title="云南" location>
          <h3>京西商城！</h3>
          <span style="color:red">京西商城</span>
        </zdk>
      </div>

      <!-- 顶部右侧 -->
      <div class="col-7">
        <span>你好，请登录</span> &nbsp; &nbsp;
        <nuxt-link to="/register" style="color:#f10215" class="tabar-line">免费注册</nuxt-link>
        <nuxt-link to="/register" class="tabar-line">我的订单</nuxt-link>
        <zdk class="tabar-line" title="我的京东" arrow>我的京东</zdk>
        <zdk class="tabar-line" title="客户服务" arrow>客户服务</zdk>
      </div>
    </div>
  </div>
</template>

<script>
import zdk from "~/components/zdk.vue";

export default {
  components: {
    zdk
  }
};
</script>

<style lang='scss'>
.tabar {
  position: relative;
  height: 31px;
  background-color: #e3e4e5;
  line-height: 31px;

  .zdk {
    display: inline-block;
    // position: relative;

    &-content {
      position: absolute;
      background-color: #ffffff;
      border: 1px solid #cccccc;
      max-width: 313px;
      padding: 0px 30px;
      display: none;
    }
    &-icon {
      cursor: pointer;
      padding: 0 5px;
      display: inline-block;
      line-height: 31px;
    }
    &:hover {
      .zdk-icon {
        background-color: #fff;
        color: red;
        border: 1px solid #ccc;
        border-bottom: 1px solid #fff;
        .zdk-bottom {
          //  position: absolute;
          width: 100%;
          height: 10px;
          background-color: red;
        }
      }
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #fff;
        display: block;
        position: absolute;
        z-index: 9999;
        left: 0;
      }
      .zdk-content {
        display: block;
      }
    }
  }

  .tabar-line::before {
    position: absolute;
    content: "";
    width: 1px;
    // display: block;
    height: 60%;

    top: 6px;

    background-color: #cbcbcb;
  }
}
</style>