<template>
  <div id="center" v-drag ref="centerPanel">
    <div class="centerLeft" ref="centerLeft">
      <ul ref="centerUl">
        <li
          class="chatingInfo"
          v-for="(item,index) in chatingArr"
          :key="index"
          :id="item.id"
          @click="chatWhich(item,index)"
          :class="{ active:index==current}"
        >
          <img :src="item.avatar" class="avator" alt />
          <p class="chatingName">{{item.groupname ? item.groupname : item.username}}</p>
          <span
            v-show="index==current"
            class="iconfont icon-guanbi1 close1"
            @click="closeOne(index)"
          ></span>
        </li>
      </ul>
    </div>
    <div class="centerRight" :style="{backgroundImage:`url(${img})`}">
      <div class="top">
        <img :src="currentChating.avatar" class="avator" alt />
        <p>{{currentChating.groupname ? currentChating.groupname : currentChating.username}}</p>
        <span
          class="caret"
          v-show="currentChating.groupname"
          :class="[openMembers?'el-icon-caret-top':'el-icon-caret-bottom']"
          @click="showMembers"
        ></span>
        <span class="iconfont icon-guanbi close" @click="closeCenterPanel"></span>
        <div class="groupMembers" v-if="currentChating.groupname&&openMembers">
          <ul class="groupMembersList">
            <li v-for="(item,index) in groupMembers.list" :key="index">
              <img :src="item.avatar" class="avator" alt />
              <p>{{item.username}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="chatContent">chatContent</div>
      <div class="chatBottom">
        <div class="plug">
          <span class="iconfont icon-biaoqing"></span>
          <span class="iconfont icon-tupian"></span>
          <span class="iconfont icon-wenjian"></span>
        </div>
        <div class="inputMsg">
          <textarea></textarea>
        </div>
        <div class="btns">
          <el-button type="primary" round size="mini">关闭</el-button>
          <el-button type="primary" round size="mini">发送</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Center',
  data() {
    return {
      current: 0,
      currentChating: {},
      img: require('../../static/img/skin1.jpg'),
      openMembers: false,
      groupMembers: {
        "owner": {
          "username": "马云",
          "id": 2,
          "owner_id": "http://tp4.sinaimg.cn/2145291155/180/5601307179/1",
          "sign": "让天下没有难写的代码"
        },
        "list": [
          {
            "username": "前端大神",
            "id": 13,
            "avatar": "http://tp1.sinaimg.cn/1241679004/180/5743814375/0",
            "sign": "前端就是这么牛"
          },
          {
            "username": "罗斯",
            "id": 16,
            "avatar": "http://cdn.firstlinkapp.com/upload/2016_6/1465575923433_33812.jpg",
            "sign": "做猪呢,最重要的就是开心"
          },
          {
            "username": "留里克",
            "id": 2,
            "avatar": "http://img1.imgtn.bdimg.com/it/u=3512720832,3984979859&fm=26&gp=0.jpg",
            "sign": "让天下没有难写的代码"
          },
          {
            "username": "王强",
            "id": 15,
            "avatar": "http://img3.imgtn.bdimg.com/it/u=3782101749,1084124548&fm=26&gp=0.jpg",
            "sign": "帅就一个字,我只说一次"
          },
          {
            "username": "前端大神",
            "id": 13,
            "avatar": "http://tp1.sinaimg.cn/1241679004/180/5743814375/0",
            "sign": "前端就是这么牛"
          },
          {
            "username": "罗斯",
            "id": 16,
            "avatar": "http://cdn.firstlinkapp.com/upload/2016_6/1465575923433_33812.jpg",
            "sign": "做猪呢,最重要的就是开心"
          },
          {
            "username": "留里克",
            "id": 2,
            "avatar": "http://img1.imgtn.bdimg.com/it/u=3512720832,3984979859&fm=26&gp=0.jpg",
            "sign": "让天下没有难写的代码"
          },
          {
            "username": "王强",
            "id": 15,
            "avatar": "http://img3.imgtn.bdimg.com/it/u=3782101749,1084124548&fm=26&gp=0.jpg",
            "sign": "帅就一个字,我只说一次"
          },
          {
            "username": "前端大神",
            "id": 13,
            "avatar": "http://tp1.sinaimg.cn/1241679004/180/5743814375/0",
            "sign": "前端就是这么牛"
          },
          {
            "username": "罗斯",
            "id": 16,
            "avatar": "http://cdn.firstlinkapp.com/upload/2016_6/1465575923433_33812.jpg",
            "sign": "做猪呢,最重要的就是开心"
          },
          {
            "username": "留里克",
            "id": 2,
            "avatar": "http://img1.imgtn.bdimg.com/it/u=3512720832,3984979859&fm=26&gp=0.jpg",
            "sign": "让天下没有难写的代码"
          },
          {
            "username": "王强",
            "id": 15,
            "avatar": "http://img3.imgtn.bdimg.com/it/u=3782101749,1084124548&fm=26&gp=0.jpg",
            "sign": "帅就一个字,我只说一次"
          }
        ]
      }
    }
  },
  props: {
    chatingArr: {
      type: Array,
      default: function () {
        return []
      }
    },
    currentSkin: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  mounted() {
    let _this = this;
    window.onresize = () => {
      _this.pageResize();
    }
  },
  watch: {
    chatingArr: function (newChatingArr, oldChatingArr) {
      this.currentChating = newChatingArr[newChatingArr.length - 1];
      this.current = newChatingArr.length - 1;
    },
    currentSkin: function () {
      this.img = this.currentSkin.img;
    }
  },
  destroyed() {
    window.onresize = null;
  },
  methods: {
    pageResize() {
      this.$nextTick(() => {
        var center = document.getElementById('center');
        if (document.compatMode == "CSS1Compat") {
          var cwidth = document.documentElement.clientWidth;
          var cheight = document.documentElement.clientHeight;
        } else {
          cwidth = document.body.clientWidth;
          cheight = document.body.clientHeight;
        }
        center.style.left = (cwidth - center.offsetWidth) / 2 + 'px'
        center.style.top = (cheight - center.offsetHeight) / 2 + 'px'
      })
    },
    chatWhich(item, index) {
      this.currentChating = item;
      this.current = index;
    },
    closeOne(index) {
      this.chatingArr.splice(index, 1);
      if (this.chatingArr.length == 1) {
        this.$refs.centerLeft.style.display = "none";
      }
    },
    closeCenterPanel() {
      this.$refs.centerPanel.style.display = "none";
    },
    showMembers() {
      this.openMembers = !this.openMembers;
    }
  }
}

</script>
<style scoped>
#center {
  width: 600px;
  height: 500px;
  position: absolute;
  z-index: 100;
  top: 50px;
  left: 350px;
  margin-left: 0px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
}
.centerLeft {
  width: 30%;
  height: 100%;
  background-color: rgb(231, 181, 181);
  overflow-y: auto;
  cursor: pointer;
}
.centerLeft ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.centerLeft::-webkit-scrollbar {
  display: none;
}
.chatingInfo {
  width: 98%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.active {
  background-color: white;
  border-radius: 4px;
}
.avator {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 8px;
}
.chatingName {
  height: 18px;
  max-width: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.close1 {
  position: absolute;
  top: 14px;
  right: 0;
  cursor: pointer;
}
.centerRight {
  width: 70%;
  background-color: white;
  cursor: pointer;
}
.top {
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(245, 245, 245, 0.7);
  cursor: move;
  position: relative;
}
.top .groupMembers {
  position: absolute;
  top: 45px;
  left: 0;
  width: 99%;
  height: 78px;
  border: 1px solid rgb(204, 203, 203);
  background-color: rgba(245, 245, 245, 0.7);
  overflow: auto;
  cursor: pointer;
}
.groupMembers::-webkit-scrollbar {
  display: none;
}
.groupMembersList {
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.caret {
  cursor: pointer;
}
.close {
  cursor: pointer;
}
.chatContent {
  width: 100%;
  height: 60%;
}
.chatBottom {
  width: 100%;
  height: 31%;
  border-top: 1px solid rgb(234, 234, 238);
  background-color: white;
}
.plug {
  margin-left: -306px;
}
.plug span {
  margin-right: 10px;
}
.inputMsg {
  width: 100%;
  height: 90px;
}
.inputMsg textarea {
  width: 98%;
  height: 100%;
}
.btns {
  margin: 2px -296px 0 0;
}
.el-button--mini {
  font-size: 1px;
}
</style>