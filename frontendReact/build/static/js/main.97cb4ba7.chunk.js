(this.webpackJsonpweatherboothreactflask=this.webpackJsonpweatherboothreactflask||[]).push([[0],{108:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(23),i=c.n(s),a=(c(76),c(77),c(78),c(26)),l=c(29),j=c.n(l),d=c(40),o=c(56),b=c(8),h=c(49),x=c(14),O=c(41),m=c.n(O),u=(c(32),c(17)),p=c(36),g=c(1);var v=function(e){function t(e){return c.apply(this,arguments)}function c(){return(c=Object(d.a)(j.a.mark((function t(c){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Yes"!==c.target.value){t.next=3;break}return t.next=3,m.a.post("/api").then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 3:e.onHide(),alert("Thank you for your feedback!");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(g.jsxs)(p.a,Object(a.a)(Object(a.a)({},e),{},{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(g.jsx)(p.a.Header,{closeButton:!0,children:Object(g.jsx)(p.a.Title,{id:"contained-modal-title-vcenter",children:"Is the information accurate?"})}),Object(g.jsxs)(p.a.Footer,{children:[Object(g.jsx)(u.a,{variant:"success",value:"Yes",onClick:t,children:"Yes"}),Object(g.jsx)(u.a,{variant:"danger",value:"No",onClick:t,children:"No"})]})]}))};var f=function(e){var t=e.data.current;return console.log(t),"object"==typeof t?console.log("Is Object of JSON"):Array.isArray(t)&&console.log("Is Array"),Object(g.jsx)("div",{className:"tab-content",id:"pills-tabContent",children:Object(g.jsx)("div",{className:"tab-pane fade show active",id:"pills-current",role:"tabpanel","aria-labelledby":"pills-current-tab",children:Object(g.jsx)("div",{className:"container mt-3",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-sm warning",style:{backgroundColor:"rgb(214, 214, 209)",height:"750px;"},children:Object(g.jsx)("div",{style:{marginTop:"20px",height:"50px",marginLeft:"20px"},children:Object(g.jsx)("h3",{children:"Warning and Advisory"})})}),t&&t.map((function(e){return Object(g.jsx)("div",{className:"col-sm",style:{backgroundColor:"rgb(194, 194, 189)",height:"750px",backgroundImage:"url("+e.img+")"},children:Object(g.jsxs)("ul",{className:"list-group",children:[Object(g.jsx)("li",{className:"list-group-item border-0",style:{marginTop:"350px",height:"50px",backgroundColor:"transparent"},children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-3",id:"console-event",style:{height:"48px",width:"50px"},children:["Temp: ",e.temp]}),Object(g.jsx)("div",{className:"col",id:"icon"})]})}),Object(g.jsxs)("li",{className:"list-group-item border-0",style:{marginTop:"20px",height:"20px",backgroundColor:"transparent"},children:["Condition: ",e.cond]}),Object(g.jsxs)("li",{className:"list-group-item border-0",style:{marginTop:"20px",height:"20px",backgroundColor:"transparent"},children:["Date: ",e.date]}),Object(g.jsxs)("li",{className:"list-group-item border-0",style:{marginTop:"20px",height:"20px",backgroundColor:"transparent"},children:["Time: ",e.time]})]})})})),t&&t.map((function(e){return Object(g.jsxs)("div",{className:"col-sm",style:{backgroundColor:"rgb(201, 201, 195)",height:"750px"},children:[Object(g.jsxs)("div",{className:"row",style:{marginTop:"250px"},children:[Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Cloudiness: ",e.cloud,"%"]}),Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["UVI: ",e.uvi]})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Humidity: ",e.humd,"%"]}),Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Precipitation: ",e.rain,"mm"]})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Air pressure: ",e.p,"hPA"]}),Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Wind-speed: ",e.ws,"m/s"]})]})]})}))]})})})})},y=c(27),N=c(31),k=c(68),w=c(7);var _=function(e){var t=e.data.tfHour;return console.log(t),"object"==typeof t?console.log("Is Object of JSON"):Array.isArray(t)&&console.log("Is Array"),null==t?Object(g.jsx)("div",{children:"Not Implemented yet"}):Object(g.jsxs)("div",{className:"container mt-3 border",children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col",children:[Object(g.jsx)("p",{style:{margin:"0"},children:"24-Hour Forecast"}),Object(g.jsx)("p",{id:"attribute",children:"Temperature"})]}),Object(g.jsx)("div",{className:"col-expand-sm d-flex justify-content-end",children:Object(g.jsxs)(w.a,{variant:"tabs",children:[Object(g.jsx)(w.a.Item,{children:Object(g.jsx)(w.a.Link,{active:!0,"data-toggle":"tab",href:"#temp",children:Object(g.jsx)(u.a,{variant:"dark",children:Object(g.jsx)(y.a,{icon:N.d})})})}),Object(g.jsx)(w.a.Item,{children:Object(g.jsx)(w.a.Link,{"data-toggle":"tab",href:"#prec",children:Object(g.jsx)(u.a,{variant:"dark",children:Object(g.jsx)(y.a,{icon:N.b})})})}),Object(g.jsx)(w.a.Item,{children:Object(g.jsx)(w.a.Link,{"data-toggle":"tab",href:"#humd",children:Object(g.jsx)(u.a,{variant:"dark",children:Object(g.jsx)(y.a,{icon:k.a})})})}),Object(g.jsx)(w.a.Item,{children:Object(g.jsx)(w.a.Link,{"data-toggle":"tab",href:"#press",children:Object(g.jsx)(u.a,{variant:"dark",children:Object(g.jsx)(y.a,{icon:N.c})})})}),Object(g.jsx)(w.a.Item,{children:Object(g.jsx)(w.a.Link,{"data-toggle":"tab",href:"#wind",children:Object(g.jsx)(u.a,{variant:"dark",children:Object(g.jsx)(y.a,{icon:N.e})})})}),Object(g.jsx)(w.a.Item,{children:Object(g.jsx)(w.a.Link,{"data-toggle":"tab",href:"#cloud",children:Object(g.jsx)(u.a,{variant:"dark",children:Object(g.jsx)(y.a,{icon:N.a})})})})]})})]}),Object(g.jsx)("div",{className:"tab-content charts",children:Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:[Object(g.jsx)("ul",{children:t&&t.map((function(e){return Object(g.jsx)("li",{children:e.t})}))}),Object(g.jsx)("ul",{children:t&&t.map((function(e){return Object(g.jsx)("li",{children:e.h})}))}),Object(g.jsx)("ul",{children:t&&t.map((function(e){return Object(g.jsx)("li",{children:e.pe})}))}),Object(g.jsx)("ul",{children:t&&t.map((function(e){return Object(g.jsx)("li",{children:e.a})}))}),Object(g.jsx)("ul",{children:t&&t.map((function(e){return Object(g.jsx)("li",{children:e.w})}))}),Object(g.jsx)("ul",{children:t&&t.map((function(e){return Object(g.jsx)("li",{children:e.c})}))})]})})]})},C=c(25),I=c(51),T=c(37);var A=function(e){var t=e.data.sevenDay;return console.log(t),"object"==typeof t?console.log("Is Object of JSON"):Array.isArray(t)&&console.log("Is Array"),null==t?Object(g.jsx)("div",{children:"Not Implemented yet"}):Object(g.jsx)(C.a,{responsive:"lg",className:"container mt-3",children:Object(g.jsx)("tbody",{children:t&&t.map((function(e){return Object(g.jsx)(I.a,{children:Object(g.jsxs)(T.a,{children:[Object(g.jsx)(T.a.Header,{children:Object(g.jsx)(I.a.Toggle,{as:T.a.Header,eventKey:e.day,children:Object(g.jsx)(C.a,{borderless:!0,className:"container mx-1",children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.date}),Object(g.jsx)("td",{children:e.day}),Object(g.jsx)("td",{children:Object(g.jsx)("img",{src:"/"+e.cond_img,alt:e.cond_img})}),Object(g.jsx)("td",{children:e.min_temp}),Object(g.jsx)("td",{children:e.max_temp})]})})})}),Object(g.jsx)(I.a.Collapse,{eventKey:e.day,children:Object(g.jsx)(T.a.Body,{children:Object(g.jsx)(C.a,{className:"container mx-1",children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsxs)(C.a,{className:"container mr-5",children:[Object(g.jsx)("p",{align:"center",children:"Morning"}),Object(g.jsx)("div",{align:"center",children:Object(g.jsx)("img",{src:"/"+e.morn_img,alt:e.morn_img})}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Temperature"}),Object(g.jsx)("td",{children:e.morn_temp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Cloudiness"}),Object(g.jsx)("td",{children:e.morn_cloud})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Precipitation"}),Object(g.jsx)("td",{children:e.morn_prcp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Humidity"}),Object(g.jsx)("td",{children:e.morn_humd})]})]})}),Object(g.jsx)("td",{children:Object(g.jsxs)(C.a,{className:"container mr-5",children:[Object(g.jsx)("p",{align:"center",children:"Afternoon"}),Object(g.jsx)("div",{align:"center",children:Object(g.jsx)("img",{src:"/"+e.noon_img,alt:e.noon_img})}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Temperature"}),Object(g.jsx)("td",{children:e.noon_temp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Cloudiness"}),Object(g.jsx)("td",{children:e.noon_cloud})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Precipitation"}),Object(g.jsx)("td",{children:e.noon_prcp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Humidity"}),Object(g.jsx)("td",{children:e.noon_humd})]})]})}),Object(g.jsx)("td",{children:Object(g.jsxs)(C.a,{className:"container mr-5",children:[Object(g.jsx)("p",{align:"center",children:"Evening"}),Object(g.jsx)("div",{align:"center",children:Object(g.jsx)("img",{src:"/"+e.eve_img,alt:e.eve_img})}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Temperature"}),Object(g.jsx)("td",{children:e.eve_temp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Cloudiness"}),Object(g.jsx)("td",{children:e.eve_cloud})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Precipitation"}),Object(g.jsx)("td",{children:e.eve_prcp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Humidity"}),Object(g.jsx)("td",{children:e.eve_humd})]})]})}),Object(g.jsx)("td",{children:Object(g.jsxs)(C.a,{className:"container mr-5",children:[Object(g.jsx)("p",{align:"center",children:"Midnight"}),Object(g.jsx)("div",{align:"center",children:Object(g.jsx)("img",{src:"/"+e.mid_img,alt:e.mid_img})}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Temperature"}),Object(g.jsx)("td",{children:e.mid_temp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Cloudiness"}),Object(g.jsx)("td",{children:e.mid_cloud})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Precipitation"}),Object(g.jsx)("td",{children:e.mid_prcp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Humidity"}),Object(g.jsx)("td",{children:e.mid_humd})]})]})})]})})})})]})},e.day)}))})})},H=c(70),L=c(69),F=c.n(L),S=c(50);var P=function(){var e=Object(n.useState)({weather:[]}),t=Object(o.a)(e,2),c=t[0],s=t[1],i=r.a.useState(!1),l=Object(o.a)(i,2),O=l[0],p=l[1],y=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/api");case 3:t=e.sent,c=t.data,s(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){y()}),[]);var N=c;return null==c?Object(g.jsx)("div",{className:"container mt-3 text-center",children:Object(g.jsx)(H.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"visually-hidden"})})}):Object(g.jsx)(r.a.Fragment,{children:Object(g.jsx)(b.a,{history:Object(x.d)(),children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)(S.a,{expand:"lg",style:{backgroundColor:"#8fcbf7"},children:[Object(g.jsxs)("a",{className:"navbar-app-name mr-sm-4",style:{textDecoration:"none"},href:"/#",children:[Object(g.jsx)("img",{className:"d-inline-block",src:"./images/weatherbooth.png",width:"60",height:"60",alt:""}),"Weatherbooth"]}),Object(g.jsx)(S.a.Toggle,{"aria-controls":"navbarCollapse"}),Object(g.jsxs)(S.a.Collapse,{id:"navbarCollapse",children:[Object(g.jsx)(w.a.Link,{className:"mx-auto h1",disabled:!0,href:"#",children:Object(g.jsx)("h2",{children:"Singapore"})}),Object(g.jsx)(F.a,{id:"change-temp",onlabel:"Fahrenheit",offlabel:"Celsius",onstyle:"warning",offstyle:"success",width:150})]})]}),Object(g.jsxs)(b.d,{children:[Object(g.jsx)(b.b,{exact:!0,path:"/",render:function(e){return Object(g.jsx)(f,Object(a.a)({data:N},e))}}),Object(g.jsx)(b.b,{path:"/TwentyFourHour",render:function(e){return Object(g.jsx)(_,Object(a.a)({data:N},e))}}),Object(g.jsx)(b.b,{path:"/SevenDays",render:function(e){return Object(g.jsx)(A,Object(a.a)({data:N},e))}})]}),Object(g.jsxs)(w.a,{className:"fixed-bottom bg-light",justify:!0,variant:"pills",defaultActiveKey:"pills-current",children:[Object(g.jsx)(w.a.Item,{children:Object(g.jsx)(w.a.Link,{as:h.a,exact:!0,to:"/",eventKey:"pills-current",children:"Current"})}),Object(g.jsx)(w.a.Item,{children:Object(g.jsx)(w.a.Link,{as:h.a,exact:!0,to:"/TwentyFourHour",eventKey:"pills-24hour",children:"24-Hour"})}),Object(g.jsx)(w.a.Item,{children:Object(g.jsx)(w.a.Link,{as:h.a,exact:!0,to:"/SevenDays",eventKey:"pills-7days",children:"7-Day"})})]}),Object(g.jsx)(u.a,{style:{zIndex:"1",position:"fixed",marginright:"50px!",bottom:40},variant:"primary",onClick:function(){return p(!0)},children:"Feedback"}),Object(g.jsx)(v,{show:O,onHide:function(){return p(!1)}})]})})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root")),D()},32:function(e,t,c){},76:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.97cb4ba7.chunk.js.map