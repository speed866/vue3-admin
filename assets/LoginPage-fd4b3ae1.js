import{b as O,d as h,u as P,c as _,p as G,o as b,a as x,w as t,r as U,n as B,e as i,f as K,g as q,_ as F,h as T,i as v,m as w,j as J,k as R,l as H,q as k,s as Q,t as W,v as X,x as e,y as C,z as m,A as Y,E as L,B as Z,C as I,D as V,F as ee,G as se}from"./index-73de4702.js";import{E as te,a as le}from"./el-form-item-396586e3.js";import{_ as oe,E as ae}from"./_plugin-vue_export-helper-a88ebb22.js";import{E as re}from"./el-link-d2e0bcd1.js";import{E as ne}from"./el-checkbox-e57ea278.js";import{E as ue}from"./el-input-c204ea9e.js";import"./el-message-dac1224c.js";import"./isEqual-d4ac76df.js";const A=Symbol("rowContextKey"),pe=["start","center","end","space-around","space-between","space-evenly"],de=["top","middle","bottom"],ie=O({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:pe,default:"start"},align:{type:String,values:de}}),ce=h({name:"ElRow"}),fe=h({...ce,props:ie,setup(c){const a=c,s=P("row"),n=_(()=>a.gutter);G(A,{gutter:n});const f=_(()=>{const l={};return a.gutter&&(l.marginRight=l.marginLeft=`-${a.gutter/2}px`),l}),g=_(()=>[s.b(),s.is(`justify-${a.justify}`,a.justify!=="start"),s.is(`align-${a.align}`,!!a.align)]);return(l,$)=>(b(),x(q(l.tag),{class:B(i(g)),style:K(i(f))},{default:t(()=>[U(l.$slots,"default")]),_:3},8,["class","style"]))}});var me=F(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const _e=T(me),ge=O({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:v([Number,Object]),default:()=>w({})},sm:{type:v([Number,Object]),default:()=>w({})},md:{type:v([Number,Object]),default:()=>w({})},lg:{type:v([Number,Object]),default:()=>w({})},xl:{type:v([Number,Object]),default:()=>w({})}}),ye=h({name:"ElCol"}),ve=h({...ye,props:ge,setup(c){const a=c,{gutter:s}=J(A,{gutter:_(()=>0)}),n=P("col"),f=_(()=>{const l={};return s.value&&(l.paddingLeft=l.paddingRight=`${s.value/2}px`),l}),g=_(()=>{const l=[];return["span","offset","pull","push"].forEach(r=>{const o=a[r];R(o)&&(r==="span"?l.push(n.b(`${a[r]}`)):o>0&&l.push(n.b(`${r}-${a[r]}`)))}),["xs","sm","md","lg","xl"].forEach(r=>{R(a[r])?l.push(n.b(`${r}-${a[r]}`)):H(a[r])&&Object.entries(a[r]).forEach(([o,d])=>{l.push(o!=="span"?n.b(`${r}-${o}-${d}`):n.b(`${r}-${d}`))})}),s.value&&l.push(n.is("guttered")),[n.b(),l]});return(l,$)=>(b(),x(q(l.tag),{class:B(i(g)),style:K(i(f))},{default:t(()=>[U(l.$slots,"default")]),_:3},8,["class","style"]))}});var we=F(ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const be=T(we);const D=c=>(ee("data-v-51800e1e"),c=c(),se(),c),xe=D(()=>C("h1",null,"登录",-1)),$e={class:"flex"},he=D(()=>C("h1",null,"注册",-1)),Ee={__name:"LoginPage",setup(c){const a=k(!0),s=k({username:"",password:"",repassword:""}),n={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,max:10,message:"用户名必须为5-10位字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码必须为 6-15 位非空字符",trigger:"blur"}],repassword:[{validator:(r,o,d)=>{o===""?d(new Error("请重新输入密码")):o!==s.value.password?d(new Error("两次输入的密码不匹配")):d()},trigger:"blur"}]},f=k(),g=async()=>{await f.value.validate(),await Y(s.value),L.success("注册成功"),a.value=!0},l=Q(),$=W(),N=async()=>{await f.value.validate();const r=await Z(s.value);l.setToken(r.data.token),L.success("登陆成功"),$.push("/")};return X(a,()=>{s.value={username:"",password:"",repassword:""}}),(r,o)=>{const d=be,u=te,y=ue,M=ne,E=re,S=ae,j=le,z=_e;return b(),x(z,{class:"login-page"},{default:t(()=>[e(d,{span:12,class:"bg"}),e(d,{span:6,offset:3,class:"form"},{default:t(()=>[a.value?(b(),x(j,{key:0,model:s.value,rules:n,ref_key:"form",ref:f,size:"large"},{default:t(()=>[e(u,null,{default:t(()=>[xe]),_:1}),e(u,{prop:"username"},{default:t(()=>[e(y,{modelValue:s.value.username,"onUpdate:modelValue":o[0]||(o[0]=p=>s.value.username=p),"prefix-icon":i(I),placeholder:"请输入用户名"},null,8,["modelValue","prefix-icon"])]),_:1}),e(u,{prop:"password"},{default:t(()=>[e(y,{modelValue:s.value.password,"onUpdate:modelValue":o[1]||(o[1]=p=>s.value.password=p),"prefix-icon":i(V),placeholder:"请输入密码",name:"password",type:"password"},null,8,["modelValue","prefix-icon"])]),_:1}),e(u,null,{default:t(()=>[C("div",$e,[e(M,null,{default:t(()=>[m("记住我")]),_:1}),e(E,{type:"primary",underline:!1},{default:t(()=>[m("忘记密码？")]),_:1})])]),_:1}),e(u,null,{default:t(()=>[e(S,{type:"primary",class:"button","auto-insert-space":"",onClick:N},{default:t(()=>[m(" 登录 ")]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(E,{type:"info",underline:!1,onClick:o[2]||(o[2]=p=>a.value=!1)},{default:t(()=>[m(" 注册 → ")]),_:1})]),_:1})]),_:1},8,["model"])):(b(),x(j,{key:1,model:s.value,rules:n,"status-icon":"",ref_key:"form",ref:f,size:"large"},{default:t(()=>[e(u,null,{default:t(()=>[he]),_:1}),e(u,{prop:"username"},{default:t(()=>[e(y,{modelValue:s.value.username,"onUpdate:modelValue":o[3]||(o[3]=p=>s.value.username=p),"prefix-icon":i(I),placeholder:"请输入用户名"},null,8,["modelValue","prefix-icon"])]),_:1}),e(u,{prop:"password"},{default:t(()=>[e(y,{modelValue:s.value.password,"onUpdate:modelValue":o[4]||(o[4]=p=>s.value.password=p),"prefix-icon":i(V),placeholder:"请输入密码",type:"password"},null,8,["modelValue","prefix-icon"])]),_:1}),e(u,{prop:"repassword"},{default:t(()=>[e(y,{modelValue:s.value.repassword,"onUpdate:modelValue":o[5]||(o[5]=p=>s.value.repassword=p),"prefix-icon":i(V),placeholder:"请再次输入密码",type:"password"},null,8,["modelValue","prefix-icon"])]),_:1}),e(u,null,{default:t(()=>[e(S,{type:"primary",class:"button","auto-insert-space":"",onClick:g},{default:t(()=>[m(" 注册 ")]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(E,{type:"info",underline:!1,onClick:o[6]||(o[6]=p=>a.value=!0)},{default:t(()=>[m(" ← 返回 ")]),_:1})]),_:1})]),_:1},8,["model"]))]),_:1})]),_:1})}}},Ie=oe(Ee,[["__scopeId","data-v-51800e1e"]]);export{Ie as default};