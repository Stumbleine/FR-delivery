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
      <v-btn
        :to="{ name: 'Crear' }"
        class="ml-15"
        x-large
        fab
        dark
        color="indigo"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <Tarjeta />
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="400">
      <v-card-title> ¿Esta seguro de eliminar este producto? </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="dialog = false">
          Cancelar
        </v-btn>
        <v-btn color="error" text @click="confirmarBorrado(id)">
          <a @click="snack = true">Aceptar</a>
        </v-btn>
      </v-card-actions>
    </v-dialog>

    <v-snackbar v-model="snack"
      >{{ textSnack }}
      <template v-slot:action="{ attrs }">
        <v-btn color="success" text v-bind="attrs" @click="snackbar = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import Tarjeta from "./card_product";
export default {
  name: "listaProductos",
  components: {
    Tarjeta,
  },

  data: () => ({}),
};
</script>
<style lang="sass">
body
  background-color: #8C9EFF
span
  font-size: 20px
</style>