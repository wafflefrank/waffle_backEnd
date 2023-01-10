<template>
  <header class="navbar">
    <div class="l-content"></div>
    <div class="r-content">
      <div class="d-flex align-items-center">
        <div class="moon_style d-flex align-items-center">
          <!-- <i class="fa-solid fa-moon fs-4 ms-3"></i
          > -->
          <el-switch
            class="dark_switch"
            :class="[isDark === true ? 'dark_switch' : 'white_switch']"
            v-model="isDark"
            style="--el-switch-on-color: #f2f2f2; --el-switch-off-color: #2c2c2c"
            @change="toggleMode(isDark)"
          />
        </div>
        <el-dropdown class="ms-3" size="small">
          <span class="el-dropdown-link">
            <el-icon class="el-icon--right">
              <i class="fa-solid fa-bars fs-2"></i>
              <arrow-down class="arrow"></arrow-down>
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">登出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import { ElMessage } from 'element-plus';

export default {
  data() {
    return {
      // dark mode
      isDark: true,
    };
  },
  methods: {
    clickExpand() {
      if (this.isExpand === true) {
        this.isExpand = false;
      } else {
        this.isExpand = true;
      }
    },
    // 切換Dark模式
    toggleMode(isDark) {
      console.log(isDark);
      if (this.isDark === false) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.getElementsByTagName('body')[0].className = 'lightBg';
      } else if (this.isDark === true) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.getElementsByTagName('body')[0].className = 'darkBg';
      }
    },
    logout() {
      this.$http.get('/open/logout/').then((res) => {
        if (res.data.code === 200) {
          this.$router.push('/login');
          ElMessage({ showClose: true, message: '已登出!', type: 'success' });
        } else {
          this.$swal.fire('登出失敗!', `${res.data.msg}`, 'error');
        }
      });
    },
  },
  created() {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    console.log(currentTheme);
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
        this.isDark = true;
        // toggleSwitch.checked = true;
      } else {
        this.isDark = false;
      }
    }
  },
  mounted() {
    document.getElementsByTagName('body')[0].className = 'darkBg';
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
  background: rgb(0 0 0 / 20%);
  //   margin-left: 30px;
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
.moon_style {
  :deep(.el-switch__core .el-switch__action) {
    background-image: url('../../assets/Logo/icons8-moon-and-stars-30.png') !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>
