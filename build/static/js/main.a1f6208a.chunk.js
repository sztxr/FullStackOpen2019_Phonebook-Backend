(window.webpackJsonppart2=window.webpackJsonppart2||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(13),r=t.n(o),u=t(14),i=t(2),l=t(3),s=t.n(l),m="/api/contacts",f=function(){return s.a.get(m).then((function(e){return e.data}))},d=function(e){return s.a.post(m,e).then((function(e){return e.data}))},h=function(e,n){return s.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},p=function(e){var n=e.onSubmit,t=e.name,a=e.phone;return c.a.createElement("form",{onSubmit:n},c.a.createElement("div",null,"Name: ",c.a.createElement("input",{type:"text",value:t.value,name:"name",onChange:t.onChange}),c.a.createElement("br",null),"Phone: ",c.a.createElement("input",{type:"text",value:a.value,name:"phone",onChange:a.onChange})),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"add")))},v=function(e){var n=e.value,t=e.onChange;return c.a.createElement("p",null,"Search: ",c.a.createElement("input",{value:n,onChange:t}))},E=function(e){var n=e.contact,t=e.deleteContact;return c.a.createElement("li",{className:"contact"},c.a.createElement("strong",null,n.name)," \u2013 ",n.phone,c.a.createElement("button",{className:"btn btn-secondary",onClick:t},"delete"))},g=function(e){var n=e.contacts,t=e.deleteContact;return c.a.createElement("ul",null,n.map((function(e){return c.a.createElement(E,{key:e.id,contact:e,deleteContact:function(){return t(e.id)}})})))},C=function(e){var n=e.notification,t={backgroundColor:"success"===n.type?"#58ae5a":"#b92834"};return null===n.message?null:c.a.createElement("div",{className:"notification",style:t},n.message)},w=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),s=l[0],m=l[1],E=Object(a.useState)(""),w=Object(i.a)(E,2),j=w[0],O=w[1],S=Object(a.useState)(""),y=Object(i.a)(S,2),k=y[0],x=y[1],N=Object(a.useState)({message:null}),D=Object(i.a)(N,2),J=D[0],L=D[1];Object(a.useEffect)((function(){f().then((function(e){o(e)}))}),[]);var P=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";L({message:e,type:n}),setTimeout((function(){L({message:null})}),5e3)},A=""===k?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(C,{notification:J}),c.a.createElement(v,{value:k,onChange:function(e){x(e.target.value)}}),c.a.createElement("h2",null,"Add a new contact"),c.a.createElement(p,{onSubmit:function(e){e.preventDefault();var n=t.map((function(e){return e.name})),a={name:s,phone:j};if(n.includes(s)){var c=t.find((function(e){return e.name===s}));window.confirm("Contact ".concat(s," already exist, replace old phone number with one?"))&&h(c.id,a).then((function(e){o(t.map((function(n){return n.name!==s?n:e}))),m(""),O(""),P("Success: '".concat(s,"' has been updated"),"success")})).catch((function(e){o(t.filter((function(e){return e.id!==s.id}))),P("Error: '".concat(s,"' does not exist"),"error")}))}else d(a).then((function(e){o([].concat(Object(u.a)(t),[e])),m(""),O(""),P("Success: '".concat(s," has been added to the phone book'"),"success")}))},name:{value:s,onChange:function(e){m(e.target.value)}},phone:{value:j,onChange:function(e){O(e.target.value)}}}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(g,{contacts:A,deleteContact:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&b(n.id).then((function(){o(t.filter((function(n){return n.id!==e}))),P("Success: '".concat(n.name,"' has been deleted from the phone book"),"success")})).catch((function(a){o(t.filter((function(n){return n.id!==e}))),P("Error: '".concat(n.name,"' does not exist"),"error")}))}}))};t(37);r.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a1f6208a.chunk.js.map