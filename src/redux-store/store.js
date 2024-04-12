/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import {
  DDMMYYYY_formate,
  convertDateYYYYMMDD,
  subDaysToDate,
} from "../utility";
// import { useSelector } from "react-redux";

// const adminDetailsRole = useSelector((state) => state.adminDetails);
// let isSuperAdmin = adminDetailsRole.roleID == 1;
const jobLinkSlice = createSlice({
  // to create and set joblink
  name: "jobLink",
  initialState: {
    jobLink: "",
  },
  reducers: {
    SetJobLink(state, actions) {
      state.jobLink = actions.payload;
      // console.log(state.jobLink);
    },
    setInitial(state) {
      state.jobLink = "";
      // console.log(state.jobLink);
    },
  },
});

const navBarSlice = createSlice({
  // to show hide nav bars
  name: "navBar",
  initialState: {
    showSidebar: false,
  },
  reducers: {
    showSideBar(state, actions) {
      state.showSidebar = actions.payload;
    },
  },
});

const counterSlice = createSlice({
  // just a sample one
  name: "counterReducer",
  initialState: { count: 0 },
  reducers: {
    Increase(state, actions) {
      state.count = state.count + actions.payload;
    },
    Decrease(state) {
      state.count = state.count - 1;
    },
    Reset(state) {
      state.count = 0;
    },
  },
});

const RolesAndAccessSlice = createSlice({
  name: "RolesAndAccess",
  initialState: {
    roleName: "",
    accessNames: [],
  },

  reducers: {
    setRoleAndAccess(state, action) {
      state.roleName = action.payload.roleName;
      state.accessNames = action.payload.accessNames;
    },
  },
});

const showHideDetailsSlice = createSlice({
  name: "showHideDetails",
  initialState: {
    exotel: {
      callDetails: { show: true },
    },
    candidateLead: {
      leadTimeLine: {
        show: false,
        canLeadId: "",
        facebookId: "",
        candidate: "",
        midSeniorCanId: "",
        midSeniorSorcingId: "",
      },
      // FBleadTimeLine: {
      //   show: false,
      //   facebookId: "",
      // },
      leadDetails: {
        show: false,
      },
      addNotes: {
        show: false,
      },
    },
  },
  reducers: {
    setExotelCallDetails(state, action) {
      state.exotel.callDetails.show = action.payload;
    },
    setCandidateLeadDetails(state, action) {
      if (action.payload.showTimeLine !== undefined) {
        state.candidateLead.leadTimeLine.show = action.payload.showTimeLine;
      }
      if (action.payload.leadDetails !== undefined) {
        state.candidateLead.leadDetails.show = action.payload.leadDetails;
      }
      if (action.payload.addNotes !== undefined) {
        state.candidateLead.addNotes.show = action.payload.addNotes;
      }
      if (action.payload.canLeadId !== undefined) {
        state.candidateLead.leadTimeLine.canLeadId = action.payload.canLeadId;
      }
      if (action.payload.facebookId !== undefined) {
        state.candidateLead.leadTimeLine.facebookId = action.payload.facebookId;
      }
      if (action.payload.midSeniorCan !== undefined) {
        state.candidateLead.leadTimeLine.midSeniorCan =
          action.payload.midSeniorCan;
      }
    },
  },
});

const unseenDataCountSlice = createSlice({
  name: "unseenDataCount",
  initialState: {
    candidate: {
      metalead: "",
      lead: "",
      registered: "",
    },
  },
  reducers: {
    updateSeenStatusCandidate(state, action) {
      state.candidate[action.payload.type] = action.payload.value;
    },
  },
});
const CandidateRegisteredSlice = createSlice({
  name: "RegisterCandidateList",
  initialState: {
    RegisterCandidateList: [],
    filterData: {
      adminId: localStorage.getItem("adminID"),
      mobileNumber: "",
      gender: "Both",
      industry: [],
      jobCategory: [],
      eligibility: null,
      qualification: [],
      candidateType: null,
      specification: [],
      skills: [],
      prefLocation: [],
      passed_out_year: -1,
      experience: -1,
      maxExperience: -1,
      pages: 1,
      size: 10,
      createdTime: "2020-01-01",
      endDate: convertDateYYYYMMDD(new Date()),
      dateFilterType: "",
    },
  },

  reducers: {
    setRegisterCandidateList(state, action) {
      state.RegisterCandidateList = action.payload;
    },
    setRegisterCandidateListFilter(state, action) {
      state.filterData = action.payload;
    },

    setRegisterCandidateListFilterAdminId(state, action) {
      state.filterData.adminId = action.payload;
    },

    setRegisterCandidateListFilterPage(state, action) {
      state.filterData.pages = action.payload;
    },
    setRegisterCandidateListFiltersize(state, action) {
      state.filterData.size = action.payload;
    },
    setRegisterCandidateListFilterstart(state, action) {
      state.filterData.createdTime = action.payload;
    },
    setRegisterCandidateListFilterEnd(state, action) {
      state.filterData.endDate = action.payload;
    },
  },
});

