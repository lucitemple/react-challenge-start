(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(19),s=n.n(a),r=n(17),i=n(4),j=n(12),o=n(2),l=n(0),u=function(t){var e=t.contacts,n=t.onChange;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("label",{htmlFor:"contacts"}),Object(l.jsxs)("select",{name:"contacts",id:"contacts",onChange:n,children:[Object(l.jsx)("option",{value:"no contact selected",children:"No contact selected"},"default"),e.map((function(t){return Object(l.jsx)("option",{value:t.contactName,children:t.contactName},t.phone)}))]},-1)]})},b=function(t){var e=t.contacts,n=t.title,c=t.setTitle,a=(t.contact,t.setContact),s=t.date,r=t.setDate,j=t.time,o=t.setTime,b=t.handleSubmit;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{className:"AppointmentForm",onSubmit:b,children:[Object(l.jsx)(u,{contacts:e,onChange:function(t){return a(t.target.value)}}),Object(l.jsx)("input",{type:"text",value:n,placeholder:"Title",onChange:function(t){return c(t.target.value)}}),Object(l.jsx)("input",{type:"date",value:s,min:function(){var t=(new Date).toLocaleDateString("en-US").split("/"),e=Object(i.a)(t,3),n=e[0],c=e[1],a=e[2];return"".concat(a,"-").concat(n.padStart(2,"0"),"-").concat(c.padStart(2,"0"))}(),onChange:function(t){return r(t.target.value)}}),Object(l.jsx)("input",{type:"time",value:j,onChange:function(t){return o(t.target.value)}}),Object(l.jsx)("button",{children:"Submit"})]})})},O=function(t){var e=t.info,n=Object.values(e);return Object(l.jsx)("div",{className:"tile-container",children:n.map((function(t,e){return 0===e?Object(l.jsx)("p",{className:"tile-title",children:t},e):Object(l.jsx)("p",{className:"tile",children:t},e)}))})},d=function(t){var e=t.array;return Object(l.jsx)("div",{children:e.map((function(t,e){return Object(l.jsx)(O,{info:t},e)}))})},h=function(t){var e=Object(c.useState)(""),n=Object(i.a)(e,2),a=n[0],s=n[1],r=Object(c.useState)(""),j=Object(i.a)(r,2),o=j[0],u=j[1],O=Object(c.useState)(""),h=Object(i.a)(O,2),m=h[0],p=h[1],x=Object(c.useState)(""),v=Object(i.a)(x,2),f=v[0],g=v[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Add Appointment"}),Object(l.jsx)(b,{title:a,setTitle:s,contact:o,setContact:u,date:m,setDate:p,time:f,setTime:g,handleSubmit:function(e){e.preventDefault(),t.addAppointment(a,o,m,f),s(""),u(""),p(""),g("")},contacts:t.contacts})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Appointments"}),Object(l.jsx)(d,{array:t.appointments})]})]})},m=n(20),p=function(t){t.contacts;var e=t.name,n=t.setName,c=t.phone,a=t.setPhone,s=t.email,r=t.setEmail,i=t.handleSubmit;return Object(l.jsxs)("form",{onSubmit:i,children:[Object(l.jsx)("input",{type:"text",placeholder:"name",value:e,onChange:function(t){var e=t.target;n(e.value)},required:!0}),Object(l.jsx)("input",{type:"number",placeholder:"phone number",pattern:"[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}",value:c,onChange:function(t){var e=t.target;a(e.value)},required:!0}),Object(l.jsx)("input",{type:"text",placeholder:"email",value:s,onChange:function(t){var e=t.target;r(e.value)},required:!0}),Object(l.jsx)("button",{children:"Submit"})]})},x=function(t){var e=t.contacts,n=t.addContact,a=Object(c.useState)(""),s=Object(i.a)(a,2),r=s[0],j=s[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),b=u[0],O=u[1],h=Object(c.useState)(""),x=Object(i.a)(h,2),v=x[0],f=x[1],g=Object(c.useState)(!1),S=Object(i.a)(g,2),C=S[0],y=S[1];return Object(c.useEffect)((function(){var t,n=Object(m.a)(e);try{for(n.s();!(t=n.n()).done;){var c=t.value;return r===c.name&&y(!0),!1}}catch(a){n.e(a)}finally{n.f()}}),[r,e]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Add Contact"}),Object(l.jsx)(p,{name:r,phone:b,email:v,setName:j,setPhone:O,setEmail:f,handleSubmit:function(t){t.preventDefault(),C||(n(r,b,v),j(""),O(""),f(""))}})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(d,{array:t.contacts})]})]})};var v=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)([]),u=Object(i.a)(s,2),b=u[0],O=u[1],d="/contacts",m="/appointments";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("nav",{children:[Object(l.jsx)(j.b,{to:d,activeClassName:"active",children:"Contacts"}),Object(l.jsx)(j.b,{to:m,activeClassName:"active",children:"Appointments"})]}),Object(l.jsx)("main",{children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",children:Object(l.jsx)(o.a,{to:d})}),Object(l.jsx)(o.b,{path:d,children:Object(l.jsx)(x,{contacts:n,addContact:function(t,e,n){var c={contactName:t,phone:e,email:n};a((function(t){return[].concat(Object(r.a)(t),[c])}))}})}),Object(l.jsx)(o.b,{path:m,children:Object(l.jsx)(h,{appointments:b,addAppointment:function(t,e,n,c){var a={title:t,contact:e,date:n,time:c};O((function(t){return[].concat(Object(r.a)(t),[a])}))},contacts:n})})]})})]})};n(32);s.a.render(Object(l.jsx)(j.a,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.8f63bc9d.chunk.js.map