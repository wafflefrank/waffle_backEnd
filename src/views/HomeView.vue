<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px"><SideBar></SideBar></el-aside>
      <el-container>
        <el-header><HeadBar></HeadBar></el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer> <span class="text-white">KOLA ©2023</span></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from '../components/SideBar/SideBar.vue';
import HeadBar from '../components/HeadBar/HeadBar.vue';

export default {
  components: {
    SideBar,
    HeadBar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
// .el-aside {
//   box-shadow: 13px 1px 13px -6px rgba(0, 0, 0, 0.75);
// }
.el-header {
  padding: 0;
}
.el-main {
  padding: 60px;
}
</style>
