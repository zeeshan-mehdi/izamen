(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[69],{1231:function(e,t,s){"use strict";s.r(t);var i=s(67),a=s(68),r=s(69),c=s(70),n=s(0),l=s(242),o=s.n(l),m=s(252),j=s(259),d=s(238),b=s(72),g=s(20),h=s(340),u=s(467),p=s(799),O=s.n(p),x=s(231),f=s.n(x),y=s(430),v=s(2),N=function(e){Object(r.a)(s,e);var t=Object(c.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).state={items:h.a,currentPage:1,itemsPerPage:4,loading:!1},e.handleClick=e.handleClick.bind(Object(b.a)(e)),e}return Object(a.a)(s,[{key:"handleClick",value:function(e){var t=this,s=e.target.closest(".pagination-content");s&&s.scrollIntoView(),this.setState({loading:!0}),setTimeout((function(){t.setState({currentPage:Number(e.target.getAttribute("data-page")),loading:!1})}),2e3)}},{key:"render",value:function(){for(var e=this,t=this.state,s=t.items,i=t.currentPage,a=t.itemsPerPage,r=i*a,c=r-a,l=s.slice(c,r).map((function(e,t){return Object(v.jsx)("div",{className:"col-md-6 masonry-item",children:Object(v.jsxs)("article",{className:"post",children:[Object(v.jsx)("div",{className:"post-thumbnail",children:Object(v.jsx)(g.b,{to:"/blog-single",children:Object(v.jsx)("img",{src:"/"+e.gridimg,alt:"blog post"})})}),Object(v.jsxs)("div",{className:"post-body",children:[Object(v.jsxs)("div",{className:"post-author",children:[Object(v.jsx)("img",{src:"/"+e.authorimg,alt:"author"}),Object(v.jsxs)("div",{className:"post-author-body",children:[Object(v.jsxs)("p",{children:[" ",Object(v.jsx)(g.b,{to:"#",children:e.authorname})," "]}),Object(v.jsx)("span",{className:"post-date",children:e.postdate})]})]}),Object(v.jsxs)("h5",{className:"post-title",children:[" ",Object(v.jsx)(g.b,{to:"/blog-single",children:e.title})," "]}),Object(v.jsx)("p",{className:"post-text",children:e.text.slice(0,75)}),Object(v.jsxs)("div",{className:"post-controls",children:[Object(v.jsx)(g.b,{to:"/blog-single",className:"btn-custom secondary btn-sm",children:"Read More"}),Object(v.jsx)("div",{className:"post-comment-authors",children:e.totalcomment>0||""!==e.totalcomment?Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)("span",{children:"Comments by: "}),Object(v.jsxs)("div",{className:"post-comment-authors-img",children:[e.usercomment.map((function(e,t){return Object(v.jsxs)(g.b,{to:"#",children:[" ",Object(v.jsx)("img",{src:"/"+e.img,alt:"comment author"})," "]},t)})),Object(v.jsxs)(g.b,{to:"#",children:[" +",e.totalcomment," "]})]})]}):Object(v.jsx)("span",{children:"0 Comments"})})]})]})]})},t)})),o=[],m=1;m<=Math.ceil(s.length/a);m++)o.push(m);var j=o.map((function(t){var s=e.state.currentPage===t?"active":"";return Object(v.jsx)(n.Fragment,{children:o.length>1?Object(v.jsx)("li",{className:f()("page-item",{active:s}),children:Object(v.jsx)(g.b,{className:"page-link",to:"#","data-page":t,onClick:e.handleClick,children:t})}):""},t)}));return Object(v.jsx)("div",{className:"section posts pagination-content",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col-lg-8",children:[Object(v.jsx)(O.a,{className:"row masonry",imagesLoadedOptions:{itemSelector:".masonry-item",percentPosition:!1,resize:!0,fitWidth:!0},children:!1===this.state.loading?l:Object(v.jsx)(y.a,{})}),o.length>1?Object(v.jsxs)("ul",{className:"pagination",children:[o.length>1&&1!==this.state.currentPage?Object(v.jsx)("li",{className:"page-item",children:Object(v.jsx)(g.b,{className:"page-link",to:"#","data-page":this.state.currentPage-1,onClick:this.handleClick,children:Object(v.jsx)("i",{className:"fas fa-chevron-left"})})}):"",j,o.length>1&&this.state.currentPage!==o.length?Object(v.jsx)("li",{className:"page-item",children:Object(v.jsx)(g.b,{className:"page-link",to:"#","data-page":parseInt(this.state.currentPage+1),onClick:this.handleClick,children:Object(v.jsx)("i",{className:"fas fa-chevron-right"})})}):""]}):""]}),Object(v.jsx)("div",{className:"col-lg-4",children:Object(v.jsx)(u.a,{})})]})})})}}]),s}(n.Component),k=function(e){Object(r.a)(s,e);var t=Object(c.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsxs)(o.a,{children:[Object(v.jsx)("title",{children:"izameen | Trends & Blogs"}),Object(v.jsx)("meta",{name:"description",content:"#"})]}),Object(v.jsx)(m.a,{}),Object(v.jsx)(j.a,{breadcrumb:{pagename:"Treands & Blogs"}}),Object(v.jsx)(N,{}),Object(v.jsx)(d.a,{})]})}}]),s}(n.Component);t.default=k},236:function(e,t,s){"use strict";var i=s(67),a=s(68),r=s(69),c=s(70),n=s(0),l=s(20),o=s(2),m=function(e){Object(r.a)(s,e);var t=Object(c.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"footer-top",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row footer-btn-wrapper",children:[Object(o.jsxs)("div",{className:"col-lg-7 footer-widget",children:[Object(o.jsx)("h4",{children:"Download Our App"}),Object(o.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "})]}),Object(o.jsx)("div",{className:"col-lg-5 col-md-12 footer-widget",children:Object(o.jsxs)("div",{className:"footer-btn",children:[Object(o.jsxs)(l.b,{to:"#",className:"btn-custom-2 grey",children:[" ",Object(o.jsx)("i",{className:"flaticon-playstore"}),"Google Play"]}),Object(o.jsxs)(l.b,{to:"#",className:"btn-custom-2 grey",children:[" ",Object(o.jsx)("i",{className:"flaticon-apple"}),"App Store"]})]})})]})})})}}]),s}(n.Component);t.a=m},238:function(e,t,s){"use strict";var i=s(67),a=s(68),r=s(69),c=s(70),n=s(0),l=s(20),o=(s(236),s(234)),m=s(2),j=function(e){Object(r.a)(s,e);var t=Object(c.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("footer",{className:"acr-footer footer-2",children:[Object(m.jsx)("div",{className:"footer-middle",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-lg-5 col-sm-12 footer-widget",children:[Object(m.jsxs)("div",{className:"footer-logo",children:[" ",Object(m.jsx)("img",{src:o.a,alt:"logo"})," "]}),Object(m.jsx)("p",{children:"IndusLand Realtors"})]}),Object(m.jsxs)("div",{className:"col-lg-2 offset-lg-1 col-sm-4 footer-widget",children:[Object(m.jsx)("h5",{className:"widget-title",children:"Menu"}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:["                        ",Object(m.jsx)(l.b,{to:"/blog-list",children:"Trends & Blogs"})]}),Object(m.jsxs)("li",{children:["  ",Object(m.jsx)(l.b,{to:"listing-list",onClick:function(){e.props.sendlistingcategory("",!1)},children:"Properties"})]}),Object(m.jsxs)("li",{children:[" ",Object(m.jsx)(l.b,{to:"/our-partners",children:"Our Partners Page"})," "]}),Object(m.jsxs)("li",{children:[" ",Object(m.jsx)(l.b,{to:"/services",children:"Our Projects"})," "]}),Object(m.jsxs)("li",{children:[" ",Object(m.jsx)(l.b,{to:"/image-gallery",children:"Our Image Gallery"})," "]}),Object(m.jsxs)("li",{children:[" ",Object(m.jsx)(l.b,{to:"/portfolio",children:"Portfolio"})," "]})]})]}),Object(m.jsxs)("div",{className:"col-lg-2 col-sm-4 footer-widget",children:[Object(m.jsx)("h5",{className:"widget-title",children:"Information"}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[" ",Object(m.jsx)(l.b,{to:"/contact",children:"Contact Us"})]}),Object(m.jsx)("li",{children:Object(m.jsx)(l.b,{to:"/laws-of-the-land",children:"Laws of the Land"})}),Object(m.jsxs)("li",{children:["                        ",Object(m.jsx)(l.b,{to:"/faq",children:"FAQs"})]}),Object(m.jsxs)("li",{children:["                                                ",Object(m.jsx)(l.b,{to:"/glossary",children:"Glossary"})]})]})]})]})})}),Object(m.jsx)("div",{className:"footer-bottom",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-lg-7",children:Object(m.jsxs)("p",{className:"m-0",children:["\xa9 Copyright 2020 - ",Object(m.jsx)(l.b,{to:"#",children:"Invictus 360"})," All Rights Reserved."]})})})})})]})}}]),s}(n.Component);t.a=j},259:function(e,t,s){"use strict";var i=s(67),a=s(68),r=s(69),c=s(70),n=s(0),l=s(20),o=s.p+"static/media/properties1.9c3fe6f9.jpg",m=s(2),j=function(e){Object(r.a)(s,e);var t=Object(c.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"subheader bg-cover bg-center dark-overlay",style:{backgroundImage:"url(".concat(o,")")},children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"subheader-inner",children:[Object(m.jsx)("h1",{className:"text-white",children:this.props.breadcrumb.pagename}),Object(m.jsx)("nav",{"aria-label":"breadcrumb",children:Object(m.jsxs)("ol",{className:"breadcrumb",children:[Object(m.jsx)("li",{className:"breadcrumb-item",children:Object(m.jsxs)(l.b,{to:"/",children:[" ",Object(m.jsx)("i",{className:"fas fa-home"})," "]})}),Object(m.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:this.props.breadcrumb.pagename})]})})]})})})}}]),s}(n.Component);t.a=j},340:function(e){e.exports=JSON.parse('{"a":[{"id":1,"gridimg":"assets/img/blog/1.jpg","listimg":"assets/img/blog-list/1.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"What agencies are looking for in an agent","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"House"}],"totalcomment":7,"usercomment":[{"img":"assets/img/people/1.jpg"},{"img":"assets/img/people/5.jpg"}],"recent":true},{"id":2,"gridimg":"assets/img/blog/2.jpg","listimg":"assets/img/blog-list/2.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"Changing the way we sell and buy real estate","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Real Estate"},{"title":"Building"}],"totalcomment":"","usercomment":[],"recent":true},{"id":3,"gridimg":"assets/img/blog/3.jpg","listimg":"assets/img/blog-list/3.jpg","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 13, 2020","title":"Families, its the best time to start buying","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Agency"}],"totalcomment":3,"usercomment":[{"img":"assets/img/people/3.jpg"},{"img":"assets/img/people/4.jpg"}],"recent":true},{"id":4,"gridimg":"assets/img/blog/4.jpg","listimg":"assets/img/blog-list/4.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"Our all new duplex apartment is up for grabs","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Family"}],"totalcomment":"","usercomment":[],"recent":true},{"id":5,"gridimg":"assets/img/blog/5.jpg","listimg":"assets/img/blog-list/5.jpg","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 3, 2020","title":"Villa sales are going down this year, find out why","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Acres"}],"totalcomment":"","usercomment":[],"recent":false},{"id":6,"gridimg":"assets/img/blog/6.jpg","listimg":"assets/img/blog-list/6.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"Flats in wisconsin are being held for rental","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Baths"},{"title":"Rooms"}],"totalcomment":3,"usercomment":[{"img":"assets/img/people/3.jpg"},{"img":"assets/img/people/4.jpg"}],"recent":false}],"b":[{"id":1,"title":"Living Rooms","count":24},{"id":2,"title":"Real Estate","count":16},{"id":3,"title":"Kitchens","count":32},{"id":4,"title":"Flats","count":22},{"id":5,"title":"Luxury","count":15},{"id":6,"title":"Bed Rooms","count":8}],"c":[{"id":1,"userimg":"assets/img/people/1.jpg","username":"Randy Blue","commentdate":"December 10 2020","comment":"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.","replies":[{"id":11,"userimg":"assets/img/people/3.jpg","username":"Melany frank","commentdate":"December 10 2020","comment":"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches"}]},{"id":2,"userimg":"assets/img/people/2.jpg","username":"Heather Mclayn","commentdate":"December 8 2020","comment":"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches","replies":[]}]}')},430:function(e,t,s){"use strict";var i=s(67),a=s(68),r=s(69),c=s(70),n=s(0),l=s(2),o=function(e){Object(r.a)(s,e);var t=Object(c.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"pagination-loader",children:Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"#fff",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(l.jsx)("g",{transform:"translate(80,50)",children:Object(l.jsx)("g",{transform:"rotate(0)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:1,children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(45)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.875",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(l.jsx)("g",{transform:"translate(50,80)",children:Object(l.jsx)("g",{transform:"rotate(90)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.75",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(135)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.625",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(l.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(l.jsx)("g",{transform:"rotate(180)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.5",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(l.jsx)("g",{transform:"rotate(225)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.375",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(l.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(l.jsx)("g",{transform:"rotate(270)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.25",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(l.jsx)("g",{transform:"rotate(315)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.125",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})})}}]),s}(n.Component);t.a=o},467:function(e,t,s){"use strict";var i=s(67),a=s(68),r=s(69),c=s(70),n=s(0),l=s(20),o=s(340),m=s(2),j=function(e){Object(r.a)(s,e);var t=Object(c.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"sidebar",children:[Object(m.jsxs)("div",{className:"sidebar-widget",children:[Object(m.jsx)("h5",{children:"Recent Posts"}),o.a.filter((function(e){return!0===e.recent})).slice(0,4).map((function(e,t){return Object(m.jsxs)("article",{className:"media",children:[Object(m.jsx)(l.b,{to:"/blog-single",children:Object(m.jsx)("img",{src:"/"+e.gridimg,alt:"post"})}),Object(m.jsxs)("div",{className:"media-body",children:[Object(m.jsxs)("h6",{children:[" ",Object(m.jsx)(l.b,{to:"/blog-single",children:e.title})," "]}),Object(m.jsx)("span",{children:e.postdate})]})]},t)}))]}),Object(m.jsxs)("div",{className:"sidebar-widget sidebar-list",children:[Object(m.jsx)("h5",{children:"Popular Categories"}),Object(m.jsx)("ul",{children:o.b.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsxs)(l.b,{to:"/blog-single",children:[" ",e.title," ",Object(m.jsxs)("span",{children:["(",e.count,")"]}),Object(m.jsx)("i",{className:"fas fa-chevron-right"})]})},t)}))})]})]})}}]),s}(n.Component);t.a=j}}]);
//# sourceMappingURL=69.269705f4.chunk.js.map