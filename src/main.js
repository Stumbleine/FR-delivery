import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import store from './store'

Vue.config.productionTip = false

import listaProductos from './components/admin/list_products';
import login from './components/admin/login-admin';
import listaPedidos from './components/admin/lista_pedidos';

import contact from './components/elementos/contact';
import inicio from './components/usuario/inicio';
import verPedido from './components/usuario/pedido_usr';

Vue.component('listaProductos', listaProductos);
Vue.component('Login', login);
Vue.component('ListaPedidos',listaPedidos)
Vue.component('Contact', contact)
Vue.component('inicio',inicio);
Vue.component('verPedido', verPedido);
//vue router
Vue.use(VueRouter);

//rutas
const routes = [
     //usuario
     { path: '/', component: inicio },
     { path: '/pedido', component: verPedido },
     { path: '/contact', component: contact },
     //admin
     { path: '/admin', component: listaProductos },
     { path: '/login-admin', component: login},
     {path: '/pedidos-admin', component:listaPedidos},

]

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
