(this.webpackJsonpglobal4netx=this.webpackJsonpglobal4netx||[]).push([[0],{109:function(e,t,a){},133:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(32),r=a.n(s),i=(a(109),a(96)),o=a(13),l=a(182),j=a(11),d=a(55),u=a.n(d),h=a(185),b=a(186),m=a(188),O=a(189),x=a(94),v=a.n(x),p=(a(84),a(85),a(2)),f=function(){var e,t,a=Object(n.useState)(),c=Object(j.a)(a,2),s=c[0],r=c[1],i=Object(o.g)();if(Object(n.useEffect)((function(){u.a.get("https://restcountries.com/v3.1/name/".concat(i.name.toLowerCase())).then((function(e){r(e.data[0])}))}),[i.name]),!s)return Object(p.jsx)("div",{children:"No details"});var d=s.currencies,x=Object.keys(d);return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(l.a,{container:!0,className:"details",children:Object(p.jsxs)(l.a,{item:!0,className:"detailsCountry",children:[Object(p.jsx)(h.a,{className:"detailsArrow",href:"/",children:Object(p.jsxs)(b.a,{className:"detailsLinkHome",children:[Object(p.jsx)(v.a,{}),"Back to Home"]})}),Object(p.jsx)(b.a,{className:"detailsCard",children:Object(p.jsxs)(m.a,{className:"detailsPage",children:[Object(p.jsxs)(O.a,{variant:"h5",component:"h5",className:"detailsText",children:["Capital:",Object(p.jsx)("span",{children:null===(e=s.capital)||void 0===e?void 0:e[0]})]}),Object(p.jsxs)(O.a,{variant:"h5",component:"h5",children:["Name:",Object(p.jsx)("span",{children:null===(t=s.name)||void 0===t?void 0:t.common})]}),x.map((function(e,t){var a,n;return Object(p.jsxs)("div",{children:[Object(p.jsxs)(O.a,{variant:"h5",component:"h5",children:["Currency Code:",Object(p.jsx)("span",{children:e})]}),Object(p.jsxs)(O.a,{variant:"h5",component:"h5",children:["Currency Name:",Object(p.jsx)("span",{children:null===(a=d[e])||void 0===a?void 0:a.name})]}),Object(p.jsxs)(O.a,{variant:"h5",component:"h5",gutterBottom:!0,children:["Currency Symbol:",Object(p.jsx)("span",{children:null===(n=d[e])||void 0===n?void 0:n.symbol})]})]},t)}))]})})]})})})},C=a(190),g=a(179),N=a(193),y=a(180),S=a(176),w=a(178),L=a(95),k=a.n(L),A=a(184),B=function(e){e.country,e.setCountry;var t=e.countries;e.setCountries;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(l.a,{item:!0,className:"countries",children:Object(p.jsx)(A.a,{className:"countriesUl",children:t.map((function(e,t){var a=e.capital,n=e.name,c=e.region;return Object(p.jsx)(b.a,{className:"countryCard",children:Object(p.jsx)(h.a,{className:"countryButton",href:"/details/".concat(n.common),children:Object(p.jsxs)(m.a,{className:"countryPage",children:[Object(p.jsx)(O.a,{variant:"h3",component:"h3",className:"countryTitle",children:Object(p.jsx)("span",{children:n.common})}),Object(p.jsxs)(O.a,{variant:"h5",component:"h5",children:["Capital:",Object(p.jsx)("span",{children:null===a||void 0===a?void 0:a[0]})]}),Object(p.jsxs)(O.a,{variant:"h5",component:"h5",gutterBottom:!0,children:["Region:",Object(p.jsx)("span",{children:c})]})]})})},t)}))})})})},F=(a(133),function(e){var t=e.country,a=e.setCountry,c=e.countries,s=e.setCountries,r=Object(n.useState)(""),i=Object(j.a)(r,2),o=i[0],d=i[1],u=Object(n.useState)("all"),h=Object(j.a)(u,2),b=h[0],m=h[1],O=Object(n.useState)(""),x=Object(j.a)(O,2),v=x[0],f=x[1];return Object(p.jsxs)(C.a,{className:"sort",children:[Object(p.jsxs)(l.a,{container:!0,className:"sortContainer",children:[Object(p.jsxs)(l.a,{item:!0,className:"sortSearch",children:[Object(p.jsx)(k.a,{className:"sortSearchIcon"}),Object(p.jsx)(g.a,{className:"sortSearchText",label:"Search country...",variant:"standard",onChange:function(e){var t,a=null===(t=e.target)||void 0===t?void 0:t.value;if(a){var n=function(e){return c.filter((function(t){var a;return(null===(a=t.name)||void 0===a?void 0:a.common.toLowerCase().includes(e.toLowerCase()))||!t.region.toLowerCase().includes(b.toLowerCase())}))}(a);return console.log("value",a),console.log("search:",n),void d(n)}f("")},inputProps:{type:"search"}})]}),Object(p.jsx)(l.a,{item:!0,className:"sortFiltered",children:Object(p.jsxs)(N.a,{variant:"standard",className:"sortFilteredSearch",data:c,children:[Object(p.jsx)(y.a,{children:"Region..."}),Object(p.jsxs)(S.a,{labelId:"demo-multiple-name-label",id:"demo-multiple-name",onChange:function(e){var t,a=null===(t=e.target)||void 0===t?void 0:t.value;if(console.log("selectChange:",a),a&&(m(a),"all"!==a)){var n=function(e){return c.filter((function(t){var a;return t.region.toLowerCase().includes(e.toLowerCase())&&(null===(a=t.name)||void 0===a?void 0:a.common.toLowerCase().includes(v.toLowerCase()))}))}(a);d(n)}else d("")},value:b,label:"Countries...",children:[Object(p.jsx)(w.a,{value:"all",children:Object(p.jsx)("em",{children:"All"})}),Object(p.jsx)(w.a,{value:"europe",children:"Europe"}),Object(p.jsx)(w.a,{value:"america",children:"America"}),Object(p.jsx)(w.a,{value:"asia",children:"Asia"}),Object(p.jsx)(w.a,{value:"africa",children:"Africa"}),Object(p.jsx)(w.a,{value:"oceania",children:"Oceania"})]})]})})]}),Object(p.jsx)(l.a,{container:!0,className:"countriesList",children:Object(p.jsx)(l.a,{item:!0,children:Object(p.jsx)(B,{country:t,setCountry:a,countries:o||v||c,setCountries:s})})})]})});var E=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){u.a.get("https://restcountries.com/v3.1/all").then((function(e){o(e.data.map((function(e){return e})))}))}),[]),(null===i||void 0===i?void 0:i.length)?Object(p.jsxs)(C.a,{className:"home",children:[Object(p.jsx)(l.a,{container:!0,className:"homeTitle",children:Object(p.jsx)(l.a,{item:!0,children:Object(p.jsx)(O.a,{variant:"h5",component:"h1",children:"United"})})}),Object(p.jsx)(F,{country:a,setCountry:c,countries:i,setCountries:o})]}):Object(p.jsx)(O.a,{variant:"h5",component:"h5",children:"Loading..."})};var T=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(l.a,{container:!0,spacing:7,children:Object(p.jsx)(l.a,{item:!0,xs:12,sm:12,md:4,lg:3,children:Object(p.jsx)(i.a,{children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",element:Object(p.jsx)(E,{})}),Object(p.jsx)(o.a,{path:"/details/:name",element:Object(p.jsx)(f,{})})]})})})})})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root"))},84:function(e,t,a){},85:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.083e1fa2.chunk.js.map