const CandidateRecruitmentLeads = createSlice({
  name: "CandidateRecruitmentLeads",
  initialState: {
    RegisterCandidateList: [],
    RecruitmentfilterData: {
      adminId: localStorage.getItem("adminID"),
      mobileNumber: "",
      gender: "Both",
      industry: [],
      jobCategory: [],
      eligibility: null,
      qualification: [],
      candidateType: null,
      specification: [],
      skills: [],
      prefLocation: [],
      passed_out_year: -1,
      experience: -1,
      maxExperience: -1,
      pages: 1,
      size: 10,
      createdTime: "2020-01-01",
      endDate: convertDateYYYYMMDD(new Date()),
      dateFilterType: "",
    },
  },

  reducers: {
    setRegisterCandidateList(state, action) {
      state.RegisterCandidateList = action.payload;
    },
    setRegisterCandidateListFilter(state, action) {
      state.RecruitmentfilterData = action.payload;
    },

    setRegisterCandidateListFilterAdminId(state, action) {
      state.RecruitmentfilterData.adminId = action.payload;
    },

    setRegisterCandidateListFilterPage(state, action) {
      state.RecruitmentfilterData.pages = action.payload;
    },
    setRegisterCandidateListFiltersize(state, action) {
      state.RecruitmentfilterData.size = action.payload;
    },
    setRegisterCandidateListFilterstart(state, action) {
      state.RecruitmentfilterData.createdTime = action.payload;
    },
    setRegisterCandidateListFilterEnd(state, action) {
      state.RecruitmentfilterData.endDate = action.payload;
    },
  },
});

const JobsDetailsSlice = createSlice({
  name: "JobsListDetails",
  initialState: {
    JobsList: [],
    JobsData: {
      assignTo: localStorage.getItem("adminID"),
      priority: null,
      companyName: "",
      area: [],
      benefits: [],
      gender: null,
      industry: [],
      jobCategory: [],
      jobExp: -1,
      jobMaxExp: -1,
      employerId: -1,
      jobLocation: [],
      keyskills: [],
      qualification: [],
      // employerId: -1,
      salary: -1,
      maxSalary: -1,
      pages: 1,
      size: 10,
      createdTime: "2021-01-01",
      endDate: convertDateYYYYMMDD(new Date()),
      dateFilterType: "",
    },
    refreshRedDot: false,
  },

  reducers: {
    setJobList(state, action) {
      state.JobsList = action.payload;
    },
    setJobsData(state, action) {
      state.JobsData = action.payload;
    },
    setJobsRedDot(state, action) {
      state.refreshRedDot = action.payload;
    },
    setJobsDataPage(state, action) {
      state.JobsData.pages = action.payload;
    },

    setJobsDatasize(state, action) {
      state.JobsData.size = action.payload;
    },
    setJobsDatastart(state, action) {
      state.JobsData.createdTime = action.payload;
    },
    setJobsDataEnd(state, action) {
      state.JobsData.endDate = action.payload;
    },
  },
});
const CandidateLeadSlice = createSlice({
  name: "CandidateLeadList",
  initialState: {
    CandidateLeadList: {},
    CandidateLeadFilter: {
      adminId: localStorage.getItem("adminID"),
      profilePageNo: null,
      mobileNumber: "",
      fromSource: null,
      jobCategory: null,
      status: null,
      expYears: 0,
      maxExperience: 0,
      page: 1,
      size: 10,
      createdTime: null,
      endDate: null,
      dateFilterType: "",
    },
    refreshRedDot: false,
  },
  reducers: {
    setCandidateLeadList(state, action) {
      state.CandidateLeadList = action.payload;
    },
    setCandidateLeadFilter(state, action) {
      state.CandidateLeadFilter = action.payload;
    },
    setCandidateLeadFilterRedDot(state, action) {
      state.refreshRedDot = action.payload;
    },
    setCandidateLeadFilterAdminId(state, action) {
      state.CandidateLeadFilter.adminId = action.payload;
    },

    setCandidateLeadFilterPage(state, action) {
      state.CandidateLeadFilter.page = action.payload;
    },
    setCandidateLeadFilterSize(state, action) {
      state.CandidateLeadFilter.size = action.payload;
    },
    setCandidateLeadFilterStartTime(state, action) {
      state.CandidateLeadFilter.createdTime = action.payload;
    },
    setCandidateLeadFilterEndTime(state, action) {
      state.CandidateLeadFilter.endDate = action.payload;
    },
  },
});
const interviewListSlice = createSlice({
  name: "interviewList",
  initialState: {
    interviewList: {},
    interviewFilter: {
      adminId: localStorage.getItem("adminID"),
      jobId: null,
      contactNumber: null,
      candidateMobileNumber: null,
      companyName: null,
      interviewDate: "",
      interviewEndDate: "",
      jobCategory: null,
      city: null,
      area: null,
      scheduledBy: localStorage.getItem("adminID"),
      interviewStatus: -1,
      page: 1,
      size: 10,
      createdTime: "",
      endDate: "",
      dateFilterType: "",
    },
    refreshRedDot: false,
  },
  reducers: {
    setInterviewList(state, action) {
      state.interviewList = action.payload;
    },
    setInterviewFilter(state, action) {
      state.interviewFilter = action.payload;
    },
    setInterviewFilterRedDot(state, action) {
      state.refreshRedDot = action.payload;
    },
    setInterviewFilterShceduleBy(state, action) {
      state.interviewFilter.scheduledBy = action.payload;
    },

    setInterviewFilterPage(state, action) {
      state.interviewFilter.page = action.payload;
    },
    setInterviewFilterSize(state, action) {
      state.interviewFilter.size = action.payload;
    },
    setInterviewFilterJobcategory(state, action) {
      state.interviewFilter.jobCategory = action.payload;
    },
    setInterviewFilterCreatedTime(state, action) {
      state.interviewFilter.createdTime = action.payload;
    },
    setInterviewFilterEndDate(state, action) {
      state.interviewFilter.endDate = action.payload;
    },
    setInterviewStartTime(state, action) {
      state.interviewFilter.interviewDate = action.payload;
    },
    setInterviewEndDate(state, action) {
      state.interviewFilter.interviewEndDate = action.payload;
    },
  },
});
const CandidateFunnelSlice = createSlice({
  name: "CandidateFunnel",
  initialState: {
    CandidateFunnelFilter: {
      adminId: localStorage.getItem("adminID"),
      startDate: new Date().toISOString().split("T")[0],
      endDate: new Date().toISOString().split("T")[0],
      dateFilterType: "Today",
      stage: 0,
      adminName: "",
    },
  },
  reducers: {
    setCandidateFunnelFilter(state, action) {
      state.CandidateFunnelFilter = action.payload;
    },
    setAdminIDName(state, action) {
      state.CandidateFunnelFilter.adminName = action.payload;
    },
    setCandidateFunnelFilterCreatedTime(state, action) {
      state.CandidateFunnelFilter.startDate = action.payload;
    },
    setCandidateFunnelFilterEndDate(state, action) {
      state.CandidateFunnelFilter.endDate = action.payload;
    },
    setCandidateFunnelFilterstage(state, action) {
      state.CandidateFunnelFilter.stage = action.payload;
    },
  },
});

