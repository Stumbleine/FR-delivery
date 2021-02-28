<template>
   <div>
      <Navigation context="admin"></Navigation>
      <v-card
         width="500px"
         height="350px"
         class="mx-auto mt-10 acrylic"
         elevation="8"
      >
         <form>
            <v-card-title class="justify-center p">
               Iniciar sesion como administrador
            </v-card-title>
            <v-card-text>
               <v-row>
                  <v-col cols="12">
                     <v-text-field
                        label="Usuario admin "
                        required
                     ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                     <v-text-field
                        label="Contraseña*"
                        type="password"
                        required
                     ></v-text-field>
                  </v-col>
               </v-row>
            </v-card-text>
            <v-card-actions class="justify-center">
               <v-btn
                  elevation="5"
                  color="blue-grey lighten-3"
                  @click="clear"
                  width="120"
                  >Cancelar</v-btn
               >
               <v-btn
                  elevation="5"
                  class="mr-3"
                  color="primary"
                  type="submit"
                  width="120"
                  >ingresar</v-btn
               >
            </v-card-actions>
         </form>
      </v-card>
   </div>
</template>

<script>
import Navigation from "../elementos/nav_bar";
export default {
   name: "Login",
   components: {
      Navigation
   }
};
</script>

<style scoped>
.acrylic {
   background: #d3cce3; /* fallback for old browsers */
   background: -webkit-linear-gradient(
      to right,
      #e9e4f0,
      #d3cce3
   ); /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(
      to right,
      #e9e4f0,
      #d3cce3
   ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.p {
   font-size: 25px;
   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>