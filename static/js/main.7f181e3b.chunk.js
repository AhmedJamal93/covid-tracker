(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{21:function(t,e,a){t.exports={container:"Cards_container__3bjn6",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},210:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a(0),c=a.n(r),s=a(69),o=a.n(s),i=(a(91),a(8)),u=a.n(i),d=a(13),l=a(70),p=a(71),f=a(84),j=a(82),h=a(83),b=a(28),v=a(31),m=a.n(v),x="https://covid19.mathdro.id/api",O=function(){var t=Object(d.a)(u.a.mark((function t(e){var a,n,r,c,s,o,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=x,e&&(a="".concat(x,"/countries/").concat(e)),t.prev=2,t.next=5,m.a.get(a);case 5:return n=t.sent,r=n.data,c=r.confirmed,s=r.recovered,o=r.deaths,i=r.lastUpdate,console.log(c),t.abrupt("return",{confirmed:c,recovered:s,deaths:o,lastUpdate:i});case 15:return t.prev=15,t.t0=t.catch(2),t.abrupt("return",t.t0);case 18:case"end":return t.stop()}}),t,null,[[2,15]])})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(d.a)(u.a.mark((function t(){var e,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("".concat(x,"/daily"));case 3:return e=t.sent,a=e.data,t.abrupt("return",a.map((function(t){var e=t.confirmed,a=t.deaths,n=t.reportDate;return{totalConfirmed:e.total,deaths:a.total,date:n}})));case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(d.a)(u.a.mark((function t(){var e,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("".concat(x,"/countries"));case 3:return e=t.sent,a=e.data.countries,t.abrupt("return",a.map((function(t){return t.name})));case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),_=a(72),g=a.n(_),w=function(t){var e=t.data,a=(e.totalConfirmed,e.recovered,e.deaths,t.country,Object(r.useState)({})),c=Object(h.a)(a,2),s=c[0],o=c[1];Object(r.useEffect)((function(){(function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var i=s[0]?Object(n.jsx)(b.Line,{data:{labels:s.map((function(t){var e=t.date;return new Date(e).toLocaleDateString()})),datasets:[{data:s.map((function(t){return t.totalConfirmed})),label:"Infected",borderColor:"blue",fill:!0},{data:s.map((function(t){return t.deaths})),label:"Deaths",borderColor:"red",fill:!0}]}}):null;return Object(n.jsx)("div",{className:g.a.container,children:i})},N=a(232),D=a(231),k=a(73),I=a.n(k),S=function(t){var e=t.handleCountryChange,a=t.countries;return a?(console.log(a),Object(n.jsx)(N.a,{className:I.a.formControl,children:Object(n.jsxs)(D.a,{defaultValue:"",onChange:function(t){return e(t.target.value)},children:[Object(n.jsx)("option",{value:"",children:"Select Country"}),a.map((function(t,e){return Object(n.jsx)("option",{value:t,children:t},e)}))]})})):"...Loading"},U=a(228),A=a(233),L=a(229),V=a(230),B=a(78),E=a.n(B),T=a(79),M=a.n(T),R=a(80),W=a.n(R),z=function(t){var e=t.className,a=t.cardTitle,r=t.value,c=(t.lastUpdate,t.cardSubtitle);return Object(n.jsx)(U.a,{item:!0,"Auto-layout":!0,component:A.a,className:M()(W.a.card,e),children:Object(n.jsxs)(L.a,{children:[Object(n.jsx)(V.a,{color:"textSecondary",gutterBottom:!0,children:a}),Object(n.jsx)(V.a,{variant:"h5",compnent:"h2",children:Object(n.jsx)(E.a,{start:0,end:r,duration:2.75,separator:" "})}),Object(n.jsx)(V.a,{variant:"body2",component:"p",children:c})]})})},J=a(21),P=a.n(J),Q=function(t){var e=t.data,a=e.confirmed,r=e.recovered,c=e.deaths,s=e.lastUpdate;return a?Object(n.jsx)("div",{className:P.a.container,children:Object(n.jsxs)(U.a,{conatiner:!0,spacing:3,justify:"center",children:[Object(n.jsx)(z,{className:P.a.infected,cardTitle:"Infected",value:a.value,lastUpdate:s,cardSubtitle:"Number of active cases from COVID-19."}),Object(n.jsx)(z,{className:P.a.recovered,cardTitle:"Recovered",value:r.value,lastUpdate:s,cardSubtitle:"Number of recoveries from COVID-19."}),Object(n.jsx)(z,{className:P.a.deaths,cardTitle:"Deaths",value:c.value,lastUpdate:s,cardSubtitle:"Number of deaths caused by COVID-19."})]})}):"...loading"},Y=a(81),q=a.n(Y),G=function(t){var e=t.data,a=e.confirmed,r=e.recovered,c=e.deaths,s=t.country,o=a?Object(n.jsx)(b.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,r.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return Object(n.jsx)("div",{className:q.a.container,children:o})},H=a(32),F=a.n(H),K=a.p+"static/media/covid-19.53e44b24.png",X=function(t){Object(f.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={data:{},dataCountry:{},country:"",countries:[]},t.handleCountryChange=function(){var e=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(a);case 2:n=e.sent,t.setState({dataCountry:n,country:a},(function(){})),console.log(t.state.dataCountry);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=Object(d.a)(u.a.mark((function t(){var e,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:return e=t.sent,t.next=5,C();case 5:a=t.sent,this.setState({data:e,countries:a}),console.log(this.state.countries),console.log(this.state.data);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.data;return Object(n.jsxs)("div",{className:F.a.container,children:[Object(n.jsxs)("span",{className:F.a.update,children:["Last Updated: ",new Date(t.lastUpdate).toDateString()]}),Object(n.jsx)("img",{className:F.a.image,src:K,alt:"Covid19"}),Object(n.jsxs)(U.a,{container:!0,direction:"column",children:[Object(n.jsx)(U.a,{container:!0,justify:"center",alignItems:"flex-start",children:Object(n.jsx)("h1",{children:"WORLDWIDE"})}),Object(n.jsxs)(U.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",children:[Object(n.jsx)(U.a,{item:!0,xs:!0,children:Object(n.jsx)(Q,{className:"cards",data:t})}),Object(n.jsx)(U.a,{item:!0,xs:10,children:Object(n.jsx)(w,{data:t,country:this.state.country})})]}),Object(n.jsxs)(U.a,{container:!0,justify:"center",children:[Object(n.jsx)(S,{countries:this.state.countries,handleCountryChange:this.handleCountryChange}),Object(n.jsx)(G,{data:this.state.dataCountry,country:this.state.country})]})]})]})}}]),a}(r.Component);o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(X,{})}),document.getElementById("root"))},32:function(t,e,a){t.exports={cards:"App_cards__3Hut_",container:"App_container__1MQN3",image:"App_image__3byI1",update:"App_update__m5NWp"}},72:function(t,e,a){t.exports={container:"Chart_container__1PIOn"}},73:function(t,e,a){t.exports={formControl:"Country_formControl__3h-YE"}},80:function(t,e,a){t.exports={card:"Card_card__LmsGV"}},81:function(t,e,a){t.exports={container:"ChartCountry_container__fUssB"}},91:function(t,e,a){}},[[210,1,2]]]);
//# sourceMappingURL=main.7f181e3b.chunk.js.map