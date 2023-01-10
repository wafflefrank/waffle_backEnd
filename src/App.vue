<template>
  <router-view />
</template>

<script>
export default {
  // mounted() {
  //   if (document.documentElement.setAttribute === 'light') {
  //     document.getElementsByTagName('body')[0].className = 'grayColor';
  //   }
  // },
};
</script>

<style lang="scss">
@import 'assets/SideBar/sideBar.css';
@import './assets/all.scss';
body {
  background-image: url('assets/background/deepGreen.png');
  background-size: 100% 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  transition: background 0.2s;
}
// body預設背景色
.darkBg {
  background-image: url('assets/background/deepGreen.png');
  background-size: 100% 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  transition: background 0.2s;
}
.lightBg {
  background-image: linear-gradient(45deg, #29323c, #485563);
  background-size: 100% 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  transition: background 0.2s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
