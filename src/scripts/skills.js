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
      const findBlockTop = this.$root.findCircle();
      const dashArray = parseInt(
      getComputedStyle(circle).getPropertyValue('stroke-dasharray')
    );
    
    const percent = (dashArray / 100) * (100 - this.skillPercent);
    
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
  },
  methods: {
    findCircle() {
      const circleBlock = this.$refs["skills-grid"];
      return {
        findTop: circleBlock
      };
    }
  }
})