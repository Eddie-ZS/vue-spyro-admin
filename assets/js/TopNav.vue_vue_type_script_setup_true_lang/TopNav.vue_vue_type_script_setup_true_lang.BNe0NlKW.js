import{aa as C,a3 as M,u as V,a1 as k}from"../index-BuEOIHYu.js";import{u as p,b as D,E as N,a as I}from"../useIcon/useIcon.yA8JmBpg.js";/* empty css                             */import{E as T}from"../switch/switch.BpkbJRxp.js";import{_ as z}from"../Icon.vue_vue_type_script_lang/Icon.vue_vue_type_script_lang.Cj7Rf5yn.js";import{p as B,a3 as m,r as A,s as L,al as a,ap as o,ar as $,E as e,an as t,aF as _}from"../.pnpm/.pnpm.DOMSuxsb.js";const F={class:"flex-between w-full px-20 absolute left-0 top-0 right-0 h-20 <sm:px-5"},U={class:"flex-center"},j={class:"ml-2 text-4 text-primary font-bold"},q={class:"flex-center"},G={class:"flex-center w-10 cursor-pointer hover:text-primary transition-base"},W=B({__name:"TopNav",setup(H){const{locale:u}=C(),c=M(),s=V(),f=n=>{u.value=n,c.setLanguage(n)},h=p({name:"ep:moon"}),g=p({name:"ep:sunny"}),l=m(()=>c.language==="en"),v=m(()=>"Spyro Admin"),{switchDark:w}=k(),x=n=>{s.$patch({colorMode:n}),w()};return(n,r)=>{const i=z,y=T,d=D,b=N,E=I;return A(),L("div",F,[a("div",U,[o(i,{name:"spyro:logo",color:"var(--el-color-primary)",size:30}),a("h3",j,$(e(v)),1)]),a("div",q,[o(y,{modelValue:e(s).colorMode,"onUpdate:modelValue":r[0]||(r[0]=S=>e(s).colorMode=S),"inline-prompt":"","active-action-icon":e(h),"inactive-action-icon":e(g),"active-value":"dark","inactive-value":"light",onChange:x},null,8,["modelValue","active-action-icon","inactive-action-icon"]),o(E,{trigger:"click",onCommand:f},{dropdown:t(()=>[o(b,null,{default:t(()=>[o(d,{command:"zh-CN",disabled:!e(l)},{default:t(()=>[_("简体中文")]),_:1},8,["disabled"]),o(d,{command:"en",disabled:e(l)},{default:t(()=>[_("English")]),_:1},8,["disabled"])]),_:1})]),default:t(()=>[a("div",G,[o(i,{name:"spyro:language",size:20})])]),_:1})])])}}});export{W as _};
