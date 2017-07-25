import Vue from 'vue'
import Router from 'vue-router'
import Ring from '@/components/Ring'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ring',
      component: Ring
    }
  ]
})
