import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default new VueRouter({
  routes: [
    {
      path: "/", // 程序启动默认路由
      component: () => import("@/layout/Layout.vue"),
      meta: { title: "整体页面布局" },
      redirect: "/Home", // 重定向到首页
      children: [
        {
          path: "/Home",
          component: () => import("@/views/Home.vue"),
          meta: { title: "首页" },
        },
        {
          path: "/test1",
          component: () => import("@/page/test1/index.vue"),
          meta: { title: "一级菜单1" },
          // redirect: "/test1/index", // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
        },
        {
          path: "/test2",
          component: () => import("@/page/test2/test2.vue"),
          meta: { title: "一级菜单2" },
          // redirect: "/test2/test2-1", // 该配置是若点击选择父目录时，默认选中该父目录下的子路径页面
        },
        {
          path: "/test3",
          component: () => import("@/page/test3/test3.vue"),
          meta: { title: "一级菜单3" },
          // redirect: "/test3/test3-1",
        },
        {
          path: "/test4/test41",
          component: () => import("@/page/test4/test4-1.vue"),
          meta: { title: "菜单四" },
        },
        {
          path: "/test4/test42",
          component: () => import("@/page/test4/test4-2.vue"),
          meta: { title: "菜单二" },
        },
        {
          path: "/permission", // 权限页面
          component: () => import("@/page/Permission.vue"),
          meta: {
            title: "权限测试",
            permission: true,
          },
        },
        {
          path: "/404",
          component: () => import("@/page/404.vue"),
          meta: { title: "404" },
        },
        {
          path: "/403",
          component: () => import("@/page/403.vue"),
          meta: { title: "403" },
        },
      ],
    },
    {
      path: "/Login", // 登录页面
      component: () => import("@/page/Login.vue"),
      meta: { title: "登录" },
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
