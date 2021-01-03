import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'  //Se importa el componente para cargarlo al acceder a la página web


Vue.use(VueRouter)

const routes = [    //Aquí van las rutas
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    //component: Home   //El componente se carga al acceder a la página web
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    //component: Home   //El componente se carga al acceder a la página web
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') //Sólo se carga el componente cuando el usuario da clic en la sección
  },
  {
    path: '/services',
    name: 'Services',
   // component: Services
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')  //Sólo se carga el componente cuando el usuario da clic en la sección
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

///Está funcion no está trabajando bien

router.beforeEach((to, from, next) => {
  if(to.matched.some(registro => registro.meta.requiresAuth))
      {
       if(localStorage.getItem('jwt')===null)   //Si no hay un token en el almacenamiento local
            {
              next({
                path: '/'   //Devuelve al usario a la página de login
              })
            }   //del if localStorage
      else
        {
          next();
        }   //del else
      }   //del if to.match
  else
      {
        next();
      }   //del else
  
    }   //de la función router
  )     //de la función router

export default router
