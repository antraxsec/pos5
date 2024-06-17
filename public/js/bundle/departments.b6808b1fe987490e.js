"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3428],{97396:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var n=a(74865),s=a.n(n);const i={metaInfo:{title:"Department"},data:function(){return{isLoading:!0,SubmitProcessing:!1,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},selectedIds:[],totalRows:"",search:"",limit:"10",editmode:!1,departments:{},employees:[],companies:[],department:{department:"",company_id:"",department_head:""}}},computed:{columns:function(){return[{label:this.$t("department"),field:"department",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Department_Head"),field:"employee_head",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Company"),field:"company_name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{updateParams:function(t){this.serverParams=Object.assign({},this.serverParams,t)},onPageChange:function(t){var e=t.currentPage;this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Department(e))},onPerPageChange:function(t){var e=t.currentPerPage;this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Department(1))},selectionChanged:function(t){var e=this,a=t.selectedRows;this.selectedIds=[],a.forEach((function(t,a){e.selectedIds.push(t.id)}))},onSortChange:function(t){"company_name"==t[0].field||t[0].field,this.updateParams({sort:{type:t[0].type,field:t[0].field}}),this.Get_Department(this.serverParams.page)},onSearch:function(t){this.search=t.searchTerm,this.Get_Department(this.serverParams.page)},getValidationState:function(t){var e=t.dirty,a=t.validated,n=t.valid;return e||a?void 0===n?null:n:null},Submit_Department:function(){var t=this;this.$refs.Create_Department.validate().then((function(e){e?t.editmode?t.Update_Department():t.Create_Department():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},makeToast:function(t,e,a){this.$root.$bvToast.toast(e,{title:a,variant:t,solid:!0})},New_Department:function(){this.reset_Form(),this.editmode=!1,this.Get_Data_Create(),this.$bvModal.show("New_Department")},Edit_Department:function(t){this.Get_Department(this.serverParams.page),this.reset_Form(),this.Get_Data_Edit(t.id),this.Get_employees_by_company(t.company_id),this.department=t,this.editmode=!0,this.$bvModal.show("New_Department")},Selected_Company:function(t){null===t&&(this.department.company_id=""),this.employees=[],this.department.department_head="",this.Get_employees_by_company(t)},Selected_Employee:function(t){null===t&&(this.department.department_head="")},Get_employees_by_company:function(t){var e=this;axios.get("/core/get_employees_by_company?id="+t).then((function(t){var a=t.data;return e.employees=a}))},Get_Data_Create:function(){var t=this;axios.get("/departments/create").then((function(e){t.companies=e.data.companies})).catch((function(t){}))},Get_Data_Edit:function(t){var e=this;axios.get("/departments/"+t+"/edit").then((function(t){e.companies=t.data.companies})).catch((function(t){}))},Get_Department:function(t){var e=this;s().start(),s().set(.1),axios.get("departments?page="+t+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(t){e.totalRows=t.data.totalRows,e.departments=t.data.departments,s().done(),e.isLoading=!1})).catch((function(t){s().done(),setTimeout((function(){e.isLoading=!1}),500)}))},Create_Department:function(){var t=this;this.SubmitProcessing=!0,axios.post("departments",{department:this.department.department,company_id:this.department.company_id,department_head:this.department.department_head}).then((function(e){t.SubmitProcessing=!1,Fire.$emit("Event_Department"),t.makeToast("success",t.$t("Created_in_successfully"),t.$t("Success"))})).catch((function(e){t.SubmitProcessing=!1,t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},Update_Department:function(){var t=this;this.SubmitProcessing=!0,axios.put("departments/"+this.department.id,{department:this.department.department,company_id:this.department.company_id,department_head:this.department.department_head}).then((function(e){t.SubmitProcessing=!1,Fire.$emit("Event_Department"),t.makeToast("success",t.$t("Updated_in_successfully"),t.$t("Success"))})).catch((function(e){t.SubmitProcessing=!1,t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},reset_Form:function(){this.department={id:"",department:"",company_id:"",department_head:""}},Remove_Department:function(t){var e=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(a){a.value&&axios.delete("departments/"+t).then((function(){e.$swal(e.$t("Delete.Deleted"),e.$t("Deleted_in_successfully"),"success"),Fire.$emit("Delete_Department")})).catch((function(){e.$swal(e.$t("Delete.Failed"),e.$t("Delete.Therewassomethingwronge"),"warning")}))}))},delete_by_selected:function(){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(e){e.value&&(s().start(),s().set(.1),axios.post("departments/delete/by_selection",{selectedIds:t.selectedIds}).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Deleted_in_successfully"),"success"),Fire.$emit("Delete_Department")})).catch((function(){setTimeout((function(){return s().done()}),500),t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")})))}))}},created:function(){var t=this;this.Get_Department(1),Fire.$on("Event_Department",(function(){setTimeout((function(){t.Get_Department(t.serverParams.page),t.$bvModal.hide("New_Department")}),500)})),Fire.$on("Delete_Department",(function(){setTimeout((function(){t.Get_Department(t.serverParams.page)}),500)}))}},r=i;const o=(0,a(51900).Z)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("department"),folder:t.$t("hrm")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("b-card",{staticClass:"wrapper"},[e("vue-good-table",{attrs:{mode:"remote",columns:t.columns,totalRows:t.totalRows,rows:t.departments,"search-options":{enabled:!0,placeholder:t.$t("Search_this_table")},"select-options":{enabled:!0,clearSelectionText:""},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},on:{"on-page-change":t.onPageChange,"on-per-page-change":t.onPerPageChange,"on-sort-change":t.onSortChange,"on-search":t.onSearch,"on-selected-rows-change":t.selectionChanged},scopedSlots:t._u([{key:"table-row",fn:function(a){return["actions"==a.column.field?e("span",[e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"cursor-pointer",attrs:{title:"Edit"},on:{click:function(e){return t.Edit_Department(a.row)}}},[e("i",{staticClass:"i-Edit text-25 text-success"})]),t._v(" "),e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"cursor-pointer",attrs:{title:"Delete"},on:{click:function(e){return t.Remove_Department(a.row.id)}}},[e("i",{staticClass:"i-Close-Window text-25 text-danger"})])]):t._e()]}}],null,!1,3823395130)},[e("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[e("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.delete_by_selected()}}},[t._v(t._s(t.$t("Del")))])]),t._v(" "),e("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[e("b-button",{staticClass:"btn-rounded",attrs:{variant:"btn btn-primary btn-icon m-1"},on:{click:function(e){return t.New_Department()}}},[e("i",{staticClass:"i-Add"}),t._v("\n          "+t._s(t.$t("Add"))+"\n        ")])],1)])],1),t._v(" "),e("validation-observer",{ref:"Create_Department"},[e("b-modal",{attrs:{"hide-footer":"",size:"md",id:"New_Department",title:t.editmode?t.$t("Edit"):t.$t("Add")}},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Department.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("validation-provider",{attrs:{name:"department",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-form-group",{attrs:{label:t.$t("department")+" *"}},[e("b-form-input",{attrs:{placeholder:t.$t("Enter_Department_Name"),state:t.getValidationState(a),"aria-describedby":"department-feedback",label:"department"},model:{value:t.department.department,callback:function(e){t.$set(t.department,"department",e)},expression:"department.department"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"department-feedback"}},[t._v(t._s(a.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("validation-provider",{attrs:{name:"Company",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.valid,s=a.errors;return e("b-form-group",{attrs:{label:t.$t("Company")+" *"}},[e("v-select",{staticClass:"required",class:{"is-invalid":!!s.length},attrs:{state:!s[0]&&(!!n||null),required:"",placeholder:t.$t("Choose_Company"),reduce:function(t){return t.value},options:t.companies.map((function(t){return{label:t.name,value:t.id}}))},on:{input:t.Selected_Company},model:{value:t.department.company_id,callback:function(e){t.$set(t.department,"company_id",e)},expression:"department.company_id"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}])})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:t.$t("Department_Head")}},[e("v-select",{attrs:{placeholder:t.$t("Choose_Department_Head"),reduce:function(t){return t.value},options:t.employees.map((function(t){return{label:t.username,value:t.id}}))},on:{input:t.Selected_Employee},model:{value:t.department.department_head,callback:function(e){t.$set(t.department,"department_head",e)},expression:"department.department_head"}})],1)],1),t._v(" "),e("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[e("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.SubmitProcessing}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);