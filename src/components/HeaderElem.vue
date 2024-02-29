<template>

  <header>
    <RouterLink to="/"><button>Recipes</button></RouterLink>
    <nav>
      <RouterLink to="/"><button>All Recipes</button></RouterLink>
      <RouterLink to="/favorites"><button>Favorites</button></RouterLink>
    </nav>
  </header>

</template>


<script setup>
import {RouterLink} from 'vue-router';

</script>

<style>
  header {
    height: 158px;
    background-color: #FFA032;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
  }
  header button {
    font-size: 48px;
    font-weight: 400;
    line-height: 58px;
    background-color: #FF4F04;
    border: none;
    padding: 24px 55px 30px 55px;
    border-radius: 25px;
    cursor: pointer;
  }
  nav {
    display: flex;
    gap: 46px;
  }
  nav button {
    background-color: #FF4F04;
    border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    padding: 14px 32px 15px 32px;
    border-radius: 25px;
    cursor: pointer;
  }


</style>