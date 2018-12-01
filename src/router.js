import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from './components/Dashboard'
// import Login from './components/Login'
import SignUp from './components/SignUp'
// import NotFound from './components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: Dashboard
    // },
    // {
    //   path: '/login',
    //   component: Login
    // },
    {
      path: '/signup',
      component: SignUp
    },
    // {
    //   path: '/404',
    //   component: NotFound
    // },
    // {
    //   path: '*',
    //   redirect: '/404'
    // }
  ]
})
