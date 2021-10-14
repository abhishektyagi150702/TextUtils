(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{21:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(14),n=a.n(o),l=(a(21),a(7)),i=a(8),r=a.n(i),d=a(10),h=a(0);function b(e){return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(h.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(h.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(h.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}b.prototypes={title:r.a.string},b.defaultProps={title:"TextUtils"};a(31);function j(e){var t=Object(c.useState)("Enter text here"),a=Object(l.a)(t,2),s=a[0],o=a[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{style:{color:"light"===e.mode?"black":"white"},children:[e.heading," "]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("textarea",{className:"form-control my-3",value:s,onChange:function(e){o(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white",caretColor:"auto"},id:"myBox",rows:"8"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(){var t=s.toUpperCase();o(t),e.showAlert("Text converted to uppercase","success")},children:"Convert to Uppercase"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(){var t=s.toLowerCase();o(t),e.showAlert("Text convertd to lowercase","success")},children:"Convert to Lowercase"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(){o(""),e.showAlert("Text is cleared","success")},children:"Clear"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text is copied","success")},children:"Copy text"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(){var t=s.split(/[ ]+/);o(t.join(" ")),e.showAlert("Extra space is removed","success")},children:"Remove Space"})]})]}),Object(h.jsxs)("div",{className:"container my-4",style:{color:"light"===e.mode?"black":"white"},children:[Object(h.jsx)("h3",{children:"This is text summary"}),Object(h.jsxs)("p",{children:["  ",s.split(" ").filter((function(e){return 0!==e.length})).length," word and ",s.length," characters"]}),Object(h.jsxs)("p",{children:[8e-4*s.split(" ").length," minutes to read"]}),Object(h.jsx)("h3",{children:"Preview"}),Object(h.jsx)("p",{children:s.length>0?s:"Enter something in the text box to preview"})]})]})}function u(e){return e.alert&&Object(h.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(h.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})}function m(){var e=Object(c.useState)({color:"black",backgroundColor:"white"}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)("Enable Dark mode"),n=Object(l.a)(o,2),i=n[0],r=n[1];return Object(h.jsxs)("div",{className:"container",style:a,children:[Object(h.jsx)("h2",{className:"my-3",children:"About Us "}),Object(h.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(h.jsx)("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(h.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(h.jsxs)("div",{className:"accordion-body",style:a,children:[Object(h.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(h.jsx)("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(h.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(h.jsxs)("div",{className:"accordion-body",style:a,children:[Object(h.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(h.jsx)("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(h.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(h.jsxs)("div",{className:"accordion-body",style:a,children:[Object(h.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(h.jsx)("button",{type:"button",onClick:function(){"black"===a.color?(s({color:"white",backgroundColor:"black",border:"1px solid white"}),r("Enable Light mode")):(s({color:"black",backgroundColor:"white"}),r("Enable Dark mode"))},className:"btn btn-primary my-3",children:i})]})}var p=a(2);var x=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null),n=Object(l.a)(o,2),i=n[0],r=n[1],x=function(e,t){r({msg:e,type:t}),setTimeout((function(){r(null)}),1500)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(b,{title:"TextUtlis",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="grey",x("Dark mode has been enabled","success")):(s("light"),document.body.style.backgroundColor="white",x("Light mode has been enabled","success"))}}),Object(h.jsx)(u,{alert:i}),Object(h.jsx)("div",{className:"container my-3",children:Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{exact:!0,path:"/about",children:Object(h.jsx)(m,{})}),Object(h.jsx)(p.a,{exact:!0,path:"/",children:Object(h.jsx)(j,{showAlert:x,heading:"Enter the text to analyze",mode:a})})]})})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),o(e),n(e)}))};n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),g()}},[[32,1,2]]]);
//# sourceMappingURL=main.d5c85a53.chunk.js.map