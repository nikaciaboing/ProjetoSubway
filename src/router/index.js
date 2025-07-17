import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastroView from '../views/CadastroView.vue'
import LanchesView from '../views/LanchesView.vue'
import BebidasView from '../views/BebidasView.vue'
import MontarLancheView from '../views/MontarLancheView.vue'
import EntregaRetiradaView from '../views/EntregaRetiradaView.vue'
import PagamentoView from '../views/PagamentoView.vue'
import PreparandoView from '../views/PreparandoView.vue'
import EnderecoEntregaView from '../views/EnderecoEntregaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroView
  },
  {
    path: '/lanches',
    name: 'lanches',
    component: LanchesView
  },
  {
    path: '/bebidas',
    name: 'bebidas',
    component: BebidasView
  },
  {
    path: '/montarlanche',
    name: 'montarlanche',
    component: MontarLancheView
  },
  {
    path: '/entregaretirada',
    name: 'entregaretirada',
    component: EntregaRetiradaView
  },
  {
    path: '/pagamento',
    name: 'pagamento',
    component: PagamentoView
  },
  {
    path: '/preparando',
    name: 'preparando',
    component: PreparandoView
  },
  {
    path: '/enderecoentrega',
    name: 'enderecoentrega',
    component: EnderecoEntregaView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
