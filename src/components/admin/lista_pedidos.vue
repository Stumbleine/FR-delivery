<template>
   <v-container>
      <Navigation context="admin"></Navigation>
      <v-row class="d-flex justify-center">
         <div class="d-flex grey--text text--darken-3">
            <h1 class="font-weight-bold">PEDIDOS</h1>
         </div>
      </v-row>
      <v-container fluid width="100%" class="d-flex mb-3">
         <v-card
            width="300px"
            elevation="5"
            class="justify-start text-center"
            style="
               background: #3a1c71;
               background: -webkit-linear-gradient(
                  to bottom right,
                  #ed7b84,
                  #9055ff
               );
               background: linear-gradient(to bottom right, #cb5eee, #4be1ec);
            "
         >
            <v-card-text class="font-weight-black" style="font-size: 30px"
               >Total pedidos</v-card-text
            >
            <v-card-text class="font-weight-bold" style="font-size: 25px">{{
               cantidad_pedidos
            }}</v-card-text>
         </v-card>
         <v-spacer></v-spacer>
         <div style="margin-top: 40px">
            <v-btn elevation="4" class="mr-5">pedidos nuevos</v-btn>
            <v-btn elevation="4" class="mr-3" to="Historial">Historial</v-btn>
         </div>
      </v-container>

      <v-simple-table class="elevation-5">
         <thead class="grey lighten-2">
            <tr class="text-uppercase font-weight-bold">
               <th class="text-center" style="font-size: 15px">Nro</th>
               <th class="text-center" style="font-size: 15px">
                  Nombre cliente
               </th>
               <th class="text-center" style="font-size: 15px">
                  Numero celular
               </th>
               <th class="text-center" style="font-size: 15px">Fecha</th>
               <th class="text-center" style="font-size: 15px">Hora</th>
               <th class="text-center" style="font-size: 15px">Total</th>
               <th class="text-center" style="font-size: 15px">Ubicacion</th>
               <th class="text-center" style="font-size: 15px">Estado</th>
               <th class="text-center" style="font-size: 15px"></th>
            </tr>
         </thead>
         <tbody>
            <tr
               v-for="(item, index) in pedido"
               :key="item.id"
               class="text-center"
               style="font-size: 20px"
            >
               <td># {{ item.nro }}</td>
               <td style="font-weight: bold">{{ item.nombre_cliente }}</td>
               <td>
                  {{ item.numero_cliente }}
               </td>
               <td>{{ item.fecha }}</td>
               <td>{{ item.hora }}</td>
               <td>Bs. {{ item.costo_Total }}</td>
               <td>{{ item.Ubicacion }}</td>
               <td>
                  <v-chip
                     v-if="item.estado === 'esperando'"
                     small
                     class="grey lighten-2 font-italic"
                     @click="item.estado = 'en camino'"
                     >{{ item.estado }}</v-chip
                  >
                  <v-chip
                     v-if="item.estado === 'en camino'"
                     small
                     class="amber font-italic"
                     @click="item.estado = 'entregado'"
                     >{{ item.estado }}</v-chip
                  >
                  <v-chip
                     v-if="item.estado === 'entregado'"
                     small
                     class="light-green accent-4 font-italic"
                     @click="item.estado = 'esperando'"
                     >{{ item.estado }}</v-chip
                  >
               </td>
               <td>
                  <v-btn elevation="2" fab small @click="deletePedido(index)">
                     <v-icon color="error">fas fa-trash-alt</v-icon>
                  </v-btn>

                  <v-btn
                     elevation="2"
                     class="ml-2"
                     fab
                     small
                     @click="verProductos(index)"
                  >
                     <v-icon color="blue-grey darken-2"
                        >fas fa-info-circle</v-icon
                     >
                  </v-btn>
               </td>
            </tr>
         </tbody>
      </v-simple-table>
      <v-dialog v-model="dialog" max-width="600px">
         <v-card>
            <v-card-title class="justify-center">productos</v-card-title>
            <v-card-text>
               <v-simple-table dense>
                  <thead class="grey lighten-2">
                     <tr class="text-uppercase font-weight-bold">
                        <th class="text-center" style="font-size: 15px">
                           producto
                        </th>
                        <th class="text-center" style="font-size: 15px">
                           tamaño
                        </th>
                        <th class="text-center" style="font-size: 15px">
                           cantidad
                        </th>
                        <th class="text-center" style="font-size: 15px">
                           subtotal
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr
                        v-for="(item, index) in productos"
                        :key="item.id"
                        class="text-center"
                        style="font-size: 20px"
                        @click="verProductos(index)"
                     >
                        <td># {{ item.nombre }}</td>
                        <td>{{ item.tamano }}</td>
                        <td>
                           {{ item.cantidad }}
                        </td>
                        <td>
                           {{ item.sub_Total }}
                        </td>
                     </tr>
                  </tbody>
               </v-simple-table>
            </v-card-text>
            <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn color="blue darken" @click="dialog = false">
                  cerrar
               </v-btn>
            </v-card-actions>
         </v-card>
      </v-dialog>
   </v-container>
</template>
<script>
import Navigation from "../elementos/nav_bar";

import axios from "axios";
export default {
   name: "ListaPedidos",
   components: {
      Navigation
   },
   methods: {
      verProductos(index) {
         //this.identificador=index;
         this.productos = this.pedido[index].lista_pedidos;
         this.dialog = true;
      },
      obtenerProductos() {
         axios
            .get("http://localhost:8080/api/pedido")
            .then(r => {
               this.pedido = r.data || JSON.j;
               this.cantidad_pedidos = this.pedido.length;
            })
            .catch(function(error) {
               console.log(error);
            });
      }
   },
   mounted() {
      this.obtenerProductos();
   },
   data() {
      return {
         cantidad_pedidos: null,
         productos: null,
         dialog: false,
         identificador: null,
         pedido: []
      };
   }
};
</script>