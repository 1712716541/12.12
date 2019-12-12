import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//login
import login from '@/components/login/login'

//publicModule
import cityList from '@/components/publicModule/cityList'

import search from '@/components/otherindex/search'
//searchcover
import quyu from '@/components/otherindex/searchcover/quyu'
import juli from '@/components/otherindex/searchcover/juli'


import mainIndex from '@/components/mainindex/mainindex'
import mainRuzhu from '@/components/mainindex/mainruzhu'
import mainWode from '@/components/mainindex/mainwode'
//indexcover
import jiaxiao from '@/components/mainindex/indexcover/jiaxiao'
import keyun from '@/components/mainindex/indexcover/keyun'
import huoyun from '@/components/mainindex/indexcover/huoyun'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/mainindex',
      component: HelloWorld,
      children:[
        {
          path:'/mainindex',
          name:'mainindex',
          component:mainIndex
        },
        {
          path:'/mainruzhu',
          name:'mainruzhu',
          component:mainRuzhu
        },
        {
          path:'/mainwode',
          name:'mainwode',
          component:mainWode
        },
        {
          path:'/jiaxiao',
          name:'jiaxiao',
          component:jiaxiao
        },
        {
          path:'/keyun',
          name:'keyun',
          component:keyun
        },
        {
          path:'/huoyun',
          name:'huoyun',
          component:huoyun
        }
      ]
    },
    {
      path:'/search',
      name:'search',
      component:search,
      //这是二级路由不是三级路由
      children:[
        {
          path:'/search/quyu',
          name:'quyu',
          component:quyu
        },
        {
          path:'/search/juli',
          name:'juli',
          component:juli
        }
      ],
      redirect:'/search/quyu'
    },
    {
      path:'/cityList',
      name:'cityList',
      component:cityList
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
