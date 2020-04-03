<template>
  <div class="searchItem">
    <div class="row search">
      <div class="col-1 searchItem-left">
        <strong>品牌:</strong>
      </div>
      <div class="col-10 searchItem-right">
        <!-- 所有品牌 -->
        <div class="allBrands clearfix" v-if="this.isMore">
          <span
            class="allBrands-span"
            :class="{'is-selected':this.isLetter==''}"
            @mouseover="getLetter('')"
          >所有品牌</span>

          <!-- 字母筛选部分 -->
          <ul class="allBrands-ul clearfix">
            <li
              @mouseover="getLetter(item)"
              v-for="(item,index) in this.fLetter"
              :key="index"
              :class="{'is-selected':isLetter==item}"
            >{{item}}</li>
          </ul>
        </div>
        <ul class="searchItem-right-ul clearfix" :class="this.brandList.length>18?'scr':''">
          <li
            :class="{'is-selected':item.ischeck==1}"
            @click="checkbtn(item,index)"
            v-for="(item,index) in brandList "
            :key="index"
          >
            <img class="searchItem-right-img" :src="item.image" alt />
          </li>
        </ul>
        <div v-if="this.isSelect" class="search-tj">
          已选条件:
          <span
            class="search-tj-span"
            @click="delselectList(item)"
            v-for="(item,index) in this.selectList"
            :key="index"
          >{{item.name}}</span>
          <br />
          <button>确定</button>
          <button @click="call">取消</button>
        </div>
      </div>
      <div class="col-1">
        <span @click="ismore">更多</span>
        <span @click="selectBtn">多选</span>
      </div>
    </div>
    <div class="row search">
      <div class="col-1 searchItem-left">
        <strong>分类:</strong>
      </div>
      <div class="col-11 searchItem-right">
        <span class="searchItem-right-item" v-for="(item,index) in 3" :key="index">合约机</span>
      </div>
    </div>
    <div class="row search">
      <div class="col-1 searchItem-left">操作系统:</div>
      <div class="col-11 searchItem-right">
        <span class="searchItem-right-item" v-for="(item,index) in 3" :key="index">合约机</span>
      </div>
    </div>
    <div class="row search">
      <div class="col-1 searchItem-left">屏幕尺寸:</div>
      <div class="col-11 searchItem-right">
        <span class="searchItem-right-item" v-for="(item,index) in 3" :key="index">合约机</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      brandList: [],
      // 是否多选
      isSelect: false,
      isMore: false,
      fLetter: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      isLetter: "",
      selectList: []
    };
  },
  computed: {},
  mounted() {
    this.getBrand();
  },
  methods: {
   //   多选
    selectBtn() {
       this.isMore=true;
      console.log(this.data);
      (this.isSelect = true), (this.brandList = this.data.brand);
    },
    getBrand() {
      this.data.brand.map(v => {
        if (v.id <= 18) {
          this.brandList.push(v);
        }
      });
    },
    //  取消
    call() {
      //  关闭按钮
      this.isMore=false;
      this.isSelect = false;
      // 清空数组
      this.selectList = [];

      let newBrand = [];
      this.data.brand.map(v => {
        v.ischeck = 0;
        if (v.id <= 18) {
          newBrand.push(v);

          this.brandList = newBrand;
        }
      });
    },
    // 多选选中
    checkbtn(item, index) {
      // console.log(item, index);
      if (this.isSelect) {
        let i = this.selectList.findIndex(v => {
          return v.id == item.id;
        });
        console.log(i);
        // 不存在时添加
        if (i == -1) {
          item.ischeck = 1;
          this.selectList.push(item);
        } else {
          item.ischeck = 0;
          this.selectList.splice(i, 1);
        }
      }
    },

    // 获取字母
    getLetter(item) {
      this.isLetter = item;
      console.log(item);
      if (item != "") {
        let newBrand = [];
        this.data.brand.map(v => {
          v.ischeck = 0;
          if (v.letter == item) {
            newBrand.push(v);

            this.brandList = newBrand;
          }
        });
      } else {
        this.brandList = this.data.brand;
      }
    },
    //  删除选中
    delselectList(item) {
      console.log(item);
      item.ischeck = 0;
      console.log(this.selectList);
      let i = this.selectList.findIndex(v => {
        return v.id == item.id;
      });
      console.log(i);
      this.selectList.splice(i, 1);

      // this.selectList.findIndex(v=>{
      //    console.log(v.id = item.id );

      // })
    },
    //  更多
    ismore() {
      this.isMore = true;
    }
  }
};
</script>

<style lang='scss'>
.searchItem {
  margin-top: 20px;
  .is-selected {
    border: 1px solid red;
    color: red;
  }
  .scr {
    overflow-y: scroll;
  }
  .search {
    position: relative;
    width: 100%;
    background-color: #f3f3f3;
    height: 100%;
    border-bottom: 1px solid #e8e8e8;
    &-tj {
      margin-bottom: 10px;

      span {
        margin-left: 10px;
      }
    }
  }
  &-left {
    float: left;

    height: 100%;
    background-color: #f3f3f3;
    padding: 3px 5px;
  }
  &-right {
    //  height: 100px;
    padding: 0 10px;
    background-color: #ffffff;

    .searchItem-right-ul {
      max-height: 210px;

      padding: 13px 0px;
      width: 1140px;
      .is-selected {
        color: red;
        border: 1px solid red;
      }
      li {
        width: 116px;
        height: 48px;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        float: left;
        &:hover {
          border: 1px solid red;
          color: red;
        }
        .searchItem-right-img {
          margin: 5px 6px;

          vertical-align: top;
        }
      }
    }
    .search-tj-span {
      cursor: pointer;
    }
    .allBrands {
      .is-selected {
        color: red;
        border: 1px solid red;
      }
      &-span {
        //   color: #ff0000;
        cursor: pointer;
        float: left;
        width: 60px;
        height: 26px;
        //   border: 1px solid #ff0000;
        line-height: 26px;
        text-align: center;
      }
      &-ul {
        float: left;
        .is-selected {
          color: red;
          border: 1px solid red;
        }
        li {
          cursor: pointer;
          line-height: 26px;
          float: left;
          color: #0000ff;
          margin-left: 13px;
          width: 26px;
          text-align: center;
          line-height: 22px;
          height: 22px;
          &:hover {
            border: 1px solid red;
            color: red;
          }
        }
      }
    }
    &-item {
      line-height: 38px;
      color: #075ca1;
      font-weight: bold;
      margin-right: 40px;
    }
  }
}
</style>