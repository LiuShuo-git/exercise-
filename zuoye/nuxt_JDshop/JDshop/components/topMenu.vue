<template>
  <div class="header">
    <div class="container">
      <div class="col-2">
        <img class="header-logo1" src="/jxxTop.png" alt />
      </div>
      <div class="col-8">
        <!-- 搜索框 -->
        <div class="seach clearfix">
          <input type="text" class="seach-input" placeholder="  水果礼盒" />
          <button class="seach-btn">
            <svg
              t="1584611312793"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3146"
              width="16"
              height="16"
            >
              <path
                d="M850.39104 818.11456l-145.67424-142.80704a308.71552 308.71552 0 0 0 87.42912-214.87616c-2.62144-174.53056-145.5104-314.32704-320.06144-313.15968-174.67392-1.31072-317.68576 138.50624-320.3072 313.18016 2.47808 174.75584 145.53088 314.75712 320.32768 313.42592a322.21184 322.21184 0 0 0 169.82016-48.2304l151.01952 147.84512 58.4704-54.19008c-0.36864-0.38912-0.63488-0.8192-1.024-1.18784z m-209.01888-192.08192c-94.33088 91.46368-244.26496 91.46368-338.59584 0a230.56384 230.56384 0 0 1 0-331.1616c94.33088-91.46368 244.26496-91.46368 338.59584 0a231.0144 231.0144 0 0 1 0 331.1616z"
                fill="#ffffff"
                p-id="3147"
              />
            </svg>
          </button>
          <cart />
        </div>
        <!-- 关键字 -->
        <ul class="seach-keyword clearfix">
          <li v-for="(item,index) in 6" :key="index">
            <nuxt-link to="/login">我的订单</nuxt-link>
          </li>
        </ul>
        <!-- 秒杀 -->
        <ul class="seach-ms clearfix">
          <li v-for="(item,index) in 8" :key="index">
            <nuxt-link to>秒杀</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-2">
        <img class="header-logo2" src="/ec2eb6c52115485f.png.webp" alt />
      </div>
    </div>
  </div>
</template>

<script>
import cart from "~/components/cart.vue";
export default {
  components: {
    cart
  }
};
</script>

<style lang='scss'>
.header {
  background-color: #fff;
  height: 161px;
  padding-top: 20px;
  &-logo1 {
    width: 100px;
    height: 120px;
  }
  &-logo2 {
    width: 100%;
    height: 100%;
  }
  .seach {
    &-input {
      float: left;
      padding: 4px 5px;
      width: 487px;
      height: 35px;
      border: 2px solid #e2231a;
      line-height: 35px;
    }
    &-btn {
      float: left;
      background-color: #e1251b;
      width: 57px;
      height: 35px;
      outline: none;
      border: 3px solid #e1251b;
    }
    &-keyword {
      margin-top: 8px;
      li:nth-child(1) {
        a {
          color: #e1251b;
        }
      }
      li {
        float: left;

        margin-right: 15px;
        color: #999999;
        a {
          color: #999999;
        }
        a:hover {
          color: #e2231a;
        }
      }
    }
    &-ms {
      margin-top: 25px;
      li:nth-child(1) {
        a {
          color: #e33424;
        }
      }
      li {
        float: left;

        margin-right: 30px;

        a {
          font-size: 15px;
          font-weight: 700;
          color: #353535;
        }
        a:hover {
          color: #e33424;
        }
      }
    }
  }
}
</style>