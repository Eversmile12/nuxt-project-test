<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <nuxt-link exact to="/" class="navbar-brand" >That's a platform</nuxt-link>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <nuxt-link class="nav-link" exact to="/">Home</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/exhibition">Exhibit</nuxt-link>
                </li>
                    
                    
                
            </ul>
            <cart-Snippet></cart-Snippet>
         </nav>
    </div>
</template>


<script>
import cartSnippet from "../components/cartSnippet.vue"

    export default {
        
        components:{
            cartSnippet
        },
        computed:{
            cartTotal(){
                return this.$store.state.totalItems
            }
        }
    }
</script>


<style scoped>
    div {
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 5vw;
        align-content: center;
    }
    ul{
        padding-left: 0;
    }
  

</style>