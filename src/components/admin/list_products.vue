<template>
    <v-container class="mt-3">
        <Navigation context='admin'></Navigation>
        <v-row class="text-center" id="p-row">
            <v-col class="mb-5 d-flex grey--text text--darken-3">
                <h2 class="headline font-weight-bold">Lista de platos, pizzas y bebidas</h2>
                <v-row justify="end">
                    <v-btn elevation="2" target="_blank" text class="mr-3">
                        <span class="text-lowercase font-italic grey--text text--darken-3">platillos</span>
                    </v-btn>
                    <v-btn elevation="2" target="_blank" text class="mr-3">
                        <span class="text-lowercase font-italic grey--text text--darken-3">pizzas</span>
                    </v-btn>
                    <v-btn elevation="2" target="_blank" text class="mr-3">
                        <span class="text-lowercase font-italic grey--text text--darken-3">bebidas</span>
                    </v-btn>
                </v-row>
            </v-col>

            <Crear @creado="creado"></Crear>
        </v-row>

        <v-divider></v-divider>

        <v-row no-gutters>
            <v-col v-for="producto in productos" :key="producto.id" cols="12" sm="auto">
                <Tarjeta
                    @eliminado="eliminado"
                    v-bind:id="producto.id"
                    v-bind:nombre="producto.nombre"
                    v-bind:tamano="producto.tamano"
                    :image="producto.image.data"
                    v-bind:precio="producto.precio"
                    v-bind:estado="producto.estado"
                ></Tarjeta>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
import Tarjeta from "./card_product";
import Crear from "./crear_producto";
import Navigation from "../elementos/nav_bar"
export default {
    name: "listaProductos",
    components: {
        Tarjeta,
        Crear,Navigation
    },
    data() {
        return {
            id: null,
            productos: null,
        };
    },
    mounted() {
        this.obtenerProductos();
    },
    methods: {
        creado() {
            this.obtenerProductos();
        },
        eliminado() {
            this.obtenerProductos();
        },
        obtenerProductos() {
            axios
                .get("http://localhost:8080/api/productos")
                .then((r) => {
                    this.productos = r.data;
                    console.log(this.productos);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
};
</script>
<style lang="sass">
body
     background-color: #8C9EFF
span
     font-size: 20px
</style>