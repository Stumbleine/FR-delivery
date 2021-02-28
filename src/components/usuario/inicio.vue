<template >
   <v-container class="xl" style="margin-bottom: 8em">
      <Navigation></Navigation>
      <div style="text-align: end">
         <a
            class="grey--text text--darken-3 text-decoration-underline font-italic"
            @click="$router.push({ path: '/loginAdmin' })"
            >iniciar sesion</a
         >
      </div>
      <v-row class="text-center" id="p-row">
         <v-col class="mb-5 d-flex grey--text text--darken-3">
            <h2 class="headline font-weight-bold">Nuestro menu</h2>
            <v-row justify="end">
               <v-btn
                  elevation="2"
                  target="_blank"
                  text
                  class="mr-3"
                  @click="filtrar('Plato Extra')"
               >
                  <span
                     class="text-lowercase font-italic grey--text text--darken-3"
                     >platillos</span
                  >
               </v-btn>
               <v-btn
                  elevation="2"
                  target="_blank"
                  text
                  class="mr-3"
                  @click="filtrar('Pizza')"
               >
                  <span
                     class="text-lowercase font-italic grey--text text--darken-3"
                     >pizzas</span
                  >
               </v-btn>
               <v-btn
                  elevation="2"
                  target="_blank"
                  text
                  class="mr-3"
                  @click="filtrar('Bebida')"
               >
                  <span
                     class="text-lowercase font-italic grey--text text--darken-3"
                     >bebidas</span
                  >
               </v-btn>
            </v-row>
         </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-row no-gutters>
         <!--v-col v-for="n in 20" :key="n" cols="12" sm="auto">
                <Producto></Producto>
            </v-col-->
         <v-col
            v-for="producto in productos"
            :key="producto.id"
            cols="12"
            sm="auto"
         >
            <Carta
               v-if="producto.estado === true"
               v-bind:id="producto.id"
               v-bind:nombre="producto.nombre"
               v-bind:tamano="producto.tamano"
               :image="producto.image.data"
               v-bind:precio="producto.precio"
               v-bind:tipo="producto.tipo"
            ></Carta>
         </v-col>
      </v-row>
      <v-divider></v-divider>
      <Contact></Contact>
   </v-container>
</template>


<script>
import axios from "axios";
import Contact from "../elementos/contact.vue";
import Carta from "./producto.vue";
import Navigation from "../elementos/nav_bar";

export default {
   components: { Carta, Contact, Navigation },
   name: "Inicio",
   data() {
      return {
         id: null,
         productos: null
      };
   },
   mounted() {
      this.obtenerProductos();
   },

   methods: {
      //asdasdasda
      filtrar(filtro) {
         axios
            .get("http://localhost:8080/productos/" + filtro)
            .then(r => {
               this.productos = r.data;
            })
            .catch(function(error) {
               console.log(error);
            });
      },
      obtenerProductos() {
         axios
            .get("http://localhost:8080/api/productos")
            .then(r => {
               this.productos = r.data;
            })
            .catch(function(error) {
               console.log(error);
            });
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