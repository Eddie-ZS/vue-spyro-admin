import{p as b,af as N,H as D,a3 as p,r as a,am as l,an as f,at as I,al as k,ak as o,E as e,ao as V,ai as n,s as i,aa as h,aF as C,ar as u,aj as $,ap as A,au as F,av as M}from"../.pnpm/.pnpm.DOMSuxsb.js";import{c as P,af as j,ag as w,h as z,k as g,m as H,ah as O,w as q}from"../index-BuEOIHYu.js";const G=["light","dark"],J=P({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:j(w),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:G,default:"light"}}),K={close:r=>r instanceof MouseEvent},L=b({name:"ElAlert"}),Q=b({...L,props:J,emits:K,setup(r,{emit:E}){const c=r,{Close:S}=O,d=N(),t=z("alert"),m=D(!0),y=p(()=>w[c.type]),B=p(()=>[t.e("icon"),{[t.is("big")]:!!c.description||!!d.default}]),T=p(()=>({"with-description":c.description||d.default})),v=s=>{m.value=!1,E("close",s)};return(s,U)=>(a(),l(M,{name:e(t).b("fade"),persisted:""},{default:f(()=>[I(k("div",{class:o([e(t).b(),e(t).m(s.type),e(t).is("center",s.center),e(t).is(s.effect)]),role:"alert"},[s.showIcon&&e(y)?(a(),l(e(g),{key:0,class:o(e(B))},{default:f(()=>[(a(),l(V(e(y))))]),_:1},8,["class"])):n("v-if",!0),k("div",{class:o(e(t).e("content"))},[s.title||s.$slots.title?(a(),i("span",{key:0,class:o([e(t).e("title"),e(T)])},[h(s.$slots,"title",{},()=>[C(u(s.title),1)])],2)):n("v-if",!0),s.$slots.default||s.description?(a(),i("p",{key:1,class:o(e(t).e("description"))},[h(s.$slots,"default",{},()=>[C(u(s.description),1)])],2)):n("v-if",!0),s.closable?(a(),i($,{key:2},[s.closeText?(a(),i("div",{key:0,class:o([e(t).e("close-btn"),e(t).is("customed")]),onClick:v},u(s.closeText),3)):(a(),l(e(g),{key:1,class:o(e(t).e("close-btn")),onClick:v},{default:f(()=>[A(e(S))]),_:1},8,["class"]))],64)):n("v-if",!0)],2)],2),[[F,m.value]])]),_:3},8,["name"]))}});var R=H(Q,[["__file","alert.vue"]]);const Y=q(R);export{Y as E};
