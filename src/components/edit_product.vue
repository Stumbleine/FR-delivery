<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab small color="blue accent-3">
            <v-icon
              v-bind="attrs"
              v-on="on"
              color="white"
              @click="(ide = id), recuperar(ide)"
              >fas fa-edit</v-icon
            ></v-btn
          >
        </template>
        <v-card>
          <form v-on:submit.prevent="editar(ide)">
            <v-card-title>
              <span class="headline">Editar producto {{ ide }}</span>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-file-input
                  label="Añade un imagen del producto"
                  filled
                  ms="3"
                  prepend-icon="mdi-camera"
                  v-model="producto.image"
                  accept="image/jpeg, image/jpg"
                ></v-file-input>
                <v-col cols="12">
                  <v-text-field
                    label="Nombre del producto"
                    required
                    v-model="producto.nombre"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Descripcion o tamaño"
                    required
                    v-model="producto.tamano"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="producto.precio"
                    label="Precio"
                    type="Number"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="producto.tipo"
                    :items="['Plato extra', 'Pizza', 'Bebida']"
                    label="Tipo de producto*"
                    required
                  ></v-select>
                </v-col>
              </v-row>

              <small>Todos los campos son obligatorios</small>
            </v-card-text>
            <!--a>botones</a-->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken" text @click="dialog = false">
                cerrar
              </v-btn>
              <v-btn
                type="submit"
                color="blue darken-3"
                text
                @click="dialog = false"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </form>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Editar",
  props: {
    id: String,
  },

  data() {
    return {
      dialog: false,
      ide: "",
      producto: {
        nombre: "",
        tamano: "",
        tipo: "",
        image: undefined,
        precio: null,
      },
    };
  },
  methods: {
    recuperar(ide) {
      axios.get("http://localhost:8080/api/productos/" + ide).then((r) => {
        this.producto = r.data;
      });
    },
    editar(ide) {
      const formData = new FormData();

      formData.append("nombre", this.producto.nombre);
      formData.append("tamano", this.producto.tamano);

      formData.append("tipo", this.producto.tipo);
      formData.append("image", this.producto.image);
      formData.append("precio", this.producto.precio);
      axios
        .put("http://localhost:8080/api/productos/" + ide, formData, {
          headers: {
            "Content-Type": "form-data",
          },
        })
        .then(() => {
          this.$emit("creado");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>