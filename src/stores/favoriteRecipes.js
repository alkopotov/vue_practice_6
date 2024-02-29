import { defineStore } from "pinia";


export const useFavoriteRecipesStore = defineStore('favoriteRecipes', {

  state: ()=>({
    favorites: [],
    difficulty: 'All',
  }),

  getters: {

    getActual() {
      if (this.difficulty === 'All') return this.favorites;
      return this.favorites.filter((recipe) => recipe.difficulty === this.difficulty);
    },

    getNumberOfActual() {
      return this.getActual.length;
    },

    getOptions() {
      let options = new Set()
      options.add('All')
      this.favorites.forEach(elem => options.add(elem.difficulty))
      return  [...options].sort();
    }
  },

  actions: {
  
    addFavorite(recipe) {
      if (this.favorites.filter(elem => elem.id === recipe.id).length === 0) {
        recipe.watched = false;
        this.favorites.push(recipe);
      }
    },

    switchWatched(id) {
      this.favorites = this.favorites.map(elem => {
        if (elem.id === id) {
          elem.watched = !elem.watched;
          return elem;
        } else {
          return elem;
        }
      })
    },

    removeFavorite(id) {
      this.favorites = this.favorites.filter(elem => elem.id !== id)
    },

    changeDifficulty(value) {
      this.difficulty = value
    }
  },

  

})