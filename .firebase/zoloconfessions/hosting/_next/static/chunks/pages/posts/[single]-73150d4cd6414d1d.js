(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{2449:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=s(n(7294)),o=s(n(5697)),i=n(6674),c=n(7990);function s(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=(0,i.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1),m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(m,e);var t,n,o,s=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n,r=d(m);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(e=n)&&("object"===a(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function m(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,m),s.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById(c.COMMENT_COUNT_SCRIPT_ID)?p():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),c.COMMENT_COUNT_SCRIPT_ID,e.body)}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)(c.COMMENT_COUNT_SCRIPT_ID,e.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config),n=e.children,o=e.className,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["shortname","config","children","className"]);return r.default.createElement("span",l({},i,{className:"".concat(c.COMMENT_COUNT_CLASS).concat(o?" ".concat(o):""),"data-disqus-identifier":t.identifier,"data-disqus-url":t.url}),n)}}],u(m.prototype,n),o&&u(m,o),m}(r.default.Component);t.CommentCount=m,m.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},5890:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=c(n(7294)),o=c(n(5697)),i=n(7990);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(c,e);var t,n,o,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n,r=f(c);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(e=n)&&("object"===s(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function c(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,c),i.apply(this,arguments)}return n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,o=(e.commentId,e.showMedia,e.showParentComment,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["width","height","commentId","showMedia","showParentComment"]));return r.default.createElement("iframe",a({},o,{src:this.getSrc(),width:t,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}],l(c.prototype,n),o&&l(c,o),c}(r.default.Component);t.CommentEmbed=d,d.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},d.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},4811:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=s(n(7294)),o=s(n(5697)),i=n(6674),c=n(7990);function s(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(p,e);var t,n,o,s=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n,r=d(p);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(e=n)&&("object"===a(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function p(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,p),s.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById(c.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),c.EMBED_SCRIPT_ID,e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)(c.EMBED_SCRIPT_ID,e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var n=e.getElementById(c.THREAD_ID);if(n)for(;n.hasChildNodes();)n.removeChild(n.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.sso&&(this.sso=e.sso),e.language&&(this.language=e.language),c.CALLBACKS.forEach(function(n){t.callbacks[n]=[e[n]]})}}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["shortname","config"]));return r.default.createElement("div",l({},t,{id:c.THREAD_ID}))}}],u(p.prototype,n),o&&u(p,o),p}(r.default.Component);t.DiscussionEmbed=p,p.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func,sso:o.default.shape({name:o.default.string,button:o.default.string,icon:o.default.string,url:o.default.string,logout:o.default.string,profile_url:o.default.string,width:o.default.string,height:o.default.string})}).isRequired}},4573:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Recommendations=void 0;var r=s(n(7294)),o=s(n(5697)),i=n(6674),c=n(7990);function s(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(p,e);var t,n,o,s=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n,r=d(p);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(e=n)&&("object"===a(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function p(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,p),s.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.language=e.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(c.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),c.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,i.removeScript)(c.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(e){window.DISQUS_RECOMMENDATIONS=void 0}var t=window.document.getElementById(c.RECOMMENDATIONS_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,i.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["shortname","config"]));return r.default.createElement("div",l({},t,{id:c.RECOMMENDATIONS_ID}))}}],u(p.prototype,n),o&&u(p,o),p}(r.default.Component);t.Recommendations=p,p.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},7990:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CALLBACKS=t.RECOMMENDATIONS_SCRIPT_ID=t.RECOMMENDATIONS_ID=t.COMMENT_EMBED_HEIGHT=t.COMMENT_EMBED_WIDTH=t.COMMENT_COUNT_SCRIPT_ID=t.COMMENT_COUNT_CLASS=t.EMBED_SCRIPT_ID=t.THREAD_ID=void 0,t.THREAD_ID="disqus_thread",t.EMBED_SCRIPT_ID="dsq-embed-scr",t.COMMENT_COUNT_CLASS="disqus-comment-count",t.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr",t.COMMENT_EMBED_WIDTH=420,t.COMMENT_EMBED_HEIGHT=320,t.RECOMMENDATIONS_ID="disqus_recommendations",t.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr",t.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},3944:function(e,t,n){"use strict";Object.defineProperty(t,"qw",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var r=n(2449),o=n(5890),i=n(4811),c=n(4573);r.CommentCount,o.CommentEmbed,i.DiscussionEmbed,c.Recommendations},6674:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach(function(e){return e.remove()})},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,c=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,i)},t),c&&e.apply(o,i)}},t.isReactElement=s,t.shallowComparison=function e(t,n){var r,o=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var a=r.value;if("object"===i(t[a])){if(e(t[a],n[a]))return!0}else if(t[a]!==n[a]&&!s(t[a]))return!0}}catch(l){o.e(l)}finally{o.f()}return!1};var r,o=(r=n(7294))&&r.__esModule?r:{default:r};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some(function(e){return o.default.isValidElement(e)})}},3969:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[single]",function(){return n(3024)}])},4062:function(e,t,n){"use strict";var r=n(5893),o=n(6626),i=n(4996),c=n(1664),s=n.n(c);let{blog_folder:a}=o.Xd,l=e=>{let{post:t,className:n}=e;return(0,r.jsx)("div",{className:n,children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("ul",{className:"flex items-center space-x-4",children:t.frontmatter.categories.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)(s(),{className:"text-primary",href:"/categories/".concat(e.toLowerCase()),children:e})},t))}),(0,r.jsx)("p",{className:"my-4",children:(0,i.v)(t.frontmatter.date)}),(0,r.jsx)("h2",{className:"h3 mb-2 font-normal",children:(0,r.jsx)(s(),{href:"/".concat(a,"/").concat(t.slug),className:"block",children:t.frontmatter.title})}),(0,r.jsxs)(s(),{className:"btn-link mt-7 inline-flex items-center hover:text-primary",href:"/".concat(a,"/").concat(t.slug),children:["Continue Reading",(0,r.jsx)("svg",{className:"ml-1",width:"22",height:"11",viewBox:"0 0 16 8",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M15.3536 4.35355c.1952-.19526.1952-.51184.0-.7071L12.1716.464467C11.9763.269205 11.6597.269205 11.4645.464467c-.1953.195262-.1953.511845.0.707103L14.2929 4 11.4645 6.82843c-.1953.19526-.1953.51184.0.7071C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553l3.182-3.18198zM-.437114e-7 4.5H15v-1H.437114e-7l-.874228e-7 1z"})})]})]})})};t.Z=l},4113:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893),o=n(7294);let i=e=>{let{title:t,children:n,className:i}=e,[c,s]=(0,o.useState)(!1);return(0,r.jsxs)("div",{className:"accordion border border-border rounded ".concat(i),children:[(0,r.jsxs)("button",{className:"relative block w-full bg-[#2e3b47] px-4 py-3.5 text-left text-dark",onClick:()=>s(!c),children:[t,(0,r.jsx)("svg",{className:"absolute right-4 top-1/2 m-0 -translate-y-1/2 w-4 h-4 ".concat(c&&"rotate-180"),version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512.011 512.011",style:{enableBackground:"new 0 0 512.011 512.011"},xmlSpace:"preserve",children:(0,r.jsx)("path",{fill:"#fff",d:"M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"})})]}),(0,r.jsx)("div",{className:"px-4 py-3.5 ".concat(!c&&"hidden"),children:n})]})};var c=n(1664),s=n.n(c);let a=e=>{let{href:t,type:n,rel:o,children:i}=e;return(0,r.jsx)(s(),{href:t,target:"_blank",rel:"noopener noreferrer ".concat(o?"follow"===o?"":o:"nofollow"),className:"btn me-4 mb-4 border-none text-sm hover:bg-primary ".concat("outline"===n?"btn-outline-primary":"btn-primary"),children:i})};var l=n(8189),u=n(6671);let f=e=>{let{children:t,language:n}=e;return(0,r.jsx)(l.Z,{language:n,style:u.Vg,children:t})};var d=n(640);n(1496);var p={Button:a,Accordion:i,Youtube:function(e){let{id:t,title:n,...o}=e;return(0,r.jsx)("div",{className:"rounded overflow-hidden",children:(0,r.jsx)(d.Z,{id:t,title:n,...o})})},Video:function(e){let{title:t,width:n=500,height:o="auto",src:i,...c}=e;return(0,r.jsxs)("video",{className:"rounded overflow-hidden",width:n,height:o,controls:!0,...c,children:[(0,r.jsx)("source",{src:i.match(/^https?:/)?i:"/videos/".concat(i),type:"video/mp4"}),t]})},Tab:function(e){let{children:t}=e;return(0,r.jsx)("li",{className:"tab-item my-0 hidden",children:t})},Tabs:function(e){let{children:t}=e,n=(0,o.useRef)(null),i=(e,t)=>{let r=[...e.currentTarget.parentElement.children],o=[...n.current.children],i=o.find(e=>!e.classList.contains("hidden")),c=r.find(e=>e.classList.contains("active"));i!==o[t]&&(c.classList.remove("active"),e.currentTarget.classList.add("active"),i.classList.add("hidden"),o[t].classList.remove("hidden"))};return(0,o.useEffect)(()=>{[...n.current.children][0].classList.remove("hidden")},[]),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("ul",{className:"mb-0 flex list-none items-center space-x-4 pl-0",children:t.map((e,t)=>(0,r.jsx)("li",{className:"tab-link m-0 cursor-pointer rounded px-8 py-3 text-sm ".concat(0===t&&"active"),onClick:e=>i(e,t),children:e.props.name},t))}),(0,r.jsx)("ul",{className:"tab-items mt-1 mb-0 list-none rounded bg-[#242e38] p-6",ref:n,children:t})]})},Notice:function(e){let{type:t,children:n}=e;return(0,r.jsxs)("div",{className:"notice ".concat(t," relative rounded mt-8"),children:[(0,r.jsxs)("div",{className:"absolute h-[30px] -top-[30px] z-10 left-0 p-3 flex items-center",children:[(0,r.jsx)("svg",{width:"16px",height:"16px",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fill:"#fff",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})}),(0,r.jsx)("p",{className:"my-0 text-dark ml-1.5 capitalize",children:t})]}),(0,r.jsx)("div",{className:"p-3",children:n})]})},Gist:function(e){let{src:t}=e;return(0,r.jsx)("iframe",{width:"100%",height:"350",src:"data:text/html;charset=utf-8,\n        <head><base target='_blank' /></head>\n        <body><script src='".concat(t,"'></script>\n        </body>\n      ")})},Code:f}},4996:function(e,t,n){"use strict";n.d(t,{v:function(){return o}});var r=n(722);let o=(e,t,n)=>(0,r.formatInTimeZone)(e,n||"America/New_York",t||"dd MMM yyyy")},3024:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return w},default:function(){return _}});var r=n(5893),o=n(6626),i=n(4996);let c=e=>{let t=0,n=/\w/,r=e.split(" ").filter(e=>(e.includes("<img")&&(t+=1),n.test(e))).length,o=4*t,i=0,c=12;for(;t;)i+=c,c>3&&(c-=1),t-=1;let s=Math.ceil(((r-o)/(275/60)+i)/60);return s<10?s<2?"0"+s+" Min read":"0"+s+" Mins read":s+" Mins read"},s=(e,t,n)=>{let r=[];e[0].frontmatter.categories.length>0&&(r=e[0].frontmatter.categories);let o=t.filter(e=>r.find(t=>e.frontmatter.categories.includes(t))),i=[...new Set([...o])],c=i.filter(e=>e.slug!==n);return c};var a=n(1360),l=n(4113),u=n(3944),f=n(8093),d=n(5675),p=n.n(d),m=n(1664),h=n.n(m),y=n(4492),b=n(4062);let v=e=>{let{post:t,mdxContent:n,slug:d,posts:m}=e,{frontmatter:v,content:g}=t[0],{description:w,title:_,date:O,image:S,categories:j}=v;w=w||g.slice(0,120);let x=s(t,m,d);return(0,r.jsx)(y.Z,{title:_,description:w,children:(0,r.jsx)("section",{className:"pt-20 pb-6",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"mx-auto lg:col-10",children:[(0,r.jsxs)(h(),{className:"mb-12 inline-flex items-center text-primary hover:underline",href:"/",children:[(0,r.jsx)("svg",{className:"mr-2",width:"21",height:"16",viewBox:"0 0 21 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M.292892 7.29289c-.3905235.39053-.3905235 1.02369.0 1.41422L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711 8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8 8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107.928932 7.68054.538408 7.04738.538408 6.65685.928932L.292892 7.29289zM21 7H1V9H21V7z",fill:"currentcolor"})}),"Back to Home"]}),(0,r.jsxs)("article",{children:[S&&(0,r.jsx)(p(),{className:"w-full",src:S,height:"500",width:"1000",alt:_,priority:!0}),(0,a.gI)(_,"h1","h2 mt-12"),(0,r.jsxs)("ul",{className:"mt-4 mb-8 text-text",children:[(0,r.jsx)("li",{className:"mb-2 mr-4 inline-block",children:(0,r.jsxs)("ul",{children:[j.map((e,t)=>(0,r.jsx)("li",{className:"inline-block",children:(0,r.jsx)(h(),{href:"/categories/".concat((0,a.lV)(e)),className:"mr-3 text-primary",children:(0,a.OI)(e)})},"category-".concat(t))),"|"]})}),(0,r.jsxs)("li",{className:"mb-2 mr-4 inline-block",children:[(0,r.jsx)("span",{className:"mr-2 inline-block",children:(0,i.v)(O)})," ","|"]}),(0,r.jsx)("li",{className:"mb-2 mr-4 inline-block",children:c(g)})]}),(0,r.jsx)("div",{className:"content text-left",children:(0,r.jsx)(f.R,{...n,components:l.Z})})]}),o.PF.w&&(0,r.jsx)(u.qw,{shortname:o.PF.Q,config:o.PF.settings})]})}),(0,r.jsxs)("div",{className:"pt-12",children:[(0,r.jsx)("h2",{className:"h2 text-center",children:"Related Posts"}),(0,r.jsx)("div",{className:"row mt-12 justify-center",children:x.map((e,t)=>(0,r.jsx)(b.Z,{className:"col-12 mb-6 md:col-4",post:e},"key-"+t))})]})]})})})},g=e=>{let{post:t,mdxContent:n,slug:o,posts:i}=e;return(0,r.jsx)(v,{mdxContent:n,slug:o,post:t,posts:i})};var w=!0,_=g},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,c){if(c!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[664,122,722,438,675,492,774,888,179],function(){return e(e.s=3969)}),_N_E=e.O()}]);