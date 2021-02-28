<template >
    <v-app style="background:#f0f0f0;">


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
