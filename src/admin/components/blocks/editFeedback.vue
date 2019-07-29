<template lang="pug">
.feedback__item-edit
  .feedback__item-edit-row Новый отзыв
  form.feedback__item-edit-content
    .feedback__item-edit-photo
      .feedback__item-edit-avatar(:style="{ backgroundImage : avatarPreview, backgroundSize : '100%' }")
      .feedback__item-edit-avatar-add Добавить фото
      input(type="file" accept="image/jpeg" @change="renderFile").feedback__item-edit-avatar-load
    label.feedback__item-edit-label
      .feedback__item-edit-label-title Имя автора
      input(type="text" v-model="currentFeedback.author").feedback__item-edit-input
    label.feedback__item-edit-label
      .feedback__item-edit-label-title Титул автора
      input(type="text" v-model="currentFeedback.occ").feedback__item-edit-input
    label.feedback__item-edit-descr
      .feedback__item-edit-label-title Отзыв
      textarea(name="feedback" v-model="currentFeedback.text").feedback__item-edit-textarea
  .feedback__item-edit-btn-wrap
    button(type="button" @click="$emit('cancelEditItem')").feedback__item-edit-btn-cancel Отмена
    button(type="button" @click="editCurrentFeedback").feedback__item-edit-btn-save Загрузить

</template>

<script>
import {mapActions, mapState} from "vuex"


export default {
  data() {
    return {
      photoForRender: "",
      renderedPhoto: "",
      editedFeedback: ""
    }
  },
  props: {
 
  },
  computed: {
    ...mapState("feedbacks", {
      currentFeedback: state => state.currentFeedback
    }),
    avatarPreview() {
      return `url(${this.renderedPhoto})`;
    }
  },
  components: {

  },
  methods: {
    renderFile(e) {
      const file = e.target.files[0];
      this.photoForRender = file;
      this.currentFeedback.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onloadend  = () => {
          console.log(reader.result);
          this.renderedPhoto = reader.result;
          //- this.getAbsoluteImgPath(reader.result);
        }

      } catch (error) {
        console.log(error.message)
      }
    },
    ...mapActions('feedbacks', ['editFeedback']),
    async editCurrentFeedback() {
      try {
        console.log(this.currentFeedback)
        this.editFeedback(this.currentFeedback)
        this.$emit('cancelEditItem');
      } catch (error) {

      }
    }
  },
  created() {
    console.log(this.currentFeedback)
  }
}
</script>

