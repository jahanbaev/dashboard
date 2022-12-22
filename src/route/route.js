
import { createRouter, createWebHistory } from 'vue-router'
import dashboardPage from '@/pages/dashboardPage'
import projectStatic from '@/pages/dashboard/projectStatic'
import registerPage from '@/pages/registerPage'
import loginPage from '@/pages/loginPage'
import uploadPage from '@/pages/dashboard/uploadPage'
import staticPage from '@/pages/dashboard/staticPage'

const main = { template: '<div>Home</div>' }

const routes = [
  {path: '/', component: main},
  { path: '/signup', component: registerPage, name: 'signUp' },
  { path: '/login', component: loginPage, name: 'Home' },
  { path: '/dashboard/', 
    component: dashboardPage,
    children: [
      { path: '', component: projectStatic },
      { path: '/upload', component: uploadPage},
      { path: ':id/static', component: staticPage},
      { path: ':id', component: projectStatic}
    ] 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router