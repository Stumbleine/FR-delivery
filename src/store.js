import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

//let vuexStore = null;

const loadState = () => {
     try {
       const serializedState = localStorage.getItem('vue_state');
       if (serializedState === null) {
         return undefined;
       }
       return JSON.parse(serializedState);
     } catch (err) {
       return undefined;
     }
   };
    
   const saveState = (state) => {
     try {
       const serializedState = JSON.stringify(state);
       localStorage.setItem('vue_state', serializedState);
     } catch (err) {
       console.error(`Algo ha salido mal: ${err}`);
     }
   }


export default new Vuex.Store({
     state: {
          pro:{},
          lista:loadState() || [
               {nombre:'Chicharon', tamano:'Mediano', precio:123, cantidad:2},
               {nombre:'Chicharon', tamano:'Mediano', precio:123, cantidad:2},
          ]
     },
     mutations:{
          agregar(state){
               state.lista[1].cantidad ++
               //var p={nombre:'Nombre',cantidad:121, precio:12123}
               state.lista.push(state.pro);
               saveState(state.lista)
               console.log(state.lista)
          }
     },
     actions:{
          addProductAction(context){
               context.commit('agregar');
          }
     },
     getters: {

     }
})