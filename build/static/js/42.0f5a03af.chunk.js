(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[42],{1006:function(e,t){},1018:function(e,t){},1021:function(e,t){},1221:function(e,t,s){"use strict";s.r(t);var c=s(67),n=s(68),a=s(69),r=s(70),i=s(0),l=s(242),o=s.n(l),j=s(252),d=s(259),b=s(238),m=s(21),h=s.n(m),u=s(35),O=s(20),x=s(39),p=s(40),f=s.n(p),g=(s(891),s(2)),v=function(e){Object(a.a)(s,e);var t=Object(r.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={name:"",email:"",phoneno:"",message:""},n}return Object(n.a)(s,[{key:"submitcontactform",value:function(){var e=Object(u.a)(h.a.mark((function e(){var t,s,c=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=this.state.name&&""!=this.state.message&&""!=this.state.email&&""!=this.state.phoneno){e.next=4;break}alert("Please fill name, message, email and Contact number"),e.next=11;break;case 4:return t={"Content-Type":"application/json"},s={name:this.state.name,email:this.state.email,message:this.state.message,contactNo:this.state.phoneno},console.log("===================================="),console.log("data",s),console.log("===================================="),e.next=11,f.a.post(x.a.data.Basicapi+"addContactQuery",s,{headers:t}).then((function(){c.setState({name:"",email:"",phoneno:"",message:""})})).catch((function(e){alert(e.toString())}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"section pt-0",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-lg-6 mb-lg-30",children:Object(g.jsxs)("div",{className:"acr-locations bg-bottom bg-norepeat",style:{backgroundImage:"url(/assets/img/misc/bldg.png)"},children:[Object(g.jsx)("img",{src:"/assets/img/contact.jpg",alt:""}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsxs)("div",{className:"acr-location",children:[Object(g.jsx)("h5",{children:"New York"}),Object(g.jsx)("h5",{children:"USA"}),Object(g.jsxs)("div",{className:"acr-location-address",children:[Object(g.jsx)("p",{children:"Cecilia Chapman 711-2880 Nulla St."}),Object(g.jsx)(O.b,{to:"tel:+123456789",children:"(478) 339 120"})]})]})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsxs)("div",{className:"acr-location",children:[Object(g.jsx)("h5",{children:"Tbilsi"}),Object(g.jsx)("h5",{children:"Georgia"}),Object(g.jsxs)("div",{className:"acr-location-address",children:[Object(g.jsx)("p",{children:"Aaron Hawkins 5587 Nunc. Avenue"}),Object(g.jsx)(O.b,{to:"tel:+123456789",children:"(134) 984 438"})]})]})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsxs)("div",{className:"acr-location",children:[Object(g.jsx)("h5",{children:"Moscow"}),Object(g.jsx)("h5",{children:"Russia"}),Object(g.jsxs)("div",{className:"acr-location-address",children:[Object(g.jsx)("p",{children:"Lawrence Moreno 935-9940 Tortor. Street"}),Object(g.jsx)(O.b,{to:"tel:+123456789",children:"(443) 893 109"})]})]})}),Object(g.jsx)("div",{className:"col-sm-6",children:Object(g.jsxs)("div",{className:"acr-location",children:[Object(g.jsx)("h5",{children:"Cairo"}),Object(g.jsx)("h5",{children:"Egypt"}),Object(g.jsxs)("div",{className:"acr-location-address",children:[Object(g.jsx)("p",{children:"Aaron Hawkins 5587 Nunc. Avenue"}),Object(g.jsx)(O.b,{to:"tel:+123456789",children:"(009) 338 148"})]})]})})]})]})}),Object(g.jsxs)("div",{className:"col-lg-6",children:[Object(g.jsxs)("div",{className:"section-title-wrap section-header",children:[Object(g.jsx)("h5",{className:"custom-primary",children:"Contact Us"}),Object(g.jsx)("h2",{className:"title",children:"Got Any Questions?"})]}),Object(g.jsxs)("div",{className:"comment-form",children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-md-6 form-group",children:[Object(g.jsxs)("label",{children:[Object(g.jsx)("span",{style:{color:"red"},children:"*"}),"Full Name"]}),Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Full Name",name:"fname",onChange:function(t){e.setState({name:t.target.value})}})]}),Object(g.jsxs)("div",{className:"col-md-6 form-group",children:[Object(g.jsxs)("label",{children:[" ",Object(g.jsx)("span",{style:{color:"red"},children:"*"}),"Phone Number"]}),Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Phone Number",name:"phone",onChange:function(t){e.setState({phoneno:t.target.value})}})]}),Object(g.jsxs)("div",{className:"col-md-6 form-group",children:[Object(g.jsxs)("label",{children:[Object(g.jsx)("span",{style:{color:"red"},children:"*"}),"Email Address"]}),Object(g.jsx)("input",{type:"email",className:"form-control",placeholder:"Email Address",name:"email",onChange:function(t){e.setState({email:t.target.value})}})]}),Object(g.jsxs)("div",{className:"col-md-12 form-group",children:[Object(g.jsxs)("label",{children:[Object(g.jsx)("span",{style:{color:"red"},children:"*"}),"Your Message"]}),Object(g.jsx)("textarea",{className:"form-control",placeholder:"Type your message...",name:"comment",rows:7,onChange:function(t){e.setState({message:t.target.value})}})]})]}),Object(g.jsx)("button",{className:"btn-custom primary",onClick:function(){e.submitcontactform()},children:"Send Message"})]})]})]})})})}}]),s}(i.Component),N=s(510),y=(i.Component,function(e){Object(a.a)(s,e);var t=Object(r.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(g.jsx)(i.Fragment,{children:Object(g.jsx)(v,{})})}}]),s}(i.Component)),w=function(e){Object(a.a)(s,e);var t=Object(r.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(g.jsxs)(i.Fragment,{children:[Object(g.jsxs)(o.a,{children:[Object(g.jsx)("title",{children:"Izameen | Contact Us"}),Object(g.jsx)("meta",{name:"description",content:"#"})]}),Object(g.jsx)(j.a,{}),Object(g.jsx)(d.a,{breadcrumb:{pagename:"Contact Us"}}),Object(g.jsx)(y,{}),Object(g.jsx)(b.a,{})]})}}]),s}(i.Component);t.default=w},236:function(e,t,s){"use strict";var c=s(67),n=s(68),a=s(69),r=s(70),i=s(0),l=s(20),o=s(2),j=function(e){Object(a.a)(s,e);var t=Object(r.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"footer-top",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row footer-btn-wrapper",children:[Object(o.jsxs)("div",{className:"col-lg-7 footer-widget",children:[Object(o.jsx)("h4",{children:"Download Our App"}),Object(o.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "})]}),Object(o.jsx)("div",{className:"col-lg-5 col-md-12 footer-widget",children:Object(o.jsxs)("div",{className:"footer-btn",children:[Object(o.jsxs)(l.b,{to:"#",className:"btn-custom-2 grey",children:[" ",Object(o.jsx)("i",{className:"flaticon-playstore"}),"Google Play"]}),Object(o.jsxs)(l.b,{to:"#",className:"btn-custom-2 grey",children:[" ",Object(o.jsx)("i",{className:"flaticon-apple"}),"App Store"]})]})})]})})})}}]),s}(i.Component);t.a=j},238:function(e,t,s){"use strict";var c=s(67),n=s(68),a=s(69),r=s(70),i=s(0),l=s(20),o=(s(236),s(234)),j=s(2),d=function(e){Object(a.a)(s,e);var t=Object(r.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("footer",{className:"acr-footer footer-2",children:[Object(j.jsx)("div",{className:"footer-middle",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-lg-5 col-sm-12 footer-widget",children:[Object(j.jsxs)("div",{className:"footer-logo",children:[" ",Object(j.jsx)("img",{src:o.a,alt:"logo"})," "]}),Object(j.jsx)("p",{children:"IndusLand Realtors"})]}),Object(j.jsxs)("div",{className:"col-lg-2 offset-lg-1 col-sm-4 footer-widget",children:[Object(j.jsx)("h5",{className:"widget-title",children:"Menu"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["                        ",Object(j.jsx)(l.b,{to:"/blog-list",children:"Trends & Blogs"})]}),Object(j.jsxs)("li",{children:["  ",Object(j.jsx)(l.b,{to:"listing-list",onClick:function(){e.props.sendlistingcategory("",!1)},children:"Properties"})]}),Object(j.jsxs)("li",{children:[" ",Object(j.jsx)(l.b,{to:"/our-partners",children:"Our Partners Page"})," "]}),Object(j.jsxs)("li",{children:[" ",Object(j.jsx)(l.b,{to:"/services",children:"Our Projects"})," "]}),Object(j.jsxs)("li",{children:[" ",Object(j.jsx)(l.b,{to:"/image-gallery",children:"Our Image Gallery"})," "]}),Object(j.jsxs)("li",{children:[" ",Object(j.jsx)(l.b,{to:"/portfolio",children:"Portfolio"})," "]})]})]}),Object(j.jsxs)("div",{className:"col-lg-2 col-sm-4 footer-widget",children:[Object(j.jsx)("h5",{className:"widget-title",children:"Information"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[" ",Object(j.jsx)(l.b,{to:"/contact",children:"Contact Us"})]}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/laws-of-the-land",children:"Laws of the Land"})}),Object(j.jsxs)("li",{children:["                        ",Object(j.jsx)(l.b,{to:"/faq",children:"FAQs"})]}),Object(j.jsxs)("li",{children:["                                                ",Object(j.jsx)(l.b,{to:"/glossary",children:"Glossary"})]})]})]})]})})}),Object(j.jsx)("div",{className:"footer-bottom",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-7",children:Object(j.jsxs)("p",{className:"m-0",children:["\xa9 Copyright 2020 - ",Object(j.jsx)(l.b,{to:"#",children:"Invictus 360"})," All Rights Reserved."]})})})})})]})}}]),s}(i.Component);t.a=d},259:function(e,t,s){"use strict";var c=s(67),n=s(68),a=s(69),r=s(70),i=s(0),l=s(20),o=s.p+"static/media/properties1.9c3fe6f9.jpg",j=s(2),d=function(e){Object(a.a)(s,e);var t=Object(r.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"subheader bg-cover bg-center dark-overlay",style:{backgroundImage:"url(".concat(o,")")},children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"subheader-inner",children:[Object(j.jsx)("h1",{className:"text-white",children:this.props.breadcrumb.pagename}),Object(j.jsx)("nav",{"aria-label":"breadcrumb",children:Object(j.jsxs)("ol",{className:"breadcrumb",children:[Object(j.jsx)("li",{className:"breadcrumb-item",children:Object(j.jsxs)(l.b,{to:"/",children:[" ",Object(j.jsx)("i",{className:"fas fa-home"})," "]})}),Object(j.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:this.props.breadcrumb.pagename})]})})]})})})}}]),s}(i.Component);t.a=d},510:function(e){e.exports=JSON.parse('[{"id":1,"icon":"telephone","title":"Reach Out","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","btntext":"Call Us","btnurl":"tel:+123456789"},{"id":2,"icon":"location","title":"Find Us","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","btntext":"Get Directions","btnurl":"#"},{"id":3,"icon":"speech-bubble","title":"Get Support","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","btntext":"Start Chat","btnurl":"#"}]')},913:function(e,t){},915:function(e,t){},939:function(e,t){},941:function(e,t){},969:function(e,t){},971:function(e,t){},972:function(e,t){},977:function(e,t){},979:function(e,t){},985:function(e,t){},987:function(e,t){}}]);
//# sourceMappingURL=42.0f5a03af.chunk.js.map