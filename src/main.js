import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import store from "./store";
import "leaflet/dist/leaflet.css";

Vue.config.productionTip = false;

import listaProductos from "./components/admin/list_products";
import login from "./components/admin/login-admin";
import listaPedidos from "./components/admin/lista_pedidos";
import historial from "./components/admin/historial-pedidos";

import inicio from "./components/usuario/inicio";
import verPedido from "./components/usuario/pedido_usr";

import css from "./components/probando-estilos";
Vue.component("CSS", css);

Vue.component("listaProductos", listaProductos);
Vue.component("Login", login);
Vue.component("ListaPedidos", listaPedidos);
Vue.component("inicio", inicio);
Vue.component("verPedido", verPedido);

Vue.component("Historial", historial);
//vue router
Vue.use(VueRouter);

//rutas
const routes = [
   //usuario
   { path: "/", component: inicio },
   { path: "/pedido", component: verPedido },

   //admin
   { path: "/admin", component: listaProductos },
   { path: "/loginAdmin", component: login },
   { path: "/pedidosAdmin", component: listaPedidos },
   { path: "/historial", component: historial },
   { path: "/css", component: css },
];

const router = new VueRouter({
   routes,
   mode: "history",
});
new Vue({
   vuetify,
   router,
   store,
   render: (h) => h(App),
}).$mount("#app");
