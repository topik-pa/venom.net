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
        path: '/guides/:id',
        name: 'Guide',
        component: () => import(/* webpackChunkName: "guide" */ '../views/Guides/Guide.vue')
      }
    ]
  },
  {
    path: '/guide/venom-app',
    name: 'VenomAppGuide',
    component: () => import(/* webpackChunkName: "venom-app-guide" */ '../views/Guides/VenomApp/Index.vue')
  },
  {
    path: '/lessons',
    name: 'Lessons',
    component: () => import(/* webpackChunkName: "lessons" */ '../views/Lessons.vue')
  },
  {
    path: '/lessons/:id',
    name: 'LessonInstallGit',
    component: () => import(/* webpackChunkName: "lesson-install-git" */ '../views/Lessons/LessonInstallGit.vue')
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
