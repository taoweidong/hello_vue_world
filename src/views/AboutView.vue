<template>
  <div id="app">
    <!-- 测试elementUI -->
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click="say">显示Vuex数据</el-button>

      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "aboutView",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    say() {
      alert(this.$store.state.count);
    },
  },
};
</script>
