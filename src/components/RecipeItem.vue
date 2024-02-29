<template>
  <div class="recipe_item">
    <img :src="recipe.image" :alt="recipe.name + 'picture'" class="recipe_image">
    <div class="recipe_details">
      <h2>{{recipe.name}}</h2>
      <p>Difficulty: {{ recipe.difficulty }}</p>
      <p>Cuisine: {{ recipe.cuisine }}</p>
    </div>
    <button @click="favoriteRecipes.addFavorite(recipe)">Add to favorite</button>
  </div>
</template>

<script setup>

import { useFavoriteRecipesStore } from '@/stores/favoriteRecipes';


const props = defineProps({
  recipe: Object
})

const favoriteRecipes = useFavoriteRecipesStore();


</script>

<style>
  .recipe_item img {
    width: 256px;
    height: 208px;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
  }

  .recipe_item {
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 25px;
    border: 1px solid #E4E4E4;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .recipe_details {
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 3px
  }
  .recipe_item h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
  }

  .recipe_item button {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    width: fit-content;
    align-self: center;
    background: #FF4F04;
    border: none;
    padding: 14px 32px;
    border-radius: 25px;
    cursor: pointer;

  }

</style>