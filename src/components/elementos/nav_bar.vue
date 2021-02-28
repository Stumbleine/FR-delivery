<template>
   <div>
      <v-app-bar
         v-if="context === 'admin'"
         app
         color="primary"
         dark
         style="background: linear-gradient(to right, #4957bb, #3499ff)"
      >
         <div
            class="d-flex align-center"
            style="cursor: pointer"
            @click="redirect('admin')"
         >
            <span id="res" class="mr-1">Restaurant</span>
            <span id="denny" class="mr-5">Astronaut</span>
            <svg
               width="90"
               height="85"
               viewBox="0 0 113 49"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M21.5 36.5H3.50001C-0.500002 36 -0.5 31.5 3.5 31H24L21.5 36.5Z"
                  fill="white"
                  stroke="white"
               />
               <path
                  d="M16.6917 47.7574C16.8506 47.9247 17.0792 47.9999 17.3099 47.9996L110.605 47.9067C110.859 47.9065 111.107 47.8134 111.275 47.623C112.408 46.3378 112.408 44.6628 111.276 43.3774C111.108 43.1868 110.859 43.0937 110.605 43.0937H64.4532H17.2395C17.0524 43.0937 16.8649 43.1415 16.722 43.2623C15.5705 44.2348 15.4848 46.4872 16.6917 47.7574Z"
                  fill="white"
               />
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.5 41L107.5 41.5C106 34.5 94.5 10 69.5 7C68.5 2 67 1.5 64.5 1C61 1 59 3 58.5 7C36 9.5 22 31 20.5 41ZM95 38H101.5C98.5 28.5 89 14.8546 77.5 12C85 18 91.5 26 95 38Z"
                  fill="white"
               />
               <path
                  d="M16.6917 47.7574C16.8506 47.9247 17.0792 47.9999 17.3099 47.9996L110.605 47.9067C110.859 47.9065 111.107 47.8134 111.275 47.623C112.408 46.3378 112.408 44.6628 111.276 43.3774C111.108 43.1868 110.859 43.0937 110.605 43.0937H64.4532H17.2395C17.0524 43.0937 16.8649 43.1415 16.722 43.2623C15.5705 44.2348 15.4848 46.4872 16.6917 47.7574Z"
                  stroke="#FFFCFC"
               />
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.5 41L107.5 41.5C106 34.5 94.5 10 69.5 7C68.5 2 67 1.5 64.5 1C61 1 59 3 58.5 7C36 9.5 22 31 20.5 41ZM95 38H101.5C98.5 28.5 89 14.8546 77.5 12C85 18 91.5 26 95 38Z"
                  stroke="#FFFCFC"
               />
               <path
                  d="M27.5 25.5C24.5 25 25 21.5 27 20.5H32L27.5 25.5Z"
                  fill="white"
               />
               <path
                  d="M10.4604 21.1282C10.7694 20.6971 11.298 20.5 11.8284 20.5H19.6716C20.202 20.5 20.7238 20.7019 21.0598 21.1123C22.1666 22.4644 21.9658 23.3775 21.0844 24.6876C20.733 25.2099 20.1295 25.5 19.5 25.5H12C11.3705 25.5 10.759 25.2134 10.4462 24.6671C9.67988 23.3289 9.68463 22.2106 10.4604 21.1282Z"
                  fill="white"
               />
               <path
                  d="M27 20.5C25 21.5 24.5 25 27.5 25.5L32 20.5M27 20.5C28 20.5 31 20.5 32 20.5M27 20.5H32M12 25.5H19.5C20.1295 25.5 20.733 25.2099 21.0844 24.6876C21.9658 23.3775 22.1666 22.4644 21.0598 21.1123C20.7238 20.7019 20.202 20.5 19.6716 20.5H11.8284C11.298 20.5 10.7694 20.6971 10.4604 21.1282C9.68463 22.2106 9.67988 23.3289 10.4462 24.6671C10.759 25.2134 11.3705 25.5 12 25.5Z"
                  stroke="white"
               />
               <path
                  d="M39.5 14H22.9186C22.5561 14 22.195 13.908 21.9016 13.6951C20.0478 12.3496 20.1296 10.6823 21.8873 9.33244C22.1882 9.10136 22.5661 9 22.9455 9H50L39.5 14Z"
                  fill="white"
               />
               <path
                  d="M14 9C15.5 9 16.5 10 16.5 11.5C16.5 13 15.5 14 14 14C12.5 14 11.5 13 11.5 11.5C11.5 10 12.5 9 14 9Z"
                  fill="white"
               />
               <path
                  d="M7 43C8.5 43 9.5 44 9.5 45.5C9.5 47 8.5 48 7 48C5.5 48 4.5 47 4.5 45.5C4.5 44 5.5 43 7 43Z"
                  fill="white"
               />
               <path
                  d="M39.5 14H22.9186C22.5561 14 22.195 13.908 21.9016 13.6951C20.0478 12.3496 20.1296 10.6823 21.8873 9.33244C22.1882 9.10136 22.5661 9 22.9455 9H50L39.5 14Z"
                  stroke="white"
               />
               <path
                  d="M14 9C15.5 9 16.5 10 16.5 11.5C16.5 13 15.5 14 14 14C12.5 14 11.5 13 11.5 11.5C11.5 10 12.5 9 14 9Z"
                  stroke="white"
               />
               <path
                  d="M7 43C8.5 43 9.5 44 9.5 45.5C9.5 47 8.5 48 7 48C5.5 48 4.5 47 4.5 45.5C4.5 44 5.5 43 7 43Z"
                  stroke="white"
               />
            </svg>
         </div>

         <v-spacer></v-spacer>

         <v-btn to="pedidosAdmin" elevation="4" text class="mr-5">
            Administrar pedidos
         </v-btn>
      </v-app-bar>
      <!--a>User navigation<a-->
      <v-app-bar
         v-else
         app
         color="primary"
         dark
         style="background: linear-gradient(to right, #4957bb, #3499ff)"
      >
         <div
            class="d-flex align-center"
            style="cursor: pointer"
            @click="redirect('user')"
         >
            <span id="res" class="mr-1">Restaurant</span>
            <span id="denny" class="mr-5">Astronaut</span>
         </div>
         <svg
            width="90"
            height="85"
            viewBox="0 0 113 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M21.5 36.5H3.50001C-0.500002 36 -0.5 31.5 3.5 31H24L21.5 36.5Z"
               fill="white"
               stroke="white"
            />
            <path
               d="M16.6917 47.7574C16.8506 47.9247 17.0792 47.9999 17.3099 47.9996L110.605 47.9067C110.859 47.9065 111.107 47.8134 111.275 47.623C112.408 46.3378 112.408 44.6628 111.276 43.3774C111.108 43.1868 110.859 43.0937 110.605 43.0937H64.4532H17.2395C17.0524 43.0937 16.8649 43.1415 16.722 43.2623C15.5705 44.2348 15.4848 46.4872 16.6917 47.7574Z"
               fill="white"
            />
            <path
               fill-rule="evenodd"
               clip-rule="evenodd"
               d="M20.5 41L107.5 41.5C106 34.5 94.5 10 69.5 7C68.5 2 67 1.5 64.5 1C61 1 59 3 58.5 7C36 9.5 22 31 20.5 41ZM95 38H101.5C98.5 28.5 89 14.8546 77.5 12C85 18 91.5 26 95 38Z"
               fill="white"
            />
            <path
               d="M16.6917 47.7574C16.8506 47.9247 17.0792 47.9999 17.3099 47.9996L110.605 47.9067C110.859 47.9065 111.107 47.8134 111.275 47.623C112.408 46.3378 112.408 44.6628 111.276 43.3774C111.108 43.1868 110.859 43.0937 110.605 43.0937H64.4532H17.2395C17.0524 43.0937 16.8649 43.1415 16.722 43.2623C15.5705 44.2348 15.4848 46.4872 16.6917 47.7574Z"
               stroke="#FFFCFC"
            />
            <path
               fill-rule="evenodd"
               clip-rule="evenodd"
               d="M20.5 41L107.5 41.5C106 34.5 94.5 10 69.5 7C68.5 2 67 1.5 64.5 1C61 1 59 3 58.5 7C36 9.5 22 31 20.5 41ZM95 38H101.5C98.5 28.5 89 14.8546 77.5 12C85 18 91.5 26 95 38Z"
               stroke="#FFFCFC"
            />
            <path
               d="M27.5 25.5C24.5 25 25 21.5 27 20.5H32L27.5 25.5Z"
               fill="white"
            />
            <path
               d="M10.4604 21.1282C10.7694 20.6971 11.298 20.5 11.8284 20.5H19.6716C20.202 20.5 20.7238 20.7019 21.0598 21.1123C22.1666 22.4644 21.9658 23.3775 21.0844 24.6876C20.733 25.2099 20.1295 25.5 19.5 25.5H12C11.3705 25.5 10.759 25.2134 10.4462 24.6671C9.67988 23.3289 9.68463 22.2106 10.4604 21.1282Z"
               fill="white"
            />
            <path
               d="M27 20.5C25 21.5 24.5 25 27.5 25.5L32 20.5M27 20.5C28 20.5 31 20.5 32 20.5M27 20.5H32M12 25.5H19.5C20.1295 25.5 20.733 25.2099 21.0844 24.6876C21.9658 23.3775 22.1666 22.4644 21.0598 21.1123C20.7238 20.7019 20.202 20.5 19.6716 20.5H11.8284C11.298 20.5 10.7694 20.6971 10.4604 21.1282C9.68463 22.2106 9.67988 23.3289 10.4462 24.6671C10.759 25.2134 11.3705 25.5 12 25.5Z"
               stroke="white"
            />
            <path
               d="M39.5 14H22.9186C22.5561 14 22.195 13.908 21.9016 13.6951C20.0478 12.3496 20.1296 10.6823 21.8873 9.33244C22.1882 9.10136 22.5661 9 22.9455 9H50L39.5 14Z"
               fill="white"
            />
            <path
               d="M14 9C15.5 9 16.5 10 16.5 11.5C16.5 13 15.5 14 14 14C12.5 14 11.5 13 11.5 11.5C11.5 10 12.5 9 14 9Z"
               fill="white"
            />
            <path
               d="M7 43C8.5 43 9.5 44 9.5 45.5C9.5 47 8.5 48 7 48C5.5 48 4.5 47 4.5 45.5C4.5 44 5.5 43 7 43Z"
               fill="white"
            />
            <path
               d="M39.5 14H22.9186C22.5561 14 22.195 13.908 21.9016 13.6951C20.0478 12.3496 20.1296 10.6823 21.8873 9.33244C22.1882 9.10136 22.5661 9 22.9455 9H50L39.5 14Z"
               stroke="white"
            />
            <path
               d="M14 9C15.5 9 16.5 10 16.5 11.5C16.5 13 15.5 14 14 14C12.5 14 11.5 13 11.5 11.5C11.5 10 12.5 9 14 9Z"
               stroke="white"
            />
            <path
               d="M7 43C8.5 43 9.5 44 9.5 45.5C9.5 47 8.5 48 7 48C5.5 48 4.5 47 4.5 45.5C4.5 44 5.5 43 7 43Z"
               stroke="white"
            />
         </svg>
         <span id="anuncio" class="ml-10">¡CONTAMOS CON DELIVERY!</span>

         <v-spacer></v-spacer>

         <v-btn elevation="4" text class="mr-5" to="pedido">
            <v-badge color="red" :content="badgeCount"> pedidos </v-badge>
         </v-btn>
      </v-app-bar>
   </div>
