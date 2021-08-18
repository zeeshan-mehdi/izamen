/*! For license information please see 54.5c0b9906.chunk.js.LICENSE.txt */
(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[54],{1197:function(t,e,r){"use strict";r.r(e);var a=r(21),n=r.n(a),c=r(35),o=r(50),i=r(0),s=r(435),l=(r(277),r(278),r(279),r(280),r(46)),u=r(247),d=(r(248),r(285)),f=r(39),p=r(40),b=r.n(p),j=r(20),x=r(1254),h=r(286),g=r.n(h),O=r(287),v=r.n(O),m=r(377),y=r.n(m),C=(r(78),r(2));function k(t,e,r,a){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(j.b,{onClick:function(){},children:Object(C.jsx)(x.a,{title:"Details",placement:"right",children:Object(C.jsx)(g.a,{style:u.d})})}),Object(C.jsx)(j.b,{style:{marginLeft:"5%"},onClick:function(){},children:Object(C.jsx)(x.a,{title:"Edit",placement:"right",children:Object(C.jsx)(v.a,{style:u.c})})}),Object(C.jsx)(j.b,{style:{marginLeft:"5%"},onClick:function(){},children:Object(C.jsx)(x.a,{title:"Delete",placement:"right",children:Object(C.jsx)(y.a,{style:u.b})})})]})}e.default=Object(l.b)((function(t){return{userprofile:t.userReducer.userprofile}}))((function(t){t.classes;var e=Object(i.useState)([{dataField:"property_ID",text:"ID",sort:!0},{dataField:"title",text:"Title",sort:!0},{dataField:"description",text:"Description",sort:!0},{dataField:"address",text:"Address",sort:!0},{dataField:"city",text:"City",sort:!0},{dataField:"area",text:"Area",sort:!0},{dataField:"area_type",text:"Area Type",sort:!0},{dataField:"property_type",text:"Property Type",sort:!0},{dataField:"dateOfAdvert",text:"Date of Advert",sort:!0},{dataField:"details",text:"",formatter:k}]),r=Object(o.a)(e,2),a=r[0],l=(r[1],Object(i.useState)([])),u=Object(o.a)(l,2),p=u[0],j=u[1];return Object(i.useEffect)(Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{b.a.post(f.a.data.Basicapi+"getPropertiesLinkedOnAgentID",{agent_ID:t.userprofile.agent_ID},{headers:{"Content-Type":"application/json"}}).then(function(){var t=Object(c.a)(n.a.mark((function t(e){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("getting agent properties successfully",e),j(e.data);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){alert("in catch of axios while getting agent properties",t.toString())}))}catch(r){alert("in try catch while getting agent properties",r.toString())}case 1:case"end":return e.stop()}}),e)}))),[]),Object(C.jsx)(s.a,{fluid:!0,children:Object(C.jsx)(d.a,{keyField:"property_ID",data:p,columns:a,addButtonText:"Add Property",tabTitle:"Linked Properties",addButtonOnClick:function(){},exportCsvButtonShow:!0,addButtonShow:!1})})}))},231:function(t,e,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var c=typeof a;if("string"===c||"number"===c)t.push(a);else if(Array.isArray(a)){if(a.length){var o=n.apply(null,a);o&&t.push(o)}}else if("object"===c)if(a.toString===Object.prototype.toString)for(var i in a)r.call(a,i)&&a[i]&&t.push(i);else t.push(a.toString())}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0===(a=function(){return n}.apply(e,[]))||(t.exports=a)}()},232:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(1);var a=r(0),n=r.n(a),c=n.a.createContext({});c.Consumer,c.Provider;function o(t,e){var r=Object(a.useContext)(c);return t||r[e]||e}},247:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return o}));var a={borderRadius:"15px",backgroundColor:"#fff",padding:"5px 15px",marginTop:"15px"},n={color:"#E74C3C"},c={color:"#2ECC71"},o={color:"#3498DB"}},248:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(0);var a=r(1210),n=r.p+"static/media/noData.dbd309de.svg",c=r(2);function o(){return Object(c.jsx)(a.a,{image:n,imageStyle:{height:60},description:Object(c.jsx)("p",{style:{marginTop:"8px"},children:"No Data Found"})})}},285:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var a=r(18),n=(r(0),r(277)),c=r.n(n),o=r(278),i=r.n(o),s=r(375),l=r.n(s),u=r(1189),d=r(2);function f(t){return Object(d.jsx)(u.a,{color:"primary",onClick:function(){t.onExport()},style:{float:"right",color:"#fff",backgroundColor:"#4D80E4"},children:"Export CSV"})}r(279),r(280);function p(t){return Object(d.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){t.onClear()},style:{marginTop:"15px",marginBottom:"15px",backgroundColor:"#4D80E4",color:"#fff"},children:"Clear"})}var b=r(248),j=r(376),x=r.n(j),h=r(247),g=o.Search.SearchBar,O=function(t,e){var r={backgroundColor:"#FFF",whiteSpace:"normal",overflowWrap:"break-word"};return"1"===t.IsBlocked&&(r.backgroundColor="#F5B041"),r};function v(t){var e=t.keyField,r=t.data,n=t.columns,o=t.addButtonText,s=void 0===o?"":o,j=t.tabTitle,v=void 0===j?"":j,m=t.exportCsvButtonShow,y=void 0!==m&&m,C=t.addButtonShow,k=void 0!==C&&C,w=t.addButtonOnClick,S={sizePerPageRenderer:function(t){var e=t.options,r=t.currSizePerPage,a=t.onSizePerPageChange;return Object(d.jsx)("div",{className:"btn-group",role:"group",children:e.map((function(t){var e=r==="".concat(t.page);return Object(d.jsx)("button",{type:"button",onClick:function(){return a(t.page)},className:"btn ".concat(e?"btn-secondary":"btn-warning"),children:t.text},t.text)}))})}};function F(){return Object(d.jsx)(b.a,{})}return Object(d.jsx)(i.a,{keyField:e,data:r,columns:n,search:!0,exportCSV:{onlyExportFiltered:!0,exportAll:!1},children:function(t){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{style:h.a,children:[Object(d.jsx)("h4",{children:"Search"}),Object(d.jsx)(g,Object(a.a)({},t.searchProps)),Object(d.jsx)(p,Object(a.a)({},t.searchProps))]}),Object(d.jsxs)("div",{style:h.a,children:[Object(d.jsx)("h4",{children:v}),k?Object(d.jsx)(u.a,{color:"primary",startIcon:Object(d.jsx)(x.a,{}),onClick:w,style:{color:"#fff",backgroundColor:"#4D80E4",width:"15%",marginBottom:"2.5%",whiteSpace:"nowrap",float:"right"},children:s}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)(c.a,Object(a.a)(Object(a.a)({},t.baseProps),{},{bordered:!1,pagination:l()(S),noDataIndication:F,rowStyle:O}))]}),y?Object(d.jsx)(f,Object(a.a)({},t.csvProps)):Object(d.jsx)(d.Fragment,{})]})}})}},286:function(t,e,r){"use strict";var a=r(101),n=r(102);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(r(0)),o=(0,a(r(103)).default)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");e.default=o},287:function(t,e,r){"use strict";var a=r(101),n=r(102);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(r(0)),o=(0,a(r(103)).default)(c.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.default=o},435:function(t,e,r){"use strict";var a=r(1),n=r(10),c=r(231),o=r.n(c),i=r(0),s=r.n(i),l=r(232),u=["bsPrefix","fluid","as","className"],d=s.a.forwardRef((function(t,e){var r=t.bsPrefix,c=t.fluid,i=t.as,d=void 0===i?"div":i,f=t.className,p=Object(n.a)(t,u),b=Object(l.a)(r,"container"),j="string"===typeof c?"-"+c:"-fluid";return s.a.createElement(d,Object(a.a)({ref:e},p,{className:o()(f,c?""+b+j:b)}))}));d.displayName="Container",d.defaultProps={fluid:!1},e.a=d},493:function(t,e,r){"use strict";function a(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}r.d(e,"a",(function(){return a}))},529:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var a=r(493);function n(t,e){t.classList?t.classList.add(e):Object(a.a)(t,e)||("string"===typeof t.className?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}},530:function(t,e,r){"use strict";function a(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function n(t,e){t.classList?t.classList.remove(e):"string"===typeof t.className?t.className=a(t.className,e):t.setAttribute("class",a(t.className&&t.className.baseVal||"",e))}r.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=54.5c0b9906.chunk.js.map