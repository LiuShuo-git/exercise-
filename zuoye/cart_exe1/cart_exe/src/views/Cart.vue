<template>
  <div class="cart">
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="toLeft" />
    <!-- 购物车商品 -->

    <van-checkbox
      :label-disabled="true"
      class="card-goods__item"
      v-model="item.ischk"
      v-for="(item,index) in goods"
      :key="item.id"
      @change="postChk(item.id,index)"
    >
      <van-card :title="item.goods_name" :thumb="item.image" :price="formatPrice(item.price)">
        <template slot="num">
          <van-stepper v-model="item.count" @change="postChk(item.id,index)" />
          <van-button type="danger" size="small" @click="delCart(item.id)">删除</van-button>
        </template>
      </van-card>
    </van-checkbox>
    <van-checkbox v-model="allChk" @click="!checkedAll">全选</van-checkbox>
    <!--  -->
    <van-submit-bar :price="totalPrice" :button-text="submitBarText" @submit="onSubmit" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkedGoods: [],
      goods: [],
      checkedAll: false
    };
  },
  // 监听

  computed: {
    allChk: {
      // eslint-disable-next-line vue/return-in-computed-property
      get: function() {
        let flag = true;

        this.goods.forEach(v => {
          window.console.log(v.ischk, "333");
          if (v.ischk === false || v.ischk === 0) {
            flag = false;
          }
        });

        return flag;
      },
      set: function(newValue) {
        // window.console.log(newValue);
        this.goods.forEach(v => {
          v.ischk = newValue;
        });
      }
    },
    submitBarText() {
      let num = 0;
      this.goods.forEach(v => {
        if (v.ischk === true || v.ischk === 1) {
          num += 1;
        }
      });
      return "结算" + (num ? `(${num})` : "(0)");
    },
    // eslint-disable-next-line vue/return-in-computed-property
    totalPrice() {
      let total = 0;
      this.goods.forEach(v => {
        if (v.ischk === true || v.ischk === 1) {
          // window.console.log(v.price*v.count);
           let price = v.price * v.count;

          // totalPrice ;
          total += price;
        }
      });
      return total * 100;
    }
  },
  methods: {
    // checkAll() {
    //   this.allChk = true;
    // },
    // 多选选中触发
    postChk(id, index) {
      window.console.log(id, index);
      let goods = this.goods;

      if (goods[index].ischk === false || goods[index].ischk === "false") {
        goods[index].ischk = 0;
      } else if (goods[index].ischk === true || goods[index].ischk === "true") {
        goods[index].ischk = 1;
      }
      // window.console.log(goods[index]);

      let statusList = {
        user_id: Number(window.localStorage.getItem("user_id")),
        goods_id: id,
        ischk: goods[index].ischk,
        count: goods[index].count
      };
      window.console.log(statusList, 333);
      this.$http.put("/status", statusList).then(res => {
        window.console.log(res);
        if (res.data.ok === 1) {
          this.$toast("更改成功！");
          // this.getCart()
        }
      });
    },
    // 步进器更改触发

    getCart() {
      let id = window.localStorage.getItem("user_id");
      window.console.log(id);
      this.$http.get(`/cart?id=${id}`).then(res => {
        window.console.log(res);
        window.console.log(res.data.data);
        if (res.data.data === undefined) {
          return false;
        }
        res.data.data.forEach(v => {
          if (v.ischk === "0") {
            v.ischk = false;
          } else {
            v.ischk = true;
          }
        });
        this.goods = res.data.data;
        window.console.log(this.goods);
      });
    },
    toLeft() {
      this.$router.push("/");
    },
    formatPrice(price) {
      return price;
    },
    onSubmit() {
      this.$toast("点击结算");
    },
    // 删除购物车商品
    delCart(id) {
      let user_id = window.localStorage.getItem("user_id");
      this.$http.delete(`/cart?id=${id}&user_id=${user_id}`).then(res => {
        window.console.log(res);
        if (res.data.ok === 0) {
          this.$toast("删除失败");
        } else {
          this.$toast("删除成功！");
          window.console.log(this.goods);
       
          
          this.getCart();
        }
      });
    }
  },
  created() {
    this.getCart();
  }
};
</script>
<style lang="less" scoped>
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>
