import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LeaveHome from "./views/LeaveManagement/LeaveHome.vue";
import LeaveUserList from "./views/LeaveManagement/LeaveUserList.vue";
import LeaveNewForm from "./views/LeaveManagement/LeaveNewForm.vue";


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
      component: LeaveHome,
      children: [
        {
          path: "leavenewform",
          name: "Leave New Form",
          component: LeaveNewForm,
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
