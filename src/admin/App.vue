<template lang="pug">
  .maincontent
    template(v-if="$route.meta.public")
      router-view
    template(v-else-if="userIsLogged")
      app-header
      app-nav
      router-view
</template>

<script> 
  //- import appHeader from './components/appHeader';
  //- import appNav from './components/appNav';
  //- import about from './components/about';
  //- import appProjects from './components/appProjects';
  //- import feedback from './components/feedback';
  //- import login from './components/login';
import { mapState, mapActions, mapGetters } from "vuex";
  export default {
      components: {
        appHeader: () => import("./components/appHeader"),
        appNav: () => import("./components/appNav"),
        about: () => import("./components/about"),
        appProjects: () => import("./components/appProjects"),
        feedback: () => import("./components/feedback"),
        login: () => import("./components/login")
    },
    computed: {
      ...mapGetters("user", ["userIsLogged"])
    }
  }
</script>

<style lang="pcss">
@import "normalize.css";
@import url('../styles/mixins');
@import url('../styles/layout/base');

.container {
  max-width: 1200px;
}

.maincontent {
  height: 100%;
}

</style>