const CandidateDailyTaskSlice = createSlice({
  name: "CandidateDailyTask",
  initialState: {
    CandidateNewTaskFilter: {
      adminId: localStorage.getItem("adminID"),
      startDate: new Date().toISOString().split("T")[0],
      endDate: new Date().toISOString().split("T")[0],
      currentStatus: "New Task",
      page: 0,
      followUpType: "",
    },
    CandidatePendingTaskFilter: {
      adminId: localStorage.getItem("adminID"),
      startDate: "2024-01-01",
      endDate: subDaysToDate(1),
      currentStatus: "New Task",
      page: 0,
      followUpType: "",
    },
    CandidateCompletedTaskFilter: {
      adminId: localStorage.getItem("adminID"),
      startDate: "2024-01-01",
      endDate: new Date().toISOString().split("T")[0],
      currentStatus: "Completed Task",
      page: 0,
      followUpType: "",
    },
    selectedFilter: "CandidateCompletedTaskFilter",
  },
  reducers: {
    setCandidateDailyTaskFilter(state, action) {
      state[action.payload.filterType] = action.payload.data;
    },
    setCandidateDailyTaskFilterCreatedTime(state, action) {
      state[action.payload.filterType].startDate = action.payload.data;
    },
    setCandidateDailyTaskFilterEndDate(state, action) {
      state[action.payload.filterType].endDate = action.payload.data;
    },
    setSelectedFilter(state, action) {
      state.selectedFilter = action.payload;
    },
    setPageChange(state, action) {
      state[action.payload.filterType].page = action.payload.data;
    },
  },
});
const CandidateJoinedListSlice = createSlice({
  name: "CandidateJoinedList",
  initialState: {
    CandidateJoinedList: {},
    CandidateJoinedFilter: {
      adminId: localStorage.getItem("adminID"),
      page: 1,
      size: 10,
      companyName: null,
      contactNumber: 0,
      createdTime: "",
      endDate: "",
      joinedOn: null,
      joinedEnd: null,
      dateFilterType: "",
    },
    selectedCandidates: [],

    refreshRedDot: false,
  },
  reducers: {
    setJoinedList(state, action) {
      state.JoinedList = action.payload;
    },
    setJoinedFilter(state, action) {
      state.CandidateJoinedFilter = action.payload;
    },
    setJoinedFilterAdminId(state, action) {
      state.CandidateJoinedFilter.adminId = action.payload;
    },
    setJoinedFilterRedDot(state, action) {
      state.refreshRedDot = action.payload;
    },
    setJoinedFilterPage(state, action) {
      state.CandidateJoinedFilter.page = action.payload;
    },
    setJoinedFilterSize(state, action) {
      state.CandidateJoinedFilter.size = action.payload;
    },
    setJoinedFilterCreatedTime(state, action) {
      state.CandidateJoinedFilter.createdTime = action.payload;
    },
    setJoinedFilterEndDate(state, action) {
      state.CandidateJoinedFilter.endDate = action.payload;
    },
    setJoinedFilterjoinedOn(state, action) {
      state.CandidateJoinedFilter.joinedOn = action.payload;
    },
    setJoinedFilterjoinedEnd(state, action) {
      state.CandidateJoinedFilter.joinedEnd = action.payload;
    },
    setSlectedCandidatesEmpty(state, action) {
      state.selectedCandidates = [];
    },
    toggleCandidateSelection(state, action) {
      const candidateId = action.payload?.id;
      if (!candidateId) return state;

      const isSelected = state.selectedCandidates.some(
        (candidate) => candidate.id === candidateId
      );

      if (isSelected) {
        state.selectedCandidates = state.selectedCandidates.filter(
          (candidate) => candidate.id !== candidateId
        );
      } else {
        const isAlreadySelected = state.selectedCandidates.some(
          (candidate) => candidate.id === action.payload.id
        );

        if (!isAlreadySelected) {
          state.selectedCandidates.push({
            id: action.payload.id,
            candidateName: `${action.payload.firstName} ${
              action.payload.lastName != null ? action.payload.lastName : ""
            }`,
          });
        }
      }
    },
  },
});

