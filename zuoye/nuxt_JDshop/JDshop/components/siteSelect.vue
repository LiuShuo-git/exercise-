<template>
  <div class="siteSelect">
    <!-- 请选择 -->
    <div class="siteSelect-top">{{issite}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      issite: "请选择",
      current: 0,
      data: [
        {
          title: "北京",
          children: [
            {
              title: "朝阳区",
              children: [
                {
                  title: "八里庄"
                },
                {
                  title: "东坝乡"
                },
                {
                  title: "北苑"
                }
              ]
            },
            {
              title: "海淀区",
              children: [
                {
                  title: "中关村"
                },
                {
                  title: "知春路"
                },
                {
                  title: "牡丹园"
                }
              ]
            }
          ]
        },
        {
          title: "河北省",
          children: [
            {
              title: "廊坊市",
              children: [
                {
                  title: "广阳区"
                },
                {
                  title: "安次区"
                },
                {
                  title: "燕郊"
                }
              ]
            },
            {
              title: "石家庄市",
              children: [
                {
                  title: "中关村"
                },
                {
                  title: "知春路"
                },
                {
                  title: "牡丹园"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>