<template>
  <div class="home">
    <el-form :inline="true" :model="goods" class="demo-form-inline" ref="numberValidateForm">
      <el-form-item label="商品名称">
        <el-input v-model="goods.name" placeholder="商品名称"></el-input>
      </el-form-item>

      <el-form-item label="价格">
        <el-input v-model.number="goods.price" placeholder="价格"></el-input>
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model.number="goods.num" placeholder="数量"></el-input>
      </el-form-item>
    </el-form>

    <!-- 添加按钮 -->
    <el-button type="info" @click="addGoods">添加商品</el-button>

    <!-- 商品表格 -->
    <el-table :data="goodsList" style="width: 100%">
      >
      <el-table-column width="55">
        <template slot-scope="scoped">
          <el-checkbox v-model="scoped.row.ischeck" @change="subCheck"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column type="index" width="180"></el-table-column>
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column label="数量">
        <template slot-scope="scoped">
          <el-input-number
            v-model="scoped.row.num"
            @change="handleChange(scoped.row.id)"
            :min="1"
            :max="1000"
            label="描述文字"
          ></el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="sub" label="小计"></el-table-column>
      <el-table-column label="删除">
        <template slot-scope="scoped">
          <el-button @click="del(scoped.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 全选/反选 -->
    <el-button type="primary" @click="quanxuan">全选/反选</el-button>
    <!-- 删除所选 -->
    <el-button @click="delAll">删除所选</el-button>
    <!-- 总价 -->
    <el-tag type="info">总价: ￥{{this.totalPrice}}</el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: {},
      goodsList: [],
      id: window.localStorage.id || 1,
      // 总价
      totalPrice: 0,
      check: false
    };
  },
  methods: {
    addGoods() {
      // window.console.log();
      if (
        this.goods.name == undefined ||
        this.goods.price == undefined ||
        this.goods.num == undefined
      ) {
        return this.$message.error("信息不能为空！");
      } else {
        let sub = this.goods.price * this.goods.num;

        // window.console.log(sub);
        this.goods.sub = sub;
        this.goods.id = this.id++;
        this.goods.ischeck = false;

        this.goodsList.push(this.goods);
        // window.console.log(this.goodsList);
        this.goods = {};
        window.localStorage.setItem(
          "goodsList",
          JSON.stringify(this.goodsList)
        );
        // 添加id
        window.localStorage.setItem("id", this.id);
        this.getGoods();
        return this.$message.success("添加成功");
      }
    },
    // 步进器
    handleChange(id) {
      window.console.log(id);
      window.console.log(this.goodsList);
      let ids = [];
      this.goodsList.forEach(v => {
        window.console.log(v.id);
        ids.push(v.id);
      });
      window.console.log();
      let index = ids.indexOf(id);

      this.goodsList[index].sub =
        this.goodsList[index].num * this.goodsList[index].price;
      // 保存数据

      // 价格
      let price = 0;
      this.goodsList.forEach(v => {
        if (v.ischeck == true) {
          price = v.sub + price;
        }
      });
      window.console.log(price);
      this.totalPrice = price;

      window.localStorage.setItem("goodsList", JSON.stringify(this.goodsList));
    },
    // 删除
    del(id) {
      window.console.log(id);

      let index = this.goodsList.findIndex(itemm => itemm.id === id);
      this.goodsList.splice(index, 1);

      // 保存数据
      window.localStorage.setItem("goodsList", JSON.stringify(this.goodsList));
    },
    // 多选
    subCheck() {
      // window.console.log(111);
      let price = 0;
      this.goodsList.forEach(v => {
        if (v.ischeck == true) {
          price = v.sub + price;
        }
      });
      window.console.log(price);
      this.totalPrice = price;
      // 保存数据
      window.localStorage.setItem("goodsList", JSON.stringify(this.goodsList));
    },

    // if (res === 'confirm') {
    //     let newList = [...this.goodList]
    //     this.goodList.forEach(item => {
    //       if (item.checked) {
    //         let index = newList.findIndex(itemm => itemm.id === item.id)
    //         newList.splice(index, 1)
    //       }
    //     })
    //     this.goodList = newList
    //     this.$message.success('删除成功')
    //   } else {
    //     this.$message.info('已取消删除')
    //   }

    delAll() {
      // let allId = [];
      // let newId = [];
      // this.goodsList.forEach(v => {
      //   allId.push(v.id);
      //   if (v.ischeck == true) {
      //     newId.push(v.id);
      //   }
      // });
      // window.console.log(newId);

      // // let ids = [];
      // let newList = [...this.goodsList];
      // newId.forEach(v => {
      //   // let index = allId.indexOf(v.id);
      //   let index = allId.findIndex(itemm => itemm === v);
      //   newList.splice(index, 1);
      //   window.console.log(index);
      //   // window.console.log(v)
      // });

      // this.goodsList = newList;
      // // 保存数据

      let newList = [...this.goodsList];
      this.goodsList.forEach(item => {
        if (item.ischeck) {
          let index = newList.findIndex(itemm => itemm.id === item.id);
          newList.splice(index, 1);
        }
      });
      this.goodsList = newList;

      window.localStorage.setItem("goodsList", JSON.stringify(this.goodsList));
    },
    // 全选反选
    quanxuan() {
      this.check = !this.check;
      window.console.log(this.check);

      this.goodsList.forEach(v => {
        v.ischeck = this.check;
      });
      window.localStorage.setItem("goodsList", JSON.stringify(this.goodsList));
      this.getGoods();
    },
    getGoods() {
      // window.console.log(this.multipleSelection)
      let goods = JSON.parse(window.localStorage.getItem("goodsList"));
      // window.console.log(goods);
      if (goods == null) {
        this.goodsList = [];
      } else {
        this.goodsList = goods;
      }

      let price = 0;
      this.goodsList.forEach(v => {
        if (v.ischeck == true) {
          price = v.sub + price;
        }
      });
      window.console.log(price);
      this.totalPrice = price;
    }
  },

  created() {
    this.getGoods();
  }
};
</script>

