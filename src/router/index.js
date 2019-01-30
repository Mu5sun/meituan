import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default'
import BlankPage from '@/layout/blank'
import Index from '@/page/index'
import GoodsList from '@/page/goodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DefaultPage',
      component: DefaultPage,
      redirect: '/index',
      children: [
        {
          path: 's/:name',
          name: 'goods',
          component: GoodsList
        },
        {
          path: '/index',
          name: 'index',
          component: Index
        }
      ]
    },
    {
      path: '/blank',
      name: 'BlankPage',
      component: BlankPage
    }
  ]
})
