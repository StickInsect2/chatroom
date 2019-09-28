<template>
  <div>
    <div id="container" v-drag :style="{backgroundImage:`url(${img})`}">
      <Top />
      <TabListView @passDialogue="passDialogue" />
      <Bottom @changeFloatElmStatus="changeFloatElmStatus" />
    </div>
  </div>
</template>
<script>
import Top from '@/components/top'
import TabListView from '@/components/tabListView'
import Bottom from '@/components/bottom'
export default {
  name: 'Container',
  data() {
    return {
      img: require('../../static/img/skin1.jpg')
    }
  },
  props: {
    currentSkin: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  components: {
    Top,
    TabListView,
    Bottom
  },
  watch: {
    currentSkin: function () {
      this.img = this.currentSkin.img;
    }
  },
  methods: {

    changeFloatElmStatus(index) {
      //接收bottom.vue传递过来的状态。直接再传递给父级app.vue 
      this.$emit('changeFloatElmStatus', index);
    },
    passDialogue(val) {
      this.$emit('passDialogue', val);
    }
  }
}
</script>
<style scoped>
#container {
  width: 260px;
  height: 500px;
  position: absolute;
  z-index: 100;
  top: 50px;
  left: 1000px;
  margin-bottom: 20px;
}
</style>
