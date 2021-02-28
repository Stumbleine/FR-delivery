<template>
   <v-container>
      <Navigation context="user"></Navigation>
      <v-row class="d-flex justify-center">
         <div class="mb-5 d-flex grey--text text--darken-3">
            <h2 class="headline font-weight-bold">TU PEDIDO</h2>
         </div>
      </v-row>
      <v-divider></v-divider>
      <v-simple-table fixed-header class="elevation-5 rounded-5">
         <template v-slot:default>
            <thead tile class="indigo">
               <tr class="text-uppercase">
                  <th class="text-center" style="font-size: 15px">
                     Nombre producto
                  </th>
                  <th class="text-center" style="font-size: 15px">Cantidad</th>
                  <th class="text-center" style="font-size: 15px">
                     Precio unidad
                  </th>
                  <th class="text-center" style="font-size: 15px">Subtotal</th>
                  <th class="text-center" style="font-size: 15px"></th>
               </tr>
            </thead>
            <tbody>
               <tr
                  v-for="(item, index) in lista"
                  :key="item.id"
                  class="text-center"
               >
                  <td>{{ item.nombre }}</td>
                  <td>
                     {{ item.cantidad }}
                     <div class="ml-5 d-inline-flex">
                        <v-btn x-small @click="incrementar(index)">
                           <v-icon size="12px">fas fa-chevron-up</v-icon>
                        </v-btn>
                        <v-btn
                           x-small
                           @click="disminuir(index), calcularTotal()"
                        >
                           <v-icon size="12px">fas fa-chevron-down</v-icon>
                        </v-btn>
                     </div>
                  </td>
                  <td>{{ item.precio }}</td>
                  <td>{{ item.subtotal }}</td>
                  <td>
                     <v-btn
                        fab
                        x-small
                        @click="deletePro(index), calcularTotal()"
                     >
                        <v-icon color="error">fas fa-trash-alt</v-icon>
                     </v-btn>
                  </td>
               </tr>
            </tbody>
         </template>
      </v-simple-table>
      <!--a>fin tabla<a-->
      <v-container fluid width="100%" class="d-flex justify-end">
         <v-card width="300px" :elevation="5" class="d-flex">
            <v-card-text class="font-weight-black">TOTAL A PAGAR</v-card-text>
            <v-card-text class="font-weight-bold">Bs. {{ total }}</v-card-text>
         </v-card>
      </v-container>
      <v-divider></v-divider>
      <v-row class="d-flex justify-center">
         <div class="mt-2 d-flex grey--text text--darken-3">
            <h2 class="headline font-weight-bold">ingresa tus datos</h2>
         </div>
      </v-row>

      <v-form>
         <v-container>
            <v-row>
               <v-col cols="12" md="6">
                  <v-text-field
                     v-model="pedido.nombre_cliente"
                     label="Nombre de referencia"
                     required
                  ></v-text-field>
               </v-col>

               <v-col cols="12" md="6">
                  <v-text-field
                     v-model="pedido.numero_cliente"
                     label="Telefono o celular"
                     required
                  ></v-text-field>
               </v-col>
               <v-col>
                  <v-text-field
                     v-model="pedido.Ubicacion"
                     label="Direccion: Avenida o calle"
                     required
                  ></v-text-field>
               </v-col>
            </v-row>
            <v-card height="250" width="400" class="mx-auto text-center"
               ><v-card-title>Mapas en desarrollo</v-card-title>

               <v-icon color="indigo" style="font-size: 80px; margin-top: 35px"
                  >fas fa-globe</v-icon
               >
            </v-card>
         </v-container>

         <!--p>{{ pedido }}</p-->
         <div
            class="d-flex justify-center mt-8"
            width="100%"
            style="margin-bottom: 10em"
         >
            <v-btn
               color="primary"
               class="d-flex"
               height="50"
               @click="dates(), guardarPedido()"
               >Realizar Pedido</v-btn
            >
         </div>
      </v-form>

      <Contact></Contact>
   </v-container>
</template>


<script>
import Contact from "../elementos/contact.vue";
import { mapState, mapMutations, mapActions } from "vuex";
import Navigation from "../elementos/nav_bar";
import axios from "axios";
export default {
   components: { Contact, Navigation },
   name: "verPedido",
   computed: {
      ...mapState(["lista", "total"])
   },
   data() {
      return {
         pedido: {
            nombre_cliente: "",
            numero_cliente: "",
            fecha: null,
            hora: null,
            estado: "en camino",
            lista_pedidos: this.$store.state.lista,
            costo_Total: this.$store.state.total,
            Ubicacion: ""
         }
      };
   },
   methods: {
      ...mapMutations(["deletePro", "aumentar", "disminuir", "calcularTotal"]),
      ...mapActions(["aumentarAction"]),
      incrementar(index) {
         this.$store.dispatch("aumentarAction", index);
      },
      guardarPedido() {
         let envio = JSON.stringify(this.pedido);
         console.log(envio);
         axios
            .post("http://localhost:8080/api/pedido", envio, {
               headers: { "Content-Type": "application/json" }
            })
            .then(() => {
               console.log(this.pedido);
            })
            .catch(function(error) {
               console.log(error);
            });
      },
      dates() {
         var hoy = new Date();
         const fecha =
            hoy.getDate() +
            "-" +
            (hoy.getMonth() + 1) +
            "-" +
            hoy.getFullYear();
         const hora =
            hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
         const fechaYHora = fecha + " " + hora;

         console.log(fechaYHora);
         this.pedido.fecha = fecha;
         this.pedido.hora = hora;
      }
   }
};
</script>
<style lang="sass">
body
    background-color: #8C9EFF
span
    font-size: 20px
.contact
    width: 500px
</style>