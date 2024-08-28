import{B as n,a7 as m,a_ as j}from"../index-D2hyYe-m.js";import{v as q}from"../loading/loading.BUWhUKYo.js";import{_ as G}from"../SoTable.vue_vue_type_script_setup_true_lang/SoTable.vue_vue_type_script_setup_true_lang.Djsz42SJ.js";import{_ as H}from"../SoCard/SoCard.BonzIsYQ.js";import{E as J}from"../alert/alert.DtGz7Ub4.js";import{E as X}from"../text/text.Bt34vdbl.js";import{d as M,r as f,av as u,j as t,aC as l,F as k,az as Q,o as W,G as Y,H as Z,as as x,at as ee,M as a,an as i,al as E,f as te}from"../.pnpm/.pnpm.ChwJ8c2H.js";import{u as oe}from"../useTable/useTable.gSv7kf59.js";import"../popover/popover.b4S6YOSp.js";import"../index/index.aFJxrjSO.js";import"../dropdown-item/dropdown-item.ClPYagwT.js";import"../index/index.DBhRi9sk.js";/* empty css                             */import"../index/index.30Cv6PIQ.js";import"../strings/strings.CzMzNw1P.js";import"../col/col.Byg7xBNT.js";import"../index/index.C951QkXg.js";import"../index/index.BmuHpdMt.js";/* empty css                                   */import"../checkbox/checkbox.D0ot0JO-.js";import"../_plugin-vue_export-helper/_plugin-vue_export-helper.DlAUqK2U.js";import"../use/use.vltj-xWI.js";import"../card/card.AulE2BQU.js";const ae={class:"h-full flex-col gap-4"},le={class:"mt-3"},ne=M({name:"UseTable"}),Le=M({...ne,setup(se){const r=f(!0),T=u([{dictLabel:"男",dictValue:"male"},{dictLabel:"女",dictValue:"female"}]),z=u([{dictLabel:"正常",dictValue:0},{dictLabel:"禁用",dictValue:1}]),L=u([{type:"selection",label:"勾选",width:"55"},{type:"expand",label:"展开",width:"55",renderer:({row:o})=>t("div",{class:"block px-2"},[t(X,{type:"success"},{default:()=>[l("tsx渲染："),JSON.stringify(o)]})])},{type:"sortable",label:"排序",width:80},{type:"index",label:"序号",width:"55"},{prop:"username",label:"用户名",overflowConfig:{initiate:!0}},{prop:"nickname",label:"昵称"},{prop:"sex",label:"性别",dictConfig:{options:()=>T}},{prop:"phone",label:"手机号"},{prop:"email",label:"邮箱"},{prop:"status",label:"状态",tagConfig:{initiate:!0},dictConfig:{options:()=>z}},{prop:"operation",label:"操作",renderer:()=>t(k,null,[t(n,{type:"primary",link:!0,onClick:y},{default:()=>[l("修改")]}),t(n,{type:"primary",link:!0,onClick:w},{default:()=>[l("删除")]})])}]),p=u({pageNum:1,pageSize:10}),{tableState:N,tableMethods:V,tableMount:F}=oe({fetchApi:async()=>{const{data:o,total:e=0}=await j();return{data:o,total:e}}}),{loading:P,data:U}=Q(N),{setProps:g,addColumn:b,delColumn:_,getElTableInstance:v,refresh:A}=V,y=()=>{m.success("仅供预览展示")},w=()=>{m.success("仅供预览展示")},C=o=>{g({pagination:o})},S=o=>{o?b({type:"selection",width:"55",label:"勾选"},0):_("selection")};let c=f(!1);const B=async()=>{c.value=!c.value;const o=await v();U.value.forEach(e=>{o==null||o.toggleRowExpansion(e,c.value)})},$=async()=>{const o=await v();o==null||o.toggleAllSelection()};let d=f(!0);const D=()=>{d.value=!d.value,d.value?b({prop:"operation",label:"操作",renderer:()=>t(k,null,[t(n,{type:"primary",link:!0,onClick:y},{default:()=>[l("修改")]}),t(n,{type:"primary",link:!0,onClick:w},{default:()=>[l("删除")]})])}):_("operation")},I=({newIndex:o,oldIndex:e})=>{m.success("拖拽排序成功")};return W(()=>{g({rowKey:"userId",columnList:L})}),(o,e)=>{const O=J,h=H,R=G,K=q;return Y(),Z("div",ae,[x(t(h,{title:"useTable 操作"},{default:i(()=>[E("div",null,[t(O,{closable:!1,title:"基于基础表格封装useTable函数的高级用法",type:"info",description:"采用hook函数式搭配TSX语法的方式进行使用，配置高度灵活，表格都默认设置rowKey，优化表格渲染及保证树形、展开行、拖拽的正常功能。"}),E("div",le,[t(a(n),{onClick:e[0]||(e[0]=s=>C(!0))},{default:i(()=>[l("显示分页")]),_:1}),t(a(n),{onClick:e[1]||(e[1]=s=>C(!1))},{default:i(()=>[l("隐藏分页")]),_:1}),t(a(n),{onClick:e[2]||(e[2]=s=>S(!0))},{default:i(()=>[l("显示多选")]),_:1}),t(a(n),{onClick:e[3]||(e[3]=s=>S(!1))},{default:i(()=>[l("隐藏多选")]),_:1}),t(a(n),{onClick:B},{default:i(()=>[l("显示/隐藏展开行")]),_:1}),t(a(n),{onClick:$},{default:i(()=>[l("全选/全不选")]),_:1}),t(a(n),{onClick:D},{default:i(()=>[l("添加/删除操作列")]),_:1})])])]),_:1},512),[[ee,a(r)]]),t(h,{title:"useTable 示例",class:"flex-1"},{default:i(()=>[x(t(R,{currentPage:a(p).pageNum,"onUpdate:currentPage":e[4]||(e[4]=s=>a(p).pageNum=s),pageSize:a(p).pageSize,"onUpdate:pageSize":e[5]||(e[5]=s=>a(p).pageSize=s),showSearch:a(r),"onUpdate:showSearch":e[6]||(e[6]=s=>te(r)?r.value=s:null),height:"100%",onRefresh:a(A),onMount:a(F),onDragSort:I},null,8,["currentPage","pageSize","showSearch","onRefresh","onMount"]),[[K,a(P)]])]),_:1})])}}});export{Le as default};
