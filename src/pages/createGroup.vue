<template>
  <div id="createGroup" v-drag ref="createGroupPanel">
    <div class="title">
      <h2>创建群组</h2>
      <span class="iconfont icon-guanbi close" @click="closeCreateGroup"></span>
    </div>
    <div class="con">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="createGroup"
        ref="createGroupform"
      >
        <el-form-item label="群组名称" prop="name">
          <el-input v-model="createGroup.name"></el-input>
        </el-form-item>
        <el-form-item label="群组头像" prop="image">
          <el-button type="info" plain class="chooseImage" v-model="createGroup.image">选择文件</el-button>
          <span>未选择任何文件</span>
        </el-form-item>
        <el-form-item label="选择成员" prop="members">
          <el-cascader
            clearable
            :show-all-levels="false"
            :props="props"
            :options="memberData"
            v-model="createGroup.members"
            @change="change(val)"
          ></el-cascader>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('groupform')">提交</el-button>
          <el-button @click="resetForm('createGroupform')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CreateGroup',
  data() {
    return {
      labelPosition: 'left',
      val: [],
      createGroup: {
        name: '',
        image: '',
        members: ''
      },
      props: { multiple: true },
      memberData: [
        {
          value: 1,
          label: '东南',
          children: [
            {
              value: 2,
              label: '上海',
            },
            {
              value: 7,
              label: '江苏',
            }
          ]
        },
        {
          value: 2,
          label: '东南2',
          children: [
            {
              value: 2,
              label: '上海2',
            },
            {
              value: 7,
              label: '江苏2',
            }
          ]
        }
      ],
    }
  },
  methods: {
    closeCreateGroup() {
      this.$refs.createGroupPanel.style.display = "none";
    },
    submitForm(formName) {
      console.log(this.createGroup)
      alert('submit!');
    },
    resetForm(formName) {
      console.log('重置了')
      this.$refs[formName].resetFields();
    },
    change(val) {
      console.log(val);
    }
  }
}
</script>
<style scoped>
#createGroup {
  width: 711px;
  height: 430px;
  position: absolute;
  top: 88px;
  left: 239px;
  background-color: #e2e2f5;
}
.title {
  width: 100%;
  height: 40px;
  background-color: #e2e2f5;
  cursor: move;
}
h2 {
  position: absolute;
  top: 10px;
  left: 8px;
}
.title .close {
  position: absolute;
  top: 7px;
  right: 21px;
  cursor: pointer;
}
.con {
  width: 90%;
  height: 85%;
  margin: 0 auto;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.el-form {
  width: 90%;
  height: 90%;
}
.el-input {
  width: 45%;
  margin-left: -177px;
}
.chooseImage {
  margin: 0 20px 0 -180px;
}
.el-cascader {
  margin-left: -178px;
}
.el-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  margin-left: -247px;
}
</style>