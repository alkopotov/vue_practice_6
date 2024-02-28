import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAllRecipesStore = defineStore('allRecipes',  {
  state: () => ({
    recipes: [],
    search: '',
    url: 'https://dummyjson.com/docs/recipes',
  }),

  getters: {
    requestUrl() {
      return this.search === '' ? this.url: this.url + '/search?q=' + this.search;
    }
  },
  actions: {
    async getRecipes() {
      
    }
  }
})
