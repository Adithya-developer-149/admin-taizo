/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  Autocomplete,
} from "@mui/material";

// import { GetCandidateLead, postCandidateLead } from "./Apiservice";
import {
  GetCandidateLeadform,
  GetPreferredCities,
  GetPrefferedAreaList,
  GetStates,
  postCandidateLead,
} from "../../../apiServices";
import { MyModal, dateFormate } from "../../../utility";
import ModalContainer from "../../../components/modal_popup";
import SuccessTick from "../../../components/success_tick";
// import { useNavigate } from "react-router-dom";
import "dayjs/locale/en-gb";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const CandidateLead = ({ oncloseLead, Reloadresponse }) => {
  const [candidateLead, setCandidateLead] = useState({
    DOB: { val: "", err: "" },
    whatsapp: { val: "", err: "" },
    mobileNumber: { val: "", err: "" },
    name: { val: "", err: "" },
    lastName: { val: "", err: "" },
    gender: { val: "", err: "" },
    state: { val: { state: "Tamil Nadu", id: 31 }, err: "" },
    city: { val: { city: "", id: 1 }, err: "" },
    area: { val: "", err: "" },
    experienced: { val: "", err: "" },
  });

  // const navigate = useNavigate();

  const [options, setOptions] = useState({
    state: { data: {}, list: [] },
    city: [],
    areas: [],
  });
  const [showSuccess, setShowSuccess] = useState(false);
  //  const [enableSubmit, setEnableSubmit] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [confirmationSubmit, setconfirmationSubmit] = useState(false);

  async function setCities(id) {
    try {
      const data = await GetPreferredCities();
      console.log(data, "citiessss");
      let options = data.data.map((el) => ({
        city: el.city,
        id: el.id,
      }));
      setOptions((prev) => ({
        ...prev,
        city: options,
      }));
    } catch (error) {
      // Handle the error as needed
      console.error("Error fetching cities:", error);
    }
  }

  async function setAreas(id) {
    try {
      const data = await GetPrefferedAreaList(id);
      // console.log(data, "areaaasss");
      setOptions((prev) => ({
        ...prev,
        areas: data.map((el) => el.areas),
      }));
    } catch (error) {
      // Handle the error as needed
      console.error("Error fetching cities:", error);
    }
  }

  async function setStates() {
    try {
      const data = await GetStates();
      console.log(data, "states");
      let options = data.results.map((el) => ({ state: el.state, id: el.id }));
      setOptions((prev) => ({
        ...prev,
        state: {
          ...prev.state,
          data: { data },
          list: options,
        }, // Update 'states' to 'state'
      }));
    } catch (error) {
      // Handle the error as needed
      console.error("Error fetching cities:", error);
    }
  }

  useEffect(() => {
    let stateId = candidateLead.state.val.id;
    setCities(stateId);
    // setStates();
    // alert("hii");
    if (candidateLead.city.val.id) {
      setAreas(candidateLead.city.val.id);
    }
  }, [candidateLead.city.val]);

  const handleCityChange = (event, value, reason) => {
    if (reason === "selectOption") {
      setCandidateLead((prev) => ({
        ...prev,
        city: { val: value, err: false },
      }));
    } else if (reason === "clear") {
      setCandidateLead((prev) => ({
        ...prev,
        city: { val: { city: "", id: "" }, err: "Preferred City is required" },
      }));
    }

    setCandidateLead((prev) => ({
      ...prev,
      area: { val: "", err: false },
    }));
  };

  const handleAreaChange = (event, value) => {
    setCandidateLead((prev) => ({
      ...prev,
      area: { val: value, err: false },
    }));
  };

  const handlestateChange = (event, value) => {
    console.log(value, "value");

    setCandidateLead((prev) => ({
      ...prev,
      state: { val: value, err: false },
    }));
  };

  const validateField = (field, value) => {
    switch (field) {
      case "mobileNumber":
        if (!value) {
          return "Mobile number is required";
        } else if (!/^\d{10}$/.test(value)) {
          return "Invalid mobile number";
        } else {
          return "";
        }

      case "city":
        if (!value || value === "") {
          return "Preferred city is required";
        } else {
          return "";
        }
      case "area":
        if (!value || value === "") {
          return "Preferred Area is required";
        } else {
          return "";
        }
      // No error
      // Add more cases for other fields if needed

      default:
        return "";
    }
  };
  // const handleValidation = () => {
  //   const newErrors = {};

  //   Object.keys(candidateLead).forEach((field) => {
  //     const value = candidateLead[field].val;
  //     const fieldValidation = validateField(field, value);
  //     newErrors[field].err = fieldValidation;
  //   });

  //   setCandidateLead((prevData) => {
  //     return {
  //       ...prevData,
  //       ...newErrors,
  //     };
  //   });
  // };
  const mobileRegex = /^[0-9]{10}$/;
  const handleFieldChange = (field, value) => {
    // Update the form data
    setCandidateLead((prevData) => ({
      ...prevData,
      [field]: { ...prevData[field], val: value, err: "" },
    }));

    switch (field) {
      case "mobileNumber":
        if (mobileRegex.test(value)) {
          setCandidateLead((prev) => ({
            ...prev,
            [field]: { ...prev[field], val: value, err: "" },
          }));
        } else {
          setCandidateLead((prev) => ({
            ...prev,
            [field]: { ...prev[field], err: "Enter Valid Number" },
          }));
          return;
        }
        break;
      case "whatsapp":
        if (mobileRegex.test(value)) {
          setCandidateLead((prev) => ({
            ...prev,
            [field]: { ...prev[field], val: value, err: "" },
          }));
        } else {
          setCandidateLead((prev) => ({
            ...prev,
            [field]: { ...prev[field], err: "Enter Valid Number" },
          }));
          return;
        }
        break;
      default:
        break;
    }
    if (
      (field === "mobileNumber" && value.length === 10) ||
      (field === "whatsapp" && value.length === 10)
    ) {
      GetCandidateLeadform(value)
        .then((data) => {
          if (data.statusCode !== 400) {
            setCandidateLead((prev) => ({
              ...prev,
              [field]: { ...prev[field], err: "Number already exists" },
            }));
            return;
          }
        })
        .catch((error) => {
          console.error("Error checking mobile number existence:", error);
        });
      return;
    }
  };

  const handleDateChange = (type, val) => {
    console.log(type, dateFormate(val.$d).trim());
    handleFieldChange("DOB", dateFormate(val.$d).trim());
  };
  const checkLeadfor = (e) => {
    let errors = 0;
    if (
      errors !== 0 ||
      candidateLead.mobileNumber.err ||
      candidateLead.whatsapp.err
    ) {
      return;
    }
    // Check if the mobile number field is empty
    if (!candidateLead.mobileNumber.val) {
      setCandidateLead((prev) => ({
        ...prev,
        mobileNumber: {
          ...prev.mobileNumber,
          err: "Mobile number is required",
        },
      }));
      errors++;
    } else {
      if (candidateLead.mobileNumber.val.length != 10) {
        setCandidateLead((prev) => ({
          ...prev,
          mobileNumber: {
            ...prev.mobileNumber,
            err: "Enter Valid Mobile Number",
          },
        }));
        errors++;
      } else {
        setCandidateLead((prev) => ({
          ...prev,
          mobileNumber: {
            ...prev.mobileNumber,
            err: "",
          },
        }));
      }
    }

    // validate whatsapp  number
    if (!candidateLead.whatsapp.val) {
      setCandidateLead((prev) => ({
        ...prev,
        whatsapp: {
          ...prev.whatsapp,
          err: "Whatsapp number is required",
        },
      }));
      errors++;
    } else {
      if (candidateLead.whatsapp.val.length != 10) {
        setCandidateLead((prev) => ({
          ...prev,
          whatsapp: {
            ...prev.whatsapp,
            err: "Enter Valid Whatsapp Number",
          },
        }));
        errors++;
      } else {
        setCandidateLead((prev) => ({
          ...prev,
          whatsapp: {
            ...prev.whatsapp,
            err: "",
          },
        }));
      }
    }

    // validate name
    if (!candidateLead.name.val) {
      setCandidateLead((prev) => ({
        ...prev,
        name: {
          ...prev.name,
          err: "Name is required",
        },
      }));
      errors++;
    } else {
      setCandidateLead((prev) => ({
        ...prev,
        name: {
          ...prev.name,
          err: "",
        },
      }));
    }
    if (!candidateLead.lastName.val) {
      setCandidateLead((prev) => ({
        ...prev,
        lastName: {
          ...prev.lastName,
          err: "Initial is required",
        },
      }));
      errors++;
    } else {
      setCandidateLead((prev) => ({
        ...prev,
        lastName: {
          ...prev.lastName,
          err: "",
        },
      }));
    }

    // Validate Preferred City
    const cityValidation = validateField("city", candidateLead.city.val.city);
    if (cityValidation !== "") {
      setCandidateLead((prev) => ({
        ...prev,
        city: { ...prev.city, err: cityValidation },
      }));
      errors++;
    } else {
      setCandidateLead((prev) => ({
        ...prev,
        city: { ...prev.city, err: "" },
      }));
    }

    // Validate Preferred Area if city is selected
    if (candidateLead.city.val.city !== "") {
      const areaValidation = validateField("area", candidateLead.area.val);
      if (areaValidation !== "") {
        setCandidateLead((prev) => ({
          ...prev,
          area: { ...prev.area, err: areaValidation },
        }));
        errors++;
      } else {
        setCandidateLead((prev) => ({
          ...prev,
          area: { ...prev.area, err: "" },
        }));
      }
    }

    if (errors != 0) return;
    setconfirmationSubmit(true);
  };
  const handleSubmit = (e, value) => {
    // e.preventDefault();

    setButtonDisabled(true);
    postCandidateLead(candidateLead).then((data) => {
      if (data.statusCode == 400) {
        alert("Mobile / Whatsapp Number Already Exits");
        return;
      }

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        // navigate("/CandidateTabsview#leads");
        oncloseLead();
      }, 3000);
      Reloadresponse();
      setButtonDisabled(false);
    });
    setButtonDisabled(false);
    setCandidateLead({
      DOB: { val: "", err: "" },
      whatsapp: { val: "", err: "" },
      mobileNumber: { val: "", err: "" },
      name: { val: "", err: "" },
      lastName: { val: "", err: "" },
      gender: { val: "", err: "" },
      state: { val: { state: "Tamil Nadu", id: 31 }, err: "" },
      city: { val: { city: "", id: 1 }, err: "" },
      experienced: { val: "", err: "" },
    });
  };

  const paperStyle = {
    padding: 20,
    // max: "90vh",
    hight: "auto",
    width: 450,
    margin: "30px auto",
    borderRadius: 10,
  };

  const gridStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div>
      <>
        <Grid container style={gridStyle}>
          {/* <Paper elevation={10} style={paperStyle}> */}
          {/* <Grid container style={gridStyle}>
             
            </Grid> */}
          <Grid
            container
            spacing={2}
            className="p-2"
            // style={{ padding: "0 20px", marginTop: 10 }}
          >
            <Grid item xs={12}>
              <TextField
                id="MobileNumber"
                label="Mobile Number"
                variant="outlined"
                placeholder="Enter The Mobile Number"
                fullWidth
                required
                type="text"
                inputProps={{ maxLength: 10 }}
                value={candidateLead.mobileNumber.val}
                onChange={(e) =>
                  handleFieldChange("mobileNumber", e.target.value)
                }
                // onChange={(e) => {
                //   const value = e.target.value;
                //   const isValid = numbersOnlyTest(value);

                //   setCandidateLead({
                //     ...candidateLead,
                //     mobileNumber: {
                //       val: value,
                //       err: isValid ? "" : "Only numbers are allowed",
                //     },
                //   });
                // }}
                error={!!candidateLead.mobileNumber.err}
                helperText={candidateLead.mobileNumber.err}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="whatsapp"
                label="Whatsapp Number"
                variant="outlined"
                placeholder="Enter The Whatsapp Number"
                fullWidth
                required
                type="text"
                inputProps={{ maxLength: 10 }}
                value={candidateLead.whatsapp.val}
                onChange={(e) => handleFieldChange("whatsapp", e.target.value)}
                error={!!candidateLead.whatsapp.err}
                helperText={candidateLead.whatsapp.err}
              />
            </Grid>
            <Grid item xs={12} gap={1} className="d-flex">
              <Grid item xs={12} sm={6}>
                <TextField
                  id="name"
                  label="Candidate Name "
                  variant="outlined"
                  placeholder="Enter The Candidate Name"
                  fullWidth
                  value={candidateLead.name.val}
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                  error={!!candidateLead.name.err}
                  helperText={candidateLead.name.err}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastName"
                  label="Father Name"
                  variant="outlined"
                  placeholder="Father Name"
                  fullWidth
                  value={candidateLead.lastName.val}
                  onChange={(e) =>
                    handleFieldChange("lastName", e.target.value)
                  }
                  error={!!candidateLead.lastName.err}
                  helperText={candidateLead.lastName.err}
                />
              </Grid>
            </Grid>

            {/* <Grid item xs={12}>
                <Autocomplete
                  id="free-solo-demo"
                  value={candidateLead.state.val}
                  onChange={(event, newValue) =>
                    handlestateChange(event, newValue)
                  }
                  defaultValue={"Tamil Nadu"}
                  getOptionLabel={(options) => options.state}
                  options={options.state.list} // Use the correct options array
                  helperText={candidateLead.state.err ? "select state" : ""}
                  renderInput={(params) => (
                    <TextField {...params} label="State" />
                  )}
                />
              </Grid> */}

            <Grid item xs={12}>
              <Autocomplete
                id="free-solo-demo"
                value={candidateLead.city.val}
                onChange={handleCityChange}
                options={options.city}
                getOptionLabel={(options) => options.city}
                // error={Boolean(candidateLead.city.err)}

                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Preferred Job City"
                    error={Boolean(candidateLead.city.err)}
                    helperText={
                      candidateLead.city.err ? candidateLead.city.err : ""
                    }
                  />
                )}
              />
            </Grid>

            {candidateLead.city.val.city != "" && (
              <Grid item xs={12}>
                <Autocomplete
                  id="free-solo-demo"
                  value={candidateLead.area.val}
                  onChange={handleAreaChange}
                  options={options.areas}
                  // getOptionLabel={(option) => option}

                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Preferred Job Area"
                      error={Boolean(candidateLead.area.err)}
                      helperText={
                        candidateLead.area.err ? candidateLead.area.err : ""
                      }
                    />
                  )}
                />
              </Grid>
            )}

            <Grid item xs={11.1}>
              <FormControl component="fieldset">
                <FormLabel component="legend" style={{ textAlign: "left" }}>
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  value={candidateLead.gender.val}
                  onChange={(e) => handleFieldChange("gender", e.target.value)}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <LocalizationProvider
                  adapterLocale="en-gb"
                  dateAdapter={AdapterDayjs}
                >
                  <DatePicker
                    label="DOB (DD-MM-YYYY)"
                    value={dayjs(candidateLead.DOB.val)}
                    name="DOB"
                    onChange={(value) => handleDateChange("DOB", value)}
                    required
                    slotProps={{
                      textField: {
                        helperText: candidateLead.DOB.err,
                        error: Boolean(candidateLead.DOB.err),
                      },
                    }}
                  />
                </LocalizationProvider>
              </FormControl>{" "}
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend" style={{ textAlign: "left" }}>
                  Experienced
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="experienced"
                  name="experienced"
                  value={candidateLead.experienced.val}
                  onChange={(e) =>
                    handleFieldChange("experienced", e.target.value)
                  }
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <div>
              <div className="d-none">
                <FormControl style={{ width: "100%", marginTop: "20px" }}>
                  <InputLabel id="demo-select-small-years">
                    Exp (Years)
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-years"
                    id="demo-select-small"
                    // value={age}
                    label="Years"
                    // onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0}>0 Year </MenuItem>
                    <MenuItem value={1}>1 Year </MenuItem>
                    <MenuItem value={2}>2 Years </MenuItem>
                    <MenuItem value={3}>3 Years </MenuItem>
                    <MenuItem value={4}>4 Years </MenuItem>
                    <MenuItem value={5}>5 Years </MenuItem>
                    <MenuItem value={6}>6 Years </MenuItem>
                    <MenuItem value={7}>7 Years </MenuItem>
                    <MenuItem value={8}>8 Years </MenuItem>
                    <MenuItem value={9}>9 Years </MenuItem>
                    <MenuItem value={10}>10 Years </MenuItem>
                  </Select>
                </FormControl>

                <FormControl style={{ width: "400px", marginTop: "20px" }}>
                  <InputLabel id="demo-select-small-months">
                    Exp (Months)
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-months"
                    id="demo-select-small"
                    // value={age}
                    label="Months"
                    // fullWidth
                    // onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0}>0 month </MenuItem>
                    <MenuItem value={1}>1 month </MenuItem>
                    <MenuItem value={2}>2 months </MenuItem>
                    <MenuItem value={3}>3 months </MenuItem>
                    <MenuItem value={4}>4 months </MenuItem>
                    <MenuItem value={5}>5 months </MenuItem>
                    <MenuItem value={6}>6 months </MenuItem>
                    <MenuItem value={7}>7 months </MenuItem>
                    <MenuItem value={8}>8 months </MenuItem>
                    <MenuItem value={9}>9 months </MenuItem>
                    <MenuItem value={10}>10 months </MenuItem>
                    <MenuItem value={11}>11 months </MenuItem>
                    <MenuItem value={12}>12 months </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <Grid
              item
              xs={12}
              className="d-flex justify-content-end"
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              <div>
                {" "}
                <Button
                  // type="submit"
                  variant="contained"
                  fullWidth
                  style={{ backgroundColor: "#169C50", color: "white" }}
                  onClick={() => checkLeadfor()}
                >
                  Submit
                </Button>
              </div>
            </Grid>
          </Grid>
          {/* </Paper> */}
          {confirmationSubmit && (
            <MyModal>
              <ModalContainer
                childComponent={
                  <>
                    <div>
                      <p>Are you sure you want to submit ? </p>
                    </div>
                    <div className="d-flex justify-content-end gap-3">
                      <div
                        className="btn btn-danger "
                        onClick={() => {
                          setconfirmationSubmit(false);
                        }}
                      >
                        Cancel
                      </div>
                      <div>
                        <button
                          className="btn btn-success"
                          onClick={(event) => handleSubmit()}
                          disabled={buttonDisabled}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </>
                }
              />{" "}
            </MyModal>
          )}
        </Grid>

        {showSuccess && (
          <MyModal>
            <ModalContainer
              zIndex={10000}
              childComponent={<SuccessTick HeadText="Successfully" />}
            />
          </MyModal>
        )}
      </>
    </div>
  );
};

export default CandidateLead;
