<template>
    <v-container>
        <v-card class="mx-3 mt-4" max-width="300" elevation="4">
            <v-img class="white--text align-end" height="200px" :src="'data:image/jpeg;base64,' + image"></v-img>

            <v-card-title>{{ nombre }}</v-card-title>
            <v-card-text class="font-weight-normal black--text">
                <div>
                    Tamaño:
                    <a class="grey--text text--darken-2">{{ tamano }}</a>
                </div>
                <div>
                    PRECIO:
                    <a class="red--text">Bs. {{ precio }}</a>
                </div>
            </v-card-text>

            <v-card-actions>
                <v-row align="center" justify="space-around">
                    <v-btn color="primary" class="white--txt" @click="snack = true, addProducto()">Agregar</v-btn>
                </v-row>
            </v-card-actions>
        </v-card>

        <!--a> mensaje de borrado exitoso<a-->
        <v-snackbar color="success" v-model="snack">
            {{ textSnack }}
            <template v-slot:action="{ attrs }">
                <v-btn text v-bind="attrs" @click="snack = false">Cerrar</v-btn>
            </template>
        </v-snackbar>
        <!--a> fin borrado<a-->
    </v-container>
</template>


<script>
import { mapActions, mapMutations } from "vuex";
export default {
    name: "arta",
    
    props: {
        id: String,
        nombre: String,
        tamano: String,
        precio: Number,
        tipo:String,
        image: String,
    },
    data() {
        return {
            snack: false,
            textSnack: "Agregado correctamente.",
            p: {
                nombre: this.nombre,
                tamano: this.tamano,
                precio: this.precio,
                tipo: this.tipo,
                cantidad: 1,
                sub_total: this.precio,
            },
        };
    },
    methods:{
        ...mapMutations(["agregar"]),
        ...mapActions([" addProductAction"]),
        addProducto() {
            console.log(this.p);
            this.$store.state.pro = this.p;
            this.$store.dispatch("addProductAction");
            this.$store.dispatch("totalAction")
        },
    }
};
</script>
<style lang="sass" scoped>
.icon
     cursor: pointer
</style>