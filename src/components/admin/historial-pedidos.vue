<template app>
    
        <v-container >
            
                <Navigation context='admin'></Navigation>
        <div  >
                <v-btn to="pedidosAdmin">Volver</v-btn>
            </div>
        <v-row class="mb-3 d-flex justify-center">
            <div class="d-flex grey--text text--darken-3">
                <h1 class=" font-weight-bold ">Historial</h1>
            </div>
        </v-row>




        <v-simple-table dense  class="elevation-5 fuente" >
                <thead  class="grey lighten-2" >
                    <tr class="text-uppercase font-weight-bold" >
                        <th class="text-center" style="font-size:17px;">Nro</th>
                        <th class="text-center" style="font-size:17px;">Nombre cliente</th>
                        <th class="text-center" style="font-size:17px;">Numero celular</th>
                        <th class="text-center" style="font-size:17px;">Fecha</th>
                        <th class="text-center" style="font-size:17px;">Hora</th>
                        <th class="text-center" style="font-size:17px;">Total</th>
                        <th class="text-center" style="font-size:17px;">Ubicacion</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="(item) in pedido" :key="item.id" class="text-center" style="font-size:20px; ">
                        <td ># {{ item.nro }}</td>
                        <td>{{ item.nombre_cliente }}</td>
                        <td>
                            {{ item.numero_cliente }}
                        </td>
                        <td>{{ item.fecha }}</td>
                        <td>{{item.hora}}</td>
                        <td>Bs. {{item.costo_Total}}</td>
                        <td>{{item.Ubicacion}}</td>
                        
                    </tr>
                </tbody>

        </v-simple-table>
    </v-container>
</template>
<script>
import Navigation from '../elementos/nav_bar.vue'
export default {
   components: { Navigation },

    name:"Historial",
    data(){
        return{
            pedido:[{
                nro:1,
                nombre_cliente:"Juan alberto",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"esperando",
                lista_pedidos:[
                    {                
                        "nombre": "Pizza",
                        "tamano": "Mediano",
                        "precio": 100,
                        "cantidad": 10,
                        "sub_Total": 1000
                    },
                    {        
                        "nombre": "Sopa",
                        "tamano": "Completo",
                        "precio": 12,
                        "cantidad": 1,
                        "sub_Total": 12

                    },
                    {   "nombre": "CocaCola",
                        "tamano": "Mediano",
                        "precio": 10,
                        "cantidad": 10,
                        "sub_Total": 100},
                ],
                costo_Total:312,
                Ubicacion:""
            },
            {
                nro:2,
                nombre_cliente:"Magnolia",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"en camino",
                costo_Total:1213,
                Ubicacion:""
            },
            {
                nro:3,
                nombre_cliente:"Clara",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"esperando",
                costo_Total:232,
                Ubicacion:""
            },
            {
                nro:4,
                nombre_cliente:"Julian",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"entregado",
                costo_Total:445,
                Ubicacion:""
            },
                        {
                nro:2,
                nombre_cliente:"Magnolia",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"en camino",
                costo_Total:1213,
                Ubicacion:""
            },
            {
                nro:3,
                nombre_cliente:"Clara",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"esperando",
                costo_Total:232,
                Ubicacion:""
            },
            {
                nro:4,
                nombre_cliente:"Julian",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"entregado",
                costo_Total:445,
                Ubicacion:""
            },
                        {
                nro:2,
                nombre_cliente:"Magnolia",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"en camino",
                costo_Total:1213,
                Ubicacion:""
            },
            {
                nro:3,
                nombre_cliente:"Clara",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"esperando",
                costo_Total:232,
                Ubicacion:""
            },
            {
                nro:4,
                nombre_cliente:"Julian",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"entregado",
                costo_Total:445,
                Ubicacion:""
            },
                        {
                nro:2,
                nombre_cliente:"Magnolia",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"entregado",
                costo_Total:1213,
                Ubicacion:""
            },
            {
                nro:3,
                nombre_cliente:"Clara",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"entregado",
                costo_Total:232,
                Ubicacion:""
            },
            {
                nro:4,
                nombre_cliente:"Julian",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"entregado",
                costo_Total:445,
                Ubicacion:""
            },
                                    {
                nro:2,
                nombre_cliente:"Magnolia",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"entregado",
                costo_Total:1213,
                Ubicacion:""
            },
            {
                nro:3,
                nombre_cliente:"Clara",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"entregado",
                costo_Total:232,
                Ubicacion:""
            },
            {
                nro:4,
                nombre_cliente:"Julian",
                numero_cliente:"78443236",
                fecha:"26-01-21",
                hora:"09:22:41",
                estado:"entregado",
                costo_Total:445,
                Ubicacion:""
            },
            ]
        }
    }
}
</script>
<style>
    .fuente{
        font-family: 'Courier New', Courier;
        font-size: 15px;
    }

</style>