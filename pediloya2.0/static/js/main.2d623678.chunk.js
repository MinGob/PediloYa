(this.webpackJsonppediloya2=this.webpackJsonppediloya2||[]).push([[0],{239:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(29),s=a.n(r),o=a(16),l=a(15),i=a(123),j=a(17),d=a(76),b=(a(129),a(244),{apiKey:"AIzaSyAe_o3Q_1ma9C8_s8v4CEC3UBpmjcf3cPM",authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyAe_o3Q_1ma9C8_s8v4CEC3UBpmjcf3cPM",REACT_APP_APP_ID:"1:521914190471:web:b534f4834ebbf440ca0622",REACT_APP_AUTH_DOMAIN:"pediloya-98b4f.firebaseapp.com",REACT_APP_MESSAGING_SENDER_ID:"521914190471",REACT_APP_PROJECT_ID:"pediloya-98b4f",REACT_APP_STORAGE_BUCKET:"pediloya-98b4f.appspot.com"}).AUTH_DOMAIN,projectId:"pediloya-98b4f",storageBucket:"pediloya-98b4f.appspot.com",messagingSenderId:"521914190471",appId:"1:521914190471:web:b534f4834ebbf440ca0622"}),u=d.a.initializeApp(b),x=u.auth(),m=a(1),O=Object(c.createContext)(),p=O.Provider,h=function(){return Object(c.useContext)(O)},f=function(e){var t=e.children,a=Object(c.useState)(),n=Object(j.a)(a,2),r=n[0],s=n[1],o=Object(c.useState)(!0),l=Object(j.a)(o,2),b=l[0],O=l[1];Object(c.useEffect)((function(){return x.onAuthStateChanged((function(e){s(e),O(!1)}))}),[]);var h=Object(c.useState)([]),f=Object(j.a)(h,2),y=f[0],g=f[1],v=Object(c.useState)(!0),C=Object(j.a)(v,2),N=C[0],w=C[1],R=Object(c.useState)(!1),S=Object(j.a)(R,2),P=S[0],I=S[1],E=Object(c.useState)(),A=Object(j.a)(E,2),G=A[0],D=A[1],T={currentUser:r,login:function(e,t){return x.signInWithEmailAndPassword(e,t)},signup:function(e,t){return x.createUserWithEmailAndPassword(e,t)},logout:function(){return g([]),w(!0),I(!1),x.signOut()},update:function(e){return x.currentUser.updateProfile({displayName:e})},getReferentes:function(){var e=d.a.firestore(u).collection("referentes");r&&e.where("areaid","==",r.uid).get().then((function(e){e.docs[0]?(e.forEach((function(e){g((function(t){return[].concat(Object(i.a)(t),[e.data()])}))})),w(!1),I(!0)):(w(!1),I(!1))}))},loadingReferentes:N,referenteExist:P,referentes:y,getBasicInfo:function(e,t,a,c){var n={nameRef:e,emailRef:t,areaRef:a,programaRef:c};console.log(n)},pedidoDisenoSubmited:function(e){console.log(e),D(e)},pedidoRedesSubmited:function(e){console.log(e),D(e)},newRequest:G};return Object(m.jsx)(p,{value:T,children:!b&&t})},y=a(64),g=a(124),v=function(e){var t=e.component,a=Object(g.a)(e,["component"]),c=h().currentUser;return Object(m.jsx)(l.b,Object(y.a)(Object(y.a)({},a),{},{render:function(e){return c?Object(m.jsx)(t,Object(y.a)({},e)):Object(m.jsx)(l.a,{to:"/login"})}}))},C=a(36),N=a.n(C),w=a(42),R=a(249),S=a(258),P=a(257),I=a(253),E=a(119),A=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=h().login,n=Object(c.useState)(""),r=Object(j.a)(n,2),s=r[0],o=r[1],i=Object(c.useState)(!1),d=Object(j.a)(i,2),b=d[0],u=d[1],x=Object(l.g)();function O(){return(O=Object(w.a)(N.a.mark((function c(n){var r;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,o(""),u(!0),r=e.current.value+"@pediloya.club",c.next=7,a(r,t.current.value);case 7:x.push("/"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),o("Failed to sign in");case 13:u(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(m.jsxs)(R.a,{className:"d-flex align-items-center flex-column",children:[Object(m.jsx)("h3",{className:"mb-5",children:"Plataforma Interna del equipo de Comunicaci\xf3n"}),Object(m.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(m.jsxs)(S.a,{className:"mb-5",children:[Object(m.jsx)(S.a.Header,{style:{fontSize:"1.22rem",fontWeight:"700"},children:"Ingresar"}),Object(m.jsxs)(S.a.Body,{children:[s&&Object(m.jsx)(P.a,{variant:"danger",children:s}),Object(m.jsxs)(I.a,{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(m.jsxs)(I.a.Group,{id:"email",children:[Object(m.jsx)(I.a.Label,{children:"Email"}),Object(m.jsx)(I.a.Control,{type:"text",ref:e,required:!0})]}),Object(m.jsxs)(I.a.Group,{id:"password",children:[Object(m.jsx)(I.a.Label,{children:"Contrase\xf1a"}),Object(m.jsx)(I.a.Control,{type:"password",ref:t,required:!0})]}),Object(m.jsx)(E.a,{disabled:b,className:"w-100",type:"submit",variant:"primary",children:"Vamos!"})]})]})]})})]})},G=function(){var e=h().currentUser;return Object(m.jsxs)("div",{className:"welcome",children:[Object(m.jsxs)("h3",{className:"mb-3",children:["\xa1Bienvenido ",Object(m.jsx)("span",{className:"text-info",children:e.displayName}),"!"]}),Object(m.jsx)("h5",{children:"\xa1Estamos mejorando la dinamica de nuestra comunicaci\xf3n!"}),Object(m.jsx)("p",{className:"mb-1",children:"A trav\xe9s de esta plataforma ped\xed dise\xf1os, publicaciones en redes, noticias web y hacenos llegar tus novedades para Somos."}),Object(m.jsx)("p",{children:"Adem\xe1s consulta los manuales de marca y contenidos web de GCBA."})]})},D=function(){return Object(m.jsx)("section",{className:"atajos",children:Object(m.jsx)(R.a,{className:"container",children:Object(m.jsxs)("div",{className:"row row-shortcut",children:[Object(m.jsxs)(o.b,{className:"col-md-3 col-sm-12 col-xs-12 shortcut",to:"/diseno",children:[Object(m.jsx)("span",{className:"bg-warning-lt",children:Object(m.jsx)("span",{className:"fa fa-pencil glyphicon glyphicon-user"})}),Object(m.jsx)("h3",{children:"Dise\xf1os"}),Object(m.jsx)("p",{children:"Promocion\xe1 la gesti\xf3n de tu \xe1rea"})]}),Object(m.jsxs)(o.b,{className:"col-md-3 col-sm-12 col-xs-12 shortcut",to:"/redes",children:[Object(m.jsx)("span",{className:"bg-blue-lt",children:Object(m.jsx)("span",{className:"fa fa-facebook glyphicon glyphicon-list-alt"})}),Object(m.jsx)("h3",{children:"Publicaci\xf3n en Redes"}),Object(m.jsx)("p",{children:"Compart\xed las novedades"})]}),Object(m.jsxs)(o.b,{className:"col-md-3 col-sm-12 col-xs-12 shortcut",to:"/test",children:[Object(m.jsx)("span",{className:"bg-violet-lt",children:Object(m.jsx)("span",{className:"fa fa-newspaper-o glyphicon glyphicon-phone"})}),Object(m.jsx)("h3",{children:"Web GCBA"}),Object(m.jsx)("p",{children:"Modific\xe1 y cre\xe1 contenido"})]}),Object(m.jsxs)(o.b,{className:"col-md-3 col-sm-12 col-xs-12 shortcut",to:"/testdiseno",children:[Object(m.jsx)("span",{className:"bg-success-lt",children:Object(m.jsx)("span",{className:"fa fa-users glyphicon glyphicon-tree-deciduous"})}),Object(m.jsx)("h3",{children:"Somos"}),Object(m.jsx)("p",{children:"Comunic\xe1 internamente"})]})]})})})},T=function(){var e=Object(l.g)(),t=h().logout;function a(){return(a=Object(w.a)(N.a.mark((function a(){return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t(!0);case 3:e.push("/login"),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.log("Failed to log out");case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))).apply(this,arguments)}return Object(m.jsxs)(R.a,{children:[Object(m.jsx)(G,{}),Object(m.jsx)(D,{}),Object(m.jsxs)(E.a,{variant:"danger",onClick:function(){return a.apply(this,arguments)},style:{marginTop:"1rem"},children:[Object(m.jsx)("i",{className:"fa fa-sign-out"})," Cerrar sesi\xf3n"]})]})},L=a(256),_=function(){return Object(m.jsx)(L.a,{className:"coronaAlert",children:Object(m.jsx)(R.a,{children:Object(m.jsxs)("a",{href:"https://www.buenosaires.gob.ar/coronavirus",target:"_blank",rel:"noreferrer",children:[Object(m.jsx)("span",{children:"Coronavirus (Covid-19):"})," clique\xe1 para leer toda la informaci\xf3n."]})})})},k=function(){return Object(m.jsx)(L.a,{className:"logoNav",children:Object(m.jsx)(R.a,{children:Object(m.jsx)("img",{alt:"Logo de la ciudad de buenos aires",src:"img/BA2016.png"})})})},z=a(250),F=a(259),H=function(){var e=Object(l.h)().pathname,t=e.replace("/","");return Object(m.jsx)(F.a,{children:Object(m.jsxs)(R.a,{children:[Object(m.jsx)("li",{className:"breadcrumb-item",children:Object(m.jsx)(o.b,{to:"/",children:"Inicio"})}),"/"===e?null:Object(m.jsx)(F.a.Item,{style:{color:"rgb(204, 204, 204)"},active:!0,href:"#",children:t})]})})},U=function(e){var t=e.props;return Object(m.jsx)(R.a,{children:Object(m.jsxs)("div",{className:"area-title",style:t?{}:{paddingBottom:"79px"},children:[Object(m.jsx)("h1",{children:"Ministerio de Gobierno"}),Object(m.jsx)("p",{className:"lead",children:"Fortaleciendo el ejercicio pleno de la autonom\xeda hacia la construcci\xf3n de una cultura de convivencia y gesti\xf3n responsable, abierta e innovadora entre la Ciudad, la Naci\xf3n, las Provincias y los Municipios."})]})})},B=a(254),M=a(252),W=function(e){var t=e.props,a=Object(l.g)(),c=Object(l.h)(),n=h().logout;function r(){return(r=Object(w.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(!0);case 3:a.push("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Failed to log out");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return console.log(c.pathname),Object(m.jsx)(B.a,{collapseOnSelect:!0,variant:"dark",expand:"lg",children:Object(m.jsxs)(R.a,{children:[Object(m.jsx)(B.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsx)(B.a.Collapse,{id:"responsive-navbar-nav",children:Object(m.jsxs)(L.a,{className:"d-flex justify-content-between w-100",children:[Object(m.jsxs)("div",{class:"d-flex",children:[Object(m.jsx)(L.a.Link,{href:"#features",children:"Material \xdatil"}),Object(m.jsx)(L.a.Link,{href:"#pricing",children:"Contacto"}),Object(m.jsx)(M.a,{title:"Atajos",id:"collasible-nav-dropdown",children:[{atajoTo:"/diseno",atajoText:"Dise\xf1o"},{atajoTo:"/redes",atajoText:"Redes"},{atajoTo:"/web",atajoText:"Web"},{atajoTo:"/somos",atajoText:"Somos"}].map((function(e){if("/"!==c.pathname&&e.atajoTo!==c.pathname)return Object(m.jsx)(o.b,{className:"dropdown-item",to:e.atajoTo,children:e.atajoText})}))})]}),Object(m.jsxs)(M.a,{title:t.toUpperCase(),id:"collasible-nav-dropdown",children:[Object(m.jsx)(o.b,{className:"dropdown-item",to:"profile",children:"Perfil"}),Object(m.jsx)(o.b,{className:"dropdown-item",to:"profile",children:"Pedidos"}),Object(m.jsx)(M.a.Divider,{}),Object(m.jsx)(E.a,{onClick:function(){return r.apply(this,arguments)},variant:"link",className:"dropdown-item",children:"Cerrar sesi\xf3n"})]})]})})]})})},q=function(){var e=h().currentUser;return Object(m.jsx)(z.a,{className:"minGobJumbo",children:Object(m.jsxs)("div",{className:"minGobJumboOverlay",children:[Object(m.jsx)(H,{}),e?Object(m.jsx)(U,{props:e.displayName}):Object(m.jsx)(U,{props:null}),e?Object(m.jsx)(W,{props:e.displayName}):null]})})},V=function(){return Object(m.jsxs)("header",{children:[Object(m.jsx)(_,{}),Object(m.jsx)(k,{}),Object(m.jsx)(q,{})]})},Q=function(){return Object(m.jsx)("footer",{children:Object(m.jsx)("div",{className:"footer",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(m.jsx)("a",{rel:"noreferrer",className:"navbar-brand bac-footer",href:"http://www.buenosaires.gob.ar",target:"_blank",title:"",children:null})}),Object(m.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(m.jsx)("div",{className:"sub-brand",children:Object(m.jsxs)("p",{children:["Comunicaci\xf3n Interna",Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"text-muted",children:"Ministerio de Gobierno"})]})})})]})})})})},J=a(251),K=a(118),Y=a(44),X=a.n(Y),Z=a(255),$=function(){var e=h(),t=e.pedidoDisenoSubmited,a=e.currentUser,n=Object(l.g)(),r=!1,s=Object(c.useRef)(""),o=Object(c.useRef)(""),i=Object(c.useRef)(""),d=Object(c.useRef)(""),b=Object(c.useRef)(""),u=Object(c.useState)(""),x=Object(j.a)(u,2),O=x[0],p=x[1],f=Object(c.useState)(Object(Z.a)(new Date,-10)),y=Object(j.a)(f,2),g=y[0],v=y[1],C=Object(c.useRef)(""),N=Object(c.useRef)(""),w=Object(c.useRef)(""),S=Object(c.useRef)(""),P=Object(c.useRef)(""),A=Object(c.useState)(!1),G=Object(j.a)(A,2),D=G[0],T=G[1],L=Object(c.forwardRef)((function(e,t){var a=e.value,c=e.onClick;return Object(m.jsx)("input",{name:"entry.1669131330",className:"btn btn-default ml-3",onClick:function(e){return c()},ref:C,defaultValue:a})}));return Object(m.jsxs)(R.a,{children:[Object(m.jsx)("h1",{className:"mb-4",children:"Inici\xe1 tu pedido de dise\xf1o"}),Object(m.jsxs)("h3",{children:[" \xbfC\xf3mo es el proceso?",Object(m.jsx)("button",{onClick:function(){return T(!D)},className:"fa ml-3 fa-".concat(D?"minus":"plus","-square"),style:{cursor:"pointer",padding:"0",border:"none"}})]}),Object(m.jsx)("div",{style:{textAlign:"center",display:D?"block":"none"},className:"mb-5 mt-3",children:Object(m.jsx)("img",{className:"img-fluid",src:"/img/diseno-tiempos.png"})}),Object(m.jsx)("hr",{}),Object(m.jsx)("iframe",{name:"hidden_iframe",title:"hidden_iframe",id:"hidden_iframe",style:{display:"none"},onLoad:function(){if(r){var e={id:a.uid,type:"Dise\xf1o",info:[{text:"Nombre: ",answer:s.current.value},{text:"Email: ",answer:o.current.value},{text:"Email para Copia:",answer:i.current.value},{text:"\xc1rea: ",answer:d.current.value},{text:"Programa: ",answer:b.current.value},{text:"Tipo de Pieza: ",answer:O},{text:"Fecha de Entrega del original: ",answer:C.current.value},{text:"Especificaciones: ",answer:N.current.value},{text:"Url para Im\xe1genes: ",answer:S.current.value},{text:"Observaciones: ",answer:P.current.value}]};n.push("/todobien"),t(e)}}}),Object(m.jsxs)(I.a,{action:"https://docs.google.com/forms/u/1/d/e/1FAIpQLScCaOCmpixdjN4FnOcbWsxF-cxvwxdQxQA_uWCWBlAvxqtyYQ/formResponse",onSubmit:function(){return r=!0},target:"hidden_iframe",method:"POST",className:"mb-5",children:[Object(m.jsxs)(I.a.Group,{controlId:"email",children:[Object(m.jsx)(I.a.Label,{children:"Tu nombre: "}),Object(m.jsx)(I.a.Control,{ref:s,name:"entry.45610068",type:"text",placeholder:"Juan Vecinos"})]}),Object(m.jsxs)(J.a,{children:[Object(m.jsx)(K.a,{children:Object(m.jsxs)(I.a.Group,{controlId:"CCemail",children:[Object(m.jsx)(I.a.Label,{children:"Correo Electr\xf3nico: "}),Object(m.jsx)(I.a.Control,{ref:o,name:"entry.1601509392",type:"text",placeholder:"tu.nombre@email.com"})]})}),Object(m.jsx)(K.a,{children:Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Correo Electr\xf3nico en copia: "}),Object(m.jsx)(I.a.Control,{ref:i,name:"entry.1060413570",type:"text",placeholder:"tu.nombre@email.com, otro.nombre@email.com"})]})})]}),Object(m.jsxs)(J.a,{children:[Object(m.jsx)(K.a,{children:Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"\xc1rea: "}),Object(m.jsx)(I.a.Control,{ref:d,name:"entry.22646789",type:"text",placeholder:"SS - DG - UPE"})]})}),Object(m.jsx)(K.a,{children:Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Programa (si aplica): "}),Object(m.jsx)(I.a.Control,{ref:b,name:"entry.1334255680",type:"text",placeholder:"ej: Conociendo BA, En la Ciudad, Vot\xe1s, etc"})]})})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)(I.a.Group,{children:[Object(m.jsx)(I.a.Label,{as:"legend",children:"Tipo de Pieza"}),Object(m.jsx)(I.a.Check,{type:"radio",label:"Pieza Digital",value:"Pieza Digital",name:"entry.1658896877",id:"formHorizontalRadios1",onChange:function(e){return p(e.target.value)}}),Object(m.jsx)(I.a.Check,{type:"radio",label:"Pieza Impresa",value:"Pieza Impresa",name:"entry.1658896877",id:"formHorizontalRadios2",onChange:function(e){return p(e.target.value)}}),Object(m.jsx)(I.a.Check,{type:"radio",label:"Ambas",value:"Ambas",name:"entry.1658896877",id:"formHorizontalRadios3",onChange:function(e){return p(e.target.value)}})]}),Object(m.jsxs)(I.a.Group,{children:[Object(m.jsx)(I.a.Label,{children:"Fecha de Entrega del Original:"}),Object(m.jsx)(X.a,{selected:g,onChange:function(e){return v(e)},minDate:Object(Z.a)(new Date,-10),placeholderText:Object(Z.a)(new Date,-10),customInput:Object(m.jsx)(L,{}),startDate:Object(Z.a)(g,-10),name:"entry.1669131330",dateFormat:"dd/MM/yyyy"}),Object(m.jsx)("small",{id:"datePickerHelp",className:"form-text text-muted",children:'*Si tenes un pedido urgente y la fecha m\xe1s pr\xf3xima posible es posterior, por favor dejanos una aclaraci\xf3n utilizando el campo "Observaciones".'})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Especificaciones: "}),Object(m.jsx)(I.a.Control,{ref:N,name:"entry.1806980425",as:"textarea",rows:3,placeholder:"Si elegiste digital, ejs: pieza para redes, mailing, firma para mail, etc\nSi elegiste impresa, ejs: Folleto doble faz, libro"})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Texto para la pieza: "}),Object(m.jsx)(I.a.Control,{ref:w,name:"entry.1751853484",as:"textarea",rows:6,placeholder:"Texto a situarse dentro de la pieza"}),Object(m.jsx)("small",{id:"datePickerHelp",className:"form-text text-muted",children:"*Si el texto tiene jerarquizaci\xf3n o es muy largo envialo como documento a continuaci\xf3n."})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Para enviarnos im\xe1genes o documentos subilos a GoogleDrive/DropBox y pega el enlace ac\xe1: "}),Object(m.jsx)(I.a.Control,{ref:S,name:"entry.258070727",type:"text",placeholder:"https://drive.google.com/file/etc.jpg"})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Observaciones: "}),Object(m.jsx)(I.a.Control,{ref:P,name:"entry.1641688495",as:"textarea",rows:6,placeholder:null})]}),Object(m.jsx)(E.a,{type:"submit",children:"Enviar"})]})]})},ee=function(){var e=h(),t=e.pedidoRedesSubmited,a=e.currentUser,n=Object(l.g)(),r=!1,s=Object(c.useRef)(""),i=Object(c.useRef)(""),d=Object(c.useRef)(""),b=Object(c.useRef)(""),u=Object(c.useRef)(""),x=Object(c.useState)(""),O=Object(j.a)(x,2),p=O[0],f=O[1],y=function(e){f(e.target.value)},g=Object(c.useRef)(""),v=Object(c.useState)(new Date),C=Object(j.a)(v,2),N=C[0],w=C[1],S=Object(c.useRef)(""),P=Object(c.useRef)(""),A=Object(c.useRef)(""),G=Object(c.forwardRef)((function(e,t){var a=e.value,c=e.onClick;return Object(m.jsx)("input",{name:"entry.1592263970",className:"btn btn-default ml-3",onClick:function(e){return c()},ref:S,defaultValue:a})}));return Object(m.jsxs)(R.a,{children:[Object(m.jsx)("h1",{className:"mb-4",children:"Inici\xe1 tu publicaci\xf3n en Redes"}),Object(m.jsx)("hr",{}),Object(m.jsx)("iframe",{name:"hidden_iframe",title:"hidden_iframe",id:"hidden_iframe",style:{display:"none"},onLoad:function(){if(r){var e={id:a.uid,type:"Dise\xf1o",info:[{text:"Nombre: ",answer:s.current.value},{text:"Email: ",answer:i.current.value},{text:"Email para Copia:",answer:d.current.value},{text:"\xc1rea: ",answer:b.current.value},{text:"Programa: ",answer:u.current.value},{text:"Tipo de publicaci\xf3n: ",answer:p},{text:"Texto para la publicaci\xf3n",answer:g.current.value},{text:"Fecha de publicaci\xf3n: ",answer:S.current.value},{text:"Url para Im\xe1genes: ",answer:P.current.value},{text:"Observaciones: ",answer:A.current.value}]};t(e),n.push("/todobien")}}}),Object(m.jsxs)(I.a,{action:"https://docs.google.com/forms/u/1/d/e/1FAIpQLSdDPsKHq_ldc8ofxbKPrHekyo3ZjVPBad4O1oEO7N5doK43rQ/formResponse",onSubmit:function(){return r=!0},target:"hidden_iframe",method:"POST",className:"mb-5",children:[Object(m.jsxs)(I.a.Group,{controlId:"email",children:[Object(m.jsx)(I.a.Label,{children:"Tu nombre: "}),Object(m.jsx)(I.a.Control,{ref:s,name:"entry.1626081267",type:"text",placeholder:"Juan Vecinos"})]}),Object(m.jsxs)(J.a,{children:[Object(m.jsx)(K.a,{children:Object(m.jsxs)(I.a.Group,{controlId:"CCemail",children:[Object(m.jsx)(I.a.Label,{children:"Correo Electr\xf3nico: "}),Object(m.jsx)(I.a.Control,{ref:i,name:"entry.711776014",type:"text",placeholder:"tu.nombre@email.com"})]})}),Object(m.jsx)(K.a,{children:Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Correo Electr\xf3nico en copia: "}),Object(m.jsx)(I.a.Control,{ref:d,name:"entry.2041551645",type:"text",placeholder:"tu.nombre@email.com, otro.nombre@email.com"})]})})]}),Object(m.jsxs)(J.a,{children:[Object(m.jsx)(K.a,{children:Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"\xc1rea: "}),Object(m.jsx)(I.a.Control,{ref:b,name:"entry.642123507",type:"text",placeholder:"SS - DG - UPE"})]})}),Object(m.jsx)(K.a,{children:Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Programa (si aplica): "}),Object(m.jsx)(I.a.Control,{ref:u,name:"entry.368642528",type:"text",placeholder:"ej: Conociendo BA, En la Ciudad, Vot\xe1s, etc"})]})})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)(I.a.Group,{children:[Object(m.jsx)(I.a.Label,{as:"legend",children:"Tipo de Publicaci\xf3n"}),Object(m.jsx)(I.a.Check,{type:"radio",label:"Flyer Digital*",value:"Flyer Digital",name:"entry.2142011305",id:"formHorizontalRadios1",onChange:function(e){return y(e)}}),Object(m.jsx)(I.a.Check,{type:"radio",label:"Album de fotos",value:"Album de fotos",name:"entry.2142011305",id:"formHorizontalRadios2",onChange:function(e){return y(e)}}),Object(m.jsx)(I.a.Check,{type:"radio",label:"Video",value:"Video",name:"entry.2142011305",id:"formHorizontalRadios3",onChange:function(e){return y(e)}}),Object(m.jsx)(I.a.Check,{type:"radio",label:"Nota",value:"Nota",name:"entry.2142011305",id:"formHorizontalRadios4",onChange:function(e){return y(e)}}),Object(m.jsxs)("small",{id:"datePickerHelp",className:"form-text text-muted",children:["*Si necesitas publicar un flyer digital, pedilo antes en ",Object(m.jsx)(o.b,{to:"/diseno",children:"Dise\xf1o"}),"."]})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Texto para la publicaci\xf3n: "}),Object(m.jsx)(I.a.Control,{ref:g,name:"entry.2140385531",as:"textarea",rows:5,placeholder:"EJ:\n\xa1Ahora tambi\xe9n te pod\xe9s casar por la tarde!\nEn la sede del Registro Civil central, en Uruguay 753, te pod\xe9s casar entre las 7:30 y 18:00 hs.\nPara m\xe1s informaci\xf3n, entr\xe1 en: http://bit.ly/RCSedes"})]}),Object(m.jsxs)(I.a.Group,{children:[Object(m.jsx)(I.a.Label,{children:"Fecha de Publicaci\xf3n:"}),Object(m.jsx)(X.a,{selected:N,onChange:function(e){return w(e)},customInput:Object(m.jsx)(G,{}),minDate:Object(Z.a)(new Date,1),name:"entry.1669131330",dateFormat:"dd/MM/yyyy"}),Object(m.jsx)("small",{id:"datePickerHelp",className:"form-text text-muted",children:"Si queres especificar una franja horario utiliz\xe1 el campo de observaciones m\xe1s abajo."})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Para enviarnos im\xe1genes o documentos subilos a GoogleDrive/DropBox y pega el enlace ac\xe1: "}),Object(m.jsx)(I.a.Control,{ref:P,name:"entry.105901830",type:"text",placeholder:"https://drive.google.com/file/etc.jpg"}),Object(m.jsx)("small",{id:"datePickerHelp",className:"form-text text-muted",children:"*Las imagenes deber\xe1n tener un tama\xf1o minimo de: 950 X 950px."})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Observaciones: "}),Object(m.jsx)(I.a.Control,{ref:A,name:"entry.1809015096",as:"textarea",rows:6,placeholder:null})]}),Object(m.jsx)(E.a,{type:"submit",children:"Enviar"})]})]})},te=(a(221),function(){var e=h().getBasicInfo,t=(Object(l.g)(),Object(c.useRef)()),a=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)();return Object(m.jsx)(R.a,{children:Object(m.jsxs)(I.a,{onSubmit:function(c){e(t.current.value,a.current.value,n.current.value,r.current.value),!0},target:"hidden_iframe",className:"mb-5",children:[Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"nombre"}),Object(m.jsx)(I.a.Control,{ref:t,name:"entry.83606157",type:"text",placeholder:""})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"email"}),Object(m.jsx)(I.a.Control,{ref:a,name:"entry.1061861810",type:"text",placeholder:""})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"area"}),Object(m.jsx)(I.a.Control,{ref:n,name:"entry.1611122149",type:"text",placeholder:""})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"programa"}),Object(m.jsx)(I.a.Control,{ref:r,name:"entry.358548957",type:"text",placeholder:""})]}),Object(m.jsx)(E.a,{variant:"primary",type:"submit",children:"Submit"})]})})}),ae=function(e){var t=e.props,a=t.key,c=t.value;return console.log(t),Object(m.jsx)(m.Fragment,{children:"Url para Im\xe1genes: "!==a&&"Email: "!==a?Object(m.jsxs)(J.a,{children:[Object(m.jsx)(K.a,{sm:6,md:3,children:a}),Object(m.jsx)(K.a,{sm:6,md:3,children:c})]}):Object(m.jsxs)(J.a,{children:[Object(m.jsx)(K.a,{sm:6,md:3,children:a}),Object(m.jsx)(K.a,{sm:6,md:3,children:Object(m.jsx)("a",{href:c,children:c})})]})})},ce=function(){var e=h().newRequest,t=e?e.info:null;return console.log(e),Object(m.jsxs)(R.a,{className:"todobien mb-5",children:[Object(m.jsx)("h3",{children:"Tu pedido:"}),t?t.map((function(e){return Object(m.jsx)(ae,{props:{key:e.text,value:e.answer}})})):Object(m.jsx)("p",{children:"No hay ning\xfan pedido registrado"})]})},ne=function(){var e=h(),t=(e.getPedidoDiseno,e.currentUser,Object(l.g)(),Object(c.useRef)("")),a=Object(c.useRef)(""),n=Object(c.useRef)(""),r=Object(c.useRef)(""),s=Object(c.useRef)(""),o=Object(c.useState)(""),i=Object(j.a)(o,2),d=i[0],b=i[1],u=Object(c.useState)(Object(Z.a)(new Date,-10)),x=Object(j.a)(u,2),O=x[0],p=x[1],f=Object(c.useRef)(""),y=Object(c.useRef)(""),g=Object(c.useRef)(""),v=Object(c.useRef)(""),C=Object(c.useRef)(""),N=Object(c.useState)(!1),w=Object(j.a)(N,2),S=w[0],P=w[1],A=Object(c.forwardRef)((function(e,t){var a=e.value,c=e.onClick;return Object(m.jsx)("input",{name:"entry.1669131330",className:"btn btn-default ml-3",onClick:function(e){return c()},ref:f,defaultValue:a})}));return Object(m.jsxs)(R.a,{children:[Object(m.jsx)("h1",{className:"mb-4",children:"Inici\xe1 tu pedido de dise\xf1o"}),Object(m.jsxs)("h3",{children:[" \xbfC\xf3mo es el proceso?",Object(m.jsx)("button",{onClick:function(){return P(!S)},className:"fa ml-3 fa-".concat(S?"minus":"plus","-square"),style:{cursor:"pointer",padding:"0",border:"none"}})]}),Object(m.jsx)("div",{style:{textAlign:"center",display:S?"block":"none"},className:"mb-5 mt-3",children:Object(m.jsx)("img",{className:"img-fluid",src:"/img/diseno-tiempos.png"})}),Object(m.jsx)("hr",{}),Object(m.jsxs)(I.a,{onSubmit:function(e){return function(e){e.preventDefault();var c={method:"POST",mode:"no-cors",crossDomain:!0,Headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"entry.45610068=".concat(t.current.value,"&entry.1601509392=").concat(a.current.value,"&entry.1060413570=").concat(n,"&entry.22646789=").concat(r,"&entry.1334255680=").concat(s,"&entry.1658896877=").concat(d,"&entry.1669131330=").concat(f,"&entry.1806980425=").concat(y,"&entry.1751853484=").concat(g,"&entry.258070727=").concat(v,"&entry.1641688495=").concat(C)};fetch("https://docs.google.com/forms/u/1/d/e/1FAIpQLScCaOCmpixdjN4FnOcbWsxF-cxvwxdQxQA_uWCWBlAvxqtyYQ/formResponse",c).then((function(e){return console.log(e)})).catch((function(e){console.log(e)}))}(e)},className:"mb-5",children:[Object(m.jsxs)(I.a.Group,{controlId:"email",children:[Object(m.jsx)(I.a.Label,{children:"Tu nombre: "}),Object(m.jsx)(I.a.Control,{ref:t,name:"entry.45610068",type:"text",placeholder:"Juan Vecinos"})]}),Object(m.jsxs)(J.a,{children:[Object(m.jsx)(K.a,{children:Object(m.jsxs)(I.a.Group,{controlId:"CCemail",children:[Object(m.jsx)(I.a.Label,{children:"Correo Electr\xf3nico: "}),Object(m.jsx)(I.a.Control,{ref:a,name:"entry.1601509392",type:"text",placeholder:"tu.nombre@email.com"})]})}),Object(m.jsx)(K.a,{children:Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Correo Electr\xf3nico en copia: "}),Object(m.jsx)(I.a.Control,{ref:n,name:"entry.1060413570",type:"text",placeholder:"tu.nombre@email.com, otro.nombre@email.com"})]})})]}),Object(m.jsxs)(J.a,{children:[Object(m.jsx)(K.a,{children:Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"\xc1rea: "}),Object(m.jsx)(I.a.Control,{ref:r,name:"entry.22646789",type:"text",placeholder:"SS - DG - UPE"})]})}),Object(m.jsx)(K.a,{children:Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Programa (si aplica): "}),Object(m.jsx)(I.a.Control,{ref:s,name:"entry.1334255680",type:"text",placeholder:"ej: Conociendo BA, En la Ciudad, Vot\xe1s, etc"})]})})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)(I.a.Group,{children:[Object(m.jsx)(I.a.Label,{as:"legend",children:"Tipo de Pieza"}),Object(m.jsx)(I.a.Check,{type:"radio",label:"Pieza Digital",value:"Pieza Digital",name:"entry.1658896877",id:"formHorizontalRadios1",onChange:function(e){return b(e.target.value)}}),Object(m.jsx)(I.a.Check,{type:"radio",label:"Pieza Impresa",value:"Pieza Impresa",name:"entry.1658896877",onChange:function(e){return b(e.target.value)}}),Object(m.jsx)(I.a.Check,{type:"radio",label:"Ambas",value:"Ambas",name:"entry.1658896877",onChange:function(e){return b(e.target.value)}})]}),Object(m.jsxs)(I.a.Group,{children:[Object(m.jsx)(I.a.Label,{children:"Fecha de Entrega del Original:"}),Object(m.jsx)(X.a,{selected:O,onChange:function(e){return p(e)},minDate:Object(Z.a)(new Date,-10),placeholderText:Object(Z.a)(new Date,-10),customInput:Object(m.jsx)(A,{}),startDate:Object(Z.a)(O,-10),name:"entry.1669131330",dateFormat:"dd/MM/yyyy"}),Object(m.jsx)("small",{id:"datePickerHelp",className:"form-text text-muted",children:'*Si tenes un pedido urgente y la fecha m\xe1s pr\xf3xima posible es posterior, por favor dejanos una aclaraci\xf3n utilizando el campo "Observaciones".'})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Especificaciones: "}),Object(m.jsx)(I.a.Control,{ref:y,name:"entry.1806980425",as:"textarea",rows:3,placeholder:"Si elegiste digital, ejs: pieza para redes, mailing, firma para mail, etc\nSi elegiste impresa, ejs: Folleto doble faz, libro"})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Texto para la pieza: "}),Object(m.jsx)(I.a.Control,{ref:g,name:"entry.1751853484",as:"textarea",rows:6,placeholder:"Texto a situarse dentro de la pieza"}),Object(m.jsx)("small",{id:"datePickerHelp",className:"form-text text-muted",children:"*Si el texto tiene jerarquizaci\xf3n o es muy largo envialo como documento a continuaci\xf3n."})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Para enviarnos im\xe1genes o documentos subilos a GoogleDrive/DropBox y pega el enlace ac\xe1: "}),Object(m.jsx)(I.a.Control,{ref:v,name:"entry.258070727",type:"text",placeholder:"https://drive.google.com/file/etc.jpg"})]}),Object(m.jsxs)(I.a.Group,{controlId:"",children:[Object(m.jsx)(I.a.Label,{children:"Observaciones: "}),Object(m.jsx)(I.a.Control,{ref:C,name:"entry.1641688495",as:"textarea",rows:6,placeholder:null})]}),Object(m.jsx)(E.a,{type:"submit",children:"Enviar"})]})]})};a(239),a(240);var re=function(){return Object(m.jsx)(o.a,{children:Object(m.jsxs)(f,{children:[Object(m.jsx)(V,{}),Object(m.jsxs)(l.d,{children:[Object(m.jsx)(v,{exact:!0,path:"/",component:T}),Object(m.jsx)(v,{exact:!0,path:"/test",component:te}),Object(m.jsx)(v,{exact:!0,path:"/todobien",component:ce}),Object(m.jsx)(v,{exact:!0,path:"/diseno",component:$}),Object(m.jsx)(v,{exact:!0,path:"/redes",component:ee}),Object(m.jsx)(v,{exact:!0,path:"/testdiseno",component:ne}),Object(m.jsx)(l.b,{path:"/login",component:A})]}),Object(m.jsx)(Q,{})]})})};a(241);s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(re,{})}),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.2d623678.chunk.js.map