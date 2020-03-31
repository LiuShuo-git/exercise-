<template>
  <div class="seckill">
    <div class="seckill-title">京东秒杀</div>
    <div class="seckill-start">
      <strong>22:00</strong> 点场&nbsp;倒计时
    </div>
    <div class="seckill-out">
      <strong>01</strong>:
      <strong>01</strong>:
      <strong>01</strong>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.seckill {
  width: 100%;
  height: 260px;
  background-image: url(http://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/img/4a15d8883775742e3efbb850ae14def7.png);
  background-repeat: no-repeat;
  color: #ffffff;
  &-title {
    //  width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    padding-top: 31px;
  }
  &-start {
    padding-top: 96px;
    font-size: 14px;
    text-align: center;
    strong {
      font-size: 18px;
      padding-right: 2px;
      vertical-align: middle;
      display: inline-block;
      margin-top: -1px;
    }
  }
  &-out {
     margin-top: 10px;
       font-size: 20px;
    text-align: center;
    strong {
       
      width: 30px;
      height: 30px;
      background-color: #2f3430;
      background-color: #2f3430;
      margin-right: 8px;
      color: white;
      font-size: 20px;
      padding: 0 3px;
    }
  }
}
</style>