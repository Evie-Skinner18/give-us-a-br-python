(function(e){function t(t){for(var n,a,c=t[0],o=t[1],l=t[2],b=0,f=[];b<c.length;b++)a=c[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,c=1;c<s.length;c++){var o=s[c];0!==r[o]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},r={app:0},i=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},"1e65":function(e,t,s){"use strict";var n=s("6150"),r=s.n(n);r.a},"3d11":function(e,t,s){},"49f8":function(e,t,s){var n={"./en.json":"edd4","./fr.json":"f693"};function r(e){var t=i(e);return s(t)}function i(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id="49f8"},6150:function(e,t,s){},"661a":function(e,t,s){"use strict";var n=s("3d11"),r=s.n(n);r.a},cd49:function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-main",[s("Navbar"),s("EcoLensContainer")],1)],1)},i=[],a=s("60a3"),c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"navalicious"},[s("span",{staticClass:"cheese-items"},[s("a",{attrs:{href:"#main-section"}},[e._v("EcoLens")]),s("a",{attrs:{href:"#form-section"}},[e._v("Analyse")]),s("a",{attrs:{href:"#about-section"}},[e._v("About")])])])}],l=s("d4ec"),u=s("262e"),b=s("2caf"),f=s("9ab4"),w=function(e){Object(u["a"])(s,e);var t=Object(b["a"])(s);function s(){return Object(l["a"])(this,s),t.apply(this,arguments)}return s}(a["c"]);w=Object(f["a"])([Object(a["a"])({})],w);var W=w,Y=W,v=(s("661a"),s("2877")),d=Object(v["a"])(Y,c,o,!1,null,"12245aa7",null),A=d.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"main-section",attrs:{id:"main-section"}},[n("img",{staticClass:"ecolens-logo",attrs:{alt:"EcoLens blue logo",src:s("cf05")}}),n("h1",[e._v(e._s(e.$t("welcome")))]),e._l(e.languages,(function(t){return n("button",{key:t.title,staticClass:"language-button",on:{click:function(s){return e.changeLocale(t.language)}}},[e._v(" "+e._s(t.title)+" ")])})),n("h2",[e._v(e._s(e.$t("analyse-website"))+"!")]),n("EcoLensForm",{on:{websiteEntered:e.addWebsiteAnalysis}}),e.websiteAnalysis&&""!=e.websiteAnalysis.url?n("WebsiteAnalysisComponent",{attrs:{websiteAnalysis:e.websiteAnalysis}}):e._e(),n("AboutComponent")],2)},p=[],F=(s("96cf"),s("1da1")),C=s("bee2"),y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{attrs:{id:"about-section"}},[s("p",[e._v("This project was made by Team Give Us a "),s("br"),e._v("! ")])])}],B=function(e){Object(u["a"])(s,e);var t=Object(b["a"])(s);function s(){return Object(l["a"])(this,s),t.apply(this,arguments)}return s}(a["c"]);B=Object(f["a"])([a["a"]],B);var E=B,h=E,M=Object(v["a"])(h,y,G,!1,null,null,null),Q=M.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("EcoLens results for "+e._s(e.websiteAnalysis.url))]),s("p",[e._v("Ooh, this website uses a lot of CSS it doesn't need ")])])},m=[],R=s("bc3a"),j=s.n(R),V=function(){function e(t){Object(l["a"])(this,e),this.url=t}return Object(C["a"])(e,[{key:"getCssCoverageResults",value:function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(){var t,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://eco-lens-node.herokuapp.com/getCssCoverage?url=".concat(this.url),e.next=3,j.a.get(t);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}],[{key:"EMPTY",value:function(){return new e("")}}]),e}(),g=function(e){Object(u["a"])(s,e);var t=Object(b["a"])(s);function s(){return Object(l["a"])(this,s),t.apply(this,arguments)}return s}(a["c"]);Object(f["a"])([Object(a["b"])({default:V.EMPTY()})],g.prototype,"websiteAnalysis",void 0),g=Object(f["a"])([Object(a["a"])({})],g);var x=g,N=x,P=Object(v["a"])(N,O,m,!1,null,"798f58ad",null),Z=P.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-form",{ref:"form",attrs:{"lazy-validation":"",id:"form-section"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{counter:50,label:"Name",required:""},model:{value:e.websiteAnalysis.url,callback:function(t){e.$set(e.websiteAnalysis,"url",t)},expression:"websiteAnalysis.url"}}),s("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"info"},on:{click:e.emitWebsiteEnteredEvent}},[e._v(" Analyse ")])],1)},k=[],T=function(e){Object(u["a"])(s,e);var t=Object(b["a"])(s);function s(){var e;return Object(l["a"])(this,s),e=t.apply(this,arguments),e.websiteAnalysis=V.EMPTY(),e.valid=!0,e}return Object(C["a"])(s,[{key:"emitWebsiteEnteredEvent",value:function(){this.$emit("websiteEntered",this.websiteAnalysis)}}]),s}(a["c"]);T=Object(f["a"])([Object(a["a"])({})],T);var q=T,z=q,K=s("6544"),J=s.n(K),S=s("8336"),D=s("4bd4"),U=s("8654"),H=Object(v["a"])(z,X,k,!1,null,"1771791a",null),_=H.exports;J()(H,{VBtn:S["a"],VForm:D["a"],VTextField:U["a"]});var I=function(e){Object(u["a"])(s,e);var t=Object(b["a"])(s);function s(){var e;return Object(l["a"])(this,s),e=t.apply(this,arguments),e.websiteAnalysis=V.EMPTY(),e.analysisResults=[],e}return Object(C["a"])(s,[{key:"changeLocale",value:function(e){this.$i18n.locale=e}},{key:"addWebsiteAnalysis",value:function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.websiteAnalysis=t,e.next=3,this.websiteAnalysis.getCssCoverageResults();case 3:this.analysisResults=e.sent,console.log(this.analysisResults);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"languages",get:function(){var e=[{language:"en",title:"English"},{language:"fr",title:"Français"}];return e}}]),s}(a["c"]);Object(f["a"])([Object(a["b"])()],I.prototype,"msg",void 0),I=Object(f["a"])([Object(a["a"])({components:{AboutComponent:Q,WebsiteAnalysisComponent:Z,EcoLensForm:_}})],I);var $=I,ee=$,te=(s("1e65"),s("a523")),se=Object(v["a"])(ee,L,p,!1,null,"c5a5bcc4",null),ne=se.exports;J()(se,{VContainer:te["a"]});var re=a["c"].extend({name:"App",components:{EcoLensContainer:ne,Navbar:A}}),ie=re,ae=s("7496"),ce=s("f6c4"),oe=Object(v["a"])(ie,r,i,!1,null,null,null),le=oe.exports;J()(oe,{VApp:ae["a"],VMain:ce["a"]});s("4160"),s("d3b7"),s("ac1f"),s("466d"),s("159b"),s("ddb0");var ue=s("a925");function be(){var e=s("49f8"),t={};return e.keys().forEach((function(s){var n=s.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var r=n[1];t[r]=e(s)}})),t}n["a"].use(ue["a"]);var fe=new ue["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:be()}),we=s("f309");n["a"].use(we["a"]);var We=new we["a"]({});n["a"].config.productionTip=!1,new n["a"]({i18n:fe,vuetify:We,render:function(e){return e(le)}}).$mount("#app")},cf05:function(e,t){e.exports="data:image/png;base64,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"},edd4:function(e){e.exports=JSON.parse('{"hello":"Hello","welcome":"Welcome to EcoLens","analyse-website":"Analyse a website"}')},f693:function(e){e.exports=JSON.parse('{"hello":"Salut","welcome":"Bienvenue chez EcoLens!","analyse-website":"Analyser un site web"}')}});
//# sourceMappingURL=app.116fe17d.js.map