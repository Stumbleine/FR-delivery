<template>
    <v-footer padless absolute>
        <v-card width="100%" tile class="indigo darken-4 white--text d-flex">
            <v-card-text class="white--text text-center">
                <p class="text-decoration-underline font-weight-bold text-subtitle-1">Sobre nosotros</p>
                <p class>Eslogan del Restaurante</p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="white--text text-center">
                <p class="text-decoration-underline font-weight-bold text-subtitle-1">Contactanos</p>
                <p class>
                    Telefono: 84323611
                    <br />Direccion: Av. Panamericana frente al ....
                </p>
            </v-card-text>
            <v-card-text class="white--text text-center">
                <p class="text-subtitle-1">Siguenos en nuestras redes sociales</p>
                <v-btn class="mx-4 white--text" icon>
                    <v-icon size="40px">mdi-facebook</v-icon>
                </v-btn>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: "Contact",
};
</script>

<style lang="scss" scoped>
</style>