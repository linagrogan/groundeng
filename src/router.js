import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from './components/Dashboard'
// import Login from './components/Login'
import SignUp from './components/Auth'
import Play from './components/Play'
import Welcome from './components/Welcome'
// import NotFound from './components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    // {
    //   path: '/login',
    //   component: Login
    // },
    {
      path: '/auth',
      component: SignUp
    }, {
      path: '/play',
      component: Play
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
