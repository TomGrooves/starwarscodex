(this.webpackJsonpstar_wars=this.webpackJsonpstar_wars||[]).push([[0],[,,,,function(e,t,c){e.exports={people:"entry_people__3AW7h",planets:"entry_planets__AtdGh",films:"entry_films__1RTHL",species:"entry_species__1Sgit",vehicles:"entry_vehicles__QeIq8",starships:"entry_starships__2oTRe"}},,function(e,t,c){e.exports={wrapper:"accordion_wrapper__31mVQ",seperator:"accordion_seperator__1W1T5",accordion:"accordion_accordion__3rMP0",shown:"accordion_shown__3enik",hidden:"accordion_hidden__BugXi"}},function(e,t,c){e.exports={navigation:"navigation_navigation__30coP",fixed:"navigation_fixed__4VaEq"}},,,function(e,t,c){e.exports={pagination:"pagination_pagination__3xWfg"}},function(e,t,c){e.exports={mainpage:"mainpage_mainpage__LZdjS"}},function(e,t,c){e.exports={search:"search_search__2yIDT"}},function(e,t,c){e.exports={header:"header_header__T4Du8"}},function(e,t,c){e.exports={footer:"footer_footer__254KV"}},,,,,,,,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(9),r=c.n(a),i=c(3),l=c.n(i),j=c(5),d=c(2),o=c(6),h=c.n(o),p=c(0),b=Object(s.createContext)(),u=function(e){var t=e.children,c=Object(s.useState)(1),n=Object(d.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)("people"),l=Object(d.a)(i,2),j=l[0],o=l[1],h=Object(s.useState)([]),u=Object(d.a)(h,2),x=u[0],O=u[1];return Object(p.jsx)(b.Provider,{value:{page:a,setPage:r,category:j,setCategory:o,searchResult:x,setSearchResult:O},children:t})};var x=function(e){var t=Object(s.useContext)(b),c=t.page,n=t.category,a=Object(s.useState)(!1),r=Object(d.a)(a,2),i=r[0],l=r[1],j=e.child||"No child content selected",o=e.title||"Accordian";return Object(s.useEffect)((function(){l(!1)}),[c,n]),Object(p.jsxs)("section",{className:h.a.wrapper,children:[Object(p.jsx)("div",{style:i?{fontSize:"2rem"}:null,className:h.a.accordion,onClick:function(){l(!i)},children:Object(p.jsx)("h3",{children:o})}),Object(p.jsx)("div",{className:i?h.a.shown:h.a.hidden,children:j}),Object(p.jsx)("span",{className:h.a.seperator})]})},O=c(4),f=c.n(O);function m(e){var t=Object(s.useState)("people"),c=Object(d.a)(t,2),n=c[0],a=c[1];Object(s.useEffect)((function(){e.data.birth_year?a("people"):e.data.climate?a("planets"):e.data.episode_id?a("films"):e.data.designation?a("species"):e.data.vehicle_class?a("vehicles"):e.data.starship_class&&a("starships")}),[e]);var r=Object(p.jsx)(x,{title:e.data.name,child:Object(p.jsxs)("ul",{className:f.a.people,children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Name: "})," ",e.data.name]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Gender: "})," ",e.data.gender]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Hair color: "})," ",e.data.hair_color]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Height: "})," ",e.data.height," cm"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Weight: "})," ",e.data.mass," kg"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Skin color: "})," ",e.data.skin_color]})]})}),i=Object(p.jsx)(x,{title:e.data.name,child:Object(p.jsxs)("ul",{className:f.a.planets,children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Name: "})," ",e.data.name]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Climate: "})," ",e.data.climate]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Diameter: "})," ",e.data.diameter," km"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Gravity: "})," ",e.data.gravity]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Orbital period: "})," ",e.data.orbital_period," days"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Rotation period: "})," ",e.data.rotation_period," days"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Population: "})," ",e.data.population]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Surface water: "})," ",e.data.surface_water," m"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Terrain: "})," ",e.data.terrain]})]})}),l=Object(p.jsx)(x,{title:e.data.title,child:Object(p.jsxs)("div",{className:f.a.films,children:[Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Title: "})," ",e.data.title]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Director: "})," ",e.data.director]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Producer: "})," ",e.data.producer]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Episode: "})," ",e.data.episode_id]})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("p",{children:"Opening: "})," ",e.data.opening_crawl]})]})}),j=Object(p.jsx)(x,{title:e.data.name,child:Object(p.jsxs)("ul",{className:f.a.species,children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Name: "})," ",e.data.name]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Height: "})," ",e.data.average_height," cm"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Lifespan: "})," ",e.data.average_lifespan," years"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Designation: "})," ",e.data.designation]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Language: "})," ",e.data.language]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Hair colors: "})," ",e.data.hair_colors]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Eye colors: "})," ",e.data.eye_colors]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Skin colors: "})," ",e.data.skin_colors]})]})}),o=Object(p.jsx)(x,{title:e.data.name,child:Object(p.jsxs)("ul",{className:f.a.vehicles,children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Name: "})," ",e.data.name]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Model: "})," ",e.data.model]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Manufacturer: "})," ",e.data.manufacturer]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Crew: "})," ",e.data.crew]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Passengers: "})," ",e.data.passengers]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Capacity: "})," ",e.data.cargo_capacity]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Atmospheric speed: "})," ",e.data.max_atmosphering_speed," kmH"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Class: "})," ",e.data.vehicle_class]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Consumables: "})," ",e.data.consumables]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Cost: "})," ",e.data.cost_in_credits," credits"]})]})}),h=Object(p.jsx)(x,{title:e.data.name,child:Object(p.jsxs)("ul",{className:f.a.starships,children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Name: "})," ",e.data.name]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Model: "})," ",e.data.model]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Manufacturer: "})," ",e.data.manufacturer]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Length: "})," ",e.data.length," m"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Crew: "})," ",e.data.crew]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Passengers: "})," ",e.data.passengers]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Atmospheric speed: "})," ",e.data.max_atmosphering_speed," KmH"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Class: "})," ",e.data.starship_class]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Hyperdrive rating: "})," ",e.data.hyperdrive_rating]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Capacity: "})," ",e.data.cargo_capacity]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Consumables: "})," ",e.data.consumables]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{children:"Cost: "})," ",e.data.cost_in_credits," credits"]})]})});switch(n){case"people":return r;case"planets":return i;case"films":return l;case"species":return j;case"vehicles":return o;case"starships":return h;default:return r}}var _=c(10),g=c.n(_);function v(e){var t=Object(s.useContext)(b),c=t.page,n=t.setPage;function a(e){return Object(p.jsx)("button",{style:c===e.number?{color:"#FFE81F"}:null,onClick:function(){n(e.number),window.scrollTo(0,0)},children:e.number})}for(var r=[],i=1;i<e.total;i++)r.push(Object(p.jsx)(a,{number:i},i));return Object(p.jsx)("div",{className:g.a.pagination,children:r})}function y(e,t,c){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(l.a.mark((function e(t,c,s){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"},method:c||"GET",body:s||null},e.prev=3,e.next=6,fetch(t,n);case 6:return a=e.sent,e.next=9,a.json();case 9:return r=e.sent,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}var C=c(11),S=c.n(C);function k(){var e=Object(s.useContext)(b),t=e.page,c=e.category,n=e.searchResult,a=Object(s.useState)([]),r=Object(d.a)(a,2),i=r[0],o=r[1];Object(s.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="https://swapi.dev/api/".concat(c,"/?page=").concat(t),e.next=3,y(s);case 3:n=e.sent,o(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,c]);var h=i.results&&i.results.map((function(e,t){return Object(p.jsx)(m,{data:e},t)})),u="string"!==typeof n&&n.length>0?n.map((function(e,t){return Object(p.jsx)(m,{data:e},t)})):n;return Object(p.jsx)("div",{className:S.a.mainpage,children:u.length<=0?Object(p.jsxs)(p.Fragment,{children:[h,Object(p.jsx)(v,{total:Math.ceil(i.count/10+1)})]}):u})}var N=c(12),P=c.n(N),T=c(15);function D(){var e=Object(s.useContext)(b).setSearchResult,t=Object(s.useState)(""),c=Object(d.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)([]),i=Object(d.a)(r,2),o=i[0],h=i[1];function u(){return(u=Object(j.a)(l.a.mark((function e(){var t,c,s,n,a,r,i,j,o,p,b,u,x,O;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],c=[],s=[],"https://swapi.dev/api/",e.next=6,y("https://swapi.dev/api/");case 6:for(n=e.sent,a=0,r=Object.entries(n);a<r.length;a++)i=Object(d.a)(r[a],1),j=i[0],s.push(j);o=0;case 9:if(!(o<s.length)){e.next=27;break}return p="https://swapi.dev/api/".concat(s[o]),e.next=13,y("".concat(p,"/"));case 13:b=e.sent,u=1;case 15:if(!(u<b.count/10+1)){e.next=24;break}return e.t0=c,e.next=19,y("".concat(p,"/?page=").concat(u));case 19:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 21:u++,e.next=15;break;case 24:o++,e.next=9;break;case 27:if(c)for(x=0;x<c.length;x++)t.push(c[x].results);O=t.flat(1),h(O);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){0===o.length&&function(){u.apply(this,arguments)}()}),[o.length]),Object(p.jsxs)("div",{className:P.a.search,children:[Object(p.jsx)("input",{value:n,onChange:function(e){return a(e.target.value)},placeholder:"Search"}),Object(p.jsx)("button",{onClick:function(){!function(){e([]);var t=[];if(""!==n){for(var c=0;c<o.length;c++)for(var s=0,r=Object.entries(o[c]);s<r.length;s++){var i=Object(d.a)(r[s],2)[1];"string"==typeof i&&i.toLocaleLowerCase().includes(n.toLowerCase())&&(t.includes(o[c])||t.push(o[c]))}e(t),a(""),t.length<=0&&e(Object(p.jsx)("h2",{children:"No results found"}))}else e(Object(p.jsx)("h2",{children:"No results found"}))}()},children:Object(p.jsx)(T.a,{})})]})}var E=c(7),L=c.n(E);function F(){var e=Object(s.useContext)(b),t=e.setCategory,c=e.category,n=e.setPage,a=e.setSearchResult,r=Object(s.useState)(!1),i=Object(d.a)(r,2),l=i[0],j=i[1],o=Object(s.useRef)();function h(e){t(e),n(1),a([]),window.scrollTo(0,0)}return Object(s.useEffect)((function(){var e=o.current?o.current.offsetTop:null;window.addEventListener("scroll",(function(t){window.pageYOffset>e?j(!0):j(!1)}))}),[]),Object(p.jsxs)("nav",{ref:o,className:l?"".concat(L.a.navigation," ").concat(L.a.fixed):L.a.navigation,children:[Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{style:"people"===c?{fontSize:"1.3rem",textDecoration:"underline"}:null,onClick:function(){h("people")},children:"People"}),Object(p.jsx)("li",{style:"planets"===c?{fontSize:"1.3rem",textDecoration:"underline"}:null,onClick:function(){h("planets")},children:"Planets"}),Object(p.jsx)("li",{style:"films"===c?{fontSize:"1.3rem",textDecoration:"underline"}:null,onClick:function(){h("films")},children:"Films"}),Object(p.jsx)("li",{style:"species"===c?{fontSize:"1.3rem",textDecoration:"underline"}:null,onClick:function(){h("species")},children:"Species"}),Object(p.jsx)("li",{style:"vehicles"===c?{fontSize:"1.3rem",textDecoration:"underline"}:null,onClick:function(){h("vehicles")},children:"Vehicles"}),Object(p.jsx)("li",{style:"starships"===c?{fontSize:"1.3rem",textDecoration:"underline"}:null,onClick:function(){h("starships")},children:"Starships"})]}),Object(p.jsx)(D,{})]})}var R=c(13),H=c.n(R);function z(){return Object(p.jsx)("header",{className:H.a.header,children:Object(p.jsx)("h1",{children:"Star Wars Codex"})})}var A=c(14),M=c.n(A);function W(){return Object(p.jsx)("footer",{className:M.a.footer,children:Object(p.jsxs)("p",{children:["Photo by",Object(p.jsx)("a",{href:"https://unsplash.com/@jeremyperkins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Jeremy Perkins"})," on ",Object(p.jsx)("a",{href:"https://unsplash.com/s/photos/stars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})," - Star Wars API by ",Object(p.jsx)("a",{href:"https://swapi.dev/",children:"SWAPI"})," - Code by ",Object(p.jsx)("a",{href:"https://www.kasperfrydensberg.dk",children:"Kasper Frydensberg"})]})})}c(22);var I=function(){return Object(p.jsxs)(u,{children:[Object(p.jsx)(z,{}),Object(p.jsx)(F,{}),Object(p.jsx)(k,{}),Object(p.jsx)(W,{})]})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root")),G()}],[[23,1,2]]]);
//# sourceMappingURL=main.dd2e6c23.chunk.js.map