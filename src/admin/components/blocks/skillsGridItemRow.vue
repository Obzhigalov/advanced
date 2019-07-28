<template lang="pug">
div
  ul.about-grid__item-skills-list
    li.about-grid__item-skills-list-row(v-for="skill in skills")
      input(type="text" v-model="skill.title" :disabled="!editSkillMode").about-grid__item-list-skill
      input(type="text" v-model="skill.percent" :disabled="!editSkillMode").about-grid__item-list-value
      .about-grid__item-btns-wrap
        button(v-if="editSkillMode == true" type="button" @click="editCurrentSkill(skill)").about-grid__item-ok
        button(v-if="editSkillMode == true" type="button"  @click="editSkillMode = false").about-grid__item-deny
        button(v-if="editSkillMode == false" type="button" @click="editSkillMode = true").about-grid__item-edit
        button(v-if="editSkillMode == false" type="button" @click="removeExistedSkill(skill.id)").about-grid__item-del
</template>

<script>
import $axios from "../../requests.js"
import {mapActions, mapState} from "vuex"

export default {
  data() {
    return {
      skillAdd: {
        title: "",
        percent: "",
        category: this.category.id
      },
      skillData: this.skill,
      addSkillFormBlocked: false,
      editSkillMode: false
    }
  },
  props: {
    skills: Array,
    category: Object
  },

  methods: {
    ...mapActions('skills',['addSkill']),
    ...mapActions('skills',['removeSkill']),
    ...mapActions('skills',['editSkill']),
    async addNewSkill() {
      this.addSkillFormBlocked = true;
      try {
        console.log(this.skillAdd)
        await this.addSkill(this.skillAdd);
        this.skillAdd.title = "";
        this.skillAdd.percent = "";
      } catch(error) {
        alert(error.message)
      } finally {
        this.addSkillFormBlocked = false;
      }
    },
    async removeExistedSkill(skillId) {
      try {
        await this.removeSkill(skillId);
      } catch {

      }
    },
    async editCurrentSkill(skill) {
      try {
        console.log(skill)
        await this.editSkill(skill);
        this.editSkillMode = false;
      } catch {

      }
    }
  }
}
</script>



<style lang="pcss">
input[disabled] {
  background-color: transparent;
  color: silver;
}
input {
  outline: none;
}
</style>