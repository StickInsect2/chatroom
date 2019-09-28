<template>
  <div id="find" v-drag ref="findPanel">
    <div class="findTitle">
      <h2>查找</h2>
      <span class="iconfont icon-guanbi close" @click="closeFindPanel"></span>
    </div>
    <div class="findGroup">
      <div class="findLeft">
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        <el-button plain icon="el-icon-search" size="mini" round @click="searchGroup(input)">搜索</el-button>
      </div>
      <div class="findRight">
        <el-button type="success" plain size="small" @click="opencreateGroupPanel">创建分组</el-button>
        <el-button type="primary" plain size="small">我的分组</el-button>
      </div>
    </div>
    <div class="findTitle">
      <h3>最近新添加的群组</h3>
    </div>
    <div class="lastGroup">
      <div class="sigleGroup">
        <span class="groupTitle">测试群一</span>
        <hr />
        <img src="../../static/img/bj5.jpg" alt />
        <el-button type="danger" round size="mini">加入</el-button>
      </div>
      <div class="sigleGroup">
        <span class="groupTitle">测试群一</span>
        <hr />
        <img src="../../static/img/bj5.jpg" alt />
        <el-button type="danger" round size="mini">加入</el-button>
      </div>
      <div class="sigleGroup">
        <span class="groupTitle">测试群一</span>
        <hr />
        <img src="../../static/img/bj5.jpg" alt />
        <el-button type="danger" round size="mini">加入</el-button>
      </div>
      <div class="sigleGroup">
        <span class="groupTitle">测试群一</span>
        <hr />
        <img src="../../static/img/bj5.jpg" alt />
        <el-button type="danger" round size="mini">加入</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "querystring"
export default {
  name: 'Find',
  data() {
    return {
      input: ''
    }
  },
  props: {
    openFind: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
    // 网络请求
    this.$axios.get("http://47.106.81.54/laychat/public/index.php/index/findgroup/search", {
      params: {
        type: 1,
        count: 5,
        offset: 0
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      })

    // post
    // this.$axios.post("http://47.106.81.54/laychat/public/index.php/index/findgroup/search",qs.stringify({
    //   user_id:"iwen@qq.com",
    //   password:"iwen123",
    //   verification_code:"crfvw"
    // }))
    // .then(res => {
    //   console.log(res.data);
    // })
    // .catch(error => {
    //   console.log(error);
    // })
  },
  methods: {
    closeFindPanel() {
      this.$emit('changeFloatElmStatus');
    },
    opencreateGroupPanel() {
      console.log('打开创建分组')
      this.$emit('opencreateGroupPanel', true);
    },
    searchGroup(input) {
      console.log(已经在查找了)
      // http://47.106.81.54/laychat/public/index.php/index/findgroup/search

    }
  }
}
</script>
<style scoped>
#find {
  width: 770px;
  height: 500px;
  position: absolute;
  z-index: 98;
  top: 40px;
  left: 200px;
  margin-left: 0px;
  background-color: #e2e2f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.findTitle {
  width: 100%;
  height: 25px;
  background-color: #e2e2f5;
  cursor: move;
}
h2 {
  position: absolute;
  top: 10px;
  left: 8px;
}
.findTitle .close {
  position: absolute;
  top: 7px;
  right: 21px;
  cursor: pointer;
}
.findGroup {
  width: 90%;
  height: 24%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.el-input {
  width: 178px;
}
h3 {
  position: absolute;
  top: 210px;
  left: 10px;
}
.lastGroup {
  width: 100%;
  height: 52%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background-color: papayawhip;
  cursor: pointer;
}
.lastGroup .sigleGroup {
  width: 140px;
  height: 165px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
hr {
  width: 100px;
}
.sigleGroup img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
</style>