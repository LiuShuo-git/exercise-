<template>
  <div class="about">
    <van-nav-bar title="购物车" left-text="返回" @click-left="onLeft" left-arrow />
    <van-card
      v-for="(item,index) in cartList"
      :key="index"
      :price="item.price"
      :title="item.goods_name"
      :thumb="item.image"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="num">
        <van-stepper v-model="item.count" @change="putStatus(item)" />
        <van-button type="danger" size="small" @click="delCart(item.id)">删除</van-button>
      </div>
      <div slot="footer">
        <van-checkbox v-model="item.ischk" @change="putStatus(item)"></van-checkbox>
      </div>
    </van-card>
    <van-checkbox v-model="allchk">全选</van-checkbox>
    <van-submit-bar :price="this.total" button-text="提交订单" />
  </div>
</template>

<script>
import axios from "axios";
import { Dialog } from "vant";

export default {
  data() {
    return {
      value: 1,
      cartList: [],
      // 复选
      checked: true
    };
  },
  methods: {
    //  跳转
    onLeft() {
      this.$router.push("/");
    },

    // 修改状态
    putStatus(item) {
      console.log(item);
      let newList = {
        id: item.id,
        count: item.count,
        ischk: item.ischk
      };
      console.log(newList);
      if (newList.ischk == false) {
        newList.ischk = "0";
      } else {
        newList.ischk = "1";
      }

      axios.put("/status", newList).then(res => {
        console.log(res);
      });
    },
    delCart(id) {
      console.log(id);
      Dialog.confirm({
        title: "删除",
        message: "确定要删除吗？删除后不可恢复"
      })
        .then(() => {
          axios.delete(`/cart?id=${id}`).then(res => {
            console.log(res);
            if (res.data.ok == 1) {
              this.$toast("删除成功");
              this.getCart();
            } else {
              this.$toast("删除失败");
            }
          });
        })
        .catch(() => {});
    },
    getCart() {
      let id = window.sessionStorage.getItem("userId");
      axios.get(`/cart?id=${id}`).then(res => {
        console.log(res);
        let newList = res.data.data;
        console.log(newList);

        newList.forEach(v => {
          if (v.ischk == 0) {
            v.ischk = false;
          } else {
            v.ischk = true;
          }
        });
        console.log(newList);

        this.cartList = newList;
      });
    }
  },
  created() {
    // 获取购物车信息
    this.getCart();
  },
  // 计算属性
  computed: {
    allchk: {
      get: function() {
        let flag = true;
        this.cartList.forEach(v => {
          if (v.ischk == false || v.ischk == 0) {
            flag = false;
          }
        });
        return flag;
      },
      set: function(newValue) {
        console.log(newValue);
        this.cartList.forEach(v => {
          v.ischk = newValue;
        });
      }
    },
    total: function() {
      let total = 0;
      this.cartList.forEach(v => {
        if (v.ischk == true) {
          total = total + v.price * v.count;
        }
      });
      return total * 100;
    }
  }
  // 监听
};
</script>