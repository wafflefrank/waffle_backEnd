<template>
  <header class="main-head" :class="[isExpand === false ? 'main_expand' : 'main-head']">
    <img class="home_logo" src="../../assets/Logo/logo_kolapay.jpg" alt="#" />
    <nav class="head-nav">
      <ul class="menu">
        <li>
          <a href="#"> <i class="fa-solid fa-house-user fs-2 ms-3"></i><span class="list_name">我的帳戶</span></a>
        </li>
        <li>
          <a href="#"> <i class="fa-solid fa-user fs-2 ms-3"></i><span class="list_name">基本訊息</span></a>
        </li>
        <li>
          <a href="#"> <i class="fa-solid fa-money-check-dollar fs-2 ms-3"></i><span class="list_name">銀行卡訊息</span></a>
        </li>
        <li>
          <a href="#"> <i class="fa-solid fa-list-check fs-2 ms-3"></i><span class="list_name">對帳日報</span></a>
        </li>
        <li>
          <a href="#"> <i class="fa-solid fa-list-ol fs-2 ms-3"></i><span class="list_name">訂單紀錄</span></a>
        </li>
        <li>
          <a href="#"> <i class="fa-solid fa-list-ul fs-2 ms-3"></i><span class="list_name">訂單流水</span></a>
        </li>
        <li>
          <a href="#"> <i class="fa-solid fa-sack-dollar fs-2 ms-3"></i><span class="list_name">結算紀錄</span></a>
        </li>
        <li>
          <a href="#"> <i class="fa-solid fa-unlock fs-2 ms-3"></i><span class="list_name">Google驗證器</span></a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-moon fs-2 ms-3"></i><span class="list_name me-3">Dark mode</span
            ><el-switch
              class="dark_switch"
              :class="[isDark === true ? 'dark_switch' : 'white_switch']"
              v-model="isDark"
              style="--el-switch-on-color: #f2f2f2; --el-switch-off-color: #2c2c2c"
              @change="toggleMode(isDark)"
          /></a>
        </li>
      </ul>
    </nav>
    <span v-if="isExpand === true" class="expand_btn" @click="clickExpand()" @keydown="clickExpand()"><i class="fa-solid fa-angles-left"></i></span>
    <span v-if="isExpand === false" class="expand_btn" @click="clickExpand()" @keydown="clickExpand()"><i class="fa-solid fa-angles-right"></i></span>
  </header>
</template>

<script>
import { defineComponent } from 'vue';
// import { Location, Document, Menu as IconMenu, Setting } from '@element';

export default defineComponent({
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
    };
  },
  computed: {
    // 获取菜单对象中不包含子级的菜单
    noChildren() {
      return this.asideMenu.filter((item) => !item.children);
    },
    // 获取菜单对象中包含子级的菜单
    hasChildren() {
      return this.asideMenu.filter((item) => item.children);
    },
  },
  data() {
    return {
      // 是否擴展
      isExpand: true,
      // dark mode
      isDark: true,
    };
  },
  methods: {
    clickMenu(item) {
      this.$store.commit('selectMenu', item);
    },
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
      } else if (this.isDark === true) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
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
});
</script>

<style lang="scss" scoped>
$color-1: #1a1a1a;
$color-2: #fefefe;
$pad: 0.925rem;

.head-nav {
  padding: 30px 20px;
  li {
    position: relative;
    clear: both;
    width: 100%;
    padding: 0;
    transition: background 0.5s ease-out;
    & a {
      display: flex;
      padding: {
        top: 2vh;
        bottom: 2vh;
      }
      list-style: none;
      height: 100%;
      background-color: transparent;
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      border-radius: 6px;
      text-decoration: none;
      transition: var(--tran-03);
    }
    &:hover {
      // background: linear-gradient(90deg, rgba(238, 133, 46, 0.19091386554621848) 0%, rgba(252, 241, 69, 0.05926120448179273) 100%);
      & i::before {
        color: #faa30d;
      }
      a {
        color: #faa30d;
        background-color: var(--text-color);
      }
    }
    // icon寬度
    i {
      // margin: 0 auto;
      position: absolute;
      left: -40px;
      text-align: center;
      width: 100px;
      // margin-right: 50px;
    }
  }
  ul {
    margin: {
      top: $pad * 2;
      right: 0;
      bottom: 0;
      left: 0;
    }
    padding: 0;
    list-style: none;
  }
  a {
    align-items: center;
    width: 100%;
    color: var(--font-color);
    text-decoration: none;
    span {
      position: relative;
      display: block;
      z-index: 0;
      font-family: Roboto;
      // 顯示
      text-indent: -20em;
      white-space: nowrap;
      text-align: left;
      margin-left: 70px;
      transition: text-indent 400ms ease-in-out;
    }
  }
}
// 預設樣式
.main-head {
  position: fixed;
  bottom: 0;
  // 展開後樣式
  width: 280px;
  height: 100%;
  z-index: 1;
  background: var(--bar-bg-color);
  transition: width 400ms; //寬度延伸效果
  box-shadow: 13px 1px 13px -6px rgba(0, 0, 0, 0.75);
  .head-nav {
    // 展開文字動畫(1~8)延遲
    li {
      @for $i from 1 through 8 {
        &:nth-of-type(#{$i}) {
          span {
            transition-delay: 50ms * $i;
          }
        }
      }
    }
    span {
      text-indent: 1em;
    }
  }
}
// 縮小後樣式
.main_expand {
  width: 90px;
  a {
    align-items: center;
    width: 100%;
    color: var(--font-color);
    text-decoration: none;
    // transition: color 400ms;
    span {
      position: relative;
      display: block;
      z-index: 0;
      font-family: Roboto;
      // 顯示
      text-indent: -20em;
      white-space: nowrap;
      text-align: left;
      margin-left: 70px;
      transition: text-indent 400ms ease-in-out;
    }
  }
  //Logo隱藏
  & img {
    visibility: hidden;
  }
  & .list_name {
    visibility: hidden;
  }
  // 深色模式switch隱藏
  & .dark_switch {
    visibility: hidden;
  }
}
// LOGO樣式
.home_logo {
  border-radius: 10px;
  width: 120px;
  margin: 24px 25px 24px 40px;
  background: black;
  box-shadow: -1px 1px 24px 4px var(--logo-shadow-color);
  -webkit-box-shadow: -1px 1px 24px 4px var(--logo-shadow-color);
  -moz-box-shadow: -1px 1px 24px 4px var(--logo-shadow-color);
}
// 按鈕樣式
.expand_btn {
  position: absolute;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: #fff;
  background: #082635;
  box-shadow: 2px 1px 3px 3px rgba(0, 0, 0, 0.3);
  left: 100%;
  bottom: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  cursor: pointer;
}
.dark_switch {
  & :deep(.el-switch__action) {
    background: #000 !important;
  }
}
.white_switch {
  & :deep(.el-switch__action) {
    background: #f2f2f2 !important;
  }
}
</style>
