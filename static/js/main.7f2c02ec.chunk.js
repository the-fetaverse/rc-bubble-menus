(this.webpackJsonpbubble_menus=this.webpackJsonpbubble_menus||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),r=n.n(a),l=(n(10),n.p+"static/media/logo.6ad422bb.svg"),i=n(2),o=n(3),b=n(0),j=[{page:"products",links:[{label:"payment",icon:Object(b.jsx)(i.d,{}),url:"/products"},{label:"terminal",icon:Object(b.jsx)(i.d,{}),url:"/products"},{label:"connect",icon:Object(b.jsx)(i.d,{}),url:"/products"}]},{page:"developers",links:[{label:"plugins",icon:Object(b.jsx)(i.b,{}),url:"/products"},{label:"libraries",icon:Object(b.jsx)(i.b,{}),url:"/products"},{label:"help",icon:Object(b.jsx)(i.b,{}),url:"/products"},{label:"billing",icon:Object(b.jsx)(i.b,{}),url:"/products"}]},{page:"company",links:[{label:"about",icon:Object(b.jsx)(i.c,{}),url:"/products"},{label:"customers",icon:Object(b.jsx)(i.c,{}),url:"/products"}]}],u=s.a.createContext(),d=function(e){var t=e.children,n=Object(c.useState)(!1),s=Object(o.a)(n,2),a=s[0],r=s[1],l=Object(c.useState)(!1),i=Object(o.a)(l,2),d=i[0],O=i[1],p=Object(c.useState)({}),h=Object(o.a)(p,2),m=h[0],x=h[1],f=Object(c.useState)({page:"",links:[]}),v=Object(o.a)(f,2),g=v[0],N=v[1];return Object(b.jsx)(u.Provider,{value:{isSubmenuOpen:d,isSidebarOpen:a,openSubmenu:function(e,t){var n=j.find((function(t){return t.page===e}));N(n),x(t),O(!0)},openSidebar:function(){r(!0)},closeSubmenu:function(){O(!1)},closeSidebar:function(){r(!1)},location:m,page:g},children:t})},O=function(){return Object(c.useContext)(u)},p=function(){var e=O(),t=e.openSidebar,n=e.openSubmenu,c=e.closeSubmenu,s=function(e){var t=e.target.textContent,c=e.target.getBoundingClientRect(),s=(c.left+c.right)/2,a=c.bottom-3;n(t,{center:s,bottom:a})};return Object(b.jsx)("nav",{className:"nav",onMouseOver:function(e){e.target.classList.contains("link-btn")||c()},children:Object(b.jsxs)("div",{className:"nav-center",children:[Object(b.jsxs)("div",{className:"nav-header",children:[Object(b.jsx)("img",{src:l,alt:"stripe logo",className:"nav-logo"}),Object(b.jsx)("button",{className:"btn toggle-btn",onClick:t,children:Object(b.jsx)(i.a,{})})]}),Object(b.jsxs)("ul",{className:"nav-links",children:[Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:"link-btn",onMouseOver:s,children:"products"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:"link-btn",onMouseOver:s,children:"developers"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:"link-btn",onMouseOver:s,children:"company"})})]}),Object(b.jsx)("button",{className:"btn signin-btn",children:"sign in"})]})})},h=n.p+"static/media/phone.94a7a4fe.svg",m=function(){var e=O().closeSubmenu;return Object(b.jsx)("section",{className:"hero",onMouseOver:e,children:Object(b.jsxs)("div",{className:"hero-center",children:[Object(b.jsxs)("article",{className:"hero-info",children:[Object(b.jsx)("h1",{children:"Payments infrastructure for the internet"}),Object(b.jsx)("p",{children:"Millions of companies of all sizes - from startups to Fortune 500s - use Stripe's software and APIs to accept payments, send payouts, and manage their business online."}),Object(b.jsx)("button",{className:"btn",children:"Start Now"})]}),Object(b.jsx)("article",{className:"hero-images",children:Object(b.jsx)("img",{src:h,alt:"phone",className:"phone-img"})})]})})},x=function(){var e=O(),t=e.isSidebarOpen,n=e.closeSidebar;return Object(b.jsx)("aside",{className:"".concat(t?"sidebar-wrapper show":"sidebar-wrapper"),children:Object(b.jsxs)("div",{className:"sidebar",children:[Object(b.jsx)("button",{className:"close-btn",onClick:n,children:Object(b.jsx)(i.e,{})}),Object(b.jsx)("div",{className:"sidebar-links",children:j.map((function(e,t){var n=e.links,c=e.page;return Object(b.jsxs)("article",{children:[Object(b.jsx)("h4",{children:c}),Object(b.jsx)("div",{className:"sidebar-sublinks",children:n.map((function(e,t){var n=e.url,c=e.icon,s=e.label;return Object(b.jsxs)("a",{href:n,children:[c,s]},t)}))})]},t)}))})]})})},f=function(){var e=O(),t=e.isSubmenuOpen,n=e.location,s=e.page,a=s.page,r=s.links,l=Object(c.useState)("col-2"),i=Object(o.a)(l,2),j=i[0],u=i[1],d=Object(c.useRef)(null);return Object(c.useEffect)((function(){u("col-2");var e=d.current,t=n.center,c=n.bottom;e.style.left="".concat(t,"px"),e.style.top="".concat(c,"px"),3===r.length&&u("col-3"),r.length>3&&u("col-4")}),[n,r]),Object(b.jsxs)("aside",{className:"".concat(t?"submenu show":"submenu"),ref:d,children:[Object(b.jsx)("h4",{children:a}),Object(b.jsx)("div",{className:"submenu-center ".concat(j),children:r.map((function(e,t){var n=e.label,c=e.icon,s=e.url;return Object(b.jsxs)("a",{href:s,children:[c,n]},t)}))})]})};var v=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsx)(x,{}),Object(b.jsx)(m,{}),Object(b.jsx)(f,{})]})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(d,{children:Object(b.jsx)(v,{})})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7f2c02ec.chunk.js.map