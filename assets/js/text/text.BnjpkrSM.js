import{b as r,c as i,v as p,f as c,b6 as m,_ as u,w as d}from"../index-CtBAY3g9.js";import{d as s,c as f,G as y,am as _,an as x,ac as S,ak as g,M as v,ar as C,ao as b}from"../.pnpm/.pnpm.BKF2UWsc.js";const z=r({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:i,default:""},truncated:Boolean,lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),w=s({name:"ElText"}),k=s({...w,props:z,setup(n){const t=n,l=p(),e=c("text"),o=f(()=>[e.b(),e.m(t.type),e.m(l.value),e.is("truncated",t.truncated),e.is("line-clamp",!m(t.lineClamp))]);return(a,B)=>(y(),_(b(a.tag),{class:g(v(o)),style:C({"-webkit-line-clamp":a.lineClamp})},{default:x(()=>[S(a.$slots,"default")]),_:3},8,["class","style"]))}});var h=u(k,[["__file","text.vue"]]);const N=d(h);export{N as E};