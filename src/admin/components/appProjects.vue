<template lang="pug">
section.projects
  .container
    h3.projects__title Блок «Работы»
    
    projectsGrid
</template>

<script>
export default {
  components: {
    projectsGrid: () => import('./blocks/projectsGrid.vue'),
  }
}
</script>


<style lang="postcss" scoped>
@import "normalize.css";
@import url('../../styles/mixins');


.container {
  max-width: 1200px;
}

.projects {
  padding-top: 60px;
  padding-bottom: 30px;
  background-color: #f8f9fe;
}

.projects__title {
  font-size: 21px;
  font-weight: 700;
}





</style>