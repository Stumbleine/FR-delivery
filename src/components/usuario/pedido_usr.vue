<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <div class="mb-5 d-flex grey--text text--darken-3">
                <h2 class="headline font-weight-bold">TU PEDIDO</h2>
            </div>
        </v-row>
        <v-divider></v-divider>
        <v-simple-table fixed-header class="elevation-5 rounded-5">
            <template v-slot:default>
                <thead tile class="indigo">
                    <tr class="text-uppercase">
                        <th class="text-center" style="font-size:15px;">Nombre producto</th>
                        <th class="text-center" style="font-size:15px;">Cantidad</th>
                        <th class="text-center" style="font-size:15px;">Precio unidad</th>
                        <th class="text-center" style="font-size:15px;">Subtotal</th>
                        <th class="text-center" style="font-size:15px;"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of lista" :key="item.id" class="text-center">
                        <td>{{ item.nombre }}</td>
                        <td>
                            {{ item.cantidad }}
                            <div class="ml-5 d-inline-flex">
                                <v-btn x-small>
                                    <v-icon size="12px">fas fa-chevron-up</v-icon>
                                </v-btn>
                                <v-btn x-small>
                                    <v-icon size="12px">fas fa-chevron-down</v-icon>
                                </v-btn>
                            </div>
                        </td>
                        <td>{{ item.precio }}</td>
                        <td>12313</td>
                        <td>
                            <v-btn fab x-small>
                                <v-icon color="error">fas fa-trash-alt</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <!--a>fin tabla<a-->
        <v-container fluid width="100%" class="d-flex justify-end">
            <v-card width="300px" :elevation="5" class="d-flex">
                <v-card-text class="font-weight-black">TOTAL A PAGAR</v-card-text>
                <v-card-text class="font-weight-bold">Bs. 655151</v-card-text>
            </v-card>
        </v-container>
        <v-divider></v-divider>
        <v-row class="d-flex justify-center">
            <div class="mt-2 d-flex grey--text text--darken-3">
                <h2 class="headline font-weight-bold">ingresa tus datos</h2>
            </div>
        </v-row>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="firstname" label="Nombre de referencia" required></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field v-model="telefono" label="Telefono o celular" required></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>

        <div class="d-flex justify-center mt-8" width="100%" style="margin-bottom: 10em;">
            <v-btn color="primary" class="d-flex" height="50">Realizar Pedido</v-btn>
        </div>

        <Contact></Contact>
    </v-container>
</template>


<script>
import Contact from "../elementos/contact.vue";
import { mapState } from "vuex";
//import store from "../../store";
export default {
    components: { Contact },
    name: "verPedido",
    computed: {
        ...mapState(["lista"]),
    },

    data() {
        return {
            firstname: "",
            telefono: "",

            desserts: [
                {
                    name: "Cerveza Corona",
                    cantidad: 4,
                    p_unidad: 15,
                    subtotal: 60,
                },
            ],
        };
    },
};
</script>
<style lang="sass">
body
     background-color: #8C9EFF
span
     font-size: 20px
.contact
     width: 500px
</style>