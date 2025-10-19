$(function(){!function e(t,n,r){function o(s,i){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!i&&l)return l(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return o(n||e)},c,c.exports,e,t,n,r)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/selectors")),s=e("flatpack/helpers"),i=function(){function e(t,n){r(this,e),n=n||{},this.el=t,this.$target=$(t),this.$=a.default,this.render=s.render,this.parseTemplate=s.parseTemplate,this.settings=$.extend({},this.defaultSettings(),n),this.isFunction("setProps")&&this.setProps(),this.isFunction("setPublicMethods")&&this.setPublicMethods(this.el),this.create()}return o(e,[{key:"defaultSettings",value:function(){return{}}},{key:"getSettings",value:function(){return this.settings}},{key:"requestedFormat",value:function(e){return this.settings.format===e}},{key:"parseTemplate",value:function(e,t){for(var n in t)e=e.replace(new RegExp("{"+n+"}","g"),t[n]);return e}},{key:"devMode",value:function(){var e=window.location.hostname;return this.settings.debug||-1!=e.indexOf(".conscious.co.uk")&&-1==e.indexOf("www.")||e.indexOf(":3000")}},{key:"error",value:function(e,t){if(this.devMode()&&e.hasOwnProperty("responseJSON")){var n=e.responseJSON.error;console.log(n.code+" - "+n.error.message)}}},{key:"create",value:function(){this.fire("onBeforeRender"),this.init(),this.devMode()&&"function"==typeof console.group&&(console.groupCollapsed(this.constructor.name+" Called"),console.log("Target:","#"+this.$target.attr("id")||this.$target.attr("class")),console.log("Settings:",this.getSettings()),console.groupEnd()),this.fire("onAfterRender")}},{key:"fire",value:function(e,t){return this.isFunction(e,this.settings)?this.settings[e].call(this,t):null}},{key:"isFunction",value:function(e,t){return"function"==typeof(t=t||this)[e]}},{key:"init",value:function(){console.log("...")}}]),e}();n.default=i},{"flatpack/helpers":13,"flatpack/selectors":14}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e){e&&e.__esModule}(e("flatpack/selectors"));var r=e("flatpack/helpers"),o=function(e,t){if(t.built)return!1;var n=e.find(".mobile-ui-panel-content");(0,r.pageContent)(t.formUrl,function(e){n.html((0,r.render)('<form action="/cms/formmail/" method="post" class="form form-mobile" id="form-mobile">',e.find("form").html(),"</form>")),n.find("#form-mobile").validateForm(t.validateForm)})};n.default=o},{"flatpack/helpers":13,"flatpack/selectors":14}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=r(e("flatpack/selectors")),a=e("flatpack/helpers"),s=r(e("./menu-panel")),i=r(e("./enquiry-panel")),l=function(e){e=e||{};var t={menu:s.default,enquiry:i.default,formUrl:"/site/contact/make-an-enquiry/",validateForm:{}},n=$.extend({},t,e),r=(0,a.feature)("touch")?"touchend":"click",l=o.default.mobileUI;if((0,a.exists)(l)){var u=l.find(".ui-button"),c=l.find("#mobile-ui-panels-container"),f=l.find("#mobile-ui-panels");o.default.document.on(r,"#mobile-ui .ui-button",function(e){var t=$(this),r=t.parent().index();if(t.hasClass("active"))e.preventDefault(),o.default.body.removeClass("lock"),c.removeClass("in-view"),f.removeClass("scroll"),t.removeClass("active");else{if(t.attr("href"))return!0;e.preventDefault(),c.hasClass("in-view")?f.addClass("scroll").css({transform:"translateX(-"+100*r+"vw)"}):(o.default.body.addClass("lock"),f.css({transform:"translateX(-"+100*r+"vw)"}),c.addClass("in-view")),u.removeClass("active"),t.addClass("active")}var a=t.data("panel");if("function"==typeof n[a]){var s=f.find("#mobile-ui-panel-"+a),i=s.hasClass(a+"-built"),l=t.hasClass("active")?"open":"close";n.action=l,n.button=t,n.built=i,setTimeout(function(){n[a](s,n)},350),i||s.addClass(a+"-built")}});var d=l.find("#mobile-ui-nav");o.default.document.on(r,"#mobile-ui-nav .sub-menu-trigger",function(e){e.preventDefault();var t=$(this),n=d.parent().index(),r=t.data("to-level"),o=t.data("menu"),a=d.find(".menu-panel");f.addClass("scroll").css({transform:"translateX(-"+100*(n+r-1)+"vw)"}),a.removeClass("hidden"),d.find(".menu-panel.menu-level-"+r).not(".panel-"+o).addClass("hidden")}),o.default.document.on(r,"#mobile-ui .mobile-ui-panel-close",function(e){e.preventDefault(),o.default.body.removeClass("lock"),c.removeClass("in-view"),f.removeClass("scroll"),u.removeClass("active")}),o.default.document.on("scroll",function(e){var t=o.default.body.scrollTop();l.removeClass("active"),setTimeout(function(){t==o.default.body.scrollTop()&&l.addClass("active")},250)})}};n.default=l},{"./enquiry-panel":2,"./menu-panel":4,"flatpack/helpers":13,"flatpack/selectors":14}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e){e&&e.__esModule}(e("flatpack/selectors"));var r=e("flatpack/helpers"),o=function(e,t){if(t.built)return!1;var n=e.find("nav"),o=window.location.hostname+"_menuData",a=function(e){var o=(0,r.render)('<div class="menu-panel panel-site menu-level-1">','<ul class="menu">','<li class="item item-home">','<div class="item-inner">','<a class="link level-1" href="/">Home</a>',"</div>","</li>",u(e,1,{},"/site/"),"</ul>","</div>");n.html(o),"function"==typeof t.menuPanelComplete&&t.menuPanelComplete.call(this,n)},s=function(e){return $.extend(e,{order:e.o,level:e.l,title:e.t,children:e.c,parent:e.segments.pop(),href:e.u?e.u.replace("~","/site"):e.href})},i=function(e){return e.split("/").filter(function(e){return e})},l=(0,r.render)('<li class="item item-{slug}{classAttr}">','<div class="item-inner">',"{button}",'<a class="link{active} level-{level}" href="{href}">{title}</a>',"</div>","{childrenHtml}","</li>"),u=function e(t,n,o,a){var u="";o.slug&&(a+=o.slug+"/"),1!=n&&(u+='<div class="menu-panel panel-'+o.slug+" sub-menu-panel menu-level-"+n+'">',u+='<ul class="sub-menu">',u+=(0,r.render)('<li class="item sub-menu-title">','<div class="item-inner">','<button class="sub-menu-trigger up" data-menu="'+o.parent+'" data-to-level="'+o.level+'">','<span class="hidden">Back</span>',"</button>",'<a class="link level-'+n+'" href="'+o.href+'">'+o.title+"</a>","</div>","</li>"));for(var c in t){var f=t[c];f.segments=i(a),f.href=a+c+"/",f.slug=c,f=s(f);var d=$.extend({classAttr:f.children?" has-sub-menu":"",childrenHtml:f.children?e(f.children,f.level+1,f,a):"",button:f.children?(0,r.render)('<button class="sub-menu-trigger down" data-menu="'+f.slug+'" data-to-level="'+(f.level+1)+'">','<span class="hidden">Go</span>',"</button>"):"",active:(0,r.path)(f.slug)?" active":""},f);u+=(0,r.parseTemplate)(l,d)}return n>1?u+="</ul></div>":u};if((0,r.canStore)())if(sessionStorage.getItem(o)){var c=$.parseJSON(sessionStorage.getItem(o));a(c)}else(0,r.getMenuJson)("home",function(e){sessionStorage.setItem(o,JSON.stringify(e)),a(e)});else(0,r.getMenuJson)("home",function(e){a(e)})};n.default=o},{"flatpack/helpers":13,"flatpack/selectors":14}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=r(e("flatpack/core/base-module/1.0.0/js")),u=r(e("flatpack/core/selectors/1.0.0/js")),c=e("flatpack/core/helpers/1.1.1/js"),f=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"setProps",value:function(){var e=this;this.$window=u.default.window,this.windowHeight=this.$window.innerHeight(),this.offset=parseInt(this.settings.offset),this.exists=this.$target.length,this.getOffset=function(){return e.exists?e.$target.offset().top+e.offset:e.offset},this.getScrollTop=function(){return e.windowHeight+e.$window.scrollTop()}}},{key:"defaultSettings",value:function(){return{offset:0,trigger:function(){}}}},{key:"init",value:function(){this.checkScrollOnLoad()}},{key:"checkScrollOnLoad",value:function(){var e=this.getScrollTop(),t=this.getOffset();e>t&&!this.settings.default?this.settings.trigger(this.$target):(e>t?this.settings.trigger(this.$target):this.settings.default&&this.settings.default(this.$target),this.registerScrollEvent())}},{key:"registerScrollEvent",value:function(){var e=this,t=function t(){e.getScrollTop()>e.getOffset()?(e.settings.default||e.$window.off("scroll",t),e.settings.trigger(e.$target)):e.settings.default&&e.settings.default(e.$target)};this.$window.on("scroll",t)}}]),t}(l.default);(0,c.registerModule)("smartScroll",function(e,t){return new f(e,t)})},{"flatpack/core/base-module/1.0.0/js":8,"flatpack/core/helpers/1.1.1/js":10,"flatpack/core/selectors/1.0.0/js":12}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=r(e("flatpack/core/base-module/1.0.0/js")),c=r(e("flatpack/core/bank/1.0.0/js")),f=e("flatpack/core/helpers/1.3.0/js"),d=function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"setProps",value:function(){this.Bank=new c.default,this.key="_staff-search-data",this.match="all"===this.settings.match?Object.keys(this.settings.filters).length:"any"===this.settings.match?1:0,this.data=[],this.staff=[],this.sortByAttributes=this.settings.sortByAttributes.slice(0).reverse(),this.sortGroupByAttributes=this.settings.sortGroupByAttributes.slice(0).reverse(),this.filterRules={equals:function(e,t){return e.toLowerCase()===t.toLowerCase()},contains:function(e,t){return-1!==e.toLowerCase().indexOf(t.toLowerCase())}},this.setDefaultAttributes=function(e){return{name:e.firstname+" "+e.lastname,profile:"/site/people/profile/"+e.username}}}},{key:"defaultSettings",value:function(){return{html:!1,match:"none",filters:{},filterRules:{},setAttributes:function(e){return{}},sortByAttributes:["order","firstname"],groupByAttribute:null,sortGroupByAttributes:[],done:function(e,t){e.html('<ul class="staff-cards">'+t+"</ul>")},mounted:function(e){return e},error:function(e,t){console.log("run error"),console.log(t)}}}},{key:"init",value:function(){this.getAllData()}},{key:"getAllData",value:function(){var e=this;this.Bank.get(this.key,function(t,n){t?e.getStaffData():(e.data=e.staff=n,e.extendData())})}},{key:"getStaffData",value:function(){var e=this;$.ajax({url:"/cms/staffsearch/?xml=staffsearch",success:function(t){e.data=e.staff=e.processResponse(t),e.bankData(),e.extendData()},error:function(t){e.settings.error(e.$target,t)}})}},{key:"processResponse",value:function(e){var t=function(e){return $(e).children().get().reduce(function(e,t){var n=t.tagName,r=[].slice.call(t.attributes);if(r.length){var o=r.reduce(function(e,t){return e[t.nodeName]=t.nodeValue.trim(),e},{});n in e?e[n].push(o):e[n]=[o]}else e[n]=t.textContent.trim();return e},{})};return $(e).find("staff").get().map(function(e){return t(e)})}},{key:"bankData",value:function(){this.Bank.set(this.key,this.data)}},{key:"extendData",value:function(){var e=this;this.staff=this.staff.map(function(t){return $.extend({},t,e.setDefaultAttributes(t),e.fire("setAttributes",t))}),this.filterData()}},{key:"filterData",value:function(){var e=this,t=this.settings.filters;Object.keys(t).length&&(this.staff=this.staff.filter(function(n){var r=0;for(var o in t)!function(o){var a=(o+"/").split("/").filter(function(e){return e}),s=a[0],i=a[1]?a[1]:"label",l=e.settings.filterRules.hasOwnProperty(o)?e.filterRules[e.settings.filterRules[o]]:e.filterRules.contains;(f.is.array(n[s])?n[s].map(function(e){return e[i]}):[n[s]]).forEach(function(e){e&&l(e,t[o])&&r++})}(o);return r>=e.match})),this.sortData()}},{key:"sortData",value:function(){var e=this;this.sortByAttributes.forEach(function(t){var n="order"===t;e.staff=e.staff.sort(function(e,r){var o=n?parseInt(e[t]):e[t],a=n?parseInt(r[t]):r[t];return o>a?1:o<a?-1:0})}),this.groupData()}},{key:"groupData",value:function(){if(this.settings.groupByAttribute){var e=(this.settings.groupByAttribute+"/").split("/").filter(function(e){return e}),t=this.staff.reduce(function(t,n){var r=n[e[0]];if(f.is.array(r))r.forEach(function(r){e.length>1&&(t.hasOwnProperty(r[e[1]])||(t[r[e[1]]]=$.extend({},r,{staff:[]})),t[r[e[1]]].staff.push(n))});else{if(!t.hasOwnProperty(n[e[0]])){var a;t[n[e[0]]]=(a={},o(a,e[0],n[e[0]]),o(a,"staff",[]),a)}t[n[e[0]]].staff.push(n)}return t},{});t.hasOwnProperty("undefined")&&(t.undefined.label="Other",t.undefined.name="other",t.undefined.order=1e3,t.undefined.url=""),this.staff=Object.keys(t).map(function(e){return t[e]}),this.sortGroupData()}this.done()}},{key:"sortGroupData",value:function(){var e=this;this.sortGroupByAttributes.forEach(function(t){var n="order"===t;e.staff=e.staff.sort(function(e,r){var o=n?parseInt(e[t]):e[t],a=n?parseInt(r[t]):r[t];return o>a?1:o<a?-1:0})})}},{key:"done",value:function(){this.staff=this.settings.html?this.formatData():this.staff,this.settings.done(this.$target,this.staff),this.settings.mounted(this.$target)}},{key:"formatData",value:function(){var e=this;return this.settings.groupByAttribute?this.staff.map(function(t){return t.staff=e.formatStaffGroup(t.staff),e.settings.generateGroupHtml(t)}).join(""):this.formatStaffGroup(this.staff)}},{key:"formatStaffGroup",value:function(e){var t=this;return e.map(function(e){return t.settings.generateHtml(e)}).join("")}}]),t}(u.default);(0,f.registerModule)("runStaffSearch",function(e,t){return new d(e,t)})},{"flatpack/core/bank/1.0.0/js":7,"flatpack/core/base-module/1.0.0/js":8,"flatpack/core/helpers/1.3.0/js":11}],7:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("flatpack/core/helpers/1.0.0/js"),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.canStore=t.hasOwnProperty("canStore")?function(){return t.canStore}:a.canStore,this.storage=window[(t.hasOwnProperty("storage")?t.storage:"session")+"Storage"],this.simpleCache={}}return o(e,[{key:"get",value:function(e,t){var n=void 0;if(this.canStore()){var r=this.storage.getItem(e);r&&(n=a.is.json(r)?JSON.parse(r):r)}else n=this.simpleCache.hasOwnProperty(e)?this.simpleCache[e]:void 0;return t?t(n?null:"["+e+"] not found in bank",n):n}},{key:"set",value:function(e,t,n){if(this.canStore()?this.storage.setItem(e,JSON.stringify(t)):this.simpleCache[e]=JSON.stringify(t),n)return n(null,"["+e+"] set in bank")}},{key:"remove",value:function(e,t){if(this.canStore()&&this.storage.getItem(e)?this.storage.removeItem(e):this.simpleCache.hasOwnProperty(e)&&delete this.simpleCache[e],t)return t(null,"["+e+"] deleted from bank")}},{key:"empty",value:function(e){if(this.canStore()?this.storage.clear():this.simpleCache={},e)return e(null,"The bank has been emptied")}}]),e}();n.default=s},{"flatpack/core/helpers/1.0.0/js":9}],8:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/core/selectors/1.0.0/js")),s=e("flatpack/core/helpers/1.0.0/js"),i=function(){function e(t,n){r(this,e),n=n||{},this.el=t,this.$target=$(t),this.$=a.default,this.render=s.render,this.parseTemplate=s.parseTemplate,this.settings=$.extend({},this.defaultSettings(),n),this.isFunction("setProps")&&this.setProps(),this.isFunction("setPublicMethods")&&this.setPublicMethods(this.el),this.create()}return o(e,[{key:"defaultSettings",value:function(){return{}}},{key:"getSettings",value:function(){return this.settings}},{key:"requestedFormat",value:function(e){return this.settings.format===e}},{key:"parseTemplate",value:function(e,t){for(var n in t)e=e.replace(new RegExp("{"+n+"}","g"),t[n]);return e}},{key:"devMode",value:function(){var e=window.location.hostname;return this.settings.debug||-1!=e.indexOf(".conscious.co.uk")&&-1==e.indexOf("www.")||e.indexOf(":3000")}},{key:"error",value:function(e,t){if(this.devMode()&&e.hasOwnProperty("responseJSON")){var n=e.responseJSON.error;console.log(n.code+" - "+n.error.message)}}},{key:"create",value:function(){this.fire("onBeforeRender"),this.init(),this.devMode()&&"function"==typeof console.group&&(console.groupCollapsed(this.constructor.name+" Called"),console.log("Target:","#"+this.$target.attr("id")||this.$target.attr("class")),console.log("Settings:",this.getSettings()),console.groupEnd()),this.fire("onAfterRender")}},{key:"fire",value:function(e,t){return this.isFunction(e,this.settings)?this.settings[e].call(this,t):null}},{key:"isFunction",value:function(e,t){return"function"==typeof(t=t||this)[e]}},{key:"init",value:function(){console.log("...")}}]),e}();n.default=i},{"flatpack/core/helpers/1.0.0/js":9,"flatpack/core/selectors/1.0.0/js":12}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.loading=n.canStore=n.stopwatch=n.getMenuJson=n.parseTemplate=n.shuffle=n.registerModule=n.pageContent=n.menuCache=n.pageCache=n.createPopup=n.createIcon=n.template=n.render=n.query=n.random=n.scrollTo=n.canRotate=n.exists=n.page=n.type=n.path=n.section=n.index=n.feature=n.logger=n.is=n.collect=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/core/selectors/1.0.0/js")),a={},s={},i={},l={array:function(e){return Array.isArray(e)},object:function(e){var t=void 0===e?"undefined":r(e);return"function"===t||"object"===t&&!!e},function:function(e){return"[object Function]"===Object.prototype.toString.call(e)},number:function(e){return"[object Number]"===Object.prototype.toString.call(e)},string:function(e){return"[object String]"===Object.prototype.toString.call(e)},undefined:function(e){return void 0===e},element:function(e){return!(!e||1!==e.nodeType)},null:function(e){return null===e},date:function(e){return"[object Date]"===Object.prototype.toString.call(e)},boolean:function(e){return!0===e||!1===e||"[object Boolean]"===Object.prototype.toString.call(e)},regex:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},error:function(e){return"[object Error]"===Object.prototype.toString.call(e)},argument:function(e){return"[object Arguments]"===Object.prototype.toString.call(e)},json:function(e){var t=e;return(!t||!/^\s*$/.test(t))&&(t=t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@"),t=t.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]"),t=t.replace(/(?:^|:|,)(?:\s*\[)+/g,""),/^[\],:{}\s]*$/.test(t))}},u=function(e){var t={key:"key",async:!1,transform:function(e){return e},error:function(e){return console.error(e.status+" - "+e.statusText)}},n=$.extend({},t,e),r="_"+n.key+"_"+n.url,o=D()&&sessionStorage.getItem(r)?JSON.parse(sessionStorage.getItem(r)):!!a[r]&&a[r];if(o&&l.function(n.success))return n.success(o);var s=n.success;n.success=function(e){var t=l.function(n.transform)?n.transform(e):e;if(D()?sessionStorage.setItem(r,JSON.stringify(t)):a[r]=JSON.stringify(t),l.function(s))return s(t)};$.ajax(n)},c=function(){return console.log(arguments)},f=function(e){return o.default.html.hasClass("mdzr"+e)},d=function(e,t){return-1!=e.indexOf(t)},p=function(e){return d(window.location.pathname,e)},h=function(e,t){var n=t?t+"-type-"+e:"type-"+e;return o.default.body.hasClass(n)},m=function(e){return o.default.body.hasClass("section-"+e)},g=function(e){return e?o.default.body.attr("id")==e:o.default.body.attr("id")},v=function(e,t){return $(e).length>0},y=function(e){return $(e).children("*").length>1},b=function(e){var t={target:l.undefined(e.target)?e:e.target,speed:l.undefined(e.speed)?500:e.speed,offset:l.undefined(e.offset)?0:e.offset};o.default.page.animate({scrollTop:$(t.target).offset().top+t.offset},t.speed)},w=function(e){return e[Math.floor(Math.random()*e.length)]},k=function(e){var t=window.location.search;if(!d(t,e))return!1;var n=t.split(e).slice(1).join(e).split("=")[1];return n&&d(n,"&")&&(n=n.split("&")[0]),n||!1},S=function(){return Array.prototype.slice.call(arguments).join("")},j=function(e){return e.replace(/\n|\t|\r/g,"")},O=function(e){return S('<svg class="icon icon-'+e+'">','<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/icon-library.svg#icon-'+e+'">',"</use>","</svg>")},x=function(e,t,n){var r=S('<div class="modal theme-'+(n=n||"modal")+'" id="modal">','<div class="modal-inner">','<div class="modal-close has-icon" id="modal-close">','<span class="icon-link">','<span class="hidden">Close</span>',"</span>",O("close"),"</div>",'<div class="modal-content" id="modal-content">',e,"</div>","</div>","</div>");v(o.default.overlay)||console.error("Cookies should be enabled for #overlay to be in the DOM on load"),o.default.body.append(r),o.default.overlay.fadeIn(500,function(){o.default.body.children("#modal").fadeIn().addClass("in-view")});var a=o.default.body.children("#modal");a.bind("closeModal",function(){o.default.overlay.fadeOut(500),a.removeClass("in-view"),a.fadeOut(500).remove()}),"function"==typeof t&&t(a),o.default.document.on("click","#overlay, #modal-close",function(){a.trigger("closeModal")})},_=function(e,t){var n=(r="/"==e.substring(e.length-1)?e.substring(0,e.length-1):e).split("/"),r=(r=n[n.length-1]).indexOf(".html")>0?r:r+"_index.html";return s[r]?s[r]:($.ajax({url:"/cms/help/"+r,cache:!1,async:!1,success:function(e){s[r]=$("<div>"+e+"</div>"),"function"==typeof t&&t(s[r])}}),s[r])},M=function(e,t){$.fn[e]=function(e){return this.length>1?this.each(function(){new t(this,e)}):new t(this,e),this}},C=function(e,t){for(var n in t)e=e.replace(new RegExp("{"+n+"}","g"),t[n]);return e},T=function(e,t){$.getJSON("/cms/menu/?node="+e+"&mode=json",function(n){return i[e]||(i[e]=n.menu),t(i[e])})},P=function(e){for(var t=e.length;t>0;){var n=Math.floor(Math.random()*t),r=e[--t];e[t]=e[n],e[n]=r}return e},A={timers:{},start:function(e){this.timers[e]=(new Date).getTime()/1e3},stop:function(e){var t=(new Date).getTime()/1e3;console.group("Timer: '"+e+"'"),console.log((t-this.timers[e]).toFixed(4)+"s"),console.groupEnd()}},D=function(e){e=(e||"session")+"Storage";try{return window[e].setItem("storageTest","1"),window[e].removeItem("storageTest"),!0}catch(e){}return!1},I=function(e){return S('<div class="loading">','<span class="dot"></span>','<span class="dot"></span>','<span class="dot"></span>',void 0!=e?"<p>"+e+"</p>":"","</div>")};n.collect=u,n.is=l,n.logger=c,n.feature=f,n.index=d,n.section=m,n.path=p,n.type=h,n.page=g,n.exists=v,n.canRotate=y,n.scrollTo=b,n.random=w,n.query=k,n.render=S,n.template=j,n.createIcon=O,n.createPopup=x,n.pageCache=s,n.menuCache=i,n.pageContent=_,n.registerModule=M,n.shuffle=P,n.parseTemplate=C,n.getMenuJson=T,n.stopwatch=A,n.canStore=D,n.loading=I},{"flatpack/core/selectors/1.0.0/js":12}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.loading=n.canStore=n.stopwatch=n.getMenuJson=n.parseTemplate=n.shuffle=n.registerModule=n.pageContent=n.menuCache=n.pageCache=n.createPopup=n.createIcon=n.template=n.render=n.query=n.random=n.scrollTo=n.canRotate=n.exists=n.page=n.type=n.path=n.section=n.index=n.feature=n.logger=n.env=n.collect=n.is=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/selectors")),a={},s={},i={},l={array:function(e){return Array.isArray(e)},object:function(e){var t=void 0===e?"undefined":r(e);return"function"===t||"object"===t&&!!e},function:function(e){return"[object Function]"===Object.prototype.toString.call(e)},number:function(e){return"[object Number]"===Object.prototype.toString.call(e)},string:function(e){return"[object String]"===Object.prototype.toString.call(e)},undefined:function(e){return void 0===e},element:function(e){return!(!e||1!==e.nodeType)},null:function(e){return null===e},date:function(e){return"[object Date]"===Object.prototype.toString.call(e)},boolean:function(e){return!0===e||!1===e||"[object Boolean]"===Object.prototype.toString.call(e)},regex:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},error:function(e){return"[object Error]"===Object.prototype.toString.call(e)},argument:function(e){return"[object Arguments]"===Object.prototype.toString.call(e)},json:function(e){var t=e;return(!t||!/^\s*$/.test(t))&&(t=t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@"),t=t.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]"),t=t.replace(/(?:^|:|,)(?:\s*\[)+/g,""),/^[\],:{}\s]*$/.test(t))}},u=function(e){return window.CONSCIOUS_ENV[e]},c=function(e){var t={key:"key",async:!1,transform:function(e){return e},error:function(e){return console.error(e.status+" - "+e.statusText)}},n=$.extend({},t,e),r="_"+n.key+"_"+n.url,o=I()&&sessionStorage.getItem(r)?JSON.parse(sessionStorage.getItem(r)):!!a[r]&&a[r];if(o&&l.function(n.success))return n.success(o);var s=n.success;n.success=function(e){var t=l.function(n.transform)?n.transform(e):e;if(I()?sessionStorage.setItem(r,JSON.stringify(t)):a[r]=JSON.stringify(t),l.function(s))return s(t)};$.ajax(n)},f=function(){return console.log(arguments)},d=function(e){return o.default.html.hasClass("mdzr"+e)},p=function(e,t){return-1!=e.indexOf(t)},h=function(e){return p(window.location.pathname,e)},m=function(e,t){var n=t?t+"-type-"+e:"type-"+e;return o.default.body.hasClass(n)},g=function(e){return o.default.body.hasClass("section-"+e)},v=function(e){return e?o.default.body.attr("id")==e:o.default.body.attr("id")},y=function(e,t){return $(e).length>0},b=function(e){return $(e).children("*").length>1},w=function(e){var t={target:l.undefined(e.target)?e:e.target,speed:l.undefined(e.speed)?500:e.speed,offset:l.undefined(e.offset)?0:e.offset};o.default.page.animate({scrollTop:$(t.target).offset().top+t.offset},t.speed)},k=function(e){return e[Math.floor(Math.random()*e.length)]},S=function(e){var t=window.location.search;if(!p(t,e))return!1;var n=t.split(e).slice(1).join(e).split("=")[1];return n&&p(n,"&")&&(n=n.split("&")[0]),n||!1},j=function(){return Array.prototype.slice.call(arguments).join("")},O=function(e){return e.replace(/\n|\t|\r/g,"")},x=function(e){return j('<svg class="icon icon-'+e+'">','<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/icon-library.svg#icon-'+e+'">',"</use>","</svg>")},_=function(e,t,n){var r=j('<div class="modal theme-'+(n=n||"modal")+'" id="modal">','<div class="modal-inner">','<div class="modal-close has-icon" id="modal-close">','<span class="icon-link">','<span class="hidden">Close</span>',"</span>",x("close"),"</div>",'<div class="modal-content" id="modal-content">',e,"</div>","</div>","</div>");y(o.default.overlay)||console.error("Cookies should be enabled for #overlay to be in the DOM on load"),o.default.body.append(r),o.default.overlay.fadeIn(500,function(){o.default.body.children("#modal").fadeIn().addClass("in-view")});var a=o.default.body.children("#modal");a.bind("closeModal",function(){o.default.overlay.fadeOut(500),a.removeClass("in-view"),a.fadeOut(500).remove()}),"function"==typeof t&&t(a),o.default.document.on("click","#overlay, #modal-close",function(){a.trigger("closeModal")})},M=function(e,t){var n=(r="/"==e.substring(e.length-1)?e.substring(0,e.length-1):e).split("/"),r=(r=n[n.length-1]).indexOf(".html")>0?r:r+"_index.html";return s[r]?s[r]:($.ajax({url:"/cms/help/"+r,cache:!1,async:!1,success:function(e){s[r]=$("<div>"+e+"</div>"),"function"==typeof t&&t(s[r])}}),s[r])},C=function(e,t){$.fn[e]=function(e){return this.length>1?this.each(function(){new t(this,e)}):new t(this,e),this}},T=function(e,t){for(var n in t)e=e.replace(new RegExp("{"+n+"}","g"),t[n]);return e},P=function(e,t){$.getJSON("/cms/menu/?node="+e+"&mode=json",function(n){return i[e]||(i[e]=n.menu),t(i[e])})},A=function(e){for(var t=e.length;t>0;){var n=Math.floor(Math.random()*t),r=e[--t];e[t]=e[n],e[n]=r}return e},D={timers:{},start:function(e){this.timers[e]=(new Date).getTime()/1e3},stop:function(e){var t=(new Date).getTime()/1e3;console.group("Timer: '"+e+"'"),console.log((t-this.timers[e]).toFixed(4)+"s"),console.groupEnd()}},I=function(e){e=(e||"session")+"Storage";try{return window[e].setItem("storageTest","1"),window[e].removeItem("storageTest"),!0}catch(e){}return!1},E=function(e){return j('<div class="loading">','<span class="dot"></span>','<span class="dot"></span>','<span class="dot"></span>',void 0!=e?"<p>"+e+"</p>":"","</div>")};n.is=l,n.collect=c,n.env=u,n.logger=f,n.feature=d,n.index=p,n.section=g,n.path=h,n.type=m,n.page=v,n.exists=y,n.canRotate=b,n.scrollTo=w,n.random=k,n.query=S,n.render=j,n.template=O,n.createIcon=x,n.createPopup=_,n.pageCache=s,n.menuCache=i,n.pageContent=M,n.registerModule=C,n.shuffle=A,n.parseTemplate=T,n.getMenuJson=P,n.stopwatch=D,n.canStore=I,n.loading=E},{"flatpack/selectors":14}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.loading=n.canStore=n.stopwatch=n.getMenuJson=n.parseTemplate=n.shuffle=n.registerModule=n.pageContent=n.menuCache=n.pageCache=n.createPopup=n.createIcon=n.template=n.render=n.query=n.random=n.scrollTo=n.canRotate=n.exists=n.page=n.type=n.path=n.section=n.index=n.feature=n.logger=n.env=n.collect=n.is=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/selectors")),a={},s={},i={},l={array:function(e){return Array.isArray(e)},object:function(e){var t=void 0===e?"undefined":r(e);return"function"===t||"object"===t&&!!e},function:function(e){return"[object Function]"===Object.prototype.toString.call(e)},number:function(e){return"[object Number]"===Object.prototype.toString.call(e)},string:function(e){return"[object String]"===Object.prototype.toString.call(e)},undefined:function(e){return void 0===e},element:function(e){return!(!e||1!==e.nodeType)},null:function(e){return null===e},date:function(e){return"[object Date]"===Object.prototype.toString.call(e)},boolean:function(e){return!0===e||!1===e||"[object Boolean]"===Object.prototype.toString.call(e)},regex:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},error:function(e){return"[object Error]"===Object.prototype.toString.call(e)},argument:function(e){return"[object Arguments]"===Object.prototype.toString.call(e)},json:function(e){var t=e;return(!t||!/^\s*$/.test(t))&&(t=t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@"),t=t.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]"),t=t.replace(/(?:^|:|,)(?:\s*\[)+/g,""),/^[\],:{}\s]*$/.test(t))}},u=$.extend({},{dev:-1===window.location.host.indexOf("www.")&&-1!==window.location.host.indexOf(".conscious.co.uk"),get production(){return!this.dev},admin:null!==document.getElementById("admin_menu"),static:window.location.pathname.split(/\//g).filter(function(e){return e}).pop()!==document.body.getAttribute("id"),site:document.querySelector('meta[property="og:site_name"]')?document.querySelector('meta[property="og:site_name"]').getAttribute("content"):null,meta:document.title},window.CONSCIOUS_ENV),c=function(e){return u[e]},f=function(e){var t={key:"key",async:!1,transform:function(e){return e},error:function(e){return console.error(e.status+" - "+e.statusText)}},n=$.extend({},t,e),r="_"+n.key+"_"+n.url,o=E()&&sessionStorage.getItem(r)?JSON.parse(sessionStorage.getItem(r)):!!a[r]&&a[r];if(o&&l.function(n.success))return n.success(o);var s=n.success;n.success=function(e){var t=l.function(n.transform)?n.transform(e):e;if(E()?sessionStorage.setItem(r,JSON.stringify(t)):a[r]=JSON.stringify(t),l.function(s))return s(t)};$.ajax(n)},d=function(){return console.log(arguments)},p=function(e){return o.default.html.hasClass("mdzr"+e)},h=function(e,t){return-1!=e.indexOf(t)},m=function(e){return h(window.location.pathname,e)},g=function(e,t){var n=t?t+"-type-"+e:"type-"+e;return o.default.body.hasClass(n)},v=function(e){return o.default.body.hasClass("section-"+e)},y=function(e){return e?o.default.body.attr("id")==e:o.default.body.attr("id")},b=function(e,t){return $(e).length>0},w=function(e){return $(e).children("*").length>1},k=function(e){var t={target:l.undefined(e.target)?e:e.target,speed:l.undefined(e.speed)?500:e.speed,offset:l.undefined(e.offset)?0:e.offset};o.default.page.animate({scrollTop:$(t.target).offset().top+t.offset},t.speed)},S=function(e){return e[Math.floor(Math.random()*e.length)]},j=function(e){var t=window.location.search;if(!h(t,e))return!1;var n=t.split(e).slice(1).join(e).split("=")[1];return n&&h(n,"&")&&(n=n.split("&")[0]),n||!1},O=function(){return Array.prototype.slice.call(arguments).join("")},x=function(e){return e.replace(/\n|\t|\r/g,"")},_=function(e){return O('<svg class="icon icon-'+e+'">','<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/icon-library.svg#icon-'+e+'">',"</use>","</svg>")},M=function(e,t,n){var r=O('<div class="modal theme-'+(n=n||"modal")+'" id="modal">','<div class="modal-inner">','<div class="modal-close has-icon" id="modal-close">','<span class="icon-link">','<span class="hidden">Close</span>',"</span>",_("close"),"</div>",'<div class="modal-content" id="modal-content">',e,"</div>","</div>","</div>");b(o.default.overlay)||console.error("Cookies should be enabled for #overlay to be in the DOM on load"),o.default.body.append(r),o.default.overlay.fadeIn(500,function(){o.default.body.children("#modal").fadeIn().addClass("in-view")});var a=o.default.body.children("#modal");a.on("closeModal",function(){o.default.overlay.fadeOut(500),a.removeClass("in-view"),a.fadeOut(500).remove()}),"function"==typeof t&&t(a),o.default.document.on("click","#overlay, #modal-close",function(){a.trigger("closeModal")})},C=function(e,t){var n="/"==e.substring(e.length-1),r=(o=n?e.substring(0,e.length-1):e).split("/"),o=r[r.length-1];return s[o=n?o+"_index.html":o]?s[o]:($.ajax({url:"/cms/help/"+o,cache:!1,async:!1,success:function(e){s[o]=$("<div>"+e+"</div>"),"function"==typeof t&&t(s[o])}}),s[o])},T=function(e,t){$.fn[e]=function(e){return this.length>1?this.each(function(){new t(this,e)}):new t(this,e),this}},P=function(e,t){for(var n in t)e=e.replace(new RegExp("{"+n+"}","g"),t[n]);return e},A=function(e,t){$.getJSON("/cms/menu/?node="+e+"&mode=json",function(n){return i[e]||(i[e]=n.menu),t(i[e])})},D=function(e){for(var t=e.length;t>0;){var n=Math.floor(Math.random()*t),r=e[--t];e[t]=e[n],e[n]=r}return e},I={timers:{},start:function(e){this.timers[e]=(new Date).getTime()/1e3},stop:function(e){var t=(new Date).getTime()/1e3;console.group("Timer: '"+e+"'"),console.log((t-this.timers[e]).toFixed(4)+"s"),console.groupEnd()}},E=function(e){e=(e||"session")+"Storage";try{return window[e].setItem("storageTest","1"),window[e].removeItem("storageTest"),!0}catch(e){}return!1},R=function(e){return O('<div class="loading">','<span class="dot"></span>','<span class="dot"></span>','<span class="dot"></span>',void 0!=e?"<p>"+e+"</p>":"","</div>")};n.is=l,n.collect=f,n.env=c,n.logger=d,n.feature=p,n.index=h,n.section=v,n.path=m,n.type=g,n.page=y,n.exists=b,n.canRotate=w,n.scrollTo=k,n.random=S,n.query=j,n.render=O,n.template=x,n.createIcon=_,n.createPopup=M,n.pageCache=s,n.menuCache=i,n.pageContent=C,n.registerModule=T,n.shuffle=D,n.parseTemplate=P,n.getMenuJson=A,n.stopwatch=I,n.canStore=E,n.loading=R},{"flatpack/selectors":14}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={window:$(window),document:$(document),page:$("html,body"),html:$("html"),body:$("body"),mobileUI:$("#mobile-ui"),mobileUIContainer:$("#mobile-ui-panels-container"),wrapper:$("#wrapper"),header:$("#header"),nav:$("#nav"),subNav:$("#sub-nav"),hero:$("#hero"),heroInner:$("#hero-inner"),main:$("#main"),containerCentre:$("#container-centre"),containerRight:$("#container-right"),containerLeft:$("#container-left"),footerWrapper:$("#footer-wrapper"),preFooter:$("#pre-footer"),footer:$("#footerContainer"),cookies:$("#cookies"),overlay:$("#overlay")};n.default=r},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.loading=n.canStore=n.stopwatch=n.getMenuJson=n.parseTemplate=n.shuffle=n.registerModule=n.pageContent=n.menuCache=n.pageCache=n.createPopup=n.createIcon=n.render=n.query=n.random=n.scrollTo=n.canRotate=n.exists=n.page=n.type=n.path=n.section=n.index=n.feature=n.logger=n.is=n.collect2=n.collect=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/selectors")),a={},s={},i={},l={array:function(e){return Array.isArray(e)},object:function(e){var t=void 0===e?"undefined":r(e);return"function"===t||"object"===t&&!!e},function:function(e){return"[object Function]"===Object.prototype.toString.call(e)},number:function(e){return"[object Number]"===Object.prototype.toString.call(e)},string:function(e){return"[object String]"===Object.prototype.toString.call(e)},undefined:function(e){return void 0===e},element:function(e){return!(!e||1!==e.nodeType)},null:function(e){return null===e},date:function(e){return"[object Date]"===Object.prototype.toString.call(e)},boolean:function(e){return!0===e||!1===e||"[object Boolean]"===Object.prototype.toString.call(e)},regex:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},error:function(e){return"[object Error]"===Object.prototype.toString.call(e)},argument:function(e){return"[object Arguments]"===Object.prototype.toString.call(e)}},u=function(e,t){var n=void 0,r=void 0;l.object(e)?(n=e.url,r=e.transform):(n=e,r=t);var o=a[n];if(o)return o;var s=$.ajax({url:n,async:!1});return l.function(r)?o=r(s):s},c=function(e){var t={key:"key",async:!1,transform:function(e){return e},error:function(e){return console.error(e.status+" - "+e.statusText)}},n=$.extend({},t,e),r="_"+n.key+"_"+n.url,o=D()&&sessionStorage.getItem(r)?JSON.parse(sessionStorage.getItem(r)):!!a[r]&&a[r];if(o&&l.function(n.success))return n.success(o);var s=n.success;n.success=function(e){var t=l.function(n.transform)?n.transform(e):e;if(D()?sessionStorage.setItem(r,JSON.stringify(t)):a[r]=JSON.stringify(t),l.function(s))return s(t)};$.ajax(n)},f=function(){return console.log(arguments)},d=function(e){return o.default.html.hasClass("mdzr"+e)},p=function(e,t){return-1!=e.indexOf(t)},h=function(e){return p(window.location.pathname,e)},m=function(e,t){var n=t?t+"-type-"+e:"type-"+e;return o.default.body.hasClass(n)},g=function(e){return o.default.body.hasClass("section-"+e)},v=function(e){return e?o.default.body.attr("id")==e:o.default.body.attr("id")},y=function(e,t){return $(e).length>0},b=function(e,t){return t=t||1,$(e).children("*").length>t},w=function(e){var t={target:l.undefined(e.target)?e:e.target,speed:l.undefined(e.speed)?500:e.speed,offset:l.undefined(e.offset)?0:e.offset};y($(t.target))&&o.default.page.animate({scrollTop:$(t.target).offset().top+t.offset},t.speed)},k=function(e){return e[Math.floor(Math.random()*e.length)]},S=function(e){var t=window.location.search;if(!p(t,e))return!1;var n=t.split(e).slice(1).join(e).split("=")[1];return n&&p(n,"&")&&(n=n.split("&")[0]),n||!1},j=function(){return Array.prototype.slice.call(arguments).join("")},O=function(e){return j('<svg class="icon icon-'+e+'">','<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/icon-library.svg#icon-'+e+'">',"</use>","</svg>")},x=function(e,t,n){var r=j('<div class="modal theme-'+(n=n||"modal")+'" id="modal">','<div class="modal-inner">','<div class="modal-close has-icon" id="modal-close">','<span class="icon-link">','<span class="hidden">Close</span>',"</span>",O("close"),"</div>",'<div class="modal-content" id="modal-content">',e,"</div>","</div>","</div>");y(o.default.overlay)||console.error("Cookies should be enabled for #overlay to be in the DOM on load"),o.default.body.append(r),o.default.overlay.fadeIn(500,function(){o.default.body.children("#modal").fadeIn().addClass("in-view")});var a=$("#modal");a.on("closeModal",function(){o.default.overlay.fadeOut(500),a.removeClass("in-view"),a.fadeOut(500).remove()}),"function"==typeof t&&t(a),o.default.document.on("click","#overlay, #modal-close",function(){a.trigger("closeModal")}),o.default.document.on("keyup",function(e){27==e.keyCode&&a.trigger("closeModal")})},_=function(e,t){var n="/"==e.substring(e.length-1),r=(o=n?e.substring(0,e.length-1):e).split("/"),o=r[r.length-1],a=!1;return s[o=n?o+"_index.html":o]?s[o]:($.ajax({url:"/cms/help/"+o,cache:!1,async:!1,success:function(e){s[o]=$("<div>"+e+"</div>"),"function"==typeof t&&(t(s[o]),a=!0)}}),"function"!=typeof t||a?s[o]:void t(s[o]))},M=function(e,t){$.fn[e]=function(e){return this.length>1?this.each(function(){new t(this,e)}):new t(this,e),this}},C=function(e,t){for(var n in t)e=e.replace(new RegExp("{"+n+"}","g"),t[n]);return e},T=function(e,t){$.getJSON("/cms/menu/?node="+e+"&mode=json",function(n){return i[e]||(i[e]=n.menu),t(i[e])})},P=function(e){for(var t=e.length;t>0;){var n=Math.floor(Math.random()*t),r=e[--t];e[t]=e[n],e[n]=r}return e},A={timers:{},start:function(e){this.timers[e]=(new Date).getTime()/1e3},stop:function(e){var t=(new Date).getTime()/1e3;console.group("Timer: '"+e+"'"),console.log((t-this.timers[e]).toFixed(4)+"s"),console.groupEnd()}},D=function(e){if(e=(e||"session")+"Storage",p($("#cookieValue").text(),"deny"))return!1;try{return window[e].setItem("storageTest","1"),window[e].removeItem("storageTest"),!0}catch(e){}return!1},I=function(e){return j('<div class="loading">','<span class="dot"></span>','<span class="dot"></span>','<span class="dot"></span>',void 0!=e?"<p>"+e+"</p>":"","</div>")};n.collect=u,n.collect2=c,n.is=l,n.logger=f,n.feature=d,n.index=p,n.section=g,n.path=h,n.type=m,n.page=v,n.exists=y,n.canRotate=b,n.scrollTo=w,n.random=k,n.query=S,n.render=j,n.createIcon=O,n.createPopup=x,n.pageCache=s,n.menuCache=i,n.pageContent=_,n.registerModule=M,n.shuffle=P,n.parseTemplate=C,n.getMenuJson=T,n.stopwatch=A,n.canStore=D,n.loading=I},{"flatpack/selectors":14}],14:[function(e,t,n){arguments[4][12][0].apply(n,arguments)},{dup:12}],15:[function(e,t,n){"use strict";e("../modules/core/mobile-ui"),e("../modules/core/nav"),e("../modules/core/popups"),e("../modules/core/cookies"),e("../modules/library/forms"),e("../modules/library/staff-rotator"),e("../modules/library/staff-search"),e("../modules/library/intro"),e("../modules/library/maps"),e("../modules/local/search-trigger"),e("../modules/local/footer-logos"),e("../modules/local/testimonial-rotator"),e("../modules/local/staff-cv"),e("../modules/local/scroll-to"),e("../modules/local/values-icons"),e("../modules/local/pdf-profile"),e("../modules/local/home"),e("../modules/local/profile-emails")},{"../modules/core/cookies":16,"../modules/core/mobile-ui":17,"../modules/core/nav":18,"../modules/core/popups":19,"../modules/library/forms":20,"../modules/library/intro":21,"../modules/library/maps":22,"../modules/library/staff-rotator":24,"../modules/library/staff-search":25,"../modules/local/footer-logos":28,"../modules/local/home":29,"../modules/local/pdf-profile":30,"../modules/local/profile-emails":31,"../modules/local/scroll-to":32,"../modules/local/search-trigger":33,"../modules/local/staff-cv":34,"../modules/local/testimonial-rotator":35,"../modules/local/values-icons":36}],16:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("selectors")),o=e("helpers"),a=function(){r.default.footer.find('[data-trigger="cookies"]').on("click",function(e){e.preventDefault(),(0,o.scrollTo)(r.default.body,400),r.default.overlay.fadeIn(),r.default.cookies.addClass("animate")}),$(document).on("click","#overlay, #cookies-close",function(){r.default.overlay.fadeOut(),r.default.cookies.removeClass("animate")})}();n.default=a},{helpers:37,selectors:38}],17:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/component/mobile-ui/2.0.0/js/")),o=function(){(0,r.default)({validateForm:{customValidation:{email:function(e,t,n){return-1!==t.indexOf("@")&&-1===t.indexOf("nhs.org.uk")}}}})}();n.default=o},{"flatpack/component/mobile-ui/2.0.0/js/":3}],18:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("selectors")),o=function(){var e=r.default.header.find("#nav-toggle");e.on("click",function(){e.toggleClass("toggle"),r.default.nav.toggleClass("animate")})}();n.default=o},{selectors:38}],19:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=r(e("selectors")),a=r(e("../../library/forms")),s=e("helpers");!function(){var e=o.default.wrapper.find('[data-trigger="popup"]');(0,s.exists)(e)&&e.on("click",function(e){e.preventDefault();var t=$(this),n=(t.data("theme"),t.attr("href")),r=(i="/"==n.substring(n.length-1)?n.substring(0,n.length-1):n).split("/"),i=(i=r[r.length-1]).indexOf(".html")>0?i:i+"_index.html";$.ajax({url:"/cms/help/"+i,cache:!1,async:!1,success:function(e){(0,s.scrollTo)(o.default.page,500),(0,s.createPopup)(e,"callback-form"),(0,a.default)()}})})}()},{"../../library/forms":20,helpers:37,selectors:38}],20:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=function(e){return e&&e.__esModule?e:{default:e}}(e("selectors")),a=e("flatpack/helpers");(r=function(){var e=o.default.containerCentre.find("#form-vacancy");if((0,a.section)("careers")&&(0,a.exists)(e)){var t=o.default.containerCentre.find(".block-header").find("h1").text();e.find("#role").val(t)}o.default.containerCentre.find("#form-enquiry, #expert-enquiry, #form-vacancy").validateForm({customValidation:{email:function(e,t,n){return-1!==t.indexOf("@")&&-1===t.indexOf("nhs.org.uk")}}}),o.default.body.children("#modal").find(".form").validateForm({customValidation:{email:function(e,t,n){return-1!==t.indexOf("@")&&-1===t.indexOf("nhs.org.uk")}}}),o.default.mobileUI.find("#form-mobile").validateForm({validateForm:{email:function(e,t,n){return-1!==t.indexOf("@")&&-1===t.indexOf("nhs.org.uk")}}})})(),n.default=r},{"flatpack/helpers":13,selectors:38}],21:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("selectors")),o=e("helpers"),a=function(){(0,o.page)("home")||(0,o.page)("quantum")||(0,o.page)("quantum-occupational-therapy")||(0,o.page)("testimonials")||(0,o.isSection)("contact")||(0,o.isSection)("library")||r.default.containerCentre.find(".content:first").find("p:first").addClass("intro")}();n.default=a},{helpers:37,selectors:38}],22:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/selectors")),o=e("flatpack/helpers");e("./module");var a=function(){(0,o.type)("office")&&r.default.containerCentre.find(".map").each(function(){$(this).googleMap()})}();n.default=a},{"./module":23,"flatpack/helpers":13,"flatpack/selectors":14}],23:[function(e,t,n){"use strict";function r(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],a=Object.getOwnPropertyDescriptor(t,o);a&&a.configurable&&void 0===e[o]&&Object.defineProperty(e,o,a)}return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):r(e,t))}var i=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/base-module")),l=e("flatpack/helpers"),u=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.defaultSettings=function(){return{generateHtml:function(e){return(0,l.render)('<div class="map-meta">','<p class="h3">'+e.title+"</p>",'<ul class="meta address">',"<li>"+e.addressHtml+"</li>","</ul>",'<ul class="meta links">','<li><a href="http://maps.google.co.uk?q='+e.address+'">View on Google</a></li>','<li><a href="http://maps.google.co.uk?q=current location to '+e.address+'">Get directions</a></li>',"</ul>","</div>")}}},t.prototype.init=function(){if(0==this.$target.find(".link").length)return!1;this.$target.find(".marker").length>0?this.buildMultiMap(this.$target):this.buildSingleMap(this.$target)},t.prototype.getMapMarkers=function(e){var t=this,n=[];return e.find(".marker").each(function(e,r){n.push(t.getAttributes($(r)))}),n},t.prototype.buildMultiMap=function(e){var t=this,n=t.getMapMarkers(e),r=new google.maps.Map(e[0],t.getMapOptions(n[0])),o=new google.maps.LatLngBounds;$.each(n,function(e,n){var a=new google.maps.InfoWindow,s=new google.maps.Marker({position:n.latlng,map:r});o.extend(s.position),google.maps.event.addListener(s,"click",function(e,n){return function(){a.setContent(t.formatHtml(n)),a.open(r,e)}}(s,n))}),r.fitBounds(o)},t.prototype.buildSingleMap=function(e){var t=this,n=this.getAttributes(e),r=new google.maps.Map(e[0],t.getMapOptions(n)),o=new google.maps.Marker({position:n.latlng,map:r}),a=new google.maps.InfoWindow;a.setContent(t.formatHtml(n)),google.maps.event.addListener(o,"click",function(e,t){return function(){a.open(r,e),r.panTo(a.getPosition())}}(o)),window.setTimeout(function(){a.open(r,o),r.panTo(a.getPosition())},2e3)},t.prototype.getAttributes=function(e){var t=(t=(t=e.find(".link").text()).split("@"))[1].split(","),n=parseFloat(t[0]),r=parseFloat(t[1]),o={title:e.find(".title").text(),address:e.find(".address").html(),zoom:e.find(".zoom").length>0?parseInt(e.find(".zoom").text()):16,fill:e.css("fill"),latlng:new google.maps.LatLng(n,r)};return o.addressHtml=o.address.replace(/,/g,"</li><li>"),o},t.prototype.formatHtml=function(e){return this.settings.generateHtml(e)},t.prototype.getMapOptions=function(e){return{zoom:e.zoom,center:e.latlng,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,draggable:!!(0,l.feature)("no-touch"),featureType:"poi",styles:[{featureType:"poi",stylers:[{visibility:"off"}]},{stylers:[{hue:this.rgbToHex(e.fill)},{saturation:-20}]}]}},t.prototype.rgbToHex=function(e){function t(e){return("0"+parseInt(e).toString(16)).slice(-2)}return/^#[0-9A-F]{6}$/i.test(e)?e:(e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),"#"+t(e[1])+t(e[2])+t(e[3]))},t}(i.default);(0,l.registerModule)("googleMap",function(e,t){return new u(e,t)})},{"flatpack/base-module":1,"flatpack/helpers":13}],24:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("selectors")),o=e("helpers"),a=function(){var e=r.default.containerLeft.children(".staff-rotator");if((0,o.exists)(e)){var t=[];e.children(".rotate").each(function(){t.push($(this).find(".staff-details").find(".name").find("a").html())}),e.bxSlider({mode:"fade",auto:!0,controls:!1,pager:!0,buildPager:function(e){return"<span>"+t[e]+"</span>"},onSliderLoad:function(){e.closest(".bx-wrapper").addClass("staff-rotator-container")}})}}();n.default=a},{helpers:37,selectors:38}],25:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});r(e("selectors"));var o=e("flatpack/core/helpers/1.3.0/js"),a=(r(e("./module")),function(){if((0,o.page)("find-an-expert")){$(".staff-list-container").staffSearch({realtimeSearch:!1,filters:[{name:"name",type:"text",label:"Search by Name"},{name:"stafftype",type:"select",label:"Search Profession"},{name:"department",type:"select",label:"Search by Main Specialist Field",update:!0},{name:"subspecialism",type:"select",label:"Search by Sub Specialism",update:!0},{name:"reporttype",type:"select",label:"Search by Report Type",update:!0}],updateStaffSearchFilters:!0,mounted:function(e){e.find(".card")}});window.history&&window.history.pushState&&$(window).on("popstate",function(){console.log("POPSTATE")})}}());n.default=a},{"./module":26,"flatpack/core/helpers/1.3.0/js":11,selectors:38}],26:[function(e,t,n){"use strict";function r(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],a=Object.getOwnPropertyDescriptor(t,o);a&&a.configurable&&void 0===e[o]&&Object.defineProperty(e,o,a)}return e}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):r(e,t))}var l=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/core/base-module/1.0.0/js")),u=e("flatpack/core/helpers/1.3.0/js");e("./run-staff-search");var c=function(e){function t(){return a(this,t),s(this,e.apply(this,arguments))}return i(t,e),t.prototype.setProps=function(){var e=this;this.prefix="ss-",this.staff=[],this.$filters=[],this.filters=[],this.filtersToUpdate=this.settings.filters.filter(function(e){return e.update}),this.showSearchResults=!1,this.$results=this.$target.find(".staff-search-results"),this.runStaffSearchWithGroup=function(){return e.settings.groupSearchResults||e.settings.groupByAttribute&&!e.filters.length}},t.prototype.defaultSettings=function(){return{updateUrl:!0,realtimeSearch:!0,filters:[{name:"firstname",type:"text"},{name:"department",type:"select"},{name:"stafftype",type:"select"}],updateStaffSearchFilters:!1,setAttributes:function(e){return{}},sortByAttributes:["lastname"],generateHtml:function(e){return(0,u.template)('\n                    <li class="card" id="'+e.username+'" data-staff-order="'+e.order+'">\n                        <div class="staff-image">\n                            <a href="'+e.profile+'">\n                                <span class="smart-load">\n                                    <img src="'+e.image+'" alt="'+e.fullname+'">\n                                </span>\n                            </a>\n                        </div>\n                        <ul class="staff-attributes">\n                            <li class="staff-details">\n                                <ul>\n                                    <li class="name h4">\n                                        <a href="'+e.profile+'">'+e.name+'</a>\n                                    </li>\n                                    <li class="jobtitle">'+e.jobtitle+'</li>\n                                </ul>\n                            </li>\n                            <li class="staff-contact">\n                                <ul>\n                                    <li class="email has-icon">\n                                        <a class="icon-link" href="mailto:'+e.email+'?subject=Email%20from%20website:case enquiry">\n                                            <span>Send an email</span>\n                                        </a>\n                                    </li>\n                                    <li class="profile has-icon">\n                                        <a class="icon-link" href="'+e.profile+'">\n                                            <span>View profile</span>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </li>\n                ')},sortGroupByAttributes:["letter"],generateGroupHtml:function(e){return(0,u.template)('\n                    <li class="staff-group">\n                        <p class="letter">'+e.letter+'</p>\n                        <ul class="group">'+e.staff+"</ul>\n                    </li>\n                ")},groupSearchResults:!1,done:function(e,t){e.html((0,u.template)('\n                        <div class="staff-search-container">\n                            <p class="h2">Find an Expert</p>\n                            <form class="staff-search-form" name="staff-search-form">\n                                <div class="staff-search-filters">\n                                    '+t+'\n                                </div>\n                                <div class="staff-search-action">\n                                    <div class="row">\n                                        <button class="button search-action submit" type="submit">Search</button>\n                                        <input class="button search-action submit reset" type="reset" value="Reset">\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n\n                        <div class="staff-search-results"></div>\n                    '))}}},t.prototype.init=function(){var e=this;this.buildStaffSearchBar(),this.updateStaffSearchBar(),window.history&&window.history.pushState&&$(window).on("popstate",function(){e.showSearchResults=!0,e.runStaffSearchOnLoad()})},t.prototype.buildStaffSearchBar=function(){var e=this.buildStaffSearchFilters();this.settings.done(this.$target,e)},t.prototype.buildStaffSearchFilters=function(){var e=this;return this.settings.filters.map(function(t){var n=t.label?t.label:"Search by "+t.name,r=""+e.prefix+t.name;switch(t.type){case"text":return(0,u.template)('\n                        <div class="row">\n                            <label class="label">'+n+'</label>\n                            <input name="'+r+'" class="input '+r+'" type="'+t.type+'">\n                        </div>\n                    ');case"select":return(0,u.template)('\n                        <div class="row">\n                            <label class="label">'+n+'</label>\n                            <div class="select-wrapper">\n                                <select name="'+r+'" class="select '+r+'">\n                                    <option value="">--- Please select ---</option>\n                                </select>\n                            </div>\n                        </div>\n                    ')}}).join("")},t.prototype.updateStaffSearchBar=function(){this.getStaffData()},t.prototype.getStaffData=function(){var e=this;this.$target.runStaffSearch({html:!1,done:function(t,n){e.staff=n,e.updateStaffSearchFilters(e.settings.filters,e.staff),e.readyForStaffSearch()}})},t.prototype.updateStaffSearchFilters=function(e,t){var n=this;e.filter(function(e){return"select"===e.type}).map(function(e){return e.name}).forEach(function(e){var r=t.reduce(function(t,n){return t=t.concat(n[e])},[]).reduce(function(e,t){return t&&-1===e.indexOf(t.label)&&e.push(t.label),e},[]).sort(function(e,t){return e>t?1:e<t?-1:0}).map(function(e){return'<option data-value="'+n.urlify(e)+'" value="'+e+'">'+e+"</option>"}).join("");n.$target.find("."+n.prefix+e).find('option:not([value=""])').remove(),n.$target.find("."+n.prefix+e).append(r)}),this.filters.forEach(function(e){var t=n.$target.find("select."+n.prefix+e.name);t.length&&t.val(t.find('[data-value="'+n.urlify(e.value)+'"]').val())})},t.prototype.readyForStaffSearch=function(){this.updateProps(),this.registerEventHandlers(),this.runStaffSearchOnLoad()},t.prototype.updateProps=function(){var e=this;this.$filters=this.settings.filters.map(function(t){return e.$target.find("."+e.prefix+t.name)}),this.filters=this.settings.filters.map(function(e){return e.name}),this.$results=this.$target.find(".staff-search-results")},t.prototype.registerEventHandlers=function(){var e=this,t=function(t){t&&t.preventDefault(),e.runStaffSearch(),e.settings.updateUrl&&history.pushState({},document.title,e.filters.length?"?"+e.encodeFilters():window.location.pathname)};this.$target.find('input[name^="'+this.prefix+'"]').on("keyup",t),this.$target.find('select[name^="'+this.prefix+'"]').on("change",t),this.$target.find('[type="submit"]').on("click",function(n){e.showSearchResults=!0,(0,u.scrollTo)({target:e.$results}),t(n)}),this.$target.find('[type="reset"]').on("click",function(n){e.$target.find(".staff-search-form")[0].reset(),e.showSearchResults=!1,(0,u.scrollTo)({target:e.$target}),t()})},t.prototype.updateFilters=function(){var e=this;this.filters=this.$filters.filter(function(e){return e.val().trim().length}).map(function(t,n){return{name:t.attr("name").replace(e.prefix,""),value:t.val().trim(),type:e.settings.filters[n].type}})},t.prototype.composeFilters=function(){return this.filters.reduce(function(e,t){return e[t.name]=t.value,e},{})},t.prototype.encodeFilters=function(){var e=this;return this.filters.map(function(t){return e.urlify(t.name)+"="+e.urlify(t.value)}).join("&")},t.prototype.runStaffSearch=function(){var e=this;this.updateFilters(),this.$results.html("");var t=function(t,n){if(e.settings.updateStaffSearchFilters){var r=e.runStaffSearchWithGroup()?[].concat(o(n.map(function(e){return e.staff}))):n;e.updateStaffSearchFilters(e.filtersToUpdate,r)}e.showSearchResults&&e.updateStaffSearchResults(n)},n={match:"all",filters:this.composeFilters(),sortByAttributes:this.settings.sortByAttributes,done:t},r={groupByAttribute:this.settings.groupByAttribute,sortGroupByAttributes:this.settings.sortGroupByAttributes},a=this.runStaffSearchWithGroup()?$.extend({},n,r):n;this.$results.runStaffSearch(a)},t.prototype.updateStaffSearchResults=function(e){var t=this,n=e.slice().map(function(e){return t.settings.generateHtml(e)}).join("");this.$results.html((0,u.template)('\n                <div class="staff-search-stats">\n                    <p class="h3">\n                        <strong>'+e.length+"</strong> result"+(1===this.filters.length?"s":"")+" found"+(this.filters.length?" for":"")+"<strong>\n                            <em>"+this.filters.map(function(e){return e.value}).join(", ")+'</em>\n                        </strong>\n                    </p>\n                </div>\n                <ul class="staff-cards">'+n+"</ul>\n            "))},t.prototype.decodeFilters=function(){var e=this;this.$filters.forEach(function(t){var n=(0,u.query)(t.attr("name").replace(e.prefix,""));n&&("text"===t[0].type?t.val(n):t.val(t.find('[data-value="'+n+'"]').val()),e.showSearchResults=!0)})},t.prototype.scrollToResults=function(){(0,u.scrollTo)({target:this.$results})},t.prototype.runStaffSearchOnLoad=function(){this.decodeFilters(),this.runStaffSearch(),window.location.search.length&&this.scrollToResults()},t.prototype.urlify=function(e){return encodeURIComponent(e.replace(/\s|\+/g,"-").toLowerCase())},t}(l.default);(0,u.registerModule)("staffSearch",function(e,t){return new c(e,t)})},{"./run-staff-search":27,"flatpack/core/base-module/1.0.0/js":8,"flatpack/core/helpers/1.3.0/js":11}],27:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],a=Object.getOwnPropertyDescriptor(t,o);a&&a.configurable&&void 0===e[o]&&Object.defineProperty(e,o,a)}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}var u=r(e("flatpack/core/base-module/1.0.0/js")),c=r(e("flatpack/core/bank/1.0.0/js")),f=e("flatpack/core/helpers/1.3.0/js"),d=function(e){function t(){return s(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.setProps=function(){this.Bank=new c.default,this.key="_staff-search-data",this.match="all"===this.settings.match?Object.keys(this.settings.filters).length:"any"===this.settings.match?1:0,this.data=[],this.staff=[],this.sortByAttributes=this.settings.sortByAttributes.slice(0).reverse(),this.sortGroupByAttributes=this.settings.sortGroupByAttributes.slice(0).reverse(),this.filterRules={equals:function(e,t){return e.toLowerCase()===t.toLowerCase()},contains:function(e,t){return-1!==e.toLowerCase().indexOf(t.toLowerCase())}},this.setDefaultAttributes=function(e){return{name:e.firstname+" "+e.lastname,profile:"/site/people/profile/"+e.username}}},t.prototype.defaultSettings=function(){return{html:!1,match:"none",filters:{},filterRules:{},setAttributes:function(e){return{}},sortByAttributes:["order","firstname"],groupByAttribute:null,sortGroupByAttributes:[],done:function(e,t){e.html('<ul class="staff-cards">'+t+"</ul>")},mounted:function(e){return e},error:function(e,t){console.log("run error"),console.log(t)}}},t.prototype.init=function(){this.getAllData()},t.prototype.getAllData=function(){var e=this;this.Bank.get(this.key,function(t,n){t?e.getStaffData():(e.data=e.staff=n,e.extendData())})},t.prototype.getStaffData=function(){var e=this;$.ajax({url:"/cms/staffsearch/?xml=staffsearch",success:function(t){e.data=e.staff=e.processResponse(t),e.bankData(),e.extendData()},error:function(t){e.settings.error(e.$target,t)}})},t.prototype.processResponse=function(e){var t=function(e){return $(e).children().get().reduce(function(e,t){var n=t.tagName,r=[].slice.call(t.attributes);if(r.length){var o=r.reduce(function(e,t){return e[t.nodeName]=t.nodeValue.trim(),e},{});n in e?e[n].push(o):e[n]=[o]}else e[n]=t.textContent.trim();return e},{})};return $(e).find("staff").get().map(function(e){return t(e)})},t.prototype.bankData=function(){this.Bank.set(this.key,this.data)},t.prototype.extendData=function(){var e=this;this.staff=this.staff.map(function(t){return $.extend({},t,e.setDefaultAttributes(t),e.fire("setAttributes",t))}),this.filterData()},t.prototype.filterData=function(){var e=this,t=this.settings.filters;Object.keys(t).length&&(this.staff=this.staff.filter(function(n){var r=0;for(var o in t)!function(o){var a=(o+"/").split("/").filter(function(e){return e}),s=a[0],i=a[1]?a[1]:"label",l=e.settings.filterRules.hasOwnProperty(o)?e.filterRules[e.settings.filterRules[o]]:e.filterRules.contains;(f.is.array(n[s])?n[s].map(function(e){return e[i]}):[n[s]]).forEach(function(e){e&&l(e,t[o])&&r++})}(o);return r>=e.match})),this.sortData()},t.prototype.sortData=function(){var e=this;this.sortByAttributes.forEach(function(t){var n="order"===t;e.staff=e.staff.sort(function(e,r){var o=n?parseInt(e[t]):e[t],a=n?parseInt(r[t]):r[t];return o>a?1:o<a?-1:0})}),this.groupData()},t.prototype.groupData=function(){if(this.settings.groupByAttribute){var e=(this.settings.groupByAttribute+"/").split("/").filter(function(e){return e}),t=this.staff.reduce(function(t,n){var r=n[e[0]];if(f.is.array(r))r.forEach(function(r){e.length>1&&(t.hasOwnProperty(r[e[1]])||(t[r[e[1]]]=$.extend({},r,{staff:[]})),t[r[e[1]]].staff.push(n))});else{if(!t.hasOwnProperty(n[e[0]])){var o;t[n[e[0]]]=(o={},a(o,e[0],n[e[0]]),a(o,"staff",[]),o)}t[n[e[0]]].staff.push(n)}return t},{});t.hasOwnProperty("undefined")&&(t.undefined.label="Other",t.undefined.name="other",t.undefined.order=1e3,t.undefined.url=""),this.staff=Object.keys(t).map(function(e){return t[e]}),this.sortGroupData()}this.done()},t.prototype.sortGroupData=function(){var e=this;this.sortGroupByAttributes.forEach(function(t){var n="order"===t;e.staff=e.staff.sort(function(e,r){var o=n?parseInt(e[t]):e[t],a=n?parseInt(r[t]):r[t];return o>a?1:o<a?-1:0})})},t.prototype.done=function(){this.staff=this.settings.html?this.formatData():this.staff,this.settings.done(this.$target,this.staff),this.settings.mounted(this.$target)},t.prototype.formatData=function(){var e=this;return this.settings.groupByAttribute?this.staff.map(function(t){return t.staff=e.formatStaffGroup(t.staff),e.settings.generateGroupHtml(t)}).join(""):this.formatStaffGroup(this.staff)},t.prototype.formatStaffGroup=function(e){var t=this;return e.map(function(e){return t.settings.generateHtml(e)}).join("")},t}(u.default);(0,f.registerModule)("runStaffSearch",function(e,t){return new d(e,t)})},{"flatpack/core/bank/1.0.0/js":7,"flatpack/core/base-module/1.0.0/js":8,"flatpack/core/helpers/1.3.0/js":11}],28:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("selectors")),o=e("helpers"),a=function(){var e=r.default.footer.find(".footer-logos ul");(0,o.exists)(e)&&e.bxSlider({auto:!0,pause:4e3,pager:!1,nextText:"",prevText:"",onSliderLoad:function(){e.closest(".bx-wrapper").addClass("footer-logos-container")}})}();n.default=a},{helpers:37,selectors:38}],29:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/core/selectors/1.0.0/js")),o=e("flatpack/core/helpers/1.3.0/js");e("flatpack/component/staff-search/2.0.0/js/run-staff-search");var a=function(){(0,o.page)("home")&&r.default.hero.find("#need-an-expert-list").runStaffSearch({match:"all",html:!0,filters:{"home/name":"home"},generateHtml:function(e){return'<li><a href="'+e.profile+'"><img alt="'+e.name+'" src="'+e.image+'"><span>'+e.name+"<br />"+e.jobtitle+"</span></a></li>"}})}();n.default=a},{"flatpack/component/staff-search/2.0.0/js/run-staff-search":6,"flatpack/core/helpers/1.3.0/js":11,"flatpack/core/selectors/1.0.0/js":12}],30:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/selectors")),o=e("flatpack/helpers"),a=function(){if((0,o.page)("profile")){var e=(0,o.render)("https://pdfmyurl.com/api?","license=2PEpCh83pwIP","&url="+window.location.href+"?print=pdf-all","&page_size=A4","&top=15","&right=0","&bottom=15","&left=0","&orientation=portrait","&filename="+r.default.wrapper.find("h1").text()+" - Somek",(0,o.index)(window.location.host,"conscious")?"&username=website&password=review":"");$('<li class="pdf-wrapper"><a href="#" class="pdf-link" rel="nofollow">Download Web Profile</a></li>').insertAfter(".staff-contact .cv"),$(".pdf-link").on("click",function(t){t.preventDefault(),window.location=encodeURI(e)})}}();n.default=a},{"flatpack/helpers":13,"flatpack/selectors":14}],31:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/selectors")),o=e("flatpack/helpers"),a=function(){var e=r.default.hero.find(".staff-contact");r.default.main.find("h1").text();(0,o.page)("profile")&&e.find(".email").find(".icon-link").attr("href","mailto:admin@somek.com?subject=Email%20from%20website:case enquiry"),(0,o.path)("/site/expert-witness/find-an-expert/")&&r.default.containerCentre.find(".staff-list-container").find(".staff-cards").find(".card").each(function(){$(this).find(".email").find(".icon-link").attr("href","mailto:admin@somek.com?subject=Email%20from%20website:case enquiry")}),r.default.containerLeft.find(".speaker").each(function(){$(this).find(".email").find(".icon-link").attr("href","mailto:admin@somek.com?subject=Email%20from%20website:case enquiry")}),r.default.containerCentre.find(".staff-cards").each(function(){$(this).find(".email").find("a").attr("href","mailto:admin@somek.com?subject=Email%20from%20website:case enquiry")})}();n.default=a},{"flatpack/helpers":13,"flatpack/selectors":14}],32:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("flatpack/helpers"),o=function(){var e=$(".arrow-down");(0,r.exists)(e)&&e.on("click",function(e){e.preventDefault(),(0,r.scrollTo)(".main",3e3)});var t=$(".scroll-on-click");(0,r.exists)(t)&&$.each(t,function(){$(this).on("click",function(e){e.preventDefault(),(0,r.scrollTo)(e.target.hash,3e3)})})}();n.default=o},{"flatpack/helpers":13}],33:[function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/selectors")),o=e("flatpack/helpers");$(".search-trigger").on("click",function(){r.default.header.find(".search-container").hasClass("active")?(r.default.header.find(".search-container").removeClass("active"),$(this).html((0,o.createIcon)("search"))):(r.default.header.find(".search-container").addClass("active"),$(this).html((0,o.createIcon)("close")),$(".search-input").focus())})},{"flatpack/helpers":13,"flatpack/selectors":14}],34:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/selectors")),o=e("flatpack/helpers"),a=function(){var e=r.default.hero.find(".staff-contact"),t=r.default.main.find("h1").text();(0,o.page)("profile")&&e.find("ul").append((0,o.render)('<li class="cv">','<a class="icon-link" href="mailto:admin@somek.com?subject='+t+' – full CV request"',"<span>Request full CV</span>","</a>","</li>"))}();n.default=a},{"flatpack/helpers":13,"flatpack/selectors":14}],35:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("flatpack/core/selectors/1.0.0/js")),o=e("flatpack/core/helpers/1.1.1/js"),a=function(){var e=r.default.preFooter.find(".testimonials-list").find(".testimonials");if(!((0,o.page)("home")||(0,o.page)("testimonials")||(0,o.section)("careers")||(0,o.page)("about")||(0,o.type)("overview")||(0,o.page)("cms-global")||(0,o.page)("search"))){var t=r.default.preFooter.find(".testimonial-prefooter"),n=(0,o.page)("profile")?r.default.containerCentre.find(".staff-biography .content"):r.default.containerCentre.find(".block-text .content"),a=n.find("hr"),s=n.children("*:eq(3)");(0,o.exists)(a)?(t.insertAfter(a),a.hide()):t.insertAfter(s)}var i={auto:!0,mode:"fade",controls:!1,pause:6e3,onSliderLoad:function(){e.closest(".bx-wrapper").addClass("testimonial-rotator-container")}};return(0,o.exists)(e)&&(0,o.canRotate)(e)&&e.bxSlider(i),i}();n.default=a},{"flatpack/core/helpers/1.1.1/js":10,"flatpack/core/selectors/1.0.0/js":12}],36:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("selectors")),o=e("helpers");e("flatpack/component/smart-scroll/1.1.0/js");var a=function(){if((0,o.page)("about")){var e=r.default.containerCentre.find(".our-values");(0,o.exists)(e)&&e.smartScroll({offset:100,trigger:function(e){e.find("li").each(function(){var e=$(this);e.css({"background-image":"url('/images/icons/values/"+e.data("image")+".png')"})})}})}}();n.default=a},{"flatpack/component/smart-scroll/1.1.0/js":5,helpers:37,selectors:38}],37:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.canStore=n.stopwatch=n.getMenuJson=n.parseTemplate=n.shuffle=n.registerModule=n.createPopup=n.createIcon=n.render=n.query=n.random=n.scrollTo=n.canRotate=n.exists=n.isSection=n.page=n.type=n.section=n.index=n.hasFeature=n.logger=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(e("selectors")),o=function(e){return console.log(e)},a=function(e){return r.default.html.hasClass("mdzr"+e)},s=function(e,t){return-1!=e.indexOf(t)},i=function(e){return s(window.location.pathname,e)},l=function(e){return r.default.body.hasClass("type-"+e)},u=function(e){return r.default.body.hasClass("section-"+e)},c=function(e){return r.default.body.attr("id")==e},f=function(e,t){return!($(e).length>t)||--t},d=function(e){return $(e).children("*").length>1},p=function(e,t){r.default.page.animate({scrollTop:$(e).offset().top},t)},h=function(e){return e[Math.floor(Math.random()*e.length)]},m=function(e){var t=window.location.search;if(!s(t,e))return!1;var n=t.split(e).slice(1).join(e).split("=")[1];return s(n,"&")&&(n=n.split("&")[0]),n},g=function(){return Array.prototype.slice.call(arguments).join("")},v=function(e){return'<svg class="icon icon-'+e+'"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/icon-library.svg#icon-'+e+'"></use></svg>'},y=function(e,t,n){var o=g('<div class="modal theme-'+(n=n||"modal")+'" id="modal">','<div class="modal-inner">','<div class="modal-close has-icon" id="modal-close">','<span class="icon-link">','<span class="hidden">Close</span>',"</span>",v("close"),"</div>",'<div class="modal-content" id="modal-content">',e,"</div>","</div>","</div>");f(r.default.overlay)||console.error("Cookies should be enabled for #overlay to be in the DOM on load"),r.default.body.append(o),r.default.overlay.fadeIn(500,function(){r.default.body.children("#modal").fadeIn()});var a=r.default.body.children("#modal");a.on("closeModal",function(){r.default.overlay.fadeOut(500),a.fadeOut(500).remove()}),"function"==typeof t&&t(a),r.default.document.on("click","#overlay, #modal-close",function(){a.trigger("closeModal")})},b=function(e,t){$.fn[e]=function(e){this.length>0&&this.each(function(n,r){t($(r),e)})}},w=function(e,t){for(var n in t)e=e.replace(new RegExp("{"+n+"}","g"),t[n]);return e},k=function(e){return new Promise(function(t,n){$.getJSON("/cms/menu/?node="+e+"&mode=json").then(function(e){t(e.menu)})})},S=function(e){for(var t=e.length;t>0;){var n=Math.floor(Math.random()*t),r=e[--t];e[t]=e[n],e[n]=r}return e},j={timers:{},start:function(e){this.timers[e]=(new Date).getTime()/1e3},stop:function(e){var t=(new Date).getTime()/1e3;console.group("Timer: '"+e+"'"),console.log((t-this.timers[e]).toFixed(4)+"s"),console.groupEnd()}},O=function(e){e=(e||"session")+"Storage";try{return window[e].setItem("storageTest","1"),window[e].removeItem("storageTest"),!0}catch(e){}return!1};n.logger=o,n.hasFeature=a,n.index=s,n.section=i,n.type=l,n.page=c,n.isSection=u,n.exists=f,n.canRotate=d,n.scrollTo=p,n.random=h,n.query=m,n.render=g,n.createIcon=v,n.createPopup=y,n.registerModule=b,n.shuffle=S,n.parseTemplate=w,n.getMenuJson=k,n.stopwatch=j,n.canStore=O},{selectors:38}],38:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={window:$(window),document:$(document),page:$("html,body"),html:$("html"),body:$("body"),mobileUI:$("#mobile-ui"),wrapper:$("#wrapper"),header:$("#header"),nav:$("#nav"),subNav:$("#sub-nav"),hero:$("#hero"),heroInner:$("#hero-inner"),main:$("#main"),containerCentre:$("#container-centre"),containerRight:$("#container-right"),containerLeft:$("#container-left"),footerWrapper:$("#footer-wrapper"),preFooter:$("#pre-footer"),footer:$("#footerContainer"),cookies:$("#cookies"),overlay:$("#overlay")};n.default=r},{}]},{},[15])});
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD

 * Build: http://modernizr.com/download/#-backgroundsize-borderimage-flexbox-flexboxlegacy-multiplebgs-cssanimations-csscolumns-generatedcontent-cssgradients-csstransforms-csstransitions-canvas-canvastext-hashchange-history-audio-video-input-inputtypes-geolocation-inlinesvg-svg-svgclippaths-touch-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-css_calc-css_vhunit-css_vmaxunit-css_vminunit-css_vwunit-load-cssclassprefix:mdzr

 */

;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.flexboxlegacy=function(){return I("boxDirection")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.csstransforms=function(){return!!I("transform")},s.csstransitions=function(){return I("transition")},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" mdzr"+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" mdzrjs mdzr"+v.join(" mdzr"):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("csscalc",function(){var a="width:",b="calc(10px);",c=document.createElement("div");return c.style.cssText=a+Modernizr._prefixes.join(b+a),!!c.style.length}),Modernizr.addTest("cssvhunit",function(){var a;return Modernizr.testStyles("#modernizr { height: 50vh; }",function(b,c){var d=parseInt(window.innerHeight/2,10),e=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).height,10);a=e==d}),a}),Modernizr.addTest("cssvmaxunit",function(){var a;return Modernizr.testStyles("#modernizr { width: 50vmax; }",function(b,c){var d=window.innerWidth/100,e=window.innerHeight/100,f=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).width,10);a=parseInt(Math.max(d,e)*50,10)==f}),a}),Modernizr.addTest("cssvwunit",function(){var a;return Modernizr.testStyles("#modernizr { width: 50vw; }",function(b,c){var d=parseInt(window.innerWidth/2,10),e=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).width,10);a=e==d}),a}),Modernizr.addTest("cssvminunit",function(){var a;return Modernizr.testStyles("#modernizr { width: 50vmin; }",function(b,c){var d=window.innerWidth/100,e=window.innerHeight/100,f=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).width,10);a=parseInt(Math.min(d,e)*50,10)==f}),a});
/**

 * BxSlider v4.1.2 - Fully loaded, responsive content slider

 * http://bxslider.com

 *

 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com

 * Written while drinking Belgian ales and listening to jazz

 *

 * Released under the MIT license - http://opensource.org/licenses/MIT

 */

