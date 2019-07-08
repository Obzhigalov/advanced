import Vue from 'vue';

const skillsListItem = {
  template: '#skills-list__item',
  props: {
    skillName: String,
    skillPercent: Number
  },
  methods: {
    SetDashoffset() {
      const circle = this.$refs['circle'];
      const dashArray = parseInt(
      getComputedStyle(circle).getPropertyValue('stroke-dasharray')
    );
    
    const percent = (dashArray / 100) * (100 - this.skillPercent);

    circle.style.strokeDashoffset = percent;
    }
  },
  mounted() {
    this.SetDashoffset();
  }
}

const skillsWrap = {
  template: '#skills__wrap',
  props: {
    skill: Object
  },
  components: {
    skillsListItem
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
      skills: []
    }
  },
  created() {
    const data = require('../data/skills.json');
    this.skills = data;
  }
})