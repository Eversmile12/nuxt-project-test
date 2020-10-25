<template>
    <div>
        <h1>{{count}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: "Here is my message"
        }
    },
    computed:{
        count(){
            return this.$store.state.count;
        }
    }
}
</script>

<style scoped>

</style>