(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32b188b4"],{"261f":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",{staticClass:"mt-3",style:"xs"===t.breakpointName||"sm"===t.breakpointName?"padding-top: 75px":"",attrs:{id:"createEWarranty",fluid:"",tag:"section"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"px-0 py-0",attrs:{cols:"12"}},[n("base-material-card",{staticClass:"px-5 py-3",staticStyle:{"margin-top":"20px"},attrs:{icon:"mdi-clipboard-text",title:"0"===String(t.uid)?"ĐĂNG KÝ TIÊM MỚI":"CẬP NHẬT THÔNG TIN NGƯỜI ĐĂNG KÝ"}},[n("v-btn",{staticClass:"mx-0",staticStyle:{position:"absolute",right:"20px",top:"15px"},attrs:{id:"xemdanhsach",dark:"",color:"#0072bc"},on:{click:function(a){return a.stopPropagation(),t.showDanhSach(a)}}},[n("v-icon",{staticClass:"mr-2",attrs:{dark:""}},[t._v(" mdi-format-list-bulleted ")]),t._v(" Danh sách đăng ký ")],1),n("v-form",{ref:"formDangKy",attrs:{"lazy-validation":"",id:"formDangKy"},model:{value:t.validFormAdd,callback:function(a){t.validFormAdd=a},expression:"validFormAdd"}},[n("v-container",{staticClass:"py-0 mt-3"},[t.dataHistory&&"add"===t.typeAction?n("v-row",[n("v-btn",{staticClass:"mx-3 mt-3",attrs:{dark:"",small:"",color:"#0072bc"},on:{click:function(a){return a.stopPropagation(),t.copyContent(a)}}},[n("v-icon",{staticClass:"mr-2",attrs:{dark:""}},[t._v(" mdi-content-copy ")]),t._v(" Sử dụng thông tin trước ")],1)],1):t._e(),n("v-row",[n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"mb-2"},[t._v("Họ và tên "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-text-field",{attrs:{rules:t.required,required:"",outlined:"",placeholder:"Họ và tên",dense:"","hide-details":"auto",id:"hoten",autofocus:""},on:{blur:t.formatHoTen,keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("gioitinh")}},model:{value:t.applicantInfo["HoVaTen"],callback:function(a){t.$set(t.applicantInfo,"HoVaTen",a)},expression:"applicantInfo['HoVaTen']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"mb-2"},[t._v("Giới tính ")]),n("v-autocomplete",{attrs:{items:t.listGioiTinh,placeholder:"Giới tính","item-text":"name","item-value":"value","hide-no-data":"",outlined:"",dense:"","hide-details":"auto",id:"gioitinh"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("ngaysinh")}},model:{value:t.applicantInfo["GioiTinh"],callback:function(a){t.$set(t.applicantInfo,"GioiTinh",a)},expression:"applicantInfo['GioiTinh']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"mb-2"},[t._v("Ngày sinh "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-text-field",{attrs:{rules:t.requiredBirthDate,placeholder:"dd/mm/yyyy, ddmmyyyy",dense:"","hide-details":"auto",outlined:"",id:"ngaysinh"},on:{blur:t.formatBirthDate,keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("cccd")}},model:{value:t.applicantDateFormatted,callback:function(a){t.applicantDateFormatted=a},expression:"applicantDateFormatted"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"mb-2"},[t._v("Số CMND/CCCD "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-text-field",{attrs:{rules:t.giayToLoaiKhac?t.required:t.requiredCredit,required:"",outlined:"",placeholder:"Số CMND/CCCD",dense:"",id:"cccd","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("bhyt")}},model:{value:t.applicantInfo["CMTCCCD"],callback:function(a){t.$set(t.applicantInfo,"CMTCCCD",a)},expression:"applicantInfo['CMTCCCD']"}}),n("v-checkbox",{staticClass:"mt-0 checkboxCmt",attrs:{label:"Giấy tờ loại khác"},model:{value:t.giayToLoaiKhac,callback:function(a){t.giayToLoaiKhac=a},expression:"giayToLoaiKhac"}})],1)],1),n("v-row",{staticClass:"mt-0"},[n("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"mb-2"},[t._v("Số thẻ BHYT")]),n("v-text-field",{attrs:{outlined:"",placeholder:"Số thẻ bảo hiểm y tế",dense:"","hide-details":"auto",id:"bhyt"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("sdt")}},model:{value:t.applicantInfo["SoTheBHYT"],callback:function(a){t.$set(t.applicantInfo,"SoTheBHYT",a)},expression:"applicantInfo['SoTheBHYT']"}})],1),n("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"mb-2"},[t._v("Số điện thoại "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-text-field",{attrs:{rules:t.requiredTelNo,required:"",outlined:"",placeholder:"Số điện thoại",dense:"","hide-details":"auto",id:"sdt"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("email")}},model:{value:t.applicantInfo["SoDienThoai"],callback:function(a){t.$set(t.applicantInfo,"SoDienThoai",a)},expression:"applicantInfo['SoDienThoai']"}})],1),n("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Email")]),n("v-text-field",{attrs:{outlined:"",placeholder:"Email",dense:"",id:"email","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("noio")}},model:{value:t.applicantInfo["Email"],callback:function(a){t.$set(t.applicantInfo,"Email",a)},expression:"applicantInfo['Email']"}})],1)],1),n("v-row",[n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"mb-2"},[t._v("Tỉnh/ Thành phố "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listTinhThanh,"item-text":"tinhThanhTen","item-value":"tinhThanhMa",id:"tinhthanh",rules:t.required,required:"",outlined:"",placeholder:"Tỉnh/ Thành phố",dense:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("quanhuyen")}},model:{value:t.tinhThanh,callback:function(a){t.tinhThanh=a},expression:"tinhThanh"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"mb-2"},[t._v("Quận/ Huyện "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listQuanHuyen,"item-text":"quanHuyenTen","item-value":"quanHuyenMa",id:"quanhuyen",rules:t.required,required:"",outlined:"",placeholder:"Quận/ Huyện",dense:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("xaphuong")}},model:{value:t.quanHuyen,callback:function(a){t.quanHuyen=a},expression:"quanHuyen"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Phường/ Xã "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listXaPhuong,"item-text":"phuongXaTen","item-value":"phuongXaMa",id:"xaphuong",rules:t.required,required:"",outlined:"",placeholder:"Phường/ Xã",dense:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("diabancoso")}},model:{value:t.xaPhuong,callback:function(a){t.xaPhuong=a},expression:"xaPhuong"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Tổ dân phố/thôn/ấp "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listDiaBan,rules:t.required,required:"","item-text":"tenDiaBan","item-value":"id",outlined:"",placeholder:"Tổ dân phố, khóm ấp, thôn bản…",dense:"","hide-details":"auto",id:"diabancoso"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("noio")}},model:{value:t.applicantInfo["DiaBanCoSo_ID"],callback:function(a){t.$set(t.applicantInfo,"DiaBanCoSo_ID",a)},expression:"applicantInfo['DiaBanCoSo_ID']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Địa chỉ chi tiết "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-text-field",{attrs:{rules:t.required,required:"",outlined:"",placeholder:"Số nhà, đường, tổ dân phố, khóm ấp, thôn bản…",dense:"",id:"noio","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("cosoyte")}},model:{value:t.applicantInfo["DiaChiNoiO"],callback:function(a){t.$set(t.applicantInfo,"DiaChiNoiO",a)},expression:"applicantInfo['DiaChiNoiO']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"12"}},[n("div",{staticClass:"mb-2"},[t._v("Cơ sở y tế "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listCoSoYTe,rules:t.required,required:"","item-text":"tenCoSo","item-value":"maCoSo",outlined:"",placeholder:"Cơ sở y tế",dense:"","hide-details":"auto",id:"cosoyte",clearable:""},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("nhomdoituong")}},model:{value:t.coSoYTe,callback:function(a){t.coSoYTe=a},expression:"coSoYTe"}})],1)],1),n("v-row",[n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Nhóm đối tượng "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-autocomplete",{ref:"chondoituong",attrs:{items:t.listDoiTuong,placeholder:"Nhóm đối tượng","item-text":"doiTuongMoTa","item-value":"id","hide-no-data":"",rules:t.required,required:"",outlined:"",dense:"","hide-details":"auto",id:"nhomdoituong"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("donvicongtac")}},scopedSlots:t._u([{key:"selection",fn:function(a){return[n("span",[t._v(t._s(a.item.doiTuongMoTa))])]}},{key:"item",fn:function(a){return[n("span",[t._v(t._s(a.item.doiTuongMoTa))])]}}]),model:{value:t.applicantInfo["NhomDoiTuong"],callback:function(a){t.$set(t.applicantInfo,"NhomDoiTuong",a)},expression:"applicantInfo['NhomDoiTuong']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Đơn vị công tác")]),n("v-text-field",{attrs:{outlined:"",placeholder:"Đơn vị công tác",dense:"",id:"donvicongtac","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("dantoc")}},model:{value:t.applicantInfo["DonViCongTac"],callback:function(a){t.$set(t.applicantInfo,"DonViCongTac",a)},expression:"applicantInfo['DonViCongTac']"}})],1)],1),n("v-row",[n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Dân tộc")]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listDanToc,"item-text":"danTocTen","item-value":"danTocMa",outlined:"",placeholder:"Dân tộc",dense:"","hide-details":"auto",id:"dantoc"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("quoctich")}},model:{value:t.applicantInfo["DanToc_Ma"],callback:function(a){t.$set(t.applicantInfo,"DanToc_Ma",a)},expression:"applicantInfo['DanToc_Ma']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Quốc tịch ")]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listQuocTich,"item-text":"quocGiaTen","item-value":"quocGiaMa",outlined:"",placeholder:"Quốc tịch",dense:"","hide-details":"auto",id:"quoctich"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("tsdiung")}},model:{value:t.applicantInfo["QuocTich_Ma"],callback:function(a){t.$set(t.applicantInfo,"QuocTich_Ma",a)},expression:"applicantInfo['QuocTich_Ma']"}})],1)],1),n("v-row",[n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"12"}},[n("div",{staticClass:"mb-2"},[t._v("Tiền sử dị ứng")]),n("v-textarea",{attrs:{outlined:"",placeholder:"",dense:"",id:"tsdiung","hide-details":"auto",rows:"3"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("benhdangmac")}},model:{value:t.applicantInfo["TienSuDiUng"],callback:function(a){t.$set(t.applicantInfo,"TienSuDiUng",a)},expression:"applicantInfo['TienSuDiUng']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Các bệnh lý đang mắc ")]),n("v-textarea",{attrs:{outlined:"",placeholder:"",dense:"",id:"benhdangmac","hide-details":"auto",rows:"3"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("thuocdangdung")}},model:{value:t.applicantInfo["CacBenhLyDangMac"],callback:function(a){t.$set(t.applicantInfo,"CacBenhLyDangMac",a)},expression:"applicantInfo['CacBenhLyDangMac']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Các thuốc đang dùng")]),n("v-textarea",{attrs:{outlined:"",placeholder:"",dense:"",id:"thuocdangdung","hide-details":"auto",rows:"3"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("ngaydangky")}},model:{value:t.applicantInfo["CacThuocDangDung"],callback:function(a){t.$set(t.applicantInfo,"CacThuocDangDung",a)},expression:"applicantInfo['CacThuocDangDung']"}})],1)],1),n("v-row",[n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Ngày đăng ký tiêm")]),n("v-text-field",{attrs:{placeholder:"dd/mm/yyyy, ddmmyyyy",dense:"","hide-details":"auto",outlined:"",id:"ngaydangky"},on:{blur:t.formatNgayTiem,keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("luuy")}},model:{value:t.ngayDuKienFormatted,callback:function(a){t.ngayDuKienFormatted=a},expression:"ngayDuKienFormatted"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Lưu ý")]),n("v-text-field",{attrs:{outlined:"",placeholder:"",dense:"","hide-details":"auto",id:"luuy"},model:{value:t.applicantInfo["GhiChu"],callback:function(a){t.$set(t.applicantInfo,"GhiChu",a)},expression:"applicantInfo['GhiChu']"}})],1)],1)],1)],1),n("v-row",{staticClass:"mt-5"},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},["0"===String(t.uid)?n("v-btn",{staticClass:"mr-4",attrs:{color:"red"},on:{click:t.huyDangKy}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),n("span",[t._v("HỦY")])],1):t._e(),"0"===String(t.uid)?n("v-btn",{staticClass:"mr-3",attrs:{color:"#0072bc",loading:t.processingAction,disabled:t.processingAction},on:{click:t.submitForm}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-content-save-outline ")]),n("span",[t._v("ĐĂNG KÝ TIÊM")])],1):t._e(),"0"!==String(t.uid)?n("v-btn",{staticClass:"mr-3",attrs:{color:"#0072bc"},on:{click:t.submitForm}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-content-save-outline ")]),n("span",[t._v("CẬP NHẬT THÔNG TIN")])],1):t._e()],1)],1)],1)],1)],1)],1)},i=[],o=n("3835"),c=(n("498a"),n("8ba4"),n("a9e3"),n("7db0"),n("ac1f"),n("1276"),n("fb6a"),n("a15b"),n("99af"),n("4d90"),n("d3b7"),n("25f0"),n("1157")),r=n.n(c),s={name:"CreateEWarranty",props:["uid"],data:function(){return{loading:!1,validFormAdd:!0,giayToLoaiKhac:!1,tab:null,typeAction:"add",processingAction:!1,applicantInfo:{HoVaTen:"",NgaySinh:"",GioiTinh:"",CMTCCCD:"",NgheNghiep:"",NhomDoiTuong:"",DonViCongTac:"",SoDienThoai:"",SoDienThoaiZalo:"",Email:"",MaSoBHXH:"",SoTheBHYT:"",DiaChiNoiO:"",TinhThanh_Ma:"",TinhThanh_Ten:"",QuanHuyen_Ma:"",QuanHuyen_Ten:"",PhuongXa_Ma:"",PhuongXa_Ten:"",DiaBanCoSo_ID:"",CoSoYTe_Ma:"",CoSoYTe_Ten:"",DanToc_Ma:"01",QuocTich_Ma:"VN",TienSuDiUng:"",CacBenhLyDangMac:"",CacThuocDangDung:"",GhiChu:"",NgayDangKi:"",TinhTrangDangKi:0},listGioiTinh:[{name:"Nam",value:0},{name:"Nữ",value:1},{name:"Không xác định",value:2}],listDoiTuong:[],listTinhThanh:[],tinhThanh:"01",listQuanHuyen:[],quanHuyen:"004",listXaPhuong:[],xaPhuong:"",listDiaBan:[],listCoSoYTe:[],coSoYTe:"",listQuocTich:[],listDanToc:[],menuApplicantIdDate:!1,menuDate:!1,applicantDate:null,applicantDateFormatted:null,birthDate:null,ngayDuKienFormatted:null,ngayDuKien:null,dataHistory:"",required:[function(t){return!!t||"Thông tin bắt buộc"}],requiredSex:[function(t){return!(!t&&0!=t)||"Thông tin bắt buộc"}],requiredCredit:[function(t){if(t&&9===t.length){var a=/^(([0-9]{9,9}))$/;return a.test(t)||"Số CMND/CCCD gồm 9 hoặc 12 ký tự 0-9"}var n=/^(([0-9]{12,12}))$/;return n.test(t)||"Số CMND/CCCD gồm 9 hoặc 12 ký tự 0-9"},function(t){return!!String(t).trim()||"Thông tin bắt buộc"}],requiredTelNo:[function(t){var a=/^0([1-9]{1}\d{8})$/;return!t||(a.test(t)||"Số điện thoại gồm 10 số")},function(t){return!!String(t).trim()||"Thông tin bắt buộc"}],telNo:function(t){var a=/^0([1-9]{1}\d{8})$/;return!t||(a.test(t)||"Số điện thoại gồm 10 số")},require:function(t){return!!String(t).trim()||"Thông tin bắt buộc"},requiredBirthDate:[function(t){return!!t||"Thông tin bắt buộc"}]}},watch:{$route:function(t,a){var n=this;t.query;n.getCoSoYTe(),n.getDiaBanCoSo(),n.getQuocGia(),n.getNhomDoiTuong(),n.getDanToc(),n.getTinhThanh(),"0"===String(n.uid)?n.typeAction="add":(n.typeAction="update",n.bindDataUpdate())},tinhThanh:function(t){this.applicantInfo.TinhThanh_Ma=t,this.getQuanHuyen(t)},quanHuyen:function(t){this.applicantInfo.QuanHuyen_Ma=t,this.getXaPhuong(t)},xaPhuong:function(t){this.applicantInfo.PhuongXa_Ma=t},coSoYTe:function(t){this.applicantInfo.CoSoYTe_Ma=t},birthDate:function(t){this.applicantDateFormatted=this.formatDate(this.birthDate)},ngayDuKien:function(t){this.ngayDuKienFormatted=this.formatDate(this.ngayDuKien)},menuApplicantIdDate:function(t){var a=this;t&&this.$nextTick((function(){return a.$refs.picker.activePicker="YEAR"}))}},computed:{breakpointName:function(){return this.$store.getters.getBreakpointName},registrationUpdate:function(){return this.$store.getters.getRegistrationUpdate}},created:function(){var t=this;t.$store.commit("SET_INDEXTAB",1);var a=this.$store.getters.getIsSigned;if(a){try{var n=localStorage.getItem("dataHistory");t.dataHistory=n?JSON.parse(n):""}catch(i){}if(t.getCoSoYTe(),t.getDiaBanCoSo(),t.getQuocGia(),t.getNhomDoiTuong(),t.getDanToc(),t.getTinhThanh(),"0"===String(t.uid)){t.typeAction="add";try{var e=localStorage.getItem("user");e&&JSON.parse(e)&&(t.applicantInfo["DiaBanCoSo_ID"]=JSON.parse(e)["diaBanCoSoId"])}catch(i){}}else t.typeAction="update",t.bindDataUpdate()}else t.$router.push({path:"/login"})},methods:{autoBind:function(){var t=this;console.log("add",r()("#nhomdoituong").val()),r()("#nhomdoituong").val()&&Number.isInteger(Number(r()("#nhomdoituong").val()))&&r()("#nhomdoituong").val().length<=2&&(t.applicantInfo["NhomDoiTuong"]=Number(r()("#nhomdoituong").val())-1),t.$refs.chondoituong.isMenuActive=!1},getUserInfo:function(){var t=this;try{var a=JSON.parse(localStorage.getItem("user"));a["user_id"]||t.$router.push({path:"/login"});var n={user_id:a["user_id"]};t.$store.dispatch("getUserInfo",n).then((function(t){})).catch((function(){t.$router.push({path:"/login"})}))}catch(e){t.$router.push({path:"/login"})}},submitForm:function(){var t=this;if(!t.processingAction){t.processingAction=!0;var a=t.checkTuoi();if(t.$refs.formDangKy.validate())if(a){t.formatDataInput();var n={data:t.applicantInfo};if("add"===t.typeAction)try{t.dataHistory=t.applicantInfo?t.applicantInfo:"",localStorage.setItem("dataHistory",JSON.stringify(t.applicantInfo))}catch(e){}"add"===t.typeAction?t.$store.dispatch("createRegistration",n).then((function(a){t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Đăng ký thành công",color:"success"}),t.processingAction=!1,t.tinhThanh="01",t.quanHuyen="004",t.applicantInfo["DanToc_Ma"]="01",t.applicantInfo["QuocTich_Ma"]="VN",t.applicantInfo["HoVaTen"]="",t.applicantInfo["GioiTinh"]="",t.applicantDateFormatted="",t.applicantInfo["CMTCCCD"]="",t.applicantInfo["SoTheBHYT"]="",t.applicantInfo["SoDienThoai"]="",t.$refs.formDangKy.resetValidation(),t.giayToLoaiKhac=!1,r()("html, body").animate({scrollTop:r()("#xemdanhsach").offset().top},500,"linear"),r()("#hoten").focus()})).catch((function(){t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Đăng ký không thành công",color:"error"}),t.processingAction=!1})):(n["id"]=t.uid,t.$store.dispatch("updateRegistration",n).then((function(a){t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Cập nhật thành công",color:"success"}),t.processingAction=!1,t.$router.push("/pages/danh-sach-dang-ky-tiem-moi")})).catch((function(){t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Cập nhật không thành công",color:"error"}),t.processingAction=!1})))}else t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Người đăng ký chưa đủ 18 tuổi",color:"error"}),t.processingAction=!1;else t.processingAction=!1,t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Vui lòng nhập đầy đủ các thông tin bắt buộc",color:"error"}),r()("html, body").animate({scrollTop:r()("#xemdanhsach").offset().top},500,"linear")}},copyContent:function(){var t=this;try{var a=localStorage.getItem("dataHistory");t.dataHistory=a?JSON.parse(a):""}catch(n){}t.applicantInfo["Email"]=t.dataHistory["Email"],t.applicantInfo["NhomDoiTuong"]=t.dataHistory["NhomDoiTuong"],t.applicantInfo["DiaChiNoiO"]=t.dataHistory["DiaChiNoiO"],t.tinhThanh=t.dataHistory["TinhThanh_Ma"],t.quanHuyen=t.dataHistory["QuanHuyen_Ma"],t.xaPhuong=t.dataHistory["PhuongXa_Ma"],t.applicantInfo["DiaBanCoSo_ID"]=t.dataHistory["DiaBanCoSo_ID"],t.coSoYTe=t.dataHistory["CoSoYTe_Ma"],t.applicantInfo["DanToc_Ma"]=t.dataHistory["DanToc_Ma"],t.applicantInfo["QuocTich_Ma"]=t.dataHistory["QuocTich_Ma"],t.applicantInfo["DonViCongTac"]=t.dataHistory["DonViCongTac"],t.applicantInfo["TienSuDiUng"]=t.dataHistory["TienSuDiUng"],t.applicantInfo["CacBenhLyDangMac"]=t.dataHistory["CacBenhLyDangMac"],t.applicantInfo["CacThuocDangDung"]=t.dataHistory["CacThuocDangDung"],t.ngayDuKienFormatted=t.dataHistory["NgayDangKi"],t.applicantInfo["GhiChu"]=t.dataHistory["GhiChu"]},huyDangKy:function(){var t=this;t.$refs.formDangKy.reset(),t.$refs.formDangKy.resetValidation(),t.applicantInfo["DanToc_Ma"]="01",t.applicantInfo["QuocTich_Ma"]="VN"},bindDataUpdate:function(){var t=this;t.applicantInfo.CacBenhLyDangMac=t.registrationUpdate.cacBenhLyDangMac,t.applicantInfo.CacThuocDangDung=t.registrationUpdate.cacThuocDangDung,t.applicantInfo["CMTCCCD"]=t.registrationUpdate.cmtcccd,t.coSoYTe=t.registrationUpdate.coSoYTeMa,t.applicantInfo.DanToc_Ma=t.registrationUpdate.danTocMa,t.applicantInfo.DiaBanCoSo_ID=t.registrationUpdate.diaBanCoSoId,t.applicantInfo.DiaChiNoiO=t.registrationUpdate.diaChiNoiO,t.applicantInfo.DonViCongTac=t.registrationUpdate.donViCongTac,t.applicantInfo.Email=t.registrationUpdate.email,t.applicantInfo.GhiChu=t.registrationUpdate.ghiChu,t.applicantInfo.GioiTinh=t.registrationUpdate.gioiTinh,t.applicantInfo.HoVaTen=t.registrationUpdate.hoVaTen,t.applicantInfo.MaSoBHXH=t.registrationUpdate.maSoBHXH,t.ngayDuKienFormatted=t.registrationUpdate.ngayDangKi,t.applicantDateFormatted=t.registrationUpdate.ngaySinh,t.applicantInfo.NgheNghiep=t.registrationUpdate.ngheNghiep,t.applicantInfo.NhomDoiTuong=t.registrationUpdate.nhomDoiTuong,t.tinhThanh=t.registrationUpdate.tinhThanhMa,t.quanHuyen=t.registrationUpdate.quanHuyenMa,t.xaPhuong=t.registrationUpdate.phuongXaMa,t.applicantInfo.QuocTich_Ma=t.registrationUpdate.quocTichMa,t.applicantInfo.SoDienThoai=t.registrationUpdate.soDienThoai,t.applicantInfo.SoTheBHYT=t.registrationUpdate.soTheBHYT,t.applicantInfo.TienSuDiUng=t.registrationUpdate.tienSuDiUng,t.applicantInfo.TinhTrangDangKi=t.registrationUpdate.tinhTrangDangKi},formatDataInput:function(){var t=this;try{if(t.tinhThanh){var a=t.listTinhThanh.find((function(a){return a.tinhThanhMa==t.tinhThanh}));t.applicantInfo.TinhThanh_Ma=t.tinhThanh,t.applicantInfo.TinhThanh_Ten=a?a["tinhThanhTen"]:""}if(t.quanHuyen){var n=t.listQuanHuyen.find((function(a){return a.quanHuyenMa==t.quanHuyen}));t.applicantInfo.QuanHuyen_Ma=t.quanHuyen,t.applicantInfo.QuanHuyen_Ten=n?n["quanHuyenTen"]:""}if(t.xaPhuong){var e=t.listXaPhuong.find((function(a){return a.phuongXaMa==t.xaPhuong}));t.applicantInfo.PhuongXa_Ma=t.xaPhuong,t.applicantInfo.PhuongXa_Ten=e?e["phuongXaTen"]:""}if(t.coSoYTe){var i=t.listCoSoYTe.find((function(a){return a.maCoSo==t.coSoYTe}));t.applicantInfo.CoSoYTe_Ma=t.coSoYTe,t.applicantInfo.CoSoYTe_Ten=i?i["tenCoSo"]:""}t.applicantInfo.NgaySinh=t.applicantDateFormatted,t.applicantInfo.NgayDangKi=t.ngayDuKienFormatted,console.log("applicantInfo",t.applicantInfo)}catch(o){t.processingAction=!1}},checkTuoi:function(){var t=this,a="",n="",e=String(t.applicantDateFormatted).trim().length,i=String(t.applicantDateFormatted).split("/"),o=(new Date).getFullYear();if(e&&4==e)n=Number(t.applicantDateFormatted),a=Number(o)-n;else if(e&&e>4&&3===i.length){var c=t.parseDate(t.applicantDateFormatted);a=Math.floor((new Date-new Date(c).getTime())/315576e5)}return a>=18},getDiaBanCoSo:function(t){var a=this,n={id:-1};if(t){var e=a.listCoSoYTe.find((function(a){return a.maCoSo==t}));n={id:e["id"]}}a.$store.dispatch("getDiaBanCoSo",n).then((function(t){if(t.hasOwnProperty("data")&&t.data.length&&(a.listDiaBan=t.data,0==a.uid))try{var n=localStorage.getItem("user"),e=JSON.parse(n)["diaBanCoSoId"],i=a.listDiaBan.find((function(t){return t.id==e}));i&&(a.applicantInfo["DiaChiNoiO"]=i["tenDiaBan"])}catch(o){}}))},getCoSoYTe:function(){var t=this,a={};t.$store.dispatch("getCoSoYTe",a).then((function(a){t.listCoSoYTe=a||[];try{var n=localStorage.getItem("user");if(n&&JSON.parse(n)&&JSON.parse(n)["coSoYTeId"]){var e=t.listCoSoYTe.find((function(t){return t.id==JSON.parse(n)["coSoYTeId"]}));t.coSoYTe=e["maCoSo"]}}catch(i){}}))},getNhomDoiTuong:function(){var t=this,a={};t.$store.dispatch("getNhomDoiTuong",a).then((function(a){var n=[];if(a&&a.length)for(var e=0;e<a.length;e++){var i={id:a[e]["id"],doiTuongMoTa:a[e]["doiTuongMa"]+" "+a[e]["doiTuongMoTa"]};n.push(i)}t.listDoiTuong=n}))},getQuocGia:function(){var t=this,a={};t.$store.dispatch("getQuocGia",a).then((function(a){t.listQuocTich=a||[]}))},getDanToc:function(){var t=this,a={};t.$store.dispatch("getDanToc",a).then((function(a){t.listDanToc=a||[]}))},getTinhThanh:function(){var t=this,a={};t.$store.dispatch("getDanhMucTinhThanh",a).then((function(a){t.listTinhThanh=a||[],t.tinhThanh&&t.listTinhThanh.length&&t.getQuanHuyen(t.tinhThanh)})).catch((function(a){a&&a.response&&401==a.response.status&&t.$router.push({path:"/login"})}))},getQuanHuyen:function(t){var a=this;if(t){var n=a.listTinhThanh.find((function(a){return a.tinhThanhMa==t})),e={idParent:n["id"]};a.$store.dispatch("getDanhMucQuanHuyen",e).then((function(t){a.listQuanHuyen=t||[],a.quanHuyen&&a.getXaPhuong(a.quanHuyen)}))}},getXaPhuong:function(t){var a=this;if(t){var n=a.listQuanHuyen.find((function(a){return a.quanHuyenMa==t}));if(n){var e={idParent:n["id"]};a.$store.dispatch("getDanhMucXaPhuong",e).then((function(t){a.listXaPhuong=t||[]}))}}},showDanhSach:function(){var t=this;t.$router.push({path:"/pages/danh-sach-dang-ky-tiem-moi"})},nextFocus:function(t){r()("#"+t).focus()},formatHoTen:function(){var t=this;if(t.applicantInfo.HoVaTen){for(var a=String(t.applicantInfo.HoVaTen).toLocaleLowerCase(),n=a.split(" "),e=0;e<n.length;e++)n[e]=n[e].charAt(0).toUpperCase()+n[e].slice(1);var i=n.join(" ");t.applicantInfo.HoVaTen=i}},convertDate:function(t){if(t){var a="";try{a=t.slice(6,8)+"/"+t.slice(4,6)+"/"+t.slice(0,4)}catch(n){}return a}return""},formatBirthDate:function(){var t=this,a=String(t.applicantDateFormatted).trim().length,n=String(t.applicantDateFormatted).split("/"),e=(new Date).getFullYear(),i=0;if(a&&4==a);else if(a&&a>4&&3===n.length&&n[2])t.applicantDateFormatted=t.translateDate(t.applicantDateFormatted);else if(a&&8===a){var o=String(t.applicantDateFormatted);t.applicantDateFormatted=o.slice(0,2)+"/"+o.slice(2,4)+"/"+o.slice(4,8)}else t.applicantDateFormatted="";if(t.applicantDateFormatted){if(4===a)i=e-Number(t.applicantDateFormatted);else{var c=t.parseDate(t.applicantDateFormatted);i=Math.floor((new Date-new Date(c).getTime())/315576e5)}i<18&&t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Người đăng ký chưa đủ 18 tuổi",color:"error"})}},formatNgayTiem:function(){var t=this,a=String(t.ngayDuKienFormatted).trim().length,n=String(t.ngayDuKienFormatted).split("/");if(a&&a>4&&3===n.length&&n[2])t.ngayDuKienFormatted=t.translateDate(t.ngayDuKienFormatted);else if(a&&8===a){var e=String(t.ngayDuKienFormatted);t.ngayDuKienFormatted=e.slice(0,2)+"/"+e.slice(2,4)+"/"+e.slice(4,8)}else t.ngayDuKienFormatted=""},translateDate:function(t){if(!t)return null;var a=t.split("/"),n=Object(o["a"])(a,3),e=n[0],i=n[1],c=n[2];return"".concat(e.padStart(2,"0"),"/").concat(i.padStart(2,"0"),"/").concat(c)},formatDate:function(t){if(!t)return null;var a=t.split("-"),n=Object(o["a"])(a,3),e=n[0],i=n[1],c=n[2];return"".concat(c,"/").concat(i,"/").concat(e)},parseDate:function(t){if(!t)return null;console.log("date",t);var a=t.split("/"),n=Object(o["a"])(a,3),e=n[0],i=n[1],c=n[2];return console.log("date","".concat(c,"-").concat(i.padStart(2,"0"),"-").concat(e.padStart(2,"0"))),"".concat(c,"-").concat(i.padStart(2,"0"),"-").concat(e.padStart(2,"0"))},getMaxdate:function(){var t=new Date;return"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"),"-").concat(t.getDate().toString().padStart(2,"0"))},getMindate:function(){var t=new Date;return"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"),"-").concat(t.getDate().toString().padStart(2,"0"))}}},l=s,u=(n("a352"),n("2877")),d=n("6544"),p=n.n(d),h=n("c6a6"),g=n("8336"),f=n("ac7c"),m=n("62ad"),y=n("a523"),T=n("4bd4"),v=n("132d"),D=n("0fd9"),C=n("8654"),k=n("a844"),S=Object(u["a"])(l,e,i,!1,null,"03128e4c",null);a["default"]=S.exports;p()(S,{VAutocomplete:h["a"],VBtn:g["a"],VCheckbox:f["a"],VCol:m["a"],VContainer:y["a"],VForm:T["a"],VIcon:v["a"],VRow:D["a"],VTextField:C["a"],VTextarea:k["a"]})},"7c3d":function(t,a,n){},a352:function(t,a,n){"use strict";n("7c3d")}}]);