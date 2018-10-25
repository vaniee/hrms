import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LeaveLayout from "./views/LeaveManagement/LeaveLayout.vue";
import LeaveHome from "./views/LeaveManagement/LeaveHome.vue";
import LeaveUserList from "./views/LeaveManagement/LeaveUserList.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: "/leavehome",
      name: "LeaveHome",
      component: LeaveLayout,
      redirect: "/leavehome/home",
      children: [
        {
          path: "home",
          name: "Home",
          component: LeaveHome,
        },
        {
          path: "timeline",
          name: "Timeline Page",
          components: { default: LeaveUserList }
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
