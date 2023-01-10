import { createRouter, createWebHashHistory } from 'vue-router';
import { ElMessage } from 'element-plus';
import axios from 'axios';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Waffle管理後台',
    component: HomeView,
    redirect: { name: '我的帳號' },
    meta: {
      requireAuth: true, // 判斷是否需要驗證會員登入
    },
    children: [
      {
        path: 'account',
        name: '我的帳號',
        component: () => import('../views/My_Account.vue'),
        meta: { title: '我的帳號' },
      },
    ],
  },
  {
    path: '/livechart',
    name: 'livechart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/LiveChart/LiveChart.vue'),
  },
  // 登入
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = 'Rocket管理後台';
  if (to.matched.some((m) => m.meta.requireAuth)) {
    axios.post('/open/checkIsGoogleLogin').then((res) => {
      console.log('抓到後台登入狀態了', res.data);
      // 對路由進行驗證
      if (res.data.code === 200) {
        console.log('後臺成功登入', res.data);
        // 已經登陸
        next(); // 正常跳轉到你設定好的頁面
      } else {
        // 未登入則跳轉到登陸介面
        ElMessage({ showClose: true, message: '請先登入!', type: 'warning' });
        next({ path: '/login' });
      }
    });
    // console.log(document.cookie);
    // console.log(localStorage.getItem('user'));
  } else {
    next();
  }
});

export default router;
