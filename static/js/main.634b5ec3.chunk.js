(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),s=n.n(i),a=n(17),r=n.n(a),o=(n(66),n(43)),j=n(23),l=(n(67),n(102)),d=n(103),h=n(101),b=n(100),O=n(60),u=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],x=n(22),p=n(7),m=n(39),f=n(42);n(68);function g(){var e=Object(m.a)(["\n    font-size: 25px;\n    color: ",";\n  "]);return g=function(){return e},e}function v(){var e=Object(m.a)(["\n    padding: 20px;\n  "]);return v=function(){return e},e}function N(e){return Object(c.jsxs)("p",{children:["\uc7ac\uace0 : ",e.\uc7ac\uace0[0]]})}var S=function(e){var t=Object(i.useState)(!0),n=Object(j.a)(t,2),s=n[0],a=n[1],r=Object(i.useState)(""),o=Object(j.a)(r,2),l=o[0],d=o[1];Object(i.useEffect)((function(){var e=setTimeout((function(){a(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var h=Object(p.f)(),b=Object(p.g)().id,O=e.shoes.find((function(e){return e.id==b})),u=f.a.div(v()),x=f.a.div(g(),(function(e){return e.\uc0c9\uc0c1}));return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(u,{children:Object(c.jsx)(x,{className:"red","\uc0c9\uc0c1":"",children:"\uc0c1\uc138\uc81c\ubaa9\uc785\ub2c8\ub2e4."})}),l,Object(c.jsx)("input",{onChange:function(e){d(e.target.value)}}),!0===s?Object(c.jsx)("div",{className:"my-alert2",children:Object(c.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes1.jpg",width:"100%"})}),Object(c.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(c.jsx)("h4",{className:"pt-5",children:O.title}),Object(c.jsx)("p",{children:O.content}),Object(c.jsx)("p",{children:O.price}),Object(c.jsx)(N,{"\uc7ac\uace0":e.\uc7ac\uace0}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){e.\uc7ac\uace0\ubcc0\uacbd([9,10,11])},children:"\uc8fc\ubb38\ud558\uae30"}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){h.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},k=n(57),w=n.n(k);function B(e){return Object(c.jsxs)("div",{className:"col-md-4",children:[Object(c.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(c.jsx)("h4",{children:e.shoes.title}),Object(c.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price," "]})]})}var C=function(){var e=Object(i.useState)(u),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)([10,11,12]),r=Object(j.a)(a,2),m=r[0],f=r[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)(l.a,{bg:"light",expand:"lg",children:[Object(c.jsx)(l.a.Brand,{href:"#home",children:"Shoe Shop"}),Object(c.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(d.a,{className:"ml-auto",children:[Object(c.jsx)(d.a.Link,{as:x.b,to:"/",children:"Home"}),Object(c.jsx)(d.a.Link,{as:x.b,to:"/detail",children:"Detail"}),Object(c.jsxs)(h.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(c.jsx)(h.a.Item,{href:"#action/3.1",children:"Action"}),Object(c.jsx)(h.a.Item,{href:"#action/3.2",children:"Another action"}),Object(c.jsx)(h.a.Item,{href:"#action/3.3",children:"Something"}),Object(c.jsx)(h.a.Divider,{}),Object(c.jsx)(h.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(c.jsxs)(p.c,{children:[Object(c.jsxs)(p.a,{exact:!0,path:"/",children:[Object(c.jsxs)(b.a,{className:"background",children:[Object(c.jsx)("h1",{children:"Hello, world!"}),Object(c.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(c.jsx)("p",{children:Object(c.jsx)(O.a,{variant:"primary",children:"Learn more"})})]}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(c.jsx)(B,{shoes:n[t],i:t},t)}))}),Object(c.jsx)("div",{className:"btn btn-primary",onClick:function(){w.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){s([].concat(Object(o.a)(n),Object(o.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(c.jsx)(p.a,{path:"/detail/:id",children:Object(c.jsx)(S,{shoes:n,"\uc7ac\uace0":m,"\uc7ac\uace0\ubcc0\uacbd":f})}),Object(c.jsx)(p.a,{path:"/:id",children:Object(c.jsx)("div",{children:"\uc544\ubb34\uac70\ub098"})})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x.a,{children:Object(c.jsx)(C,{})})}),document.getElementById("root")),y()}},[[94,1,2]]]);
//# sourceMappingURL=main.634b5ec3.chunk.js.map