const FBmetaLeadsSlice = createSlice({
  name: "FBmetaList",
  initialState: {
    FBmetaList: [],
    FBmetaListFilter: {
      adminId: localStorage.getItem("adminID"),
      candidateName: null,
      mobileNumber: null,
      educationQualification: null,
      jobCategory: null,
      experience: null,
      whatsappNumber: null,
      preferredLocation: null,
      joiningAvailability: null,
      pages: 1,
      size: 10,
      createdTime: "",
      endDate: "",
      dateFilterType: "",

      notQualified: false,
      notAttend: false,
      noStatus: false,
      followUp: false,
    },
    refreshRedDot: false,
  },
  reducers: {
    setFBmetaList(state, action) {
      state.FBmetaList = action.payload;
    },
    setFBmetaListFilter(state, action) {
      state.FBmetaListFilter = action.payload;
    },

    setFBmetaListFilterAdminId(state, action) {
      state.FBmetaListFilter.adminId = action.payload;
    },
    setFBmetaListFilterRedDot(state, action) {
      state.refreshRedDot = action.payload;
    },

    setFBmetaListFilterPage(state, action) {
      state.FBmetaListFilter.pages = action.payload;
    },
    setFBmetaListFilterSize(state, action) {
      state.FBmetaListFilter.size = action.payload;
    },
    setFBmetaListFilterCreatedTime(state, action) {
      state.FBmetaListFilter.createdTime = action.payload;
    },
    setFBmetaListFilterEndDate(state, action) {
      state.FBmetaListFilter.endDate = action.payload;
    },
    setFBmetaListFilterJobCategory(state, action) {
      state.FBmetaListFilter.jobCategory = action.payload;
    },
  },
});

const JobLeadsSlice = createSlice({
  name: "JobLeadlist",
  initialState: {
    JobleadList: {
      // adminId: localStorage.getItem("adminID"),
      employerId: "",
      // candidateName: null,
      // mobileNumber: null,
      // educationQualification: null,
      // jobCategory: null,
      // noOfOpenings: null,
      // experience: null,
      // whatsappNumber: null,
      // preferredLocation: null,
      // joiningAvailability: null,
      page: 0,
      size: 10,
      // createdTime: "",
      // endDate: "",
    },
  },

  reducers: {
    setJobleadList(state, action) {
      state.JobleadList = action.payload;
    },
    // setFBmetaListFilter(state, action) {
    //   state.FBmetaListFilter = action.payload;
    // },

    // setFBmetaListFilterAdminId(state, action) {
    //   state.FBmetaListFilter.adminId = action.payload;
    // },

    setJobleadListEmployerId(state, action) {
      state.JobleadList.employerId = action.payload;
    },
    setJobleadListPage(state, action) {
      state.JobleadList.page = action.payload;
    },
    setJobleadListSize(state, action) {
      state.JobleadList.size = action.payload;
    },
    // setJobleadListCreatedTime(state, action) {
    //   state.JobleadList.createdTime = action.payload;
    // },
    // setJobleadListEndDate(state, action) {
    //   state.JobleadList.endDate = action.payload;
    // },
    // setJobleadListJobCategory(state, action) {
    //   state.JobleadList.jobCategory = action.payload;
    // },
  },
});