!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).on("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).trigger("load")})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).on("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&typeof o.settings.buildPager==='function'?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.on("click",y),o.controls.prev.on("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.on("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.on("touchmove",Y),o.viewport.on("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.off("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.off("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).off("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);

/**

 * @package Conscious CMS 4.0

 * @title Form validation

 * @description Form validation

 * @author jsmith

 * @version 2.7.0

 * @date 11 August 2020

 * @Modified jsmith

 * 

 */



;(function($, window, document, undefined) {



    "use strict";



    /**

     * Define default options

     * 

     */

    var defaults = {



        hasCaptcha          : undefined,

        onReadyForCaptcha   : '',  

        captchaWrapper      : '.captcha-wrapper',

        captchaErrorMessage : 'Please enter the characters as shown',

        errorClass          : 'field-error',

        successClass        : 'field-success',

        helper              : '.helper',

        emailErrorMessage   : 'Please enter a valid email address', 

        scrollToFirstError  : true,

        scrollTime          : 500,

        errorMessages       : {},

        successMessages     : {},

        customValidation    : {},

        events              : {},

        onSuccess           : false,

        onError             : false,

        response            : '#container-centre .block',

        realtime            : true,

        submitViaAjax       : false,

        referrerInput       : 'referrer',

        channelInput        : 'channel',

        deviceInput         : 'device',

        channels            : {},

        debugMode           : undefined,

        onFieldSuccess      : false, 

        sendingText         : 'Sending...',

        done                : function($form) {

            console.log('DONE')

        }



    };



    var localStorageAvailable = function() {

        // test to see if we are in private browsing

        if( $('#cookieValue').length > 0 && $('#cookieValue').text().indexOf('deny') != -1 ) 

        {

             return false;

        }

        else {

            //test to see if we are in private browsing

            var testKey = 'test', 

                 storage = window.localStorage;

            try 

            {

                storage.setItem(testKey, '1');

                storage.removeItem(testKey);

                return true;

            } 

            catch (error) 

            {

                return false;

            }

        }

        // end private browsing test

    }



    // George's bit :D

    var updatePPCFields = function()

    {

        //channel options

        var channels = {

            'Paid search'   : ['gclid', 'utm_medium=cpc'],

            'Organic'       : ['google', 'yahoo', 'bing', 'duckduckgo', 'ask.com', 'msn', 'www.aol.com'],

            'Referral'      : ['http'],

            'Direct'        : [""]

        },

        referrer = document.referrer,

        siteUrl = document.location.hostname,

        siteQuery = document.location.search,

        finalChannel = '';  



        // maybe use utm_medium / utm_medium

        if( siteQuery.indexOf('gclid') != -1 || siteQuery.indexOf('utm_medium=cpc') != -1 ) {

            referrer += siteQuery;

        }



        channels = $.extend({}, channels, defaults.channels);

        

        //assuming the site url is not the same

        if ( referrer.indexOf(siteUrl) < 0 )

        {   



            //if they are not in private!

            if ( localStorageAvailable() ) 

            {

                var newReferreer = '';

                // logic added for showing first and last

                if(localStorage.local_referrer != undefined ) {

                    newReferreer = localStorage.local_referrer.split(',')[0] + ',';

                }

                // logic if from another site

                if( referrer.length > 0 ) {

                    newReferreer += referrer;

                }

                //default to direct

                else {

                    newReferreer += 'Direct';

                }   

                //set the storage item to be a commas seperated value 

                //showing first and last visit

                window.localStorage.setItem('local_referrer', newReferreer);

                referrer = newReferreer;

            }



           var referrers = referrer.split(','); 

           //run for each referrer

           for( var r = 0; r < referrers.length; r++) {



                if(referrers[r] != 'Direct') {



                    //loop throught the channels   

                    for ( var channel in channels ) 

                    {

                        var channelArray = channels[channel];



                        //loop through the channel's array

                        for ( var i = 0; i < channelArray.length;  ++i ) 

                        {

                            // if a word matches a key word then return true

                            if ( referrers[r].indexOf(channelArray[i]) != -1 ) 

                            {

                                finalChannel += r < 1 ? channel : ',' + channel;

                                break;

                            }

                        }



                        if ( finalChannel )

                        {

                            break;

                        }

                    };

                }

                else {

                    finalChannel += r < 1 ? 'Direct' : ',Direct';

                }

           }





            if ( localStorageAvailable() ) window.localStorage.setItem('local_channel', finalChannel);;

        }

    }();



    $.fn.validateForm = function(options) {



        if ( this.length === 0 )

        {

            return this;

        }



        if ( this.length > 1)

        {

            this.each(function() {

                $(this).validateForm(options);

            });

            return this;

        }

        

        // To avoid scope issues, use 'el' instead of 'this'

        var form                       = {},

            el                         = this,

            $form                      = $(el),

            $el                        = $form,

            fieldSuccessFunction;



            form.id                    = $form.attr('id');

            form.el                    = el;

            form.validates             = false;

            form.response              = '';

            form.fields                = [];

            form.fields[form.id]       = [];

            form.inputTypes            = ['tel', 'email'];





        // Do no re-initialize if already has been

        if ( $form.data('validateForm') ) { return false; }





        /*=======================================

        =            Private Methods            =

        =======================================*/





        /**

         * Initialize method - called straight away by jQuery when plugin is called

         * 

         */

        var init = function()

        {



            // Return if already initialized

            if ( $form.data('validateForm') ) { return; }



            // Merge user settings with defaults

            form.settings = $.extend({}, defaults, options);



            fieldSuccessFunction = (typeof form.settings.onFieldSuccess) == 'function' ? true : false;



            // Does we need to check for catpcha?

            if ( typeof form.settings.hasCaptcha == 'undefined' )

            {

                form.settings.hasCaptcha = ( $form.find(form.settings.captchaWrapper).length > 0 ) ? true : false;

            }



            // Update hidden field values

            updateHiddenFields();

            

            // Get all required fields and populate attributes

            getRequiredFields();



            // Watch for the form to be submitted

            handleFormSubmission();

            



            if ( debugMode() && typeof console.group == 'function' )

            {

                console.group('FormValidation v2.7.0');

                console.log('Called on: #' + form.id);

                

                if ( localStorageAvailable() )

                {

                    console.log('Channel: ' + localStorage.local_channel);

                    console.log('Referrer: ' + localStorage.local_referrer);

                }



                console.log('Hidden fields:', getHiddenFieldValues());

                console.log('Required fields:', getFields());

                console.groupEnd();

            }



        }; // end form init blud





        // If input has a recognised class instead of using the new input types

        var hasLegacyClass = function(fieldClass) 

        {

            for (var i = 0; i < form.inputTypes.length; i++) 

            {

                if ( fieldClass.indexOf( form.inputTypes[i] ) > 0 ) 

                {

                    return form.inputTypes[i];

                    break;

                }

            }

            return false;

        }



        // Focus form to first error field

        var focusErrors = function() 

        {

           $('html, body').animate({

                scrollTop: $form.find('.' + form.settings.errorClass + ':first').offset().top

           }, form.settings.scrollTime);

        }



        // Determine the validation method (custom or built in) and get result

        var getValidationMethod = function(field) {

            

            var result = { valid: false, message: field.errorMessage },

                customValidation = form.settings.customValidation[field.name];



            if (typeof customValidation == 'function') 

            {

                var output    = customValidation.call(form, field, field.el.val(), result);

                    result    = { valid: output, result: result };

                    result    = ( typeof output == 'object' ) ? output : result;

            }

            else 

            {

                result = validateField(field);

            }



            var customEvent = form.settings.events[field.name + '.' + ((result.valid) ? 'success' : 'error') ];



            if ( typeof customEvent == 'function' )

            {

                customEvent.call(form, field, field.el.val());

            }



            return result;



        }



        // Update the row class depending on success/failure of the validation

       var checkFieldStatus = function(field) 

        {   

            // If there is a custom validation method for this field use that - otherwise use the default

            var result = getValidationMethod(field); 



            if ( !result.valid ) 

            {

                // If validation fails

                addError( field, result.message );

            } 

            else 

            {

                // If validation valid 

                addSuccess( field, field.successMessage );

            }



            return result;



        }



        /**

         * Like were never there...

         * @param  {[type]} field [description]

         * @return {[type]}       [description]

         */

        var revertFieldState = function(field) 

        {



            field.row.removeClass(form.settings.errorClass)

                .removeClass(form.settings.successClass)

                .removeClass('required');

            field.el.off();

        }



        // Add an error class to the row

        var addError = function(field, message)

        {

            field.valid = false;

            updateFieldState(field, message);

        }



        // Add a success class to the row

       var addSuccess = function(field, message) 

        { 

            field.valid = true;

            updateFieldState(field, message);

        }



        // Alias function for adding an error/success class

        var updateFieldState = function(field, message) 

        {



            var settings     = form.settings,

                $row         = field.row,

                $helper      = $row.find(settings.helper),

                $helper      = ( $helper.length > 0 ) ? $helper : false,

                removeClass  = ( field.valid ) ? settings.errorClass : settings.successClass,

                addClass     = ( !field.valid ) ? settings.errorClass : settings.successClass;



            $row.removeClass(removeClass).addClass(addClass);



            if(field.valid && fieldSuccessFunction) {

                form.settings.onFieldSuccess.call(form, field); 

            }

            

            if ( $helper ) { $helper.html(message); }



        }

        

        // Validate the field - based on what type of form element

        var validateField = function(field) 

        {

            var $field    = field.el,

                result    = { valid: false, message: field.errorMessage },

                value     = $field.val(),

                rules     = field.rules;



            switch ( field.type )

            {

                case 'radio':

                    result.valid = isInputChecked(field);

                    break;

                case 'checkbox':

                    result.valid = isInputChecked(field);

                    break;

                case 'email':

                    var empty = (value == '') ? true : false;

                    if ( !empty ) {

                        result.valid  = emailCheck(value);

                        result.message = form.settings.emailErrorMessage;

                    }

                    break;

                default:

                    result.valid = (value != '') ? true : false;

                    break;

            }

            if ( field.rules != false ) 

            {

                var pattern = new RegExp(field.rules);

                result.valid = pattern.test(value);

            }

            return result;

        }



        var isInputChecked = function(field)

        {

            var checkedInputs = [];

            $.each(field.el, function(k, input) {

                var $input = field.row.find(input)[0];

                checkedInputs.push(($input.checked) ? true : false);

            });

            return ($.inArray(true, checkedInputs) != -1) ? true : false;

        }



        var captchaCheck = function($form) 

        {

            // a pessimist is never disapointed

            var valid = false;



            var captchaField = getFieldAttributes( $form.find(form.settings.captchaWrapper) ),

                value        = captchaField.el.val(),

                customEvent  = form.settings.onReadyForCaptcha;



            if ( typeof customEvent == 'function' ) 

            {

                customEvent.call(form, captchaField.row, $form, value);

            }



            if ( value == '' || value.length < 4 )

            {

                addError(captchaField, form.settings.captchaErrorMessage);

            }

            else if ( value.length > 4 )

            {

               valid = submitForm();

            }



            if ( !valid && value != '' )

            {

                addError(captchaField, form.settings.captchaErrorMessage);

            }



            return valid;



        }



        // Ajax call to /cms/formmail/ to send the values -

        // returns false if captcha is required and incorrect

        var submitForm = function() 

        {

            var valid = false;

            var _self = this;



            $.ajax({

                url: $form.attr('action'),

                method: 'POST',

                data: $form.serialize(),

                async: false,

                success: function(response) 

                {

                    form.response = $(form.settings.response, response);

                    // If the response block (index block) doesn't say 'Authentication Failure'

                    // the form submission was successful and the data has been sent through

                    

                    if ( form.response && form.response.html().indexOf('Authentication Failure') == -1 ) 

                    {

                        valid = true;

                        form.settings.done.call(this, this.$el)

                    }

                },

                error: function(response)

                {

                    if ( debugMode() )

                    {

                        console.error('Form Ajax Error', response);

                    }

                }

            });

            

            return valid;

        }   



        

        var redirectTo = function($form)

        {

            var $redirect       = $form.find('input[name="redirect"]'),

                pathname        = window.location.pathname,

                search          = window.location.search,

                delimiter       = ( search.indexOf('?') != -1 ) ? '&amp;' : '?';



            window.location = $redirect.val() + search + delimiter + 'from=' + pathname;

        }



        var getQuery = function(param)

        {



            var search = window.location.search;



            if ( search.indexOf(param) == -1 ) return false;



            var query = search.split(param).slice(1).join(param).split('=')[1];



            if ( query.indexOf('&') != -1 )

            {

                query = query.split('&')[0];

            }



            return query;

        }



        var updateHiddenFields = function()

        {



            $form.find('input[name="url"]').val(window.location.pathname);



            updatePPCFields();



        }



        var getHiddenFieldValues = function()

        {



            var hiddenFieldValues = [];



            $form.find('input[type="hidden"], input.hidden').each( function() {



                var key   = $(this).attr('name'),

                    value = $(this).attr('value');



                hiddenFieldValues[key] = value;



            });



            return hiddenFieldValues;



        }



        var updatePPCFields = function()

        {

            if(localStorageAvailable()){

                //if privacy allows us update the fields

                $form.find('input[name="'+ form.settings.channelInput + '"]').attr('value', localStorage.local_channel);

                $form.find('input[name="'+ form.settings.referrerInput + '"]').attr('value', localStorage.local_referrer);

            }

            else {

                //if privacy allows us update the fields

                $form.find('input[name="'+ form.settings.channelInput + '"]').attr('value', 'Privacy Blocking');

                $form.find('input[name="'+ form.settings.referrerInput + '"]').attr('value', 'Privacy Blocking');

            }

            

            // update device field

            var device = 

            ( typeof isDesktop != 'undefined' && typeof isMobile != 'undefined' )  ? (isMobile) ? 'Mobile' : (isDesktop) ? 'Desktop' : 'Tablet' : 'Desktop';

            $form.find('input[name="'+ form.settings.deviceInput + '"]').attr('value', device);

        }



        var getErrorMessage = function(label, name) 

        {

            // Use default message unless a custom one is defined

            var message = label.text() + ' is required';

            if (typeof form.settings.errorMessages[name] != 'undefined') 

            {

                message = form.settings.errorMessages[name];

            }

            return message;

        }



        var getSuccessMessage = function(label, name) 

        {

            // If field has a custom success message or use default

            var message = 'Success';

            if ( typeof form.settings.successMessages[name] != 'undefined' )  

            {

                message = form.settings.successMessages[name];

            }

            return message;

        }



        var debugMode = function()

        {

            var hostname = window.location.hostname;

            if (typeof form.settings.debugMode == 'undefined' ) 

            {

                return (hostname.indexOf('.conscious.co.uk') != -1 && hostname.indexOf('www.') == -1 && hostname.indexOf('localhost') == -1 );

            }

            return (typeof(console) == 'object' && typeof console.groupCollapsed == 'function') || form.settings.debugMode;

        }



        var getFieldRow = function(key)

        {

            var $row = $form.find('[name="'+ key +'"]');

            if ( $row.length > 0 ) 

            { 

                return $row.closest('.row');

            }

            console.error('No row found in #' + form.id + ' with name="' + key + '"');

            return key;

        }



        var getFieldAttributes = function(row)

        {



            if ( typeof row == 'string' )

            {

                row = getFieldRow(row);

            }



            if ( row.name ) { return row; }



            if ( typeof row != 'object' )

            {

                console.error('Unable to determine \''+ row +'\' row attributes');

                return false;

            }



            var label          = row.find('label').first(),

                el             = row.find('[name]'),

                name           = el.attr('name'),

                element        = el[0].localName,

                type           = el[0].type,

                rules          = (typeof el.attr('pattern') != 'undefined') ? el.attr('pattern') : false,

                errorMessage   = getErrorMessage(label, name),

                successMessage = getSuccessMessage(label, name),

                valid          = false;



            var attributes     =  {

                row            : row,

                label          : label,

                el             : el,

                name           : name,

                element        : element,

                type           : type,

                rules          : rules,

                errorMessage   : errorMessage,

                successMessage : successMessage,

                valid          : valid

            };



            // Let the user be able to add field model attributes

            var fieldAttributes = form.settings.setFieldAttributes;



            if ( typeof fieldAttributes == 'function' ) 

            {

                attributes = $.extend( {}, attributes, fieldAttributes.call(form, row) );

            }



            return attributes;



        }



        var getRequiredFields = function()

        {   

            // reset the required fields 

            form.fields[form.id] = [];



            // Loop through all required rows and build array of object models for each field

            $form.find('.required').each( function() {

                

                addField( $(this) );        

            

            });



        }



        var watchField = function(field)

        {



            if ( typeof field != 'object' ) { return false; }



            if ( field.name != 'captcha' )

            {



                var $field = field.el;



                // If the field type is an input or textarea validate on keyup

                if ( field.element == 'input' &&

                     field.type != 'checkbox' &&

                     field.type != 'radio' || 

                     field.element == 'textarea'

                 )

                {

                    $field.on('keyup', function(e) 

                    {

                        if ( e.keyCode != '9' )

                        {

                            setTimeout(function() {

                                checkFieldStatus(field);

                            }, 500);

                        }

                    });

                } 

                else

                {   

                    // Other wise validate the field when it's value is changed

                    $field.on('change', function(e) 

                    {

                        setTimeout(function() {

                            checkFieldStatus(field);

                        }, 500);

                    });

                }



                // Validate all fields when exiting the input

                $field.on('blur', function(e) 

                {

                    setTimeout(function() {

                        checkFieldStatus(field);

                    }, 500);

                });



            }



        }



        var fieldsAreValid = function()

        {



            var validFields          = [];

            getRequiredFields();

            

            $.each(getFields(), function(k, field) {

                checkFieldStatus(field);

                validFields.push(field.valid);

            });





            return $.inArray(false, validFields) == -1;

        }



        var handleFormSubmission = function()

        {

            // set handler to validate the form

            $form.on('submit', function(event) 

            {



                event.preventDefault();



                var $thisForm            = $(this);



                // If there is at least one error

                if ( !fieldsAreValid() ) 

                {

                    var onError = form.settings.onError;



                    if ( typeof onError == 'function' )

                    {



                        form.settings.onError.call(form, $thisForm, form, getFields()); 

                    }

                    

                    form.validates = false;



                    if(form.settings.scrollToFirstError) focusErrors();

                }



                if ( fieldsAreValid() ) 

                {



                    if ( form.settings.hasCaptcha )

                    {

                        form.validates = captchaCheck($thisForm);

                    }

                    else

                    {

                        form.validates = true;

                    }

                }



                // If form validates

                if ( form.validates ) 

                {     

                    var $submitForm = $form.find('input[type="submit"]');



                    if ( $submitForm.length > 0 && form.settings.sendingText )

                    {

                        $submitForm.attr('value', form.settings.sendingText);

                    }



                    var onSuccess = form.settings.onSuccess;



                    if ( typeof onSuccess == 'function' )

                    {

                        // Billpay and events have 'form' as the second param so keep this

                        form.settings.onSuccess.call(form, $thisForm, form, getFields()); 

                    }

                    else

                    {

                        // if it has captcha then the values have already been sent to formmail so we just 

                        // send them off to the right location

                        

                        if ( form.settings.hasCaptcha ) 

                        {      



                            if ( !form.settings.submitViaAjax )

                            {

                                redirectTo($thisForm);

                            }

                            else

                            {

                                $('html, body').animate({

                                    scrollTop: $thisForm.offset().top

                                }, form.settings.scrollTime);

                                $thisForm.html(form.response.html());

                            }

                        }

                        // if there is no captcha then the values havent been set so we will just 

                        // submit the form organically

                        else if ( !form.settings.hasCaptcha )

                        {

                            submitForm();

                            redirectTo($thisForm);

                        }



                    }

            

                }

            

            });

        }



        var getFields = function(id)

        {

            var id = ( !id ) ? form.id : id;

            return form.fields[id];

        }



        var addField = function(row) 

        {

            // Create that object of required fields and it's information

            var field = getFieldAttributes(row);



            form.fields[form.id].push(field);



            if ( form.settings.realtime )

            {

                watchField(field);

            }



            return field;



        }



        var removeField = function(row)

        {

            var field  = getFieldAttributes(row);

            form.fields[form.id] = form.fields[form.id].filter( function(f) {

                return ( field.name == f.name ) ? false : true;

            });

            revertFieldState(field);

        }





        /*======================================

        =            Public Methods            =

        ======================================*/



        // Add an error class to the row

        el.addError = function(field, message)

        {

            field.valid = false;

            addError(field, message);

        }



        // Add a success class to the row

        el.addSuccess = function(field, message) 

        { 

            field.valid = true;

            addSuccess(field, message);

        }



        el.getFieldAttributes = function($row)

        {

            return getFieldAttributes($row);

        }

        

        el.getFields = function(id)

        {

            return getFields(id);

        }



        el.addField = function(field) 

        {

            var field = addField(field);

            field.row.addClass('required');

        }



        el.removeField = function(field)

        {

            removeField(field);

        }





        // short cut for adding multiple with an array

        el.addFields = function(fields) {



            for ( var key in fields )

            {

                el.addField(fields[key]);

            }



        }



        // short cut for removing multiple with an array

        el.removeFields = function(fields) {

            for ( var key in fields )

            {

                el.removeField(fields[key]);

            }

        }



        el.destroy = function()

        {



            $.each(getFields(), function(index, el) {

                $(el).off();

            });

            $form.off('submit');

            $form.removeData('validateForm', this);

        }



        el.reload = function(settings)

        {

            if ( settings !== undefined ) { options = settings; }

            el.destroy();

            init();

            // store reference to self in order to access public functions later

            $form.data('validateForm', this);

        }



        // see if field is valid

        // @param id: id of the input to validate

        // @return Boolean of if valid or not

        el.validateField = function(id)

        {   

            var field = getFieldAttributes(id);

            return checkFieldStatus(field).valid;

        }

        

        // Run initializer

        init();



        $form.data('validateForm', this);



        return this;



    };



    

})(jQuery, window, document);

$(document).ready(function () {

   // Hide cookie notification panel if seen 

   var cccShown=getCookie("cookie_option_shown");



   var prefSet=getCookie("privacy_cookie_status");



   if ( typeof addGTM == typeof Function ) {

      addGTM()

      console.log("addGTM defined and called");

   }

   else {

      console.log("addGTM not defined");

   }



   if ( prefSet.indexOf('allowGA') != -1 ) {

       if ( typeof dataLayer != 'undefined') {

         dataLayer.push({'event': 'ga-cookies-consented'});

       } 

   }



   if ( prefSet.indexOf('allowTP') != -1 && typeof dataLayer != 'undefined') {

      dataLayer.push({'event': 'tp-cookies-consented'});

   }



   if ( cccShown == 'active' ||

        prefSet ||

        window.location.pathname=='/site/help/privacy_help.html' ||

        window.location.pathname=='/site/help/cookie_details.html')  {

      $('#cookies').hide();

      $('#ccc-notify').hide();

      $('body').addClass('cookie-bar-hidden');

   }



   else {

      $('#cookies').hide();

      $('#ccc-notify').show(); 

      $('#ccc-notify').removeClass('hidden');

      $('body').addClass('cookie-bar-visible');

   }



   $('[data-trigger="cookies"]').on('click', function(event) {

        event.preventDefault();

        manageSettings();

   });



   // Handle framesets

   if ( $("body").hasClass('adminMode') || prefSet.indexOf('allowTP') != -1 ) {

      loadFrames();

   }



});



function dismissCookieBar() {

  setCookie("cookie_option_shown",'active',"","/");

  $('body').removeClass('cookie-bar-visible');

  $('body').addClass('cookie-bar-hidden');

  $('#ccc-notify').hide(); 

} 



function dismissCookiePref() {

  setCookie("cookie_option_shown",'active',"","/");

  $('#cookies').hide();

}



function manageSettings(opener) {

   // Get the page control values updated

   //_CMSTrackingEnabled();



   if(opener){  $('#'+opener).hide() }; 



   var cookPref=getCookie("privacy_cookie_status");



   if ( $('#cookies').attr('data-cms-custom-intro') &&

        $('#cookies').attr('data-cms-custom-intro') == '1' ) {

      get_custom_intro();

      $('#cookies').attr('data-cms-custom-intro','set');

   }



   if ( cookPref.indexOf('allowGA') != -1 ) {

      $('#cms-google-analytics-cookies').attr('checked',true);

      $('#cms-google-analytics-cookies').prop('checked',true);

   }

   else {

      $('#cms-google-analytics-cookies').attr('checked',false);

      $('#cms-google-analytics-cookies').prop('checked',false);

   }



   if ( cookPref.indexOf('allowTP') != -1 ) {

      $('#cms-third-party-cookies').attr('checked',true);

      $('#cms-third-party-cookies').prop('checked',true);

   }

   else {

      $('#cms-third-party-cookies').attr('checked',false);

      $('#cms-third-party-cookies').prop('checked',false);

   }



  $('#cookies').show();

  $('#overlay').fadeIn();



  $('#overlay').on('click', function(event) {

      event.preventDefault();

      return false;

  });



  $('#cookies').removeClass('hidden');



  $('#cookies').css('display', 'block');



  $('html, body').animate({

    scrollTop: ($('#cookies').offset().top)

   },500); 



}



function get_custom_intro() {

      $.ajax( {     url : '/cms/help/custom-cookies-intro?format=json',

                context : document.body,

               dataType : 'json',

                   type : 'GET',

                  async : false,

                success : function(data){

                            // Getting as raw HTML - change dataType and url to see this

                            if ( typeof data != 'object' ) {

                               var parsedHTML = $.parseHTML(data);

                               // So to help understand this. /cms/help is a fixed format

                               // when parsed into the DOM - an array of DOM nodes is the result

                               // item 5 is always the title

                               $('#ccc-title').html(parsedHTML[5].innerHTML);

                               // items 6 - n-1 where n = the number of NODE elements 

                               // contains the content_data text.

                               var tmp = '';

                               for (i=6;i<parsedHTML.length-1; i++) {

                                  tmp +=parsedHTML[i].outerHTML;

                               }

                               $('#ccc-intro').html(tmp);

                           }



                           else {

                              $('#ccc-title').html(data.article.title);

                              $('#ccc-intro').html(data.article.data);

                           }



                            

                         }

              }

            );

}



function manageCookies(action) {



   var ckTP,ckGA='';

   ckTP = ( $('#cms-third-party-cookies').prop('checked') );

   ckGA = ( $('#cms-google-analytics-cookies').prop('checked') );



   var cookiePref='';



   var oldSettings = '';

   if (  getCookie("privacy_cookie_status") ) {oldSettings = getCookie("privacy_cookie_status") }



   if ( action == 'enable' ) {cookiePref='allowTP allowGA'}

   else if ( action == 'disable' ) {cookiePref='denyTP denyGA'}

   else {

       if ( ckTP == 'checked' || ckTP == true ) { cookiePref+='allowTP'}else{cookiePref+='denyTP'}

       if ( ckGA == 'checked' || ckGA == true ) { cookiePref+=' allowGA'}else{cookiePref+=' denyGA'}

   }



   console.log(" ThirdParty : "+ckTP+' GA : '+ckGA+' Pref Cookie '+cookiePref);

   var now = new Date();

   var expires = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 365 * 2);



   setCookie("privacy_cookie_status",cookiePref,expires,"/");

   clearCookie("privacy_preference");



   var randomnumber=Math.floor(Math.random()*1000000);



   var marker = '/global/images/menu/blank.gif?'+cookiePref+'&dt='+randomnumber;



   // Log settings API4

   $.ajax( { url : marker } );



   if ( typeof addGTM == typeof Function ) {addGTM()}



   if ( typeof dataLayer == 'undefined' ) {

      $('#ccc-notify').append('<img src="'+marker+'"/>');      

   }



  

   // Enable Universal analytics if allowed to

   if ( cookiePref.indexOf('allowGA') != -1 ) {

      if ( !oldSettings || oldSettings.indexOf('allowGA') == -1 ) {



         if ( typeof dataLayer != 'undefined') {

            dataLayer.push({'event': 'ga-cookies-consented'});

         }

         else {

            // Old style mostly API3 sites - do a reload

            window.location.reload();

         }



      }

   }



   // Enable TP scripts if allowed to and not already enabled

   if ( cookiePref.indexOf('allowTP') != -1 ) {

      if ( !oldSettings || oldSettings.indexOf('allowTP') == -1 ) {

         if ( typeof dataLayer != 'undefined' ) {

            dataLayer.push({'event': 'tp-cookies-consented'});

         }

      }

   }



   // Turning some cookies off?

   if ( cookiePref.indexOf('deny') != -1 ) {

      removeCookies();

   }



   // Get the page control values updated

   //_CMSTrackingEnabled();





   $(".cms-cookie-reload").each( function() {

                                    var tmp= $(this).html();

                                    $(this).html('');

                                    $(this).html(tmp);

                                  } );



   $('#cookies').hide();

   $('#ccc-notify').hide();

   $('#overlay').fadeOut();



   $('#overlay').on('click', function(event) {

      $('.modal').trigger('closeModal');

   });



   // Handle framesets

   if ( $("body").hasClass('adminMode') || cookiePref.indexOf('allowTP') != -1 ) {

      loadFrames();

   }



}



function loadFrames() {

   console.log('loadFrames called : count '+$('iframe').not('[data-cms-cookie-src=""]').length );

   $('iframe').not('[data-cms-cookie-src=""]').each( function() {

     var src= $(this).attr('data-cms-cookie-src');

     console.log('Frame found - setting src to '+src);

     if ( src ) {

        $(this).attr('src',src);

     }

   } );

}



function removeCookies(protectedCookies) {

    var cookPref=getCookie("privacy_cookie_status");



    var ckTP,ckGA='';

    ckGA=( cookPref.indexOf('allowGA') != -1 ?true:false);

    ckTP=( cookPref.indexOf('allowTP') != -1 ?true:false);



    console.log('In remove cookies : GA Allowed? '+ckGA+' Third-party allowed ? '+ckTP);

 

    // protectedCookies should be an array

    if ( protectedCookies &&

         !protectedCookies.constructor=== Array ) {

        console.log( 'ERROR : You must pass protectedCookies as an associative array');

    }    



    // if it is not passed we look for a tag data-cms-essentials

    if (!protectedCookies) {

       protectedCookies=$('[data-cms-essentials]').attr('data-cms-essentials');

       console.log('Essentials : '+protectedCookies);

       var tmp=protectedCookies.split(' ');

       protectedCookies=new Array(); 

       for ( i=0; i<tmp.length; i++ ) {

          //var key = "'"+tmp[i]+"'";

          //console.log(key);

          protectedCookies[tmp[i]]='1';

       }



       //console.log('Cookies Array? '+Object.keys(protectedCookies).length);      

    }



    var cookies = document.cookie.split("; ");



    for (var c = 0; c < cookies.length; c++) {



        var d = window.location.hostname.split(".");



        var cookName=cookies[c].split(";")[0].split("=")[0];

        //console.log(cookName);

        if ( protectedCookies[cookName] ) {

           console.log('Protected Cookie : '+cookName);

           continue;

        }



// Is this a google cookie and are we allowed to set them?

        if ( ckGA ) {

           if ( cookName.startsWith('_ga') ||

                cookName.startsWith('_gid') ||

                cookName.startsWith('_utm') ) {

              console.log('Protected Analytics Cookie : '+cookName);

              continue;

           }

        }



// Is this a Third party cookie and are we allowed to set them?



        if ( ckTP ) {

           if ( !( cookName.startsWith('_ga') ||

                   cookName.startsWith('_gid') ||

                   cookName.startsWith('_utm') ) ) {

              console.log('Protected Third-party Cookie : '+cookName);

              continue;

           }



        }



        console.log( 'Cookie will be trashed : '+cookName);



        while (d.length > 0) {



            var cookieBase = encodeURIComponent(cookName) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';

            var p = location.pathname.split('/');

            document.cookie = cookieBase + '/';

            while (p.length > 0) {

                document.cookie = cookieBase + p.join('/');

                p.pop();

            };

            d.shift();

        }

    }

}

