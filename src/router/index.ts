import { createRouter, createWebHistory } from 'vue-router'
import SwordsShop from '../views/SwordsShop.vue'
import PlayerPanel from '@/views/PlayerPanel.vue'
import BattleGround from '@/views/BattleGround.vue'

const routes = [
  {
    path: '/',
    name: 'BattleGround',
    component: BattleGround
  },
  {
    path: '/shop',
    name: 'Shop',
    component: SwordsShop,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/player',
    name: 'Player Panel',
    component: PlayerPanel
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
