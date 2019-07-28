<template lang="pug">
    form.about-grid__item
      .about-grid__item-upper-row
        input(type="text" v-model="category.category" :disabled="!editCategoryMode").about-grid__item-group-name 
        .about-grid__item-btns-wrap
          button(type="button" v-if="editCategoryMode" @click="editCurrentCategory()").about-grid__item-ok
          button(type="button" v-if="editCategoryMode" @click="editCategoryMode = false").about-grid__item-deny
          button(type="button" v-if="!editCategoryMode" @click="editCategoryMode = true").about-grid__item-edit
          button(type="button" v-if="!editCategoryMode" @click="deleteCurrentCategory(category.id)").about-grid__item-del
      SkillsGridItemRow(
          :category="category"
          :skills="skills"
        )
      .about-grid__item-lower-row.about-grid__item-lower-row--blocked
        input(type="text" placeholder="Новый навык" v-model="skillAdd.title" :disabled="addSkillFormBlocked").about-grid__item-skill-name
        input(type="text" value="100%" v-model="skillAdd.percent" :disabled="addSkillFormBlocked").about-grid__item-skill-value
        button(type="button" @click="addNewSkill" :disabled="addSkillFormBlocked").btn-add.btn-add--skill +
</template>

<script>
import $axios from "../../requests.js"
import {mapActions} from "vuex";

export default {
  data() {
    return {
      skillAdd: {
        title: "",
        percent: "",
        category: this.category.id
      },
      editCategoryData: {
        title: this.category.category
      },
      addSkillFormBlocked: false,
      editCategoryMode: false
    }
  },
  props: {
    skills: Array,
    category: Object,
  },
  components: {
    SkillsGridItemRow: () => import('./skillsGridItemRow.vue')
  },
  methods: {
    ...mapActions('skills',['addSkill']),
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
    ...mapActions('categories', ['deleteCategory']),
    deleteCurrentCategory(categoryId) {
      console.log(categoryId)
      this.deleteCategory(categoryId)
    },
    ...mapActions('categories', ['editCategory']),
    async editCurrentCategory() {
      try {
        await this.editCategory({
                  id: this.category.id,
                  title: this.category.category});
        this.editCategoryMode = false;
      } catch {

      }
      
    }
  },
  created() {
    
  }
}
</script>

<style lang="pcss">
@import "normalize.css";
@import url('../../../styles/mixins');
@import url('../../../styles/layout/base');

.about-grid__item {
  width: 100%;
  padding-top: 10px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
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
  
  @include tablet {
    width: 50%;
  }
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

.about-grid__item-lower-row--blocked {
  
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
.btn-add {
  color: #fff;
  background: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-add--skill {
  width: 40px;
  height: 40px;
  font-size: 32px;
  margin-left: 20px;
}
</style>