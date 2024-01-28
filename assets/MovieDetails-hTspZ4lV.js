import{s as $,_ as S,g as m,h as B,u as C,o as n,c as h,d as e,m as x,p as I,f as q,j as M,x as E,t as _,y as Q,F as k,n as A,q as F,w as D,T as K,a as T}from"./index-Ot4iCwHM.js";import{F as U}from"./Footer-w5-XkNFB.js";import V from"axios";const R=$({id:"modal",state:()=>({show:!1}),actions:{openModal(){this.show=!0},closeModal(){this.show=!1},toggleModal(){this.show=!this.show}}}),N=$({id:"movie",state:()=>({queryMovie:[]}),actions:{setQueryMovie(o){this.queryMovie=o}}}),j=o=>(I("data-v-44ce23dc"),o=o(),q(),o),P={key:0,class:"modal"},z={class:"modal-content"},L=j(()=>e("p",{class:"font-bold"},"Close",-1)),Y=[L],G=["src"],H={__name:"Modal",setup(o){const r=R(),f=N().queryMovie,b=()=>{console.log("modal false"),r.toggleModal(!1)},t=m("");return B(async()=>{var c;try{const{title:a,release_date:d}=f,g=d?new Date(d).getFullYear():"",i=encodeURIComponent(`${a} official trailer ${g}`),y="AIzaSyC7UEh4uRpo1slT7RB_BNlPMKAAsBQcuRQ",u=(c=(await V.get(`https://www.googleapis.com/youtube/v3/search?q=${i}&type=video&part=snippet&key=${y}`)).data.items[0])==null?void 0:c.id.videoId;t.value=u?`https://www.youtube.com/embed/${u}?autoplay=1`:""}catch(a){console.error("Error fetching trailer:",a)}}),(c,a)=>C(r).show?(n(),h("div",P,[e("div",z,[e("button",{onClick:b,class:"close-button"},Y),e("iframe",{src:t.value,class:"trailer-iframe",frameborder:"0",allowfullscreen:""},null,8,G)])])):x("",!0)}},J=S(H,[["__scopeId","data-v-44ce23dc"]]),s=o=>(I("data-v-bc15ee14"),o=o(),q(),o),O={class:"container"},W={key:0,class:"text-bold"},X={key:1},Z={class:"grid grid-cols-2 gap-2 mb-10"},ee={class:"ml-10 first-col"},oe={class:"heading"},se=["src","alt"],te={class:"ml-10 movie-details"},le={class:"deets"},ae=s(()=>e("i",{class:"bi bi-hourglass mr-2"},null,-1)),ne={class:"inline-block"},ce={class:"font-bold"},ie=s(()=>e("br",null,null,-1)),re={class:"deets"},de=s(()=>e("i",{class:"bi bi-calendar mr-2"},null,-1)),ue={class:"inline-block"},_e={class:"font-bold"},he={class:"deets"},pe=s(()=>e("br",null,null,-1)),ve=s(()=>e("br",null,null,-1)),me={class:"flex justify-between mb-1"},fe={class:"font-medium"},be={class:"font-bold"},ge={class:"w-56 bg-gray-200 rounded-full h-2.5"},ye={class:"deets"},we=s(()=>e("br",null,null,-1)),Me=s(()=>e("br",null,null,-1)),ke=s(()=>e("i",{class:"bi bi-collection-play-fill"},null,-1)),Fe=s(()=>e("p",{class:"font-bold ml-5"},"Play trailer",-1)),$e=[Fe],Se=s(()=>e("br",null,null,-1)),Be={class:"deets"},Ce=s(()=>e("p",null,"This is the modal content.",-1)),xe=s(()=>e("div",null,null,-1)),Ie={__name:"MovieDetails",props:{id:{type:String,required:!0}},setup(o){const r=R(),w=N();M(()=>r.show);const f=()=>{console.log("view true"),r.openModal()},b=o,t=m([]),c=m(!0),a=m(0),d=m(0),g=E(),i=[{percent:0,color:"#FF0000"},{percent:25,color:"#FF6B5E"},{percent:50,color:"#FFC2A6"},{percent:75,color:"#C8FFB3"},{percent:90,color:"#95FF66"},{percent:100,color:"#00FF00"}],y=M(()=>{for(let l=0;l<i.length-1;l++)if(d.value<=i[l].percent)return i[l].color;return i[i.length-1].color});return B(async()=>{try{const l=b.id,p=await fetch(`https://api.themoviedb.org/3/movie/${l}?api_key=672d8a2f825f32332973ed7e2de2efa1`),v=await p.json();p.ok?(t.value=v,a.value=v.vote_average,d.value=a.value/10*100,w.setQueryMovie(v)):g.push({name:"NotFound"}),c.value=!1}catch(l){console.error("Error fetching movie details:",l),c.value=!1}}),(l,u)=>(n(),h(k,null,[e("section",null,[e("div",O,[c.value?(n(),h("div",W,"Now loading..")):(n(),h("div",X,[e("div",Z,[e("div",ee,[e("h1",oe,_(t.value.title),1),e("div",null,[e("img",{class:"poster",src:`https://image.tmdb.org/t/p/original${t.value.poster_path}`,alt:t.value.title},null,8,se)])]),e("div",te,[e("div",le,[ae,e("span",ne,[e("p",ce,_(t.value.runtime)+" mins",1)])]),ie,e("div",re,[de,e("span",ue,[e("p",_e,_(t.value.release_date),1)])]),e("div",he,[pe,e("p",null,_(t.value.overview),1),ve,e("div",me,[e("span",fe,[e("p",be,"User score: "+_(a.value.toFixed(1))+" / 10",1)])]),e("div",ge,[e("div",{class:"h-2.5 rounded-full",style:Q({width:d.value+"%",background:y.value})},null,4)])]),e("div",ye,[(n(!0),h(k,null,A(t.value.genres,(p,v)=>(n(),h("span",{key:v,class:"badge text-s font-medium me-2 px-2.5 py-0.5 rounded-full"},_(p.name),1))),128)),we]),Me,e("div",{class:"deets"},[ke,e("span",{class:"inline-block"},[e("button",{onClick:f},$e)])]),Se,e("div",Be,[e("button",{class:"secondaryButton mt-5",onClick:u[0]||(u[0]=p=>l.$router.back())}," Back ")])])])]))]),(n(),F(K,{to:"body"},[C(r).show?(n(),F(J,{key:0},{default:D(()=>[Ce]),_:1})):x("",!0)])),xe]),T(U)],64))}},Ee=S(Ie,[["__scopeId","data-v-bc15ee14"]]);export{Ee as default};
