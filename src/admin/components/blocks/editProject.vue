<template lang="pug">
.projects__item
  .projects__item-row
    h4.projects__item-title Добавление работы
  .pojects__item-edit
    .pojects__item-photo
      .projects__item-photo-text Перетащите или загрузите для загрузки изображения
      //- button(type="button").pojects__item-photo-upload Загрузить
      input(type="file" accept="image/jpeg" @change='addProjectFile')
    form.projects__item-content
      label.projects__item-content-label
        .projects__item-content-label-title Название
        input(type="text" v-model="currentProject.title").projects__item-content-input
      label.projects__item-content-label Ссылка
        .projects__item-content-label-title
        input(type="text" v-model="currentProject.link").projects__item-content-input
      label.projects__item-content-label Описание
        .projects__item-content-label-title
        textarea(name="projectContent", cols="30", rows="10" v-model="currentProject.description").projects__item-content-textarea
      label.projects__item-content-label
        .projects__item-content-label-title Добавление тэгов
        input(type="text" placeholder="Введите тэги через запятую" v-model="currentProject.techs" @change="splitTags").projects__item-content-input
      ul.projects__item-content-tags
        li(v-for="tag in tagsArray").projects__item-content-tags-item {{tag}}
      .projects__item-content-btn-wrap
        button(type="button" @click="$emit('cancelItem')").projects__item-content-btn-decline Отмена
        button(type="button" @click="editCurrentProject").projects__item-content-btn-save Загрузить
</template>

<script>
import {mapActions, mapState} from "vuex"

export default {
  data() {
    return {
      tagsArray: []
    }
  },
  computed: {
    ...mapState("projects", {
      currentProject: state => state.currentProject
    }),
  },
  methods: {
    ...mapActions('projects', ['editProject']),
    async editCurrentProject() {
      try {
        this.editProject(this.currentProject)
        this.$emit('cancelItem');
      } catch (error) {

      }
    },
    addProjectFile(e) {
      console.log(event.target)
      this.currentProject.photo = e.target.files[0];
      console.log(this.currentProject.photo)
    },
    splitTags() {
      this.tagsArray = this.currentProject.techs.split(',')
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

input[type="file"] {
  margin-top: 30px;
}

.projects__item {
  margin-top: 60px;
  padding: 25px;
  background-color: #fff;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
}

.projects__item-row {
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: 2px solid silver;
}

.pojects__item-edit {
  margin-top: 40px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  
  @include tablet {
    grid-template-columns: 1fr;
  }
}

.pojects__item-photo {
  width: 100%;
  min-height: 280px;
  padding: 70px 100px;
  border: 1px dashed #a1a1a1;
  background-color: #dee4ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include phone {
    padding: 0;
  }
}

.projects__item-photo-text {
  max-width: 260px;
  text-align: center;
}

.pojects__item-photo-upload {
  width: 181px;
  height: 50px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 25px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
}

.projects__item-content {
  display: flex;
  flex-direction: column;
  color: #414c63;
}

.projects__item-content-label {
  margin-top: 20px;
}

.projects__item-content-input {
  height: 40px;
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid #414c63;
}

.projects__item-content-textarea {
  width: 100%;
  height: 150px;
  margin-top: 10px;
  resize: none;
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

.projects__item-content-btn-wrap {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.projects__item-content-btn-decline {
  background-color: transparent;
  color: #383bcf;
}

.projects__item-content-btn-save {
  width: 181px;
  height: 60px;
  margin-left: 40px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 30px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
}

</style>