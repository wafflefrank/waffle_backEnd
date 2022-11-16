<template>
  <header class="navbar">
    <div class="l-content"></div>
    <div class="r-content">
      <el-dropdown size="small">
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right">
            <i class="fa-solid fa-bars fs-2"></i>
            <arrow-down class="arrow"></arrow-down>
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.el-button {
  padding: 5px 5px;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background: var(--heading-color);
  margin-left: 30px;
}
.arrow {
  font-size: 20px;
  color: white;
}

.l-content,
.r-content {
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  margin-right: 30px;
}
.el-icon--right i {
  color: var(--font-color);
}
</style>
