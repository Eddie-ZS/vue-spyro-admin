import{_ as E}from"../SoCard/SoCard.BonzIsYQ.js";import{u as R,bw as A,B as D,bx as F}from"../index-D2hyYe-m.js";/* empty css                                   */import{d as G,aV as L,c as i,bc as C,G as e,am as o,an as s,al as a,aq as w,M as m,j as d,H as O,aL as q,F as H,as as p,aC as t,aj as r}from"../.pnpm/.pnpm.ChwJ8c2H.js";import"../card/card.AulE2BQU.js";import"../_plugin-vue_export-helper/_plugin-vue_export-helper.DlAUqK2U.js";const I={class:"p-4"},M={class:"text-6"},T={class:"my-4"},U=a("h1",{class:"text-6"},"指令v-permissions 和 v-roles",-1),$=a("h1",{class:"text-6"},"函数usePermission",-1),es=G({name:"Example",__name:"index",setup(z){const f=L(),c=R(),{hasPermissions:x,hasRoles:l}=A(),y=i(()=>c.roles.toString()),b=i(()=>l(["admin"])),g=i(()=>l(["common"])),B=i(()=>l(["normal","common"])),V=i(()=>x(["common:permissions:view"])),N={admin:"*:*:*",common:"common:permissions:view",normal:"normal:permissions:view"},h=()=>f.push({name:"PermVisible"}),P=async v=>{c.userInfo={},await c.loginAction({username:v,password:"admin123"}),f.push("/")};return(v,J)=>{const n=D,u=F,S=E,k=C("roles"),j=C("permissions");return e(),o(S,{title:"权限示例",class:"h-full"},{default:s(()=>[a("div",I,[a("div",null,[a("h1",M,"当前角色: "+w(m(y)),1),d(u,{class:"m-4"},{default:s(()=>[(e(!0),O(H,null,q(Object.keys(N),_=>(e(),o(n,{key:_,onClick:K=>P(_)},{default:s(()=>[t(w(_),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),a("div",T,[U,d(u,{class:"m-4"},{default:s(()=>[p((e(),o(n,null,{default:s(()=>[t("仅admin可见")]),_:1})),[[k,["admin"]]]),p((e(),o(n,null,{default:s(()=>[t("common")]),_:1})),[[k,["common"]]]),p((e(),o(n,{onClick:h},{default:s(()=>[t(" 具有 ['common:permissions:view'] 权限可访问 ")]),_:1})),[[j,["common:permissions:view"]]])]),_:1})]),a("div",null,[$,d(u,{class:"m-4"},{default:s(()=>[m(b)?(e(),o(n,{key:0},{default:s(()=>[t("仅admin可见")]),_:1})):r("",!0),m(g)?(e(),o(n,{key:1},{default:s(()=>[t("common可见")]),_:1})):r("",!0),m(B)?(e(),o(n,{key:2},{default:s(()=>[t("common和normal可见")]),_:1})):r("",!0),m(V)?(e(),o(n,{key:3,onClick:h},{default:s(()=>[t("具有 ['common:permissions:view'] 权限可访问")]),_:1})):r("",!0)]),_:1})])])]),_:1})}}});export{es as default};
