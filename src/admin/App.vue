<template lang="pug">
  .maincontent
      app-header
      app-nav
      router-view
</template>

<script> 
  import appHeader from './components/appHeader';
  import appNav from './components/appNav';
  import about from './components/about';
  import appProjects from './components/appProjects';
  import feedback from './components/feedback';
  import login from './components/login';

  export default {
      components: {
        appHeader,
        appNav,
        about,
        appProjects,
        feedback,
        login
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
</style>