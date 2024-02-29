<template>
  <label class="dif_label"> Difficulty
    <select @change="handler">
      <option v-for="(option, ind) in favoriteRecipes.getOptions" :value="option" :key="ind">{{ option }}</option>
    </select>
  </label>
</template>


<script setup>

import { useFavoriteRecipesStore } from '@/stores/favoriteRecipes';

const favoriteRecipes = useFavoriteRecipesStore();

const handler = (e) => {
  favoriteRecipes.changeDifficulty(e.target.value);
}


</script>

<style>
  .dif_label {
    margin: auto;
    width: fit-content;
    color: #414141;
    margin-bottom: 30px;
  }

  select {
    width: 162px;
    height: 46px;
    border-radius: 12px;
    padding: 10px;
    font-size: 16px;
  }
</style>