const CandidateMidLevelSlice = createSlice({
  name: "CandidateMidLevelDetails",
  initialState: {
    CandidateMidLevelList: [],
    CandidateMidLevelFilter: {
      educationQualification: "",
      jobCategory: "",
      experienceInManufacturing: "",
      preferredJobLocation: "",
      mobileNumber: "",
      joiningDate: "",
      currentlyWorking: "",
      maxExperience: 0,
      minExperience: 0,
      status: 0,
      page: 0,
      pageSize: 10,
      createdTimeEnd: "",
      createdTimeStart: "",
      dateFilterType: "",
    },
    CandidateSendtoEmployer: {
      id: "",
      candidateName: "",
      jobCatagory: "",
    },
    selectedCandidates: [],
    enteredJobCategory: "",
    refreshRedDot: false,
  },
  reducers: {
    setCandidateMidLevelList(state, action) {
      state.CandidateMidLevelList = action.payload;
    },
    setCandidateMidLevelFilter(state, action) {
      state.CandidateMidLevelFilter = action.payload;
    },
    setCandidateMidLevelRedDot(state, action) {
      state.refreshRedDot = action.payload;
    },
    setCandidateMidLevelFiltermobileNumber(state, action) {
      state.CandidateMidLevelFilter.mobileNumber = action.payload;
    },
    setCandidateMidLevelFilterPage(state, action) {
      state.CandidateMidLevelFilter.page = action.payload;
    },
    setCandidateMidLevelFilterSize(state, action) {
      state.CandidateMidLevelFilter.pageSize = action.payload;
    },
    setCandidateMidLevelFilterCreateTime(state, action) {
      state.CandidateMidLevelFilter.createdTimeStart = action.payload;
    },
    setCandidateMidLevelFilterEndTime(state, action) {
      state.CandidateMidLevelFilter.createdTimeEnd = action.payload;
    },
    setCandidateCandidateSendtoEmployer(state, action) {
      state.CandidateSendtoEmployer = action.payload;
    },
    setSlectedCandidatesEmpty(state, action) {
      state.selectedCandidates = [];
    },
    setEnteredJobCategory(state, action) {
      // eslint-disable-next-line array-callback-return
      state.selectedCandidates.map((el, index) => {
        if (el.id === action.payload.candidateId) {
          state.selectedCandidates[index].jobCatagory =
            action.payload.enteredJobCategory;
        }
      });
    },
    toggleCandidateSelection(state, action) {
      const candidateId = action.payload?.id;
      if (!candidateId) return state;

      const isSelected = state.selectedCandidates.some(
        (candidate) => candidate.id === candidateId
      );

      if (isSelected) {
        // Deselect candidate
        state.selectedCandidates = state.selectedCandidates.filter(
          (candidate) => candidate.id !== candidateId
        );
      } else {
        // Check if the candidate is already in the selectedCandidates array
        const isAlreadySelected = state.selectedCandidates.some(
          (candidate) => candidate.id === action.payload.id
        );

        if (!isAlreadySelected) {
          // Select candidate and add to the array
          state.selectedCandidates.push({
            id: action.payload.id,
            candidateName: `${action.payload.firstName} ${
              action.payload.lastName != null ? action.payload.lastName : ""
            }`,
            jobCatagory: state.enteredJobCategory,
          });
        }
      }
    },
    // toggleCandidateSelection(state, action) {
    //   const { id, enteredJobCategory } = action.payload ?? {};
    //   if (!id) return state;

    //   const isSelected = state.selectedCandidates.some(
    //     (candidate) => candidate.id === id
    //   );

    //   if (isSelected) {
    //     // Deselect candidate
    //     state.selectedCandidates = state.selectedCandidates.filter(
    //       (candidate) => candidate.id !== id
    //     );
    //   } else {
    //     // Check if the candidate is already in the selectedCandidates array
    //     const isAlreadySelected = state.selectedCandidates.some(
    //       (candidate) => candidate.id === id
    //     );

    //     if (!isAlreadySelected) {
    //       // Select candidate and add to the array
    //       state.selectedCandidates.push({
    //         id,
    //         Candidatename: `${action.payload.firstName} ${action.payload.lastName}`,
    //         jobCategory: enteredJobCategory,
    //       });
    //     }
    //   }
    // },
  },
});

const CandidateMidLevelsourcingSlice = createSlice({
  name: "CandidateMidLevelsourcing",
  initialState: {
    CandidateMidLevelsourcingList: [],
    CandidateMidLevelsourcingFilter: {
      firstName: "",
      lastName: "",
      adminId: "",
      emailId: "",
      mobileNumber: "",
      appliedJobrole: "",
      jobrole: "",
      currentLocation: "",
      preferredJobLocation: "",
      qualified: false,
      notQualified: false,
      page: 0,
      pageSize: 10,
      createdTimeEnd: "",
      createdTimeStart: "",
      dateFilterType: "",
    },
    refreshRedDot: false,
  },
  reducers: {
    setCandidateMidLevelsourcingList(state, action) {
      state.CandidateMidLevelsourcingList = action.payload;
    },
    setCandidateMidLevelsourcingFilter(state, action) {
      state.CandidateMidLevelsourcingFilter = action.payload;
    },
    setCandidateMidLevelsourcingRedDot(state, action) {
      state.refreshRedDot = action.payload;
    },
    setCandidateMidLevelsourcingFilterAdmin(state, action) {
      state.CandidateMidLevelsourcingFilter.adminId = action.payload;
    },
    setCandidateMidLevelsourcingFiltermobileNumber(state, action) {
      state.CandidateMidLevelsourcingFilter.mobileNumber = action.payload;
    },
    setCandidateMidLevelsourcingFilterPage(state, action) {
      state.CandidateMidLevelsourcingFilter.page = action.payload;
    },
    setCandidateMidLevelsourcingFilterSize(state, action) {
      state.CandidateMidLevelsourcingFilter.pageSize = action.payload;
    },
    setCandidateMidLevelsourcingFilterCreateTime(state, action) {
      state.CandidateMidLevelsourcingFilter.createdTimeStart = action.payload;
    },
    setCandidateMidLevelsourcingFilterEndTime(state, action) {
      state.CandidateMidLevelsourcingFilter.createdTimeEnd = action.payload;
    },
  },
});
const FieldEmpLeadsSlice = createSlice({
  name: "FieldEmpLeadList",
  initialState: {
    FieldEmpLead: {},
    FieldEmpLeadFilter: {
      companyName: null,
      area: null,
      city: null,
      createdTime: null,
      endDate: null,
      pages: 1,
      size: 10,
    },
  },
  reducers: {
    setFieldEmpLeadFilter(state, action) {
      state.FieldEmpLeadFilter = action.payload;
    },
    setFieldEmpLeadFilterPage(state, action) {
      state.FieldEmpLeadFilter.pages = action.payload;
    },
    setFieldEmpLeadFilterSize(state, action) {
      state.FieldEmpLeadFilter.size = action.payload;
    },
  },
});

