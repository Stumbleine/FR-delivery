<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="ml-15" x-large fab dark color="indigo" v-bind="attrs" v-on="on">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <!--a>formulario</a-->
                <v-card>
                    <form v-on:submit.prevent="guardarProducto">
                        <v-card-title>
                            <span class="headline">Añadir un producto</span>
                        </v-card-title>

                        <v-card-text>
                            <!--v-container-->
                            <v-row>
                                <v-file-input label="Añade un imagen del producto" filled ms="3" prepend-icon="mdi-camera" v-model="producto.image" accept="image/jpeg, image/jpg" required></v-file-input>
                                <!--a>campos</a-->
                                <v-col cols="12">
                                    <v-text-field v-model="producto.nombre" label="Nombre del producto" required></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <!--a>tamaño</a-->
                                    <v-text-field v-model="producto.tamano" label="Tamaño o descripcion" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <!--a>precio</a-->
                                    <v-text-field v-model="producto.precio" label="Precio" type="Number" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <!--a>tipo de producto</a-->
                                    <v-select v-model="producto.tipo" :items="['Plato extra', 'Pizza', 'Bebida']" label="Tipo de producto*"></v-select>
                                </v-col>
                            </v-row>
                            <small color="red">Todos los campos son obligatorios</small>
                        </v-card-text>
                        <!--a>botones</a-->
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken" text @click="dialog = false">cerrar</v-btn>
                            <v-btn type="submit" color="blue darken-3" text>Guardar</v-btn>
                        </v-card-actions>
                    </form>
                    <!--a>fin form</a-->
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>


<script>
//import http from "../http-common";
import axios from "axios";
export default {
    name: "Crear",

    data() {
        return {
            dialog: false,
            producto: {
                image: undefined,
                nombre: "",
                tamano: "",
                precio: null,
                tipo: "",
            },
        };
    },
    methods: {
        guardarProducto() {
            this.dialog = false;

            const formData = new FormData();

            formData.append("nombre", this.producto.nombre);
            formData.append("tamano", this.producto.tamano);

            formData.append("tipo", this.producto.tipo);
            formData.append("image", this.producto.image);
            formData.append("precio", this.producto.precio);
            formData.append("estado", true);
            axios
                .post("http://localhost:8080/api/productos", formData, {
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
        /*handleFileUpload() {
      this.producto.file = this.$refs.file.files;
    },*/
    },
};
</script>