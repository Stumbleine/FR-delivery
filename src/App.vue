<template >
    <v-app>


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