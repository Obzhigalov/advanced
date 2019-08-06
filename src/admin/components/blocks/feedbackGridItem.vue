<template lang="pug">
li.feedback__grid-item
  .feedback__grid-item-row
    .feedback__grid-item-avatar
      img(:src="getAbsoluteImgPath").feedback__item-edit-avatar-img
    .feedback__grid-item-title-wrap
      .feedback__grid-item-title {{feedback.author}}
      .feedback__grid-item-subtitle {{feedback.occ}}
  .feedback__grid-item-descr {{feedback.text}}
  .feedback__grid-item-controls
    .controls-wrap
      button(type="button" @click="editFeedback").controls-edit Править
    .projects__grid-item-controls-wrap
      button(type="button" @click="deleteCurrentFeedback()").controls-del Удалить
</template>

<script>
import {mapActions, mapMutations} from "vuex"
import requests  from "../../requests.js"

export default {
  data() {
    return {
      photoUrl: ""
    }
  },
  props: {
    feedback: Object
  },
  computed: {
    getAbsoluteImgPath() {
      var photo = this.feedback.photo
      const baseUrl = requests.defaults.baseURL;
      return `${baseUrl}/${photo}`;
    }
  },
  components: {

  },
  methods: {
    ...mapActions('feedbacks', ['deleteFeedback']),
    ...mapMutations("feedbacks", ["SET_CURRENT_FEEDBACK"]),
    editFeedback() {
      this.SET_CURRENT_FEEDBACK(this.feedback.id);
      this.$emit("editFeedback");
    },
    deleteCurrentFeedback() {
      this.deleteFeedback(this.feedback.id)
    }
  },
  created() {
   
  }
}
</script>

