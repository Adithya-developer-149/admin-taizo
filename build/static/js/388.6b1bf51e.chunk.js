"use strict";(self.webpackChunkadmin_login_react=self.webpackChunkadmin_login_react||[]).push([[388],{5388:(e,i,n)=>{n.r(i),n.d(i,{default:()=>k});var l=n(2791),t=n(2105),s=n(7692),a=n(751),r=n(1711),o=n(8820),c=n(6314),d=n(3006),m=n(9434),u=n(1185),p=n(184);const x=function(){const[e,i]=(0,l.useState)(!1),n=(0,m.v9)((e=>e.EmployerEnquiryDetails.EmployerEnquiryFilter)),x=(0,m.v9)((e=>e.EmployerEnquiryDetails.EmployerEnquiryFilter.size)),h=(0,m.I0)(),y={companyName:n.companyName,mobileNumber:n.mobileNumber,emailId:n.emailId},[j,E]=(0,l.useState)(y);function b(e,i){switch(e){case"mobileNumber":(0,a.UF)(i)&&E({...j,[e]:i});break;case"companyName":E({...j,[e]:i});break;case"emailId":E({...j,[e]:i})}}return(0,l.useEffect)((()=>{console.log(j)}),[j]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{children:(0,p.jsx)("div",{className:"d-flex justify-content-end",children:(0,p.jsxs)("button",{className:"rounded-pill d-flex align-items-center ".concat(t.Z.Filterbutton),variant:"contained",onClick:()=>i(!0),children:[(0,p.jsx)(s.Ol$,{style:{marginRight:5}})," Filter"]})})}),e&&(0,p.jsx)(a.Xf,{children:(0,p.jsx)(r.Z,{childComponent:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,p.jsx)("h4",{className:"text-center mb-2",children:"Filter by"}),(0,p.jsx)("h3",{children:(0,p.jsx)("span",{onClick:function(e){e.preventDefault(),h(u.CL.setEmployerEnquiryFilter({...j,page:1,size:x})),i(!1)},className:"btn btn-outline-danger",style:{cursor:"pointer",fontSize:15},children:(0,p.jsx)(o.oHP,{})})})]}),(0,p.jsx)("div",{className:"".concat(t.Z.BoxContainerEnquiry),children:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("form",{onSubmit:e=>{(e=>{e.preventDefault(),h(u.CL.setEmployerEnquiryFilter({...j,page:1,size:x})),i(!1)})(e)},children:(0,p.jsxs)(c.Z,{className:"mt-1",children:[" ",(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-sm-4",children:(0,p.jsx)(d.Z,{id:"outlined-basic",label:"Mobile number",variant:"outlined",fullWidth:!0,value:j.mobileNumber,onChange:e=>b("mobileNumber",e.target.value),inputProps:{maxLength:10},InputProps:{startAdornment:(0,p.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[(0,p.jsx)(o.Nhm,{style:{marginRight:"5px"}})," ","+91"]})}})}),(0,p.jsx)("div",{className:"col-sm-4",children:(0,p.jsx)(d.Z,{fullWidth:!0,label:"Company Name",id:"companyName",type:"text",value:j.companyName,onChange:e=>b("companyName",e.target.value)})}),(0,p.jsx)("div",{className:"col-sm-4",children:(0,p.jsx)(d.Z,{fullWidth:!0,label:"Email Id",id:"emailId",type:"text",value:j.emailId,onChange:e=>b("emailId",e.target.value)})})]}),(0,p.jsxs)("div",{className:"d-flex flex-row gap-2 justify-content-end mt-4",children:[(0,p.jsx)("button",{className:"rounded-pill ".concat(t.Z.Filterbutton),variant:"outlined",onClick:e=>{!function(e){e.preventDefault(),E({companyName:"",mobileNumber:"",emailId:""}),h(u.CL.setEmployerEnquiryFilter({...y,page:1,size:x}))}(e)},children:"Clear All"}),(0,p.jsx)("button",{className:"rounded-pill ".concat(t.Z.search),type:"submit",variant:"contained",sx:{minWidth:"150px"},children:"Search"})]})]})})})})]})})})]})};var h=n(8789),y=n(8745),j=n(9281),E=n(9836),b=n(6890),N=n(5855),v=n(3382),g=n(7639),q=n(3400),f=n(7246),C=n(618),M=n(5019),Z=n(2610),F=n(6856);const I=(0,h.ZP)(y.Z)((e=>{let{theme:i}=e;return{["&.".concat(C.Z.head)]:{backgroundColor:"#d2d2d2",color:"#545454f0","@media (max-width: 992px)":{}},["&.".concat(C.Z.body)]:{fontSize:14,"@media (max-width: 992px)":{}}}}));const k=function(){const[e,i]=(0,l.useState)([]),[n,s]=(0,l.useState)(),[r,o]=(0,l.useState)(""),[d,h]=(0,l.useState)({}),[y,C]=(0,l.useState)({}),k=(0,m.v9)((e=>e.EmployerEnquiryDetails.EmployerEnquiryFilter)),w=(0,m.I0)();return(0,l.useEffect)((()=>{console.log(k)}),[k]),(0,l.useEffect)((()=>{(0,M.DU)(k).then((e=>{console.log(e.empEnquiryList,"workingprogress"),i(e.empEnquiryList),o(e.totalCount),s(Math.ceil(e.totalCount/k.size))}))}),[k]),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:"".concat(t.Z.FilterHead),children:[" ",(0,p.jsxs)("div",{className:"d-flex ",children:["Show ","  ",(0,p.jsxs)("select",{name:"",id:"",className:"px-1 py-1 mx-2",onChange:e=>{return i=e.target.value,void w(u.CL.setEmployerEnquiryFilterSize(i));var i},children:[(0,p.jsx)("option",{selected:!0,value:"10",children:"10"}),(0,p.jsx)("option",{value:"20",children:"20"}),(0,p.jsx)("option",{value:"30",children:"30"})]}),"   ","Entries"]}),(0,p.jsxs)("div",{className:"".concat(Z.Z.filterAdduser),children:[" ",(0,p.jsxs)("div",{className:"mt-1 me-2",children:["Total Count : ",r]}),(0,p.jsx)(x,{})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"".concat(t.Z.Container),children:(0,p.jsx)("div",{className:"table-responsive-sm ".concat(t.Z.responsive),children:(0,p.jsx)(j.Z,{className:"".concat(t.Z.TableContainer),children:(0,p.jsxs)(E.Z,{stickyHeader:!0,"aria-label":"sticky table",className:"",children:[(0,p.jsx)(b.Z,{className:"".concat(t.Z.Header),children:(0,p.jsxs)(N.Z,{children:[(0,p.jsx)(I,{children:"Name"}),(0,p.jsx)(I,{children:"Company Name"}),(0,p.jsx)(I,{children:"Mobile Number"}),(0,p.jsx)(I,{children:"Email Id"}),(0,p.jsx)(I,{children:"Industry"}),(0,p.jsx)(I,{children:"City"}),(0,p.jsx)(I,{children:"Created on"})]})}),(0,p.jsx)(v.Z,{children:e.length>0?(0,p.jsx)(p.Fragment,{children:e.map(((e,i)=>(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(N.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,p.jsx)(I,{title:e.empEnquiryModel.contactPersonName,children:e.empEnquiryModel.contactPersonName?(0,a.Th)((0,a.Ls)(e.empEnquiryModel.contactPersonName),15):"-"}),(0,p.jsx)(I,{title:e.empEnquiryModel.companyName,children:null!=e.empEnquiryModel.companyName?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g.Z,{open:y[e.empEnquiryModel.id]||!1,className:"ms-0",title:"Company name copied!",placement:"top",id:e.empEnquiryModel.id,children:(0,p.jsx)(q.Z,{onClick:()=>{return i=e.empEnquiryModel.companyName,n=e.empEnquiryModel.id,navigator.clipboard.writeText(i),C((e=>({...e,[n]:!0}))),void setTimeout((()=>{C((e=>({...e,[n]:!1})))}),1500);var i,n},"aria-label":"Copy Email ID",children:(0,p.jsx)(F.twx,{})})},e.empEnquiryModel.id)," ",(0,a.Th)(e.empEnquiryModel.companyName,15)]}):(0,p.jsx)("span",{children:"-"})}),(0,p.jsx)(I,{title:e.empEnquiryModel.mobileNumber,children:e.empEnquiryModel.mobileNumber?"+91 "+String(e.empEnquiryModel.mobileNumber).slice(0,10):""}),(0,p.jsx)(I,{title:e.empEnquiryModel.emailId,children:null!=e.empEnquiryModel.emailId?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g.Z,{open:d[e.empEnquiryModel.id]||!1,className:"ms-0",title:"Email ID copied!",placement:"top",id:e.empEnquiryModel.id,children:(0,p.jsx)(q.Z,{onClick:()=>{return i=e.empEnquiryModel.emailId,n=e.empEnquiryModel.id,navigator.clipboard.writeText(i),h((e=>({...e,[n]:!0}))),void setTimeout((()=>{h((e=>({...e,[n]:!1})))}),1500);var i,n},"aria-label":"Copy Email ID",children:(0,p.jsx)(F.twx,{})})},e.empEnquiryModel.id)," ",(0,a.Th)(e.empEnquiryModel.emailId,25)]}):(0,p.jsx)("span",{children:"-"})}),(0,p.jsx)(I,{title:e.empEnquiryModel.industry,children:e.empEnquiryModel.industry?(0,a.Th)((0,a.Ls)(e.empEnquiryModel.industry),15):"-"}),(0,p.jsx)(I,{title:e.empEnquiryModel.city,children:e.empEnquiryModel.city?(0,a.Th)((0,a.Ls)(e.empEnquiryModel.city),15):"-"}),(0,p.jsx)(I,{children:(0,p.jsx)(a.H3,{dateValue:e.empEnquiryModel.createdTime})})]},i)})))}):""})]})})})}),(0,p.jsx)("div",{className:"d-flex justify-content-center align-items-center mb-3 position-absolute bottom-0 start-50 translate-middle-x",children:(0,p.jsx)(c.Z,{spacing:2,children:(0,p.jsx)(f.Z,{count:n,variant:"outlined",shape:"rounded",color:"success",boundaryCount:1,siblingCount:0,onChange:function(e,i){const n=i;console.log(e,"current page"),w(u.CL.setEmployerEnquiryFilterPage(n))},size:"medium"})})})]})]})}}}]);
//# sourceMappingURL=388.6b1bf51e.chunk.js.map