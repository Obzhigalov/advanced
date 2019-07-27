<template lang="pug">

nav.nav
  .container
    ul.nav__list
      li.nav-list__item
        router-link(
          tag="button"
          class="nav-list__item-link"
          to="/"
        ) Обо мне
      li.nav-list__item
        router-link(
          tag="button"
          class="nav-list__item-link"
          to="projects"
        ) Работы
      li.nav-list__item
        router-link(
          tag="button"
          class="nav-list__item-link"
          to="feedback"
        ) Отзывы
</template>

<style lang="postcss" scoped>
@import "normalize.css";
@import url('../../styles/mixins');
@import url('../../styles/layout/base');

.container {
  max-width: 1200px;
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
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 0;
  background-color: transparent;
}

</style>