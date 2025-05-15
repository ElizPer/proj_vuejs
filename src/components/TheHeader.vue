<template>
    <header class="header">
        
    </header>
    <div>


        <div 
            v-for="obj in todos"
            v-bind:key="obj.id"
        
        >
            {{ obj.title }}
        </div>
        

    </div>

</template>

<script> 
    export default{
        name: 'App',
        data() {
            return {
               
            }
        }
    

    }
</script>

<style>
    .header{
        background: #000;
        color: #fff;
    }
</style>
