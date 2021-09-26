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
        component: () => import('@/views/Administrador/DivisionAcademica')
      },
      {
        path: 'carreras-administrador',
        component: () => import('@/views/Administrador/Carrera')
      },
      {
        path: 'asignatura-administrador',
        component: () => import('@/views/Administrador/Asignatura')
      },
      {
        path: 'periodo-administrador',
        component: () => import('@/views/Administrador/Periodo')
      },
      {
        path: 'docente-administrador',
        component: () => import('@/views/Administrador/Docente')
      },
      {
        path: 'director-administrador',
        component: () => import('@/views/Administrador/Director')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

