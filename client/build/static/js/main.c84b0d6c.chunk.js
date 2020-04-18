(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,a){},142:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(44),c=t.n(o),l=(t(88),t(82)),i=t(1),s=t(29),u=t(13),d=(t(89),t(20)),m=t.n(d);var _=function(e){return r.a.createElement("button",{disabled:e.disabled,className:"".concat(m.a.btn,"\n        ").concat("accent"===e.variant?m.a.btnAccent:m.a.btnPrimary,"\n        ").concat("large"===e.size?m.a.btnLarge:m.a.btn),onClick:e.onClick},e.buttonText)},p=t(36),h=t.n(p);var g=function(e){var a=e.isOn,t=e.handleToggle,n=e.onColor;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{checked:a,onChange:t,className:h.a.reactToggle,id:"react-switch-new",type:"checkbox"}),r.a.createElement("label",{style:{background:a&&n},className:h.a.reactToggleLabel,htmlFor:"react-switch-new"},r.a.createElement("span",{className:h.a.reactButton})))},E=t(45),b=r.a.createContext({userId:"",username:"",thumbnail:"",authenticated:!1,onLogin:function(){}});var C=function(){var e=Object(n.useContext)(b),a=e.username;return e.thumbnail,r.a.createElement("div",{className:E.nav},r.a.createElement("div",{className:"flexitem"},r.a.createElement("h1",null,"sobered.")),r.a.createElement("div",{className:E.flexEnd},r.a.createElement("img",{src:"./default.png"}),r.a.createElement("p",null,"Hi, ",a),r.a.createElement("a",{href:"/"},"Sign Out")))},v=t(21),f=t.n(v);function k(e){return r.a.createElement("div",{className:f.a.form},r.a.createElement("input",{name:"search",className:e.darkMode?f.a.darkModeSearch:f.a.search,type:e.type,style:{width:e.width+"rem"},value:e.value,onChange:e.onChange}),r.a.createElement("span",{className:f.a.highlight}),r.a.createElement("span",{className:f.a.bar,style:{width:e.width+".5rem"}}),r.a.createElement("label",{htmlFor:"search",style:e.value?{top:"-1.25rem",fontSize:".85rem",color:"#5264AE"}:{}},e.inputText))}t(37);var x=t(5),O=t.n(x),j=(t(15),t(75));function N(e){return r.a.createElement("div",{className:j.tag},e.text)}var w=t(2),M=t.n(w),S=t(19),H=t(9),B=t.n(H),y=t(31);function T(e){var a,t,o=Object(n.useRef)(null),c=Object(n.useContext)(b).userId,l=Object(n.useState)(!1),s=Object(i.a)(l,2),u=s[0],d=s[1],m=Object(n.useState)(!1),p=Object(i.a)(m,2),h=p[0],g=p[1];Object(y.useMediaQuery)({query:"(min-width: 768px"})?(a=60,t=.2):(a=80,t=.1);var E=function(){var e=o.current.getBoundingClientRect();Object(S.a)({targets:o.current,height:"18rem",width:"18rem",duration:100,easing:"easeInOutExpo"}),Object(S.a)({targets:o.current,translateY:[e.top,0],translateX:[e.left,0],delay:50,duration:50,easing:"easeInOutExpo"}),g(!1),setTimeout((function(){d(!1)}),430)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(u?M.a.show:M.a.card," ").concat(e.darkMode?M.a.darkModeBackground:{}),ref:o},r.a.createElement("h1",{className:u?M.a.modalHeader:M.a.cardHeader},e.name),r.a.createElement("div",{className:u?M.a.modalDays:M.a.daysContainer},e.days.map((function(e){return r.a.createElement(N,{text:e})}))),r.a.createElement("div",{className:h?M.a.modalDescriptionContainer:M.a.descriptionContainer},h&&r.a.createElement("h1",{className:M.a.modalDescriptionHeader},"Description"),r.a.createElement("p",{className:u?M.a.modalDescription:M.a.description},e.description),h&&r.a.createElement("h1",{className:M.a.locationHeader},"Location"),h&&r.a.createElement("p",{className:M.a.location},e.location)),h&&r.a.createElement("div",{className:M.a.timeContainer},h&&r.a.createElement("h1",{className:M.a.timeHeader},"Meeting Time"),h&&r.a.createElement("p",{className:M.a.time},e.time)),r.a.createElement("div",{className:u?M.a.modalTags:M.a.tagsContainer},e.tags.map((function(e){return r.a.createElement(N,{text:e})}))),r.a.createElement("div",{className:u?M.a.modalButton:M.a.closeButton},h&&r.a.createElement("div",{className:M.a.joinButton},r.a.createElement(_,{buttonText:"Join",onClick:function(){console.log(e._id),console.log(c),B.a.put("/api/groups/".concat(e._id,"/").concat(c)).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))}})),u?r.a.createElement(_,{buttonText:"Close",onClick:E,variant:"accent"}):r.a.createElement(_,{buttonText:"View",onClick:function(){d(!0),setTimeout((function(){var e=o.current.getBoundingClientRect(),n=window.innerWidth,r=window.innerHeight;Object(S.a)({targets:o.current,height:"".concat(a,"vh"),width:"".concat(a,"vw"),duration:150,easing:"easeInOutExpo"}),Object(S.a)({targets:o.current,translateY:r*t-e.top,translateX:n*t-e.left,duration:150,easing:"easeInOutExpo"})}),20),setTimeout((function(){g(!0)}),300)}}))),r.a.createElement("div",{className:"".concat(u?M.a.card:M.a.none," ").concat(e.darkMode?M.a.darkModeBackground:{})}),r.a.createElement("div",{className:u?M.a.overlay:M.a.hide,onClick:E}))}var G=t(46),L=t.n(G);function A(e){return r.a.createElement("div",{className:e.darkMode?L.a.darkModeCardContainer:L.a.cardContainer},e.results.map((function(a,t){return r.a.createElement("div",null,r.a.createElement(T,Object.assign({},a,{index:t,darkMode:e.darkMode})))})))}var D=t(76),I=t.n(D),P=t(6),F=t.n(P),U=I.a.connect("http://localhost");var K=function(e){var a=Object(n.useState)(0),t=Object(i.a)(a,2),o=(t[0],t[1],Object(n.useState)()),c=Object(i.a)(o,2),l=c[0],s=c[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),m=(d[0],d[1],Object(n.useState)(0)),p=Object(i.a)(m,2),h=(p[0],p[1],Object(n.useState)([])),g=Object(i.a)(h,2),E=g[0],C=g[1],v=Object(n.useState)([]),f=Object(i.a)(v,2),x=f[0],O=(f[1],Object(n.useContext)(b));function j(e){e.preventDefault(),s(""),U.emit("sendmsg",{username:O.username,message:l})}return Object(n.useEffect)((function(){console.log("initiating connection"),console.log("connected to websocket"),U.on("recMessage",(function(e){console.log(e),x.push(e),C(e)}))}),[]),Object(n.useEffect)((function(){console.log(x)}),[E]),r.a.createElement("div",{className:F.a.chat},r.a.createElement("h1",{className:e.darkMode?F.a.darkModeHeader:F.a.chatHeader},"Chat"),r.a.createElement("div",{className:e.darkMode?F.a.darkModeChatContainer:F.a.chatContainer},r.a.createElement("div",{className:e.darkMode?F.a.darkModeChatBox:F.a.chatBox},r.a.createElement("ol",null,x.map((function(e){return r.a.createElement("div",{className:e.username==O.username?F.a.usermessageContainer:F.a.messageContainer},r.a.createElement("p",{className:F.a.username},e.username),r.a.createElement("li",{className:e.username==O.username?F.a.usermessage:F.a.message},e.message))})))),r.a.createElement("form",{className:F.a.inputContainer},r.a.createElement(k,{inputText:"Message",width:"12",type:"text",name:"message",value:l,onChange:function(e){return s(e.target.value)},darkMode:e.darkMode}),r.a.createElement("div",{className:F.a.btn},r.a.createElement(_,{onClick:function(e){return j(e)},buttonText:"Send"})))))},W=t(50),R=t(7),q=t.n(R),J=t(77),z=t.n(J);var Z=function(e){return r.a.createElement("div",{className:z.a.checkbox},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:e.setChecked,onClick:e.onClick,value:e.value}),r.a.createElement("span",null,e.text)))};function V(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),o=t[0],c=t[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),u=s[0],d=s[1],m=Object(n.useState)(""),p=Object(i.a)(m,2),h=p[0],g=p[1],E=Object(n.useState)(""),C=Object(i.a)(E,2),v=C[0],f=C[1],x=Object(n.useState)(!1),O=Object(i.a)(x,2),j=O[0],w=O[1],M=Object(n.useState)(!1),S=Object(i.a)(M,2),H=S[0],y=S[1],T=Object(n.useState)(!1),G=Object(i.a)(T,2),L=G[0],A=G[1],D=Object(n.useState)(!1),I=Object(i.a)(D,2),P=I[0],F=I[1],U=Object(n.useState)(!1),K=Object(i.a)(U,2),R=K[0],J=K[1],z=Object(n.useState)(!1),V=Object(i.a)(z,2),Y=V[0],Q=V[1],X=Object(n.useState)(!1),$=Object(i.a)(X,2),ee=$[0],ae=$[1],te=Object(n.useState)(!1),ne=Object(i.a)(te,2),re=ne[0],oe=ne[1],ce=Object(n.useState)(!1),le=Object(i.a)(ce,2),ie=le[0],se=le[1],ue=Object(n.useState)(!1),de=Object(i.a)(ue,2),me=de[0],_e=de[1],pe=Object(n.useState)(!1),he=Object(i.a)(pe,2),ge=he[0],Ee=he[1],be=Object(n.useState)(!1),Ce=Object(i.a)(be,2),ve=Ce[0],fe=Ce[1],ke=Object(n.useState)(!1),xe=Object(i.a)(ke,2),Oe=xe[0],je=xe[1],Ne=Object(n.useState)(!1),we=Object(i.a)(Ne,2),Me=we[0],Se=we[1],He=Object(n.useState)(!1),Be=Object(i.a)(He,2),ye=Be[0],Te=Be[1],Ge=Object(n.useState)([]),Le=Object(i.a)(Ge,2),Ae=Le[0],De=Le[1],Ie=Object(n.useState)([]),Pe=Object(i.a)(Ie,2),Fe=Pe[0],Ue=Pe[1],Ke=Object(n.useContext)(b).userId,We=function(e){return function(a){var t=a.target.checked;De(t?[].concat(Object(W.a)(Ae),[a.target.value]):Ae.filter((function(e){return e!=a.target.value}))),e(t)}},Re=function(e){return function(a){var t=a.target.checked;Ue(t?[].concat(Object(W.a)(Fe),[a.target.value]):Fe.filter((function(e){return e!=a.target.value}))),e(t)}},qe=function(a){a.preventDefault();var t={name:o,time:u,location:h,description:v,days:Ae,tags:Fe,owner:Ke,members:Ke};B.a.post("/api/groups",t).then((function(a){console.log(a),e.modalClose(),e.groupRerender()})).catch((function(e){return console.log(e)}))};return r.a.createElement("div",null,r.a.createElement("div",{className:e.show?q.a.overlay:q.a.hide,onClick:e.modalClose}),r.a.createElement("div",{className:e.show?q.a.newGroupModal:q.a.hide},r.a.createElement("form",{onSubmit:qe},r.a.createElement("h1",{className:q.a.newGroupModalHeader},"Group Name"),r.a.createElement(k,{inputText:"Group Name",width:"15",type:"text",name:"groupName",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement("h1",{className:q.a.newGroupModalHeader},"Meeting Time"),r.a.createElement(k,{inputText:"Group Time",width:"15",type:"text",name:"groupTime",value:u,onChange:function(e){return d(e.target.value)}}),r.a.createElement("h1",{className:q.a.newGroupModalHeader},"Location"),r.a.createElement(k,{inputText:" Group Location",width:"15",type:"text",name:"groupLocation",value:h,onChange:function(e){return g(e.target.value)}}),r.a.createElement("h1",{className:q.a.newGroupModalHeader},"Description"),r.a.createElement(k,{inputText:" Group Description",width:"15",type:"text",name:"groupDescription",value:v,onChange:function(e){return f(e.target.value)}}),r.a.createElement("h1",{className:q.a.newGroupModalHeader},"Meeting Days"),r.a.createElement("div",{className:q.a.tags},r.a.createElement(Z,{checked:j,onClick:We(w),value:"Sun",text:r.a.createElement(N,{text:"Sun"})}),r.a.createElement(Z,{checked:H,onClick:We(y),value:"Mon",text:r.a.createElement(N,{text:"Mon"})}),r.a.createElement(Z,{checked:L,onClick:We(A),value:"Tues",text:r.a.createElement(N,{text:"Tues"})}),r.a.createElement(Z,{checked:P,onClick:We(F),value:"Wed",text:r.a.createElement(N,{text:"Wed"})}),r.a.createElement(Z,{checked:R,onClick:We(J),value:"Thurs",text:r.a.createElement(N,{text:"Thurs"})}),r.a.createElement(Z,{checked:Y,onClick:We(Q),value:"Fri",text:r.a.createElement(N,{text:"Fri"})}),r.a.createElement(Z,{checked:ee,onClick:We(ae),value:"Sat",text:r.a.createElement(N,{text:"Sat"})})),r.a.createElement("h1",{className:q.a.newGroupModalHeader},"Group Tags"),r.a.createElement("div",{className:q.a.tags},r.a.createElement(Z,{checked:re,onClick:Re(oe),value:"HA",text:r.a.createElement(N,{text:"HA"})}),r.a.createElement(Z,{checked:ie,onClick:Re(se),value:"AA",text:r.a.createElement(N,{text:"AA"})}),r.a.createElement(Z,{checked:me,onClick:Re(_e),value:"CMA",text:r.a.createElement(N,{text:"CMA"})}),r.a.createElement(Z,{checked:ge,onClick:Re(Ee),value:"NA",text:r.a.createElement(N,{text:"NA"})}),r.a.createElement(Z,{checked:ve,onClick:Re(fe),value:"Speaker (Full)",text:r.a.createElement(N,{text:"Speaker (Full)"})}),r.a.createElement(Z,{checked:Oe,onClick:Re(je),value:"Speaker (Half)",text:r.a.createElement(N,{text:"Speaker (Half)"})}),r.a.createElement(Z,{checked:Me,onClick:Re(Se),value:"Big Book Study",text:r.a.createElement(N,{text:"Big Book Study"})}),r.a.createElement(Z,{checked:ye,onClick:Re(Te),value:"Mens/Womens",text:r.a.createElement(N,{text:"Mens/Womens"})})),r.a.createElement("div",{className:q.a.newGroupModalButton},r.a.createElement(_,{buttonText:"Create",variant:"accent",onClick:qe})))))}var Y=t(78),Q=t.n(Y);function X(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(!1),l=Object(i.a)(c,2),s=l[0],u=l[1],d=Object(n.useState)(""),m=Object(i.a)(d,2),p=m[0],h=m[1],E=Object(n.useState)([]),v=Object(i.a)(E,2),f=v[0],x=v[1],j=Object(n.useState)(!1),N=Object(i.a)(j,2),w=N[0],M=N[1],S=Object(y.useMediaQuery)({query:"(min-width: 90rem)"}),H=Object(n.useContext)(b).userId,T=Object(n.useState)([]),G=Object(i.a)(T,2),L=G[0],D=G[1];return Object(n.useEffect)((function(){B.a.get("/api/groups/"+H).then((function(e){e.data&&D(e.data)})).catch((function(e){console.log(e)}))}),[L]),r.a.createElement("div",{className:t&&O.a.darkerModeBackground},r.a.createElement(C,null),r.a.createElement("div",{className:O.a.container},r.a.createElement("div",{className:"leftView"},r.a.createElement("div",{className:O.a.headerContainer},r.a.createElement("h1",{className:t?O.a.darkModeHeader:O.a.cardContainerHeader},"My Groups"),r.a.createElement("div",{className:O.a.toggle},r.a.createElement(g,{isOn:t,onColor:"#0ce5e1",handleToggle:function(){return o(!t)}})),r.a.createElement("div",{className:O.a.createButton},r.a.createElement(_,{variant:"accent",buttonText:"Create A Group",size:"large",onClick:function(){u(!0)}}))),r.a.createElement("div",{className:O.a.flexContainerRow},r.a.createElement(A,{results:L,darkMode:t})),r.a.createElement("h1",{className:t?O.a.darkModeHeader:O.a.cardContainerHeader},"Search Groups"),r.a.createElement("div",{className:O.a.searchBar},r.a.createElement(k,{width:"18",inputText:"Search Groups",type:"text",name:"search",value:p,onChange:function(e){e.preventDefault(),h(e.target.value),""!==e.target.value?B.a.get("/api/groups/search/"+p).then((function(e){e.data&&x(e.data)})).catch((function(e){return console.log(e)})):x([])},darkMode:t})),r.a.createElement("div",{className:O.a.flexContainerRow},r.a.createElement(A,{results:f,darkMode:t})),!S&&r.a.createElement("div",{className:O.a.chatIconBackground,onClick:function(){return M(!w)}},r.a.createElement("img",{src:Q.a,className:O.a.chatIcon}))),S&&r.a.createElement("div",{className:"chat"},r.a.createElement(K,{darkMode:t})),w?r.a.createElement("div",{className:O.a.floatingChat},r.a.createElement(K,null)):r.a.createElement(r.a.Fragment,null," ")),r.a.createElement(V,{show:s,modalClose:function(){u(!1)},groupRerender:function(){B.a.get("/api/groups/"+H).then((function(e){e.data&&D(e.data)})).catch((function(e){console.log(e)}))}}))}var $=t(16),ee=t.n($),ae=t(4),te=t.n(ae);function ne(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),o=t[0],c=t[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),d=s[0],m=s[1],p=Object(n.useState)(""),h=Object(i.a)(p,2),g=h[0],E=h[1],C=Object(n.useState)(""),v=Object(i.a)(C,2),f=v[0],x=v[1],O=Object(n.useState)(""),j=Object(i.a)(O,2),N=j[0],w=j[1],M=Object(n.useState)(""),S=Object(i.a)(M,2),H=S[0],y=S[1],T=Object(n.useState)(!1),G=Object(i.a)(T,2),L=G[0],A=G[1],D=Object(n.useContext)(b),I=function(e){var a={email:o,password:d};e.preventDefault(),B.a.post("/users/login",a).then((function(e){if(A(!1),e.data){D.onLogin(e.data._id,e.data.username,"default",!0),w(e)}else console.log("error")})).catch((function(e){return A(!0)}))},P=function(){e.setModalType(!e.modalType)};return H?r.a.createElement(u.a,{to:"/"}):N?r.a.createElement(u.a,{to:"/home"}):e.modalType?r.a.createElement("div",null,r.a.createElement("div",{className:e.show?te.a.overlay:te.a.hide,onClick:e.modalClose}),r.a.createElement("div",{className:e.show?te.a.signUpModal:te.a.hide},r.a.createElement("h1",{className:te.a.loginModalHeader},"Sign Up"),r.a.createElement("form",{onSubmit:I},r.a.createElement(k,{inputText:"Username",width:"15",type:"text",name:"username",value:f,onChange:function(e){x(e.target.value)}}),r.a.createElement(k,{inputText:"Email",width:"15",type:"text",name:"email",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement(k,{inputText:"Password",width:"15",type:"password",name:"password",value:d,onChange:function(e){return m(e.target.value)}}),r.a.createElement(k,{inputText:"Confirm Password",width:"15",type:"password",name:"confirmPassword",value:g,onChange:function(e){E(e.target.value)}})),g!==d&&r.a.createElement("div",{className:te.a.passValues},"Password values do not match "),r.a.createElement("div",{className:te.a.formButtons},r.a.createElement("div",{className:te.a.signUpButton},r.a.createElement(_,{variant:"accent",buttonText:"Login",onClick:P})),r.a.createElement("div",{className:te.a.signInButton},r.a.createElement(_,{variant:"primary",buttonText:"Sign Up",onClick:function(e){if(d===g){var a={username:f,email:o,password:d};e.preventDefault(),B.a.post("/users/signup",a).then((function(e){"OK"==e.data&&y(e.data)})).catch((function(e){return console.log(e)}))}else console.log("passwords dont match")},disabled:g!==d}))))):r.a.createElement("div",null,r.a.createElement("div",{className:e.show?te.a.overlay:te.a.hide,onClick:e.modalClose}),r.a.createElement("div",{className:e.show?te.a.loginModal:te.a.hide},r.a.createElement("h1",{className:te.a.loginModalHeader},"Login"),r.a.createElement("form",{onSubmit:I},r.a.createElement(k,{inputText:"Email",width:"15",type:"text",name:"email",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement(k,{inputText:"Password",width:"15",type:"password",name:"password",value:d,onChange:function(e){return m(e.target.value)}})),L&&r.a.createElement("div",{className:te.a.incorrectPass},"Incorrect email or password"),r.a.createElement("div",{className:te.a.formButtons},r.a.createElement("div",{className:te.a.signUpButton},r.a.createElement(_,{variant:"accent",buttonText:"Sign Up",onClick:P})),r.a.createElement("div",{className:te.a.signInButton},r.a.createElement(_,{variant:"primary",buttonText:"Login",onClick:I})))))}function re(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(!1),l=Object(i.a)(c,2),s=l[0],u=l[1];return r.a.createElement("div",{className:ee.a.hero},r.a.createElement("div",{className:ee.a.buttonContainer},r.a.createElement("div",{className:ee.a.button},r.a.createElement(_,{buttonText:"Login",onClick:function(){u(!1),o(!0)}})),r.a.createElement("div",{className:ee.a.button},r.a.createElement(_,{buttonText:"Sign Up",onClick:function(){u(!0),o(!0)},variant:"accent"}))),r.a.createElement("h1",{className:ee.a.heroHeader},"Sobered."),r.a.createElement("h2",{className:ee.a.heroSubtitle},"A Virtual Community For Addicts"),r.a.createElement(ne,{show:t,modalClose:function(){o(!1)},modalType:s,setModalType:u}))}var oe=t(49),ce=t.n(oe);function le(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement("div",{className:ce.a.searchContainer},r.a.createElement("h1",{className:ce.a.searchHeader},"Search"),r.a.createElement(k,{inputText:"Search Groups",width:"18",type:"text"}),r.a.createElement(A,{results:[{name:"HA Tempe",days:["Mon","Wed","Sat"],description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",tags:["#HA"]},{name:"AA Phoenix",days:["Mon","Tues","Fri"],description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",tags:["#AA","#JF"]},{name:"Some Name",days:["Tues"],description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",tags:["#AA","#HA","#BO","#LA","#FJ"]},{name:"Some Name",days:["Tues"],description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",tags:["#AA","#HA","#BO","#LA","#FJ"]}]})))}var ie=t(32),se=t(33),ue=t(35),de=t(34),me=t(81),_e=t.n(me),pe=function(e){Object(ue.a)(t,e);var a=Object(de.a)(t);function t(e){var n;return Object(ie.a)(this,t),(n=a.call(this,e)).onChangeHandler=function(e){console.log("onChange"),n.setState({selectedFile:e.target.files[0],loaded:0})},n.uploadHandler=function(){var e=new FormData;e.append("file",n.state.selectedFile,n.state.selectedFile.name),B.a.post("http://localhost:8000/upload",e).then((function(e){console.log(e)}))},n.state={selectedFile:null},n}return Object(se.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement("div",{className:_e.a.container},r.a.createElement("input",{type:"file",name:"file",onChange:this.onChangeHandler}),r.a.createElement("button",{type:"button",onClick:this.uploadHandler},"Upload")))}}]),t}(n.Component);function he(e){return function(a){Object(ue.a)(n,a);var t=Object(de.a)(n);function n(){var e;return Object(ie.a)(this,n),(e=t.call(this)).state={loading:!0,redirect:!1},e}return Object(se.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/checkToken").then((function(a){if(200!==a.status)throw new Error(a.error);e.setState({loading:!1})})).catch((function(a){console.error(a),e.setState({loading:!1,redirect:!0})}))}},{key:"render",value:function(){var a=this.state,t=a.loading,n=a.redirect;return t?null:n?r.a.createElement(u.a,{to:"/"}):r.a.createElement(e,this.props)}}]),n}(n.Component)}var ge=function(){var e=Object(n.useState)({userId:"",username:"",thumbnail:"",authenticated:!1,onLogin:function(e,a,n,r){o(Object(l.a)({},t,{userId:e,username:a,thumbnail:n,authenticated:r}))}}),a=Object(i.a)(e,2),t=a[0],o=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(u.d,null,r.a.createElement(b.Provider,{value:t},r.a.createElement(u.b,{exact:!0,path:"/",component:le}),r.a.createElement(u.b,{path:"/home",component:he(X)}),r.a.createElement(u.b,{exact:!0,path:"/profile",component:he(pe)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},15:function(e,a,t){e.exports={card:"OwnedGroup_card__4KJhC",ownedCardHeader:"OwnedGroup_ownedCardHeader__1l7Mm",daysContainer:"OwnedGroup_daysContainer__1RRP6",information:"OwnedGroup_information__3elPD",tagsContainer:"OwnedGroup_tagsContainer__21oDJ",thumbnail:"OwnedGroup_thumbnail__2BP4I"}},16:function(e,a,t){e.exports={hero:"Hero_hero__1u_Hk",heroHeader:"Hero_heroHeader__naDDk",heroSubtitle:"Hero_heroSubtitle__1eBEi",buttonContainer:"Hero_buttonContainer__3fee4",button:"Hero_button__1F_xb"}},2:function(e,a,t){e.exports={card:"GroupCard_card__1EdVl",darkModeBackground:"GroupCard_darkModeBackground__2wX0i",show:"GroupCard_show__1opZB",overlay:"GroupCard_overlay__3sAsu",hide:"GroupCard_hide__2bPPo",cardHeader:"GroupCard_cardHeader__1zyA7",modalHeader:"GroupCard_modalHeader__1WwLj",daysContainer:"GroupCard_daysContainer__1kKUf",modalDays:"GroupCard_modalDays__3SmQi",description:"GroupCard_description__32wi6",descriptionContainer:"GroupCard_descriptionContainer__1Cv9Z",modalDescriptionContainer:"GroupCard_modalDescriptionContainer__2-0Kv",modalDescription:"GroupCard_modalDescription__217b6",tagsContainer:"GroupCard_tagsContainer__P45rT",modalTags:"GroupCard_modalTags___XjIz",closeButton:"GroupCard_closeButton__3ze5p",modalButton:"GroupCard_modalButton__1pEe-",joinButton:"GroupCard_joinButton__2B1xy",fade:"GroupCard_fade__3LNPP",modalDescriptionHeader:"GroupCard_modalDescriptionHeader__3ydFB",locationHeader:"GroupCard_locationHeader__14Qw7",location:"GroupCard_location__3_x5X",timeContainer:"GroupCard_timeContainer__3-Q0e",timeHeader:"GroupCard_timeHeader__3qhkW",time:"GroupCard_time__1xviD"}},20:function(e,a,t){e.exports={btn:"Button_btn__DEtTm",btnLarge:"Button_btnLarge__19zr6",btnPrimary:"Button_btnPrimary__1ZmBs",btnAccent:"Button_btnAccent__1fhta",btnLight:"Button_btnLight__cp8xG"}},21:function(e,a,t){e.exports={form:"SearchBar_form__JU3R3",bar:"SearchBar_bar__21u0N",highlight:"SearchBar_highlight__1lbGU",inputHighlighter:"SearchBar_inputHighlighter__cJxoo",search:"SearchBar_search__3plz-",darkModeSearch:"SearchBar_darkModeSearch__3KsSp"}},36:function(e,a,t){e.exports={reactToggle:"Toggle_reactToggle__z8TdR",reactToggleLabel:"Toggle_reactToggleLabel__7WmcG",reactButton:"Toggle_reactButton__1wpXz"}},37:function(e,a,t){e.exports={sidebarHeader:"Sidebar_sidebarHeader__13NUA",sidebar:"Sidebar_sidebar__1_Hv_",sidebarGroup:"Sidebar_sidebarGroup__1qnYY"}},4:function(e,a,t){e.exports={hide:"LoginModal_hide__2gvcF",loginModal:"LoginModal_loginModal__2KWvL",signUpModal:"LoginModal_signUpModal__186pi",loginModalHeader:"LoginModal_loginModalHeader__2_FQ2",formButtons:"LoginModal_formButtons__26C27",signUpButton:"LoginModal_signUpButton__1Bd6i",signInButton:"LoginModal_signInButton__EaZIE",overlay:"LoginModal_overlay__3jk8y",incorrectPass:"LoginModal_incorrectPass__22oSc",shake:"LoginModal_shake__1gNf_",passValues:"LoginModal_passValues__3UwdP"}},45:function(e,a,t){e.exports={nav:"Nav_nav__3N4Ks",flexEnd:"Nav_flexEnd__2mD1P"}},46:function(e,a,t){e.exports={cardContainer:"CardContainer_cardContainer__ASYOH",darkModeCardContainer:"CardContainer_darkModeCardContainer__c11Cw"}},49:function(e,a,t){e.exports={searchContainer:"Index_searchContainer__3VeN7",searchHeader:"Index_searchHeader__1xwbD"}},5:function(e,a,t){e.exports={darkerModeBackground:"Home_darkerModeBackground__2KsAn",darkModeHeader:"Home_darkModeHeader__3Z324",container:"Home_container__24giq",headerContainer:"Home_headerContainer__UXJGq",createButton:"Home_createButton__178jI",flexContainerRow:"Home_flexContainerRow__1igZ3",cardContainerHeader:"Home_cardContainerHeader__33WeA",searchBar:"Home_searchBar__3OrCF",chatIconBackground:"Home_chatIconBackground__1rqJs",chatIcon:"Home_chatIcon__3jmpX",floatingChat:"Home_floatingChat__9zcRJ",toggle:"Home_toggle__3jB4Z"}},6:function(e,a,t){e.exports={chat:"Chat_chat__AdzyN",chatBox:"Chat_chatBox__2BKKt",darkModeChatBox:"Chat_darkModeChatBox__1S0fP",messageContainer:"Chat_messageContainer__2tcKB",fade:"Chat_fade__1hZNg",usermessageContainer:"Chat_usermessageContainer__3LaEZ",btn:"Chat_btn__3NwZv",chatInput:"Chat_chatInput__3lYDE",message:"Chat_message__avgPE",usermessage:"Chat_usermessage__2SpVt",username:"Chat_username__2Qiq-",chatContainer:"Chat_chatContainer__11Qom",darkModeChatContainer:"Chat_darkModeChatContainer__W8kaa",chatHeader:"Chat_chatHeader__3G5VT",darkModeHeader:"Chat_darkModeHeader__1KeVN",inputContainer:"Chat_inputContainer__YOLwU"}},7:function(e,a,t){e.exports={hide:"NewGroupModal_hide__1YvqK",newGroupModal:"NewGroupModal_newGroupModal__3IsZK",newGroupModalHeader:"NewGroupModal_newGroupModalHeader__h3YNP",newGroupModalButton:"NewGroupModal_newGroupModalButton__GgCSN",tags:"NewGroupModal_tags__1aWeU",overlay:"NewGroupModal_overlay__2-mD2"}},75:function(e,a,t){e.exports={tag:"Tags_tag__3UsC4"}},77:function(e,a,t){e.exports={checkbox:"Checkbox_checkbox__wKZUw"}},78:function(e,a,t){e.exports=t.p+"static/media/chat_bubble_outline-black-18dp.c56d3dfc.svg"},81:function(e,a,t){e.exports={container:"Profile_container__3kmrn"}},83:function(e,a,t){e.exports=t(142)},88:function(e,a,t){},89:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.c84b0d6c.chunk.js.map