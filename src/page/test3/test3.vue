<template>
  <div class="content-box">
    <div class="container">
      <div>
        <el-page-header @back="goBack" content="详情页面"> </el-page-header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test3Page",
  methods: {
    goBack() {
      // 浏览器记录后退一步
      this.$router.go(-1);
      console.log("go back");
    },
  },
};
</script>
