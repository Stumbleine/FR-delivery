<template>
    <div>
        <v-card width="500px" height="330px" class="mx-auto mt-10" elevation="8" color="indigo lighten-5">
            <form>
                <v-card-title class="justify-center">
                    <span class="headline">Iniciar sesion como administrador</span>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Usuario admin " required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Contraseña*" type="password" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn elevation="5" class="mr-3" color="primary" type="submit" width="120">Inciar</v-btn>
                    <v-btn elevation="5" color="blue-grey lighten-3" @click="clear" width="120">Cancelar</v-btn>
                </v-card-actions>
            </form>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "Login",
};
</script>

<style lang="scss" scoped>
</style>