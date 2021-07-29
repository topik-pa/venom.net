import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import(/* webpackChunkName: "guide" */ '../views/Guide/Guide.vue'),
    children: [
      {
        path: '',
        name: 'GuideIndex',
        component: () => import(/* webpackChunkName: "guide-index" */ '../views/Guide/Index.vue')
      },
      {
        path: 'lesson-0',
        name: 'GuideLesson0',
        component: () => import(/* webpackChunkName: "guide-lesson-0" */ '../views/Guide/Lesson-0.vue')
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
