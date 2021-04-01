<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height:100vh;
  overflow: hidden;
}
body,html{
  width: 100%;
  background-color: #f1f1f1;
  color: #333;
  margin: 0;
  padding: 0;
  border: 0;
  overflow: auto !important
}

/**滚动条的宽度*/
::-webkit-scrollbar {
  width: 3px; 
 
}
/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #fabafc;
  border-radius: 3px;
}

/* 表格 */
.el-table__body-wrapper::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 3px;
}
</style>
