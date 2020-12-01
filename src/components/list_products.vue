<template>
  <v-container class="mt-3">
    <v-row class="text-center" id="p-row">
      <v-col class="mb-5 d-flex grey--text text--darken-3">
        <h2 class="headline font-weight-bold">
          Lista de platos, pizzas y bebidas
        </h2>
        <v-row justify="end">
          <v-btn elevation="2" target="_blank" text class="mr-3">
            <span class="text-lowercase font-italic grey--text text--darken-3"
              >platillos</span
            >
          </v-btn>
          <v-btn elevation="2" target="_blank" text class="mr-3">
            <span class="text-lowercase font-italic grey--text text--darken-3"
              >pizzas</span
            >
          </v-btn>
          <v-btn elevation="2" target="_blank" text class="mr-3">
            <span class="text-lowercase font-italic grey--text text--darken-3"
              >bebidas</span
            >
          </v-btn>
        </v-row>
      </v-col>

      <Crear></Crear>
    </v-row>

    <v-divider></v-divider>

    <v-row no-gutters>
      <v-col
        v-for="product in products"
        :key="product"
        cols="12"
        style="background-color: green"
        sm="auto"
      >
        <Tarjeta
          v-bind:nombre="product.name"
          v-bind:descripcion="product.descrip"
          v-bind:precio="product.price"
        >
        </Tarjeta>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import axios from "axios";
import Tarjeta from "./card_product";
import Crear from "./crear_producto";
export default {
  name: "listaProductos",
  components: {
    Tarjeta,
    Crear,
  },
  data() {
    return {
      products: [
        {
          name: "pizza",
          descrip: "pequeño",
          price: 22,
        },
        {
          name: "Chicharron",
          descrip: "pequeño",
          price: 22,
        },
        {
          name: "pizza",
          descrip: "pequeño",
          price: 22,
        },
        {
          name: "pizza",
          descrip: "pequeño",
          price: 22,
        },
        {
          name: "pizza",
          descrip: "pequeño",
          price: 22,
        },
        {
          name: "pizza",
          descrip: "pequeño",
          price: 22,
        },
        {
          name: "pizza",
          descrip: "pequeño",
          price: 22,
        },
        {
          name: "pizza",
          descrip: "pequeño",
          price: 22,
        },
      ],
    };
  },
};
</script>
<style lang="sass">
body
  background-color: #8C9EFF
span
  font-size: 20px
</style>