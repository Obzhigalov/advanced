(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{70:function(e,t,a){"use strict";a.r(t);var d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"feedback__item-edit"},[a("div",{staticClass:"feedback__item-edit-row"},[e._v("Новый отзыв")]),a("form",{staticClass:"feedback__item-edit-content"},[a("div",{staticClass:"feedback__item-edit-photo"},[a("div",{staticClass:"feedback__item-edit-avatar",style:{backgroundImage:e.avatarPreview,backgroundSize:"100%"}}),a("div",{staticClass:"feedback__item-edit-avatar-add"},[e._v("Добавить фото")]),a("input",{staticClass:"feedback__item-edit-avatar-load",attrs:{type:"file",accept:"image/jpeg, image/png"},on:{change:e.renderFile}})]),a("label",{staticClass:"feedback__item-edit-label"},[a("div",{staticClass:"feedback__item-edit-label-title"},[e._v("Имя автора")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.addFeedbackData.author,expression:"addFeedbackData.author"}],staticClass:"feedback__item-edit-input",attrs:{type:"text"},domProps:{value:e.addFeedbackData.author},on:{input:function(t){t.target.composing||e.$set(e.addFeedbackData,"author",t.target.value)}}})]),a("label",{staticClass:"feedback__item-edit-label"},[a("div",{staticClass:"feedback__item-edit-label-title"},[e._v("Титул автора")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.addFeedbackData.occ,expression:"addFeedbackData.occ"}],staticClass:"feedback__item-edit-input",attrs:{type:"text"},domProps:{value:e.addFeedbackData.occ},on:{input:function(t){t.target.composing||e.$set(e.addFeedbackData,"occ",t.target.value)}}})]),a("label",{staticClass:"feedback__item-edit-descr"},[a("div",{staticClass:"feedback__item-edit-label-title"},[e._v("Отзыв")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.addFeedbackData.text,expression:"addFeedbackData.text"}],staticClass:"feedback__item-edit-textarea",attrs:{name:"feedback"},domProps:{value:e.addFeedbackData.text},on:{input:function(t){t.target.composing||e.$set(e.addFeedbackData,"text",t.target.value)}}})])]),a("div",{staticClass:"feedback__item-edit-btn-wrap"},[a("button",{staticClass:"feedback__item-edit-btn-cancel",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancelItem")}}},[e._v("Отмена")]),a("button",{staticClass:"feedback__item-edit-btn-save",attrs:{type:"button"},on:{click:e.addnewFeedback}},[e._v("Загрузить")])])])};d._withStripped=!0;var c=a(3),i={data:()=>({renderedPhoto:"",addFeedbackData:{author:"",photo:"",occ:"",text:""}}),computed:{avatarPreview(){return`url(${this.renderedPhoto})`}},components:{},methods:{renderFile(e){const t=e.target.files[0];this.addFeedbackData.photo=t;const a=new FileReader;try{a.readAsDataURL(t),a.onloadend=()=>{console.log(a.result),this.renderedPhoto=a.result}}catch(e){console.log(e.message)}},...Object(c.b)("feedbacks",["addFeedback"]),async addnewFeedback(){try{var e=new FormData;e.append("photo",this.addFeedbackData.photo),e.append("author",this.addFeedbackData.author),e.append("occ",this.addFeedbackData.occ),e.append("text",this.addFeedbackData.text),console.log(e),this.addFeedback(e),this.$emit("cancelItem")}catch(e){}}}},s=a(7),o=Object(s.a)(i,d,[],!1,null,null,null);o.options.__file="src/admin/components/blocks/addFeedback.vue";t.default=o.exports}}]);