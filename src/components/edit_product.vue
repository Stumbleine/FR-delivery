<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" color="grey darken-4"
            >fas fa-edit</v-icon
          >
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Editar producto</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-file-input
                  label="Añade un imagen del producto"
                  filled
                  ms="3"
                  prepend-icon="mdi-camera"
                ></v-file-input>
                <v-col cols="12">
                  <v-text-field
                    label="Nombre del producto"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field label="Descripcion" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Precio"
                    type="Number"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['Platpo extra', 'Pizza', 'Bebidas']"
                    label="Tipo de producto*"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
            <small>Todos los campos son obligatorios</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken" text @click="dialog = false">
              cerrar
            </v-btn>
            <v-btn color="blue darken-3" text="dialog = false"> Guardar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>


<script>
//import Axios from "axios";
export default {
  name: "Editar",
  props: {
    id: null,
  },
  /* mounted() {
    Axios.get("http://localhost/api/productos/" + this.id).then((r) => {
      this.producto = r.data;
    });
  },*/
  data() {
    return {
      dialog: false,
      producto: {
        nombre: "",
        tamano: "",
        precio: null,
        tipo: "",
      },
    };
  },
};
</script>