import Vue from "vue";
import axios from "axios";

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
      return this.currentProject.techs.split(",")
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
    fetchProjects() {
      axios.get('https://webdev-api.loftschool.com/works/153')
        .then(response => {
          console.log(response.data)
          this.sliderData = this.makeArrWithRequiredImages(response.data);
        })
    },
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const absolutePic = `https://webdev-api.loftschool.com/${item.photo}`;
        item.photo = absolutePic;
  
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
    // const data = require('../data/slider.json');
    // this.sliderData = data;
    this.fetchProjects();

    this.sliderData = this.makeArrWithRequiredImages(this.sliderData);

    this.currentProject = this.sliderData[this.currentIndex];
  }
})