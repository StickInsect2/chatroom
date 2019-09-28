<template>
  <div id="collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item
        v-for="(item,index) in person"
        :title="item.groupname"
        :name="index"
        :key="index"
      >
        <SingleMsg :person="item.list" :which="1" @passDialogue="passDialogue" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import SingleMsg from './singleMsg'
export default {
  data() {
    return {
      activeNames: ['1'],
    };
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
  components: {
    SingleMsg
  },
  methods: {
    handleChange(val) {

    },
    passDialogue(val) {
      this.$emit('passDialogue', val);
    }
  },
}
</script>
<style scoped>
#collapse {
  width: 95%;
  cursor: pointer;
}
.el-collapse-item {
  padding-left: 20px;
  cursor: pointer;
}
</style>