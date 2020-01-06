<template>
  <div class="index">
    <van-nav-bar title="首页" left-text="返回" left-arrow />
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swipeList" :key="index">
        <van-image height="200" :src="item.path" />
      </van-swipe-item>
    </van-swipe>
    <!-- 分类 -->
    <van-grid>
      <van-grid-item
        v-for="(item,index) in  classifyList"
        :key="index"
        icon="photo-o"
        :text="item.name"
      />
    </van-grid>
    <!-- 商品 -->
    <van-grid :border="false" :column-num="2">
      <van-grid-item v-for="(item,index) in goodsList" :key="index">
        <van-image :src="item.image" />
        <van-button type="danger" size="mini">{{item.goods_name}}</van-button>
        <van-button type="danger" size="mini">价格：{{item.price}}</van-button>
        <van-button type="warning" size="small" @click="postCart(item.id)">加入购物车</van-button>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // 轮播
      swipeList: [],
      // 分类
      classifyList: [],
      // 商品列表
      goodsList: []
    };
  },
  created() {
    // 轮播
    this.getSwipe();
    // 分类
    this.getClassify();
    // 获取商品
    this.getGoods();
  },
  methods: {
    // 添加到购物车
    postCart(goodsId) {
      let goods_id = goodsId;
      let user_id = sessionStorage.getItem("userId");
      console.log(goods_id, user_id);
      let cartData = {
        goods_id: goods_id,
        user_id: user_id
      };
      axios.post("/cart", cartData).then(res => {
        console.log(res);
        if (res.data.ok === 1) {
          this.$toast("添加到购物车");
        } else {
          this.$toast("添加失败");
        }
      });
    },
    // 获取轮播
    getSwipe() {
      axios.get("/swipe").then(res => {
        console.log(res);
        if (res.data.ok === 1) {
          this.swipeList = res.data.data;
        }
      });
    },
    // 获取分类
    getClassify() {
      axios.get("/classify").then(res => {
        console.log(res);
        if (res.data.ok === 1) {
          this.classifyList = res.data.data;
        }
      });
    },
    // 获取商品
    getGoods() {
      axios.get("/goods").then(res => {
        console.log(res);
        if (res.data.ok === 1) {
          this.goodsList = res.data.data;
        }
      });
    }
  }
};
</script>
