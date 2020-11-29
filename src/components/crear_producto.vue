<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ml-15"
            x-large
            fab
            dark
            color="indigo"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>

          <!--v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn-->
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Añadir un producto</span>
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
import axios from "axios";
export default {
  name: "Crear",

  data: () => ({
    dialog: false,
  }),
  methods: {
    guardarArticulo() {
      var router = this.$router;
      const formData = new FormData();
      formData.append("descripcion", this.articulo.descripcion);
      formData.append("precio", this.articulo.precio);
      formData.append("stock", this.articulo.stock);
      axios
        .post("http://localhost/apirest/articulos", formData)
        .then(() => {
          router.push("/articulos");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>