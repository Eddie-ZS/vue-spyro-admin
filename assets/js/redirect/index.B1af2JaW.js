import{d as t,aW as c,N as p,H as u,I as _}from"../.pnpm/.pnpm.B8Y_MyBh.js";const i=t({name:"Redirect"}),h=t({...i,setup(m){const{currentRoute:a,replace:r}=c(),{params:n,query:o}=p(a),{path:e}=n,s=Array.isArray(e)?e.join("/"):e;return r({path:"/"+s,query:o}),(d,f)=>(u(),_("div"))}});export{h as default};