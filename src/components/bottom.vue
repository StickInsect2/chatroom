<template>
  <div>
    <ul class="bottom" v-show="showBottom" @click="openWhich($event)">
      <li class="iconfont icon-sousuo" data-index="0"></li>
      <li class="iconfont icon-pifu" data-index="1"></li>
      <li class="iconfont icon-jia" data-index="2"></li>
      <li class="iconfont icon-guanyu" data-index="3"></li>
    </ul>
    <div class="search" v-show="!showBottom">
      <input type="text" />
      <span class="iconfont icon-guanbi" @click="closeSearch"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Bottom',
  data() {
    return {
      showBottom: true,
    }
  },
  methods: {
    closeSearch() {
      this.showBottom = true;
    },
    openWhich(e) {
      let index = e.target.getAttribute('data-index');
      if (index == 0) {
        //打开搜索
        this.showBottom = false;
      } else {
        this.$emit('changeFloatElmStatus', index - 1);
      }

    },
  },

}
</script>
<style scoped>
.bottom {
  width: 100%;
  margin-top: -10px;
  height: 38px;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
}
.search {
  margin-top: -10px;
  width: 100%;
  height: 38px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
}
.search input {
  width: 95%;
  height: 32px;
  outline: none;
}
.search span {
  position: absolute;
  top: 8px;
  left: 230px;
  cursor: pointer;
}
</style>