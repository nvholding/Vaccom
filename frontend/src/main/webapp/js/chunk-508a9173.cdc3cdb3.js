(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-508a9173"],{"0fd9":function(t,a,e){"use strict";var i=e("ade3"),n=e("5530"),s=(e("caad"),e("2532"),e("99af"),e("b64b"),e("ac1f"),e("5319"),e("4ec9"),e("d3b7"),e("3ca3"),e("ddb0"),e("159b"),e("4b85"),e("2b0e")),o=e("d9f7"),r=e("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,a){return c.reduce((function(e,i){return e[t+Object(r["D"])(i)]=a(),e}),{})}var p=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:p}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},h=u("justify",(function(){return{type:String,default:null,validator:f}})),g=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},b=u("alignContent",(function(){return{type:String,default:null,validator:g}})),v={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(b)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,a,e){var i=m[t];if(null!=e){if(a){var n=a.replace(t,"");i+="-".concat(n)}return i+="-".concat(e),i.toLowerCase()}}var j=new Map;a["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:p}},d),{},{justify:{type:String,default:null,validator:f}},h),{},{alignContent:{type:String,default:null,validator:g}},b),render:function(t,a){var e=a.props,n=a.data,s=a.children,r="";for(var c in e)r+=String(e[c]);var l=j.get(r);return l||function(){var t,a;for(a in l=[],v)v[a].forEach((function(t){var i=e[t],n=y(a,t,i);n&&l.push(n)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(i["a"])(t,"align-".concat(e.align),e.align),Object(i["a"])(t,"justify-".concat(e.justify),e.justify),Object(i["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),j.set(r,l)}(),t(e.tag,Object(o["a"])(n,{staticClass:"row",class:l}),s)}})},"145b":function(t,a,e){"use strict";e("4a75")},"156a":function(t,a,e){},1859:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-footer",{staticClass:"py-0",attrs:{id:"dashboard-core-footer"}},[e("v-container",{staticClass:"pt-1"},[e("v-row",{attrs:{align:"center","no-gutters":""}},[e("v-col",{staticClass:" mb-sm-0",attrs:{cols:"auto"}},[e("div",[e("img",{staticStyle:{width:"auto",height:"52px","border-radius":"10px"},attrs:{src:"/images/logo_banner.png"}}),e("p",{staticClass:"mb-2 ml-2",staticStyle:{"text-transform":"uppercase"}},[t._v("HỆ THỐNG QUẢN LÝ VÀ TỔ CHỨC ĐIỂM TIÊM CHỦNG")])])]),e("v-spacer",{staticClass:"hidden-sm-and-down"}),e("v-col",{attrs:{cols:"12",md:"auto"}},[e("div",{staticClass:"text-body-1 pt-md-0"},[e("div",[e("img",{staticClass:"mr-4",staticStyle:{width:"80px",height:"52px"},attrs:{src:"/images/logo_fds.png"}}),e("img",{staticClass:"mr-4",staticStyle:{width:"90px",height:"42px"},attrs:{src:"/images/logo_netnam.png"}}),e("img",{staticClass:"mr-4",staticStyle:{width:"90px",height:"42px"},attrs:{src:"/images/logo_iway.png"}}),e("img",{staticClass:"pt-1",staticStyle:{width:"90px",height:"42px"},attrs:{src:"/images/logo_epacific.png"}})])])])],1)],1)],1)},n=[],s={name:"DashboardCoreFooter",data:function(){return{links:[]}}},o=s,r=(e("145b"),e("bacb"),e("2877")),c=e("6544"),l=e.n(c),u=e("62ad"),p=e("a523"),d=e("5530"),f=(e("a9e3"),e("c7cd"),e("b5b6"),e("8dd9")),h=e("3a66"),g=e("d10f"),b=e("58df"),v=e("80d2"),m=Object(b["a"])(f["a"],Object(h["a"])("footer",["height","inset"]),g["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(d["a"])(Object(d["a"])({},f["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(d["a"])(Object(d["a"])({},f["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(v["g"])(t),left:Object(v["g"])(this.computedLeft),right:Object(v["g"])(this.computedRight),bottom:Object(v["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var a=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,a,this.$slots.default)}}),y=e("0fd9"),j=e("2fa4"),C=Object(r["a"])(o,i,n,!1,null,"8b6a5f70",null);a["default"]=C.exports;l()(C,{VCol:u["a"],VContainer:p["a"],VFooter:m,VRow:y["a"],VSpacer:j["a"]})},"20f6":function(t,a,e){},"2fa4":function(t,a,e){"use strict";e("20f6");var i=e("80d2");a["a"]=Object(i["h"])("spacer","div","v-spacer")},"3a66":function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));var i=e("fe6c"),n=e("58df");function s(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(i["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,a){a?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,a){this.$vuetify.application.unregister(this._uid,a)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,e=a.length;t<e;t++)this.$watch(a[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"4a75":function(t,a,e){},a523:function(t,a,e){"use strict";e("4de4"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85");var i=e("e8f2"),n=e("d9f7");a["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,i=a.props,s=a.data,o=a.children,r=s.attrs;return r&&(s.attrs={},e=Object.keys(r).filter((function(t){if("slot"===t)return!1;var a=r[t];return t.startsWith("data-")?(s.attrs[t]=a,!1):a||"string"===typeof a}))),i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),t(i.tag,Object(n["a"])(s,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(e||[])}),o)}})},b5b6:function(t,a,e){},bacb:function(t,a,e){"use strict";e("156a")},e8f2:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("498a"),e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("a15b");var i=e("2b0e");function n(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var i=e.props,n=e.data,s=e.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var o=n.attrs;if(o){n.attrs={};var r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a}));r.length&&(n.staticClass+=" ".concat(r.join(" ")))}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),a(i.tag,n,s)}})}}}]);