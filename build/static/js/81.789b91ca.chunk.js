(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[81],{1181:function(e,t,a){"use strict";a.r(t);var n=a(21),c=a.n(n),r=a(35),s=a(50),o=a(0),i=a(161),j=a(435),l=a(315),b=a(316),d=a(478),h=a(36),u=(a(46),a(6)),p=a(39),x=a(40),g=a.n(x),O=a(20),f=a(1230),m=a(1186),y=a(770),v=a(771),C=a(1172),k=a(792),w=a(1102),T=a(1101),M=a(1187),S=a(768),B=a(1043),A=a(2);B.a.tension(.2);t.default=Object(h.c)(Object(u.a)((function(e){return{root:{flexGrow:1,color:"rgba(0, 0, 0, 0.54)"},root1:{minWidth:275},internal:{backGroundColor:"#FFFFFF"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}})))((function(e){e.classes;var t=Object(o.useState)([]),a=Object(s.a)(t,2),n=a[0],h=a[1],u=Object(o.useState)([]),x=Object(s.a)(u,2),B=x[0],F=x[1],P=Object(o.useState)([]),E=Object(s.a)(P,2),N=E[0],K=E[1],D=Object(o.useState)([]),G=Object(s.a)(D,2),U=G[0],z=G[1],I=Object(o.useState)([]),J=Object(s.a)(I,2),L=J[0],Q=J[1],_=Object(o.useState)([]),R=Object(s.a)(_,2),W=(R[0],R[1]),q=Object(o.useState)([]),H=Object(s.a)(q,2),V=H[0],X=H[1],Y=Object(o.useState)([]),Z=Object(s.a)(Y,2),$=Z[0],ee=Z[1],te=Object(o.useState)([]),ae=Object(s.a)(te,2),ne=ae[0],ce=ae[1],re=Object(o.useState)([]),se=Object(s.a)(re,2),oe=se[0],ie=se[1];return Object(o.useEffect)(Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(p.a.data.Basicapi+"getMemberCount",{headers:{"Content-Type":"application/json"}});case 3:t=e.sent,console.log("res from getting Membercount",t.data),h(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("From try catch of getting Membercount",e.t0.toString());case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(o.useEffect)(Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(p.a.data.Basicapi+"getGuestCount",{headers:{"Content-Type":"application/json"}});case 3:t=e.sent,console.log("res from getting Non Membercount",t.data),X(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("From try catch of getting Non Membercount",e.t0.toString());case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(o.useEffect)(Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(p.a.data.Basicapi+"getAgentCount",{headers:{"Content-Type":"application/json"}});case 3:t=e.sent,console.log("res from getting Agentcount",t.data),F(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("From try catch of getting Agentcount",e.t0.toString());case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(o.useEffect)(Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(p.a.data.Basicapi+"getPropertyCount",{headers:{"Content-Type":"application/json"}});case 3:t=e.sent,console.log("res from getting Propertycount",t.data),K(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("From try catch of getting Propertycount",e.t0.toString());case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(o.useEffect)(Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(p.a.data.Basicapi+"getProjectCount",{headers:{"Content-Type":"application/json"}});case 3:t=e.sent,console.log("res from getting Projectcount",t.data),z(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("From try catch of getting Projectcount",e.t0.toString());case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(o.useEffect)(Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(p.a.data.Basicapi+"getPartnerCount",{headers:{"Content-Type":"application/json"}});case 3:t=e.sent,console.log("res from getting Partner Count",t.data),Q(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("From try catch of getting Partner Count",e.t0.toString());case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(o.useEffect)(Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(p.a.data.Basicapi+"getQueriesCount",{headers:{"Content-Type":"application/json"}});case 3:t=e.sent,console.log("res from getting Queries Count",t.data),W(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("From try catch of getting Partner Count",e.t0.toString());case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(o.useEffect)(Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(p.a.data.Basicapi+"monthlyPropertyCount",{headers:{"Content-Type":"application/json"}});case 3:t=e.sent,console.log("res from getting Monthly property Count",t.data),ee(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("From try catch of getting Monthly property Count",e.t0.toString());case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(o.useEffect)(Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(p.a.data.Basicapi+"monthlyMemberCount",{headers:{"Content-Type":"application/json"}});case 3:t=e.sent,console.log("res from getting Monthly Member Count",t.data),ce(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("From try catch of getting Monthly Member Count",e.t0.toString());case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(o.useEffect)(Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(p.a.data.Basicapi+"monthlyGuestCount",{headers:{"Content-Type":"application/json"}});case 3:t=e.sent,console.log("res from getting Monthly Non Member Count",t.data),ie(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("From try catch of getting Monthly Non Member Count",e.t0.toString());case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(A.jsxs)(j.a,{fluid:!0,children:[Object(A.jsx)("h3",{children:"Dashboard"}),Object(A.jsxs)(l.a,{style:{marginBottom:"2.5%"},children:[Object(A.jsx)(b.a,{md:4,children:Object(A.jsx)(O.b,{style:{color:"black"},to:"/membersdashboard",children:Object(A.jsx)(d.a,{bg:"info",children:Object(A.jsxs)(d.a.Body,{children:[Object(A.jsx)(d.a.Title,{style:{textAlign:"center"},children:"Members"}),Object(A.jsx)(d.a.Text,{children:Object(A.jsx)("h3",{style:{textAlign:"center"},children:n})})]})})})}),Object(A.jsx)(b.a,{md:4,children:Object(A.jsx)(d.a,{bg:"info",children:Object(A.jsxs)(d.a.Body,{children:[Object(A.jsx)(d.a.Title,{style:{textAlign:"center"},children:"Non Members"}),Object(A.jsx)(d.a.Text,{children:Object(A.jsx)("h3",{style:{textAlign:"center"},children:V})})]})})}),Object(A.jsx)(b.a,{md:4,children:Object(A.jsx)(d.a,{bg:"info",children:Object(A.jsxs)(d.a.Body,{children:[Object(A.jsx)(d.a.Title,{style:{textAlign:"center"},children:"Projects Uploaded"}),Object(A.jsx)(d.a.Text,{children:Object(A.jsx)("h3",{style:{textAlign:"center"},children:U})})]})})})]}),Object(A.jsxs)(l.a,{children:[Object(A.jsx)(b.a,{md:4,children:Object(A.jsx)(d.a,{bg:"success",children:Object(A.jsxs)(d.a.Body,{children:[Object(A.jsx)(d.a.Title,{style:{textAlign:"center"},children:"Listed Properties"}),Object(A.jsx)(d.a.Text,{children:Object(A.jsx)("h3",{style:{textAlign:"center"},children:N})})]})})}),Object(A.jsx)(b.a,{md:4,children:Object(A.jsx)(d.a,{bg:"success",children:Object(A.jsxs)(d.a.Body,{children:[Object(A.jsx)(d.a.Title,{style:{textAlign:"center"},children:"Partners Updated"}),Object(A.jsx)(d.a.Text,{children:Object(A.jsx)("h3",{style:{textAlign:"center"},children:L})})]})})}),Object(A.jsx)(b.a,{md:4,children:Object(A.jsx)(d.a,{bg:"success",children:Object(A.jsxs)(d.a.Body,{children:[Object(A.jsx)(d.a.Title,{style:{textAlign:"center"},children:"Total Agents"}),Object(A.jsx)(d.a.Text,{children:Object(A.jsx)("h3",{style:{textAlign:"center"},children:B})})]})})})]}),Object(A.jsxs)(l.a,{style:{padding:"2.5%"},children:[Object(A.jsx)(i.a,{elevation:3,children:Object(A.jsxs)(b.a,{md:6,children:[Object(A.jsx)("h5",{children:"Monthly Property Chart"}),Object(A.jsxs)(f.a,{width:500,height:400,data:$,margin:{top:20,right:20,bottom:20,left:20},children:[Object(A.jsx)(m.a,{stroke:"#f5f5f5"}),Object(A.jsx)(y.a,{dataKey:"date",scale:"band"}),Object(A.jsx)(v.a,{}),Object(A.jsx)(C.a,{}),Object(A.jsx)(k.a,{}),Object(A.jsx)(w.a,{dataKey:"COUNT(property_ID)",barSize:20,fill:"#413ea0"}),Object(A.jsx)(T.a,{type:"monotone",dataKey:"COUNT(property_ID)",stroke:"#ff7300"})]})]})}),Object(A.jsx)(i.a,{elevation:3,style:{marginLeft:"2.5%"},children:Object(A.jsxs)(b.a,{md:6,children:[Object(A.jsx)("h5",{children:"Monthly Members Registeration Chart"}),Object(A.jsxs)(M.a,{width:500,height:400,data:ne,margin:{top:10,right:30,left:0,bottom:0},children:[Object(A.jsx)(m.a,{strokeDasharray:"3 3"}),Object(A.jsx)(y.a,{dataKey:"date"}),Object(A.jsx)(v.a,{}),Object(A.jsx)(C.a,{}),Object(A.jsx)(S.a,{type:"monotone",dataKey:"memberCount",stroke:"#8884d8",fill:"#8884d8"})]})]})})]}),Object(A.jsx)(l.a,{style:{padding:"2.5%"},children:Object(A.jsx)(i.a,{elevation:3,children:Object(A.jsxs)(b.a,{md:6,children:[Object(A.jsx)("h5",{children:"Non Members"}),Object(A.jsxs)(M.a,{width:500,height:400,data:oe,margin:{top:10,right:30,left:0,bottom:0},children:[Object(A.jsx)(m.a,{strokeDasharray:"3 3"}),Object(A.jsx)(y.a,{dataKey:"date"}),Object(A.jsx)(v.a,{}),Object(A.jsx)(C.a,{}),Object(A.jsx)(S.a,{type:"monotone",dataKey:"guestCount",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.3})]})]})})})]})}))}}]);
//# sourceMappingURL=81.789b91ca.chunk.js.map