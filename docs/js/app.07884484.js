(function(e){function t(t){for(var a,l,r=t[0],c=t[1],s=t[2],h=0,p=[];h<r.length;h++)l=r[h],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],a=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=o[0]))}return e}var a={},n={app:0},i=[];function l(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=a,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(o,a,function(t){return e[t]}.bind(null,a));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var d=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},"03b6":function(e,t,o){"use strict";o("0a41")},"0a41":function(e,t,o){},2289:function(e,t,o){"use strict";o("7d49")},"7d49":function(e,t,o){},"7faf":function(e,t,o){"use strict";o("b8ff")},b8ff:function(e,t,o){},c477:function(e,t,o){"use strict";o("e36b")},cd49:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",{attrs:{id:"app"}},[o("v-container",{attrs:{id:"container",fluid:""}},[o("v-app-bar",{attrs:{color:"deep-purple",dark:"",dense:""}},[o("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),o("v-toolbar-title",[e._v("ECオーナーカード produced by あきらとぅ〜ん(@Akira_Yasai)")]),o("v-spacer"),o("v-btn",{attrs:{icon:""},on:{click:e.download}},[o("v-icon",[e._v("mdi-download")]),e._v("保存 ")],1)],1),o("v-navigation-drawer",{attrs:{color:"deep-purple",absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item-group",{model:{value:e.item,callback:function(t){e.item=t},expression:"item"}},[o("v-list-item",{attrs:{to:{name:"Blue"}},on:{click:e.test}},[o("v-list-item-icon",[0==e.item?o("v-icon",{attrs:{color:"white"}},[e._v("mdi-check-circle-outline")]):o("v-icon",{attrs:{color:"white"}},[e._v("mdi-checkbox-blank-circle-outline")])],1),o("v-list-item-title",{staticClass:"white--text"},[e._v("Blue")])],1),o("v-list-item",{attrs:{to:{name:"Pink"}},on:{click:e.test}},[o("v-list-item-icon",[1==e.item?o("v-icon",{attrs:{color:"white"}},[e._v("mdi-check-circle-outline")]):o("v-icon",{attrs:{color:"white"}},[e._v("mdi-checkbox-blank-circle-outline")])],1),o("v-list-item-title",{staticClass:"white--text"},[e._v("Pink")])],1),o("v-list-item",{attrs:{to:{name:"Red"}},on:{click:e.test}},[o("v-list-item-icon",[2==e.item?o("v-icon",{attrs:{color:"white"}},[e._v("mdi-check-circle-outline")]):o("v-icon",{attrs:{color:"white"}},[e._v("mdi-checkbox-blank-circle-outline")])],1),o("v-list-item-title",{staticClass:"white--text"},[e._v("Red")])],1),o("v-list-item",{attrs:{to:{name:"Gold"}},on:{click:e.test}},[o("v-list-item-icon",[3==e.item?o("v-icon",{attrs:{color:"white"}},[e._v("mdi-check-circle-outline")]):o("v-icon",{attrs:{color:"white"}},[e._v("mdi-checkbox-blank-circle-outline")])],1),o("v-list-item-title",{staticClass:"white--text"},[e._v("Gold")])],1)],1)],1)],1),o("v-main",[o("router-view",{ref:"child"})],1)],1)],1)},i=[],l=o("d4ec"),r=o("bee2"),c=o("262e"),s=o("2caf"),d=o("9ab4"),h=o("60a3"),p=function(e){Object(c["a"])(o,e);var t=Object(s["a"])(o);function o(){var e;return Object(l["a"])(this,o),e=t.apply(this,arguments),e.drawer=!1,e.item=0,e}return Object(r["a"])(o,[{key:"test",value:function(){console.log("")}},{key:"download",value:function(){console.log("download"),this.$router.app.$emit("download")}}]),o}(h["b"]);p=Object(d["a"])([Object(h["a"])({components:{}})],p);var u=p,g=u,m=(o("7faf"),o("2877")),f=o("6544"),v=o.n(f),w=o("7496"),y=o("40dc"),b=o("5bc1"),C=o("8336"),x=o("a523"),S=o("132d"),k=o("8860"),I=o("da13"),O=o("1baa"),j=o("34c3"),R=o("5d23"),$=o("f6c4"),F=o("f774"),D=o("2fa4"),T=o("2a7f"),_=Object(m["a"])(g,n,i,!1,null,null,null),U=_.exports;v()(_,{VApp:w["a"],VAppBar:y["a"],VAppBarNavIcon:b["a"],VBtn:C["a"],VContainer:x["a"],VIcon:S["a"],VList:k["a"],VListItem:I["a"],VListItemGroup:O["a"],VListItemIcon:j["a"],VListItemTitle:R["a"],VMain:$["a"],VNavigationDrawer:F["a"],VSpacer:D["a"],VToolbarTitle:T["a"]});var P=o("9483");Object(P["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("アップデートがあります。ウィンドウまたはタブを閉じて、URLを開きなおしてください。")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var E=o("8c4f"),L=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("canvas",{attrs:{id:"base",width:"700px",height:"400ox"}}),o("canvas",{attrs:{id:"face1",width:"150px",height:"150ox"}}),o("canvas",{attrs:{id:"face2",width:"150px",height:"150ox"}}),o("div",{attrs:{id:"owner"}},[o("v-text-field",{staticClass:"owner-field",style:{color:e.ownerColor},attrs:{placeholder:"Owner","hide-details":"",color:e.ownerColor},model:{value:e.owner,callback:function(t){e.owner=t},expression:"owner"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.ownerColor,expression:"ownerColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.ownerColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.ownerColor=t.target.value)}}})])],2)],1),o("div",{attrs:{id:"name"}},[o("v-text-field",{staticClass:"name-field",style:{color:e.nameColor},attrs:{placeholder:"Name","hide-details":"",color:e.nameColor},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.nameColor,expression:"nameColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.nameColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.nameColor=t.target.value)}}})])],2)],1),o("div",{attrs:{id:"code"}},[o("v-text-field",{staticClass:"code-field",style:{color:e.codeColor},attrs:{placeholder:"Code","hide-details":"",color:e.codeColor},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.codeColor,expression:"codeColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.codeColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.codeColor=t.target.value)}}})])],2)],1),o("div",{attrs:{id:"message"}},[o("v-textarea",{staticClass:"message-field",style:{color:e.messageColor,fontSize:e.messageFontSize+"px"},attrs:{"hide-details":"",color:e.messageColor},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.messageColor,expression:"messageColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.messageColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.messageColor=t.target.value)}}})])],2),o("input",{directives:[{name:"model",rawName:"v-model",value:e.messageFontSize,expression:"messageFontSize"}],staticStyle:{position:"absolute",top:"20px",left:"240px",width:"35px",height:"25px",margin:"0",padding:"0"},attrs:{type:"number",min:"8",max:"48",step:"1"},domProps:{value:e.messageFontSize},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.messageFontSize=t.target.value)}}})],1),o("v-btn",{staticStyle:{top:"175px",left:"392px"},attrs:{icon:"",absolute:""},on:{click:function(t){return e.opneFile("#face1")}}},[o("v-icon",{attrs:{"x-large":""}},[e._v("mdi-camera")])],1),o("v-btn",{staticStyle:{top:"175px",left:"567px"},attrs:{icon:"",absolute:""},on:{click:function(t){return e.opneFile("#face2")}}},[o("v-icon",{attrs:{"x-large":""}},[e._v("mdi-camera")])],1),o("CropDialog",{ref:"cropDialog1"}),o("CropDialog",{ref:"cropDialog2"})],1)},V=[],q=(o("b0c0"),o("d3b7"),o("ac1f"),o("3ca3"),o("466d"),o("5319"),o("1276"),o("5cc6"),o("9a8c"),o("a975"),o("735e"),o("c1ac"),o("d139"),o("3a7b"),o("d5d6"),o("82f8"),o("e91f"),o("60bd"),o("5f96"),o("3280"),o("3fcc"),o("ca91"),o("25a1"),o("cd26"),o("3c5d"),o("2954"),o("649e"),o("219c"),o("170b"),o("b39a"),o("72f7"),o("ddb0"),o("2b3d"),o("b85c")),B=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-dialog",{attrs:{"max-width":e.options.width,fullscreen:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",{staticClass:"px-2 pt-2"},[o("v-card-actions",[o("v-spacer"),o("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.options.cancel,expression:"options.cancel"}],attrs:{color:"primary",dark:"",width:"120px"},nativeOn:{click:function(t){return e.cancel(t)}}},[e._v(e._s(e.options.cancel))]),o("v-btn",{attrs:{color:"primary",dark:"",width:"120px"},nativeOn:{click:function(t){return e.agree(t)}}},[e._v(e._s(e.options.agree))])],1),o("vue-cropper",{ref:"cropper",attrs:{src:e.imageUri,aspectRatio:1}})],1)],1)},A=[],N=o("95c3"),z=o.n(N),M=(o("6107"),function(e){Object(c["a"])(o,e);var t=Object(s["a"])(o);function o(){var e;return Object(l["a"])(this,o),e=t.apply(this,arguments),e.dialog=!1,e.options={},e.imageUri="",e}return Object(r["a"])(o,[{key:"isShow",value:function(){return this.dialog}},{key:"show",value:function(e){return this.showOptions(null,e)}},{key:"showOptions",value:function(e,t){var o=this;return this.options={color:"primary",width:800,agree:"OK",cancel:"キャンセル"},this.imageUri=window.URL.createObjectURL(t),this.dialog=!0,this.options=Object.assign(this.options,e),new Promise((function(e,t){o.resolve=e,o.reject=t}))}},{key:"agree",value:function(){for(var e=this.$refs.cropper,t=e.getCroppedCanvas({width:150,height:150}),o=e.getCropBoxData(),a=t.toDataURL("image/png"),n=atob(a.replace(/^.*,/,"")),i=new Uint8Array(n.length),l=0;l<n.length;l++)i[l]=n.charCodeAt(l);var r=new Blob([i.buffer],{type:"image/png"});this.resolve({result:!0,data:o,url:window.URL.createObjectURL(r)}),this.dialog=!1}},{key:"cancel",value:function(){this.resolve({result:!1}),this.dialog=!1}}]),o}(h["b"]));M=Object(d["a"])([Object(h["a"])({components:{VueCropper:z.a}})],M);var G=M,H=G,J=o("b0af"),W=o("99d9"),K=o("169a"),Y=Object(m["a"])(H,B,A,!1,null,null,null),Q=Y.exports;v()(Y,{VBtn:C["a"],VCard:J["a"],VCardActions:W["a"],VDialog:K["a"],VSpacer:D["a"]});var X=function(e){Object(c["a"])(o,e);var t=Object(s["a"])(o);function o(){var e;return Object(l["a"])(this,o),e=t.apply(this,arguments),e.uploadTarget="",e.baseUrl="ECCard/img/EC_000B.png",e.owner="",e.name="",e.code="",e.message="",e.ownerColor="black",e.nameColor="black",e.codeColor="black",e.messageColor="black",e.messageFontSize=20,e}return Object(r["a"])(o,[{key:"changeStyle",value:function(){this.$el.querySelector(".theme--light.v-input.owner-field input").style.color=this.ownerColor,this.$el.querySelector(".theme--light.v-input.name-field input").style.color=this.nameColor,this.$el.querySelector(".theme--light.v-input.code-field input").style.color=this.codeColor,this.$el.querySelector(".theme--light.v-input.message-field textarea").style.color=this.messageColor,this.$el.querySelector(".theme--light.v-input.message-field textarea").style.lineHeight=this.messageFontSize+"px"}},{key:"mounted",value:function(){this.base=this.$el.querySelector("#base"),this.face1=this.$el.querySelector("#face1"),this.face2=this.$el.querySelector("#face2"),this.setBaseImage(),this.$router.app.$off("download"),this.$router.app.$on("download",this.download)}},{key:"setBaseImage",value:function(){var e=this,t=this.base.getContext("2d"),o=new Image;o.src=this.baseUrl,o.onload=function(){null===t||void 0===t||t.clearRect(0,0,e.base.width,e.base.height),null===t||void 0===t||t.drawImage(o,0,0,e.base.width,e.base.height)}}},{key:"opneFile",value:function(e){this.uploadTarget=e;var t=document.createElement("input");t.type="file",t.multiple=!0,t.addEventListener("change",this.addFile,!1),t.click()}},{key:"addFile",value:function(e){var t,o=e.target,a=o.files,n=Object(q["a"])(a);try{for(n.s();!(t=n.n()).done;){var i=t.value;console.log(i),i.type.match("image.*")&&this.addImageFile(i)}}catch(l){n.e(l)}finally{n.f()}}},{key:"addImageFile",value:function(e){var t=this,o=document.createElement("canvas"),a=o.getContext("2d");if(a){var n=new FileReader;n.onload=function(){var e=n.result;if(e){var i=new Image;i.src=e,i.onload=function(){var e=screen.availWidth,n=.7*screen.availHeight,l=i.width,r=i.height;if(l>e||r>n){var c=e/l,s=n/r,d=Math.min(c,s);l=Math.floor(l*d),r=Math.floor(r*d)}console.log(l),console.log(r),o.width=l,o.height=r,a.clearRect(0,0,o.width,o.height),a.drawImage(i,0,0,o.width,o.height);for(var h=o.toDataURL("image/png"),p=atob(h.replace(/^.*,/,"")),u=new Uint8Array(p.length),g=0;g<p.length;g++)u[g]=p.charCodeAt(g);var m=new Blob([u.buffer],{type:"image/png"}),f=t.$refs.cropDialog1;"#face2"===t.uploadTarget&&(f=t.$refs.cropDialog2),f.show(m),f.show(m).then((function(e){var o=e;if(console.log(o),o.result){var a=t.$el.querySelector(t.uploadTarget),n=new Image;n.src=o.url,n.onload=function(){var e;null===(e=a.getContext("2d"))||void 0===e||e.drawImage(n,0,0,a.width,a.height)}}}))}}else alert("FileReader failed.")},n.readAsDataURL(e)}else alert("CanvasRenderingContext2D unsupported.")}},{key:"download",value:function(){var e=document.createElement("canvas"),t=e.getContext("2d");if(t){e.width=700,e.height=400,t.drawImage(this.base,0,0),t.drawImage(this.face1,335,110),t.drawImage(this.face2,510,110),t.font="bold 20px sans-serif",t.fillStyle=this.ownerColor,t.fillText(this.owner,160,80),t.fillStyle=this.nameColor,t.fillText(this.name,160,115),t.fillStyle=this.codeColor,t.fillText(this.code,160,150),t.font="bold ".concat(this.messageFontSize,"px sans-serif"),t.fillStyle=this.messageColor;var o,a=1,n=Object(q["a"])(this.message.split("\n"));try{for(n.s();!(o=n.n()).done;){var i=o.value;t.fillText(i,30,160+a*this.messageFontSize*1.5),a+=1}}catch(p){n.e(p)}finally{n.f()}for(var l=e.toDataURL("image/png"),r=atob(l.replace(/^.*,/,"")),c=new Uint8Array(r.length),s=0;s<r.length;s++)c[s]=r.charCodeAt(s);var d=new Blob([c.buffer],{type:"image/png"}),h=document.createElement("a");h.href=window.URL.createObjectURL(d),h.download="eccard.png",h.click()}else alert("CanvasRenderingContext2D unsupported.")}},{key:"styles",get:function(){return{"--ownerColor":this.ownerColor,"--nameColor":this.nameColor,"--codeColor":this.codeColor,"--messageColor":this.messageColor,"--messageFontSize":this.messageFontSize}}}]),o}(h["b"]);X=Object(d["a"])([Object(h["a"])({components:{CropDialog:Q}})],X);var Z=X,ee=Z,te=(o("c477"),o("8654")),oe=o("a844"),ae=Object(m["a"])(ee,L,V,!1,null,"0db6e434",null),ne=ae.exports;v()(ae,{VBtn:C["a"],VIcon:S["a"],VTextField:te["a"],VTextarea:oe["a"]});var ie=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("canvas",{attrs:{id:"base",width:"700px",height:"400ox"}}),o("canvas",{attrs:{id:"face1",width:"150px",height:"150ox"}}),o("canvas",{attrs:{id:"face2",width:"150px",height:"150ox"}}),o("div",{attrs:{id:"owner"}},[o("v-text-field",{staticClass:"owner-field",style:{color:e.ownerColor},attrs:{placeholder:"Owner","hide-details":"",color:e.ownerColor},model:{value:e.owner,callback:function(t){e.owner=t},expression:"owner"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.ownerColor,expression:"ownerColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.ownerColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.ownerColor=t.target.value)}}})])],2)],1),o("div",{attrs:{id:"name"}},[o("v-text-field",{staticClass:"name-field",style:{color:e.nameColor},attrs:{placeholder:"Name","hide-details":"",color:e.nameColor},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.nameColor,expression:"nameColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.nameColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.nameColor=t.target.value)}}})])],2)],1),o("div",{attrs:{id:"code"}},[o("v-text-field",{staticClass:"code-field",style:{color:e.codeColor},attrs:{placeholder:"Code","hide-details":"",color:e.codeColor},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.codeColor,expression:"codeColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.codeColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.codeColor=t.target.value)}}})])],2)],1),o("div",{attrs:{id:"message"}},[o("v-textarea",{staticClass:"message-field",style:{color:e.messageColor,fontSize:e.messageFontSize+"px"},attrs:{"hide-details":"",color:e.messageColor},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.messageColor,expression:"messageColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.messageColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.messageColor=t.target.value)}}})])],2),o("input",{directives:[{name:"model",rawName:"v-model",value:e.messageFontSize,expression:"messageFontSize"}],staticStyle:{position:"absolute",top:"20px",left:"240px",width:"35px",height:"25px",margin:"0",padding:"0"},attrs:{type:"number",min:"8",max:"48",step:"1"},domProps:{value:e.messageFontSize},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.messageFontSize=t.target.value)}}})],1),o("v-btn",{staticStyle:{top:"175px",left:"392px"},attrs:{icon:"",absolute:""},on:{click:function(t){return e.opneFile("#face1")}}},[o("v-icon",{attrs:{"x-large":""}},[e._v("mdi-camera")])],1),o("v-btn",{staticStyle:{top:"175px",left:"567px"},attrs:{icon:"",absolute:""},on:{click:function(t){return e.opneFile("#face2")}}},[o("v-icon",{attrs:{"x-large":""}},[e._v("mdi-camera")])],1),o("CropDialog",{ref:"cropDialog1"}),o("CropDialog",{ref:"cropDialog2"})],1)},le=[],re=function(e){Object(c["a"])(o,e);var t=Object(s["a"])(o);function o(){var e;return Object(l["a"])(this,o),e=t.apply(this,arguments),e.uploadTarget="",e.baseUrl="ECCard/img/EC_000P.png",e.owner="",e.name="",e.code="",e.message="",e.ownerColor="black",e.nameColor="black",e.codeColor="black",e.messageColor="black",e.messageFontSize=20,e}return Object(r["a"])(o,[{key:"changeStyle",value:function(){this.$el.querySelector(".theme--light.v-input.owner-field input").style.color=this.ownerColor,this.$el.querySelector(".theme--light.v-input.name-field input").style.color=this.nameColor,this.$el.querySelector(".theme--light.v-input.code-field input").style.color=this.codeColor,this.$el.querySelector(".theme--light.v-input.message-field textarea").style.color=this.messageColor,this.$el.querySelector(".theme--light.v-input.message-field textarea").style.lineHeight=this.messageFontSize+"px"}},{key:"mounted",value:function(){this.base=this.$el.querySelector("#base"),this.face1=this.$el.querySelector("#face1"),this.face2=this.$el.querySelector("#face2"),this.setBaseImage(),this.$router.app.$off("download"),this.$router.app.$on("download",this.download)}},{key:"setBaseImage",value:function(){var e=this,t=this.base.getContext("2d"),o=new Image;o.src=this.baseUrl,o.onload=function(){null===t||void 0===t||t.clearRect(0,0,e.base.width,e.base.height),null===t||void 0===t||t.drawImage(o,0,0,e.base.width,e.base.height)}}},{key:"opneFile",value:function(e){this.uploadTarget=e;var t=document.createElement("input");t.type="file",t.multiple=!0,t.addEventListener("change",this.addFile,!1),t.click()}},{key:"addFile",value:function(e){var t,o=e.target,a=o.files,n=Object(q["a"])(a);try{for(n.s();!(t=n.n()).done;){var i=t.value;console.log(i),i.type.match("image.*")&&this.addImageFile(i)}}catch(l){n.e(l)}finally{n.f()}}},{key:"addImageFile",value:function(e){var t=this,o=document.createElement("canvas"),a=o.getContext("2d");if(a){var n=new FileReader;n.onload=function(){var e=n.result;if(e){var i=new Image;i.src=e,i.onload=function(){var e=screen.availWidth,n=.7*screen.availHeight,l=i.width,r=i.height;if(l>e||r>n){var c=e/l,s=n/r,d=Math.min(c,s);l=Math.floor(l*d),r=Math.floor(r*d)}console.log(l),console.log(r),o.width=l,o.height=r,a.clearRect(0,0,o.width,o.height),a.drawImage(i,0,0,o.width,o.height);for(var h=o.toDataURL("image/png"),p=atob(h.replace(/^.*,/,"")),u=new Uint8Array(p.length),g=0;g<p.length;g++)u[g]=p.charCodeAt(g);var m=new Blob([u.buffer],{type:"image/png"}),f=t.$refs.cropDialog1;"#face2"===t.uploadTarget&&(f=t.$refs.cropDialog2),f.show(m),f.show(m).then((function(e){var o=e;if(console.log(o),o.result){var a=t.$el.querySelector(t.uploadTarget),n=new Image;n.src=o.url,n.onload=function(){var e;null===(e=a.getContext("2d"))||void 0===e||e.drawImage(n,0,0,a.width,a.height)}}}))}}else alert("FileReader failed.")},n.readAsDataURL(e)}else alert("CanvasRenderingContext2D unsupported.")}},{key:"download",value:function(){var e=document.createElement("canvas"),t=e.getContext("2d");if(t){e.width=700,e.height=400,t.drawImage(this.base,0,0),t.drawImage(this.face1,335,110),t.drawImage(this.face2,510,110),t.font="bold 20px sans-serif",t.fillStyle=this.ownerColor,t.fillText(this.owner,160,80),t.fillStyle=this.nameColor,t.fillText(this.name,160,115),t.fillStyle=this.codeColor,t.fillText(this.code,160,150),t.font="bold ".concat(this.messageFontSize,"px sans-serif"),t.fillStyle=this.messageColor;var o,a=1,n=Object(q["a"])(this.message.split("\n"));try{for(n.s();!(o=n.n()).done;){var i=o.value;t.fillText(i,30,160+a*this.messageFontSize*1.5),a+=1}}catch(p){n.e(p)}finally{n.f()}for(var l=e.toDataURL("image/png"),r=atob(l.replace(/^.*,/,"")),c=new Uint8Array(r.length),s=0;s<r.length;s++)c[s]=r.charCodeAt(s);var d=new Blob([c.buffer],{type:"image/png"}),h=document.createElement("a");h.href=window.URL.createObjectURL(d),h.download="eccard.png",h.click()}else alert("CanvasRenderingContext2D unsupported.")}},{key:"styles",get:function(){return{"--ownerColor":this.ownerColor,"--nameColor":this.nameColor,"--codeColor":this.codeColor,"--messageColor":this.messageColor,"--messageFontSize":this.messageFontSize}}}]),o}(h["b"]);re=Object(d["a"])([Object(h["a"])({components:{CropDialog:Q}})],re);var ce=re,se=ce,de=(o("d3b3"),Object(m["a"])(se,ie,le,!1,null,"19b72044",null)),he=de.exports;v()(de,{VBtn:C["a"],VIcon:S["a"],VTextField:te["a"],VTextarea:oe["a"]});var pe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("canvas",{attrs:{id:"base",width:"700px",height:"400ox"}}),o("canvas",{staticStyle:{top:"200px",left:"28px","border-radius":"15px"},attrs:{id:"face1",width:"145px",height:"145ox"}}),o("canvas",{staticStyle:{top:"87px",left:"435px","border-radius":"15px"},attrs:{id:"face2",width:"200px",height:"200ox"}}),o("div",{staticStyle:{width:"165px",top:"210px",left:"190px"},attrs:{id:"owner"}},[o("v-text-field",{staticClass:"owner-field",style:{color:e.ownerColor},attrs:{placeholder:"Owner","hide-details":"",color:e.ownerColor},model:{value:e.owner,callback:function(t){e.owner=t},expression:"owner"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.ownerColor,expression:"ownerColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.ownerColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.ownerColor=t.target.value)}}})])],2)],1),o("div",{staticStyle:{width:"140px",top:"101px",left:"290px"},attrs:{id:"name"}},[o("v-text-field",{staticClass:"name-field",style:{color:e.nameColor},attrs:{placeholder:"Name","hide-details":"",color:e.nameColor},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.nameColor,expression:"nameColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.nameColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.nameColor=t.target.value)}}})])],2)],1),o("div",{staticStyle:{width:"190px",top:"101px",left:"22px"},attrs:{id:"code"}},[o("v-text-field",{staticClass:"code-field",style:{color:e.codeColor},attrs:{placeholder:"Code","hide-details":"",color:e.codeColor},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.codeColor,expression:"codeColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.codeColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.codeColor=t.target.value)}}})])],2)],1),o("v-btn",{staticStyle:{top:"255px",left:"82px"},attrs:{icon:"",absolute:"",color:"white"},on:{click:function(t){return e.opneFile("#face1")}}},[o("v-icon",{attrs:{"x-large":""}},[e._v("mdi-camera")])],1),o("v-btn",{staticStyle:{top:"170px",left:"517px"},attrs:{icon:"",absolute:"",color:"white"},on:{click:function(t){return e.opneFile("#face2")}}},[o("v-icon",{attrs:{"x-large":""}},[e._v("mdi-camera")])],1),o("CropDialog",{ref:"cropDialog1"}),o("CropDialog",{ref:"cropDialog2"})],1)},ue=[],ge=function(e){Object(c["a"])(o,e);var t=Object(s["a"])(o);function o(){var e;return Object(l["a"])(this,o),e=t.apply(this,arguments),e.uploadTarget="",e.baseUrl="ECCard/img/EC_001.jpg",e.owner="",e.name="",e.code="",e.ownerColor="white",e.nameColor="white",e.codeColor="white",e}return Object(r["a"])(o,[{key:"changeStyle",value:function(){this.$el.querySelector(".theme--light.v-input.owner-field input").style.color=this.ownerColor,this.$el.querySelector(".theme--light.v-input.name-field input").style.color=this.nameColor,this.$el.querySelector(".theme--light.v-input.code-field input").style.color=this.codeColor}},{key:"mounted",value:function(){this.base=this.$el.querySelector("#base"),this.face1=this.$el.querySelector("#face1"),this.face2=this.$el.querySelector("#face2"),this.setBaseImage(),this.$router.app.$off("download"),this.$router.app.$on("download",this.download),this.changeStyle()}},{key:"setBaseImage",value:function(){var e=this,t=this.base.getContext("2d"),o=new Image;o.src=this.baseUrl,o.onload=function(){null===t||void 0===t||t.clearRect(0,0,e.base.width,e.base.height),null===t||void 0===t||t.drawImage(o,0,0,e.base.width,e.base.height)}}},{key:"opneFile",value:function(e){this.uploadTarget=e;var t=document.createElement("input");t.type="file",t.multiple=!0,t.addEventListener("change",this.addFile,!1),t.click()}},{key:"addFile",value:function(e){var t,o=e.target,a=o.files,n=Object(q["a"])(a);try{for(n.s();!(t=n.n()).done;){var i=t.value;console.log(i),i.type.match("image.*")&&this.addImageFile(i)}}catch(l){n.e(l)}finally{n.f()}}},{key:"addImageFile",value:function(e){var t=this,o=document.createElement("canvas"),a=o.getContext("2d");if(a){var n=new FileReader;n.onload=function(){var e=n.result;if(e){var i=new Image;i.src=e,i.onload=function(){o.width=i.width,o.height=i.height,a.clearRect(0,0,o.width,o.height),a.drawImage(i,0,0,o.width,o.height);for(var e=o.toDataURL("image/png"),n=atob(e.replace(/^.*,/,"")),l=new Uint8Array(n.length),r=0;r<n.length;r++)l[r]=n.charCodeAt(r);var c=new Blob([l.buffer],{type:"image/png"}),s=t.$refs.cropDialog1;"#face2"===t.uploadTarget&&(s=t.$refs.cropDialog2),s.show(c),s.show(c).then((function(e){var o=e;if(console.log(o),o.result){var a=t.$el.querySelector(t.uploadTarget),n=new Image;n.src=o.url,n.onload=function(){var e;null===(e=a.getContext("2d"))||void 0===e||e.drawImage(n,0,0,a.width,a.height)}}}))}}else alert("FileReader failed.")},n.readAsDataURL(e)}else alert("CanvasRenderingContext2D unsupported.")}},{key:"download",value:function(){var e=document.createElement("canvas"),t=e.getContext("2d");if(t){e.width=700,e.height=400,t.drawImage(this.base,0,0),t.font="bold 18px sans-serif",t.fillStyle=this.ownerColor,t.fillText(this.owner,190,250),t.fillStyle=this.nameColor,t.fillText(this.name,290,141),t.fillStyle=this.codeColor,t.fillText(this.code,22,141),t.beginPath(),this.drawRoundRectImage(t,28,200,145,145,15),this.drawRoundRectImage(t,435,87,200,200,15),t.closePath(),t.clip(),t.drawImage(this.face1,28,200),t.drawImage(this.face2,435,87);for(var o=e.toDataURL("image/png"),a=atob(o.replace(/^.*,/,"")),n=new Uint8Array(a.length),i=0;i<a.length;i++)n[i]=a.charCodeAt(i);var l=new Blob([n.buffer],{type:"image/png"}),r=document.createElement("a");r.href=window.URL.createObjectURL(l),r.download="eccard.png",r.click()}else alert("CanvasRenderingContext2D unsupported.")}},{key:"drawRoundRectImage",value:function(e,t,o,a,n,i){e.moveTo(t+i,o),e.lineTo(t+a-i,o),e.arc(t+a-i,o+i,i,1.5*Math.PI,0,!1),e.lineTo(t+a,o+n-i),e.arc(t+a-i,o+n-i,i,0,.5*Math.PI,!1),e.lineTo(t+i,o+n),e.arc(t+i,o+n-i,i,.5*Math.PI,Math.PI,!1),e.lineTo(t,o+i),e.arc(t+i,o+i,i,Math.PI,1.5*Math.PI,!1)}},{key:"styles",get:function(){return{"--ownerColor":this.ownerColor,"--nameColor":this.nameColor,"--codeColor":this.codeColor}}}]),o}(h["b"]);ge=Object(d["a"])([Object(h["a"])({components:{CropDialog:Q}})],ge);var me=ge,fe=me,ve=(o("03b6"),Object(m["a"])(fe,pe,ue,!1,null,"12c28c3a",null)),we=ve.exports;v()(ve,{VBtn:C["a"],VIcon:S["a"],VTextField:te["a"]});var ye=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("canvas",{attrs:{id:"base",width:"700px",height:"400ox"}}),o("canvas",{staticStyle:{top:"28px",left:"28px","border-radius":"90px"},attrs:{id:"face1",width:"160px",height:"160ox"}}),o("canvas",{staticStyle:{top:"118px",left:"366px","border-radius":"25px"},attrs:{id:"face2",width:"200px",height:"200ox"}}),o("div",{staticStyle:{width:"250px",top:"25px",left:"530px"},attrs:{id:"owner"}},[o("v-text-field",{staticClass:"owner-field",style:{color:e.ownerColor},attrs:{placeholder:"Owner","hide-details":"",color:e.ownerColor},model:{value:e.owner,callback:function(t){e.owner=t},expression:"owner"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.ownerColor,expression:"ownerColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.ownerColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.ownerColor=t.target.value)}}})])],2)],1),o("div",{staticStyle:{width:"255px",top:"52px",left:"525px"},attrs:{id:"name"}},[o("v-text-field",{staticClass:"name-field",style:{color:e.nameColor},attrs:{placeholder:"Name","hide-details":"",color:e.nameColor},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.nameColor,expression:"nameColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.nameColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.nameColor=t.target.value)}}})])],2)],1),o("div",{staticStyle:{width:"300px",top:"78px",left:"480px"},attrs:{id:"code"}},[o("v-text-field",{staticClass:"code-field",style:{color:e.codeColor},attrs:{placeholder:"Code","hide-details":"",color:e.codeColor},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[o("template",{slot:"append-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.codeColor,expression:"codeColor"}],staticStyle:{width:"20px",height:"25px",margin:"0",padding:"0"},attrs:{type:"color"},domProps:{value:e.codeColor},on:{change:e.changeStyle,input:function(t){t.target.composing||(e.codeColor=t.target.value)}}})])],2)],1),o("v-btn",{staticStyle:{top:"95px",left:"88px"},attrs:{icon:"",absolute:"",color:"red lighten-1"},on:{click:function(t){return e.opneFile("#face1")}}},[o("v-icon",{attrs:{"x-large":""}},[e._v("mdi-camera")])],1),o("v-btn",{staticStyle:{top:"200px",left:"448px"},attrs:{icon:"",absolute:"",color:"red lighten-1"},on:{click:function(t){return e.opneFile("#face2")}}},[o("v-icon",{attrs:{"x-large":""}},[e._v("mdi-camera")])],1),o("CropDialog",{ref:"cropDialog1"}),o("CropDialog",{ref:"cropDialog2"})],1)},be=[],Ce=function(e){Object(c["a"])(o,e);var t=Object(s["a"])(o);function o(){var e;return Object(l["a"])(this,o),e=t.apply(this,arguments),e.uploadTarget="",e.baseUrl="ECCard/img/EC_002.jpg",e.owner="",e.name="",e.code="",e.ownerColor="black",e.nameColor="black",e.codeColor="black",e}return Object(r["a"])(o,[{key:"changeStyle",value:function(){this.$el.querySelector(".theme--light.v-input.owner-field input").style.color=this.ownerColor,this.$el.querySelector(".theme--light.v-input.name-field input").style.color=this.nameColor,this.$el.querySelector(".theme--light.v-input.code-field input").style.color=this.codeColor}},{key:"mounted",value:function(){this.base=this.$el.querySelector("#base"),this.face1=this.$el.querySelector("#face1"),this.face2=this.$el.querySelector("#face2"),this.setBaseImage(),this.$router.app.$off("download"),this.$router.app.$on("download",this.download)}},{key:"setBaseImage",value:function(){var e=this,t=this.base.getContext("2d"),o=new Image;o.src=this.baseUrl,o.onload=function(){null===t||void 0===t||t.clearRect(0,0,e.base.width,e.base.height),null===t||void 0===t||t.drawImage(o,0,0,e.base.width,e.base.height)}}},{key:"opneFile",value:function(e){this.uploadTarget=e;var t=document.createElement("input");t.type="file",t.multiple=!0,t.addEventListener("change",this.addFile,!1),t.click()}},{key:"addFile",value:function(e){var t,o=e.target,a=o.files,n=Object(q["a"])(a);try{for(n.s();!(t=n.n()).done;){var i=t.value;console.log(i),i.type.match("image.*")&&this.addImageFile(i)}}catch(l){n.e(l)}finally{n.f()}}},{key:"addImageFile",value:function(e){var t=this,o=document.createElement("canvas"),a=o.getContext("2d");if(a){var n=new FileReader;n.onload=function(){var e=n.result;if(e){var i=new Image;i.src=e,i.onload=function(){o.width=i.width,o.height=i.height,a.clearRect(0,0,o.width,o.height),a.drawImage(i,0,0,o.width,o.height);for(var e=o.toDataURL("image/png"),n=atob(e.replace(/^.*,/,"")),l=new Uint8Array(n.length),r=0;r<n.length;r++)l[r]=n.charCodeAt(r);var c=new Blob([l.buffer],{type:"image/png"}),s=t.$refs.cropDialog1;"#face2"===t.uploadTarget&&(s=t.$refs.cropDialog2),s.show(c),s.show(c).then((function(e){var o=e;if(console.log(o),o.result){var a=t.$el.querySelector(t.uploadTarget),n=new Image;n.src=o.url,n.onload=function(){var e;null===(e=a.getContext("2d"))||void 0===e||e.drawImage(n,0,0,a.width,a.height)}}}))}}else alert("FileReader failed.")},n.readAsDataURL(e)}else alert("CanvasRenderingContext2D unsupported.")}},{key:"download",value:function(){var e=document.createElement("canvas"),t=e.getContext("2d");if(t){e.width=700,e.height=400,t.drawImage(this.base,0,0),t.font="bold 18px sans-serif",t.fillStyle=this.ownerColor,t.fillText(this.owner,530,64),t.fillStyle=this.nameColor,t.fillText(this.name,525,90),t.fillStyle=this.codeColor,t.fillText(this.code,480,116),t.beginPath(),this.drawRoundRectImage(t,28,28,160,160,90),this.drawRoundRectImage(t,366,118,200,200,25),t.closePath(),t.clip(),t.drawImage(this.face1,28,28),t.drawImage(this.face2,366,118);for(var o=e.toDataURL("image/png"),a=atob(o.replace(/^.*,/,"")),n=new Uint8Array(a.length),i=0;i<a.length;i++)n[i]=a.charCodeAt(i);var l=new Blob([n.buffer],{type:"image/png"}),r=document.createElement("a");r.href=window.URL.createObjectURL(l),r.download="eccard.png",r.click()}else alert("CanvasRenderingContext2D unsupported.")}},{key:"drawRoundRectImage",value:function(e,t,o,a,n,i){e.moveTo(t+i,o),e.lineTo(t+a-i,o),e.arc(t+a-i,o+i,i,1.5*Math.PI,0,!1),e.lineTo(t+a,o+n-i),e.arc(t+a-i,o+n-i,i,0,.5*Math.PI,!1),e.lineTo(t+i,o+n),e.arc(t+i,o+n-i,i,.5*Math.PI,Math.PI,!1),e.lineTo(t,o+i),e.arc(t+i,o+i,i,Math.PI,1.5*Math.PI,!1)}},{key:"styles",get:function(){return{"--ownerColor":this.ownerColor,"--nameColor":this.nameColor,"--codeColor":this.codeColor}}}]),o}(h["b"]);Ce=Object(d["a"])([Object(h["a"])({components:{CropDialog:Q}})],Ce);var xe=Ce,Se=xe,ke=(o("2289"),Object(m["a"])(Se,ye,be,!1,null,"da0eebee",null)),Ie=ke.exports;v()(ke,{VBtn:C["a"],VIcon:S["a"],VTextField:te["a"]}),a["a"].use(E["a"]);var Oe=[{path:"/",name:"Blue",component:ne},{path:"/Pink",name:"Pink",component:he},{path:"/Red",name:"Red",component:we},{path:"/Gold",name:"Gold",component:Ie}],je=new E["a"]({mode:"history",base:"",routes:Oe}),Re=je,$e=o("2f62");a["a"].use($e["a"]);var Fe=new $e["a"].Store({state:{},mutations:{},actions:{},modules:{}}),De=o("f309");a["a"].use(De["a"]);var Te=new De["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:Re,store:Fe,vuetify:Te,render:function(e){return e(U)}}).$mount("#app")},d3b3:function(e,t,o){"use strict";o("e242")},e242:function(e,t,o){},e36b:function(e,t,o){}});
//# sourceMappingURL=app.07884484.js.map