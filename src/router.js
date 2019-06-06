import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import cliente from './views/cliente.vue'
import Funcionario from './views/Funcionario.vue' 
import Home from './views/Home.vue' 
import Demo from './views/Demo.vue'
import cadastro from './views/cadastro.vue' 
import produtos from './views/produtos.vue' 
import tabela from './views/tabela.vue' 


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
    },
    {
      path: '/funcionario',
      name: 'Pagina do funcionairo ',
      component: Funcionario
    },
    {
      path: '/Home',
      name: 'Pagina de Inicio ',
      component: Home
    },
    {
      path: '/Demo',
      name: 'Pagina de Demo ',
      component: Demo
    },
    {
      path: '/cadastro',
      name: 'Pagina de Cadastro ',
      component: cadastro
    },
    {
      path: '/produtos',
      name: 'Pagina de Produtos ',
      component: produtos

    },
    {
      path: '/tabela',
      name: 'Pagina de tabela ',
      component: tabela
    }

  ]
})
