<template>

  <section class="allrecipes_list">
    <recipe-item v-for="recipe in allRecipes.recipes" :key="recipe.id" :recipe="recipe"></recipe-item>
  </section>

</template>

<script setup>
  import { useAllRecipesStore } from '@/stores/allRecipes';
  import RecipeItem from './RecipeItem.vue';


  import {onMounted} from 'vue'

  const allRecipes = useAllRecipesStore();

  onMounted(() => {
    allRecipes.getRecipes()
  }) 

</script>

<style>
  .allrecipes_list {
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 40px;
  }
</style>