<script>

export default {
  name: 'AppHeader',
}

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Boolfolio</a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <router-link class="nav-link" :class="$route.name == 'home' ? 'active' : ''" :to="{name: 'home'}">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link"  :class="$route.name == 'projectList' ? 'active' : ''" :to="{name: 'projectList'}">Tutti i progetti</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link"  :class="$route.name == 'about' ? 'active' : ''" :to="{name: 'about'}">Chi sono</router-link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">

  // .router-link-active {
  //   font-weight: bold;
  //   color: white;
  // }

</style>