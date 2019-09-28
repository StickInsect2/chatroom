<template>
  <div id="skin" v-drag ref="skinCon">
    <h4 class="skinLabel">更换皮肤</h4>
    <span class="iconfont icon-guanbi close" @click="closeChangeSkin"></span>
    <ul class="skinUl" ref="skinUl">
      <li
        v-for="(item, index) in skins"
        :key="index"
        :id="item.id"
        @click="changeSkin($event,item)"
      >
        <img :src="item.img" alt class="skinDiv" />
        <span class="iconfont icon-xuanzhong check"></span>
        <div class="skinTitle">{{item.title}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Skin',
  data() {
    return {
      current: 0,
      skins: [
        { id: '0', img: require('../../static/img/skin1.jpg'), title: '清新条纹' },
        { id: '1', img: require('../../static/img/skin2.jpg'), title: '抽象素描' },
        { id: '2', img: require('../../static/img/skin3.jpg'), title: '天空' },
        { id: '3', img: require('../../static/img/skin4.jpg'), title: '一花一世界' },
        { id: '4', img: require('../../static/img/skin5.jpg'), title: '林峰池塘' },
        { id: '5', img: require('../../static/img/skin6.jpg'), title: '尖尖荷叶' },
        { id: '6', img: require('../../static/img/skin7.jpg'), title: '相框' },
        { id: '7', img: require('../../static/img/skin8.jpg'), title: '彩绘' },
      ]
    }
  },
  props: {
    openSkin: {
      type: Boolean,
    }
  },
  methods: {
    changeSkin(e, item) {
      this.current = item.id;
      var length = this.$refs.skinUl.children.length;
      for (var i = 0; i < length; i++) {
        this.$refs.skinUl.children[i].firstElementChild.nextElementSibling.style.display = "none";
        e.target.nextElementSibling.style.display = "block";
      }
      this.$emit('changeSkin', item)
    },
    closeChangeSkin() {
      this.$emit('changeFloatElmStatus');
    }
  },
}
</script>
<style scoped>
#skin {
  width: 380px;
  height: 300px;
  position: absolute;
  top: 50px;
  left: 350px;
  margin-left: 0px;
  background-color: #b4cfd4;
  z-index: 99;
}
.skinLabel {
  display: inline-block;
  margin-top: 5px;
  width: 100%;
  height: 25px;
  color: white;
  font-size: 20px;
  cursor: move;
}
.close {
  position: absolute;
  top: 5px;
  left: 355px;
  cursor: pointer;
}
.skinUl {
  width: 380px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.skinUl li {
  position: relative;
  margin: 5px 0;
}
.skinDiv {
  width: 80px;
  height: 80px;
}

.skinTitle {
  color: white;
  margin-top: 4px;
  font-size: 14px;
}
.check {
  display: none;
  position: absolute;
  top: 3px;
  left: 50px;
}
</style>