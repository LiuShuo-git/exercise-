<template>
  <div class="index">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item  v-for="(item,index) in images" :key="index">
        <van-image
          :src="item"
        />
      </van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://img10.360buyimg.com/babel/s590x470_jfs/t1/69287/37/15868/97570/5dd5f6a5Ec8e1ba1e/2126118ed766971d.jpg.webp",
        "https://imgcps.jd.com/ling/100008348542/5omL5py66LSt5a6e5oOg/5aSH6LSn6LaF5YC8/p-5bd8253082acdd181d02fa1b/061a3ac1/590x470.jpg",
        "https://img10.360buyimg.com/da/s590x470_jfs/t1/32170/30/12827/102070/5cb90aa6E80c36bed/1b61ce5108a45371.jpg.webp"
      ]
    };
  }
};
</script>
