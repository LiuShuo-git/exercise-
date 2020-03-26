<template>
  <div class="rowSwipe">
    <div class="rowSwipe-con">
      <ul>
        <li v-for="(item,index) in data[current]" :key="index" :style="{opacity}">
          <img :src="item.path" alt />
        </li>
      </ul>
    </div>
    <!-- 左右按钮 -->
    <template class="rowSwipe-btn">
      <div class="leftBtn rowbtn" @click="leftbtn"><</div>
      <div class="rightBtn rowbtn" @click="rightbtn">></div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacity: 1,
      current: 0,
      data: [
        [
          {
            path:
              "https://img30.360buyimg.com/babel/s380x300_jfs/t1/89311/17/14891/65540/5e6b0bbdEc5b5fbf9/fa21f3f00ae59b9c.jpg.webp"
          },
          {
            path:
              "https://img11.360buyimg.com/babel/s380x300_jfs/t1/89185/23/13604/70487/5e5a4e4eE0c95f33f/27203477c26cd4bb.jpg.webp"
          },
          {
            path:
              "//img20.360buyimg.com/babel/s380x300_jfs/t1/92850/25/13926/65745/5e5fab3fE8fa5eb55/fca674b7bc3d0436.jpg.webp"
          }
        ],
        [
          {
            path:
              "//img11.360buyimg.com/babel/s380x300_jfs/t1/97722/38/15633/65698/5e744378E7946f33d/c4a7dabb5beb1d88.jpg.webp"
          },
          {
            path:
              "//img10.360buyimg.com/babel/s380x300_jfs/t1/88163/17/16253/69399/5e79c5f2E089b7c78/45b54aa55c15ac3b.jpg.webp"
          },
          {
            path:
              "//img13.360buyimg.com/babel/s380x300_jfs/t1/100647/15/15562/72821/5e71806dEbeb3dbe5/01dcfcaf177b98f4.jpg.webp"
          }
        ]
      ]
    };
  },
  methods: {
    over() {
      this.opacity = 0.3;
      setInterval(() => {
        this.opacity = 1;
      }, 300);
    },
    leftbtn() {
      this.over();
      if (this.current == 0) {
        this.current = 1;
      } else {
        this.current--;
      }
    },
    rightbtn() {
      this.over();
      if (this.current == this.data.length - 1) {
        this.current = 0;
      } else {
        this.current++;
      }
    }
  }
};
</script>

<style lang='scss'>
.rowSwipe {
  &:hover {
    .rowbtn {
      display: block;
    }
  }
  position: relative;
  margin-left: 5px;
  &-con {
    width: 100%;
    height: 100%;
    //  background-color: red;
    ul {
      li {
        cursor: pointer;
        margin-bottom: 10px;
        img {
          position: relative;
          width: 190px;
          height: 150px;
        }
        img:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
}

.rowbtn {
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
  right: 4px;
}
.rowbtn:hover {
  opacity: 0.8;
}
</style>