"use strict";(self.webpackChunkadmin_login_react=self.webpackChunkadmin_login_react||[]).push([[70],{7070:(e,a,s)=>{s.r(a),s.d(a,{default:()=>I});var l=s(2791),n=s(3006),r=s(4294),t=s(7247),o=s(5019);const c="invoice_invoice_form_wrp__IWC98";var i=s(4822),m=s(751),d=s(1711),u=s(5770),h=s(5322),p=s(1652),x=s(4750),j=s(1985),v=s(184);const y=()=>{const[e,a]=(0,l.useState)({industries:[],jobRoles:[]}),s=(0,l.useRef)(0),[y,N]=(0,l.useState)([{id:s.current++,jobRole:{val:"",err:!1},industry:{val:"",err:!1},openings:{val:"",err:!1},lookingFor:{val:"",err:!1},amount:{val:0,err:!1}}]),[g,b]=(0,l.useState)([]),[f,_]=(0,l.useState)({jobDetails:g,employerID:"",paymentID:"",paymentMethod:"",chequeDate:new Date,chequeNo:"",amount:""}),[I,D]=(0,l.useState)(!1),[q,C]=(0,l.useState)(!1),[P,S]=(0,l.useState)(!1),[w,k]=(0,l.useState)({employerID:"",paymentID:"",paymentMethod:"",chequeDate:null,chequeNo:"",amount:""});(0,l.useEffect)((()=>{(0,o.Q)().then((e=>{let s=e.results.map((e=>e.industry));a((e=>({...e,industries:[...s]})))})),(0,o.jd)(1).then((e=>{let s=e.results.map((e=>e.jobRoles));a((e=>({...e,jobRoles:[...s]})))}))}),[]),(0,l.useEffect)((()=>{_((e=>({...e,jobDetails:g})))}),[g]);const F=e=>{let a=!0;return e.forEach(((e,s)=>{const l={...e};""===e.jobRole.val?(l.jobRole.err=!0,a=!1):l.jobRole.err=!1,""===e.openings.val?(l.openings.err=!0,a=!1):l.openings.err=!1,""===e.industry.val?(l.industry.err=!0,a=!1):l.industry.err=!1,""===e.lookingFor.val?(l.lookingFor.err=!0,a=!1):l.lookingFor.err=!1,console.log(l),N((e=>{let a=[...e];return a[s]=l,a}))})),a},Z=(e,a,s)=>{console.log(s);const l=y.map((l=>l.id===e?{...l,[a]:{val:null==s||s.isNaN?"":s,err:null===s}}:l));N(l)};const M=(e,a)=>{_((s=>({...s,[e]:a})))};(0,l.useEffect)((()=>{let e=y.map((e=>({jobCategory:e.jobRole.val,industry:e.industry.val,noOfOpenings:e.openings.val,isExperienced:"Experienced"===e.lookingFor.val})));b(e)}),[y]);const R=e=>{e.preventDefault();let a=0;(""==f.employerID||isNaN(f.employerID))&&(k((e=>({...e,employerID:"Employer ID  is required *"}))),a++),"cheque"!=f.paymentMethod&&"cash"!=f.paymentMethod||("cheque"==f.paymentMethod&&((""==f.chequeNo||isNaN(f.chequeNo))&&(k((e=>({...e,chequeNo:"Please enter valid cheque no"}))),a++),""!=f.chequeDate&&null!=f.chequeDate||(k((e=>({...e,chequeDate:"Please enter valid Cheque date"}))),a++)),(""==f.amount||isNaN(f.amount))&&(k((e=>({...e,amount:"Please enter valid amount"}))),a++)),"payment"==f.paymentMethod&&""==f.paymentID&&(k((e=>({...e,paymentID:"Please enter valid payment id"}))),a++),""==f.paymentMethod&&(k((e=>({...e,paymentMethod:"Please enter payment payment method"}))),a++),F(y)||a++;Object.keys(w).every((e=>""===w[e]));0==a?S(!0):console.log("Form has errors. Please correct them.")};return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"ps-4",children:(0,v.jsxs)("div",{className:"".concat(c),children:[(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("form",{onSubmit:R,children:(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsx)(n.Z,{label:"Employer ID",variant:"outlined",value:f.employerID,onChange:e=>{const a=e.target.value;M("employerID",a),isNaN(a)?k((e=>({...e,employerID:"Invalid employer id"}))):k((e=>({...e,employerID:""})))},fullWidth:!0,margin:"normal",error:Boolean(w.employerID),helperText:w.employerID,inputProps:{maxLength:7}})}),(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsx)(u.Z,{value:f.paymentMethod,style:{margin:"10px 0"},onChange:(e,a)=>{return s="paymentMethod",l=a,_((e=>({...e,[s]:l,chequeNo:"",amount:"",chequeDate:null,paymentID:""}))),k((e=>({...e,paymentMethod:""}))),void console.log(s,l);var s,l},clearIcon:null,options:["payment","cheque","cash"],renderInput:e=>(0,v.jsx)(n.Z,{...e,label:"Payment Method",variant:"outlined",error:Boolean(w.paymentMethod),helperText:w.paymentMethod})})})]}),(0,v.jsx)("div",{className:"row",children:"cheque"==f.paymentMethod&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsx)(n.Z,{required:!0,id:"outlined-required",label:"Cheque No",name:"ChequeNo",value:f.chequeNo,error:Boolean(w.chequeNo),helperText:w.chequeNo,InputLabelProps:{},sx:{width:"100%"},fullWidth:!0,onChange:e=>{(e=>{const a=e.target.value;M("chequeNo",a),isNaN(a)||""==a?k((e=>({...e,chequeNo:"Invalid cheque no"}))):k((e=>({...e,chequeNo:""})))})(e)},inputProps:{maxLength:50}})})})}),"cheque"==f.paymentMethod||"cash"==f.paymentMethod?(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"row mt-2",children:["cheque"==f.paymentMethod&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsx)(p._,{dateAdapter:x.y,children:(0,v.jsx)(j.M,{label:"Cheque Date",value:f.chequeDate,onChange:(e,a)=>{((e,a)=>{M("chequeDate",e.$d),null!=e.$d?k((e=>({...e,chequeDate:""}))):k((e=>({...e,chequeDate:"Please enter valid date"})))})(e)},fullWidth:!0,sx:{width:"100%"},slotProps:{textField:{helperText:w.chequeDate,error:Boolean(w.chequeDate)}}})})})}),(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsx)(n.Z,{required:!0,id:"outlined-required",label:"Amount",name:"amount",value:f.amount,fullWidth:!0,onChange:e=>{(e=>{const a=e.target.value;M("amount",a),isNaN(a)||""==a?k((e=>({...e,amount:"Invalid amount"}))):k((e=>({...e,amount:""})))})(e)},inputProps:{maxLength:7},error:Boolean(w.amount),helperText:w.amount})})]})}):"",(0,v.jsx)("div",{className:"row",children:"payment"==f.paymentMethod&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsx)(n.Z,{label:"Payment ID",variant:"outlined",value:f.paymentID,onChange:e=>{const a=e.target.value;M("paymentID",a),k(""!=a?e=>({...e,paymentID:""}):e=>({...e,paymentID:"Invalid employer id"}))},fullWidth:!0,margin:"normal",error:Boolean(w.paymentID),helperText:w.paymentID})})})}),(0,v.jsxs)("div",{className:"",children:[y.map((a=>(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsx)(u.Z,{value:a.industry.val,style:{margin:"10px 0"},onChange:(e,s)=>{Z(a.id,"industry",s)},clearIcon:null,options:e.industries,getOptionLabel:e=>e,filterSelectedOptions:!0,renderInput:e=>(0,v.jsx)(n.Z,{...e,label:"Industry",variant:"outlined",error:a.industry.err})})}),(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsx)(u.Z,{value:a.jobRole.val,style:{margin:"10px 0"},onChange:(e,s)=>Z(a.id,"jobRole",s),clearIcon:null,options:e.jobRoles,renderInput:e=>(0,v.jsx)(n.Z,{...e,label:"Job Category",variant:"outlined",error:a.jobRole.err})})})]}),(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsx)(u.Z,{value:a.openings.val,style:{margin:"10px 0"},onChange:(e,s)=>{Z(a.id,"openings",s)},clearIcon:null,options:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100"],renderInput:e=>(0,v.jsx)(n.Z,{...e,type:"text",label:"Number of Openings",variant:"outlined",error:a.openings.err})})}),(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsx)(u.Z,{value:a.lookingFor.val,onChange:(e,s)=>{Z(a.id,"lookingFor",s),function(e,a){let s=y.filter((a=>a.id==e));N((a=>{let l=[...a];return l.map((a=>a.id!=e?a:s)),l}))}(a.id)},clearIcon:null,style:{margin:"10px 0"},options:["Fresher","Experienced"],renderInput:e=>(0,v.jsx)(n.Z,{...e,label:"Looking For",variant:"outlined",error:a.lookingFor.err})})})]}),(0,v.jsx)("div",{className:"row",children:(0,v.jsx)("div",{className:"col-sm-6"})}),y.length>1&&(0,v.jsxs)(r.Z,{variant:"outlined",color:"error",onClick:()=>(e=>{let a;y.length>1&&(a=y.filter((a=>a.id!==e)),N(a))})(a.id),children:[(0,v.jsx)(t.Z,{})," Remove"]})]},a.id))),(0,v.jsx)("div",{className:"mt-2",children:(0,v.jsxs)(r.Z,{color:"success",onClick:()=>{if(F(y)){const e={id:s.current++,jobRole:{val:"",err:!1},openings:{val:"",err:!1},industry:{val:"",err:!1},lookingFor:{val:"",err:!1},amount:{val:0,err:!1}};N([...y,e])}},children:[" ","+ Add Requirements"]})}),(0,v.jsx)("div",{children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-sm-6"}),(0,v.jsx)("div",{className:"col-sm-6"})]})})]}),(0,v.jsx)("div",{className:"d-grid justify-content-center my-3",children:(0,v.jsx)(r.Z,{onClick:R,variant:"contained",color:"primary",type:"submit",disabled:I,children:"Submit"})})]})})}),q&&(0,v.jsx)(m.Xf,{children:(0,v.jsx)(d.Z,{childComponent:(0,v.jsx)(i.Z,{HeadText:"Payment Updated Successfully"})})}),P&&(0,v.jsx)(m.Xf,{children:(0,v.jsx)(d.Z,{childComponent:(0,v.jsx)(h.Z,{heading:"Confirmation",headingText:"Are you sure you want to submit the Payment Update form?",onConfirm:function(){D(!0),(0,o.qX)(f).then((e=>{console.log(e,"proforma Invoice api data");const{statuscode:a}=e;if(200!=e.code)return alert("something went wrong"),!1;D(!1),C(!0),setTimeout((()=>{C(!1),S(!1)}),3e3),_((e=>({...e,jobDetails:g,employerID:"",paymentID:"",paymentMethod:"",chequeDate:new Date,chequeNo:"",amount:""}))),N([{id:s.current++,jobRole:{val:"",err:!1},industry:{val:"",err:!1},openings:{val:"",err:!1},lookingFor:{val:"",err:!1},amount:{val:0,err:!1}}]),k({employerID:"",paymentID:"",paymentMethod:"",chequeDate:"",chequeNo:"",amount:""})}))},enableSubmit:I,onRequestClose:function(){S(!1)}})})})]})})})},N="UserPayment_payment_form_wrp__-FQwY";var g=s(9490),b=s(6850);const f=function(){const[e,a]=(0,l.useState)(""),[s,n]=(0,l.useState)(""),[r,t]=(0,l.useState)(""),[o,c]=(0,l.useState)(""),[i,m]=(0,l.useState)(""),[d,u]=(0,l.useState)(""),[h,p]=(0,l.useState)(""),[x,j]=(0,l.useState)(null),[y,f]=(0,l.useState)(!1),[_,I]=(0,l.useState)(!1),[D,q]=(0,l.useState)(!1),[C,P]=(0,l.useState)(""),[S,w]=(0,l.useState)(""),[k,F]=(0,l.useState)(""),[Z,M]=(0,l.useState)(""),[R,E]=(0,l.useState)(""),[O,T]=(0,l.useState)(""),[B,A]=(0,l.useState)("");return(0,v.jsx)("div",{className:"".concat(N),children:(0,v.jsxs)("div",{children:[y&&(0,v.jsx)("div",{className:"modal",children:(0,v.jsxs)("div",{className:"modal-content",children:[(0,v.jsx)("div",{className:"loading-spinner"}),(0,v.jsx)("h3",{className:"mt-2",children:"Loading..."})]})}),"success"===x&&(0,v.jsx)("div",{className:"modal",children:(0,v.jsxs)("div",{className:"modal-content text-center",children:[(0,v.jsx)("h3",{className:"text-success",children:"Success!"}),(0,v.jsx)("div",{className:"success-icon",children:(0,v.jsx)(g.G,{icon:b.fV7})}),(0,v.jsx)("p",{className:"para",assName:"text-dark",children:"Payment submitted successfully!"}),(0,v.jsx)("button",{className:"btn btn-success w-50 text-center",onClick:()=>j(null),children:"ok"})]})}),(0,v.jsx)("form",{onSubmit:l=>{l.preventDefault(),async function(){var l=new Headers;l.append("Content-Type","application/json");var x={method:"POST",headers:l,body:JSON.stringify({amount:s,emailId:r,mobileNumber:o,orderId:i,paymentId:d,status:"payment successfull",typeOfPurchase:h,userId:e}),redirect:"follow"};I(!0),fetch("h/ttps://dev.taizo.in/adminuserPayment",x).then((e=>{e.ok&&(q(!0),a(""),n(""),t(""),c(""),m(""),u(""),p(""))})).catch((e=>{console.error("API Error:",e)})).finally((()=>{I(!1)}))}(),C||S||k||Z||R||O||B||(f(!0),setTimeout((()=>{j("success"),f(!1)}),2e3),a(""),n(""),t(""),c(""),m(""),u(""),p(""))},children:(0,v.jsxs)("div",{className:"container ms-5 me-5",children:[(0,v.jsxs)("div",{class:"row ",children:[(0,v.jsxs)("div",{className:"col-sm-6",children:[(0,v.jsx)("label",{children:"Jobseeker User ID"}),(0,v.jsx)("input",{type:"number",placeholder:"Userid","aria-label":"Userid",name:"userid",className:"form-control",required:!0,value:e,onChange:e=>a(e.target.value),onBlur:()=>{e.length<1||e.length>5?P("please Enter 1 to 5 numbers"):P("")}}),C&&(0,v.jsx)("p",{className:"para",children:C})]}),(0,v.jsxs)("div",{className:"col-sm-6",children:[(0,v.jsx)("label",{children:"Amount"}),(0,v.jsx)("input",{type:"text",className:"form-control",placeholder:"Amount","aria-label":"amount",name:"amount",required:!0,value:s,onChange:e=>n(e.target.value),onBlur:()=>{s.match(/^\d+$/)?w(""):w("Please Enter your amount")}}),S&&(0,v.jsx)("p",{className:"para",children:S})]})]}),(0,v.jsxs)("div",{class:"row mt-1",children:[(0,v.jsxs)("div",{className:"col-sm-6",children:[(0,v.jsx)("label",{children:"Email ID"}),(0,v.jsx)("input",{type:"text",placeholder:"EmailId","aria-label":"emailId",className:"form-control",name:"email",required:!0,value:r,onChange:e=>t(e.target.value),onBlur:()=>{r.match(/^[A-Za-z\\._\-0-9]*[@][A-Za-z]*[\\.][a-z]{2,4}$/)?F(""):F("Please Enter a valid email")}}),k&&(0,v.jsx)("p",{className:"para",children:k})]}),(0,v.jsxs)("div",{className:"col-sm-6",children:[(0,v.jsx)("label",{children:"Mobile Number"}),(0,v.jsx)("input",{type:"text",className:"form-control",placeholder:"MobileNumber","aria-label":"mobileNumber",name:"phone",required:!0,value:o,onChange:e=>c(e.target.value),onBlur:()=>{o.match(/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)?M(""):M("Please Enter a valid mobile number")}}),Z&&(0,v.jsx)("p",{className:"para",children:Z})]})]}),(0,v.jsxs)("div",{class:"row mt-1",children:[(0,v.jsxs)("div",{className:"col-sm-6",children:[(0,v.jsx)("label",{children:"Order ID"}),(0,v.jsx)("input",{type:"text",className:"form-control",placeholder:"OrderId","aria-label":"orderId",name:"orderId",required:!0,value:i,onChange:e=>m(e.target.value),onBlur:()=>{0==i.length?E("Please Enter a order id"):E("")}}),R&&(0,v.jsx)("p",{className:"para",children:R})]}),(0,v.jsxs)("div",{className:"col-sm-6",children:[(0,v.jsx)("label",{children:"Payment ID"}),(0,v.jsx)("input",{type:"text",class:"form-control",placeholder:"PaymentId","aria-label":"paymentId",name:"paymentId",required:!0,value:d,onChange:e=>u(e.target.value),onBlur:()=>{0==d.length?T("Please Enter a payment id"):T("")}}),O&&(0,v.jsx)("p",{className:"para",children:O})]})]}),(0,v.jsxs)("div",{class:"row mt-1",children:[(0,v.jsxs)("div",{className:"col-sm-6",children:[(0,v.jsx)("label",{children:"Type Of Purchase"}),(0,v.jsx)("input",{type:"text",class:"form-control",placeholder:"Purchase","aria-label":"Purchase",name:"Purchase",required:!0,value:h,onChange:e=>p(e.target.value),onBlur:()=>{0==h.length?A("Please Enter a purchase"):A("")}}),B&&(0,v.jsx)("p",{className:"para",children:B})]}),(0,v.jsxs)("div",{className:"col-sm-6 mt-4",children:[(0,v.jsx)("input",{type:"radio",className:"",name:"payment_status",id:"payment_status_success",value:"Payment Successfull",checked:!0}),(0,v.jsx)("label",{className:"me-4 text-success",htmlFor:"payment_status_success",children:"Payment Success"}),(0,v.jsx)("input",{type:"radio",className:"",name:"payment_status",id:"payment_status_failure",value:"Payment Failed"}),(0,v.jsx)("label",{className:"text-danger",htmlFor:"payment_status_failure",children:"Payment Failure"})]})]}),(0,v.jsx)("div",{className:"row  d-grid justify-content-end mt-1 mr-5",children:(0,v.jsx)("div",{className:"col-sm-12",children:(0,v.jsx)("button",{type:"submit",className:"btn btn-success",disabled:_,children:_?"Loading...":"Submit"})})})]})})]})})};var _=s(186);const I=()=>{const[e,a]=(0,l.useState)({employer:!1,jobseeker:!1});return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"my-4",children:[(0,v.jsxs)("div",{className:"text-center",children:[(0,v.jsx)("div",{children:(0,v.jsx)("h4",{children:"Custom Payment"})}),(0,v.jsxs)("form",{className:"".concat(_.Z.chips_wrp),children:[(0,v.jsx)("input",{onChange:()=>{a("employer"=="employer"?e=>({...e,employer:!0,jobseeker:!1}):e=>({...e,employer:!1,jobseeker:!0}))},type:"radio",name:"payment_switch",id:"employer_form_switch"}),(0,v.jsx)("label",{htmlFor:"employer_form_switch",children:"Employer"})]})]}),(0,v.jsxs)("div",{children:[e.employer&&(0,v.jsx)(y,{}),e.jobseeker&&(0,v.jsx)(f,{})]})]})})}},186:(e,a,s)=>{s.d(a,{Z:()=>l});const l={cancel_btn:"common_cancel_btn__lIFK8",close_btn:"common_close_btn__jWROV",redDot:"common_redDot__K4DVN","form-group":"common_form-group__q6L++",error:"common_error__TcCqJ",chips_wrp:"common_chips_wrp__t4tLs","scrollbar-primary":"common_scrollbar-primary__CEgK7","force-overflow":"common_force-overflow__ojfAR",rotateIcon:"common_rotateIcon__Ck+f7",rotate:"common_rotate__mp7Rm",OR_container:"common_OR_container__FhYXa"}}}]);
//# sourceMappingURL=70.1e14de68.chunk.js.map