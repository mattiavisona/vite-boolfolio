<script>
import axios from 'axios';

import ProjectItem from '../../components/ProjectItem.vue';

export default {
  name: 'ProjectList',
  data() {
    return {

      apiURL: 'http://127.0.0.1:8000/api/projects?page=1',

      projects: [],

      pagination: {}, 

      types: [],
      filteredType: '',

      isLoading: true,
      projectsFound: false,
    }
  },

  components: {
    ProjectItem,
  },  

  mounted() {
    this.getProjects(this.apiURL);

    console.log('Rotta:', this.$route);
  },

  methods: {
    getProjects(apiURL) {

      apiURL = apiURL + '&type_id=' + this.filteredType;
      console.log('chiamata: ', apiURL);

      axios.get(apiURL).then(response => {
        console.log(response.data);

        if(response.data.success) {
          this.projectsFound = true;
          this.isLoading = false;
          
          this.projects = response.data.results.data;
  
          this.pagination = response.data.results;
  
          this.types = response.data.types;

        } else {
          this.isLoading = false;
          this.projectsFound = false;
        }
      });
    },

  }
}

</script>

<template>
  <form action="">
    <select class="form-select" name="type_id" id="type_id" v-model="filteredType" @change="getProjects(apiURL)">
      <option value="">Tutte</option>
      <option v-for="singleType in types" :value="singleType.id">{{ singleType.name }}</option>
    </select>
  </form>
  <hr>
  <div v-if="isLoading" class="text-center py-5">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else>
    <div v-if="projectsFound">
      <h1>I miei progetti</h1>

      <div class="row">
        <div v-for="project in projects" class="col-md-6 col-lg-4 mb-3">
          <ProjectItem :project="project"></ProjectItem>
        </div>
      </div>

      <hr>

      <div class="projects-navigation">

        <button v-for="link in pagination.links"
          class="btn" 
          :class="link.active ? 'btn-primary' : 'btn-outline-secondary'" 
          v-html="link.label" 
          :disabled="link.url == null ? true : false" 
          @click="getProjects(link.url)">
          
        </button>

      </div>
    </div>

    <div v-else>
      <div class="alert alert-warning">
        Nessun post trovato con questa categoria
      </div>
    </div>
  </div>
  
</template>

<style lang="scss">
  .projects-navigation {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
</style>