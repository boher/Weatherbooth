(this.webpackJsonpweatherboothreactflask=this.webpackJsonpweatherboothreactflask||[]).push([[0],{134:function(e,t,r){},271:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),c=r(27),a=r.n(c),i=(r(134),r(135),r(136),r(17)),l=r(39),o=r.n(l),d=r(60),j=r(28),b=r(7),h=r(71),u=r(14),x=r(61),m=r.n(x),O=(r(34),r(47)),p=r(49),g=r(1);var v=function(e){function t(e){return r.apply(this,arguments)}function r(){return(r=Object(d.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Yes"!==r.target.value){t.next=3;break}return t.next=3,m.a.post("/api").then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 3:e.onHide(),alert("Thank you for your feedback!");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(g.jsxs)(p.a,Object(i.a)(Object(i.a)({},e),{},{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(g.jsx)(p.a.Header,{closeButton:!0,children:Object(g.jsx)(p.a.Title,{id:"contained-modal-title-vcenter",children:"Is the information accurate?"})}),Object(g.jsxs)(p.a.Footer,{children:[Object(g.jsx)(O.a,{variant:"success",value:"Yes",onClick:t,children:"Yes"}),Object(g.jsx)(O.a,{variant:"danger",value:"No",onClick:t,children:"No"})]})]}))},y=r(273),f=r(274);var _=function(e){return Object(g.jsxs)(y.a,{defaultActiveKey:"0",children:[Object(g.jsxs)(f.a,{children:[Object(g.jsx)(f.a.Header,{children:Object(g.jsx)(y.a.Toggle,{eventKey:"0",children:e.uvi<=2?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"UVI: &#x1F7E2;"}}):e.uvi>=3&&e.uvi<=5?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"UVI: &#128993;"}}):e.uvi>=6&&e.uvi<=7?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"UVI: &#128992;"}}):e.uvi>=8&&e.uvi<=10?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"UVI: &#128308;"}}):Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"UVI: &#128995;"}})})}),Object(g.jsx)(y.a.Collapse,{eventKey:"0",children:Object(g.jsx)(f.a.Body,{children:e.uvi<=2?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>Low risk of skin burn and unlikely</br>Minimal danger for the average person</br>Cautionary measures:</br>Apply sunscreen"}}):e.uvi>=3&&e.uvi<=5?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>Low risk of skin burn but possible</br>Exposure for 20 mins may lead to skin burns</br>Cautionary measures:</br>Apply broad spectrum sunscreen with SPF30</br>Wear hats and sunglasses</br>Wear long sleeved shirts when outdoors"}}):e.uvi>=6&&e.uvi<=7?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>Moderate risk of skin burn</br>Exposure for 20 mins may lead to skin burns</br>Cautionary measures:</br>Apply broad spectrum sunscreen with SPF30</br>Use lip balm or lip cream containing sunscreen</br>Wear hats and sunglasses</br>Wear long sleeved shirts when outdoors"}}):e.uvi>=8&&e.uvi<=10?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>High risk of skin burn</br>Exposure for 10 mins may lead to skin burns</br>Cautionary measures:</br>Apply broad spectrum sunscreen with SPF30</br>Use lip balm or lip cream containing sunscreen</br>Wear hats and sunglasses</br>Wear long sleeved shirts when outdoors</br>Seek shade and avoid being in the sun as much as possible"}}):Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>Very high risk of skin burn</br>Exposure for 5 mins may lead to skin burns</br>Occupational outdoor workers are at high risk</br>Cautionary measures:</br>Apply broad spectrum sunscreen with SPF30</br>Use lip balm or lip cream containing sunscreen</br>Wear hats and sunglasses</br>Wear long sleeved shirts when outdoors</br>Seek shade and avoid being in the sun as much as possible"}})})})]}),Object(g.jsxs)(f.a,{style:e.rain>7?{display:"block"}:{display:"none"},children:[Object(g.jsx)(f.a.Header,{children:Object(g.jsx)(y.a.Toggle,{eventKey:"1",children:e.rain>=7.5&&e.rain<15?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Flash Flood: &#128993;"}}):e.rain>=15&&e.rain<30?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Flash Flood: &#128992;"}}):e.rain>=30?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Flash Flood: &#128308;"}}):void 0})}),Object(g.jsx)(y.a.Collapse,{eventKey:"1",children:Object(g.jsx)(f.a.Body,{children:e.rain>=7.5&&e.rain<15?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>Low risk of flooding in low lying locations and river channels</br>Cautionary measures:</br>Stay indoors"}}):e.rain>=15&&e.rain<30?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>Moderate risk of flooding in low lying locations and river channels</br>Cautionary measures:</br>Stay indoors</br>Avoid commuting</br>Move to higher grounds"}}):e.rain>=30?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>High risk of flooding in low lying locations and river channels</br>Cautionary measures:</br>Stay indoors</br>Avoid commuting</br>Move to higher grounds</br>Be on the alert for evacuation procedures"}}):void 0})})]}),Object(g.jsxs)(f.a,{children:[Object(g.jsx)(f.a.Header,{children:Object(g.jsx)(y.a.Toggle,{eventKey:"2",children:e.temp>=30&&e.humidity>=42?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Mosquito Activity: &#128993;"}}):Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Mosquito Activity: &#128994;"}})})}),Object(g.jsx)(y.a.Collapse,{eventKey:"2",children:Object(g.jsx)(f.a.Body,{children:e.temp>=30&&e.humidity>=42?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>Mosquitoes are active</br>Cautionary measures:</br>Wear light-colored clothing</br>Equip yourself with mosquito repellents"}}):Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>Mosquitoes are less active"}})})})]}),Object(g.jsxs)(f.a,{children:[Object(g.jsx)(f.a.Header,{children:Object(g.jsx)(y.a.Toggle,{eventKey:"3",children:e.temp<18?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Heat Stress: &#x1F7E2;"}}):e.temp>=18&&e.temp<23?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Heat Stress: &#128993;"}}):e.temp>=23&&e.temp<28?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Heat Stress: &#128308;"}}):Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Heat Stress: &#128995;"}})})}),Object(g.jsx)(y.a.Collapse,{eventKey:"3",children:Object(g.jsx)(f.a.Body,{children:e.temp<18?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>Low risk of heat injury but possible </br>Cautionary measures:</br>Hydrate yourself every 45 minutes</br>Seek shade and rest for at least 15 minutes"}}):e.temp>=18&&e.temp<23?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>Moderate risk of heat injury</br>Cautionary measures:</br>Hydrate yourself every 30 minutes</br>Seek shade and rest for at least 15 minutes"}}):e.temp>=23&&e.temp<28?Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>High risk of heat injury</br>Cautionary measures:</br>Hydrate yourself every 30 minutes</br>Seek shade and rest for at least 30 minutes"}}):Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:"Description:</br>Very high risk of heat injury</br>Cautionary measures:</br>Hydrate yourself every 15 minutes</br>Seek shade and rest for at least 30 minutes"}})})})]})]})},k=r(68);var H=function(e){var t=e.data.current;return console.log(t),"object"==typeof t?console.log("Is Object of JSON"):Array.isArray(t)&&console.log("Is Array"),null==t?Object(g.jsx)("div",{className:"container mt-3 text-center",children:Object(g.jsx)(k.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"visually-hidden"})})}):Object(g.jsx)("div",{className:"tab-content",id:"pills-tabContent",children:Object(g.jsx)("div",{className:"tab-pane fade show active",id:"pills-current",role:"tabpanel","aria-labelledby":"pills-current-tab",children:Object(g.jsx)("div",{className:"container mt-3",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-sm warning",style:{backgroundColor:"rgb(214, 214, 209)",height:"750px;"},children:Object(g.jsxs)("div",{style:{marginTop:"20px",height:"50px",marginLeft:"20px"},children:[Object(g.jsx)("h3",{children:"Warning and Advisory"}),Object(g.jsx)(_,{})]})}),t&&t.map((function(e){return Object(g.jsx)("div",{className:"col-sm",style:{backgroundColor:"rgb(194, 194, 189)",height:"750px",backgroundImage:"url("+e.img+")"},children:Object(g.jsxs)("ul",{className:"list-group",children:[Object(g.jsx)("li",{className:"list-group-item border-0",style:{marginTop:"350px",height:"50px",backgroundColor:"transparent"},children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-3",id:"console-event",style:{height:"48px",width:"50px"},children:["Temp: ",e.temp]}),Object(g.jsx)("div",{className:"col",id:"icon"})]})}),Object(g.jsxs)("li",{className:"list-group-item border-0",style:{marginTop:"20px",height:"20px",backgroundColor:"transparent"},children:["Condition: ",e.cond]}),Object(g.jsxs)("li",{className:"list-group-item border-0",style:{marginTop:"20px",height:"20px",backgroundColor:"transparent"},children:["Date: ",e.date]}),Object(g.jsxs)("li",{className:"list-group-item border-0",style:{marginTop:"20px",height:"20px",backgroundColor:"transparent"},children:["Time: ",e.time]})]})})})),t&&t.map((function(e){return Object(g.jsxs)("div",{className:"col-sm",style:{backgroundColor:"rgb(201, 201, 195)",height:"750px"},children:[Object(g.jsxs)("div",{className:"row",style:{marginTop:"250px"},children:[Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Cloudiness: ",e.cloud,"%"]}),Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["UVI: ",e.uvi]})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Humidity: ",e.humd,"%"]}),Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Precipitation: ",e.rain,"mm"]})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Air pressure: ",e.p,"hPA"]}),Object(g.jsxs)("div",{className:"col-sm-4 offset-1 mb-5",style:{height:"30px"},children:["Wind-speed: ",e.ws,"m/s"]})]})]})}))]})})})})},S=r(33),I=r(41),N=r(126),T=r(129),C=r(24);var w=function(e){var t=e.data.tfHour;console.log(t),"object"==typeof t?console.log("Is Object of JSON"):Array.isArray(t)&&console.log("Is Array");var r=Object(n.useState)({}),s=Object(j.a)(r,2),c=s[0],a=s[1],i=Object(n.useState)("Temperature"),l=Object(j.a)(i,2),o=l[0],d=l[1];function b(e,t,r){a({labels:t,datasets:[{label:e,data:r,backgroundColor:"#ff9811",fill:!0,borderWidth:1}]}),console.log(e,r,t)}var h=Object(n.useMemo)((function(){return"temp"===o?"Temperature":"pcpn"===o?"Precipitation":"humd"===o?"Humidity":"pres"===o?"Air Pressure":"wind"===o?"Wind Speed":"cloud"===o?"Cloudiness":void 0}),[o]);return Object(n.useEffect)((function(){if(t){var e={},r={},n={};t.forEach((function(t){e=t.attr,r=t.hour,n=t.values,b(e,r,n)}))}}),[t]),null==t?Object(g.jsx)("div",{className:"container mt-3 text-center",children:Object(g.jsx)(k.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"visually-hidden"})})}):Object(g.jsxs)("div",{className:"container mt-3 border",children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col",children:[Object(g.jsx)("p",{style:{margin:"0"},children:"24-Hour Forecast"}),Object(g.jsx)("p",{children:h})]}),Object(g.jsx)("div",{className:"col-expand-sm d-flex justify-content-end",children:Object(g.jsxs)(C.a,{variant:"tabs",children:[Object(g.jsx)(C.a.Item,{children:t&&t.map((function(e){return"temp"===e.attr?Object(g.jsx)(C.a.Link,{"data-toggle":"tab",eventKey:"temp",onClick:function(){b(e.attr,e.hour,e.values),d(e.attr)},children:Object(g.jsx)(O.a,{variant:"dark",children:Object(g.jsx)(S.a,{icon:I.d})})}):""}))}),Object(g.jsx)(C.a.Item,{children:t&&t.map((function(e){return"pcpn"===e.attr?Object(g.jsx)(C.a.Link,{"data-toggle":"tab",eventKey:"pcpn",onClick:function(){b(e.attr,e.hour,e.values),d(e.attr)},children:Object(g.jsx)(O.a,{variant:"dark",children:Object(g.jsx)(S.a,{icon:I.b})})}):""}))}),Object(g.jsx)(C.a.Item,{children:t&&t.map((function(e){return"humd"===e.attr?Object(g.jsx)(C.a.Link,{"data-toggle":"tab",eventKey:"humd",onClick:function(){b(e.attr,e.hour,e.values),d(e.attr)},children:Object(g.jsx)(O.a,{variant:"dark",children:Object(g.jsx)(S.a,{icon:N.a})})}):""}))}),Object(g.jsx)(C.a.Item,{children:t&&t.map((function(e){return"pres"===e.attr?Object(g.jsx)(C.a.Link,{"data-toggle":"tab",eventKey:"pres",onClick:function(){b(e.attr,e.hour,e.values),d(e.attr)},children:Object(g.jsx)(O.a,{variant:"dark",children:Object(g.jsx)(S.a,{icon:I.c})})}):""}))}),Object(g.jsx)(C.a.Item,{children:t&&t.map((function(e){return"wind"===e.attr?Object(g.jsx)(C.a.Link,{"data-toggle":"tab",eventKey:"wind",onClick:function(){b(e.attr,e.hour,e.values),d(e.attr)},children:Object(g.jsx)(O.a,{variant:"dark",children:Object(g.jsx)(S.a,{icon:I.e})})}):""}))}),Object(g.jsx)(C.a.Item,{children:t&&t.map((function(e){return"cloud"===e.attr?Object(g.jsx)(C.a.Link,{"data-toggle":"tab",eventKey:"cloud",onClick:function(){b(e.attr,e.hour,e.values),d(e.attr)},children:Object(g.jsx)(O.a,{variant:"dark",children:Object(g.jsx)(S.a,{icon:I.a})})}):""}))})]})})]}),Object(g.jsx)("div",{className:"charts",children:Object(g.jsx)(T.a,{data:c,options:{responsive:!0,scales:{y:{beginAtZero:!0}}}})})]})},L=r(30);var M=function(e){var t=e.data.sevenDay;return console.log(t),"object"==typeof t?console.log("Is Object of JSON"):Array.isArray(t)&&console.log("Is Array"),null==t?Object(g.jsx)("div",{className:"container mt-3 text-center",children:Object(g.jsx)(k.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"visually-hidden"})})}):Object(g.jsx)(L.a,{responsive:"lg",className:"container mt-3",children:Object(g.jsx)("tbody",{children:t&&t.map((function(e){return Object(g.jsx)(y.a,{children:Object(g.jsxs)(f.a,{children:[Object(g.jsx)(f.a.Header,{children:Object(g.jsx)(y.a.Toggle,{as:f.a.Header,eventKey:e.day,children:Object(g.jsx)(L.a,{borderless:!0,className:"container mx-1",children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.date}),Object(g.jsx)("td",{children:e.day}),Object(g.jsx)("td",{children:Object(g.jsx)("img",{src:"/"+e.cond_img,alt:e.cond_img})}),Object(g.jsx)("td",{children:e.min_temp}),Object(g.jsx)("td",{children:e.max_temp})]})})})}),Object(g.jsx)(y.a.Collapse,{eventKey:e.day,children:Object(g.jsx)(f.a.Body,{children:Object(g.jsx)(L.a,{className:"container mx-1",children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsxs)(L.a,{className:"container mr-5",children:[Object(g.jsx)("p",{align:"center",children:"Morning"}),Object(g.jsx)("div",{align:"center",children:Object(g.jsx)("img",{src:"/"+e.morn_img,alt:e.morn_img})}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Temperature"}),Object(g.jsx)("td",{children:e.morn_temp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Cloudiness"}),Object(g.jsx)("td",{children:e.morn_cloud})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Precipitation"}),Object(g.jsx)("td",{children:e.morn_prcp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Humidity"}),Object(g.jsx)("td",{children:e.morn_humd})]})]})}),Object(g.jsx)("td",{children:Object(g.jsxs)(L.a,{className:"container mr-5",children:[Object(g.jsx)("p",{align:"center",children:"Afternoon"}),Object(g.jsx)("div",{align:"center",children:Object(g.jsx)("img",{src:"/"+e.noon_img,alt:e.noon_img})}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Temperature"}),Object(g.jsx)("td",{children:e.noon_temp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Cloudiness"}),Object(g.jsx)("td",{children:e.noon_cloud})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Precipitation"}),Object(g.jsx)("td",{children:e.noon_prcp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Humidity"}),Object(g.jsx)("td",{children:e.noon_humd})]})]})}),Object(g.jsx)("td",{children:Object(g.jsxs)(L.a,{className:"container mr-5",children:[Object(g.jsx)("p",{align:"center",children:"Evening"}),Object(g.jsx)("div",{align:"center",children:Object(g.jsx)("img",{src:"/"+e.eve_img,alt:e.eve_img})}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Temperature"}),Object(g.jsx)("td",{children:e.eve_temp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Cloudiness"}),Object(g.jsx)("td",{children:e.eve_cloud})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Precipitation"}),Object(g.jsx)("td",{children:e.eve_prcp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Humidity"}),Object(g.jsx)("td",{children:e.eve_humd})]})]})}),Object(g.jsx)("td",{children:Object(g.jsxs)(L.a,{className:"container mr-5",children:[Object(g.jsx)("p",{align:"center",children:"Midnight"}),Object(g.jsx)("div",{align:"center",children:Object(g.jsx)("img",{src:"/"+e.mid_img,alt:e.mid_img})}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Temperature"}),Object(g.jsx)("td",{children:e.mid_temp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Cloudiness"}),Object(g.jsx)("td",{children:e.mid_cloud})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Precipitation"}),Object(g.jsx)("td",{children:e.mid_prcp})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Humidity"}),Object(g.jsx)("td",{children:e.mid_humd})]})]})})]})})})})]})},e.day)}))})})},A=r(127),F=r.n(A),D=r(72);var K=function(){var e=Object(n.useState)({weather:[]}),t=Object(j.a)(e,2),r=t[0],c=t[1],a=s.a.useState(!1),l=Object(j.a)(a,2),x=l[0],p=l[1],y=function(){var e=Object(d.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/api");case 3:t=e.sent,r=t.data,c(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){y()}),[]);var f=r;return null==r?Object(g.jsx)("div",{className:"container mt-3 text-center",children:Object(g.jsx)(k.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"visually-hidden"})})}):Object(g.jsx)(s.a.Fragment,{children:Object(g.jsx)(b.a,{history:Object(u.d)(),children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)(D.a,{expand:"lg",style:{backgroundColor:"#8fcbf7"},children:[Object(g.jsxs)("a",{className:"navbar-app-name mr-sm-4",style:{textDecoration:"none"},href:"/#",children:[Object(g.jsx)("img",{className:"d-inline-block",src:"./images/weatherbooth.png",width:"60",height:"60",alt:""}),"Weatherbooth"]}),Object(g.jsx)(D.a.Toggle,{"aria-controls":"navbarCollapse"}),Object(g.jsxs)(D.a.Collapse,{id:"navbarCollapse",children:[Object(g.jsx)(C.a.Link,{className:"mx-auto h1",disabled:!0,href:"#",children:Object(g.jsx)("h2",{children:"Singapore"})}),Object(g.jsx)(F.a,{id:"change-temp",onlabel:"Fahrenheit",offlabel:"Celsius",onstyle:"warning",offstyle:"success",width:150})]})]}),Object(g.jsxs)(b.d,{children:[Object(g.jsx)(b.b,{exact:!0,path:"/",render:function(e){return Object(g.jsx)(H,Object(i.a)({data:f},e))}}),Object(g.jsx)(b.b,{path:"/TwentyFourHour",render:function(e){return Object(g.jsx)(w,Object(i.a)({data:f},e))}}),Object(g.jsx)(b.b,{path:"/SevenDays",render:function(e){return Object(g.jsx)(M,Object(i.a)({data:f},e))}})]}),Object(g.jsxs)(C.a,{className:"fixed-bottom bg-light",justify:!0,variant:"pills",defaultActiveKey:"pills-current",children:[Object(g.jsx)(C.a.Item,{children:Object(g.jsx)(C.a.Link,{as:h.a,exact:!0,to:"/",eventKey:"pills-current",children:"Current"})}),Object(g.jsx)(C.a.Item,{children:Object(g.jsx)(C.a.Link,{as:h.a,exact:!0,to:"/TwentyFourHour",eventKey:"pills-24hour",children:"24-Hour"})}),Object(g.jsx)(C.a.Item,{children:Object(g.jsx)(C.a.Link,{as:h.a,exact:!0,to:"/SevenDays",eventKey:"pills-7days",children:"7-Day"})})]}),Object(g.jsx)(O.a,{style:{zIndex:"1",position:"fixed",marginright:"50px!",bottom:40},variant:"primary",onClick:function(){return p(!0)},children:"Feedback"}),Object(g.jsx)(v,{show:x,onHide:function(){return p(!1)}})]})})})},P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,275)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),s(e),c(e),a(e)}))};a.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(K,{})}),document.getElementById("root")),P()},34:function(e,t,r){}},[[271,1,2]]]);
//# sourceMappingURL=main.0579e1b5.chunk.js.map