import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '',
    name:"login",
    component: () => import('@/views/Login')
  },
  { 
    path: '/registro',
    name:"registro",
    component: () => import('@/views/Registro')
  },
  { 
    path: '',
    name:"dashboradAdministrador",
    component: () => import('@/views/Administrador/Dashboard'),
    children: [
      {
        path: 'division-academica-administrador',
        component: () => import('@/views/Administrador/DivisionAcademica/DivisionAcademica')
      },
      {
        path: 'crear-division-academica-administrador',
        component: () => import('@/views/Administrador/DivisionAcademica/Registrar')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

