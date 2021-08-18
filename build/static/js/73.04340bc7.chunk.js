/*! For license information please see 73.04340bc7.chunk.js.LICENSE.txt */
(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[73],{1201:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a.n(n),s=a(35),c=a(50),o=a(0),i=a(435),l=a(316),u=a(315),f=a(36),p=(a(46),a(6)),d=a(39),b=a(40),j=a.n(b),m=a(473),h=(a(431),a(2));t.default=Object(f.c)(Object(p.a)((function(e){return{root:{flexGrow:1,color:"rgba(0, 0, 0, 0.54)"},root1:{minWidth:275},internal:{backGroundColor:"#FFFFFF"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}})))((function(e){e.classes;var t=Object(o.useState)(""),a=Object(c.a)(t,2),n=a[0],f=a[1],p=Object(o.useState)(""),b=Object(c.a)(p,2),O=b[0],v=b[1],x=Object(o.useState)(""),g=Object(c.a)(x,2),y=g[0],N=g[1],w=Object(o.useState)(""),C=Object(c.a)(w,2);return C[0],C[1],Object(h.jsxs)(i.a,{children:[Object(h.jsx)("h4",{children:"Add Testimonial"}),Object(h.jsxs)(l.a,{md:{span:8,offset:2},children:[Object(h.jsxs)(u.a,{children:[Object(h.jsx)("label",{children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Name",onChange:function(e){f(e.target.value)}})]}),Object(h.jsxs)(u.a,{children:[Object(h.jsx)("label",{children:"Reference/URL/Profile Link"}),Object(h.jsx)("input",{type:"text",name:"reference",className:"form-control",placeholder:"URL/Linkedin/Facebook/Any Profile",onChange:function(e){v(e.target.value)}})]}),Object(h.jsxs)(u.a,{children:[Object(h.jsx)("label",{children:"Description"}),Object(h.jsx)("input",{type:"text",name:"Details",className:"form-control",placeholder:"Details",onChange:function(e){N(e.target.value)}})]}),Object(h.jsx)(u.a,{style:{marginTop:"2.5%"},children:Object(h.jsx)(l.a,{md:{span:4,offset:4},children:Object(h.jsx)("button",{className:"btn-custom secondary btn-block",onClick:function(){try{j.a.post(d.a.data.Basicapi+"createTestimonial",{name:n,refrence:O,details:y},{headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Testimonial added successfully",t),m.b.success(" Testimonial Added Successfully",{position:"bottom-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){alert("in catch of axios while submitting property",e.toString())}))}catch(e){alert("in try catch while submitting property",e.toString())}},children:"Submit"})})})]}),Object(h.jsx)(m.a,{})]})}))},231:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var c=r.apply(null,n);c&&e.push(c)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var o in n)a.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(1);var n=a(0),r=a.n(n),s=r.a.createContext({});s.Consumer,s.Provider;function c(e,t){var a=Object(n.useContext)(s);return e||a[t]||t}},315:function(e,t,a){"use strict";var n=a(1),r=a(10),s=a(231),c=a.n(s),o=a(0),i=a.n(o),l=a(232),u=["bsPrefix","className","noGutters","as"],f=["xl","lg","md","sm","xs"],p=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.noGutters,p=e.as,d=void 0===p?"div":p,b=Object(r.a)(e,u),j=Object(l.a)(a,"row"),m=j+"-cols",h=[];return f.forEach((function(e){var t,a=b[e];delete b[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&h.push(""+m+n+"-"+t)})),i.a.createElement(d,Object(n.a)({ref:t},b,{className:c.a.apply(void 0,[s,j,o&&"no-gutters"].concat(h))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},316:function(e,t,a){"use strict";var n=a(1),r=a(10),s=a(231),c=a.n(s),o=a(0),i=a.n(o),l=a(232),u=["bsPrefix","className","as"],f=["xl","lg","md","sm","xs"],p=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.as,p=void 0===o?"div":o,d=Object(r.a)(e,u),b=Object(l.a)(a,"col"),j=[],m=[];return f.forEach((function(e){var t,a,n,r=d[e];if(delete d[e],"object"===typeof r&&null!=r){var s=r.span;t=void 0===s||s,a=r.offset,n=r.order}else t=r;var c="xs"!==e?"-"+e:"";t&&j.push(!0===t?""+b+c:""+b+c+"-"+t),null!=n&&m.push("order"+c+"-"+n),null!=a&&m.push("offset"+c+"-"+a)})),j.length||j.push(b),i.a.createElement(p,Object(n.a)({},d,{ref:t,className:c.a.apply(void 0,[s].concat(j,m))}))}));p.displayName="Col",t.a=p},435:function(e,t,a){"use strict";var n=a(1),r=a(10),s=a(231),c=a.n(s),o=a(0),i=a.n(o),l=a(232),u=["bsPrefix","fluid","as","className"],f=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.fluid,o=e.as,f=void 0===o?"div":o,p=e.className,d=Object(r.a)(e,u),b=Object(l.a)(a,"container"),j="string"===typeof s?"-"+s:"-fluid";return i.a.createElement(f,Object(n.a)({ref:t},d,{className:c()(p,s?""+b+j:b)}))}));f.displayName="Container",f.defaultProps={fluid:!1},t.a=f}}]);
//# sourceMappingURL=73.04340bc7.chunk.js.map