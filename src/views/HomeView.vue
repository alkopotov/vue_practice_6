
<template>
  <h1>All Recipes</h1>
  <main>
    <input-search-elem></input-search-elem>
    <all-recipes-list></all-recipes-list>
  </main>
</template>

<script setup>
import AllRecipesList from '@/components/AllRecipesList.vue';
import InputSearchElem from '@/components/InputSearchElem.vue';

</script>

<style>
  main {
    max-width: 860px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin-top: 48px;
    margin-bottom: 34px;
    font-size: 48px;
    font-weight: 400;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: center;
  }

</style>

