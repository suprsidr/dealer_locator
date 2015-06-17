'use strict';
$(document).foundation();
// localforage
!function(){var a,b,c,d;!function(){var e={},f={};a=function(a,b,c){e[a]={deps:b,callback:c}},d=c=b=function(a){function c(b){if("."!==b.charAt(0))return b;for(var c=b.split("/"),d=a.split("/").slice(0,-1),e=0,f=c.length;f>e;e++){var g=c[e];if(".."===g)d.pop();else{if("."===g)continue;d.push(g)}}return d.join("/")}if(d._eak_seen=e,f[a])return f[a];if(f[a]={},!e[a])throw new Error("Could not find module "+a);for(var g,h=e[a],i=h.deps,j=h.callback,k=[],l=0,m=i.length;m>l;l++)k.push("exports"===i[l]?g={}:b(c(i[l])));var n=j.apply(this,k);return f[a]=g||n}}(),a("promise/all",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to all.");return new b(function(b,c){function d(a){return function(b){f(a,b)}}function f(a,c){h[a]=c,0===--i&&b(h)}var g,h=[],i=a.length;0===i&&b([]);for(var j=0;j<a.length;j++)g=a[j],g&&e(g.then)?g.then(d(j),c):f(j,g)})}var d=a.isArray,e=a.isFunction;b.all=c}),a("promise/asap",["exports"],function(a){"use strict";function b(){return function(){process.nextTick(e)}}function c(){var a=0,b=new i(e),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function d(){return function(){j.setTimeout(e,1)}}function e(){for(var a=0;a<k.length;a++){var b=k[a],c=b[0],d=b[1];c(d)}k=[]}function f(a,b){var c=k.push([a,b]);1===c&&g()}var g,h="undefined"!=typeof window?window:{},i=h.MutationObserver||h.WebKitMutationObserver,j="undefined"!=typeof global?global:void 0===this?window:this,k=[];g="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?b():i?c():d(),a.asap=f}),a("promise/config",["exports"],function(a){"use strict";function b(a,b){return 2!==arguments.length?c[a]:void(c[a]=b)}var c={instrument:!1};a.config=c,a.configure=b}),a("promise/polyfill",["./promise","./utils","exports"],function(a,b,c){"use strict";function d(){var a;a="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self;var b="Promise"in a&&"resolve"in a.Promise&&"reject"in a.Promise&&"all"in a.Promise&&"race"in a.Promise&&function(){var b;return new a.Promise(function(a){b=a}),f(b)}();b||(a.Promise=e)}var e=a.Promise,f=b.isFunction;c.polyfill=d}),a("promise/promise",["./config","./utils","./all","./race","./resolve","./reject","./asap","exports"],function(a,b,c,d,e,f,g,h){"use strict";function i(a){if(!v(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof i))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._subscribers=[],j(a,this)}function j(a,b){function c(a){o(b,a)}function d(a){q(b,a)}try{a(c,d)}catch(e){d(e)}}function k(a,b,c,d){var e,f,g,h,i=v(c);if(i)try{e=c(d),g=!0}catch(j){h=!0,f=j}else e=d,g=!0;n(b,e)||(i&&g?o(b,e):h?q(b,f):a===D?o(b,e):a===E&&q(b,e))}function l(a,b,c,d){var e=a._subscribers,f=e.length;e[f]=b,e[f+D]=c,e[f+E]=d}function m(a,b){for(var c,d,e=a._subscribers,f=a._detail,g=0;g<e.length;g+=3)c=e[g],d=e[g+b],k(b,c,d,f);a._subscribers=null}function n(a,b){var c,d=null;try{if(a===b)throw new TypeError("A promises callback cannot return that same promise.");if(u(b)&&(d=b.then,v(d)))return d.call(b,function(d){return c?!0:(c=!0,void(b!==d?o(a,d):p(a,d)))},function(b){return c?!0:(c=!0,void q(a,b))}),!0}catch(e){return c?!0:(q(a,e),!0)}return!1}function o(a,b){a===b?p(a,b):n(a,b)||p(a,b)}function p(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(r,a))}function q(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(s,a))}function r(a){m(a,a._state=D)}function s(a){m(a,a._state=E)}var t=a.config,u=(a.configure,b.objectOrFunction),v=b.isFunction,w=(b.now,c.all),x=d.race,y=e.resolve,z=f.reject,A=g.asap;t.async=A;var B=void 0,C=0,D=1,E=2;i.prototype={constructor:i,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(a,b){var c=this,d=new this.constructor(function(){});if(this._state){var e=arguments;t.async(function(){k(c._state,d,e[c._state-1],c._detail)})}else l(this,d,a,b);return d},"catch":function(a){return this.then(null,a)}},i.all=w,i.race=x,i.resolve=y,i.reject=z,h.Promise=i}),a("promise/race",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to race.");return new b(function(b,c){for(var d,e=0;e<a.length;e++)d=a[e],d&&"function"==typeof d.then?d.then(b,c):b(d)})}var d=a.isArray;b.race=c}),a("promise/reject",["exports"],function(a){"use strict";function b(a){var b=this;return new b(function(b,c){c(a)})}a.reject=b}),a("promise/resolve",["exports"],function(a){"use strict";function b(a){if(a&&"object"==typeof a&&a.constructor===this)return a;var b=this;return new b(function(b){b(a)})}a.resolve=b}),a("promise/utils",["exports"],function(a){"use strict";function b(a){return c(a)||"object"==typeof a&&null!==a}function c(a){return"function"==typeof a}function d(a){return"[object Array]"===Object.prototype.toString.call(a)}var e=Date.now||function(){return(new Date).getTime()};a.objectOrFunction=b,a.isFunction=c,a.isArray=d,a.now=e}),b("promise/polyfill").polyfill()}(),function(){"use strict";function a(a){if(a)for(var b in a)l[b]=a[b];return new j(function(a,b){var c=m.open(l.name,l.version);c.onerror=function(){b(c.error)},c.onupgradeneeded=function(){c.result.createObjectStore(l.storeName)},c.onsuccess=function(){k=c.result,a()}})}function b(a,b){var c=this;return new j(function(d,e){c.ready().then(function(){var c=k.transaction(l.storeName,"readonly").objectStore(l.storeName),f=c.get(a);f.onsuccess=function(){var a=f.result;void 0===a&&(a=null),i(b,a),d(a)},f.onerror=function(){b&&b(null,f.error),e(f.error)}},e)})}function c(a,b,c){var d=this;return new j(function(e,f){d.ready().then(function(){var d=k.transaction(l.storeName,"readwrite").objectStore(l.storeName);null===b&&(b=void 0);var g=d.put(b,a);g.onsuccess=function(){void 0===b&&(b=null),i(c,b),e(b)},g.onerror=function(){c&&c(null,g.error),f(g.error)}},f)})}function d(a,b){var c=this;return new j(function(d,e){c.ready().then(function(){var c=k.transaction(l.storeName,"readwrite").objectStore(l.storeName),f=c["delete"](a);f.onsuccess=function(){i(b),d()},f.onerror=function(){b&&b(f.error),e(f.error)},f.onabort=function(a){var c=a.target.error;"QuotaExceededError"===c&&(b&&b(c),e(c))}},e)})}function e(a){var b=this;return new j(function(c,d){b.ready().then(function(){var b=k.transaction(l.storeName,"readwrite").objectStore(l.storeName),e=b.clear();e.onsuccess=function(){i(a),c()},e.onerror=function(){a&&a(null,e.error),d(e.error)}},d)})}function f(a){var b=this;return new j(function(c,d){b.ready().then(function(){var b=k.transaction(l.storeName,"readonly").objectStore(l.storeName),e=b.count();e.onsuccess=function(){a&&a(e.result),c(e.result)},e.onerror=function(){a&&a(null,e.error),d(e.error)}},d)})}function g(a,b){var c=this;return new j(function(d,e){return 0>a?(b&&b(null),void d(null)):void c.ready().then(function(){var c=k.transaction(l.storeName,"readonly").objectStore(l.storeName),f=!1,g=c.openCursor();g.onsuccess=function(){var c=g.result;return c?void(0===a?(b&&b(c.key),d(c.key)):f?(b&&b(c.key),d(c.key)):(f=!0,c.advance(a))):(b&&b(null),void d(null))},g.onerror=function(){b&&b(null,g.error),e(g.error)}},e)})}function h(a){var b=this;return new j(function(c,d){b.ready().then(function(){var b=k.transaction(l.storeName,"readonly").objectStore(l.storeName),e=b.openCursor(),f=[];e.onsuccess=function(){var b=e.result;return b?(f.push(b.key),void b["continue"]()):(a&&a(f),void c(f))},e.onerror=function(){a&&a(null,e.error),d(e.error)}},d)})}function i(a,b){return a?setTimeout(function(){return a(b)},0):void 0}var j="undefined"!=typeof module&&module.exports?require("promise"):this.Promise,k=null,l={},m=m||this.indexedDB||this.webkitIndexedDB||this.mozIndexedDB||this.OIndexedDB||this.msIndexedDB;if(m){var n={_driver:"asyncStorage",_initStorage:a,getItem:b,setItem:c,removeItem:d,clear:e,length:f,key:g,keys:h};"function"==typeof define&&define.amd?define("asyncStorage",function(){return n}):"undefined"!=typeof module&&module.exports?module.exports=n:this.asyncStorage=n}}.call(this),function(){"use strict";function a(a){if(a)for(var b in a)m[b]=a[b];return l=m.name+"/",n.resolve()}function b(a){var b=this;return new n(function(c,d){b.ready().then(function(){o.clear(),a&&a(),c()},d)})}function c(a,b){var c=this;return new n(function(d,e){c.ready().then(function(){try{var c=o.getItem(l+a);c&&(c=h(c)),b&&b(c),d(c)}catch(f){b&&b(null,f),e(f)}},e)})}function d(a,b){var c=this;return new n(function(d,e){c.ready().then(function(){var c;try{c=o.key(a)}catch(e){c=null}c&&(c=c.substring(l.length)),b&&b(c),d(c)},e)})}function e(a){var b=this;return new n(function(c,d){b.ready().then(function(){for(var b=o.length,d=[],e=0;b>e;e++)d.push(o.key(e).substring(l.length));a&&a(d),c(d)},d)})}function f(a){var b=this;return new n(function(c,d){b.ready().then(function(){var b=o.length;a&&a(b),c(b)},d)})}function g(a,b){var c=this;return new n(function(d,e){c.ready().then(function(){o.removeItem(l+a),b&&b(),d()},e)})}function h(a){if(a.substring(0,r)!==q)return JSON.parse(a);for(var b=a.substring(D),c=a.substring(r,D),d=new ArrayBuffer(2*b.length),e=new Uint16Array(d),f=b.length-1;f>=0;f--)e[f]=b.charCodeAt(f);switch(c){case s:return d;case t:return new Blob([d]);case u:return new Int8Array(d);case v:return new Uint8Array(d);case w:return new Uint8ClampedArray(d);case x:return new Int16Array(d);case z:return new Uint16Array(d);case y:return new Int32Array(d);case A:return new Uint32Array(d);case B:return new Float32Array(d);case C:return new Float64Array(d);default:throw new Error("Unkown type: "+c)}}function i(a){var b="",c=new Uint16Array(a);try{b=String.fromCharCode.apply(null,c)}catch(d){for(var e=0;e<c.length;e++)b+=String.fromCharCode(c[e])}return b}function j(a,b){var c="";if(a&&(c=a.toString()),a&&("[object ArrayBuffer]"===a.toString()||a.buffer&&"[object ArrayBuffer]"===a.buffer.toString())){var d,e=q;a instanceof ArrayBuffer?(d=a,e+=s):(d=a.buffer,"[object Int8Array]"===c?e+=u:"[object Uint8Array]"===c?e+=v:"[object Uint8ClampedArray]"===c?e+=w:"[object Int16Array]"===c?e+=x:"[object Uint16Array]"===c?e+=z:"[object Int32Array]"===c?e+=y:"[object Uint32Array]"===c?e+=A:"[object Float32Array]"===c?e+=B:"[object Float64Array]"===c?e+=C:b(new Error("Failed to get type for BinaryArray"))),b(e+i(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var a=i(this.result);b(q+t+a)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(g){this.console&&this.console.error&&this.console.error("Couldn't convert value into a JSON string: ",a),b(null,g)}}function k(a,b,c){var d=this;return new n(function(e,f){d.ready().then(function(){void 0===b&&(b=null);var d=b;j(b,function(b,g){if(g)c&&c(null,g),f(g);else{try{o.setItem(l+a,b)}catch(h){("QuotaExceededError"===h.name||"NS_ERROR_DOM_QUOTA_REACHED"===h.name)&&(c&&c(null,h),f(h))}c&&c(d),e(d)}})},f)})}var l="",m={},n="undefined"!=typeof module&&module.exports?require("promise"):this.Promise,o=null;try{if(!(this.localStorage&&"setItem"in this.localStorage))return;o=this.localStorage}catch(p){return}var q="__lfsc__:",r=q.length,s="arbf",t="blob",u="si08",v="ui08",w="uic8",x="si16",y="si32",z="ur16",A="ui32",B="fl32",C="fl64",D=r+s.length,E={_driver:"localStorageWrapper",_initStorage:a,getItem:c,setItem:k,removeItem:g,clear:b,length:f,key:d,keys:e};"function"==typeof define&&define.amd?define("localStorageWrapper",function(){return E}):"undefined"!=typeof module&&module.exports?module.exports=E:this.localStorageWrapper=E}.call(this),function(){"use strict";function a(a){var b=this;if(a)for(var c in a)p[c]="string"!=typeof a[c]?a[c].toString():a[c];return new m(function(a,c){try{o=n(p.name,p.version,p.description,p.size)}catch(d){return b.setDriver("localStorageWrapper").then(a,c)}o.transaction(function(b){b.executeSql("CREATE TABLE IF NOT EXISTS "+p.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){a()},function(a,b){c(b)})})})}function b(a,b){var c=this;return new m(function(d,e){c.ready().then(function(){o.transaction(function(c){c.executeSql("SELECT * FROM "+p.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var e=c.rows.length?c.rows.item(0).value:null;e&&(e=j(e)),b&&b(e),d(e)},function(a,c){b&&b(null,c),e(c)})})},e)})}function c(a,b,c){var d=this;return new m(function(e,f){d.ready().then(function(){void 0===b&&(b=null);var d=b;k(b,function(b,g){g?f(g):o.transaction(function(g){g.executeSql("INSERT OR REPLACE INTO "+p.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){c&&c(d),e(d)},function(a,b){c&&c(null,b),f(b)})},function(a){a.code===a.QUOTA_ERR&&(c&&c(null,a),f(a))})})},f)})}function d(a,b){var c=this;return new m(function(d,e){c.ready().then(function(){o.transaction(function(c){c.executeSql("DELETE FROM "+p.storeName+" WHERE key = ?",[a],function(){b&&b(),d()},function(a,c){b&&b(c),e(c)})})},e)})}function e(a){var b=this;return new m(function(c,d){b.ready().then(function(){o.transaction(function(b){b.executeSql("DELETE FROM "+p.storeName,[],function(){a&&a(),c()},function(b,c){a&&a(c),d(c)})})},d)})}function f(a){var b=this;return new m(function(c,d){b.ready().then(function(){o.transaction(function(b){b.executeSql("SELECT COUNT(key) as c FROM "+p.storeName,[],function(b,d){var e=d.rows.item(0).c;a&&a(e),c(e)},function(b,c){a&&a(null,c),d(c)})})},d)})}function g(a,b){var c=this;return new m(function(d,e){c.ready().then(function(){o.transaction(function(c){c.executeSql("SELECT key FROM "+p.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var e=c.rows.length?c.rows.item(0).key:null;b&&b(e),d(e)},function(a,c){b&&b(null,c),e(c)})})},e)})}function h(a){var b=this;return new m(function(c,d){b.ready().then(function(){o.transaction(function(b){b.executeSql("SELECT key FROM "+p.storeName,[],function(b,d){for(var e=d.rows.length,f=[],g=0;e>g;g++)f.push(d.rows.item(g).key);a&&a(f),c(f)},function(b,c){a&&a(null,c),d(c)})})},d)})}function i(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=l[c[b]>>2],d+=l[(3&c[b])<<4|c[b+1]>>4],d+=l[(15&c[b+1])<<2|c[b+2]>>6],d+=l[63&c[b+2]];return c.length%3===2?d=d.substring(0,d.length-1)+"=":c.length%3===1&&(d=d.substring(0,d.length-2)+"=="),d}function j(a){if(a.substring(0,r)!==q)return JSON.parse(a);var b,c,d,e,f,g=a.substring(D),h=a.substring(r,D),i=.75*g.length,j=g.length,k=0;"="===g[g.length-1]&&(i--,"="===g[g.length-2]&&i--);var m=new ArrayBuffer(i),n=new Uint8Array(m);for(b=0;j>b;b+=4)c=l.indexOf(g[b]),d=l.indexOf(g[b+1]),e=l.indexOf(g[b+2]),f=l.indexOf(g[b+3]),n[k++]=c<<2|d>>4,n[k++]=(15&d)<<4|e>>2,n[k++]=(3&e)<<6|63&f;switch(h){case s:return m;case t:return new Blob([m]);case u:return new Int8Array(m);case v:return new Uint8Array(m);case w:return new Uint8ClampedArray(m);case x:return new Int16Array(m);case z:return new Uint16Array(m);case y:return new Int32Array(m);case A:return new Uint32Array(m);case B:return new Float32Array(m);case C:return new Float64Array(m);default:throw new Error("Unkown type: "+h)}}function k(a,b){var c="";if(a&&(c=a.toString()),a&&("[object ArrayBuffer]"===a.toString()||a.buffer&&"[object ArrayBuffer]"===a.buffer.toString())){var d,e=q;a instanceof ArrayBuffer?(d=a,e+=s):(d=a.buffer,"[object Int8Array]"===c?e+=u:"[object Uint8Array]"===c?e+=v:"[object Uint8ClampedArray]"===c?e+=w:"[object Int16Array]"===c?e+=x:"[object Uint16Array]"===c?e+=z:"[object Int32Array]"===c?e+=y:"[object Uint32Array]"===c?e+=A:"[object Float32Array]"===c?e+=B:"[object Float64Array]"===c?e+=C:b(new Error("Failed to get type for BinaryArray"))),b(e+i(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var a=i(this.result);b(q+t+a)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(g){this.console&&this.console.error&&this.console.error("Couldn't convert value into a JSON string: ",a),b(null,g)}}var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m="undefined"!=typeof module&&module.exports?require("promise"):this.Promise,n=this.openDatabase,o=null,p={},q="__lfsc__:",r=q.length,s="arbf",t="blob",u="si08",v="ui08",w="uic8",x="si16",y="si32",z="ur16",A="ui32",B="fl32",C="fl64",D=r+s.length;if(n){var E={_driver:"webSQLStorage",_initStorage:a,getItem:b,setItem:c,removeItem:d,clear:e,length:f,key:g,keys:h};"function"==typeof define&&define.amd?define("webSQLStorage",function(){return E}):"undefined"!=typeof module&&module.exports?module.exports=E:this.webSQLStorage=E}}.call(this),function(){"use strict";function a(a){j[a]=function(){var b=arguments;return j.ready().then(function(){return j[a].apply(j,b)})}}var b="undefined"!=typeof module&&module.exports?require("promise"):this.Promise,c={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage"},d=[c.INDEXEDDB,c.WEBSQL,c.LOCALSTORAGE],e=["clear","getItem","key","keys","length","removeItem","setItem"],f={DEFINE:1,EXPORT:2,WINDOW:3},g=f.WINDOW;"function"==typeof define&&define.amd?g=f.DEFINE:"undefined"!=typeof module&&module.exports&&(g=f.EXPORT);for(var h=function(a){var b=b||a.indexedDB||a.webkitIndexedDB||a.mozIndexedDB||a.OIndexedDB||a.msIndexedDB,d={};return d[c.WEBSQL]=!!a.openDatabase,d[c.INDEXEDDB]=!(!b||"function"!=typeof b.open||null!==b.open("_localforage_spec_test",1).onupgradeneeded),d[c.LOCALSTORAGE]=!!function(){try{return localStorage&&"function"==typeof localStorage.setItem}catch(a){return!1}}(),d}(this),i=this,j={INDEXEDDB:c.INDEXEDDB,LOCALSTORAGE:c.LOCALSTORAGE,WEBSQL:c.WEBSQL,_config:{description:"",name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},_driverSet:null,_ready:!1,config:function(a){if("object"==typeof a){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a)this._config[b]=a[b];return!0}return"string"==typeof a?this._config[a]:this._config},driver:function(){return this._driver||null},ready:function(a){var c=new b(function(a,b){j._driverSet.then(function(){null===j._ready&&(j._ready=j._initStorage(j._config)),j._ready.then(a,b)},b)});return c.then(a,a),c},setDriver:function(a,c,d){var e=this;return"string"==typeof a&&(a=[a]),this._driverSet=new b(function(h,j){var k=e._getFirstSupportedDriver(a);if(!k){var l=new Error("No available storage method found.");return e._driverSet=b.reject(l),d&&d(l),void j(l)}if(e._ready=null,g===f.DEFINE)return void require([k],function(a){e._extend(a),c&&c(),h()});if(g===f.EXPORT){var m;switch(k){case e.INDEXEDDB:m=require("./drivers/indexeddb");break;case e.LOCALSTORAGE:m=require("./drivers/localstorage");break;case e.WEBSQL:m=require("./drivers/websql")}e._extend(m)}else e._extend(i[k]);c&&c(),h()}),this._driverSet},supports:function(a){return!!h[a]},_extend:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])},_getFirstSupportedDriver:function(a){var b=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};if(a&&b(a))for(var c=0;c<a.length;c++){var d=a[c];if(this.supports(d))return d}return null}},k=0;k<e.length;k++)a(e[k]);j.setDriver(d),g===f.DEFINE?define(function(){return j}):g===f.EXPORT?module.exports=j:this.localforage=j}.call(this);
// spin
!function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()}(this,function(){"use strict";function t(t,e){var i,o=document.createElement(t||"div");for(i in e)o[i]=e[i];return o}function e(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e]);return t}function i(t,e,i,o){var n=["opacity",e,~~(100*t),i,o].join("-"),r=.01+i/o*100,s=Math.max(1-(1-t)/e*(100-r),t),a=c.substring(0,c.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||"";return p[n]||(u.insertRule("@"+l+"keyframes "+n+"{0%{opacity:"+s+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+e)%100+"%{opacity:"+t+"}100%{opacity:"+s+"}}",u.cssRules.length),p[n]=1),n}function o(t,e){var i,o,n=t.style;for(e=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<d.length;o++)if(i=d[o]+e,void 0!==n[i])return i;return void 0!==n[e]?e:void 0}function n(t,e){for(var i in e)t.style[o(t,i)||i]=e[i];return t}function r(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)void 0===t[o]&&(t[o]=i[o])}return t}function s(t,e){return"string"==typeof t?t:t[e%t.length]}function a(t){this.opts=r(t||{},a.defaults,f)}function l(){function i(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}u.addRule(".spin-vml","behavior:url(#default#VML)"),a.prototype.lines=function(t,o){function r(){return n(i("group",{coordsize:d+" "+d,coordorigin:-c+" "+-c}),{width:d,height:d})}function a(t,a,l){e(u,e(n(r(),{rotation:360/o.lines*t+"deg",left:~~a}),e(n(i("roundrect",{arcsize:o.corners}),{width:c,height:o.width,left:o.radius,top:-o.width>>1,filter:l}),i("fill",{color:s(o.color,t),opacity:o.opacity}),i("stroke",{opacity:0}))))}var l,c=o.length+o.width,d=2*c,p=2*-(o.width+o.length)+"px",u=n(r(),{position:"absolute",top:p,left:p});if(o.shadow)for(l=1;l<=o.lines;l++)a(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=o.lines;l++)a(l);return e(t,u)},a.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0,n&&e+o<n.childNodes.length&&(n=n.childNodes[e+o],n=n&&n.firstChild,n=n&&n.firstChild,n&&(n.opacity=i))}}var c,d=["webkit","Moz","ms","O"],p={},u=function(){var i=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}(),f={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};a.defaults={},r(a.prototype,{spin:function(e){this.stop();{var i=this,o=i.opts,r=i.el=n(t(0,{className:o.className}),{position:o.position,width:0,zIndex:o.zIndex});o.radius+o.length+o.width}if(n(r,{left:o.left,top:o.top}),e&&e.insertBefore(r,e.firstChild||null),r.setAttribute("role","progressbar"),i.lines(r,i.opts),!c){var s,a=0,l=(o.lines-1)*(1-o.direction)/2,d=o.fps,p=d/o.speed,u=(1-o.opacity)/(p*o.trail/100),f=p/o.lines;!function h(){a++;for(var t=0;t<o.lines;t++)s=Math.max(1-(a+(o.lines-t)*f)%p*u,o.opacity),i.opacity(r,t*o.direction+l,s,o);i.timeout=i.el&&setTimeout(h,~~(1e3/d))}()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(o,r){function a(e,i){return n(t(),{position:"absolute",width:r.length+r.width+"px",height:r.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/r.lines*d+r.rotate)+"deg) translate("+r.radius+"px,0)",borderRadius:(r.corners*r.width>>1)+"px"})}for(var l,d=0,p=(r.lines-1)*(1-r.direction)/2;d<r.lines;d++)l=n(t(),{position:"absolute",top:1+~(r.width/2)+"px",transform:r.hwaccel?"translate3d(0,0,0)":"",opacity:r.opacity,animation:c&&i(r.opacity,r.trail,p+d*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"}),r.shadow&&e(l,n(a("#000","0 0 4px #000"),{top:"2px"})),e(o,e(l,a(s(r.color,d),"0 0 1px rgba(0,0,0,.1)")));return o},opacity:function(t,e,i){e<t.childNodes.length&&(t.childNodes[e].style.opacity=i)}});var h=n(t("group"),{behavior:"url(#default#VML)"});return!o(h,"transform")&&h.adj?l():c=o(h,"animation"),a});

(function($, window, document, undefined) {
  
  // sprintf
  var sprintf=(function(){function a(d){return Object.prototype.toString.call(d).slice(8,-1).toLowerCase()}function b(e,f){for(var d=[];f>0;d[--f]=e){}return d.join("")}var c=function(){if(!c.cache.hasOwnProperty(arguments[0])){c.cache[arguments[0]]=c.parse(arguments[0])}return c.format.call(null,c.cache[arguments[0]],arguments)};c.format=function(m,l){var q=1,o=m.length,g="",r,d=[],h,f,j,e,n,p;for(h=0;h<o;h++){g=a(m[h]);if(g==="string"){d.push(m[h])}else{if(g==="array"){j=m[h];if(j[2]){r=l[q];for(f=0;f<j[2].length;f++){if(!r.hasOwnProperty(j[2][f])){throw (sprintf('[sprintf] property "%s" does not exist',j[2][f]))}r=r[j[2][f]]}}else{if(j[1]){r=l[j[1]]}else{r=l[q++]}}if(/[^s]/.test(j[8])&&(a(r)!="number")){throw (sprintf("[sprintf] expecting number but found %s",a(r)))}switch(j[8]){case"b":r=r.toString(2);break;case"c":r=String.fromCharCode(r);break;case"d":r=parseInt(r,10);break;case"e":r=j[7]?r.toExponential(j[7]):r.toExponential();break;case"f":r=j[7]?parseFloat(r).toFixed(j[7]):parseFloat(r);break;case"o":r=r.toString(8);break;case"s":r=((r=String(r))&&j[7]?r.substring(0,j[7]):r);break;case"u":r=Math.abs(r);break;case"x":r=r.toString(16);break;case"X":r=r.toString(16).toUpperCase();break}r=(/[def]/.test(j[8])&&j[3]&&r>=0?"+"+r:r);n=j[4]?j[4]=="0"?"0":j[4].charAt(1):" ";p=j[6]-String(r).length;e=j[6]?b(n,p):"";d.push(j[5]?r+e:e+r)}}}return d.join("")};c.cache={};c.parse=function(d){var g=d,h=[],j=[],i=0;while(g){if((h=/^[^\x25]+/.exec(g))!==null){j.push(h[0])}else{if((h=/^\x25{2}/.exec(g))!==null){j.push("%")}else{if((h=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(g))!==null){if(h[2]){i|=1;var k=[],f=h[2],e=[];if((e=/^([a-z_][a-z_\d]*)/i.exec(f))!==null){k.push(e[1]);while((f=f.substring(e[0].length))!==""){if((e=/^\.([a-z_][a-z_\d]*)/i.exec(f))!==null){k.push(e[1])}else{if((e=/^\[(\d+)\]/.exec(f))!==null){k.push(e[1])}else{throw ("[sprintf] huh?")}}}}else{throw ("[sprintf] huh?")}h[2]=k}else{i|=2}if(i===3){throw ("[sprintf] mixing positional and named placeholders is not (yet) supported")}j.push(h)}else{throw ("[sprintf] huh?")}}}g=g.substring(h[0].length)}return j};return c})();var vsprintf=function(b,a){console.log(a);console.log(b);a.unshift(b);return sprintf.apply(null,a)};
  // xml to object
  function xml2Obj(f){var b="";if(f.attributes&&f.attributes.length>0){var e;b={};b["@attributes"]={};for(var d=0;d<f.attributes.length;d++){e=f.attributes.item(d);b["@attributes"][e.nodeName]=e.nodeValue}}if(f.hasChildNodes()){var c,h,g;if(b===""){b={}}for(var a=0;a<f.childNodes.length;a++){g=f.childNodes.item(a);if((g.nodeType&7)===1){c=g.nodeName;h=xml2Obj(g);if(b.hasOwnProperty(c)){if(b[c].constructor!==Array){b[c]=[b[c]]}b[c].push(h)}else{b[c]=h}}else{if((g.nodeType-1|1)===3){c="@content";h=g.nodeType===3?g.nodeValue.replace(/^\s+|\s+$/g,""):g.nodeValue;if(b.hasOwnProperty(c)){b[c]+=h}else{if(g.nodeType===4||h!==""){b=h}}}}}}return(b)};
 
  var serviceUrl = 'http://sw.hh.dv.local/DealerServices/DealerServicesHandlerv2.ashx',
      obj,
      location,
      map,
      geocoder = new google.maps.Geocoder(),
      tmpls = { request: '<?xml version="1.0" encoding="UTF-8"?><Request xmlns="http://sw.horizonhobby.com/DealerServices/Schemas/DealerService_XPCIDocument_1_0_2.xsd" xmlns:mstns="http://sw.horizonhobby.com/DealerServices/Schemas/DealerService_XPCIDocument_1_0_2.xsd" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:codegen="urn:schemas-microsoft-com:xml-msprop" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://sw.horizonhobby.com/DealerServices/Schemas/DealerService_XPCIDocument_1_0_2.xsd C:\DealerService_XPCIDocument_1_0_2.xsd"><TransactionReference><AccessRequest><AccessLicenseNumber>584a5e41-7fa8-4cff-b4bd-2a8197581e47</AccessLicenseNumber><UserId>visualdevelopers@horizonhobby.com</UserId><Password>B34uyg3484gK</Password></AccessRequest><XpciVersion>1.0.2</XpciVersion></TransactionReference>%(RequestParams)s</Request>',
        params: {
          postal_code: '<GetDealersRequest><PostalCodeRadiusSearch><PostalCode>%(PostalCode)s</PostalCode><WithInRadius>%(WithInRadius)s</WithInRadius><OnlineStoresOnly>%(OnlineStoresOnly)s</OnlineStoresOnly><HCPDealersOnly>%(HCPDealersOnly)s</HCPDealersOnly><IncludeBrandSalesInfo>%(IncludeBrandSalesInfo)s</IncludeBrandSalesInfo><BrandCode>%(BrandCode)s</BrandCode></PostalCodeRadiusSearch></GetDealersRequest>',
          us_city: '<GetDealersRequest><USCityStateSearch><City>%(City)s</City><StateAbbr>%(StateAbbr)s</StateAbbr><OnlineStoresOnly>%(OnlineStoresOnly)s</OnlineStoresOnly><HCPDealersOnly>%(HCPDealersOnly)s</HCPDealersOnly><IncludeBrandSalesInfo>%(IncludeBrandSalesInfo)s</IncludeBrandSalesInfo><BrandCode>%(BrandCode)s</BrandCode></USCityStateSearch></GetDealersRequest>',
          int_city: '<GetDealersRequest><InternationalSearch><Country>%(Country)s</Country><OnlineStoresOnly>%(OnlineStoresOnly)s</OnlineStoresOnly><HCPDealersOnly>%(HCPDealersOnly)s</HCPDealersOnly><IncludeBrandSalesInfo>%(IncludeBrandSalesInfo)s</IncludeBrandSalesInfo><BrandCode>%(BrandCode)s</BrandCode></InternationalSearch></GetDealersRequest>',
          ltln_radius: '<GetDealersRequest><LatLngRadiusSearch><Lat>%(Lat)s</Lat><Lng>%(Lng)s</Lng><WithInRadius>%(WithInRadius)s</WithInRadius><OnlineStoresOnly>%(OnlineStoresOnly)s</OnlineStoresOnly><HCPDealersOnly>%(HCPDealersOnly)s</HCPDealersOnly><IncludeBrandSalesInfo>%(IncludeBrandSalesInfo)s</IncludeBrandSalesInfo><BrandCode>%(BrandCode)s</BrandCode></LatLngRadiusSearch></GetDealersRequest>',
          country_list: '<GetInternationalCountryListRequest><BrandCode>%(BrandCode)s</BrandCode></GetInternationalCountryListRequest>',
          dealer_profile: '<GetDealerProfileRequest><DealerGUID>%(DealerGUID)s</DealerGUID></GetDealerProfileRequest>'
        },
        info: {
          us_address: '<p>%(AddressLine1)s<br />%(AddressLine2)s<br />%(City)s, %(StateAbbr)s %(PostalCode)s %(CountryCode)s<br />%(Phone1)s</p>',
          int_address: '<p>%(AddressLine1)s<br />%(AddressLine2)s<br />%(City)s, %(PostalCode)s %(CountryCode)s<br />%(Phone1)s</p>'
        },
        dir: '<a target="_new" href="http://maps.google.com/maps?daddr=%(AddressLine1)s %(AddressLine2)s,+%(City)s,+%(StateAbbr)s+%(PostalCode)s">Get Directions</a>'
      };
      
  if (navigator.geolocation) {
    $('.locate-me').show();
  }
  $('.locate-me').on('click', function(e) {
    var el = this,
        locator = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzQ0NkE5N0IwMUMxMTFFMkJCOEJBNDIyMkI0RDBBMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzQ0NkE5N0MwMUMxMTFFMkJCOEJBNDIyMkI0RDBBMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNDQ2QTk3OTAxQzExMUUyQkI4QkE0MjIyQjREMEEwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNDQ2QTk3QTAxQzExMUUyQkI4QkE0MjIyQjREMEEwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph9/KSIAAAE4SURBVHjaXNI/KIVRGMdxXpLyp/wJA4MYTGSQ3FJEyJ8ki5Hh3m4Go3uVojeDlNXfwUBSMlAmgyJGShnJpgyoGync7vep36nT+9Tnfc953/Oc87znvPlhGOYpijGKJGJ6VoA7bOMEGXsY6GUFNnGMFlzjBZdowJ7UuaQirGMaRxjDIA4wpL61J7GFkkIufZjBORKuBKJa93vEYWOnLDlQwgdWvQSLG6/9gxW8YtaSuvCkGf04jfQf8YB2W7Icv5jXDt6q1Bq8YUS7aVXU49+S3mUNX97MlvCnFd2q3WgKNHMzOiLljEf6rWiz8Za0qxIXdF4uYl67DMuoxYYlXemcBnCIfg2ybyhFr85pAvs4s2/KYkn1p9GJZ1RpExrV3kHKNs39Rt9YRI92rlLst7nAMObwaYNzAgwA9whD/Cq6ETwAAAAASUVORK5CYII=',
        loading = 'data:image/gif;base64,R0lGODlhEAAQAPYAAP///wAAANTU1JSUlGBgYEBAQERERG5ubqKiotzc3KSkpCQkJCgoKDAwMDY2Nj4+Pmpqarq6uhwcHHJycuzs7O7u7sLCwoqKilBQUF5eXr6+vtDQ0Do6OhYWFoyMjKqqqlxcXHx8fOLi4oaGhg4ODmhoaJycnGZmZra2tkZGRgoKCrCwsJaWlhgYGAYGBujo6PT09Hh4eISEhPb29oKCgqioqPr6+vz8/MDAwMrKyvj4+NbW1q6urvDw8NLS0uTk5N7e3s7OzsbGxry8vODg4NjY2PLy8tra2np6erS0tLKyskxMTFJSUlpaWmJiYkJCQjw8PMTExHZ2djIyMurq6ioqKo6OjlhYWCwsLB4eHqCgoE5OThISEoiIiGRkZDQ0NMjIyMzMzObm5ri4uH5+fpKSkp6enlZWVpCQkEpKSkhISCIiIqamphAQEAwMDKysrAQEBJqamiYmJhQUFDg4OHR0dC4uLggICHBwcCAgIFRUVGxsbICAgAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAHjYAAgoOEhYUbIykthoUIHCQqLoI2OjeFCgsdJSsvgjcwPTaDAgYSHoY2FBSWAAMLE4wAPT89ggQMEbEzQD+CBQ0UsQA7RYIGDhWxN0E+ggcPFrEUQjuCCAYXsT5DRIIJEBgfhjsrFkaDERkgJhswMwk4CDzdhBohJwcxNB4sPAmMIlCwkOGhRo5gwhIGAgAh+QQJCgAAACwAAAAAEAAQAAAHjIAAgoOEhYU7A1dYDFtdG4YAPBhVC1ktXCRfJoVKT1NIERRUSl4qXIRHBFCbhTKFCgYjkII3g0hLUbMAOjaCBEw9ukZGgidNxLMUFYIXTkGzOmLLAEkQCLNUQMEAPxdSGoYvAkS9gjkyNEkJOjovRWAb04NBJlYsWh9KQ2FUkFQ5SWqsEJIAhq6DAAIBACH5BAkKAAAALAAAAAAQABAAAAeJgACCg4SFhQkKE2kGXiwChgBDB0sGDw4NDGpshTheZ2hRFRVDUmsMCIMiZE48hmgtUBuCYxBmkAAQbV2CLBM+t0puaoIySDC3VC4tgh40M7eFNRdH0IRgZUO3NjqDFB9mv4U6Pc+DRzUfQVQ3NzAULxU2hUBDKENCQTtAL9yGRgkbcvggEq9atUAAIfkECQoAAAAsAAAAABAAEAAAB4+AAIKDhIWFPygeEE4hbEeGADkXBycZZ1tqTkqFQSNIbBtGPUJdD088g1QmMjiGZl9MO4I5ViiQAEgMA4JKLAm3EWtXgmxmOrcUElWCb2zHkFQdcoIWPGK3Sm1LgkcoPrdOKiOCRmA4IpBwDUGDL2A5IjCCN/QAcYUURQIJIlQ9MzZu6aAgRgwFGAFvKRwUCAAh+QQJCgAAACwAAAAAEAAQAAAHjIAAgoOEhYUUYW9lHiYRP4YACStxZRc0SBMyFoVEPAoWQDMzAgolEBqDRjg8O4ZKIBNAgkBjG5AAZVtsgj44VLdCanWCYUI3txUPS7xBx5AVDgazAjC3Q3ZeghUJv5B1cgOCNmI/1YUeWSkCgzNUFDODKydzCwqFNkYwOoIubnQIt244MzDC1q2DggIBACH5BAkKAAAALAAAAAAQABAAAAeJgACCg4SFhTBAOSgrEUEUhgBUQThjSh8IcQo+hRUbYEdUNjoiGlZWQYM2QD4vhkI0ZWKCPQmtkG9SEYJURDOQAD4HaLuyv0ZeB4IVj8ZNJ4IwRje/QkxkgjYz05BdamyDN9uFJg9OR4YEK1RUYzFTT0qGdnduXC1Zchg8kEEjaQsMzpTZ8avgoEAAIfkECQoAAAAsAAAAABAAEAAAB4iAAIKDhIWFNz0/Oz47IjCGADpURAkCQUI4USKFNhUvFTMANxU7KElAhDA9OoZHH0oVgjczrJBRZkGyNpCCRCw8vIUzHmXBhDM0HoIGLsCQAjEmgjIqXrxaBxGCGw5cF4Y8TnybglprLXhjFBUWVnpeOIUIT3lydg4PantDz2UZDwYOIEhgzFggACH5BAkKAAAALAAAAAAQABAAAAeLgACCg4SFhjc6RhUVRjaGgzYzRhRiREQ9hSaGOhRFOxSDQQ0uj1RBPjOCIypOjwAJFkSCSyQrrhRDOYILXFSuNkpjggwtvo86H7YAZ1korkRaEYJlC3WuESxBggJLWHGGFhcIxgBvUHQyUT1GQWwhFxuFKyBPakxNXgceYY9HCDEZTlxA8cOVwUGBAAA7AAAAAAAAAAAA',
        valid = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDBGQUMzMUEwMUMyMTFFMkI3MERBMDU3MzM1RTZFNzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDBGQUMzMUIwMUMyMTFFMkI3MERBMDU3MzM1RTZFNzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMEZBQzMxODAxQzIxMUUyQjcwREEwNTczMzVFNkU3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMEZBQzMxOTAxQzIxMUUyQjcwREEwNTczMzVFNkU3OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtXaIbIAAADZSURBVHjaYvz//z8DqYCFGEW7b7XKAakuIJ7sqlZ9lJGQTUANTEBqEhBnA/EuII5nIULDZCDOggq5AXEkE5ICUQIaQGApEM9mgiooBFJngbQ3lM8IpKagaVgGxAlAP31h3HWzJRXImQWV+ArEUUBsD8RFSBqWg/wC1PAbFnpPgPgzEPMCMTcQb0Tz2nKoDb9hAkxAznYgHQzEH7GEBUhDIlDNL2RBsJ+AgruBVCiaxmVQDT/RTUKJJ2AAuEJN3w110k+scQHShIyBAZMCxFro4siYkZy0BxBgAMmWb+z4zos1AAAAAElFTkSuQmCC';
    el.src = loading;
    navigator.geolocation.getCurrentPosition(function(res) {
      var latlng = new google.maps.LatLng(res.coords.latitude, res.coords.longitude);
      geocoder.geocode({
        'latLng' : latlng
      }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          //console.log(results);
          el.src = valid;
          $('#locator-address').val(results[0].formatted_address);
          location = results[0];
        } else {
          $('#locator-address').attr({invalid: true}).val("Geocode was not successful for the following reason: " + status);
        }
      });
    }, function(msg) {
      //console.log(msg);
      el.src = locator;
      $('#locator-address').attr({invalid: true}).val("Sorry, we could not locate you.");
    });
  })

  $('.locator-form').on('submit', function(e) {
    obj = {};
    e.preventDefault();
    if ($('#locator-address').val() == '') {
      alert('please enter address')
    } else {
        if(typeof location === 'object' && location.formatted_address === $('#locator-address').val()){
          sendXML(location);
        }else{
          geocoder.geocode({
            'address' : $('#locator-address').val()
          }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              //console.log('results', results)
              $(results[0].address_components).each(function() {
                results[0][this.types[0]] = this.short_name || this.long_name;
              });
              
              if(!results[0].postal_code){
                //console.log('no postal code, re-geocoding based on lat/lng', results[0])
                var latlng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                geocoder.geocode({
                  'latLng' : latlng
                }, function(res, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                    //console.log('results: ', res)
                    sendXML(res[0])
                  } else {
                    alert("Geocode was not successful for the following reason: " + status);
                  }
                });
              } else {
                sendXML(results[0])
              }
            } else {
              alert("Geocode was not successful for the following reason: " + status);
            }
        });
      }
    }
  });
  
  $('.locator-int-form').on('submit', function(e) {
    obj = {};
    e.preventDefault();
    geocoder.geocode({
      'address' : $('#locator-country').val(),
      'region' : $('#locator-country').val(),
      componentRestrictions : {
        country : $('#locator-country').val()
      }
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        results[0]['International'] = true;
        sendXML(results[0]);
        //console.log('results: ', results[0])
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }); 
  
  (function getCountries() {
    localforage.getItem('CountryListTimeStamp', function(data) {
      if (data) {
        var now = Math.round(new Date().getTime() / 1000);
        if ((now - (data)) >= 86400) {
          //console.log('time to make the doughnuts')
          getFreshCountries()
        } else {
          //console.log('doughnuts are still fresh')
          localforage.getItem('CountryList', function(data) {
            if (data) {
              $(data).each(function() {
                $('#locator-country').append($('<option />').val(this.CountryCode).text(this.CountryName));
              });
            } else {
              getFreshCountries();
            }
          });
        }
      } else {
        getFreshCountries();
      }
    });
  }()) // self executing

  
  function getFreshCountries(){
    var o = {
      BrandCode: 'HHD'
    }
    o['RequestParams'] = sprintf(tmpls.params.country_list, o);
    $.ajax({
      url : serviceUrl,
      processData : false,
      crossDomain : true,
      type : "POST",
      data : sprintf(tmpls.request, o),
      success : function(res) {
        if (window.ActiveXObject) {
          var oXML = new ActiveXObject("Microsoft.XMLDOM");
          var data = xml2Obj(oXML.loadXML(res));
        } else {
          var data = xml2Obj((new DOMParser()).parseFromString(res, "text/xml"));
        }
        data = data.Response.GetInternationalCountryListResponse.Country;
        localforage.setItem('CountryListTimeStamp', Math.round(new Date().getTime() / 1000));
        localforage.setItem('CountryList', data, function(){
          $(data).each(function(){
            $('#locator-country').append($('<option />').val(this.CountryCode).text(this.CountryName));
          });
        });
        //console.log(data);
      },
      error : function(err) {
        console.log('error: ', err.statusText);
      }
    });
  }
  
  function sendXML(obj) {
    var opts = {
      lines: 9,
      length: 24,
      width: 10, // The line thickness
      radius: 47, // The radius of the inner circle
      corners: 0.7, // Corner roundness (0..1)
      rotate: 40, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#83A4B4',
      speed: 0.7, // Rounds per second
      trail: 50, // Afterglow percentage
      shadow: false,
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '50%', // Top position relative to parent in px
      left: '50%' // Left position relative to parent in px
    };
    var target = document.querySelector('.tabs-content');
    var spinner = new Spinner(opts).spin(target);
    //console.log(obj);
    // this will make the address_components types available on the first level to test against
    $(obj.address_components).each(function() {
      obj[this.types[0]] = this.short_name || this.long_name;
    })
    
    $.extend(true, obj, {
      StateAbbr: obj.administrative_area_level_1 || '',
      City: obj.locality || '',
      PostalCode : obj.postal_code || '',
      WithInRadius : $('#locator-radius').val(),
      OnlineStoresOnly : false,
      HCPDealersOnly : $("#locator-hcp").is(':checked') ? true : false,
      IncludeBrandSalesInfo : true,
      BrandCode : $('#locator-brand').val() || '',
      International: obj.International || false,
      Country: obj.country || '',
      Tmpl: tmpls.info.us_address,
      zoom: radiusToZoom($('#locator-radius').val()) || 8,
      Lat: obj.geometry.location.lat(),
      Lng: obj.geometry.location.lng()
    });
    
    
    if(obj.International){
      obj.RequestParams = sprintf(tmpls.params.int_city, obj);
      obj.zoom = radiusToZoom(800);
      obj.Tmpl = tmpls.info.int_address
    }else if(obj.PostalCode !== ''){
      obj.RequestParams = sprintf(tmpls.params.ltln_radius, obj);
    } else {
      obj.RequestParams = sprintf(tmpls.params.us_city, obj);
    }
    

    $.ajax({
      url : serviceUrl,
      processData : false,
      crossDomain : true,
      type : "POST",
      data : sprintf(tmpls.request, obj),
      success : function(res) {
        var o = [];
        o['pt'] = [];
        o['obj'] = obj;
        if (window.ActiveXObject) {
          var oXML = new ActiveXObject("Microsoft.XMLDOM");
          var data = xml2Obj(oXML.loadXML(res));
        } else {
          var data = xml2Obj((new DOMParser()).parseFromString(res, "text/xml"));
          
        }
        data = data.Response.GetDealersResponse.Dealer;
        console.log('dealers: ', data);
        var i = 1, tls = [];
        $(data).each(function() {
          var brands = '';
          if(this.Lat === undefined || this.Lng === undefined || tls.indexOf(this.DealerGUID) > -1)
            return;
          var c = this.IsHCPDealer == 'true' ? 'ffd520' : 'FE7569'; // Marker color
          if(this.DealerBrandSale){
            brands += 'Brands we carry:<br /><div class="prop-logo">';
            $(this.DealerBrandSale).each(function(){
              brands += '<a title="'+this.BrandName+'" href="'+this.WebURL+'" target="_blank"><img src="http://s7d5.scene7.com/is/image/horizonhobby/'+this.BrandCode+'_Logo_Normalized?hei=24"> </a> ' //<span class="'+this.BrandCode+'"></span>
            });
            brands += '</div>';
          }
          o.pt.push({
            id: this.DealerNumber,
            lat : this.Lat,
            lng : this.Lng,
            title : this.DealerNameTitle,
            brands: brands,
            text : sprintf(obj.Tmpl, this),
            dir: !obj.International ? sprintf(tmpls.dir, this) : '',
            distance: this.Distance ? '<span style="float:right;">' +  parseFloat(this.Distance).toFixed(2) + 'mi.</span>' : '',
            email: (obj.International && this.Email) ? '<p><a href="mailto:' + this.Email + '">Email Us</a></p>' : '', // per Jamie - only international
            link : (false && this.WebURL) ? '<div class="g-link">Visit us <a href="' + this.WebURL + '" target="_blank">here</a></div>' : '', // per Jamie - never show the link
            icon : this.IsHCPDealer == 'true' ? 'data:image/png;base64,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' : 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + parseInt(i) + '|' + c,
            func: this.IsHCPDealer == 'true' ? 'prepend' : 'append'
          })
          
          tls.push(this.DealerGUID);
          i++;
        });
        spinner.stop();
        setMap(o);
      },
      error : function(err) {
        console.log('error: ', err.statusText);
      }
    });
  }

  function setMap(o) {
    var marker, infowindow = new google.maps.InfoWindow({
      maxWidth : 400
    });

    document.querySelector('.gmap').style.display = 'block';
    document.querySelector('.d-text').style.display = 'none';
    $('.glist').empty();
    $('html,body').animate({ scrollTop: $('#map-canvas').offset().top },
      {
        duration: 'slow',
        easing: 'swing',
        complete: function () {
        }
      }
    );
    var mapOptions = {
      zoom : o.obj.zoom,
      center : new google.maps.LatLng(o.obj.geometry.location.lat(), o.obj.geometry.location.lng()),
      mapTypeControl: false,
      navigationControlOptions: {
          style: google.maps.NavigationControlStyle.SMALL
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    window.map = map;
    $.each(o.pt, function() {
      //console.log('on map',this)
      var o = this;
      var marker = new google.maps.Marker({
        position : new google.maps.LatLng(o.lat, o.lng),
        animation : google.maps.Animation.DROP,
        map : map,
        title : o.title,
        icon : o.icon,
        html : '<img style="float: right;" src="'+o.icon+'"/><h6>' + o.title + '</h6>' + o.text + o.email + o.brands + o.distance + o.dir
      });
      google.maps.event.addListener(marker, 'click', function() {
        if (infowindow)
          infowindow.close();
        infowindow.setContent(this.html);
        infowindow.open(map, this);
        google.maps.event.addListener(infowindow,'closeclick', function(){$('.gdn_highlight').removeClass('gdn_highlight');})
        $('.gdn_highlight').removeClass('gdn_highlight');
        $('.gdn_' + o.id).addClass('gdn_highlight');
      });
      // build our glist
      $('.glist')[o.func]($('<div class="large-3 columns gdn_' + o.id + '"><img style="float: right;" src="'+o.icon+'"/><h6>' + o.title + '</h6>' + o.text + o.email + o.brands + o.distance + o.dir +'</div>').on('click', function(e){
        if (infowindow)
          infowindow.close();
        infowindow.setContent($(this).html());
        infowindow.open(map, marker);
        $('.gdn_highlight').removeClass('gdn_highlight');
        $(this).addClass('gdn_highlight');
      }))
    });

  }

  function radiusToZoom(radius) {
    return Math.round(14 - Math.log(radius) / Math.LN2);
  }

}(window.jQuery, window, document, undefined))

$(document).ready(function(){
  if(location.hash != ''){
    if(location.hash == '#international'){
      $('[href="#locator-panel-2"]').click();
    }else if(location.hash == '#hcp-only'){
      $('#locator-hcp').attr('checked', 'checked');
    }
  }
});