</template> 
<script>
import { mapState } from "vuex";
export default {
   name: "Navigation",
   props: {
      context: null
   },
   computed: {
      ...mapState(["badgeCount"])
   },
   methods: {
      redirect(token) {
         const ruta = this.$route.path;
         if (token == "user") {
            if (ruta != "/") {
               this.$router.push({ path: "/" });
            }
         } else {
            if (ruta != "/admin") {
               this.$router.push({ path: "/admin" });
            }
         }
      }
   }
};
</script>
<style scoped>
#anuncio {
   font-size: 25px;
   font-weight: 1000;
   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
   animation: fluido 5s ease-in-out infinite;
   background: linear-gradient(-45deg, #ffd447, #e1ff5d, #f17957, #e1ff5d);
   background-size: 300%;
   -webkit-background-clip: text;
   background-clip: text;
   -webkit-text-fill-color: transparent;
}
@keyframes fluido {
   0% {
      background-position: 0 50%;
   }
   50% {
      background-position: 100% 50%;
   }
   100% {
      background-position: 0 50%;
   }
}
#denny {
   font-family: "Pattaya", sans-serif;
   margin-top: 5%;
   font-size: 27px;
}
#res {
   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
   font-size: 40px;
   font-weight: 500;
}
@media screen and (max-width: 800px) {
   #anuncio {
      font-size: 17px;
   }
   #res {
      font-size: 30px;
   }
   #denny {
      font-size: 20px;
   }
}
@media screen and (max-width: 641px) {
   #anuncio {
      display: none;
   }
}
@import url("https://fonts.googleapis.com/css2?family=Pattaya&display=swap");
</style>