<script setup>
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <a class="navbar-brand" href="#"><img alt="Brand" src="../assets/nav.png" class="img-responsive" /></a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item active"><RouterLink class="nav-link" to="/">Accueil</RouterLink></li>
          <li class="nav-item active"><RouterLink class="nav-link" :to="{name:'profil'}">Profil</RouterLink></li>
        </ul>

      </div>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <RouterLink class="nav-link btn btn-primary" :to="{name:'connexion'}">Connexion</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link btn btn-success" :to="{name:'inscription'}">Inscription</RouterLink>
        </li>
      </ul>
    </nav>
</template>

<style>
.img-responsive{
  width:80px;
  height:50px;
}
</style>