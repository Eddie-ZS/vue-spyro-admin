import{b as p,d as y,e as u,_ as m,w as c}from"../index-CeRSjNe-.js";import{d as f,H as o,I as t,al as r,N as s,ad as d,aD as l,ar as n,ak as i,am as h,as as v}from"../.pnpm/.pnpm.B8Y_MyBh.js";const S=p({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=f({name:"ElCard"}),C=f({...b,props:S,setup(g){const a=u("card");return(e,$)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[d(e.$slots,"header",{},()=>[l(n(e.header),1)])],2)):i("v-if",!0),h("div",{class:r([s(a).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[d(e.$slots,"default")],6),e.$slots.footer||e.footer?(o(),t("div",{key:1,class:r(s(a).e("footer"))},[d(e.$slots,"footer",{},()=>[l(n(e.footer),1)])],2)):i("v-if",!0)],2))}});var w=m(C,[["__file","card.vue"]]);const E=c(w);export{E};