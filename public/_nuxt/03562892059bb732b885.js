(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{625:function(t,e,o){"use strict";o.r(e);var l={name:"create-service",data:function(){return{active:0,CompanyLink:"",CompanyName:"",CompanySurname:"",CompanyEmail:"",ProductCat:[],cat:[{value:"cat1",label:"Категория 1"},{value:"cat2",label:"Категория 2"},{value:"cat3",label:"Категория 3"}],ProductDesc:"",ProductVideo:"",testPeriod:"",ProductDateTest:"",ProductLinkTestPeriod:"",ProductPrice:"",ProductWhom:"",whom:[{value:"cat1",label:"Менеджер"},{value:"cat2",label:"Малый бизнес"}],ProductSystem:"",systemCat:[{value:"cat1",label:"1"},{value:"cat2",label:"2"}],ProductFeatures:"",ProductSupport:"",ProductKeysLink:"",ProductInstructionLink:"",ProductApiLink:"",ProductSocial:""}},methods:{next:function(){this.active,this.active,2===this.active&&console.log("push"),this.active++>2&&(this.active=0)}}},c=o(12),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page content"},[t._m(0),t._v(" "),o("div",{staticClass:"page-box"},[o("div",{staticClass:"cr-service"},[o("el-steps",{attrs:{active:t.active}},[o("el-step"),t._v(" "),o("el-step"),t._v(" "),o("el-step")],1),t._v(" "),0===t.active?o("div",{staticClass:"step-box"},[o("h2",{staticClass:"title-h2"},[t._v("О компании")]),t._v(" "),o("div",{staticClass:"cr-service-form"},[o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Ссылка на ваш сервис или программу*")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.CompanyLink,expression:"CompanyLink"}],staticClass:"t-input",attrs:{type:"text"},domProps:{value:t.CompanyLink},on:{input:function(e){e.target.composing||(t.CompanyLink=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Ваше имя*")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.CompanyName,expression:"CompanyName"}],staticClass:"t-input",attrs:{type:"text"},domProps:{value:t.CompanyName},on:{input:function(e){e.target.composing||(t.CompanyName=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Ваша фамилия*")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.CompanySurname,expression:"CompanySurname"}],staticClass:"t-input",attrs:{type:"text"},domProps:{value:t.CompanySurname},on:{input:function(e){e.target.composing||(t.CompanySurname=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Email на домене вашего сервиса*")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.CompanyEmail,expression:"CompanyEmail"}],staticClass:"t-input",attrs:{type:"text"},domProps:{value:t.CompanyEmail},on:{input:function(e){e.target.composing||(t.CompanyEmail=e.target.value)}}})])])]):t._e(),t._v(" "),1===t.active?o("div",{staticClass:"step-box"},[o("h2",{staticClass:"title-h2"},[t._v("О продукте")]),t._v(" "),o("div",{staticClass:"cr-service-form"},[o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Категория*")]),t._v(" "),o("el-select",{staticClass:"t-select",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Выбрать категорию"},model:{value:t.ProductCat,callback:function(e){t.ProductCat=e},expression:"ProductCat"}},t._l(t.cat,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Описание *")]),t._v(" "),o("el-input",{attrs:{type:"textarea",rows:2,autosize:{minRows:5,maxRows:6}},model:{value:t.ProductDesc,callback:function(e){t.ProductDesc=e},expression:"ProductDesc"}})],1),t._v(" "),o("div",{staticClass:"control-flex"},[o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Видео")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.ProductVideo,expression:"ProductVideo"}],staticClass:"t-input",attrs:{type:"text",placeholder:"Ссылка на видео"},domProps:{value:t.ProductVideo},on:{input:function(e){e.target.composing||(t.ProductVideo=e.target.value)}}})]),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Пробный период")]),t._v(" "),o("el-checkbox",{model:{value:t.testPeriod,callback:function(e){t.testPeriod=e},expression:"testPeriod"}},[!0===t.testPeriod?o("span",[t._v("Да")]):o("span",[t._v("Нет")])])],1),t._v(" "),t.testPeriod?o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Пробный период*")]),t._v(" "),o("div",{staticClass:"grid g-two"},[o("el-date-picker",{staticClass:"date-control",attrs:{type:"date",placeholder:"Указать дату"},model:{value:t.ProductDateTest,callback:function(e){t.ProductDateTest=e},expression:"ProductDateTest"}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.ProductLinkTestPeriod,expression:"ProductLinkTestPeriod"}],staticClass:"t-input",attrs:{type:"text",placeholder:"Ссылка на пробный период"},domProps:{value:t.ProductLinkTestPeriod},on:{input:function(e){e.target.composing||(t.ProductLinkTestPeriod=e.target.value)}}})],1)]):t._e(),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Цена*")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.ProductPrice,expression:"ProductPrice"}],staticClass:"t-input",attrs:{type:"text"},domProps:{value:t.ProductPrice},on:{input:function(e){e.target.composing||(t.ProductPrice=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Для кого*")]),t._v(" "),o("el-select",{staticClass:"t-select many",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Добавьте ключевые слова"},model:{value:t.ProductWhom,callback:function(e){t.ProductWhom=e},expression:"ProductWhom"}},t._l(t.whom,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)])]):t._e(),t._v(" "),2===t.active?o("div",{staticClass:"step-box"},[o("h2",{staticClass:"title-h2"},[t._v("Завершение")]),t._v(" "),o("div",{staticClass:"cr-service-form"},[o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Система на которую устанавливается")]),t._v(" "),o("el-select",{staticClass:"t-select",attrs:{multiple:"",filterable:"","default-first-option":"",placeholder:"Выбрать"},model:{value:t.ProductSystem,callback:function(e){t.ProductSystem=e},expression:"ProductSystem"}},t._l(t.systemCat,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Особенности и возможности")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.ProductFeatures,expression:"ProductFeatures"}],staticClass:"t-input",attrs:{type:"text"},domProps:{value:t.ProductFeatures},on:{input:function(e){e.target.composing||(t.ProductFeatures=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Поддержка")]),t._v(" "),o("el-radio",{staticClass:"check",attrs:{label:"1"},model:{value:t.ProductSupport,callback:function(e){t.ProductSupport=e},expression:"ProductSupport"}},[t._v("Есть")]),t._v(" "),o("el-radio",{staticClass:"check",attrs:{label:"2"},model:{value:t.ProductSupport,callback:function(e){t.ProductSupport=e},expression:"ProductSupport"}},[t._v("Нету")])],1),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Кейсы")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.ProductKeysLink,expression:"ProductKeysLink"}],staticClass:"t-input",attrs:{type:"text",placeholder:"Вставьте ссылку"},domProps:{value:t.ProductKeysLink},on:{input:function(e){e.target.composing||(t.ProductKeysLink=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Инструкция по использованию")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.ProductInstructionLink,expression:"ProductInstructionLink"}],staticClass:"t-input",attrs:{type:"text",placeholder:"Вставьте ссылку"},domProps:{value:t.ProductInstructionLink},on:{input:function(e){e.target.composing||(t.ProductInstructionLink=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("API")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.ProductApiLink,expression:"ProductApiLink"}],staticClass:"t-input",attrs:{type:"text",placeholder:"Вставьте ссылку"},domProps:{value:t.ProductApiLink},on:{input:function(e){e.target.composing||(t.ProductApiLink=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Социальные сети")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.ProductSocial,expression:"ProductSocial"}],staticClass:"t-input",attrs:{type:"text"},domProps:{value:t.ProductSocial},on:{input:function(e){e.target.composing||(t.ProductSocial=e.target.value)}}})])])]):t._e(),t._v(" "),o("div",{staticClass:"step-action"},[o("button",{staticClass:"t-button t-next",attrs:{type:"button"},on:{click:t.next}},[t._v("Далее")])])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-box"},[e("h1",{staticClass:"title-h1"},[this._v("Бесплатно добавим ваш сервис в каталог")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"t-control t-upload upload-box"},[e("div",{staticClass:"t-upload-box"},[e("div",{staticClass:"t-upload-icon"}),this._v(" "),e("div",{staticClass:"t-upload-label"},[this._v("Выбрат файл")]),this._v(" "),e("div",{staticClass:"t-upload-btn full"},[this._v("Загрузить")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"t-control t-upload box-control t-control-border"},[e("span",{staticClass:"t-label"},[this._v("Интерфейс "),e("span",{staticClass:"t-label_small"},[this._v("(скрины продукта)")])]),this._v(" "),e("div",{staticClass:"t-upload-box"},[e("div",{staticClass:"t-upload-icon"}),this._v(" "),e("div",{staticClass:"t-upload-label"},[this._v("Выбрат файл")]),this._v(" "),e("div",{staticClass:"t-upload-btn"},[this._v("Загрузить")])])])}],!1,null,"503a4ce1",null);e.default=component.exports}}]);