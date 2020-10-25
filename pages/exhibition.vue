<template> 
  <div class="container">
    <h1 >
    {{pictureOfTheDay.title}}
    </h1>
    <p>{{pictureOfTheDay.explanation}}</p>
    <img :src="pictureOfTheDay.url" :title="pictureOfTheDay.title">
    
  </div>
</template>


<script>
import { mapState } from "vuex"

  export default{
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