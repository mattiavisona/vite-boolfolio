<script>

import axios from 'axios';

import ProjectItem from './ProjectItem.vue';

  export default{
    name: 'AppMain',

    data() {
        return{

            projects: [],

            pagination: {},

            apiURL: 'http://127.0.0.1:8000/api/projects',

        }
    },

    components: {
        ProjectItem,
    },

    mounted() {
        this.getProject(this.apiURL);
    },

    methods: {
        getProject(apiURL) {
            axios.get(apiURL).then(response => {
                console.log(response.data.results);
                this.projects = response.data.results.data;

                this.pagination = response.data.results;
            });
        },
    }
  }

</script>

<template>

  <div class="container">
    <h1 class="title">MyBoolfolio</h1>


    <div class="row">
        <div v-for="project in projects" class="col-lg-4 col-md-6 mb-4">
            <ProjectItem :project="project"></ProjectItem>
        </div>
    </div>
  </div>

  <hr>

  <div class="navigation-button">
    <button v-for="link in pagination.links" 
    class="btn" 
    v-html="link.label" 
    :class="link.active ? 'btn-primary' : 'btn-outline-secondary'" 
    :disabled="link.url == null ? true : false"
    @click="getProject(link.url)"
    >
        
    </button>
  </div>



</template>

<style scoped>

    .title{
        text-align: center;
        padding: 35px 0px;

        color:rgba(206, 18, 18, 0.363)
    }

    .navigation-button{
        display: flex;
        gap: 7px;
        justify-content: center;
    }

</style>
