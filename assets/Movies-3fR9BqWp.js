import{_ as ee,r as te,o as $,c as A,d as s,a as O,w as B,t as C,e as U,p as oe,f as ne,i as le,g as M,h as ce,j as Q,k as K,v as fe,l as ue,m as pe,F as G,n as he,q as me,b as ve}from"./index-Ot4iCwHM.js";import{F as ge}from"./Footer-w5-XkNFB.js";import{u as be}from"./cartStore-zu3TFLu_.js";const X=e=>(oe("data-v-434b2700"),e=e(),ne(),e),we={class:"py-6 flex flex-col justify-center sm:py-12 m-5"},ye={class:"py-3 sm:max-w-xl sm:mx-auto"},_e={class:"bg-white shadow-lg border-gray-200 p-8 flex space-x-8 movie-card hover:border-gray-700 border-transparent border-2"},xe={class:"h-60 overflow-visible w-1/2"},Me=["src","alt"],Ce={class:"flex flex-col w-1/2 space-y-4"},Te={class:"flex justify-between items-start"},Ee={class:"font-bold movie-card-title"},Se=X(()=>s("span",{class:"tooltip-text",id:"top"},"I'm a tooltip!",-1)),ke={class:"text-sm text-gray-400 genre"},$e={class:"text-lg text-gray-800"},Ne=X(()=>s("br",null,null,-1)),Oe={class:"bg-white-400 border-2 border-black-900 font-bold p-2 w-12 text-center"},We={class:"text-sm text-gray-600 genre mt-3 overview"},Le={class:"button-container"},Ae=X(()=>s("h2",{class:"font-bold movie-card-title"},[s("button",{class:"secondaryButton mt-5"},"More")],-1)),Be={__name:"MovieCard",props:["movie"],emits:["addToCart"],setup(e,{emit:t}){const{movie:o}=e,n=t,r=()=>{console.log("Adding to cart:",o),n("addToCart",o)};return(i,a)=>{const l=te("RouterLink");return $(),A("div",we,[s("div",ye,[s("div",_e,[s("div",xe,[O(l,{to:{name:"MovieDetails",params:{id:String(e.movie.id)}}},{default:B(()=>[s("img",{class:"shadow-lg card-img",src:`https://image.tmdb.org/t/p/w500/${e.movie.poster_path}`,alt:e.movie.title},null,8,Me)]),_:1},8,["to"])]),s("div",Ce,[s("div",Te,[O(l,{to:{name:"MovieDetails",params:{id:String(e.movie.id)}}},{default:B(()=>[s("h2",Ee,[Se,U(C(e.movie.title),1)])]),_:1},8,["to"])]),s("div",null,[s("div",ke,C(e.movie.type),1),s("div",$e,[s("p",null,C(e.movie.release_date),1)]),U(),Ne,s("div",Oe,C(e.movie.vote_average),1),s("div",We,[s("p",null,C(e.movie.overview),1)]),s("div",Le,[O(l,{to:{name:"MovieDetails",params:{id:String(e.movie.id)}}},{default:B(()=>[Ae]),_:1},8,["to"]),s("button",{class:"addtocart",onClick:r},"Add")])])])])])])}}},je=ee(Be,[["__scopeId","data-v-434b2700"]]),re=new Set,m=new WeakMap,E=new WeakMap,_=new WeakMap,R=new WeakMap,Pe=new WeakMap,S=new WeakMap,j=new WeakMap,N=new WeakSet;let y,Y=0,z=0;const b="__aa_tgt",W="__aa_del",P="__aa_new",De=e=>{const t=Ye(e);t&&t.forEach(o=>ze(o))},Ie=e=>{e.forEach(t=>{t.target===y&&Fe(),m.has(t.target)&&x(t.target)})};function Re(e){const t=R.get(e);t==null||t.disconnect();let o=m.get(e),n=0;const r=5;o||(o=k(e),m.set(e,o));const{offsetWidth:i,offsetHeight:a}=y,f=[o.top-r,i-(o.left+r+o.width),a-(o.top+r+o.height),o.left-r].map(u=>`${-1*Math.floor(u)}px`).join(" "),p=new IntersectionObserver(()=>{++n>1&&x(e)},{root:y,threshold:1,rootMargin:f});p.observe(e),R.set(e,p)}function x(e){clearTimeout(j.get(e));const t=D(e),o=L(t)?500:t.duration;j.set(e,setTimeout(async()=>{const n=_.get(e);try{await(n==null?void 0:n.finished),m.set(e,k(e)),Re(e)}catch{}},o))}function Fe(){clearTimeout(j.get(y)),j.set(y,setTimeout(()=>{re.forEach(e=>de(e,t=>se(()=>x(t))))},100))}function Xe(e){setTimeout(()=>{Pe.set(e,setInterval(()=>se(x.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function se(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let F,T;typeof window<"u"&&(y=document.documentElement,F=new MutationObserver(De),T=new ResizeObserver(Ie),window.addEventListener("scroll",()=>{z=window.scrollY,Y=window.scrollX}),T.observe(y));function Ye(e){return e.reduce((n,r)=>[...n,...Array.from(r.addedNodes),...Array.from(r.removedNodes)],[]).every(n=>n.nodeName==="#comment")?!1:e.reduce((n,r)=>{if(n===!1)return!1;if(r.target instanceof Element){if(I(r.target),!n.has(r.target)){n.add(r.target);for(let i=0;i<r.target.children.length;i++){const a=r.target.children.item(i);if(a){if(W in a)return!1;I(r.target,a),n.add(a)}}}if(r.removedNodes.length)for(let i=0;i<r.removedNodes.length;i++){const a=r.removedNodes[i];if(W in a)return!1;a instanceof Element&&(n.add(a),I(r.target,a),E.set(a,[r.previousSibling,r.nextSibling]))}}return n},new Set)}function I(e,t){!t&&!(b in e)?Object.defineProperty(e,b,{value:e}):t&&!(b in t)&&Object.defineProperty(t,b,{value:e})}function ze(e){var t;const o=e.isConnected,n=m.has(e);o&&E.has(e)&&E.delete(e),_.has(e)&&((t=_.get(e))===null||t===void 0||t.cancel()),P in e?J(e):n&&o?He(e):n&&!o?qe(e):J(e)}function v(e){return Number(e.replace(/[^0-9.\-]/g,""))}function Ve(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function k(e){const t=e.getBoundingClientRect(),{x:o,y:n}=Ve(e);return{top:t.top+n,left:t.left+o,width:t.width,height:t.height}}function ae(e,t,o){let n=t.width,r=t.height,i=o.width,a=o.height;const l=getComputedStyle(e);if(l.getPropertyValue("box-sizing")==="content-box"){const p=v(l.paddingTop)+v(l.paddingBottom)+v(l.borderTopWidth)+v(l.borderBottomWidth),u=v(l.paddingLeft)+v(l.paddingRight)+v(l.borderRightWidth)+v(l.borderLeftWidth);n-=u,i-=u,r-=p,a-=p}return[n,i,r,a].map(Math.round)}function D(e){return b in e&&S.has(e[b])?S.get(e[b]):{duration:250,easing:"ease-in-out"}}function ie(e){if(b in e)return e[b]}function V(e){const t=ie(e);return t?N.has(t):!1}function de(e,...t){t.forEach(o=>o(e,S.has(e)));for(let o=0;o<e.children.length;o++){const n=e.children.item(o);n&&t.forEach(r=>r(n,S.has(n)))}}function H(e){return Array.isArray(e)?e:[e]}function L(e){return typeof e=="function"}function He(e){const t=m.get(e),o=k(e);if(!V(e))return m.set(e,o);let n;if(!t)return;const r=D(e);if(typeof r!="function"){const i=t.left-o.left,a=t.top-o.top,[l,f,p,u]=ae(e,t,o),g={transform:`translate(${i}px, ${a}px)`},d={transform:"translate(0, 0)"};l!==f&&(g.width=`${l}px`,d.width=`${f}px`),p!==u&&(g.height=`${p}px`,d.height=`${u}px`),n=e.animate([g,d],{duration:r.duration,easing:r.easing})}else{const[i]=H(r(e,"remain",t,o));n=new Animation(i),n.play()}_.set(e,n),m.set(e,o),n.addEventListener("finish",x.bind(null,e))}function J(e){P in e&&delete e[P];const t=k(e);m.set(e,t);const o=D(e);if(!V(e))return;let n;if(typeof o!="function")n=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:o.duration*1.5,easing:"ease-in"});else{const[r]=H(o(e,"add",t));n=new Animation(r),n.play()}_.set(e,n),n.addEventListener("finish",x.bind(null,e))}function Z(e,t){var o;e.remove(),m.delete(e),E.delete(e),_.delete(e),(o=R.get(e))===null||o===void 0||o.disconnect(),setTimeout(()=>{if(W in e&&delete e[W],Object.defineProperty(e,P,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const n in t)e.style[n]=""},0)}function qe(e){var t;if(!E.has(e)||!m.has(e))return;const[o,n]=E.get(e);Object.defineProperty(e,W,{value:!0,configurable:!0});const r=window.scrollX,i=window.scrollY;if(n&&n.parentNode&&n.parentNode instanceof Element?n.parentNode.insertBefore(e,n):o&&o.parentNode?o.parentNode.appendChild(e):(t=ie(e))===null||t===void 0||t.appendChild(e),!V(e))return Z(e);const[a,l,f,p]=Qe(e),u=D(e),g=m.get(e);(r!==Y||i!==z)&&Ue(e,r,i,u);let d,c={position:"absolute",top:`${a}px`,left:`${l}px`,width:`${f}px`,height:`${p}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!L(u))Object.assign(e.style,c),d=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:u.duration,easing:"ease-out"});else{const[w,h]=H(u(e,"remove",g));(h==null?void 0:h.styleReset)!==!1&&(c=(h==null?void 0:h.styleReset)||c,Object.assign(e.style,c)),d=new Animation(w),d.play()}_.set(e,d),d.addEventListener("finish",Z.bind(null,e,c))}function Ue(e,t,o,n){const r=Y-t,i=z-o,a=document.documentElement.style.scrollBehavior;if(getComputedStyle(y).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+r,window.scrollY+i),!e.parentElement)return;const f=e.parentElement;let p=f.clientHeight,u=f.clientWidth;const g=performance.now();function d(){requestAnimationFrame(()=>{if(!L(n)){const c=p-f.clientHeight,w=u-f.clientWidth;g+n.duration>performance.now()?(window.scrollTo({left:window.scrollX-w,top:window.scrollY-c}),p=f.clientHeight,u=f.clientWidth,d()):document.documentElement.style.scrollBehavior=a}})}d()}function Qe(e){const t=m.get(e),[o,,n]=ae(e,t,k(e));let r=e.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const i=getComputedStyle(r),a=m.get(r)||k(r),l=Math.round(t.top-a.top)-v(i.borderTopWidth),f=Math.round(t.left-a.left)-v(i.borderLeftWidth);return[l,f,o,n]}function Ke(e,t={}){return F&&T&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!L(t)&&!t.disrespectUserMotionPreference||(N.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),de(e,x,Xe,r=>T==null?void 0:T.observe(r)),L(t)?S.set(e,t):S.set(e,{duration:250,easing:"ease-in-out",...t}),F.observe(e,{childList:!0}),re.add(e))),Object.freeze({parent:e,enable:()=>{N.add(e)},disable:()=>{N.delete(e)},isEnabled:()=>N.has(e)})}const q=e=>(oe("data-v-751b2cee"),e=e(),ne(),e),Ge=q(()=>s("h2",{class:"line-divider font-2xl"},[s("span",{class:""},"Trending")],-1)),Je={class:"flex items-center justify-center mb-4"},Ze={class:"relative h-10 w-72 min-w-[200px]"},et=ve('<option value="" data-v-751b2cee>Select</option><option value="name" data-v-751b2cee>Name</option><option value="rating" data-v-751b2cee>Rating</option><option value="release_date" data-v-751b2cee>Release Date</option><option value="popularity" data-v-751b2cee>Popularity</option>',5),tt=[et],ot=q(()=>s("label",{class:"before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"}," Sort by ",-1)),nt={class:"ml-4"},rt={key:0,class:"max-w-sm mx-auto"},st=q(()=>s("span",{class:"text-2xl font-bold text-black-700"},"Now loading...",-1)),at=[st],it={__name:"Movies",setup(e){const t=le("$toast"),o=M([]),n=M(!0),r=M("");let i=M();const a=M("");ce(async()=>{const c="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=672d8a2f825f32332973ed7e2de2efa1";try{const h=await(await fetch(c)).json();o.value=h.results,n.value=!1}catch(w){console.error("Error fetching movies:",w),n.value=!1}});const l=Q(()=>{const d=a.value.toLowerCase();return o.value.filter(c=>c.title.toLowerCase().includes(d))});M("asc");const f=()=>{r.value==="name"?o.value.sort((d,c)=>d.title.localeCompare(c.title)):r.value==="rating"?o.value.sort((d,c)=>c.vote_average-d.vote_average):r.value==="release_date"?o.value.sort((d,c)=>new Date(d.release_date)-new Date(c.release_date)):r.value==="popularity"&&o.value.sort((d,c)=>c.popularity-d.popularity),Ke(i.value)},p=be(),u=d=>{p.addToCart(d),t.open({message:"Added to backlog",type:"success"})},g=Q(()=>p.cart.length);return(d,c)=>{const w=te("router-link");return $(),A(G,null,[s("div",null,[Ge,s("div",Je,[s("div",Ze,[K(s("select",{"onUpdate:modelValue":c[0]||(c[0]=h=>r.value=h),onChange:f,class:"peer h-15 w-full border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"},tt,544),[[fe,r.value]]),ot]),K(s("input",{"onUpdate:modelValue":c[1]||(c[1]=h=>a.value=h),placeholder:"Search movies...",class:"border border-gray-300 p-2 h-11",id:"search-box"},null,512),[[ue,a.value]]),O(w,{to:"/cart",class:"border border-solid border-gray-300 cartlink"},{default:B(()=>[s("div",nt,"Watchlist: "+C(g.value),1)]),_:1})]),n.value?($(),A("div",rt,at)):pe("",!0),s("div",{class:"grid grid-cols-3",ref_key:"container",ref:i},[($(!0),A(G,null,he(l.value,h=>($(),me(je,{key:h.id,movie:h,onAddToCart:u},null,8,["movie"]))),128))],512)]),O(ge)],64)}}},ft=ee(it,[["__scopeId","data-v-751b2cee"]]);export{ft as default};
