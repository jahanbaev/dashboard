
import { createRouter, createWebHistory } from 'vue-router'
import dashboardPage from '@/pages/dashboardPage'
import projectStatic from '@/pages/dashboard/projectStatic'
import loginPage from '@/pages/loginPage'
import uploadPage from '@/pages/dashboard/uploadPage'

const routes = [
  { path: '/', component: loginPage, name: 'Home' },
  { path: '/dashboard/', 
    component: dashboardPage,
    children: [
      { path: '', component: projectStatic },
      { path: '/upload', component: uploadPage },
      { path: ':id', component: uploadPage },
    ] 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, 
})

export default router