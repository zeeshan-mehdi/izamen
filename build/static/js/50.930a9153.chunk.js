(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[50],{1232:function(e,t,r){"use strict";r.r(t);var n=r(67),a=r(68),i=r(69),s=r(70),c=r(0),o=r(242),l=r.n(o),u=r(252),d=r(259),p=r(238),m=r(21),b=r.n(m),f=r(35),j=r(72),h=r(20),g=(r(340),r(467)),y=r(231),O=r.n(y),v=r(430),x=r(39),w=r(40),N=r.n(w),C=r(2),k=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){var e;return Object(n.a)(this,r),(e=t.call(this)).state={items:[],propertytrends:[],currentPage:1,itemsPerPage:2,loading:!1,title:"",body:""},e.handleClick=e.handleClick.bind(Object(j.a)(e)),e}return Object(a.a)(r,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get(x.a.data.Basicapi+"getAllBlogs",{headers:{"Content-Type":"application/json"}});case 3:(t=e.sent).data.length>0&&(console.log("Got all blogs successfully",t.data),this.setState({items:t.data})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("in try catch while fetching blogs",e.t0.toString());case 10:return e.prev=10,e.next=13,N.a.get(x.a.data.Basicapi+"getAllPropertyTrends",{headers:{"Content-Type":"application/json"}});case 13:(r=e.sent).data.length>0&&(console.log("Got all Property Trends successfully",r.data),this.setState({propertytrends:r.data})),e.next=20;break;case 17:e.prev=17,e.t1=e.catch(10),alert("in try catch while fetching Property trends",e.t1.toString());case 20:case"end":return e.stop()}}),e,this,[[0,7],[10,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(e){var t=this,r=e.target.closest(".pagination-content");r&&r.scrollIntoView(),this.setState({loading:!0}),setTimeout((function(){t.setState({currentPage:Number(e.target.getAttribute("data-page")),loading:!1})}),2e3)}},{key:"render",value:function(){for(var e=this,t=this.state,r=t.items,n=t.currentPage,a=t.itemsPerPage,i=n*a,s=i-a,o=r.slice(s,i).map((function(e,t){var r=new Date(e.created_at).getMonth()+1,n=new Date(e.created_at).getYear()+1900,a=new Date(e.created_at).getDate();return Object(C.jsx)("article",{className:"post",children:Object(C.jsxs)("div",{className:"post-body",children:[Object(C.jsx)("div",{className:"post-author",children:Object(C.jsxs)("div",{className:"post-author-body",children:[Object(C.jsxs)("p",{children:[" ",Object(C.jsx)(h.b,{to:"#",children:e.authorname})," "]}),Object(C.jsxs)("span",{className:"post-date",children:[a,"-",r,"-",n]})]})}),Object(C.jsxs)("h5",{className:"post-title",children:[" ",Object(C.jsx)(h.b,{to:"/blog-single",children:e.title})," "]}),Object(C.jsx)("p",{className:"post-text",children:e.body})]})},t)})),l=[],u=1;u<=Math.ceil(r.length/a);u++)l.push(u);var d=l.map((function(t){var r=e.state.currentPage===t?"active":"";return Object(C.jsx)(c.Fragment,{children:l.length>1?Object(C.jsx)("li",{className:O()("page-item",{active:r}),children:Object(C.jsx)(h.b,{className:"page-link",to:"#","data-page":t,onClick:e.handleClick,children:t})}):""},t)}));return Object(C.jsx)("div",{className:"section posts pagination-content",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsxs)("div",{className:"col-lg-8",children:[!1===this.state.loading?o:Object(C.jsx)(v.a,{}),l.length>1?Object(C.jsxs)("ul",{className:"pagination",children:[l.length>1&&1!==this.state.currentPage?Object(C.jsx)("li",{className:"page-item",children:Object(C.jsx)(h.b,{className:"page-link",to:"#","data-page":this.state.currentPage-1,onClick:this.handleClick,children:Object(C.jsx)("i",{className:"fas fa-chevron-left"})})}):"",d,l.length>1&&this.state.currentPage!==l.length?Object(C.jsx)("li",{className:"page-item",children:Object(C.jsx)(h.b,{className:"page-link",to:"#","data-page":parseInt(this.state.currentPage+1),onClick:this.handleClick,children:Object(C.jsx)("i",{className:"fas fa-chevron-right"})})}):""]}):""]}),Object(C.jsx)("div",{className:"col-lg-4",children:Object(C.jsx)(g.a,{})})]})})})}}]),r}(c.Component),P=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(C.jsxs)(c.Fragment,{children:[Object(C.jsxs)(l.a,{children:[Object(C.jsx)("title",{children:"izameen | Trends & Blogs"}),Object(C.jsx)("meta",{name:"description",content:"#"})]}),Object(C.jsx)(u.a,{}),Object(C.jsx)(d.a,{breadcrumb:{pagename:"Blog List"}}),Object(C.jsx)(k,{}),Object(C.jsx)(p.a,{})]})}}]),r}(c.Component);t.default=P},236:function(e,t,r){"use strict";var n=r(67),a=r(68),i=r(69),s=r(70),c=r(0),o=r(20),l=r(2),u=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"footer-top",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row footer-btn-wrapper",children:[Object(l.jsxs)("div",{className:"col-lg-7 footer-widget",children:[Object(l.jsx)("h4",{children:"Download Our App"}),Object(l.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "})]}),Object(l.jsx)("div",{className:"col-lg-5 col-md-12 footer-widget",children:Object(l.jsxs)("div",{className:"footer-btn",children:[Object(l.jsxs)(o.b,{to:"#",className:"btn-custom-2 grey",children:[" ",Object(l.jsx)("i",{className:"flaticon-playstore"}),"Google Play"]}),Object(l.jsxs)(o.b,{to:"#",className:"btn-custom-2 grey",children:[" ",Object(l.jsx)("i",{className:"flaticon-apple"}),"App Store"]})]})})]})})})}}]),r}(c.Component);t.a=u},238:function(e,t,r){"use strict";var n=r(67),a=r(68),i=r(69),s=r(70),c=r(0),o=r(20),l=(r(236),r(234)),u=r(2),d=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("footer",{className:"acr-footer footer-2",children:[Object(u.jsx)("div",{className:"footer-middle",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-lg-5 col-sm-12 footer-widget",children:[Object(u.jsxs)("div",{className:"footer-logo",children:[" ",Object(u.jsx)("img",{src:l.a,alt:"logo"})," "]}),Object(u.jsx)("p",{children:"IndusLand Realtors"})]}),Object(u.jsxs)("div",{className:"col-lg-2 offset-lg-1 col-sm-4 footer-widget",children:[Object(u.jsx)("h5",{className:"widget-title",children:"Menu"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["                        ",Object(u.jsx)(o.b,{to:"/blog-list",children:"Trends & Blogs"})]}),Object(u.jsxs)("li",{children:["  ",Object(u.jsx)(o.b,{to:"listing-list",onClick:function(){e.props.sendlistingcategory("",!1)},children:"Properties"})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(o.b,{to:"/our-partners",children:"Our Partners Page"})," "]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(o.b,{to:"/services",children:"Our Projects"})," "]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(o.b,{to:"/image-gallery",children:"Our Image Gallery"})," "]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(o.b,{to:"/portfolio",children:"Portfolio"})," "]})]})]}),Object(u.jsxs)("div",{className:"col-lg-2 col-sm-4 footer-widget",children:[Object(u.jsx)("h5",{className:"widget-title",children:"Information"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(o.b,{to:"/contact",children:"Contact Us"})]}),Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/laws-of-the-land",children:"Laws of the Land"})}),Object(u.jsxs)("li",{children:["                        ",Object(u.jsx)(o.b,{to:"/faq",children:"FAQs"})]}),Object(u.jsxs)("li",{children:["                                                ",Object(u.jsx)(o.b,{to:"/glossary",children:"Glossary"})]})]})]})]})})}),Object(u.jsx)("div",{className:"footer-bottom",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-7",children:Object(u.jsxs)("p",{className:"m-0",children:["\xa9 Copyright 2020 - ",Object(u.jsx)(o.b,{to:"#",children:"Invictus 360"})," All Rights Reserved."]})})})})})]})}}]),r}(c.Component);t.a=d},240:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MetaContext=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0));function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=(0,n.createContext)({});t.MetaContext=u;var d=function(e){function t(){return i(this,t),c(this,o(t).apply(this,arguments))}var r,a,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),r=t,(a=[{key:"render",value:function(){return n.default.createElement(u.Provider,{value:{extract:this.props.extract}},n.Children.only(this.props.children))}}])&&s(r.prototype,a),d&&s(r,d),t}(n.Component);t.default=d},241:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=(n=r(7))&&n.__esModule?n:{default:n},s=r(263),c=r(240);function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return l(this,t),d(this,p(t).apply(this,arguments))}var r,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&i.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=a.default.createElement("div",{className:"react-head-temp"},t);i.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),a=document.head,i=a.innerHTML;(n=(n=n.filter((function(e){return-1===i.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,s.getDuplicateTitle)();r&&(0,s.removeChild)(a,r)}else if(e.id){var n=(0,s.getDuplicateElementById)(e);n&&(0,s.removeChild)(a,n)}else if("meta"===t){var i=(0,s.getDuplicateMeta)(e);i&&(0,s.removeChild)(a,i)}else if("link"===t&&"canonical"===e.rel){var c=(0,s.getDuplicateCanonical)(e);c&&(0,s.removeChild)(a,c)}})),(0,s.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(r.prototype,n),c&&u(r,c),t}(a.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(b,"contextType",c.MetaContext);var f=b;t.default=f,e.exports=t.default},242:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return i.default}}),t.default=void 0;var n=s(r(240)),a=s(r(241)),i=s(r(264));function s(e){return e&&e.__esModule?e:{default:e}}var c=a.default;t.default=c},259:function(e,t,r){"use strict";var n=r(67),a=r(68),i=r(69),s=r(70),c=r(0),o=r(20),l=r.p+"static/media/properties1.9c3fe6f9.jpg",u=r(2),d=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"subheader bg-cover bg-center dark-overlay",style:{backgroundImage:"url(".concat(l,")")},children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"subheader-inner",children:[Object(u.jsx)("h1",{className:"text-white",children:this.props.breadcrumb.pagename}),Object(u.jsx)("nav",{"aria-label":"breadcrumb",children:Object(u.jsxs)("ol",{className:"breadcrumb",children:[Object(u.jsx)("li",{className:"breadcrumb-item",children:Object(u.jsxs)(o.b,{to:"/",children:[" ",Object(u.jsx)("i",{className:"fas fa-home"})," "]})}),Object(u.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:this.props.breadcrumb.pagename})]})})]})})})}}]),r}(c.Component);t.a=d},263:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],s=[];return e.forEach((function(e){var a=e.type,i=e.props;"title"===a?t=e:"link"===a&&"canonical"===i.rel?r=e:"meta"===a?n.push(e):s.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};i.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var s=e[n],c=s.props.id;(c?!t.id[c]:0===a.filter((function(e){var r=s.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(s),i.forEach((function(e){var r=s.props[e];r&&(t[e][r]=s)})))},s=e.length-1;s>=0;s--)n(s);return r}(n)),[r],s)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateElementById=function(e){var t=e.id;return t&&document.head.querySelector("#".concat(t))},t.getDuplicateMeta=function(e){var t=document.head;return n.reduce((function(r,n){var a,i=e.getAttribute(n);return i?r.concat((a=t.querySelectorAll("[".concat(n,' = "').concat(i,'"]')),(a=Array.prototype.slice.call(a||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,a=t.length;n<a;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],a=n.concat(["itemProp"]),i=a.concat(["id"])},264:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=(n=r(241))&&n.__esModule?n:{default:n};function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return c(this,t),l(this,u(t).apply(this,arguments))}var r,n,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return a.default.createElement(i.default,null,a.default.createElement("title",null,this.props.title))}}])&&o(r.prototype,n),s&&o(r,s),t}(a.Component);t.default=p,e.exports=t.default},315:function(e,t,r){"use strict";var n=r(1),a=r(10),i=r(231),s=r.n(i),c=r(0),o=r.n(c),l=r(232),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],p=o.a.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,c=e.noGutters,p=e.as,m=void 0===p?"div":p,b=Object(a.a)(e,u),f=Object(l.a)(r,"row"),j=f+"-cols",h=[];return d.forEach((function(e){var t,r=b[e];delete b[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"===typeof r?r.cols:r)&&h.push(""+j+n+"-"+t)})),o.a.createElement(m,Object(n.a)({ref:t},b,{className:s.a.apply(void 0,[i,f,c&&"no-gutters"].concat(h))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},316:function(e,t,r){"use strict";var n=r(1),a=r(10),i=r(231),s=r.n(i),c=r(0),o=r.n(c),l=r(232),u=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],p=o.a.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,c=e.as,p=void 0===c?"div":c,m=Object(a.a)(e,u),b=Object(l.a)(r,"col"),f=[],j=[];return d.forEach((function(e){var t,r,n,a=m[e];if(delete m[e],"object"===typeof a&&null!=a){var i=a.span;t=void 0===i||i,r=a.offset,n=a.order}else t=a;var s="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+b+s:""+b+s+"-"+t),null!=n&&j.push("order"+s+"-"+n),null!=r&&j.push("offset"+s+"-"+r)})),f.length||f.push(b),o.a.createElement(p,Object(n.a)({},m,{ref:t,className:s.a.apply(void 0,[i].concat(f,j))}))}));p.displayName="Col",t.a=p},340:function(e){e.exports=JSON.parse('{"a":[{"id":1,"gridimg":"assets/img/blog/1.jpg","listimg":"assets/img/blog-list/1.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"What agencies are looking for in an agent","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"House"}],"totalcomment":7,"usercomment":[{"img":"assets/img/people/1.jpg"},{"img":"assets/img/people/5.jpg"}],"recent":true},{"id":2,"gridimg":"assets/img/blog/2.jpg","listimg":"assets/img/blog-list/2.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"Changing the way we sell and buy real estate","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Real Estate"},{"title":"Building"}],"totalcomment":"","usercomment":[],"recent":true},{"id":3,"gridimg":"assets/img/blog/3.jpg","listimg":"assets/img/blog-list/3.jpg","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 13, 2020","title":"Families, its the best time to start buying","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Agency"}],"totalcomment":3,"usercomment":[{"img":"assets/img/people/3.jpg"},{"img":"assets/img/people/4.jpg"}],"recent":true},{"id":4,"gridimg":"assets/img/blog/4.jpg","listimg":"assets/img/blog-list/4.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"Our all new duplex apartment is up for grabs","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Family"}],"totalcomment":"","usercomment":[],"recent":true},{"id":5,"gridimg":"assets/img/blog/5.jpg","listimg":"assets/img/blog-list/5.jpg","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 3, 2020","title":"Villa sales are going down this year, find out why","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Acres"}],"totalcomment":"","usercomment":[],"recent":false},{"id":6,"gridimg":"assets/img/blog/6.jpg","listimg":"assets/img/blog-list/6.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"Flats in wisconsin are being held for rental","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Baths"},{"title":"Rooms"}],"totalcomment":3,"usercomment":[{"img":"assets/img/people/3.jpg"},{"img":"assets/img/people/4.jpg"}],"recent":false}],"b":[{"id":1,"title":"Living Rooms","count":24},{"id":2,"title":"Real Estate","count":16},{"id":3,"title":"Kitchens","count":32},{"id":4,"title":"Flats","count":22},{"id":5,"title":"Luxury","count":15},{"id":6,"title":"Bed Rooms","count":8}],"c":[{"id":1,"userimg":"assets/img/people/1.jpg","username":"Randy Blue","commentdate":"December 10 2020","comment":"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.","replies":[{"id":11,"userimg":"assets/img/people/3.jpg","username":"Melany frank","commentdate":"December 10 2020","comment":"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches"}]},{"id":2,"userimg":"assets/img/people/2.jpg","username":"Heather Mclayn","commentdate":"December 8 2020","comment":"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches","replies":[]}]}')},430:function(e,t,r){"use strict";var n=r(67),a=r(68),i=r(69),s=r(70),c=r(0),o=r(2),l=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"pagination-loader",children:Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"#fff",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(o.jsx)("g",{transform:"translate(80,50)",children:Object(o.jsx)("g",{transform:"rotate(0)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:1,children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(o.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(o.jsx)("g",{transform:"rotate(45)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.875",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(o.jsx)("g",{transform:"translate(50,80)",children:Object(o.jsx)("g",{transform:"rotate(90)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.75",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(o.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(o.jsx)("g",{transform:"rotate(135)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.625",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(o.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(o.jsx)("g",{transform:"rotate(180)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.5",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(o.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(o.jsx)("g",{transform:"rotate(225)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.375",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(o.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(o.jsx)("g",{transform:"rotate(270)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.25",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(o.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(o.jsx)("g",{transform:"rotate(315)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.125",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})})}}]),r}(c.Component);t.a=l},467:function(e,t,r){"use strict";var n=r(67),a=r(68),i=r(69),s=r(70),c=r(0),o=r(20),l=r(340),u=r(2),d=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsxs)("div",{className:"sidebar-widget",children:[Object(u.jsx)("h5",{children:"Recent Posts"}),l.a.filter((function(e){return!0===e.recent})).slice(0,4).map((function(e,t){return Object(u.jsxs)("article",{className:"media",children:[Object(u.jsx)(o.b,{to:"/blog-single",children:Object(u.jsx)("img",{src:"/"+e.gridimg,alt:"post"})}),Object(u.jsxs)("div",{className:"media-body",children:[Object(u.jsxs)("h6",{children:[" ",Object(u.jsx)(o.b,{to:"/blog-single",children:e.title})," "]}),Object(u.jsx)("span",{children:e.postdate})]})]},t)}))]}),Object(u.jsxs)("div",{className:"sidebar-widget sidebar-list",children:[Object(u.jsx)("h5",{children:"Popular Categories"}),Object(u.jsx)("ul",{children:l.b.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsxs)(o.b,{to:"/blog-single",children:[" ",e.title," ",Object(u.jsxs)("span",{children:["(",e.count,")"]}),Object(u.jsx)("i",{className:"fas fa-chevron-right"})]})},t)}))})]})]})}}]),r}(c.Component);t.a=d}}]);
//# sourceMappingURL=50.930a9153.chunk.js.map