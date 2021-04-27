(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{100:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},23:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},240:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(92),o=a.n(c),s=a(17),i=a.n(s),d=a(22),u=a(3),p=a(2),l=a(7),j=a(6),h=a(258),b=a(262),f=a(259),v=a(260),x=a(45),m=a.n(x),O=a(46),y=a.n(O),g=a(23),C=a.n(g),_=a(4);var w=function(e){var t=e.data,a=t.confirmed,r=t.recovered,n=t.deaths,c=t.lastUpdate;return a?Object(_.jsx)("div",{className:C.a.container,children:Object(_.jsxs)(h.a,{container:!0,spacing:3,justify:"center",children:[Object(_.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:y()(C.a.card,C.a.infected),children:Object(_.jsxs)(f.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(m.a,{start:0,end:a,duration:2,separator:","})}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(_.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:y()(C.a.card,C.a.recovered),children:Object(_.jsxs)(f.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(m.a,{start:0,end:r,duration:2,separator:","})}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body2",children:"Number of recoveries from COVID-19"})]})}),Object(_.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:y()(C.a.card,C.a.deaths),children:Object(_.jsxs)(f.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(m.a,{start:0,end:n,duration:2,separator:","})}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})})]})}):"Loading..."},k=a(101),D=a(99),N=a.n(D);var S=function(e){var t=e.data,a=t.confirmed,r=t.recovered,n=t.deaths,c=a?Object(_.jsx)(k.a,{data:{labels:["Confirmed","Recovered","Deaths"],datasets:[{data:[a,r,n],backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],borderColor:["rgb(0,0,255)","rgb(0,255,0)","rgb(255,0,0)"],borderWidth:1,hoverOffset:5}]}}):null;return Object(_.jsx)("div",{className:N.a.container,children:c})},I=a(44),V=a(263),B=a(261),E=a(100),U=a.n(E),q=a(62),A=a.n(q),G="7fee4957c5msh65c32fabd477d63p1b134bjsn9cf282802c99",z="covid-19-data.p.rapidapi.com",J={method:"GET",url:"https://covid-19-data.p.rapidapi.com/country/",params:{name:"India"},headers:{"x-rapidapi-key":G,"x-rapidapi-host":z}},M=function(){var e=Object(d.a)(i.a.mark((function e(t){var a,r,n,c,o,s,d,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(J.params.name=t),e.prev=1,e.next=4,A.a.request(J);case 4:return a=e.sent,r=a.data[0],n=r.country,c=r.confirmed,o=r.critical,s=r.deaths,d=r.recovered,u=r.lastUpdate,e.abrupt("return",{country:n,confirmed:c,critical:o,deaths:s,recovered:d,lastUpdate:u});case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),P={method:"GET",url:"https://covid-19-data.p.rapidapi.com/help/countries",headers:{"x-rapidapi-key":G,"x-rapidapi-host":z}},Q=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.request(P);case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();var R=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),n=Object(I.a)(a,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,Q();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(_.jsx)(V.a,{className:U.a.formControl,children:Object(_.jsxs)(B.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(_.jsx)("option",{value:"India",children:"India"}),c.map((function(e,t){return Object(_.jsx)("option",{value:e,children:e},t)}))]})})},T=a(63),L=a.n(T),W=a.p+"static/media/covid-19.0bf3092e.png",Y=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(d.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return Object(_.jsxs)("div",{className:L.a.container,children:[Object(_.jsx)("img",{src:W,alt:"Covid 19 Corona Virus",className:L.a.image}),Object(_.jsx)(w,{data:e}),Object(_.jsx)(R,{handleCountryChange:this.handleCountryChange}),Object(_.jsx)(S,{data:e})]})}}]),a}(n.a.Component);o.a.render(Object(_.jsx)(Y,{}),document.getElementById("root"))},63:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},99:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}}},[[240,1,2]]]);
//# sourceMappingURL=main.e3980a47.chunk.js.map