<template lang="pug">
li.projects__grid-item
  img(:src="getAbsoluteImgPath").projects__grid-item-photo
  .projects__grid-item-content
    .projects__grid-item-title {{project.title}}
    .projects__grid-item-descr {{project.description}}
    a.projects__grid-item-link {{project.link}}
    ul.projects__item-content-tags
      li(v-for="tag in tagsArray").projects__item-content-tags-item {{tag}}
    .projects__grid-item-controls
      .controls-wrap
        button(type="button" @click="editCurrentProject").controls-edit Править
      .projects__grid-item-controls-wrap
        button(type="button" @click="deleteCurrentProject").controls-del Удалить

</template>

<script>
import requests  from "../../requests.js"
import {mapActions, mapState, mapMutations} from "vuex"

export default {
  data() {
    return {
      tagsString: this.project.techs,
      tagsArray: [],
    }
  },
  props: {
    project: Object
  },
  computed: {
    getAbsoluteImgPath() {
      var photo = this.project.photo
      const baseUrl = requests.defaults.baseURL;
      return `${baseUrl}/${photo}`;
    },
  },
  watch: {
    tagsString : function(val) {
      console.log('lol')
    }
  },
  methods: {
    ...mapActions('projects', ['deleteProject']),
    ...mapMutations("projects", ["SET_CURRENT_PROJECT"]),
    deleteCurrentProject() {
      this.deleteProject(this.project.id);
    },
    editCurrentProject() {
      this.SET_CURRENT_PROJECT(this.project.id);
      this.splitTags();
      this.$emit("editProject");
    },
    splitTags() {
      this.tagsArray = this.project.techs.split(',')
    }
  },
  created() {
    this.splitTags();
  }
}
</script>

<style lang="pcss">
@import "normalize.css";
@import url('../../../styles/mixins');

.projects__grid-item {
  min-height: 550px;
  background-color: #fff;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
}

.projects__grid-item-photo {
  width: 100%;
  object-fit: cover;
  max-height: 220px;
}

.projects__grid-item-content {
  padding: 20px;
}

.projects__grid-item-title {
  margin-top: 30px;
  font-size: 18px;
  font-weight: 700;
}

.projects__grid-item-descr {
  margin-top: 20px;
  margin-bottom: 20px;
}

.projects__grid-item-link {
  color: #383bcf;
  font-size: 16px;
  font-weight: 400;
}

.projects__item-content-tags {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
}

.projects__item-content-tags-item {
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 15px;
  background-color: #f4f4f4;
    &:first-child {
      margin-left: 0;
    }
}

.projects__item-content-tags-item-del {
  margin-left: 5px;
  width: 11px;
  height: 11px;
  background: svg-load(
          "remove.svg",
          fill=rgba(#000, 1),
          width=9px,
          height=12px
        ) center no-repeat;
}

.projects__grid-item-controls {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

.controls-wrap {
  display: flex;
  align-items: center;
}

.controls-edit {
  position: relative;
  background-color: transparent;

  &::after {
    content: "";
    position: absolute;
    margin-left: 10px;
    width: 18px;
    height: 18px;
    background: svg-load(
      "pencil.svg",
      fill=rgba(#383bcf, 1),
      width=17px,
      height=17px
) center no-repeat;
  }
}

.controls-del {
  position: relative;
  background: transparent;
  margin-right: 18px;

  &::after {
    content: "";
    position: absolute;
    margin-left: 10px;
    width: 18px;
    height: 18px;
    background: svg-load(
      "remove.svg",
      fill=rgba(#c92e2e, 1),
      width=17px,
      height=17px
) center no-repeat;
  }
}

</style>