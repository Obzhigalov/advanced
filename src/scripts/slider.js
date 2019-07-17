import Vue from "vue";

const sliderList = {
  template: "#sliderList-template",
  props: {
    sliderData: Array,
    currentProject: Object
  }
};

const sliderSwitch = {
  template: "#sliderSwitch-template",
  props: {
    currentProject: Object
  }
};

const sliderDisplay = {
  template: "#sliderDisplay-template",
  props: {
    sliderData: Array,
    currentProject: Object
  },
  components: {
    sliderList,
    sliderSwitch
  }
};

const sliderContentTags = {
  template: "#sliderContentTags-template",
  props:{
    tags: Array
  }
};

const sliderContent = {
  template: "#sliderContent-template",
  props: {
    currentProject: Object
  },
  computed: {
    tagsArray() {
      return this.currentProject.skills.split(", ")
    }
  },
  components: {
    sliderContentTags
  }
};

new Vue ({
  el: "#slider-component",
  template: "#slider-template",
  components: {
    sliderDisplay,
    sliderContent
  },
  data() {
    return {
      sliderData: [],
      currentIndex: 0
    }
  },
  computed: {
    currentProject() {
      return this.sliderData[this.currentIndex]
    }
  },
  watch: {
    currentIndex(value) {
      const sliderDataLength = this.sliderData.length - 1;
      if (value < 0) this.currentIndex = sliderDataLength;
      if (value > sliderDataLength) this.currentIndex = 0;
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/portfolio/${item.photo}`);
        item.photo = requiredPic;
  
        return item;
      });
    },
    handleSlide(direction) {
      switch(direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },
    chooseSlide(index) {
      this.currentIndex = index
    }
  },
  created() {
    const data = require('../data/slider.json');
    this.sliderData = data;

    this.sliderData = this.makeArrWithRequiredImages(data);

    this.currentProject = this.sliderData[this.currentIndex];
  }
})