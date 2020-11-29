<template>
  <v-container>
    <v-card class="mx-auto mt-4" max-width="300" elevation="4">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-row justify="end" class="mr-3 mb-3">
          <v-icon :to="{ name: 'Editar' }" color="white" class="mr-3"
            >fas fa-edit</v-icon
          >
          <v-icon @click.stop="dialog = true" color="red"
            >fas fa-trash-alt</v-icon
          >
        </v-row>
      </v-img>
      <v-card-title>Chicharron</v-card-title>
      <v-card-text class="font-weight-normal black--text">
        <div>Tamaño: <a class="grey--text text--darken-2"> Familiar</a></div>
        <div>PRECIO: <a class="red--text"> Bs. 56.43</a></div>
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
  </v-container>
</template>
//separacion

<script>
export default {
  name: "Tarjeta",
  data: () => ({
    absol: true,
    over: false,
    dialog: false,
    multiLine: true,
    snack: false,
    textSnack: "El producto se elimino correctamente",
  }),
};
</script>
<style lang="sass" scoped>
.icon
  cursor: pointer
</style>