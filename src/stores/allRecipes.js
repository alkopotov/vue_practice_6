import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const url = 'https://dummyjson.com/recipes';


export const useAllRecipesStore = defineStore('allRecipes',  {
  state: () => ({
    recipes: [],
    search: '',
  }),

  getters: {
    requestUrl() {
      return this.search === '' ? url : url + '/search?q=' + this.search;
    }
  },
  actions: {
    async getRecipes() { 
      let res = await axios.get(this.requestUrl);
      this.recipes = res.data.recipes;

    }
  }
})
