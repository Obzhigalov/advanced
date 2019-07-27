<template lang="pug">
section.about
  .container
    .about__row
      h3.about__title Блок "Обо мне"
      button(type="button" @click="addCategoryModeOn").btn-add.btn-add--group +
    .about-grid
      form.about-grid__item(v-if="addCategoryMode")
        .about-grid__item-upper-row
          input(type="text" placeholder="Введите название новой категории" v-model="newCategory.title").about-grid__item-group-name 
          .about-grid__item-btns-wrap
            button(type="button" v-if="addCategoryMode" @click="addNewCategory").about-grid__item-ok
            button(type="button" v-if="addCategoryMode").about-grid__item-deny
      skills-grid-item(
        v-for='category in categories'
        :category='category'
        :skills="filterSkillsByCategoryId(category.id)"
      )
      
</template>

<script>
//- import SkillsGridItem from "./blocks/skillsGridItem"
import {mapActions, mapState} from "vuex"

export default {
  data() {
    return {
      addCategoryMode: false,
      newCategory: {
        title: ""
      }
    }
  },
  components: {
    SkillsGridItem: () => import('./blocks/skillsGridItem.vue')
  },
  computed: {
    ...mapState('skills', {
      skills: state => state.skills
    }),
    ...mapState('categories', {
      categories: state => state.categories
    }),
  },
  methods: {
    ...mapActions('skills', ['fetchSkills']),
    ...mapActions('categories', ['fetchCategories']),

    addCategoryModeOn() {
      this.addCategoryMode = true
    },
    ...mapActions('categories',['addCategory']),
    async addNewCategory() {
      try {
        await this.addCategory(this.newCategory);
        this.newCategory.title = "";
        this.addCategoryMode = false;
      } catch {
        
      } finally {
        this.addCategoryMode = false
      }
  },
  filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId)
    },
  },
  async created() {
    try {
      this.fetchCategories();
    } catch(error) {

    }
    try {
      this.fetchSkills();
    } catch (error) {}
  }
}

</script>

<style lang="postcss" scoped>
@import "normalize.css";
@import url('../../styles/mixins');
@import url('../../styles/layout/base');


.container {
  max-width: 1200px;
}


.about {
  min-height: 100%;
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

  @include phone {
    grid-template-columns: 1fr;
  }
}

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
</style>