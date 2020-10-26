<template>
    <div class="card" style="width: 24rem">
        <img class='cart-img-top' src='https://via.placeholder.com/350  ' title='#'>
        <h5 class="card-title">{{title}}</h5>        
        <p class='card-test'>Lorem ipsum dolor sit amet</p>
        <button @click = 'addToCart' class="btn btn-primary">Add to cart</button>
    </div>
</template>

<script>
export default {
    props: ['title','description'],
    computed:{
        
    },
    methods:{
        addToCart:function(){
            let exhibit = {
                exhibit: this.title,
                quantity: 1
            }
            this.$store.commit("addToCart", exhibit)
        }
    }
}
</script>

<style scoped>
div{
   
    display: inline-block;
    margin: 3% 3%;
}
</style>