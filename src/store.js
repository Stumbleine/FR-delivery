
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

//let vuexStore = null;

const loadState = (key) => {
     if(key == 'lista'){
          try {
               const serializedState = localStorage.getItem('vue_state');
               if (serializedState === null) {
               return undefined;
               }
               return JSON.parse(serializedState);
          } catch (err) {
               return undefined;
          }
     }else{
          if(key == 'total'){
               try {
                    const stateTotal = localStorage.getItem('vue_total');
                    if (stateTotal === null) {
                    return undefined;
                    }
                    return JSON.parse(stateTotal);
               } catch (err) {
                    return undefined;
               }
          } else if(key=='badge'){
               try {
                    const stateBadge = localStorage.getItem('vue_badge');
                    if (stateBadge === null) {
                    return undefined;
                    }
                    return JSON.parse(stateBadge);
               } catch (err) {
                    return undefined;
               }
          } 
     }
   };
    
const saveState = (state,key) => {
     if(key == 'lista'){
          try {
          const serializedState = JSON.stringify(state);
          localStorage.setItem('vue_state', serializedState);
          } catch (err) {
          console.error(`Algo ha salido mal: ${err}`);
          }

     }else{
          if(key == 'total'){
               try {
                    const stateTotal = JSON.stringify(state);
                    localStorage.setItem('vue_total', stateTotal);
               } catch (err) {
                    console.error(`Algo ha salido mal para total: ${err}`);
               }
          }else if(key=='badge'){
               try {
                    const stateBadge = JSON.stringify(state);
                    localStorage.setItem('vue_badge', stateBadge);
               } catch (err) {
                    console.error(`Algo ha salido mal para badge: ${err}`);
               }
          }
     }    
   }


export default new Vuex.Store({
     state: {
          pro:{},
          lista:loadState('lista') || [],
          total:loadState('total') || 0,
          badgeCount:loadState('badge') || 0,
     },
     mutations:{
          agregar(state){

               const name=state.pro.nombre;
               const resultado = state.lista.find( item => item.nombre === name );
               if(resultado==undefined){
                    state.lista.push(state.pro);
                     state.badgeCount++;
                    saveState(state.badgeCount,'badge');
               }else{
                    let cant = resultado.cantidad;
                    cant++;
                    let sub = resultado.precio * cant;
                    const indiceElemento = state.lista.findIndex(item => item.nombre == name )
                    let newLista = [...state.lista]
                    newLista[indiceElemento] = {...newLista[indiceElemento], cantidad:cant,sub_total:sub}
                    state.lista=newLista;
               }
               saveState(state.lista,'lista')
          },
          deletePro(state,index){
               state.lista.splice(index,1)
               saveState(state.lista,'lista')
               state.badgeCount>=1?state.badgeCount-- : state.badgeCount=0 ;

               saveState(state.badgeCount,'badge');
          },
          cantidad(){},
          calcularTotal(state){
               let sumatoria=0;
               for (let index = 0; index < state.lista.length; index++) {
                    let element = state.lista[index];
                    sumatoria += element.sub_total;
               }
               state.total = sumatoria;
               saveState(state.total, 'total')
          },
          aumentar(state,index){
               let cant = state.lista[index].cantidad;
               console.log(state.lista[index] + " - " + cant)
               cant++;
               let sub = state.lista[index].precio * cant;

               let newLista = [...state.lista]
               newLista[index] = {...newLista[index], cantidad:cant,sub_total:sub}
               state.lista=newLista;
               saveState(state.lista,'lista');

          },
          disminuir(state,index){
               
               let cant = state.lista[index].cantidad;
               console.log(state.lista[index] + " - " + cant)
               if(cant>=1){
               cant--;
               let sub = state.lista[index].precio * cant;

               let newLista = [...state.lista]
               newLista[index] = {...newLista[index], cantidad:cant,sub_total:sub}
               state.lista=newLista;
               saveState(state.lista,'lista');}
          }
     },
     actions:{
          addProductAction(context){
               context.commit('agregar');
          },
          totalAction(context){
               context.commit('calcularTotal');
          },
          aumentarAction(context,index){
               context.commit('aumentar',index);
               this.dispatch('totalAction');
          },
          disminuirAction(context,index){
               context.commit('disminuir',index);
               this.dispatch('totalAction');
          }
     },
     getters: {

     }
})