<template>
  <el-container id="app">
    <el-header>Awake</el-header>
    <el-container direction="horizontal">
      <el-aside>
        Side
      </el-aside>
      <el-main>
        <Flash />
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Flash from '@/common/Flash'

export default {
  components: {
    Flash
  }
}
</script>

<style lang="scss">
  body {
    background-color: #DCDFE6;
  }
  .el-aside {
    border: 1px solid #606266;
  }
  .el-main {
    border: 1px solid #606266;
  }
  .el-header {
    border: 1px solid #606266;
  }

  #app {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
