<template>
  <div id="app">
    <Container
      @changeFloatElmStatus="changeFloatElmStatus"
      @passDialogue="getDialogue"
      :currentSkin="currentSkin"
    />
    <Skin
      v-show="status[0].isShow"
      @changeFloatElmStatus="changeFloatElmStatus(0)"
      @changeSkin="changeSkin"
    />
    <Find
      v-show="status[1].isShow"
      @changeFloatElmStatus="changeFloatElmStatus(1)"
      @opencreateGroupPanel="opencreateGroupPanel"
    />
    <About v-show="status[2].isShow" @changeFloatElmStatus="changeFloatElmStatus(2)" />
    <Center v-show="chatingArr.length > 0" :chatingArr="chatingArr" :currentSkin="currentSkin" />
    <CreateGroup v-show="opencreateGroup" />
  </div>
</template>
<script>
import Container from './pages/container'
import Center from './pages/center'
import Skin from './pages/skin'
import Find from './pages/find'
import About from './pages/about'
import CreateGroup from './pages/createGroup'

export default {
  name: 'App',
  data() {
    return {
      status: [
        { isShow: false },
        { isShow: false },
        { isShow: false },
      ],
      chatingArr: [],
      currentSkin: {},
      opencreateGroup: false
    }
  },
  components: {
    Container,
    Center,
    Skin,
    Find,
    About,
    CreateGroup
  },
  methods: {
    changeFloatElmStatus(index) {
      this.status[index].isShow = !this.status[index].isShow;
    },
    getDialogue(val) {
      this.chatingArr.push(val);
      // 去重
      this.chatingArr = Array.from(new Set(this.chatingArr));
    },
    changeSkin(skin) {
      this.currentSkin = skin;
    },
    opencreateGroupPanel(val) {
      this.opencreateGroup = val;
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-image: url("../static/img/bj3.jpg");
}
input,
button,
select,
textarea {
  outline: none;
}
textarea {
  resize: none;
  overflow: auto;
  border: none;
}
textarea::-webkit-scrollbar {
  display: none;
}
</style>
