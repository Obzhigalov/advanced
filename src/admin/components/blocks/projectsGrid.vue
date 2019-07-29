<template lang="pug">
div
  addProjectsItem(
    v-if="addProjectMode"
    :addProjectMode="addProjectMode"
    )
  ul.projects__grid
    li.projects__grid-add
      button(type="button" @click="addProjectMode = true").add-btn
        .add-circle +
        .add-title Добавить работу
    li.projects__grid-item
      img(src="../../../images/content/portfolio/project-1.jpg").projects__grid-item-photo
      .projects__grid-item-content
        .projects__grid-item-title Сайт школы образования
        .projects__grid-item-descr Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a.projects__grid-item-link http://loftschool.ru
        .projects__grid-item-controls
          .controls-wrap
            button(type="button").controls-edit Править
          .projects__grid-item-controls-wrap
            button(type="button").controls-del Удалить
</template>

<script>
export default {
  data() {
    return {
      addProjectMode: false
    }
  },
  components: {
    addProjectsItem: () => import('./addProjectsItem.vue'),
  }
}
</script>

<style lang="pcss">
@import "normalize.css";
@import url('../../../styles/mixins');

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