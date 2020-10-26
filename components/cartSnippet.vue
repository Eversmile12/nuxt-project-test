<template>
    <div class="cart-snippet dropdown">
        <p> {{cartCount}}</p>
        <div class="dropdown-content dropdown-item">
            <ul v-for="a in getItemsInCart">
                <li >
                    <p class="exTitle">{{a.exhibit}}</p>
                    <p class="quantity"> {{a.quantity}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import { mapState } from 'vuex'


export default{

    computed:{
        getItemsInCart(){
            console.log('running cart count');
            return this.$store.state.cart
        },

        cartCount(){
            console.log('running total items');
            return this.$store.state.totalItems
        }
    }

  
    
}


</script>

<style scoped>
    .cart-snippet{
        position: relative;
        display: inline-block;
        width: auto;
        height: auto;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 190px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .quantity{
        display: inline-block;
    }

    .exTitle{
        display: inline-block
    }
</style>
