<template lang="pug">
  .maincontent
    header.header
      .container.container--header
        .header__content-wrap
          .header__avatar-wrap
            img(src="../images/content/about/avatar.jpg").header__avatar
          h1.header__title Обжигалов Андрей
          h2.header__subtitile Панель администрирования
        a.header__logout Выйти
    .container
      nav.nav
        ul.nav__list
          li.nav-list__item
            a(href="#").nav-list__item-link Обо мне
          li.nav-list__item
            a(href="#").nav-list__item-link Работы
          li.nav-list__item
            a(href="#").nav-list__item-link Отзывы
    section.about
      .container
        .about__row
          .about__title Блок "Обо мне"
          button(type="button").btn-add.btn-add--group +
        .about-grid
          form.about-grid__item
            .about-grid__item-upper-row
              input(type="text" placeholder="Название новой группы").about-grid__item-group-name
              .about-grid__item-btns-wrap
                button(type="button").about-grid__item-ok
                button(type="button").about-grid__item-deny
            ul.about-grid__item-skills-list
            .about-grid__item-lower-row
              input(type="text" placeholder="Новый навык").about-grid__item-skill-name
              input(type="text" value="100%").about-grid__item-skill-value
              button(type="button").btn-add.btn-add--skill +
          form.about-grid__item
            .about-grid__item-upper-row
              input(type="text" value="Workflow").about-grid__item-group-name
              .about-grid__item-btns-wrap
                button(type="button").about-grid__item-ok
                button(type="button").about-grid__item-deny
            ul.about-grid__item-skills-list
              li.about-grid__item-skills-list-row
                input(type="text" value="Git").about-grid__item-list-skill
                input(type="text" value="100%").about-grid__item-list-value
                .about-grid__item-btns-wrap
                  button(type="button").about-grid__item-edit
                  button(type="button").about-grid__item-del
              li.about-grid__item-skills-list-row
                input(type="text" value="Terminal").about-grid__item-list-skill
                input(type="text" value="50%").about-grid__item-list-value
                .about-grid__item-btns-wrap
                  button(type="button").about-grid__item-edit
                  button(type="button").about-grid__item-del
              li.about-grid__item-skills-list-row
                input(type="text" value="Gulp").about-grid__item-list-skill
                input(type="text" value="60%").about-grid__item-list-value
                .about-grid__item-btns-wrap
                  button(type="button").about-grid__item-edit
                  button(type="button").about-grid__item-del
              li.about-grid__item-skills-list-row
                input(type="text" value="Webpack").about-grid__item-list-skill
                input(type="text" value="30%").about-grid__item-list-value
                .about-grid__item-btns-wrap
                  button(type="button").about-grid__item-edit
                  button(type="button").about-grid__item-del
            .about-grid__item-lower-row
              input(type="text" placeholder="Новый навык").about-grid__item-skill-name
              input(type="text" value="100%").about-grid__item-skill-value
              button(type="button").btn-add.btn-add--skill +
          form.about-grid__item
            .about-grid__item-upper-row
              input(type="text" value="Frontend").about-grid__item-group-name
              .about-grid__item-btns-wrap
                button(type="button").about-grid__item-ok
                button(type="button").about-grid__item-edit
            ul.about-grid__item-skills-list
              li.about-grid__item-skills-list-row
                input(type="text" value="HTML5").about-grid__item-list-skill
                input(type="text" value="100%").about-grid__item-list-value
                .about-grid__item-btns-wrap
                  button(type="button").about-grid__item-edit
                  button(type="button").about-grid__item-del
              li.about-grid__item-skills-list-row
                input(type="text" value="CSS3").about-grid__item-list-skill
                input(type="text" value="50%").about-grid__item-list-value
                .about-grid__item-btns-wrap
                  button(type="button").about-grid__item-edit
                  button(type="button").about-grid__item-del
              li.about-grid__item-skills-list-row
                input(type="text" value="JavaScript").about-grid__item-list-skill
                input(type="text" value="60%").about-grid__item-list-value
                .about-grid__item-btns-wrap
                  button(type="button").about-grid__item-edit
                  button(type="button").about-grid__item-del
              li.about-grid__item-skills-list-row
                input(type="text" value="Vue.js").about-grid__item-list-skill
                input(type="text" value="30%").about-grid__item-list-value
                .about-grid__item-btns-wrap
                  button(type="button").about-grid__item-edit
                  button(type="button").about-grid__item-del
            .about-grid__item-lower-row
              input(type="text" placeholder="Новый навык").about-grid__item-skill-name
              input(type="text" value="100%").about-grid__item-skill-value
              button(type="button").btn-add.btn-add--skill +
    section.projects
      .container
        .projects__title Блок «Работы»
        .projects__item
          .projects__item-row
            .projects__item-title Редактирование работы
          .pojects__item-edit
            .pojects__item-photo
              .projects__item-photo-text Перетащите или загрузите для загрузки изображения
              button(type="button").pojects__item-photo-upload Загрузить
            .projects__item-content
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
            button(type="button").projects__grid-add-btn
              .projects__grid-add-circle +
              .projects__grid-add-title Добавить работу
          li.projects__grid-item
            img(src="../images/content/portfolio/project-1.jpg").projects__grid-item-photo
            .projects__grid-item-content
              .projects__grid-item-title Сайт школы образования
              .projects__grid-item-descr Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a.projects__grid-item-link http://loftschool.ru
              .projects__grid-item-controls
                .projects__grid-item-controls-wrap
                  .projects__grid-item-controls-content Править
                  .projects__grid-item-controls-edit-svg
                .projects__grid-item-controls-wrap
                  .projects__grid-item-controls-content Удалить
                  .projects__grid-item-controls-del-svg
