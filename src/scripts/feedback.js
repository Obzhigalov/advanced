import Vue from "vue";
import Flickity from 'vue-flickity';

const feedbackSliderItem = {
  template: '#feedbackSliderItem-template',
  props: {
    feedback: Object,
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
      btnIndex: 0,
      btnClicks: undefined,
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
      if(window.innerWidth < 480) {
        if(this.btnIndex < this.feedbackData.length - 1) {
          this.btnIndex ++;
          this.btnClicks = this.feedbackData.length - 1;
        }
      } else {
        if(this.btnIndex < this.feedbackData.length/2 - 1) {
          this.btnIndex ++;
          this.btnClicks = this.feedbackData.length/2 - 1;
        }
      }
    },
    
    previous() {
      this.$refs.flickity.previous();
      if(this.btnIndex > 0) {
        this.btnIndex --;
      }
    }
  },
  created() {
    const data = require('../data/feedback.json');
    this.feedbackData = this.makeArrWithRequiredImages(data);
  }
})