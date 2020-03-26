<template>
  <div class="col-2 jxSwipeLeft">
    <img
      class="jxSwipeLeft-ad"
      src="http://img12.360buyimg.com/img/jfs/t1/88757/38/15495/118305/5e72c107E2a8c3a5e/df68861b69b1a03b.png.webp"
      alt
    />
    <!-- 左侧导航栏
    -->
    <div class="jxSwipeLeft-left">
      <ul>
        <li class="jxSwipeLeft-left-con" v-for="(item,index) in 18" :key="index++">
          <nuxt-link to>家用电器-{{index}}</nuxt-link>
          <div class="jxSwipeLeft-left-content">
            <div class="col-9">
              <ul class="jxSwipeLeft-left-top clearfix">
                <li v-for="(item,index) in 6" :key="index">
                  <nuxt-link to>电脑办公 ></nuxt-link>
                </li>
              </ul>
              <!--内容 -->
              <dl v-for="(item,index) in 6" :key="index" class="jxSwipeLeft-left-dl clearfix">
                <dt>
                  <nuxt-link to>电脑整机 ></nuxt-link>
                </dt>
                <dd v-for="(item,index) in 15" :key="index">
                  <nuxt-link to>笔记本</nuxt-link>
                </dd>
              </dl>
            </div>
            <div class="col-3">
              <div class="jxSwipeLeft-left-img">
                <div class="jxSwipeLeft-left-img-small">
                  <img
                    v-for="(item,index) in 8"
                    :key="index"
                    src="//img10.360buyimg.com/vclist/s83x35_jfs/t1/60962/3/12690/7533/5da1929dE1898af88/5a5b552c1f9381ac.jpg.webp"
                    alt
                  />
                </div>
                <div class="jxSwipeLeft-left-img-big">
                  <img
                    v-for="(item,index) in 2"
                    :key="index"
                    src="//img10.360buyimg.com/vclist/s168x134_jfs/t1/96548/21/14777/22093/5e6afaa6E2aef2744/6ffd43cc848d08a5.jpg.webp"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  lang='scss'>
.jxSwipe {
  height: 470px;
  margin-top: 10px;
}
.jxSwipeLeft {
  position: relative;
  &-ad {
    position: absolute;
    top: 0;
    left: -170px;
    cursor: pointer;
  }
  &-left {
    width: 190px;
    height: 100%;
    background-color: #fff;
    &-content {
      position: absolute;
      width: 1000px;
      height: 100%;
      z-index: 9999;
      background-color: #ffffff;
      top: 0;
      left: 190px;
      border: 1px solid #f7f7f7;
      box-shadow: 0px 0px 1 #f7f7f7;
      display: none;
      ul {
        margin-top: 18px;
      }
      li {
        float: left;
        // width: 100%;
        margin-left: 10px;
        line-height: 22px;
        padding: 0 7px;
        height: 22px;
        background-color: #333333;
        a {
          color: #e9f9e5;
        }
      }
      li:hover {
        background-color: #c81623;
        color: #631212;
      }
    }
    li {
      height: 26px;
      line-height: 26px;
      a {
        font-size: 14px;
      }
    }
    &-con:hover {
      .jxSwipeLeft-left-content {
        display: block;
      }
      > a:hover {
        color: #c81623;
      }
      background-color: #d9d9d9;
    }
    &-dl {
      padding: 0 20px;
      dt {
        float: left;
        font-weight: 700;
        color: #333333;
        margin-right: 20px;
        line-height: 27px;
      }
      dd {
        float: left;
        margin-left: 15px;

        a {
          color: #666666;
        }
        a:hover {
          color: #c81623;
        }
      }
    }

    // 图片区
    &-img {
      margin-top: 18px;
      margin-left: 69px;

      &-small {
        margin-bottom: 10px;
        img {
          width: 83px;
          border-right: 1px solid #fff;
          border-bottom: 1px solid #fff;
          box-sizing: border-box;
        }
      }
      &-big {
        img {
          margin-bottom: 1px;
        }
      }
    }
  }
}
</style>
