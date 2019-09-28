<template>
  <div class="tabs">
    <Tabs :currentIndex="currentIndex" @changeCurrentIndex="changeCurrentIndex" ref="tabs">
      <tab tabName index="1" class="iconfont icon-linkperson">
        <div class="content">
          <Collapse :person="friend" @passDialogue="passDialogue" />
        </div>
      </tab>
      <tab tabName index="2" class="iconfont icon-fenzu">
        <div class="content">
          <SingleMsg :person="group" :which="2" @passDialogue="passDialogue" />
        </div>
      </tab>
      <tab tabName index="3" class="iconfont icon-xiaoxi">
        <div class="content">
          <SingleMsg :which="1" />
        </div>
      </tab>
    </Tabs>
  </div>
</template>
<script>
import Collapse from './collapse'
import SingleMsg from './singleMsg'
export default {
  name: 'TabListView',
  data() {
    return {
      currentIndex: "1",
      friend: [
        {
          "groupname": "前端组",
          "id": 1,
          "online": 2,
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
            }
          ]
        },
        {
          "groupname": "后端组",
          "id": 2,
          "online": 3,
          "list": [
            {
              "username": "纸飞机",
              "id": 1,
              "avatar": "http://img2.imgtn.bdimg.com/it/u=1015167629,1889027139&fm=26&gp=0.jpg",
              "sign": "在深邃的编码世界，做一枚轻盈的纸飞机"
            },
            {
              "username": "留里在克",
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
        },
        {
          "groupname": "运维组",
          "id": 3,
          "online": 1,
          "list": [
            {
              "username": "数据库",
              "id": 3,
              "avatar": "http://img1.imgtn.bdimg.com/it/u=2098424453,1638308312&fm=26&gp=0.jpg",
              "sign": "在自己实力不济的时候，不要去相信什么媒体和记者。他们不是善良的人，有时候候他们的采访对当事人而言就是陷阱"
            }
          ]
        },
        {
          "groupname": "测试组",
          "id": 4,
          "online": 2,
          "list": [
            {
              "username": "首都莫斯科",
              "id": 13,
              "avatar": "http://img0.imgtn.bdimg.com/it/u=4253872578,2593052212&fm=26&gp=0.jpg",
              "sign": "阿凡地方地方的单位单位嗡嗡嗡水水西安"
            },
            {
              "username": "考虫救济多少啦",
              "id": 16,
              "avatar": "http://img5.imgtn.bdimg.com/it/u=2960924498,640251633&fm=26&gp=0.jpg",
              "sign": "向你敞开自己想吃包括计算机上"
            }
          ]
        },
        {
          "groupname": "前端组",
          "id": 1,
          "online": 2,
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
            }
          ]
        },
      ],
      group: [
        {
          "id": 1,
          "groupname": "毕设一群",
          "avatar": "http://img2.imgtn.bdimg.com/it/u=3688486181,3063272509&fm=15&gp=0.jpg",
          "owner_name": "马云",
          "owner_id": 2,
          "owner_avatar": "http://img1.imgtn.bdimg.com/it/u=3720223719,2669593262&fm=26&gp=0.jpg",
          "owner_sign": "让天下没有难写的代码"
        },
        {
          "id": 2,
          "groupname": "毕设二群",
          "avatar": "http://img3.imgtn.bdimg.com/it/u=4163112520,3999561099&fm=26&gp=0.jpg",
          "owner_name": "秦双",
          "owner_id": 16,
          "owner_avatar": "http://img1.imgtn.bdimg.com/it/u=3970967606,2862670959&fm=26&gp=0.jpg",
          "owner_sign": "做猪呢,最重要的就是开心"
        }
      ]
    }
  },
  components: {
    Collapse,
    SingleMsg
  },
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index
    },
    passDialogue(val) {
      this.$emit('passDialogue', val);
    },
  }

}
</script>
<style scoped>
.tabs {
  height: 407px;
}
.content {
  width: 100%;
  height: 360px;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 10px 0 0 0;
  font-size: 30px;
  color: red;
  overflow-y: auto;
}
.content::-webkit-scrollbar {
  display: none;
}
</style>

