<template>
  <ul class="lists">
    <li class="items" v-for="(item,index) in person" :key="index" @click="passDialogue(item)">
      <div>
        <img :src="item.avatar" alt />
      </div>
      <div class="itemsContent">
        <p>{{which == 1 ? item.username :item.groupname }}</p>
        <p class="content" v-show="which == 1">{{item.sign}}</p>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SingleMsg',
  data() {
    return {

    }
  },
  props: {
    person: {
      type: Array,
      default: function () {
        return []
      }
    },
    which: {
      type: [Number, String],
      default: 1
    }
  },
  methods: {
    passDialogue(val) {
      this.$emit('passDialogue', val);
    }
  }
}
</script>
<style scoped>
.lists .items {
  font-size: 14px;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
}
.lists .items img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin: 0 8px;
}
.lists .items .itemsContent {
  max-width: 145px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.items .itemsContent .content {
  max-width: 145px;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>