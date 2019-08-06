import Vue from "vue";
import Flickity from 'vue-flickity';
import axios from "axios";


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
    fetchFeedbacks() {
      axios.get('https://webdev-api.loftschool.com/reviews/153')
        .then(response => {
          console.log(response)
          this.feedbackData = this.makeArrWithRequiredImages(response.data);
          console.log(this.feedbackData)
        })
    },
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const absolutePic = `https://webdev-api.loftschool.com/${item.photo}`;
        item.photo = absolutePic;
  
        return item;
      });
    },
    next() {
      console.log(this.feedbackData)
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
    this.fetchFeedbacks();
    // this.feedbackData = this.makeArrWithRequiredImages(this.feedbackData);
    console.log(this.feedbackData)
  }
})