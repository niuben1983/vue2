<template>
    <div id="app">

        <div class="tab">

            <router-link :to="{ path: '/vuex/state'}">STATE</router-link>
            <router-link :to="{ path: '/vuex/getters'}">GETTERS</router-link>
            <router-link :to="{ path: '/vuex/mutations'}">MUTATIONS</router-link>
            <router-link :to="{ path: '/vuex/action'}">ACTION</router-link>

        </div>
        <div class="tab">

            <router-link :to="{ name: 'axios', params: { userId: 123 }}">AXIOS</router-link>

            <router-link :to="{ name: 'axiosAll', query: { userId: 123, page: 34 }}">AXIOSALL</router-link>

            <router-link :to="{ name: 'props'}">Pros</router-link>

        </div>

        <div>$ON {{ value }}</div>

        <router-view/>

    </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "app",

  data() {
    return {
      value: 0
    };
  },

  modules: {
    // receive(value){
    //     this.value = value;
    // }
  },

  created() {
    this.$root.$on("receive", res => {
      this.value = res;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  color: #2c3e50;

  margin-top: 60px;
}
</style>
