<template lang="pug">
section.feedback
  .container
    .feedback__title Блок "Отзывы"
    addFeedback(
      v-if="addCategoryMode"
      @cancelItem = "addCategoryMode = false"
    )
    editFeedback(
      v-if="editCategoryMode"
      @cancelEditItem = "editCategoryMode = false"
    )
    ul.feedback__grid
      li.feedback__grid-add
        button(type="button" @click="addCategoryMode = true").add-btn
          .add-circle +
          .add-title Добавить работу
      feedbackGridItem(
        v-for="feedback in feedbacks"
        @editFeedback = "editCurrentFeedback"
        :feedback="feedback"
        :key="feedback.id"
        )
      
</template>

<script>
import {mapActions, mapState} from "vuex"

export default {
  data() {
    return {
      addCategoryMode: false,
      editCategoryMode: false,
      feedbackForEdit: {

      }
    }
  },
  components: {
    addFeedback: () => import('./blocks/addFeedback.vue'),
    feedbackGridItem: () => import('./blocks/feedbackGridItem.vue'),
    editFeedback: () => import('./blocks/editFeedback.vue')
  },
  computed: {
    ...mapState('feedbacks', {
      feedbacks: state => state.feedbacks
    }),
  },
  methods: {
    ...mapActions('feedbacks', ['fetchFeedbacks']),
    editCurrentFeedback(editFeedbackData) {
      this.editCategoryMode = true;
    }
  },
  async created() {
    try {
      this.fetchFeedbacks();
    } catch (error) {

    }
  }
}
</script>

<style lang="pcss">
@import "normalize.css";
@import url('../../styles/mixins');
@import url('../../styles/layout/base');


.add-btn {
  height: 100%;
  min-height: 250px;
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

.container {
  max-width: 1200px;
}

.feedback {
  padding-top: 60px;
  padding-bottom: 30px;
  background-color: #f8f9fe;
}

.feedback__title {
  font-size: 21px;
  font-weight: 700;
}

.feedback__item-edit {
  padding: 20px 20px 40px 20px;
  margin-top: 60px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}

.feedback__item-edit-row {
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid silver;
}

.feedback__item-edit-content {
  margin-top: 45px;
  margin-left: 15px;
  width: 80%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 3fr 4fr;

  @include tablet {
    width: 90%;
  }

  @include phone {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }
}

.feedback__item-edit-photo {
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    @include phone {
      grid-row: intial;
  }
}

.feedback__item-edit-avatar {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: #dee4ed;
  background: svg-load(
              "user.svg",
              fill=rgba(#fff, 1),
              width=85px,
              height=113px
            ) center no-repeat #dee4ed;
}

.feedback__item-edit-avatar-img {
  border-radius: 50%;
}

.feedback__item-edit-avatar-add {
  margin-top: 30px;
  color: #383bcf;
  background-color: transparent;
}


.feedback__item-edit-avatar-load  {
  margin-top: 20px;
}


.feedback__item-edit-label {
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include phone {
    margin-top: 20px;
  }
}

.feedback__item-edit-input {
  height: 50px;
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid #000;
}

.feedback__item-edit-descr {
  grid-column: 2/4;

  @include phone {
    margin-top: 20px;
    grid-column: intial;
  }
}

.feedback__item-edit-textarea {
  width: 100%;
  height: 120px;
  margin-top: 15px;
  border: 1px solid #000;
  resize: none;
}

.feedback__item-edit-btn-wrap {
  width: 80%;
  margin-left: 15px;
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;

  @include tablet {
    width: 90%;
  }
  @include phone {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
}

.feedback__item-edit-btn-cancel {
  background-color: transparent;
  color: #383bcf;
}

.feedback__item-edit-btn-save {
  background-color: transparent;
  width: 181px;
  height: 60px;
  margin-left: 60px;
  border-radius: 30px;
  color: #ffffff;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
}
.feedback__grid {
  margin-top: 30px;
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
.feedback__grid-add {
  

  @include phone {
    height: 100%;
  }
}

.feedback__grid-item {
  padding: 20px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.feedback__grid-item-row {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 30px;
  border-bottom: 1px solid silver;
}

.feedback__grid-item-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.feedback__grid-item-title-wrap {
  margin-left: 30px;
}

.feedback__grid-item-title {
  font-size: 18px;
  font-weight: 700;
}

.feedback__grid-item-descr {
  margin-top: 30px;
}

.feedback__grid-item-controls {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}
</style>