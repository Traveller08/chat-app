(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{46:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(37),r=c.n(s),i=(c(71),c(19)),j=c(17),l=(c(72),c(15)),o=c(39),b=c(56),d=c(57),u=(c(73),c(0)),O=c(58),x=c(55),h=c(6);var p=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(l.a)(s,2),j=(r[0],r[1]),p=function(){return n(!1)},m=function(){window.innerWidth<=960?j(!1):j(!0)};return Object(a.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(u.b.Provider,{value:{color:"black"},children:Object(h.jsx)("div",{className:"navbr",children:Object(h.jsxs)("div",{className:"navbr-container container",children:[Object(h.jsx)(i.b,{to:"/home",className:"navbr-logo",onClick:p,style:{fontWeight:"900"},children:"Chit Chat"}),Object(h.jsx)("div",{className:"menu-icon",onClick:function(){return n(!c)},children:c?Object(h.jsx)(o.c,{}):Object(h.jsx)(o.a,{})}),Object(h.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(h.jsx)("li",{className:"nav-item  m-rght",children:Object(h.jsx)("div",{className:"nav-links",children:Object(h.jsxs)("div",{className:"input-grp-div",children:[Object(h.jsx)(x.a,{className:"search-icon"}),Object(h.jsx)("input",{className:"grp-input",style:{fontSize:"14px"}})]})})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.b,{to:"/home",className:"nav-links",onClick:p,children:Object(h.jsx)(b.a,{style:{fontSize:"24px"},className:"icn"})})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.b,{to:"/direct/inbox",className:"nav-links",onClick:p,children:Object(h.jsx)(o.b,{style:{fontSize:"24px"},className:"icn"})})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.b,{to:"/create",className:"nav-links",onClick:p,children:Object(h.jsx)(d.a,{style:{fontSize:"24px"},className:"icn"})})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.b,{to:"/profile",className:"nav-links",onClick:p,children:Object(h.jsx)(O.a,{style:{fontSize:"24px"},className:"icn"})})})]})]})})})})};function m(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{}),Object(h.jsxs)("div",{className:"chat-mid-part",children:[Object(h.jsxs)("div",{className:"top-bar",children:[Object(h.jsx)("div",{className:"top-left"}),Object(h.jsx)("div",{className:"top-right"})]}),Object(h.jsxs)("div",{className:"bottom-bar",children:[Object(h.jsx)("div",{className:"contact-list"}),Object(h.jsx)("div",{className:"contact-chat"})]})]})]})}c(82);function f(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"create-mid-part"})})}c(83);function v(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"profile-mid-part"})})}var N=c(59),g=c(60),w=c(61),y=Object(N.a)({apiKey:"AIzaSyCM5sGZq0fxlEktJkc7eVTY29tazLG7PHE",authDomain:"chit-chat-app-6d1fa.firebaseapp.com",projectId:"chit-chat-app-6d1fa",storageBucket:"chit-chat-app-6d1fa.appspot.com",messagingSenderId:"863712027845",appId:"1:863712027845:web:f16546c01eaf811aa23cac"}),k=Object(g.a)(y),S=(Object(w.a)(y),c(32)),C=n.a.createContext();function P(){return Object(a.useContext)(C)}function L(e){var t=e.children,c=Object(a.useState)(),n=Object(l.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(!0),j=Object(l.a)(i,2),o=j[0],b=j[1];Object(a.useEffect)((function(){return Object(S.c)(k,(function(e){r(e),b(!1)}))}),[]);var d={currentUser:s,login:function(e,t){return Object(S.e)(k,e,t)},signup:function(e,t){return Object(S.a)(k,e,t)},logout:function(){return Object(S.f)(k)},resetPassword:function(e){return Object(S.d)(k,e)},updateEmail:function e(t){return e(k.currentUser)},updatePassword:function e(t){return e(k.currentUser)}};return Object(h.jsx)(C.Provider,{value:d,children:!o&&t})}var E=c(1),U=c.n(E),G=c(5),R=c(96),F=c(94),q=c(95),z=c(92);c(46);function I(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),n=P().signup,s=Object(a.useState)(""),r=Object(l.a)(s,2),o=r[0],b=r[1],d=Object(a.useState)(!1),u=Object(l.a)(d,2),O=u[0],x=u[1],p=Object(j.g)();function m(){return(m=Object(G.a)(U.a.mark((function a(s){return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.preventDefault(),t.current.value===c.current.value){a.next=3;break}return a.abrupt("return",b("Passwords do not match"));case 3:return a.prev=3,b(""),x(!0),a.next=8,n(e.current.value,t.current.value);case 8:p.push("/"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),b("Failed to create an account");case 14:x(!1);case 15:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return Object(h.jsx)(z.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(h.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(h.jsxs)(R.a,{className:"func-card",children:[Object(h.jsxs)(R.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),o&&Object(h.jsx)(F.a,{variant:"danger",children:o}),Object(h.jsxs)(q.a,{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(h.jsxs)(q.a.Group,{id:"email",children:[Object(h.jsx)(q.a.Label,{children:"Email"}),Object(h.jsx)(q.a.Control,{type:"email",ref:e,required:!0})]}),Object(h.jsxs)(q.a.Group,{id:"password",children:[Object(h.jsx)(q.a.Label,{children:"Password"}),Object(h.jsx)(q.a.Control,{type:"password",ref:t,required:!0})]}),Object(h.jsxs)(q.a.Group,{id:"password-confirm",children:[Object(h.jsx)(q.a.Label,{children:"Password Confirmation"}),Object(h.jsx)(q.a.Control,{type:"password",ref:c,required:!0})]}),Object(h.jsx)("button",{disabled:O,className:"w-100 last-btn",type:"submit",children:"Sign Up"})]})]}),Object(h.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(h.jsx)(i.b,{to:"/login",children:"Log In"})]})]})})})}function B(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=P().login,n=Object(a.useState)(""),s=Object(l.a)(n,2),r=s[0],o=s[1],b=Object(a.useState)(!1),d=Object(l.a)(b,2),u=d[0],O=d[1],x=Object(j.g)();function p(){return(p=Object(G.a)(U.a.mark((function a(n){return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,o(""),O(!0),a.next=6,c(e.current.value,t.current.value);case 6:x.push("/home"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),o("Failed to log in");case 12:O(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(h.jsx)(z.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(h.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(h.jsxs)(R.a,{className:"func-card",children:[Object(h.jsxs)(R.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),r&&Object(h.jsx)(F.a,{variant:"danger",children:r}),Object(h.jsxs)(q.a,{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(h.jsxs)(q.a.Group,{id:"email",children:[Object(h.jsx)(q.a.Label,{children:"Email"}),Object(h.jsx)(q.a.Control,{type:"email",ref:e,required:!0})]}),Object(h.jsxs)(q.a.Group,{id:"password",children:[Object(h.jsx)(q.a.Label,{children:"Password"}),Object(h.jsx)(q.a.Control,{type:"password",ref:t,required:!0})]}),Object(h.jsx)("button",{disabled:u,className:"w-100 last-btn",type:"submit",children:"Log In"})]}),Object(h.jsx)("div",{className:"w-100 text-center mt-3",children:Object(h.jsx)(i.b,{to:"/forgot-password",children:"Forgot Password?"})})]}),Object(h.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(h.jsx)(i.b,{to:"/signup",children:"Sign Up"})]})]})})})}var D=c(43),H=c(64),W=["component"];function J(e){var t=e.component,c=Object(H.a)(e,W),a=P().currentUser;return Object(h.jsx)(j.b,Object(D.a)(Object(D.a)({},c),{},{render:function(e){return a?Object(h.jsx)(t,Object(D.a)({},e)):Object(h.jsx)(j.a,{to:"/login"})}}))}function A(){var e=Object(a.useRef)(),t=P().resetPassword,c=Object(a.useState)(""),n=Object(l.a)(c,2),s=n[0],r=n[1],j=Object(a.useState)(""),o=Object(l.a)(j,2),b=o[0],d=o[1],u=Object(a.useState)(!1),O=Object(l.a)(u,2),x=O[0],p=O[1];function m(){return(m=Object(G.a)(U.a.mark((function c(a){return U.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,d(""),r(""),p(!0),c.next=7,t(e.current.value);case 7:d("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),r("Failed to reset password");case 13:p(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(h.jsx)(z.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(h.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(h.jsxs)(R.a,{className:"func-card",children:[Object(h.jsxs)(R.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),s&&Object(h.jsx)(F.a,{variant:"danger",children:s}),b&&Object(h.jsx)(F.a,{variant:"success",children:b}),Object(h.jsxs)(q.a,{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(h.jsxs)(q.a.Group,{id:"email",children:[Object(h.jsx)(q.a.Label,{children:"Email"}),Object(h.jsx)(q.a.Control,{type:"email",ref:e,required:!0})]}),Object(h.jsx)("button",{disabled:x,className:"w-100 last-btn",type:"submit",children:"Reset Password"})]}),Object(h.jsx)("div",{className:"w-100 text-center mt-3",children:Object(h.jsx)(i.b,{to:"/login",children:"Login"})})]}),Object(h.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(h.jsx)(i.b,{to:"/signup",children:"Sign Up"})]})]})})})}var V=c(93);function K(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),n=P(),s=n.currentUser,r=n.updatePassword,o=n.updateEmail,b=Object(a.useState)(""),d=Object(l.a)(b,2),u=d[0],O=d[1],x=Object(a.useState)(!1),p=Object(l.a)(x,2),m=p[0],f=p[1],v=Object(j.g)();return Object(h.jsxs)(z.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:[Object(h.jsx)(R.a,{children:Object(h.jsxs)(R.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),u&&Object(h.jsx)(F.a,{variant:"danger",children:u}),Object(h.jsxs)(q.a,{onSubmit:function(a){if(a.preventDefault(),t.current.value!==c.current.value)return O("Passwords do not match");var n=[];f(!0),O(""),e.current.value!==s.email&&n.push(o(e.current.value)),t.current.value&&n.push(r(t.current.value)),Promise.all(n).then((function(){v.push("/")})).catch((function(){O("Failed to update account")})).finally((function(){f(!1)}))},children:[Object(h.jsxs)(q.a.Group,{id:"email",children:[Object(h.jsx)(q.a.Label,{children:"Email"}),Object(h.jsx)(q.a.Control,{type:"email",ref:e,required:!0,defaultValue:s.email})]}),Object(h.jsxs)(q.a.Group,{id:"password",children:[Object(h.jsx)(q.a.Label,{children:"Password"}),Object(h.jsx)(q.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(h.jsxs)(q.a.Group,{id:"password-confirm",children:[Object(h.jsx)(q.a.Label,{children:"Password Confirmation"}),Object(h.jsx)(q.a.Control,{type:"password",ref:c,placeholder:"Leave blank to keep the same"})]}),Object(h.jsx)(V.a,{disabled:m,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(h.jsx)("div",{className:"w-100 text-center mt-2",children:Object(h.jsx)(i.b,{to:"/",children:"Cancel"})})]})}c(87);c(88);function M(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=(t[0],t[1],P());c.currentUser,c.logout,Object(j.g)();return Object(h.jsxs)("div",{className:"page-container",children:[Object(h.jsx)(p,{}),Object(h.jsxs)("div",{className:"mid-part",children:[Object(h.jsx)("div",{className:"home-left"}),Object(h.jsx)("div",{className:"home-right"})]})]})}var T=function(){return Object(h.jsx)(i.a,{children:Object(h.jsx)(L,{children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(J,{path:"/home",exact:!0,component:M}),Object(h.jsx)(J,{path:"/direct/inbox",component:m}),Object(h.jsx)(J,{path:"/create",component:f}),Object(h.jsx)(J,{path:"/profile",exact:!0,component:v}),Object(h.jsx)(J,{path:"/update-profile",component:K}),Object(h.jsx)(j.b,{path:"/signup",exact:!0,component:I}),Object(h.jsx)(j.b,{path:"/login",exact:!0,component:B}),Object(h.jsx)(j.b,{path:"/forgot-password",component:A})]})})})};c(89);r.a.render(Object(h.jsx)(T,{}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.c7834161.chunk.js.map