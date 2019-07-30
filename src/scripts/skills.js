import Vue from 'vue';
import axios from "axios";

const skillsListItem = {
  template: '#skills-list__item',
  props: {
    skillName: String,
    skillPercent: Number
  },
  methods: {
    SetDashoffset() {
      const circle = this.$refs['circle'];
      const findBlockTop = this.$root.findCircle();
      const dashArray = parseInt(
      getComputedStyle(circle).getPropertyValue('stroke-dasharray')
    );
    
    const percent = (dashArray / 100) * (115 - this.skillPercent);
    
    window.addEventListener('scroll', function(){
      const posTop = findBlockTop.findTop.getBoundingClientRect().top;
      const exactTop = posTop.toFixed();

      if (exactTop > 200 && exactTop < 350) {
        circle.style.strokeDashoffset = percent;
      }

    });
    }
  },
  mounted() {
    this.SetDashoffset();
  }
}

const skillsWrap = {
  template: '#skills__wrap',
  props: {
    skills: Array,
    category: Object
  },
  components: {
    skillsListItem
  },
  methods: {
    
  }
}

new Vue({
  el: "#skills-container",
  template: "#skills-grid",
  components: {
    skillsWrap
  },
  data() {
    return {
      categories: [],
      skills: []
    }
  },
  created() {
    this.fetchCategories();
    this.fetchSkills();
    // const data = require('../data/skills.json');
    // this.skills = data;
  },
  methods: {
    findCircle() {
      const circleBlock = this.$refs["skills-grid"];
      return {
        findTop: circleBlock
      };
    },
    fetchCategories() {
      axios.get('https://webdev-api.loftschool.com/categories/153')
        .then(response => {
          this.categories = response.data;
          console.log(this.categories)
        })
    },
    fetchSkills() {
        axios.get('https://webdev-api.loftschool.com/skills/153')
        .then(response => {
          this.skills = response.data;
          console.log(this.skills)
        })
    },
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId)
    },
  }
})