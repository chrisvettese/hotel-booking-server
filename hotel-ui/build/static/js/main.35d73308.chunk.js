(this["webpackJsonphotel-ui"]=this["webpackJsonphotel-ui"]||[]).push([[0],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"TitleBar",(function(){return _}));var r=n(0),a=n(9),c=n(26),s=n(11),i=n(3);var o=n(12),u=n(102),l=n(105),d=n(112),j=n(113),b=Object(u.a)((function(){return{sinCentre:{paddingTop:"5em",display:"flex",alignItems:"center",justifyContent:"center"},buttonCentre:{paddingTop:"2em",display:"flex",alignItems:"center",justifyContent:"center"}}}));var m=n(111),h=n(19),p=n.n(h),f=n(25),x=Object(u.a)((function(){return{centre:{paddingTop:"5em",display:"flex",alignItems:"center",justifyContent:"center"},buttonCentre:{paddingTop:"2em",display:"flex",alignItems:"center",justifyContent:"center"}}}));var O=Object(u.a)((function(){return{centre:{paddingTop:"2em",display:"flex",alignItems:"center",justifyContent:"center"},centreTitle:{paddingTop:"2em",fontWeight:"bold",fontSize:"2em",display:"flex",alignItems:"center",justifyContent:"center"},buttonCentre:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"2em"},buttonSpacing:{marginLeft:"1.5em",marginRight:"1.5em"}}}));var g=n(14),v=n(107),y=n(108),C=n(74),k=n(109),T=n(110),N=Object(u.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:e.palette.background.paper},centreTitle:{paddingTop:"2em",fontWeight:"bold",fontSize:"2em",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1em"},brandPaper:{marginTop:"2em",marginLeft:"6em",marginRight:"6em",padding:"1em",display:"flex",flexDirection:"column",justifyContent:"center"},hotelTitle:{fontWeight:"bold",fontSize:"1.5em"},grid:{boxShadow:"0 0 3pt 1pt gray",height:"38em",width:"85%",marginTop:"10em",marginLeft:"10em"},divider:{marginLeft:"1em",marginRight:"5em"},brandGrid:{width:"80%"}}}));n(70).config();var S=Object(u.a)((function(){return{title:{fontSize:"2.5em",fontWeight:"bold",paddingLeft:"1em"}}}));function _(){var e=S();return Object(i.jsx)(m.a,{position:"static",children:Object(i.jsx)(l.a,{className:e.title,children:"ExpressBook Customer Portal"})})}a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(c.a,{children:Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{exact:!0,path:"/ui/employee",component:function(){return Object(i.jsx)(i.Fragment,{children:"Employee page"})}}),Object(i.jsx)(s.a,{exact:!0,path:"/ui/customer",component:function(){var e=b(),t=Object(s.f)(),n=Object(r.useState)(""),a=Object(o.a)(n,2),c=a[0],u=a[1],m=Object(r.useState)(!1),h=Object(o.a)(m,2),p=h[0],f=h[1],x=/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;function O(){return!x.test(c)&&0!==c.length}function g(){f(!0),fetch("http://localhost:1234/customers/"+c).then((function(e){404===e.status?t.push("/ui/customer/name",{customer_sin:c}):e.json().then((function(e){t.push("/ui/customer/welcome",e)}))})).catch((function(e){console.log("Error:",e),f(!1)}))}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(_,{}),Object(i.jsx)("div",{className:e.sinCentre,children:Object(i.jsx)(l.a,{children:"To begin searching destinations, enter your social insurance number:"})}),Object(i.jsx)("div",{className:e.sinCentre,children:Object(i.jsx)(d.a,{error:O(),helperText:O()?"SIN must have format XXX-XXX-XXX":"",onChange:function(e){return u(e.currentTarget.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&x.test(c)&&g()}(e)},id:"outlined-basic",label:"Social Insurance Number",variant:"outlined",value:c})}),Object(i.jsx)("div",{className:e.buttonCentre,children:Object(i.jsx)(j.a,{variant:"contained",onClick:function(){return g()},disabled:!x.test(c)||p,children:"Sign In"})})]})}}),Object(i.jsx)(s.a,{exact:!0,path:"/ui/customer/name",component:function(){var e=x(),t=Object(s.g)(),n=Object(s.f)(),a=Object(r.useState)(""),c=Object(o.a)(a,2),u=c[0],b=c[1],m=Object(r.useState)(""),h=Object(o.a)(m,2),O=h[0],g=h[1],v=Object(r.useState)(!1),y=Object(o.a)(v,2),C=y[0],k=y[1],T=Object(r.useState)(!1),N=Object(o.a)(T,2),S=N[0],w=N[1],I=Object(r.useState)(!1),E=Object(o.a)(I,2),X=E[0],F=E[1];function P(){return(P=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==u.length||0!==O.length){e.next=5;break}k(!0),w(!0),e.next=27;break;case 5:if(0===u.length||0!==O.length){e.next=10;break}k(!1),w(!0),e.next=27;break;case 10:if(0!==u.length||0===O.length){e.next=15;break}k(!0),w(!1),e.next=27;break;case 15:return F(!0),e.prev=16,e.next=19,fetch("http://localhost:1234/customers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customer_sin:t.state.customer_sin,customer_name:u,customer_address:O})});case 19:201===e.sent.status&&n.push("/ui/customer/welcome",{customer_sin:t.state.customer_sin,customer_name:u,customer_address:O}),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(16),console.error("Error:",e.t0),F(!1);case 27:case"end":return e.stop()}}),e,null,[[16,23]])})))).apply(this,arguments)}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(_,{}),Object(i.jsx)("div",{className:e.centre,children:Object(i.jsx)(l.a,{children:"Welcome to ExpressBook. Please provide some information about yourself:"})}),Object(i.jsx)("div",{className:e.centre,children:Object(i.jsx)(d.a,{label:"Full Name",variant:"outlined",value:u,error:C,helperText:C?"Must provide name":"",onChange:function(e){return b(e.currentTarget.value)}})}),Object(i.jsx)("div",{className:e.centre,children:Object(i.jsx)(d.a,{label:"Address",variant:"outlined",value:O,error:S,helperText:S?"Must provide address":"",onChange:function(e){return g(e.currentTarget.value)}})}),Object(i.jsx)("div",{className:e.buttonCentre,children:Object(i.jsx)(j.a,{variant:"contained",onClick:function(){return function(){return P.apply(this,arguments)}()},disabled:X,children:"Sign In"})})]})}}),Object(i.jsx)(s.a,{exact:!0,path:"/ui/customer/welcome",component:function(){var e=O(),t=Object(s.g)(),n=Object(s.f)(),a=Object(r.useState)(!1),c=Object(o.a)(a,2),u=c[0],d=c[1],b=Object(r.useState)(!1),m=Object(o.a)(b,2),h=m[0],x=m[1],g="Welcome, "+t.state.customer_name,v="Your address: "+t.state.customer_address;function y(){return(y=Object(f.a)(p.a.mark((function e(){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,fetch("http://localhost:1234/brands");case 4:if(200===(r=e.sent).status){e.next=8;break}return d(!1),e.abrupt("return");case 8:return e.next=10,r.json();case 10:r=e.sent,n.push("/ui/customer/brands",{state:t.state,response:r}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.error("Error:",e.t0),d(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}function C(){return(C=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(!0),n.push("/ui/customer/reservations",{customer_sin:t.state.customer_sin});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(_,{}),Object(i.jsx)(l.a,{className:e.centreTitle,children:g}),Object(i.jsx)(l.a,{className:e.centre,children:v}),Object(i.jsxs)("div",{className:e.buttonCentre,children:[Object(i.jsx)(j.a,{variant:"contained",className:e.buttonSpacing,onClick:function(){return function(){return y.apply(this,arguments)}()},disabled:u,children:"Find A Hotel"}),Object(i.jsx)(j.a,{variant:"contained",onClick:function(){return function(){return C.apply(this,arguments)}()},disabled:h,children:"My Reservations"})]})]})}}),Object(i.jsx)(s.a,{exact:!0,path:"/ui/customer/brands",component:function(){for(var e=N(),t=Object(s.g)(),n=Object(s.f)(),a=[],c=0;c<t.state.response.length;c++)a.push(!1);var u=Object(r.useState)(a),d=Object(o.a)(u,2),b=d[0],m=d[1];function h(){return(h=Object(f.a)(p.a.mark((function e(r){var a,c,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=Object(g.a)(b))[r]=!0,m(a),e.prev=3,e.next=6,fetch("http://localhost:1234/brands/"+t.state.response[r].brand_id+"/hotels");case 6:if(200===(c=e.sent).status){e.next=12;break}return(s=Object(g.a)(b))[r]=!1,m(s),e.abrupt("return");case 12:return e.next=14,c.json();case 14:c=e.sent,n.push("/ui/customer/hotels",{state:t.state.state,response:c,brandName:t.state.response[r].brand_name}),e.next=24;break;case 18:e.prev=18,e.t0=e.catch(3),console.error("Error:",e.t0),(i=Object(g.a)(b))[r]=!1,m(i);case 24:case"end":return e.stop()}}),e,null,[[3,18]])})))).apply(this,arguments)}return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(_,{}),Object(i.jsx)(l.a,{className:e.centreTitle,children:"Select a hotel brand to view hotels:"}),Object(i.jsx)(v.a,{cols:1,cellHeight:200,className:e.grid,children:t.state.response.map((function(t,n){return Object(i.jsx)(y.a,{cols:1,children:Object(i.jsx)(C.a,{elevation:3,className:e.brandPaper,children:Object(i.jsxs)(k.a,{container:!0,spacing:2,alignItems:"center",children:[Object(i.jsxs)(k.a,{className:e.brandGrid,children:[Object(i.jsx)(l.a,{className:e.hotelTitle,children:t.name}),Object(i.jsxs)(l.a,{children:["Headquarters Address: ",t.main_office_address]}),Object(i.jsxs)(l.a,{children:["Email: ",t.email_address]}),Object(i.jsxs)(l.a,{children:["Phone: ",t.phone_number]}),Object(i.jsxs)(l.a,{children:["Number of hotels: ",t.number_of_hotels]})]}),Object(i.jsx)(T.a,{orientation:"vertical",flexItem:!0,className:e.divider}),Object(i.jsx)(k.a,{children:Object(i.jsx)(j.a,{variant:"contained",onClick:function(){return function(e){return h.apply(this,arguments)}(n)},disabled:b[n],children:"Select"})})]})},t.brand_id)},t.brand_id)}))})]})}})]})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.35d73308.chunk.js.map