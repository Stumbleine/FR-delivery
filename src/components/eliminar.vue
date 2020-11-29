<template>
  <v-container>
    <v-icon @click.stop="dialog = true" color="red">fas fa-trash-alt</v-icon>
    <!--a> Diaologo para eliminar<a-->
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
  name: "eliminar",
  data: () => ({
    dialog: false,
    snack: false,
    textSnack: "El producto se elimino correctamente",
  }),
};
</script>