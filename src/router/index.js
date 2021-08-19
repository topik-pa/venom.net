import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/guides',
    name: 'Guides',
    component: () => import(/* webpackChunkName: "guides" */ '../views/Guides/Guides.vue'),
    children: [
      {
        path: 'preview/:id',
        name: 'Preview',
        component: () => import(/* webpackChunkName: "preview" */ '../views/Guides/Preview.vue')
      }
    ]
  },
  {
    path: '/widgets',
    name: 'Widgets',
    component: () => import(/* webpackChunkName: "widgets" */ '../views/Widgets.vue')
  },
  {
    path: '/concepts',
    name: 'Concepts',
    component: () => import(/* webpackChunkName: "concepts" */ '../views/Concepts.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "concepts" */ '../views/Privacy.vue')
  },
  {
    path: '/guide/web-app',
    name: 'WebAppGuide',
    component: () => import(/* webpackChunkName: "web-app-guide" */ '../views/Guides/WebApp/Index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
