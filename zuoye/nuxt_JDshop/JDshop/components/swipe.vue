<template>
  <div
    @mouseover="yessw"
    @mouseout="nosw"
    class="isSwipe"
    :style="{width:this.width*this.count+'px'}"
  >
    <!-- 下面小按钮 -->
    <ul class="isSwipe-dot" v-if="iscurr">
      <li
        @mouseover="currBtn(index)"
        :class="current==index?'active':''"
        v-for="(item,index) in (this.data.length/this.count)"
        :key="index"
      ></li>
    </ul>
    <ul
      class="clearfix"
      :style="{width:this.width*newSwipe.length+'px',marginLeft:this.swLeft +'px',transitionDuration}"
    >
      <li v-for="(item,index) in this.newSwipe" :key="index">
        <!-- 插槽 :data 把数据传給插槽 -->
        <slot :data="item"></slot>
      </li>
    </ul>
    <!-- 左右按钮 -->
    <template v-if="isbtn">
      <div class="leftBtn btn" @click="leftBtn"><</div>
      <div class="rightBtn btn" @click="rightBtn">></div>
    </template>
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
    },
    // 格子宽度
    width: {
      type: Number,
      default: 200
    },
    // 每次几张图
    count: {
      type: Number,
      default: 1
    },
    //  是否自动滚动
    auto: {
      type: Boolean,
      default: false
    },
    //  轮播图秒数
    seck: {
      type: Number,
      default: 3000
    },
    //  是否显示左右按钮
    isbtn: {
      type: Boolean,
      default: true
    },
    //  是否显示下标
    iscurr: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      current: 0,
      transitionDuration: "0.5s", // 动画时间,
      opacity: 1,
      swLeft: -this.width * this.count,

      inter: null
    };
  },
  computed: {
    newSwipe: function() {
      // let qn = this.data.slice(0, this.count);
      // let hn = this.data.slice(this.data.length - this.count, this.data.length);

      // return [...hn, ...this.data, ...qn];
      // 1. 先复制数组中的后 count 个元素
      let hn = this.data.slice(this.data.length - this.count, this.data.length);
      // 2. 再复制数组中的前 count 个元素
      let qn = this.data.slice(0, this.count);
      // 把hn放到 data 数组的前面， 把 qn 放到 data 数组的后面
      return [...hn, ...this.data, ...qn];
    }
  },
  mounted() {
    this.start();
  },
  // 组件销毁之前执行
  beforeDestroy() {
    // 清除定时器
    clearInterval(this.inter);
  },
  methods: {
    //   小按钮
    currBtn(index) {
      clearInterval(this.inter);
      console.log(index);
      this.current = index;
      this.swLeft = -this.width * this.count * (index + 1);
    },
    yessw() {
      // console.log("关闭");

      clearInterval(this.inter);
    },
    nosw() {
      // console.log("开启");

      this.start();
    },
    //   自动滚动
    start() {
      //  this.swLeft = -this.width*this.count;
      this.inter = setInterval(() => {
        console.log(this.swLeft);

        if (
          this.swLeft ==
          -this.width * this.count * (this.data.length / this.count + 1)
        ) {
          setTimeout(() => {
            // 关闭动画
            this.transitionDuration = "0s";
            this.current = 0;
            // 切换回第1张
            this.swLeft = -this.width * this.count;

            // 延迟一会再开启动画
            setTimeout(() => {
              this.transitionDuration = "0.5s";
            }, 100);
          }, 500);
        } else {
          this.swLeft -= this.width * this.count;
          this.current++;
        }
      }, this.seck);
    },
    //  点击左边按钮

    //     // 向左滚动

    leftBtn() {
      if (this.swLeft == 0) {
        console.log("0");

        setTimeout(() => {
          this.current = 5;
          // 先关闭动画效果
          this.transitionDuration = "0s";
          // 切换回最后位置
          this.swLeft =
            -this.count * this.width * (this.data.length / this.count);
          // 延迟一会再打开动画效果
          setTimeout(() => {
            this.transitionDuration = "0.5s";
          }, 10);
        }, 10);
      } else {
        this.current--;
        this.swLeft += this.width * this.count;
      }
    },

    //  点击右边按钮
    rightBtn() {
      if (
        this.swLeft ==
        -this.width * this.count * (this.data.length / this.count + 1)
      ) {
        this.current = 0;
        // 0.5秒之后再切换
        setTimeout(() => {
          // 先关闭动画效果
          this.transitionDuration = "0s";
          // 切换回最后的位置
          this.swLeft = -this.width * this.count;
          // 延迟一会再打开动画效果
          setTimeout(() => {
            this.transitionDuration = "0.5s";
          }, 10);
        }, 10);
      } else {
        this.current++;
        this.swLeft -= this.width * this.count;
      }
    }
  }
};
</script>

<style lang="scss">
.isSwipe {
  position: relative;
  &-dot {
    position: absolute;
    left: 30px;
    bottom: 30px;
    .active {
      width: 15px;
      height: 15px;
      background-color: #8a8789;
      border-radius: 50%;
      background-color: #ffffff;
      border: 2px solid #d0d3da;
    }
    li {
      margin-left: 8px;
      float: left;
      width: 10px;
      height: 10px;
      background-color: #8a8789;
      border-radius: 50%;
    }
  }
  position: relative;
  // background-color: red;
  overflow: hidden;
  ul {
    transition-property: all;

    // transition-delay: 0.5s;
  }
  li {
    float: left;
    text-align: center;
  }
  &:hover {
    .btn {
      display: block;
    }
  }
  .btn {
    display: none;
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
  }
  .leftBtn {
    border-radius: 0 20px 20px 0;
    left: 0;
  }
  .rightBtn {
    border-radius: 20px 0 0 20px;
    right: 0;
  }
}
</style>