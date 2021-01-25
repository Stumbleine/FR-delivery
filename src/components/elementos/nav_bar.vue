<template>
            <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <span id="res" class="mr-1 display-1">Restaurante</span>
                <span id="denny" class="mr-2">Denny's</span>
            </div>

            <v-spacer></v-spacer>

            <v-btn  text class="mr-5">
                
                    <v-badge
                        color="red"
                        :content="badgeCount"
                    >
                    pedidos
                    </v-badge>
            </v-btn>
        </v-app-bar>
</template> 
<script>
import { mapState } from 'vuex'
export default {
    name:"Navigation",
    computed:{
        ...mapState(['badgeCount'])
    }
}
</script>