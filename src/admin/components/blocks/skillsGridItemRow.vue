<template lang="pug">
div
  ul.about-grid__item-skills-list
    li.about-grid__item-skills-list-row(v-for="skill in skills")
      input(type="text" :value="skill.title").about-grid__item-list-skill
      input(type="text" :value="skill.percent").about-grid__item-list-value
      .about-grid__item-btns-wrap
        button(type="button").about-grid__item-edit
        button(type="button").about-grid__item-del
  .about-grid__item-lower-row
    input(type="text" placeholder="Новый навык" v-model="skillAdd.title").about-grid__item-skill-name
    input(type="text" value="100%" v-model="skillAdd.percent").about-grid__item-skill-value
    button(type="button" @click="addNewSkill").btn-add.btn-add--skill +
</template>

<script>
import $axios from "../../requests.js"
import {mapActions} from "vuex"

export default {
  data() {
    return {
      skillAdd: {
        title: "",
        percent: "",
        category: this.categoryId
      }
    }
  },
  props: {
    skills: Array,
    categoryId: Number
  },
  methods: {
    ...mapActions('skills',['addSkill']),
    async addNewSkill() {
      try {
        console.log(this.categoryId)
        await this.addSkill(this.skillAdd);
      } catch(error) {
        alert(error.message)
      }
    },
  }
}
</script>



<style>

</style>