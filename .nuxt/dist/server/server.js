module.exports=function(t){var e={},n={0:0};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.e=function(e){if(0!==n[e]){var o=require("./"+{1:"ed1434b3e972e7b3d93b"}[e]+".js"),r=o.modules,c=o.ids;for(var l in r)t[l]=r[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},o.p="/_nuxt/",o.oe=function(t){process.nextTick((function(){throw t}))},o(o.s=15)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function o(t,e,n,o,r,c,l,d){var h,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},f._ssrRegister=h):r&&(h=d?function(){r.call(this,this.$root.$options.shadowRoot)}:r),h)if(f.functional){f._injectStyles=h;var m=f.render;f.render=function(t,e){return h.call(e),m(t,e)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,h):[h]}return{exports:t,options:f}}n.d(e,"a",(function(){return o}))},function(t,e){t.exports=require("vue-router")},function(t,e){t.exports=require("axios")},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var o=(c=n,l=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(data," */")),r=n.sources.map((function(source){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(source," */")}));return[content].concat(r).concat([o]).join("\n")}var c,l,data;return[content].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(content,"}"):content})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),e.push(d))}},e}},function(t,e,n){"use strict";function o(t,e,n,o){if(o||"undefined"==typeof __VUE_SSR_CONTEXT__||(o=__VUE_SSR_CONTEXT__),o){o.hasOwnProperty("styles")||(Object.defineProperty(o,"styles",{enumerable:!0,get:function(){return r(o._styles)}}),o._renderStyles=r);var c=o._styles||(o._styles={});e=function(t,e){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],c=r[0],l={id:t+":"+i,css:r[1],media:r[2],sourceMap:r[3]};o[c]?o[c].parts.push(l):n.push(o[c]={id:c,parts:[l]})}return n}(t,e),n?function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,o=0;o<n.length;o++){var r=n[o],c=r.media||"default",style=t[c];style?style.ids.indexOf(r.id)<0&&(style.ids.push(r.id),style.css+="\n"+r.css):t[c]={ids:[r.id],css:r.css,media:r.media}}}(c,e):function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,o=0;o<n.length;o++){var r=n[o];t[r.id]={ids:[r.id],css:r.css,media:r.media}}}(c,e)}}function r(t){var e="";for(var n in t){var style=t[n];e+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return e}n.r(e),n.d(e,"default",(function(){return o}))},function(t,e,n){var content=n(17);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(5).default;t.exports.__inject__=function(t){o("72daabed",content,!0,t)}},function(t,e,n){var content=n(19);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(5).default;t.exports.__inject__=function(t){o("3191d5ad",content,!0,t)}},function(t,e,n){var content=n(25);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(5).default;t.exports.__inject__=function(t){o("932a8f60",content,!0,t)}},function(t,e){t.exports=require("vue-no-ssr")},function(t,e){t.exports=require("vue-client-only")},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e){t.exports=require("defu")},function(t,e,n){t.exports=n(27)},function(t,e,n){"use strict";n.r(e);var o=n(6),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e.default=r.a},function(t,e,n){(e=n(4)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var o=n(7),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e.default=r.a},function(t,e,n){(e=n(4)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""]),t.exports=e},function(t,e,n){var content=n(21);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(5).default("a07579c2",content,!0)},function(t,e,n){var o=n(4),r=n(22),c=n(23);e=o(!1);var l=r(c);e.push([t.i,"@font-face{font-family:Gilroy Bold;src:url("+l+') format("truetype")}body,html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box}.main-page{height:100vh;background:#1c1a20}.bold{font-family:Gilroy Bold}.white{color:#fff}.textleft{text-align:left}.textright{text-align:right}.textcenter{text-align:center}.mb0{margin-bottom:0}.mb4{margin-bottom:4px}.mb8{margin-bottom:8px}.mb10{margin-bottom:10px}.mb12{margin-bottom:12px}.mb13{margin-bottom:13px}.mb14{margin-bottom:14px}.mb16{margin-bottom:16px}.mb18{margin-bottom:18px}.mb20{margin-bottom:20px}.mb23{margin-bottom:23px}.mb24{margin-bottom:24px}.mb26{margin-bottom:26px}.mb28{margin-bottom:28px}.mb32{margin-bottom:32px}.mb36{margin-bottom:36px}.mb38{margin-bottom:38px}.mb40{margin-bottom:40px}.mb42{margin-bottom:42px}.mb46{margin-bottom:46px}.mb48{margin-bottom:48px}.mb50{margin-bottom:50px}.mb52{margin-bottom:52px}.mb56{margin-bottom:56px}.mb60{margin-bottom:60px}.mb64{margin-bottom:64px}.mb70{margin-bottom:70px}.mb80{margin-bottom:80px}.mb90{margin-bottom:90px}.mb110{margin-bottom:110px}.mb136{margin-bottom:136px}.mb145{margin-bottom:145px}.mr8{margin-right:8px}.fs20{font-size:20px}.lh1{line-height:1.2}',""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,n){t.exports=n.p+"fonts/349823f.ttf"},function(t,e,n){"use strict";n.r(e);var o=n(8),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e.default=r.a},function(t,e,n){(e=n(4)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""]),t.exports=e},function(t,e){},function(t,e,n){"use strict";n.r(e);var o=n(11),r=n(0),c=n.n(r),l=n(12),d=n.n(l);var h={};function f(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function m(t,e=!1,n="components"){return Array.prototype.concat.apply([],t.matched.map((t,o)=>Object.keys(t[n]).map(r=>(e&&e.push(o),t[n][r]))))}function x(t,e){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((o,r)=>(t.components[r]?o.push(e(t.components[r],t.instances[r],t,r,n)):delete t.components[r],o),[])))}(t,async(t,n,o,r)=>("function"!=typeof t||t.options||(t=await t()),o.components[r]=t=f(t),"function"==typeof e?e(t,n,o,r):t)))}async function y(t){if(t)return await x(t),{...t,meta:m(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function v(t,e){t.context||(t.context={isStatic:!0,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,n)=>{if(!e)return;t.context._redirected=!0;let o=typeof path;"number"==typeof e||"undefined"!==o&&"object"!==o||(n=path||{},o=typeof(path=e),e=302),"object"===o&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));let r,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");c=path.split("#"),2===c.length&&([path,r]=c);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=r?"#"+r:"",l}(path,n),t.context.next({path:path,status:e}))},t.context.beforeNuxtRender=t=>e.beforeRenderFns.push(t));const[n,o]=await Promise.all([y(e.route),y(e.from)]);e.route&&(t.context.route=n),e.from&&(t.context.from=o),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!1,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function _(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():w(t[0],e).then(()=>_(t.slice(1),e))}function w(t,e){let n;return n=2===t.length?new Promise(n=>{t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))}):t(e),n&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function C(t,e){return function(t,e){const n=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",E(e)));return function(e,o){let path="";const data=e||{},r=(o||{}).pretty?k:encodeURIComponent;for(let i=0;i<t.length;i++){const e=t[i];if("string"==typeof e){path+=e;continue}const o=data[e.name||"pathMatch"];let c;if(null==o){if(e.optional){e.partial&&(path+=e.prefix);continue}throw new TypeError('Expected "'+e.name+'" to be defined')}if(Array.isArray(o)){if(!e.repeat)throw new TypeError('Expected "'+e.name+'" to not repeat, but received `'+JSON.stringify(o)+"`");if(0===o.length){if(e.optional)continue;throw new TypeError('Expected "'+e.name+'" to not be empty')}for(let t=0;t<o.length;t++){if(c=r(o[t]),!n[i].test(c))throw new TypeError('Expected all "'+e.name+'" to match "'+e.pattern+'", but received `'+JSON.stringify(c)+"`");path+=(0===t?e.prefix:e.delimiter)+c}}else{if(c=e.asterisk?k(o,!0):r(o),!n[i].test(c))throw new TypeError('Expected "'+e.name+'" to match "'+e.pattern+'", but received "'+c+'"');path+=e.prefix+c}}return path}}(function(t,e){const n=[];let o=0,r=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=$.exec(t));){const e=l[0],d=l[1],h=l.index;if(path+=t.slice(r,h),r=h+e.length,d){path+=d[1];continue}const f=t[r],m=l[2],x=l[3],y=l[4],v=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const C=null!=m&&null!=f&&f!==m,$="+"===_||"*"===_,k="?"===_||"*"===_,E=l[2]||c,pattern=y||v;n.push({name:x||o++,prefix:m||"",delimiter:E,optional:k,repeat:$,partial:C,asterisk:Boolean(w),pattern:pattern?S(pattern):w?".*":"[^"+j(E)+"]+?"})}r<t.length&&(path+=t.substr(r));path&&n.push(path);return n}(t,e),e)}const $=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function k(t,e){const n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function j(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function S(t){return t.replace(/([=!:$/()])/g,"\\$1")}function E(t){return t&&t.sensitive?"":"i"}var T=n(13),N=n.n(T),O=n(10),R=n.n(O),P=n(9),A=n.n(P),M=n(2),B=n.n(M);const L=()=>{},U=B.a.prototype.push;B.a.prototype.push=function(t,e=L,n){return U.call(this,t,e,n)},c.a.use(B.a);const z={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){let o=!1;const r=m(t);r.length<2&&r.every(t=>!1!==t.options.scrollToTop)?o={x:0,y:0}:r.some(t=>t.options.scrollToTop)&&(o={x:0,y:0}),n&&(o=n);const c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick(()=>c.$emit("triggerScroll")),new Promise(e=>{c.$once("triggerScroll",()=>{if(t.hash){let e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(o={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(o)})})},routes:[{path:"/",component:()=>n.e(1).then(n.bind(null,34)).then(t=>t.default||t),name:"index"}],fallback:!1};var D={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){data.nuxtChild=!0;const o=e,r=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition;let l=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;data.nuxtChildDepth=l;const d=r[l]||c,h={};V.forEach(t=>{void 0!==d[t]&&(h[t]=d[t])});const f={};F.forEach(t=>{"function"==typeof d[t]&&(f[t]=d[t].bind(o))});const m=f.beforeEnter;if(f.beforeEnter=t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(o,t)},!1===d.css){const t=f.leave;(!t||t.length<2)&&(f.leave=(e,n)=>{t&&t.call(o,e),o.$nextTick(n)})}let x=t("routerView",data);return n.keepAlive&&(x=t("keep-alive",{props:n.keepAliveProps},[x])),t("transition",{props:h,on:f},[x])}};const V=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],F=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var I={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}}},Q=n(1);var H=Object(Q.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])}),[],!1,(function(t){var e=n(16);e.__inject__&&e.__inject__(t)}),null,"d9f40360").exports,K={name:"Nuxt",components:{NuxtChild:D,NuxtError:H},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||C(this.$route.matched[0].path)(this.$route.params);const[t]=this.$route.matched;if(!t)return this.$route.path;const e=t.components.default;if(e&&e.options){const{options:t}=e;if(t.key)return"function"==typeof t.key?t.key(this.$route):t.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick(()=>this.errorFromNuxtError=!1),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p",`Error details: ${this.errorFromNuxtError.toString()}`),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick(()=>this.displayingNuxtError=!1),t(H,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},J={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var X=Object(Q.a)(J,void 0,void 0,!1,(function(t){var e=n(18);e.__inject__&&e.__inject__(t)}),null,"5fd6a784").exports;n(20);const G={_default:Object(Q.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)}),[],!1,(function(t){var e=n(24);e.__inject__&&e.__inject__(t)}),null,"76217c92").exports};var W={head:{title:"Simon Tibor - Frontend Developer",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My perfect Nuxt.js project"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"simtibi.github.io"},{hid:"author",name:"author",content:"Simon Tibor"},{hid:"theme-color",name:"theme-color",content:"#fff"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"simtibi.github.io"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"simtibi.github.io"},{hid:"og:description",name:"og:description",property:"og:description",content:"My perfect Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"manifest",href:"/_nuxt/manifest.2fc9b120.json"},{rel:"shortcut icon",href:"/_nuxt/icons/icon_64.9mld2VBMsQ$.png"},{rel:"apple-touch-icon",href:"/_nuxt/icons/icon_512.9mld2VBMsQ$.png",sizes:"512x512"}],style:[],script:[],htmlAttrs:{lang:"en"}},render(t,e){const n=t("NuxtLoading",{ref:"loading"}),o=t(this.layout||"nuxt"),r=t("div",{domProps:{id:"__layout"},key:this.layoutName},[o]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[r]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error,this.context=this.$options.context},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},async refresh(){const t=function(t,e=!1){return m(t,e,"instances")}(this.$route);if(!t.length)return;this.$loading.start();const e=t.map(t=>{const p=[];return t.$options.fetch&&p.push(w(t.$options.fetch,this.context)),t.$options.asyncData&&p.push(w(t.$options.asyncData,this.context).then(e=>{for(const n in e)c.a.set(t.$data,n,e[n])})),Promise.all(p)});try{await Promise.all(e)}catch(t){this.$loading.fail(),function(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}(t),this.error(t)}this.$loading.finish()},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&G["_"+t]||(t="default"),this.layoutName=t,this.layout=G["_"+t],this.layout},loadLayout:t=>(t&&G["_"+t]||(t="default"),Promise.resolve(G["_"+t]))},components:{NuxtLoading:X}},Y=(n(26),async function(t,e){const n={accessibleIcons:!0,iconProperty:"$icon",icons:{64:"/_nuxt/icons/icon_64.9mld2VBMsQ$.png",120:"/_nuxt/icons/icon_120.9mld2VBMsQ$.png",144:"/_nuxt/icons/icon_144.9mld2VBMsQ$.png",152:"/_nuxt/icons/icon_152.9mld2VBMsQ$.png",192:"/_nuxt/icons/icon_192.9mld2VBMsQ$.png",384:"/_nuxt/icons/icon_384.9mld2VBMsQ$.png",512:"/_nuxt/icons/icon_512.9mld2VBMsQ$.png"}};e(n.iconProperty.replace("$",""),Z(n.icons))});const Z=t=>e=>t[e]||"";var tt=n(3),et=n.n(tt),nt=n(14),ot=n.n(nt);const it={setBaseURL(t){this.defaults.baseURL=t},setHeader(t,e,n="common"){for(let o of Array.isArray(n)?n:[n]){if(!e)return void delete this.defaults.headers[o][t];this.defaults.headers[o][t]=e}},setToken(t,e,n="common"){const o=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",o,n)},onRequest(t){this.interceptors.request.use(e=>t(e)||e)},onResponse(t){this.interceptors.response.use(e=>t(e)||e)},onRequestError(t){this.interceptors.request.use(void 0,e=>t(e)||Promise.reject(e))},onResponseError(t){this.interceptors.response.use(void 0,e=>t(e)||Promise.reject(e))},onError(t){this.onRequestError(t),this.onResponseError(t)},create(t){return st(ot()(t,this.defaults))}};for(let t of["request","delete","get","head","options","post","put","patch"])it["$"+t]=function(){return this[t].apply(this,arguments).then(t=>t&&t.data)};const st=t=>{const e=et.a.create(t);return e.CancelToken=et.a.CancelToken,e.isCancel=et.a.isCancel,(t=>{for(let e in it)t[e]=it[e].bind(t)})(e),at(e),e},at=t=>{};var ct=(t,e)=>{const n={baseURL:process.env._AXIOS_BASE_URL_||"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"],delete n.headers.common["content-length"],delete n.headers.common["content-md5"],delete n.headers.common["content-type"],n.headers.common["accept-encoding"]="gzip, deflate";const o=st(n);t.$axios=o,e("axios",o)};c.a.component(R.a.name,R.a),c.a.component(A.a.name,{...A.a,render:(t,e)=>A.a.render(t,e)}),c.a.component(D.name,D),c.a.component("NChild",D),c.a.component(K.name,K),c.a.use(N.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const ut={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function lt(t){const e=await new B.a(z),n={router:e,nuxt:{defaultTransition:ut,transitions:[ut],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},ut,{name:t}):Object.assign({},ut,t):ut),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,n.context._errored=Boolean(e),e=e?function(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}(e):null;const o=this.nuxt||this.$options.nuxt;return o.dateErr=Date.now(),o.err=e,t&&(t.nuxt.error=e),e}},...W},o=t?t.next:t=>n.router.push(t);let r;if(t)r=e.resolve(t.url).route;else{const path=function(base,t){let path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(e.options.base,e.options.mode);r=e.resolve(path).route}await v(n,{route:r,next:o,error:n.nuxt.error.bind(n),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t});const l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");n[t="$"+t]=e;const o="__nuxt_"+t+"_installed__";c.a[o]||(c.a[o]=!0,c.a.use(()=>{Object.prototype.hasOwnProperty.call(c.a,t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))};return await Y(n.context,l),await ct(n.context,l),t&&t.url&&await new Promise((o,r)=>{e.push(t.url,o,()=>{const r=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,n.context.route=await y(e),n.context.params=e.params||{},n.context.query=e.query||{},r(),o()})})}),{app:n,router:e}}var pt={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}}};c.a.component(pt.name,pt),c.a.component("NLink",pt),global.fetch||(global.fetch=d.a);const ht=()=>new c.a({render:t=>t("div")});const ft=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(o.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=async t=>{t.redirected=!1,t.next=ft(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],error:null,serverRendered:!0};const{app:e,router:n}=await lt(t),o=new c.a(e);t.meta=o.$meta(),t.asyncData={};const r=async()=>{await Promise.all(t.beforeRenderFns.map(e=>w(e,{Components:x,nuxtState:t.nuxt})))},l=async()=>{const n=(H.options||H).layout,c="function"==typeof n?n.call(H,e.context):n;return t.nuxt.layout=c||"default",await o.loadLayout(c),o.setLayout(c),await r(),o},d=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),l()),x=m(n.match(t.url));let y=[];if(y=y.map(t=>"function"==typeof t?t:("function"!=typeof h[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),h[t])),await _(y,e.context),t.redirected)return ht();if(t.nuxt.error)return l();let v=x.length?x[0].options.layout:H.layout;if("function"==typeof v&&(v=v(e.context)),await o.loadLayout(v),t.nuxt.error)return l();if(v=o.setLayout(v),t.nuxt.layout=o.layoutName,y=[],v=f(v),v.options.middleware&&(y=y.concat(v.options.middleware)),x.forEach(t=>{t.options.middleware&&(y=y.concat(t.options.middleware))}),y=y.map(t=>"function"==typeof t?t:("function"!=typeof h[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),h[t])),await _(y,e.context),t.redirected)return ht();if(t.nuxt.error)return l();let C=!0;try{for(const t of x)if("function"==typeof t.options.validate&&(C=await t.options.validate(e.context),!C))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),l()}if(!C)return t._generate&&(t.nuxt.serverRendered=!1),d();if(!x.length)return d();const $=await Promise.all(x.map(n=>{const o=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const r=w(n.options.asyncData,e.context);r.then(e=>(t.asyncData[n.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){const data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(n),e)),o.push(r)}else o.push(null);return n.options.fetch?o.push(n.options.fetch(e.context)):o.push(null),Promise.all(o)}));return t.nuxt.data=$.map(t=>t[0]||{}),t.redirected?ht():t.nuxt.error?l():(await r(),o)}}]);