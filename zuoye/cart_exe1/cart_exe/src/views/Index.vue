<template>
  <div class="index">
    <!-- 顶部导航 -->
    <van-nav-bar title="首页" />
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in images" :key="index">
        <van-image :src="item.path" />
      </van-swipe-item>
    </van-swipe>
    <!-- 分类 -->
    <van-grid>
      <van-grid-item v-for="(item,index) in classify" :key="index" :text="item.name" />
    </van-grid>
    <van-list
      v-model="loading"
      :finished="finished"
      :offset="50"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <!-- 部分商品 -->
      <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="(item,index) in goods" :key="index">
          <van-image :src="item.image" />
          <van-cell>{{item.goods_name}}</van-cell>
          <van-cell>￥{{item.price}}</van-cell>
          <van-button type="warning" size="small" @click="postCart(item.id)">添加到购物车</van-button>
        </van-grid-item>
      </van-grid>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 无限滚动
      // 是否处于加载状态，加载过程中不触发load事件是否处于加载状态，加载过程中不触发load事件
      loading: false,
      // 是否已加载完成，加载完成后不再触发load事件
      finished: false,
      images: [],
      classify: [],
      goods: [],
      pagenum: 1,
      pagesize: 5
    };
  },
  methods: {
    // 获取轮播图
    getSwipe() {
      this.$http.get("/swipe").then(res => {
        this.images = res.data.data;
      });
    },
    // 获取分类
    getClassify() {
      this.$http.get("/classify").then(res => {
        window.console.log(res);
        this.classify = res.data.data;
      });
    },
    // 获取商品
    getGoods() {},
    // 添加到购物车
    postCart(id) {
      // 商品id
      let goods_id = id;
      // 用户id
      let user_id = window.localStorage.getItem("user_id");
      let cartList = {
        goods_id,
        user_id,
        // 是否勾选，默认不勾选
        ischk: 0,
        // 商品数量 1
        count: 1
      };
      this.$http.post("/cart", cartList).then(res => {
        window.console.log(res);
        if (res.data.ok === 1) {
          this.$toast("添加成功");
        } else {
          this.$toast("添加失败！");
        }
      });
    },
    // 无限滚动
    onLoad() {
      // 异步更新数据
      window.console.log(111);

      this.$http
        .get(`/goods?pagenum=${this.pagenum}&pagesize=${this.pagesize}`)
        .then(res => {
          this.goods.push(...res.data.data);
          // 加载状态结束
          this.loading = false;
        });

      // 数据全部加载完成
      if (this.goods.length >= 13) {
        this.finished = true;
      } else {
        this.pagenum++;
      }
    }
  },
  created() {
    this.getSwipe();
    this.getClassify();
  }
};
</script>
