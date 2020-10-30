import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(axios)
Vue.use(Vuex)
const Plugin = 222
export default new Vuex.Store({
  state: {
    post: [],
    postapi: []

  },
  mutations: {
    SET_POST: (state, datapost) => {
      state.post.push(datapost)
    },
    ADDPOSTPI: (state, sad) => {
      state.postapi.push(sad)
    }
  },
  actions: {
    GET_FROM_PAGE({commit}, datapost) {
      
      commit('SET_POST', datapost)
    },
  
    GET_API_AXI({commit}){
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((datas) => {
        const sad = datas.data
       
       console.log(sad)
      
      commit('ADDPOSTPI', sad)
    })
    }
  },
  modules: {
  },
  getters: {
    GET_POST(state) {
      return state.post
    
  }}
})
