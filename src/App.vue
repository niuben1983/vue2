<template>
    <div id="app">
    
        <div>$ON {{ value }}</div>
    
        <router-view/>
    
    </div>
</template>

<script>
import Vue from "vue";
    export default {
    
        name: 'app',
        data() {
            return {
                value: 0
            }
        },
        modules: {
            // receive(value){
            //     this.value = value;
            // }
        },
        created () {
            this.$root.$on('receive', res => {
                this.value = res;
            })
        }
    }
</script>

<style>
    #app {
    
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    
        -webkit-font-smoothing: antialiased;
    
        -moz-osx-font-smoothing: grayscale;
    
        text-align: center;
    
        color: #2c3e50;
    
        margin-top: 60px;
    
    }
</style>
