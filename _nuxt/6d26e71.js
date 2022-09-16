(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{602:function(t,e,n){"use strict";var r=n(2),o=(n(51),n(57),n(239),n(13),n(3),n(10),n(49),n(104),n(14),n(19),n(23),n(24),n(8)),c=n(94),l=n(111);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},630:function(t,e,n){"use strict";var r,o=new Uint8Array(16);function c(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var d=function(t){return"string"==typeof t&&l.test(t)},f=[],m=0;m<256;++m)f.push((m+256).toString(16).substr(1));var v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(f[t[e+0]]+f[t[e+1]]+f[t[e+2]]+f[t[e+3]]+"-"+f[t[e+4]]+f[t[e+5]]+"-"+f[t[e+6]]+f[t[e+7]]+"-"+f[t[e+8]]+f[t[e+9]]+"-"+f[t[e+10]]+f[t[e+11]]+f[t[e+12]]+f[t[e+13]]+f[t[e+14]]+f[t[e+15]]).toLowerCase();if(!d(n))throw TypeError("Stringified UUID is invalid");return n};e.a=function(t,e,n){var r=(t=t||{}).random||(t.rng||c)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return v(r)}},777:function(t,e,n){"use strict";n.r(e);n(54),n(40),n(77),n(39),n(25),n(19),n(84),n(91),n(45);var r=n(18),o=(n(42),n(13),n(3),n(630));function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d=n(341),f={data:function(){return{singleSelect:!1,selected:[],dialog:!1,deleteId:"",editId:"",edit:!1,dialogDelete:!1,headers:[{text:"Member Name",align:"start",sortable:!1,value:"first_name"},{text:"Actions",value:"actions",sortable:!1}],team:[],editedIndex:-1,editedItem:{id:"",mname:"",email:""},defaultItem:{id:"",mname:"",email:""},rules:[function(t){return!!t||"Required."}],valid:!1}},computed:{formTitle:function(){return 0==this.edit?"New Member":"Edit Member"}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){var t=this,e=this.$cookies.get("directus_access_token"),data=JSON.stringify({query:"query {\n        users {\n          id\n          first_name\n          last_name\n          email\n        }\n      }",variables:{}}),n={method:"post",url:"".concat("https://5mee2e5z.directus.app","/graphql/system"),headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},data:data};d(n).then((function(e){var data=e.data;if(t.team=[],data.data.users.length>0)try{var n,r=c(data.data.users);try{for(r.s();!(n=r.n()).done;){var o=n.value;t.team.push(o)}}catch(t){r.e(t)}finally{r.f()}}catch(t){}})).catch((function(t){console.log(t)}))},save:function(){if(this.$refs.form.validate()){var t=this;this.editedItem.id=Object(o.a)(),$nuxt.$supabase.from("team").insert([this.editedItem]).then((function(e){e.data;var n=e.error;t.team=[],n?console.log(n):(t.close(),t.initialize())}))}},editItem:function(t){var e=this.team.filter((function(e){return e.id==t}));this.editedItem=e[0],this.editId=t,this.edit=!0,this.dialog=!0},updateTask:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=5;break}return t.editedItem.id=t.editId,n=t,e.next=5,$nuxt.$supabase.from("team").update(n.editedItem).eq("id",n.editedItem.id).then((function(t){console.log(t),n.close(),n.initialize()}));case 5:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){this.dialogDelete=!0,this.deleteId=t},deleteItemConfirm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.deleteId,r=t,e.prev=2,e.next=5,$nuxt.$supabase.from("team").delete().eq("id",n).then((function(t){console.log(t),r.closeDelete(),r.initialize()}));case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}}),e,null,[[2,7]])})))()},close:function(){var t=this;this.dialog=!1,this.edit=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))}}},m=n(70),v=n(73),h=n.n(v),y=n(245),_=n(231),w=n(135),x=n(793),I=n(581),k=n(859),O=n(577),V=n(610),j=n(602),C=n(230),$=n(796),D=n(579),S=n(631),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{attrs:{headers:t.headers,items:t.team,"sort-by":"first_name","show-select":"","item-key":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-row",[n("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"12"}},[n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mb-2 text-caption text-sm-button font-weight-medium",attrs:{color:"primary",dark:""}},"v-btn",o,!1),r),[t._v("\n              Add New Member\n            ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h6 text-sm-h5 font-weight-regular"},[t._v(t._s(t.formTitle))])]),t._v(" "),n("v-card-text",[n("v-container",{staticClass:"px-0"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{filled:"",label:"Member Name",rules:t.rules},model:{value:t.editedItem.first_name,callback:function(e){t.$set(t.editedItem,"first_name",e)},expression:"editedItem.first_name"}}),t._v(" "),n("v-text-field",{attrs:{filled:"",label:"Member Name",rules:t.rules},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}})],1)],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),t.edit?t._e():n("v-card-actions",[n("v-btn",{staticClass:"text-caption text-sm-button font-weight-medium",attrs:{block:"",large:"",color:"primary"},on:{click:t.save}},[t._v("\n                  Save\n                ")])],1),t._v(" "),t.edit?n("v-card-actions",{staticClass:"text-caption text-sm-button font-weight-medium"},[n("v-btn",{attrs:{block:"",large:"",color:"primary"},on:{click:t.updateTask}},[t._v("\n                  Update\n                ")])],1):t._e(),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"text-caption text-sm-button font-weight-medium",attrs:{block:""},on:{click:t.close}},[t._v("\n                  Cancel\n                ")])],1)],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v("Are you sure you want to delete this item?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{on:{click:t.closeDelete}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.deleteItemConfirm}},[t._v("OK")]),t._v(" "),n("v-spacer")],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(r.id)}}},[t._v("\n      mdi-pencil\n    ")]),t._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(r.id)}}},[t._v("\n      mdi-delete\n    ")])]}},{key:"no-data",fn:function(){return[n("div",{staticClass:"d-flex align-center justify-center my-16 text-subtitle-2 text-sm-subtitle-1 font-weight-bold"},[t._v("\n      No Data Found "),n("br"),t._v(" Add New Member\n    ")])]},proxy:!0}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:y.a,VCard:_.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VCol:x.a,VContainer:I.a,VDataTable:k.a,VDialog:O.a,VDivider:V.a,VForm:j.a,VIcon:C.a,VRow:$.a,VSpacer:D.a,VTextField:S.a})}}]);