import Vue from 'vue'
import Router from 'vue-router'
import Auth from './components/Auth'
import Play from './components/Play'
import Dictionary from './components/Dictionary'
import Welcome from './components/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/signup',
      component: Auth
    },
    {
      path: '/signin',
      component: Auth
    }, {
      path: '/play',
      component: Play
    }, {
      path: '/dictionary',
      component: Dictionary
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
