"use strict";(self.webpackChunkadmin_login_react=self.webpackChunkadmin_login_react||[]).push([[994],{7994:(e,a,s)=>{s.r(a),s.d(a,{default:()=>k});var t=s(2791),l=s(4819);const d="label";function o(e,a){"function"===typeof e?e(a):e&&(e.current=a)}function r(e,a){e.labels=a}function n(e,a){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d;const t=[];e.datasets=a.map((a=>{const l=e.datasets.find((e=>e[s]===a[s]));return l&&a.data&&!t.includes(l)?(t.push(l),Object.assign(l,a),l):{...a}}))}function i(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;const s={labels:[],datasets:[]};return r(s,e.labels),n(s,e.datasets,a),s}function b(e,a){const{height:s=150,width:d=300,redraw:b=!1,datasetIdKey:c,type:m,data:p,options:h,plugins:u=[],fallbackContent:g,updateMode:x,...v}=e,C=(0,t.useRef)(null),y=(0,t.useRef)(),f=()=>{C.current&&(y.current=new l.kL(C.current,{type:m,data:i(p,c),options:h&&{...h},plugins:u}),o(a,y.current))},j=()=>{o(a,null),y.current&&(y.current.destroy(),y.current=null)};return(0,t.useEffect)((()=>{!b&&y.current&&h&&function(e,a){const s=e.options;s&&a&&Object.assign(s,a)}(y.current,h)}),[b,h]),(0,t.useEffect)((()=>{!b&&y.current&&r(y.current.config.data,p.labels)}),[b,p.labels]),(0,t.useEffect)((()=>{!b&&y.current&&p.datasets&&n(y.current.config.data,p.datasets,c)}),[b,p.datasets]),(0,t.useEffect)((()=>{y.current&&(b?(j(),setTimeout(f)):y.current.update(x))}),[b,h,p.labels,p.datasets,x]),(0,t.useEffect)((()=>{y.current&&(j(),setTimeout(f))}),[m]),(0,t.useEffect)((()=>(f(),()=>j())),[]),t.createElement("canvas",Object.assign({ref:C,role:"img",height:s,width:d},v),g)}const c=(0,t.forwardRef)(b);function m(e,a){return l.kL.register(a),(0,t.forwardRef)(((a,s)=>t.createElement(c,Object.assign({},a,{ref:s,type:e}))))}const p=m("bar",l.vn);var h=s(1213),u=s(4554),g=s(8096),x=s(829),v=s(8406),C=s(4387),y=s(5019),f=s(630),j=s(184);l.kL.register(l.uw,l.f$,l.ZL,h.Z,l.Dx,l.u,l.De);const k=()=>{const[e,a]=(0,t.useState)("Employer"),[s,l]=(0,t.useState)("daily"),d={Incomplete:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},Registration:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},noOfPayment:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},planCanceled:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},noOfCalls:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},totalPayment:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},feedback:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},interviewScheduled:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},Ratings:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},TotalJobs:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},ActiveJobs:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},ClosedJobs:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},JobLead:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},Response:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}},JobRatings:{daily:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1,fontSize:"20px"}]},weekly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]},monthly:{labels:[],datasets:[{label:"",data:[],backgroundColor:"#169C50",borderWidth:1}]}}},[o,r]=(0,t.useState)(d);return(0,t.useEffect)((()=>{(0,y.EF)(s,e).then((e=>{const a=e.data.map((e=>e.Time)),t=e.data.map((e=>e.Incomplete_Registration)),l=e.data.map((e=>e.Registration)),d=e.data.map((e=>e.No_of_Payment)),o=e.data.map((e=>e.No_of_Plan_Cancelled)),n=e.data.map((e=>e["No_of_Calls "])),i=e.data.map((e=>e.Total_Amount)),b=e.data.map((e=>e.Feedback)),c=e.data.map((e=>e.No_of_Ratings)),m=e.data.map((e=>e.No_of_Interviews_Scheduled)),p=e.data.map((e=>e.Total_Job_Posted)),h=e.data.map((e=>e.No_of_Active_Jobs)),u=e.data.map((e=>e.No_of_Closed_Jobs)),g=e.data.map((e=>e.No_of_Job_Lead)),x=e.data.map((e=>e.No_of_Job_Can_Response)),v=e.data.map((e=>e.No_of_Job_Ratings));r((e=>({...e,Incomplete:{...e.Incomplete,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.Incomplete[s].datasets[0],data:[...t.slice().reverse()]}]}},Registration:{...e.Registration,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.Registration[s].datasets[0],data:[...l.slice().reverse()]}]}},noOfPayment:{...e.noOfPayment,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.noOfPayment[s].datasets[0],data:[...d.slice().reverse()]}]}},planCanceled:{...e.planCanceled,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.planCanceled[s].datasets[0],data:[...o.slice().reverse()]}]}},noOfCalls:{...e.noOfCalls,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.noOfCalls[s].datasets[0],data:[...n.slice().reverse()]}]}},totalPayment:{...e.totalPayment,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.totalPayment[s].datasets[0],data:[...i.slice().reverse()]}]}},feedback:{...e.feedback,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.feedback[s].datasets[0],data:[...b.slice().reverse()]}]}},interviewScheduled:{...e.interviewScheduled,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.interviewScheduled[s].datasets[0],data:[...m.slice().reverse()]}]}},Ratings:{...e.Ratings,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.Ratings[s].datasets[0],data:[...c.slice().reverse()]}]}},TotalJobs:{...e.TotalJobs,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.TotalJobs[s].datasets[0],data:[...p.slice().reverse()]}]}},ActiveJobs:{...e.ActiveJobs,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.ActiveJobs[s].datasets[0],data:[...h.slice().reverse()]}]}},ClosedJobs:{...e.ClosedJobs,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.ClosedJobs[s].datasets[0],data:[...u.slice().reverse()]}]}},JobLead:{...e.JobLead,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.JobLead[s].datasets[0],data:[...g.slice().reverse()]}]}},Response:{...e.Response,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.Response[s].datasets[0],data:[...x.slice().reverse()]}]}},JobRatings:{...e.JobRatings,[s]:{labels:[...a.slice().reverse()],datasets:[{...e.JobRatings[s].datasets[0],data:[...v.slice().reverse()]}]}}})))}))}),[s,e]),(0,t.useEffect)((()=>{console.log(e)}),[e]),(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{children:[(0,j.jsx)(f.Z,{}),(0,j.jsxs)("div",{className:"",children:[(0,j.jsxs)("div",{className:"container-fluid",children:[" ",(0,j.jsxs)("span",{className:"row mb-2 d-flex justify-content-end",children:[(0,j.jsx)("span",{className:"col-sm-3 ",children:(0,j.jsx)(u.Z,{sx:{minWidth:20},children:(0,j.jsxs)(g.Z,{fullWidth:!0,children:[(0,j.jsx)(x.Z,{id:"demo-simple-select-label",children:"Module"}),(0,j.jsxs)(v.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select module",onChange:e=>{var s;s=e,console.log(s.target.value),a(s.target.value)},value:e,children:[(0,j.jsx)(C.Z,{value:"Employer",children:"Employer"}),(0,j.jsx)(C.Z,{value:"Jobseeker",children:"Job seeker"}),(0,j.jsx)(C.Z,{value:"Jobs",children:"Jobs"})]})]})})}),(0,j.jsx)("div",{className:"col-sm-2",children:(0,j.jsx)(u.Z,{sx:{minWidth:120},children:(0,j.jsxs)(g.Z,{fullWidth:!0,children:[(0,j.jsx)(x.Z,{id:"demo-simple-select-label",children:"Time"}),(0,j.jsxs)(v.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Time",onChange:e=>{console.log("Duration changed:",e.target.value),l(e.target.value)},value:s,children:[(0,j.jsx)(C.Z,{value:"daily",children:"Daily"}),(0,j.jsx)(C.Z,{value:"weekly",children:"Weekly"}),(0,j.jsx)(C.Z,{value:"monthly",children:"Monthly"})]})]})})})]})]}),"Employer"===e&&(0,j.jsx)("div",{className:"card border-0 ",style:{height:"68vh",overflow:"hidden",padding:"1spx",borderRadius:"8px",boxShadow:"0px 0px 5px 1px rgba(157, 157, 157, 0.2)"},children:(0,j.jsx)("div",{className:"container-fluid",children:(0,j.jsx)("div",{style:{display:"inline"},children:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsxs)("div",{className:"row mt-5 ms-2 mb-5 me-2 d-flex ",children:[(0,j.jsx)("div",{className:"col-sm-6",children:(0,j.jsx)("div",{className:"me-2",style:{cursor:"pointer"},children:(0,j.jsx)(p,{options:{responsive:!0,plugins:{legend:{position:"none"},title:{display:!0,text:" Incomplete Registration",padding:{top:0,bottom:30},fontSize:16},datalabels:{anchor:"end",align:"end",display:e=>e.dataset.data[e.dataIndex]>0,formatter:e=>e>0?e:""}}},data:o.Incomplete[s]})})}),(0,j.jsx)("div",{className:"col-sm-6 ",children:(0,j.jsx)("div",{className:"me-2",style:{cursor:"pointer"},children:(0,j.jsx)(p,{options:{responsive:!0,plugins:{legend:{position:"none"},title:{display:!0,text:" Registration",padding:{top:0,bottom:30}},datalabels:{anchor:"end",align:"end",display:e=>e.dataset.data[e.dataIndex]>0,formatter:e=>e>0?e:""}}},data:o.Registration[s]})})})]}),(0,j.jsx)("br",{}),(0,j.jsx)("div",{className:"row mt-3 ms-2  mb-2 me-2"}),(0,j.jsx)("br",{}),(0,j.jsx)("div",{className:"row mt-3 mb-5 ms-2 me-2"})]})})})}),"Jobseeker"===e&&(0,j.jsx)("div",{className:"card border-0 ",style:{height:"68vh",overflow:"auto",borderRadius:"8px",boxShadow:"0px 5px 5px 5px rgba(0, 0, 0, 0.2)"},children:(0,j.jsx)("div",{className:"container-fluid",children:(0,j.jsx)("div",{style:{display:"inline"},children:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsxs)("div",{className:"row mt-5 ms-2 mb-5 me-2 d-flex ",children:[(0,j.jsx)("div",{className:"col-sm-4 ",children:(0,j.jsx)("div",{className:"me-2",style:{cursor:"pointer"},children:(0,j.jsx)(p,{options:{responsive:!0,plugins:{legend:{position:"none"},title:{display:!0,text:"Incomplete Registration",padding:{top:0,bottom:30}},datalabels:{anchor:"end",align:"end",display:e=>e.dataset.data[e.dataIndex]>0,formatter:e=>e>0?e:""}}},data:o.Incomplete[s]})})}),(0,j.jsx)("div",{className:"col-sm-4",children:(0,j.jsx)("div",{className:"me-2",style:{cursor:"pointer"},children:(0,j.jsx)(p,{options:{responsive:!0,plugins:{legend:{position:"none"},title:{display:!0,text:"Registration",padding:{top:0,bottom:30},fontSize:16},datalabels:{anchor:"end",align:"end",display:e=>e.dataset.data[e.dataIndex]>0,formatter:e=>e>0?e:""}}},data:o.Registration[s]})})}),(0,j.jsx)("div",{className:"col-sm-4",children:(0,j.jsx)("div",{className:"me-2",style:{cursor:"pointer"},children:(0,j.jsx)(p,{options:{responsive:!0,plugins:{legend:{position:"none"},title:{display:!0,text:" Interview Scheduled",padding:{top:0,bottom:30}},datalabels:{anchor:"end",align:"end",display:e=>e.dataset.data[e.dataIndex]>0,formatter:e=>e>0?e:""}}},data:o.interviewScheduled[s]})})})]}),(0,j.jsx)("br",{}),(0,j.jsx)("div",{className:"row mt-3 ms-2  mb-2 me-2"}),(0,j.jsx)("br",{}),(0,j.jsx)("div",{className:"row mt-3 mb-3 ms-2 me-2"})]})})})}),"Jobs"===e&&(0,j.jsx)("div",{className:"card border-0 ",style:{height:"68vh",overflow:"auto",borderRadius:"8px",boxShadow:"0px 5px 5px 5px rgba(0, 0, 0, 0.2)"},children:(0,j.jsx)("div",{className:"container-fluid",children:(0,j.jsx)("div",{style:{display:"inline"},children:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsxs)("div",{className:"row mt-5 ms-2 mb-5 me-2 d-flex ",children:[(0,j.jsx)("div",{className:"col-sm-4 ",children:(0,j.jsx)("div",{className:"me-2",style:{cursor:"pointer"},children:(0,j.jsx)(p,{options:{responsive:!0,plugins:{legend:{position:"none"},title:{display:!0,text:"Total Jobs",padding:{top:0,bottom:30}},datalabels:{anchor:"end",align:"end",display:e=>e.dataset.data[e.dataIndex]>0,formatter:e=>e>0?e:""}}},data:o.TotalJobs[s]})})}),(0,j.jsx)("div",{className:"col-sm-4",children:(0,j.jsx)("div",{className:"me-2",style:{cursor:"pointer"},children:(0,j.jsx)(p,{options:{responsive:!0,plugins:{legend:{position:"none"},title:{display:!0,text:"Active Jobs",padding:{top:0,bottom:30},fontSize:16},datalabels:{anchor:"end",align:"end",display:e=>e.dataset.data[e.dataIndex]>0,formatter:e=>e>0?e:""}}},data:o.ActiveJobs[s]})})}),(0,j.jsx)("div",{className:"col-sm-4",children:(0,j.jsx)("div",{className:"me-2",style:{cursor:"pointer"},children:(0,j.jsx)(p,{options:{responsive:!0,plugins:{legend:{position:"none"},title:{display:!0,text:"Closed Jobs",padding:{top:0,bottom:30}},datalabels:{anchor:"end",align:"end",display:e=>e.dataset.data[e.dataIndex]>0,formatter:e=>e>0?e:""}}},data:o.ClosedJobs[s]})})})]}),(0,j.jsx)("br",{}),(0,j.jsx)("div",{className:"row mt-3 ms-2  mb-2 me-2",children:(0,j.jsx)("div",{className:"col-sm-4 ",children:(0,j.jsx)("div",{className:"me-2",style:{cursor:"pointer"},children:(0,j.jsx)(p,{options:{responsive:!0,plugins:{legend:{position:"none"},title:{display:!0,text:"Job Lead ",padding:{top:0,bottom:30}},datalabels:{anchor:"end",align:"end",display:e=>e.dataset.data[e.dataIndex]>0,formatter:e=>e>0?e:""}}},data:o.JobLead[s]})})})}),(0,j.jsx)("br",{})]})})})})]})]})})}}}]);
//# sourceMappingURL=994.53abc6b8.chunk.js.map