</template>

<style lang="pcss">
@import "normalize.css";
@import url('../styles/mixins');
@import url('../styles/layout/base');

.container {
  max-width: 1200px;
}

.container--header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  width: 100%;
  height: 80px;
  background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  color: #fff;
}

.header__content-wrap {
  display: flex;
  align-items: center;
}

.header__avatar-wrap {
  width: 45px;
  height: 45px;
}

.header__avatar {
  object-fit: cover;
  border-radius: 50%;
}

.header__title {
  margin-left: 20px;
  font-size: 18px;
  font-weight: 400;
}

.header__subtitile {
  margin-left: 20px;
  color: #808097;
  font-size: 14px;
  font-weight: 400;
}

.header__logout {
  color: #808097;
  font-size: 16px;
  font-weight: 400;
  text-decoration: underline;
}

.nav {
  height: 80px;
  color: #383bcf;
}

.nav__list {
  height: 80px;
  display: flex;
}

.nav-list__item {
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  border: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid #383bcf;;
    }
}

.nav-list__item-link {
  color: inherit;
  text-decoration: inherit;
}

.about {
  padding-top: 60px;
  padding-bottom: 30px;
  background-color: #f8f9fe;
}

.about__row {
  width: 100%;
  display: flex;
  align-items: center;
}

.about__title {
  font-size: 21px;
  font-weight: 700;
}

.btn-add {
  color: #fff;
  background: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-add--group {
  position: relative;
  width: 21px;
  height: 21px;
  margin-left: 40px;
    &::after {
      content: "Добавить группу";
      position: absolute;
      right: -130px;
      color: #383bcf;
    }
}


.about__add-skill-group-text {
  margin-left: 15px;
  color: #3f35cb;
  font-size: 16px;
  font-weight: 700;
}

.about-grid {
  margin-top: 60px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.about-grid__item {
  width: 100%;
  padding-top: 10px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  border-radius: 7px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #fff;
}

.about-grid__item-upper-row {
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #C0C0C0;
}

.about-grid__item-group-name {
  height: 40px;
  width: 60%;
  outline: none;
    &:focus {
      border-bottom: 1px solid #000;
    }
}

.about-grid__item-ok {
  width: 20px;
  height: 20px;
  background: svg-load(
          "tick.svg",
          fill=rgba(#00d70a, 1),
          width=15px,
          height=12px
        ) center no-repeat;
}

.about-grid__item-deny {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background: svg-load(
          "remove.svg",
          fill=rgba(#bf2929, 1),
          width=14px,
          height=12px
        ) center no-repeat;
}

.about-grid__item-skills-list {
  min-height: 200px;
  padding-top: 20px;
}

.about-grid__item-skills-list-row {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.about-grid__item-list-skill {
  width: 60%;
}

.about-grid__item-list-value {
  width: 20%;
}

.about-grid__item-edit {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background: svg-load(
          "pencil.svg",
          fill=rgba(#414c63, 1),
          width=14px,
          height=12px
        ) center no-repeat;
}

.about-grid__item-del {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background: svg-load(
          "trash.svg",
          fill=rgba(#414c63, 1),
          width=14px,
          height=12px
        ) center no-repeat;
}

.about-grid__item-lower-row {
  display: flex;
  justify-content: flex-end;
}

.about-grid__item-skill-name {
  height: 40px;
  width: 40%;
  padding-left: 10px;
  outline: none;
  border-bottom: 1px solid #000;
}

.about-grid__item-skill-value {
  height: 40px;
  width: 20%;
  padding-left: 10px;
  margin-left: 10px;
  outline: none;
  border-bottom: 1px solid #000;
}

.btn-add--skill {
  width: 40px;
  height: 40px;
  font-size: 32px;
  margin-left: 20px;
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
  border-radius: 7px;
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
}

.projects__grid-add {
  width: 100%;
}

.projects__grid-add-btn {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.projects__grid-add-circle {
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

.projects__grid-add-title {
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

.projects__grid-item-controls-wrap {
  display: flex;
  align-items: center;
}

.projects__grid-item-controls-edit-svg {
  width: 17px;
  height: 17px;
  margin-left: 10px;
  background: svg-load(
          "pencil.svg",
          fill=rgba(#383bcf, 1),
          width=17px,
          height=17px
        ) center no-repeat;
}

.projects__grid-item-controls-del-svg {
  width: 15px;
  height: 15px;
  margin-left: 10px;
  background: svg-load(
          "remove.svg",
          fill=rgba(#c92e2e, 1),
          width=17px,
          height=17px
        ) center no-repeat;
}

</style>