<template>
  <div id="about" v-drag ref="aboutPanel">
    <div class="aboutTitle">
      <p>关于IU女神库</p>
      <span class="iconfont icon-guanbi close" @click="closeAboutPanel"></span>
    </div>
    <hr />
    <div class="aboutInfo">
      <p>版本：2.8.30</p>
      <p>版权所有：Uaena</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
    }
  },
  props: {
    openAbout: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    closeAboutPanel() {
      this.$emit('changeFloatElmStatus');
    }
  }
}
</script>
<style scoped>
#about {
  width: 150px;
  height: 100px;
  position: absolute;
  z-index: 100;
  top: 250px;
  left: 500px;
  background-color: white;
}
.close {
  position: absolute;
  top: -2px;
  left: 130px;
  cursor: pointer;
}
.aboutTitle p {
  font-size: 16px;
  color: rgb(95, 214, 223);
  margin-right: 10px;
}
.aboutInfo p {
  font-size: 15px;
  font-weight: 700;
  margin-top: 10px;
}
</style>