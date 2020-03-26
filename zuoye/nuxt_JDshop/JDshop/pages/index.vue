<template>
  <div class="jxx">
    <!-- 顶部导航 -->
    <tabar />
    <!-- 头部 -->
    <topMenu />
    <!-- 轮播图 -->
    <div class="jxSwipe">
      <div class="container">
        <!-- 侧边栏 -->
        <sidebar />
        <!-- 轮播图 -->
        <div class="col-6">
          <swipe :data="this.swipe" :width="590" :count="1" iscurr>
            <!-- 插槽 -->
            <template v-slot:default="row">
              <img :src="row.data.path" alt />
            </template>
          </swipe>
        </div>
        <!-- 竖轮播图 -->
        <div class="col-2">
          <rowSwipe></rowSwipe>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
//
import tabar from "~/components/tabar.vue";
// 头部导航
import topMenu from "~/components/topMenu.vue";
// 侧边栏
import sidebar from "~/components/sidebar.vue";
// 轮播图
import swipe from "~/components/swipe.vue";
// 竖轮播图
import rowSwipe from "~/components/rowSwipe.vue";
export default {
  components: {
    tabar,
    topMenu,
    sidebar,
    swipe,
    rowSwipe
  },
  data() {
    return {
      swipe: [
        {
          path:
            "https://img20.360buyimg.com/pop/s590x470_jfs/t1/90272/24/15687/93179/5e7450daE5dd2bbf1/cdfaa4ef671f698b.jpg.webp",
          title: "商品1"
        },
        {
          path:
            "https://img13.360buyimg.com/pop/s590x470_jfs/t1/90376/33/15197/77959/5e6f4314E2e49ed5b/248446eca7c95553.jpg.webp",
          title: "商品2"
        },
        {
          path:
            "https://img10.360buyimg.com/pop/s590x470_jfs/t1/87192/36/15080/83989/5e6e5174E7dd8d150/fd3ffb30e61204ae.jpg.webp",
          title: "商品3"
        },
        {
          path:
            "https://img14.360buyimg.com/pop/s590x470_jfs/t1/96432/6/15575/46599/5e73a813Ee2663826/5f07c5c4e51c1289.jpg.webp",
          title: "商品4"
        },
        {
          path:
            "https://img20.360buyimg.com/da/s590x470_jfs/t1/91213/21/16240/70794/5e7845fcE9e02388b/aac8be13cde4e653.jpg.webp",
          title: "商品5"
        },
        {
          path:
            "https://img12.360buyimg.com/pop/s590x470_jfs/t1/104995/2/16292/94239/5e79c0c3E6c5053e0/03fe15377b6d5c15.jpg.webp",
          title: "商品6"
        }
      ]
    };
  }
};
</script>

<style  lang='scss'>
// 轮播图
</style>
