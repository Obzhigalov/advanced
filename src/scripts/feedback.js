import Vue from "vue";
import Flickity from 'vue-flickity';

const feedbackSliderItem = {
  template: '#feedbackSliderItem-template',
  props: {
    feedback: Object
  }
}

new Vue({
  el: "#feedback-slider",
  template: "#feedbackSlider-template",
  components: {
    Flickity,
    feedbackSliderItem
  },
  data() {
    return {
      feedbackData: [],
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        draggable: false
          
          // any options from Flickity can be used
        }
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.avatar}`);
        item.avatar = requiredPic;
  
        return item;
      });
    },
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  },
  created() {
    const data = require('../data/feedback.json');
    this.feedbackData = this.makeArrWithRequiredImages(data);
  }
})