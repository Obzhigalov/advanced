<template lang="pug">
  header.header
    .container.container--header
      .header__content-wrap
        .header__avatar-wrap
          img(src="../../images/content/about/avatar.jpg").header__avatar
        h1.header__title Обжигалов Андрей
        h2.header__subtitile Панель администрирования
      a(herf="#").header__logout Выйти
</template>

<style lang="postcss" scoped>
@import "normalize.css";
@import url('../../styles/mixins');
@import url('../../styles/layout/base');

.container {
  max-width: 1200px;
}

.container--header {
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
</style>