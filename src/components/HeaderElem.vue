<template>

  <header>
    <RouterLink to="/"><button>Recipes</button></RouterLink>
    <RouterLink to="/"><button>All Recipes</button></RouterLink>
    <RouterLink to="/favorites"><button>Favorites</button></RouterLink>

  </header>

</template>


<script setup>
import {RouterLink} from 'vue-router';

</script>