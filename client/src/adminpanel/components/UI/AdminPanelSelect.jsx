import React, { useState } from "react";

const AdminPanelSelect = (props) => {

  const [selectValue, setSelectValue] = useState(null);

  const handleSelect = (e) => {
    setSelectValue(e.target.value)
  }

  return (
    <div className="adminpanelselect">
      <div className="adminpanelselect-label">
        {props.label}
      </div>
      <div className="select-container">
        <select
          className="select-field"
          type='text'
          placeholder={props.placeholder}
          onChange={(event) => handleSelect(event)}
        >
          {
            props.options.map((option, index) => { 
              return props.selectedValueIndex === index ? 
                <option 
                  key={index} 
                  value={option}
                  selected
                >
                  {option}
                </option>
              : 
                <option 
                  key={index}
                  value={option}
                >
                  {option}
                </option>
            }
              
            )
          }
        </select>
      </div>
    </div>
  )
}

export default AdminPanelSelect;