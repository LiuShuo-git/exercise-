<template>
  <div class="newswipe">
    <ul
      class="newswipe-ul clearfix"
      :style="{width:200*this.newdata.length +'px',marginLeft:marginLeft+'px',transitionDuration:transitionDuration}"
    >
      <li class="newswipe-li" v-for="(item,index) in newdata" :key="index">
        <img :src="item.path" alt class="newswipe-img" />
        <span class="newswipe-title">{{item.title}}</span>
        <div class="newswipe-price clearfix">
          <strong class="newswipe-price-left">￥{{item.price}}</strong>
          <strong class="newswipe-price-right">￥{{item.price}}</strong>
        </div>
      </li>
    </ul>
    <!-- 左右按钮 -->
    <div class="newswipe-btn">
      <div class="newswipe-btn-left"><</div>
      <div class="newswipe-btn-right">></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //   数据
    data: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      //  起始位置
      marginLeft: -800,
      // 定时器
      inner: null,
      transitionDuration: "0.5s" // 动画时间,
    };
  },
  computed: {
    newdata: function() {
      let qn = this.data.slice(0, 4);
      let hn = this.data.slice(4, 8);
      let newData = [...hn, ...this.data, ...qn];
      return newData;
    }
  },
  mounted() {
    // this.start();
  },
  methods: {
    start() {
      console.log(this.marginLeft);

      this.inner = setInterval(() => {
        if (this.marginLeft == -2400) {
          this.transitionDuration = "0s";
          this.marginLeft = -800;
        } else {
          this.transitionDuration = "0.5s";
          this.marginLeft -= 800;
        }
      }, 3000);
    }
  },
  beforeDestroy() {
    // 清除定时器
    clearInterval(this.inner);
  }
};
</script>

<style lang='scss'>
.newswipe {
  position: relative;
  background-color: #fff;
  width: 200 * 4 + px;
  overflow: hidden;
  &-ul {
    height: 260px;
    transition-property: all;
    //  width: 200 * 8 + px;
  }
  &-li {
    padding: 30px 30px;
    width: 200px;
    float: left;
  }
  &-img {
  }

  &-title {
    display: inline-block;
    color: #333;
    width: 160px;
    text-align: center;
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/
    cursor: pointer;
    margin-top: 10px;
    &:hover {
      color: #c81623;
    }
  }
  &-price {
    margin-top: 10px;
    position: relative;
    line-height: 22px;
    &::before {
      content: " ";
      width: 0;
      height: 0;
      border-color: transparent white transparent transparent;
      border-style: solid;
      border-width: 21px 8px 0 0;
      position: absolute;
      top: -1;
      left: 68px;
    }
    &-left {
      // display: inline-block;
      font-size: 14px;
      float: left;
      width: 76px;
      height: 22px;
      background-color: #e1251b;
      color: #fff;
      text-align: center;
    }
    &-right {
      position: relative;
      text-decoration: line-through;
      // display: inline-block;

      float: left;
      width: 60px;
      text-align: center;
      box-sizing: border-box;
      border: 1px solid #e1251b;
      border-left: 1px solid #fff;
      height: 22px;
      background-color: #fff;
      color: #999999;
      font-weight: normal;
    }
  }
  &-btn {
    // display: none;
    position: absolute;
    width: 25px;
    height: 35px;
    color: #fff;
    top: 50%;
    background-color: #959899;
    opacity: 0.4;
    cursor: pointer;
    line-height: 35px;
    transform: translateY(-50%);
    text-align: center;
    font-size: 20px;
    &-left {
      border-radius: 0 20px 20px 0;
      left: 0;
      background-color: blue;
    }
    &-right {
      border-radius: 20px 0 0 20px;
      right: 0;
      background-color: red;
    }
  }
}
</style>