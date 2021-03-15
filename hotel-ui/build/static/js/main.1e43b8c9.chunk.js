(this["webpackJsonphotel-ui"]=this["webpackJsonphotel-ui"]||[]).push([[0],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"TitleBar",(function(){return B}));var r=n(0),a=n(12),s=n(26),c=n(14),i=n(2);var o=n(8),l=n(124),u=n(93),d=n(136),j=n(128),b=Object(l.a)((function(){return{sinCentre:{paddingTop:"5em",display:"flex",alignItems:"center",justifyContent:"center"},buttonCentre:{paddingTop:"2em",display:"flex",alignItems:"center",justifyContent:"center"}}}));var h=n(135),m=n(17),p=n.n(m),x=n(22),f=Object(l.a)((function(){return{centre:{paddingTop:"5em",display:"flex",alignItems:"center",justifyContent:"center"},buttonCentre:{paddingTop:"2em",display:"flex",alignItems:"center",justifyContent:"center"}}}));var O=Object(l.a)((function(){return{centre:{paddingTop:"2em",display:"flex",alignItems:"center",justifyContent:"center"},centreTitle:{paddingTop:"2em",fontWeight:"bold",fontSize:"2em",display:"flex",alignItems:"center",justifyContent:"center"},buttonCentre:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"2em"},buttonSpacing:{marginLeft:"1.5em",marginRight:"1.5em"}}}));var g=n(10),v=n(129),y=n(130),_=n(94),k=n(131),N=n(132),C=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:e.palette.background.paper},centreTitle:{paddingTop:"2em",fontWeight:"bold",fontSize:"2em",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1em"},brandPaper:{marginTop:"2em",marginLeft:"6em",marginRight:"6em",padding:"1em",display:"flex",flexDirection:"column",justifyContent:"center"},hotelTitle:{fontWeight:"bold",fontSize:"1.5em",width:"100%"},grid:{boxShadow:"0 0 3pt 1pt gray",height:"38em",width:"85%",marginTop:"10em",marginLeft:"10em"},divider:{marginLeft:"1em",marginRight:"5em"},brandGrid:{width:"80%"}}}));var T=n(142),w=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:e.palette.background.paper},centreTitle:{paddingTop:"2em",fontWeight:"bold",fontSize:"2em",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1em",width:"100%"},brandPaper:{marginTop:"2em",marginLeft:"6em",marginRight:"6em",padding:"1em",display:"flex",flexDirection:"column",justifyContent:"center"},hotelTitle:{fontWeight:"bold",fontSize:"1.5em"},grid:{boxShadow:"0 0 3pt 1pt gray",height:"38em",width:"85%",marginTop:"10em",marginLeft:"10em"},divider:{marginLeft:"1em",marginRight:"5em"},hotelGrid:{width:"80%"}}}));var S=n(141),I=n(133),E=n(137),D=n(140),P=n(138),W=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:e.palette.background.paper},centreTitle:{paddingTop:"2em",fontWeight:"bold",fontSize:"2em",display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},brandPaper:{marginTop:"2em",marginLeft:"6em",marginRight:"6em",padding:"1em",display:"flex",flexDirection:"column",justifyContent:"center"},hotelTitle:{fontWeight:"bold",fontSize:"1.5em"},grid:{boxShadow:"0 0 3pt 1pt gray",height:"38em",width:"85%",marginTop:"10em",marginLeft:"10em"},divider:{marginLeft:"1em",marginRight:"9%"},hotelGrid:{width:"70%"},priceDiv:{width:"100%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},radioGroup:{width:"100%",alignItems:"center",justifyContent:"center",marginBottom:"1em"}}}));var R=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:e.palette.background.paper},centreTitle:{paddingTop:"2em",fontWeight:"bold",fontSize:"2em",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1em",width:"100%"},brandPaper:{marginTop:"2em",marginLeft:"6em",marginRight:"6em",padding:"1em",display:"flex",flexDirection:"column",justifyContent:"center"},hotelTitle:{fontWeight:"bold",fontSize:"1.5em"},grid:{boxShadow:"0 0 3pt 1pt gray",height:"38em",width:"85%",marginTop:"10em",marginLeft:"10em"},divider:{marginLeft:"1em",marginRight:"5em"},hotelGrid:{width:"80%"}}}));n(89).config();var L=Object(l.a)((function(){return{title:{fontSize:"2.5em",fontWeight:"bold",paddingLeft:"1em"}}}));function B(){var e=L();return Object(i.jsx)(h.a,{position:"static",children:Object(i.jsx)(u.a,{className:e.title,children:"ExpressBook Customer Portal"})})}a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(s.a,{children:Object(i.jsxs)(c.c,{children:[Object(i.jsx)(c.a,{exact:!0,path:"/ui/employee",component:function(){return Object(i.jsx)(i.Fragment,{children:"Employee page"})}}),Object(i.jsx)(c.a,{exact:!0,path:"/ui/customer",component:function(){var e=b(),t=Object(c.f)(),n=Object(r.useState)(""),a=Object(o.a)(n,2),s=a[0],l=a[1],h=Object(r.useState)(!1),m=Object(o.a)(h,2),p=m[0],x=m[1],f=/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;function O(){return!f.test(s)&&0!==s.length}function g(){x(!0),fetch("http://localhost:1234/customers/"+s).then((function(e){404===e.status?t.push("/ui/customer/name",{customer_sin:s}):e.json().then((function(e){t.push("/ui/customer/welcome",e)}))})).catch((function(e){console.log("Error:",e),x(!1)}))}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(B,{}),Object(i.jsx)("div",{className:e.sinCentre,children:Object(i.jsx)(u.a,{children:"To begin searching destinations, enter your social insurance number:"})}),Object(i.jsx)("div",{className:e.sinCentre,children:Object(i.jsx)(d.a,{error:O(),helperText:O()?"SIN must have format XXX-XXX-XXX":"",onChange:function(e){return l(e.currentTarget.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&f.test(s)&&g()}(e)},id:"outlined-basic",label:"Social Insurance Number",variant:"outlined",value:s})}),Object(i.jsx)("div",{className:e.buttonCentre,children:Object(i.jsx)(j.a,{variant:"contained",onClick:function(){return g()},disabled:!f.test(s)||p,children:"Sign In"})})]})}}),Object(i.jsx)(c.a,{exact:!0,path:"/ui/customer/name",component:function(){var e=f(),t=Object(c.g)(),n=Object(c.f)(),a=Object(r.useState)(""),s=Object(o.a)(a,2),l=s[0],b=s[1],h=Object(r.useState)(""),m=Object(o.a)(h,2),O=m[0],g=m[1],v=Object(r.useState)(!1),y=Object(o.a)(v,2),_=y[0],k=y[1],N=Object(r.useState)(!1),C=Object(o.a)(N,2),T=C[0],w=C[1],S=Object(r.useState)(!1),I=Object(o.a)(S,2),E=I[0],D=I[1];function P(){return(P=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==l.length||0!==O.length){e.next=5;break}k(!0),w(!0),e.next=27;break;case 5:if(0===l.length||0!==O.length){e.next=10;break}k(!1),w(!0),e.next=27;break;case 10:if(0!==l.length||0===O.length){e.next=15;break}k(!0),w(!1),e.next=27;break;case 15:return D(!0),e.prev=16,e.next=19,fetch("http://localhost:1234/customers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customer_sin:t.state.customer_sin,customer_name:l,customer_address:O})});case 19:201===e.sent.status&&n.push("/ui/customer/welcome",{customer_sin:t.state.customer_sin,customer_name:l,customer_address:O}),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(16),console.error("Error:",e.t0),D(!1);case 27:case"end":return e.stop()}}),e,null,[[16,23]])})))).apply(this,arguments)}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(B,{}),Object(i.jsx)("div",{className:e.centre,children:Object(i.jsx)(u.a,{children:"Welcome to ExpressBook. Please provide some information about yourself:"})}),Object(i.jsx)("div",{className:e.centre,children:Object(i.jsx)(d.a,{label:"Full Name",variant:"outlined",value:l,error:_,helperText:_?"Must provide name":"",onChange:function(e){return b(e.currentTarget.value)}})}),Object(i.jsx)("div",{className:e.centre,children:Object(i.jsx)(d.a,{label:"Address",variant:"outlined",value:O,error:T,helperText:T?"Must provide address":"",onChange:function(e){return g(e.currentTarget.value)}})}),Object(i.jsx)("div",{className:e.buttonCentre,children:Object(i.jsx)(j.a,{variant:"contained",onClick:function(){return function(){return P.apply(this,arguments)}()},disabled:E,children:"Sign In"})})]})}}),Object(i.jsx)(c.a,{exact:!0,path:"/ui/customer/welcome",component:function(){var e=O(),t=Object(c.g)(),n=Object(c.f)(),a=Object(r.useState)(!1),s=Object(o.a)(a,2),l=s[0],d=s[1],b=Object(r.useState)(!1),h=Object(o.a)(b,2),m=h[0],f=h[1],g="Welcome, "+t.state.customer_name,v="Your address: "+t.state.customer_address;function y(){return(y=Object(x.a)(p.a.mark((function e(){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,fetch("http://localhost:1234/brands");case 4:if(200===(r=e.sent).status){e.next=8;break}return d(!1),e.abrupt("return");case 8:return e.next=10,r.json();case 10:r=e.sent,n.push("/ui/customer/brands",{customer_sin:t.state.customer_sin,response:r}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.error("Error:",e.t0),d(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}function _(){return(_=Object(x.a)(p.a.mark((function e(){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,fetch("http://localhost:1234/customers/"+t.state.customer_sin+"/reservations");case 4:if(200===(r=e.sent).status){e.next=8;break}return f(!1),e.abrupt("return");case 8:return e.next=10,r.json();case 10:r=e.sent,n.push("/ui/customer/reservations",{customer_name:t.state.customer_name,customer_sin:t.state.customer_sin,response:r}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.error("Error:",e.t0),f(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(B,{}),Object(i.jsx)(u.a,{className:e.centreTitle,children:g}),Object(i.jsx)(u.a,{className:e.centre,children:v}),Object(i.jsxs)("div",{className:e.buttonCentre,children:[Object(i.jsx)(j.a,{variant:"contained",className:e.buttonSpacing,onClick:function(){return function(){return y.apply(this,arguments)}()},disabled:l,children:"Find A Hotel"}),Object(i.jsx)(j.a,{variant:"contained",onClick:function(){return function(){return _.apply(this,arguments)}()},disabled:m,children:"My Reservations"})]})]})}}),Object(i.jsx)(c.a,{exact:!0,path:"/ui/customer/brands",component:function(){for(var e=C(),t=Object(c.g)(),n=Object(c.f)(),a=[],s=0;s<t.state.response.length;s++)a.push(!1);var l=Object(r.useState)(a),d=Object(o.a)(l,2),b=d[0],h=d[1];function m(){return(m=Object(x.a)(p.a.mark((function e(r){var a,s,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=Object(g.a)(b))[r]=!0,h(a),e.prev=3,e.next=6,fetch("http://localhost:1234/brands/"+t.state.response[r].brand_id+"/hotels");case 6:if(200===(s=e.sent).status){e.next=12;break}return(c=Object(g.a)(b))[r]=!1,h(c),e.abrupt("return");case 12:return e.next=14,s.json();case 14:s=e.sent,n.push("/ui/customer/hotels",{customer_sin:t.state.customer_sin,response:s,brandName:t.state.response[r].name}),e.next=24;break;case 18:e.prev=18,e.t0=e.catch(3),console.error("Error:",e.t0),(i=Object(g.a)(b))[r]=!1,h(i);case 24:case"end":return e.stop()}}),e,null,[[3,18]])})))).apply(this,arguments)}return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(B,{}),Object(i.jsx)(u.a,{className:e.centreTitle,children:"Select a hotel brand to view hotels:"}),Object(i.jsx)(v.a,{cols:1,cellHeight:200,className:e.grid,children:t.state.response.map((function(t,n){return Object(i.jsx)(y.a,{cols:1,children:Object(i.jsx)(_.a,{elevation:3,className:e.brandPaper,children:Object(i.jsxs)(k.a,{container:!0,spacing:2,alignItems:"center",children:[Object(i.jsxs)(k.a,{className:e.brandGrid,children:[Object(i.jsx)(u.a,{className:e.hotelTitle,children:t.name}),Object(i.jsxs)(u.a,{children:["Headquarters Address: ",t.main_office_address]}),Object(i.jsxs)(u.a,{children:["Email: ",t.email_address]}),Object(i.jsxs)(u.a,{children:["Phone: ",t.phone_number]}),Object(i.jsxs)(u.a,{children:["Number of hotels: ",t.number_of_hotels]})]}),Object(i.jsx)(N.a,{orientation:"vertical",flexItem:!0,className:e.divider}),Object(i.jsx)(k.a,{children:Object(i.jsx)(j.a,{variant:"contained",onClick:function(){return function(e){return m.apply(this,arguments)}(n)},disabled:b[n],children:"Select"})})]})},t.brand_id)},t.brand_id)}))})]})}}),Object(i.jsx)(c.a,{exact:!0,path:"/ui/customer/hotels",component:function(){for(var e=w(),t=Object(c.g)(),n=Object(c.f)(),a=[],s=0;s<t.state.response.length;s++)a.push(!1);var l=Object(r.useState)(a),d=Object(o.a)(l,2),b=d[0],h=d[1];function m(){return(m=Object(x.a)(p.a.mark((function e(r){var a,s,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=Object(g.a)(b))[r]=!0,h(a),e.prev=3,e.next=6,fetch("http://localhost:1234/hotels/"+t.state.response[r].hotel_id+"/rooms");case 6:if(200===(s=e.sent).status){e.next=12;break}return(c=Object(g.a)(b))[r]=!1,h(c),e.abrupt("return");case 12:return e.next=14,s.json();case 14:s=e.sent,n.push("/ui/customer/rooms",{customer_sin:t.state.customer_sin,response:s,brandName:t.state.response[r].brand_name,address:t.state.response[r].physical_address}),e.next=24;break;case 18:e.prev=18,e.t0=e.catch(3),console.error("Error:",e.t0),(i=Object(g.a)(b))[r]=!1,h(i);case 24:case"end":return e.stop()}}),e,null,[[3,18]])})))).apply(this,arguments)}return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(B,{}),Object(i.jsxs)(u.a,{className:e.centreTitle,children:[t.state.brandName," Hotels"]}),Object(i.jsx)(v.a,{cols:1,cellHeight:175,className:e.grid,children:t.state.response.map((function(t,n){return Object(i.jsx)(y.a,{cols:1,children:Object(i.jsx)(_.a,{elevation:3,className:e.brandPaper,children:Object(i.jsxs)(k.a,{container:!0,spacing:2,alignItems:"center",children:[Object(i.jsxs)(k.a,{className:e.hotelGrid,children:[Object(i.jsx)(u.a,{className:e.hotelTitle,children:t.physical_address}),Object(i.jsxs)(u.a,{children:["Email: ",t.email_address]}),Object(i.jsxs)(u.a,{children:["Phone: ",t.phone_number]}),Object(i.jsxs)(u.a,{children:["Number of rooms: ",t.number_of_rooms]})]}),Object(i.jsx)(N.a,{orientation:"vertical",flexItem:!0,className:e.divider}),Object(i.jsx)(k.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(T.a,{value:t.star_category,readOnly:!0}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(j.a,{variant:"contained",onClick:function(){return function(e){return m.apply(this,arguments)}(n)},disabled:b[n],children:"View Details"})]})})]})},t.hotel_id)},t.hotel_id)}))})]})}}),Object(i.jsx)(c.a,{exact:!0,path:"/ui/customer/reservations",component:function(){var e=W(),t=Object(c.g)();t.state.response.sort((function(e,t){return e.check_in_day>t.check_in_day?1:-1}));for(var n=[],a=[],s=[],l=[],d=0;d<t.state.response.length;d++)l.push(t.state.response[d].booking_id);t.state.response.forEach((function(e,r){"Renting"===e.status?n.push(t.state.response[r].booking_id):"Booked"===e.status?a.push(t.state.response[r].booking_id):s.push(t.state.response[r].booking_id)}));for(var b=[],h=0;h<t.state.response.length;h++)b.push(!1);var m=Object(r.useState)(b),f=Object(o.a)(m,2),O=f[0],C=f[1],T=Object(r.useState)(0),w=Object(o.a)(T,2),R=w[0],L=w[1],F=Object(r.useState)(!1),G=Object(o.a)(F,2),z=G[0],A=G[1],H=Object(r.useState)(""),X=Object(o.a)(H,2),M=X[0],J=X[1],U=Object(r.useState)("success"),V=Object(o.a)(U,2),K=V[0],Y=V[1],$=Object(r.useState)(l),q=Object(o.a)($,2),Q=q[0],Z=q[1];function ee(e,t){J(e),Y(t),A(!0)}function te(){A(!1)}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=Object(x.a)(p.a.mark((function e(r,c){var i,o,l,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object(g.a)(O),o=ce(c),i[o.index]=!0,C(i),e.prev=4,e.next=7,fetch("http://localhost:1234/customers/"+t.state.customer_sin+"/reservations/"+o.reservation.booking_id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});case 7:204===e.sent.status?"Archived"===r?(n.splice(n.indexOf(c),1),o.reservation.status="Archived",s.push(c),se(R),ee("Successfully checked out of hotel","success")):(a.splice(a.indexOf(c),1),o.reservation.status="Cancelled",s.push(c),se(R),ee("Successfully cancelled room booking","success")):((l=Object(g.a)(O))[o.index]=!1,C(l),ee("Error: Unable to modify reservation","error")),e.next=18;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("Error:",e.t0),(u=Object(g.a)(O))[o.index]=!1,C(u),ee("Error: Unable to modify reservation","error");case 18:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}function ae(e){var t=ce(e.bookingID);return"Renting"===t.reservation.status?Object(i.jsx)(j.a,{variant:"contained",onClick:function(){return ne("Archived",e.bookingID)},disabled:O[t.index],children:"Check Out"}):"Booked"===t.reservation.status?Object(i.jsx)(j.a,{variant:"contained",onClick:function(){return ne("Cancelled",e.bookingID)},disabled:O[t.index],children:"Cancel"}):Object(i.jsx)(i.Fragment,{})}function se(e){Z([].concat(0===e?l:1===e?n:2===e?a:s))}function ce(e){for(var n=0;n<t.state.response.length;n++){var r=t.state.response[n];if(r.booking_id===e)return{reservation:r,index:n}}return{reservation:{booking_id:-1,physical_address:"",date_of_registration:"",check_in_day:"",check_out_day:"",status:"",title:"",is_extendable:!1,amenities:[],view:"",price:""},index:-1}}function ie(t){return Object(i.jsx)(v.a,{cols:1,cellHeight:220,className:e.grid,children:t.reservations.map((function(t){var n=ce(t).reservation,r=new Date(n.check_in_day.replace("-","/")),a=new Date(n.check_out_day.replace("-","/")),s=(Math.round(Math.abs(+r-+a)/24/60/60/1e3)*parseFloat(n.price)).toFixed(2);return 0===n.amenities.length&&n.amenities.push("None"),Object(i.jsx)(y.a,{cols:1,children:Object(i.jsx)(_.a,{elevation:3,className:e.brandPaper,children:Object(i.jsxs)(k.a,{container:!0,spacing:2,alignItems:"center",children:[Object(i.jsxs)(k.a,{className:e.hotelGrid,children:[Object(i.jsxs)(u.a,{className:e.hotelTitle,children:["Room: ",n.title," | ",n.check_in_day," to ",n.check_out_day]}),Object(i.jsx)(u.a,{children:n.physical_address}),Object(i.jsxs)(u.a,{children:["BOOKING ID: ",n.booking_id]}),Object(i.jsxs)(u.a,{children:["Booking status: ",n.status]}),Object(i.jsxs)(u.a,{children:["Amenities: ",n.amenities.join(", ")]}),Object(i.jsxs)(u.a,{children:["View: ",n.view]}),Object(i.jsxs)(u.a,{children:["Is extendable: ",n.is_extendable?"Yes":"No"]})]}),Object(i.jsx)(N.a,{orientation:"vertical",flexItem:!0,className:e.divider}),Object(i.jsx)(k.a,{children:Object(i.jsxs)("div",{className:e.priceDiv,children:[Object(i.jsxs)(u.a,{children:["Booked on ",n.date_of_registration]}),Object(i.jsx)(u.a,{className:e.hotelTitle,children:"Total price:"}),Object(i.jsxs)(u.a,{className:e.hotelTitle,children:["$",s]}),Object(i.jsx)("br",{}),Object(i.jsx)(ae,{bookingID:t})]})})]})},n.booking_id)},n.booking_id)}))})}return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(B,{}),Object(i.jsxs)(u.a,{className:e.centreTitle,children:["My Reservations - ",t.state.customer_name]}),Object(i.jsxs)(S.a,{className:e.radioGroup,value:R,onChange:function(e){return function(e){var t=parseInt(e.target.value);L(t),se(t)}(e)},row:!0,children:[Object(i.jsx)(u.a,{children:"Filter by:\xa0\xa0\xa0"}),Object(i.jsx)(I.a,{value:0,control:Object(i.jsx)(E.a,{}),label:"All Reservations"}),Object(i.jsx)(I.a,{value:1,control:Object(i.jsx)(E.a,{}),label:"Ongoing"}),Object(i.jsx)(I.a,{value:2,control:Object(i.jsx)(E.a,{}),label:"Upcoming"}),Object(i.jsx)(I.a,{value:3,control:Object(i.jsx)(E.a,{}),label:"Cancelled/Archived"})]}),Object(i.jsx)(ie,{reservations:Q}),Object(i.jsx)(D.a,{open:z,autoHideDuration:6e3,onClose:te,children:Object(i.jsx)(P.a,{onClose:te,severity:K,children:M})})]})}}),Object(i.jsx)(c.a,{exact:!0,path:"/ui/customer/rooms",component:function(){for(var e=R(),t=Object(c.g)(),n=Object(c.f)(),a=[],s=0;s<t.state.response.length;s++)a.push(!1);var l=Object(r.useState)(a),d=Object(o.a)(l,2),b=d[0],h=d[1];function m(){return(m=Object(x.a)(p.a.mark((function e(r){var a,s,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=Object(g.a)(b))[r]=!0,h(a),e.prev=3,e.next=6,fetch("http://localhost:1234/hotels/"+t.state.response[r].hotel_id+"/rooms");case 6:if(200===(s=e.sent).status){e.next=12;break}return(c=Object(g.a)(b))[r]=!1,h(c),e.abrupt("return");case 12:return e.next=14,s.json();case 14:s=e.sent,n.push("/ui/customer/rooms",{customer_sin:t.state.customer_sin,response:s,brandName:t.state.response[r].brand_name,address:t.state.response[r].physical_address}),e.next=24;break;case 18:e.prev=18,e.t0=e.catch(3),console.error("Error:",e.t0),(i=Object(g.a)(b))[r]=!1,h(i);case 24:case"end":return e.stop()}}),e,null,[[3,18]])})))).apply(this,arguments)}return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(B,{}),Object(i.jsxs)(u.a,{className:e.centreTitle,children:[t.state.brandName," Hotels"]}),Object(i.jsx)(v.a,{cols:1,cellHeight:175,className:e.grid,children:t.state.response.map((function(t,n){return Object(i.jsx)(y.a,{cols:1,children:Object(i.jsx)(_.a,{elevation:3,className:e.brandPaper,children:Object(i.jsxs)(k.a,{container:!0,spacing:2,alignItems:"center",children:[Object(i.jsxs)(k.a,{className:e.hotelGrid,children:[Object(i.jsx)(u.a,{className:e.hotelTitle,children:t.physical_address}),Object(i.jsxs)(u.a,{children:["Email: ",t.email_address]}),Object(i.jsxs)(u.a,{children:["Phone: ",t.phone_number]}),Object(i.jsxs)(u.a,{children:["Number of rooms: ",t.number_of_rooms]})]}),Object(i.jsx)(N.a,{orientation:"vertical",flexItem:!0,className:e.divider}),Object(i.jsx)(k.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(T.a,{value:t.star_category,readOnly:!0}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(j.a,{variant:"contained",onClick:function(){return function(e){return m.apply(this,arguments)}(n)},disabled:b[n],children:"View Details"})]})})]})},t.hotel_id)},t.hotel_id)}))})]})}})]})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.1e43b8c9.chunk.js.map