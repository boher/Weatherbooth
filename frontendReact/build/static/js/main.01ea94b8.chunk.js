(this.webpackJsonpweatherboothreactflask=this.webpackJsonpweatherboothreactflask||[]).push([[0],{24:function(e,t,c){},62:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(21),i=c.n(r),a=(c(62),c(63),c(64),c(38)),l=c(22),j=c.n(l),d=c(29),o=c(57),b=c(8),h=c(35),x=c(11),O=c(30),m=c.n(O),u=(c(24),c(15)),p=c(0);var g=function(e){function t(e){return c.apply(this,arguments)}function c(){return(c=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Yes"!==t.target.value){e.next=3;break}return e.next=3,m.a.post("/api").then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 3:alert("Thank you for your feedback!");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{children:[Object(p.jsx)(u.a,{variant:"success",value:"Yes",onClick:t,children:"Yes"}),Object(p.jsx)(u.a,{variant:"danger",value:"No",onClick:t,children:"No"})]})};var v=function(e){var t=e.data.current;return console.log(t),"object"==typeof t?console.log("Is Object of JSON"):Array.isArray(t)&&console.log("Is Array"),Object(p.jsx)("div",{className:"tab-content",id:"pills-tabContent",children:Object(p.jsx)("div",{className:"tab-pane fade show active",id:"pills-current",role:"tabpanel","aria-labelledby":"pills-current-tab",children:Object(p.jsx)("div",{className:"container mt-3",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-sm warning",style:{backgroundColor:"rgb(214, 214, 209)",height:"750px;"},children:Object(p.jsx)("div",{style:{marginTop:"20px",height:"50px",marginLeft:"20px"},children:Object(p.jsx)("h3",{children:"Warning and Advisory"})})}),t&&t.map((function(e){return Object(p.jsx)("div",{className:"col-sm",style:{backgroundColor:"rgb(194, 194, 189)",height:"750px",backgroundImage:"url("+e.img+")"},children:Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsx)("li",{className:"list-group-item border-0",style:{marginTop:"350px",height:"50px",backgroundColor:"transparent"},children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-3",id:"console-event",style:{height:"48px",width:"50px"},children:["Temp: ",e.temp]}),Object(p.jsx)("div",{className:"col",id:"icon"})]})}),Object(p.jsxs)("li",{className:"list-group-item border-0",style:{marginTop:"20px",height:"20px",backgroundColor:"transparent"},children:["Condition: ",e.cond]}),Object(p.jsxs)("li",{className:"list-group-item border-0",style:{marginTop:"20px",height:"20px",backgroundColor:"transparent"},children:["Date: ",e.date]}),Object(p.jsxs)("li",{className:"list-group-item border-0",style:{marginTop:"20px",height:"20px",backgroundColor:"transparent"},children:["Time: ",e.time]})]})})})),t&&t.map((function(e){return Object(p.jsxs)("div",{className:"col-sm",style:{backgroundColor:"rgb(201, 201, 195)",height:"750px"},children:[Object(p.jsxs)("div",{className:"row",style:{marginTop:"250px"},children:[Object(p.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Cloudiness: ",e.cloud,"%"]}),Object(p.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["UVI: ",e.uvi]})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Humidity: ",e.humd,"%"]}),Object(p.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Precipitation: ",e.rain,"mm"]})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Air pressure: ",e.p,"hPA"]}),Object(p.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Wind-speed: ",e.ws,"m/s"]})]})]})}))]})})})})},f=c(19),y=c(23),N=c(53),k=c(7);var _=function(e){var t=e.data.tfHour;return console.log(t),"object"==typeof t?console.log("Is Object of JSON"):Array.isArray(t)&&console.log("Is Array"),null==t?Object(p.jsx)("div",{children:"Not Implemented yet"}):Object(p.jsxs)("div",{className:"container mt-3 border",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("p",{style:{margin:"0"},children:"24-Hour Forecast"}),Object(p.jsx)("p",{id:"attribute",children:"Temperature"})]}),Object(p.jsx)("div",{className:"col-expand-sm d-flex justify-content-end",children:Object(p.jsxs)(k.a,{variant:"tabs",children:[Object(p.jsx)(k.a.Item,{children:Object(p.jsx)(k.a.Link,{active:!0,"data-toggle":"tab",href:"#temp",children:Object(p.jsx)(u.a,{variant:"dark",children:Object(p.jsx)(f.a,{icon:y.d})})})}),Object(p.jsx)(k.a.Item,{children:Object(p.jsx)(k.a.Link,{"data-toggle":"tab",href:"#prec",children:Object(p.jsx)(u.a,{variant:"dark",children:Object(p.jsx)(f.a,{icon:y.b})})})}),Object(p.jsx)(k.a.Item,{children:Object(p.jsx)(k.a.Link,{"data-toggle":"tab",href:"#humd",children:Object(p.jsx)(u.a,{variant:"dark",children:Object(p.jsx)(f.a,{icon:N.a})})})}),Object(p.jsx)(k.a.Item,{children:Object(p.jsx)(k.a.Link,{"data-toggle":"tab",href:"#press",children:Object(p.jsx)(u.a,{variant:"dark",children:Object(p.jsx)(f.a,{icon:y.c})})})}),Object(p.jsx)(k.a.Item,{children:Object(p.jsx)(k.a.Link,{"data-toggle":"tab",href:"#wind",children:Object(p.jsx)(u.a,{variant:"dark",children:Object(p.jsx)(f.a,{icon:y.e})})})}),Object(p.jsx)(k.a.Item,{children:Object(p.jsx)(k.a.Link,{"data-toggle":"tab",href:"#cloud",children:Object(p.jsx)(u.a,{variant:"dark",children:Object(p.jsx)(f.a,{icon:y.a})})})})]})})]}),Object(p.jsx)("div",{className:"tab-content charts",children:Object(p.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:[Object(p.jsx)("ul",{children:t&&t.map((function(e){return Object(p.jsx)("li",{children:e.t})}))}),Object(p.jsx)("ul",{children:t&&t.map((function(e){return Object(p.jsx)("li",{children:e.h})}))}),Object(p.jsx)("ul",{children:t&&t.map((function(e){return Object(p.jsx)("li",{children:e.pe})}))}),Object(p.jsx)("ul",{children:t&&t.map((function(e){return Object(p.jsx)("li",{children:e.a})}))}),Object(p.jsx)("ul",{children:t&&t.map((function(e){return Object(p.jsx)("li",{children:e.w})}))}),Object(p.jsx)("ul",{children:t&&t.map((function(e){return Object(p.jsx)("li",{children:e.c})}))})]})})]})},w=c(18),C=c(37),I=c(26);var T=function(e){var t=e.data.sevenDay;return console.log(t),"object"==typeof t?console.log("Is Object of JSON"):Array.isArray(t)&&console.log("Is Array"),null==t?Object(p.jsx)("div",{children:"Not Implemented yet"}):Object(p.jsx)(w.a,{responsive:"lg",className:"container mt-3",children:Object(p.jsx)("tbody",{children:t&&t.map((function(e){return Object(p.jsx)(C.a,{children:Object(p.jsxs)(I.a,{children:[Object(p.jsx)(I.a.Header,{children:Object(p.jsx)(C.a.Toggle,{as:I.a.Header,eventKey:e.day,children:Object(p.jsx)(w.a,{borderless:!0,className:"container mx-1",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.date}),Object(p.jsx)("td",{children:e.day}),Object(p.jsx)("td",{children:Object(p.jsx)("img",{src:"/"+e.cond_img,alt:e.cond_img})}),Object(p.jsx)("td",{children:e.min_temp}),Object(p.jsx)("td",{children:e.max_temp})]})})})}),Object(p.jsx)(C.a.Collapse,{eventKey:e.day,children:Object(p.jsx)(I.a.Body,{children:Object(p.jsx)(w.a,{className:"container mx-1",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsxs)(w.a,{className:"container mr-5",children:[Object(p.jsx)("p",{align:"center",children:"Morning"}),Object(p.jsx)("div",{align:"center",children:Object(p.jsx)("img",{src:"/"+e.morn_img,alt:e.morn_img})}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Temperature"}),Object(p.jsx)("td",{children:e.morn_temp})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Cloudiness"}),Object(p.jsx)("td",{children:e.morn_cloud})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Precipitation"}),Object(p.jsx)("td",{children:e.morn_prcp})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Humidity"}),Object(p.jsx)("td",{children:e.morn_humd})]})]})}),Object(p.jsx)("td",{children:Object(p.jsxs)(w.a,{className:"container mr-5",children:[Object(p.jsx)("p",{align:"center",children:"Afternoon"}),Object(p.jsx)("div",{align:"center",children:Object(p.jsx)("img",{src:"/"+e.noon_img,alt:e.noon_img})}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Temperature"}),Object(p.jsx)("td",{children:e.noon_temp})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Cloudiness"}),Object(p.jsx)("td",{children:e.noon_cloud})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Precipitation"}),Object(p.jsx)("td",{children:e.noon_prcp})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Humidity"}),Object(p.jsx)("td",{children:e.noon_humd})]})]})}),Object(p.jsx)("td",{children:Object(p.jsxs)(w.a,{className:"container mr-5",children:[Object(p.jsx)("p",{align:"center",children:"Evening"}),Object(p.jsx)("div",{align:"center",children:Object(p.jsx)("img",{src:"/"+e.eve_img,alt:e.eve_img})}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Temperature"}),Object(p.jsx)("td",{children:e.eve_temp})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Cloudiness"}),Object(p.jsx)("td",{children:e.eve_cloud})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Precipitation"}),Object(p.jsx)("td",{children:e.eve_prcp})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Humidity"}),Object(p.jsx)("td",{children:e.eve_humd})]})]})}),Object(p.jsx)("td",{children:Object(p.jsxs)(w.a,{className:"container mr-5",children:[Object(p.jsx)("p",{align:"center",children:"Midnight"}),Object(p.jsx)("div",{align:"center",children:Object(p.jsx)("img",{src:"/"+e.mid_img,alt:e.mid_img})}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Temperature"}),Object(p.jsx)("td",{children:e.mid_temp})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Cloudiness"}),Object(p.jsx)("td",{children:e.mid_cloud})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Precipitation"}),Object(p.jsx)("td",{children:e.mid_prcp})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Humidity"}),Object(p.jsx)("td",{children:e.mid_humd})]})]})})]})})})})]})},e.day)}))})})},A=c(55),H=c(54),L=c.n(H),F=c(36);var S=function(){var e=Object(s.useState)({weather:[]}),t=Object(o.a)(e,2),c=t[0],r=t[1],i=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/api");case 3:t=e.sent,c=t.data,r(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){i()}),[]);var l=c;return null==c?Object(p.jsx)("div",{className:"container mt-3 text-center",children:Object(p.jsx)(A.a,{animation:"border",role:"status",children:Object(p.jsx)("span",{className:"visually-hidden"})})}):Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)(b.a,{history:Object(x.d)(),children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)(F.a,{expand:"lg",style:{backgroundColor:"#8fcbf7"},children:[Object(p.jsxs)("a",{className:"navbar-app-name mr-sm-4",style:{textDecoration:"none"},href:"/#",children:[Object(p.jsx)("img",{className:"d-inline-block",src:"./images/weatherbooth.png",width:"60",height:"60",alt:""}),"Weatherbooth"]}),Object(p.jsx)(F.a.Toggle,{"aria-controls":"navbarCollapse"}),Object(p.jsxs)(F.a.Collapse,{id:"navbarCollapse",children:[Object(p.jsx)(k.a.Link,{className:"mx-auto h1",disabled:!0,href:"#",children:Object(p.jsx)("h2",{children:"Singapore"})}),Object(p.jsx)(L.a,{id:"change-temp",onlabel:"Fahrenheit",offlabel:"Celsius",onstyle:"warning",offstyle:"success",width:150})]})]}),Object(p.jsx)(g,{data:"Hello World"}),Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{exact:!0,path:"/",render:function(e){return Object(p.jsx)(v,Object(a.a)({data:l},e))}}),Object(p.jsx)(b.b,{path:"/TwentyFourHour",render:function(e){return Object(p.jsx)(_,Object(a.a)({data:l},e))}}),Object(p.jsx)(b.b,{path:"/SevenDays",render:function(e){return Object(p.jsx)(T,Object(a.a)({data:l},e))}})]}),Object(p.jsxs)(k.a,{className:"fixed-bottom bg-light",justify:!0,variant:"pills",defaultActiveKey:"pills-current",children:[Object(p.jsx)(k.a.Item,{children:Object(p.jsx)(k.a.Link,{as:h.a,exact:!0,to:"/",eventKey:"pills-current",children:"Current"})}),Object(p.jsx)(k.a.Item,{children:Object(p.jsx)(k.a.Link,{as:h.a,exact:!0,to:"/TwentyFourHour",eventKey:"pills-24hour",children:"24-Hour"})}),Object(p.jsx)(k.a.Item,{children:Object(p.jsx)(k.a.Link,{as:h.a,exact:!0,to:"/SevenDays",eventKey:"pills-7days",children:"7-Day"})})]})]})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,97)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),P()}},[[95,1,2]]]);
//# sourceMappingURL=main.01ea94b8.chunk.js.map