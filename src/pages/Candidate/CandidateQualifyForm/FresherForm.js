import React, { useState } from 'react';
import Select from "react-select";

function FresherForm() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [accordionOpen, setAccordionOpen] = useState(true); // State to control accordion collapse
  const [accordionOpen1, setAccordionOpen1] = useState(true);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
  };

  const handleNextButtonClick = () => {
    // Close Accordion Item #1
    setAccordionOpen(false);
  };
  const handleNextButtonClickRadio = () => {
    // Close Accordion Item #1
    setAccordionOpen1(false);
  };
const handleAccordionButtonClick = () => {
    if (accordionOpen) {
      // If the accordion is open, close it with a single click
      setAccordionOpen(false);
    } else {
      // If the accordion is closed, open it with a single click
      setAccordionOpen(true);
    }
  };

  const handleAccordionButtonClick1 = () => {
    if (accordionOpen1) {
      // If the accordion is open, close it with a single click
      setAccordionOpen1(false);
    } else {
      // If the accordion is closed, open it with a single click
      setAccordionOpen1(true);
    }
  };

  return (
    <div>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button" type="button" onClick={handleAccordionButtonClick} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Accordion Item #1
    </button>
  </h2>
  <div id="collapseOne" className={`accordion-collapse collapse ${accordionOpen ? 'show' : ''}`} data-bs-parent="#accordionExample">
    <div className="row">
      <div className="col-md-6 mb-4">
        <label htmlFor="positionDropdown" className="form-label">
          <strong>Position applying for?</strong>
        </label>
        <Select
          options={options}
          classNamePrefix="react-select"
          id="positionDropdown"
          styles={{
            control: (provided) => ({
              ...provided,
              border: "1px solid #ced4da",
              borderRadius: "4px",
              cursor: "pointer",
            }),
          }}
          isMulti
          value={selectedOptions}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 d-flex justify-content-end align-items-end">
        <button className="btn btn-sm btn-success mt-2" onClick={handleNextButtonClick}>Next</button>
      </div>
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button" type="button" onClick={handleAccordionButtonClick1} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
      Accordion Item #2
    </button>
  </h2>
  <div id="collapseTwo" className={`accordion-collapse collapse ${accordionOpen1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
    <div className="accordion-body">
      {/* Set of radio buttons */}
      <div className="form-check">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadio1" value="option1" />
        <label className="form-check-label" htmlFor="exampleRadio1">
          Option 1
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadio2" value="option2"  />
        <label className="form-check-label" htmlFor="exampleRadio2">
          Option 2
        </label>
      </div>
      
      {/* Next button */}
      <div className="col-md-6 d-flex justify-content-end align-items-end mt-2">
        <button className="btn btn-sm btn-success" onClick={handleNextButtonClickRadio}>Next</button>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default FresherForm;
