<template>
  <div id="top">
    <div class="top-info">
      <div class="top-user">{{mine.username}}</div>
      <div class="top-status">
        <span
          :class="[flag ? 'iconfont icon-yinshenim' :'iconfont icon-zaixian' ]"
          @click="changeStatus"
        ></span>
        <div class="change-status" ref="changeStatusDiv">
          <ul class="top-menu-box" @click="chooseStatus">
            <li data-index="0">
              <i class="iconfont icon-zaixian"></i>&nbsp;
              <span class="icon-letter">在线</span>
            </li>
            <li data-index="1">
              <i class="iconfont icon-yinshenim"></i>&nbsp;
              <span class="icon-letter">隐身</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="close">
        <span class="iconfont icon-guanbi"></span>
      </div>
    </div>
    <div class="top-remark">{{mine.sign}}</div>
  </div>
</template>
<script>
export default {
  name: 'Top',
  data() {
    return {
      flag: 0,
      mine: {
        "username": "IUIUIU",
        "id": 15,
        "status": "online",
        "sign": "BBIBBIBBI",
        "avatar": "/uploads/20190714/1ee631ff7c391eb9a3a5b273f7042ef6.jpg"
      },
    }
  },
  methods: {
    changeStatus() {
      this.$refs.changeStatusDiv.style.display = "block";
    },
    chooseStatus() {
      var _this = this;
      event.stopPropagation();
      var li = document.getElementsByTagName('li');
      var len = li.length;
      for (var i = 0; i < len; i++) {
        (
          function (j) {
            li[j].onclick = function () {
              _this.flag = j;
            }
          }
        )(i)
      }
      this.$refs.changeStatusDiv.style.display = "none";
    }
  }
}
</script>
<style scoped>
#top {
  margin-bottom: 20px;
}
.top-info {
  width: 260px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.top-info .top-user {
  max-width: 100px;
  margin: 10px 15px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.top-status {
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
}
.change-status {
  cursor: pointer;
  display: none;
  position: absolute;
  top: 20px;
  left: -6px;
  z-index: 10;
  width: 70px;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
}
.change-status .icon-letter {
  cursor: pointer;
  font-size: 14px;
}
.close {
  position: absolute;
  top: 0;
  left: 240px;
  cursor: pointer;
}
.top-remark {
  height: 20px;
  font-size: 14px;
  text-align: left;
  margin-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>