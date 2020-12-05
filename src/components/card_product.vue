<template>
  <v-container>
    <v-card class="mx-3 mt-4" max-width="300" elevation="4">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="'data:image/jpeg;base64,' + image"
      >
        <div class="d-flex justify-end mr-3 mb-2">
          <Editar class="mr-5"></Editar>
          <v-icon color="red" @click.stop="dialog = true"
            >fas fa-trash-alt</v-icon
          >
        </div>
      </v-img>

      <v-card-title>{{ nombre }}</v-card-title>
      <v-card-text class="font-weight-normal black--text">
        <div>
          Tamaño:
          <a class="grey--text text--darken-2"> {{ tamano }}</a>
        </div>
        <div>
          PRECIO: <a class="red--text"> Bs. {{ precio }}</a>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-row align="center" justify="space-around">
          <v-overlay :absolute="absol" :value="over">
            <v-btn color="primary" @click="over = false">
              Mostrar en el menu
            </v-btn>
          </v-overlay>
          <v-btn
            color="amber accent-4"
            class="white--txt"
            @click="over = !over"
          >
            Quitar del menu
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>

    <!--a> Diaologo para eliminar<a-->
    <v-dialog v-model="dialog" max-width="420">
      <v-card>
        <v-card-title> ¿Esta seguro de eliminar este producto? </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="error" @click="confirmarBorrado(id)">
            <span @click="snack = true">Aceptar</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--a> mensaje de borrado exitoso<a-->
    <v-snackbar color="success" v-model="snack"
      >{{ textSnack }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snack = false"> Cerrar </v-btn>
      </template>
    </v-snackbar>
    <!--a> fin borrado<a-->
  </v-container>
</template>


<script>
//import axios from "axios";
import Editar from "./edit_product";

export default {
  name: "Tarjeta",
  components: {
    Editar,
  },
  props: {
    id: null,
    nombre: String,
    tamano: String,
    precio: String,
    image: String,
  },
  data() {
    return {
      dialog: false,
      absol: true,
      over: false,
      snack: false,
      textSnack: "¡Registro Eliminado!",
    };
  },
};
</script>
<style lang="sass" scoped>
.icon
     cursor: pointer
</style>