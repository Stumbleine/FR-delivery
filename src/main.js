import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

Vue.config.productionTip = false

import listaProductos from './components/list_products';
//import Crear from './components/crear_producto';
import Editar from './components/edit_product';
import contact from './components/contact';


Vue.component('listaProductos', listaProductos);
//Vue.component('Crear', Crear);
Vue.component('Editar', Editar);
Vue.component('Contact', contact)
//vue router
Vue.use(VueRouter);
//rutas
const routes = [
  { path: '/', component: listaProductos },
  { path: '/home', component: listaProductos },
  //{ path: '/crear_producto', component: Crear, name: 'crear' },
  { path: '/editar_producto/:id', component: Editar, name: 'Editar' },
  { path: '/contact', component: contact }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
