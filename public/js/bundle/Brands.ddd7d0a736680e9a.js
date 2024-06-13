/*! For license information please see Brands.ddd7d0a736680e9a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9188],{62069:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});var n=r(74865),a=r.n(n);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),s=new S(a||[]);return n(o,"_invoke",{value:$(t,r,s)}),o}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function m(){}function p(){}function v(){}var b={};d(b,s,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(T([])));y&&y!==e&&r.call(y,s)&&(b=y);var _=v.prototype=m.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function a(n,o,s,c){var l=h(t[n],t,o);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==i(u)&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(u).then((function(t){d.value=t,s(d)}),(function(t){return a("throw",t,s,c)}))}c(l.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function $(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return{value:void 0,done:!0}}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=B(o,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function B(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,B(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=h(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(t){if(t||""===t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}throw new TypeError(i(t)+" is not iterable")}return p.prototype=v,n(_,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=d(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,d(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(x.prototype),d(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new x(u(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(_),d(_,l,"Generator"),d(_,s,(function(){return this})),d(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function s(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}const c={metaInfo:{title:"Brand"},data:function(){return{isLoading:!0,SubmitProcessing:!1,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},selectedIds:[],totalRows:"",search:"",data:new FormData,editmode:!1,brands:[],limit:"10",brand:{id:"",name:"",description:"",image:""}}},computed:{columns:function(){return[{label:this.$t("BrandImage"),field:"image",tdClass:"text-left",thClass:"text-left"},{label:this.$t("BrandName"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("BrandDescription"),field:"description",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{updateParams:function(t){this.serverParams=Object.assign({},this.serverParams,t)},onPageChange:function(t){var e=t.currentPage;this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Brands(e))},onPerPageChange:function(t){var e=t.currentPerPage;this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Brands(1))},onSortChange:function(t){this.updateParams({sort:{type:t[0].type,field:t[0].field}}),this.Get_Brands(this.serverParams.page)},selectionChanged:function(t){var e=this,r=t.selectedRows;this.selectedIds=[],r.forEach((function(t,r){e.selectedIds.push(t.id)}))},onSearch:function(t){this.search=t.searchTerm,this.Get_Brands(this.serverParams.page)},getValidationState:function(t){var e=t.dirty,r=t.validated,n=t.valid;return e||r?void 0===n?null:n:null},Submit_Brand:function(){var t=this;this.$refs.Create_brand.validate().then((function(e){e?t.editmode?t.Update_Brand():t.Create_Brand():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},makeToast:function(t,e,r){this.$root.$bvToast.toast(e,{title:r,variant:t,solid:!0})},onFileSelected:function(t){var e,r=this;return(e=o().mark((function e(){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.$refs.Image.validate(t);case 2:n=e.sent,a=n.valid,r.brand.image=a?t.target.files[0]:"";case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(t){s(i,n,a,o,c,"next",t)}function c(t){s(i,n,a,o,c,"throw",t)}o(void 0)}))})()},New_Brand:function(){this.reset_Form(),this.editmode=!1,this.$bvModal.show("New_brand")},Edit_Brand:function(t){this.Get_Brands(this.serverParams.page),this.reset_Form(),this.brand=t,this.editmode=!0,this.$bvModal.show("New_brand")},Get_Brands:function(t){var e=this;a().start(),a().set(.1),axios.get("brands?page="+t+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(t){e.brands=t.data.brands,e.totalRows=t.data.totalRows,a().done(),e.isLoading=!1})).catch((function(t){a().done(),setTimeout((function(){e.isLoading=!1}),500)}))},Create_Brand:function(){var t=this,e=this;e.SubmitProcessing=!0,e.data.append("name",e.brand.name),e.data.append("description",e.brand.description),e.data.append("image",e.brand.image),axios.post("brands",e.data).then((function(r){e.SubmitProcessing=!1,Fire.$emit("Event_Brand"),t.makeToast("success",t.$t("Create.TitleBrand"),t.$t("Success"))})).catch((function(r){e.SubmitProcessing=!1,t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},Update_Brand:function(){var t=this,e=this;e.SubmitProcessing=!0,e.data.append("name",e.brand.name),e.data.append("description",e.brand.description),e.data.append("image",e.brand.image),e.data.append("_method","put"),axios.post("brands/"+e.brand.id,e.data).then((function(r){e.SubmitProcessing=!1,Fire.$emit("Event_Brand"),t.makeToast("success",t.$t("Update.TitleBrand"),t.$t("Success"))})).catch((function(r){e.SubmitProcessing=!1,t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},reset_Form:function(){this.brand={id:"",name:"",description:"",image:""},this.data=new FormData},Delete_Brand:function(t){var e=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(r){r.value&&axios.delete("brands/"+t).then((function(){e.$swal(e.$t("Delete.Deleted"),e.$t("Delete.TitleBrand"),"success"),Fire.$emit("Delete_Brand")})).catch((function(){e.$swal(e.$t("Delete.Failed"),e.$t("Delete.Therewassomethingwronge"),"warning")}))}))},delete_by_selected:function(){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(e){e.value&&(a().start(),a().set(.1),axios.post("brands/delete/by_selection",{selectedIds:t.selectedIds}).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.TitleBrand"),"success"),Fire.$emit("Delete_Brand")})).catch((function(){setTimeout((function(){return a().done()}),500),t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")})))}))}},created:function(){var t=this;this.Get_Brands(1),Fire.$on("Event_Brand",(function(){setTimeout((function(){t.Get_Brands(t.serverParams.page),t.$bvModal.hide("New_brand")}),500)})),Fire.$on("Delete_Brand",(function(){setTimeout((function(){t.Get_Brands(t.serverParams.page)}),500)}))}};const l=(0,r(51900).Z)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("Brand"),folder:t.$t("Products")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("b-card",{staticClass:"wrapper"},[e("vue-good-table",{attrs:{mode:"remote",columns:t.columns,totalRows:t.totalRows,rows:t.brands,"search-options":{enabled:!0,placeholder:t.$t("Search_this_table")},"select-options":{enabled:!0,clearSelectionText:""},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},on:{"on-page-change":t.onPageChange,"on-per-page-change":t.onPerPageChange,"on-sort-change":t.onSortChange,"on-search":t.onSearch,"on-selected-rows-change":t.selectionChanged},scopedSlots:t._u([{key:"table-row",fn:function(r){return["actions"==r.column.field?e("span",[e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Edit"},on:{click:function(e){return t.Edit_Brand(r.row)}}},[e("i",{staticClass:"i-Edit text-25 text-success"})]),t._v(" "),e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Delete"},on:{click:function(e){return t.Delete_Brand(r.row.id)}}},[e("i",{staticClass:"i-Close-Window text-25 text-danger"})])]):"image"==r.column.field?e("span",[e("b-img",{attrs:{thumbnail:"",height:"50",width:"50",fluid:"",src:"/images/brands/"+r.row.image,alt:"image"}})],1):t._e()]}}],null,!1,545511441)},[e("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[e("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.delete_by_selected()}}},[t._v(t._s(t.$t("Del")))])]),t._v(" "),e("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[e("b-button",{staticClass:"btn-rounded",attrs:{variant:"btn btn-primary btn-icon m-1"},on:{click:function(e){return t.New_Brand()}}},[e("i",{staticClass:"i-Add"}),t._v("\n          "+t._s(t.$t("Add"))+"\n        ")])],1)])],1),t._v(" "),e("validation-observer",{ref:"Create_brand"},[e("b-modal",{attrs:{"hide-footer":"",size:"md",id:"New_brand",title:t.editmode?t.$t("Edit"):t.$t("Add")}},[e("b-form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.Submit_Brand.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("validation-provider",{attrs:{name:"Brand Name",rules:{required:!0,min:3,max:20}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("BrandName")+" *"}},[e("b-form-input",{attrs:{placeholder:t.$t("Enter_Name_Brand"),state:t.getValidationState(r),"aria-describedby":"Name-feedback",label:"Name"},model:{value:t.brand.name,callback:function(e){t.$set(t.brand,"name",e)},expression:"brand.name"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Name-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("validation-provider",{attrs:{name:"Brand Description",rules:{max:30}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("BrandDescription")}},[e("b-form-textarea",{attrs:{rows:"3",placeholder:t.$t("Enter_Description_Brand"),state:t.getValidationState(r),"aria-describedby":"Description-feedback",label:"Description"},model:{value:t.brand.description,callback:function(e){t.$set(t.brand,"description",e)},expression:"brand.description"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Description-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("validation-provider",{ref:"Image",attrs:{name:"Image",rules:"mimes:image/*|size:200"},scopedSlots:t._u([{key:"default",fn:function(r){r.validate;var n=r.valid,a=r.errors;return e("b-form-group",{attrs:{label:t.$t("BrandImage")}},[e("input",{class:{"is-invalid":!!a.length},attrs:{state:!a[0]&&(!!n||null),label:"Choose Image",type:"file"},on:{change:t.onFileSelected}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Image-feedback"}},[t._v(t._s(a[0]))])],1)}}])})],1),t._v(" "),e("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[e("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.SubmitProcessing}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);