import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },

  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('../components/PagePc.vue')
  // },
  
  // {
  //   path: '/gallery',
  //   name: 'Gallary',
  //   component: () => import('../components/Gallery.vue')
  // },

  // {
  //   path: '/gallery/detail',
  //   name: 'Detail',
  //   component: () => import('../components/Detail.vue'),
  // },

  // {
  //   path: '/form',
  //   name: 'Form',
  //   component: () => import('../components/Form.vue'),
  // }
]

const router = new VueRouter({
  routes
})

export default router
