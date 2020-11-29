<template>
  <v-container>
    <v-card class="mx-auto" max-width="400" tile>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Single-line item</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Two-line item</v-list-item-title>
          <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>Three-line item</v-list-item-title>
          <v-list-item-subtitle>
            Secondary line text Lorem ipsum dolor sit amet,
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            consectetur adipiscing elit.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <!--a> Diaologo para eliminar<a-->

    <v-icon color="red" v-bind="attrs" @click.stop="dialog = true"
      >fas fa-trash-alt</v-icon
    >
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-actions>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="error" text @click="confirmarBorrado(id)">
            <a @click="snack = true">Aceptar</a>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--a> mensaje de borrado exitoso<a-->
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
export default {
  name: "Contact",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>