define("input",["react","nycticorax","antd"],(function(t,e,n){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict";var r=n(2),o=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n(5)),i=o(n(6)),u=o(n(0)),l=o(n(20)),c=o(n(7)),f=o(n(21)),s=o(n(8)),p=r(n(9)),d=o(n(10)),m=o(n(11)),y=n(14),b=o(n(15));function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var v=new d.default,g=v.createStore,A=v.connect,x=v.dispatch;g({data:{}});var E=function(t){(0,f.default)(r,t);var e,n=(e=r,function(){var t,n=(0,c.default)(e);if(h()){var r=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function r(){var t;(0,a.default)(this,r);for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return t=n.call.apply(n,[this].concat(o)),(0,s.default)((0,u.default)(t),"state",{local:void 0}),(0,s.default)((0,u.default)(t),"onSubmit",(function(e){e.preventDefault(),t.props.form.validateFields((function(e,n){e||(t.props.dispatch("input","saveState",{global:n.global}),y.message.success("success to save global data"))}))})),(0,s.default)((0,u.default)(t),"onSave",(function(){t.props.dispatch("global","savePath",t.props.match.url)})),t}return(0,i.default)(r,[{key:"render",value:function(){var t=this.props,e=t.data,n=t.form,r=t.match,o=this.state.local,a=n.getFieldDecorator;return p.default.createElement(y.Form,{onSubmit:this.onSubmit,className:b.default.form},p.default.createElement(y.Card,{size:"small",title:"Router",extra:p.default.createElement(y.Tooltip,{placement:"bottom",title:"save current path"},p.default.createElement(y.Button,{onClick:this.onSave},"save")),className:b.default.card},p.default.createElement("div",{className:b.default.info},p.default.createElement("span",null,"router: "),p.default.createElement(y.Tag,null,r.path)),p.default.createElement("div",{className:b.default.info},p.default.createElement("span",null,"params: "),p.default.createElement(y.Tag,null,r.params.id))),p.default.createElement(y.Form.Item,null,a("global",{rules:[{required:!0,message:"Please input"}],initialValue:e.global})(p.default.createElement(y.Input,{autoComplete:"off",prefix:p.default.createElement(y.Icon,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"global state"}))),p.default.createElement(y.Form.Item,null,a("local",{rules:[{required:!0,message:"Please input"}],initialValue:o})(p.default.createElement(y.Input,{autoComplete:"off",prefix:p.default.createElement(y.Icon,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"local state"}))),p.default.createElement(y.Form.Item,null,a("remember",{valuePropName:"checked",initialValue:!0})(p.default.createElement(y.Checkbox,null,"Remember me")),p.default.createElement("a",{className:b.default.forgot,href:""},"Forgot password"),p.default.createElement(y.Button,{type:"primary",htmlType:"submit",className:b.default.button},"Save")))}}],[{key:"saveState",value:function(t){x({data:t},!0)}}]),r}(p.Component);(0,s.default)(E,"propTypes",{dispatch:m.default.func.isRequired,data:m.default.string.isRequired,match:m.default.object.isRequired});var w=A("data")(y.Form.create()(E));e.default=w},function(t,e,n){var r=n(3);function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var u=a?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.r(e),n.d(e,"default",(function(){return o}))},function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,"default",(function(){return r}))},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){t.exports=n(12)()},function(t,e,n){"use strict";var r=n(13);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e){t.exports=n},function(t,e,n){var r=n(16);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(18)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(e=t.exports=n(17)(!0)).push([t.i,".form_3Y1EK {\n  max-width: 400px;\n  margin: 30px;\n}\n.forgot_K8ShR {\n  float: right;\n}\n.button_14HE_ {\n  width: 100%;\n}\n.card_cJyQz {\n  margin-bottom: 20px;\n}\n.info_2LOkl {\n  margin: 10px 0;\n  font-size: 14px;\n}\n.info_2LOkl span {\n  display: inline-block;\n  vertical-align: middle;\n  width: 60px;\n}\n","",{version:3,sources:["/Users/am0200/Documents/github/humpback-demo/components/input/index.module.less","index.module.less"],names:[],mappings:"AAAA;EACE,gBAAA;EACA,YAAA;ACCF;ADCA;EACE,YAAA;ACCF;ADCA;EACE,WAAA;ACCF;ADCA;EACE,mBAAA;ACCF;ADCA;EACE,cAAA;EACA,eAAA;ACCF;ADHA;EAKI,qBAAA;EACA,sBAAA;EACA,WAAA;ACCJ",file:"index.module.less",sourcesContent:[".form {\n  max-width: 400px;\n  margin: 30px;\n}\n.forgot {\n  float: right;\n}\n.button {\n  width: 100%;\n}\n.card {\n  margin-bottom: 20px;\n}\n.info {\n  margin: 10px 0;\n  font-size: 14px;\n\n  span {\n    display: inline-block;\n    vertical-align: middle;\n    width: 60px;\n  }\n}\n",".form {\n  max-width: 400px;\n  margin: 30px;\n}\n.forgot {\n  float: right;\n}\n.button {\n  width: 100%;\n}\n.card {\n  margin-bottom: 20px;\n}\n.info {\n  margin: 10px 0;\n  font-size: 14px;\n}\n.info span {\n  display: inline-block;\n  vertical-align: middle;\n  width: 60px;\n}\n"]}]),e.locals={form:"form_3Y1EK",forgot:"forgot_K8ShR",button:"button_14HE_",card:"card_cJyQz",info:"info_2LOkl"}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(t,e){return e?e.querySelector(t):document.querySelector(t)},l=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=u.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,f=0,s=[],p=n(19);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],e))}else{var u=[];for(i=0;i<r.parts.length;i++)u.push(g(r.parts[i],e));a[r.id]={id:r.id,refs:1,parts:u}}}}function m(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],u={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(u):n.push(r[i]={id:i,parts:[u]})}return n}function y(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),s.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(t.insertAt.before,n);n.insertBefore(e,o)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=s.indexOf(t);e>=0&&s.splice(e,1)}function h(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return v(e,t.attrs),y(t,e),e}function v(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function g(t,e){var n,r,o,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var i=f++;n=c||(c=h(e)),r=E.bind(null,n,i,!1),o=E.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),y(t,e),e}(e),r=O.bind(null,n,e),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=w.bind(null,n),o=function(){b(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=m(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var i=n[o];(u=a[i.id]).refs--,r.push(u)}t&&d(m(t,e),e);for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete a[u.id]}}}};var A,x=(A=[],function(t,e){return A[t]=e,A.filter(Boolean).join("\n")});function E(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function w(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function O(t,e,n){var r=n.css,o=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(r=p(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(i),u&&URL.revokeObjectURL(u)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,a=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e),n.d(e,"default",(function(){return a}));var o=n(0);function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?Object(o.default)(t):e}},function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.r(e),n.d(e,"default",(function(){return o}))}]).default}));
//# sourceMappingURL=index.js.map