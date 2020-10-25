<template>
    <div>
        <h3>{{title}}</h3>
        <p>Lorem ipsum dolor sit amet</p>
        <button @click = 'addToCart'>Add to cart</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: "Here is my message"
        }
    },
    props: ['title','description'],
    computed:{
        
    },
    methods:{
        addToCart:function(){
            let exhibit = {
                exhibit: this.title
            }
            this.$store.commit("addToCart", exhibit)
        }
    }
}
</script>

<style scoped>

</style>