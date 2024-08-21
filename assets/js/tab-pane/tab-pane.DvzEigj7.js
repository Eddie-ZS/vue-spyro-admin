import{a0 as _e,c as K,f as Z,Z as le,t as G,h as U,$ as oe,m as re,ab as ge,ac as Ce,k as I,x as D,U as ie,ad as ae,i as Ne,ae as se,w as Te,q as Pe}from"../index-BuEOIHYu.js";import{B as we,a2 as $e,p as M,J as Q,a5 as ee,H as T,I as F,q as te,r as ce,s as ue,ak as de,E as B,as as Se,a3 as V,K as be,b2 as Ee,ap as d,b3 as xe,aR as Be,Y as ke,a9 as Oe,aa as X,b4 as Re,L as ze,af as Ae,ax as Le,ad as Fe,at as Me,au as Ve,ai as Ie}from"../.pnpm/.pnpm.DOMSuxsb.js";import{c as R}from"../strings/strings.CRNRnOeF.js";const De=(e,l,b)=>_e(e.subTree).filter(n=>{var u;return $e(n)&&((u=n.type)==null?void 0:u.name)===l&&!!n.component}).map(n=>n.component.uid).map(n=>b[n]).filter(n=>!!n),Ke=(e,l)=>{const b={},f=we([]);return{children:f,addChild:u=>{b[u.uid]=u,f.value=De(e,l,b)},removeChild:u=>{delete b[u],f.value=f.value.filter(v=>v.uid!==u)}}},q=Symbol("tabsRootContextKey"),Ue=K({tabs:{type:Z(Array),default:()=>le([])}}),ve="ElTabBar",qe=M({name:ve}),He=M({...qe,props:Ue,setup(e,{expose:l}){const b=e,f=Q(),t=ee(q);t||G(ve,"<el-tabs><el-tab-bar /></el-tabs>");const n=U("tabs"),u=T(),v=T(),m=()=>{let y=0,o=0;const i=["top","bottom"].includes(t.props.tabPosition)?"width":"height",p=i==="width"?"x":"y",E=p==="x"?"left":"top";return b.tabs.every(S=>{var A,a;const g=(a=(A=f.parent)==null?void 0:A.refs)==null?void 0:a[`tab-${S.uid}`];if(!g)return!1;if(!S.active)return!0;y=g[`offset${R(E)}`],o=g[`client${R(i)}`];const w=window.getComputedStyle(g);return i==="width"&&(o-=Number.parseFloat(w.paddingLeft)+Number.parseFloat(w.paddingRight),y+=Number.parseFloat(w.paddingLeft)),!1}),{[i]:`${o}px`,transform:`translate${R(p)}(${y}px)`}},P=()=>v.value=m();return F(()=>b.tabs,async()=>{await te(),P()},{immediate:!0}),oe(u,()=>P()),l({ref:u,update:P}),(y,o)=>(ce(),ue("div",{ref_key:"barRef",ref:u,class:de([B(n).e("active-bar"),B(n).is(B(t).props.tabPosition)]),style:Se(v.value)},null,6))}});var We=re(He,[["__file","tab-bar.vue"]]);const Ye=K({panes:{type:Z(Array),default:()=>le([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),je={tabClick:(e,l,b)=>b instanceof Event,tabRemove:(e,l)=>l instanceof Event},ne="ElTabNav",Je=M({name:ne,props:Ye,emits:je,setup(e,{expose:l,emit:b}){const f=ee(q);f||G(ne,"<el-tabs><tab-nav /></el-tabs>");const t=U("tabs"),n=ge(),u=Ce(),v=T(),m=T(),P=T(),y=T(),o=T(!1),i=T(0),p=T(!1),E=T(!0),S=V(()=>["top","bottom"].includes(f.props.tabPosition)?"width":"height"),A=V(()=>({transform:`translate${S.value==="width"?"X":"Y"}(-${i.value}px)`})),a=()=>{if(!v.value)return;const r=v.value[`offset${R(S.value)}`],c=i.value;if(!c)return;const s=c>r?c-r:0;i.value=s},g=()=>{if(!v.value||!m.value)return;const r=m.value[`offset${R(S.value)}`],c=v.value[`offset${R(S.value)}`],s=i.value;if(r-s<=c)return;const C=r-s>c*2?s+c:r-c;i.value=C},w=async()=>{const r=m.value;if(!o.value||!P.value||!v.value||!r)return;await te();const c=P.value.querySelector(".is-active");if(!c)return;const s=v.value,C=["top","bottom"].includes(f.props.tabPosition),N=c.getBoundingClientRect(),_=s.getBoundingClientRect(),x=C?r.offsetWidth-_.width:r.offsetHeight-_.height,$=i.value;let h=$;C?(N.left<_.left&&(h=$-(_.left-N.left)),N.right>_.right&&(h=$+N.right-_.right)):(N.top<_.top&&(h=$-(_.top-N.top)),N.bottom>_.bottom&&(h=$+(N.bottom-_.bottom))),h=Math.max(h,0),i.value=Math.min(h,x)},k=()=>{var r;if(!m.value||!v.value)return;e.stretch&&((r=y.value)==null||r.update());const c=m.value[`offset${R(S.value)}`],s=v.value[`offset${R(S.value)}`],C=i.value;s<c?(o.value=o.value||{},o.value.prev=C,o.value.next=C+s<c,c-C<s&&(i.value=c-s)):(o.value=!1,C>0&&(i.value=0))},O=r=>{const c=r.code,{up:s,down:C,left:N,right:_}=D;if(![s,C,N,_].includes(c))return;const x=Array.from(r.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),$=x.indexOf(r.target);let h;c===N||c===s?$===0?h=x.length-1:h=$-1:$<x.length-1?h=$+1:h=0,x[h].focus({preventScroll:!0}),x[h].click(),L()},L=()=>{E.value&&(p.value=!0)},H=()=>p.value=!1;return F(n,r=>{r==="hidden"?E.value=!1:r==="visible"&&setTimeout(()=>E.value=!0,50)}),F(u,r=>{r?setTimeout(()=>E.value=!0,50):E.value=!1}),oe(P,k),be(()=>setTimeout(()=>w(),0)),Ee(()=>k()),l({scrollToActiveTab:w,removeFocus:H}),()=>{const r=o.value?[d("span",{class:[t.e("nav-prev"),t.is("disabled",!o.value.prev)],onClick:a},[d(I,null,{default:()=>[d(xe,null,null)]})]),d("span",{class:[t.e("nav-next"),t.is("disabled",!o.value.next)],onClick:g},[d(I,null,{default:()=>[d(Be,null,null)]})])]:null,c=e.panes.map((s,C)=>{var N,_,x,$;const h=s.uid,W=s.props.disabled,Y=(_=(N=s.props.name)!=null?N:s.index)!=null?_:`${C}`,j=!W&&(s.isClosable||e.editable);s.index=`${C}`;const me=j?d(I,{class:"is-icon-close",onClick:z=>b("tabRemove",s,z)},{default:()=>[d(ke,null,null)]}):null,he=(($=(x=s.slots).label)==null?void 0:$.call(x))||s.props.label,ye=!W&&s.active?0:-1;return d("div",{ref:`tab-${h}`,class:[t.e("item"),t.is(f.props.tabPosition),t.is("active",s.active),t.is("disabled",W),t.is("closable",j),t.is("focus",p.value)],id:`tab-${Y}`,key:`tab-${h}`,"aria-controls":`pane-${Y}`,role:"tab","aria-selected":s.active,tabindex:ye,onFocus:()=>L(),onBlur:()=>H(),onClick:z=>{H(),b("tabClick",s,Y,z)},onKeydown:z=>{j&&(z.code===D.delete||z.code===D.backspace)&&b("tabRemove",s,z)}},[he,me])});return d("div",{ref:P,class:[t.e("nav-wrap"),t.is("scrollable",!!o.value),t.is(f.props.tabPosition)]},[r,d("div",{class:t.e("nav-scroll"),ref:v},[d("div",{class:[t.e("nav"),t.is(f.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(f.props.tabPosition))],ref:m,style:A.value,role:"tablist",onKeydown:O},[e.type?null:d(We,{ref:y,tabs:[...e.panes]},null),c])])])}}}),Xe=K({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:Z(Function),default:()=>!0},stretch:Boolean}),J=e=>ze(e)||Ne(e),Ze={[ie]:e=>J(e),tabClick:(e,l)=>l instanceof Event,tabChange:e=>J(e),edit:(e,l)=>["remove","add"].includes(l),tabRemove:e=>J(e),tabAdd:()=>!0},Ge=M({name:"ElTabs",props:Xe,emits:Ze,setup(e,{emit:l,slots:b,expose:f}){var t;const n=U("tabs"),u=V(()=>["left","right"].includes(e.tabPosition)),{children:v,addChild:m,removeChild:P}=Ke(Q(),"ElTabPane"),y=T(),o=T((t=e.modelValue)!=null?t:"0"),i=async(a,g=!1)=>{var w,k,O;if(!(o.value===a||ae(a)))try{await((w=e.beforeLeave)==null?void 0:w.call(e,a,o.value))!==!1&&(o.value=a,g&&(l(ie,a),l("tabChange",a)),(O=(k=y.value)==null?void 0:k.removeFocus)==null||O.call(k))}catch{}},p=(a,g,w)=>{a.props.disabled||(i(g,!0),l("tabClick",a,w))},E=(a,g)=>{a.props.disabled||ae(a.props.name)||(g.stopPropagation(),l("edit",a.props.name,"remove"),l("tabRemove",a.props.name))},S=()=>{l("edit",void 0,"add"),l("tabAdd")};F(()=>e.modelValue,a=>i(a)),F(o,async()=>{var a;await te(),(a=y.value)==null||a.scrollToActiveTab()}),Oe(q,{props:e,currentName:o,registerPane:a=>{v.value.push(a)},sortPane:m,unregisterPane:P}),f({currentName:o});const A=({render:a})=>a();return()=>{const a=b["add-icon"],g=e.editable||e.addable?d("div",{class:[n.e("new-tab"),u.value&&n.e("new-tab-vertical")],tabindex:"0",onClick:S,onKeydown:O=>{O.code===D.enter&&S()}},[a?X(b,"add-icon"):d(I,{class:n.is("icon-plus")},{default:()=>[d(Re,null,null)]})]):null,w=d("div",{class:[n.e("header"),u.value&&n.e("header-vertical"),n.is(e.tabPosition)]},[d(A,{render:()=>{const O=v.value.some(L=>L.slots.label);return d(Je,{ref:y,currentName:o.value,editable:e.editable,type:e.type,panes:v.value,stretch:e.stretch,onTabClick:p,onTabRemove:E},{$stable:!O})}},null),g]),k=d("div",{class:n.e("content")},[X(b,"default")]);return d("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:e.type==="card",[n.m("border-card")]:e.type==="border-card"}]},[k,w])}}}),Qe=K({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),fe="ElTabPane",et=M({name:fe}),tt=M({...et,props:Qe,setup(e){const l=e,b=Q(),f=Ae(),t=ee(q);t||G(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const n=U("tab-pane"),u=T(),v=V(()=>l.closable||t.props.closable),m=se(()=>{var p;return t.currentName.value===((p=l.name)!=null?p:u.value)}),P=T(m.value),y=V(()=>{var p;return(p=l.name)!=null?p:u.value}),o=se(()=>!l.lazy||P.value||m.value);F(m,p=>{p&&(P.value=!0)});const i=Le({uid:b.uid,slots:f,props:l,paneName:y,active:m,index:u,isClosable:v});return t.registerPane(i),be(()=>{t.sortPane(i)}),Fe(()=>{t.unregisterPane(i.uid)}),(p,E)=>B(o)?Me((ce(),ue("div",{key:0,id:`pane-${B(y)}`,class:de(B(n).b()),role:"tabpanel","aria-hidden":!B(m),"aria-labelledby":`tab-${B(y)}`},[X(p.$slots,"default")],10,["id","aria-hidden","aria-labelledby"])),[[Ve,B(m)]]):Ie("v-if",!0)}});var pe=re(tt,[["__file","tab-pane.vue"]]);const lt=Te(Ge,{TabPane:pe}),ot=Pe(pe);export{lt as E,ot as a};
