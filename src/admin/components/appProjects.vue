<template lang="pug">
section.projects
  .container
    h3.projects__title Блок «Работы»
    addProject(
    v-if="addProjectMode"
    :addProjectMode="addProjectMode"
    @cancelItem = "addProjectMode = false"
    )
    editProject(
      v-if="editProjectMode"
      @cancelItem = "editProjectMode = false"
    )
    ul.projects__grid
      li.projects__grid-add
        button(type="button" @click="addProjectMode = true").add-btn
          .add-circle +
          .add-title Добавить работу
      projectsGridItem(
        v-for="project in projects"
        :project="project"
        :key="project.id"
        @editProject="editProjectMode = true"
      )
      
</template>

<script>
import {mapActions, mapState} from "vuex"

export default {
  data() {
    return {
      addProjectMode: false,
      editProjectMode: false
    }
  },
  components: {
    addProject: () => import('./blocks/addProject.vue'),
    editProject: () => import('./blocks/editProject.vue'),
    projectsGridItem: () => import('./blocks/projectsGridItem.vue'),
  },
  computed: {
    ...mapState('projects', {
      projects: state => state.projects
    }),
  },
  methods: {
    ...mapActions('projects', ['fetchProjects']),
  },
  created() {
    this.fetchProjects();
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

.projects__grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @include tablet {
    grid-template-columns: 1fr 1fr;
  }

  @include phone {
    grid-template-columns: 1fr;
  }
}

.projects__grid-add {
  width: 100%;
  min-height: 300px;

  @include phone {
    height: 100%;
  }
}

.add-btn {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.add-circle {
  width: 150px;
  height: 150px;
  color: #fff;
  font-size: 45px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center
}

.add-title {
  margin-top: 20px;
  color: #fff;
}


</style>