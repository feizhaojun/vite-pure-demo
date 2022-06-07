import { createApp } from 'vue' 
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/demo/index.vue')
    }
  ]
})

createApp(App).use(router).mount('#app')
