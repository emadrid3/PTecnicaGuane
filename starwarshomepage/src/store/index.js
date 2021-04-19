import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    avatars : [],
    avatarSelect : null
  },
  mutations: {
    changeAvatars(state, avatarsin) {
      state.avatars = avatarsin
    },
    changeAvatarSelect(state, avatarsel) {
      state.avatarSelect = avatarsel
    }
  },
  getters: {
    getAvatars: state => state.avatars,
    getAvatarSelect: state => state.avatarSelect
  },
  actions: {
    async consumeAvatars({commit}, page){

      let resultPeople = await axios.get("https://swapi.dev/api/people/?page="+page);

      for (let index = 0; index < resultPeople.data.results.length; index++) {
          
        await axios.get(resultPeople.data.results[index].homeworld).then((result) => {
          resultPeople.data.results[index].homeworld_name = result.data.name;
        });
        
      }

      commit("changeAvatars", resultPeople.data);
    },

    async consumeAvatarId({commit}, id){

      let resultPeople = await axios.get("https://swapi.dev/api/people/"+id);

      resultPeople.data.films_name = [];
      resultPeople.data.starships_name = [];
      resultPeople.data.vehicles_name = [];

      for (let index = 0; index < resultPeople.data.films.length; index++) {
          
        await axios.get(resultPeople.data.films[index]).then((result) => {
          resultPeople.data.films_name.push(result.data.title);
        });
        
      }

      for (let index = 0; index < resultPeople.data.vehicles.length; index++) {
          
        await axios.get(resultPeople.data.vehicles[index]).then((result) => {
          resultPeople.data.vehicles_name.push(result.data.name);
        });
        
      }

      for (let index = 0; index < resultPeople.data.starships.length; index++) {
          
        await axios.get(resultPeople.data.starships[index]).then((result) => {
          resultPeople.data.starships_name.push(result.data.name);
        });
        
      }

      commit("changeAvatarSelect", resultPeople.data);
    }
  },
  modules: {
  }
})
