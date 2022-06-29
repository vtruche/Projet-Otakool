<script setup>
import Navbar from './components/Navbar.vue';
import Acceuil from './components/Acceuil.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';

</script>
<template>
  <header>
      <Navbar/>
  </header>

  <main class="container">
    <RouterView/>
  </main>
</template>
<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
</style> 
