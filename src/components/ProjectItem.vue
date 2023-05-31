<script>
export default {
    name:'ProjectItem',
    data() {
        return {

        }
    },

    props: {
        project: Object,
    },

    computed: {
        description() {
            if (this.project.description.length > 30) {

                return this.project.description.substring(0, 100) +' ... ... ';

            }else{
                return this.project.description;
            }
                
        }
    }


}
</script>

<template>
    <div class="projects">
        <div class="project-cover">
            <img class="img" src="https://1890056479.rsc.cdn77.org/rivista/immagini/2021/fn/salvador-dali-persistenza-memoria.jpg" alt="project cover">
        </div>
       <strong class="second-title">{{project.title}}</strong>

        <p>
            <em class="description">{{ description }}</em>
        </p>
       
        <div>
            Tecnologie usate: 
            <span v-for="technology in project.technologies" id="technology" class="badge rounded-pill text-bg-success">{{ technology ? technology.name : 'non presente'}}</span>
        </div>
      
    </div>
</template>

<style scoped lang="scss">

    .projects{
        border: 2px solid rgb(173, 122, 59);

        border-radius: 8px;

        
        

        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .second-title{
        color: rgba(206, 18, 18, 0.363);
        
        font-size: larger;
    }

    
    .description{
        color: rgba(173, 201, 18, 0.774);

        font-size: smaller;
        
    }

    .img{
        height: 200px;
        width: 100%;
        
        object-fit: cover;
        object-position: center;

        overflow:hidden;
    }

    #technology{
        margin: 5px;
    }
</style>