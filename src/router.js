import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import cliente from './views/cliente.vue'
import Funcionario from './views/Funcionario.vue' 
import Home from './views/Home.vue' 


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cliente',
      name: 'Pagina do cliente ',
      component: cliente
    }
    ,
    {
      path: '/funcionario',
      name: 'Pagina do funcionairo ',
      component: Funcionario
    },
    {
      path: '/Home',
      name: 'Pagina de Inicio ',
      component: Home
    }

  ]
})
