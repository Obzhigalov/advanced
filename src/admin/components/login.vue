<template lang="pug">
section.login
  form(@submit.prevent="login").login__card
    h3.login__title Авторизация
      .login__row 
        label.login__label
          .login__label-title Логин
          input(v-model="user.name").login__input
    .login__row.login__row-pass 
      label.login__label
        .login__label-title Пароль
        input(v-model="user.password").login__input
    button(type="submit").login__button Войти
</template>

<script>
import $axios from "../requests.js"

export default {
  data() {
    return {
      user: {
        name: "АндрейОбжигалов",
        password: "12345",
      }
    }
  },
  methods: {
    async login() {
      try {
        const {data: {token}} = await $axios.post('/login', this.user);
        localStorage.setItem('token', token);
        $axios.defaults.headers["Autorization"] = 'Bearer ${token}';
        this.$router.push('/');
      } catch(error) {
        this.isUserlogged = false;
      }
    }
  }
}
</script>

<style lang="pcss">
@import "normalize.css";
@import url('../../styles/mixins');
@import url('../../styles/layout/base');

.container {
  max-width: 1200px;
}

.login {
  width: 100%;
  height: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fe;
}

.login__card {
  padding: 75px;
  background-color: #fff;
}

.login__title {
  font-size: 36px;
  font-weight: 400;
}

.login__row {
  width: 100%;
  padding-left: 40px;
  margin-top: 30px;
  border-bottom: 1px solid #000;
  font-size: 16px;
  background: svg-load(
              "user.svg",
              fill=rgba(#414c63, 1),
              width=24px,
              height=38px
            ) left no-repeat;
}

.login__row-pass {
  
}

.login__label {
 
}

.login__input {
  height: 50px;
  width: 100%;
}

.login__button {
  width: 347px;
  height: 80px;
  margin-top: 40px;
  border-radius: 40px 5px;
  background-color: #ffffff;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);

  @include phone {
    width: 300px;
    height: 65px;
  }
}
</style>