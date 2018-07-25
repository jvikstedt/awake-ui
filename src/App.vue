<template>
  <el-container id="app">
    <el-header>Awake</el-header>
    <el-container direction="horizontal">
      <el-aside>
        Side
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss">
  .el-aside {
    background-color: gray;
  }
  .el-main {
    background-color: green;
  }
  .el-header {
    background-color: pink;
  }
</style>
