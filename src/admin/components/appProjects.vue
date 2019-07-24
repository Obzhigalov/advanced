<template lang="pug">
section.projects
  .container
    h3.projects__title Блок «Работы»
    .projects__item
      .projects__item-row
        h4.projects__item-title Редактирование работы
      .pojects__item-edit
        .pojects__item-photo
          .projects__item-photo-text Перетащите или загрузите для загрузки изображения
          button(type="button").pojects__item-photo-upload Загрузить
        form.projects__item-content
          label.projects__item-content-label
            .projects__item-content-label-title Название
            input(type="text").projects__item-content-input
          label.projects__item-content-label Ссылка
            .projects__item-content-label-title
            input(type="text").projects__item-content-input
          label.projects__item-content-label Описание
            .projects__item-content-label-title
            textarea(name="projectContent", cols="30", rows="10").projects__item-content-textarea
          label.projects__item-content-label
            .projects__item-content-label-title Добавление тэга
            input(type="text").projects__item-content-input
          ul.projects__item-content-tags
            li.projects__item-content-tags-item HTML
              button(type="button").projects__item-content-tags-item-del
            li.projects__item-content-tags-item CSS
              button(type="button").projects__item-content-tags-item-del
            li.projects__item-content-tags-item JavaScript
              button(type="button").projects__item-content-tags-item-del
          .projects__item-content-btn-wrap
            button(type="button").projects__item-content-btn-decline Отмена
            button(type="button").projects__item-content-btn-save Загрузить
    ul.projects__grid
      li.projects__grid-add
        button(type="button").add-btn
          .add-circle +
          .add-title Добавить работу
      li.projects__grid-item
        img(src="../../images/content/portfolio/project-1.jpg").projects__grid-item-photo
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

<style lang="postcss" >
@import "normalize.css";
@import url('../../styles/mixins');
@import url('../../styles/layout/base');


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
  height: 280px;
  padding: 70px 100px;
  border: 1px dashed #a1a1a1;
  background-color: #dee4ed;
  display: flex;
  flex-direction: column;
  align-items: center;
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