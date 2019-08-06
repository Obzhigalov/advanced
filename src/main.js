import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax";
import "./scripts/fs-menu";
import "./scripts/skills";
import "./scripts/feedback";
import "./scripts/slider";
import "./scripts/scroll";
import Validate from "./scripts/form";

const form = document.querySelector('.j-form');

if (form) {
  const validate = new Validate({
    element: '.j-form'
  });

  validate.init();
}