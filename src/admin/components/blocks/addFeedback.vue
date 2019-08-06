<template lang="pug">
.feedback__item-edit
  .feedback__item-edit-row Новый отзыв
  form.feedback__item-edit-content
    .feedback__item-edit-photo
      .feedback__item-edit-avatar(:style="{ backgroundImage : avatarPreview, backgroundSize : '100%' }")
      .feedback__item-edit-avatar-add Добавить фото
      input(type="file" accept="image/jpeg, image/png" @change="renderFile").feedback__item-edit-avatar-load
    label.feedback__item-edit-label
      .feedback__item-edit-label-title Имя автора
      input(type="text" v-model="addFeedbackData.author").feedback__item-edit-input
    label.feedback__item-edit-label
      .feedback__item-edit-label-title Титул автора
      input(type="text" v-model="addFeedbackData.occ").feedback__item-edit-input
    label.feedback__item-edit-descr
      .feedback__item-edit-label-title Отзыв
      textarea(name="feedback" v-model="addFeedbackData.text").feedback__item-edit-textarea
  .feedback__item-edit-btn-wrap
    button(type="button" @click="$emit('cancelItem')").feedback__item-edit-btn-cancel Отмена
    button(type="button" @click="addnewFeedback").feedback__item-edit-btn-save Загрузить

</template>

<script>
import {mapActions, mapState} from "vuex"


export default {
  data() {
    return {
      renderedPhoto: "",
      addFeedbackData: {
        author: "",
        photo: "",
        occ: "",
        text: ""
      }
    }
  },
  computed: {
    avatarPreview() {
      return `url(${this.renderedPhoto})`;
    }
  },
  components: {

  },
  methods: {
    renderFile(e) {
      const file = e.target.files[0];
      this.addFeedbackData.photo = file
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
    ...mapActions('feedbacks', ['addFeedback']),
    async addnewFeedback() {
      
      try {
        var reviewFormData = new FormData();
        reviewFormData.append('photo', this.addFeedbackData.photo);
        reviewFormData.append('author', this.addFeedbackData.author);
        reviewFormData.append('occ', this.addFeedbackData.occ);
        reviewFormData.append('text', this.addFeedbackData.text);
        console.log(reviewFormData);
        this.addFeedback(reviewFormData);
        this.$emit('cancelItem');
        } catch (error) {

        }
      }
    }
}
</script>

