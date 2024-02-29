<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderElem from './components/HeaderElem.vue';

</script>

<template>
  <header-elem></header-elem>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
</style>