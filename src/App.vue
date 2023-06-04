<script>
  import AppMain from './components/AppMain.vue';
  import AppHeader from './components/AppHeader.vue';

  

  export default {
    name: 'App',

    data() {

    },

    components: {
      AppMain,
      AppHeader,
    }
  }
</script>

<template>
  <AppHeader></AppHeader>
  <div id="page-container" class="container py-5">
    <router-view></router-view>
  </div>
</template>

<style scoped>

#page-container > div {
  height: 500px;
}

</style>