const EmployerLeadSlice = createSlice({
  name: "EmployerLeadDetails",
  initialState: {
    EmployerLeadList: [],
    EmployerLeadFilter: {
      page: 0,
      size: 10,
      mobile_number: "",
      email_id: "",
      city: "",
      industry: "",
      company_name: "",
      createdTimeStart: "",
      createdTimeEnd: "",
      dateFilterType: "",
    },
    refreshRedDot: false,
  },
  reducers: {
    setEmployerLeadList(state, action) {
      state.EmployerLeadList = action.payload;
    },
    setEmployerLeadFilter(state, action) {
      state.EmployerLeadFilter = action.payload;
    },
    setEmployerLeadRedDot(state, action) {
      state.refreshRedDot = action.payload;
    },
    setEmployerLeadFilterPage(state, action) {
      state.EmployerLeadFilter.page = action.payload;
    },
    setEmployerLeadFilterSize(state, action) {
      state.EmployerLeadFilter.size = action.payload;
    },
    setEmployerLeadFilterStart(state, action) {
      state.EmployerLeadFilter.createdTimeStart = action.payload;
    },
    setEmployerLeadFilterEnd(state, action) {
      state.EmployerLeadFilter.createdTimeEnd = action.payload;
    },
  },
});
const EmployerRegisterSlice = createSlice({
  name: "EmployerRegisterDetails",
  initialState: {
    EmployerRegisterList: [],
    EmployerRegisterFilter: {
      companyName: "",
      contactNumber: "",
      industry: "",
      city: "",
      area: "",
      page: 1,
      size: 10,
      createdTime: "",
      endDate: "",
      dateFilterType: "",
    },
    refreshRedDot: false,
  },
  reducers: {
    setEmployerRegisterList(state, action) {
      state.EmployerRegisterList = action.payload;
    },
    setEmployerRegisterFilter(state, action) {
      state.EmployerRegisterFilter = action.payload;
    },
    setEmployerRegisterRedDot(state, action) {
      state.refreshRedDot = action.payload;
    },
    setEmployerRegisterFilterPage(state, action) {
      state.EmployerRegisterFilter.page = action.payload;
    },
    setEmployerRegisterFilterSize(state, action) {
      state.EmployerRegisterFilter.size = action.payload;
    },
    setEmployerRegisterFilterCreateTime(state, action) {
      state.EmployerRegisterFilter.createdTime = action.payload;
    },
    setEmployerRegisterFilterEndTime(state, action) {
      state.EmployerRegisterFilter.endDate = action.payload;
    },
  },
});
const EmployerEnquirySlice = createSlice({
  name: "EmployerEnquiryDetails",
  initialState: {
    EmployerEnquiryList: [],
    EmployerEnquiryFilter: {
      emailId: "",
      companyName: "",
      mobileNumber: "",
      page: 1,
      size: 10,
      dateFilterType: "",
    },
  },
  reducers: {
    setEmployerEnquiryList(state, action) {
      state.EmployerEnquiryList = action.payload;
    },
    setEmployerEnquiryFilter(state, action) {
      state.EmployerEnquiryFilter = action.payload;
    },
    setEmployerEnquiryFilterPage(state, action) {
      state.EmployerEnquiryFilter.page = action.payload;
    },
    setEmployerEnquiryFilterSize(state, action) {
      state.EmployerEnquiryFilter.size = action.payload;
    },
  },
});
const notiDetailsSlice = createSlice({
  // to show hide and set notification details
  name: "notificationDetails",
  initialState: {
    showNotiDetails: false,
    notificationDetail: {},
    notiId: 0,
  },
  reducers: {
    hideDetails(state) {
      state.showNotiDetails = false;
    },
    showDetails(state, actions) {
      state.showNotiDetails = true;
      state.notiId = actions.payload;
    },
    setNotiDetail(state, actions) {
      // state.showNotiDetails = true;
      state.notificationDetail = actions.payload;
    },
  },
});

const adminDetailSlice = createSlice({
  // to maintain Admin details
  name: "adminDetails",
  initialState: {
    adminID: "",
    roleID: "",
    emailID: "",
    isActive: false,
    adminPrivilages: [],
    totalPrivileges: {},
    adminAccess: [],
    userName: "",
    module: "",
    ProfilePic: "",
  },
  reducers: {
    setAdminLoginDetails(state, actions) {
      state.adminID = actions.payload.adminID;
      if (actions.payload.privileges) {
        state.adminPrivilages = actions.payload.privileges;
      }
      if (actions.payload.roleID) {
        state.roleID = actions.payload.roleID;
      }
      if (actions.payload.emailID) {
        state.emailID = actions.payload.emailID;
      }
      if (actions.payload.isActive) {
        state.isActive = actions.payload.isActive;
      }
      if (actions.payload.userName) {
        console.log(actions.payload.userName, "NAME");
        state.userName = actions.payload.userName;
      }
      if (actions.payload.module) {
        state.module = actions.payload.module;
      }
      if (actions.payload.ProfilePic) {
        state.ProfilePic = actions.payload.ProfilePic;
      }
    },
    setTotalPrivileges(state, actions) {
      state.totalPrivileges = actions.payload;
    },
    setAdminAccess(state, actions) {
      state.adminAccess = actions.payload;
    },
  },
});

