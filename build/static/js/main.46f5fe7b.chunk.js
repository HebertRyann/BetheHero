(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/logo.62e865e1.svg"},30:function(e,t,a){e.exports=a.p+"static/media/heroes.1f4b5508.png"},32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(37),a(9)),u=a(1),s=a(7),i=a.n(s),m=a(11),p=a(3),f=a(10),E=a(29),h=a.n(E).a.create({baseURL:"http://localhost:3333"}),d=(a(56),a(30)),b=a.n(d),v=a(12),g=a.n(v);function O(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(u.f)("");function s(){return(s=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.post("sessions",{id:a});case 4:n=e.sent,localStorage.setItem("ongId",a),localStorage.setItem("ongName",n.data.name),l.push("/profile"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Falaha");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"logon-container"},r.a.createElement("section",{className:"form"},r.a.createElement("img",{src:g.a,alt:"Be The Hero"}),r.a.createElement("form",{onSubmit:function(e){return s.apply(this,arguments)}},r.a.createElement("h1",null,"Fa\xe7a Seu logon"),r.a.createElement("input",{placeholder:"Sua ID",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Entrar"),r.a.createElement(o.b,{className:"back-link",to:"/register"},r.a.createElement(f.b,{size:16,color:"#E02041"}),"N\xe3o Tenho Cadastro"))),r.a.createElement("img",{src:b.a,alt:"heroes"}))}a(62);function j(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),E=s[0],d=s[1],b=Object(n.useState)(""),v=Object(p.a)(b,2),O=v[0],j=v[1],C=Object(n.useState)(""),N=Object(p.a)(C,2),S=N[0],y=N[1],k=Object(n.useState)(""),x=Object(p.a)(k,2),w=x[0],I=x[1],D=Object(u.f)();function z(){return(z=Object(m.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:a,email:E,whatsapp:O,city:S,uf:w},e.prev=2,e.next=5,h.post("ongs",n);case 5:r=e.sent,alert("Cadastro realizado com sucesso: ".concat(r.data.id)),D.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert("erro");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"register-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:g.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastro"),r.a.createElement("p",null,"Fa\xe7a seu Cadastro, Entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG."),r.a.createElement(o.b,{className:"back-link",to:"/"},r.a.createElement(f.a,{size:16,color:"#E02041"}),"N\xe3o Tenho Cadastro")),r.a.createElement("form",{onSubmit:function(e){return z.apply(this,arguments)}},r.a.createElement("input",{placeholder:"Nome Da ONG",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"email",placeholder:"E-mail",value:E,onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{placeholder:"Whatsapp",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{placeholder:"Cidade",value:S,onChange:function(e){return y(e.target.value)}}),r.a.createElement("input",{placeholder:"UF",style:{width:80},value:w,onChange:function(e){return I(e.target.value)}})),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}a(63);function C(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(u.f)(),s=localStorage.getItem("ongName"),E=localStorage.getItem("ongId");function d(){return(d=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.delete("incidents/".concat(t),{headers:{Authorization:E}});case 3:c(a.filter((function(e){return e.id!==t}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Error ao deletar");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){h.get("profile",{headers:{Authorization:E}}).then((function(e){c(e.data)}))}),[E]),r.a.createElement("div",{className:"profile-container"},r.a.createElement("header",null,r.a.createElement("img",{src:g.a,alt:"Be The Hero"}),r.a.createElement("span",null,"Bem Vinda, ",s),r.a.createElement(o.b,{className:"button",to:"/incidents/new"},"Cadastra Novo Caso"),r.a.createElement("button",{onClick:function(){localStorage.clear(),l.push("/")},type:"button"},r.a.createElement(f.c,{size:18,color:"#E02041"}))),r.a.createElement("h1",null,"Casos Cadastrados"),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("strong",null,"CASOS:"),r.a.createElement("p",null,e.title),r.a.createElement("strong",null,"DESCRI\xc7AO:"),r.a.createElement("p",null,e.description),r.a.createElement("strong",null,"VALOR:"),r.a.createElement("p",null,Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.value)),r.a.createElement("button",{onClick:function(){return function(e){return d.apply(this,arguments)}(e.id)},type:"button"},r.a.createElement(f.d,{size:20,color:"#a8a8b3"})))}))))}a(64);function N(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),E=s[0],d=s[1],b=Object(n.useState)(""),v=Object(p.a)(b,2),O=v[0],j=v[1],C=Object(u.f)(),N=localStorage.getItem("ongId");function S(){return(S=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:a,description:E,value:O},e.prev=2,e.next=5,h.post("incidents",n,{headers:{Authorization:N}});case 5:C.push("/profile"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert("erro ao castradr caso");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"new-incident-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:g.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastra Novo Caso"),r.a.createElement("p",null,"Descreva o caso Detalhadamente para encontrar um heroi para resolver isso."),r.a.createElement(o.b,{className:"back-link",to:"/profile"},r.a.createElement(f.a,{size:16,color:"#E02041"}),"Voltar para Home")),r.a.createElement("form",{onSubmit:function(e){return S.apply(this,arguments)}},r.a.createElement("input",{placeholder:"Titulo Do Caso",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("textarea",{placeholder:"Descri\xe7ao",value:E,onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{placeholder:"Valor em Reais",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}function S(){return r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:O}),r.a.createElement(u.a,{path:"/register",component:j}),r.a.createElement(u.a,{path:"/profile",component:C}),r.a.createElement(u.a,{path:"/incidents/new",component:N})))}var y=function(){return r.a.createElement(S,null)};l.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.46f5fe7b.chunk.js.map