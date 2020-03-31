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
        <!-- 右侧 -->
        <div class="col-2">
          <div class="swipe-right">
            <div class="col-4">
              <img
                src="data:image/png;base64,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"
                alt
              />
            </div>
            <div class="col-8">
              <div>
                <nuxt-link to="/login">Hi~欢迎逛京东！</nuxt-link>
              </div>
              <div>
                <nuxt-link to="/login">登录</nuxt-link>&nbsp;|&nbsp;
                <nuxt-link to="/regist">注册</nuxt-link>
              </div>
            </div>
            <!-- 两个按钮 -->
            <br />
            <div class="twoBtn">
              <nuxt-link to="/login">新人福利</nuxt-link>
              <nuxt-link to="/regist" class="pl-btn">PLUS会员</nuxt-link>
            </div>
            <!-- 快报 -->
            <div class="kuaibao">
              <div class="kuaibao-top clearfix">
                <h3>京东快报</h3>
                <span>更多></span>
              </div>
              <ul class="kuaibao-bottom clearfix">
                <li v-for="(item,index) in 4" :key="index">
                  <span>最新</span>
                  <p>山药这样做,开胃有..山药这样做,开胃有...山药这样做,开胃有...山药这样做,开胃有....</p>
                </li>
              </ul>
            </div>
            <!-- 图标 -->
            <div class="tubiao">
              <ul class="clearfix">
                <li v-for="(item,index) in 12" :key="index">
                  <img
                    src="http://m.360buyimg.com/babel/jfs/t1/30057/19/14881/720/5cbf064aE187b8361/eed6f6cbf1de3aaa.png"
                    alt
                  />
                  <p>话费</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- 京东快报 -->
        </div>
      </div>
    </div>

    <!-- 秒杀功能 -->
    <div class="jxms">
      <div class="container">
        <div class="col-2">
          <seckill />
        </div>
        <div class="col-8">
          <!-- 轮播图 -->
          <swipe :data="this.seckillSwipe" :width="200" :count="2">
            <!-- 插槽 -->
            <template v-slot:defau lt="row">
              <img  :src="row.data.path" alt />
            </template>
          </swipe>
        </div>
        <div class="col-2">333</div>
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
// 秒杀
import seckill from "~/components/seckill.vue";
export default {
  components: {
    tabar,
    topMenu,
    sidebar,
    swipe,
    rowSwipe,
    seckill
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
      ],
      seckillSwipe: [
        {
          path:
            "https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/90837/16/13963/252312/5e606c96E93842336/536c571b444a29d0.jpg.webp",
          title:
            "邦克仕(Benks)75%酒精消毒棉片 一次性便携式抑菌消毒擦手机清洁棉片 75度酒精湿巾 独立包装100片",
          price: 23.9
        },
        {
          path:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/94750/5/16565/89844/5e7d6d62E77c6b463/52e5a684056eacc6.jpg.webp",
          title:
            "邦克仕(Benks)75%酒精消毒棉片 一次性便携式抑菌消毒擦手机清洁棉片 75度酒精湿巾 独立包装100片",
          price: 23.9
        },
        {
          path:
            "https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/97684/24/16376/203630/5e7c1f7bEd48b3a9d/3d5126366a3a366f.jpg.webp",
          title:
            "邦克仕(Benks)75%酒精消毒棉片 一次性便携式抑菌消毒擦手机清洁棉片 75度酒精湿巾 独立包装100片",
          price: 23.9
        },
        {
          path:
            "https://img30.360buyimg.com/mobilecms/s140x140_jfs/t1/88185/24/16468/192273/5e7c49d5E861fe23d/44c1e15e69dba77e.jpg.webp",
          title:
            "邦克仕(Benks)75%酒精消毒棉片 一次性便携式抑菌消毒擦手机清洁棉片 75度酒精湿巾 独立包装100片",
          price: 23.9
        },
        {
          path:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/100377/32/16461/54069/5e7da1c2Ea148c1e6/b69ed7dbf0926e61.jpg.webp",
          title:
            "邦克仕(Benks)75%酒精消毒棉片 一次性便携式抑菌消毒擦手机清洁棉片 75度酒精湿巾 独立包装100片",
          price: 23.9
        },
        {
          path:
            "https://img30.360buyimg.com/mobilecms/s140x140_jfs/t1/95730/1/15653/159576/5e7333b9Ea297f163/1d15e99fa66f7354.jpg.webp",
          title:
            "邦克仕(Benks)75%酒精消毒棉片 一次性便携式抑菌消毒擦手机清洁棉片 75度酒精湿巾 独立包装100片",
          price: 23.9
        },
        {
          path:
            "https://img14.360buyimg.com/mobilecms/s140x140_jfs/t1/93586/37/16184/187568/5e79c750Eec83943b/52e5b50a36df83e1.jpg.webp",
          title:
            "邦克仕(Benks)75%酒精消毒棉片 一次性便携式抑菌消毒擦手机清洁棉片 75度酒精湿巾 独立包装100片",
          price: 23.9
        },
        {
          path:
            "https://img10.360buyimg.com/mobilecms/s140x140_jfs/t1/69959/37/3500/337329/5d1c1945E33706b6a/a6caeca2a36e2ec9.jpg.webp",
          title:
            "邦克仕(Benks)75%酒精消毒棉片 一次性便携式抑菌消毒擦手机清洁棉片 75度酒精湿巾 独立包装100片",
          price: 23.9
        }
      ]
    };
  }
};
</script>

<style  lang='scss'>
// 轮播图右侧
.swipe-right {
  height: 471px;
  margin-bottom: 10px;
  background-color: #ffffff;
  padding: 16px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .twoBtn {
    padding-bottom: 20px;
    border-bottom: 1px solid #eeeeee;
    margin-top: 15px;
    display: inline-block;
    a {
      padding: 3px 10px;
      width: 70px;
      height: 25px;
      background-color: #e1251b;
      color: #fff;
      border-radius: 25px 25px 25px 25px;
    }
    .pl-btn {
      margin-right: 5px;
      background-color: #363634;
      color: #e5d790;
    }
    a:hover {
      color: #fff;
      background-color: #c81623;
    }
  }
  // 快报
  .kuaibao {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    margin-top: 15px;
    &-top {
      h3 {
        float: left;
      }
      span {
        cursor: pointer;
        float: right;
        color: #999999;
      }
      span:hover {
        color: #c81623;
      }
    }
    &-bottom {
      margin-top: 10px;
      li {
        line-height: 20px;
        span {
          float: left;
          width: 35px;
          height: 16px;
          // display: inline-block;
          color: #e1251b;
          background-color: #fdeeed;
          line-height: 16px;
          text-align: center;
          // padding: 0 5px;
        }
        p {
          float: left;
          width: 107.56px;
          overflow: hidden; /*超出部分隐藏*/
          white-space: nowrap; /*不换行*/
          text-overflow: ellipsis; /*超出部分文字以...显示*/
          color: #666666;
          margin-left: 7px;
          // line-height: 24px;
        }
        p:hover {
          cursor: pointer;
          color: #c81623;
        }
      }
    }
  }
  .tubiao {
    li {
      text-align: center;
      width: 33.33%;
      float: left;
      img {
        width: 28px;
        height: 28px;
      }
      p {
        margin-top: 3px;
      }
    }
  }
}
</style>