const filteredJobSlice = createSlice({
  name: "filteredJobs",
  initialState: {
    jobs: {
      showJobDetailPopup: false,
      filteredJobList: [],
      jobDetails: {},
    },
    Candidate: {
      filterCandidate: [],
      CandidateDetails: {},
      showCandidateDetailspopup: false,
    },
  },
  reducers: {
    setFilteredJobs(state, actions) {
      state.jobs.filteredJobList = actions.payload;
      state.Candidate.filterCandidate = actions.payload;
    },
    setJobDetails(state, actions) {
      state.jobs.jobDetails = actions.payload;
      state.Candidate.CandidateDetails = actions.payload;
    },
    setShowPopup(state, actions) {
      state.jobs.showJobDetailPopup = actions.payload;
      state.Candidate.showCandidateDetailspopup = actions.payload;
    },
  },
});

const commonPopupSlice = createSlice({
  name: "commonPopup",
  initialState: {
    employerDetails: {
      showPopup: false,
      Id: 1,
    },
    candidateDetails: {
      showPopup: false,
      Id: 1,
      type: "",
    },
    jobDetails: {
      showPopup: false,
      Id: 1,
    },
    FBleadDetails: {
      showPopup: false,
      Id: 1,
    },
  },
  reducers: {
    setShowPopup(state, actions) {
      switch (actions.payload.name) {
        case "candidateDetails":
          state.candidateDetails.showPopup = true;
          state.jobDetails.showPopup = false;
          state.employerDetails.showPopup = false;
          state.FBleadDetails.showPopup = false;
          state.candidateDetails.Id = actions.payload.id;
          state.candidateDetails.type = actions.payload.type;
          break;

        case "jobDetails":
          state.jobDetails.showPopup = true;
          state.candidateDetails.showPopup = false;
          state.employerDetails.showPopup = false;
          state.FBleadDetails.showPopup = false;
          state.jobDetails.Id = actions.payload.id;
          break;
        case "employerDetails":
          state.employerDetails.showPopup = true;
          state.candidateDetails.showPopup = false;
          state.jobDetails.showPopup = false;
          state.FBleadDetails.showPopup = false;
          state.employerDetails.Id = actions.payload.id;
          break;
        case "FBleadDetails":
          state.FBleadDetails.showPopup = true;
          state.employerDetails.showPopup = false;
          state.candidateDetails.showPopup = false;
          state.jobDetails.showPopup = false;
          state.FBleadDetails.Id = actions.payload.id;
          break;
        case "hide":
          state.employerDetails.showPopup = false;
          state.candidateDetails.showPopup = false;
          state.jobDetails.showPopup = false;
          state.FBleadDetails.showPopup = false;
          state.employerDetails.Id = actions.payload.id;
          break;

        default:
          state.employerDetails.showPopup = true;
          break;
      }
    },
  },
});

const filterEmployersslice = createSlice({
  name: "filterEmployers",
  initialState: {
    employers: {
      showemployerDetailPopup: false,
      // employerList: { details: [], totalPage: 0 },
      employerList: [],
      employerDetails: {},
    },
  },
  reducers: {
    setFilterEmployer(state, actions) {
      state.employers.employerList = actions.payload;
    },
    setEmployerDetails(state, actions) {
      state.employers.employerDetails = actions.payload;
    },
    setEmployerShowPopup(state, actions) {
      state.employers.showemployerDetailPopup = actions.payload;
    },
  },
});

const EmployerTimelineSlice = createSlice({
  name: "EmployerTimeline",
  initialState: {
    employerTimeline: {
      filter: {
        startDate: null,
        endDate: null,
        eventName: null,
        page: 0,
        empId: "",
      },
      showFilter: false,
      showAddTimeLine: false,
    },

    employerLeadTimeline: {
      filter: {
        startDate: null,
        endDate: null,
        eventName: null,
        page: 0,
        empLeadId: "",
      },
      showFilter: false,
      showAddTimeLine: false,
      showTimeline: false,
    },
  },
  reducers: {
    setEmployerTimelineFilter(state, actions) {
      state.employerTimeline.filter = actions.payload;
    },

    setEmployerTimelinePage(state, actions) {
      state.employerTimeline.filter.page = actions.payload;
    },

    setShowTimeEmpTimeline(state, actions) {
      state.employerTimeline.showFilter = actions.payload;
    },

    setEmployerLeadTimelineFilter(state, actions) {
      state.employerLeadTimeline.filter = actions.payload;
    },

    setEmpLeadTimelinePage(state, actions) {
      state.employerLeadTimeline.filter.page = actions.payload;
    },

    setShowEmpLeadTimeline(state, actions) {
      state.employerLeadTimeline.showTimeline = actions.payload;
    },
  },
});

