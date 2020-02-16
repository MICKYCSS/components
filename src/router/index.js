import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:()=>import('../views/home/home.vue')
    },
    {
      path:'/profile',
      component:()=>import('../views/profile/profile.vue')
    }
  ]
})
