<template>
  <label> Search recipes
  <input type="text" v-model="allRecipes.search" @keydown="handler">
</label>
</template>

<script setup>
  import { useAllRecipesStore } from '@/stores/allRecipes';

  const allRecipes = useAllRecipesStore();

  const handler = (e) => {
    if (e.key === 'Enter') {
      allRecipes.getRecipes()
    }
  }

</script>

<style>
  label {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
  input {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    padding: 14px 20px;
    width: 425px;
    border-radius: 16px;
  }

</style>