const filterEmployerPaymentslice = createSlice({
  name: "filterEmployerPayment",
  initialState: {
    employersPayment: {
      // showemployerDetailPopup: false,
      // employerList: { details: [], totalPage: 0 },
      paymentList: [],
      employerPaymentDetails: {},
    },
  },
  reducers: {
    setFilterEmployerPayment(state, actions) {
      console.log(actions.payload);
      state.employersPayment.paymentList = actions.payload;
    },
    setEmployerPayment(state, actions) {
      state.employersPayment.employerPaymentDetails = actions.payload;
    },
    // setEmployerShowPopup(state, actions) {
    //   state.employers.showemployerDetailPopup = actions.payload;
    // },
  },
});
const filterCandidateLeadslice = createSlice({
  name: "filterCandidateLead",
  initialState: {
    CandidateLead: {
      // showemployerDetailPopup: false,
      // employerList: { details: [], totalPage: 0 },
      candidateLeadList: [],
      candidateLeadDetails: {},
      showCandidateLeadPopup: false,
    },
  },
  reducers: {
    setFilterCandidateList(state, actions) {
      console.log(actions.payload);

      state.CandidateLead.candidateLeadList = actions.payload;
    },
    setCandidateListDetails(state, actions) {
      state.CandidateLead.candidateLeadDetails = actions.payload;
    },
    setCandidateShowPopup(state, actions) {
      state.CandidateLead.showCandidateLeadPopup = actions.payload;
    },
  },
});
// Redux Store
const Store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    jobLink: jobLinkSlice.reducer,
    notifications: notiDetailsSlice.reducer,
    navBar: navBarSlice.reducer,
    filterJobs: filteredJobSlice.reducer,
    filterEmployers: filterEmployersslice.reducer,
    filterEmployerpayment: filterEmployerPaymentslice.reducer,
    filterCandidateLead: filterCandidateLeadslice.reducer,
    commonPopup: commonPopupSlice.reducer,
    adminDetails: adminDetailSlice.reducer,
    showHideDetails: showHideDetailsSlice.reducer,
    interviewListDetails: interviewListSlice.reducer,
    CandidateFunnelDetails: CandidateFunnelSlice.reducer,
    CandidateDailyTaskDetails: CandidateDailyTaskSlice.reducer,
    FbmetaLeadDetails: FBmetaLeadsSlice.reducer,
    CandidateJoinedListDetails: CandidateJoinedListSlice.reducer,
    JobLeadDetails: JobLeadsSlice.reducer,
    employerTimeline: EmployerTimelineSlice.reducer,
    FieldEmpLeads: FieldEmpLeadsSlice.reducer,
    CandidateRegistered: CandidateRegisteredSlice.reducer,
    RecruitmentLeads: CandidateRecruitmentLeads.reducer,
    CandidateLeadTable: CandidateLeadSlice.reducer,
    EmployerLeadDetails: EmployerLeadSlice.reducer,
    EmployerRegisterDetails: EmployerRegisterSlice.reducer,
    CandidateMidLevelDetails: CandidateMidLevelSlice.reducer,
    CandidateMidLevelsourcingDetails: CandidateMidLevelsourcingSlice.reducer,
    EmployerEnquiryDetails: EmployerEnquirySlice.reducer,
    JobsDetailsDetails: JobsDetailsSlice.reducer,
    unseenCountDetails: unseenDataCountSlice.reducer,
    RolesAndAccessDetails: RolesAndAccessSlice.reducer,
  },
});

// redux actions
export const counterActions = counterSlice.actions;
export const jobLinkAcions = jobLinkSlice.actions;
export const notiDetailsActions = notiDetailsSlice.actions;
export const navBarActions = navBarSlice.actions;
export const filteredJobsActions = filteredJobSlice.actions;
export const filteredEmployerActions = filterEmployersslice.actions;
export const filteredPaymentActions = filterEmployerPaymentslice.actions;
export const filterCandidateLeadsActions = filterCandidateLeadslice.actions;
export const commonPopupActions = commonPopupSlice.actions;
export const adminDetailsActions = adminDetailSlice.actions;
export const showHideDetailsActions = showHideDetailsSlice.actions;
export const interviewListActions = interviewListSlice.actions;
export const CandidateFunnelActions = CandidateFunnelSlice.actions;
export const CandidateDailyTaskActions = CandidateDailyTaskSlice.actions;
export const employerTimelineActions = EmployerTimelineSlice.actions;
export const FBmetaLeadsSliceActions = FBmetaLeadsSlice.actions;
export const CandidateJoinedListActions = CandidateJoinedListSlice.actions;
export const JobleadsSliceActions = JobLeadsSlice.actions;
export const FieldEmpLeadsSliceActions = FieldEmpLeadsSlice.actions;
export const CandidateRegisteredActions = CandidateRegisteredSlice.actions;
export const CandidateRecruitmentLeadsActions =
  CandidateRecruitmentLeads.actions;
export const CandidateLeadActions = CandidateLeadSlice.actions;
export const EmployerLeadActions = EmployerLeadSlice.actions;
export const EmployerRegisterActions = EmployerRegisterSlice.actions;
export const CandidateMidLevelActions = CandidateMidLevelSlice.actions;
export const CandidateMidLevelsourcingActions =
  CandidateMidLevelsourcingSlice.actions;
export const EmployerEnquiryActions = EmployerEnquirySlice.actions;
export const JobsDetailsActions = JobsDetailsSlice.actions;
export const unseenCountActions = unseenDataCountSlice.actions;
export const RolesAndAccessActions = RolesAndAccessSlice.actions;

export default Store;
