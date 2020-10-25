<template> 
  <div class="container">
    <h1 >
    {{pictureOfTheDay.title}}
    </h1>
    <p>{{pictureOfTheDay.explanation}}</p>
    <img :src="pictureOfTheDay.url" :title="pictureOfTheDay.title">
    <blog-section></blog-section>
    
  </div>
</template>


<script>
import { mapState } from "vuex"
import blogSection from "../components/blogSection.vue"
  export default{
    components:{
      blogSection
    },
    computed:{
      ...mapState([
        "pictureOfTheDay",
      ])
    },
    mounted(){
      this.$store.dispatch("getPictureOfTheDay")
    }
  }
</script>


<style>
</style>