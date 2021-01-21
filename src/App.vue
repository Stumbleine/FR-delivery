<template >
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <span id="res" class="mr-1 display-1">Restaurante</span>
                <span id="denny" class="mr-2">Denny's</span>
            </div>

            <v-spacer></v-spacer>

            <v-btn target="_blank" text>
                <span id="ped" class="mr-2">PEDIDOS</span>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <v-fade-transition mode="out-in">
                    <router-view></router-view>
                </v-fade-transition>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data: () => ({
        //
    }),
};
</script>
<style lang="sass">
@import url("https://fonts.googleapis.com/css2?family=Pattaya&display=swap")
#denny
     font-family: "Pattaya", sans-serif
     margin-top: 5%
     font-size: 27px
#ped
     font-size: 20px
</style>