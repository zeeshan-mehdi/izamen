(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[65],{1236:function(e,t,r){"use strict";r.r(t);var n=r(67),o=r(68),a=r(69),i=r(70),c=r(0),s=r(242),l=r.n(s),u=r(252),f=r(18),p=r(21),d=r.n(p),m=r(35),b=r(72),h=r(20),y=r(365),g=r.n(y),v=r(39),j=r(40),O=r.n(j),x=r(473),S=(r(431),r(46)),w=r(78),P=r(2),_=[{img:"assets/img/coming-soon/1.jpg",title:"Quote of the day",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},{img:"assets/img/coming-soon/2.jpg",title:"Quote of the day",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},{img:"assets/img/coming-soon/3.jpg",title:"Quote of the day",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}],C=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(e){var o;return Object(n.a)(this,r),(o=t.call(this,e)).state={email:"",pass:""},o.submitinglogin=o.submitinglogin.bind(Object(b.a)(o)),o}return Object(o.a)(r,[{key:"submitinglogin",value:function(){var e=this;try{console.log("username and pass",this.state.email,this.state.pass),O.a.post(v.a.data.Basicapi+"Login",{email:this.state.email,password:this.state.pass},{headers:{"Content-Type":"application/json"}}).then(function(){var t=Object(m.a)(d.a.mark((function t(r){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Login successfully",r.data),"Password is incorrect."===r.data||"User not found."===r.data?(x.b.error(" Login Failed",{position:"bottom-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),localStorage.setItem("user_ID",""),localStorage.setItem("accountType",""),localStorage.setItem("username",""),localStorage.setItem("isSignedIn",JSON.stringify(!1))):(localStorage.setItem("user_ID",r.data.user_ID),localStorage.setItem("isSignedIn",JSON.stringify(!0)),localStorage.setItem("accountType",r.data.accountType),localStorage.setItem("username",r.data.firstName+" "+r.data.lastName),e.props.senduserprofile(r.data),x.b.success(" LoginSuccessfully",{position:"bottom-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){x.b.error(" Login Failed",{position:"bottom-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),console.log("in catch of axios while submitting User",e.toString()),localStorage.setItem("user_ID",""),localStorage.setItem("accountType",""),localStorage.setItem("username",""),localStorage.setItem("isSignedIn",JSON.stringify(!1))}))}catch(t){localStorage.setItem("user_ID",""),localStorage.setItem("accountType",""),localStorage.setItem("username",""),localStorage.setItem("isSignedIn",JSON.stringify(!1)),x.b.error(" Login Failed",{position:"bottom-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),console.log("in try catch while submitting property",t.toString())}}},{key:"render",value:function(){var e=this;return Object(P.jsxs)("div",{className:"acr-auth-container",children:[Object(P.jsxs)("div",{className:"acr-auth-content",children:[Object(P.jsxs)("div",{className:"auth-text",style:{marginTop:"100px"},children:[Object(P.jsx)("h3",{children:"Log Into Izameen"}),Object(P.jsx)("p",{children:"Izameen is a digital Real estate platform which will Help the consumer in multiple ways"})]}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{children:"Email"}),Object(P.jsx)("input",{type:"text",className:"form-control form-control-light",placeholder:"Email",name:"username",onChange:function(t){e.setState({email:t.target.value})}})]}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{children:"Password"}),Object(P.jsx)("input",{type:"password",className:"form-control form-control-light",placeholder:"Password",name:"password",onChange:function(t){e.setState({pass:t.target.value})}})]}),Object(P.jsx)("div",{className:"form-group",children:Object(P.jsx)(h.b,{to:"#",className:"forgot-password",children:"Forgot Password?"})}),Object(P.jsx)(h.b,{className:"btn-custom secondary btn-block",to:"true"===localStorage.getItem("isSignedIn")&&null!==localStorage.getItem("user_ID")&&""!==localStorage.getItem("user_ID")?"member"===localStorage.getItem("accountType")?"/memdashboard":"agent"===localStorage.getItem("accountType")?"/agdashboard":"client"===localStorage.getItem("accountType")?"/dashboard":"web_admin"===localStorage.getItem("accountType")?"/propertydashboard":null:"/login",onClick:function(){e.submitinglogin()},children:"Login"}),Object(P.jsx)("div",{className:"auth-seperator",children:Object(P.jsx)("span",{children:"OR"})}),Object(P.jsxs)("p",{className:"text-center mb-0",children:["Don't have an account? ",Object(P.jsx)(h.b,{to:"/register",children:"Create One"})," "]})]}),Object(P.jsx)("div",{className:"acr-auth-bg",children:Object(P.jsx)(g.a,Object(f.a)(Object(f.a)({className:"acr-auth-bg-slider acr-cs-bg-slider"},{slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,dots:!0,dotsClass:"d-flex slick-dots"}),{},{children:_.map((function(e,t){return Object(P.jsx)("div",{children:Object(P.jsx)("div",{className:"acr-cs-bg-item bg-cover bg-center",style:{backgroundImage:"url(/"+e.img+")"},children:Object(P.jsxs)("div",{className:"acr-auth-quote",children:[Object(P.jsx)("h6",{children:e.title}),Object(P.jsx)("p",{children:e.text})]})})},t)}))}))}),Object(P.jsx)(x.a,{})]})}}]),r}(c.Component);var I=Object(S.b)((function(e){return{userprofile:e.userprofile}}),(function(e){return{senduserprofile:function(t){e(Object(w.a)(t))}}}))(C),N=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(P.jsxs)(c.Fragment,{children:[Object(P.jsxs)(l.a,{children:[Object(P.jsx)("title",{children:"Izameen | Login"}),Object(P.jsx)("meta",{name:"description",content:"#"})]}),Object(P.jsx)(u.a,{}),Object(P.jsx)(I,{})]})}}]),r}(c.Component);t.default=N},240:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MetaContext=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0));function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=(0,n.createContext)({});t.MetaContext=u;var f=function(e){function t(){return a(this,t),c(this,s(t).apply(this,arguments))}var r,o,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){return n.default.createElement(u.Provider,{value:{extract:this.props.extract}},n.Children.only(this.props.children))}}])&&i(r.prototype,o),f&&i(r,f),t}(n.Component);t.default=f},241:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=(n=r(7))&&n.__esModule?n:{default:n},i=r(263),c=r(240);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return l(this,t),f(this,p(t).apply(this,arguments))}var r,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&a.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=o.default.createElement("div",{className:"react-head-temp"},t);a.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),o=document.head,a=o.innerHTML;(n=(n=n.filter((function(e){return-1===a.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,i.getDuplicateTitle)();r&&(0,i.removeChild)(o,r)}else if(e.id){var n=(0,i.getDuplicateElementById)(e);n&&(0,i.removeChild)(o,n)}else if("meta"===t){var a=(0,i.getDuplicateMeta)(e);a&&(0,i.removeChild)(o,a)}else if("link"===t&&"canonical"===e.rel){var c=(0,i.getDuplicateCanonical)(e);c&&(0,i.removeChild)(o,c)}})),(0,i.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(r.prototype,n),c&&u(r,c),t}(o.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(m,"contextType",c.MetaContext);var b=m;t.default=b,e.exports=t.default},242:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=i(r(240)),o=i(r(241)),a=i(r(264));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default;t.default=c},263:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],i=[];return e.forEach((function(e){var o=e.type,a=e.props;"title"===o?t=e:"link"===o&&"canonical"===a.rel?r=e:"meta"===o?n.push(e):i.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};a.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var i=e[n],c=i.props.id;(c?!t.id[c]:0===o.filter((function(e){var r=i.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(i),a.forEach((function(e){var r=i.props[e];r&&(t[e][r]=i)})))},i=e.length-1;i>=0;i--)n(i);return r}(n)),[r],i)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateElementById=function(e){var t=e.id;return t&&document.head.querySelector("#".concat(t))},t.getDuplicateMeta=function(e){var t=document.head;return n.reduce((function(r,n){var o,a=e.getAttribute(n);return a?r.concat((o=t.querySelectorAll("[".concat(n,' = "').concat(a,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,o=t.length;n<o;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],o=n.concat(["itemProp"]),a=o.concat(["id"])},264:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=(n=r(241))&&n.__esModule?n:{default:n};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return c(this,t),l(this,u(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return o.default.createElement(a.default,null,o.default.createElement("title",null,this.props.title))}}])&&s(r.prototype,n),i&&s(r,i),t}(o.Component);t.default=p,e.exports=t.default},315:function(e,t,r){"use strict";var n=r(1),o=r(10),a=r(231),i=r.n(a),c=r(0),s=r.n(c),l=r(232),u=["bsPrefix","className","noGutters","as"],f=["xl","lg","md","sm","xs"],p=s.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,c=e.noGutters,p=e.as,d=void 0===p?"div":p,m=Object(o.a)(e,u),b=Object(l.a)(r,"row"),h=b+"-cols",y=[];return f.forEach((function(e){var t,r=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"===typeof r?r.cols:r)&&y.push(""+h+n+"-"+t)})),s.a.createElement(d,Object(n.a)({ref:t},m,{className:i.a.apply(void 0,[a,b,c&&"no-gutters"].concat(y))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},316:function(e,t,r){"use strict";var n=r(1),o=r(10),a=r(231),i=r.n(a),c=r(0),s=r.n(c),l=r(232),u=["bsPrefix","className","as"],f=["xl","lg","md","sm","xs"],p=s.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,c=e.as,p=void 0===c?"div":c,d=Object(o.a)(e,u),m=Object(l.a)(r,"col"),b=[],h=[];return f.forEach((function(e){var t,r,n,o=d[e];if(delete d[e],"object"===typeof o&&null!=o){var a=o.span;t=void 0===a||a,r=o.offset,n=o.order}else t=o;var i="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+m+i:""+m+i+"-"+t),null!=n&&h.push("order"+i+"-"+n),null!=r&&h.push("offset"+i+"-"+r)})),b.length||b.push(m),s.a.createElement(p,Object(n.a)({},d,{ref:t,className:i.a.apply(void 0,[a].concat(b,h))}))}));p.displayName="Col",t.a=p}}]);
//# sourceMappingURL=65.7e835aea.chunk.js.map