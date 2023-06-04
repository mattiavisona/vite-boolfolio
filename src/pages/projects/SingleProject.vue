<script>
import axios from 'axios';

export default {
  name: 'SingleProject',

  data() {
    return {

      projectSlug: this.$route.params.slug,

      project: {},

      apiSuccess: false,
      isLoading: true,

    }
  },

  mounted() {

    const apiUrl = 'http://127.0.0.1:8000/api/projects/' + this.projectSlug;

    axios.get(apiUrl).then(response => {
      this.isLoading = false;
      this.apiSuccess= response.data.success;
      
      console.log(response);
      this.project = response.data.project;

      document.title = 'Boolfolio - ' + this.project.title;
    });

    
  },  
}

</script>

<template>
  <div v-if="isLoading" class="text-center py-5">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else>
    <div v-if="apiSuccess">
      <div class="cover-image text-center">
        <img :src="'http://127.0.0.1:8000/storage/' + project.cover_image" alt="">
      </div>

      <h1>{{ project.title }}</h1>
      <h4>
        {{ project.type?.name }}
      </h4>
      <div id="tags">
        <span v-for="technology in project.technologies" class="badge rounded-pill text-bg-secondary">{{ technology.name }}</span>
      </div>
      <hr>
      <p>
        {{ project.description  }}
      </p>

    </div>
    <div v-else>

      <div class="alert alert-danger">
        Nessun post trovato
      </div>

    </div>
  </div>

  

</template>

<style lang="scss">
  
  #tags {
    display: flex;
    gap: .8em;
  }
</style>