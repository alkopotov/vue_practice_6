<template>
  <h1>Favorites ({{favoriteRecipes.getNumberOfActual}})</h1>
  <filter-elem></filter-elem>
  <main class="favorites_list">
    <div v-for="recipe in favoriteRecipes.getActual" :key="recipe.id" class="favorite_item">
      <img :src="recipe.image" :alt="recipe.name + 'picture'">
      <div class="favorite_details">
        <div class="favorite_description">
          <h2>{{recipe.name}}</h2>
          <p>Difficulty: {{ recipe.difficulty }}</p>
          <p>Cuisine: {{ recipe.cuisine }}</p>
        </div>
        <div class="buttons_list">
          <button 
            :class="recipe.watched ? 'watched': 'watched unwatched'"
            @click="favoriteRecipes.switchWatched(recipe.id)"
          >{{recipe.watched ? 'Watched' : 'Unwatched'}}</button>
          <button
            class="remove_button" 
            @click="favoriteRecipes.removeFavorite(recipe.id)"
          >Remove</button>
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>

  import { useFavoriteRecipesStore } from '@/stores/favoriteRecipes';
  import FilterElem from '../components/FilterElem.vue';

  const favoriteRecipes = useFavoriteRecipesStore();

</script>

<style>
  .favorites_list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
  }
  .favorite_details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 22px;
    width: 100%;
  }
  .favorite_item {
    display: flex;
    width: 474px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 25px;
    border: 1px solid #E4E4E4
  }
  .favorite_item img {
    height: 285px;
    width: 253px;
    object-fit: cover;
    border-radius: 25px 0 0 25px;
  }
  .favorite_description {
    padding: 20px 12px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .favorite_description h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }

  .favorite_description p {
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
  }

  .buttons_list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .watched {

  }
  .remove_button, .watched{
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    padding: 15px 36px;
    cursor: pointer;
  }

  .remove_button {
    background: #FF0404;
  }

    
  .watched {
    background: #6FFF8F;
  }

  .watched.unwatched {
    background: #85D3FF;
  }
</style>