import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LeaveLayout from "./views/LeaveManagement/LeaveLayout.vue";
import LeaveHome from "./views/LeaveManagement/LeaveHome.vue";
import LeaveUserList from "./views/LeaveManagement/LeaveUserList.vue";
import LeaveRequestQuickPage from "./views/LeaveManagement/LeaveRequestQuickPage.vue";
import ClaimLayout from "./views/ClaimManagement/ClaimLayout.vue";
import ClaimHome from "./views/ClaimManagement/ClaimHome.vue";
import ClaimUserList from "./views/ClaimManagement/ClaimUserList.vue";
import ClaimRequest from "./views/ClaimManagement/ClaimRequest.vue";
import EmployeeDirectory from "./views/EmployeeDirectory.vue";
import EmployeeListManager from "./views/EmployeeDirectory/EmployeeListManager.vue";
import EmployeeListPublic from "./views/EmployeeDirectory/EmployeeListPublic.vue";

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
      path: '/leaverequestquickpage',
      name: 'LeaveRequestQuickPage',
      component: LeaveRequestQuickPage
    },
    {
      path: "/claimhome",
      name: "ClaimHome",
      component: ClaimLayout,
      redirect: "/claimhome/home",
      children: [
        {
          path: "home",
          name: "Home",
          component: ClaimHome,
        },
        {
          path: "timeline",
          name: "Timeline Page",
          components: { default: ClaimUserList }
        }
      ]
},
{
  path: '/claimrequest',
  name: 'ClaimRequest',
  component: ClaimRequest
},
{
  path: '/employeedirectory',
  name: 'EmployeeDirectory',
  component: EmployeeDirectory
},
{
  path: '/employeelistmanager',
  name: 'EmployeeListManager',
  component: EmployeeListManager
},
{
  path: '/employeelistpublic',
  name: 'EmployeeListPublic',
  component: EmployeeListPublic
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
