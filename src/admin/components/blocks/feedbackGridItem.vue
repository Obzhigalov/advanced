<template lang="pug">
li.feedback__grid-item
  .feedback__grid-item-row
    .feedback__grid-item-avatar
      img(:src="getAbsoluteImgPath")
    .feedback__grid-item-title-wrap
      .feedback__grid-item-title {{feedback.author}}
      .feedback__grid-item-subtitle {{feedback.occ}}
  .feedback__grid-item-descr {{feedback.text}}
  .feedback__grid-item-controls
    .controls-wrap
      button(type="button" v-on:click="$emit('editFeedback', feedback)").controls-edit Править
    .projects__grid-item-controls-wrap
      button(type="button" @click="deleteCurrentFeedback()").controls-del Удалить
</template>

<script>
import {mapActions, mapState} from "vuex"
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
    deleteCurrentFeedback() {
      this.deleteFeedback(this.feedback.id)
    }
  },
  created() {
   
  }
}
</script>

