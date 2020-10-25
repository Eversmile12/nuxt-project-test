<template>
    <div>
        <h2>
            {{pictureOfTheDay.title}}
        </h2>
        <p>
            {{pictureOfTheDay.explanation}}
        </p>
        <img :src='pictureOfTheDay.url' title='pictureOfTheDay.title' alt="pictureOfTheDay.title">
        
    </div>
</template>


<script>
import { mapState } from "vuex"

export default{
    computed:{
        ...mapState([
            "pictureOfTheDay"
            ])
    },
    mounted(){
        this.$store.dispatch("getPictureOfTheDay")
    }
}
</script>

<style scoped>

</style>

