<template>
  <div>
    <div class="hander">
      <span class="title">
        <nuxt-link to="/">cnods</nuxt-link>
      </span>
    </div>
    <div class="main">
      <div class="content">
        <nuxt />
      </div>
    </div>
    <div class="footer">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
  </div>
</template>

<style>
.hander {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #444444;
  color: #fff;
  padding-left: 190px;
  font-size: 24px;
}
.main {
  background-color: #e1e1e1;
  height: 60%;
}
.main .content {
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
}
.footer {
  height: 30px;
  line-height: 30px;
  background-color: #ffffff;
  text-align: center;
  color: #ababc6;
}
/* .title {
  font-size: 24px;
  line-height: 30px;
  color: #000;
} */
</style>
