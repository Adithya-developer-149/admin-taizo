"use strict";(self.webpackChunkadmin_login_react=self.webpackChunkadmin_login_react||[]).push([[66],{5066:(e,s,i)=>{i.d(s,{Z:()=>S});var l=i(2791),n=i(2742),a=i(751),d=i(1711),c=i(1381),t=i(6608),o=i(5019),r=i(4353),j=i(2105),h=i(3524),x=i(6355),m=i(2420),u=i(3757),v=i(6856),N=i(7050),p=i(5770),b=i(3006),g=i(7621),f=i(9504),y=i(2665),w=i(9434),C=i(4822),Z=i(4521),k=i(1338),H=i(184);const S=e=>{let{data:s,onClose:i,onAssignChange:S,textHeading:D}=e;const[I,_]=(0,l.useState)(!1),[F,Q]=(0,l.useState)({}),[L,T]=(0,l.useState)({canLeadId:"",qualified:!1,notQualified:!1});let q=1===(0,w.v9)((e=>e.adminDetails)).roleID;const[P,A]=(0,l.useState)(!1),[E,R]=(0,l.useState)(null),[W,O]=(0,l.useState)(1),[z,U]=(0,l.useState)(!1),[X,J]=(0,l.useState)(!1);console.log(s,"jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");const[$,G]=(0,l.useState)({metaLeadId:"",adminId:""}),[M,V]=(0,l.useState)({id:null,adminName:[]}),[B,K]=(0,l.useState)(!0);(0,l.useEffect)((()=>{const e=window.location.href;let s=e.includes("interview_schedule_list");console.log(e,"parameterrrs"),K(!s)}),[]);const Y=e=>{O(e)};(0,l.useRef)(),(0,l.useRef)();function ee(){L.canLeadId&&(A(!0),L.notes=E.notes,(0,o.$9)(L).then((()=>{U(!1),J(!1),(0,o.XD)().then((e=>{console.log(e),Q(e)})),A(!1)})))}(0,l.useEffect)((()=>{$.adminId&&$.metaLeadId&&(0,o.LU)($).then((e=>{if(200!==e.code)return alert("something went wrong"),!1;_(!0),setTimeout((()=>{_(!1)}),3e3),S()}))}),[$]),(0,l.useEffect)((()=>{(0,o.EP)().then((e=>{console.log(e,"All admin details");const s=e.map((e=>e.userName)),i=e.map((e=>e.id));console.log(s),console.log(i),V((e=>({...e,adminName:s,id:i})))}))}),[]);const se=e=>{const s="https://api.whatsapp.com/send?phone=".concat(e);window.open(s,"_blank")},[ie,le]=(0,l.useState)(!1),ne=(e,s)=>{navigator.clipboard.writeText(e,s).then((()=>{le(!0)}))};F.keySkill&&"string"===typeof F.keySkill&&F.keySkill.split(",");return(0,H.jsx)("div",{children:(0,H.jsx)(a.Ur,{children:(0,H.jsx)(c.Z,{topComponent:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)("div",{className:"".concat(t.Z.boxcross),children:(0,H.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,H.jsx)("div",{children:(0,H.jsx)("h4",{className:"text-light ms-3",children:D})}),(0,H.jsx)("div",{className:" ".concat(t.Z.CrossStyle," pe-5 pe-lg-4"),children:(0,H.jsx)("b",{children:(0,H.jsx)(n.$iT,{onClick:()=>{i()}})})})]})})}),childComponent:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{className:"".concat(t.Z.boxwidth),children:(0,H.jsxs)("div",{className:"container-fluid",children:[(0,H.jsxs)("div",{className:"row ".concat(t.Z.topcontainer),children:[(0,H.jsxs)("div",{className:"col-sm-4",children:[(0,H.jsxs)("div",{className:"row",children:[(0,H.jsxs)("div",{className:"col-sm-4",children:[" ",s.profilePic?(0,H.jsx)("img",{src:s.profilePic,alt:"Candidate Profile",width:70}):(0,H.jsx)("img",{src:r,alt:"Profile",width:100})]}),(0,H.jsxs)("div",{className:"col-sm-6",children:[(0,H.jsx)("div",{children:(0,H.jsxs)("b",{children:[s.candidateName," "]})}),(0,H.jsxs)("div",{children:[s.jobCategory?(0,H.jsx)(H.Fragment,{children:s.jobCategory}):(0,H.jsxs)(H.Fragment,{children:[" ","Fresher"]})," "]}),(0,H.jsx)("div",{children:(0,H.jsx)("div",{className:"",children:(0,H.jsx)("div",{className:"".concat(j.Z.StatusStyle),children:(0,H.jsx)("div",{children:(0,H.jsxs)(H.Fragment,{children:[!0===s.qualified&&(0,H.jsxs)("div",{className:"".concat(j.Z.Green_wrp),children:[(0,H.jsx)("input",{type:"radio",name:"status_".concat(s.id),checked:s.qualified,id:"qualified_".concat(s.id)}),(0,H.jsx)("label",{htmlFor:"qualified_".concat(s.id),children:"Qualified"})]}),!0===s.notQualified&&(0,H.jsxs)("div",{className:"".concat(j.Z.chips_wrp),children:[(0,H.jsx)("input",{type:"radio",checked:s.notQualified,name:"status_".concat(s.id),id:"notQualified_".concat(s.id)}),(0,H.jsx)("label",{htmlFor:"notQualified_".concat(s.id),children:"Not Qualified"})]})]})})})})})]})]}),(0,H.jsx)("div",{className:"row mt-1",children:(0,H.jsxs)("div",{className:"".concat(t.Z.Createdon),children:["Created on :"," ",(0,H.jsx)(a.H3,{dateValue:s.createdTime})]})})]}),(0,H.jsx)("div",{className:"col-sm-8",children:(0,H.jsxs)("div",{className:"row",children:[(0,H.jsx)("div",{className:"col-sm-4"}),(0,H.jsx)("div",{className:"col-sm-8 ",children:(0,H.jsx)("div",{className:"row ",children:(0,H.jsxs)("div",{className:"col-sm-12 ".concat(t.Z.flexContainer),children:[(0,H.jsx)("div",{className:"".concat(t.Z.LiaUserEditSolid),children:(0,H.jsx)("div",{className:"mb-1",onClick:()=>se(s.whatsappNumber),children:(0,H.jsx)(x.xpo,{})})}),(0,H.jsx)("div",{}),(0,H.jsxs)("div",{class:"btn-group",children:[(0,H.jsx)("button",{type:"button","data-bs-toggle":"dropdown","data-bs-display":"static","aria-expanded":"false",style:{border:"none"},className:"".concat(t.Z.ThreeOutline),children:(0,H.jsx)(h.ty6,{})}),(0,H.jsxs)("ul",{class:"dropdown-menu dropdown-menu-end dropdown-menu-lg-end",children:[(0,H.jsx)("li",{children:(0,H.jsx)("button",{class:"dropdown-item",type:"button",children:B&&s.id&&(0,H.jsx)(y.Z,{candidateId:s.id})})}),(0,H.jsx)("li",{children:(0,H.jsxs)("button",{class:"dropdown-item",type:"button",children:[(0,H.jsx)(v.fFs,{})," +91 ",s.mobileNumber," ",(0,H.jsx)(v.twx,{onClick:()=>ne(s.mobileNumber),className:"ms-5"})]})}),(0,H.jsx)("li",{children:(0,H.jsxs)("button",{class:"dropdown-item",type:"button",children:[(0,H.jsx)(x.xpo,{})," +91 ",s.whatsappNumber," ",(0,H.jsx)(v.twx,{onClick:()=>ne(s.whatsappNumber),className:"ms-5"})]})})]})]})]})})})]})})]}),(0,H.jsxs)("div",{className:"row mt-2 px-4 ",children:[(0,H.jsxs)("div",{className:"col-sm-4 pb-4 rounded ".concat(t.Z.personalDetails),children:[(0,H.jsxs)("div",{className:"mt-2",children:[" ",(0,H.jsx)("h6",{children:(0,H.jsx)("b",{children:"Personal Details"})}),(0,H.jsxs)("div",{className:"row ".concat(t.Z.CanDetailsRow),children:[(0,H.jsxs)("div",{className:"col-5",children:[(0,H.jsx)("div",{style:{lineHeight:"2"},children:"Name "}),(0,H.jsx)("div",{style:{lineHeight:"2"},children:"Mobile Number"}),(0,H.jsx)("div",{style:{lineHeight:"2"},children:"Whatsapp Number"})]}),(0,H.jsxs)("div",{className:"col-7",children:[(0,H.jsxs)("div",{style:{lineHeight:"2"},children:[" ",null!=s.candidateName?s.candidateName:"-"]}),(0,H.jsxs)("div",{className:"d-flex ",style:{lineHeight:"2"},children:[(0,H.jsxs)("div",{className:"me-3 ".concat(t.Z.numbersstyle),children:[(0,H.jsx)("img",{src:m,alt:"",width:15})," ",(0,H.jsxs)("span",{children:[s.mobileNumber.slice(-10)," "]}),(0,H.jsx)(v.twx,{onClick:()=>ne(s.mobileNumber)})]}),(0,H.jsx)("div",{className:"".concat(t.Z.Phonecall),children:(0,H.jsx)(v.fFs,{})})]}),(0,H.jsxs)("div",{className:"d-flex",style:{lineHeight:"2"},children:[(0,H.jsxs)("div",{className:"me-3 ".concat(t.Z.Whatsapnumbersstyle),children:[(0,H.jsx)("img",{src:u,alt:"",width:16}),(0,H.jsxs)("span",{children:[s.whatsappNumber.slice(-10)," "]}),(0,H.jsx)(v.twx,{onClick:()=>ne(s.whatsappNumber)})]}),(0,H.jsx)("div",{className:"".concat(t.Z.Phonecall),children:(0,H.jsx)(x.xpo,{onClick:()=>se(s.whatsappNumber)})})]})]})]})]}),(0,H.jsxs)("div",{className:"mt-2",children:[(0,H.jsx)("h6",{children:(0,H.jsx)("b",{children:"Education Details"})}),(0,H.jsxs)("div",{className:"row ".concat(t.Z.CanDetailsRow),children:[(0,H.jsxs)("div",{className:"col-5",children:[(0,H.jsxs)("div",{style:{lineHeight:"2"},children:[" ","Qualification"]}),(0,H.jsx)("div",{style:{lineHeight:"2"},children:"Degree/Specialization"})]}),(0,H.jsxs)("div",{className:"col-7",children:[" ",(0,H.jsxs)("div",{style:{lineHeight:"2"},children:[null!=s.educationQualification?s.educationQualification:"-"," "]}),(0,H.jsx)("div",{style:{lineHeight:"2"},children:null!=s.specification?s.specification:"-"})]})]})]}),(0,H.jsxs)("div",{className:"mt-2",children:[(0,H.jsx)("h6",{children:(0,H.jsx)("b",{children:"Work Details"})}),(0,H.jsxs)("div",{className:"row ".concat(t.Z.CanDetailsRow),children:[(0,H.jsxs)("div",{className:"col-5",children:[(0,H.jsx)("div",{style:{lineHeight:"2"},children:"Job Category "}),(0,H.jsx)("div",{style:{lineHeight:"2"},children:"Industry"}),(0,H.jsx)("div",{style:{lineHeight:"2"},children:"Experience"}),(0,H.jsx)("div",{style:{lineHeight:"2"},children:"Preferred Job City"})]}),(0,H.jsxs)("div",{className:"col-7",children:[(0,H.jsxs)("div",{style:{lineHeight:"2"},children:[null!=s.jobCategory?s.jobCategory:"-"," "]}),(0,H.jsx)("div",{style:{lineHeight:"2"},children:null!=s.industry?s.industry:"-"}),(0,H.jsx)("div",{style:{lineHeight:"2"},children:null!=s.experience?s.experience:"-"}),(0,H.jsx)("div",{style:{lineHeight:"2"},children:null!=s.preferredLocation?s.preferredLocation:"-"})]})]})]}),q&&(0,H.jsxs)("div",{className:"mt-2",children:[(0,H.jsx)("h6",{children:(0,H.jsx)("b",{children:"Admin Details"})}),(0,H.jsxs)("div",{className:"row ".concat(t.Z.CanDetailsRow),children:[(0,H.jsx)("div",{className:"col-5",children:(0,H.jsx)("div",{children:"Assigned To"})}),(0,H.jsx)("div",{className:"col-7",children:(0,H.jsx)("div",{children:(0,H.jsx)(p.Z,{id:"clear-on-escape",clearOnEscape:!0,onChange:(e,i)=>{if(i){const e=i;if(M&&M.adminName&&M.id&&M.adminName.indexOf&&M.id.indexOf){const i=M.adminName.indexOf(e);if(-1!==i&&void 0!==M.id[i]){const e=M.id[i];((e,s)=>{G((i=>({...i,adminId:s,metaLeadId:e})))})(s.id,e)}else console.error("Admin with name ".concat(e," not found."))}else console.error("Invalid adminDetails structure")}},value:M.adminName&&M.id&&M.adminName[M.id.indexOf(s.assignTo)],options:M.adminName,renderInput:e=>(0,H.jsx)(b.Z,{...e,label:"Assign to",variant:"standard"})})})})]})]})]}),(0,H.jsx)("div",{className:" col-sm-8 rounded  ".concat(t.Z.DailyDetailsupdate),children:(0,H.jsxs)("div",{children:[(0,H.jsxs)("div",{className:"tab-buttons ".concat(N.Z.tab_buttons),children:[(0,H.jsxs)("div",{className:"d-flex ".concat(N.Z.tab_hr),children:[(0,H.jsx)("div",{onClick:()=>Y(1),className:" ".concat(1===W?N.Z.activetag:N.Z.unactivetag," "),children:"TimeLine"}),(0,H.jsx)("div",{onClick:()=>Y(2),className:" ".concat(2===W?N.Z.activetag:N.Z.unactivetag),children:"Notes"})]}),(0,H.jsx)("hr",{style:{borderTop:"10px solid #ccc"}})]}),(0,H.jsxs)("div",{className:"tab-content ".concat(N.Z.tab_content),children:[s.id&&1===W&&(0,H.jsx)("p",{children:(0,H.jsx)(Z.Z,{facebookId:s.id})}),s.id&&2===W&&(0,H.jsx)("p",{children:(0,H.jsx)(g.Z,{style:{maxWidth:700,minWidth:350,margin:"0 auto"},children:(0,H.jsx)(f.Z,{children:(0,H.jsx)(k.Z,{facebookId:s.id})})})})]})]})})]})]})}),X&&(0,H.jsx)(a.Xf,{children:(0,H.jsx)(d.Z,{zIndex:1005,childComponent:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)("div",{children:[(0,H.jsx)("div",{className:"text-center mb-3",children:"Qualify Candidate"}),(0,H.jsx)(b.Z,{id:"outlined-multiline-flexible",label:"Add Notes",multiline:!0,required:!0,onChange:e=>{R((s=>({...s,notes:e.target.value})))},maxRows:4,fullWidth:!0})]}),(0,H.jsxs)("div",{className:"d-flex justify-content-end gap-1 mt-4",children:[(0,H.jsx)("button",{className:"btn text-white me-3",onClick:()=>{console.log("Cancel button clicked"),J(!1),A(!1)},style:{backgroundColor:"#d00a0a"},children:"Cancel"}),(0,H.jsx)("button",{type:"submit",className:"btn text-white",onClick:ee,disabled:P,style:{backgroundColor:"#169C50"},children:"Qualify"})]})]})})}),z&&(0,H.jsx)(a.Xf,{children:(0,H.jsx)(d.Z,{zIndex:1005,childComponent:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)("div",{children:[(0,H.jsx)("div",{className:"text-center mb-3",children:"Disqualify Candidate"}),(0,H.jsx)(b.Z,{id:"outlined-multiline-flexible",label:"Add Notes",multiline:!0,required:!0,onChange:e=>{R((s=>({...s,notes:e.target.value})))},maxRows:4,fullWidth:!0})]}),(0,H.jsxs)("div",{className:"d-flex justify-content-end gap-1 mt-4",children:[(0,H.jsx)("button",{className:"btn text-white me-3",onClick:()=>{console.log("Cancel button clicked"),U(!1),A(!1)},style:{backgroundColor:"#d00a0a"},children:"Cancel"}),(0,H.jsx)("button",{type:"submit",className:"btn text-white",onClick:ee,disabled:P,style:{backgroundColor:"#169C50"},children:"Disqualify"})]})]})})}),I&&(0,H.jsx)(a.Xf,{children:(0,H.jsx)(d.Z,{zIndex:2e3,childComponent:(0,H.jsx)(C.Z,{HeadText:"Successfully Updated"})})})]})})})})}}}]);
//# sourceMappingURL=66.0e4d8302.chunk.js.map