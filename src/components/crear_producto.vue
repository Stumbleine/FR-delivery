<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
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
          <v-btn color="blue darken-1" text @click="dialog = false">
            cerrar
          </v-btn>
          <v-btn color="blue darken-1" @click="dialog = false"> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  name: "Crear",
  data: () => ({
    dialog: false,
  }),
};
</script>